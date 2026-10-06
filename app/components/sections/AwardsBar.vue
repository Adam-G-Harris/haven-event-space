<script setup lang="ts">
import { IconStar } from "@tabler/icons-vue";

const AWARDS = [
  { org: "The Knot", title: "Best of Weddings", years: "2022 · 2023 · 2024" },
  { org: "WeddingWire", title: "Couples' Choice", years: "2022 · 2023 · 2024" },
  { org: "WedKC", title: "Venue of the Year Finalist", years: "2023 · 2024" },
];
</script>

<template>
  <div class="awards">
    <div v-for="award in AWARDS" :key="award.title" class="awards__item">
      <IconStar :size="14" class="awards__icon" />
      <div>
        <div class="awards__org">{{ award.org }}</div>
        <div class="awards__title">{{ award.title }} — {{ award.years }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.awards {
  display: grid;
  grid-template-columns: 1fr;
  background: var(--color-canvas);
  border-bottom: 1px solid var(--color-rule);
}

.awards__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2rem;
}
.awards__item + .awards__item {
  border-top: 1px solid var(--color-rule);
}

.awards__icon {
  flex-shrink: 0;
  color: var(--color-ink-mid);
}

.awards__org {
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}

.awards__title {
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--color-ink);
}

@media (min-width: 640px) {
  .awards {
    grid-template-columns: repeat(3, 1fr);
  }
  .awards__item + .awards__item {
    border-top: 0;
    border-left: 1px solid var(--color-rule);
  }
}
</style>
