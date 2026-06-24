import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | The Haven Event Space",
  description: "Privacy policy for thehaveneventspace.com.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader label="Legal" title="Privacy Policy" />

      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[800px] mx-auto">
          <Reveal>
            <div className="space-y-10 font-body text-[13px] font-light leading-[2] text-ink-low">
              <div>
                <h2 className="font-display text-[16px] tracking-[0.1em] uppercase text-ink mb-3">
                  Information We Collect
                </h2>
                <p>
                  When you submit a contact form, schedule a tour, or apply for a
                  position on this website, we collect the information you
                  provide — such as your name, email address, phone number, and
                  event details. We use this information solely to respond to
                  your inquiry and communicate with you about your event.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[16px] tracking-[0.1em] uppercase text-ink mb-3">
                  How We Use Your Information
                </h2>
                <p>
                  We use the information you provide to respond to your
                  inquiries, process booking requests, and communicate relevant
                  event information. We do not sell, trade, or rent your personal
                  information to third parties.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[16px] tracking-[0.1em] uppercase text-ink mb-3">
                  Cookies
                </h2>
                <p>
                  This website may use cookies to improve your browsing
                  experience. You can choose to disable cookies through your
                  browser settings, though some features of the site may not
                  function as intended.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[16px] tracking-[0.1em] uppercase text-ink mb-3">
                  Third-Party Services
                </h2>
                <p>
                  We use Calendly for tour scheduling. When you interact with
                  Calendly, their privacy policy governs the collection of your
                  information. Please review their privacy policy at
                  calendly.com.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[16px] tracking-[0.1em] uppercase text-ink mb-3">
                  Contact
                </h2>
                <p>
                  If you have questions about this privacy policy or how we
                  handle your information, contact us at{" "}
                  <a
                    href="mailto:info@thehaveneventspace.com"
                    className="text-ink hover:underline"
                  >
                    info@thehaveneventspace.com
                  </a>{" "}
                  or call{" "}
                  <a href="tel:9135628787" className="text-ink hover:underline">
                    913-562-8787
                  </a>
                  .
                </p>
              </div>

              <p className="text-[11px] tracking-[0.05em] text-ink-mid border-t border-rule pt-6">
                Last updated: {new Date().getFullYear()}. The Haven Event Space ·
                2210 W 247th Street, Louisburg, KS 66053.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
