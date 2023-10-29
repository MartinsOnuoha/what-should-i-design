import type { Category } from '@/entities/Category'

export type Statement = {
  id?: number
  title: string
  description: string
  category?: Category
}
