import { EstruturaSite } from '../../componentes/EstruturaSite'
import { EncerramentoSite } from '../../componentes/EncerramentoSite'
import { casesDaPagina } from '../../dados/cases'
import { obterTextos, type Idioma } from '../../locales'
import { CartaoResumoDeCase } from './CartaoResumoDeCase'
import styles from './PaginaCases.module.css'

export function PaginaCases({ idioma }: { idioma: Idioma }) {
  const textos = obterTextos(idioma)
  return (
    <EstruturaSite idioma={idioma} textos={textos} pagina="cases">
      <div id="inicio" className={styles.hero}>
        <img src="/images/cases/bitdoglab.webp" alt={textos.paginaCases.heroAlt} width={1920} height={980} fetchPriority="high" />
      </div>
      <section id="cases" aria-labelledby="titulo-cases">
        <div className={styles.introducao}>
          <h1 id="titulo-cases">{textos.paginaCases.titulo}</h1>
          <p>{textos.paginaCases.descricao}</p>
        </div>
        <div className={styles.lista}>
          {casesDaPagina.map(({ id, imagem }) => (
            <CartaoResumoDeCase key={id} {...textos.cases.itens[id]} imagem={imagem}
              titulo={textos.paginaCases.itens[id].titulo} resumo={textos.paginaCases.itens[id].resumo} formato="horizontal" />
          ))}
        </div>
      </section>
      <EncerramentoSite textos={textos} cascata />
    </EstruturaSite>
  )
}
