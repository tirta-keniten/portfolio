<template>
  <div>
    <nuxt class="wrapper" />
    <div class="container mx-auto wrapper">
      <section class="container section">
        <h2>Contact</h2>
        <p>
          Email:
          <a
            :href="`mailto:${myemail}`"
            target="_blank"
            title="Click to send me an email"
            >{{ myemail }}</a
          >
        </p>
        <p>
          Phone:
          <a
            :href="`tel:${myphone}`"
            target="_blank"
            title="Click to call me"
            >{{ myphone }}</a
          >
          or
          <a :href="whatsappLink" title="Click to WhatsApp me" target="_blank">
            <img src="/skill-logo/whatsapp.svg" class="wa-img" />
          </a>
        </p>
      </section>
    </div>
    <footer>
      <p class="text-center">&copy; 2020 - Lazodevo. All right reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myemail: 'keniten.tirta@gmail.com',
      myphone: '+62 81 999 913171'
    }
  },

  computed: {
    whatsappLink() {
      const number = this.myphone.replace(/\+* */g, '')
      return `https://wa.me/${number}`
    }
  }
}
</script>
