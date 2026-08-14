interface HeroStat {
  value: string;
  label: string;
}

const STATS: HeroStat[] = [
  { value: "40", label: "Private acres" },
  { value: "11k", label: "Sq ft indoor" },
  { value: "500", label: "Guest capacity" },
  { value: "5★", label: "Avg rating" },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-4 border-t border-white/15 bg-black/40 backdrop-blur-sm">
      {STATS.map((stat, i) => (
        <div
          key={stat.label}
          className={`px-4 py-5 text-center ${i < 3 ? "border-r border-white/15" : ""}`}
        >
          <div className="font-display text-[22px] sm:text-[28px] tracking-[0.05em] text-white leading-none">
            {stat.value}
          </div>
          <div className="font-body text-[7px] sm:text-[8px] font-medium tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/60 mt-1">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
