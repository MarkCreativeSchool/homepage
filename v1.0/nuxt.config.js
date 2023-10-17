const pkg = require("./package")

const nuxtEnvs = {
  local: {
    buildEnv: "local",
  },
  production: {
    buildEnv: "production",
  },
}

const env = nuxtEnvs[process.env.NODE_ENV || "local"]

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: "ja",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "つくば市のプログラミングスクール。主にMineCraftを使って、Lua・Python・Javaなどでゲームを作りながらプログラミングを学びます。無料体験随時募集中！！",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Sawarabi+Mincho" },
      { rel: "stylesheet", href: "/vendor/css/bundle.min.css" },
      { rel: "stylesheet", href: "/vendor/css/jquery.fancybox.min.css" },
      { rel: "stylesheet", href: "/creative-studio/css/owl.carousel.min.css" },
      { rel: "stylesheet", href: "/creative-studio/css/owl.theme.default.min.css" },
      { rel: "stylesheet", href: "/vendor/css/swiper.min.css" },
      { rel: "stylesheet", href: "/vendor/css/cubeportfolio.min.css" },
      { rel: "stylesheet", href: "/creative-studio/css/navigation.css" },
      { rel: "stylesheet", href: "/creative-studio/css/settings.css" },
      { rel: "stylesheet", href: "/vendor/css/slick.css" },
      { rel: "stylesheet", href: "/vendor/css/slick-theme.css" },
      { rel: "stylesheet", href: "/creative-studio/css/style.css" },
      { rel: "stylesheet", href: "/creative-studio/css/custom.css" },
    ],
    // script: [
    //   { src: "/vendor/js/bundle.min.js" },
    //   { src: "/vendor/js/jquery.fancybox.min.js" },
    //   { src: "/vendor/js/owl.carousel.min.js" },
    //   { src: "/vendor/js/swiper.min.js" },
    //   { src: "/vendor/js/jquery.cubeportfolio.min.js" },
    //   { src: "/vendor/js/jquery.appear.js" },
    //   { src: "/vendor/js/wow.min.js" },
    //   { src: "/creative-studio/js/owl.carousel.js" },
    //   { src: "/vendor/js/slick.min.js" },
    //   { src: "/creative-studio/js/TweenMax.min.js" },
    //   { src: "/creative-studio/js/morphext.min.js" },
    //   { src: "/vendor/js/jquery.themepunch.tools.min.js" },
    //   { src: "/vendor/js/jquery.themepunch.revolution.min.js" },
    //   { src: "/vendor/js/extensions/revolution.extension.actions.min.js" },
    //   { src: "/vendor/js/extensions/revolution.extension.carousel.min.js" },
    //   { src: "/vendor/js/extensions/revolution.extension.kenburn.min.js" },
    //   { src: "/vendor/js/extensions/revolution.extension.layeranimation.min.js" },
    //   { src: "/vendor/js/extensions/revolution.extension.migration.min.js" },
    //   { src: "/vendor/js/extensions/revolution.extension.navigation.min.js" },
    //   { src: "/vendor/js/extensions/revolution.extension.parallax.min.js" },
    //   { src: "/vendor/js/extensions/revolution.extension.slideanims.min.js" },
    //   { src: "/vendor/js/extensions/revolution.extension.video.min.js" },
    //   { src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAgIfLQi8KTxTJahilcem6qHusV-V6XXjw" },
    //   { src: "/creative-studio/js/maps.min.js" },
    //   { src: "/creative-studio/js/script.js" },
    // ],
  },
  env: env,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  router: {
    // base: "/homepage/"
  },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/scss/main.scss",
    // { rel: "stylesheet", href: "@/assets/css/vendor/css/jquery.fancybox.min.css" },
    // { rel: "stylesheet", href: "@/assets/css/vendor/css/swiper.min.css" },
    // { rel: "stylesheet", href: "@/assets/css/vendor/css/cubeportfolio.min.css" },
    // { rel: "stylesheet", href: "@/assets/css/vendor/css/slick.css" },
    // { rel: "stylesheet", href: "@/assets/css/vendor/css/slick-theme.css" },
  ],
  plugins: [{ src: "@/plugins/ga.js", ssr: false }],
  modules: ["@nuxtjs/axios", "@nuxtjs/pwa"],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
        // config.module.rules.push({
        //   enforce: "pre",
        //   test: /\.(js|vue)$/,
        //   loader: "eslint-loader",
        //   exclude: /(node_modules)/,
        // })
      }
    },
  },
}
