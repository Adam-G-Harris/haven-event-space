<script setup lang="ts">
defineProps<{
  label: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  dark?: boolean;
}>();
</script>

<template>
  <div class="page-header" :class="{ 'is-dark': dark }">
    <div class="container">
      <UiReveal>
        <p class="eyebrow page-header__label">{{ label }}</p>
        <h1 class="page-header__title">
          {{ title }}
          <template v-if="titleItalic">
            <br />
            <em>{{ titleItalic }}</em>
          </template>
        </h1>
        <p v-if="subtitle" class="body-text page-header__subtitle">{{ subtitle }}</p>
      </UiReveal>
    </div>
  </div>
</template>

<style scoped>
.page-header {
  padding-block: 6rem 4rem;
  background: var(--color-canvas);
  border-bottom: 1px solid var(--color-rule);
}
.page-header.is-dark {
  background: var(--color-ink);
  border-bottom-color: var(--color-rule-dark);
}

.page-header__label {
  margin-bottom: 1.5rem;
}

.page-header__title {
  font-family: var(--font-display);
  font-size: clamp(48px, 8vw, 88px);
  font-weight: 400;
  line-height: 0.92;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-ink);
}
.is-dark .page-header__title {
  color: var(--color-canvas);
}
.page-header__title em {
  font-family: var(--font-serif);
  font-style: italic;
}

.page-header__subtitle {
  max-width: 560px;
  margin-top: 1.5rem;
}

@media (min-width: 1024px) {
  .page-header {
    padding-block: 8rem 5rem;
  }
}
</style>
