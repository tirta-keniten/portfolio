import { defineStore } from 'pinia'

export const useIdentityStore = defineStore('identity', {
  state: () => {
    return {
      all: [
        'cool looking websites',
        'informative company websites',
        'interactive ecommerce websites',
        'professional portfolio websites',
        'landing pages that convert'
      ]
    }
  }
})
