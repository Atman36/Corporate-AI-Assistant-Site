export const LEAD_INTENTS = ['demo', 'one-pager'] as const;

export type LeadIntent = (typeof LEAD_INTENTS)[number];

export const LEAD_ALLOWED_FIELDS = [
  'intent',
  'name',
  'company',
  'email',
  'phone',
  'comment',
  'privacy',
  'csrfToken',
  'website',
] as const;

export type LeadAllowedField = (typeof LEAD_ALLOWED_FIELDS)[number];

export type LeadFieldErrors = Partial<Record<LeadAllowedField, string>>;

export interface LeadPayloadInput {
  intent: unknown;
  name: unknown;
  company: unknown;
  email: unknown;
  phone: unknown;
  comment: unknown;
  privacy: unknown;
  csrfToken: unknown;
  website?: unknown;
}

export interface LeadPayloadNormalized {
  intent: LeadIntent;
  name: string;
  company: string;
  email: string;
  phone: string;
  comment: string;
  privacy: true;
  csrfToken: string;
  website: string;
}

export interface LeadValidationResult {
  ok: boolean;
  errors: LeadFieldErrors;
  data?: LeadPayloadNormalized;
}

const MAX_NAME_LENGTH = 80;
const MAX_COMPANY_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_PHONE_LENGTH = 24;
const MAX_COMMENT_LENGTH = 1200;
const MAX_CSRF_TOKEN_LENGTH = 128;
const MIN_CSRF_TOKEN_LENGTH = 32;

const EMAIL_REGEX =
  /^(?!.*\.\.)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const MEANINGFUL_CHAR_REGEX = /[A-Za-zА-Яа-яЁё0-9]/g;

function toSafeString(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }
  if (value == null) {
    return '';
  }
  return String(value);
}

function normalizeText(value: unknown): string {
  return toSafeString(value)
    .replace(/[\u0000-\u001f\u007f]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function isMeaningfulText(value: string, minChars: number): boolean {
  const meaningfulChars = value.match(MEANINGFUL_CHAR_REGEX) ?? [];
  return meaningfulChars.length >= minChars;
}

function normalizePhone(rawPhone: unknown): string {
  const cleaned = normalizeText(rawPhone).replace(/[^\d+()\- ]/g, '');
  if (!cleaned) {
    return '';
  }
  const digitsOnly = cleaned.replace(/\D/g, '');

  // Common RU normalization: local 8XXXXXXXXXX -> +7XXXXXXXXXX.
  if (digitsOnly.length === 11 && digitsOnly.startsWith('8')) {
    return `+7${digitsOnly.slice(1)}`;
  }

  if (cleaned.startsWith('+')) {
    return `+${digitsOnly}`;
  }

  return `+${digitsOnly}`;
}

function normalizeEmail(rawEmail: unknown): string {
  return normalizeText(rawEmail).toLowerCase();
}

function normalizeIntent(rawIntent: unknown): LeadIntent | null {
  const intent = normalizeText(rawIntent);
  return LEAD_INTENTS.includes(intent as LeadIntent)
    ? (intent as LeadIntent)
    : null;
}

function normalizePrivacy(rawPrivacy: unknown): boolean {
  return rawPrivacy === true || rawPrivacy === 'true' || rawPrivacy === 'on' || rawPrivacy === '1';
}

export function findUnexpectedLeadFields(
  input: Record<string, unknown>
): string[] {
  const allowlist = new Set<string>(LEAD_ALLOWED_FIELDS);
  return Object.keys(input).filter((key) => !allowlist.has(key));
}

export function validateLeadPayload(input: LeadPayloadInput): LeadValidationResult {
  const errors: LeadFieldErrors = {};

  const intent = normalizeIntent(input.intent);
  const name = normalizeText(input.name);
  const company = normalizeText(input.company);
  const email = normalizeEmail(input.email);
  const phone = normalizePhone(input.phone);
  const comment = normalizeText(input.comment);
  const privacy = normalizePrivacy(input.privacy);
  const csrfToken = normalizeText(input.csrfToken);
  const website = normalizeText(input.website ?? '');

  if (!intent) {
    errors.intent = 'Выберите корректный тип запроса.';
  }

  if (!name || name.length < 2 || !isMeaningfulText(name, 2)) {
    errors.name = 'Укажите имя (минимум 2 символа).';
  } else if (name.length > MAX_NAME_LENGTH) {
    errors.name = `Имя должно быть не длиннее ${MAX_NAME_LENGTH} символов.`;
  }

  if (!company || company.length < 2 || !isMeaningfulText(company, 2)) {
    errors.company = 'Укажите название компании.';
  } else if (company.length > MAX_COMPANY_LENGTH) {
    errors.company = `Компания должна быть не длиннее ${MAX_COMPANY_LENGTH} символов.`;
  }

  if (!email) {
    errors.email = 'Укажите email.';
  } else if (email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
    errors.email = 'Введите корректный email.';
  }

  if (!phone) {
    errors.phone = 'Укажите телефон.';
  } else {
    const digits = phone.replace(/\D/g, '');
    if (
      !phone.startsWith('+') ||
      digits.length < 10 ||
      digits.length > 15 ||
      phone.length > MAX_PHONE_LENGTH
    ) {
      errors.phone = 'Введите корректный телефон.';
    }
  }

  if (comment.length > MAX_COMMENT_LENGTH) {
    errors.comment = `Комментарий должен быть не длиннее ${MAX_COMMENT_LENGTH} символов.`;
  } else if (comment && !isMeaningfulText(comment, 5)) {
    errors.comment = 'Добавьте чуть больше деталей в комментарий.';
  }

  if (!privacy) {
    errors.privacy = 'Нужно согласие на обработку персональных данных.';
  }

  if (!csrfToken) {
    errors.csrfToken = 'Не удалось подтвердить защищённую сессию формы.';
  } else if (
    csrfToken.length < MIN_CSRF_TOKEN_LENGTH ||
    csrfToken.length > MAX_CSRF_TOKEN_LENGTH
  ) {
    errors.csrfToken = 'Сессия формы устарела, обновите страницу и повторите отправку.';
  }

  if (website.length > 0) {
    errors.website = 'Некорректные данные формы.';
  }

  if (Object.keys(errors).length > 0 || !intent) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    errors: {},
    data: {
      intent,
      name,
      company,
      email,
      phone,
      comment,
      privacy: true,
      csrfToken,
      website,
    },
  };
}
