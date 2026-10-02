'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import type { Textos } from '../../locales'
import { CartaoDeContato } from './CartaoDeContato'
import styles from './Contato.module.css'

const ContextoDeContato = createContext<{ abrirContato: (acionador?: HTMLElement) => void } | null>(null)
export const useContato = () => useContext(ContextoDeContato)

export function ProvedorDeContato({ textos, children }: { textos: Textos['contato']; children: ReactNode }) {
  const [aberto, setAberto] = useState(false)
  const [montado, setMontado] = useState(false)
  const dialogo = useRef<HTMLDialogElement>(null)
  const acionador = useRef<HTMLElement | null>(null)
  const abrirContato = useCallback((origem?: HTMLElement) => {
    acionador.current = origem ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null)
    setMontado(true)
    setAberto(true)
  }, [])
  const contexto = useMemo(() => ({ abrirContato }), [abrirContato])

  useEffect(() => {
    const elemento = dialogo.current
    if (!aberto || !elemento) return
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
      if (acionador.current?.isConnected) acionador.current.focus({ preventScroll: true })
    }
  }, [aberto])

  return (
    <ContextoDeContato.Provider value={contexto}>
      {children}
      <dialog
        ref={dialogo}
        className={styles.modal}
        aria-label={textos.titulo}
        tabIndex={-1}
        onCancel={(evento) => { evento.preventDefault(); setAberto(false) }}
        onClose={() => setAberto(false)}
        onClick={(evento) => { if (evento.target === evento.currentTarget) setAberto(false) }}
        onKeyDown={(evento) => {
          if (evento.key !== 'Tab') return
          const controles = evento.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled):not([type="hidden"]):not([tabindex="-1"]), textarea:not(:disabled), a[href]')
          const primeiro = controles[0]
          const ultimo = controles[controles.length - 1]
          if (!primeiro || !ultimo) return
          if (evento.shiftKey && (document.activeElement === primeiro || document.activeElement === evento.currentTarget)) {
            evento.preventDefault(); ultimo.focus()
          } else if (!evento.shiftKey && document.activeElement === ultimo) {
            evento.preventDefault(); primeiro.focus()
          }
        }}
      >
        {montado && <CartaoDeContato textos={textos} aoFechar={() => setAberto(false)} />}
      </dialog>
    </ContextoDeContato.Provider>
  )
}
