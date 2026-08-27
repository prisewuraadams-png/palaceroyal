"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close mobile menu when screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
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
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-gray-200 bg-white/95 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8 xl:px-12">

        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <Image
  src="/images/news/school-logo.jpg"
  alt="Palace Royal International School"
  width={220}
  height={70}
  priority
  className="h-12 w-auto object-contain sm:h-14 md:h-16"
/>

          <div className="min-w-0">
            <h1
              className={`text-sm font-bold leading-none transition-colors duration-300 sm:text-base md:text-lg ${
                scrolled ? "text-[#6D0F2C]" : "text-white"
              }`}
            >
              Palace Royal
            </h1>

            <p
              className={`mt-1 text-[9px] leading-none transition-colors duration-300 sm:text-[10px] md:text-xs ${
                scrolled ? "text-[#7A3B4A]" : "text-white/80"
              }`}
            >
              International School
            </p>
          </div>
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
            Visible from large tablets / desktop
        ====================================================== */}

        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative whitespace-nowrap text-sm font-medium transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#D4AF37] after:transition-all hover:after:w-full xl:text-base ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* =====================================================
            DESKTOP CTA
        ====================================================== */}

        <Link
          href="/admissions"
          className="hidden whitespace-nowrap rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] active:scale-95 lg:block xl:px-6 xl:py-3 xl:text-base"
        >
          Apply Now
        </Link>

        {/* =====================================================
            MOBILE / TABLET MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 lg:hidden ${
            scrolled
              ? "text-[#6D0F2C] hover:bg-[#FAF8F6]"
              : "text-white hover:bg-white/10"
          }`}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* =====================================================
          MOBILE / TABLET MENU
      ====================================================== */}

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[600px] border-t border-white/10 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`${
            scrolled
              ? "bg-white"
              : "bg-[#5A001A]"
          }`}
        >
          <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-8">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block border-b py-4 text-base font-medium transition-colors duration-300 sm:text-lg ${
                  scrolled
                    ? "border-gray-100 text-[#3A0817] hover:text-[#6D0F2C]"
                    : "border-white/10 text-white hover:text-[#D4AF37]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Apply Button */}
            <Link
              href="/admissions"
              onClick={() => setOpen(false)}
              className="mt-5 block rounded-full bg-[#D4AF37] px-6 py-3.5 text-center font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
            >
              Apply Now
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}