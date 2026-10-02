import styles from './RodapeSite.module.css'
import { itensDeNavegacao } from '../dados/navegacao'
import type { Textos } from '../locales'
import { LinkDeContato } from '../funcionalidades/contato/LinkDeContato'
import { linkWhatsApp } from '../dados/contato'

export function RodapeSite({ textos }: { textos: Textos }) {
  return (
    <footer className={styles.rodape}>
      <div className={styles.marca}>
        <img src="/images/logo-criario-footer.png" alt={textos.marca} />
      </div>
      <div className={styles.links}>
        {itensDeNavegacao.map(({ id, destino }) => destino === 'fale-conosco'
          ? <LinkDeContato key={id}>→ &nbsp; {textos.navegacao[id]}</LinkDeContato>
          : <a key={id} href={'#' + destino}>→ &nbsp; {textos.navegacao[id]}</a>)}
      </div>
      <div className={styles.especialistas}>
        <span>{textos.rodape.especialistas}</span>
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noreferrer"
          aria-label={textos.rodape.especialistasRotulo}
        >
          <img src="/images/whatsapp-footer.png" alt="" />
        </a>
      </div>
      <div className={styles.copyright}>{textos.rodape.copyright}</div>
    </footer>
  )
}
