<script setup lang="ts">
useSeoMeta({
  title: "Our Venues | The Haven Properties",
  description:
    "The Haven Properties owns and operates multiple award-winning event venues across the Kansas City metro area.",
});

const VENUES = [
  {
    num: "01",
    name: "The Haven",
    tag: "Flagship",
    location: "Louisburg, Kansas",
    type: "Contemporary farmhouse",
    desc: "Our flagship — 11,000+ sq ft of architectural precision on 40 private acres. Cinematic lighting, immersive sound, two luxury suites, and total privacy. The most technically advanced event venue in KC.",
    guests: "Up to 500 guests",
    price: "$6,500 – $10,500",
    href: "/",
    features: ["40 private acres", "Meyer Sound system", "100+ programmable fixtures", "Two 600+ sq ft suites", "1 event per day"],
    current: true,
  },
  {
    num: "02",
    name: "The Lincoln",
    tag: null,
    location: "Ottawa, Kansas",
    type: "Historic post office",
    desc: "A beautifully reimagined downtown post office in Ottawa, KS — preserved architectural details meet modern event infrastructure. Intimate and characterful.",
    guests: "Up to 200 guests",
    price: "$4,000 – $6,000",
    href: null,
    features: ["Historic building", "Downtown location", "Intimate capacity", "Modern AV infrastructure"],
    current: false,
  },
  {
    num: "03",
    name: "Victorian Estate",
    tag: null,
    location: "Platte City, Missouri",
    type: "Victorian estate + lodging",
    desc: "A grand Victorian estate on rolling grounds. The only Haven Properties venue with overnight lodging — up to 14 guests on-site. Perfect for multi-day destination events.",
    guests: "Up to 300 guests",
    price: "$6,000 – $10,500",
    href: null,
    features: ["On-site lodging for 14", "Rolling estate grounds", "Grand interior spaces", "Multi-day events"],
    current: false,
  },
  {
    num: "04",
    name: "The Fields",
    tag: null,
    location: "Platte City, Missouri",
    type: "Hillside amphitheater + barn",
    desc: "A hillside amphitheater meets a rustic barn in Platte City's open countryside. Entirely open-air with a completely private 100-acre setting. The most dramatic outdoor venue in the portfolio.",
    guests: "Up to 100 guests",
    price: "$4,000 – $6,500",
    href: null,
    features: ["Hillside amphitheater", "Rustic barn structure", "100% outdoor", "Total seclusion"],
    current: false,
  },
];
</script>

<template>
  <div>
    <UiPageHeader
      label="The Haven Properties"
      title="Our venues"
      subtitle="A portfolio of award-winning event spaces across the Kansas City metro — each with its own character, all sharing the same obsession with detail."
      dark
    />

    <!-- Venue cards -->
    <section class="venues">
      <UiReveal v-for="(venue, i) in VENUES" :key="venue.name" :delay="i * 0.06">
        <div class="venue" :class="{ 'is-current': venue.current }">
          <div class="container venue__inner">
            <!-- Left: meta -->
            <div class="venue__meta">
              <div class="venue__num">{{ venue.num }}</div>
              <div v-if="venue.tag" class="venue__tag">{{ venue.tag }}</div>
              <div class="venue__name">{{ venue.name }}</div>
              <div class="venue__location">{{ venue.location }}</div>
              <div class="venue__type">{{ venue.type }}</div>
            </div>

            <!-- Center: description + features -->
            <div class="venue__body">
              <p class="venue__desc">{{ venue.desc }}</p>
              <div class="venue__features">
                <div v-for="f in venue.features" :key="f" class="venue__feature">
                  <span class="venue__dash">—</span>
                  <span class="venue__feature-text">{{ f }}</span>
                </div>
              </div>
            </div>

            <!-- Right: pricing + CTA -->
            <div class="venue__side">
              <div>
                <div class="venue__side-label">Capacity</div>
                <div class="venue__side-value venue__side-value--spaced">{{ venue.guests }}</div>
                <div class="venue__side-label">Starting from</div>
                <div class="venue__side-value">{{ venue.price }}</div>
              </div>

              <a
                v-if="venue.current"
                href="https://calendly.com/thehaveneventspace"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn--light venue__btn"
              >
                Schedule Tour
              </a>
              <NuxtLink v-else to="/contact" class="btn btn--outline venue__btn venue__btn--outline">
                Inquire
              </NuxtLink>
            </div>
          </div>
        </div>
      </UiReveal>
    </section>

    <!-- Company blurb -->
    <section class="section">
      <div class="container blurb">
        <UiReveal>
          <h2 class="display blurb__title">
            The Haven<br />
            <em>Properties.</em>
          </h2>
        </UiReveal>
        <UiReveal :delay="0.1">
          <p class="blurb__text">
            Founded by Blake Harris, The Haven Properties is a growing
            portfolio of event venues across the Kansas City metropolitan area.
            Each venue is selected, designed, and operated with the same
            standard: total guest immersion, technical excellence, and privacy
            that lets the event breathe. No two venues are alike. All of them
            are exceptional.
          </p>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.venues {
  background: var(--color-ink);
}

.venue {
  border-bottom: 1px solid var(--color-rule-dark);
}
.venue.is-current {
  background: var(--color-surface-dark);
}

.venue__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-block: 4rem;
}

.venue__num {
  margin-bottom: 1rem;
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.3em;
  color: var(--color-ink-mid);
}
.venue__tag {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.25rem 0.5rem;
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-canvas);
  border: 1px solid var(--color-rule-dark);
}
.venue__name {
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  font-size: 28px;
  line-height: 1;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-canvas);
}
.venue__location {
  margin-bottom: 0.25rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}
.venue__type {
  font-size: 9px;
  letter-spacing: 0.1em;
  color: var(--color-ink-faint);
}

.venue__desc {
  margin-bottom: 2rem;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.9;
  color: var(--color-ink-low);
}
.venue__features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
}
.venue__feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.venue__dash {
  font-size: 10px;
  color: var(--color-ink-faint);
}
.venue__feature-text {
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--color-ink-mid);
}

.venue__side {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
}
.venue__side-label {
  margin-bottom: 0.25rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}
.venue__side-value {
  font-size: 12px;
  color: var(--color-ink-low);
}
.venue__side-value--spaced {
  margin-bottom: 1rem;
}
.venue__btn {
  align-self: flex-start;
  padding: 0.75rem 1.25rem;
}
.venue__btn--outline {
  border-color: var(--color-rule-dark);
}
.venue__btn--outline:hover {
  color: var(--color-canvas);
  border-color: var(--color-ink-mid);
}

.blurb {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}
.blurb__title {
  font-size: clamp(36px, 5vw, 56px);
}
.blurb__text {
  font-size: 14px;
  font-weight: 300;
  line-height: 2;
  color: var(--color-ink-low);
}

@media (min-width: 1024px) {
  .venue__inner {
    grid-template-columns: repeat(5, 1fr);
    gap: 4rem;
    padding-block: 5rem;
  }
  .venue__meta,
  .venue__side {
    grid-column: span 1;
  }
  .venue__body {
    grid-column: span 3;
  }
  .blurb {
    grid-template-columns: repeat(2, 1fr);
    gap: 8rem;
  }
}
</style>
