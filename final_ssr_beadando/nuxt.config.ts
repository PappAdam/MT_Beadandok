// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@pinia/nuxt",
    "@nuxt/fonts",
    "@nuxt/icon",
    "vuetify-nuxt-module",
  ],
  runtimeConfig: {
    public: {
      apiUrl: "http://localhost:3001",
    },
  },
});
