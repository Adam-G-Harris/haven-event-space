import type { Metadata } from "next";
import {
  IconBulb,
  IconVolume,
  IconDoor,
  IconTree,
  IconLock,
  IconBuildingWarehouse,
  IconWifi,
  IconParking,
  IconToolsKitchen2,
  IconCamera,
  IconTemperature,
  IconAccessible,
  IconArmchair,
  IconBath,
  IconGlass,
} from "@tabler/icons-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "The Experience | The Haven Event Space",
  description:
    "Explore every amenity and feature at The Haven — cinematic lighting, immersive sound, two luxury suites, outdoor spaces, and more.",
};

const INCLUDED = [
  { icon: IconBulb, title: "Cinematic Lighting", body: "100+ programmable RGB fixtures, pinspot arrays, gobo projection, and full DMX control. Any color, any mood." },
  { icon: IconVolume, title: "Immersive Sound", body: "Meyer Sound line array engineered specifically for the space. Crystal-clear from the first row to the last." },
  { icon: IconDoor, title: "Two Luxury Suites", body: "Private bridal and groom suites, each 600+ sq ft with private bathrooms, lounge seating, and full vanity mirrors." },
  { icon: IconTree, title: "Indoor + Outdoor", body: "Seamless flow from the main hall to our manicured outdoor ceremony space across 40 private acres." },
  { icon: IconLock, title: "Total Privacy", body: "One event, one day. No shared walls, no neighboring weddings. The entire property is yours exclusively." },
  { icon: IconBuildingWarehouse, title: "Vendor Infrastructure", body: "Commercial kitchen prep area, dedicated load-in bay, 400A electrical, and enterprise Wi-Fi throughout." },
  { icon: IconWifi, title: "High-Speed Wi-Fi", body: "Enterprise-grade coverage throughout the entire property — indoors and outdoors." },
  { icon: IconParking, title: "Ample Parking", body: "On-site parking for 200+ vehicles with paved surfaces, lighting, and clear signage." },
  { icon: IconToolsKitchen2, title: "Catering Prep Space", body: "Full commercial kitchen prep area — refrigeration, staging surfaces, and a dedicated catering entrance." },
  { icon: IconCamera, title: "Photographer-Friendly", body: "Designed with photographers in mind: varied lighting zones, architectural details, and stunning natural backdrops." },
  { icon: IconTemperature, title: "Climate Control", body: "Commercial HVAC throughout. Comfortable for guests year-round, regardless of Kansas weather." },
  { icon: IconAccessible, title: "ADA Accessible", body: "Fully ADA-compliant throughout, including accessible restrooms, ramps, and paved pathways." },
];

const ADDITIONAL = [
  {
    icon: IconArmchair,
    title: "Decor Inventory",
    body: "A curated library of loanable decor items — reserved signs, table numbers, hanging signs, and more.",
    link: { label: "View inventory", href: "/decor-inventory" },
  },
  {
    icon: IconCamera,
    title: "Photo Booth",
    body: "On-site photo booth add-on available. A crowd favorite for weddings and corporate events alike.",
    link: null,
  },
  {
    icon: IconGlass,
    title: "Local Vendor Network",
    body: "Preferred vendor relationships with top-rated local caterers, photographers, florists, and DJs.",
    link: null,
  },
  {
    icon: IconBath,
    title: "Luxury Restrooms",
    body: "Fully stocked, hotel-grade restrooms with tile finishes, ambient lighting, and full-length mirrors.",
    link: null,
  },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="The experience"
        title="Everything"
        titleItalic="included."
        subtitle="Built from scratch so that every detail serves the event — not the other way around."
      />

      {/* Included amenities */}
      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-rule" />
              <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                Included with every booking
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-rule">
            {INCLUDED.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.06}>
                  <div className="border-r border-b border-rule px-8 py-10">
                    <Icon size={18} className="text-ink-mid mb-5" />
                    <div className="font-display text-[16px] tracking-[0.08em] uppercase text-ink mb-3">
                      {item.title}
                    </div>
                    <p className="font-body text-[12px] font-light leading-[1.8] text-ink-low">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="bg-surface-darker border-b border-rule-dark py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-8 h-px bg-rule-dark" />
              <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                Additional services
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 border-l border-t border-rule-dark">
            {ADDITIONAL.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={(i % 2) * 0.08}>
                  <div className="border-r border-b border-rule-dark px-8 py-10">
                    <Icon size={18} className="text-ink-low mb-5" />
                    <div className="font-display text-[18px] tracking-[0.08em] uppercase text-canvas mb-3">
                      {item.title}
                    </div>
                    <p className="font-body text-[12px] font-light leading-[1.8] text-ink-low mb-4">
                      {item.body}
                    </p>
                    {item.link && (
                      <a
                        href={item.link.href}
                        className="font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid border-b border-rule-dark pb-[2px] hover:text-canvas hover:border-canvas transition-colors"
                      >
                        {item.link.label}
                      </a>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Venue photo strip — placeholders */}
      <section className="bg-canvas border-b border-rule">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {["Main hall", "Outdoor ceremony", "Bridal suite", "Groom suite"].map((label) => (
            <div
              key={label}
              className="aspect-square bg-surface-dark border-r last:border-r-0 border-rule flex flex-col items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 text-ink-faint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-body text-[7px] font-medium tracking-[0.25em] uppercase text-ink-faint">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
