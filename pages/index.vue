<template>
  <div class="container mx-auto">
    <section class="hero min-80vh text-left md:text-center">
      <div class="who-i-am md:text-3xl xl:text-5xl">
        <span>I made </span><WhoIAm />
      </div>
      <h1>Tirta Keniten</h1>
      <p class="about-location">
        Full-stack Web Developer
        <span class="whitespace-nowrap">- Bali, Indonesia</span>.
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
      <h2>Some of My Works</h2>

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
        Currently, I am working iHub Solutions International as Lead Developer
        Team. My team build medium-large scale web applications, mobile apps,
        and marketing tools.
      </p>
      <p>
        I was a web developer at Astadala Hospitality. Leverage technology to
        optimize business flow, increase efiency, and generate revenue by
        developing web-based applications.
      </p>
      <p>
        In my spare time, I helps small businesses to get online, so they can
        compete with bigger company and deliver better products and services.
      </p>
    </section>
  </div>
</template>

<script setup>
const skillStore = useSkillStore()
const portfolioStore = usePortfolioStore()
const identityStore = useIdentityStore()

const skills = computed(() => skillStore.all)
const portfolios = computed(() => portfolioStore.all)
const identity = computed(() => identityStore.all)

useHead(() => ({
  title: 'Tirta Keniten - Bali Web Design & Developer',
  meta: [
    {
      name: 'description',
      content:
        "I'm a web designer & developer from Bali, Indonesia. I leverage website to solved other people's problems. I use " +
        skills.value.map((item) => item.name).join(', ')
    }
  ]
}))
</script>
