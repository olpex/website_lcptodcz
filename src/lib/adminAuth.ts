import { cookies } from 'next/headers';

const cookieName = 'lcptodcz_admin';

function adminSecret() {
  return process.env.ADMIN_PASSWORD || 'admin123';
}

export function isAdminAuthenticated() {
  return cookies().get(cookieName)?.value === adminSecret();
}

export function setAdminSession(password: string) {
  if (password !== adminSecret()) {
    return false;
  }

  cookies().set(cookieName, adminSecret(), {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
  });
  return true;
}

export function clearAdminSession() {
  cookies().delete(cookieName);
}
