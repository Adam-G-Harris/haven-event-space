"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { SOCIALS } from "./socials";

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

  // Lock body scroll while the menu is open; close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          transparent ? "bg-transparent border-b border-transparent" : "bg-canvas border-b border-rule"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 h-[60px] pad-8">
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

          {/* Socials + CTA + menu trigger */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex items-center gap-4">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`transition-colors duration-300 ${
                    transparent ? "text-white/70 hover:text-white" : "text-ink-mid hover:text-ink"
                  }`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
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
              className={`flex items-center gap-3 p-1 transition-colors duration-300 ${
                transparent ? "text-white" : "text-ink"
              }`}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span className="font-body text-[10px] font-medium tracking-[0.22em] uppercase">
                {menuOpen ? "Close" : "Menu"}
              </span>
              <IconMenu2 size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
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
