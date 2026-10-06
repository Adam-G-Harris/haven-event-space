<script setup lang="ts">
// Fades and slides content in the first time it scrolls into view.
const props = withDefaults(
  defineProps<{
    delay?: number; // seconds
    y?: number; // px to travel
  }>(),
  { delay: 0, y: 18 },
);

const el = ref<HTMLElement | null>(null);
const visible = ref(false);

onMounted(() => {
  const target = el.value;
  if (!target) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        visible.value = true;
        observer.disconnect();
      }
    },
    { rootMargin: "0px 0px -60px 0px" },
  );
  observer.observe(target);
  onBeforeUnmount(() => observer.disconnect());
});
</script>

<template>
  <div
    ref="el"
    class="reveal"
    :class="{ 'is-visible': visible }"
    :style="{ '--reveal-y': `${props.y}px`, '--reveal-delay': `${props.delay}s` }"
  >
    <slot />
  </div>
</template>

<style scoped>
.reveal {
  opacity: 0;
  transform: translateY(var(--reveal-y));
  transition:
    opacity 2s cubic-bezier(0.22, 1, 0.36, 1) var(--reveal-delay),
    transform 2s cubic-bezier(0.22, 1, 0.36, 1) var(--reveal-delay);
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
