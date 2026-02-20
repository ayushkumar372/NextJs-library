import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "./mongodb";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await connectDB();
        await User.findOneAndUpdate(
          { email: user.email?.toLowerCase() },
          {
            $setOnInsert: {
              email: user.email?.toLowerCase(),
              name: user.name,
              image: user.image,
            },
          },
          { upsert: true, new: true }
        );
      } catch (err) {
        console.error("signIn DB error:", err);
      }
      return true;
    },

    async session({ session }) {
      if (session.user?.email) {
        try {
          await connectDB();
          const dbUser = await User.findOne({
            email: session.user.email.toLowerCase(),
          }).lean<{ isPro: boolean }>();
          if (dbUser) {
            (session.user as { isPro?: boolean }).isPro = dbUser.isPro;
          }
        } catch (err) {
          console.error("session DB error:", err);
        }
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};
