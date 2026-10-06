<script setup lang="ts">
const STATS = [
  { value: "40", label: "Private acres" },
  { value: "11k", label: "Sq ft indoor" },
  { value: "500", label: "Guest capacity" },
  { value: "5★", label: "Avg rating" },
];
</script>

<template>
  <div class="stats">
    <div v-for="stat in STATS" :key="stat.label" class="stats__item">
      <div class="stats__value">{{ stat.value }}</div>
      <div class="stats__label">{{ stat.label }}</div>
    </div>
  </div>
</template>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: rgb(0 0 0 / 0.4);
  border-top: 1px solid rgb(255 255 255 / 0.15);
  backdrop-filter: blur(4px);
}

.stats__item {
  padding: 1.25rem 1rem;
  text-align: center;
}
.stats__item:not(:last-child) {
  border-right: 1px solid rgb(255 255 255 / 0.15);
}

.stats__value {
  font-family: var(--font-display);
  font-size: 22px;
  line-height: 1;
  letter-spacing: 0.05em;
  color: #fff;
}

.stats__label {
  margin-top: 0.25rem;
  font-size: 7px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgb(255 255 255 / 0.6);
}

@media (min-width: 640px) {
  .stats__value {
    font-size: 28px;
  }
  .stats__label {
    font-size: 8px;
    letter-spacing: 0.25em;
  }
}
</style>
