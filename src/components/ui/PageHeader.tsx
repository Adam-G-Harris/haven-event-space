import Reveal from "@/components/ui/Reveal";

interface PageHeaderProps {
  label: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHeader({
  label,
  title,
  titleItalic,
  subtitle,
  dark = false,
}: PageHeaderProps) {
  const bg = dark ? "bg-ink" : "bg-canvas";
  const border = dark ? "border-rule-dark" : "border-rule";
  const labelColor = "text-ink-mid";
  const titleColor = dark ? "text-canvas" : "text-ink";
  const subColor = "text-ink-low";

  return (
    <div className={`${bg} border-b ${border} pt-24 pb-16 lg:pt-32 lg:pb-20`}>
      <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
        <Reveal>
          <p className={`font-body text-[9px] font-medium tracking-[0.4em] uppercase ${labelColor} mb-6`}>
            {label}
          </p>
          <h1 className={`font-display text-[clamp(48px,8vw,88px)] leading-[0.92] tracking-[0.03em] uppercase ${titleColor}`}>
            {title}
            {titleItalic && (
              <>
                <br />
                <em className="font-serif not-italic" style={{ fontStyle: "italic" }}>
                  {titleItalic}
                </em>
              </>
            )}
          </h1>
          {subtitle && (
            <p className={`font-body text-[13px] font-light leading-[1.9] ${subColor} mt-6 max-w-[560px]`}>
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </div>
  );
}
