import type { Textos } from '../locales'

export type Case = Textos['cases']['itens']['onboard'] & { imagem: string }

export const casesEmDestaque = [
  { id: 'onboard', imagem: '/images/case-onboard.png' },
  { id: 'newEra', imagem: '/images/case-new-era.png' },
  { id: 'pitec', imagem: '/images/case-pitec.png' },
] as const
