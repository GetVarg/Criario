(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/componentes/LogotipoCriario.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogotipoCriario",
    ()=>LogotipoCriario
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LogotipoCriario({ texto, invertido = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `logotipo-criario${invertido ? ' logotipo-criario--invertido' : ''}`,
        children: texto
    }, void 0, false, {
        fileName: "[project]/componentes/LogotipoCriario.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = LogotipoCriario;
var _c;
__turbopack_context__.k.register(_c, "LogotipoCriario");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/componentes/FaleConosco.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "faleConosco": "FaleConosco-module__ZByEpq__faleConosco",
});
}),
"[project]/dados/contato.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Configuração pública: não colocar senhas SMTP ou chaves privadas neste arquivo.
__turbopack_context__.s([
    "emailDeContato",
    ()=>emailDeContato,
    "endpointDeContato",
    ()=>endpointDeContato,
    "formularioDeContato",
    ()=>formularioDeContato,
    "tempoLimiteDeEnvio",
    ()=>tempoLimiteDeEnvio
]);
const emailDeContato = 'pedronicolaulacerda@gmail.com';
const endpointDeContato = `https://formsubmit.co/ajax/${emailDeContato}`;
const formularioDeContato = `https://formsubmit.co/${emailDeContato}`;
const tempoLimiteDeEnvio = 20_000;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/funcionalidades/contato/enviarMensagem.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Confirma aceitação pelo serviço, não a entrega final na caixa de entrada. */ __turbopack_context__.s([
    "enviarMensagem",
    ()=>enviarMensagem
]);
async function enviarMensagem(dados, endpoint, signal) {
    const resposta = await fetch(endpoint, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        },
        body: dados,
        signal,
        credentials: 'omit'
    });
    if (!resposta.ok) throw new Error('Falha HTTP no envio');
    const resultado = await resposta.json();
    if (!resultado || typeof resultado !== 'object' || !('success' in resultado) || resultado.success !== true && resultado.success !== 'true') {
        throw new Error('Envio não confirmado pelo serviço');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/funcionalidades/contato/Contato.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "alternativa": "Contato-module__MkxF-q__alternativa",
  "aparecer": "Contato-module__MkxF-q__aparecer",
  "armadilha": "Contato-module__MkxF-q__armadilha",
  "campos": "Contato-module__MkxF-q__campos",
  "cartao": "Contato-module__MkxF-q__cartao",
  "enviar": "Contato-module__MkxF-q__enviar",
  "erro": "Contato-module__MkxF-q__erro",
  "fechar": "Contato-module__MkxF-q__fechar",
  "formulario": "Contato-module__MkxF-q__formulario",
  "modal": "Contato-module__MkxF-q__modal",
  "necessidade": "Contato-module__MkxF-q__necessidade",
  "sucesso": "Contato-module__MkxF-q__sucesso",
});
}),
"[project]/funcionalidades/contato/FormularioDeContato.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormularioDeContato",
    ()=>FormularioDeContato
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$contato$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dados/contato.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$enviarMensagem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/enviarMensagem.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/Contato.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function FormularioDeContato({ textos }) {
    _s();
    const [estado, setEstado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ocioso');
    const [erro, setErro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const requisicao = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sucesso = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const idErro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const enviando = estado === 'enviando';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormularioDeContato.useEffect": ()=>({
                "FormularioDeContato.useEffect": ()=>{
                    requisicao.current?.abort();
                }
            })["FormularioDeContato.useEffect"]
    }["FormularioDeContato.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormularioDeContato.useEffect": ()=>{
            const elemento = sucesso.current;
            if (estado !== 'enviado' || !elemento) return;
            const modal = elemento.closest('dialog');
            if (modal ? modal.open : !document.querySelector('dialog[open]')) elemento.focus({
                preventScroll: true
            });
        }
    }["FormularioDeContato.useEffect"], [
        estado
    ]);
    async function lidarComEnvio(evento) {
        evento.preventDefault();
        if (requisicao.current) return;
        const formulario = evento.currentTarget;
        if (!formulario.reportValidity()) return;
        const dados = new FormData(formulario);
        for (const [chave, valor] of dados.entries()){
            if (typeof valor === 'string') dados.set(chave, valor.trim());
        }
        if (!dados.get('name') || !dados.get('email') || !dados.get('message') || dados.get('_honey')) {
            setErro(textos.invalido);
            setEstado('erro');
            return;
        }
        // Envia somente origem e caminho, sem parâmetros de URL potencialmente sensíveis.
        dados.set('_url', window.location.origin + window.location.pathname);
        dados.set('idioma', document.documentElement.lang);
        const controlador = new AbortController();
        requisicao.current = controlador;
        setEstado('enviando');
        setErro('');
        const limite = window.setTimeout(()=>controlador.abort(), __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$contato$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tempoLimiteDeEnvio"]);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$enviarMensagem$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enviarMensagem"])(dados, __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$contato$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endpointDeContato"], controlador.signal);
            formulario.reset();
            setEstado('enviado');
        } catch  {
            // Preserva os campos para uma nova tentativa; não apresenta resposta externa como HTML.
            setErro(controlador.signal.aborted ? textos.tempoEsgotado : textos.erro);
            setEstado('erro');
        } finally{
            window.clearTimeout(limite);
            requisicao.current = null;
        }
    }
    if (estado === 'enviado') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sucesso,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sucesso,
        role: "status",
        tabIndex: -1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m5 12 4 4L19 6"
                }, void 0, false, {
                    fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                    lineNumber: 65,
                    columnNumber: 101
                }, this)
            }, void 0, false, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: textos.sucesso
            }, void 0, false, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].enviar,
                type: "button",
                onClick: ()=>setEstado('ocioso'),
                children: textos.novaMensagem
            }, void 0, false, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formulario,
        action: __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$contato$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formularioDeContato"],
        method: "POST",
        onSubmit: lidarComEnvio,
        "aria-busy": enviando,
        "aria-describedby": erro ? idErro : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "_subject",
                value: textos.assunto
            }, void 0, false, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "_template",
                value: "table"
            }, void 0, false, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].armadilha,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "_honey",
                    type: "text",
                    tabIndex: -1,
                    autoComplete: "off"
                }, void 0, false, {
                    fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                    lineNumber: 75,
                    columnNumber: 60
                }, this)
            }, void 0, false, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].campos,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.nome,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                name: "name",
                                autoComplete: "name",
                                maxLength: 120,
                                disabled: enviando
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 77,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.empresa,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "empresa",
                                autoComplete: "organization",
                                maxLength: 160,
                                disabled: enviando
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 78,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.email,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                type: "email",
                                name: "email",
                                autoComplete: "email",
                                maxLength: 254,
                                disabled: enviando
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 79,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.telefone,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                name: "telefone",
                                autoComplete: "tel",
                                maxLength: 40,
                                disabled: enviando
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 80,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.cargo,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "cargo",
                                autoComplete: "organization-title",
                                maxLength: 120,
                                disabled: enviando
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 81,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.origem,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "origem",
                                maxLength: 200,
                                disabled: enviando
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 82,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].necessidade,
                children: [
                    textos.necessidade,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        required: true,
                        name: "message",
                        rows: 3,
                        maxLength: 5000,
                        disabled: enviando
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            erro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: idErro,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].erro,
                role: "alert",
                children: [
                    erro,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].alternativa,
                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$contato$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emailDeContato"]}`,
                        children: textos.alternativa
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 87,
                        columnNumber: 75
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 87,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].enviar,
                type: "submit",
                disabled: enviando,
                children: [
                    enviando ? textos.enviando : textos.enviar,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 88,
                        columnNumber: 120
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(FormularioDeContato, "D3aniMGOpGQ5PdRXSZrraKii2Mg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = FormularioDeContato;
var _c;
__turbopack_context__.k.register(_c, "FormularioDeContato");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/funcionalidades/contato/CartaoDeContato.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartaoDeContato",
    ()=>CartaoDeContato
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$FormularioDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/FormularioDeContato.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/Contato.module.css [app-client] (css module)");
;
;
;
function CartaoDeContato({ textos, aoFechar }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cartao,
        children: [
            aoFechar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fechar,
                type: "button",
                onClick: aoFechar,
                "aria-label": textos.fechar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/funcionalidades/contato/CartaoDeContato.tsx",
                    lineNumber: 11,
                    columnNumber: 114
                }, this)
            }, void 0, false, {
                fileName: "[project]/funcionalidades/contato/CartaoDeContato.tsx",
                lineNumber: 11,
                columnNumber: 20
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$FormularioDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormularioDeContato"], {
                textos: textos.formulario
            }, void 0, false, {
                fileName: "[project]/funcionalidades/contato/CartaoDeContato.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/funcionalidades/contato/CartaoDeContato.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = CartaoDeContato;
var _c;
__turbopack_context__.k.register(_c, "CartaoDeContato");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/funcionalidades/contato/ProvedorDeContato.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProvedorDeContato",
    ()=>ProvedorDeContato,
    "useContato",
    ()=>useContato
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$CartaoDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/CartaoDeContato.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/Contato.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const ContextoDeContato = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useContato = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContextoDeContato);
};
_s(useContato, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function ProvedorDeContato({ textos, children }) {
    _s1();
    const [aberto, setAberto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [montado, setMontado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dialogo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const acionador = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const abrirContato = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProvedorDeContato.useCallback[abrirContato]": (origem)=>{
            acionador.current = origem ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
            setMontado(true);
            setAberto(true);
        }
    }["ProvedorDeContato.useCallback[abrirContato]"], []);
    const contexto = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProvedorDeContato.useMemo[contexto]": ()=>({
                abrirContato
            })
    }["ProvedorDeContato.useMemo[contexto]"], [
        abrirContato
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProvedorDeContato.useEffect": ()=>{
            const elemento = dialogo.current;
            if (!aberto || !elemento) return;
            const raiz = document.documentElement;
            const overflowAnterior = raiz.style.overflow;
            const gutterAnterior = raiz.style.scrollbarGutter;
            raiz.style.scrollbarGutter = 'stable';
            raiz.style.overflow = 'hidden';
            elemento.showModal();
            elemento.focus({
                preventScroll: true
            });
            return ({
                "ProvedorDeContato.useEffect": ()=>{
                    elemento.close();
                    raiz.style.overflow = overflowAnterior;
                    raiz.style.scrollbarGutter = gutterAnterior;
                    if (acionador.current?.isConnected) acionador.current.focus({
                        preventScroll: true
                    });
                }
            })["ProvedorDeContato.useEffect"];
        }
    }["ProvedorDeContato.useEffect"], [
        aberto
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContextoDeContato.Provider, {
        value: contexto,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
                ref: dialogo,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$Contato$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                "aria-label": textos.titulo,
                tabIndex: -1,
                onCancel: (evento)=>{
                    evento.preventDefault();
                    setAberto(false);
                },
                onClose: ()=>setAberto(false),
                onClick: (evento)=>{
                    if (evento.target === evento.currentTarget) setAberto(false);
                },
                onKeyDown: (evento)=>{
                    if (evento.key !== 'Tab') return;
                    const controles = evento.currentTarget.querySelectorAll('button:not(:disabled), input:not(:disabled):not([type="hidden"]):not([tabindex="-1"]), textarea:not(:disabled), a[href]');
                    const primeiro = controles[0];
                    const ultimo = controles[controles.length - 1];
                    if (!primeiro || !ultimo) return;
                    if (evento.shiftKey && (document.activeElement === primeiro || document.activeElement === evento.currentTarget)) {
                        evento.preventDefault();
                        ultimo.focus();
                    } else if (!evento.shiftKey && document.activeElement === ultimo) {
                        evento.preventDefault();
                        primeiro.focus();
                    }
                },
                children: montado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$CartaoDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartaoDeContato"], {
                    textos: textos,
                    aoFechar: ()=>setAberto(false)
                }, void 0, false, {
                    fileName: "[project]/funcionalidades/contato/ProvedorDeContato.tsx",
                    lineNumber: 66,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/funcionalidades/contato/ProvedorDeContato.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/funcionalidades/contato/ProvedorDeContato.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s1(ProvedorDeContato, "1+ksxRfB7ssevPY/zT8LMRY4mBg=");
_c = ProvedorDeContato;
var _c;
__turbopack_context__.k.register(_c, "ProvedorDeContato");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/funcionalidades/contato/LinkDeContato.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkDeContato",
    ()=>LinkDeContato
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$ProvedorDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/ProvedorDeContato.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function LinkDeContato({ children, onClick, ...props }) {
    _s();
    const contato = (0, __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$ProvedorDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContato"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        ...props,
        href: "#fale-conosco",
        "aria-haspopup": contato ? 'dialog' : undefined,
        onClick: (evento)=>{
            onClick?.(evento);
            if (!contato || evento.defaultPrevented || evento.button !== 0 || evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return;
            evento.preventDefault();
            contato.abrirContato(evento.currentTarget);
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/funcionalidades/contato/LinkDeContato.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(LinkDeContato, "dsb88Gj4rkGAzlbuihLmp1fNHFQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$ProvedorDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContato"]
    ];
});
_c = LinkDeContato;
var _c;
__turbopack_context__.k.register(_c, "LinkDeContato");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/componentes/FaleConosco.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaleConosco",
    ()=>FaleConosco
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$FaleConosco$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/componentes/FaleConosco.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$LinkDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/LinkDeContato.tsx [app-client] (ecmascript)");
;
;
;
function FaleConosco({ texto }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$LinkDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkDeContato"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$FaleConosco$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faleConosco,
        children: [
            texto,
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/componentes/FaleConosco.tsx",
                lineNumber: 7,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/componentes/FaleConosco.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = FaleConosco;
var _c;
__turbopack_context__.k.register(_c, "FaleConosco");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dados/navegacao.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "itensDeNavegacao",
    ()=>itensDeNavegacao
]);
const itensDeNavegacao = [
    {
        numero: '01',
        id: 'inicio',
        destino: 'inicio'
    },
    {
        numero: '02',
        id: 'servicos',
        destino: 'servicos'
    },
    {
        numero: '03',
        id: 'cases',
        destino: 'cases'
    },
    {
        numero: '04',
        id: 'contato',
        destino: 'fale-conosco'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/funcionalidades/navegacao/MenuPrincipal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "assinatura": "MenuPrincipal-module__X0-RuG__assinatura",
  "conteudo": "MenuPrincipal-module__X0-RuG__conteudo",
  "descer": "MenuPrincipal-module__X0-RuG__descer",
  "faixa": "MenuPrincipal-module__X0-RuG__faixa",
  "faixas": "MenuPrincipal-module__X0-RuG__faixas",
  "fechar": "MenuPrincipal-module__X0-RuG__fechar",
  "iconeFechar": "MenuPrincipal-module__X0-RuG__iconeFechar",
  "idiomas": "MenuPrincipal-module__X0-RuG__idiomas",
  "item": "MenuPrincipal-module__X0-RuG__item",
  "link": "MenuPrincipal-module__X0-RuG__link",
  "lista": "MenuPrincipal-module__X0-RuG__lista",
  "menu": "MenuPrincipal-module__X0-RuG__menu",
  "navegacao": "MenuPrincipal-module__X0-RuG__navegacao",
  "nitidez": "MenuPrincipal-module__X0-RuG__nitidez",
  "numero": "MenuPrincipal-module__X0-RuG__numero",
  "ocultar": "MenuPrincipal-module__X0-RuG__ocultar",
  "revelar": "MenuPrincipal-module__X0-RuG__revelar",
  "seta": "MenuPrincipal-module__X0-RuG__seta",
  "subir": "MenuPrincipal-module__X0-RuG__subir",
  "topo": "MenuPrincipal-module__X0-RuG__topo",
});
}),
"[project]/funcionalidades/navegacao/MenuPrincipal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuPrincipal",
    ()=>MenuPrincipal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$LogotipoCriario$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/LogotipoCriario.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dados/navegacao.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/funcionalidades/navegacao/MenuPrincipal.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$ProvedorDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/ProvedorDeContato.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function MenuPrincipal({ aoFechar, textos, idioma }) {
    _s();
    const abrirContato = (0, __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$ProvedorDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContato"])()?.abrirContato;
    const [fase, setFase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('abrindo');
    const dialogo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const botaoFechar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const destinoPendente = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuPrincipal.useEffect": ()=>{
            const elemento = dialogo.current;
            if (!elemento) return;
            const acionador = document.activeElement;
            const raiz = document.documentElement;
            const overflowAnterior = raiz.style.overflow;
            const gutterAnterior = raiz.style.scrollbarGutter;
            raiz.style.scrollbarGutter = 'stable';
            raiz.style.overflow = 'hidden';
            elemento.showModal();
            elemento.focus({
                preventScroll: true
            });
            return ({
                "MenuPrincipal.useEffect": ()=>{
                    elemento.close();
                    raiz.style.overflow = overflowAnterior;
                    raiz.style.scrollbarGutter = gutterAnterior;
                    // Navega somente depois de liberar a página e concluir a saída visual.
                    const destino = destinoPendente.current;
                    if (!destino) {
                        if (acionador instanceof HTMLElement && acionador.isConnected) acionador.focus({
                            preventScroll: true
                        });
                        return;
                    }
                    if (destino === 'fale-conosco' && abrirContato) {
                        abrirContato(acionador instanceof HTMLElement ? acionador : undefined);
                        return;
                    }
                    window.location.hash = destino;
                    const secao = document.getElementById(destino);
                    if (!secao) return;
                    const tabindexAnterior = secao.getAttribute('tabindex');
                    secao.setAttribute('tabindex', '-1');
                    secao.focus({
                        preventScroll: true
                    });
                    secao.addEventListener('blur', {
                        "MenuPrincipal.useEffect": ()=>{
                            if (tabindexAnterior === null) secao.removeAttribute('tabindex');
                            else secao.setAttribute('tabindex', tabindexAnterior);
                        }
                    }["MenuPrincipal.useEffect"], {
                        once: true
                    });
                }
            })["MenuPrincipal.useEffect"];
        }
    }["MenuPrincipal.useEffect"], [
        abrirContato
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MenuPrincipal.useEffect": ()=>{
            if (fase === 'aberto') botaoFechar.current?.focus({
                preventScroll: true
            });
        }
    }["MenuPrincipal.useEffect"], [
        fase
    ]);
    function fechar(destino) {
        if (fase === 'fechando') return;
        destinoPendente.current = destino ?? null;
        setFase('fechando');
    }
    function manterFoco(evento) {
        if (evento.key !== 'Tab') return;
        if (fase !== 'aberto') {
            evento.preventDefault();
            return;
        }
        const controles = evento.currentTarget.querySelectorAll('button, a[href]');
        const primeiro = controles[0];
        const ultimo = controles[controles.length - 1];
        if (!primeiro || !ultimo) return;
        if (evento.shiftKey && document.activeElement === primeiro) {
            evento.preventDefault();
            ultimo.focus();
        } else if (!evento.shiftKey && document.activeElement === ultimo) {
            evento.preventDefault();
            primeiro.focus();
        }
    }
    function concluirFaixas(evento) {
        if (evento.target !== evento.currentTarget) return;
        if (fase === 'abrindo') setFase('aberto');
        else if (fase === 'fechando') aoFechar();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: dialogo,
        id: "menu-principal",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
        "data-fase": fase,
        "aria-label": textos.menu.rotulo,
        tabIndex: -1,
        onKeyDown: manterFoco,
        onCancel: (evento)=>{
            evento.preventDefault();
            fechar();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faixas,
                "aria-hidden": "true",
                children: [
                    0,
                    1,
                    2,
                    3
                ].map((ordem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faixa,
                        style: {
                            '--ordem': ordem
                        },
                        onAnimationEnd: ordem === 3 ? concluirFaixas : undefined
                    }, ordem, false, {
                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].conteudo,
                inert: fase !== 'aberto',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$LogotipoCriario$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogotipoCriario"], {
                                texto: textos.marca,
                                invertido: true
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: botaoFechar,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fechar,
                                type: "button",
                                onClick: ()=>fechar(),
                                "aria-label": textos.menu.fecharRotulo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: textos.menu.fechar
                                    }, void 0, false, {
                                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconeFechar,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                        lineNumber: 120,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navegacao,
                        "aria-label": textos.menu.navegacaoRotulo,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lista,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$navegacao$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itensDeNavegacao"].map(({ numero, id, destino }, ordem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                                    style: {
                                        '--ordem': ordem
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                                        href: '#' + destino,
                                        "aria-haspopup": destino === 'fale-conosco' ? 'dialog' : undefined,
                                        onClick: (evento)=>{
                                            evento.preventDefault();
                                            fechar(destino);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].numero,
                                                "aria-hidden": "true",
                                                children: numero
                                            }, void 0, false, {
                                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: textos.navegacao[id]
                                            }, void 0, false, {
                                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].seta,
                                                "aria-hidden": "true",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                }, destino, false, {
                                    fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].assinatura,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: textos.menu.assinatura
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].idiomas,
                                "aria-label": textos.idiomas.rotulo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        hrefLang: "pt-BR",
                                        lang: "pt-BR",
                                        "aria-current": idioma === 'pt-BR' ? 'page' : undefined,
                                        children: textos.idiomas.portugues
                                    }, void 0, false, {
                                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/en/",
                                        hrefLang: "en",
                                        lang: "en",
                                        "aria-current": idioma === 'en' ? 'page' : undefined,
                                        children: textos.idiomas.ingles
                                    }, void 0, false, {
                                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(MenuPrincipal, "g7N8D9H5rZhXU+sXcWuYaLV06Xs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$ProvedorDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContato"]
    ];
});
_c = MenuPrincipal;
var _c;
__turbopack_context__.k.register(_c, "MenuPrincipal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/componentes/CabecalhoSite.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "botaoMenu": "CabecalhoSite-module__eq-GPG__botaoMenu",
  "cabecalho": "CabecalhoSite-module__eq-GPG__cabecalho",
  "faleConoscoContainer": "CabecalhoSite-module__eq-GPG__faleConoscoContainer",
  "iconeMenu": "CabecalhoSite-module__eq-GPG__iconeMenu",
  "logo": "CabecalhoSite-module__eq-GPG__logo",
});
}),
"[project]/componentes/CabecalhoSite.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CabecalhoSite",
    ()=>CabecalhoSite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$LogotipoCriario$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/LogotipoCriario.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$FaleConosco$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/FaleConosco.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/navegacao/MenuPrincipal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/componentes/CabecalhoSite.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CabecalhoSite({ textos, idioma }) {
    _s();
    const [menuAberto, setMenuAberto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cabecalho,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                href: "#inicio",
                "aria-label": textos.menu.inicioRotulo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$LogotipoCriario$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogotipoCriario"], {
                    texto: textos.marca,
                    invertido: true
                }, void 0, false, {
                    fileName: "[project]/componentes/CabecalhoSite.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/componentes/CabecalhoSite.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].faleConoscoContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$FaleConosco$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaleConosco"], {
                    texto: textos.comum.faleConosco
                }, void 0, false, {
                    fileName: "[project]/componentes/CabecalhoSite.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/componentes/CabecalhoSite.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].botaoMenu,
                type: "button",
                "aria-label": textos.menu.abrir,
                "aria-haspopup": "dialog",
                "aria-expanded": menuAberto,
                "aria-controls": "menu-principal",
                onClick: ()=>setMenuAberto(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].iconeMenu,
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/componentes/CabecalhoSite.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/componentes/CabecalhoSite.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/componentes/CabecalhoSite.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/componentes/CabecalhoSite.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: textos.menu.botao
                    }, void 0, false, {
                        fileName: "[project]/componentes/CabecalhoSite.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/componentes/CabecalhoSite.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            menuAberto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuPrincipal"], {
                textos: textos,
                idioma: idioma,
                aoFechar: ()=>setMenuAberto(false)
            }, void 0, false, {
                fileName: "[project]/componentes/CabecalhoSite.tsx",
                lineNumber: 42,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/componentes/CabecalhoSite.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(CabecalhoSite, "XXc0eruoseV0Q9Oo7kN/7PiQ9UE=");
_c = CabecalhoSite;
var _c;
__turbopack_context__.k.register(_c, "CabecalhoSite");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dados/servicos.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "etapasDeServico",
    ()=>etapasDeServico
]);
const etapasDeServico = [
    {
        id: 'visao',
        numero: '01',
        posicao: 'alto'
    },
    {
        id: 'experiencia',
        numero: '02',
        posicao: 'baixo'
    },
    {
        id: 'mercado',
        numero: '03',
        posicao: 'alto'
    },
    {
        id: 'crescimento',
        numero: '04',
        posicao: 'baixo'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/funcionalidades/servicos/SecaoServicos.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chamada": "SecaoServicos-module__zLwKGa__chamada",
  "conteudo": "SecaoServicos-module__zLwKGa__conteudo",
  "etapa": "SecaoServicos-module__zLwKGa__etapa",
  "etapaBaixa": "SecaoServicos-module__zLwKGa__etapaBaixa",
  "grade": "SecaoServicos-module__zLwKGa__grade",
  "introducao": "SecaoServicos-module__zLwKGa__introducao",
  "numero": "SecaoServicos-module__zLwKGa__numero",
  "processo": "SecaoServicos-module__zLwKGa__processo",
  "revelar": "SecaoServicos-module__zLwKGa__revelar",
  "secao": "SecaoServicos-module__zLwKGa__secao",
});
}),
"[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EtapaDoProcessoDeServico",
    ()=>EtapaDoProcessoDeServico
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/funcionalidades/servicos/SecaoServicos.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$LinkDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/LinkDeContato.tsx [app-client] (ecmascript)");
;
;
;
function EtapaDoProcessoDeServico({ numero, titulo, descricao, posicao, saibaMais }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etapa} ${posicao === 'baixo' ? __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].etapaBaixa : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].conteudo,
            "data-etapa": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].numero,
                    children: numero
                }, void 0, false, {
                    fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: titulo
                }, void 0, false, {
                    fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: descricao
                }, void 0, false, {
                    fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$LinkDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkDeContato"], {
                    children: [
                        saibaMais,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
                            lineNumber: 14,
                            columnNumber: 36
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = EtapaDoProcessoDeServico;
var _c;
__turbopack_context__.k.register(_c, "EtapaDoProcessoDeServico");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/funcionalidades/servicos/SecaoServicos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SecaoServicos",
    ()=>SecaoServicos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$servicos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dados/servicos.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$EtapaDoProcessoDeServico$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/funcionalidades/servicos/SecaoServicos.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$LinkDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/contato/LinkDeContato.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SecaoServicos({ textos, comum }) {
    _s();
    const grade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SecaoServicos.useEffect": ()=>{
            const elemento = grade.current;
            const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');
            if (!elemento || movimentoReduzido.matches || !('IntersectionObserver' in window)) return;
            const itens = Array.from(elemento.querySelectorAll('[data-etapa]'));
            const desktop = window.matchMedia('(min-width: 1000px)');
            const pendentes = new Set(itens);
            function revelar(item, atraso = 0) {
                item.style.setProperty('--atraso', `${atraso}ms`);
                item.dataset.revelacao = 'visivel';
                pendentes.delete(item);
            }
            const observador = new IntersectionObserver({
                "SecaoServicos.useEffect": (entradas)=>{
                    let ordem = 0;
                    for (const entrada of entradas){
                        if (!entrada.isIntersecting) continue;
                        if (entrada.target === elemento) {
                            itens.filter({
                                "SecaoServicos.useEffect": (item)=>pendentes.has(item)
                            }["SecaoServicos.useEffect"]).forEach({
                                "SecaoServicos.useEffect": (item, indice)=>revelar(item, indice * 360)
                            }["SecaoServicos.useEffect"]);
                        } else if (pendentes.has(entrada.target)) {
                            revelar(entrada.target, ordem++ * 180);
                        }
                        observador.unobserve(entrada.target);
                    }
                    if (pendentes.size === 0) observador.disconnect();
                }
            }["SecaoServicos.useEffect"], {
                threshold: 0,
                rootMargin: '0px 0px -10% 0px'
            });
            function observar() {
                observador.disconnect();
                if (desktop.matches && pendentes.size) observador.observe(elemento);
                else pendentes.forEach({
                    "SecaoServicos.useEffect.observar": (item)=>observador.observe(item)
                }["SecaoServicos.useEffect.observar"]);
            }
            // O HTML permanece legível sem JavaScript. Só ocultamos após preparar o observador.
            itens.forEach({
                "SecaoServicos.useEffect": (item)=>{
                    item.dataset.revelacao = 'pendente';
                }
            }["SecaoServicos.useEffect"]);
            observar();
            function mostrarTudo() {
                if (!movimentoReduzido.matches) return;
                observador.disconnect();
                itens.forEach({
                    "SecaoServicos.useEffect.mostrarTudo": (item)=>{
                        delete item.dataset.revelacao;
                    }
                }["SecaoServicos.useEffect.mostrarTudo"]);
                pendentes.clear();
            }
            // Um link alcançado pelo teclado nunca fica esperando a animação.
            function revelarFoco(evento) {
                const item = evento.target.closest('[data-etapa]');
                if (!item) return;
                revelar(item);
                delete item.dataset.revelacao;
                observador.unobserve(item);
                if (!pendentes.size) observador.disconnect();
            }
            desktop.addEventListener('change', observar);
            movimentoReduzido.addEventListener('change', mostrarTudo);
            elemento.addEventListener('focusin', revelarFoco);
            return ({
                "SecaoServicos.useEffect": ()=>{
                    observador.disconnect();
                    desktop.removeEventListener('change', observar);
                    movimentoReduzido.removeEventListener('change', mostrarTudo);
                    elemento.removeEventListener('focusin', revelarFoco);
                    itens.forEach({
                        "SecaoServicos.useEffect": (item)=>{
                            delete item.dataset.revelacao;
                        }
                    }["SecaoServicos.useEffect"]);
                }
            })["SecaoServicos.useEffect"];
        }
    }["SecaoServicos.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "servicos",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].secao,
        "aria-labelledby": "titulo-servicos",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].introducao,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "titulo-servicos",
                        children: textos.titulo
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: textos.descricao
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].processo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: grade,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grade,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$servicos$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["etapasDeServico"].map(({ id, ...etapa })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$EtapaDoProcessoDeServico$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EtapaDoProcessoDeServico"], {
                                ...etapa,
                                ...textos.itens[id],
                                saibaMais: comum.saibaMais
                            }, id, false, {
                                fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                                lineNumber: 89,
                                columnNumber: 54
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chamada,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$contato$2f$LinkDeContato$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkDeContato"], {
                            children: comum.faleConosco
                        }, void 0, false, {
                            fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(SecaoServicos, "pDddCzjgVz821abrhbt0lDfGCdk=");
_c = SecaoServicos;
var _c;
__turbopack_context__.k.register(_c, "SecaoServicos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/funcionalidades/depoimentos/Depoimentos.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "depoimento": "Depoimentos-module__lFh2iW__depoimento",
  "direita": "Depoimentos-module__lFh2iW__direita",
  "esquerda": "Depoimentos-module__lFh2iW__esquerda",
  "grade": "Depoimentos-module__lFh2iW__grade",
  "imagem": "Depoimentos-module__lFh2iW__imagem",
  "introducao": "Depoimentos-module__lFh2iW__introducao",
  "marco": "Depoimentos-module__lFh2iW__marco",
  "revelarFoto": "Depoimentos-module__lFh2iW__revelarFoto",
  "secao": "Depoimentos-module__lFh2iW__secao",
  "texto": "Depoimentos-module__lFh2iW__texto",
});
}),
"[project]/funcionalidades/depoimentos/RevelarFotosDeDepoimentos.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RevelarFotosDeDepoimentos",
    ()=>RevelarFotosDeDepoimentos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$depoimentos$2f$Depoimentos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/funcionalidades/depoimentos/Depoimentos.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function RevelarFotosDeDepoimentos({ children }) {
    _s();
    const grade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RevelarFotosDeDepoimentos.useEffect": ()=>{
            const elemento = grade.current;
            const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');
            if (!elemento || movimentoReduzido.matches || !('IntersectionObserver' in window)) return;
            const fotos = Array.from(elemento.querySelectorAll('[data-foto-depoimento]'));
            let restantes = fotos.length;
            const observador = new IntersectionObserver({
                "RevelarFotosDeDepoimentos.useEffect": (entradas)=>{
                    for (const entrada of entradas){
                        if (!entrada.isIntersecting) continue;
                        const foto = entrada.target.parentElement;
                        if (foto?.dataset.revelacao !== 'pendente') continue;
                        foto.dataset.revelacao = 'visivel';
                        observador.unobserve(entrada.target);
                        restantes--;
                    }
                    if (!restantes) observador.disconnect();
                }
            }["RevelarFotosDeDepoimentos.useEffect"]);
            for (const foto of fotos){
                const marco = foto.querySelector('[data-marco-revelacao]');
                if (!marco) {
                    restantes--;
                    continue;
                }
                // Se a página foi restaurada abaixo da foto, ela já deve estar revelada.
                if (marco.getBoundingClientRect().bottom <= 0) {
                    restantes--;
                    continue;
                }
                foto.dataset.revelacao = 'pendente';
                observador.observe(marco);
            }
            function mostrarTudo() {
                if (!movimentoReduzido.matches) return;
                observador.disconnect();
                fotos.forEach({
                    "RevelarFotosDeDepoimentos.useEffect.mostrarTudo": (foto)=>{
                        delete foto.dataset.revelacao;
                    }
                }["RevelarFotosDeDepoimentos.useEffect.mostrarTudo"]);
            }
            movimentoReduzido.addEventListener('change', mostrarTudo);
            return ({
                "RevelarFotosDeDepoimentos.useEffect": ()=>{
                    observador.disconnect();
                    movimentoReduzido.removeEventListener('change', mostrarTudo);
                    fotos.forEach({
                        "RevelarFotosDeDepoimentos.useEffect": (foto)=>{
                            delete foto.dataset.revelacao;
                        }
                    }["RevelarFotosDeDepoimentos.useEffect"]);
                }
            })["RevelarFotosDeDepoimentos.useEffect"];
        }
    }["RevelarFotosDeDepoimentos.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: grade,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$depoimentos$2f$Depoimentos$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grade,
        children: children
    }, void 0, false, {
        fileName: "[project]/funcionalidades/depoimentos/RevelarFotosDeDepoimentos.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_s(RevelarFotosDeDepoimentos, "pDddCzjgVz821abrhbt0lDfGCdk=");
_c = RevelarFotosDeDepoimentos;
var _c;
__turbopack_context__.k.register(_c, "RevelarFotosDeDepoimentos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_8a1fd0f2._.js.map