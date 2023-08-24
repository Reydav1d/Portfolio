import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <nav>
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
