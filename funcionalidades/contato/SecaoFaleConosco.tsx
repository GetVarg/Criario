import styles from './SecaoFaleConosco.module.css'
import { CartaoDeContato } from './CartaoDeContato'
import type { Textos } from '../../locales'

export function SecaoFaleConosco({ textos }: { textos: Textos['contato'] }) {
  return (
    <section id="fale-conosco" className={styles.secao}>
      <div className={styles.titulo}>
        <h2>{textos.titulo}</h2>
      </div>
      <div className={styles.painel}>
        <CartaoDeContato textos={textos} />
      </div>
    </section>
  )
}
