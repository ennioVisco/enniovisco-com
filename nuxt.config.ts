export default defineNuxtConfig({
  extends: [
    '@nuxt-themes/alpine',
    'nuxt-seo-kit'
  ],
  css: ["@/assets/main.css"],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://enniovisco.com',
      siteName: 'Ennio Visconti',
      siteDescription: 'Welcome to my personal website!',
      language: 'en',
    }
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

  routeRules: {
    '/**': {prerender: true},
  }
})
