import { defineStore } from 'pinia'
import statements from './statements.db'
import categories from './categories.db'
// import { shuffle } from '@/utils/util'
import shuffle from 'lodash.shuffle'

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
  state: () => ({
    categories: categories.data,
    statements: statements.data
  }),
  getters: {
    formattedStatements: (state) => {
      return [...new Set(shuffle(state.statements))] as Statement[]
    }
  }
})
