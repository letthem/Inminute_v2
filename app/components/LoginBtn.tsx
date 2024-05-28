"use client";

import { signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  return (
    <button
      className="mx-12 rounded-md bg-gray-200 w-24 h-11"
      onClick={() => {
        signIn();
      }}
    >
      로그인
    </button>
  );
}
