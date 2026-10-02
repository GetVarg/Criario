'use client'

import type { ComponentProps } from 'react'
import { useContato } from './ProvedorDeContato'

/** Mantém a âncora como fallback e abre o mesmo modal em qualquer parte da página. */
export function LinkDeContato({ children, onClick, ...props }: ComponentProps<'a'>) {
  const contato = useContato()
  return (
    <a
      {...props}
      href="#fale-conosco"
      aria-haspopup={contato ? 'dialog' : undefined}
      onClick={(evento) => {
        onClick?.(evento)
        if (!contato || evento.defaultPrevented || evento.button !== 0
          || evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return
        evento.preventDefault()
        contato.abrirContato(evento.currentTarget)
      }}
    >{children}</a>
  )
}
