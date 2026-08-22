import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const VENUES = [
  {
    num: "01",
    name: "The Lincoln",
    location: "Ottawa, KS",
    desc: "Historic downtown post office reimagined as an intimate event venue.",
    guests: "Up to 200 guests",
    price: "$4,000–$6,000",
  },
  {
    num: "02",
    name: "Victorian Estate",
    location: "Platte City, MO",
    desc: "Grand Victorian estate with overnight lodging for 14 on rolling grounds.",
    guests: "Up to 300 guests",
    price: "$6,000–$10,500",
  },
  {
    num: "03",
    name: "The Fields",
    location: "Platte City, MO",
    desc: "Hillside amphitheater meets rustic barn — open air and completely private.",
    guests: "Up to 100 guests",
    price: "$4,000–$6,500",
  },
];

export default function VenuesTeaser() {
  return (
    <section className="bg-ink py-24 lg:py-32">
      <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
        <Reveal>
          <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-champagne" />
                <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                  The Haven Properties
                </span>
              </div>
              <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[0.92] tracking-[0.03em] uppercase text-canvas">
                Our venues
              </h2>
            </div>
            <Link
              href="/locations"
              className="font-body text-[10px] font-medium tracking-[0.22em] uppercase text-ink-mid border-b border-rule-dark pb-1 hover:text-canvas hover:border-canvas transition-colors flex-shrink-0"
            >
              See all locations
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-rule-dark">
          {VENUES.map((venue, i) => (
            <Reveal key={venue.name} delay={i * 0.08}>
              <div className="border-r border-b border-rule-dark px-8 py-10 flex flex-col h-full">
                <div className="font-display text-[11px] tracking-[0.3em] text-ink-mid mb-6">
                  {venue.num}
                </div>
                <div className="font-display text-[22px] tracking-[0.08em] uppercase text-canvas mb-1">
                  {venue.name}
                </div>
                <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid mb-6">
                  {venue.location}
                </div>
                <p className="font-body text-[12px] font-light leading-[1.8] text-ink-low flex-1 mb-8">
                  {venue.desc}
                </p>
                <div className="border-t border-rule-dark pt-4 flex justify-between">
                  <span className="font-body text-[9px] tracking-[0.15em] text-ink-mid">
                    {venue.guests}
                  </span>
                  <span className="font-body text-[9px] tracking-[0.1em] text-ink-mid">
                    {venue.price}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
