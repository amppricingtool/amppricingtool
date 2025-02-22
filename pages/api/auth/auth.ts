import NextAuth from "next-auth";
import { PrismaClient } from "@prisma/client/extension";
import { compare } from "bcryptjs";

import Credentials from "next-auth/providers/credentials";
const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const user = await prisma.users.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !(await compare(credentials.password, user.password))) {
          throw new Error("Invalid credentials");
        }

        return { id: user.id, email: user.email, role: user.role };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role as "MASTER" | "DIRECTOR";
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
