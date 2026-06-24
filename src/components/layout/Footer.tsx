import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";

const QUICK_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "Experience", href: "/experience" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Other Venues", href: "/locations" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const SOCIALS = [
  { icon: IconBrandInstagram, href: "https://www.instagram.com/thehavenkc", label: "Instagram" },
  { icon: IconBrandFacebook, href: "https://www.facebook.com/thehavenkc", label: "Facebook" },
  { icon: IconBrandTiktok, href: "https://www.tiktok.com/@thehaveneventspace", label: "TikTok" },
  { icon: IconBrandYoutube, href: "https://www.youtube.com/channel/UClT7tf5gPqvwX86N7fOx35Q", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-canvas">
      {/* Main footer */}
      <div className="px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-rule-dark">
        {/* Brand + contact */}
        <div>
          <div className="font-display text-[22px] tracking-[0.12em] uppercase mb-4">
            The Haven
          </div>
          <p className="font-body text-[11px] font-light tracking-[0.05em] text-ink-low leading-relaxed mb-6">
            2210 W 247th Street<br />
            Louisburg, Kansas 66053
          </p>
          <div className="space-y-1">
            <a
              href="tel:9135628787"
              className="block font-body text-[11px] tracking-[0.1em] text-ink-low hover:text-canvas transition-colors"
            >
              913-562-8787
            </a>
            <a
              href="mailto:info@thehaveneventspace.com"
              className="block font-body text-[11px] tracking-[0.05em] text-ink-low hover:text-canvas transition-colors"
            >
              info@thehaveneventspace.com
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div className="font-body text-[9px] font-medium tracking-[0.35em] uppercase text-ink-low mb-4">
            Navigate
          </div>
          <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[11px] tracking-[0.05em] text-ink-low hover:text-canvas transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Awards + social */}
        <div>
          <div className="font-body text-[9px] font-medium tracking-[0.35em] uppercase text-ink-low mb-4">
            Recognition
          </div>
          <div className="space-y-2 mb-8">
            {[
              "The Knot — Best of Weddings 2022, 2023, 2024",
              "WeddingWire — Couples' Choice 2022, 2023, 2024",
              "WedKC — Venue of the Year Finalist 2023, 2024",
            ].map((award) => (
              <p key={award} className="font-body text-[10px] tracking-[0.05em] text-ink-low leading-relaxed">
                {award}
              </p>
            ))}
          </div>
          <div className="flex gap-4">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-ink-faint hover:text-canvas transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-body text-[10px] tracking-[0.05em] text-ink-faint">
          © {new Date().getFullYear()} The Haven Event Space. All rights reserved.
        </p>
        <Link
          href="/privacy"
          className="font-body text-[10px] tracking-[0.05em] text-ink-faint hover:text-canvas transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
