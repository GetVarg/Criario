'use client'

import { useState } from 'react'
import { FaleConosco } from './FaleConosco'
import { MenuPrincipal } from '../funcionalidades/navegacao/MenuPrincipal'
import styles from './CabecalhoSite.module.css'
import type { Idioma, Textos } from '../locales'

export type TextosCabecalho = Pick<Textos, 'marca' | 'menu' | 'navegacao' | 'comum' | 'idiomas'>

export function CabecalhoSite({ textos, idioma }: { textos: TextosCabecalho; idioma: Idioma }) {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className={styles.cabecalho}>
      <a className={styles.logo} href="#inicio" aria-label={textos.menu.inicioRotulo}>
        <img src="/images/logo-criario-footer.png" alt="" />
      </a>

      <div className={styles.faleConoscoContainer}>
        <FaleConosco texto={textos.comum.faleConosco} />
      </div>

      <button
        className={styles.botaoMenu}
        type="button"
        aria-label={textos.menu.abrir}
        aria-haspopup="dialog"
        aria-expanded={menuAberto}
        aria-controls="menu-principal"
        onClick={() => setMenuAberto(true)}
      >
        <span className={styles.iconeMenu} aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{textos.menu.botao}</span>
      </button>

      {menuAberto && <MenuPrincipal textos={textos} idioma={idioma} aoFechar={() => setMenuAberto(false)} />}

    </header>
  )
}
