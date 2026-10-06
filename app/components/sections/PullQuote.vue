<template>
  <section class="section quote">
    <div class="quote__inner">
      <UiReveal>
        <div class="eyebrow quote__label">From the couples</div>
        <blockquote class="quote__text">
          “First class. Top notch. Blake and his team lived up to every
          expectation — and then blew past it. November 18th was the best day
          of our lives.”
        </blockquote>
        <div class="quote__source">
          <span class="quote__rule" />
          <p>Wedding reception · November 2023 · WeddingWire, 5 stars</p>
          <span class="quote__rule" />
        </div>
      </UiReveal>
    </div>
  </section>
</template>

<style scoped>
.quote__inner {
  max-width: 1000px;
  margin-inline: auto;
  padding-inline: 1.5rem;
  text-align: center;
}

.quote__label {
  margin-bottom: 2rem;
}

.quote__text {
  margin-bottom: 2rem;
  font-family: var(--font-serif);
  font-size: clamp(20px, 3.5vw, 32px);
  font-style: italic;
  line-height: 1.55;
  color: var(--color-ink);
}

.quote__source {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 10px;
  letter-spacing: 0.15em;
  color: var(--color-ink-mid);
}

.quote__rule {
  width: 3rem;
  height: 1px;
  background: var(--color-rule);
}

@media (min-width: 768px) {
  .quote__inner {
    padding-inline: 2.5rem;
  }
}
</style>
