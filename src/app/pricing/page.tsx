import type { Metadata } from "next";
import Link from "next/link";
import {
  IconCheck,
  IconStar,
  IconBuildingSkyscraper,
  IconUsers,
  IconHeart,
} from "@tabler/icons-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Pricing | The Haven Event Space",
  description:
    "Transparent venue pricing, bar packages, and specialty event rates for The Haven Event Space in Louisburg, KS.",
};

const VENUE_PACKAGES = [
  {
    day: "Monday – Thursday",
    price: "$6,500",
    hours: "9am – 11pm",
    highlight: false,
  },
  {
    day: "Friday & Sunday",
    price: "$8,500",
    hours: "9am – 11pm",
    highlight: false,
  },
  {
    day: "Saturday",
    price: "$10,500",
    hours: "9am – 11pm",
    highlight: true,
  },
];

const BAR_PACKAGES = [
  {
    tier: "Bronze",
    sub: "Beer & Wine",
    rates: [
      { hours: "4 hr", price: "$26 / guest" },
      { hours: "5 hr", price: "$29 / guest" },
      { hours: "6 hr", price: "$32 / guest" },
    ],
    perks: [],
  },
  {
    tier: "Silver",
    sub: "Beer, Wine & Call Liquor",
    rates: [
      { hours: "4 hr", price: "$30 / guest" },
      { hours: "5 hr", price: "$33 / guest" },
      { hours: "6 hr", price: "$36 / guest" },
    ],
    perks: ["1 complimentary signature cocktail"],
  },
  {
    tier: "Gold",
    sub: "Beer, Wine & Premium Liquor",
    rates: [
      { hours: "4 hr", price: "$35 / guest" },
      { hours: "5 hr", price: "$38 / guest" },
      { hours: "6 hr", price: "$41 / guest" },
    ],
    perks: ["2 complimentary signature cocktails"],
  },
];

const BAR_ADDONS = [
  "Additional service hours: +$3 / hr / guest",
  "Guests under 21: $7 / guest",
  "Champagne wall add-on available",
  "Custom signature cocktail add-on available",
  "Military / First Responder / EMS: 10% discount",
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        label="Investment"
        title="Pricing &"
        titleItalic="packages."
        subtitle="Transparent, all-inclusive pricing with no hidden fees. Holiday pricing available upon request."
      />

      {/* Venue rates */}
      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-rule" />
              <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                Venue rental
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-rule">
            {VENUE_PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.day} delay={i * 0.08}>
                <div
                  className={`border-r border-b border-rule px-8 py-10 flex flex-col ${
                    pkg.highlight ? "bg-ink" : ""
                  }`}
                >
                  <div
                    className={`font-body text-[9px] font-medium tracking-[0.3em] uppercase mb-4 ${
                      pkg.highlight ? "text-ink-mid" : "text-ink-mid"
                    }`}
                  >
                    {pkg.day}
                  </div>
                  <div
                    className={`font-display text-[52px] leading-none tracking-[0.02em] mb-2 ${
                      pkg.highlight ? "text-canvas" : "text-ink"
                    }`}
                  >
                    {pkg.price}
                  </div>
                  <div
                    className={`font-body text-[11px] tracking-[0.08em] mb-8 ${
                      pkg.highlight ? "text-ink-low" : "text-ink-low"
                    }`}
                  >
                    {pkg.hours}
                  </div>
                  <div className="mt-auto">
                    {[
                      "Exclusive venue access",
                      "Bridal & groom suites",
                      "Full lighting & sound system",
                      "Indoor + outdoor spaces",
                      "Vendor infrastructure",
                      "On-site coordination team",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 mb-2">
                        <IconCheck
                          size={12}
                          className={pkg.highlight ? "text-canvas" : "text-ink-mid"}
                        />
                        <span
                          className={`font-body text-[11px] tracking-[0.04em] ${
                            pkg.highlight ? "text-canvas" : "text-ink-mid"
                          }`}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="font-body text-[10px] text-ink-low tracking-[0.05em] mt-4">
              * Holiday pricing by request. All packages run 9am–11pm (14 hours of exclusive access).
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bar packages */}
      <section className="bg-surface-darker border-b border-rule-dark py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-rule-dark" />
              <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                Bar packages
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-rule-dark">
            {BAR_PACKAGES.map((pkg, i) => (
              <Reveal key={pkg.tier} delay={i * 0.08}>
                <div className="border-r border-b border-rule-dark px-8 py-10">
                  <div className="font-display text-[24px] tracking-[0.08em] uppercase text-canvas mb-1">
                    {pkg.tier}
                  </div>
                  <div className="font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-8">
                    {pkg.sub}
                  </div>

                  <div className="space-y-3 mb-8">
                    {pkg.rates.map((r) => (
                      <div
                        key={r.hours}
                        className="flex justify-between items-baseline border-b border-rule-dark pb-2"
                      >
                        <span className="font-body text-[11px] tracking-[0.1em] text-ink-low">
                          {r.hours}
                        </span>
                        <span className="font-body text-[14px] font-medium tracking-[0.05em] text-canvas">
                          {r.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {pkg.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2">
                      <IconStar size={10} className="text-ink-mid" />
                      <span className="font-body text-[10px] tracking-[0.08em] text-ink-low">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Add-ons */}
          <Reveal delay={0.2}>
            <div className="mt-8 border border-rule-dark px-8 py-6">
              <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid mb-4">
                Add-ons & notes
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {BAR_ADDONS.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-ink-faint text-[10px] mt-[2px]">—</span>
                    <span className="font-body text-[11px] tracking-[0.04em] text-ink-low">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Private & Corporate */}
      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-rule">
          {/* Private parties */}
          <Reveal>
            <div className="border-r border-b border-rule px-8 py-10">
              <IconHeart size={18} className="text-ink-mid mb-5" />
              <div className="font-display text-[22px] tracking-[0.08em] uppercase text-ink mb-2">
                Private Parties
              </div>
              <div className="font-body text-[9px] font-medium tracking-[0.28em] uppercase text-ink-mid mb-6">
                Custom quotes available
              </div>
              <p className="font-body text-[12px] font-light leading-[1.9] text-ink-low mb-6">
                Family reunions, milestone birthdays, graduation celebrations,
                and more. We&apos;ll build a package around your event.
              </p>
              <div className="space-y-2">
                {[
                  "Family reunions",
                  "Birthday parties",
                  "Graduation celebrations",
                  "10% off for Louisburg, KS graduates",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <IconCheck size={11} className="text-ink-mid flex-shrink-0" />
                    <span className="font-body text-[11px] tracking-[0.04em] text-ink-mid">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Corporate */}
          <Reveal delay={0.08}>
            <div className="border-r border-b border-rule px-8 py-10">
              <IconBuildingSkyscraper size={18} className="text-ink-mid mb-5" />
              <div className="font-display text-[22px] tracking-[0.08em] uppercase text-ink mb-2">
                Corporate Events
              </div>
              <div className="font-body text-[9px] font-medium tracking-[0.28em] uppercase text-ink-mid mb-6">
                Custom quotes available
              </div>
              <p className="font-body text-[12px] font-light leading-[1.9] text-ink-low mb-6">
                Conferences, product launches, corporate retreats, and holiday
                parties. Technical infrastructure purpose-built for production.
              </p>
              <div className="space-y-2">
                {[
                  "Conferences & seminars",
                  "Corporate holiday parties",
                  "Product launches & special events",
                  "10% off for Active/Retired Military, Police, Fire & EMS",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <IconCheck size={11} className="text-ink-mid flex-shrink-0" />
                    <span className="font-body text-[11px] tracking-[0.04em] text-ink-mid">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <Reveal>
            <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[0.92] tracking-[0.03em] uppercase text-canvas">
              Ready to book?
            </h2>
            <p className="font-body text-[13px] font-light leading-[1.9] text-ink-low mt-4 max-w-[400px]">
              Most Saturdays book 12–18 months out. Don&apos;t wait to secure
              your date.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://calendly.com/thehaveneventspace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.22em] uppercase bg-canvas text-ink px-8 py-4 hover:bg-rule transition-colors"
              >
                Schedule a Tour
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center font-body text-[10px] font-light tracking-[0.22em] uppercase text-ink-mid border border-rule-dark px-8 py-4 hover:border-ink-mid hover:text-canvas transition-colors"
              >
                Get a Custom Quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
