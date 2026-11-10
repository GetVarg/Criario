import { PaginaCases } from '../../../funcionalidades/cases/PaginaCases'
import { obterMetadata } from '../../../locales'

export const metadata = obterMetadata('pt-BR', 'cases')
export default function Cases() { return <PaginaCases idioma="pt-BR" /> }
