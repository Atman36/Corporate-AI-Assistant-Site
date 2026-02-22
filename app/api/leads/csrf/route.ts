import { NextResponse } from 'next/server';
import {
  generateCsrfToken,
  LEAD_CSRF_COOKIE_NAME,
} from '@/lib/server/request-security';

export const dynamic = 'force-dynamic';

export async function GET() {
  const csrfToken = generateCsrfToken();

  const response = NextResponse.json({ ok: true, csrfToken });
  response.headers.set('Cache-Control', 'no-store');
  response.cookies.set({
    name: LEAD_CSRF_COOKIE_NAME,
    value: csrfToken,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 30,
  });

  return response;
}
