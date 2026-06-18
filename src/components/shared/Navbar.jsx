"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvater from "../../assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user");
  return (
    <div className="flex justify-between container mx-auto gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center gap-4 text-gray-700">
        <li>
          <NavLink href={"/"}>Home</NavLink>{" "}
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>{" "}
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>{" "}
        </li>
      </ul>
      {isPending ? (
        <span className="loading loading-ring loading-xl mr-10"></span>
      ) : user ? (
        <div className="flex justify-between items-center gap-2">
          <h2>hello, {user.name}</h2>
          <Image
            src={user?.image || userAvater}
            width={50}
            height={50}
            alt="userAvater"
            className="rounded-full"
          />
          <button
            className="btn bg-purple-500 text-white"
            onClick={async ()=> await authClient.signOut()}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
