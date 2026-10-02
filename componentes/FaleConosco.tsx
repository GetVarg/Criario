import styles from './FaleConosco.module.css'
import { LinkDeContato } from '../funcionalidades/contato/LinkDeContato'

export function FaleConosco({ texto }: { texto: string }) {
  return (
    <LinkDeContato className={styles.faleConosco}>
      {texto} <span aria-hidden="true">→</span>
    </LinkDeContato>
  )
}
