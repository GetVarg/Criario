import type { EtapaDeServico } from '../../dados/servicos'
import styles from './SecaoServicos.module.css'
export function EtapaDoProcessoDeServico({ numero, titulo, descricao, posicao }: EtapaDeServico) {
  return (
    <article className={`${styles.etapa} ${posicao === 'baixo' ? styles.etapaBaixa : ''}`}>
      <div className={styles.conteudo} data-etapa>
        <span className={styles.numero}>{numero}</span>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </article>
  )
}
