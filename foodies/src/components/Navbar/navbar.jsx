"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logoImg from "../../../assets/logo.png";
import NavbarMobileMenu from "./navbar-mobile-menu";
import NavLinks from "./nav-links";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow dark:bg-gray-800 fixed top-0 w-full md:h-24 z-20">
      <div className="container px-6 py-3 h-full mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between m-1">
          <div className="flex flex-row items-center max-w-full">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
            >
              <Image src={logoImg} width={80} alt="logo" priority />
            </Link>
            <div className="px-8 font-bold text-3xl tracking-widest">
              NEXTLEVEL FOOD
            </div>
          </div>

          {/* Mobile menu button */}
          <NavbarMobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>

        {/* Mobile Menu open/close */}
        <div className={`${isOpen ? "block" : "hidden"} md:flex items-center`}>
          <NavLinks/>
        </div>
      </div>
    </nav>
  );
}
