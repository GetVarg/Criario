import type { Textos } from '../locales'

export type Depoimento = Textos['depoimentos']['itens']['paulo'] & {
  imagem: string
  alinhamento: 'esquerda' | 'direita'
}

export const depoimentos = [
  { id: 'paulo', imagem: '/images/depoimento-paulo.png', alinhamento: 'direita' },
  { id: 'luiz', imagem: '/images/depoimento-luiz.png', alinhamento: 'esquerda' },
  { id: 'igor', imagem: '/images/depoimento-igor-pinheiro.png', alinhamento: 'direita' },
] as const
