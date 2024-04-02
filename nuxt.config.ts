import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  extends: [ '@nuxt-themes/alpine' ],

  css: ["@/assets/main.css"],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  typescript: {
    typeCheck: false,
    strict: true,
  },

  modules: [
    '@nuxthq/studio',
    '@nuxtjs/seo',
  ],

  site: {
    url: 'https://enniovisco.com',
    name: 'Ennio Visconti',
    description: 'Welcome to my personal website!',
    defaultLocale: 'en'
  },

  experimental: {
    payloadExtraction: true,
    typedPages: true, // since 3.6.2
    headNext: true, // since 3.7.0
    viewTransition: true,
  },

 ogImage: {
    componentOptions: {
      global: true,
    },
    // compatibility: {
    //   prerender: {
    //     chromium: false
    //   }
    // }
  },


  routeRules: {
    "/cv": { 
      redirect: { 
        to: 'https://enniovisco.github.io/CV/main.pdf',
        statusCode: 302
      }
    },
    // '/': {prerender: true},
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
