import { randomUUID } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import {
  findUnexpectedLeadFields,
  type LeadFieldErrors,
  validateLeadPayload,
} from '@/lib/lead-form';
import {
  checkRateLimit,
  getClientIp,
  getClientIpHash,
  isTrustedOrigin,
  LEAD_CSRF_COOKIE_NAME,
  verifyCsrfToken,
} from '@/lib/server/request-security';
import {
  escapeTelegramHtml,
  sendTelegramMessageWithRetry,
} from '@/lib/server/telegram';

export const dynamic = 'force-dynamic';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_REQUEST_BODY_LENGTH = 10_000;

type ApiErrorCode =
  | 'FORBIDDEN_ORIGIN'
  | 'RATE_LIMITED'
  | 'INVALID_PAYLOAD'
  | 'UNEXPECTED_FIELDS'
  | 'VALIDATION_ERROR'
  | 'CSRF_MISMATCH'
  | 'TELEGRAM_NOT_CONFIGURED'
  | 'TELEGRAM_UNAVAILABLE'
  | 'INTERNAL_ERROR';

interface ErrorPayload {
  ok: false;
  error: {
    code: ApiErrorCode;
    message: string;
    fields?: LeadFieldErrors;
  };
}

function errorResponse(
  status: number,
  code: ApiErrorCode,
  message: string,
  fields?: LeadFieldErrors
) {
  return NextResponse.json<ErrorPayload>(
    {
      ok: false,
      error: { code, message, fields },
    },
    { status }
  );
}

function getIntentLabel(intent: 'demo' | 'one-pager') {
  return intent === 'one-pager' ? 'One-pager + демо' : 'Демо';
}

function buildTelegramMessage(data: {
  requestId: string;
  intent: 'demo' | 'one-pager';
  name: string;
  company: string;
  email: string;
  phone: string;
  comment: string;
}) {
  const timestamp = new Date().toISOString();
  const comment = data.comment || '—';

  return [
    '<b>Новая заявка с сайта CORPRAG</b>',
    '',
    `<b>Тип:</b> ${escapeTelegramHtml(getIntentLabel(data.intent))}`,
    `<b>Имя:</b> ${escapeTelegramHtml(data.name)}`,
    `<b>Компания:</b> ${escapeTelegramHtml(data.company)}`,
    `<b>Email:</b> ${escapeTelegramHtml(data.email)}`,
    `<b>Телефон:</b> ${escapeTelegramHtml(data.phone)}`,
    `<b>Комментарий:</b> ${escapeTelegramHtml(comment)}`,
    '',
    `<b>Время:</b> ${escapeTelegramHtml(timestamp)}`,
    `<b>Request ID:</b> <code>${escapeTelegramHtml(data.requestId)}</code>`,
  ].join('\n');
}

export async function POST(request: NextRequest) {
  const requestId = randomUUID();
  const ip = getClientIp(request);
  const ipHash = getClientIpHash(ip);

  if (!isTrustedOrigin(request)) {
    console.warn('[lead] blocked_untrusted_origin', { requestId, ipHash });
    return errorResponse(403, 'FORBIDDEN_ORIGIN', 'Неверный источник запроса.');
  }

  const rateLimit = checkRateLimit(
    `lead:${ipHash}`,
    RATE_LIMIT_MAX_REQUESTS,
    RATE_LIMIT_WINDOW_MS
  );
  if (!rateLimit.allowed) {
    console.warn('[lead] rate_limited', {
      requestId,
      ipHash,
      retryAfterSeconds: rateLimit.retryAfterSeconds,
    });
    const response = errorResponse(
      429,
      'RATE_LIMITED',
      'Слишком много запросов. Попробуйте чуть позже.'
    );
    response.headers.set('Retry-After', String(rateLimit.retryAfterSeconds));
    return response;
  }

  const cookieCsrfToken = request.cookies.get(LEAD_CSRF_COOKIE_NAME)?.value ?? '';

  let rawBody = '';
  try {
    rawBody = await request.text();
  } catch {
    return errorResponse(400, 'INVALID_PAYLOAD', 'Не удалось прочитать тело запроса.');
  }

  if (!rawBody || rawBody.length > MAX_REQUEST_BODY_LENGTH) {
    return errorResponse(400, 'INVALID_PAYLOAD', 'Некорректный размер запроса.');
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(rawBody);
  } catch {
    return errorResponse(400, 'INVALID_PAYLOAD', 'Некорректный JSON.');
  }

  if (!parsedBody || typeof parsedBody !== 'object' || Array.isArray(parsedBody)) {
    return errorResponse(400, 'INVALID_PAYLOAD', 'Ожидался JSON-объект.');
  }

  const payloadRecord = parsedBody as Record<string, unknown>;
  const unexpectedFields = findUnexpectedLeadFields(payloadRecord);
  if (unexpectedFields.length > 0) {
    console.warn('[lead] unexpected_fields', {
      requestId,
      ipHash,
      unexpectedCount: unexpectedFields.length,
    });
    return errorResponse(
      400,
      'UNEXPECTED_FIELDS',
      'Запрос содержит неподдерживаемые поля.'
    );
  }

  const validationResult = validateLeadPayload({
    intent: payloadRecord.intent,
    name: payloadRecord.name,
    company: payloadRecord.company,
    email: payloadRecord.email,
    phone: payloadRecord.phone,
    comment: payloadRecord.comment,
    privacy: payloadRecord.privacy,
    csrfToken: payloadRecord.csrfToken,
    website: payloadRecord.website,
  });

  if (!validationResult.ok || !validationResult.data) {
    console.warn('[lead] validation_error', {
      requestId,
      ipHash,
      fieldCount: Object.keys(validationResult.errors).length,
    });
    return errorResponse(
      422,
      'VALIDATION_ERROR',
      'Проверьте корректность заполнения полей.',
      validationResult.errors
    );
  }

  if (validationResult.data.website) {
    console.info('[lead] honeypot_tripped', { requestId, ipHash });
    return NextResponse.json({ ok: true, requestId });
  }

  if (!verifyCsrfToken(validationResult.data.csrfToken, cookieCsrfToken)) {
    console.warn('[lead] csrf_mismatch', { requestId, ipHash });
    return errorResponse(
      403,
      'CSRF_MISMATCH',
      'Сессия формы устарела. Обновите страницу и попробуйте снова.'
    );
  }

  if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.error('[lead] telegram_not_configured', { requestId, ipHash });
    return errorResponse(
      503,
      'TELEGRAM_NOT_CONFIGURED',
      'Приём заявок временно недоступен. Попробуйте позже.'
    );
  }

  const telegramMessage = buildTelegramMessage({
    requestId,
    intent: validationResult.data.intent,
    name: validationResult.data.name,
    company: validationResult.data.company,
    email: validationResult.data.email,
    phone: validationResult.data.phone,
    comment: validationResult.data.comment,
  });

  const telegramResult = await sendTelegramMessageWithRetry(telegramMessage);
  if (!telegramResult.ok) {
    console.error('[lead] telegram_send_failed', {
      requestId,
      ipHash,
      attempts: telegramResult.attempts,
      statusCode: telegramResult.statusCode ?? null,
      reason: telegramResult.error ?? 'unknown',
    });
    return errorResponse(
      502,
      'TELEGRAM_UNAVAILABLE',
      'Не удалось отправить заявку. Повторите попытку через минуту.'
    );
  }

  console.info('[lead] accepted', {
    requestId,
    ipHash,
    intent: validationResult.data.intent,
    hasComment: Boolean(validationResult.data.comment),
    commentLength: validationResult.data.comment.length,
  });

  return NextResponse.json({ ok: true, requestId });
}

export async function GET() {
  return errorResponse(405, 'INVALID_PAYLOAD', 'Используйте метод POST.');
}
