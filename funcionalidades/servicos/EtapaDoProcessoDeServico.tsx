import type { EtapaDeServico } from '../../dados/servicos'
import styles from './SecaoServicos.module.css'
import { LinkDeContato } from '../contato/LinkDeContato'

type Props = EtapaDeServico & { saibaMais: string }

export function EtapaDoProcessoDeServico({ numero, titulo, descricao, posicao, saibaMais }: Props) {
  return (
    <article className={`${styles.etapa} ${posicao === 'baixo' ? styles.etapaBaixa : ''}`}>
      <div className={styles.conteudo} data-etapa>
        <span className={styles.numero}>{numero}</span>
        <h3>{titulo}</h3>
        <p>{descricao}</p>
        <LinkDeContato>{saibaMais} <span aria-hidden="true">→</span></LinkDeContato>
      </div>
    </article>
  )
}
