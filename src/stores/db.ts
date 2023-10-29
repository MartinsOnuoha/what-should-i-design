import { defineStore } from 'pinia'

export const useDBStore = defineStore('db', {
  state: () => ({
    categories: [],
    statements: []
  }),
  getters: {}
})
