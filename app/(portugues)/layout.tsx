import { obterMetadata } from '../../locales'
import '../globals.css'

export const metadata = obterMetadata('pt-BR')

export default function LayoutPortugues({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>
}
