<script setup lang="ts">
const VENUES = [
  {
    num: "01",
    name: "The Lincoln",
    location: "Ottawa, KS",
    desc: "Historic downtown post office reimagined as an intimate event venue.",
    guests: "Up to 200 guests",
    price: "$4,000–$6,000",
  },
  {
    num: "02",
    name: "Victorian Estate",
    location: "Platte City, MO",
    desc: "Grand Victorian estate with overnight lodging for 14 on rolling grounds.",
    guests: "Up to 300 guests",
    price: "$6,000–$10,500",
  },
  {
    num: "03",
    name: "The Fields",
    location: "Platte City, MO",
    desc: "Hillside amphitheater meets rustic barn — open air and completely private.",
    guests: "Up to 100 guests",
    price: "$4,000–$6,500",
  },
];
</script>

<template>
  <section class="section section--dark venues">
    <div class="container">
      <UiReveal>
        <div class="venues__head">
          <div>
            <div class="label-line venues__label">
              <span class="eyebrow">The Haven Properties</span>
            </div>
            <h2 class="display venues__title">Our venues</h2>
          </div>
          <NuxtLink to="/locations" class="venues__all">See all locations</NuxtLink>
        </div>
      </UiReveal>

      <div class="cells cells--3">
        <UiReveal v-for="(venue, i) in VENUES" :key="venue.name" :delay="i * 0.08">
          <div class="cell venues__card">
            <div class="venues__num">{{ venue.num }}</div>
            <div class="venues__name">{{ venue.name }}</div>
            <div class="venues__location">{{ venue.location }}</div>
            <p class="venues__desc">{{ venue.desc }}</p>
            <div class="venues__meta">
              <span>{{ venue.guests }}</span>
              <span>{{ venue.price }}</span>
            </div>
          </div>
        </UiReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.venues {
  border-bottom: 0;
}

.venues__head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.venues__label {
  margin-bottom: 1rem;
}

.venues__title {
  font-size: clamp(36px, 5vw, 56px);
}

.venues__all {
  flex-shrink: 0;
  padding-bottom: 0.25rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
  border-bottom: 1px solid var(--color-rule-dark);
  transition: color 0.15s, border-color 0.15s;
}
.venues__all:hover {
  color: var(--color-canvas);
  border-bottom-color: var(--color-canvas);
}

.venues__card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.venues__num {
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
  font-size: 11px;
  letter-spacing: 0.3em;
  color: var(--color-ink-mid);
}

.venues__name {
  margin-bottom: 0.25rem;
  font-family: var(--font-display);
  font-size: 22px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-canvas);
}

.venues__location {
  margin-bottom: 1.5rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}

.venues__desc {
  flex: 1;
  margin-bottom: 2rem;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--color-ink-low);
}

.venues__meta {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
  font-size: 9px;
  letter-spacing: 0.15em;
  color: var(--color-ink-mid);
  border-top: 1px solid var(--color-rule-dark);
}
</style>
