"use client";
import Link from "next/link";
import React, {useState} from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="
          flex flex-wrap
          rounded-lg
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg
          dark:bg-gray-800
        "
    >
      <div>
        <Link href="/">
          ReyDavid
        </Link>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        onClick={toggleMenu}
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          menuOpen ? "block" : "hidden"
        }`}
        id="menu"
      >
        <ul
          className="
              pt-4
              text-base text-gray-500
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <li>
            <Link className="md:p-4 py-2 block hover:underline text-gray-400" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="md:p-4 py-2 block hover:underline text-gray-400"
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="md:p-4 py-2 block text-gray-400 hover:underline"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="md:p-4 py-2 block hover:underline text-blue-500"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
