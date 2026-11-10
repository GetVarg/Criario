import { caminhoDaPagina, type PaginaDoSite } from '../dados/navegacao'
import portugues from './pt-BR.json'
import ingles from './en.json'

export type Idioma = 'pt-BR' | 'en'
export type Textos = typeof portugues

const dicionarios: Record<Idioma, Textos> = { 'pt-BR': portugues, en: ingles }

export function obterTextos(idioma: Idioma): Textos {
  return dicionarios[idioma]
}

export function obterMetadata(idioma: Idioma, pagina: PaginaDoSite = 'inicio') {
  const textos = obterTextos(idioma)
  const metadata = pagina === 'cases' ? textos.paginaCases.metadata : textos.metadata
  return {
    title: metadata.titulo,
    description: metadata.descricao,
    alternates: { languages: { 'pt-BR': caminhoDaPagina('pt-BR', pagina), en: caminhoDaPagina('en', pagina) } },
  }
}
