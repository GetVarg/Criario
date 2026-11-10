'use client'

import type { PointerEvent } from 'react'
import type { Case } from '../../dados/cases'
import styles from './CartaoResumoDeCase.module.css'

type Props = Case & { titulo?: string; formato?: 'resumo' | 'horizontal' }

export function CartaoResumoDeCase({ cliente, contexto, resumo, imagem, imagemAlt, titulo, formato = 'resumo' }: Props) {
  function acompanharMouse(evento: PointerEvent<HTMLElement>) {
    if (formato !== 'resumo' || evento.pointerType !== 'mouse') return
    const cartao = evento.currentTarget
    const limites = cartao.getBoundingClientRect()
    cartao.style.setProperty('--mouse-x', `${evento.clientX - limites.left}px`)
    cartao.style.setProperty('--mouse-y', `${evento.clientY - limites.top}px`)
    cartao.dataset.mouse = 'ativo'
  }

  function ocultarNuvem(evento: PointerEvent<HTMLElement>) {
    delete evento.currentTarget.dataset.mouse
  }

  return (
    <article className={`${styles.cartao} ${formato === 'horizontal' ? styles.horizontal : ''}`} tabIndex={0} aria-label={cliente} onPointerMove={acompanharMouse} onPointerLeave={ocultarNuvem} onPointerCancel={ocultarNuvem}>
      {formato === 'resumo' && <span className={styles.nuvem} aria-hidden="true" />}
      <div className={styles.imagem}>
        <img src={imagem} alt={imagemAlt} width={formato === 'horizontal' ? 1600 : 1280} height={formato === 'horizontal' ? 1029 : 1240} loading="lazy" decoding="async" />
      </div>
      <div className={styles.texto}>
        <div className={styles.cabecalho}>
          <div>
            <span className={styles.contexto}>{contexto}</span>
            {formato === 'horizontal' ? <h2>{titulo ?? cliente}</h2> : <h3>{cliente}</h3>}
          </div>
          {formato === 'resumo' && <span className={styles.mais} aria-hidden="true">+</span>}

        </div>
        <p>{resumo}</p>
        {formato === 'horizontal' && <span className={styles.mais} aria-hidden="true">+</span>}
      </div>
    </article>
  )
}
