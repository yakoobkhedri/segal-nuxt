// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt';

export default defineNuxtConfig({
  modules: ['nuxt-swiper', '@nuxt/image'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
   head: {
    htmlAttrs: {
      dir: 'rtl',
      lang: 'fa',
    }
   }
  },
  css:['~/assets/css/main.css'],
})