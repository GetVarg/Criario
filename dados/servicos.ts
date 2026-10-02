import type { Textos } from '../locales'

export type EtapaDeServico = Textos['servicos']['itens']['visao'] & {
  numero: string
  posicao: 'alto' | 'baixo'
}

export const etapasDeServico = [
  { id: 'visao', numero: '01', posicao: 'alto' },
  { id: 'experiencia', numero: '02', posicao: 'baixo' },
  { id: 'mercado', numero: '03', posicao: 'alto' },
  { id: 'crescimento', numero: '04', posicao: 'baixo' },
] as const
