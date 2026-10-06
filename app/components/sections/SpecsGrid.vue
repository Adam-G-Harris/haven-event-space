<script setup lang="ts">
import {
  IconBulb,
  IconVolume,
  IconDoor,
  IconTree,
  IconLock,
  IconBuildingWarehouse,
} from "@tabler/icons-vue";

const SPECS = [
  {
    icon: IconBulb,
    title: "Cinematic Lighting",
    body: "Full programmable RGB wash, pinspot arrays, and gobo projection. Every look, any mood.",
    detail: "100+ fixtures · DMX control",
  },
  {
    icon: IconVolume,
    title: "Immersive Sound",
    body: "Meyer Sound system engineered for the space. Crystal clear from first row to last.",
    detail: "Line array · Subwoofer array",
  },
  {
    icon: IconDoor,
    title: "Two Massive Suites",
    body: "Private bridal and groom suites — private bathrooms, lounge seating, full vanity mirrors.",
    detail: "600+ sq ft each",
  },
  {
    icon: IconTree,
    title: "Indoor Meets Outdoor",
    body: "Seamless flow between the main hall and our manicured outdoor ceremony space.",
    detail: "40 acres · Paved paths",
  },
  {
    icon: IconLock,
    title: "Total Privacy",
    body: "One event at a time. Your day, your venue — no shared walls, no neighboring weddings.",
    detail: "Exclusive access · Gated entry",
  },
  {
    icon: IconBuildingWarehouse,
    title: "Vendor Infrastructure",
    body: "Commercial kitchen prep space, dedicated load-in bay, 400A power, high-speed Wi-Fi.",
    detail: "Caterer-ready · DJ-ready",
  },
];
</script>

<template>
  <section class="section section--darker specs">
    <div class="container">
      <UiReveal>
        <div class="label-line">
          <span class="eyebrow">What we built</span>
        </div>
      </UiReveal>

      <div class="cells cells--2 cells--3-lg specs__grid">
        <UiReveal v-for="(spec, i) in SPECS" :key="spec.title" :delay="i * 0.06">
          <div class="cell">
            <component :is="spec.icon" :size="20" class="specs__icon" />
            <div class="specs__title">{{ spec.title }}</div>
            <p class="specs__body">{{ spec.body }}</p>
            <div class="specs__detail">{{ spec.detail }}</div>
          </div>
        </UiReveal>
      </div>
    </div>
  </section>
</template>

<style scoped>
.specs {
  border-bottom: 0;
}

.label-line {
  margin-bottom: 4rem;
}

.specs__icon {
  margin-bottom: 1.25rem;
  color: var(--color-ink-low);
}

.specs__title {
  margin-bottom: 0.75rem;
  font-family: var(--font-display);
  font-size: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-canvas);
}

.specs__body {
  margin-bottom: 1rem;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--color-ink-low);
}

.specs__detail {
  padding-top: 1rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
  border-top: 1px solid var(--color-rule-dark);
}
</style>
