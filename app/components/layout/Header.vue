<script setup lang="ts">
import { IconMenu2, IconX } from "@tabler/icons-vue";

const NAV_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "Experience", href: "/experience" },
  { label: "Pricing", href: "/pricing" },
  { label: "Availability", href: "/availability" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Other Venues", href: "/locations" },
];
const TOUR_URL = "https://calendly.com/thehaveneventspace";

const route = useRoute();
const menuOpen = ref(false);
const scrolled = ref(false);

// Transparent only over the home hero, before scrolling, with the menu closed.
const transparent = computed(
  () => route.path === "/" && !scrolled.value && !menuOpen.value,
);

function onScroll() {
  scrolled.value = window.scrollY > 20;
}

function onKeyDown(e: KeyboardEvent) {
  if (e.key === "Escape") menuOpen.value = false;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeyDown);
  document.body.style.overflow = "";
});

// Lock body scroll while the menu is open; close on Escape.
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
  if (open) window.addEventListener("keydown", onKeyDown);
  else window.removeEventListener("keydown", onKeyDown);
});
</script>

<template>
  <header class="header" :class="{ 'is-transparent': transparent }">
    <div class="header__inner">
      <NuxtLink to="/" class="header__wordmark">The Haven</NuxtLink>

      <div class="header__actions">
        <div class="header__socials">
          <a
            v-for="s in SOCIALS"
            :key="s.href"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="s.label"
            class="header__social"
          >
            <component :is="s.icon" :size="16" />
          </a>
        </div>
        <a
          :href="TOUR_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="header__cta"
        >
          Schedule a Tour
        </a>
        <!-- Spacer preserving the menu trigger's layout width; the real button
             is its own fixed element so it stacks above the full-page overlay. -->
        <span class="menu-btn menu-btn--spacer" aria-hidden="true">
          <span class="menu-btn__label">Menu</span>
          <IconMenu2 :size="22" />
        </span>
      </div>
    </div>
  </header>

  <div class="menu-trigger" :class="{ 'is-transparent': transparent }">
    <button
      class="menu-btn"
      :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
      :aria-expanded="menuOpen"
      @click="menuOpen = !menuOpen"
    >
      <span class="menu-btn__label">{{ menuOpen ? "Close" : "Menu" }}</span>
      <IconX v-if="menuOpen" :size="22" />
      <IconMenu2 v-else :size="22" />
    </button>
  </div>

  <Transition name="slide-down">
    <div v-if="menuOpen" class="overlay">
      <nav class="overlay__nav">
        <NuxtLink
          v-for="link in NAV_LINKS"
          :key="link.href"
          :to="link.href"
          class="overlay__link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
      <div class="overlay__footer">
        <a
          :href="TOUR_URL"
          target="_blank"
          rel="noopener noreferrer"
          class="overlay__cta"
          @click="menuOpen = false"
        >
          Schedule a Tour
        </a>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  background: var(--color-canvas);
  border-bottom: 1px solid var(--color-rule);
  transition: background-color 0.3s, border-color 0.3s;
}
.header.is-transparent {
  background: transparent;
  border-bottom-color: transparent;
}

/* Matches the current site: 3rem padding all round (the pad-12 utility). */
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 3rem;
}

.header__wordmark {
  flex-shrink: 0;
  font-family: var(--font-display);
  font-size: 26px;
  line-height: 1;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-ink);
  transition: color 0.3s;
}
.is-transparent .header__wordmark {
  color: #fff;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header__socials {
  display: none;
  align-items: center;
  gap: 1rem;
}

.header__social {
  color: var(--color-ink-mid);
  transition: color 0.3s;
}
.header__social:hover {
  color: var(--color-ink);
}
.is-transparent .header__social {
  color: rgb(255 255 255 / 0.7);
}
.is-transparent .header__social:hover {
  color: #fff;
}

.header__cta {
  display: none;
  align-items: center;
  padding: 10px 1.25rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-canvas);
  background: var(--color-ink);
  transition: background-color 0.3s, color 0.3s;
}
.header__cta:hover {
  background: var(--color-ink-faint);
}
.is-transparent .header__cta {
  color: var(--color-ink);
  background: #fff;
}
.is-transparent .header__cta:hover {
  background: var(--color-rule);
}

/* Menu trigger */
.menu-trigger {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  height: 6rem;
  padding-right: 1.5rem;
  color: var(--color-ink);
  transition: color 0.3s;
}
.menu-trigger.is-transparent {
  color: #fff;
}

.menu-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.25rem;
}
.menu-btn--spacer {
  visibility: hidden;
}
.menu-btn__label {
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

/* Full-screen overlay */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 55;
  display: flex;
  flex-direction: column;
  background: var(--color-canvas);
}
.overlay__nav {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 7rem 1.5rem 3rem;
}
.overlay__link {
  font-family: var(--font-display);
  font-size: 36px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color 0.15s;
}
.overlay__link:hover {
  color: var(--color-ink-low);
}
.overlay__footer {
  margin-top: auto;
  padding: 0 1.5rem 2.5rem;
}
.overlay__cta {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-ink);
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}

@media (min-width: 640px) {
  .header__cta {
    display: inline-flex;
  }
}

@media (min-width: 768px) {
  .header__actions {
    gap: 1.5rem;
  }
  .header__socials {
    display: flex;
  }
  .menu-trigger {
    padding-right: 2.5rem;
  }
}
</style>
