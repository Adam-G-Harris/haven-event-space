<script setup lang="ts">
import { IconPhoto } from "@tabler/icons-vue";

useSeoMeta({
  title: "Decor Inventory | The Haven Event Space",
  description:
    "Browse The Haven's loanable decor inventory — reserved signs, table numbers, hanging signs, and more.",
});

const ITEMS = [
  { name: "Reserved Signs", note: "Set of 10 — ceremony seating" },
  { name: "Table Numbers", note: "Brass frames, 1–30" },
  { name: "Hanging Signs", note: "Various sizes, calligraphy-style" },
  { name: "Easel Stands", note: "Gold — for seating charts & displays" },
  { name: "Seating Chart Frame", note: 'Large format, 24×36"' },
  { name: "Wooden Pallets", note: "Backdrop / display use" },
  { name: "Lanterns", note: "Various sizes — aisle and table" },
  { name: "Shepherd's Hooks", note: "For aisle arrangements — set of 12" },
  { name: "Card Box", note: "Acrylic with gold hardware" },
  { name: "Cake Stand", note: 'White — 16" round' },
  { name: "Champagne Flutes", note: "Set of 2 — bride & groom" },
  { name: "Candle Holders", note: "Mixed heights — set of 20" },
];
</script>

<template>
  <div>
    <UiPageHeader
      label="Included with your rental"
      title="Decor"
      title-italic="inventory."
      subtitle="All items below are available to use on your event day at no additional charge — included with your venue rental."
    />

    <section class="section">
      <div class="container">
        <UiReveal>
          <div class="label-line">
            <span class="eyebrow">Available items</span>
          </div>
        </UiReveal>

        <UiReveal :y="6">
          <div class="items">
            <div v-for="item in ITEMS" :key="item.name" class="item">
              <div class="placeholder item__photo">
                <IconPhoto :size="20" :stroke="1" />
                <span class="item__photo-label">Photo coming</span>
              </div>
              <div class="item__info">
                <div class="item__name">{{ item.name }}</div>
                <div class="item__note">{{ item.note }}</div>
              </div>
            </div>
          </div>
        </UiReveal>

        <UiReveal :delay="0.1">
          <div class="disclaimer">
            <p class="disclaimer__text">
              All items are subject to availability and must be returned by the end of your rental
              window (11pm). Additional or specialty decor can be arranged through our preferred
              vendor network. Contact us for details.
            </p>
          </div>
        </UiReveal>
      </div>
    </section>

    <section class="tour">
      <div class="container tour__inner">
        <UiReveal>
          <p class="tour__text">Want to see the inventory in person? Come for a tour.</p>
        </UiReveal>
        <UiReveal :delay="0.08">
          <a
            href="https://calendly.com/thehaveneventspace"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--light btn--sm tour__btn"
          >
            Schedule a Tour
          </a>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--color-rule);
  border-left: 1px solid var(--color-rule);
}
@media (min-width: 768px) {
  .items {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 1024px) {
  .items {
    grid-template-columns: repeat(4, 1fr);
  }
}

.item {
  border-right: 1px solid var(--color-rule);
  border-bottom: 1px solid var(--color-rule);
}
.item__photo {
  aspect-ratio: 1 / 1;
}
.item__photo-label {
  font-size: 7px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.item__info {
  padding: 1rem;
}
.item__name {
  margin-bottom: 0.25rem;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--color-ink);
}
.item__note {
  font-size: 10px;
  letter-spacing: 0.06em;
  color: var(--color-ink-mid);
}

.disclaimer {
  margin-top: 2rem;
  padding: 1.5rem 2rem;
  border: 1px solid var(--color-rule);
}
.disclaimer__text {
  font-size: 12px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--color-ink-low);
}

.tour {
  padding-block: 4rem;
  background: var(--color-ink);
}
.tour__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
}
.tour__text {
  font-size: 13px;
  font-weight: 300;
  line-height: 1.9;
  color: var(--color-ink-low);
}
.tour__btn {
  flex-shrink: 0;
}
@media (min-width: 640px) {
  .tour__inner {
    flex-direction: row;
    align-items: center;
  }
}
</style>
