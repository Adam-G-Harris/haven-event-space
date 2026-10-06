import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About | The Haven Event Space",
  description:
    "Learn the story behind The Haven — Kansas City's most technically advanced event venue on 40 private acres in Louisburg, KS.",
};

const STATS = [
  { value: "2021", label: "Est." },
  { value: "40", label: "Private acres" },
  { value: "11k", label: "Sq ft indoor" },
  { value: "500", label: "Max capacity" },
];

const TEAM = [
  { name: "Blake Harris", role: "Owner & Founder", note: "// PLACEHOLDER: headshot" },
  { name: "Team Member", role: "Event Coordinator", note: "// PLACEHOLDER: headshot" },
  { name: "Team Member", role: "Operations", note: "// PLACEHOLDER: headshot" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Our story"
        title="Not renovated."
        titleItalic="Built."
        subtitle="The Haven didn't happen by accident. It took years of obsessive planning to get every detail right."
      />

      {/* Story section */}
      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left — photo placeholder */}
          <Reveal>
            <div className="bg-surface-dark aspect-[4/5] flex flex-col items-center justify-center gap-3">
              <svg className="w-6 h-6 text-ink-faint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-body text-[8px] font-medium tracking-[0.28em] uppercase text-ink-faint">
                Venue exterior // PLACEHOLDER
              </span>
            </div>
          </Reveal>

          {/* Right — story copy */}
          <Reveal delay={0.12}>
            <div className="flex flex-col justify-center h-full gap-8">
              <p className="font-body text-[14px] font-light leading-[2] text-ink-low">
                The Haven was designed and built from the ground up with one
                singular purpose: to create a venue so technically advanced, so
                architecturally considered, that every event held here becomes
                unforgettable. Not because of one standout feature — but because
                of the thousands of details that disappear into the experience.
              </p>
              <p className="font-body text-[14px] font-light leading-[2] text-ink-low">
                Founded by Blake Harris in 2021, The Haven sits on 40 private
                acres in Louisburg, Kansas. The 11,000+ sq ft indoor space is
                complemented by manicured outdoor grounds, all exclusively yours
                for the day. No shared walls. No neighboring weddings. No
                compromises.
              </p>
              <p className="font-body text-[14px] font-light leading-[2] text-ink-low">
                We obsess over the things that most couples never think to ask
                about: the acoustic profile of the main hall, the sightlines from
                every seat, the color temperature of the ceremony lighting. When
                everything is right, people don&apos;t notice the details. They
                just feel them.
              </p>
              <Link
                href="https://calendly.com/thehaveneventspace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.22em] uppercase bg-ink text-canvas px-7 py-3 hover:bg-ink-faint transition-colors self-start"
              >
                Schedule a Tour
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink border-b border-rule-dark">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-rule-dark">
          {STATS.map((s) => (
            <div key={s.label} className="px-8 py-10 text-center">
              <div className="font-display text-[42px] tracking-[0.04em] text-canvas leading-none">
                {s.value}
              </div>
              <div className="font-body text-[9px] font-medium tracking-[0.28em] uppercase text-ink-mid mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-rule" />
              <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                Recognition
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 border-l border-t border-rule">
            {[
              {
                org: "The Knot",
                icon: "/awards/the-knot.png",
                iconWidth: 560,
                iconHeight: 140,
                award: "Best of Weddings",
                years: "2022, 2023, 2024",
              },
              {
                org: "WeddingWire",
                icon: "/awards/weddingwire.png",
                iconWidth: 560,
                iconHeight: 101,
                award: "Couples' Choice Award",
                years: "2022, 2023, 2024",
              },
              {
                org: "WedKC",
                icon: "/awards/wedkc.png",
                iconWidth: 250,
                iconHeight: 193,
                award: "Venue of the Year Finalist",
                years: "2023, 2024",
              },
            ].map((a, i) => (
              <Reveal key={a.org} delay={i * 0.08}>
                <div className="border-r border-b border-rule px-8 py-10">
                  <Image
                    src={a.icon}
                    alt={`${a.org} logo`}
                    width={a.iconWidth}
                    height={a.iconHeight}
                    className="h-6 w-auto object-contain object-left mb-4"
                  />
                  <div className="font-display text-[20px] tracking-[0.06em] uppercase text-ink mb-2">
                    {a.award}
                  </div>
                  <div className="font-body text-[11px] tracking-[0.06em] text-ink-low">
                    {a.years}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface-darker border-b border-rule-dark py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-rule-dark" />
              <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                The team
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 border-l border-t border-rule-dark">
            {TEAM.map((member, i) => (
              <Reveal key={`${member.name}-${i}`} delay={i * 0.08}>
                <div className="border-r border-b border-rule-dark px-8 py-10">
                  <div className="bg-surface-dark aspect-square flex flex-col items-center justify-center gap-2 mb-6">
                    <svg className="w-5 h-5 text-ink-faint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-body text-[7px] font-medium tracking-[0.25em] uppercase text-ink-faint">
                      {member.note}
                    </span>
                  </div>
                  <div className="font-display text-[18px] tracking-[0.06em] uppercase text-canvas mb-1">
                    {member.name}
                  </div>
                  <div className="font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid">
                    {member.role}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
