// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  app: {
    head: {
      title: "Pothuraju Sri Ram Kumar",
      link: [
        {
          rel: "stylesheet",
          href: "https://kit.fontawesome.com/16d7faf68e.css"
        }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    transpile: ["@heroicons/vue", "@headlessui/vue"]
  },
  css: ["@/assets/css/tailwind.css"]
});
