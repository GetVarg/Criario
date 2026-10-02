import { CartaoDeContato } from './CartaoDeContato'
import type { Textos } from '../../locales'

export function SecaoFaleConosco({ textos }: { textos: Textos['contato'] }) {
  return (
    <section id="fale-conosco" className="secao-contato">
      <div className="secao-contato__titulo">
        <h2>{textos.titulo}</h2>
      </div>
      <div className="secao-contato__painel">
        <CartaoDeContato textos={textos} />
      </div>
    </section>
  )
}
