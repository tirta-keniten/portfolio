import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default createConfigForNuxt({
  features: {
    stylistic: false
  }
})
  .append(eslintPluginPrettierRecommended)
  .append({
    rules: {
      // The Nuxt boilerplate `Logo` component has a single-word name
      'vue/multi-word-component-names': 'off'
    }
  })
