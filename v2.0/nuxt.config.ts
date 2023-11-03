import { defineNuxtConfig } from "nuxt/config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {},
  app: {
    head: {
      title: "プログラミング・情報技術専門スクール",
      link: [
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@200;400;700&display=swap" },
        { rel: "stylesheet", href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" }
      ]
    },
  },
  css: ["~/assets/scss/main.scss", "animate.css/animate.min.css"],
  plugins: [],
})
