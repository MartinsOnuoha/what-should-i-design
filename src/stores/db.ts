import { defineStore } from 'pinia'
import statements from './statements.db'
import categories from './categories.db'

export type Statement = {
  title: string
  description: string
  categories: number[]
}

export type Category = {
  id: number
  name: string
  emoji: string
}
export const useDBStore = defineStore('db', {
  state: () => {
    return {
      categories: categories.data,
      statements: statements.data
    }
  },
  getters: {}
})
