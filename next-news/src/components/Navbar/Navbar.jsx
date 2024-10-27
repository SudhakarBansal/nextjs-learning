"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white dark:text-gray-100 text-4xl font-semibold">
          NextNews
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-16">
          <Link
            href="/news"
            className="text-white text-xl dark:text-gray-100 hover:text-gray-300"
          >
            News
          </Link>
          <Link
            href="/archive"
            className="text-white text-xl dark:text-gray-100 hover:text-gray-300"
          >
            Archive
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white dark:text-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link
            href="/"
            className="block text-xl text-white dark:text-gray-100 hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-xl text-white dark:text-gray-100 hover:text-gray-300"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
