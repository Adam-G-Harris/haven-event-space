<script setup lang="ts">
useSeoMeta({
  title: "About | The Haven Event Space",
  description:
    "Learn the story behind The Haven — Kansas City's most technically advanced event venue on 40 private acres in Louisburg, KS.",
});

const STATS = [
  { value: "2021", label: "Est." },
  { value: "40", label: "Private acres" },
  { value: "11k", label: "Sq ft indoor" },
  { value: "500", label: "Max capacity" },
];

const AWARDS = [
  {
    org: "The Knot",
    icon: "/awards/the-knot.png",
    award: "Best of Weddings",
    years: "2022, 2023, 2024",
  },
  {
    org: "WeddingWire",
    icon: "/awards/weddingwire.png",
    award: "Couples' Choice Award",
    years: "2022, 2023, 2024",
  },
  {
    org: "WedKC",
    icon: "/awards/wedkc.png",
    award: "Venue of the Year Finalist",
    years: "2023, 2024",
  },
];

const TEAM = [
  { name: "Blake Harris", role: "Owner & Founder", note: "// PLACEHOLDER: headshot" },
  { name: "Team Member", role: "Event Coordinator", note: "// PLACEHOLDER: headshot" },
  { name: "Team Member", role: "Operations", note: "// PLACEHOLDER: headshot" },
];
</script>

<template>
  <UiPageHeader
    label="Our story"
    title="Not renovated."
    title-italic="Built."
    subtitle="The Haven didn't happen by accident. It took years of obsessive planning to get every detail right."
  />

  <!-- Story -->
  <section class="section story">
    <div class="container story__grid">
      <UiReveal>
        <div class="placeholder story__photo">
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span class="placeholder__label">Venue exterior // PLACEHOLDER</span>
        </div>
      </UiReveal>

      <UiReveal :delay="0.12">
        <div class="story__copy">
          <p>
            The Haven was designed and built from the ground up with one
            singular purpose: to create a venue so technically advanced, so
            architecturally considered, that every event held here becomes
            unforgettable. Not because of one standout feature — but because of
            the thousands of details that disappear into the experience.
          </p>
          <p>
            Founded by Blake Harris in 2021, The Haven sits on 40 private acres
            in Louisburg, Kansas. The 11,000+ sq ft indoor space is
            complemented by manicured outdoor grounds, all exclusively yours for
            the day. No shared walls. No neighboring weddings. No compromises.
          </p>
          <p>
            We obsess over the things that most couples never think to ask
            about: the acoustic profile of the main hall, the sightlines from
            every seat, the color temperature of the ceremony lighting. When
            everything is right, people don't notice the details. They just feel
            them.
          </p>
          <a
            href="https://calendly.com/thehaveneventspace"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--solid btn--sm story__cta"
          >
            Schedule a Tour
          </a>
        </div>
      </UiReveal>
    </div>
  </section>

  <!-- Stats strip -->
  <section class="stats">
    <div v-for="s in STATS" :key="s.label" class="stats__item">
      <div class="stats__value">{{ s.value }}</div>
      <div class="stats__label">{{ s.label }}</div>
    </div>
  </section>

  <!-- Awards -->
  <section class="section">
    <div class="container">
      <UiReveal>
        <div class="label-line">
          <span class="eyebrow">Recognition</span>
        </div>
      </UiReveal>

      <div class="cells cells--3-sm">
        <UiReveal v-for="(a, i) in AWARDS" :key="a.org" :delay="i * 0.08">
          <div class="cell">
            <img :src="a.icon" :alt="`${a.org} logo`" class="awards__logo" />
            <div class="awards__name">{{ a.award }}</div>
            <div class="awards__years">{{ a.years }}</div>
          </div>
        </UiReveal>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="section section--darker">
    <div class="container">
      <UiReveal>
        <div class="label-line">
          <span class="eyebrow">The team</span>
        </div>
      </UiReveal>

      <div class="cells cells--3-sm">
        <UiReveal v-for="(member, i) in TEAM" :key="`${member.name}-${i}`" :delay="i * 0.08">
          <div class="cell">
            <div class="placeholder team__photo">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span class="placeholder__label team__note">{{ member.note }}</span>
            </div>
            <div class="team__name">{{ member.name }}</div>
            <div class="team__role">{{ member.role }}</div>
          </div>
        </UiReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story {
  padding-block: 5rem;
}
.story__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
}

.story__photo {
  aspect-ratio: 4 / 5;
}

.story__copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  height: 100%;
}
.story__copy p {
  font-size: 14px;
  font-weight: 300;
  line-height: 2;
  color: var(--color-ink-low);
}
.story__cta {
  align-self: flex-start;
}

/* Stats strip */
.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: var(--color-ink);
  border-bottom: 1px solid var(--color-rule-dark);
}
.stats__item {
  padding: 2.5rem 2rem;
  text-align: center;
}
.stats__item:nth-child(even) {
  border-left: 1px solid var(--color-rule-dark);
}
.stats__value {
  font-family: var(--font-display);
  font-size: 42px;
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--color-canvas);
}
.stats__label {
  margin-top: 0.5rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}

/* Awards */
.awards__logo {
  width: auto;
  height: 1.5rem;
  margin-bottom: 1rem;
  object-fit: contain;
  object-position: left;
}
.awards__name {
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  font-size: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-ink);
}
.awards__years {
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--color-ink-low);
}

/* Team */
.team__photo {
  aspect-ratio: 1;
  margin-bottom: 1.5rem;
}
.team__note {
  font-size: 7px;
  letter-spacing: 0.25em;
}
.team__name {
  margin-bottom: 0.25rem;
  font-family: var(--font-display);
  font-size: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-canvas);
}
.team__role {
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}

@media (min-width: 768px) {
  .stats {
    grid-template-columns: repeat(4, 1fr);
  }
  .stats__item:not(:first-child) {
    border-left: 1px solid var(--color-rule-dark);
  }
}

@media (min-width: 1024px) {
  .story {
    padding-block: 7rem;
  }
  .story__grid {
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
  }
}
</style>
