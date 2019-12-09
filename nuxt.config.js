import colors from 'vuetify/es5/util/colors'
import routes from './config/router'
import docConfig from './doc.config'
export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'Common Frontend Document',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Common Frontend Document'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    base: { target: '_blank' }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'github-markdown-css',
    'highlight.js/styles/github-gist.css',
    '~/assets/scss/style.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['components'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // add more loader
      config.module.rules.push(
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader'
            },
            {
              loader: 'vue-markdown-loader/lib/markdown-compiler',
              options: {
                raw: true,
                use: [
                  /* markdown-it plugin */
                  require('markdown-it-anchor')
                ]
              }
            }
          ]
        },
        {
          test: /\.docx$/,
          use: [
            {
              loader: 'docx-loader',
              options: {
                removeLinks: true
              }
            }
          ]
        },
        {
          test: /\.(tmpl|html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        }
      )
    }
  },

  /**
   * Router config
   */
  router: {
    base: docConfig.routerBase,
    extendRoutes($routes, resolve) {
      $routes.push(...routes)
    }
  },

  generate: {
    dir: 'docs'
  }
}
