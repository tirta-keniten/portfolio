export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  /*
   ** Headers of the page
   */
  app: {
    head: {
      title: 'Tirta Keniten - Web Design Developer in Bali, Indonesia',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            '10 year of experience in web development. Focus on Laravel PHP, VueJS, MySQL, and Containerized Applications.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/global.scss'],

  /*
   ** Nuxt modules
   */
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss']
})
