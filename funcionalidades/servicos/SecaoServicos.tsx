'use client'

import { useEffect, useRef } from 'react'
import { etapasDeServico } from '../../dados/servicos'
import { EtapaDoProcessoDeServico } from './EtapaDoProcessoDeServico'
import styles from './SecaoServicos.module.css'
import type { Textos } from '../../locales'
import { LinkDeContato } from '../contato/LinkDeContato'

export function SecaoServicos({ textos, comum }: { textos: Textos['servicos']; comum: Textos['comum'] }) {
  const grade = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elemento = grade.current
    const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!elemento || movimentoReduzido.matches || !('IntersectionObserver' in window)) return

    const itens = Array.from(elemento.querySelectorAll<HTMLElement>('[data-etapa]'))
    const desktop = window.matchMedia('(min-width: 1000px)')
    const pendentes = new Set(itens)

    function revelar(item: HTMLElement, atraso = 0) {
      item.style.setProperty('--atraso', `${atraso}ms`)
      item.dataset.revelacao = 'visivel'
      pendentes.delete(item)
    }

    const observador = new IntersectionObserver((entradas) => {
      let ordem = 0
      for (const entrada of entradas) {
        if (!entrada.isIntersecting) continue
        if (entrada.target === elemento) {
          itens.filter((item) => pendentes.has(item)).forEach((item, indice) => revelar(item, indice * 360))
        } else if (pendentes.has(entrada.target as HTMLElement)) {
          revelar(entrada.target as HTMLElement, ordem++ * 180)
        }
        observador.unobserve(entrada.target)
      }
      if (pendentes.size === 0) observador.disconnect()
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' })

    function observar() {
      observador.disconnect()
      if (desktop.matches && pendentes.size) observador.observe(elemento!)
      else pendentes.forEach((item) => observador.observe(item))
    }

    // O HTML permanece legível sem JavaScript. Só ocultamos após preparar o observador.
    itens.forEach((item) => { item.dataset.revelacao = 'pendente' })
    observar()

    function mostrarTudo() {
      if (!movimentoReduzido.matches) return
      observador.disconnect()
      itens.forEach((item) => { delete item.dataset.revelacao })
      pendentes.clear()
    }

    // Um link alcançado pelo teclado nunca fica esperando a animação.
    function revelarFoco(evento: FocusEvent) {
      const item = (evento.target as HTMLElement).closest<HTMLElement>('[data-etapa]')
      if (!item) return
      revelar(item)
      delete item.dataset.revelacao
      observador.unobserve(item)
      if (!pendentes.size) observador.disconnect()
    }

    desktop.addEventListener('change', observar)
    movimentoReduzido.addEventListener('change', mostrarTudo)
    elemento.addEventListener('focusin', revelarFoco)
    return () => {
      observador.disconnect()
      desktop.removeEventListener('change', observar)
      movimentoReduzido.removeEventListener('change', mostrarTudo)
      elemento.removeEventListener('focusin', revelarFoco)
      itens.forEach((item) => { delete item.dataset.revelacao })
    }
  }, [])

  return (
    <section id="servicos" className={styles.secao} aria-labelledby="titulo-servicos">
      <div className={styles.introducao}>
        <h2 id="titulo-servicos">{textos.titulo}</h2>
        <p>{textos.descricao}</p>
      </div>
      <div className={styles.processo}>
        <div ref={grade} className={styles.grade}>
          {etapasDeServico.map(({ id, ...etapa }) => <EtapaDoProcessoDeServico key={id} {...etapa} {...textos.itens[id]} saibaMais={comum.saibaMais} />)}
        </div>
        <div className={styles.chamada}>
          <LinkDeContato>{comum.faleConosco}</LinkDeContato>
        </div>
      </div>
    </section>
  )
}
