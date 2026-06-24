import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Decor Inventory | The Haven Event Space",
  description:
    "Browse The Haven's loanable decor inventory — reserved signs, table numbers, hanging signs, and more.",
};

const ITEMS = [
  { name: "Reserved Signs", note: "Set of 10 — ceremony seating" },
  { name: "Table Numbers", note: "Brass frames, 1–30" },
  { name: "Hanging Signs", note: "Various sizes, calligraphy-style" },
  { name: "Easel Stands", note: "Gold — for seating charts & displays" },
  { name: "Seating Chart Frame", note: "Large format, 24×36\"" },
  { name: "Wooden Pallets", note: "Backdrop / display use" },
  { name: "Lanterns", note: "Various sizes — aisle and table" },
  { name: "Shepherd's Hooks", note: "For aisle arrangements — set of 12" },
  { name: "Card Box", note: "Acrylic with gold hardware" },
  { name: "Cake Stand", note: "White — 16\" round" },
  { name: "Champagne Flutes", note: "Set of 2 — bride & groom" },
  { name: "Candle Holders", note: "Mixed heights — set of 20" },
];

function PlaceholderCell({ name, note }: { name: string; note: string }) {
  return (
    <div className="border-r border-b border-rule">
      <div className="aspect-square bg-surface-dark flex flex-col items-center justify-center gap-2">
        <svg
          className="w-5 h-5 text-ink-faint"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="font-body text-[7px] font-medium tracking-[0.2em] uppercase text-ink-faint">
          Photo coming
        </span>
      </div>
      <div className="px-4 py-4">
        <div className="font-body text-[12px] font-medium tracking-[0.04em] text-ink mb-1">
          {name}
        </div>
        <div className="font-body text-[10px] tracking-[0.06em] text-ink-mid">
          {note}
        </div>
      </div>
    </div>
  );
}

export default function DecorInventoryPage() {
  return (
    <>
      <PageHeader
        label="Included with your rental"
        title="Decor"
        titleItalic="inventory."
        subtitle="All items below are available to use on your event day at no additional charge — included with your venue rental."
      />

      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-rule" />
              <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                Available items
              </span>
            </div>
          </Reveal>

          <Reveal y={6}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-rule">
              {ITEMS.map((item) => (
                <PlaceholderCell key={item.name} name={item.name} note={item.note} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 border border-rule px-8 py-6">
              <p className="font-body text-[12px] font-light leading-[1.8] text-ink-low">
                All items are subject to availability and must be returned by
                the end of your rental window (11pm). Additional or specialty
                decor can be arranged through our preferred vendor network.
                Contact us for details.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-16">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Reveal>
            <p className="font-body text-[13px] font-light leading-[1.9] text-ink-low">
              Want to see the inventory in person? Come for a tour.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              href="https://calendly.com/thehaveneventspace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.22em] uppercase bg-canvas text-ink px-7 py-3 hover:bg-rule transition-colors flex-shrink-0"
            >
              Schedule a Tour
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
