// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "The Haven Event Space | KC Wedding & Event Venue",
      meta: [
        {
          name: "description",
          content:
            "Kansas City's most technically advanced event venue. Contemporary farmhouse on 40 private acres in Louisburg, KS — cinematic lighting, immersive sound, two luxury suites.",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Libre+Baskerville:ital@0;1&family=Montserrat:wght@300;400;500&display=swap",
        },
      ],
    },
  },
});
