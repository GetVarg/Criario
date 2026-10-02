import type { Depoimento } from '../../dados/depoimentos'
import styles from './Depoimentos.module.css'

type Props = Depoimento

export function DepoimentoDeCliente({ nome, cargo, citacao, imagem, imagemAlt, alinhamento }: Props) {
  return (
    <article className={`${styles.depoimento} ${alinhamento === 'direita' ? styles.direita : styles.esquerda}`}>
      <div className={styles.imagem} data-foto-depoimento>
        <span className={styles.marco} data-marco-revelacao aria-hidden="true" />
        <img src={imagem} alt={imagemAlt} width={640} height={882} loading="lazy" decoding="async" />
      </div>
      <div className={styles.texto}>
        <h3>{nome}</h3>
        <strong>{cargo}</strong>
        <p>“{citacao}”</p>
      </div>
    </article>
  )
}
