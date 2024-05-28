import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENTID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENTID!,
      clientSecret: process.env.NAVER_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENTID!,
      clientSecret: process.env.KAKAO_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
