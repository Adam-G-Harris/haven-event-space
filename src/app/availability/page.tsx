import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Availability | The Haven Event Space",
  description:
    "Check available dates at The Haven Event Space. Most Saturdays book 12–18 months in advance.",
};

export default function AvailabilityPage() {
  return (
    <>
      <PageHeader
        label="Check dates"
        title="Availability"
        subtitle="Most Saturday dates book 12–18 months in advance. Weekday and Sunday dates have more flexibility. Contact us to confirm any specific date."
      />

      {/* Booking notice */}
      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-l border-t border-rule">
            <Reveal>
              <div className="border-r border-b border-rule px-8 py-10">
                <div className="font-display text-[48px] leading-none tracking-[0.03em] text-ink mb-2">
                  12–18
                </div>
                <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid">
                  Months in advance
                </div>
                <p className="font-body text-[12px] font-light leading-[1.8] text-ink-low mt-4">
                  Typical booking lead time for Saturday dates. Start your search early.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="border-r border-b border-rule px-8 py-10">
                <div className="font-display text-[48px] leading-none tracking-[0.03em] text-ink mb-2">
                  7 days
                </div>
                <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid">
                  Tours available
                </div>
                <p className="font-body text-[12px] font-light leading-[1.8] text-ink-low mt-4">
                  Schedule a walkthrough any day of the week — in person or virtual.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="border-r border-b border-rule px-8 py-10">
                <div className="font-display text-[48px] leading-none tracking-[0.03em] text-ink mb-2">
                  1
                </div>
                <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid">
                  Event per day
                </div>
                <p className="font-body text-[12px] font-light leading-[1.8] text-ink-low mt-4">
                  Your day, exclusively. No other events share the property.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Availability calendar placeholder */}
      <section className="bg-surface-darker border-b border-rule-dark py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-champagne" />
              <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                Live calendar
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {/* Calendar embed placeholder — swap for real Calendly/booking iframe */}
            <div className="border border-rule-dark bg-surface-dark min-h-[500px] flex flex-col items-center justify-center gap-4">
              <svg
                className="w-8 h-8 text-ink-faint"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div className="text-center">
                <p className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-1">
                  Availability calendar
                </p>
                <p className="font-body text-[11px] text-ink-faint">
                  {/* PLACEHOLDER: embed Calendly or booking widget here */}
                  Booking calendar integration coming soon
                </p>
              </div>
              <a
                href="https://calendly.com/thehaveneventspace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.22em] uppercase bg-canvas text-ink px-6 py-3 hover:bg-rule transition-colors mt-2"
              >
                Check via Calendly
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Request a date CTA */}
      <section className="bg-canvas border-b border-rule py-20">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <Reveal>
            <h2 className="font-display text-[clamp(36px,5vw,56px)] leading-[0.92] tracking-[0.03em] uppercase text-ink">
              See a date<br />you love?
            </h2>
            <p className="font-body text-[13px] font-light leading-[1.9] text-ink-low mt-4 max-w-[400px]">
              Reach out now — dates go fast, especially in spring and fall.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://calendly.com/thehaveneventspace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.22em] uppercase bg-ink text-canvas px-8 py-4 hover:bg-ink-faint transition-colors"
              >
                Schedule a Tour
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center font-body text-[10px] font-light tracking-[0.22em] uppercase text-ink-mid border border-rule px-8 py-4 hover:border-ink hover:text-ink transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
