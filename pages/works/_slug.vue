<template>
  <div>
    <section class="section">
      <img :src="portfolio.image" class="shadow-2xl mb-10" />
      <h1 class="text-gray-800">{{ portfolio.title }}</h1>

      <p class="text-blue-600">
        <span class="text-blue-600 text-2xl mb-1">The goal:</span><br />
        {{ portfolio.goal }}
      </p>

      <p class="text-green-600">
        <span class="text-green-600 text-2xl mb-1">Technology:</span><br />
        {{ portfolio.technology }}
      </p>

      <div class="my-4">
        <a
          :href="portfolio.url"
          class="btn btn-blue inline-block"
          target="__blank"
          >Launch app &#128640;</a
        >
      </div>
    </section>
    <section class="section">
      <p>
        <a href="/works">Back to my works</a> | <a href="/">Back to homepage</a>
      </p>
    </section>
  </div>
</template>

<script>
import { find } from 'lodash'

export default {
  computed: {
    portfolio() {
      const portfolios = this.$store.state.portfolio.all
      const slug = this.$route.params.slug

      return find(portfolios, (item) => {
        return item.slug === slug
      })
    }
  }
}
</script>
