<script setup lang="ts">
import {
  IconCheck,
  IconStar,
  IconBuildingSkyscraper,
  IconHeart,
} from "@tabler/icons-vue";

useSeoMeta({
  title: "Pricing | The Haven Event Space",
  description:
    "Transparent venue pricing, bar packages, and specialty event rates for The Haven Event Space in Louisburg, KS.",
});

const VENUE_PACKAGES = [
  { day: "Monday – Thursday", price: "$6,500", hours: "9am – 11pm", highlight: false },
  { day: "Friday & Sunday", price: "$8,500", hours: "9am – 11pm", highlight: false },
  { day: "Saturday", price: "$10,500", hours: "9am – 11pm", highlight: true },
];

const VENUE_INCLUDES = [
  "Exclusive venue access",
  "Bridal & groom suites",
  "Full lighting & sound system",
  "Indoor + outdoor spaces",
  "Vendor infrastructure",
  "On-site coordination team",
];

const BAR_PACKAGES = [
  {
    tier: "Bronze",
    sub: "Beer & Wine",
    rates: [
      { hours: "4 hr", price: "$26 / guest" },
      { hours: "5 hr", price: "$29 / guest" },
      { hours: "6 hr", price: "$32 / guest" },
    ],
    perks: [] as string[],
  },
  {
    tier: "Silver",
    sub: "Beer, Wine & Call Liquor",
    rates: [
      { hours: "4 hr", price: "$30 / guest" },
      { hours: "5 hr", price: "$33 / guest" },
      { hours: "6 hr", price: "$36 / guest" },
    ],
    perks: ["1 complimentary signature cocktail"],
  },
  {
    tier: "Gold",
    sub: "Beer, Wine & Premium Liquor",
    rates: [
      { hours: "4 hr", price: "$35 / guest" },
      { hours: "5 hr", price: "$38 / guest" },
      { hours: "6 hr", price: "$41 / guest" },
    ],
    perks: ["2 complimentary signature cocktails"],
  },
];

const BAR_ADDONS = [
  "Additional service hours: +$3 / hr / guest",
  "Guests under 21: $7 / guest",
  "Champagne wall add-on available",
  "Custom signature cocktail add-on available",
  "Military / First Responder / EMS: 10% discount",
];

const SPECIAL_EVENTS = [
  {
    icon: IconHeart,
    title: "Private Parties",
    blurb:
      "Family reunions, milestone birthdays, graduation celebrations, and more. We'll build a package around your event.",
    items: [
      "Family reunions",
      "Birthday parties",
      "Graduation celebrations",
      "10% off for Louisburg, KS graduates",
    ],
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Corporate Events",
    blurb:
      "Conferences, product launches, corporate retreats, and holiday parties. Technical infrastructure purpose-built for production.",
    items: [
      "Conferences & seminars",
      "Corporate holiday parties",
      "Product launches & special events",
      "10% off for Active/Retired Military, Police, Fire & EMS",
    ],
  },
];
</script>

<template>
  <UiPageHeader
    label="Investment"
    title="Pricing &"
    title-italic="packages."
    subtitle="Transparent, all-inclusive pricing with no hidden fees. Holiday pricing available upon request."
  />

  <!-- Venue rates -->
  <section class="section">
    <div class="container">
      <UiReveal>
        <div class="label-line">
          <span class="eyebrow">Venue rental</span>
        </div>
      </UiReveal>

      <div class="cells cells--3">
        <UiReveal v-for="(pkg, i) in VENUE_PACKAGES" :key="pkg.day" :delay="i * 0.08">
          <div class="cell venue" :class="{ 'is-highlight': pkg.highlight }">
            <div class="venue__day">{{ pkg.day }}</div>
            <div class="venue__price">{{ pkg.price }}</div>
            <div class="venue__hours">{{ pkg.hours }}</div>
            <div class="venue__includes">
              <div v-for="item in VENUE_INCLUDES" :key="item" class="venue__item">
                <IconCheck :size="12" />
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </UiReveal>
      </div>

      <UiReveal :delay="0.2">
        <p class="venue__note">
          * Holiday pricing by request. All packages run 9am–11pm (14 hours of
          exclusive access).
        </p>
      </UiReveal>
    </div>
  </section>

  <!-- Bar packages -->
  <section class="section section--darker">
    <div class="container">
      <UiReveal>
        <div class="label-line">
          <span class="eyebrow">Bar packages</span>
        </div>
      </UiReveal>

      <div class="cells cells--3">
        <UiReveal v-for="(pkg, i) in BAR_PACKAGES" :key="pkg.tier" :delay="i * 0.08">
          <div class="cell">
            <div class="bar__tier">{{ pkg.tier }}</div>
            <div class="bar__sub">{{ pkg.sub }}</div>

            <div class="bar__rates">
              <div v-for="r in pkg.rates" :key="r.hours" class="bar__rate">
                <span class="bar__hours">{{ r.hours }}</span>
                <span class="bar__price">{{ r.price }}</span>
              </div>
            </div>

            <div v-for="perk in pkg.perks" :key="perk" class="bar__perk">
              <IconStar :size="10" />
              <span>{{ perk }}</span>
            </div>
          </div>
        </UiReveal>
      </div>

      <UiReveal :delay="0.2">
        <div class="addons">
          <div class="addons__title">Add-ons & notes</div>
          <div class="addons__list">
            <div v-for="item in BAR_ADDONS" :key="item" class="addons__item">
              <span class="addons__dash">—</span>
              <span>{{ item }}</span>
            </div>
          </div>
        </div>
      </UiReveal>
    </div>
  </section>

  <!-- Private & corporate -->
  <section class="section">
    <div class="container">
      <div class="cells cells--2-md">
        <UiReveal v-for="(event, i) in SPECIAL_EVENTS" :key="event.title" :delay="i * 0.08">
          <div class="cell">
            <component :is="event.icon" :size="18" class="special__icon" />
            <div class="special__title">{{ event.title }}</div>
            <div class="special__sub">Custom quotes available</div>
            <p class="special__blurb">{{ event.blurb }}</p>
            <div class="special__items">
              <div v-for="item in event.items" :key="item" class="special__item">
                <IconCheck :size="11" />
                <span>{{ item }}</span>
              </div>
            </div>
          </div>
        </UiReveal>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section section--dark cta">
    <div class="container cta__inner">
      <UiReveal>
        <h2 class="display cta__title">Ready to book?</h2>
        <p class="body-text cta__body">
          Most Saturdays book 12–18 months out. Don't wait to secure your date.
        </p>
      </UiReveal>
      <UiReveal :delay="0.1">
        <div class="cta__buttons">
          <a
            href="https://calendly.com/thehaveneventspace"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--light"
          >
            Schedule a Tour
          </a>
          <NuxtLink to="/contact" class="btn btn--outline">Get a Custom Quote</NuxtLink>
        </div>
      </UiReveal>
    </div>
  </section>
</template>

<style scoped>
/* Venue rental cards */
.venue {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.venue.is-highlight {
  background: var(--color-ink);
}

.venue__day {
  margin-bottom: 1rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}

.venue__price {
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  font-size: 52px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: var(--color-ink);
}
.is-highlight .venue__price {
  color: var(--color-canvas);
}

.venue__hours {
  margin-bottom: 2rem;
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--color-ink-low);
}

.venue__includes {
  margin-top: auto;
}

.venue__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--color-ink-mid);
}
.is-highlight .venue__item {
  color: var(--color-canvas);
}

.venue__note {
  margin-top: 1rem;
  font-size: 10px;
  letter-spacing: 0.05em;
  color: var(--color-ink-low);
}

/* Bar packages */
.bar__tier {
  margin-bottom: 0.25rem;
  font-family: var(--font-display);
  font-size: 24px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-canvas);
}

.bar__sub {
  margin-bottom: 2rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}

.bar__rates {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.bar__rate {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--color-rule-dark);
}

.bar__hours {
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-ink-low);
}

.bar__price {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: var(--color-canvas);
}

.bar__perk {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--color-ink-low);
}
.bar__perk svg {
  color: var(--color-ink-mid);
}

/* Add-ons */
.addons {
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  border: 1px solid var(--color-rule-dark);
}

.addons__title {
  margin-bottom: 1rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}

.addons__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

.addons__item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--color-ink-low);
}

.addons__dash {
  margin-top: 2px;
  font-size: 10px;
  color: var(--color-ink-faint);
}

/* Private parties & corporate */
.special__icon {
  margin-bottom: 1.25rem;
  color: var(--color-ink-mid);
}

.special__title {
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  font-size: 22px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink);
}

.special__sub {
  margin-bottom: 1.5rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}

.special__blurb {
  margin-bottom: 1.5rem;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.9;
  color: var(--color-ink-low);
}

.special__items {
  display: grid;
  gap: 0.5rem;
}

.special__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--color-ink-mid);
}
.special__item svg {
  flex-shrink: 0;
}

/* CTA */
.cta {
  border-bottom: 0;
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

.cta__body {
  max-width: 400px;
  margin-top: 1rem;
}

.cta__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (min-width: 640px) {
  .addons__list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .addons__list {
    grid-template-columns: repeat(3, 1fr);
  }
  .cta__inner {
    flex-direction: row;
    align-items: flex-end;
  }
}
</style>
