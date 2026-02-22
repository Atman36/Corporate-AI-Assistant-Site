import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import type { NextRequest } from 'next/server';

export const LEAD_CSRF_COOKIE_NAME = 'corprag-csrf';

const globalWithRateLimitStore = globalThis as typeof globalThis & {
  __corpragLeadRateLimitStore?: Map<string, { count: number; resetAt: number }>;
};

const rateLimitStore =
  globalWithRateLimitStore.__corpragLeadRateLimitStore ??
  new Map<string, { count: number; resetAt: number }>();

if (!globalWithRateLimitStore.__corpragLeadRateLimitStore) {
  globalWithRateLimitStore.__corpragLeadRateLimitStore = rateLimitStore;
}

export function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') ?? 'unknown';
}

export function getClientIpHash(ip: string): string {
  return createHash('sha256').update(ip).digest('hex').slice(0, 16);
}

export function generateCsrfToken(): string {
  return randomBytes(32).toString('hex');
}

export function verifyCsrfToken(formToken: string, cookieToken: string): boolean {
  if (!formToken || !cookieToken || formToken.length !== cookieToken.length) {
    return false;
  }
  return timingSafeEqual(Buffer.from(formToken), Buffer.from(cookieToken));
}

export function isTrustedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  if (!origin) {
    return false;
  }

  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  if (!host) {
    return false;
  }

  const protocol = request.headers.get('x-forwarded-proto') ?? 'https';
  const expectedOrigin = `${protocol}://${host}`;
  if (origin === expectedOrigin) {
    return true;
  }

  const extraOrigins = (process.env.FORM_ALLOWED_ORIGINS ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  return extraOrigins.includes(origin);
}

export function checkRateLimit(
  key: string,
  maxRequests: number,
  windowMs: number
): { allowed: boolean; retryAfterSeconds: number; remaining: number } {
  const now = Date.now();
  const existing = rateLimitStore.get(key);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + windowMs });
    return {
      allowed: true,
      retryAfterSeconds: Math.ceil(windowMs / 1000),
      remaining: maxRequests - 1,
    };
  }

  if (existing.count >= maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
      remaining: 0,
    };
  }

  existing.count += 1;
  rateLimitStore.set(key, existing);

  return {
    allowed: true,
    retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    remaining: maxRequests - existing.count,
  };
}
