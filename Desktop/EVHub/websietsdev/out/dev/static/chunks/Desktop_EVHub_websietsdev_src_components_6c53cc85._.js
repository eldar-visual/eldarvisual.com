(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Navbar = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ניהול גלילה לשינוי עיצוב הנאב-בר
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    // חסימת גלילה של הדף כשהתפריט פתוח (חוויית פרימיום)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
        }
    }["Navbar.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleResize = {
                "Navbar.useEffect.handleResize": ()=>{
                    if (window.innerWidth > 768 && isOpen) {
                        setIsOpen(false);
                    }
                }
            }["Navbar.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `menu-overlay ${isOpen ? 'active' : ''}`,
                onClick: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `navbar ${scrolled ? 'scrolled' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "navbar-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#hero",
                                className: "navbar-logo",
                                onClick: ()=>setIsOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "logo-image-wrapper",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/logob.webp",
                                            alt: "EV Logo",
                                            width: 32,
                                            height: 32,
                                            className: "logo-img"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                            lineNumber: 53,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "logo-text",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "brand-name",
                                                children: "EldarVisual"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "brand-tag",
                                                children: "WEB STUDIO"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "desktop-menu",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#services",
                                        className: "nav-link",
                                        children: "Services"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#process",
                                        className: "nav-link",
                                        children: "Process"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#portfolio",
                                        className: "nav-link",
                                        children: "Portfolio"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "navbar-cta",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "btn-talk",
                                    children: "Let's Talk"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-toggle",
                                onClick: ()=>setIsOpen(!isOpen),
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 28,
                                    strokeWidth: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 28,
                                    strokeWidth: 2.5
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                    lineNumber: 75,
                                    columnNumber: 59
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `mobile-menu ${isOpen ? 'active' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#services",
                                className: "mobile-link",
                                onClick: ()=>setIsOpen(false),
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#process",
                                className: "mobile-link",
                                onClick: ()=>setIsOpen(false),
                                children: "Process"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#portfolio",
                                className: "mobile-link",
                                onClick: ()=>setIsOpen(false),
                                children: "Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "mobile-link highlight",
                                onClick: ()=>setIsOpen(false),
                                children: "Let's Talk"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Navbar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Navbar, "nCBSUv8Br8Nf3cHNEGhEXMEalUE=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/EVHub/websietsdev/src/components/Hero.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrowIcon": "Hero-module__DGIvIa__arrowIcon",
  "blobBlue": "Hero-module__DGIvIa__blobBlue",
  "blobPurple": "Hero-module__DGIvIa__blobPurple",
  "blueHover": "Hero-module__DGIvIa__blueHover",
  "blurReveal": "Hero-module__DGIvIa__blurReveal",
  "browserAddressBar": "Hero-module__DGIvIa__browserAddressBar",
  "browserContentViewport": "Hero-module__DGIvIa__browserContentViewport",
  "browserDots": "Hero-module__DGIvIa__browserDots",
  "browserHeader": "Hero-module__DGIvIa__browserHeader",
  "browserMockup": "Hero-module__DGIvIa__browserMockup",
  "browserWindow": "Hero-module__DGIvIa__browserWindow",
  "btnLink": "Hero-module__DGIvIa__btnLink",
  "btnPrimary": "Hero-module__DGIvIa__btnPrimary",
  "codeBlock": "Hero-module__DGIvIa__codeBlock",
  "codeLine": "Hero-module__DGIvIa__codeLine",
  "codeRotateWrapper": "Hero-module__DGIvIa__codeRotateWrapper",
  "darkenHover": "Hero-module__DGIvIa__darkenHover",
  "dot": "Hero-module__DGIvIa__dot",
  "fadeInUp": "Hero-module__DGIvIa__fadeInUp",
  "flashHover": "Hero-module__DGIvIa__flashHover",
  "floatSmooth": "Hero-module__DGIvIa__floatSmooth",
  "gradientFlow": "Hero-module__DGIvIa__gradientFlow",
  "grayscaleHover": "Hero-module__DGIvIa__grayscaleHover",
  "greenHover": "Hero-module__DGIvIa__greenHover",
  "gridImgWrap": "Hero-module__DGIvIa__gridImgWrap",
  "gridImgs": "Hero-module__DGIvIa__gridImgs",
  "heroActions": "Hero-module__DGIvIa__heroActions",
  "heroBgBlobs": "Hero-module__DGIvIa__heroBgBlobs",
  "heroCodeBg": "Hero-module__DGIvIa__heroCodeBg",
  "heroContainer": "Hero-module__DGIvIa__heroContainer",
  "heroContent": "Hero-module__DGIvIa__heroContent",
  "heroSection": "Hero-module__DGIvIa__heroSection",
  "heroSubtitle": "Hero-module__DGIvIa__heroSubtitle",
  "heroSubtitleGroup": "Hero-module__DGIvIa__heroSubtitleGroup",
  "heroTextSide": "Hero-module__DGIvIa__heroTextSide",
  "heroTitle": "Hero-module__DGIvIa__heroTitle",
  "heroTitleGradient": "Hero-module__DGIvIa__heroTitleGradient",
  "heroVisualSide": "Hero-module__DGIvIa__heroVisualSide",
  "hueHover": "Hero-module__DGIvIa__hueHover",
  "imgCover": "Hero-module__DGIvIa__imgCover",
  "imgWrapper": "Hero-module__DGIvIa__imgWrapper",
  "itemContent": "Hero-module__DGIvIa__itemContent",
  "itemReverse": "Hero-module__DGIvIa__itemReverse",
  "itemTitle": "Hero-module__DGIvIa__itemTitle",
  "miniBtn": "Hero-module__DGIvIa__miniBtn",
  "mobileImageContainer": "Hero-module__DGIvIa__mobileImageContainer",
  "mockupSlideUp": "Hero-module__DGIvIa__mockupSlideUp",
  "overlayGrad": "Hero-module__DGIvIa__overlayGrad",
  "overlayText": "Hero-module__DGIvIa__overlayText",
  "plusMore": "Hero-module__DGIvIa__plusMore",
  "purpleHover": "Hero-module__DGIvIa__purpleHover",
  "scrollItem": "Hero-module__DGIvIa__scrollItem",
  "scrollVertical": "Hero-module__DGIvIa__scrollVertical",
  "scrollingContent": "Hero-module__DGIvIa__scrollingContent",
  "skeletonLine": "Hero-module__DGIvIa__skeletonLine",
  "textWrapper": "Hero-module__DGIvIa__textWrapper",
  "tokenComment": "Hero-module__DGIvIa__tokenComment",
  "tokenFunc": "Hero-module__DGIvIa__tokenFunc",
  "tokenKeyword": "Hero-module__DGIvIa__tokenKeyword",
  "tokenProp": "Hero-module__DGIvIa__tokenProp",
  "tokenPunct": "Hero-module__DGIvIa__tokenPunct",
  "tokenString": "Hero-module__DGIvIa__tokenString",
  "tokenVar": "Hero-module__DGIvIa__tokenVar",
  "trustLine": "Hero-module__DGIvIa__trustLine",
  "webmasterHeader": "Hero-module__DGIvIa__webmasterHeader",
  "zoomContainer": "Hero-module__DGIvIa__zoomContainer",
  "zoomHover": "Hero-module__DGIvIa__zoomHover",
});
}),
"[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/src/components/Hero.module.css [app-client] (css module)");
"use client";
;
;
;
;
const Keyword = ({ t })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokenKeyword,
        children: t
    }, void 0, false, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
        lineNumber: 8,
        columnNumber: 43
    }, ("TURBOPACK compile-time value", void 0));
_c = Keyword;
const Func = ({ t })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokenFunc,
        children: t
    }, void 0, false, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
        lineNumber: 9,
        columnNumber: 40
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Func;
const StringVal = ({ t })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokenString,
        children: t
    }, void 0, false, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
        lineNumber: 10,
        columnNumber: 45
    }, ("TURBOPACK compile-time value", void 0));
_c2 = StringVal;
const Var = ({ t })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokenVar,
        children: t
    }, void 0, false, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
        lineNumber: 11,
        columnNumber: 39
    }, ("TURBOPACK compile-time value", void 0));
_c3 = Var;
const Prop = ({ t })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokenProp,
        children: t
    }, void 0, false, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
        lineNumber: 12,
        columnNumber: 40
    }, ("TURBOPACK compile-time value", void 0));
_c4 = Prop;
const Punct = ({ t })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokenPunct,
        children: t
    }, void 0, false, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
        lineNumber: 13,
        columnNumber: 41
    }, ("TURBOPACK compile-time value", void 0));
_c5 = Punct;
const Comment = ({ t })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tokenComment,
        children: t
    }, void 0, false, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 43
    }, ("TURBOPACK compile-time value", void 0));
_c6 = Comment;
const CodeLine = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeLine,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = CodeLine;
const CodeBlock = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeBlock,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comment, {
                    t: "// Initializing core render loop with high-performance vectors"
                }, void 0, false, {
                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "const"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Func, {
                        t: "animateFrame"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 39
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "="
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 65
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "async"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 83
                    }, ("TURBOPACK compile-time value", void 0)),
                    " (",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "delta"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 106
                    }, ("TURBOPACK compile-time value", void 0)),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "context"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 125
                    }, ("TURBOPACK compile-time value", void 0)),
                    ") ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "=>"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 146
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "{"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 25,
                        columnNumber: 165
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "  ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "if"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    " (",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "!context"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 39
                    }, ("TURBOPACK compile-time value", void 0)),
                    ".",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "active"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 60
                    }, ("TURBOPACK compile-time value", void 0)),
                    " || ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "system"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 83
                    }, ("TURBOPACK compile-time value", void 0)),
                    ".",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "isPaused"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 102
                    }, ("TURBOPACK compile-time value", void 0)),
                    ") ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "return"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 125
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "Promise"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 148
                    }, ("TURBOPACK compile-time value", void 0)),
                    ".",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Func, {
                        t: "resolve"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 168
                    }, ("TURBOPACK compile-time value", void 0)),
                    "(",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "null"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 26,
                        columnNumber: 189
                    }, ("TURBOPACK compile-time value", void 0)),
                    ");"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: " "
            }, void 0, false, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "  ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comment, {
                        t: "// Calculate complex physics based on user interaction & velocity"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 28,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "  ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "const"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "velocity"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 41
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "="
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 62
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "physicsEngine"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 80
                    }, ("TURBOPACK compile-time value", void 0)),
                    ".",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Func, {
                        t: "calculateVectors"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 106
                    }, ("TURBOPACK compile-time value", void 0)),
                    "(",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "delta"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 136
                    }, ("TURBOPACK compile-time value", void 0)),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "{"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 155
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "    ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "friction"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 30,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    ": ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "0.94"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 30,
                        columnNumber: 44
                    }, ("TURBOPACK compile-time value", void 0)),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "tension"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 30,
                        columnNumber: 62
                    }, ("TURBOPACK compile-time value", void 0)),
                    ": ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "120"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 30,
                        columnNumber: 84
                    }, ("TURBOPACK compile-time value", void 0)),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "precision"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 30,
                        columnNumber: 101
                    }, ("TURBOPACK compile-time value", void 0)),
                    ": ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StringVal, {
                        t: "'high-priority'"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 30,
                        columnNumber: 125
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "    ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "mass"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    ": ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "config"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 40
                    }, ("TURBOPACK compile-time value", void 0)),
                    ".",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "heavy"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 59
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ? ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "50.5"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 80
                    }, ("TURBOPACK compile-time value", void 0)),
                    " : ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "10.2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 99
                    }, ("TURBOPACK compile-time value", void 0)),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "drag"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 117
                    }, ("TURBOPACK compile-time value", void 0)),
                    ": ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "0.05"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 136
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "  ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "}"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 32,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    ");"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: " "
            }, void 0, false, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "  ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "await"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "renderer"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 41
                    }, ("TURBOPACK compile-time value", void 0)),
                    ".",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Func, {
                        t: "updateSceneGraph"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 62
                    }, ("TURBOPACK compile-time value", void 0)),
                    "(",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "scene"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 92
                    }, ("TURBOPACK compile-time value", void 0)),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "camera"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 111
                    }, ("TURBOPACK compile-time value", void 0)),
                    ", ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "velocity"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 34,
                        columnNumber: 131
                    }, ("TURBOPACK compile-time value", void 0)),
                    ");"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: " "
            }, void 0, false, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "  ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "return"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 36,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ("
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "    ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "<"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "motion.div"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 36
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "initial"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 59
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "="
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 79
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "{"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 96
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "false"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 111
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "}"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 132
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "animate"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 148
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "="
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 168
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "{"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 185
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "velocity"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 200
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "}"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 220
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: ">"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 235
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "      ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "<"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "Masterpiece"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 38
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "pixelPerfect"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 62
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "="
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 87
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "{"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 104
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "true"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 119
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "}"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 139
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Prop, {
                        t: "renderMode"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 155
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Keyword, {
                        t: "="
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 178
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StringVal, {
                        t: "'3d-accelerated'"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 195
                    }, ("TURBOPACK compile-time value", void 0)),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "/>"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 38,
                        columnNumber: 230
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    "    ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "</"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Var, {
                        t: "motion.div"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 39,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: ">"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 39,
                        columnNumber: 59
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: "  );"
            }, void 0, false, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeLine, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Punct, {
                        t: "}"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    ";"
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
_c8 = CodeBlock;
function Hero({ title, subtitle, ctaText, trustLine } = {}) {
    const scrollToSection = (e, id)=>{
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSection,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroBgBlobs,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blobBlue
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blobPurple
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroCodeBg,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].codeRotateWrapper,
                    children: Array.from({
                        length: 2
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeBlock, {}, i, false, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                            lineNumber: 75,
                            columnNumber: 14
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                    lineNumber: 73,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileImageContainer,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/floatForWeb.webp",
                            alt: "UI/UX Design Illustration",
                            width: 600,
                            height: 400,
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroTextSide,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroTitle,
                                children: title ? title : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "title-part-1",
                                            children: "Modern Websites."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "title-part-2",
                                            children: "Clean Code."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `title-part-3 ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroTitleGradient}`,
                                            children: "Real Results."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSubtitleGroup} delay1`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroSubtitle,
                                    children: subtitle ? subtitle : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: "High-performance websites built with modern frameworks. Faster loading, better UX, and built for long-term growth. No templates, no bloat."
                                    }, void 0, false)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroActions} delay2`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>scrollToSection(e, 'contact'),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnPrimary,
                                        children: ctaText ? ctaText : "Start with a Website Review"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>scrollToSection(e, 'portfolio'),
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnLink} group`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "View Projects"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 16,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowIcon
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trustLine,
                                children: trustLine ? trustLine : "Performance-focused | UX-driven | Built to last"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].heroVisualSide,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserMockup,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserWindow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserHeader,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserDots,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserAddressBar,
                                                children: "eldarvisual.com"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Hero$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browserContentViewport
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                            lineNumber: 133,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Hero.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c9 = Hero;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Keyword");
__turbopack_context__.k.register(_c1, "Func");
__turbopack_context__.k.register(_c2, "StringVal");
__turbopack_context__.k.register(_c3, "Var");
__turbopack_context__.k.register(_c4, "Prop");
__turbopack_context__.k.register(_c5, "Punct");
__turbopack_context__.k.register(_c6, "Comment");
__turbopack_context__.k.register(_c7, "CodeLine");
__turbopack_context__.k.register(_c8, "CodeBlock");
__turbopack_context__.k.register(_c9, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/EVHub/websietsdev/src/components/Services.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active-mobile": "Services-module__oBdE1q__active-mobile",
  "btn-start-project": "Services-module__oBdE1q__btn-start-project",
  "service-card": "Services-module__oBdE1q__service-card",
  "service-card-desc": "Services-module__oBdE1q__service-card-desc",
  "service-card-title": "Services-module__oBdE1q__service-card-title",
  "service-features": "Services-module__oBdE1q__service-features",
  "service-features-list": "Services-module__oBdE1q__service-features-list",
  "service-features-title": "Services-module__oBdE1q__service-features-title",
  "service-icon-box": "Services-module__oBdE1q__service-icon-box",
  "services": "Services-module__oBdE1q__services",
  "services-bg-pattern": "Services-module__oBdE1q__services-bg-pattern",
  "services-container": "Services-module__oBdE1q__services-container",
  "services-cta": "Services-module__oBdE1q__services-cta",
  "services-grid": "Services-module__oBdE1q__services-grid",
  "services-header": "Services-module__oBdE1q__services-header",
  "services-title": "Services-module__oBdE1q__services-title",
  "services-title-gradient": "Services-module__oBdE1q__services-title-gradient",
});
}),
"[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Services$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/src/components/Services.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const services = [
    {
        id: 1,
        title: "Custom Web Development",
        description: "Lightning-fast websites built for growth. We use Next.js & React to ensure security, SEO dominance, and scalability.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
            className: "service-icon-svg"
        }, void 0, false, {
            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
            lineNumber: 20,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        features: [
            "Next.js & React",
            "Server Side Rendering",
            "API Integration",
            "Scalable Architecture"
        ]
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Interfaces that don't just look good—they convert. We design user journeys that turn visitors into customers.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
            className: "service-icon-svg"
        }, void 0, false, {
            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
            lineNumber: 27,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        features: [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Design Systems"
        ]
    },
    {
        id: 3,
        title: "Website Revamp",
        description: "Transform outdated sites into modern masterpieces. Improve speed, trust, and usability without losing your SEO history.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
            className: "service-icon-svg"
        }, void 0, false, {
            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
            lineNumber: 34,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        features: [
            "Performance Audit",
            "Modern Stack Migration",
            "SEO Preservation",
            "Data Migration"
        ]
    },
    {
        id: 4,
        title: "Webmaster Services",
        description: "Never worry about updates again. We handle maintenance, security patches, and content changes so you can focus on business.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
            className: "service-icon-svg"
        }, void 0, false, {
            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
            lineNumber: 41,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        features: [
            "24/7 Monitoring",
            "Security Patches",
            "Content Updates",
            "Regular Backups"
        ]
    },
    {
        id: 5,
        title: "E-Commerce",
        description: "Stores designed to sell. Secure payments, inventory management, and a seamless checkout experience.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
            className: "service-icon-svg"
        }, void 0, false, {
            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
            lineNumber: 48,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        features: [
            "Shopify / Custom",
            "Payment Gateways",
            "Inventory Sync",
            "Conversion Optimization"
        ]
    },
    {
        id: 6,
        title: "SEO & Performance",
        description: "Rank higher, load faster. Comprehensive optimization of site structure and core web vitals.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
            className: "service-icon-svg"
        }, void 0, false, {
            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
            lineNumber: 55,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        features: [
            "Technical SEO",
            "Core Web Vitals",
            "Keyword Strategy",
            "Speed Optimization"
        ]
    }
];
const Services = ()=>{
    _s();
    // ניהול הכרטיס הפעיל במובייל
    const [activeCard, setActiveCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleCardClick = (id)=>{
        setActiveCard((prev)=>prev === id ? null : id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "services-bg-pattern",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/services.webp",
                    alt: "",
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "services-container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "services-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "services-subtitle",
                                children: "OUR EXPERTISE"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "services-title",
                                children: [
                                    "Built for ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "services-title-gradient",
                                        children: "Scale."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                        lineNumber: 80,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "services-grid",
                        children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `service-card ${activeCard === service.id ? 'active-mobile' : ''}`,
                                onClick: ()=>handleCardClick(service.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "service-icon-box",
                                        children: service.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "service-card-title",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "service-card-desc",
                                        children: service.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "service-features",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "service-features-title",
                                                children: "WHAT'S INCLUDED"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "service-features-list",
                                                children: service.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: feature
                                                    }, idx, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, service.id, true, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "services-cta",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            className: "btn-start-project",
                            children: [
                                "Get a Free Website Review",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "cta-icon-svg"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Services.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Services, "fmiiFJLr4aACkSc0M7H3di7yZd8=");
_c = Services;
const __TURBOPACK__default__export__ = Services;
var _c;
__turbopack_context__.k.register(_c, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/EVHub/websietsdev/src/components/Process.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "-left-1.5": "Process-module__6BaUMG__-left-1.5",
  "-right-1.5": "Process-module__6BaUMG__-right-1.5",
  "-translate-y-1/2": "Process-module__6BaUMG__-translate-y-1/2",
  "absolute": "Process-module__6BaUMG__absolute",
  "active": "Process-module__6BaUMG__active",
  "bar": "Process-module__6BaUMG__bar",
  "bg-blue": "Process-module__6BaUMG__bg-blue",
  "blink": "Process-module__6BaUMG__blink",
  "card-base": "Process-module__6BaUMG__card-base",
  "card-blue": "Process-module__6BaUMG__card-blue",
  "card-green": "Process-module__6BaUMG__card-green",
  "card-purple-bg": "Process-module__6BaUMG__card-purple-bg",
  "card-purple-front": "Process-module__6BaUMG__card-purple-front",
  "card-purple-wrapper": "Process-module__6BaUMG__card-purple-wrapper",
  "card-yellow": "Process-module__6BaUMG__card-yellow",
  "card-yellow-wrapper": "Process-module__6BaUMG__card-yellow-wrapper",
  "content-side": "Process-module__6BaUMG__content-side",
  "cursor-blink": "Process-module__6BaUMG__cursor-blink",
  "dashed-border": "Process-module__6BaUMG__dashed-border",
  "dot": "Process-module__6BaUMG__dot",
  "dot-green": "Process-module__6BaUMG__dot-green",
  "dot-red": "Process-module__6BaUMG__dot-red",
  "dot-yellow": "Process-module__6BaUMG__dot-yellow",
  "duration-500": "Process-module__6BaUMG__duration-500",
  "floating-icon": "Process-module__6BaUMG__floating-icon",
  "gradient-text": "Process-module__6BaUMG__gradient-text",
  "graph-bars": "Process-module__6BaUMG__graph-bars",
  "h-3": "Process-module__6BaUMG__h-3",
  "header-wrapper": "Process-module__6BaUMG__header-wrapper",
  "hidden": "Process-module__6BaUMG__hidden",
  "hover:-translate-y-2": "Process-module__6BaUMG__hover:-translate-y-2",
  "icon-wrap": "Process-module__6BaUMG__icon-wrap",
  "main-title": "Process-module__6BaUMG__main-title",
  "md:block": "Process-module__6BaUMG__md:block",
  "process": "Process-module__6BaUMG__process",
  "process-container": "Process-module__6BaUMG__process-container",
  "relative": "Process-module__6BaUMG__relative",
  "reverse": "Process-module__6BaUMG__reverse",
  "rounded-full": "Process-module__6BaUMG__rounded-full",
  "skeleton-box": "Process-module__6BaUMG__skeleton-box",
  "skeleton-box-container": "Process-module__6BaUMG__skeleton-box-container",
  "skeleton-title": "Process-module__6BaUMG__skeleton-title",
  "spin": "Process-module__6BaUMG__spin",
  "step-desc": "Process-module__6BaUMG__step-desc",
  "step-header": "Process-module__6BaUMG__step-header",
  "step-num": "Process-module__6BaUMG__step-num",
  "step-row": "Process-module__6BaUMG__step-row",
  "step-title": "Process-module__6BaUMG__step-title",
  "steps-wrapper": "Process-module__6BaUMG__steps-wrapper",
  "sub-title": "Process-module__6BaUMG__sub-title",
  "terminal-dots": "Process-module__6BaUMG__terminal-dots",
  "text-blue": "Process-module__6BaUMG__text-blue",
  "text-green": "Process-module__6BaUMG__text-green",
  "text-green-300": "Process-module__6BaUMG__text-green-300",
  "text-green-400": "Process-module__6BaUMG__text-green-400",
  "text-purple": "Process-module__6BaUMG__text-purple",
  "text-slate-500": "Process-module__6BaUMG__text-slate-500",
  "text-yellow": "Process-module__6BaUMG__text-yellow",
  "top-1/2": "Process-module__6BaUMG__top-1/2",
  "transform": "Process-module__6BaUMG__transform",
  "transition-transform": "Process-module__6BaUMG__transition-transform",
  "visual-side": "Process-module__6BaUMG__visual-side",
  "w-3": "Process-module__6BaUMG__w-3",
  "z-20": "Process-module__6BaUMG__z-20",
});
}),
"[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/code.js [app-client] (ecmascript) <export default as Code>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Process$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/src/components/Process.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Process() {
    _s();
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleStepClick = (stepId)=>{
        setActiveStep(stepId);
        // חזרה אוטומטית למצב התחלתי אחרי 2 שניות
        setTimeout(()=>{
            setActiveStep(null);
        }, 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "process",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "process-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "header-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sub-title",
                            children: "The Workflow"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "main-title",
                            children: [
                                "From Concept to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "Completion."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                    lineNumber: 25,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "steps-wrapper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `step-row ${activeStep === 1 ? 'active' : ''}`,
                            onClick: ()=>handleStepClick(1),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "visual-side",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-base card-blue",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-blue rounded-full shadow-[0_0_10px_#3B82F6] z-20"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 36,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "graph-bars",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bar bg-slate-800",
                                                        style: {
                                                            height: '40%'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 40,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bar bg-slate-700",
                                                        style: {
                                                            height: '60%'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bar bg-slate-800",
                                                        style: {
                                                            height: '30%'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bar bg-blue",
                                                        style: {
                                                            height: '80%',
                                                            boxShadow: '0 0 15px rgba(37,99,235,0.5)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 39,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "floating-icon",
                                                style: {
                                                    top: '-20px',
                                                    right: '-20px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                    size: 20,
                                                    className: "text-blue"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 22
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 47,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-side",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "step-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "step-num text-blue",
                                                    children: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                            size: 24,
                                                            className: "text-blue"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "step-title",
                                                            children: "Discovery & Strategy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 18
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "step-desc",
                                            children: "We dive deep into your vision, analyzing competitors and defining your target audience to build a solid foundation."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `step-row reverse ${activeStep === 2 ? 'active' : ''}`,
                            onClick: ()=>handleStepClick(2),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "visual-side",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-purple-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:block absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#A855F7] z-20",
                                                style: {
                                                    background: '#A855F7'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 72,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-purple-bg"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 74,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-purple-front",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "skeleton-title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 22
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "skeleton-box-container",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "skeleton-box"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 26
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "skeleton-box"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 26
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 75,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "floating-icon",
                                                style: {
                                                    bottom: '-16px',
                                                    right: '-16px',
                                                    background: '#9333EA',
                                                    borderColor: '#9333EA'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"], {
                                                    size: 20,
                                                    style: {
                                                        color: 'white'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 22
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 84,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-side",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "step-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "step-num text-purple",
                                                    children: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"], {
                                                            size: 24,
                                                            className: "text-purple"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "step-title",
                                                            children: "UI/UX Design"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 18
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                            lineNumber: 91,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "step-desc",
                                            children: "High-fidelity wireframes and stunning interfaces that provide an intuitive and seamless user journey."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                            lineNumber: 98,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `step-row ${activeStep === 3 ? 'active' : ''}`,
                            onClick: ()=>handleStepClick(3),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "visual-side",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-base card-green",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "terminal-dots",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "dot dot-red"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "dot dot-yellow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "dot dot-green"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 text-slate-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "$ npm run build"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-green-400",
                                                        children: "> Optimized build..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: 'white'
                                                        },
                                                        children: "Done in 0.4s ⚡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "cursor-blink"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "floating-icon",
                                                style: {
                                                    bottom: '-12px',
                                                    left: '-12px',
                                                    background: '#14532d',
                                                    borderColor: '#22c55e'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                    size: 20,
                                                    className: "text-green-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 22
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                        lineNumber: 107,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-side",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "step-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "step-num text-green",
                                                    children: "3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code$3e$__["Code"], {
                                                            size: 24,
                                                            className: "text-green"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "step-title",
                                                            children: "Development"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 18
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                            lineNumber: 130,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "step-desc",
                                            children: "Clean, semantic code using Next.js. We prioritize speed, security, and industrial-grade scalability."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                            lineNumber: 137,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `step-row reverse ${activeStep === 4 ? 'active' : ''}`,
                            onClick: ()=>handleStepClick(4),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "visual-side",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-yellow-wrapper",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-base card-yellow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "dashed-border"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative transform hover:-translate-y-2 transition-transform duration-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                            size: 48,
                                                            className: "text-yellow",
                                                            style: {
                                                                filter: 'drop-shadow(0 0 10px rgba(250,204,21,0.5))'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 147,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "floating-icon",
                                                style: {
                                                    bottom: '-12px',
                                                    right: '-12px',
                                                    background: '#422006',
                                                    borderColor: '#EAB308'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                    size: 20,
                                                    className: "text-yellow"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                lineNumber: 157,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                        lineNumber: 146,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "content-side",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "step-header",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "step-num text-yellow",
                                                    children: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 18
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-wrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                            size: 24,
                                                            className: "text-yellow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "step-title",
                                                            children: "Launch & Growth"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 18
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                            lineNumber: 164,
                                            columnNumber: 16
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "step-desc",
                                            children: "Liftoff. We deploy your masterpiece to the world and provide continuous optimization for long-term growth."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                            lineNumber: 171,
                                            columnNumber: 16
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Process.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Process, "wZD0kSzyJSg5SNRQCdoU5+SneC8=");
_c = Process;
var _c;
__turbopack_context__.k.register(_c, "Process");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/EVHub/websietsdev/src/components/Contact.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "contact-clickable-area": "Contact-module__FtRhrW__contact-clickable-area",
  "contact-container": "Contact-module__FtRhrW__contact-container",
  "contact-desc": "Contact-module__FtRhrW__contact-desc",
  "contact-details": "Contact-module__FtRhrW__contact-details",
  "contact-email-row": "Contact-module__FtRhrW__contact-email-row",
  "contact-grid": "Contact-module__FtRhrW__contact-grid",
  "contact-headline": "Contact-module__FtRhrW__contact-headline",
  "contact-item": "Contact-module__FtRhrW__contact-item",
  "contact-section": "Contact-module__FtRhrW__contact-section",
  "contact-text": "Contact-module__FtRhrW__contact-text",
  "copy-badge-btn": "Contact-module__FtRhrW__copy-badge-btn",
  "email-address-text": "Contact-module__FtRhrW__email-address-text",
  "email-display-wrapper": "Contact-module__FtRhrW__email-display-wrapper",
  "form-group": "Contact-module__FtRhrW__form-group",
  "form-input": "Contact-module__FtRhrW__form-input",
  "form-label": "Contact-module__FtRhrW__form-label",
  "form-textarea": "Contact-module__FtRhrW__form-textarea",
  "form-wrapper": "Contact-module__FtRhrW__form-wrapper",
  "highlight-purple": "Contact-module__FtRhrW__highlight-purple",
  "icon-box": "Contact-module__FtRhrW__icon-box",
  "info-side": "Contact-module__FtRhrW__info-side",
  "inline-copy-btn": "Contact-module__FtRhrW__inline-copy-btn",
  "modal-close": "Contact-module__FtRhrW__modal-close",
  "modal-content": "Contact-module__FtRhrW__modal-content",
  "modal-divider": "Contact-module__FtRhrW__modal-divider",
  "modal-overlay": "Contact-module__FtRhrW__modal-overlay",
  "modal-title": "Contact-module__FtRhrW__modal-title",
  "placeholder-active": "Contact-module__FtRhrW__placeholder-active",
  "provider-btn": "Contact-module__FtRhrW__provider-btn",
  "provider-list": "Contact-module__FtRhrW__provider-list",
  "section-label": "Contact-module__FtRhrW__section-label",
  "submit-btn": "Contact-module__FtRhrW__submit-btn",
  "success-desc": "Contact-module__FtRhrW__success-desc",
  "success-message": "Contact-module__FtRhrW__success-message",
  "success-title": "Contact-module__FtRhrW__success-title",
});
}),
"[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"); // הוספנו useState
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$src$2f$components$2f$Contact$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/src/components/Contact.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>"); // הוספנו X ו-ExternalLink
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f40$formspree$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/EVHub/websietsdev/node_modules/@formspree/react/dist/index.mjs [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Contact = ()=>{
    _s();
    const [state, handleSubmit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f40$formspree$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useForm"])("xlggjajo");
    const [isEmailModalOpen, setIsEmailModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // זה התיקון הקריטי - ה-State חייב להיות כאן למעלה
    const [companyType, setCompanyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const emailAddress = "aviram@eldarvisual.com";
    const handleCopy = ()=>{
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    // =============================================
    // פונקציה לפתיחת הפופ-אפ
    const handleEmailClick = (e)=>{
        e.preventDefault();
        setIsEmailModalOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "contact-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "contact-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "info-side",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "section-label",
                                    children: "Let's Talk"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "contact-headline",
                                    children: "Build. Revamp."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "contact-headline highlight-purple",
                                    children: "Manage."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "contact-desc",
                                    children: "From concept to completion, and ongoing growth. We handle everything your website needs to succeed—so you can focus on your business."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "contact-desc",
                                    children: "We are currently accepting new projects. Get in touch with us to discuss your vision and how we can help achieve it."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-details",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-item contact-email-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "contact-clickable-area",
                                                    onClick: handleEmailClick,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "icon-box",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                                lineNumber: 57,
                                                                columnNumber: 9
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "contact-info",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "contact-text",
                                                                children: emailAddress
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                                lineNumber: 60,
                                                                columnNumber: 10
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        handleCopy();
                                                    },
                                                    className: "inline-copy-btn",
                                                    children: [
                                                        copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: copied ? "Copied!" : "Copy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 7
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                            lineNumber: 54,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "tel:+972546786874",
                                            className: "contact-item",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "icon-box",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 7
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "contact-info",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "contact-text",
                                                        children: "+972 54 678 6874"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 8
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 5
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                            lineNumber: 73,
                                            columnNumber: 3
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-wrapper",
                            children: state.succeeded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "success-message",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        size: 48,
                                        color: "#4ade80",
                                        style: {
                                            marginBottom: '1rem'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                        lineNumber: 87,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "success-title",
                                        children: "Message Sent!"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                        lineNumber: 88,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "success-desc",
                                        children: "Thanks for reaching out. We'll get back to you shortly."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                        lineNumber: 89,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "form-label",
                                                children: "Full Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 96,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                name: "name",
                                                className: "form-input",
                                                placeholder: "John Doe",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 97,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f40$formspree$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ValidationError"], {
                                                prefix: "Name",
                                                field: "name",
                                                errors: state.errors
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 98,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                        lineNumber: 95,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "form-label",
                                                children: "Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 101,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                id: "email",
                                                name: "email",
                                                className: "form-input",
                                                placeholder: "john@exam ple.com",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 102,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                        lineNumber: 100,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "website",
                                                className: "form-label",
                                                children: "Website URL (For Free Review)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 106,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "url",
                                                id: "website",
                                                name: "website",
                                                className: "form-input",
                                                placeholder: "https://your-site.com",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 107,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                        lineNumber: 105,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "type",
                                                className: "form-label",
                                                children: "Company Type"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 111,
                                                columnNumber: 5
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                id: "type",
                                                name: "type",
                                                /* ה-className משתנה לאפור אם ה-State ריק */ className: `form-input ${companyType === "" ? "placeholder-active" : ""}`,
                                                required: true,
                                                value: companyType,
                                                onChange: (e)=>setCompanyType(e.target.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        disabled: true,
                                                        hidden: true,
                                                        children: "Choose company type..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "startup",
                                                        children: "Tech Startup"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "service",
                                                        children: "Service Business (Law/Health/etc.)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ecommerce",
                                                        children: "E-commerce / Store"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "personal",
                                                        children: "Portfolio / Personal Brand"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "other",
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 9
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 112,
                                                columnNumber: 5
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                        lineNumber: 110,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "message",
                                                className: "form-label",
                                                children: "What is your main goal?"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 131,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "message",
                                                name: "message",
                                                className: "form-textarea",
                                                placeholder: "Boost speed, improve design, more leads...",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                lineNumber: 132,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                        lineNumber: 130,
                                        columnNumber: 5
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "submit-btn",
                                        disabled: state.submitting,
                                        children: state.submitting ? 'Analyzing...' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Get My Free Audit ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    size: 16,
                                                    style: {
                                                        marginLeft: '8px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 66
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                        lineNumber: 135,
                                        columnNumber: 5
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isEmailModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-overlay",
                onClick: ()=>setIsEmailModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-content",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "modal-close",
                            onClick: ()=>setIsEmailModalOpen(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                            lineNumber: 148,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "modal-title",
                            children: "Choose Email Provider"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "provider-list",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "provider-btn",
                                    children: [
                                        "Gmail ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                            lineNumber: 162,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://outlook.live.com/mail/0/deeplink/compose?to=${emailAddress}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "provider-btn",
                                    children: [
                                        "Outlook / Hotmail ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                            lineNumber: 172,
                                            columnNumber: 35
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `https://compose.mail.yahoo.com/?to=${emailAddress}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "provider-btn",
                                    children: [
                                        "Yahoo Mail ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                            lineNumber: 182,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${emailAddress}`,
                                    className: "provider-btn",
                                    style: {
                                        borderColor: '#A855F7',
                                        color: '#A855F7'
                                    },
                                    children: "Open Default Mail App"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                            lineNumber: 154,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/EVHub/websietsdev/src/components/Contact.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Contact, "2+3HCOKHDvBieMWsQ6AikFYjLek=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$EVHub$2f$websietsdev$2f$node_modules$2f40$formspree$2f$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useForm"]
    ];
});
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_EVHub_websietsdev_src_components_6c53cc85._.js.map