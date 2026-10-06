<script setup lang="ts">
withDefaults(
  defineProps<{
    videoSrc?: string;
    imageSrc?: string;
    poster?: string;
  }>(),
  { videoSrc: "/haven_hero.mp4" },
);
</script>

<template>
  <section class="hero">
    <!-- Background media -->
    <div class="hero__media">
      <video
        v-if="videoSrc"
        :src="videoSrc"
        :poster="poster"
        autoplay
        muted
        loop
        playsinline
      />
      <img v-else-if="imageSrc" :src="imageSrc" alt="" />
      <div v-else class="hero__placeholder" />
    </div>

    <!-- Legibility scrim -->
    <div class="hero__scrim" />

    <div class="hero__content">
      <p class="hero__tag">Louisburg, Kansas · Est. 2021 · 40 Private Acres</p>

      <h1 class="hero__title">
        <span>No</span>
        <em>detail</em>
        <span>overlooked.</span>
      </h1>

      <p class="hero__body">
        Kansas City's most technically advanced event venue. Architectural
        design. Cinematic lighting. Immersive sound. 40 private acres —
        exclusively yours.
      </p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  background: var(--color-ink);
}

.hero__media {
  position: absolute;
  inset: 0;
}
.hero__media video,
.hero__media img,
.hero__placeholder {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero__placeholder {
  background: var(--color-surface-dark);
}

.hero__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgb(0 0 0 / 0.55),
    rgb(0 0 0 / 0.05),
    rgb(0 0 0 / 0.75)
  );
}

.hero__content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  padding: 0 1.5rem 2.5rem;
}

.hero__tag {
  max-width: 90vw;
  margin-bottom: 1.5rem;
  padding-left: 0.75rem;
  overflow: hidden;
  font-size: 9px;
  font-weight: 500;
  line-height: 1.625;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(255 255 255 / 0.7);
  border-left: 2px solid #fff;
}

.hero__title {
  max-width: 1100px;
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
  font-size: clamp(56px, 11vw, 128px);
  font-weight: 400;
  line-height: 0.9;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #fff;
}
.hero__title span,
.hero__title em {
  display: block;
}
.hero__title em {
  font-family: var(--font-serif);
  font-style: italic;
}

.hero__body {
  max-width: 420px;
  margin-bottom: 2rem;
  font-size: 13px;
  font-weight: 300;
  line-height: 1.9;
  color: rgb(255 255 255 / 0.8);
}

@media (min-width: 640px) {
  .hero__tag {
    letter-spacing: 0.45em;
  }
  .hero__body {
    font-size: 14px;
  }
}

@media (min-width: 768px) {
  .hero__content {
    padding-inline: 2.5rem;
  }
}

@media (min-width: 1024px) {
  .hero__content {
    padding-bottom: 3.5rem;
  }
}
</style>
