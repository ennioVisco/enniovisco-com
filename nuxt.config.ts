export default defineNuxtConfig({
  extends: '@nuxt-themes/alpine',
  css: ["@/assets/main.css"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },

  routeRules: {
    '/**': {prerender: true},
  }
})
