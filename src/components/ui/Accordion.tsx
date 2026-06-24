"use client";

import { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";

interface AccordionItem {
  q: string;
  a: string;
}

interface AccordionProps {
  items: AccordionItem[];
  dark?: boolean;
}

export default function Accordion({ items, dark = false }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  const border = dark ? "border-rule-dark" : "border-rule";
  const qColor = dark ? "text-canvas" : "text-ink";
  const aColor = "text-ink-low";
  const iconColor = dark ? "text-ink-mid" : "text-ink-mid";
  const divider = dark ? "divide-rule-dark" : "divide-rule";

  return (
    <div className={`divide-y ${divider} border-t ${border} border-b ${border}`}>
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-6 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className={`font-body text-[13px] font-medium tracking-[0.03em] ${qColor}`}>
              {item.q}
            </span>
            <span className={`flex-shrink-0 ${iconColor}`}>
              {open === i ? <IconMinus size={14} /> : <IconPlus size={14} />}
            </span>
          </button>
          {open === i && (
            <p className={`font-body text-[12px] font-light leading-[1.9] ${aColor} pb-5 max-w-[720px]`}>
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
