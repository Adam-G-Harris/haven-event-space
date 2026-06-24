import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="bg-canvas border-b border-rule py-24 lg:py-32">
      <div className="px-6 md:px-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">
        {/* Left — headline */}
        <Reveal>
          <div className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid mb-6">
            Start here
          </div>
          <h2 className="font-display text-[clamp(48px,7vw,72px)] leading-[0.92] tracking-[0.03em] uppercase text-ink">
            Your day.
            <br />
            <em className="font-serif not-italic" style={{ fontStyle: "italic" }}>
              Your venue.
            </em>
          </h2>
        </Reveal>

        {/* Right — sub-copy + buttons */}
        <Reveal delay={0.12}>
          <p className="font-body text-[13px] font-light leading-[1.9] text-ink-low mb-8">
            Tours available 7 days a week. Most dates book 12–18 months in
            advance — if you see a date you love, reach out now.
          </p>
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
              href="/pricing"
              className="inline-flex items-center font-body text-[10px] font-light tracking-[0.22em] uppercase text-ink-mid border border-rule px-8 py-4 hover:border-ink hover:text-ink transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
