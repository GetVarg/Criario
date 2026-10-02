import portugues from './pt-BR.json'
import ingles from './en.json'

export type Idioma = 'pt-BR' | 'en'
export type Textos = typeof portugues

const dicionarios: Record<Idioma, Textos> = { 'pt-BR': portugues, en: ingles }

export function obterTextos(idioma: Idioma): Textos {
  return dicionarios[idioma]
}

export function obterMetadata(idioma: Idioma) {
  const { metadata } = obterTextos(idioma)
  return {
    title: metadata.titulo,
    description: metadata.descricao,
    alternates: { languages: { 'pt-BR': '/', en: '/en/' } },
  }
}
