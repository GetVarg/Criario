import { PaginaCases } from '../../../funcionalidades/cases/PaginaCases'
import { obterMetadata } from '../../../locales'

export const metadata = obterMetadata('en', 'cases')
export default function CasesEnglish() { return <PaginaCases idioma="en" /> }
