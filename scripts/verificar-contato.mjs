import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'

// Exercita o contrato do serviço com respostas simuladas, sem enviar e-mails reais.
const fonte = readFileSync(new URL('../funcionalidades/contato/enviarMensagem.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(fonte, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } })
let retorno
let ultimaRequisicao
const exports = {}
runInNewContext(outputText, {
  exports,
  fetch: async (url, opcoes) => {
    ultimaRequisicao = { url, ...opcoes }
    if (retorno instanceof Error) throw retorno
    return retorno
  },
})
const dados = new FormData()
dados.set('name', 'Teste local')
dados.set('email', 'teste@example.com')
dados.set('message', 'Nenhum e-mail será enviado por este teste.')
const controlador = new AbortController()
const enviar = () => exports.enviarMensagem(dados, 'https://example.com/formulario', controlador.signal)

for (const sucesso of [true, 'true']) {
  retorno = { ok: true, json: async () => ({ success: sucesso }) }
  await enviar()
}
assert.equal(ultimaRequisicao.method, 'POST')
assert.equal(ultimaRequisicao.body, dados)
assert.equal(ultimaRequisicao.signal, controlador.signal)
assert.equal(ultimaRequisicao.credentials, 'omit')
for (const corpo of [{ success: false }, { success: 'false' }, {}, null, { success: 'yes' }]) {
  retorno = { ok: true, json: async () => corpo }
  await assert.rejects(enviar, /não confirmado/)
}
retorno = { ok: false, json: async () => ({ success: true }) }
await assert.rejects(enviar, /HTTP/)
retorno = { ok: true, json: async () => { throw new Error('JSON inválido') } }
await assert.rejects(enviar, /JSON inválido/)
retorno = new Error('Sem conexão')
await assert.rejects(enviar, /Sem conexão/)
retorno = new DOMException('Tempo esgotado', 'AbortError')
await assert.rejects(enviar, { name: 'AbortError' })
console.log('OK: aceitação, rejeição, HTTP, JSON inválido, rede e cancelamento; nenhum e-mail enviado.')
