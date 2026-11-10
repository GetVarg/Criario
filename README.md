# Criário — site institucional

Site em Next.js, React e TypeScript, com exportação estática para a hospedagem existente. Home e Cases usam a mesma estrutura, os mesmos componentes de contato e os mesmos dicionários de português e inglês.

## Executar e validar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para conferir a versão de produção:

```bash
npm run build
node scripts/verificar-idiomas.mjs
node scripts/verificar-contato.mjs
npm run lint
npm start
```

O build inclui TypeScript e gera `out/`. A verificação de idiomas confere paridade dos JSONs, as quatro rotas exportadas, metadados, títulos, imagens e destinos. A verificação de contato simula respostas; não envia e-mails.

## Rotas e composição

| Página | Português | Inglês | Componente |
| --- | --- | --- | --- |
| Home | `/` | `/en/` | `funcionalidades/pagina-inicial/PaginaInicial.tsx` |
| Cases de sucesso | `/cases/` | `/en/cases/` | `funcionalidades/cases/PaginaCases.tsx` |

Os arquivos `page.tsx` apenas escolhem o idioma e os metadados. Os layouts de `app/(portugues)/` e `app/en/` definem o atributo `lang`. `trailingSlash: true` gera um `index.html` por rota, sem exigir reescritas na hospedagem.

```text
EstruturaSite (idioma, textos, pagina)
├── ProvedorDeContato — uma instância por página
├── CabecalhoSite → MenuPrincipal
├── main
│   ├── Conteúdo próprio da página
│   │   ├── Home: apresentação + serviços + cards em destaque
│   │   └── Cases: hero BitDogLab + introdução + cards horizontais
│   └── EncerramentoSite
│       ├── SecaoDepoimentos
│       ├── CarrosselLogotiposParceiros
│       ├── Manifesto
│       └── SecaoFaleConosco → CartaoDeContato → FormularioDeContato
└── RodapeSite
```

`EstruturaSite` centraliza tokens visuais, cabeçalho, rodapé e provedor de contato. `EncerramentoSite` reúne os blocos finais presentes nas duas páginas. As páginas apenas compõem esses elementos; não copiam sua marcação nem importam o CSS da Home para funcionar.

## Onde editar e como reaproveitar

| Necessidade | Fonte única |
| --- | --- |
| Textos, títulos, acessibilidade e SEO | `locales/pt-BR.json` e `locales/en.json` |
| Ordem e imagens dos cases | `dados/cases.ts` |
| Aparência e hover de qualquer card | `funcionalidades/cases/CartaoResumoDeCase.module.css` |
| Hero, introdução e espaçamento da página de Cases | `funcionalidades/cases/PaginaCases.module.css` |
| Destinos e rotas por idioma | `dados/navegacao.ts` |
| Depoimentos e fotos | `dados/depoimentos.ts` e `funcionalidades/depoimentos/` |
| Clientes e logotipos | `dados/clientes.ts` e `CarrosselLogotiposParceiros` |
| Manifesto | `componentes/EncerramentoSite.module.css` |
| Layout da seção fixa de contato | `funcionalidades/contato/SecaoFaleConosco.module.css` |
| Formulário e diálogo | `funcionalidades/contato/` |

Manter nomes descritivos em português, componentes funcionais e CSS Modules próximos de seus componentes. Dados guardam IDs, ordem e caminhos; JSONs guardam texto. Não usar coordenadas absolutas do exportador de design como estrutura da página. Preferir grid, proporções, espaçamento fluido e modificadores pequenos. Não criar outro componente quando apenas conteúdo ou orientação diferir.

Para uma nova página, criar seu componente em `funcionalidades/`, envolvê-lo com `EstruturaSite`, reutilizar `EncerramentoSite` quando aplicável e adicionar arquivos de rota finos. Registrar o destino em `dados/navegacao.ts` e o conteúdo nos dois idiomas. Mudanças comuns devem ser feitas no componente compartilhado.

## Página de Cases

A composição segue o print e o CSS de referência de 1920 px: hero com proporção 1920/980, introdução em duas colunas e quatro cases na ordem Onboard, New Era, Lumi e Pitec. Cada linha usa uma coluna de texto e duas de imagem, com proporção fotográfica 1280/823 e separadores entre linhas. Abaixo de 768 px, foto e texto se empilham. As alturas podem crescer para acomodar traduções e telas menores.

`CartaoResumoDeCase` atende às duas páginas:

- `formato="resumo"` (padrão): card da Home, título com nome do cliente e imagem existente.
- `formato="horizontal"`: título editorial em `h2`, descrição ampliada, texto à esquerda e foto à direita. Recebe `titulo` opcional; identidade, categoria, hover e acessibilidade permanecem compartilhados.

`casesEmDestaque` mantém os três cards da Home. `casesDaPagina` define os quatro cases da nova página. A identidade comum fica em `cases.itens`; os títulos e resumos próprios da listagem ficam em `paginaCases.itens`. Para adicionar um case, cadastrar o ID, sua imagem e os textos nos dois JSONs, sem duplicar JSX.

As cinco imagens novas estão em `public/images/cases/`, em WebP: hero com 1920 px de largura e fotos com 1600 px. As fotos foram extraídas da área direita dos anexos (x=1040, 2560×1646); as colunas com texto dos anexos não integram os arquivos finais. O conteúdo textual é HTML editável. As imagens anteriores da Home permanecem em uso. O hero tem prioridade de carregamento; os cases usam carregamento tardio, dimensões declaradas e texto alternativo.

O modificador `cascata` de `SecaoDepoimentos` reproduz a posição final da foto de Igor na coluna central da referência desktop. A Home conserva seu alinhamento anterior. Depoimentos, animações, fotos e traduções continuam compartilhados.

O círculo `+` é decorativo, como nos cards existentes: ainda não foram fornecidos conteúdo e rotas individuais dos projetos. Não representa um botão funcional. O destino de Hub de conteúdo também permanece pendente; não há link fictício. DM Sans é servida localmente em `public/fonts/`, com sua licença SIL OFL (fonte: Google Fonts). Reang Lanira ainda não está incluída; os títulos que a exigiriam conservam o fallback existente.

## Navegação e idiomas

A faixa abaixo dos serviços divide a largura entre "saiba mais", que abre a página de Cases no idioma atual, e "fale conosco", que abre o contato. Os links individuais das etapas foram substituídos por essa faixa. O botão "veja todos os cases" ocupa a coluna central abaixo dos cards no desktop e a largura disponível no celular.

`destinoDeNavegacao` é usado por menu e rodapé. Na Home, Cases abre a nova página. Em Cases, Home e Serviços voltam à Home no idioma atual, Cases aponta para a própria seção e Fale conosco abre o diálogo compartilhado. A marca também retorna à Home. `caminhoDaPagina` mantém a página ao trocar o idioma: `/cases/` ↔ `/en/cases/`.

Todos os textos ficam nos JSONs com chaves semânticas iguais e não vazias. `locales/index.ts` seleciona e tipa os dicionários no build e gera metadados com alternativas de idioma por página. Não há biblioteca de tradução nem requisições adicionais para buscar textos. Para um novo idioma, adicionar dicionário, registro, layout, rotas e alternativas de SEO.

O menu usa quatro faixas com `transform`, 560 ms por faixa e intervalo de 90 ms. Após `animationend` da última faixa, os itens aparecem com 110 ms entre entradas. A navegação aguarda a saída e a liberação da rolagem. Links conservam destinos reais e permitem abrir em outra aba com modificadores. O diálogo mantém o foco; Esc fecha, o cancelamento devolve o foco ao acionador e a navegação interna direciona-o à seção.

## Animações e responsividade

- Cards da Home: hover e foco ampliam a foto em 6%, mantendo o recorte, e escurecem o texto. Um círculo verde translúcido acompanha o mouse sem bloquear interação. O círculo não aparece em telas de toque; movimento reduzido desativa o zoom e o círculo. Os cards horizontais conservam a foto estática. O estilo vive no módulo do card.
- Serviços: quatro colunas no desktop, duas no tablet, uma no celular. `IntersectionObserver` revela cada item uma vez, sem listener de scroll ou animação JavaScript por frame.
- Depoimentos: um observador revela as fotos quando seu ponto médio entra na viewport. Uma camada branca desliza por 1100 ms; o observador é removido ao concluir. Sem JavaScript, as imagens continuam visíveis.
- `prefers-reduced-motion` remove deslocamentos e transições. Menu e formulário mantêm navegação por teclado. Layouts usam a largura real disponível, inclusive quando o DevTools ocupa parte da janela.

Ao alterar elementos compartilhados, conferir Home e Cases, nos dois idiomas, em desktop, tablet e celular. Verificar menu, Esc, foco, troca de idioma, retorno à Home/Serviços, abertura do contato e ausência de rolagem horizontal.

## Contato

A seção fixa tem título sobre fundo branco. O card compartilhado com o modal usa degradê do canto inferior esquerdo `#02331E` ao superior direito `#41A87D`, e o botão de envio fica centralizado. "Como nos conheceu?" é um seletor nativo com seis opções traduzidas, incluídas no campo `origem` da mensagem.

`dados/contato.ts` concentra destinatário, endpoints e timeout de 20 segundos. `FormularioDeContato` valida campos e controla envio, sucesso e erro. `enviarMensagem.ts` realiza o POST. `CartaoDeContato` fornece o card verde, com X opcional; `ProvedorDeContato` fornece o diálogo único. Novos acionadores dentro da estrutura devem usar `LinkDeContato`.

O diálogo fecha por X, Esc ou fundo e restaura o foco. Fechar preserva os campos e não interrompe um envio; o card fixo possui estado independente. Sucesso só aparece após resposta HTTP válida com `success: true` ou `"true"`. Falha, timeout e erro de rede preservam os campos e oferecem alternativa por e-mail; não há reenvio automático. Validação nativa e bloqueio de envio duplicado permanecem ativos. O honeypot opcional foi removido para evitar rejeição por preenchimento automático de um campo invisível. Sem JavaScript, o formulário usa POST tradicional e os links apontam à seção fixa.

`validarContato.ts` confere obrigatoriedade, limites, caracteres de controle, formato de e-mail/telefone e opções de origem. Erros focam o campo correspondente. Texto livre preserva acentos, apóstrofos e quebras de linha; não se tenta identificar SQL/HTML por uma lista de palavras proibidas. Essas verificações no navegador são contornáveis. O site não executa SQL, shell ou HTML a partir desses campos, mas a validação no servidor, escape no e-mail e proteção contra abuso dependem do FormSubmit e não foram auditados. Se for necessário controlar essas garantias, será preciso um backend com validação, escape contextual e limitação de requisições.

O envio usa FormSubmit AJAX, destinado a **pedronicolaulacerda@gmail.com**, sem senha de Gmail, SMTP ou backend próprio. Destinatário e endpoint são públicos. Para ativar:

1. Publicar em HTTP(S) e enviar pelo formulário no domínio.
2. Confirmar o e-mail de ativação do FormSubmit, inclusive verificando spam.
3. Enviar novamente e confirmar a entrega na caixa de entrada.

A aceitação pelo serviço não comprova entrega. A ativação e a entrega dependem do titular do e-mail. Alterar o destinatário exige nova ativação e build. Após a ativação, o identificador fornecido pelo serviço pode substituir o endereço público nos endpoints. Referência: https://formsubmit.co/documentation.

## Publicação na GoDaddy

**Hospedagem estática/cPanel:** executar `npm run build` e enviar o conteúdo de `out/` para `public_html`. Preservar os diretórios `cases/`, `en/` e `en/cases/`, além de `_next/` e imagens.

**Hospedagem Node.js/importador Airo:** enviar ZIP de código-fonte com `package.json` na raiz, junto de lockfile, configurações, `app/`, `componentes/`, `funcionalidades/`, `dados/`, `locales/`, `public/` e `scripts/`. Excluir pasta envolvente, `node_modules/`, `.next/`, `out/`, backups, ZIPs, `.env` e credenciais. Instalação: `npm ci --include=dev`; build: `npm run build`; inicialização: `npm start`. Usar Node.js 20.9 ou superior.

`scripts/iniciar-servidor.mjs` serve apenas `out/`, em `0.0.0.0`, respeita `PORT` (3000 por padrão) e falha se o build estiver ausente ou a porta for inválida/ocupada. `serve` é dependência de produção. Não usar `next start` com exportação estática. Gerar arquivos ou ZIP não publica o site: conferir logs, as quatro rotas, imagens e contato na prévia antes de conectar o domínio.
