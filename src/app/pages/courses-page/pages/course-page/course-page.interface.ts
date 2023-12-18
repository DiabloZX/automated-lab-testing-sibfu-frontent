export type TCourse = {
  id: number
  name: string
  imageUrl: string
  deletable: boolean
  practices: TPractice[]
}

export type TPractice = {
  id: number
  status: EPracticeStatus
  name: string
  description: string
  tests?: TTest[]
}

export type TTest = {
  id: number
  inputData: string
  outputData: string
}

export enum EPracticeStatus {
  EMPTY = 'EMPTY',
  DONE = 'DONE',
  SOFT_DEADLINE = 'SOFT_DEADLINE',
  HARD_DEADLINE = 'HARD_DEADLINE',
  BAD_TRY = 'BAD_TRY',
}

export const EPracticeStatusColor: { [key in EPracticeStatus]: string } = {
  [EPracticeStatus.EMPTY]: 'var(--empty-color)',
  [EPracticeStatus.DONE]: 'var(--green-color)',
  [EPracticeStatus.SOFT_DEADLINE]: 'var(--orange-color)',
  [EPracticeStatus.HARD_DEADLINE]: 'var(--red-color)',
  [EPracticeStatus.BAD_TRY]: 'var(--yellow-color)',
} as const
