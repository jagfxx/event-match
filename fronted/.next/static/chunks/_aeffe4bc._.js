(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/TypewriterClient.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>TypewriterClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typewriter$2d$effect$2f$dist$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typewriter-effect/dist/react.js [app-client] (ecmascript)");
"use client"; // marca este archivo como cliente
;
;
function TypewriterClient() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex text-4xl font-bold",
        children: [
            "E",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typewriter$2d$effect$2f$dist$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                options: {
                    strings: [
                        "vent"
                    ],
                    autoStart: true,
                    loop: true
                }
            }, void 0, false, {
                fileName: "[project]/src/components/TypewriterClient.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            "M",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typewriter$2d$effect$2f$dist$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                options: {
                    strings: [
                        "atch"
                    ],
                    autoStart: true,
                    loop: true
                }
            }, void 0, false, {
                fileName: "[project]/src/components/TypewriterClient.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TypewriterClient.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = TypewriterClient;
var _c;
__turbopack_context__.k.register(_c, "TypewriterClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/TypeWriterName.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>TypeWriterName
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typewriter$2d$effect$2f$dist$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/typewriter-effect/dist/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/auth/AuthProvider.jsx [app-client] (ecmascript)"); // <- ajusta la ruta si hace falta
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TypeWriterName() {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    console.log("TypeWriter user:", user); // <- mira esto en la consola
    if (loading) return null;
    const name = (user === null || user === void 0 ? void 0 : user.name) || "Invitado";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex text-4xl font-bold",
        children: [
            "Hola, ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$typewriter$2d$effect$2f$dist$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                options: {
                    strings: [
                        name
                    ],
                    autoStart: true,
                    loop: true
                }
            }, void 0, false, {
                fileName: "[project]/src/components/TypeWriterName.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TypeWriterName.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(TypeWriterName, "EmJkapf7qiLC5Br5eCoEq4veZes=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = TypeWriterName;
var _c;
__turbopack_context__.k.register(_c, "TypeWriterName");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/AuthButtons.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>AuthButtons
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/auth/AuthProvider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TypewriterClient$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TypewriterClient.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TypeWriterName$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TypeWriterName.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AuthButtons() {
    _s();
    const { user, loading, signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    if (loading) return null; // evita parpadeo inicial
    if (user) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-[200px] justify-center items-center gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TypeWriterName$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/AuthButtons.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        signOut();
                        router.push("/"); // opcional: redirigir al home
                    },
                    className: "bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition",
                    children: "Cerrar sesión"
                }, void 0, false, {
                    fileName: "[project]/src/components/AuthButtons.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AuthButtons.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-[200px] justify-center items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TypewriterClient$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/AuthButtons.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/auth/login",
                className: "w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition block text-center",
                children: "Login"
            }, void 0, false, {
                fileName: "[project]/src/components/AuthButtons.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/auth/register",
                className: "w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition block text-center",
                children: "Register"
            }, void 0, false, {
                fileName: "[project]/src/components/AuthButtons.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AuthButtons.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(AuthButtons, "1+/p1f2fK9CmyxukGiniLaLwvp8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$auth$2f$AuthProvider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthButtons;
var _c;
__turbopack_context__.k.register(_c, "AuthButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    if (onNavigate) {
        let isDefaultPrevented = false;
        onNavigate({
            preventDefault: ()=>{
                isDefaultPrevented = true;
            }
        });
        if (isDefaultPrevented) {
            return;
        }
    }
    _react.default.startTransition(()=>{
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    });
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    /**
   * The possible states for prefetch are:
   * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
   * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
   * - false: we will not prefetch if in the viewport at all
   * - 'unstable_dynamicOnHover': this starts in "auto" mode, but switches to "full" when the link is hovered
   */ const appPrefetchKind = prefetchProp === null || prefetchProp === 'auto' ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, appPrefetchKind, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        appPrefetchKind,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/typewriter-effect/dist/react.js [app-client] (ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? module.exports = t(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)")) : "TURBOPACK unreachable";
}("undefined" != typeof self ? self : ("TURBOPACK member replacement", __turbopack_context__.e), (e)=>(()=>{
        var t = {
            2: (e, t, r)=>{
                var n = r(2199), o = r(4664), a = r(5950);
                e.exports = function(e) {
                    return n(e, a, o);
                };
            },
            79: (e, t, r)=>{
                var n = r(3702), o = r(80), a = r(4739), i = r(8655), s = r(1175);
                function u(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for(this.clear(); ++t < r;){
                        var n = e[t];
                        this.set(n[0], n[1]);
                    }
                }
                u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e.exports = u;
            },
            80: (e, t, r)=>{
                var n = r(6025), o = Array.prototype.splice;
                e.exports = function(e) {
                    var t = this.__data__, r = n(t, e);
                    return !(r < 0 || (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, 0));
                };
            },
            270: (e, t, r)=>{
                var n = r(7068), o = r(346);
                e.exports = function e(t, r, a, i, s) {
                    return t === r || (null == t || null == r || !o(t) && !o(r) ? t != t && r != r : n(t, r, a, i, e, s));
                };
            },
            289: (e, t, r)=>{
                var n = r(2651);
                e.exports = function(e) {
                    return n(this, e).get(e);
                };
            },
            294: (e)=>{
                e.exports = function(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991;
                };
            },
            317: (e)=>{
                e.exports = function(e) {
                    var t = -1, r = Array(e.size);
                    return e.forEach(function(e, n) {
                        r[++t] = [
                            n,
                            e
                        ];
                    }), r;
                };
            },
            346: (e)=>{
                e.exports = function(e) {
                    return null != e && "object" == typeof e;
                };
            },
            361: (e)=>{
                var t = /^(?:0|[1-9]\d*)$/;
                e.exports = function(e, r) {
                    var n = typeof e;
                    return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && t.test(e)) && e > -1 && e % 1 == 0 && e < r;
                };
            },
            392: (e)=>{
                e.exports = function(e, t) {
                    return null == e ? void 0 : e[t];
                };
            },
            659: (e, t, r)=>{
                var n = r(1873), o = Object.prototype, a = o.hasOwnProperty, i = o.toString, s = n ? n.toStringTag : void 0;
                e.exports = function(e) {
                    var t = a.call(e, s), r = e[s];
                    try {
                        e[s] = void 0;
                        var n = !0;
                    } catch (e) {}
                    var o = i.call(e);
                    return n && (t ? e[s] = r : delete e[s]), o;
                };
            },
            689: (e, t, r)=>{
                var n = r(2), o = Object.prototype.hasOwnProperty;
                e.exports = function(e, t, r, a, i, s) {
                    var u = 1 & r, c = n(e), p = c.length;
                    if (p != n(t).length && !u) return !1;
                    for(var l = p; l--;){
                        var f = c[l];
                        if (!(u ? f in t : o.call(t, f))) return !1;
                    }
                    var v = s.get(e), d = s.get(t);
                    if (v && d) return v == t && d == e;
                    var h = !0;
                    s.set(e, t), s.set(t, e);
                    for(var y = u; ++l < p;){
                        var b = e[f = c[l]], m = t[f];
                        if (a) var _ = u ? a(m, b, f, t, e, s) : a(b, m, f, e, t, s);
                        if (!(void 0 === _ ? b === m || i(b, m, r, a, s) : _)) {
                            h = !1;
                            break;
                        }
                        y || (y = "constructor" == f);
                    }
                    if (h && !y) {
                        var g = e.constructor, w = t.constructor;
                        g == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof g && g instanceof g && "function" == typeof w && w instanceof w || (h = !1);
                    }
                    return s.delete(e), s.delete(t), h;
                };
            },
            695: (e, t, r)=>{
                var n = r(8096), o = r(2428), a = r(6449), i = r(3656), s = r(361), u = r(7167), c = Object.prototype.hasOwnProperty;
                e.exports = function(e, t) {
                    var r = a(e), p = !r && o(e), l = !r && !p && i(e), f = !r && !p && !l && u(e), v = r || p || l || f, d = v ? n(e.length, String) : [], h = d.length;
                    for(var y in e)!t && !c.call(e, y) || v && ("length" == y || l && ("offset" == y || "parent" == y) || f && ("buffer" == y || "byteLength" == y || "byteOffset" == y) || s(y, h)) || d.push(y);
                    return d;
                };
            },
            938: (e)=>{
                e.exports = function(e) {
                    var t = this.__data__, r = t.delete(e);
                    return this.size = t.size, r;
                };
            },
            945: (e, t, r)=>{
                var n = r(79), o = r(8223), a = r(3661);
                e.exports = function(e, t) {
                    var r = this.__data__;
                    if (r instanceof n) {
                        var i = r.__data__;
                        if (!o || i.length < 199) return i.push([
                            e,
                            t
                        ]), this.size = ++r.size, this;
                        r = this.__data__ = new a(i);
                    }
                    return r.set(e, t), this.size = r.size, this;
                };
            },
            1042: (e, t, r)=>{
                var n = r(6110)(Object, "create");
                e.exports = n;
            },
            1175: (e, t, r)=>{
                var n = r(6025);
                e.exports = function(e, t) {
                    var r = this.__data__, o = n(r, e);
                    return o < 0 ? (++this.size, r.push([
                        e,
                        t
                    ])) : r[o][1] = t, this;
                };
            },
            1380: (e)=>{
                e.exports = function(e) {
                    return this.__data__.set(e, "__lodash_hash_undefined__"), this;
                };
            },
            1420: (e, t, r)=>{
                var n = r(79);
                e.exports = function() {
                    this.__data__ = new n, this.size = 0;
                };
            },
            1459: (e)=>{
                e.exports = function(e) {
                    return this.__data__.has(e);
                };
            },
            1549: (e, t, r)=>{
                var n = r(2032), o = r(3862), a = r(6721), i = r(2749), s = r(5749);
                function u(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for(this.clear(); ++t < r;){
                        var n = e[t];
                        this.set(n[0], n[1]);
                    }
                }
                u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e.exports = u;
            },
            1873: (e, t, r)=>{
                var n = r(9325).Symbol;
                e.exports = n;
            },
            1882: (e, t, r)=>{
                var n = r(2552), o = r(3805);
                e.exports = function(e) {
                    if (!o(e)) return !1;
                    var t = n(e);
                    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
                };
            },
            1986: (e, t, r)=>{
                var n = r(1873), o = r(7828), a = r(5288), i = r(5911), s = r(317), u = r(4247), c = n ? n.prototype : void 0, p = c ? c.valueOf : void 0;
                e.exports = function(e, t, r, n, c, l, f) {
                    switch(r){
                        case "[object DataView]":
                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                            e = e.buffer, t = t.buffer;
                        case "[object ArrayBuffer]":
                            return !(e.byteLength != t.byteLength || !l(new o(e), new o(t)));
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                            return a(+e, +t);
                        case "[object Error]":
                            return e.name == t.name && e.message == t.message;
                        case "[object RegExp]":
                        case "[object String]":
                            return e == t + "";
                        case "[object Map]":
                            var v = s;
                        case "[object Set]":
                            var d = 1 & n;
                            if (v || (v = u), e.size != t.size && !d) return !1;
                            var h = f.get(e);
                            if (h) return h == t;
                            n |= 2, f.set(e, t);
                            var y = i(v(e), v(t), n, c, l, f);
                            return f.delete(e), y;
                        case "[object Symbol]":
                            if (p) return p.call(e) == p.call(t);
                    }
                    return !1;
                };
            },
            2032: (e, t, r)=>{
                var n = r(1042);
                e.exports = function() {
                    this.__data__ = n ? n(null) : {}, this.size = 0;
                };
            },
            2199: (e, t, r)=>{
                var n = r(4528), o = r(6449);
                e.exports = function(e, t, r) {
                    var a = t(e);
                    return o(e) ? a : n(a, r(e));
                };
            },
            2404: (e, t, r)=>{
                var n = r(270);
                e.exports = function(e, t) {
                    return n(e, t);
                };
            },
            2428: (e, t, r)=>{
                var n = r(7534), o = r(346), a = Object.prototype, i = a.hasOwnProperty, s = a.propertyIsEnumerable, u = n(function() {
                    return arguments;
                }()) ? n : function(e) {
                    return o(e) && i.call(e, "callee") && !s.call(e, "callee");
                };
                e.exports = u;
            },
            2552: (e, t, r)=>{
                var n = r(1873), o = r(659), a = r(9350), i = n ? n.toStringTag : void 0;
                e.exports = function(e) {
                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e);
                };
            },
            2651: (e, t, r)=>{
                var n = r(4218);
                e.exports = function(e, t) {
                    var r = e.__data__;
                    return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map;
                };
            },
            2749: (e, t, r)=>{
                var n = r(1042), o = Object.prototype.hasOwnProperty;
                e.exports = function(e) {
                    var t = this.__data__;
                    return n ? void 0 !== t[e] : o.call(t, e);
                };
            },
            2804: (e, t, r)=>{
                var n = r(6110)(r(9325), "Promise");
                e.exports = n;
            },
            2949: (e, t, r)=>{
                var n = r(2651);
                e.exports = function(e, t) {
                    var r = n(this, e), o = r.size;
                    return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
                };
            },
            3040: (e, t, r)=>{
                var n = r(1549), o = r(79), a = r(8223);
                e.exports = function() {
                    this.size = 0, this.__data__ = {
                        hash: new n,
                        map: new (a || o),
                        string: new n
                    };
                };
            },
            3146: (e, t, r)=>{
                for(var n = r(3491), o = "undefined" == typeof window ? r.g : window, a = [
                    "moz",
                    "webkit"
                ], i = "AnimationFrame", s = o["request" + i], u = o["cancel" + i] || o["cancelRequest" + i], c = 0; !s && c < a.length; c++)s = o[a[c] + "Request" + i], u = o[a[c] + "Cancel" + i] || o[a[c] + "CancelRequest" + i];
                if (!s || !u) {
                    var p = 0, l = 0, f = [], v = 1e3 / 60;
                    s = function(e) {
                        if (0 === f.length) {
                            var t = n(), r = Math.max(0, v - (t - p));
                            p = r + t, setTimeout(function() {
                                var e = f.slice(0);
                                f.length = 0;
                                for(var t = 0; t < e.length; t++)if (!e[t].cancelled) try {
                                    e[t].callback(p);
                                } catch (e) {
                                    setTimeout(function() {
                                        throw e;
                                    }, 0);
                                }
                            }, Math.round(r));
                        }
                        return f.push({
                            handle: ++l,
                            callback: e,
                            cancelled: !1
                        }), l;
                    }, u = function(e) {
                        for(var t = 0; t < f.length; t++)f[t].handle === e && (f[t].cancelled = !0);
                    };
                }
                e.exports = function(e) {
                    return s.call(o, e);
                }, e.exports.cancel = function() {
                    u.apply(o, arguments);
                }, e.exports.polyfill = function(e) {
                    e || (e = o), e.requestAnimationFrame = s, e.cancelAnimationFrame = u;
                };
            },
            3345: (e)=>{
                e.exports = function() {
                    return [];
                };
            },
            3491: function(e) {
                (function() {
                    var t, r, n, o, a, i;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                        return performance.now();
                    } : "undefined" != typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && null !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hrtime ? (e.exports = function() {
                        return (t() - a) / 1e6;
                    }, r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hrtime, o = (t = function() {
                        var e;
                        return 1e9 * (e = r())[0] + e[1];
                    })(), i = 1e9 * __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].uptime(), a = o - i) : Date.now ? (e.exports = function() {
                        return Date.now() - n;
                    }, n = Date.now()) : (e.exports = function() {
                        return (new Date).getTime() - n;
                    }, n = (new Date).getTime());
                }).call(this);
            },
            3605: (e)=>{
                e.exports = function(e) {
                    return this.__data__.get(e);
                };
            },
            3650: (e, t, r)=>{
                var n = r(4335)(Object.keys, Object);
                e.exports = n;
            },
            3656: (e, t, r)=>{
                e = r.nmd(e);
                var n = r(9325), o = r(9935), a = t && !t.nodeType && t, i = a && e && !e.nodeType && e, s = i && i.exports === a ? n.Buffer : void 0, u = (s ? s.isBuffer : void 0) || o;
                e.exports = u;
            },
            3661: (e, t, r)=>{
                var n = r(3040), o = r(7670), a = r(289), i = r(4509), s = r(2949);
                function u(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for(this.clear(); ++t < r;){
                        var n = e[t];
                        this.set(n[0], n[1]);
                    }
                }
                u.prototype.clear = n, u.prototype.delete = o, u.prototype.get = a, u.prototype.has = i, u.prototype.set = s, e.exports = u;
            },
            3702: (e)=>{
                e.exports = function() {
                    this.__data__ = [], this.size = 0;
                };
            },
            3805: (e)=>{
                e.exports = function(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t);
                };
            },
            3862: (e)=>{
                e.exports = function(e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t;
                };
            },
            4218: (e)=>{
                e.exports = function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
                };
            },
            4247: (e)=>{
                e.exports = function(e) {
                    var t = -1, r = Array(e.size);
                    return e.forEach(function(e) {
                        r[++t] = e;
                    }), r;
                };
            },
            4248: (e)=>{
                e.exports = function(e, t) {
                    for(var r = -1, n = null == e ? 0 : e.length; ++r < n;)if (t(e[r], r, e)) return !0;
                    return !1;
                };
            },
            4335: (e)=>{
                e.exports = function(e, t) {
                    return function(r) {
                        return e(t(r));
                    };
                };
            },
            4509: (e, t, r)=>{
                var n = r(2651);
                e.exports = function(e) {
                    return n(this, e).has(e);
                };
            },
            4528: (e)=>{
                e.exports = function(e, t) {
                    for(var r = -1, n = t.length, o = e.length; ++r < n;)e[o + r] = t[r];
                    return e;
                };
            },
            4664: (e, t, r)=>{
                var n = r(9770), o = r(3345), a = Object.prototype.propertyIsEnumerable, i = Object.getOwnPropertySymbols, s = i ? function(e) {
                    return null == e ? [] : (e = Object(e), n(i(e), function(t) {
                        return a.call(e, t);
                    }));
                } : o;
                e.exports = s;
            },
            4739: (e, t, r)=>{
                var n = r(6025);
                e.exports = function(e) {
                    var t = this.__data__, r = n(t, e);
                    return r < 0 ? void 0 : t[r][1];
                };
            },
            4840: (e, t, r)=>{
                var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
                e.exports = n;
            },
            4894: (e, t, r)=>{
                var n = r(1882), o = r(294);
                e.exports = function(e) {
                    return null != e && o(e.length) && !n(e);
                };
            },
            4901: (e, t, r)=>{
                var n = r(2552), o = r(294), a = r(346), i = {};
                i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, e.exports = function(e) {
                    return a(e) && o(e.length) && !!i[n(e)];
                };
            },
            5083: (e, t, r)=>{
                var n = r(1882), o = r(7296), a = r(3805), i = r(7473), s = /^\[object .+?Constructor\]$/, u = Function.prototype, c = Object.prototype, p = u.toString, l = c.hasOwnProperty, f = RegExp("^" + p.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                e.exports = function(e) {
                    return !(!a(e) || o(e)) && (n(e) ? f : s).test(i(e));
                };
            },
            5288: (e)=>{
                e.exports = function(e, t) {
                    return e === t || e != e && t != t;
                };
            },
            5481: (e, t, r)=>{
                var n = r(9325)["__core-js_shared__"];
                e.exports = n;
            },
            5527: (e)=>{
                var t = Object.prototype;
                e.exports = function(e) {
                    var r = e && e.constructor;
                    return e === ("function" == typeof r && r.prototype || t);
                };
            },
            5580: (e, t, r)=>{
                var n = r(6110)(r(9325), "DataView");
                e.exports = n;
            },
            5749: (e, t, r)=>{
                var n = r(1042);
                e.exports = function(e, t) {
                    var r = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this;
                };
            },
            5861: (e, t, r)=>{
                var n = r(5580), o = r(8223), a = r(2804), i = r(6545), s = r(8303), u = r(2552), c = r(7473), p = "[object Map]", l = "[object Promise]", f = "[object Set]", v = "[object WeakMap]", d = "[object DataView]", h = c(n), y = c(o), b = c(a), m = c(i), _ = c(s), g = u;
                (n && g(new n(new ArrayBuffer(1))) != d || o && g(new o) != p || a && g(a.resolve()) != l || i && g(new i) != f || s && g(new s) != v) && (g = function(e) {
                    var t = u(e), r = "[object Object]" == t ? e.constructor : void 0, n = r ? c(r) : "";
                    if (n) switch(n){
                        case h:
                            return d;
                        case y:
                            return p;
                        case b:
                            return l;
                        case m:
                            return f;
                        case _:
                            return v;
                    }
                    return t;
                }), e.exports = g;
            },
            5911: (e, t, r)=>{
                var n = r(8859), o = r(4248), a = r(9219);
                e.exports = function(e, t, r, i, s, u) {
                    var c = 1 & r, p = e.length, l = t.length;
                    if (p != l && !(c && l > p)) return !1;
                    var f = u.get(e), v = u.get(t);
                    if (f && v) return f == t && v == e;
                    var d = -1, h = !0, y = 2 & r ? new n : void 0;
                    for(u.set(e, t), u.set(t, e); ++d < p;){
                        var b = e[d], m = t[d];
                        if (i) var _ = c ? i(m, b, d, t, e, u) : i(b, m, d, e, t, u);
                        if (void 0 !== _) {
                            if (_) continue;
                            h = !1;
                            break;
                        }
                        if (y) {
                            if (!o(t, function(e, t) {
                                if (!a(y, t) && (b === e || s(b, e, r, i, u))) return y.push(t);
                            })) {
                                h = !1;
                                break;
                            }
                        } else if (b !== m && !s(b, m, r, i, u)) {
                            h = !1;
                            break;
                        }
                    }
                    return u.delete(e), u.delete(t), h;
                };
            },
            5950: (e, t, r)=>{
                var n = r(695), o = r(8984), a = r(4894);
                e.exports = function(e) {
                    return a(e) ? n(e) : o(e);
                };
            },
            6009: (e, t, r)=>{
                e = r.nmd(e);
                var n = r(4840), o = t && !t.nodeType && t, a = o && e && !e.nodeType && e, i = a && a.exports === o && n.process, s = function() {
                    try {
                        return a && a.require && a.require("util").types || i && i.binding && i.binding("util");
                    } catch (e) {}
                }();
                e.exports = s;
            },
            6025: (e, t, r)=>{
                var n = r(5288);
                e.exports = function(e, t) {
                    for(var r = e.length; r--;)if (n(e[r][0], t)) return r;
                    return -1;
                };
            },
            6110: (e, t, r)=>{
                var n = r(5083), o = r(392);
                e.exports = function(e, t) {
                    var r = o(e, t);
                    return n(r) ? r : void 0;
                };
            },
            6449: (e)=>{
                var t = Array.isArray;
                e.exports = t;
            },
            6545: (e, t, r)=>{
                var n = r(6110)(r(9325), "Set");
                e.exports = n;
            },
            6721: (e, t, r)=>{
                var n = r(1042), o = Object.prototype.hasOwnProperty;
                e.exports = function(e) {
                    var t = this.__data__;
                    if (n) {
                        var r = t[e];
                        return "__lodash_hash_undefined__" === r ? void 0 : r;
                    }
                    return o.call(t, e) ? t[e] : void 0;
                };
            },
            7068: (e, t, r)=>{
                var n = r(7217), o = r(5911), a = r(1986), i = r(689), s = r(5861), u = r(6449), c = r(3656), p = r(7167), l = "[object Arguments]", f = "[object Array]", v = "[object Object]", d = Object.prototype.hasOwnProperty;
                e.exports = function(e, t, r, h, y, b) {
                    var m = u(e), _ = u(t), g = m ? f : s(e), w = _ ? f : s(t), x = (g = g == l ? v : g) == v, j = (w = w == l ? v : w) == v, E = g == w;
                    if (E && c(e)) {
                        if (!c(t)) return !1;
                        m = !0, x = !1;
                    }
                    if (E && !x) return b || (b = new n), m || p(e) ? o(e, t, r, h, y, b) : a(e, t, g, r, h, y, b);
                    if (!(1 & r)) {
                        var O = x && d.call(e, "__wrapped__"), T = j && d.call(t, "__wrapped__");
                        if (O || T) {
                            var A = O ? e.value() : e, S = T ? t.value() : t;
                            return b || (b = new n), y(A, S, r, h, b);
                        }
                    }
                    return !!E && (b || (b = new n), i(e, t, r, h, y, b));
                };
            },
            7167: (e, t, r)=>{
                var n = r(4901), o = r(7301), a = r(6009), i = a && a.isTypedArray, s = i ? o(i) : n;
                e.exports = s;
            },
            7217: (e, t, r)=>{
                var n = r(79), o = r(1420), a = r(938), i = r(3605), s = r(9817), u = r(945);
                function c(e) {
                    var t = this.__data__ = new n(e);
                    this.size = t.size;
                }
                c.prototype.clear = o, c.prototype.delete = a, c.prototype.get = i, c.prototype.has = s, c.prototype.set = u, e.exports = c;
            },
            7296: (e, t, r)=>{
                var n, o = r(5481), a = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
                e.exports = function(e) {
                    return !!a && a in e;
                };
            },
            7301: (e)=>{
                e.exports = function(e) {
                    return function(t) {
                        return e(t);
                    };
                };
            },
            7473: (e)=>{
                var t = Function.prototype.toString;
                e.exports = function(e) {
                    if (null != e) {
                        try {
                            return t.call(e);
                        } catch (e) {}
                        try {
                            return e + "";
                        } catch (e) {}
                    }
                    return "";
                };
            },
            7534: (e, t, r)=>{
                var n = r(2552), o = r(346);
                e.exports = function(e) {
                    return o(e) && "[object Arguments]" == n(e);
                };
            },
            7670: (e, t, r)=>{
                var n = r(2651);
                e.exports = function(e) {
                    var t = n(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t;
                };
            },
            7828: (e, t, r)=>{
                var n = r(9325).Uint8Array;
                e.exports = n;
            },
            8096: (e)=>{
                e.exports = function(e, t) {
                    for(var r = -1, n = Array(e); ++r < e;)n[r] = t(r);
                    return n;
                };
            },
            8223: (e, t, r)=>{
                var n = r(6110)(r(9325), "Map");
                e.exports = n;
            },
            8303: (e, t, r)=>{
                var n = r(6110)(r(9325), "WeakMap");
                e.exports = n;
            },
            8655: (e, t, r)=>{
                var n = r(6025);
                e.exports = function(e) {
                    return n(this.__data__, e) > -1;
                };
            },
            8859: (e, t, r)=>{
                var n = r(3661), o = r(1380), a = r(1459);
                function i(e) {
                    var t = -1, r = null == e ? 0 : e.length;
                    for(this.__data__ = new n; ++t < r;)this.add(e[t]);
                }
                i.prototype.add = i.prototype.push = o, i.prototype.has = a, e.exports = i;
            },
            8984: (e, t, r)=>{
                var n = r(5527), o = r(3650), a = Object.prototype.hasOwnProperty;
                e.exports = function(e) {
                    if (!n(e)) return o(e);
                    var t = [];
                    for(var r in Object(e))a.call(e, r) && "constructor" != r && t.push(r);
                    return t;
                };
            },
            9155: (t)=>{
                "use strict";
                t.exports = e;
            },
            9219: (e)=>{
                e.exports = function(e, t) {
                    return e.has(t);
                };
            },
            9325: (e, t, r)=>{
                var n = r(4840), o = "object" == typeof self && self && self.Object === Object && self, a = n || o || Function("return this")();
                e.exports = a;
            },
            9350: (e)=>{
                var t = Object.prototype.toString;
                e.exports = function(e) {
                    return t.call(e);
                };
            },
            9770: (e)=>{
                e.exports = function(e, t) {
                    for(var r = -1, n = null == e ? 0 : e.length, o = 0, a = []; ++r < n;){
                        var i = e[r];
                        t(i, r, e) && (a[o++] = i);
                    }
                    return a;
                };
            },
            9817: (e)=>{
                e.exports = function(e) {
                    return this.__data__.has(e);
                };
            },
            9905: (e, t, r)=>{
                "use strict";
                r.d(t, {
                    default: ()=>A
                });
                var n = r(3146), o = r.n(n);
                const a = function(e) {
                    return new RegExp(/<[a-z][\s\S]*>/i).test(e);
                }, i = function(e, t) {
                    return Math.floor(Math.random() * (t - e + 1)) + e;
                };
                var s = "TYPE_CHARACTER", u = "REMOVE_CHARACTER", c = "REMOVE_ALL", p = "REMOVE_LAST_VISIBLE_NODE", l = "PAUSE_FOR", f = "CALL_FUNCTION", v = "ADD_HTML_TAG_ELEMENT", d = "CHANGE_DELETE_SPEED", h = "CHANGE_DELAY", y = "CHANGE_CURSOR", b = "PASTE_STRING", m = "HTML_TAG";
                function _(e) {
                    return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e;
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    }, _(e);
                }
                function g(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })), r.push.apply(r, n);
                    }
                    return r;
                }
                function w(e) {
                    for(var t = 1; t < arguments.length; t++){
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? g(Object(r), !0).forEach(function(t) {
                            O(e, t, r[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                    }
                    return e;
                }
                function x(e) {
                    return function(e) {
                        if (Array.isArray(e)) return j(e);
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return j(e, t);
                            var r = ({}).toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? j(e, t) : void 0;
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function j(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for(var r = 0, n = Array(t); r < t; r++)n[r] = e[r];
                    return n;
                }
                function E(e, t) {
                    for(var r = 0; r < t.length; r++){
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, T(n.key), n);
                    }
                }
                function O(e, t, r) {
                    return (t = T(t)) in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e;
                }
                function T(e) {
                    var t = function(e) {
                        if ("object" != _(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, "string");
                            if ("object" != _(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return String(e);
                    }(e);
                    return "symbol" == _(t) ? t : t + "";
                }
                const A = function() {
                    function e(t, r) {
                        var _ = this;
                        if (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, e), O(this, "state", {
                            cursorAnimation: null,
                            lastFrameTime: null,
                            pauseUntil: null,
                            eventQueue: [],
                            eventLoop: null,
                            eventLoopPaused: !1,
                            reverseCalledEvents: [],
                            calledEvents: [],
                            visibleNodes: [],
                            initialOptions: null,
                            elements: {
                                container: null,
                                wrapper: document.createElement("span"),
                                cursor: document.createElement("span")
                            }
                        }), O(this, "options", {
                            strings: null,
                            cursor: "|",
                            delay: "natural",
                            pauseFor: 1500,
                            deleteSpeed: "natural",
                            loop: !1,
                            autoStart: !1,
                            devMode: !1,
                            skipAddStyles: !1,
                            wrapperClassName: "Typewriter__wrapper",
                            cursorClassName: "Typewriter__cursor",
                            stringSplitter: null,
                            onCreateTextNode: null,
                            onRemoveNode: null
                        }), O(this, "setupWrapperElement", function() {
                            _.state.elements.container && (_.state.elements.wrapper.className = _.options.wrapperClassName, _.state.elements.cursor.className = _.options.cursorClassName, _.state.elements.cursor.innerHTML = _.options.cursor, _.state.elements.container.innerHTML = "", _.state.elements.container.appendChild(_.state.elements.wrapper), _.state.elements.container.appendChild(_.state.elements.cursor));
                        }), O(this, "start", function() {
                            return _.state.eventLoopPaused = !1, _.runEventLoop(), _;
                        }), O(this, "pause", function() {
                            return _.state.eventLoopPaused = !0, _;
                        }), O(this, "stop", function() {
                            return _.state.eventLoop && ((0, n.cancel)(_.state.eventLoop), _.state.eventLoop = null), _;
                        }), O(this, "pauseFor", function(e) {
                            return _.addEventToQueue(l, {
                                ms: e
                            }), _;
                        }), O(this, "typeOutAllStrings", function() {
                            return "string" == typeof _.options.strings ? (_.typeString(_.options.strings).pauseFor(_.options.pauseFor), _) : (_.options.strings.forEach(function(e) {
                                _.typeString(e).pauseFor(_.options.pauseFor).deleteAll(_.options.deleteSpeed);
                            }), _);
                        }), O(this, "typeString", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            if (a(e)) return _.typeOutHTMLString(e, t);
                            if (e) {
                                var r = (_.options || {}).stringSplitter, n = "function" == typeof r ? r(e) : e.split("");
                                _.typeCharacters(n, t);
                            }
                            return _;
                        }), O(this, "pasteString", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return a(e) ? _.typeOutHTMLString(e, t, !0) : (e && _.addEventToQueue(b, {
                                character: e,
                                node: t
                            }), _);
                        }), O(this, "typeOutHTMLString", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, r = arguments.length > 2 ? arguments[2] : void 0, n = function(e) {
                                var t = document.createElement("div");
                                return t.innerHTML = e, t.childNodes;
                            }(e);
                            if (n.length > 0) for(var o = 0; o < n.length; o++){
                                var a = n[o], i = a.innerHTML;
                                a && 3 !== a.nodeType ? (a.innerHTML = "", _.addEventToQueue(v, {
                                    node: a,
                                    parentNode: t
                                }), r ? _.pasteString(i, a) : _.typeString(i, a)) : a.textContent && (r ? _.pasteString(a.textContent, t) : _.typeString(a.textContent, t));
                            }
                            return _;
                        }), O(this, "deleteAll", function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                            return _.addEventToQueue(c, {
                                speed: e
                            }), _;
                        }), O(this, "changeDeleteSpeed", function(e) {
                            if (!e) throw new Error("Must provide new delete speed");
                            return _.addEventToQueue(d, {
                                speed: e
                            }), _;
                        }), O(this, "changeDelay", function(e) {
                            if (!e) throw new Error("Must provide new delay");
                            return _.addEventToQueue(h, {
                                delay: e
                            }), _;
                        }), O(this, "changeCursor", function(e) {
                            if (!e) throw new Error("Must provide new cursor");
                            return _.addEventToQueue(y, {
                                cursor: e
                            }), _;
                        }), O(this, "deleteChars", function(e) {
                            if (!e) throw new Error("Must provide amount of characters to delete");
                            for(var t = 0; t < e; t++)_.addEventToQueue(u);
                            return _;
                        }), O(this, "callFunction", function(e, t) {
                            if (!e || "function" != typeof e) throw new Error("Callback must be a function");
                            return _.addEventToQueue(f, {
                                cb: e,
                                thisArg: t
                            }), _;
                        }), O(this, "typeCharacters", function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                            return e.forEach(function(e) {
                                _.addEventToQueue(s, {
                                    character: e,
                                    node: t
                                });
                            }), _;
                        }), O(this, "removeCharacters", function(e) {
                            if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                            return e.forEach(function() {
                                _.addEventToQueue(u);
                            }), _;
                        }), O(this, "addEventToQueue", function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return _.addEventToStateProperty(e, t, r, "eventQueue");
                        }), O(this, "addReverseCalledEvent", function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return _.options.loop ? _.addEventToStateProperty(e, t, r, "reverseCalledEvents") : _;
                        }), O(this, "addEventToStateProperty", function(e, t) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n = arguments.length > 3 ? arguments[3] : void 0, o = {
                                eventName: e,
                                eventArgs: t || {}
                            };
                            return _.state[n] = r ? [
                                o
                            ].concat(x(_.state[n])) : [].concat(x(_.state[n]), [
                                o
                            ]), _;
                        }), O(this, "runEventLoop", function() {
                            _.state.lastFrameTime || (_.state.lastFrameTime = Date.now());
                            var e = Date.now(), t = e - _.state.lastFrameTime;
                            if (!_.state.eventQueue.length) {
                                if (!_.options.loop) return;
                                _.state.eventQueue = x(_.state.calledEvents), _.state.calledEvents = [], _.options = w({}, _.state.initialOptions);
                            }
                            if (_.state.eventLoop = o()(_.runEventLoop), !_.state.eventLoopPaused) {
                                if (_.state.pauseUntil) {
                                    if (e < _.state.pauseUntil) return;
                                    _.state.pauseUntil = null;
                                }
                                var r, n = x(_.state.eventQueue), a = n.shift();
                                if (!(t <= (r = a.eventName === p || a.eventName === u ? "natural" === _.options.deleteSpeed ? i(40, 80) : _.options.deleteSpeed : "natural" === _.options.delay ? i(120, 160) : _.options.delay))) {
                                    var g = a.eventName, j = a.eventArgs;
                                    switch(_.logInDevMode({
                                        currentEvent: a,
                                        state: _.state,
                                        delay: r
                                    }), g){
                                        case b:
                                        case s:
                                            var E = j.character, O = j.node, T = document.createTextNode(E), A = T;
                                            _.options.onCreateTextNode && "function" == typeof _.options.onCreateTextNode && (A = _.options.onCreateTextNode(E, T)), A && (O ? O.appendChild(A) : _.state.elements.wrapper.appendChild(A)), _.state.visibleNodes = [].concat(x(_.state.visibleNodes), [
                                                {
                                                    type: "TEXT_NODE",
                                                    character: E,
                                                    node: A
                                                }
                                            ]);
                                            break;
                                        case u:
                                            n.unshift({
                                                eventName: p,
                                                eventArgs: {
                                                    removingCharacterNode: !0
                                                }
                                            });
                                            break;
                                        case l:
                                            var S = a.eventArgs.ms;
                                            _.state.pauseUntil = Date.now() + parseInt(S);
                                            break;
                                        case f:
                                            var N = a.eventArgs, P = N.cb, C = N.thisArg;
                                            P.call(C, {
                                                elements: _.state.elements
                                            });
                                            break;
                                        case v:
                                            var L = a.eventArgs, k = L.node, D = L.parentNode;
                                            D ? D.appendChild(k) : _.state.elements.wrapper.appendChild(k), _.state.visibleNodes = [].concat(x(_.state.visibleNodes), [
                                                {
                                                    type: m,
                                                    node: k,
                                                    parentNode: D || _.state.elements.wrapper
                                                }
                                            ]);
                                            break;
                                        case c:
                                            var M = _.state.visibleNodes, R = j.speed, F = [];
                                            R && F.push({
                                                eventName: d,
                                                eventArgs: {
                                                    speed: R,
                                                    temp: !0
                                                }
                                            });
                                            for(var z = 0, Q = M.length; z < Q; z++)F.push({
                                                eventName: p,
                                                eventArgs: {
                                                    removingCharacterNode: !1
                                                }
                                            });
                                            R && F.push({
                                                eventName: d,
                                                eventArgs: {
                                                    speed: _.options.deleteSpeed,
                                                    temp: !0
                                                }
                                            }), n.unshift.apply(n, F);
                                            break;
                                        case p:
                                            var I = a.eventArgs.removingCharacterNode;
                                            if (_.state.visibleNodes.length) {
                                                var U = _.state.visibleNodes.pop(), H = U.type, q = U.node, B = U.character;
                                                _.options.onRemoveNode && "function" == typeof _.options.onRemoveNode && _.options.onRemoveNode({
                                                    node: q,
                                                    character: B
                                                }), q && q.parentNode.removeChild(q), H === m && I && n.unshift({
                                                    eventName: p,
                                                    eventArgs: {}
                                                });
                                            }
                                            break;
                                        case d:
                                            _.options.deleteSpeed = a.eventArgs.speed;
                                            break;
                                        case h:
                                            _.options.delay = a.eventArgs.delay;
                                            break;
                                        case y:
                                            _.options.cursor = a.eventArgs.cursor, _.state.elements.cursor.innerHTML = a.eventArgs.cursor;
                                    }
                                    _.options.loop && (a.eventName === p || a.eventArgs && a.eventArgs.temp || (_.state.calledEvents = [].concat(x(_.state.calledEvents), [
                                        a
                                    ]))), _.state.eventQueue = n, _.state.lastFrameTime = e;
                                }
                            }
                        }), t) if ("string" == typeof t) {
                            var g = document.querySelector(t);
                            if (!g) throw new Error("Could not find container element");
                            this.state.elements.container = g;
                        } else this.state.elements.container = t;
                        r && (this.options = w(w({}, this.options), r)), this.state.initialOptions = w({}, this.options), this.init();
                    }
                    var t, r;
                    return t = e, (r = [
                        {
                            key: "init",
                            value: function() {
                                var e, t;
                                this.setupWrapperElement(), this.addEventToQueue(y, {
                                    cursor: this.options.cursor
                                }, !0), this.addEventToQueue(c, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t = document.createElement("style")).appendChild(document.createTextNode(e)), document.head.appendChild(t), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
                            }
                        },
                        {
                            key: "logInDevMode",
                            value: function(e) {
                                this.options.devMode && console.log(e);
                            }
                        }
                    ]) && E(t.prototype, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e;
                }();
            },
            9935: (e)=>{
                e.exports = function() {
                    return !1;
                };
            }
        }, r = {};
        function n(e) {
            var o = r[e];
            if (void 0 !== o) return o.exports;
            var a = r[e] = {
                id: e,
                loaded: !1,
                exports: {}
            };
            return t[e].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports;
        }
        n.n = (e)=>{
            var t = e && e.__esModule ? ()=>e.default : ()=>e;
            return n.d(t, {
                a: t
            }), t;
        }, n.d = (e, t)=>{
            for(var r in t)n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            });
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        }(), n.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t), n.nmd = (e)=>(e.paths = [], e.children || (e.children = []), e);
        var o = {};
        return (()=>{
            "use strict";
            n.d(o, {
                default: ()=>h
            });
            var e = n(9155), t = n.n(e), r = n(9905), a = n(2404), i = n.n(a);
            function s(e) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }, s(e);
            }
            function u(e, t) {
                for(var r = 0; r < t.length; r++){
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, v(n.key), n);
                }
            }
            function c(e, t) {
                return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e;
                }, c(e, t);
            }
            function p(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function l() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                } catch (e) {}
                return (l = function() {
                    return !!e;
                })();
            }
            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                }, f(e);
            }
            function v(e) {
                var t = function(e) {
                    if ("object" != s(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, "string");
                        if ("object" != s(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return String(e);
                }(e);
                return "symbol" == s(t) ? t : t + "";
            }
            var d = function(e) {
                !function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && c(e, t);
                }(d, e);
                var n, o, a = function(e) {
                    var t = l();
                    return function() {
                        var r, n = f(e);
                        if (t) {
                            var o = f(this).constructor;
                            r = Reflect.construct(n, arguments, o);
                        } else r = n.apply(this, arguments);
                        return function(e, t) {
                            if (t && ("object" == s(t) || "function" == typeof t)) return t;
                            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                            return p(e);
                        }(this, r);
                    };
                }(d);
                function d() {
                    var e, t, r, n;
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, d);
                    for(var o = arguments.length, i = new Array(o), s = 0; s < o; s++)i[s] = arguments[s];
                    return t = p(e = a.call.apply(a, [
                        this
                    ].concat(i))), n = {
                        instance: null
                    }, (r = v(r = "state")) in t ? Object.defineProperty(t, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = n, e;
                }
                return n = d, (o = [
                    {
                        key: "componentDidMount",
                        value: function() {
                            var e = this, t = new r.default(this.typewriter, this.props.options);
                            this.setState({
                                instance: t
                            }, function() {
                                var r = e.props.onInit;
                                r && r(t);
                            });
                        }
                    },
                    {
                        key: "componentDidUpdate",
                        value: function(e) {
                            i()(this.props.options, e.options) || this.setState({
                                instance: new r.default(this.typewriter, this.props.options)
                            });
                        }
                    },
                    {
                        key: "componentWillUnmount",
                        value: function() {
                            this.state.instance && this.state.instance.stop();
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            var e = this, r = this.props.component;
                            return t().createElement(r, {
                                ref: function(t) {
                                    return e.typewriter = t;
                                },
                                className: "Typewriter",
                                "data-testid": "typewriter-wrapper"
                            });
                        }
                    }
                ]) && u(n.prototype, o), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), d;
            }(e.Component);
            d.defaultProps = {
                component: "div"
            };
            const h = d;
        })(), o.default;
    })()); //# sourceMappingURL=react.js.map
}}),
}]);

//# sourceMappingURL=_aeffe4bc._.js.map