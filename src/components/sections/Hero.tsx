import Link from "next/link";
import HeroStats from "@/components/sections/HeroStats";

interface HeroProps {
  videoSrc?: string;
  imageSrc?: string;
  poster?: string;
}

export default function Hero({
  videoSrc = "/haven_hero.mp4",
  imageSrc,
  poster,
}: HeroProps) {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-ink">
      {/* Background media */}
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            className="w-full h-full object-cover"
            src={videoSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : imageSrc ? (
          // If there is no media display an icon
          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-surface-dark flex flex-col items-center justify-center gap-3">
            <svg
              className="w-10 h-10 text-ink-faint"
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
            </span>
          </div>
        )}
      </div>

      {/* Legibility scrims */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/5 to-black/75" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="px-6 md:px-10 pb-10 lg:pb-14">
          {/* Tag */}
          <p className="font-body text-[9px] font-medium tracking-[0.2em] sm:tracking-[0.45em] uppercase text-white/70 border-l-2 border-white pl-3 leading-relaxed mb-6 truncate max-w-[90vw]">
            Louisburg, Kansas · Est. 2021 · 40 Private Acres
          </p>

          {/* Headline */}
          <h1 className="font-display text-[clamp(56px,11vw,128px)] leading-[0.9] tracking-[0.02em] uppercase text-white mb-6 max-w-[1100px]">
            <span className="block">No</span>
            <em
              className="font-serif not-italic block"
              style={{ fontStyle: "italic" }}
            >
              detail
            </em>
            <span className="block">overlooked.</span>
          </h1>

          {/* Body */}
          <p className="font-body text-[13px] sm:text-[14px] font-light leading-[1.9] text-white/80 max-w-[420px] mb-8">
            Kansas City&apos;s most technically advanced event venue. Architectural
            design. Cinematic lighting. Immersive sound. 40 private acres —
            exclusively yours.
          </p>
        </div>

        {/* Stats strip */}
        {/* <HeroStats /> */}
      </div>
    </section>
  );
}
