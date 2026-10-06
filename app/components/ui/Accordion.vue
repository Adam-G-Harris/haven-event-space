<script setup lang="ts">
import { IconPlus, IconMinus } from "@tabler/icons-vue";

defineProps<{
  items: { q: string; a: string }[];
  dark?: boolean;
}>();

const open = ref<number | null>(null);
</script>

<template>
  <div class="accordion" :class="{ 'is-dark': dark }">
    <div v-for="(item, i) in items" :key="i" class="accordion__item">
      <button
        class="accordion__question"
        :aria-expanded="open === i"
        @click="open = open === i ? null : i"
      >
        <span class="accordion__q">{{ item.q }}</span>
        <IconMinus v-if="open === i" :size="14" class="accordion__icon" />
        <IconPlus v-else :size="14" class="accordion__icon" />
      </button>
      <p v-if="open === i" class="accordion__answer">{{ item.a }}</p>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  border-top: 1px solid var(--color-rule);
  border-bottom: 1px solid var(--color-rule);
}
.accordion.is-dark {
  border-color: var(--color-rule-dark);
}

.accordion__item + .accordion__item {
  border-top: 1px solid var(--color-rule);
}
.is-dark .accordion__item + .accordion__item {
  border-top-color: var(--color-rule-dark);
}

.accordion__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
  padding-block: 1.25rem;
  text-align: left;
}

.accordion__q {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: var(--color-ink);
}
.is-dark .accordion__q {
  color: var(--color-canvas);
}

.accordion__icon {
  flex-shrink: 0;
  color: var(--color-ink-mid);
}

.accordion__answer {
  max-width: 720px;
  padding-bottom: 1.25rem;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.9;
  color: var(--color-ink-low);
}
</style>
