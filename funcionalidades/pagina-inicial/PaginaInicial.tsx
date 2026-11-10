import { EstruturaSite } from '../../componentes/EstruturaSite'
import { EncerramentoSite } from '../../componentes/EncerramentoSite'
import { FaleConosco } from '../../componentes/FaleConosco'
import { casesEmDestaque } from '../../dados/cases'
import { caminhoDaPagina } from '../../dados/navegacao'
import { SecaoServicos } from '../servicos/SecaoServicos'
import { CartaoResumoDeCase } from '../cases/CartaoResumoDeCase'
import styles from './PaginaInicial.module.css'
import { obterTextos, type Idioma } from '../../locales'

export function PaginaInicial({ idioma }: { idioma: Idioma }) {
  const textos = obterTextos(idioma)
  return (
    <EstruturaSite idioma={idioma} textos={textos}>
        <section id="inicio" className={styles.apresentacao}>
          <div className={styles.apresentacaoImagem} />
          <div className={styles.apresentacaoTexto}>
            <h1>{textos.apresentacao.titulo}</h1>
            <p>{textos.apresentacao.descricao}</p>
            <div className={styles.faleConoscoContainer}>
              <FaleConosco texto={textos.comum.faleConosco} />
            </div>
          </div>
        </section>

        <SecaoServicos textos={textos.servicos} comum={textos.comum} idioma={idioma} />

        <section id="cases" className={styles.cases}>
          <div className={styles.casesIntro}>
            <h2>{textos.cases.titulo}</h2>
            <p>{textos.cases.descricao}</p>
          </div>
          <div className={styles.casesGrade}>
            {casesEmDestaque.map(({ id, imagem }) => <CartaoResumoDeCase key={id} imagem={imagem} {...textos.cases.itens[id]} />)}
          </div>
          <div className={styles.casesRodape}>
            <a href={caminhoDaPagina(idioma, 'cases')}>{textos.cases.verTodos} <span aria-hidden="true">→</span></a>
          </div>
        </section>

        <EncerramentoSite textos={textos} />
    </EstruturaSite>
  )
}
