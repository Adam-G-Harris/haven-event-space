import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Gallery | The Haven Event Space",
  description:
    "Browse photos of The Haven Event Space — ceremonies, receptions, outdoor spaces, and luxury suites.",
};

const CATEGORIES = ["All", "Ceremony", "Reception", "Outdoor", "Suites", "Details"];

const PHOTOS = [
  { label: "Main hall — ceremony setup", size: "large" },
  { label: "Reception — full room", size: "medium" },
  { label: "Outdoor ceremony arch", size: "medium" },
  { label: "Bridal suite", size: "small" },
  { label: "Groom suite", size: "small" },
  { label: "Dance floor — golden hour light", size: "large" },
  { label: "Table detail — centerpiece", size: "small" },
  { label: "Outdoor cocktail hour", size: "medium" },
  { label: "Head table — ceremony backdrop", size: "medium" },
  { label: "Lighting program — blue wash", size: "small" },
  { label: "Aerial — property overview", size: "large" },
  { label: "Bar setup", size: "small" },
];

function PlaceholderPhoto({ label, size }: { label: string; size: string }) {
  const heightClass =
    size === "large" ? "aspect-[4/3]" : size === "medium" ? "aspect-square" : "aspect-[3/4]";
  return (
    <div
      className={`bg-surface-dark ${heightClass} flex flex-col items-center justify-center gap-2`}
    >
      <svg
        className="w-5 h-5 text-ink-faint"
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
      <span className="font-body text-[7px] font-medium tracking-[0.22em] uppercase text-ink-faint text-center px-4">
        {label}
      </span>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Gallery"
        title="The space"
        titleItalic="in detail."
        subtitle="Every corner of The Haven was designed to be photographed. Here's proof."
        dark
      />

      {/* Category filter — static for now, JS filtering to be added in Phase 4 */}
      <div className="bg-ink border-b border-rule-dark">
        <div className="px-6 md:px-10 py-4 flex gap-6 overflow-x-auto">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`font-body text-[9px] font-medium tracking-[0.3em] uppercase whitespace-nowrap pb-[2px] transition-colors ${
                i === 0
                  ? "text-canvas border-b border-canvas"
                  : "text-ink-mid hover:text-canvas"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Video feature */}
      <section className="bg-ink border-b border-rule-dark">
        <Reveal y={6}>
          <div className="bg-surface-darker aspect-video flex flex-col items-center justify-center gap-3">
            <svg
              className="w-12 h-12 text-ink-faint"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.75}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.75}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-faint">
              Virtual tour video // PLACEHOLDER
            </span>
          </div>
        </Reveal>
      </section>

      {/* Photo grid */}
      <section className="bg-ink py-0">
        <Reveal y={4}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-l border-t border-rule-dark">
            {PHOTOS.map((photo) => (
              <div
                key={photo.label}
                className="border-r border-b border-rule-dark overflow-hidden group cursor-pointer"
              >
                <PlaceholderPhoto label={photo.label} size={photo.size} />
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
