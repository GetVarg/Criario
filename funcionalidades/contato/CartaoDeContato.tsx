import type { Textos } from '../../locales'
import { FormularioDeContato } from './FormularioDeContato'
import styles from './Contato.module.css'

type Props = { textos: Textos['contato']; aoFechar?: () => void }

/** O mesmo card é usado na seção fixa e dentro do diálogo de contato. */
export function CartaoDeContato({ textos, aoFechar }: Props) {
  return (
    <div className={styles.cartao}>
      {aoFechar && <button className={styles.fechar} type="button" onClick={aoFechar} aria-label={textos.fechar}><span aria-hidden="true">×</span></button>}
      <FormularioDeContato textos={textos.formulario} />
    </div>
  )
}
