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


for (const [arquivo, idioma, textos, raiz] of [
  ['cases/index.html', 'pt-BR', portugues, '/'],
  ['en/cases/index.html', 'en', ingles, '/en/'],
]) {
  const html = readFileSync(new URL('../out/' + arquivo, import.meta.url), 'utf8')
  assert.ok(html.includes('lang="' + idioma + '"'), arquivo + ': idioma incorreto')
  assert.ok(html.includes(textos.paginaCases.metadata.titulo), arquivo + ': metadados incorretos')
  assert.ok(html.includes(textos.paginaCases.titulo), arquivo + ': título não traduzido')
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, arquivo + ': deve ter um único h1')
  assert.equal((html.match(/<article /g) || []).length, 7, arquivo + ': quatro cases e três depoimentos')
  for (const item of Object.values(textos.paginaCases.itens)) assert.ok(html.includes(item.titulo), arquivo + ': case ausente')
  for (const href of [raiz + '#inicio', raiz + '#servicos', '#cases', '#fale-conosco']) {
    assert.ok(html.includes('href="' + href + '"'), arquivo + ': destino incorreto ' + href)
  }
  assert.ok(html.includes('href="/cases/"'), arquivo + ': alternativa PT ausente')
  assert.ok(html.includes('href="/en/cases/"'), arquivo + ': alternativa EN ausente')
  assert.ok(html.includes(textos.contato.formulario.necessidade), arquivo + ': contato ausente')
  for (const [, src] of html.matchAll(/<img[^>]+src="([^"?]+)"/g)) {
    assert.ok(readFileSync(new URL('../out' + src, import.meta.url)).length, arquivo + ': imagem ausente ' + src)
  }
}
console.log('OK: ' + chavesPortugues.length + ' textos por idioma; quatro rotas, metadados, conteúdo, imagens e destinos verificados.')
