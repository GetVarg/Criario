module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/componentes/LogotipoCriario.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogotipoCriario",
    ()=>LogotipoCriario
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LogotipoCriario({ texto, invertido = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `logotipo-criario${invertido ? ' logotipo-criario--invertido' : ''}`,
        children: texto
    }, void 0, false, {
        fileName: "[project]/componentes/LogotipoCriario.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/componentes/FaleConosco.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "faleConosco": "FaleConosco-module__ZByEpq__faleConosco",
});
}),
"[project]/componentes/FaleConosco.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaleConosco",
    ()=>FaleConosco
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$FaleConosco$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/componentes/FaleConosco.module.css [app-ssr] (css module)");
;
;
function FaleConosco({ texto }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$FaleConosco$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faleConosco,
        href: "#fale-conosco",
        children: [
            texto,
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                children: "→"
            }, void 0, false, {
                fileName: "[project]/componentes/FaleConosco.tsx",
                lineNumber: 6,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/componentes/FaleConosco.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/dados/navegacao.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/funcionalidades/navegacao/MenuPrincipal.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/funcionalidades/navegacao/MenuPrincipal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MenuPrincipal",
    ()=>MenuPrincipal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$LogotipoCriario$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/LogotipoCriario.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$navegacao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dados/navegacao.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/funcionalidades/navegacao/MenuPrincipal.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
function MenuPrincipal({ aoFechar, textos, idioma }) {
    const [fase, setFase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('abrindo');
    const dialogo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const botaoFechar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const destinoPendente = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        return ()=>{
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
            window.location.hash = destino;
            const secao = document.getElementById(destino);
            if (!secao) return;
            const tabindexAnterior = secao.getAttribute('tabindex');
            secao.setAttribute('tabindex', '-1');
            secao.focus({
                preventScroll: true
            });
            secao.addEventListener('blur', ()=>{
                if (tabindexAnterior === null) secao.removeAttribute('tabindex');
                else secao.setAttribute('tabindex', tabindexAnterior);
            }, {
                once: true
            });
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (fase === 'aberto') botaoFechar.current?.focus({
            preventScroll: true
        });
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: dialogo,
        id: "menu-principal",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].menu,
        "data-fase": fase,
        "aria-label": textos.menu.rotulo,
        tabIndex: -1,
        onKeyDown: manterFoco,
        onCancel: (evento)=>{
            evento.preventDefault();
            fechar();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faixas,
                "aria-hidden": "true",
                children: [
                    0,
                    1,
                    2,
                    3
                ].map((ordem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faixa,
                        style: {
                            '--ordem': ordem
                        },
                        onAnimationEnd: ordem === 3 ? concluirFaixas : undefined
                    }, ordem, false, {
                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].conteudo,
                inert: fase !== 'aberto',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$LogotipoCriario$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogotipoCriario"], {
                                texto: textos.marca,
                                invertido: true
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: botaoFechar,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fechar,
                                type: "button",
                                onClick: ()=>fechar(),
                                "aria-label": textos.menu.fecharRotulo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: textos.menu.fechar
                                    }, void 0, false, {
                                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconeFechar,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                        lineNumber: 114,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navegacao,
                        "aria-label": textos.menu.navegacaoRotulo,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lista,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$navegacao$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["itensDeNavegacao"].map(({ numero, id, destino }, ordem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                                    style: {
                                        '--ordem': ordem
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].link,
                                        href: '#' + destino,
                                        onClick: (evento)=>{
                                            evento.preventDefault();
                                            fechar(destino);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].numero,
                                                "aria-hidden": "true",
                                                children: numero
                                            }, void 0, false, {
                                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: textos.navegacao[id]
                                            }, void 0, false, {
                                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].seta,
                                                "aria-hidden": "true",
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                }, destino, false, {
                                    fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].assinatura,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: textos.menu.assinatura
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].idiomas,
                                "aria-label": textos.idiomas.rotulo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/",
                                        hrefLang: "pt-BR",
                                        lang: "pt-BR",
                                        "aria-current": idioma === 'pt-BR' ? 'page' : undefined,
                                        children: textos.idiomas.portugues
                                    }, void 0, false, {
                                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/en/",
                                        hrefLang: "en",
                                        lang: "en",
                                        "aria-current": idioma === 'en' ? 'page' : undefined,
                                        children: textos.idiomas.ingles
                                    }, void 0, false, {
                                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/funcionalidades/navegacao/MenuPrincipal.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/componentes/CabecalhoSite.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "botaoMenu": "CabecalhoSite-module__eq-GPG__botaoMenu",
  "cabecalho": "CabecalhoSite-module__eq-GPG__cabecalho",
  "faleConoscoContainer": "CabecalhoSite-module__eq-GPG__faleConoscoContainer",
  "iconeMenu": "CabecalhoSite-module__eq-GPG__iconeMenu",
  "logo": "CabecalhoSite-module__eq-GPG__logo",
});
}),
"[project]/componentes/CabecalhoSite.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CabecalhoSite",
    ()=>CabecalhoSite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$LogotipoCriario$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/LogotipoCriario.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$FaleConosco$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/componentes/FaleConosco.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/navegacao/MenuPrincipal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/componentes/CabecalhoSite.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
function CabecalhoSite({ textos, idioma }) {
    const [menuAberto, setMenuAberto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cabecalho,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                href: "#inicio",
                "aria-label": textos.menu.inicioRotulo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$LogotipoCriario$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LogotipoCriario"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].faleConoscoContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$FaleConosco$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaleConosco"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].botaoMenu,
                type: "button",
                "aria-label": textos.menu.abrir,
                "aria-haspopup": "dialog",
                "aria-expanded": menuAberto,
                "aria-controls": "menu-principal",
                onClick: ()=>setMenuAberto(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$componentes$2f$CabecalhoSite$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].iconeMenu,
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/componentes/CabecalhoSite.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                fileName: "[project]/componentes/CabecalhoSite.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            menuAberto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$navegacao$2f$MenuPrincipal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MenuPrincipal"], {
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
}),
"[project]/dados/servicos.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/funcionalidades/servicos/SecaoServicos.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EtapaDoProcessoDeServico",
    ()=>EtapaDoProcessoDeServico
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/funcionalidades/servicos/SecaoServicos.module.css [app-ssr] (css module)");
;
;
function EtapaDoProcessoDeServico({ numero, titulo, descricao, posicao, saibaMais }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].etapa} ${posicao === 'baixo' ? __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].etapaBaixa : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].conteudo,
            "data-etapa": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].numero,
                    children: numero
                }, void 0, false, {
                    fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: titulo
                }, void 0, false, {
                    fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: descricao
                }, void 0, false, {
                    fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#fale-conosco",
                    children: [
                        saibaMais,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "→"
                        }, void 0, false, {
                            fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
                            lineNumber: 13,
                            columnNumber: 45
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/funcionalidades/servicos/SecaoServicos.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SecaoServicos",
    ()=>SecaoServicos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$servicos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dados/servicos.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$EtapaDoProcessoDeServico$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/funcionalidades/servicos/EtapaDoProcessoDeServico.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/funcionalidades/servicos/SecaoServicos.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
function SecaoServicos({ textos, comum }) {
    const grade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const observador = new IntersectionObserver((entradas)=>{
            let ordem = 0;
            for (const entrada of entradas){
                if (!entrada.isIntersecting) continue;
                if (entrada.target === elemento) {
                    itens.filter((item)=>pendentes.has(item)).forEach((item, indice)=>revelar(item, indice * 360));
                } else if (pendentes.has(entrada.target)) {
                    revelar(entrada.target, ordem++ * 180);
                }
                observador.unobserve(entrada.target);
            }
            if (pendentes.size === 0) observador.disconnect();
        }, {
            threshold: 0,
            rootMargin: '0px 0px -10% 0px'
        });
        function observar() {
            observador.disconnect();
            if (desktop.matches && pendentes.size) observador.observe(elemento);
            else pendentes.forEach((item)=>observador.observe(item));
        }
        // O HTML permanece legível sem JavaScript. Só ocultamos após preparar o observador.
        itens.forEach((item)=>{
            item.dataset.revelacao = 'pendente';
        });
        observar();
        function mostrarTudo() {
            if (!movimentoReduzido.matches) return;
            observador.disconnect();
            itens.forEach((item)=>{
                delete item.dataset.revelacao;
            });
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
        return ()=>{
            observador.disconnect();
            desktop.removeEventListener('change', observar);
            movimentoReduzido.removeEventListener('change', mostrarTudo);
            elemento.removeEventListener('focusin', revelarFoco);
            itens.forEach((item)=>{
                delete item.dataset.revelacao;
            });
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "servicos",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].secao,
        "aria-labelledby": "titulo-servicos",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].introducao,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "titulo-servicos",
                        children: textos.titulo
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: textos.descricao
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].processo,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: grade,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grade,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$dados$2f$servicos$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["etapasDeServico"].map(({ id, ...etapa })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$EtapaDoProcessoDeServico$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EtapaDoProcessoDeServico"], {
                                ...etapa,
                                ...textos.itens[id],
                                saibaMais: comum.saibaMais
                            }, id, false, {
                                fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                                lineNumber: 88,
                                columnNumber: 54
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$funcionalidades$2f$servicos$2f$SecaoServicos$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chamada,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#fale-conosco",
                            children: comum.faleConosco
                        }, void 0, false, {
                            fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/funcionalidades/servicos/SecaoServicos.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
"[project]/funcionalidades/contato/FormularioDeContato.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormularioDeContato",
    ()=>FormularioDeContato
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function FormularioDeContato({ textos }) {
    const [enviado, setEnviado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    function lidarComEnvio(evento) {
        evento.preventDefault();
        setEnviado(true);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "formulario-contato",
        onSubmit: lidarComEnvio,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "formulario-contato__campos",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.nome,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                name: "nome"
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 18,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.empresa,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "empresa"
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 19,
                                columnNumber: 32
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.email,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                type: "email",
                                name: "email"
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 20,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.telefone,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "telefone"
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 21,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.cargo,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "cargo"
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 22,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            textos.origem,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "origem"
                            }, void 0, false, {
                                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                                lineNumber: 23,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "formulario-contato__necessidade",
                children: [
                    textos.necessidade,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        required: true,
                        name: "necessidade",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                children: [
                    enviado ? textos.preparada : textos.enviar,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "↗"
                    }, void 0, false, {
                        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                        lineNumber: 28,
                        columnNumber: 74
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/funcionalidades/contato/FormularioDeContato.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2d028717._.js.map