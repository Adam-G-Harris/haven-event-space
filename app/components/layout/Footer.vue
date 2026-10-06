<script setup lang="ts">
const QUICK_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing", href: "/pricing" },
  { label: "Experience", href: "/experience" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Other Venues", href: "/locations" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const AWARDS = [
  "The Knot — Best of Weddings 2022, 2023, 2024",
  "WeddingWire — Couples' Choice 2022, 2023, 2024",
  "WedKC — Venue of the Year Finalist 2023, 2024",
];

const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer__main">
      <!-- Brand + contact -->
      <div>
        <div class="footer__brand">The Haven</div>
        <p class="footer__address">
          2210 W 247th Street<br />
          Louisburg, Kansas 66053
        </p>
        <a href="tel:9135628787" class="footer__contact">913-562-8787</a>
        <a href="mailto:info@thehaveneventspace.com" class="footer__contact">
          info@thehaveneventspace.com
        </a>
      </div>

      <!-- Quick links -->
      <div>
        <div class="footer__heading">Navigate</div>
        <nav class="footer__links">
          <NuxtLink
            v-for="link in QUICK_LINKS"
            :key="link.href"
            :to="link.href"
            class="footer__link"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

      <!-- Awards + social -->
      <div>
        <div class="footer__heading">Recognition</div>
        <div class="footer__awards">
          <p v-for="award in AWARDS" :key="award">{{ award }}</p>
        </div>
        <div class="footer__socials">
          <a
            v-for="s in SOCIALS"
            :key="s.href"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="s.label"
            class="footer__social"
          >
            <component :is="s.icon" :size="18" />
          </a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p>© {{ year }} The Haven Event Space. All rights reserved.</p>
      <NuxtLink to="/privacy" class="footer__legal">Privacy Policy</NuxtLink>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: var(--color-canvas);
  background: var(--color-ink);
}

.footer__main {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 4rem 1.5rem;
  border-bottom: 1px solid var(--color-rule-dark);
}

.footer__brand {
  margin-bottom: 1rem;
  font-family: var(--font-display);
  font-size: 22px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.footer__address {
  margin-bottom: 1.5rem;
  font-size: 11px;
  line-height: 1.625;
  letter-spacing: 0.05em;
  color: var(--color-ink-low);
}

.footer__contact {
  display: block;
  margin-top: 0.25rem;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--color-ink-low);
  transition: color 0.15s;
}
.footer__contact:hover {
  color: var(--color-canvas);
}

.footer__heading {
  margin-bottom: 1rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--color-ink-low);
}

.footer__links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1.5rem;
}
.footer__link {
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--color-ink-low);
  transition: color 0.15s;
}
.footer__link:hover {
  color: var(--color-canvas);
}

.footer__awards {
  margin-bottom: 2rem;
}
.footer__awards p {
  margin-top: 0.5rem;
  font-size: 10px;
  line-height: 1.625;
  letter-spacing: 0.05em;
  color: var(--color-ink-low);
}
.footer__awards p:first-child {
  margin-top: 0;
}

.footer__socials {
  display: flex;
  gap: 1rem;
}
.footer__social {
  color: var(--color-ink-faint);
  transition: color 0.15s;
}
.footer__social:hover {
  color: var(--color-canvas);
}

.footer__bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  font-size: 10px;
  letter-spacing: 0.05em;
  color: var(--color-ink-faint);
}
.footer__legal {
  transition: color 0.15s;
}
.footer__legal:hover {
  color: var(--color-canvas);
}

@media (min-width: 640px) {
  .footer__bottom {
    flex-direction: row;
  }
}

@media (min-width: 768px) {
  .footer__main {
    grid-template-columns: repeat(3, 1fr);
    padding-inline: 2.5rem;
  }
  .footer__bottom {
    padding-inline: 2.5rem;
  }
}
</style>
