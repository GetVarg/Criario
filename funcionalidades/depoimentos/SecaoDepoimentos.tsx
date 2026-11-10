import { depoimentos } from '../../dados/depoimentos'
import type { Textos } from '../../locales'
import { DepoimentoDeCliente } from './DepoimentoDeCliente'
import { RevelarFotosDeDepoimentos } from './RevelarFotosDeDepoimentos'
import styles from './Depoimentos.module.css'

export function SecaoDepoimentos({ textos, cascata = false }: { textos: Textos['depoimentos']; cascata?: boolean }) {
  return (
    <section id="depoimentos" className={`${styles.secao} ${cascata ? styles.cascata : ''}`}>
      <div className={styles.introducao}>
        <h2>{textos.titulo}</h2>
        <p>{textos.descricao}</p>
      </div>
      <RevelarFotosDeDepoimentos>
        {depoimentos.map(({ id, ...item }) => <DepoimentoDeCliente key={id} {...item} {...textos.itens[id]} />)}
      </RevelarFotosDeDepoimentos>
    </section>
  )
}
