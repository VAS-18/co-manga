import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./app/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { compareSync } from "bcrypt-ts-edge";
import type { NextAuthConfig } from "next-auth";


export const config = {
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials == null) {
          return null;
        }

        //Find user in database
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email as string,
          },
        });

        //Check if user exists and if the password matches
        if (user && user.password) {
          const isMatch = compareSync(
            credentials.password as string,
            user.password
          );
          if (isMatch) {
            return {
              id: user.id,
              name: user.id,
              email: user.email,
              role: user.role,
            };
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, user, trigger, token }: any) {
      //Set the userId from the token
      session.user.id = token.sub;
      session.user.role = token.role;
      session.user.name = token.name;

      //If there is an update, set the username
      if (trigger === "update") {
        session.user.name = user.name;
      }
      return session;
    },

    async jwt({token,user}: any){
        //Assign User fields to token

        if(user){
          token.user = user.role;
        }

        //if user has no name use the email
        if(user.name === 'NO_NAME'){
          token.name = user.email!.split('@')[0];

          //Update the database to reflect the token name
          await prisma.user.update({
            where: {id: user.id},
            data: {name: token.name}
          })
        }

        return token;
    }

  },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(config);
