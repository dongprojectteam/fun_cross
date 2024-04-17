// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/index.css', '~/assets/scss/index.scss'],
  ssr: false,
  runtimeConfig: {
    public: {
      ytKey: process.env.YT_KEY,
      baseLlmUrl: process.env.BASE_LLM_URL,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
})
