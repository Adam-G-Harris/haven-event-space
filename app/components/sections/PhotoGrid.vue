<script setup lang="ts">
const CELLS = [
  "Main hall — ceremony setup",
  "Outdoor ceremony arch",
  "Bridal suite vanity",
  "Reception — golden hour",
];
</script>

<template>
  <section class="photos">
    <UiReveal :y="8">
      <!-- Desktop: 3 columns, 2 rows, the main photo spans both rows. Mobile: stacked. -->
      <div class="photos__grid">
        <div v-for="(label, i) in CELLS" :key="label" class="photos__cell" :class="`photos__cell--${i}`">
          <div class="placeholder photos__placeholder">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="placeholder__label">{{ label }}</span>
          </div>
        </div>

        <div class="photos__link-cell">
          <NuxtLink to="/gallery" class="photos__link">View Full Gallery</NuxtLink>
        </div>
      </div>
    </UiReveal>
  </section>
</template>

<style scoped>
.photos {
  background: var(--color-canvas);
  border-bottom: 1px solid var(--color-rule);
}

.photos__grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(280px, 1fr));
  border-top: 1px solid var(--color-rule);
}

.photos__cell {
  border-bottom: 1px solid var(--color-rule);
}

.photos__placeholder {
  width: 100%;
  height: 100%;
  min-height: 220px;
}

.photos__link-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2rem;
  background: var(--color-ink);
}

.photos__link {
  padding-bottom: 0.25rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-canvas);
  border-bottom: 1px solid var(--color-rule-dark);
  transition: border-color 0.15s;
}
.photos__link:hover {
  border-bottom-color: var(--color-canvas);
}

@media (min-width: 768px) {
  .photos__grid {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Main photo spans both rows */
  .photos__cell--0 {
    grid-row: span 2;
    border-right: 1px solid var(--color-rule);
  }
  .photos__cell--1 {
    border-right: 1px solid var(--color-rule);
  }
  .photos__cell--3 {
    border-right: 1px solid var(--color-rule);
    border-bottom: 0;
  }
}
</style>
