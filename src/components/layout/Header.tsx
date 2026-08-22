"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";

const NAV_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "Experience", href: "/experience" },
  { label: "Pricing", href: "/pricing" },
  { label: "Availability", href: "/availability" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Other Venues", href: "/locations" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          transparent ? "bg-transparent border-b border-transparent" : "bg-canvas border-b border-rule"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-[60px]">
          {/* Wordmark */}
          <Link href="/" className="flex-shrink-0">
            <div
              className={`font-display text-[26px] tracking-[0.12em] uppercase leading-none transition-colors duration-300 ${
                transparent ? "text-white" : "text-ink"
              }`}
            >
              The Haven
            </div>
            <div
              className={`font-body text-[9px] font-medium tracking-[0.35em] uppercase leading-none mt-[2px] transition-colors duration-300 ${
                transparent ? "text-white/70" : "text-ink-mid"
              }`}
            >
              Louisburg, KS
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[10px] font-medium tracking-[0.22em] uppercase transition-colors duration-300 ${
                  transparent ? "text-white/80 hover:text-white" : "text-ink-mid hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="https://calendly.com/thehaveneventspace"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center font-body text-[10px] font-medium tracking-[0.2em] uppercase px-5 py-[10px] transition-colors duration-300 ${
                transparent ? "bg-white text-ink hover:bg-rule" : "bg-ink text-canvas hover:bg-ink-faint"
              }`}
            >
              Schedule a Tour
            </Link>
            <button
              className={`lg:hidden p-1 transition-colors duration-300 ${transparent ? "text-white" : "text-ink"}`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu2 size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-ink flex flex-col">
          <div className="flex items-center justify-between px-6 h-[60px] border-b border-rule-dark">
            <div className="font-display text-[26px] tracking-[0.12em] uppercase text-canvas">
              The Haven
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-canvas"
              aria-label="Close menu"
            >
              <IconX size={22} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-12 gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-[36px] tracking-[0.06em] uppercase text-canvas hover:text-ink-low transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-10 mt-auto">
            <Link
              href="https://calendly.com/thehaveneventspace"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.2em] uppercase bg-canvas text-ink px-6 py-3"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
