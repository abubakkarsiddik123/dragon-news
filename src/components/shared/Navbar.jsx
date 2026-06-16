import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvater from "../../assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto gap-4 mt-6">
        <div></div>
      <ul className="flex justify-between items-center gap-4 text-gray-700">
        <li>
          <NavLink href={'/'}>Home</NavLink>{" "}
        </li>
        <li>
          <NavLink href={'/about-us'}>About</NavLink>{" "}
        </li>
        <li>
          <NavLink href={'/career'}>Career</NavLink>{" "}
        </li>
      </ul>
      <div className="flex justify-between items-center gap-2">
        <Image src={userAvater} width={50} height={50} alt="userAvater" />
        <button className="btn bg-gray-500 text-white"><Link href={'/login'}>Login</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
