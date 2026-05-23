"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (path) =>
    `block px-4 py-3 rounded-lg transition font-medium ${
      pathname === path
        ? "bg-[#6D5DF6] text-white"
        : "text-gray-700 hover:text-[#6D5DF6] hover:bg-[#EDEBFF]"
    }`;

  return (
    <header className="bg-[#FEF9FF] shadow-sm sticky top-0 z-40">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 lg:py-5">

      {/* LOGO */}
<Link href="/" className="flex items-center gap-4 whitespace-nowrap">
 

  <div className="leading-tight">
    <h1 className="text-2xl lg:text-3xl font-extrabold italic text-[#6D5DF6] ">
      Balloonzaa
    </h1>
    <p className="text-sm lg:text-base text-gray-500">
      Balloon & Party Decor
    </p>
  </div>
</Link>



        {/* DESKTOP NAV (ONLY ≥1024px) */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link href="/" className={navLinkClass("/")}>Home</Link>
          <Link href="/gallery" className={navLinkClass("/gallery")}>Gallery</Link>
          <Link href="/pricing" className={navLinkClass("/pricing")}>Pricing</Link>
          <Link href="/areas" className={navLinkClass("/areas")}>Areas</Link>
          <Link href="/about" className={navLinkClass("/about")}>About us</Link>
          <Link href="/contact" className={navLinkClass("/contact")}>Contact</Link>
          
          <Link href="/blog" className={navLinkClass("/blog")}>Blog</Link>

          <a
            href="tel:+919582060618"
            className="ml-3 bg-[#6D5DF6] hover:bg-[#5b4fe0] text-white px-4 py-2 rounded-full text-sm font-semibold shadow transition"
          >
            <span className="font-bold text-lg">📞Call 9582060618</span>
          </a>
        </nav>

        {/* HAMBURGER (MOBILE + TABLET) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-3xl text-[#6D5DF6]"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="fixed right-0 top-0 h-full w-72 bg-white shadow-lg p-5 animate-slideIn"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MENU HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-[#6D5DF6]">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl"
              >
                ✕
              </button>
            </div>

            {/* LINKS */}
            <div className="space-y-2">
              <Link href="/" onClick={() => setMenuOpen(false)} className={navLinkClass("/")}>Home</Link>
              <Link href="/gallery" onClick={() => setMenuOpen(false)} className={navLinkClass("/gallery")}>Gallery</Link>
              <Link href="/pricing" onClick={() => setMenuOpen(false)} className={navLinkClass("/pricing")}>Pricing</Link>
              <Link href="/areas" onClick={() => setMenuOpen(false)} className={navLinkClass("/areas")}>Areas</Link>
              <Link href="/about" onClick={() => setMenuOpen(false)} className={navLinkClass("/about")}>About us</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass("/contact")}>Contact</Link>
            </div>

            {/* CALL BUTTON */}
            <a
              href="tel:+919582060618"
              className="mt-6 block text-center bg-[#6D5DF6] hover:bg-[#5b4fe0] text-white px-5 py-3 rounded-full font-semibold shadow transition"
            >
              📞 Call: 9582060618
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
