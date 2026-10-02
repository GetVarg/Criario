'use client'

import { useEffect, useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import type { Textos } from '../../locales'
import { emailDeContato, endpointDeContato, formularioDeContato, tempoLimiteDeEnvio } from '../../dados/contato'
import { enviarMensagem } from './enviarMensagem'
import styles from './Contato.module.css'

export function FormularioDeContato({ textos }: { textos: Textos['contato']['formulario'] }) {
  const [estado, setEstado] = useState<'ocioso' | 'enviando' | 'enviado' | 'erro'>('ocioso')
  const [erro, setErro] = useState('')
  const requisicao = useRef<AbortController | null>(null)
  const sucesso = useRef<HTMLDivElement>(null)
  const idErro = useId()
  const enviando = estado === 'enviando'

  useEffect(() => () => { requisicao.current?.abort() }, [])
  useEffect(() => {
    const elemento = sucesso.current
    if (estado !== 'enviado' || !elemento) return
    const modal = elemento.closest('dialog')
    if (modal ? modal.open : !document.querySelector('dialog[open]')) elemento.focus({ preventScroll: true })
  }, [estado])

  async function lidarComEnvio(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    if (requisicao.current) return
    const formulario = evento.currentTarget
    if (!formulario.reportValidity()) return
    const dados = new FormData(formulario)
    for (const [chave, valor] of dados.entries()) {
      if (typeof valor === 'string') dados.set(chave, valor.trim())
    }
    if (!dados.get('name') || !dados.get('email') || !dados.get('message') || dados.get('_honey')) {
      setErro(textos.invalido)
      setEstado('erro')
      return
    }
    // Envia somente origem e caminho, sem parâmetros de URL potencialmente sensíveis.
    dados.set('_url', window.location.origin + window.location.pathname)
    dados.set('idioma', document.documentElement.lang)

    const controlador = new AbortController()
    requisicao.current = controlador
    setEstado('enviando')
    setErro('')
    const limite = window.setTimeout(() => controlador.abort(), tempoLimiteDeEnvio)
    try {
      await enviarMensagem(dados, endpointDeContato, controlador.signal)
      formulario.reset()
      setEstado('enviado')
    } catch {
      // Preserva os campos para uma nova tentativa; não apresenta resposta externa como HTML.
      setErro(controlador.signal.aborted ? textos.tempoEsgotado : textos.erro)
      setEstado('erro')
    } finally {
      window.clearTimeout(limite)
      requisicao.current = null
    }
  }

  if (estado === 'enviado') return (
    <div ref={sucesso} className={styles.sucesso} role="status" tabIndex={-1}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
      <p>{textos.sucesso}</p>
      <button className={styles.enviar} type="button" onClick={() => setEstado('ocioso')}>{textos.novaMensagem}</button>
    </div>
  )

  return (
    <form className={styles.formulario} action={formularioDeContato} method="POST" onSubmit={lidarComEnvio} aria-busy={enviando} aria-describedby={erro ? idErro : undefined}>
      <input type="hidden" name="_subject" value={textos.assunto} />
      <input type="hidden" name="_template" value="table" />
      <div className={styles.armadilha} aria-hidden="true"><input name="_honey" type="text" tabIndex={-1} autoComplete="off" /></div>
      <div className={styles.campos}>
        <label>{textos.nome}<input required name="name" autoComplete="name" maxLength={120} disabled={enviando} /></label>
        <label>{textos.empresa}<input name="empresa" autoComplete="organization" maxLength={160} disabled={enviando} /></label>
        <label>{textos.email}<input required type="email" name="email" autoComplete="email" maxLength={254} disabled={enviando} /></label>
        <label>{textos.telefone}<input type="tel" name="telefone" autoComplete="tel" maxLength={40} disabled={enviando} /></label>
        <label>{textos.cargo}<input name="cargo" autoComplete="organization-title" maxLength={120} disabled={enviando} /></label>
        <label>{textos.origem}<input name="origem" maxLength={200} disabled={enviando} /></label>
      </div>
      <label className={styles.necessidade}>{textos.necessidade}
        <textarea required name="message" rows={3} maxLength={5000} disabled={enviando} />
      </label>
      {erro && <p id={idErro} className={styles.erro} role="alert">{erro} <a className={styles.alternativa} href={`mailto:${emailDeContato}`}>{textos.alternativa}</a></p>}
      <button className={styles.enviar} type="submit" disabled={enviando}>{enviando ? textos.enviando : textos.enviar} <span aria-hidden="true">↗</span></button>
    </form>
  )
}
