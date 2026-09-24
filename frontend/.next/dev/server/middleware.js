"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "proxy";
exports.ids = ["proxy"];
exports.modules = {

/***/ "(middleware)/./lib/supabase/proxy.ts":
/*!*******************************!*\
  !*** ./lib/supabase/proxy.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateSession: () => (/* binding */ updateSession)\n/* harmony export */ });\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/ssr */ \"(middleware)/./node_modules/@supabase/ssr/dist/module/createServerClient.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/api/server.js\");\n\n\nasync function updateSession(request) {\n    let supabaseResponse = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next({\n        request\n    });\n    const supabase = (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_1__.createServerClient)(\"https://txdssxdxhrjrxanwyumu.supabase.co\", \"sb_publishable_R6euzcgv3fUm9kkbSbPOfw_pGqhwmdb\", {\n        cookies: {\n            getAll () {\n                return request.cookies.getAll();\n            },\n            setAll (cookiesToSet, headers) {\n                cookiesToSet.forEach(({ name, value, options })=>{\n                    request.cookies.set(name, value);\n                    supabaseResponse.cookies.set(name, value, options);\n                });\n                if (headers) {\n                    Object.entries(headers).forEach(([key, value])=>{\n                        supabaseResponse.headers.set(key, value);\n                    });\n                }\n            }\n        }\n    });\n    await supabase.auth.getClaims();\n    return supabaseResponse;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbGliL3N1cGFiYXNlL3Byb3h5LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUNVO0FBRXRELGVBQWVFLGNBQWNDLE9BQW9CO0lBQ3RELElBQUlDLG1CQUFtQkgscURBQVlBLENBQUNJLElBQUksQ0FBQztRQUN2Q0Y7SUFDRjtJQUVBLE1BQU1HLFdBQVdOLGlFQUFrQkEsQ0FDakNPLDBDQUFvQyxFQUNwQ0EsZ0RBQWdELEVBQ2hEO1FBQ0VJLFNBQVM7WUFDUEM7Z0JBQ0UsT0FBT1QsUUFBUVEsT0FBTyxDQUFDQyxNQUFNO1lBQy9CO1lBQ0FDLFFBQU9DLFlBQVksRUFBRUMsT0FBTztnQkFDMUJELGFBQWFFLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUU7b0JBQzVDaEIsUUFBUVEsT0FBTyxDQUFDUyxHQUFHLENBQUNILE1BQU1DO29CQUMxQmQsaUJBQWlCTyxPQUFPLENBQUNTLEdBQUcsQ0FBQ0gsTUFBTUMsT0FBT0M7Z0JBQzVDO2dCQUVBLElBQUlKLFNBQVM7b0JBQ1hNLE9BQU9DLE9BQU8sQ0FBQ1AsU0FBU0MsT0FBTyxDQUFDLENBQUMsQ0FBQ08sS0FBS0wsTUFBTTt3QkFDM0NkLGlCQUFpQlcsT0FBTyxDQUFDSyxHQUFHLENBQUNHLEtBQUtMO29CQUNwQztnQkFDRjtZQUNGO1FBQ0Y7SUFDRjtJQUdGLE1BQU1aLFNBQVNrQixJQUFJLENBQUNDLFNBQVM7SUFFN0IsT0FBT3JCO0FBQ1QiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcOTE4OTdcXERlc2t0b3BcXFByb2plY3RzXFxzb2hhbi1zb2Z0LXRlY2hcXGZyb250ZW5kXFxsaWJcXHN1cGFiYXNlXFxwcm94eS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2ZXJDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3NzclwiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UsIHR5cGUgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XHJcbiAgbGV0IHN1cGFiYXNlUmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UubmV4dCh7XHJcbiAgICByZXF1ZXN0LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZVNlcnZlckNsaWVudChcclxuICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCEsXHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9QVUJMSVNIQUJMRV9LRVkhLFxyXG4gICAge1xyXG4gICAgICBjb29raWVzOiB7XHJcbiAgICAgICAgZ2V0QWxsKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3QuY29va2llcy5nZXRBbGwoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEFsbChjb29raWVzVG9TZXQsIGhlYWRlcnMpIHtcclxuICAgICAgICAgIGNvb2tpZXNUb1NldC5mb3JFYWNoKCh7IG5hbWUsIHZhbHVlLCBvcHRpb25zIH0pID0+IHtcclxuICAgICAgICAgICAgcmVxdWVzdC5jb29raWVzLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHN1cGFiYXNlUmVzcG9uc2UuY29va2llcy5zZXQobmFtZSwgdmFsdWUsIG9wdGlvbnMpO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKGhlYWRlcnMpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoaGVhZGVycykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAgICAgICAgICAgc3VwYWJhc2VSZXNwb25zZS5oZWFkZXJzLnNldChrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldENsYWltcygpO1xyXG5cclxuICByZXR1cm4gc3VwYWJhc2VSZXNwb25zZTtcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVTZXJ2ZXJDbGllbnQiLCJOZXh0UmVzcG9uc2UiLCJ1cGRhdGVTZXNzaW9uIiwicmVxdWVzdCIsInN1cGFiYXNlUmVzcG9uc2UiLCJuZXh0Iiwic3VwYWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfUFVCTElTSEFCTEVfS0VZIiwiY29va2llcyIsImdldEFsbCIsInNldEFsbCIsImNvb2tpZXNUb1NldCIsImhlYWRlcnMiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwib3B0aW9ucyIsInNldCIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJhdXRoIiwiZ2V0Q2xhaW1zIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./lib/supabase/proxy.ts\n");

/***/ }),

/***/ "(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5C91897%5CDesktop%5CProjects%5Csohan-soft-tech%5Cfrontend%5Cproxy.ts&page=%2Fproxy&rootDir=C%3A%5CUsers%5C91897%5CDesktop%5CProjects%5Csohan-soft-tech%5Cfrontend&matchers=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5C91897%5CDesktop%5CProjects%5Csohan-soft-tech%5Cfrontend%5Cproxy.ts&page=%2Fproxy&rootDir=C%3A%5CUsers%5C91897%5CDesktop%5CProjects%5Csohan-soft-tech%5Cfrontend&matchers=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_dist_build_adapter_setup_node_env_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/adapter/setup-node-env.external */ \"next/dist/build/adapter/setup-node-env.external\");\n/* harmony import */ var next_dist_build_adapter_setup_node_env_external__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_build_adapter_setup_node_env_external__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/globals */ \"(middleware)/./node_modules/next/dist/server/web/globals.js\");\n/* harmony import */ var next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/adapter */ \"(middleware)/./node_modules/next/dist/server/web/adapter.js\");\n/* harmony import */ var next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_server_lib_incremental_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/server/lib/incremental-cache */ \"(middleware)/./node_modules/next/dist/server/lib/incremental-cache/index.js\");\n/* harmony import */ var next_dist_server_lib_incremental_cache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_incremental_cache__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _proxy_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxy.ts */ \"(middleware)/./proxy.ts\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dist/client/components/is-next-router-error */ \"(middleware)/./node_modules/next/dist/client/components/is-next-router-error.js\");\n/* harmony import */ var next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/web/utils */ \"(middleware)/./node_modules/next/dist/server/web/utils.js\");\n/* harmony import */ var next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nconst incrementalCacheHandler = null\n// Import the userland code.\n;\n\n\n\nconst mod = {\n    ..._proxy_ts__WEBPACK_IMPORTED_MODULE_4__\n};\nconst page = \"/proxy\";\nconst isProxy = page === '/proxy' || page === '/src/proxy';\nconst handlerUserland = (isProxy ? mod.proxy : mod.middleware) || mod.default;\nclass ProxyMissingExportError extends Error {\n    constructor(message){\n        super(message);\n        Object.defineProperty(this, \"__NEXT_ERROR_CODE\", {\n            value: \"E394\",\n            enumerable: false,\n            configurable: true\n        });\n        // Stack isn't useful here, remove it considering it spams logs during development.\n        this.stack = '';\n    }\n}\n// TODO: This spams logs during development. Find a better way to handle this.\n// Removing this will spam \"fn is not a function\" logs which is worse.\nif (typeof handlerUserland !== 'function') {\n    throw new ProxyMissingExportError(`The ${isProxy ? 'Proxy' : 'Middleware'} file \"${page}\" must export a function named \\`${isProxy ? 'proxy' : 'middleware'}\\` or a default function.`);\n}\n// Proxy will only sent out the FetchEvent to next server,\n// so load instrumentation module here and track the error inside proxy module.\nfunction errorHandledHandler(fn) {\n    return async (...args)=>{\n        try {\n            return await fn(...args);\n        } catch (err) {\n            // In development, error the navigation API usage in runtime,\n            // since it's not allowed to be used in proxy as it's outside of react component tree.\n            if (true) {\n                if ((0,next_dist_client_components_is_next_router_error__WEBPACK_IMPORTED_MODULE_5__.isNextRouterError)(err)) {\n                    err.message = `Next.js navigation API is not allowed to be used in ${isProxy ? 'Proxy' : 'Middleware'}.`;\n                    throw err;\n                }\n            }\n            const req = args[0];\n            const url = new URL(req.url);\n            const resource = url.pathname + url.search;\n            await (0,next_dist_server_web_globals__WEBPACK_IMPORTED_MODULE_1__.edgeInstrumentationOnRequestError)(err, {\n                path: resource,\n                method: req.method,\n                headers: Object.fromEntries(req.headers.entries())\n            }, {\n                routerKind: 'Pages Router',\n                routePath: '/proxy',\n                routeType: 'proxy',\n                revalidateReason: undefined\n            });\n            throw err;\n        }\n    };\n}\nconst internalHandler = async (opts)=>{\n    if (true) {\n        var _opts_request_requestMeta, _opts_request_requestMeta1;\n        // This mirrors what `RouteModule#prepare` does for routes\n        // edge runtime handles loading instrumentation at the edge adapter level\n        const { join, relative } = __webpack_require__(/*! node:path */ \"node:path\");\n        const { ensureInstrumentationRegistered } = __webpack_require__(/*! next/dist/server/lib/router-utils/instrumentation-globals.external */ \"next/dist/server/lib/router-utils/instrumentation-globals.external\");\n        const absoluteProjectDir = join(/* turbopackIgnore: true */ process.cwd(), ((_opts_request_requestMeta = opts.request.requestMeta) == null ? void 0 : _opts_request_requestMeta.relativeProjectDir) || '');\n        const absoluteDistDir = (_opts_request_requestMeta1 = opts.request.requestMeta) == null ? void 0 : _opts_request_requestMeta1.distDir;\n        const distDir = absoluteDistDir ? relative(absoluteProjectDir, absoluteDistDir) : '.next';\n        await ensureInstrumentationRegistered(absoluteProjectDir, distDir);\n    }\n    return (0,next_dist_server_web_adapter__WEBPACK_IMPORTED_MODULE_2__.adapter)({\n        ...opts,\n        IncrementalCache: next_dist_server_lib_incremental_cache__WEBPACK_IMPORTED_MODULE_3__.IncrementalCache,\n        incrementalCacheHandler,\n        page,\n        handler: errorHandledHandler(handlerUserland)\n    });\n};\nasync function handler(request, ctx) {\n    const result = await internalHandler({\n        request: {\n            url: request.url,\n            method: request.method,\n            headers: (0,next_dist_server_web_utils__WEBPACK_IMPORTED_MODULE_6__.toNodeOutgoingHttpHeaders)(request.headers),\n            nextConfig: {\n                basePath: \"\",\n                i18n: \"\",\n                trailingSlash: Boolean(false),\n                experimental: {\n                    cacheLife: {\"default\":{\"stale\":300,\"revalidate\":900,\"expire\":4294967294},\"seconds\":{\"stale\":30,\"revalidate\":1,\"expire\":60},\"minutes\":{\"stale\":300,\"revalidate\":60,\"expire\":3600},\"hours\":{\"stale\":300,\"revalidate\":3600,\"expire\":86400},\"days\":{\"stale\":300,\"revalidate\":86400,\"expire\":604800},\"weeks\":{\"stale\":300,\"revalidate\":604800,\"expire\":2592000},\"max\":{\"stale\":300,\"revalidate\":2592000,\"expire\":31536000}},\n                    authInterrupts: Boolean(false),\n                    clientParamParsingOrigins: []\n                }\n            },\n            page: {\n                name: page\n            },\n            body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body ?? undefined : undefined,\n            waitUntil: ctx.waitUntil,\n            requestMeta: ctx.requestMeta,\n            signal: ctx.signal || new AbortController().signal\n        }\n    });\n    ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, result.waitUntil);\n    return result.response;\n}\n// backwards compat for non-adapter setups\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (internalHandler);\n\n//# sourceMappingURL=middleware.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1taWRkbGV3YXJlLWxvYWRlci5qcz9hYnNvbHV0ZVBhZ2VQYXRoPUMlM0ElNUNVc2VycyU1QzkxODk3JTVDRGVza3RvcCU1Q1Byb2plY3RzJTVDc29oYW4tc29mdC10ZWNoJTVDZnJvbnRlbmQlNUNwcm94eS50cyZwYWdlPSUyRnByb3h5JnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDOTE4OTclNUNEZXNrdG9wJTVDUHJvamVjdHMlNUNzb2hhbi1zb2Z0LXRlY2glNUNmcm9udGVuZCZtYXRjaGVycz0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ25CO0FBQ2lCO0FBQ21CO0FBQzFFO0FBQ0E7QUFDQSxDQUFtQztBQUM4QztBQUNJO0FBQ2Q7QUFDdkU7QUFDQSxPQUFPLHNDQUFJO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxrQ0FBa0MsUUFBUSxLQUFLLG1DQUFtQyxpQ0FBaUM7QUFDaEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGdCQUFnQixJQUFxQztBQUNyRCxvQkFBb0IsbUdBQWlCO0FBQ3JDLHlGQUF5RixpQ0FBaUM7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtGQUFpQztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBbUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQixFQUFFLG1CQUFPLENBQUMsNEJBQVc7QUFDdEQsZ0JBQWdCLGtDQUFrQyxFQUFFLG1CQUFPLENBQUMsOElBQW9FO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFPO0FBQ2xCO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUZBQXlCO0FBQzlDO0FBQ0EsMEJBQTBCLEVBQTRCO0FBQ3RELHNCQUFzQixFQUE4QjtBQUNwRCx1Q0FBdUMsS0FBaUM7QUFDeEU7QUFDQSwrQkFBK0IsMllBQTZCO0FBQzVELDRDQUE0QyxLQUErQztBQUMzRiwrQ0FBK0MsRUFBK0M7QUFDOUY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDOztBQUUvQiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9idWlsZC9hZGFwdGVyL3NldHVwLW5vZGUtZW52LmV4dGVybmFsXCI7XG5pbXBvcnQgXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi9nbG9iYWxzXCI7XG5pbXBvcnQgeyBhZGFwdGVyIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL2FkYXB0ZXJcIjtcbmltcG9ydCB7IEluY3JlbWVudGFsQ2FjaGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvaW5jcmVtZW50YWwtY2FjaGVcIjtcbmNvbnN0IGluY3JlbWVudGFsQ2FjaGVIYW5kbGVyID0gbnVsbFxuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgX21vZCBmcm9tIFwiLi9wcm94eS50c1wiO1xuaW1wb3J0IHsgZWRnZUluc3RydW1lbnRhdGlvbk9uUmVxdWVzdEVycm9yIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL2dsb2JhbHNcIjtcbmltcG9ydCB7IGlzTmV4dFJvdXRlckVycm9yIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvY29tcG9uZW50cy9pcy1uZXh0LXJvdXRlci1lcnJvclwiO1xuaW1wb3J0IHsgdG9Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycyB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3dlYi91dGlsc1wiO1xuY29uc3QgbW9kID0ge1xuICAgIC4uLl9tb2Rcbn07XG5jb25zdCBwYWdlID0gXCIvcHJveHlcIjtcbmNvbnN0IGlzUHJveHkgPSBwYWdlID09PSAnL3Byb3h5JyB8fCBwYWdlID09PSAnL3NyYy9wcm94eSc7XG5jb25zdCBoYW5kbGVyVXNlcmxhbmQgPSAoaXNQcm94eSA/IG1vZC5wcm94eSA6IG1vZC5taWRkbGV3YXJlKSB8fCBtb2QuZGVmYXVsdDtcbmNsYXNzIFByb3h5TWlzc2luZ0V4cG9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2Upe1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFwiX19ORVhUX0VSUk9SX0NPREVcIiwge1xuICAgICAgICAgICAgdmFsdWU6IFwiRTM5NFwiLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFN0YWNrIGlzbid0IHVzZWZ1bCBoZXJlLCByZW1vdmUgaXQgY29uc2lkZXJpbmcgaXQgc3BhbXMgbG9ncyBkdXJpbmcgZGV2ZWxvcG1lbnQuXG4gICAgICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgICB9XG59XG4vLyBUT0RPOiBUaGlzIHNwYW1zIGxvZ3MgZHVyaW5nIGRldmVsb3BtZW50LiBGaW5kIGEgYmV0dGVyIHdheSB0byBoYW5kbGUgdGhpcy5cbi8vIFJlbW92aW5nIHRoaXMgd2lsbCBzcGFtIFwiZm4gaXMgbm90IGEgZnVuY3Rpb25cIiBsb2dzIHdoaWNoIGlzIHdvcnNlLlxuaWYgKHR5cGVvZiBoYW5kbGVyVXNlcmxhbmQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgUHJveHlNaXNzaW5nRXhwb3J0RXJyb3IoYFRoZSAke2lzUHJveHkgPyAnUHJveHknIDogJ01pZGRsZXdhcmUnfSBmaWxlIFwiJHtwYWdlfVwiIG11c3QgZXhwb3J0IGEgZnVuY3Rpb24gbmFtZWQgXFxgJHtpc1Byb3h5ID8gJ3Byb3h5JyA6ICdtaWRkbGV3YXJlJ31cXGAgb3IgYSBkZWZhdWx0IGZ1bmN0aW9uLmApO1xufVxuLy8gUHJveHkgd2lsbCBvbmx5IHNlbnQgb3V0IHRoZSBGZXRjaEV2ZW50IHRvIG5leHQgc2VydmVyLFxuLy8gc28gbG9hZCBpbnN0cnVtZW50YXRpb24gbW9kdWxlIGhlcmUgYW5kIHRyYWNrIHRoZSBlcnJvciBpbnNpZGUgcHJveHkgbW9kdWxlLlxuZnVuY3Rpb24gZXJyb3JIYW5kbGVkSGFuZGxlcihmbikge1xuICAgIHJldHVybiBhc3luYyAoLi4uYXJncyk9PntcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBmbiguLi5hcmdzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBJbiBkZXZlbG9wbWVudCwgZXJyb3IgdGhlIG5hdmlnYXRpb24gQVBJIHVzYWdlIGluIHJ1bnRpbWUsXG4gICAgICAgICAgICAvLyBzaW5jZSBpdCdzIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gcHJveHkgYXMgaXQncyBvdXRzaWRlIG9mIHJlYWN0IGNvbXBvbmVudCB0cmVlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOZXh0Um91dGVyRXJyb3IoZXJyKSkge1xuICAgICAgICAgICAgICAgICAgICBlcnIubWVzc2FnZSA9IGBOZXh0LmpzIG5hdmlnYXRpb24gQVBJIGlzIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gJHtpc1Byb3h5ID8gJ1Byb3h5JyA6ICdNaWRkbGV3YXJlJ30uYDtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcSA9IGFyZ3NbMF07XG4gICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoO1xuICAgICAgICAgICAgYXdhaXQgZWRnZUluc3RydW1lbnRhdGlvbk9uUmVxdWVzdEVycm9yKGVyciwge1xuICAgICAgICAgICAgICAgIHBhdGg6IHJlc291cmNlLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuZnJvbUVudHJpZXMocmVxLmhlYWRlcnMuZW50cmllcygpKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHJvdXRlcktpbmQ6ICdQYWdlcyBSb3V0ZXInLFxuICAgICAgICAgICAgICAgIHJvdXRlUGF0aDogJy9wcm94eScsXG4gICAgICAgICAgICAgICAgcm91dGVUeXBlOiAncHJveHknLFxuICAgICAgICAgICAgICAgIHJldmFsaWRhdGVSZWFzb246IHVuZGVmaW5lZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3QgaW50ZXJuYWxIYW5kbGVyID0gYXN5bmMgKG9wdHMpPT57XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUlVOVElNRSAhPT0gJ2VkZ2UnKSB7XG4gICAgICAgIHZhciBfb3B0c19yZXF1ZXN0X3JlcXVlc3RNZXRhLCBfb3B0c19yZXF1ZXN0X3JlcXVlc3RNZXRhMTtcbiAgICAgICAgLy8gVGhpcyBtaXJyb3JzIHdoYXQgYFJvdXRlTW9kdWxlI3ByZXBhcmVgIGRvZXMgZm9yIHJvdXRlc1xuICAgICAgICAvLyBlZGdlIHJ1bnRpbWUgaGFuZGxlcyBsb2FkaW5nIGluc3RydW1lbnRhdGlvbiBhdCB0aGUgZWRnZSBhZGFwdGVyIGxldmVsXG4gICAgICAgIGNvbnN0IHsgam9pbiwgcmVsYXRpdmUgfSA9IHJlcXVpcmUoJ25vZGU6cGF0aCcpO1xuICAgICAgICBjb25zdCB7IGVuc3VyZUluc3RydW1lbnRhdGlvblJlZ2lzdGVyZWQgfSA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9yb3V0ZXItdXRpbHMvaW5zdHJ1bWVudGF0aW9uLWdsb2JhbHMuZXh0ZXJuYWxcIik7XG4gICAgICAgIGNvbnN0IGFic29sdXRlUHJvamVjdERpciA9IGpvaW4oLyogdHVyYm9wYWNrSWdub3JlOiB0cnVlICovIHByb2Nlc3MuY3dkKCksICgoX29wdHNfcmVxdWVzdF9yZXF1ZXN0TWV0YSA9IG9wdHMucmVxdWVzdC5yZXF1ZXN0TWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRzX3JlcXVlc3RfcmVxdWVzdE1ldGEucmVsYXRpdmVQcm9qZWN0RGlyKSB8fCAnJyk7XG4gICAgICAgIGNvbnN0IGFic29sdXRlRGlzdERpciA9IChfb3B0c19yZXF1ZXN0X3JlcXVlc3RNZXRhMSA9IG9wdHMucmVxdWVzdC5yZXF1ZXN0TWV0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRzX3JlcXVlc3RfcmVxdWVzdE1ldGExLmRpc3REaXI7XG4gICAgICAgIGNvbnN0IGRpc3REaXIgPSBhYnNvbHV0ZURpc3REaXIgPyByZWxhdGl2ZShhYnNvbHV0ZVByb2plY3REaXIsIGFic29sdXRlRGlzdERpcikgOiAnLm5leHQnO1xuICAgICAgICBhd2FpdCBlbnN1cmVJbnN0cnVtZW50YXRpb25SZWdpc3RlcmVkKGFic29sdXRlUHJvamVjdERpciwgZGlzdERpcik7XG4gICAgfVxuICAgIHJldHVybiBhZGFwdGVyKHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgSW5jcmVtZW50YWxDYWNoZSxcbiAgICAgICAgaW5jcmVtZW50YWxDYWNoZUhhbmRsZXIsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGhhbmRsZXI6IGVycm9ySGFuZGxlZEhhbmRsZXIoaGFuZGxlclVzZXJsYW5kKVxuICAgIH0pO1xufTtcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3QsIGN0eCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGludGVybmFsSGFuZGxlcih7XG4gICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgIHVybDogcmVxdWVzdC51cmwsXG4gICAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVyczogdG9Ob2RlT3V0Z29pbmdIdHRwSGVhZGVycyhyZXF1ZXN0LmhlYWRlcnMpLFxuICAgICAgICAgICAgbmV4dENvbmZpZzoge1xuICAgICAgICAgICAgICAgIGJhc2VQYXRoOiBwcm9jZXNzLmVudi5fX05FWFRfQkFTRV9QQVRILFxuICAgICAgICAgICAgICAgIGkxOG46IHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX0NPTkZJRyxcbiAgICAgICAgICAgICAgICB0cmFpbGluZ1NsYXNoOiBCb29sZWFuKHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCksXG4gICAgICAgICAgICAgICAgZXhwZXJpbWVudGFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlTGlmZTogcHJvY2Vzcy5lbnYuX19ORVhUX0NBQ0hFX0xJRkUsXG4gICAgICAgICAgICAgICAgICAgIGF1dGhJbnRlcnJ1cHRzOiBCb29sZWFuKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBFUklNRU5UQUxfQVVUSF9JTlRFUlJVUFRTKSxcbiAgICAgICAgICAgICAgICAgICAgY2xpZW50UGFyYW1QYXJzaW5nT3JpZ2luczogcHJvY2Vzcy5lbnYuX19ORVhUX0NMSUVOVF9QQVJBTV9QQVJTSU5HX09SSUdJTlNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgICAgIG5hbWU6IHBhZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiByZXF1ZXN0Lm1ldGhvZCAhPT0gJ0dFVCcgJiYgcmVxdWVzdC5tZXRob2QgIT09ICdIRUFEJyA/IHJlcXVlc3QuYm9keSA/PyB1bmRlZmluZWQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB3YWl0VW50aWw6IGN0eC53YWl0VW50aWwsXG4gICAgICAgICAgICByZXF1ZXN0TWV0YTogY3R4LnJlcXVlc3RNZXRhLFxuICAgICAgICAgICAgc2lnbmFsOiBjdHguc2lnbmFsIHx8IG5ldyBBYm9ydENvbnRyb2xsZXIoKS5zaWduYWxcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGN0eC53YWl0VW50aWwgPT0gbnVsbCA/IHZvaWQgMCA6IGN0eC53YWl0VW50aWwuY2FsbChjdHgsIHJlc3VsdC53YWl0VW50aWwpO1xuICAgIHJldHVybiByZXN1bHQucmVzcG9uc2U7XG59XG4vLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub24tYWRhcHRlciBzZXR1cHNcbmV4cG9ydCBkZWZhdWx0IGludGVybmFsSGFuZGxlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWlkZGxld2FyZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5C91897%5CDesktop%5CProjects%5Csohan-soft-tech%5Cfrontend%5Cproxy.ts&page=%2Fproxy&rootDir=C%3A%5CUsers%5C91897%5CDesktop%5CProjects%5Csohan-soft-tech%5Cfrontend&matchers=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(middleware)/./proxy.ts":
/*!******************!*\
  !*** ./proxy.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   proxy: () => (/* binding */ proxy)\n/* harmony export */ });\n/* harmony import */ var _lib_supabase_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/supabase/proxy */ \"(middleware)/./lib/supabase/proxy.ts\");\n\nasync function proxy(request) {\n    return await (0,_lib_supabase_proxy__WEBPACK_IMPORTED_MODULE_0__.updateSession)(request);\n}\nconst config = {\n    matcher: [\n        \"/((?!_next/static|_next/image|favicon.ico|.*\\\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcHJveHkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3FEO0FBRTlDLGVBQWVDLE1BQU1DLE9BQW9CO0lBQzlDLE9BQU8sTUFBTUYsa0VBQWFBLENBQUNFO0FBQzdCO0FBRU8sTUFBTUMsU0FBUztJQUNwQkMsU0FBUztRQUNQO0tBQ0Q7QUFDSCxFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXDkxODk3XFxEZXNrdG9wXFxQcm9qZWN0c1xcc29oYW4tc29mdC10ZWNoXFxmcm9udGVuZFxccHJveHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHlwZSBOZXh0UmVxdWVzdCB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyB1cGRhdGVTZXNzaW9uIH0gZnJvbSBcIkAvbGliL3N1cGFiYXNlL3Byb3h5XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJveHkocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICByZXR1cm4gYXdhaXQgdXBkYXRlU2Vzc2lvbihyZXF1ZXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBtYXRjaGVyOiBbXHJcbiAgICBcIi8oKD8hX25leHQvc3RhdGljfF9uZXh0L2ltYWdlfGZhdmljb24uaWNvfC4qXFxcXC4oPzpzdmd8cG5nfGpwZ3xqcGVnfGdpZnx3ZWJwKSQpLiopXCIsXHJcbiAgXSxcclxufTsiXSwibmFtZXMiOlsidXBkYXRlU2Vzc2lvbiIsInByb3h5IiwicmVxdWVzdCIsImNvbmZpZyIsIm1hdGNoZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./proxy.ts\n");

/***/ }),

/***/ "../app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "./memory-cache.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/lib/incremental-cache/memory-cache.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/lib/incremental-cache/memory-cache.external.js");

/***/ }),

/***/ "./runtime-reacts.external":
/*!**************************************************************!*\
  !*** external "next/dist/server/runtime-reacts.external.js" ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/runtime-reacts.external.js");

/***/ }),

/***/ "./shared-cache-controls.external":
/*!*******************************************************************************************!*\
  !*** external "next/dist/server/lib/incremental-cache/shared-cache-controls.external.js" ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js");

/***/ }),

/***/ "./tags-manifest.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/lib/incremental-cache/tags-manifest.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/lib/incremental-cache/tags-manifest.external.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "next/dist/build/adapter/setup-node-env.external":
/*!******************************************************************!*\
  !*** external "next/dist/build/adapter/setup-node-env.external" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/build/adapter/setup-node-env.external");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/server/lib/router-utils/instrumentation-globals.external":
/*!*************************************************************************************!*\
  !*** external "next/dist/server/lib/router-utils/instrumentation-globals.external" ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/lib/router-utils/instrumentation-globals.external");

/***/ }),

/***/ "node:async_hooks":
/*!***********************************!*\
  !*** external "node:async_hooks" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("node:async_hooks");

/***/ }),

/***/ "node:path":
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:path");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@supabase","vendor-chunks/tslib","vendor-chunks/iceberg-js","vendor-chunks/cookie"], () => (__webpack_exec__("(middleware)/./node_modules/next/dist/build/webpack/loaders/next-middleware-loader.js?absolutePagePath=C%3A%5CUsers%5C91897%5CDesktop%5CProjects%5Csohan-soft-tech%5Cfrontend%5Cproxy.ts&page=%2Fproxy&rootDir=C%3A%5CUsers%5C91897%5CDesktop%5CProjects%5Csohan-soft-tech%5Cfrontend&matchers=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();