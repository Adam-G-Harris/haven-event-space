import type { Metadata } from "next";
import Link from "next/link";
import {
  IconMapPin,
  IconPhone,
  IconMail,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact | The Haven Event Space",
  description:
    "Get in touch with The Haven Event Space team — call, email, or fill out our contact form to start planning your event.",
};

const SOCIALS = [
  { icon: IconBrandInstagram, href: "https://www.instagram.com/thehavenkc", label: "Instagram @thehavenkc" },
  { icon: IconBrandFacebook, href: "https://www.facebook.com/thehavenkc", label: "Facebook @thehavenkc" },
  { icon: IconBrandTiktok, href: "https://www.tiktok.com/@thehaveneventspace", label: "TikTok @thehaveneventspace" },
  { icon: IconBrandYoutube, href: "https://www.youtube.com/channel/UClT7tf5gPqvwX86N7fOx35Q", label: "YouTube" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Get in touch"
        title="Let's talk"
        titleItalic="dates."
        subtitle="Tours available 7 days a week. Reach out and we'll get back to you within 24 hours."
      />

      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-0 border-l border-t border-rule">
          {/* Left panel */}
          <Reveal>
            <div className="lg:col-span-2 border-r border-b border-rule px-8 py-12 flex flex-col gap-10">
              {/* Logo */}
              <div>
                <div className="font-display text-[28px] tracking-[0.12em] uppercase text-ink leading-none">
                  The Haven
                </div>
                <div className="font-body text-[9px] font-medium tracking-[0.35em] uppercase text-ink-mid mt-1">
                  Event Space
                </div>
              </div>

              <p className="font-body text-[13px] font-light leading-[1.9] text-ink-low">
                Contact us to turn your dream event into a reality.
              </p>

              {/* Info */}
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <IconMapPin size={14} className="text-ink-mid mt-[2px] flex-shrink-0" />
                  <div>
                    <div className="font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-1">
                      Address
                    </div>
                    <p className="font-body text-[12px] tracking-[0.04em] text-ink-low leading-relaxed">
                      2210 W 247th Street<br />
                      Louisburg, Kansas 66053
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconPhone size={14} className="text-ink-mid mt-[2px] flex-shrink-0" />
                  <div>
                    <div className="font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-1">
                      Phone
                    </div>
                    <a
                      href="tel:9135628787"
                      className="font-body text-[12px] tracking-[0.06em] text-ink-low hover:text-ink transition-colors"
                    >
                      913-562-8787
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconMail size={14} className="text-ink-mid mt-[2px] flex-shrink-0" />
                  <div>
                    <div className="font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:info@thehaveneventspace.com"
                      className="font-body text-[12px] tracking-[0.04em] text-ink-low hover:text-ink transition-colors"
                    >
                      info@thehaveneventspace.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid mb-3">
                  Follow us
                </div>
                <div className="flex gap-4">
                  {SOCIALS.map(({ icon: Icon, href, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-ink-mid hover:text-ink transition-colors"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <Link
                href="https://calendly.com/thehaveneventspace"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.22em] uppercase bg-ink text-canvas px-6 py-3 hover:bg-ink-faint transition-colors self-start"
              >
                Schedule a Tour
              </Link>
            </div>
          </Reveal>

          {/* Right — contact form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="border-r border-b border-rule px-8 py-12">
              <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid mb-8">
                Send a message
              </div>

              <form className="space-y-6" action="#" method="POST">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      required
                      className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink placeholder:text-ink-low focus:outline-none focus:border-ink transition-colors"
                      placeholder="First"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      required
                      className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink placeholder:text-ink-low focus:outline-none focus:border-ink transition-colors"
                      placeholder="Last"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink placeholder:text-ink-low focus:outline-none focus:border-ink transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink placeholder:text-ink-low focus:outline-none focus:border-ink transition-colors"
                    placeholder="(913) 000-0000"
                  />
                </div>

                <div>
                  <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                    Event type
                  </label>
                  <select
                    name="event_type"
                    className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink focus:outline-none focus:border-ink transition-colors appearance-none"
                  >
                    <option value="">Select event type</option>
                    <option>Wedding</option>
                    <option>Corporate event</option>
                    <option>Private party</option>
                    <option>Styled shoot</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                    Estimated event date
                  </label>
                  <input
                    type="date"
                    name="event_date"
                    className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink focus:outline-none focus:border-ink transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink placeholder:text-ink-low focus:outline-none focus:border-ink transition-colors resize-none"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.22em] uppercase bg-ink text-canvas px-8 py-4 hover:bg-ink-faint transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
