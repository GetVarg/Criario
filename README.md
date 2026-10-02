# Site do Rodrigo

Projeto inicial em Next.js para o site do Rodrigo.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Publicação na GoDaddy

### Hospedagem estática / cPanel

O projeto está configurado para exportação estática, compatível com hospedagem compartilhada.

```bash
npm run build
```

O comando cria a pasta `out`. Envie **o conteúdo** dessa pasta para o diretório público do domínio na GoDaddy (normalmente `public_html`).

### Hospedagem Node.js / importador ZIP do painel com Airo

Este fluxo recebe **código-fonte**, não o ZIP do conteúdo de `out/`. O erro pedindo `package.json` na raiz indica esse tipo de importação.

- O ZIP de código-fonte deve conter `package.json` diretamente na raiz, junto de `package-lock.json`, configurações, `app/`, `componentes/`, `funcionalidades/`, `dados/`, `locales/`, `public/` e `scripts/`.
- Não incluir pasta externa envolvendo o projeto, `node_modules/`, `.next/`, backups, `out/`, arquivos `.env`, outros ZIPs ou credenciais.
- Instalação: `npm ci --include=dev` (as dependências de desenvolvimento são necessárias para compilar TypeScript). Se o painel instalar automaticamente com `npm install`, manter essas dependências disponíveis na etapa de build.
- Build: `npm run build`. Inicialização: `npm start`. Usar Node.js 20.9 ou superior, preferencialmente a versão LTS disponível no painel.
- `scripts/iniciar-servidor.mjs` serve exclusivamente `out/` em `0.0.0.0`, usa a variável `PORT` fornecida pela hospedagem (3000 localmente) e falha claramente se o build estiver ausente ou a porta for inválida/ocupada.
- `serve` está em `dependencies`, pois é necessário em produção. Não usar `next start` com `output: 'export'`.
- Nomes dos pacotes: `criario-godaddy-nodejs-<data-hora>.zip` para código-fonte; o ZIP estático anterior é destinado ao cPanel. O upload e o deploy remoto precisam ser concluídos no painel; gerar o ZIP não publica o site.
- Após importar, conferir os logs de instalação/build/inicialização e testar `/`, `/en/`, imagens e contato na prévia antes de conectar o domínio. A ativação do FormSubmit continua necessária.

Requisitos oficiais: https://www.godaddy.com/en-ca/help/upload-my-ai-generated-app-to-godaddy-nodejs-hosting-42987

## Organização e padrões

- Código em TypeScript, componentes funcionais React e nomes descritivos em português.
- `app/(portugues)/`: página e layout de `/`, com `lang="pt-BR"`.
- `app/en/`: página e layout de `/en/`, com `lang="en"`.
- `app/globals.css`: estilos globais compartilhados pelas duas versões.
- `componentes/`: elementos compartilhados, como cabeçalho, logotipo e rodapé.
- `funcionalidades/<nome>/`: componentes e CSS Modules específicos de cada funcionalidade.
- `dados/`: IDs estáveis, ordem, caminhos das imagens, âncoras e configuração visual. Textos ficam nos JSONs de tradução.
- `locales/pt-BR.json` e `locales/en.json`: todos os textos editoriais e de interface, incluindo metadados, textos alternativos, acessibilidade e formulário.
- `public/images/`: imagens locais. Reutilizar os arquivos existentes sempre que possível.
- Estilos novos devem ficar no CSS Module da funcionalidade. Evitar seletores com nomes gerados pelo compilador, dependências para efeitos simples e arquivos temporários dentro do código-fonte.

## Menu principal animado

A navegação fica em `funcionalidades/navegacao/MenuPrincipal.tsx` e `MenuPrincipal.module.css`. Os quatro destinos numerados são definidos em `dados/navegacao.ts`, e seus nomes vêm de `navegacao` no JSON do idioma. Menu e rodapé compartilham os mesmos nomes. O `CabecalhoSite` apenas aciona a abertura.

### Sequência visual

1. Ao abrir, quatro faixas verticais cobrem a tela descendo da esquerda para a direita. Cada faixa leva 560 ms, com atraso de 90 ms entre elas.
2. O evento `animationend` da última faixa muda o estado de `abrindo` para `aberto`. Só então os itens aparecem, de cima para baixo, com 110 ms de intervalo.
3. Os links usam movimento e opacidade; apenas os quatro números pequenos recebem desfoque de 4 px até ficarem nítidos.
4. Ao fechar, as faixas sobem em sequência. A última faixa conclui o fechamento e o componente é desmontado. Os links navegam para sua seção após a saída; `Fale conosco` abre o diálogo de contato depois de liberar a rolagem e encerrar o menu.

### Desempenho e acessibilidade

- Animação nativa em CSS, sem biblioteca, canvas, vídeo, polling, timers de sincronização ou JavaScript executado a cada frame.
- As áreas grandes animam apenas `transform`. Não há blur de tela inteira, `backdrop-filter` ou `will-change` permanente.
- O menu só é montado quando necessário e é removido após fechar.
- `dialog.showModal()` coloca o menu na camada superior e mantém o foco dentro dele, deixando a página de fundo inerte.
- Esc e o botão de fechar encerram o menu; cancelar devolve o foco ao acionador. Navegar direciona o foco à seção de destino.
- A rolagem da página é bloqueada durante a abertura; os estilos anteriores são restaurados ao desmontar. O conteúdo do menu pode rolar em telas baixas.
- `prefers-reduced-motion: reduce` elimina deslocamentos perceptíveis e blur, mantendo os eventos de conclusão com duração mínima.
- Os links ficam inertes até as faixas cobrirem a página. Fontes e espaços são fluidos, com ajuste específico para celular.

### Verificação de alterações

Para uma validação enxuta, executar `npm run build` (inclui TypeScript), `node scripts/verificar-idiomas.mjs` e `node scripts/verificar-contato.mjs`. O último usa respostas simuladas e não envia e-mails. Usar `npm run lint` quando necessário. Conferir abertura e fechamento, Esc, Tab/Shift+Tab, navegação pelos destinos, troca de idioma e preferência de movimento reduzido. A exportação final continua sendo gerada em `out/` para a hospedagem existente.

## Idiomas e edição de conteúdo

- Português: `/` → `out/index.html`. Inglês: `/en/` → `out/en/index.html`.
- `trailingSlash: true` gera diretórios com `index.html`, compatíveis com hospedagem estática sem regras de reescrita.
- Os layouts são separados para gerar o atributo `lang` e os metadados corretos no HTML inicial. A troca de idioma no menu carrega a outra página inteira.
- Padrão de nomes: `locales/<codigo-BCP-47>.json`. `pt-BR` representa português brasileiro; `en` representa inglês sem uma região específica.
- Os JSONs têm a mesma estrutura: `marca`, `metadata`, `comum`, `navegacao`, `menu`, `idiomas`, `apresentacao`, `servicos`, `cases`, `depoimentos`, `clientes`, `manifesto`, `contato` e `rodape`.
- Usar chaves semânticas estáveis, como `cases.itens.pitec.resumo`. Nunca usar o texto traduzido como chave. Alterações de chave devem ser feitas nos dois idiomas.
- Para editar textos, alterar o JSON correspondente. Para incluir um item, cadastrar seu ID e configuração em `dados/` e seus textos nos dois JSONs. Não traduzir IDs, âncoras nem caminhos de imagens.
- `locales/index.ts` seleciona o dicionário e tipa ambos a partir de `pt-BR.json`. O script de verificação também confere chaves extras, ausentes e textos vazios.
- A seleção acontece no servidor durante a geração estática. Componentes interativos recebem apenas seus textos do idioma selecionado; não há biblioteca de tradução, detecção de idioma em tempo de execução ou requisição adicional para carregar JSON.
- Para outro idioma, criar o JSON, registrá-lo em `locales/index.ts`, adicionar página/layout, link de idioma e alternativa de SEO. Preservar a mesma estrutura de chaves.
- Os textos de contato, incluindo envio, sucesso, falhas, assunto do e-mail e acessibilidade, ficam em `contato` nos dois JSONs.

## Contato reutilizável e envio de e-mail

### Organização dos arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| `dados/contato.ts` | Destinatário, endpoints públicos e timeout de 20 segundos. |
| `funcionalidades/contato/CartaoDeContato.tsx` | Card verde reutilizável, com X opcional. |
| `funcionalidades/contato/FormularioDeContato.tsx` | Campos, validação e estados de envio, erro e sucesso. |
| `funcionalidades/contato/enviarMensagem.ts` | POST e validação da resposta do serviço. |
| `funcionalidades/contato/ProvedorDeContato.tsx` | Contexto, diálogo único, foco e bloqueio de rolagem. |
| `funcionalidades/contato/LinkDeContato.tsx` | Acionador reutilizável, com âncora como fallback. |
| `funcionalidades/contato/Contato.module.css` | Aparência compartilhada entre card fixo, modal e confirmação. |

`PaginaInicial` envolve o conteúdo com `ProvedorDeContato`. Para adicionar um novo acionador dentro dessa árvore, usar `<LinkDeContato>…</LinkDeContato>` e aplicar a classe visual desejada. Para inserir o formulário diretamente em outra seção, usar `<CartaoDeContato textos={textos.contato} />`; passar `aoFechar` quando precisar do X. Manter um provedor por página.

O diálogo abre sobre a página, fecha pelo X, Esc ou clique no fundo e devolve o foco ao acionador. O menu conclui sua saída antes de abrir o formulário. O card do modal é montado no primeiro uso e permanece montado enquanto a página estiver aberta: fechar preserva os campos e não interrompe um envio em andamento. Reabrir mostra o resultado disponível. O card fixo tem estado independente. Após sucesso, `enviar outra mensagem` reinicia o formulário.

### Serviço e ativação obrigatória

O envio usa [FormSubmit AJAX](https://formsubmit.co/documentation), compatível com a exportação estática da GoDaddy, destinado a **pedronicolaulacerda@gmail.com**. Não é necessário colocar uma senha de Gmail, chave SMTP ou backend Next.js no site. Os dados preenchidos são enviados ao FormSubmit, que encaminha o e-mail; o destinatário e o endpoint são configuração pública.

1. Publicar o conteúdo de `out/` na hospedagem e abrir o site por HTTP(S), nunca diretamente como `file://`.
2. Fazer um primeiro envio pelo formulário no domínio publicado.
3. Abrir a mensagem de ativação enviada pelo FormSubmit a `pedronicolaulacerda@gmail.com` e confirmar o formulário. Conferir também o spam.
4. Fazer outro envio e confirmar a chegada na caixa de entrada antes de disponibilizar o formulário aos visitantes.

A [ativação é exigida pelo serviço](https://formsubmit.co/). Enquanto o destinatário não confirmar, as mensagens podem ficar retidas pelo provedor. A implementação está conectada ao endpoint real, mas a ativação e a entrega na caixa de entrada só podem ser confirmadas pelo titular do e-mail; os testes automatizados locais não efetuam envios reais. Após a confirmação, o provedor também fornece um identificador que pode substituir o e-mail exposto nos endpoints. Alterar destinatário em `dados/contato.ts` exige nova ativação e novo build.

### Estados e comportamento

- Validação nativa de nome, e-mail e mensagem, remoção de espaços nas extremidades e limites de tamanho. Campo honeypot para reduzir spam; não foi desativada a proteção do provedor.
- Durante a requisição, campos e botão ficam desabilitados e uma referência bloqueia cliques duplicados. O serviço recebe `email` para permitir responder ao remetente, assunto localizado, idioma e URL sem query string.
- A confirmação com check e `mensagem enviada, em breve retornaremos.` aparece apenas após resposta HTTP bem-sucedida com `success: true` ou `success: "true"`. Isso confirma aceitação pelo provedor, não entrega na caixa de entrada.
- Erros de rede, respostas negativas e timeout não exibem sucesso. Os campos são preservados; o visitante pode tentar novamente ou abrir seu programa de e-mail pelo link alternativo. Um timeout pode ocorrer depois de o provedor aceitar a mensagem; não há reenvio automático.
- Sem JavaScript, os links continuam apontando para a seção fixa e o formulário usa POST tradicional ao FormSubmit, com a confirmação do próprio provedor.
- Animação curta com `opacity` e `transform`, sem blur ou dependências adicionais; movimento reduzido desativa a animação. O diálogo mantém o foco dentro dele e permite rolagem em telas pequenas. A barra visual é ocultada apenas no modal (`scrollbar-width` e `::-webkit-scrollbar`), preservando a rolagem por mouse, toque e teclado.

## Hover dos cases

`funcionalidades/cases/CartaoResumoDeCase.module.css` controla os três cards. Ao passar o mouse sobre imagem ou texto, apenas a área textual ganha fundo `#181818`, título branco, descrição cinza-clara e destaque verde-claro. A imagem permanece estática. O círculo com `+` acompanha a mudança de cor.

O fundo anima a opacidade de uma camada local por 280 ms. Não há JavaScript por frame, blur, biblioteca adicional nem `will-change` permanente. Tab/foco apresenta o mesmo estado; dispositivos sem hover mantêm a leitura normal. Movimento reduzido desativa as transições. O `+` é decorativo: ainda não existem páginas individuais de cases ou uma ação de expansão.

## Serviços: layout e entrada gradual

`funcionalidades/servicos/SecaoServicos.module.css` mantém quatro colunas no desktop, com os itens 02 e 04 rebaixados e divisórias contínuas. Tablet usa duas colunas; celular, uma.

Um `IntersectionObserver` revela os itens uma única vez. No desktop, são 1.000 ms por item, com 360 ms entre entradas; em telas menores, a revelação acontece quando cada item chega à área visível. Somente opacidade e deslocamento vertical são animados. O observador se desconecta ao concluir. Sem JavaScript, em impressão ou com movimento reduzido, o conteúdo continua legível. A fonte Reang Lanira ainda depende do fornecimento do arquivo; há fallback sem serifa.

## Responsividade e depoimentos

- Abrir o DevTools com F12 e acoplá-lo à lateral reduz a largura da viewport. O layout responde à largura disponível; não existe detecção ou bloqueio de F12.
- Cabeçalho: itens em fluxo com espaçamento nas telas pequenas; composição de marca/menu à esquerda e contato à direita a partir de 768 px. Não há sobreposição entre menu e contato.
- Apresentação: composição lateral preservada em tablets (768–999 px), com tipografia fluida. Abaixo de 768 px, texto e imagem ocupam blocos separados. Em desktops amplos, os tamanhos máximos anteriores são mantidos.
- `funcionalidades/depoimentos/Depoimentos.module.css` centraliza os estilos de depoimentos. As regras antigas duplicadas foram removidas da Home.
- A posição da foto vem exclusivamente de `alinhamento` em `dados/depoimentos.ts`: Paulo e Igor à direita, Luiz à esquerda. Desktop usa três colunas; tablet usa duas; celular apresenta foto antes do texto.
- A foto enviada de Igor está em `public/images/depoimento-igor-pinheiro.png`. O arquivo anterior foi preservado, mas não é mais usado pelo depoimento.
- `RevelarFotosDeDepoimentos.tsx` usa um único `IntersectionObserver` para as três fotos. A entrada do marcador localizado a 50% da altura dispara a revelação, inclusive em fotos maiores que a viewport.
- Uma camada branca desliza para baixo durante 1.100 ms, revelando a foto de cima para baixo sem deformá-la. Só `transform` é animado; não há blur, listener de scroll, loop por frame ou `will-change` permanente.
- Cada foto é revelada uma vez e deixa de ser observada. Sem JavaScript, com movimento reduzido ou em impressão, as fotos permanecem visíveis. As imagens reservam sua proporção antes do carregamento.

## Pendência da referência do menu

O segundo print recebido para o menu apresenta apenas um fundo escuro, inclusive no arquivo original. Não foi possível identificar os nomes completos nem o hover desejado. Foram padronizados `Home` e `Cases de sucesso` com a referência anterior, mantendo os quatro destinos existentes. O hover atual do menu (verde-claro e entrada da seta) foi preservado até receber uma referência legível ou descrição. `Hub de conteúdo` aparece no rodapé da referência inicial, mas não há página ou URL de destino fornecida; não foi criado um link sem destino.

## Última validação

- Build de produção e TypeScript concluídos com sucesso.
- 86 textos por idioma, com paridade exata das chaves e verificação do HTML exportado de `/` e `/en/`.
- Foto de Igor conferida por hash: o arquivo incorporado é idêntico ao anexo fornecido.
- A conferência visual da responsividade e da revelação de depoimentos ficou pendente: a ferramenta de navegador falhou ao inicializar nesta sessão. Build e TypeScript destas alterações passaram.
- Conferência visual do estado escuro do card Pitec, com os cards vizinhos no estado normal.
- Troca de português para inglês pelo menu verificada no navegador, incluindo `lang="en"` e restauração da rolagem.
