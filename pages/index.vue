<template>
  <div class="container mx-auto">
    <section class="hero">
      <h1>
        Tirta Keniten
      </h1>
      <p class="about-location">
        Full-stack Web Developer - Bali, Indonesia.
      </p>
      <p class="about">
        I use code to solve problems.
      </p>
    </section>
    <section class="section">
      <h2>Programming Skills</h2>

      <div
        class="grid grid-cols-4 gap-4 sm:grid-cols-8 sm:gap-4 lg:grid-cols-10 sm:gap-6"
      >
        <div
          v-for="(skill, id) in skills"
          :key="`skill-${id}`"
          class="flex content-center"
        >
          <img :src="skill.logo" :alt="skill.name" :title="skill.name" />
        </div>
      </div>
    </section>
    <section class="section">
      <h2>My Works</h2>

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
    <section class="section">
      <h2>About Me</h2>
      <p>
        I'm a web developer from Indonesia. I've been coding since 2010. At the
        beginning, I code PHP, CodeIgniter as the framework. Since then, I love
        building things that solve problems.
      </p>
      <p>
        Currently, I am a web developer at Astadala Hospitality. Leverage
        technology to optimize business flow, increase efiency, and generate
        revenue by developing web-based applications.
      </p>
      <p>
        In my spare time, I helps small business to get online, so they can
        compete with bigger company and deliver better products and services.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    skills() {
      const all = this.$store.state.skill.all
      return all
    },

    portfolios() {
      const all = this.$store.state.portfolio.all
      return all
    }
  },

  layout: 'default'
}
</script>
