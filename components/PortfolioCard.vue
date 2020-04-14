<template>
  <div class="rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="data.image" :alt="data.title" />
    <div class="px-6 pt-6">
      <div class="font-bold text-xl mb-2">{{ data.title }}</div>
    </div>
    <div class="px-6 pb-4">
      <span
        v-for="(tech, index) in techs"
        :key="`tech--${index}`"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ml-0"
        >#{{ tech }}</span
      >
    </div>
    <div class="px-6 pb-4">
      <a :href="`/works/${data.slug}`" class="btn btn-blue inline-block"
        >Show details</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {
        return {}
      }
    }
  },

  computed: {
    techs() {
      return this.data.technology.split(', ')
    }
  }
}
</script>
