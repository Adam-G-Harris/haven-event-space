import type { Metadata } from "next";
import Link from "next/link";
import {
  IconBuildingSkyscraper,
  IconMap,
  IconUsers,
  IconWalk,
  IconCamera,
  IconChecklist,
} from "@tabler/icons-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Schedule a Tour | The Haven Event Space",
  description:
    "Schedule an in-person or virtual tour of The Haven Event Space. Tours available 7 days a week.",
};

const TOUR_TYPES = [
  {
    icon: IconMap,
    title: "Virtual Tour",
    desc: "A guided video walkthrough of the entire property. Perfect if you're planning from out of state or just want a quick first look.",
  },
  {
    icon: IconWalk,
    title: "On-Site Tour",
    desc: "Walk through every space with a member of our team. See the lighting system live, hear the audio, feel the scale of the rooms.",
  },
  {
    icon: IconUsers,
    title: "Consultation",
    desc: "A focused session to discuss your vision, ask pricing questions, and map out what your event would look like at The Haven.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Client On-Site",
    desc: "For couples or clients who have already booked and want to walk through setup logistics, vendor coordination, or final details.",
  },
  {
    icon: IconCamera,
    title: "Styled Shoot",
    desc: "Photographers, videographers, and planners — we welcome styled shoots to showcase the space. Contact us to schedule.",
  },
  {
    icon: IconChecklist,
    title: "Final Walkthrough",
    desc: "A pre-event walkthrough in the days before your event to confirm setup, finalize logistics, and run through the day-of timeline.",
  },
];

export default function ScheduleTourPage() {
  return (
    <>
      <PageHeader
        label="Come see it in person"
        title="Schedule"
        titleItalic="a tour."
        subtitle="Tours are available 7 days a week, in-person or virtual. Most people leave wanting to book on the spot."
      />

      {/* Tour types */}
      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-rule" />
              <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                Visit types
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-rule">
            {TOUR_TYPES.map((type, i) => {
              const Icon = type.icon;
              return (
                <Reveal key={type.title} delay={(i % 3) * 0.06}>
                  <div className="border-r border-b border-rule px-8 py-10">
                    <Icon size={18} className="text-ink-mid mb-5" />
                    <div className="font-display text-[18px] tracking-[0.08em] uppercase text-ink mb-3">
                      {type.title}
                    </div>
                    <p className="font-body text-[12px] font-light leading-[1.8] text-ink-low">
                      {type.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <Reveal>
            <h2 className="font-display text-[clamp(40px,6vw,64px)] leading-[0.92] tracking-[0.03em] uppercase text-canvas">
              Pick your time.
            </h2>
            <p className="font-body text-[13px] font-light leading-[1.9] text-ink-low mt-4 max-w-[400px]">
              We use Calendly to make scheduling easy — choose a time that works
              for you and we&apos;ll confirm within hours.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="https://calendly.com/thehaveneventspace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.22em] uppercase bg-canvas text-ink px-8 py-4 hover:bg-rule transition-colors"
              >
                Book on Calendly
              </Link>
              <a
                href="tel:9135628787"
                className="inline-flex items-center font-body text-[10px] font-light tracking-[0.22em] uppercase text-ink-mid border border-rule-dark px-8 py-4 hover:border-ink-mid hover:text-canvas transition-colors"
              >
                Call 913-562-8787
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border border-rule-dark p-8">
              <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid mb-6">
                Address
              </div>
              <div className="font-display text-[18px] tracking-[0.06em] uppercase text-canvas mb-2">
                The Haven Event Space
              </div>
              <p className="font-body text-[12px] tracking-[0.04em] text-ink-low leading-relaxed mb-6">
                2210 W 247th Street<br />
                Louisburg, Kansas 66053
              </p>
              <div className="font-body text-[10px] tracking-[0.1em] text-ink-mid">
                ~35 minutes south of downtown Kansas City
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
