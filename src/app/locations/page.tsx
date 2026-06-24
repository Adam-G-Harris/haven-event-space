import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Venues | The Haven Properties",
  description:
    "The Haven Properties owns and operates multiple award-winning event venues across the Kansas City metro area.",
};

const VENUES = [
  {
    num: "01",
    name: "The Haven",
    tag: "Flagship",
    location: "Louisburg, Kansas",
    type: "Contemporary farmhouse",
    desc: "Our flagship — 11,000+ sq ft of architectural precision on 40 private acres. Cinematic lighting, immersive sound, two luxury suites, and total privacy. The most technically advanced event venue in KC.",
    guests: "Up to 500 guests",
    price: "$6,500 – $10,500",
    href: "/",
    features: ["40 private acres", "Meyer Sound system", "100+ programmable fixtures", "Two 600+ sq ft suites", "1 event per day"],
    current: true,
  },
  {
    num: "02",
    name: "The Lincoln",
    tag: null,
    location: "Ottawa, Kansas",
    type: "Historic post office",
    desc: "A beautifully reimagined downtown post office in Ottawa, KS — preserved architectural details meet modern event infrastructure. Intimate and characterful.",
    guests: "Up to 200 guests",
    price: "$4,000 – $6,000",
    href: null,
    features: ["Historic building", "Downtown location", "Intimate capacity", "Modern AV infrastructure"],
    current: false,
  },
  {
    num: "03",
    name: "Victorian Estate",
    tag: null,
    location: "Platte City, Missouri",
    type: "Victorian estate + lodging",
    desc: "A grand Victorian estate on rolling grounds. The only Haven Properties venue with overnight lodging — up to 14 guests on-site. Perfect for multi-day destination events.",
    guests: "Up to 300 guests",
    price: "$6,000 – $10,500",
    href: null,
    features: ["On-site lodging for 14", "Rolling estate grounds", "Grand interior spaces", "Multi-day events"],
    current: false,
  },
  {
    num: "04",
    name: "The Fields",
    tag: null,
    location: "Platte City, Missouri",
    type: "Hillside amphitheater + barn",
    desc: "A hillside amphitheater meets a rustic barn in Platte City's open countryside. Entirely open-air with a completely private 100-acre setting. The most dramatic outdoor venue in the portfolio.",
    guests: "Up to 100 guests",
    price: "$4,000 – $6,500",
    href: null,
    features: ["Hillside amphitheater", "Rustic barn structure", "100% outdoor", "Total seclusion"],
    current: false,
  },
];

export default function LocationsPage() {
  return (
    <>
      <PageHeader
        label="The Haven Properties"
        title="Our venues"
        subtitle="A portfolio of award-winning event spaces across the Kansas City metro — each with its own character, all sharing the same obsession with detail."
        dark
      />

      {/* Venue cards */}
      <section className="bg-ink py-0">
        {VENUES.map((venue, i) => (
          <Reveal key={venue.name} delay={i * 0.06}>
            <div className={`border-b border-rule-dark ${venue.current ? "bg-surface-dark" : ""}`}>
              <div className="px-6 md:px-10 max-w-[1600px] mx-auto py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
                {/* Left — meta */}
                <div className="lg:col-span-1">
                  <div className="font-display text-[11px] tracking-[0.3em] text-ink-mid mb-4">
                    {venue.num}
                  </div>
                  {venue.tag && (
                    <div className="inline-block font-body text-[8px] font-medium tracking-[0.3em] uppercase text-canvas border border-rule-dark px-2 py-1 mb-4">
                      {venue.tag}
                    </div>
                  )}
                  <div className="font-display text-[28px] tracking-[0.06em] uppercase text-canvas leading-none mb-2">
                    {venue.name}
                  </div>
                  <div className="font-body text-[9px] font-medium tracking-[0.28em] uppercase text-ink-mid mb-1">
                    {venue.location}
                  </div>
                  <div className="font-body text-[9px] tracking-[0.1em] text-ink-faint">
                    {venue.type}
                  </div>
                </div>

                {/* Center — description + features */}
                <div className="lg:col-span-3">
                  <p className="font-body text-[13px] font-light leading-[1.9] text-ink-low mb-8">
                    {venue.desc}
                  </p>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {venue.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <span className="text-ink-faint text-[10px]">—</span>
                        <span className="font-body text-[10px] tracking-[0.1em] text-ink-mid">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right — pricing + CTA */}
                <div className="lg:col-span-1 flex flex-col justify-between gap-6">
                  <div>
                    <div className="font-body text-[9px] font-medium tracking-[0.28em] uppercase text-ink-mid mb-1">
                      Capacity
                    </div>
                    <div className="font-body text-[12px] text-ink-low mb-4">
                      {venue.guests}
                    </div>
                    <div className="font-body text-[9px] font-medium tracking-[0.28em] uppercase text-ink-mid mb-1">
                      Starting from
                    </div>
                    <div className="font-body text-[12px] text-ink-low">
                      {venue.price}
                    </div>
                  </div>

                  {venue.current ? (
                    <Link
                      href="https://calendly.com/thehaveneventspace"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.22em] uppercase bg-canvas text-ink px-5 py-3 hover:bg-rule transition-colors self-start"
                    >
                      Schedule Tour
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      className="inline-flex items-center font-body text-[10px] font-light tracking-[0.22em] uppercase text-ink-mid border border-rule-dark px-5 py-3 hover:border-ink-mid hover:text-canvas transition-colors self-start"
                    >
                      Inquire
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* Company blurb */}
      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
          <Reveal>
            <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[0.92] tracking-[0.03em] uppercase text-ink">
              The Haven<br />
              <em className="font-serif not-italic" style={{ fontStyle: "italic" }}>Properties.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-[14px] font-light leading-[2] text-ink-low">
              Founded by Blake Harris, The Haven Properties is a growing
              portfolio of event venues across the Kansas City metropolitan area.
              Each venue is selected, designed, and operated with the same
              standard: total guest immersion, technical excellence, and privacy
              that lets the event breathe. No two venues are alike. All of them
              are exceptional.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
