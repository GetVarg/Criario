import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const ler = (nome) => JSON.parse(readFileSync(new URL(`../locales/${nome}.json`, import.meta.url), 'utf8'))
const portugues = ler('pt-BR')
const ingles = ler('en')

function chaves(valor, prefixo = '') {
  return Object.entries(valor).flatMap(([chave, conteudo]) => {
    const caminho = prefixo ? `${prefixo}.${chave}` : chave
    if (typeof conteudo === 'object' && conteudo !== null) return chaves(conteudo, caminho)
    assert.equal(typeof conteudo, 'string', `${caminho} precisa ser texto`)
    assert.ok(conteudo.trim(), `${caminho} está vazio`)
    return caminho
  }).sort()
}

const chavesPortugues = chaves(portugues)
assert.deepEqual(chaves(ingles), chavesPortugues, 'Os idiomas precisam ter exatamente as mesmas chaves')

for (const [arquivo, idioma, textos] of [['index.html', 'pt-BR', portugues], ['en/index.html', 'en', ingles]]) {
  const html = readFileSync(new URL(`../out/${arquivo}`, import.meta.url), 'utf8')
  assert.ok(html.includes(`lang="${idioma}"`), `${arquivo}: idioma incorreto no HTML`)
  assert.ok(html.includes(textos.metadata.titulo), `${arquivo}: título incorreto`)
  assert.ok(html.includes(textos.apresentacao.titulo), `${arquivo}: apresentação não traduzida`)
  assert.ok(html.includes(textos.contato.formulario.necessidade), `${arquivo}: formulário não traduzido`)
  for (const destino of ['inicio', 'servicos', 'cases', 'fale-conosco']) {
    assert.ok(html.includes(`id="${destino}"`), `${arquivo}: destino ${destino} ausente`)
  }
}

console.log(`OK: ${chavesPortugues.length} textos por idioma; HTML, metadados e âncoras de / e /en/ verificados.`)
