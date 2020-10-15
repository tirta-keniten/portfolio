<template>
  <div class="container">
    <section class="hero">
      <h1>
        Some of My Works
      </h1>
      <p class="about">
        I selected some of my works for you.
      </p>
    </section>
    <section class="section">
      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10"
      >
        <PortfolioCard
          v-for="(portfolio, index) in portfolios"
          :key="`portfolio-${index}`"
          :data="portfolio"
        />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    portfolios() {
      const all = this.$store.state.portfolio.all
      return all
    }
  },

  layout: 'default',

  head() {
    return {
      title: 'My Works - Tirta Keniten - Bali Web Design & Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'I selected some of my work in this show case. You can see the details, the goals, the tech that I sed to build the apps.'
        }
      ]
    }
  }
}
</script>
