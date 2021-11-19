export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Центр вертебрологии профессора Макирова',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,height=device-height,initial-scale=1,maximum-scale=1,user-scalable=0' },
      { hid: 'description', name: 'description', content: 'Современные методы лечения заболеваний позвоночника' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/Group-654.ico' },
    ],
    script: [
      { defer: 'true', src: 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full' }
    ],
  },
  server: {
    host: '0.0.0.0'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~static/style.css",
    "~static/sass/color.scss",
    "~static/font/Montserrat/montserrat.css"
  ],
  // modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["./static/sass/global.scss"]
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/functions', mode: 'client' },
    { src: '~/plugins/Vueslider', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '~/plugins/vue-mask', mode: 'client' },
    { src: '~/plugins/vueMask', mode: 'client' },
    { src: '~/plugins/yandexMap', mode: 'client' },
    { src: '~/plugins/animxyz', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/gtm',
    'nuxt-robots-module'
  ],
    gtm: {
    id: 'GTM-P7CJ6Q5'
  },

  robots: {
    UserAgent: '*',
    Disallow: '/user',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
