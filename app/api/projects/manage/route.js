import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { authOptions } from '../../../../lib/auth';
import { deleteProjectByNum, updateProjectFromForm } from '../../../../lib/projects';

export const runtime = 'nodejs';

function projectAdminUrl(request) {
  return new URL('/projects', request.url);
}

function redirectWithMessage(request, key, value) {
  const url = projectAdminUrl(request);
  url.searchParams.set(key, value);
  return NextResponse.redirect(url, 303);
}

export async function POST(request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    const signInUrl = new URL('/api/auth/signin', request.url);
    signInUrl.searchParams.set('callbackUrl', '/projects');
    return NextResponse.redirect(signInUrl, 303);
  }

  try {
    const formData = await request.formData();
    const action = formData.get('projectAction');

    if (action === 'delete') {
      const num = await deleteProjectByNum(formData.get('num'));
      revalidatePath('/');
      revalidatePath('/projects');
      return redirectWithMessage(request, 'deleted', num);
    }

    if (action === 'update') {
      const num = await updateProjectFromForm(formData);
      revalidatePath('/');
      revalidatePath('/projects');
      return redirectWithMessage(request, 'updated', num);
    }

    throw new Error('Unsupported project action.');
  } catch (error) {
    const message = error?.code === 11000
      ? 'A project with that number already exists.'
      : error.message || 'Unable to update project.';

    return redirectWithMessage(request, 'error', message);
  }
}
