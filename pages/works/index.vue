<template>
  <div class="container">
    <section class="hero">
      <h1>
        My Works
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

  layout: 'default'
}
</script>
