module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dota 2 #TI Fantasy Roster Manager',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Dota 2 #TI Fantasy Roster Manager' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#abcabc' },
  /*
  ** Load external modules
  */
  modules: [
    'nuxt-buefy'
  ],
  router: {
    base: process.env.BASE_PATH ?  process.env.BASE_PATH : ''
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extractCSS: true,
    filenames: {
      css: '[name].css',
      manifest: 'manifest.js',
      vendor: 'vendor.js',
      app: '[name].js',
      chunk: '[name].js'
    },
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
