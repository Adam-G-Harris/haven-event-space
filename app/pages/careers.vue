<script setup lang="ts">
useSeoMeta({
  title: "Careers | The Haven Event Space",
  description:
    "Join the team at The Haven Event Space. Flexible weekend positions in event operations, bartending, and coordination.",
});

const DAYS = ["Friday", "Saturday", "Sunday"];

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
</script>

<template>
  <div>
    <UiPageHeader
      label="Join the team"
      title="Work with"
      title-italic="the best."
      subtitle="We're always looking for sharp, reliable people who care about delivering an exceptional guest experience."
    />

    <!-- No openings notice -->
    <section class="section notice-section">
      <div class="container">
        <UiReveal>
          <div class="notice">
            <div class="notice__bar" />
            <div>
              <div class="notice__title">Current openings</div>
              <p class="notice__text">
                No positions listed at this time. Fill out the general application below to be
                considered for future openings.
              </p>
            </div>
          </div>
        </UiReveal>
      </div>
    </section>

    <!-- Application form -->
    <section class="section">
      <div class="container container--narrow">
        <UiReveal>
          <div class="label-line">
            <span class="eyebrow">General application</span>
          </div>
        </UiReveal>

        <UiReveal :delay="0.06">
          <form class="form" action="#" method="POST">
            <!-- Position interest -->
            <div>
              <label class="form__label">Position interested in</label>
              <select name="position" class="form__field form__select">
                <option value="">Select a position</option>
                <option>Event Day Staff</option>
                <option>Bartender</option>
                <option>Event Coordinator</option>
                <option>Setup / Breakdown Crew</option>
                <option>General / Open to any role</option>
              </select>
            </div>

            <!-- Personal info -->
            <div class="form__row">
              <div>
                <label class="form__label">First name</label>
                <input type="text" name="first_name" required class="form__field" placeholder="First" />
              </div>
              <div>
                <label class="form__label">Last name</label>
                <input type="text" name="last_name" required class="form__field" placeholder="Last" />
              </div>
            </div>

            <div class="form__row">
              <div>
                <label class="form__label">Email address</label>
                <input
                  type="email"
                  name="email"
                  required
                  class="form__field"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label class="form__label">Phone number</label>
                <input type="tel" name="phone" class="form__field" placeholder="(913) 000-0000" />
              </div>
            </div>

            <!-- Availability -->
            <div>
              <label class="form__label form__label--lg">Weekend availability</label>
              <div class="checks checks--days">
                <label v-for="day in DAYS" :key="day" class="check">
                  <input type="checkbox" name="availability" :value="day.toLowerCase()" />
                  <span class="check__text">{{ day }}</span>
                </label>
              </div>
            </div>

            <!-- Which locations -->
            <div>
              <label class="form__label form__label--lg">Which location(s) are you interested in?</label>
              <div class="checks checks--locations">
                <label v-for="loc in LOCATIONS" :key="loc" class="check">
                  <input type="checkbox" name="locations" :value="loc" />
                  <span class="check__text check__text--loc">{{ loc }}</span>
                </label>
              </div>
            </div>

            <!-- Eligibility -->
            <div class="form__row">
              <div>
                <label class="form__label">Are you legally eligible to work in the US?</label>
                <select name="work_eligible" class="form__field form__select">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label class="form__label">Are you 21 years of age or older?</label>
                <select name="age_21" class="form__field form__select">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>

            <!-- Bartending experience -->
            <div>
              <label class="form__label">Bartending / service experience</label>
              <select name="bar_experience" class="form__field form__select">
                <option value="">Select</option>
                <option>No experience</option>
                <option>Less than 1 year</option>
                <option>1–2 years</option>
                <option>3–5 years</option>
                <option>5+ years</option>
              </select>
            </div>

            <!-- When can you start -->
            <div>
              <label class="form__label">Earliest available start date</label>
              <input type="date" name="start_date" class="form__field" />
            </div>

            <!-- Pitch -->
            <div>
              <label class="form__label">Why do you want to work at The Haven?</label>
              <textarea
                name="pitch"
                rows="5"
                class="form__field form__textarea"
                placeholder="Tell us about yourself and what draws you to this kind of work..."
              />
            </div>

            <!-- Resume -->
            <div>
              <label class="form__label">Resume (optional)</label>
              <input type="file" name="resume" accept=".pdf,.doc,.docx" class="form__file" />
            </div>

            <div>
              <button type="submit" class="btn btn--solid">Submit Application</button>
            </div>
          </form>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.notice-section {
  padding-block: 4rem;
}
.notice {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem 2rem;
  border: 1px solid var(--color-rule);
}
.notice__bar {
  flex-shrink: 0;
  align-self: stretch;
  width: 4px;
  min-height: 2rem;
  background: var(--color-ink-faint);
}
.notice__title {
  margin-bottom: 0.25rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}
.notice__text {
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--color-ink-low);
}

.container--narrow {
  max-width: 900px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.form__row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .form__row {
    grid-template-columns: repeat(2, 1fr);
  }
}

.form__label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}
.form__label--lg {
  margin-bottom: 0.75rem;
}

.form__field {
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: 12px;
  color: var(--color-ink);
  background: var(--color-canvas);
  border: 1px solid var(--color-rule);
  border-radius: 0;
  transition: border-color 0.15s;
}
.form__field::placeholder {
  color: var(--color-ink-low);
}
.form__field:focus {
  outline: none;
  border-color: var(--color-ink);
}
.form__select {
  appearance: none;
}
.form__textarea {
  resize: none;
}

.checks {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}
.checks--days {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
@media (min-width: 640px) {
  .checks--locations {
    grid-template-columns: repeat(2, 1fr);
  }
}
.check {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.check input {
  width: 1rem;
  height: 1rem;
  accent-color: var(--color-ink);
}
.check__text {
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--color-ink-mid);
}
.check__text--loc {
  letter-spacing: 0.06em;
}

.form__file {
  width: 100%;
  font-family: var(--font-body);
  font-size: 11px;
  color: var(--color-ink-mid);
}
.form__file::file-selector-button {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  font-family: var(--font-body);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-ink);
  background: var(--color-canvas);
  border: 1px solid var(--color-rule);
  cursor: pointer;
  transition: background-color 0.15s;
}
.form__file::file-selector-button:hover {
  background: var(--color-rule);
}
</style>
