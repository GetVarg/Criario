'use client'

import { useEffect, useRef, useState, type AnimationEvent, type CSSProperties, type KeyboardEvent } from 'react'
import { LogotipoCriario } from '../../componentes/LogotipoCriario'
import { itensDeNavegacao } from '../../dados/navegacao'
import styles from './MenuPrincipal.module.css'
import type { TextosCabecalho } from '../../componentes/CabecalhoSite'
import type { Idioma } from '../../locales'
import { useContato } from '../contato/ProvedorDeContato'

type FaseDoMenu = 'abrindo' | 'aberto' | 'fechando'
type MenuPrincipalProps = { aoFechar: () => void; textos: TextosCabecalho; idioma: Idioma }

export function MenuPrincipal({ aoFechar, textos, idioma }: MenuPrincipalProps) {
  const abrirContato = useContato()?.abrirContato
  const [fase, setFase] = useState<FaseDoMenu>('abrindo')
  const dialogo = useRef<HTMLDialogElement>(null)
  const botaoFechar = useRef<HTMLButtonElement>(null)
  const destinoPendente = useRef<string | null>(null)

  useEffect(() => {
    const elemento = dialogo.current
    if (!elemento) return

    const acionador = document.activeElement
    const raiz = document.documentElement
    const overflowAnterior = raiz.style.overflow
    const gutterAnterior = raiz.style.scrollbarGutter
    raiz.style.scrollbarGutter = 'stable'
    raiz.style.overflow = 'hidden'
    elemento.showModal()
    elemento.focus({ preventScroll: true })

    return () => {
      elemento.close()
      raiz.style.overflow = overflowAnterior
      raiz.style.scrollbarGutter = gutterAnterior

      // Navega somente depois de liberar a página e concluir a saída visual.
      const destino = destinoPendente.current
      if (!destino) {
        if (acionador instanceof HTMLElement && acionador.isConnected) acionador.focus({ preventScroll: true })
        return
      }
      if (destino === 'fale-conosco' && abrirContato) {
        abrirContato(acionador instanceof HTMLElement ? acionador : undefined)
        return
      }
      window.location.hash = destino
      const secao = document.getElementById(destino)
      if (!secao) return
      const tabindexAnterior = secao.getAttribute('tabindex')
      secao.setAttribute('tabindex', '-1')
      secao.focus({ preventScroll: true })
      secao.addEventListener('blur', () => {
        if (tabindexAnterior === null) secao.removeAttribute('tabindex')
        else secao.setAttribute('tabindex', tabindexAnterior)
      }, { once: true })
    }
  }, [abrirContato])

  useEffect(() => {
    if (fase === 'aberto') botaoFechar.current?.focus({ preventScroll: true })
  }, [fase])

  function fechar(destino?: string) {
    if (fase === 'fechando') return
    destinoPendente.current = destino ?? null
    setFase('fechando')
  }

  function manterFoco(evento: KeyboardEvent<HTMLDialogElement>) {
    if (evento.key !== 'Tab') return
    if (fase !== 'aberto') { evento.preventDefault(); return }
    const controles = evento.currentTarget.querySelectorAll<HTMLElement>('button, a[href]')
    const primeiro = controles[0]
    const ultimo = controles[controles.length - 1]
    if (!primeiro || !ultimo) return
    if (evento.shiftKey && document.activeElement === primeiro) {
      evento.preventDefault()
      ultimo.focus()
    } else if (!evento.shiftKey && document.activeElement === ultimo) {
      evento.preventDefault()
      primeiro.focus()
    }
  }

  function concluirFaixas(evento: AnimationEvent<HTMLDivElement>) {
    if (evento.target !== evento.currentTarget) return
    if (fase === 'abrindo') setFase('aberto')
    else if (fase === 'fechando') aoFechar()
  }

  return (
    <dialog
      ref={dialogo}
      id="menu-principal"
      className={styles.menu}
      data-fase={fase}
      aria-label={textos.menu.rotulo}
      tabIndex={-1}
      onKeyDown={manterFoco}
      onCancel={(evento) => { evento.preventDefault(); fechar() }}
    >
      <div className={styles.faixas} aria-hidden="true">
        {[0, 1, 2, 3].map((ordem) => (
          <div
            key={ordem}
            className={styles.faixa}
            style={{ '--ordem': ordem } as CSSProperties}
            onAnimationEnd={ordem === 3 ? concluirFaixas : undefined}
          />
        ))}
      </div>

      <div className={styles.conteudo} inert={fase !== 'aberto'}>
        <div className={styles.topo}>
          <LogotipoCriario texto={textos.marca} invertido />
          <button ref={botaoFechar} className={styles.fechar} type="button" onClick={() => fechar()} aria-label={textos.menu.fecharRotulo}>
            <span>{textos.menu.fechar}</span><span className={styles.iconeFechar} aria-hidden="true" />
          </button>
        </div>

        <nav className={styles.navegacao} aria-label={textos.menu.navegacaoRotulo}>
          <ol className={styles.lista}>
            {itensDeNavegacao.map(({ numero, id, destino }, ordem) => (
              <li key={destino} className={styles.item} style={{ '--ordem': ordem } as CSSProperties}>
                <a className={styles.link} href={'#' + destino} aria-haspopup={destino === 'fale-conosco' ? 'dialog' : undefined} onClick={(evento) => { evento.preventDefault(); fechar(destino) }}>
                  <span className={styles.numero} aria-hidden="true">{numero}</span>
                  <span>{textos.navegacao[id]}</span>
                  <span className={styles.seta} aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className={styles.assinatura}>
          <span>{textos.menu.assinatura}</span>
          <nav className={styles.idiomas} aria-label={textos.idiomas.rotulo}>
            <a href="/" hrefLang="pt-BR" lang="pt-BR" aria-current={idioma === 'pt-BR' ? 'page' : undefined}>{textos.idiomas.portugues}</a>
            <a href="/en/" hrefLang="en" lang="en" aria-current={idioma === 'en' ? 'page' : undefined}>{textos.idiomas.ingles}</a>
          </nav>
        </div>
      </div>
    </dialog>
  )
}
