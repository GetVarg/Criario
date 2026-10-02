type LogotipoCriarioProps = {
  texto: string
  invertido?: boolean
}

export function LogotipoCriario({ texto, invertido = false }: LogotipoCriarioProps) {
  return (
    <span className={`logotipo-criario${invertido ? ' logotipo-criario--invertido' : ''}`}>
      {texto}
    </span>
  )
}
