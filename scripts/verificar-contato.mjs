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

const validacao = {}
const fonteValidacao = readFileSync(new URL('../funcionalidades/contato/validarContato.ts', import.meta.url), 'utf8')
runInNewContext(ts.transpileModule(fonteValidacao, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, { exports: validacao })
const validar = (campo, valor) => {
  const formulario = new FormData()
  formulario.set('name', "  João D'Ávila  ")
  formulario.set('email', 'teste@example.com')
  formulario.set('message', 'Projeto de interiores\nÁrea: 100 m² 👨‍👩‍👧')
  formulario.set('telefone', '+5561993405115')
  if (campo) formulario.set(campo, valor)
  const resultado = validacao.campoInvalido(formulario, ['Pesquisa na internet'])
  if (!resultado) assert.equal(formulario.get('name'), "João D'Ávila")
  return resultado
}
assert.equal(validar(), null)
// Conteúdo textual não é executado nem destruído por uma blacklist de SQL/HTML.
assert.equal(validar('message', "<script>alert(1)</script> ' OR 1=1; --"), null)
assert.equal(validar('_honey', 'preenchimento automático'), null)
assert.equal(validar('origem', 'Pesquisa na internet'), null)
assert.equal(validar('telefone', ''), null)
for (const [campo, valor] of [
  ['name', '   '], ['message', '\n  '], ['message', 'a'.repeat(5001)],
  ['email', 'email-invalido'], ['email', 'a@b.com\r\nBcc: outro@example.com'],
  ['telefone', '123'], ['telefone', '+55<script>'], ['origem', 'opção adulterada'],
  ['cargo', 'a\u0000b'], ['empresa', 'a'.repeat(161)],
]) assert.equal(validar(campo, valor), campo)
const duplicados = new FormData()
duplicados.append('name', 'João')
duplicados.append('name', 'Maria')
assert.equal(validacao.campoInvalido(duplicados, []), 'name')
console.log('OK: campos preenchidos, autofill, Unicode, formatos, limites, controles e duplicatas.')
