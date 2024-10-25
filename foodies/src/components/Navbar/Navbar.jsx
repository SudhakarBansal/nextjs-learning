"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logoImg from "../../../assets/logo.png";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent w-full lg:h-24 z-20 lg:px-32 lg:py-20">
      <div className="container px-6 py-3 h-full mx-auto lg:flex lg:justify-between lg:items-center">
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
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>

        {/* Mobile Menu open/close */}
        <div className={`${isOpen ? "block" : "hidden"} lg:flex items-center lg:relative`}>
          <NavLinks/>
        </div>
      </div>
    </nav>
  );
}
