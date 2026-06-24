import Reveal from "@/components/ui/Reveal";

export default function StatementSection() {
  return (
    <section className="bg-canvas border-b border-rule py-24 lg:py-32">
      <div className="px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-[1600px] mx-auto">
        {/* Left — headline */}
        <Reveal>
          <h2 className="font-display text-[clamp(52px,7vw,80px)] leading-[0.92] tracking-[0.03em] uppercase text-ink">
            Built for
            <br />
            <em className="font-serif not-italic" style={{ fontStyle: "italic" }}>
              the moment.
            </em>
          </h2>
        </Reveal>

        {/* Right — body */}
        <Reveal delay={0.12}>
          <p className="font-body text-[13px] font-light leading-[2] text-ink-low max-w-[480px]">
            The Haven was designed from the ground up — every beam, every
            fixture, every cable — with one purpose: to make your event
            unforgettable. Not renovated. Not repurposed. Built. We obsess
            over the things couples never think to ask about: the sound
            profile of the main hall, the color temperature of the ceremony
            lighting, the sightlines from every seat. Because when everything
            is right, people don&apos;t notice the details. They just feel them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
