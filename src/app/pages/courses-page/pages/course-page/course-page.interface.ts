import { TPractice } from './pages/practice-page/practice-page.interface'

export type TCourse = {
  id: number
  name: string
  imageUrl: string
  deletable: boolean
  practices: TPractice[]
}
