export default defineNuxtConfig({
  extends: [
    '@nuxt-themes/alpine',
    'nuxt-seo-kit'
  ],

  css: ["@/assets/main.css"],

  // devtools: true,
  // modules: [
  //   '@nuxt/devtools',
  // ],
  // debug: true,

  runtimeConfig: {
    public: {
      siteUrl: 'https://enniovisco.com',
      siteName: 'Ennio Visconti',
      siteDescription: 'Welcome to my personal website!',
      language: 'en',
    }
  },

  routeRules: {
    '/**': {prerender: true},
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
})
