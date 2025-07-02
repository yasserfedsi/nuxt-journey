import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Nuxt Journey",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        /* links goes here */
      ],
    },
  },
  $meta: {
    title: "Nuxt Journey",
    description: "A journey through Nuxt.js development",
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1",
    keywords: "Nuxt, Vue, JavaScript, Web Development",
  },
});
