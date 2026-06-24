import { IconStar } from "@tabler/icons-react";

const AWARDS = [
  { org: "The Knot", title: "Best of Weddings", years: "2022 · 2023 · 2024" },
  { org: "WeddingWire", title: "Couples' Choice", years: "2022 · 2023 · 2024" },
  { org: "WedKC", title: "Venue of the Year Finalist", years: "2023 · 2024" },
];

export default function AwardsBar() {
  return (
    <div className="bg-canvas border-b border-rule">
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-rule">
        {AWARDS.map((award) => (
          <div
            key={award.title}
            className="flex items-center gap-3 px-8 py-5"
          >
            <IconStar size={14} className="text-ink-mid flex-shrink-0" />
            <div>
              <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid">
                {award.org}
              </div>
              <div className="font-body text-[11px] tracking-[0.05em] text-ink">
                {award.title} — {award.years}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
