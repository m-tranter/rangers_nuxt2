export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'server',
  router: {
    middleware: 'logger',
  },
  head: {
    title: 'Rangers Events',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Listing of events organised by Cheshire East Rangers',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://www.cheshireeast.gov.uk/siteelements/css/bs5/400-cec-styles.css',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://www.cheshireeast.gov.uk/siteelements/css/bs5/600-events-vue-axios.css',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  css: ['~/node_modules/bootstrap/dist/css/bootstrap.min.css'],
  plugins: [
    {
      src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
      mode: 'client',
    },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
};
