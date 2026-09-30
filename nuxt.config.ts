// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: [{ path: '~/components', pathPrefix: false }],
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/fonts'],
  fonts: {
    families: [
      {
        name: 'Outfit',
        weights: [100, 300, 500, 700, 900]
      }
    ]
  }
})