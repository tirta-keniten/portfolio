<template>
  <div class="container mx-auto">
    <section class="hero text-left md:text-center">
      <div class="who-i-am md:text-3xl xl:text-5xl">
        <span>I made </span><WhoIAm></WhoIAm>
      </div>
      <h1>
        Tirta Keniten
      </h1>
      <p class="about-location">
        Full-stack Web Developer
        <span class="whitespace-no-wrap">- Bali, Indonesia</span>.
      </p>
      <p class="md:hidden my-2 text-gray-700">
        I made {{ identity.join(', ') }}.
      </p>
    </section>
    <section class="section">
      <h2>Web Development Skills</h2>

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
    },

    skillListComma() {
      const all = this.$store.state.skill.all
      const skillsNames = all.map((item) => item.name)
      return skillsNames.join(', ')
    },

    identity() {
      return this.$store.state.identity.all
    }
  },

  layout: 'default',

  head() {
    return {
      title: 'Tirta Keniten - Bali Web Design & Developer',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "I'm a web designer & developer from Bali, Indonesia. I leverage website to solved other people's problems. I use " +
            this.skillListComma
        }
      ]
    }
  }
}
</script>
