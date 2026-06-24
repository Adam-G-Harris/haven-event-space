import Reveal from "@/components/ui/Reveal";

const CELLS = [
  { label: "Main hall — ceremony setup", span: "main" },
  { label: "Outdoor ceremony arch", span: "a" },
  { label: "Bridal suite vanity", span: "b" },
  { label: "Reception — golden hour", span: "c" },
];

function PlaceholderCell({ label }: { label: string }) {
  return (
    <div className="bg-surface-dark flex flex-col items-center justify-center gap-2 w-full h-full min-h-[220px]">
      <svg
        className="w-6 h-6 text-ink-faint"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="font-body text-[8px] font-medium tracking-[0.28em] uppercase text-ink-faint text-center px-4">
        {label}
      </span>
    </div>
  );
}

export default function PhotoGrid() {
  return (
    <section className="bg-canvas border-b border-rule">
      <Reveal y={8}>
        {/* Desktop: 3-col (2fr 1fr 1fr), 2 rows; Mobile: stack */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 border-t border-rule"
          style={{
            gridTemplateRows: "repeat(2, minmax(280px, 1fr))",
          }}
        >
          {/* Main — spans 2 rows on md+ */}
          <div className="md:row-span-2 border-b md:border-b-0 md:border-r border-rule">
            <PlaceholderCell label={CELLS[0].label} />
          </div>
          {/* Top right */}
          <div className="border-b border-rule md:border-r">
            <PlaceholderCell label={CELLS[1].label} />
          </div>
          {/* Bottom right — 2 cells */}
          <div className="border-b border-rule">
            <PlaceholderCell label={CELLS[2].label} />
          </div>
          {/* Bottom center */}
          <div className="border-b md:border-b-0 md:border-r border-rule">
            <PlaceholderCell label={CELLS[3].label} />
          </div>
          {/* Bottom far right — link */}
          <div className="flex items-center justify-center px-8 py-10 bg-ink">
            <a
              href="/gallery"
              className="font-body text-[10px] font-medium tracking-[0.25em] uppercase text-canvas border-b border-rule-dark pb-1 hover:border-canvas transition-colors"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
