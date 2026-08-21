"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News & Events", href: "/news" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-gray-200 bg-white/90 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/school-logo.jpg"
            alt="Palace Royal International School"
            width={52}
            height={52}
            priority
          />

          <div>
            <h1
              className={`font-bold leading-none transition-colors duration-300 ${
                scrolled ? "text-[#6D0F2C]" : "text-white"
              }`}
            >
              Palace Royal
            </h1>

            <p
              className={`text-xs transition-colors duration-300 ${
                scrolled ? "text-[#7A3B4A]" : "text-white/80"
              }`}
            >
              International School
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-medium transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#D4AF37] after:transition-all hover:after:w-full ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/admissions"
          className="hidden rounded-full bg-[#D4AF37] px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] active:scale-95 md:block"
        >
          Apply Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden transition-colors ${
            scrolled ? "text-black" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#5A001A] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 text-white transition hover:text-[#D4AF37]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/admissions"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-[#D4AF37] px-6 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}