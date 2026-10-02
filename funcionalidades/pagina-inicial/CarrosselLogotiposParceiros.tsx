import { logotiposDeClientes } from '../../dados/clientes'
import styles from './CarrosselLogotiposParceiros.module.css'

export function CarrosselLogotiposParceiros({ rotulo }: { rotulo: string }) {
  return (
    <section className={styles.faixa} aria-label={rotulo}>
      <div className={styles.mascara}>
        <div className={styles.trilho}>
          {[0, 1].map((copia) => (
            <div className={styles.grupo} aria-hidden={copia === 1} key={copia}>
              {logotiposDeClientes.map(({ id, nome, imagem }) => (
                <img key={`${id}-${copia}`} src={imagem} alt={copia === 0 ? nome : ''} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
