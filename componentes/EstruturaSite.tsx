import type { ReactNode } from 'react'
import type { Idioma, Textos } from '../locales'
import type { PaginaDoSite } from '../dados/navegacao'
import { ProvedorDeContato } from '../funcionalidades/contato/ProvedorDeContato'
import { CabecalhoSite } from './CabecalhoSite'
import { RodapeSite } from './RodapeSite'
import styles from './EstruturaSite.module.css'

export function EstruturaSite({ children, idioma, textos, pagina = 'inicio' }: {
  children: ReactNode; idioma: Idioma; textos: Textos; pagina?: PaginaDoSite
}) {
  return (
    <ProvedorDeContato textos={textos.contato}>
      <div className={styles.pagina}>
        <CabecalhoSite textos={{ marca: textos.marca, menu: textos.menu, navegacao: textos.navegacao, comum: textos.comum, idiomas: textos.idiomas }} idioma={idioma} pagina={pagina} />
        <main>{children}</main>
        <RodapeSite textos={textos} idioma={idioma} pagina={pagina} />
      </div>
    </ProvedorDeContato>
  )
}
