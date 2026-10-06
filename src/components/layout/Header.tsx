"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
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
  const transparent = isHome && !scrolled && !menuOpen;

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
        <div className="flex items-center justify-between px-6 md:px-10 h-[60px] pad-12">
          {/* Wordmark */}
          <Link href="/" className="flex-shrink-0">
            <div
              className={`font-display text-[26px] tracking-[0.12em] uppercase leading-none transition-colors duration-300 ${
                transparent ? "text-white" : "text-ink"
              }`}
            >
              The Haven
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
            {/* Spacer preserving the menu trigger's layout width; the real button
                renders below as its own fixed element so it stacks above the
                full-page overlay, which sits above the header. */}
            <span className="invisible flex items-center gap-3 p-1" aria-hidden="true">
              <span className="font-body text-[10px] font-medium tracking-[0.22em] uppercase">Menu</span>
              <IconMenu2 size={22} />
            </span>
          </div>
        </div>
      </header>

      {/* Menu trigger: fixed independently of header/overlay so it always
          renders above the full-page overlay (a sibling fixed element can't
          be out-z-indexed from inside the header's own stacking context). */}
      <div className="fixed top-0 right-0 z-[60] h-24 flex items-center pr-6 md:pr-10">
        <button
          className={`flex items-center gap-3 p-1 transition-colors duration-300 ${
            transparent ? "text-white" : "text-ink"
          }`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="font-body text-[10px] font-medium tracking-[0.22em] uppercase">
            {menuOpen ? "Close" : "Menu"}
          </span>
          {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col bg-canvas"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="flex flex-col px-6 pt-28 pb-12 gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-[36px] tracking-[0.06em] uppercase hover:text-ink-low transition-colors transparent"
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
                className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.2em] uppercase text-ink px-6 py-3 transparent"
              >
                Schedule a Tour
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
