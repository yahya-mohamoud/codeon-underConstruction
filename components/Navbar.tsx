"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home",     href: "#home" },
    { label: "About",    href: "#about" },
    { label: "Services", href: "#services" },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#001F3F]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.18)] py-3"
          : "bg-transparent py-5"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5" aria-label="Codeon Home">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C9A84C] to-[#e8c96d] flex items-center justify-center font-black text-[#001F3F] text-lg leading-none">
              C
            </div>
            <span className="text-xl font-extrabold text-white tracking-tight">
              Code<span className="text-[#C9A84C]">on</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-white/80 hover:text-white text-sm font-medium px-4 py-1.5 rounded-md hover:bg-white/10 transition-all duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="ml-2 text-sm font-bold text-[#001F3F] bg-gradient-to-r from-[#C9A84C] to-[#e8c96d] hover:from-[#e8c96d] hover:to-[#C9A84C] px-5 py-2 rounded-lg transition-all duration-200 hover:-translate-y-px hover:shadow-lg shadow-[0_2px_12px_rgba(201,168,76,0.3)]"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 pb-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={handleLinkClick}
                className="text-white/85 text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-white/10 transition-all"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="mt-1 text-sm font-bold text-[#001F3F] bg-gradient-to-r from-[#C9A84C] to-[#e8c96d] px-4 py-2.5 rounded-lg text-center"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
