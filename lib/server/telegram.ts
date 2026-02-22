export interface TelegramSendResult {
  ok: boolean;
  attempts: number;
  statusCode?: number;
  error?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isRetryableStatus(status: number): boolean {
  return status === 408 || status === 409 || status === 425 || status === 429 || status >= 500;
}

export function escapeTelegramHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

export async function sendTelegramMessageWithRetry(
  message: string
): Promise<TelegramSendResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return {
      ok: false,
      attempts: 0,
      error: 'telegram_not_configured',
    };
  }

  const maxAttempts = 3;
  let lastError = 'unknown_error';
  let lastStatusCode: number | undefined;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000 + attempt * 1000);

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
        signal: controller.signal,
      });

      lastStatusCode = response.status;
      if (response.ok) {
        const body = (await response.json()) as { ok?: boolean };
        if (body.ok) {
          clearTimeout(timeoutId);
          return { ok: true, attempts: attempt, statusCode: response.status };
        }
      }

      const telegramError = await response.text();
      lastError = `telegram_http_${response.status}`;

      if (!isRetryableStatus(response.status) || attempt === maxAttempts) {
        clearTimeout(timeoutId);
        return {
          ok: false,
          attempts: attempt,
          statusCode: response.status,
          error: telegramError || lastError,
        };
      }
    } catch (error) {
      lastError =
        error instanceof Error
          ? error.name === 'AbortError'
            ? 'telegram_timeout'
            : error.message
          : 'telegram_fetch_error';

      if (attempt === maxAttempts) {
        clearTimeout(timeoutId);
        return {
          ok: false,
          attempts: attempt,
          statusCode: lastStatusCode,
          error: lastError,
        };
      }
    } finally {
      clearTimeout(timeoutId);
    }

    await sleep(300 * attempt);
  }

  return {
    ok: false,
    attempts: maxAttempts,
    statusCode: lastStatusCode,
    error: lastError,
  };
}
