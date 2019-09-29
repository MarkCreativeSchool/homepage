const pkg = require('./package')

const nuxtEnvs = {
  local: {
    buildEnv: "local",
  },
  production: {
    buildEnv: "production",
  },
}

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/homepage/'
  }
} : {}

const env = nuxtEnvs[process.env.NODE_ENV || "local"]

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Sawarabi+Mincho" },
    ],
  },
  env: env,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  ...routerBase,
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],
  plugins: [{ src: "@/plugins/ga.js", ssr: false }],
  modules: ["@nuxtjs/axios", "@nuxtjs/bulma", "@nuxtjs/pwa"],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  router: {
    // middleware: ["https"],
  },
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false,
        },
      },
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
