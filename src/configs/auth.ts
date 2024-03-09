import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import YandexProvider from 'next-auth/providers/yandex';
import GithubProvider from 'next-auth/providers/github';
import { createUser } from '../mongoose/handlers/User';



export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_CLIENT_SECRET as string
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn({ user, account }) {
      await createUser({
        name: user.name || '',
        email: user.email || '',
        image: user?.image || undefined,
        provider: account?.provider,
      });

      return true
    },
  }
  // secret: process.env.NEXTAUTH_SECRET as string,
};