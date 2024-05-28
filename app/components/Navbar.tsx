"use client";

import Link from "next/link";
import { useState } from "react";
import LogoutBtn from "./LogoutBtn";
import LoginBtn from "./LoginBtn";
import { Session } from "next-auth";

interface NavbarProps {
  session: Session | null;
}

export default function Navbar({ session }: NavbarProps) {
  const [clickedItem, setClickedItem] = useState<string | null>(null);

  return (
    <div className="bg-white flex items-center justify-between p-4 border-1 border-solid border-customGray">
      <div className="flex">
        <Link
          href="/"
          className={`${clickedItem === "inminute" ? "text-black" : ""}`}
          onClick={() => setClickedItem("inminute")}
        >
          <img className="w-36 mx-8" src="/logo_transparent.svg" alt="Logo" />
        </Link>

        <ul className="flex items-center">
          <li
            className={`mx-8 ${clickedItem === "about" ? "text-pink-300" : ""}`}
            onClick={() => setClickedItem("about")}
          >
            <Link href="/about">about</Link>
          </li>
          <li>‧</li>
          <li
            className={`mx-8 ${clickedItem === "list" ? "text-pink-300" : ""}`}
            onClick={() => setClickedItem("list")}
          >
            <Link href="/list">list</Link>
          </li>
        </ul>
      </div>

      {session ? (
        <span>
          {session.user?.name}
          <LogoutBtn />
        </span>
      ) : (
        <LoginBtn />
      )}
    </div>
  );
}
