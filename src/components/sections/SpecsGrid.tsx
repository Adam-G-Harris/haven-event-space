import {
  IconBulb,
  IconVolume,
  IconDoor,
  IconTree,
  IconLock,
  IconBuildingWarehouse,
} from "@tabler/icons-react";
import Reveal from "@/components/ui/Reveal";

const SPECS = [
  {
    icon: IconBulb,
    title: "Cinematic Lighting",
    body: "Full programmable RGB wash, pinspot arrays, and gobo projection. Every look, any mood.",
    detail: "100+ fixtures · DMX control",
  },
  {
    icon: IconVolume,
    title: "Immersive Sound",
    body: "Meyer Sound system engineered for the space. Crystal clear from first row to last.",
    detail: "Line array · Subwoofer array",
  },
  {
    icon: IconDoor,
    title: "Two Massive Suites",
    body: "Private bridal and groom suites — private bathrooms, lounge seating, full vanity mirrors.",
    detail: "600+ sq ft each",
  },
  {
    icon: IconTree,
    title: "Indoor Meets Outdoor",
    body: "Seamless flow between the main hall and our manicured outdoor ceremony space.",
    detail: "40 acres · Paved paths",
  },
  {
    icon: IconLock,
    title: "Total Privacy",
    body: "One event at a time. Your day, your venue — no shared walls, no neighboring weddings.",
    detail: "Exclusive access · Gated entry",
  },
  {
    icon: IconBuildingWarehouse,
    title: "Vendor Infrastructure",
    body: "Commercial kitchen prep space, dedicated load-in bay, 400A power, high-speed Wi-Fi.",
    detail: "Caterer-ready · DJ-ready",
  },
];

export default function SpecsGrid() {
  return (
    <section className="bg-surface-darker py-24 lg:py-32">
      <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
        {/* Section label */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-px bg-rule-dark" />
            <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
              What we built
            </span>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-rule-dark">
          {SPECS.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <Reveal key={spec.title} delay={i * 0.06}>
                <div className="border-r border-b border-rule-dark px-8 py-10">
                  <Icon size={20} className="text-ink-low mb-5" />
                  <div className="font-display text-[18px] tracking-[0.08em] uppercase text-canvas mb-3">
                    {spec.title}
                  </div>
                  <p className="font-body text-[12px] font-light leading-[1.8] text-ink-low mb-4">
                    {spec.body}
                  </p>
                  <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid border-t border-rule-dark pt-4">
                    {spec.detail}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
