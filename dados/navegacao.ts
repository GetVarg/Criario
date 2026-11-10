import type { Idioma } from '../locales'

export const itensDeNavegacao = [
  { numero: '01', id: 'inicio', destino: 'inicio' },
  { numero: '02', id: 'servicos', destino: 'servicos' },
  { numero: '03', id: 'cases', destino: 'cases' },
  { numero: '04', id: 'contato', destino: 'fale-conosco' },
] as const

export type PaginaDoSite = 'inicio' | 'cases'
export type DestinoDeNavegacao = typeof itensDeNavegacao[number]['destino']

export function caminhoDaPagina(idioma: Idioma, pagina: PaginaDoSite = 'inicio') {
  return (idioma === 'en' ? '/en/' : '/') + (pagina === 'cases' ? 'cases/' : '')
}

export function destinoDeNavegacao(destino: DestinoDeNavegacao, idioma: Idioma, pagina: PaginaDoSite) {
  if (destino === 'fale-conosco') return '#fale-conosco'
  if (destino === 'cases') return pagina === 'cases' ? '#cases' : caminhoDaPagina(idioma, 'cases')
  return (pagina === 'inicio' ? '' : caminhoDaPagina(idioma)) + '#' + destino
}
