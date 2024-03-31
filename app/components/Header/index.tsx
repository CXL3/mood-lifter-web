"use client";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-10 flex p-4">
      <div className="max-w-6xl mx-auto w-full flex justify-between items-center pt-6 px-4">
        <div className="flex items-center">
          <div className="md:hidden mr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none flex items-center justify-center p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  // "X" Close Icon
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger Menu Icon
                  <path d="M3 12h18M3 6h18m-18 12h18" />
                )}
              </svg>
            </button>
          </div>
          <h1
            className="font-sans text-3xl font-bold text-white"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <Link href="/" className="hover:text-yellow-200 transition-colors">
              Lifting my mood now
            </Link>
          </h1>
        </div>
        <nav className={`hidden md:block`}>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/about"
                className="text-white hover:text-yellow-200 transition-colors"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-white hover:text-yellow-200 transition-colors"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="text-white hover:text-yellow-200 transition-colors"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden absolute top-full py-2 w-48 bg-white rounded-lg shadow-xl left-3`}
        >
          <Link
            href="/about"
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="block px-4 py-2 text-black hover:bg-gray-200"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
