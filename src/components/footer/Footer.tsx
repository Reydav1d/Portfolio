import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="space-y-4">
      <footer className="p-4 bg-white-200 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link
            href="/about"
            className="hover:underline"
            target="_blank"
          >
            ReyDavid™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
          <li>
            <Link
              href="/about"
              className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm text-gray-500 hover:underline dark:text-gray-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
