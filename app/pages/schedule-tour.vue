<script setup lang="ts">
import {
  IconBuildingSkyscraper,
  IconMap,
  IconUsers,
  IconWalk,
  IconCamera,
  IconChecklist,
} from "@tabler/icons-vue";

useSeoMeta({
  title: "Schedule a Tour | The Haven Event Space",
  description:
    "Schedule an in-person or virtual tour of The Haven Event Space. Tours available 7 days a week.",
});

const TOUR_TYPES = [
  {
    icon: IconMap,
    title: "Virtual Tour",
    desc: "A guided video walkthrough of the entire property. Perfect if you're planning from out of state or just want a quick first look.",
  },
  {
    icon: IconWalk,
    title: "On-Site Tour",
    desc: "Walk through every space with a member of our team. See the lighting system live, hear the audio, feel the scale of the rooms.",
  },
  {
    icon: IconUsers,
    title: "Consultation",
    desc: "A focused session to discuss your vision, ask pricing questions, and map out what your event would look like at The Haven.",
  },
  {
    icon: IconBuildingSkyscraper,
    title: "Client On-Site",
    desc: "For couples or clients who have already booked and want to walk through setup logistics, vendor coordination, or final details.",
  },
  {
    icon: IconCamera,
    title: "Styled Shoot",
    desc: "Photographers, videographers, and planners — we welcome styled shoots to showcase the space. Contact us to schedule.",
  },
  {
    icon: IconChecklist,
    title: "Final Walkthrough",
    desc: "A pre-event walkthrough in the days before your event to confirm setup, finalize logistics, and run through the day-of timeline.",
  },
];
</script>

<template>
  <div>
    <UiPageHeader
      label="Come see it in person"
      title="Schedule"
      title-italic="a tour."
      subtitle="Tours are available 7 days a week, in-person or virtual. Most people leave wanting to book on the spot."
    />

    <!-- Tour types -->
    <section class="section">
      <div class="container">
        <UiReveal>
          <div class="label-line">
            <span class="eyebrow">Visit types</span>
          </div>
        </UiReveal>

        <div class="cells cells--2 cells--3-lg">
          <UiReveal v-for="(type, i) in TOUR_TYPES" :key="type.title" :delay="(i % 3) * 0.06">
            <div class="cell">
              <component :is="type.icon" :size="18" class="tour__icon" />
              <div class="tour__title">{{ type.title }}</div>
              <p class="tour__desc">{{ type.desc }}</p>
            </div>
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--dark cta">
      <div class="container cta__inner">
        <UiReveal>
          <h2 class="display cta__title">Pick your time.</h2>
          <p class="body-text cta__text">
            We use Calendly to make scheduling easy — choose a time that works
            for you and we'll confirm within hours.
          </p>
          <div class="cta__buttons">
            <a
              href="https://calendly.com/thehaveneventspace"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--light"
            >
              Book on Calendly
            </a>
            <a href="tel:9135628787" class="btn btn--outline">Call 913-562-8787</a>
          </div>
        </UiReveal>
        <UiReveal :delay="0.1">
          <div class="address">
            <div class="address__label">Address</div>
            <div class="address__name">The Haven Event Space</div>
            <p class="address__text">
              2210 W 247th Street<br />
              Louisburg, Kansas 66053
            </p>
            <div class="address__note">~35 minutes south of downtown Kansas City</div>
          </div>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tour__icon {
  margin-bottom: 1.25rem;
  color: var(--color-ink-mid);
}
.tour__title {
  margin-bottom: 0.75rem;
  font-family: var(--font-display);
  font-size: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink);
}
.tour__desc {
  font-size: 12px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--color-ink-low);
}

.cta__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}
.cta__title {
  font-size: clamp(40px, 6vw, 64px);
}
.cta__text {
  max-width: 400px;
  margin-top: 1rem;
}
.cta__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.address {
  padding: 2rem;
  border: 1px solid var(--color-rule-dark);
}
.address__label {
  margin-bottom: 1.5rem;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
}
.address__name {
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  font-size: 18px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-canvas);
}
.address__text {
  margin-bottom: 1.5rem;
  font-size: 12px;
  letter-spacing: 0.04em;
  line-height: 1.625;
  color: var(--color-ink-low);
}
.address__note {
  font-size: 10px;
  letter-spacing: 0.1em;
  color: var(--color-ink-mid);
}

@media (min-width: 1024px) {
  .cta__inner {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
}
</style>
