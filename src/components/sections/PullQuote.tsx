import Reveal from "@/components/ui/Reveal";

export default function PullQuote() {
  return (
    <section className="bg-canvas border-b border-rule py-24 lg:py-32">
      <div className="px-6 md:px-10 max-w-[1000px] mx-auto text-center">
        <Reveal>
          <div className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid mb-8">
            From the couples
          </div>
          <blockquote className="font-serif text-[clamp(20px,3.5vw,32px)] leading-[1.55] text-ink mb-8" style={{ fontStyle: "italic" }}>
            &ldquo;First class. Top notch. Blake and his team lived up to every
            expectation — and then blew past it. November 18th was the best day
            of our lives.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-rule" />
            <p className="font-body text-[10px] tracking-[0.15em] text-ink-mid">
              Wedding reception · November 2023 · WeddingWire, 5 stars
            </p>
            <div className="w-12 h-px bg-rule" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
