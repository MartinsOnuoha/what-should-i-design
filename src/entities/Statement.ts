import type { Category } from '@/entities/Category'
import type { Sample } from '@/entities/Sample'

export type Statement = {
  id?: number
  title: string
  description: string
  category?: Category
  samples: Sample[]
}
