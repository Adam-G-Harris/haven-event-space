<script setup lang="ts">
useSeoMeta({
  title: "FAQs | The Haven Event Space",
  description:
    "Answers to the most common questions about booking The Haven Event Space in Louisburg, KS.",
});

const FAQ_SECTIONS = [
  {
    category: "Booking & Availability",
    items: [
      {
        q: "How far in advance should I book?",
        a: "Most Saturday dates book 12–18 months in advance. Weekday and Sunday dates typically have more flexibility. We recommend reaching out as soon as you have a date in mind.",
      },
      {
        q: "How do I check availability?",
        a: "Visit our Availability page to see open dates, or schedule a tour to discuss your specific date with our team directly.",
      },
      {
        q: "Do you require a deposit to hold a date?",
        a: "Yes, a deposit is required to officially hold your date. Contact us for current deposit requirements and payment scheduling.",
      },
      {
        q: "Can we do a site visit before booking?",
        a: "Absolutely. Tours are available 7 days a week. We encourage everyone to see the space in person — it's hard to fully appreciate over photos. Schedule a tour at any time via Calendly.",
      },
    ],
  },
  {
    category: "The Venue",
    items: [
      {
        q: "How many guests can The Haven accommodate?",
        a: "The Haven can accommodate up to 500 guests. Indoor capacity for seated dinner is approximately 300, with additional outdoor ceremony space for larger guest counts.",
      },
      {
        q: "Is The Haven exclusively mine for the day?",
        a: "Yes. We host one event per day. The entire property — all 40 acres — is exclusively yours from 9am to 11pm.",
      },
      {
        q: "Are there outdoor ceremony options?",
        a: "Yes. We have a manicured outdoor ceremony area with paved pathways and natural backdrops. The indoor and outdoor spaces flow seamlessly for cocktail hours, ceremonies, and receptions.",
      },
      {
        q: "What are the two suites like?",
        a: "The bridal and groom suites are each 600+ sq ft with private bathrooms, lounge seating, full-length mirrors, vanity lighting, and a relaxed, luxurious atmosphere. Both suites are available from the time your rental begins.",
      },
      {
        q: "Is The Haven ADA accessible?",
        a: "Yes. The entire property is fully ADA compliant, including accessible restrooms, ramps, and paved pathways throughout the indoor and outdoor spaces.",
      },
    ],
  },
  {
    category: "Catering & Bar",
    items: [
      {
        q: "Can I bring my own caterer?",
        a: "Yes. We work with outside caterers and have a dedicated commercial kitchen prep space, load-in bay, and refrigeration available for your catering team.",
      },
      {
        q: "Do you have an in-house bar service?",
        a: "Yes. We offer Bronze (Beer & Wine), Silver (Beer, Wine & Call Liquor), and Gold (Beer, Wine & Premium Liquor) bar packages, priced per guest per hour. See our Pricing page for full details.",
      },
      {
        q: "Can we have a champagne wall or signature cocktail?",
        a: "Yes — both are available as add-ons. Ask about champagne wall setup and custom signature cocktail options when you speak with our team.",
      },
    ],
  },
  {
    category: "Logistics & Vendors",
    items: [
      {
        q: "Is there on-site parking?",
        a: "Yes. We have on-site paved parking for 200+ vehicles with clear lighting and signage.",
      },
      {
        q: "What audio/visual is included?",
        a: "The Haven features a Meyer Sound line array system and 100+ programmable lighting fixtures — all included with your venue rental. Our team can walk you through the full AV capabilities during your tour.",
      },
      {
        q: "Can I use my own DJ or band?",
        a: "Yes. We welcome outside DJs and live bands. The venue has 400A electrical and a dedicated stage area with full integration for professional sound setups.",
      },
      {
        q: "Do you have a preferred vendor list?",
        a: "We have relationships with a number of top-rated local vendors — caterers, photographers, florists, and more. We're happy to share recommendations, but you're not required to use them.",
      },
      {
        q: "Is there lodging on-site?",
        a: "The Haven does not have on-site lodging, but we can recommend nearby accommodations. Our sister venue in Platte City, MO does offer overnight lodging for up to 14 guests.",
      },
    ],
  },
  {
    category: "Pricing & Policies",
    items: [
      {
        q: "Does pricing include setup and cleanup time?",
        a: "Your rental runs from 9am to 11pm — 14 hours of exclusive access. Setup and breakdown must be completed within this window. Additional time can be arranged.",
      },
      {
        q: "Is there a discount for military or first responders?",
        a: "Yes. We offer a 10% discount for active and retired military, police, firefighters, and EMS personnel on venue rental. Contact us for details.",
      },
      {
        q: "What is your cancellation policy?",
        a: "Cancellation terms are outlined in your venue contract. We encourage you to ask about this during the booking process so you understand the terms before signing.",
      },
    ],
  },
];
</script>

<template>
  <div>
    <UiPageHeader
      label="Questions & answers"
      title="Everything"
      title-italic="you asked."
      subtitle="The most common questions about booking, the venue, bar service, and logistics."
    />

    <section class="faq-list">
      <div class="faq-list__inner">
        <UiReveal v-for="(section, si) in FAQ_SECTIONS" :key="section.category" :delay="si * 0.04">
          <div>
            <div class="label-line faq-list__label">
              <span class="eyebrow">{{ section.category }}</span>
            </div>
            <UiAccordion :items="section.items" />
          </div>
        </UiReveal>
      </div>
    </section>

    <!-- Still have questions -->
    <section class="faq-cta">
      <div class="container faq-cta__inner">
        <UiReveal>
          <h2 class="faq-cta__title">Still have questions?</h2>
          <p class="faq-cta__text">Our team responds within 24 hours — usually much faster.</p>
        </UiReveal>
        <UiReveal :delay="0.1">
          <div class="faq-cta__actions">
            <NuxtLink to="/contact" class="btn btn--sm btn--light">Send a Message</NuxtLink>
            <a href="tel:9135628787" class="btn btn--sm btn--outline faq-cta__phone">913-562-8787</a>
          </div>
        </UiReveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.faq-list {
  padding-block: 5rem;
  background: var(--color-canvas);
}
.faq-list__inner {
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
  padding-inline: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
.faq-list__label {
  margin-bottom: 1.5rem;
}

.faq-cta {
  padding-block: 5rem;
  background: var(--color-ink);
  border-top: 1px solid var(--color-rule-dark);
}
.faq-cta__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
}
.faq-cta__title {
  font-family: var(--font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 400;
  line-height: 0.92;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-canvas);
}
.faq-cta__text {
  margin-top: 0.75rem;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.9;
  color: var(--color-ink-low);
}
.faq-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.faq-cta__phone {
  border-color: var(--color-rule-dark);
}
.faq-cta__phone:hover {
  color: var(--color-canvas);
  border-color: var(--color-ink-mid);
}

@media (min-width: 768px) {
  .faq-list__inner {
    padding-inline: 2.5rem;
  }
}
@media (min-width: 1024px) {
  .faq-list {
    padding-block: 7rem;
  }
  .faq-cta__inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
