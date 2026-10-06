<script setup lang="ts">
import { IconPhoto, IconPlayerPlay } from "@tabler/icons-vue";

useSeoMeta({
  title: "Gallery | The Haven Event Space",
  description:
    "Browse photos of The Haven Event Space — ceremonies, receptions, outdoor spaces, and luxury suites.",
});

const CATEGORIES = ["All", "Ceremony", "Reception", "Outdoor", "Suites", "Details"];

const PHOTOS = [
  { label: "Main hall — ceremony setup", size: "large" },
  { label: "Reception — full room", size: "medium" },
  { label: "Outdoor ceremony arch", size: "medium" },
  { label: "Bridal suite", size: "small" },
  { label: "Groom suite", size: "small" },
  { label: "Dance floor — golden hour light", size: "large" },
  { label: "Table detail — centerpiece", size: "small" },
  { label: "Outdoor cocktail hour", size: "medium" },
  { label: "Head table — ceremony backdrop", size: "medium" },
  { label: "Lighting program — blue wash", size: "small" },
  { label: "Aerial — property overview", size: "large" },
  { label: "Bar setup", size: "small" },
];
</script>

<template>
  <div>
    <UiPageHeader
      label="Gallery"
      title="The space"
      title-italic="in detail."
      subtitle="Every corner of The Haven was designed to be photographed. Here's proof."
      dark
    />

    <!-- Category filter: static for now, JS filtering to be added in Phase 4 -->
    <div class="filters">
      <div class="filters__inner">
        <button
          v-for="(cat, i) in CATEGORIES"
          :key="cat"
          class="filters__btn"
          :class="{ 'is-active': i === 0 }"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Video feature -->
    <section class="video">
      <UiReveal :y="6">
        <div class="video__box">
          <IconPlayerPlay :size="48" :stroke="0.75" />
          <span class="video__label">Virtual tour video // PLACEHOLDER</span>
        </div>
      </UiReveal>
    </section>

    <!-- Photo grid -->
    <section class="photos">
      <UiReveal :y="4">
        <div class="photos__grid">
          <div v-for="photo in PHOTOS" :key="photo.label" class="photos__cell">
            <div class="placeholder photo" :class="`photo--${photo.size}`">
              <IconPhoto :size="20" :stroke="1" />
              <span class="photo__label">{{ photo.label }}</span>
            </div>
          </div>
        </div>
      </UiReveal>
    </section>
  </div>
</template>

<style scoped>
.filters {
  background: var(--color-ink);
  border-bottom: 1px solid var(--color-rule-dark);
}
.filters__inner {
  display: flex;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  overflow-x: auto;
}
@media (min-width: 768px) {
  .filters__inner {
    padding-inline: 2.5rem;
  }
}
.filters__btn {
  padding-bottom: 2px;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--color-ink-mid);
  border-bottom: 1px solid transparent;
  transition: color 0.15s;
}
.filters__btn:hover,
.filters__btn.is-active {
  color: var(--color-canvas);
}
.filters__btn.is-active {
  border-bottom-color: var(--color-canvas);
}

.video {
  background: var(--color-ink);
  border-bottom: 1px solid var(--color-rule-dark);
}
.video__box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  aspect-ratio: 16 / 9;
  background: var(--color-surface-darker);
  color: var(--color-ink-faint);
}
.video__label {
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
}

.photos {
  background: var(--color-ink);
}
.photos__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--color-rule-dark);
  border-left: 1px solid var(--color-rule-dark);
}
@media (min-width: 768px) {
  .photos__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .photos__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
.photos__cell {
  overflow: hidden;
  cursor: pointer;
  border-right: 1px solid var(--color-rule-dark);
  border-bottom: 1px solid var(--color-rule-dark);
}

.photo--large {
  aspect-ratio: 4 / 3;
}
.photo--medium {
  aspect-ratio: 1 / 1;
}
.photo--small {
  aspect-ratio: 3 / 4;
}
.photo__label {
  padding-inline: 1rem;
  font-size: 7px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-align: center;
  text-transform: uppercase;
}
</style>
