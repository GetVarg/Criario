import { obterMetadata } from '../../locales'
import '../globals.css'

export const metadata = obterMetadata('en')

export default function LayoutIngles({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
