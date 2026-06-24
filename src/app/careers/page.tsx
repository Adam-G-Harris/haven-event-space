import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Careers | The Haven Event Space",
  description:
    "Join the team at The Haven Event Space. Flexible weekend positions in event operations, bartending, and coordination.",
};

const LOCATIONS = [
  "The Haven — Louisburg, KS",
  "The Haven — Parkville, MO",
  "The Lincoln — Ottawa, KS",
  "Victorian Estate — Platte City, MO",
  "The Fields — Platte City, MO",
  "Bond Voyager — Kansas City, KS",
  "Bond Voyager — Kansas City, MO",
  "The Haven — Olathe / Kansas City, MO",
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        label="Join the team"
        title="Work with"
        titleItalic="the best."
        subtitle="We're always looking for sharp, reliable people who care about delivering an exceptional guest experience."
      />

      {/* No openings notice */}
      <section className="bg-canvas border-b border-rule py-16">
        <div className="px-6 md:px-10 max-w-[1600px] mx-auto">
          <Reveal>
            <div className="border border-rule px-8 py-6 flex items-start gap-4">
              <div className="w-1 h-full bg-ink-faint flex-shrink-0 self-stretch min-h-[2rem]" />
              <div>
                <div className="font-body text-[9px] font-medium tracking-[0.3em] uppercase text-ink-mid mb-1">
                  Current openings
                </div>
                <p className="font-body text-[12px] tracking-[0.04em] text-ink-low">
                  No positions listed at this time. Fill out the general application below to be considered for future openings.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Application form */}
      <section className="bg-canvas border-b border-rule py-20 lg:py-28">
        <div className="px-6 md:px-10 max-w-[900px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-rule" />
              <span className="font-body text-[9px] font-medium tracking-[0.4em] uppercase text-ink-mid">
                General application
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form className="space-y-8" action="#" method="POST">
              {/* Position interest */}
              <div>
                <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                  Position interested in
                </label>
                <select
                  name="position"
                  className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink focus:outline-none focus:border-ink transition-colors appearance-none"
                >
                  <option value="">Select a position</option>
                  <option>Event Day Staff</option>
                  <option>Bartender</option>
                  <option>Event Coordinator</option>
                  <option>Setup / Breakdown Crew</option>
                  <option>General / Open to any role</option>
                </select>
              </div>

              {/* Personal info */}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              </div>

              {/* Availability */}
              <div>
                <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-3">
                  Weekend availability
                </label>
                <div className="flex flex-wrap gap-3">
                  {["Friday", "Saturday", "Sunday"].map((day) => (
                    <label key={day} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="availability"
                        value={day.toLowerCase()}
                        className="w-4 h-4 border border-rule accent-ink"
                      />
                      <span className="font-body text-[11px] tracking-[0.08em] text-ink-mid">
                        {day}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Which locations */}
              <div>
                <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-3">
                  Which location(s) are you interested in?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {LOCATIONS.map((loc) => (
                    <label key={loc} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="locations"
                        value={loc}
                        className="w-4 h-4 border border-rule accent-ink"
                      />
                      <span className="font-body text-[11px] tracking-[0.06em] text-ink-mid">
                        {loc}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                    Are you legally eligible to work in the US?
                  </label>
                  <select
                    name="work_eligible"
                    className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink focus:outline-none focus:border-ink transition-colors appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                    Are you 21 years of age or older?
                  </label>
                  <select
                    name="age_21"
                    className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink focus:outline-none focus:border-ink transition-colors appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              {/* Bartending experience */}
              <div>
                <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                  Bartending / service experience
                </label>
                <select
                  name="bar_experience"
                  className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink focus:outline-none focus:border-ink transition-colors appearance-none"
                >
                  <option value="">Select</option>
                  <option>No experience</option>
                  <option>Less than 1 year</option>
                  <option>1–2 years</option>
                  <option>3–5 years</option>
                  <option>5+ years</option>
                </select>
              </div>

              {/* When can you start */}
              <div>
                <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                  Earliest available start date
                </label>
                <input
                  type="date"
                  name="start_date"
                  className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink focus:outline-none focus:border-ink transition-colors"
                />
              </div>

              {/* Pitch */}
              <div>
                <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                  Why do you want to work at The Haven?
                </label>
                <textarea
                  name="pitch"
                  rows={5}
                  className="w-full bg-canvas border border-rule px-4 py-3 font-body text-[12px] text-ink placeholder:text-ink-low focus:outline-none focus:border-ink transition-colors resize-none"
                  placeholder="Tell us about yourself and what draws you to this kind of work..."
                />
              </div>

              {/* Resume */}
              <div>
                <label className="block font-body text-[9px] font-medium tracking-[0.25em] uppercase text-ink-mid mb-2">
                  Resume (optional)
                </label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full font-body text-[11px] text-ink-mid file:mr-4 file:font-body file:text-[9px] file:font-medium file:tracking-[0.2em] file:uppercase file:border file:border-rule file:px-4 file:py-2 file:text-ink file:bg-canvas hover:file:bg-rule file:transition-colors file:cursor-pointer"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center font-body text-[10px] font-medium tracking-[0.22em] uppercase bg-ink text-canvas px-8 py-4 hover:bg-ink-faint transition-colors"
              >
                Submit Application
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
