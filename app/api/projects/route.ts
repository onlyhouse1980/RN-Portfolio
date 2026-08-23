import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../../lib/auth';
import { createProjectFromForm } from '../../../lib/projects';

export const runtime = 'nodejs';

export async function POST(request) {
  const session = await getServerSession(authOptions);
  const inputUrl = new URL('/projects/input', request.url);

  if (!session) {
    const signInUrl = new URL('/api/auth/signin', request.url);
    signInUrl.searchParams.set('callbackUrl', '/projects/input');
    return NextResponse.redirect(signInUrl, 303);
  }

  try {
    const formData = await request.formData();
    const num = await createProjectFromForm(formData);
    inputUrl.searchParams.set('created', num);
  } catch (error) {
    const message = error?.code === 11000
      ? 'A project with that number already exists.'
      : error.message || 'Unable to create project.';
    inputUrl.searchParams.set('error', message);
  }

  return NextResponse.redirect(inputUrl, 303);
}
