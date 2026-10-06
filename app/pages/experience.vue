<script setup lang="ts">
import {
  IconBulb,
  IconVolume,
  IconDoor,
  IconTree,
  IconLock,
  IconBuildingWarehouse,
  IconWifi,
  IconParking,
  IconToolsKitchen2,
  IconCamera,
  IconTemperature,
  IconAccessible,
  IconArmchair,
  IconBath,
  IconGlass,
  IconPhoto,
} from "@tabler/icons-vue";

useSeoMeta({
  title: "The Experience | The Haven Event Space",
  description:
    "Explore every amenity and feature at The Haven — cinematic lighting, immersive sound, two luxury suites, outdoor spaces, and more.",
});

const INCLUDED = [
  { icon: IconBulb, title: "Cinematic Lighting", body: "100+ programmable RGB fixtures, pinspot arrays, gobo projection, and full DMX control. Any color, any mood." },
  { icon: IconVolume, title: "Immersive Sound", body: "Meyer Sound line array engineered specifically for the space. Crystal-clear from the first row to the last." },
  { icon: IconDoor, title: "Two Luxury Suites", body: "Private bridal and groom suites, each 600+ sq ft with private bathrooms, lounge seating, and full vanity mirrors." },
  { icon: IconTree, title: "Indoor + Outdoor", body: "Seamless flow from the main hall to our manicured outdoor ceremony space across 40 private acres." },
  { icon: IconLock, title: "Total Privacy", body: "One event, one day. No shared walls, no neighboring weddings. The entire property is yours exclusively." },
  { icon: IconBuildingWarehouse, title: "Vendor Infrastructure", body: "Commercial kitchen prep area, dedicated load-in bay, 400A electrical, and enterprise Wi-Fi throughout." },
  { icon: IconWifi, title: "High-Speed Wi-Fi", body: "Enterprise-grade coverage throughout the entire property — indoors and outdoors." },
  { icon: IconParking, title: "Ample Parking", body: "On-site parking for 200+ vehicles with paved surfaces, lighting, and clear signage." },
  { icon: IconToolsKitchen2, title: "Catering Prep Space", body: "Full commercial kitchen prep area — refrigeration, staging surfaces, and a dedicated catering entrance." },
  { icon: IconCamera, title: "Photographer-Friendly", body: "Designed with photographers in mind: varied lighting zones, architectural details, and stunning natural backdrops." },
  { icon: IconTemperature, title: "Climate Control", body: "Commercial HVAC throughout. Comfortable for guests year-round, regardless of Kansas weather." },
  { icon: IconAccessible, title: "ADA Accessible", body: "Fully ADA-compliant throughout, including accessible restrooms, ramps, and paved pathways." },
];

const ADDITIONAL = [
  {
    icon: IconArmchair,
    title: "Decor Inventory",
    body: "A curated library of loanable decor items — reserved signs, table numbers, hanging signs, and more.",
    link: { label: "View inventory", href: "/decor-inventory" },
  },
  {
    icon: IconCamera,
    title: "Photo Booth",
    body: "On-site photo booth add-on available. A crowd favorite for weddings and corporate events alike.",
    link: null,
  },
  {
    icon: IconGlass,
    title: "Local Vendor Network",
    body: "Preferred vendor relationships with top-rated local caterers, photographers, florists, and DJs.",
    link: null,
  },
  {
    icon: IconBath,
    title: "Luxury Restrooms",
    body: "Fully stocked, hotel-grade restrooms with tile finishes, ambient lighting, and full-length mirrors.",
    link: null,
  },
];

const PHOTO_LABELS = ["Main hall", "Outdoor ceremony", "Bridal suite", "Groom suite"];
</script>

<template>
  <div>
    <UiPageHeader
      label="The experience"
      title="Everything"
      title-italic="included."
      subtitle="Built from scratch so that every detail serves the event — not the other way around."
    />

    <!-- Included amenities -->
    <section class="section">
      <div class="container">
        <UiReveal>
          <div class="label-line">
            <span class="eyebrow">Included with every booking</span>
          </div>
        </UiReveal>

        <div class="cells cells--2 cells--3-lg">
          <UiReveal v-for="(item, i) in INCLUDED" :key="item.title" :delay="(i % 3) * 0.06">
            <div class="cell">
              <component :is="item.icon" :size="18" class="amenity__icon" />
              <div class="amenity__title">{{ item.title }}</div>
              <p class="amenity__body">{{ item.body }}</p>
            </div>
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- Additional services -->
    <section class="section section--darker">
      <div class="container">
        <UiReveal>
          <div class="label-line">
            <span class="eyebrow">Additional services</span>
          </div>
        </UiReveal>

        <div class="cells cells--2">
          <UiReveal v-for="(item, i) in ADDITIONAL" :key="item.title" :delay="(i % 2) * 0.08">
            <div class="cell">
              <component :is="item.icon" :size="18" class="amenity__icon amenity__icon--dark" />
              <div class="amenity__title amenity__title--dark">{{ item.title }}</div>
              <p class="amenity__body amenity__body--spaced">{{ item.body }}</p>
              <NuxtLink v-if="item.link" :to="item.link.href" class="amenity__link">
                {{ item.link.label }}
              </NuxtLink>
            </div>
          </UiReveal>
        </div>
      </div>
    </section>

    <!-- Venue photo strip (placeholders) -->
    <section class="photo-strip">
      <div v-for="label in PHOTO_LABELS" :key="label" class="placeholder photo-strip__tile">
        <IconPhoto :size="20" :stroke="1" />
        <span class="placeholder__label">{{ label }}</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.amenity__icon {
  margin-bottom: 1.25rem;
  color: var(--color-ink-mid);
}
.amenity__icon--dark {
  color: var(--color-ink-low);
}

.amenity__title {
  margin-bottom: 0.75rem;
  font-family: var(--font-display);
  font-size: 16px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-ink);
}
.amenity__title--dark {
  font-size: 18px;
  color: var(--color-canvas);
}

.amenity__body {
  font-size: 12px;
  font-weight: 300;
  line-height: 1.8;
  color: var(--color-ink-low);
}
.amenity__body--spaced {
  margin-bottom: 1rem;
}

.amenity__link {
  padding-bottom: 2px;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-ink-mid);
  border-bottom: 1px solid var(--color-rule-dark);
  transition: color 0.15s, border-color 0.15s;
}
.amenity__link:hover {
  color: var(--color-canvas);
  border-bottom-color: var(--color-canvas);
}

.photo-strip {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: var(--color-canvas);
  border-bottom: 1px solid var(--color-rule);
}
.photo-strip__tile {
  aspect-ratio: 1 / 1;
  border-right: 1px solid var(--color-rule);
}
.photo-strip__tile:last-child {
  border-right: 0;
}
@media (min-width: 768px) {
  .photo-strip {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
