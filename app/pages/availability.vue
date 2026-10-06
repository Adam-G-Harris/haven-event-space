<script setup lang="ts">
useSeoMeta({
  title: "Availability | The Haven Event Space",
  description:
    "Check available dates at The Haven Event Space. Most Saturdays book 12–18 months in advance.",
});

const stats = [
  { value: "12–18", label: "Months in advance", text: "Typical booking lead time for Saturday dates. Start your search early." },
  { value: "7 days", label: "Tours available", text: "Schedule a walkthrough any day of the week — in person or virtual." },
  { value: "1", label: "Event per day", text: "Your day, exclusively. No other events share the property." },
];
</script>

<template>
  <div>
    <UiPageHeader
      label="Check dates"
      title="Availability"
      subtitle="Most Saturday dates book 12–18 months in advance. Weekday and Sunday dates have more flexibility. Contact us to confirm any specific date."
    />

    <!-- Booking notice -->
    <section class="section">
      <div class="container">
        <div class="cells cells--3-lg">
          <UiReveal v-for="(stat, i) in stats" :key="stat.label" :delay="i * 0.06">
            <div class="cell">
              <div class="stat__value">{{ stat.value }}</div>
              <div class="stat__label">{{ stat.label }}</div>
              <p class="stat__text">{{ stat.text }}</p>
            </div>
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- Availability calendar placeholder -->
    <section class="section section--darker">
      <div class="container">
        <UiReveal>
          <div class="label-line">
            <span class="eyebrow">Live calendar</span>
          </div>
        </UiReveal>

        <UiReveal :delay="0.08">
          <!-- Calendar embed placeholder: swap for real Calendly/booking iframe -->
          <div class="calendar">
            <svg class="calendar__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div class="calendar__text">
              <p class="calendar__title">Availability calendar</p>
              <!-- PLACEHOLDER: embed Calendly or booking widget here -->
              <p class="calendar__note">Booking calendar integration coming soon</p>
            </div>
            <a
              href="https://calendly.com/thehaveneventspace"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--sm btn--light calendar__btn"
            >
              Check via Calendly
            </a>
          </div>
        </UiReveal>
      </div>
    </section>

    <!-- Request a date CTA -->
    <section class="section cta">
      <div class="container cta__inner">
        <UiReveal>
          <h2 class="display cta__title">See a date<br />you love?</h2>
          <p class="body-text cta__text">Reach out now — dates go fast, especially in spring and fall.</p>
        </UiReveal>
        <UiReveal :delay="0.1">
          <div class="cta__buttons">
            <a
              href="https://calendly.com/thehaveneventspace"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--solid"
            >
              Schedule a Tour
            </a>
            <NuxtLink to="/contact" class="btn btn--outline">Contact Us</NuxtLink>
          </div>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.stat__value {
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0.03em;
  color: var(--color-ink);
}
.stat__label {
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}
.stat__text {
  margin-top: 1rem;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--color-ink-low);
}

.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 500px;
  border: 1px solid var(--color-rule-dark);
  background: var(--color-surface-dark);
}
.calendar__icon {
  width: 2rem;
  height: 2rem;
  color: var(--color-ink-faint);
}
.calendar__text {
  text-align: center;
}
.calendar__title {
  margin-bottom: 0.25rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}
.calendar__note {
  font-size: 11px;
  color: var(--color-ink-faint);
}
.calendar__btn {
  margin-top: 0.5rem;
  padding: 0.75rem 1.5rem;
}

.cta {
  padding-block: 5rem;
}
.cta__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
}
.cta__title {
  font-size: clamp(36px, 5vw, 56px);
}
.cta__text {
  max-width: 400px;
  margin-top: 1rem;
}
.cta__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
@media (min-width: 1024px) {
  .cta__inner {
    flex-direction: row;
    align-items: flex-end;
  }
}
</style>
