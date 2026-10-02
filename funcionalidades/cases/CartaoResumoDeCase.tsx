import type { Case } from '../../dados/cases'
import styles from './CartaoResumoDeCase.module.css'

type Props = Case

export function CartaoResumoDeCase({ cliente, contexto, resumo, imagem, imagemAlt }: Props) {
  return (
    <article className={`cartao-case ${styles.cartao}`} tabIndex={0} aria-label={cliente}>
      <div className="cartao-case__imagem">
        <img src={imagem} alt={imagemAlt} />
      </div>
      <div className={`cartao-case__texto ${styles.texto}`}>
        <div className={styles.cabecalho}>
          <div>
            <span className={styles.contexto}>{contexto}</span>
            <h3>{cliente}</h3>
          </div>
          <span className={styles.mais} aria-hidden="true">+</span>
        </div>
        <p>{resumo}</p>
      </div>
    </article>
  )
}
