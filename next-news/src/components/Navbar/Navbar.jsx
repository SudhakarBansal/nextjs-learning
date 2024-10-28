"use client";
import Link from "next/link";
import { useState } from "react";
import navLinksList from "@/lib/navlink-list";
import NavLinks from "./NavLinks";
import MobileMenuButton from "./MobilieMenuButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-6 md:py-10 bg-transparent">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex w-full md:w-auto justify-between items-center mb-6 md:mb-0">
          <Link
            href="/"
            className="text-white dark:text-gray-100 text-3xl md:text-2xl font-semibold"
          >
            NextNews
          </Link>

          <MobileMenuButton isOpen={menuOpen} setIsOpen={setMenuOpen} />
        </div>

        {/* Desktop & Mobile Links */}
        <NavLinks menuOpen={menuOpen} />
      </div>
    </nav>
  );
}
