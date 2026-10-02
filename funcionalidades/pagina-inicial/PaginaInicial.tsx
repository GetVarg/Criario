import { CabecalhoSite } from '../../componentes/CabecalhoSite'
import { RodapeSite } from '../../componentes/RodapeSite'
import { FaleConosco } from '../../componentes/FaleConosco'
import { casesEmDestaque } from '../../dados/cases'
import { depoimentos } from '../../dados/depoimentos'
import { SecaoServicos } from '../servicos/SecaoServicos'
import { CartaoResumoDeCase } from '../cases/CartaoResumoDeCase'
import { DepoimentoDeCliente } from '../depoimentos/DepoimentoDeCliente'
import { SecaoFaleConosco } from '../contato/SecaoFaleConosco'
import styles from './PaginaInicial.module.css'
import { obterTextos, type Idioma } from '../../locales'
import { ProvedorDeContato } from '../contato/ProvedorDeContato'
import { RevelarFotosDeDepoimentos } from '../depoimentos/RevelarFotosDeDepoimentos'
import estilosDepoimentos from '../depoimentos/Depoimentos.module.css'
import { CarrosselLogotiposParceiros } from './CarrosselLogotiposParceiros'

export function PaginaInicial({ idioma }: { idioma: Idioma }) {
  const textos = obterTextos(idioma)
  return (
    <ProvedorDeContato textos={textos.contato}>
    <div className={styles.pagina}>
      <CabecalhoSite textos={{ marca: textos.marca, menu: textos.menu, navegacao: textos.navegacao, comum: textos.comum, idiomas: textos.idiomas }} idioma={idioma} />

      <main>
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

        <SecaoServicos textos={textos.servicos} comum={textos.comum} />

        <section id="cases" className={styles.cases}>
          <div className={styles.casesIntro}>
            <h2>{textos.cases.titulo}</h2>
            <p>{textos.cases.descricao}</p>
          </div>
          <div className={styles.casesGrade}>
            {casesEmDestaque.map(({ id, imagem }) => <CartaoResumoDeCase key={id} imagem={imagem} {...textos.cases.itens[id]} />)}
          </div>
        </section>

        <section id="depoimentos" className={estilosDepoimentos.secao}>
          <div className={estilosDepoimentos.introducao}>
            <h2>{textos.depoimentos.titulo}</h2>
            <p>{textos.depoimentos.descricao}</p>
          </div>
          <RevelarFotosDeDepoimentos>
            {depoimentos.map(({ id, ...item }) => <DepoimentoDeCliente key={id} {...item} {...textos.depoimentos.itens[id]} />)}
          </RevelarFotosDeDepoimentos>
        </section>

        <CarrosselLogotiposParceiros rotulo={textos.clientes.rotulo} />

        <section className={styles.manifesto}>
          <p>{textos.manifesto.antes}<em>{textos.manifesto.destaque}</em>{textos.manifesto.depois}</p>
        </section>

        <SecaoFaleConosco textos={textos.contato} />
      </main>

      <RodapeSite textos={textos} />
    </div>
    </ProvedorDeContato>
  )
}
