'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { addCmsMenuItem, saveCmsUpload, upsertCmsPage } from '../../lib/cms';
import { clearAdminSession, setAdminSession } from '../../lib/adminAuth';

function stringValue(formData: FormData, key: string) {
  return String(formData.get(key) || '').trim();
}

export async function loginAction(formData: FormData) {
  const password = stringValue(formData, 'password');
  if (!setAdminSession(password)) {
    redirect('/admin?error=1');
  }

  redirect('/admin');
}

export async function logoutAction() {
  clearAdminSession();
  redirect('/admin');
}

export async function createPageAction(formData: FormData) {
  const page = upsertCmsPage({
    title: stringValue(formData, 'title'),
    slug: stringValue(formData, 'slug'),
    menuLabel: stringValue(formData, 'menuLabel'),
    section: stringValue(formData, 'section'),
    summary: stringValue(formData, 'summary'),
    body: stringValue(formData, 'body'),
    showInMenu: formData.get('showInMenu') === 'on',
  });

  revalidatePath('/');
  revalidatePath(`/${page.slug}`);
  redirect('/admin?saved=page');
}

export async function createMenuItemAction(formData: FormData) {
  addCmsMenuItem({
    label: stringValue(formData, 'label'),
    href: stringValue(formData, 'href'),
    order: Number(stringValue(formData, 'order')) || undefined,
  });

  revalidatePath('/');
  redirect('/admin?saved=menu');
}

export async function uploadMaterialAction(formData: FormData) {
  const file = formData.get('file');
  if (!(file instanceof File) || file.size === 0) {
    redirect('/admin?error=file');
  }

  await saveCmsUpload(file, stringValue(formData, 'title'), stringValue(formData, 'description'));
  revalidatePath('/admin');
  redirect('/admin?saved=file');
}
