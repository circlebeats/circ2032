
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  webfontloader: {
    google: {
      families: ['Nunito:600,800','Nunito Sans:900,800,700,400','Damion:400'] //Loads Lato font with weights 400 and 700
    }
  },
  head: {
    title: 'Welcome to Circle Beats',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //TODO: Research abd implement new description
      { hid: 'description', name: 'description', content: 'add description' }
    ],
    link: [
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'plyr/dist/plyr.css',
    '~/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src:'~/plugins/vuetube.js' },
    { src: '~/plugins/av.js', mode: 'client' },
    { src: '~/plugins/vue-wave-surfer', mode: 'client' },
    { src: '~/plugins/taber.client.js'},
    { src: '~/plugins/valid.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    // Doc: https://www.npmjs.com/package/nuxt-socket-io
    'nuxt-socket-io',
  ],
  io: {
    sockets: [
      // "NUXT-SOCKET.IO" SETUP GLOBAL CONNECTIONS
      {
        name: 'beats',
        url: 'http://localhost:3000',
        default: true,
      },
      { name: 'work', url: 'http://somedomain1:3000' },
      { name: 'car', url: 'http://somedomain2:3000' },
      { name: 'tv', url: 'http://somedomain3:3000' },
      // "NUXT-SOCKET.IO" VUEX EXAMPLE
      // {
      //   name: 'test',
      //   url: 'http://localhost:4000',
      //   vuex: {
      //     mutations: ['examples/SET_PROGRESS'],
      //     actions: ['FORMAT_MESSAGE']
      //   }
      // }
    ]
  },
},
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
