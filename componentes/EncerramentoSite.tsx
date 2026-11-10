import type { Textos } from '../locales'
import { SecaoDepoimentos } from '../funcionalidades/depoimentos/SecaoDepoimentos'
import { CarrosselLogotiposParceiros } from '../funcionalidades/pagina-inicial/CarrosselLogotiposParceiros'
import { SecaoFaleConosco } from '../funcionalidades/contato/SecaoFaleConosco'
import styles from './EncerramentoSite.module.css'

export function EncerramentoSite({ textos, cascata = false }: { textos: Textos; cascata?: boolean }) {
  return <>
    <SecaoDepoimentos textos={textos.depoimentos} cascata={cascata} />
    <CarrosselLogotiposParceiros rotulo={textos.clientes.rotulo} />
    <section className={styles.manifesto}>
      <p>{textos.manifesto.antes}<em>{textos.manifesto.destaque}</em>{textos.manifesto.depois}</p>
    </section>
    <SecaoFaleConosco textos={textos.contato} />
  </>
}
