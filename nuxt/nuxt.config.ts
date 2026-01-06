import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  runtimeConfig:{
    public:{
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:8000',
    }
  },

  css: [
    './app/assets/sass/main.scss',
    './app/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.css',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/image', '@pinia/nuxt'],
});