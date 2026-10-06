<template>
  <section class="section statement">
    <div class="container statement__grid">
      <UiReveal>
        <h2 class="display statement__title">
          Built for<br />
          <em>the moment.</em>
        </h2>
      </UiReveal>

      <UiReveal :delay="0.12">
        <p class="body-text statement__body">
          The Haven was designed from the ground up — every beam, every
          fixture, every cable — with one purpose: to make your event
          unforgettable. Not renovated. Not repurposed. Built. We obsess over
          the things couples never think to ask about: the sound profile of the
          main hall, the color temperature of the ceremony lighting, the
          sightlines from every seat. Because when everything is right, people
          don't notice the details. They just feel them.
        </p>
      </UiReveal>
    </div>
  </section>
</template>

<style scoped>
.statement__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.statement__title {
  font-size: clamp(52px, 7vw, 80px);
}

.statement__body {
  max-width: 480px;
  line-height: 2;
}

@media (min-width: 1024px) {
  .statement__grid {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
}
</style>
