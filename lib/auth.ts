import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

function secureCompare(value: string, expected: string) {
  return value === expected;
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || 'portfolio-project-input-local-secret',
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Project Admin',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const username = credentials?.username || '';
        const password = credentials?.password || '';

        if (
          secureCompare(username, 'admin')
          && secureCompare(password, 'Tyrell11!')
        ) {
          return { id: 'admin', name: 'admin' };
        }

        return null;
      },
    }),
  ],
};
