/** Confirma aceitação pelo serviço, não a entrega final na caixa de entrada. */
export async function enviarMensagem(
  dados: FormData,
  endpoint: string,
  signal: AbortSignal,
) {
  const resposta = await fetch(endpoint, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: dados,
    signal,
    credentials: 'omit',
  })
  if (!resposta.ok) throw new Error('Falha HTTP no envio')
  const resultado: unknown = await resposta.json()
  if (!resultado || typeof resultado !== 'object' || !('success' in resultado)
    || (resultado.success !== true && resultado.success !== 'true')) {
    throw new Error('Envio não confirmado pelo serviço')
  }
}
