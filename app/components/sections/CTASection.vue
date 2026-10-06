<template>
  <section class="section cta">
    <div class="container cta__grid">
      <UiReveal>
        <div class="eyebrow cta__label">Start here</div>
        <h2 class="display cta__title">
          Your day.<br />
          <em>Your venue.</em>
        </h2>
      </UiReveal>

      <UiReveal :delay="0.12">
        <p class="body-text cta__body">
          Tours available 7 days a week. Most dates book 12–18 months in
          advance — if you see a date you love, reach out now.
        </p>
        <div class="cta__buttons">
          <a
            href="https://calendly.com/thehaveneventspace"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn--solid"
          >
            Schedule a Tour
          </a>
          <NuxtLink to="/pricing" class="btn btn--outline">View Pricing</NuxtLink>
        </div>
      </UiReveal>
    </div>
  </section>
</template>

<style scoped>
.cta__grid {
  display: grid;
  grid-template-columns: 1fr;
  align-items: end;
  gap: 3rem;
}

.cta__label {
  margin-bottom: 1.5rem;
}

.cta__title {
  font-size: clamp(48px, 7vw, 72px);
}

.cta__body {
  margin-bottom: 2rem;
}

.cta__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

@media (min-width: 1024px) {
  .cta__grid {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
}
</style>
