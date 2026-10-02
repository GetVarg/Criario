'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import styles from './Depoimentos.module.css'

export function RevelarFotosDeDepoimentos({ children }: { children: ReactNode }) {
  const grade = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elemento = grade.current
    const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!elemento || movimentoReduzido.matches || !('IntersectionObserver' in window)) return

    const fotos = Array.from(elemento.querySelectorAll<HTMLElement>('[data-foto-depoimento]'))
    let restantes = fotos.length
    const observador = new IntersectionObserver((entradas) => {
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue
        const foto = entrada.target.parentElement
        if (foto?.dataset.revelacao !== 'pendente') continue
        foto.dataset.revelacao = 'visivel'
        observador.unobserve(entrada.target)
        restantes--
      }
      if (!restantes) observador.disconnect()
    })

    for (const foto of fotos) {
      const marco = foto.querySelector<HTMLElement>('[data-marco-revelacao]')
      if (!marco) { restantes--; continue }
      // Se a página foi restaurada abaixo da foto, ela já deve estar revelada.
      if (marco.getBoundingClientRect().bottom <= 0) { restantes--; continue }
      foto.dataset.revelacao = 'pendente'
      observador.observe(marco)
    }

    function mostrarTudo() {
      if (!movimentoReduzido.matches) return
      observador.disconnect()
      fotos.forEach((foto) => { delete foto.dataset.revelacao })
    }
    movimentoReduzido.addEventListener('change', mostrarTudo)
    return () => {
      observador.disconnect()
      movimentoReduzido.removeEventListener('change', mostrarTudo)
      fotos.forEach((foto) => { delete foto.dataset.revelacao })
    }
  }, [])

  return <div ref={grade} className={styles.grade}>{children}</div>
}
