import NextAuth, { DefaultSession, User } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import prisma from "@/prisma/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { UserRole } from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
  role: UserRole;
};
declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    // async signIn({ user }) {
    //   if (!user.id) return false;
    //   const existingUser = await getUserById(user.id);
    //   if (!existingUser || !existingUser.emailVerified) return false;
    //   return true;
    // },
    async session({ token, session }) {
      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
