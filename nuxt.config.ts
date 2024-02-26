export default defineNuxtConfig({
  extends: [ '@nuxt-themes/alpine' ],

  css: ["@/assets/main.css"],

  // devtools: true,
  modules: [
    '@nuxthq/studio',
    '@nuxtjs/seo',
    // 'pinceau/nuxt'
  ],
  // debug: true,

  site: {
    url: 'https://enniovisco.com',
    name: 'Ennio Visconti',
    description: 'Welcome to my personal website!',
    defaultLocale: 'en'
  },

  sitemap: {
    enabled: false,
  },

  routeRules: {
    // cv: { 
    //   redirect: { 
    //     to: 'https://enniovisco.github.io/CV/main.pdf',
    //     statusCode: 302
    //   }
    // },
    '/': {prerender: true},
  },

  vite: {
    build: {
      sourcemap: true,
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
})
