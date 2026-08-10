"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="sticky top-0 z-50 flex items-center bg-[#1F3D2E] px-2 sm:px-4"
      animate={{ height: scrolled ? 64 : 104 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-full h-10 bg-gradient-to-b from-[#1F3D2E]/25 via-[#1F3D2E]/[0.06] to-transparent"
      />

      <motion.nav
        className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 rounded-full border border-[#1F3D2E]/10 bg-[#F3EDE1]/85 px-6 shadow-[0_25px_60px_-20px_rgba(31,61,46,0.55)] backdrop-blur-md"
        animate={{ paddingTop: scrolled ? 8 : 14, paddingBottom: scrolled ? 8 : 14 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Link
          href="/"
          className="text-2xl font-bold text-[#1F3D2E] font-[family-name:var(--font-questrial)]"
        >
          Regina Ruiz
        </Link>

        <div className="hidden md:flex items-center gap-1 text-base font-[family-name:var(--font-questrial)] text-[#6B6255]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 hover:bg-[#1F3D2E]/[0.06] hover:text-[#1F3D2E] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.nav>
    </motion.div>
  );
}
