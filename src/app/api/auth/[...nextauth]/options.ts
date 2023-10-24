import type { NextAuthOptions } from "next-auth";
import LineProvider from "next-auth/providers/line";

export const options: NextAuthOptions = {
  providers: [
    LineProvider({
      authorization: { params: { scope: "openid profile email" } },
      clientId: process.env.LINE_CLIENT_ID as string,
      clientSecret: process.env.LINE_CLIENT_SECRET as string,
    })
  ]
}