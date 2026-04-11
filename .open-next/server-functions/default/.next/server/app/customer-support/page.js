(()=>{var a={};a.id=225,a.ids=[225],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},669:(a,b,c)=>{"use strict";c.r(b),c.d(b,{__next_app__:()=>M,handler:()=>O,routeModule:()=>N});var d=c(7553),e=c(84006),f=c(67798),g=c(34775),h=c(99373),i=c(73461),j=c(1020),k=c(26349),l=c(54365),m=c(16023),n=c(63747),o=c(24235),p=c(23938),q=c(261),r=c(66758),s=c(77243),t=c(26713),u=c(37527),v=c(22820),w=c(88216),x=c(47929),y=c(79551),z=c(71797),A=c(89125),B=c(86439),C=c(77068),D=c(27269),E=c(61287),F=c(81494),G=c(70722),H=c(70753),I=c(43954),J=c(17891),K={};for(let a in E)0>["default","__next_app__","routeModule","handler"].indexOf(a)&&(K[a]=()=>E[a]);c.d(b,K);let L={children:["",{children:["customer-support",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,43415)),"E:\\New Folder\\Antigravity Tool\\client_era\\src\\app\\customer-support\\page.tsx"]}]},{"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,70440))).default(a)],apple:[],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}},[]]},{layout:[()=>Promise.resolve().then(c.bind(c,76537)),"E:\\New Folder\\Antigravity Tool\\client_era\\src\\app\\layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,95547,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,55091,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,45270,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,28193,23)),"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,70440))).default(a)],apple:[],openGraph:[],twitter:[],manifest:"/manifest.webmanifest"}},[]]}.children,M={require:c,loadChunk:()=>Promise.resolve()},N=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/customer-support/page",pathname:"/customer-support",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:L},distDir:".next",relativeProjectDir:""});async function O(a,b,d){var K,P,Q,R,S;d.requestMeta&&(0,h.setRequestMeta)(a,d.requestMeta),N.isDev&&(0,h.addRequestMeta)(a,"devRequestTimingInternalsEnd",process.hrtime.bigint());let T=!!(0,h.getRequestMeta)(a,"minimalMode"),U="/customer-support/page";"/index"===U&&(U="/");let V=await N.prepare(a,b,{srcPage:U,multiZoneDraftMode:!1});if(!V)return b.statusCode=400,b.end("Bad Request"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let{buildId:W,query:X,params:Y,pageIsDynamic:Z,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,serverActionsManifest:ab,clientReferenceManifest:ac,subresourceIntegrityManifest:ad,prerenderManifest:ae,isDraftMode:af,resolvedPathname:ag,revalidateOnlyGenerated:ah,routerServerContext:ai,nextConfig:aj,parsedUrl:ak,interceptionRoutePatterns:al,deploymentId:am,clientAssetToken:an}=V,ao=(0,q.normalizeAppPath)(U),{isOnDemandRevalidate:ap}=V,aq=aj.experimental.ppr&&!aj.cacheComponents&&(0,I.isInterceptionRouteAppPath)(ag)?null:N.match(ag,ae),ar=(null==aq?void 0:aq.route)??null,as=!!ae.routes[ag],at=a.headers["user-agent"]||"",au=(0,t.getBotType)(at),av=(0,p.isHtmlBotRequest)(a),aw=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??"1"===a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],ax=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ay=(0,r.getIsPossibleServerAction)(a),az=(0,m.checkIsAppPPREnabled)(aj.experimental.ppr),aA=a.headers[x.NEXT_RESUME_STATE_LENGTH_HEADER];if(!(0,h.getRequestMeta)(a,"postponed")&&T&&az&&ay&&aA&&"string"==typeof aA){let e=parseInt(aA,10),{maxPostponedStateSize:f,maxPostponedStateSizeBytes:g}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize);if(!isNaN(e)&&e>0){if(e>g)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(f)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let i="1 MB",j=(null==(S=aj.experimental.serverActions)?void 0:S.bodySizeLimit)??i,k=e+(j!==i?c(95726).parse(j):1048576),l=await (0,D.readBodyWithSizeLimit)(a,k);if(null===l)return b.statusCode=413,b.end("Request body exceeded limit. To configure the body size limit for Server Actions, see: https://nextjs.org/docs/app/api-reference/next-config-js/serverActions#bodysizelimit"),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;if(l.length>=e){let b=l.subarray(0,e).toString("utf8");(0,h.addRequestMeta)(a,"postponed",b);let c=l.subarray(e);(0,h.addRequestMeta)(a,"actionBody",c)}else throw Object.defineProperty(Error(`invariant: expected ${e} bytes of postponed state but only received ${l.length} bytes`),"__NEXT_ERROR_CODE",{value:"E979",enumerable:!1,configurable:!0})}}if(!(0,h.getRequestMeta)(a,"postponed")&&az&&"1"===a.headers[x.NEXT_RESUME_HEADER]&&"POST"===a.method){let{maxPostponedStateSize:c,maxPostponedStateSizeBytes:e}=(0,D.getMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize),f=await (0,D.readBodyWithSizeLimit)(a,e);if(null===f)return b.statusCode=413,b.end((0,D.getPostponedStateExceededErrorMessage)(c)),null==d.waitUntil||d.waitUntil.call(d,Promise.resolve()),null;let g=f.toString("utf8");(0,h.addRequestMeta)(a,"postponed",g)}let aB=!0===N.isDev||!0===aj.experimental.exposeTestingApiInProductionBuild,aC=aB&&("1"===a.headers[s.NEXT_INSTANT_PREFETCH_HEADER]||void 0===a.headers[s.RSC_HEADER]&&"string"==typeof a.headers.cookie&&a.headers.cookie.includes(s.NEXT_INSTANT_TEST_COOKIE+"=")),aD=(az||aC)&&((null==(K=ae.routes[ao]??ae.dynamicRoutes[ao])?void 0:K.renderingMode)==="PARTIALLY_STATIC"||aC&&(aB||(null==ai?void 0:ai.experimentalTestProxy)===!0)),aE=aC&&aD,aF=aE&&!0===N.isDev,aG=!1,aH=aD?(0,h.getRequestMeta)(a,"postponed"):void 0,aI=null==(P=ae.routes[ag])?void 0:P.prefetchDataRoute,aJ=aD&&ax&&!aw&&!aI;T&&(aJ=aJ&&!!aH);let aK=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),aL=(!au||!aD)&&(!at||(0,p.shouldServeStreamingMetadata)(at,aj.htmlLimitedBots)),aM=!!((ar||as||ae.routes[ao])&&!(au&&aD)),aN=aD&&!0===aj.cacheComponents,aO=!0===N.isDev||!aM||"string"==typeof aH||(aN&&(0,h.getRequestMeta)(a,"onCacheEntryV2")?aJ&&!T:aJ),aP=!!au&&aD,aQ=(null==ar?void 0:ar.remainingPrerenderableParams)??[],aR=(null==ar?void 0:ar.fallback)===null&&((null==(Q=ar.fallbackRootParams)?void 0:Q.length)??0)>0,aS=null;if(!af&&aM&&!aO&&!ay&&!aH&&!aJ){let a=aq?"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:aq.source:null;if(!0===aj.experimental.partialFallbacks&&a&&(null==ar?void 0:ar.fallbackRouteParams)&&!aR){if(aQ.length>0){let b,c=(b=new Map(aQ.map(a=>[a.paramName,a])),a.split("/").map(a=>{let c=(0,J.getSegmentParam)(a);if(!c)return a;let d=b.get(c.paramName);if(!d)return a;let e=null==Y?void 0:Y[d.paramName];if(!e)return a;let f=Array.isArray(e)?e.map(a=>encodeURIComponent(a)).join("/"):encodeURIComponent(e);return a.replace(function(a){let{repeat:b,optional:c}=(0,J.getParamProperties)(a.paramType);return c?`[[...${a.paramName}]]`:b?`[...${a.paramName}]`:`[${a.paramName}]`}(d),f)}).join("/")||"/");aS=c!==a?c:null}}else aS=ag}let aT=aS;!aT&&(N.isDev||aM&&Z&&(null==ar?void 0:ar.fallbackRouteParams)&&!ay)&&(aT=ag),N.isDev||af||!aM||!ax||aJ||(0,k.d)(a.headers);let aU={...E,tree:L,handler:O,routeModule:N,__next_app__:M};ab&&ac&&(0,o.setManifestsSingleton)({page:U,clientReferenceManifest:ac,serverActionsManifest:ab});let aV=a.method||"GET",aW=(0,g.getTracer)(),aX=aW.getActiveScopeSpan(),aY=!!(null==ai?void 0:ai.isWrappedByNextServer),aZ=!0===aj.experimental.partialFallbacks&&aQ.length>0?(null==ar||null==(R=ar.fallbackRouteParams)?void 0:R.filter(a=>!aQ.some(b=>b.paramName===a.paramName)))??[]:[],a$=async()=>((null==ai?void 0:ai.render404)?await ai.render404(a,b,ak,!1):b.end("This page could not be found"),null);try{let f,k=N.getVaryHeader(ag,al);b.setHeader("Vary",k);let m=async(c,d)=>{let e=new l.NodeNextRequest(a),g=new l.NodeNextResponse(b);return N.render(e,g,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let a=aW.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let d=a.get("next.route");if(d){let a=`${aV} ${d}`;c.setAttributes({"next.route":d,"http.route":d,"next.span_name":a}),c.updateName(a),f&&f!==c&&(f.setAttribute("http.route",d),f.updateName(a))}else c.updateName(`${aV} ${U}`)})},o=(0,h.getRequestMeta)(a,"incrementalCache")||await N.getIncrementalCache(a,aj,ae,T);null==o||o.resetRequestCache(),globalThis.__incrementalCache=o;let p=async({span:e,postponed:f,fallbackRouteParams:g,forceStaticRender:i})=>{let k={query:X,params:Y,page:ao,sharedContext:{buildId:W,deploymentId:am,clientAssetToken:an},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aU,Component:(0,j.T)(aU),params:Y,routeModule:N,page:U,postponed:f,shouldWaitOnAllReady:aP,serveStreamingMetadata:aL,supportsDynamicResponse:"string"==typeof f||aO,buildManifest:$,nextFontManifest:_,reactLoadableManifest:aa,subresourceIntegrityManifest:ad,setCacheStatus:null==ai?void 0:ai.setCacheStatus,setIsrStatus:null==ai?void 0:ai.setIsrStatus,setReactDebugChannel:null==ai?void 0:ai.setReactDebugChannel,sendErrorsToBrowser:null==ai?void 0:ai.sendErrorsToBrowser,dir:c(33873).join(process.cwd(),N.relativeProjectDir),isDraftMode:af,botType:au,isOnDemandRevalidate:ap,isPossibleServerAction:ay,assetPrefix:aj.assetPrefix,nextConfigOutput:aj.output,crossOrigin:aj.crossOrigin,trailingSlash:aj.trailingSlash,images:aj.images,previewProps:ae.preview,enableTainting:aj.experimental.taint,htmlLimitedBots:aj.htmlLimitedBots,reactMaxHeadersLength:aj.reactMaxHeadersLength,multiZoneDraftMode:!1,incrementalCache:o,cacheLifeProfiles:aj.cacheLife,basePath:aj.basePath,serverActions:aj.experimental.serverActions,logServerFunctions:"object"==typeof aj.logging&&!!aj.logging.serverFunctions,...aE||aF||aG?{isBuildTimePrerendering:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isDebugDynamicAccesses:aF}:{},cacheComponents:!!aj.cacheComponents,experimental:{isRoutePPREnabled:aD,expireTime:aj.expireTime,staleTimes:aj.experimental.staleTimes,dynamicOnHover:!!aj.experimental.dynamicOnHover,optimisticRouting:!!aj.experimental.optimisticRouting,inlineCss:!!aj.experimental.inlineCss,prefetchInlining:aj.experimental.prefetchInlining??!1,authInterrupts:!!aj.experimental.authInterrupts,cachedNavigations:!!aj.experimental.cachedNavigations,clientTraceMetadata:aj.experimental.clientTraceMetadata||[],clientParamParsingOrigins:aj.experimental.clientParamParsingOrigins,maxPostponedStateSizeBytes:(0,C.parseMaxPostponedStateSize)(aj.experimental.maxPostponedStateSize)},waitUntil:d.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d,e)=>N.onRequestError(a,b,d,e,ai),err:(0,h.getRequestMeta)(a,"invokeError")}};i&&(k.renderOpts.supportsDynamicResponse=!1);let l=await m(e,k),{metadata:n}=l,{cacheControl:p,headers:q={},fetchTags:r,fetchMetrics:s}=n;if(r&&(q[x.NEXT_CACHE_TAGS_HEADER]=r),a.fetchMetrics=s,aM&&(null==p?void 0:p.revalidate)===0&&!N.isDev&&!aD){let a=n.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${ag}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:l,headers:q,rscData:n.flightData,postponed:n.postponed,status:n.statusCode,segmentData:n.segmentData},cacheControl:p}},q=async({hasResolved:c,previousCacheEntry:f,isRevalidating:g,span:i,forceStaticRender:j=!1})=>{let k,l=!1===N.isDev,m=c||b.writableEnded;if(ap&&ah&&!f&&!T)return(null==ai?void 0:ai.render404)?await ai.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ar&&(k=(0,v.parseFallbackField)(ar.fallback)),!0===aj.experimental.partialFallbacks&&(null==ar?void 0:ar.fallback)===null&&!aR&&aQ.length>0&&(k=v.FallbackMode.PRERENDER),k===v.FallbackMode.PRERENDER&&(0,t.isBot)(at)&&(!aD||av)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==f?void 0:f.isStale)===-1&&(ap=!0),ap&&(k!==v.FallbackMode.NOT_FOUND||f)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),!T&&k!==v.FallbackMode.BLOCKING_STATIC_RENDER&&aT&&!m&&!af&&Z&&(l||!as)){if((l||ar)&&k===v.FallbackMode.NOT_FOUND){if(aj.adapterPath)return await a$();throw new B.NoFallbackError}if(aD&&(aj.cacheComponents?!aJ:!ax)){let b=l&&"string"==typeof(null==ar?void 0:ar.fallback)?ar.fallback:ao,f=(l||aE)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;aE&&f&&(0,h.addRequestMeta)(a,"fallbackParams",f);let g=await N.handleResponse({cacheKey:b,req:a,nextConfig:aj,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:ae,isRoutePPREnabled:aD,responseGenerator:async()=>p({span:i,postponed:void 0,fallbackRouteParams:f,forceStaticRender:!0}),waitUntil:d.waitUntil,isMinimalMode:T});if(null===g)return null;if(g)return T||!aD||!(aQ.length>0)||!0!==aj.experimental.partialFallbacks||!aS||!o||ap||aG||aB||aC||aw||(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(aS,o,aD,!1,a=>p({span:a.span,postponed:void 0,fallbackRouteParams:aZ.length>0?(0,n.createOpaqueFallbackRouteParams)(aZ):null,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}),delete g.cacheControl,g}}let r=ap||g||!aH?void 0:aH;if(aN&&!T&&o&&(aJ||ay)&&!j){let b=await o.get(ag,{kind:u.IncrementalCacheKind.APP_PAGE,isRoutePPREnabled:!0,isFallback:!1});b&&b.value&&b.value.kind===u.CachedRouteKind.APP_PAGE&&(r=b.value.postponed,b&&(-1===b.isStale||!0===b.isStale)&&(0,H.scheduleOnNextTick)(async()=>{let b=N.getResponseCache(a);try{await b.revalidate(ag,o,aD,!1,a=>q({...a,forceStaticRender:!0}),null,c,d.waitUntil)}catch(a){console.error("Error revalidating the page in the background",a)}}))}if((aE||aF)&&void 0!==r)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.EMPTY,pageData:{},headers:void 0,status:void 0}};let s=(l&&(0,h.getRequestMeta)(a,"renderFallbackShell")||aE&&!as)&&(null==ar?void 0:ar.fallbackRouteParams)?(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams):aG?(0,n.getFallbackRouteParams)(ao,N):null;if((l||aE)&&aj.cacheComponents&&!as&&(null==ar?void 0:ar.fallbackRouteParams)){let b=(0,n.createOpaqueFallbackRouteParams)(ar.fallbackRouteParams);b&&(0,h.addRequestMeta)(a,"fallbackParams",b)}return p({span:i,postponed:r,fallbackRouteParams:s,forceStaticRender:j})},r=async c=>{var f,g,i,j,k;let l,m=await N.handleResponse({cacheKey:aS,responseGenerator:a=>q({span:c,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:ap,isRoutePPREnabled:aD,req:a,nextConfig:aj,prerenderManifest:ae,waitUntil:d.waitUntil,isMinimalMode:T});if(af&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),N.isDev&&b.setHeader("Cache-Control","no-cache, must-revalidate"),!m){if(aS)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(f=m.value)?void 0:f.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(i=m.value)?void 0:i.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let n="string"==typeof m.value.postponed;ax&&!ay&&am&&b.setHeader(x.NEXT_NAV_DEPLOYMENT_ID_HEADER,am),aM&&!aJ&&(!n||aw)&&(T||b.setHeader("x-nextjs-cache",ap?"REVALIDATED":m.isMiss?"MISS":m.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:o}=m;if(aH)l={revalidate:0,expire:void 0};else if(aJ)l={revalidate:0,expire:void 0};else if(!N.isDev)if(af)l={revalidate:0,expire:void 0};else if(aM){if(m.cacheControl)if("number"==typeof m.cacheControl.revalidate){if(m.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${m.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});l={revalidate:m.cacheControl.revalidate,expire:(null==(j=m.cacheControl)?void 0:j.expire)??aj.expireTime}}else l={revalidate:x.CACHE_ONE_YEAR_SECONDS,expire:void 0}}else b.getHeader("Cache-Control")||(l={revalidate:0,expire:void 0});if(m.cacheControl=l,"string"==typeof aK&&(null==o?void 0:o.kind)===u.CachedRouteKind.APP_PAGE&&o.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(k=o.headers)?void 0:k[x.NEXT_CACHE_TAGS_HEADER];T&&aM&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=o.segmentData.get(aK);return void 0!==d?(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(d,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl}):(b.statusCode=204,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl}))}let r=aN?(0,h.getRequestMeta)(a,"onCacheEntryV2")??(0,h.getRequestMeta)(a,"onCacheEntry"):(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r(m,{url:(0,h.getRequestMeta)(a,"initURL")??a.url}))return null;if(o.headers){let a={...o.headers};for(let[c,d]of(T&&aM||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(g=o.headers)?void 0:g[x.NEXT_CACHE_TAGS_HEADER];if(T&&aM&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!o.status||ax&&aD||(b.statusCode=o.status),!T&&o.status&&F.RedirectStatusCode[o.status]&&ax&&(b.statusCode=200),n&&!aJ&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),ax&&!af){if(void 0===o.rscData){if(o.html.contentType!==s.RSC_CONTENT_TYPE_HEADER)if(aj.cacheComponents)return b.statusCode=404,(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.EMPTY,cacheControl:m.cacheControl});else throw Object.defineProperty(new G.InvariantError(`Expected RSC response, got ${o.html.contentType}`),"__NEXT_ERROR_CODE",{value:"E789",enumerable:!1,configurable:!0});return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:o.html,cacheControl:m.cacheControl})}return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:w.default.fromStatic(o.rscData,s.RSC_CONTENT_TYPE_HEADER),cacheControl:m.cacheControl})}let v=o.html;if(aC&&aE){let c=!0===N.isDev?crypto.randomUUID():null;return v.pipeThrough((0,z.createInstantTestScriptInsertionTransformStream)(c)),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})}if(!n||T||ax)return(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:m.cacheControl});if(aE||aF)return v.push(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let B=new TransformStream;return v.push(B.readable),p({span:c,postponed:o.postponed,fallbackRouteParams:null,forceStaticRender:!1}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(B.writable)}).catch(a=>{B.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,A.sendRenderResult)({req:a,res:b,generateEtags:aj.generateEtags,poweredByHeader:aj.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aY||!aX)return f=aW.getActiveScopeSpan(),await aW.withPropagatedContext(a.headers,()=>aW.trace(i.BaseServerSpan.handleRequest,{spanName:`${aV} ${U}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aV,"http.target":a.url}},r),void 0,!aY);await r(aX)}catch(b){throw b instanceof B.NoFallbackError||await N.onRequestError(a,b,{routerKind:"App Router",routePath:U,routeType:"render",revalidateReason:(0,f.c)({isStaticGeneration:aM,isOnDemandRevalidate:ap})},!1,ai),b}}},1353:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]])},2429:(a,b,c)=>{"use strict";c.d(b,{default:()=>k});var d=c(48249),e=c(67484),f=c(51658),g=c(70971);let h=(0,c(63871).A)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]),i=[{label:"Avg. Resolution Time",value:"42m",trend:"+12%",color:"var(--green)"},{label:"First Response SLA",value:"99.4%",trend:"Steady",color:"var(--blue)"},{label:"Customer Satisfaction (CSAT)",value:"4.8/5",trend:"↑",color:"var(--gold)"},{label:"AI Prediction Accuracy",value:"94%",trend:"+4%",color:"var(--green)"}],j=[{name:"North America",score:98,status:"Healthy"},{name:"Europe",score:92,status:"Satisfactory"},{name:"Asia-Pacific",score:86,status:"Attention"},{name:"Latin America",score:94,status:"Healthy"}];function k(){let[a,b]=(0,e.useState)([0,0,0,0]),[c,k]=(0,e.useState)(!1),l=(0,e.useRef)(null);return(0,d.jsxs)("section",{className:"cs-metrics-section section-mid",ref:l,id:"satisfaction",children:[(0,d.jsx)("style",{children:`
        .cs-metrics-section { padding: 100px 0; color: white; position: relative; overflow: hidden; }
        .cs-metrics-wrap { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        
        .cs-metrics-header { text-align: center; max-width: 700px; margin: 0 auto 64px; }
        .cs-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }
        
        .cs-m-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 20px 18px;
          text-align: center; transition: all 0.3s;
        }
        .cs-m-card:hover { transform: translateY(-5px); border-color: var(--gold); background: rgba(196,154,60,0.05); }
        .cs-m-label { font-size: 11px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 10px; }
        .cs-m-value { font-family: 'Fraunces', serif; font-size: 36px; color: white; margin-bottom: 6px; }
        .cs-m-trend { font-size: 12px; font-weight: 600; }

        .cs-ops-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
        }
        .cs-ops-panel {
          background: var(--surface);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 24px; padding: clamp(16px, 3vw, 32px);
          overflow: hidden;
          min-width: 0;
        }
        
        .cs-region-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .cs-region-row:last-child { border: none; }
        .cs-region-bar-wrap { flex: 1; margin: 0 24px; height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; position: relative; overflow: hidden; }
        .cs-region-bar { height: 100%; transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1); }

        .cs-alert-toast {
          background: rgba(224,56,79,0.1); border: 1px solid rgba(224,56,79,0.3); border-radius: 12px;
          padding: 16px; margin-top: 24px; display: flex; align-items: center; gap: 12px;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

        @media (max-width: 1024px) {
          .cs-metrics-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .cs-ops-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 768px) {
          .cs-metrics-wrap { padding: 0 24px; }
          .cs-metrics-header { margin-bottom: 40px; }
          .cs-ops-panel { padding: 24px; }
        }
        @media (max-width: 480px) {
          .cs-metrics-grid { grid-template-columns: 1fr; gap: 16px; }
          .cs-m-value { font-size: 32px; }
          .cs-region-row { padding: 12px 0; }
          .cs-region-bar-wrap { margin: 0 12px; }
        }
      `}),(0,d.jsxs)("div",{className:"cs-metrics-wrap",children:[(0,d.jsxs)("div",{className:"cs-metrics-header reveal",children:[(0,d.jsxs)("div",{className:"eyebrow",style:{justifyContent:"center"},children:[(0,d.jsx)("span",{className:"ey-line"})," Performance & Satisfaction"]}),(0,d.jsxs)("h2",{className:"h2",style:{color:"white"},children:["Metrics that drive",(0,d.jsx)("br",{}),(0,d.jsx)("em",{children:"Strategic Decisions."})]}),(0,d.jsx)("p",{className:"lead",style:{margin:"0 auto",color:"var(--text2)"},children:"We don't just track emojis. ClientEra correlates support satisfaction with commercial risk, surfacing accounts that need immediate leadership attention."})]}),(0,d.jsx)("div",{className:"cs-metrics-grid reveal",children:i.map((b,c)=>(0,d.jsxs)("div",{className:"cs-m-card",children:[(0,d.jsx)("div",{className:"cs-m-label",children:b.label}),(0,d.jsxs)("div",{className:"cs-m-value",children:[2===c?a[c].toFixed(1):Math.round(a[c]),b.value.replace(/[0-9.]/g,"")]}),(0,d.jsx)("div",{className:"cs-m-trend",style:{color:b.color},children:b.trend})]},b.label))}),(0,d.jsxs)("div",{className:"cs-ops-grid reveal",children:[(0,d.jsxs)("div",{className:"cs-ops-panel",children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24},children:[(0,d.jsx)("h3",{style:{fontSize:18,color:"white",fontWeight:600},children:"Regional Global Health"}),(0,d.jsxs)("div",{style:{display:"flex",gap:12,fontSize:11,color:"var(--text3)"},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,d.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:"var(--green)"}})," Healthy"]}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,d.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:"var(--gold)"}})," Attention"]})]})]}),j.map(a=>(0,d.jsxs)("div",{className:"cs-region-row",children:[(0,d.jsx)("div",{style:{width:140,fontSize:13,fontWeight:500,color:"var(--text2)"},children:a.name}),(0,d.jsx)("div",{className:"cs-region-bar-wrap",children:(0,d.jsx)("div",{className:"cs-region-bar",style:{width:c?`${a.score}%`:"0%",background:a.score>90?"var(--green)":"var(--gold)"}})}),(0,d.jsxs)("div",{style:{width:40,textAlign:"right",fontSize:13,fontWeight:700,color:a.score>90?"var(--green)":"var(--gold)"},children:[a.score,"%"]})]},a.name))]}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[(0,d.jsxs)("div",{className:"cs-ops-panel",style:{flex:1,padding:24},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[(0,d.jsx)(f.A,{size:20,color:"var(--red)"}),(0,d.jsx)("h3",{style:{fontSize:14,fontWeight:700,color:"white"},children:"Predictive Risk Warning"})]}),(0,d.jsxs)("div",{style:{background:"rgba(255,255,255,0.02)",borderRadius:12,padding:16,border:"1px solid rgba(255,255,255,0.05)"},children:[(0,d.jsxs)("div",{style:{fontSize:12,color:"var(--text2)",lineHeight:1.6},children:["AI detected ",(0,d.jsx)("strong",{children:"declining sentiment"})," in 3 high-value accounts (Reliance, Tata Steel, Bharti)."]}),(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:12},children:[(0,d.jsx)(g.A,{size:14,color:"var(--red)"}),(0,d.jsx)("span",{style:{fontSize:11,fontWeight:700,color:"var(--red)"},children:"High Churn Probability: 42%"})]})]})]}),(0,d.jsxs)("div",{className:"cs-ops-panel",style:{flex:1,padding:24,background:"rgba(196,154,60,0.05)",borderColor:"rgba(196,154,60,0.15)"},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[(0,d.jsx)(h,{size:20,color:"var(--gold)"}),(0,d.jsx)("h3",{style:{fontSize:14,fontWeight:700,color:"var(--gold)"},children:"Top Performing Region"})]}),(0,d.jsx)("div",{style:{fontSize:24,fontFamily:"Fraunces",color:"white",marginBottom:4},children:"North America"}),(0,d.jsx)("div",{style:{fontSize:12,color:"var(--text3)"},children:"Maintaining 98% resolution in <1 hour."})]})]})]})]})]})}},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3485:(a,b,c)=>{Promise.resolve().then(c.bind(c,50810)),Promise.resolve().then(c.bind(c,11131)),Promise.resolve().then(c.bind(c,6991)),Promise.resolve().then(c.bind(c,65833)),Promise.resolve().then(c.bind(c,6474)),Promise.resolve().then(c.bind(c,13481)),Promise.resolve().then(c.bind(c,63022)),Promise.resolve().then(c.bind(c,69445)),Promise.resolve().then(c.bind(c,31117)),Promise.resolve().then(c.bind(c,68348)),Promise.resolve().then(c.bind(c,55058))},6474:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\customersupport\\\\sections\\\\S5_Satisfaction.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\customersupport\\sections\\S5_Satisfaction.tsx","default")},6991:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\customersupport\\\\sections\\\\S2_Pain.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\customersupport\\sections\\S2_Pain.tsx","default")},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},11131:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\customersupport\\\\sections\\\\S11_CTA.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\customersupport\\sections\\S11_CTA.tsx","default")},11399:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]])},13481:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\customersupport\\\\sections\\\\S6_AI.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\customersupport\\sections\\S6_AI.tsx","default")},15844:(a,b,c)=>{"use strict";c.d(b,{default:()=>k});var d=c(48249),e=c(67484),f=c(63871);let g=(0,f.A)("link-2-off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),h=(0,f.A)("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);var i=c(65255);let j=(0,f.A)("trending-down",[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]]);function k(){let a=(0,e.useRef)(null),b=[{icon:g,title:"Support is Siloed From Sales",desc:"Your rep walks into a client meeting blind — a critical delivery complaint was raised three days ago but they had no idea. The ticket lived in Zendesk. The deal lived in the CRM. Never the twain shall meet.",color:"var(--red)",bg:"rgba(224,56,79,.06)",border:"rgba(224,56,79,.15)"},{icon:h,title:"SLAs Tracked in Spreadsheets",desc:"No real-time SLA engine. Someone manually updates a Google Sheet every morning. By the time a breach is noticed, the client has already escalated to senior leadership or LinkedIn.",color:"var(--gold)",bg:"rgba(196,154,60,.06)",border:"rgba(196,154,60,.15)"},{icon:i.A,title:"AI Bolted On, Not Built In",desc:"Your chatbot can't see order history. It can't see unpaid invoices. It answers generic questions while your rep has to manually pull context from four different browser tabs.",color:"var(--blue)",bg:"rgba(52,112,240,.06)",border:"rgba(52,112,240,.15)"},{icon:j,title:"Declining CSAT Goes Unnoticed",desc:"A strategic account's satisfaction score drops from 4.8 to 3.2 over three months. No alert fires. No rep is notified. The churn signal was there — but buried in a dashboard no one checks.",color:"#F5A623",bg:"rgba(245,166,35,.06)",border:"rgba(245,166,35,.15)"}];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{children:`
        .cs-problem-section {
          background: #fcfbf9;
          position: relative;
          overflow: hidden;
          padding-top: 0;
        }
        .cs-problem-wrap {
          max-width: min(96vw, 1200px);
          margin: 0 auto;
          padding: 80px clamp(20px, 4vw, 72px) 80px;
        }
        .cs-problem-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 8px 0;
        }
        .cs-problem-card {
          background: #fff;
          border-radius: 18px;
          padding: 28px;
          border: 1px solid #e8e4de;
          box-shadow: 0 4px 18px rgba(11, 22, 40, 0.03);
          transition: all .35s cubic-bezier(.16,1,.3,1);
          cursor: default;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .cs-problem-card::before {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px;
          background: var(--card-color); transform: translateY(-100%); transition: transform .3s;
        }
        .cs-problem-card:hover::before { transform: translateY(0); }
        .cs-problem-card:hover {
          transform: translateY(-8px);
          border-color: var(--card-border);
          box-shadow: 0 28px 60px rgba(11,22,40,.12);
        }
        .cs-prob-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 1px solid;
          transition: transform .3s;
          background: var(--card-bg);
          border-color: var(--card-border);
          color: var(--card-color);
        }
        .cs-problem-card:hover .cs-prob-icon-wrap {
          transform: scale(1.1) rotate(-3deg);
        }
        .cs-prob-title {
          font-size: 17px; font-weight: 600;
          color: var(--navy); margin-bottom: 12px;
          font-family: 'Fraunces', serif;
          line-height: 1.3;
        }
        .cs-prob-desc {
          font-size: 13.5px; color: var(--ink3);
          line-height: 1.65; font-weight: 300;
          flex: 1;
        }

        /* stats highlight strip */
        .cs-prob-strip {
          margin-top: 60px;
          padding: 32px;
          background: #f8f8f6;
          border: 1px solid #e8e4de;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .cs-ps-icon { color: var(--red); flex-shrink: 0; }
        .cs-ps-text { font-size: 15px; color: var(--navy); font-weight: 500; line-height: 1.5; }
        .cs-ps-text strong { color: var(--red); }

        .cs-reveal {
          opacity: 0; transform: translateY(30px);
          transition: opacity .8s ease, transform .8s cubic-bezier(.16,1,.3,1);
        }
        .cs-reveal.visible { opacity: 1; transform: none; }
        .cs-reveal-d1 { transition-delay: .1s; }
        .cs-reveal-d2 { transition-delay: .2s; }
        .cs-reveal-d3 { transition-delay: .3s; }
        .cs-reveal-d4 { transition-delay: .4s; }

        @media (max-width: 900px) {
          .cs-problem-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .cs-problem-card { padding: 24px; }
          .cs-prob-strip { flex-direction: column; text-align: center; }
        }
        @media (max-width: 480px) {
           .cs-problem-grid { grid-template-columns: 1fr; gap: 12px; }
           .cs-problem-card { padding: 20px; }
           .cs-prob-title { font-size: 15px; }
           .cs-prob-desc { font-size: 12px; }
        }
      `}),(0,d.jsx)("section",{className:"cs-problem-section",ref:a,id:"problem",children:(0,d.jsxs)("div",{className:"cs-problem-wrap",children:[(0,d.jsxs)("div",{className:"reveal cs-reveal",style:{textAlign:"center",maxWidth:800,margin:"0 auto 80px"},children:[(0,d.jsxs)("div",{className:"eyebrow eyebrow-dark",style:{justifyContent:"center"},children:[(0,d.jsx)("span",{className:"ey-line"}),"The Critical Gap"]}),(0,d.jsxs)("h2",{className:"h2 h2-ink",children:["Support is an afterthought.",(0,d.jsx)("br",{}),(0,d.jsx)("em",{children:"It costs you clients."})]}),(0,d.jsx)("p",{className:"lead lead-ink",style:{margin:"0 auto"},children:'Most companies handle post-sale issues in a disconnected system, creating a "Black Hole" where customer dissatisfaction grows in silence until it\'s too late to save the account.'})]}),(0,d.jsx)("div",{className:"cs-problem-grid",children:b.map((a,b)=>(0,d.jsxs)("div",{className:`cs-problem-card cs-reveal cs-reveal-d${b+1}`,style:{"--card-color":a.color,"--card-bg":a.bg,"--card-border":a.border},children:[(0,d.jsx)("div",{className:"cs-prob-icon-wrap",children:(0,d.jsx)(a.icon,{size:24,strokeWidth:2.2})}),(0,d.jsx)("div",{className:"cs-prob-title",children:a.title}),(0,d.jsx)("div",{className:"cs-prob-desc",children:a.desc})]},b))})]})})]})}},17727:(a,b,c)=>{"use strict";c.d(b,{default:()=>z});var d=c(48249),e=c(67484),f=c(27381),g=c(95801),h=c(1353),i=c(98631),j=c(65255);let k="#080f1e",l="#0c1526",m="#14243c",n="rgba(255,255,255,.06)",o="rgba(255,255,255,.11)",p="#e8eeff",q="#94aac4",r="#526880",s="#c49a3c",t="#17b378",u="#e0384f",v=a=>new Promise(b=>setTimeout(b,a));function w({col:a=t,sz:b=5}){return(0,d.jsx)("span",{style:{display:"inline-block",width:b,height:b,borderRadius:"50%",background:a,flexShrink:0,boxShadow:`0 0 8px ${a}aa`,animation:"aidPulse 2.2s ease-in-out infinite"}})}function x({pct:a,col:b,delay:c=0,h:f=3,show:g}){let[h,i]=(0,e.useState)(0);return(0,d.jsx)("div",{style:{height:f,borderRadius:99,background:"rgba(255,255,255,.04)",overflow:"hidden"},children:(0,d.jsx)("div",{style:{height:"100%",borderRadius:99,background:b,width:`${h}%`,transition:"width 1.4s cubic-bezier(.16,1,.3,1)",boxShadow:`0 0 10px ${b}33`}})})}function y({x:a,y:b,vis:c,ring:e}){return(0,d.jsxs)("div",{style:{position:"absolute",left:a,top:b,pointerEvents:"none",zIndex:1e3,transform:"translate(-3px,-2px)",transition:"left .6s cubic-bezier(.16,1,.3,1), top .6s cubic-bezier(.16,1,.3,1), opacity .3s",opacity:+!!c},children:[e&&(0,d.jsx)("div",{style:{position:"absolute",top:-12,left:-12,width:32,height:32,borderRadius:"50%",border:`2px solid ${s}`,opacity:0,animation:"aidRipple .6s ease-out forwards"}}),(0,d.jsx)("svg",{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.4))"},children:(0,d.jsx)("path",{d:"M4 3L18 12.5L10 14L7 22L4 3Z",fill:"white",stroke:k,strokeWidth:"1.5",strokeLinejoin:"round"})})]})}function z(){let[a,b]=(0,e.useState)(0),[c,z]=(0,e.useState)(""),[A,B]=(0,e.useState)(100),[C,D]=(0,e.useState)(100),[E,F]=(0,e.useState)(!1),[G,H]=(0,e.useState)(!1),[I,J]=(0,e.useState)(""),[K,L]=(0,e.useState)(0),[M,N]=(0,e.useState)(""),[O,P]=(0,e.useState)([]),[Q,R]=(0,e.useState)(!1),[S,T]=(0,e.useState)(!1),U=(0,e.useRef)(null),V=(0,e.useRef)(null),W=(0,e.useRef)(null),X=(0,e.useRef)(!1),Y=(0,e.useCallback)((a,b,c=600)=>(B(a),D(b),v(c)),[]),Z=(0,e.useCallback)(async()=>{H(!0),await v(400),H(!1)},[]),$=(0,e.useCallback)(async(a,b,c=40)=>{let d="";for(let e of a)b(d+=e),await v(Math.random()*c+c/2)},[]),_=(0,e.useCallback)(async()=>{if(!X.current){if(X.current=!0,b(0),z("Standby — Monitoring Incoming Requests..."),F(!1),T(!1),J(""),L(0),N(""),P([]),R(!1),await v(1500),F(!0),z("Stage 1 — Parsing Intent & Sentiment Analytics"),await Y(140,210,800),await $("I've been charged twice for my subscription and I can't reach anyone on the phone! Please fix this ASAP.",J,45),await v(800),L(22),z("✓ Critical billing intent detected \xb7 Sentiment: High Frustration"),await v(1800),b(1),z("Stage 2 — Scanning Cross-System Intelligence..."),T(!0),await Y(80,260,700),await v(400),P([{title:"Billing Sync Logs",confidence:99,type:"ERP"},{title:"Commercial Deal #8822",confidence:91,type:"CRM"}]),await v(1200),T(!1),L(55),z("✓ Duplicate payment verified in Stripe metadata. Solution found."),await v(2e3),b(2),z("Stage 3 — Drafting Context-Aware Resolution..."),await Y(200,240,700),b(2),z("Stage 3 — Drafting Context-Aware Resolution..."),await Y(200,240,700),await $("Hello! I've located the duplicate transaction (Ref: #882A) caused by a momentary sync lag. I've already initiated a direct refund which will appear in 3-5 days. I've also added a 10% credit to your next bill as a goodwill gesture for the inconvenience.",N,25),await v(1e3),z("Proposal ready for Governance check."),await v(1800),b(3),z("Stage 4 — Human-in-the-Loop Approval"),W.current&&V.current){let a=V.current.getBoundingClientRect(),b=W.current.getBoundingClientRect();await Y(b.left-a.left+b.width/2,b.top-a.top+b.height/2,900),await Z(),R(!0),L(98),z("✓ Response Dispatched. Strategic relationship secured.")}await v(3500),F(!1),X.current=!1,setTimeout(_,2e3)}},[Y,Z,$]);return(0,d.jsxs)("section",{className:"cs-ai-intelligence",ref:U,id:"ai-intelligence",children:[(0,d.jsx)("style",{children:`
        .cs-ai-intelligence { background: var(--cream); padding: clamp(80px, 10vw, 140px) 0; overflow: hidden; }
        .cs-ai-grid { max-width: 1200px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 40px); display: grid; grid-template-columns: 1fr 1.4fr; gap: 100px; align-items: start; }
        
        .cs-ai-content { position: relative; z-index: 2; }
        .cs-ai-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 24px; }
        .cs-ai-ey-line { width: 32px; height: 1.5px; background: var(--gold); border-radius: 99px; }
        .cs-ai-h2 { font-family: 'Fraunces', serif; font-size: clamp(36px, 4.5vw, 54px); line-height: 1.05; color: var(--navy); margin-bottom: 32px; font-weight: 400; }
        
        /* Feature Cards with Hover Effects */
        .cs-ai-feature-card {
          border-radius: 16px;
          padding: 20px 24px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .cs-ai-feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.35s;
          z-index: 0;
        }
        .cs-ai-feature-card > * {
          position: relative;
          z-index: 1;
        }
        
        .cs-ai-feature-white {
          background: white;
          border: 1px solid #e8e4de;
        }
        .cs-ai-feature-white::before {
          background: radial-gradient(circle at 50% 0%, rgba(196,154,60,0.08) 0%, transparent 70%);
        }
        .cs-ai-feature-white:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
          border-color: rgba(196,154,60,0.3);
        }
        .cs-ai-feature-white:hover::before {
          opacity: 1;
        }
        
        .cs-ai-feature-gold {
          background: rgba(196,154,60,0.04);
          border: 1px solid rgba(196,154,60,0.1);
        }
        .cs-ai-feature-gold::before {
          background: radial-gradient(circle at 50% 0%, rgba(196,154,60,0.12) 0%, transparent 70%);
        }
        .cs-ai-feature-gold:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(196,154,60,0.15);
          border-color: rgba(196,154,60,0.35);
          background: rgba(196,154,60,0.08);
        }
        .cs-ai-feature-gold:hover::before {
          opacity: 1;
        }
        
        .cs-ai-feature-icon {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 10px;
        }
        .cs-ai-feature-card:hover .cs-ai-feature-icon {
          transform: scale(1.15) rotate(-5deg);
          filter: drop-shadow(0 4px 8px rgba(196,154,60,0.4));
        }
        .cs-ai-h2 em { font-style: italic; color: var(--gold); font-weight: 300; }
        .cs-ai-lead { font-size: 17px; color: var(--ink3); line-height: 1.7; margin-bottom: 40px; font-weight: 300; max-width: 480px; }
        .cs-dash-wrapper { margin-top: 156px; }

        /* Dashboard Shell */
        .cs-dash-shell {
          background: ${k};
          border-radius: 20px;
          border: 1px solid ${o};
          box-shadow: 0 40px 100px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04);
          position: relative; overflow: hidden;
          aspect-ratio: 16 / 13;
          display: flex; flex-direction: column;
          color: white;
        }

        .cs-dash-top { height: 40px; background: ${l}; border-bottom: 1px solid ${n}; display: flex; align-items: center; padding: 0 16px; gap: 12px; position: relative; z-index: 10; }
        .cs-dash-dots { display: flex; gap: 6px; }
        .cs-dash-dot { width: 9px; height: 9px; border-radius: 50%; }

        .cs-dash-main { flex: 1; display: grid; grid-template-columns: 180px 1fr; overflow: hidden; }
        .cs-dash-side { background: ${l}; border-right: 1px solid ${n}; padding: 20px; display: flex; flex-direction: column; gap: 20px; }
        
        .cs-dash-body { padding: 20px; position: relative; overflow: hidden; display: flex; flex-direction: column; }
        .cs-scan-line { position: absolute; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, ${s}, transparent); top: 0; z-index: 5; box-shadow: 0 0 12px ${s}; animation: dashScan 2s linear infinite; display: none; }
        .cs-scan-line.active { display: block; }
        @keyframes dashScan { from { top: 0; } to { top: 100%; } }

        .cs-step-pills { display: flex; gap: 6px; margin-bottom: 20px; }
        .cs-step-pill { flex: 1; height: 3px; border-radius: 4px; background: ${o}; transition: all .6s; }
        .cs-step-pill.active { background: var(--gold); box-shadow: 0 0 8px var(--gold); }
        .cs-step-pill.done { background: ${t}; }

        .cs-ticket-card { background: ${m}; border: 1px solid ${o}; border-radius: 10px; padding: 14px; font-size: 11.5px; line-height: 1.5; color: ${q}; position: relative; }
        .cs-draft-box { background: rgba(255,255,255,0.02); border: 1px dashed rgba(196,154,60,0.3); border-radius: 10px; padding: 14px; margin-top: 16px; font-size: 11.5px; line-height: 1.5; color: ${p}; position: relative; animation: dashFadeIn 0.5s ease; }
        @keyframes dashFadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }

        .cs-caption-dock { height: 38px; background: #000; border-top: 1px solid ${n}; display: flex; align-items: center; padding: 0 18px; font-size: 10px; color: ${q}; gap: 10px; letter-spacing: 0.5px; }

        .cs-btn-action { padding: 10px 20px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; border: none; transition: all .3s cubic-bezier(.22,1,.36,1); }
        .cs-btn-approve { background: var(--gold); color: ${k}; }
        .cs-btn-approve.success { background: ${t}; color: white; }

        @keyframes aidPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.5; } }
        @keyframes aidRipple { 0% { transform: scale(0.3); opacity: 1; } 100% { transform: scale(3.5); opacity: 0; } }

        @media (max-width: 1024px) {
          .cs-ai-grid { grid-template-columns: 1fr; text-align: center; gap: 48px; }
          .cs-ai-lead { margin: 0 auto 40px; }
          .cs-dash-wrapper { margin-top: 0; }
          .cs-dash-shell { aspect-ratio: 16/13; }
        }
        @media (max-width: 768px) {
          .cs-dash-side { display: none; }
          .cs-dash-main { grid-template-columns: 1fr; }
          .cs-dash-shell { aspect-ratio: 1/1; }
        }
      `}),(0,d.jsxs)("div",{className:"cs-ai-grid",ref:V,children:[(0,d.jsxs)("div",{className:"cs-ai-content reveal",children:[(0,d.jsxs)("div",{className:"cs-ai-eyebrow",children:[(0,d.jsx)("span",{className:"cs-ai-ey-line"})," Native Intelligence"]}),(0,d.jsxs)("h2",{className:"cs-ai-h2",children:["The AI knows the deal",(0,d.jsx)("br",{}),(0,d.jsx)("em",{children:"Inside and out."})]}),(0,d.jsx)("p",{className:"cs-ai-lead",children:"ClientEra's AI doesn't just read the ticket. It reads the customer's full history — commercial value, historical sentiment, and operational commitments — to resolve issues before they escalate."}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[(0,d.jsxs)("div",{className:"cs-ai-feature-card cs-ai-feature-white",children:[(0,d.jsx)(f.A,{size:18,color:"var(--gold)",className:"cs-ai-feature-icon"}),(0,d.jsx)("div",{style:{fontSize:13,fontWeight:700,color:"var(--navy)",marginBottom:4},children:"Cross-Silo Context"}),(0,d.jsx)("div",{style:{fontSize:11,color:"var(--ink3)",lineHeight:1.5},children:"Aggregates data from Zendesk, Freshdesk, and internal ERPs automatically."})]}),(0,d.jsxs)("div",{className:"cs-ai-feature-card cs-ai-feature-gold",children:[(0,d.jsxs)("div",{style:{fontSize:13,fontWeight:700,color:"var(--gold)",marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[(0,d.jsx)(g.A,{size:14,className:"cs-ai-feature-icon"})," 72% Efficiency"]}),(0,d.jsx)("div",{style:{fontSize:11,color:"var(--ink3)",lineHeight:1.5},children:"Reduction in first-response time across elite enterprise deployments."})]})]})]}),(0,d.jsx)("div",{className:"cs-dash-wrapper reveal",children:(0,d.jsxs)("div",{className:"cs-dash-shell",children:[(0,d.jsxs)("div",{className:"cs-dash-top",children:[(0,d.jsxs)("div",{className:"cs-dash-dots",children:[(0,d.jsx)("div",{className:"cs-dash-dot",style:{background:"#FF5F57"}}),(0,d.jsx)("div",{className:"cs-dash-dot",style:{background:"#FFBD2E"}}),(0,d.jsx)("div",{className:"cs-dash-dot",style:{background:"#28C840"}})]}),(0,d.jsx)("div",{style:{fontSize:10,color:r,letterSpacing:1.2,fontWeight:500},children:"AI_COPILOT_CMD_CENTER v4.0"})]}),(0,d.jsxs)("div",{className:"cs-dash-main",children:[(0,d.jsxs)("div",{className:"cs-dash-side",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{fontSize:8.5,fontWeight:700,color:r,textTransform:"uppercase",letterSpacing:1.8,marginBottom:12},children:"Sentiment Analysis"}),(0,d.jsxs)("div",{style:{background:m,border:`1px solid ${o}`,borderRadius:10,padding:12},children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,alignItems:"center"},children:[(0,d.jsx)("span",{style:{fontSize:16},children:K>50?"\uD83D\uDE42":"\uD83D\uDE21"}),(0,d.jsxs)("span",{style:{fontSize:11,fontWeight:700,color:K>50?t:u},children:[K,"%"]})]}),(0,d.jsx)(x,{pct:K,col:K>50?t:u,show:!0})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{fontSize:8.5,fontWeight:700,color:r,textTransform:"uppercase",letterSpacing:1.8,marginBottom:12},children:"Knowledge Hits"}),(0,d.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:0===O.length?(0,d.jsx)("div",{style:{padding:12,border:`1px dashed ${n}`,borderRadius:8,fontSize:9,color:r,textAlign:"center"},children:"Awaiting Scan..."}):O.map((a,b)=>(0,d.jsxs)("div",{className:"dashFadeIn",style:{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:10,border:`1px solid ${n}`},children:[(0,d.jsx)("div",{style:{fontSize:10,fontWeight:700,color:p,marginBottom:4},children:a.title}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",fontSize:8},children:[(0,d.jsxs)("span",{style:{color:r},children:["Source: ",a.type]}),(0,d.jsxs)("span",{style:{color:t},children:[a.confidence,"% Match"]})]})]},b))})]}),(0,d.jsxs)("div",{style:{marginTop:"auto",background:"rgba(196,154,60,0.06)",borderRadius:10,padding:12,border:`1px solid ${o}`,textAlign:"center"},children:[(0,d.jsx)(h.A,{size:18,color:"var(--gold)",style:{margin:"0 auto 8px",animation:"aidPulse 2s infinite"}}),(0,d.jsx)("div",{style:{fontSize:8,fontWeight:700,color:"var(--gold)",letterSpacing:1},children:"AUTO-OPTIMIZING"})]})]}),(0,d.jsxs)("div",{className:"cs-dash-body",children:[(0,d.jsx)(y,{x:A,y:C,vis:E,ring:G}),(0,d.jsx)("div",{className:`cs-scan-line ${S?"active":""}`}),(0,d.jsx)("div",{className:"cs-step-pills",children:[0,1,2,3].map(b=>(0,d.jsx)("div",{className:`cs-step-pill ${a>=b?3===a&&Q?"done":"active":""}`},b))}),(0,d.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[(0,d.jsx)("div",{style:{width:32,height:32,borderRadius:8,background:"#192D48",border:`1px solid ${n}`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)(i.A,{size:16,color:q})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{style:{fontSize:12,fontWeight:700,color:p},children:"Amit K. (Bharti Airtel)"}),(0,d.jsx)("div",{style:{fontSize:9,color:r},children:"Strategic Enterprise Acc."})]})]}),(0,d.jsxs)("div",{className:"cs-ticket-card",children:[I,0===a&&0===I.length&&(0,d.jsx)("span",{className:"cs-ai-cursor"})]}),a>=2&&(0,d.jsxs)("div",{className:"cs-draft-box",children:[(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[(0,d.jsx)(j.A,{size:14,color:"var(--gold)"}),(0,d.jsx)("span",{style:{fontSize:10,fontWeight:700,color:"var(--gold)",letterSpacing:1},children:"AI RESOLUTION SUGGESTION"})]}),(0,d.jsxs)("div",{style:{color:"rgba(255,255,255,.85)",fontSize:12},children:[M,2===a&&M.length<100&&(0,d.jsx)("span",{className:"cs-ai-cursor"})]})]}),3===a&&(0,d.jsxs)("div",{style:{marginTop:"auto",display:"flex",gap:10,justifyContent:"flex-end"},children:[(0,d.jsx)("button",{className:"cs-btn-action",style:{background:"rgba(255,255,255,0.05)",color:q,border:`1.5px solid ${o}`},children:"Regenerate"}),(0,d.jsx)("button",{ref:W,className:`cs-btn-action cs-btn-approve ${Q?"success":""}`,children:Q?"Response Sent ✓":"Send Resolution"})]})]})]})]}),(0,d.jsxs)("div",{className:"cs-caption-dock",children:[(0,d.jsx)(w,{col:s}),(0,d.jsx)("span",{children:c})]})]})})]})]})}},17891:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/get-segment-param")},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19794:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},20564:(a,b,c)=>{"use strict";c.d(b,{default:()=>m});var d=c(48249),e=c(86718),f=c(95801),g=c(51658);let h=(0,c(63871).A)("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);var i=c(12329),j=c(46674),k=c(42742);let l=[{dim:"Customer Context",legacy:"Isolated ticket snapshots",clientera:"Unified 360\xb0 Commercial Timeline",icon:e.A},{dim:"Agent Empowerment",legacy:"Blind troubleshooting",clientera:"Real-time Sales & Deal Visibility",icon:f.A},{dim:"Account Health",legacy:"Static CSAT collections",clientera:"Predictive Churn Risk Indicators",icon:g.A},{dim:"Commercial Link",legacy:"Manual CRM updates",clientera:"Native Billing & ERP Integration",icon:h},{dim:"Strategic AI",legacy:"Generic support chatbots",clientera:"Deep-Silo Context Retrieval",icon:i.A}];function m(){return(0,d.jsxs)("section",{id:"comparison",className:"cs-comp-section section-dark",children:[(0,d.jsx)("style",{children:`
        .cs-comp-section { padding: 80px 0; background: var(--navy); color: white; position: relative; overflow: hidden; }
        .cs-comp-wrap { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        
        .cs-comp-header { text-align: center; max-width: 800px; margin: 0 auto 64px; }
        
        .cs-table-surface {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
        }

        .cs-table-head {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cs-head-cell { padding: 24px 32px; font-size: 11px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 2px; }
        .cs-head-gold { color: var(--gold); border-left: 1px solid rgba(196,154,60,0.2); background: rgba(196,154,60,0.06); }

        .cs-table-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .cs-table-row:hover { background: rgba(255,255,255,0.02); transform: scale(1.005); z-index: 10; }
        .cs-table-row:last-child { border: none; }

        .cs-cell { padding: 24px 32px; display: flex; align-items: center; gap: 16px; font-size: 15px; }
        .cs-dim-cell { font-weight: 600; color: white; border-right: 1px solid rgba(255,255,255,0.04); }
        .cs-legacy-cell { color: var(--text3); font-style: italic; opacity: 0.8; }
        .cs-success-cell {
          color: white; font-weight: 500;
          background: rgba(196,154,60,0.02);
          border-left: 1px solid rgba(196,154,60,0.15);
          box-shadow: inset 0 0 40px rgba(196,154,60,0.02);
        }

        @media (max-width: 1024px) {
          .cs-table-head, .cs-table-row { grid-template-columns: 1fr 1.5fr 1.5fr; }
        }
        @media (max-width: 768px) {
          .cs-table-head { display: none; }
          .cs-table-row { grid-template-columns: 1fr; gap: 0; padding: 20px; border-bottom: 2px solid rgba(255,255,255,0.08); }
          .cs-cell { padding: 12px 0; border: none !important; }
          .cs-success-cell { background: none; }
        }
      `}),(0,d.jsxs)("div",{className:"cs-comp-wrap",children:[(0,d.jsxs)("div",{className:"cs-comp-header reveal",children:[(0,d.jsxs)("div",{className:"eyebrow",style:{justifyContent:"center"},children:[(0,d.jsx)("span",{className:"ey-line"})," The Competitive Edge"]}),(0,d.jsxs)("h2",{className:"h2",style:{color:"white"},children:["Legacy Systems vs.",(0,d.jsx)("br",{}),(0,d.jsx)("em",{children:"ClientEra Success."})]}),(0,d.jsx)("p",{className:"lead",style:{margin:"0 auto",color:"var(--text2)"},children:"Old tools track what happened. ClientEra calculates what your team should do next — and ensures no commercial context is lost in the silos of support."})]}),(0,d.jsxs)("div",{className:"cs-table-surface reveal",children:[(0,d.jsxs)("div",{className:"cs-table-head",children:[(0,d.jsx)("div",{className:"cs-head-cell",children:"Dimension"}),(0,d.jsx)("div",{className:"cs-head-cell",children:"Legacy SaaS"}),(0,d.jsx)("div",{className:"cs-head-cell cs-head-gold",children:"ClientEra Support"})]}),l.map((a,b)=>(0,d.jsxs)("div",{className:"cs-table-row",children:[(0,d.jsxs)("div",{className:"cs-cell cs-dim-cell",children:[(0,d.jsx)(a.icon,{size:18,color:"var(--gold)"}),a.dim]}),(0,d.jsxs)("div",{className:"cs-cell cs-legacy-cell",children:[(0,d.jsx)(j.A,{size:14,color:"var(--red)"})," ",a.legacy]}),(0,d.jsxs)("div",{className:"cs-cell cs-success-cell",children:[(0,d.jsx)(k.A,{size:16,color:"var(--gold)"})," ",a.clientera]})]},a.dim))]})]})]})}},22341:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]])},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},26892:(a,b,c)=>{"use strict";c.d(b,{default:()=>e});var d=c(48249);function e(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{children:`
        /* ── CS HERO ── */
        .cs-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--navy);
        }
        .cs-hero-grid-wrapper {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
          padding-top: clamp(80px, 8vh, 100px);
          padding-bottom: clamp(40px, 6vh, 80px);
          flex: 1;
        }

        /* animated bg canvas */
        .cs-hero-canvas {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 1;
        }
        .cs-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 55%, rgba(196, 154, 60, .07) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 20%, rgba(52, 112, 240, .05) 0%, transparent 50%),
            radial-gradient(ellipse at 10% 80%, rgba(24,184,122,.04) 0%, transparent 40%);
        }
        .cs-hero-grid {
          position: absolute;
          inset: -60%;
          background-image:
            linear-gradient(rgba(196,154,60,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,154,60,.05) 1px, transparent 1px);
          background-size: 72px 72px;
          animation: csGridShift 60s linear infinite;
        }
        .cs-orb1 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: rgba(196,154,60,.06);
          bottom: -120px; right: -120px;
          filter: blur(90px);
          animation: csOrbFloat 24s 2s ease-in-out infinite;
        }
        .cs-orb2 {
          position: absolute;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: rgba(52,112,240,.14);
          top: 35%; left: 52%;
          filter: blur(85px);
          animation: csOrbFloat 34s 5s ease-in-out infinite;
        }
        .cs-orb3 {
          position: absolute;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(24,184,122,.08);
          top: 10%; left: 20%;
          filter: blur(70px);
          animation: csOrbFloat 28s 8s ease-in-out infinite;
        }
        .cs-data-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(196,154,60,.45), transparent);
          animation: csDataFlow 9s ease-in-out infinite;
          animation-fill-mode: both;
          opacity: 0;
        }

        .cs-hero-left {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cs-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: clamp(9px, 2.2vw, 11px);
          font-weight: 500;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: clamp(16px,2.5vw,26px);
          opacity: 0;
          animation: csUp .6s .1s forwards;
        }
        .cs-ey-line { width: 20px; height: 1px; background: var(--gold); }
        .cs-hero-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(32px, 4.5vw, 64px);
          line-height: 1.08;
          letter-spacing: clamp(-0.5px, -0.15vw, -1.5px);
          color: var(--text);
          margin-bottom: clamp(12px, 2vw, 20px);
          opacity: 0;
          animation: csUp .65s .2s forwards;
        }
        .cs-hero-h1 em { font-style: italic; color: var(--gold); font-weight: 300; }
        .cs-hero-sub {
          font-size: clamp(15px, 1.2vw, 18px);
          color: var(--text2);
          max-width: min(100%, 500px);
          line-height: 1.72;
          margin-bottom: clamp(24px, 4vw, 36px);
          font-weight: 300;
          opacity: 0;
          animation: csUp .65s .32s forwards;
        }
        .cs-hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: clamp(32px, 5vw, 52px);
          opacity: 0;
          animation: csUp .65s .42s forwards;
        }
        .cs-btn-hero-gold {
          font-size: 14.5px; font-weight: 600;
          color: var(--navy); background: var(--gold);
          border: none; border-radius: 10px;
          padding: 13px 28px; cursor: pointer;
          text-decoration: none;
          transition: all .2s;
          display: inline-flex; align-items: center;
          white-space: nowrap;
        }
        .cs-btn-hero-gold:hover {
          background: var(--gold2);
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(196,154,60,.3);
        }
        .cs-btn-hero-outline {
          font-size: 14.5px; font-weight: 400;
          color: var(--text); background: none;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 10px; padding: 13px 28px;
          cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center;
          white-space: nowrap; transition: all .2s;
        }
        .cs-btn-hero-outline:hover { border-color: rgba(255,255,255,.28); }

        /* right floating cards */
        .cs-hero-right {
          position: relative;
          height: 90vh;
          z-index: 10;
          opacity: 0;
          animation: csFade .8s .35s forwards;
        }

        /* Ticket card */
        .cs-hcard {
          position: absolute;
          background: rgba(13,28,52,.9);
          backdrop-filter: blur(22px);
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 14px;
          box-shadow: 0 20px 52px rgba(0,0,0,.38), 0 0 0 1px rgba(255,255,255,.03);
        }
        .cs-hcard-main {
          width: clamp(320px, 34vw, 520px);
          top: 15%; right: 0%;
          animation: csFloatA 8s 1s ease-in-out infinite;
          z-index: 14;
        }
        .cs-hcard-sla {
          width: clamp(200px, 18vw, 270px);
          top: 62%; right: calc(38% + 50px);
          animation: csFloatB 7s 2s ease-in-out infinite;
          z-index: 18;
        }
        .cs-hcard-csat {
          width: clamp(160px, 14vw, 220px);
          top: 68%; right: -2%;
          animation: csFloatC 9s 1.5s ease-in-out infinite;
          z-index: 18;
        }

        .cs-card-titlebar {
          height: 30px;
          background: rgba(255,255,255,.035);
          border-bottom: 1px solid rgba(255,255,255,.07);
          display: flex; align-items: center; gap: 5px;
          padding: 0 11px; border-radius: 14px 14px 0 0;
        }
        .cs-wdot { width: 8px; height: 8px; border-radius: 50%; }
        .cs-wd-r { background: #FF5F57; }
        .cs-wd-y { background: #FFBD2E; }
        .cs-wd-g { background: #28C840; }
        .cs-card-lbl { font-size: 9.5px; color: var(--text3); margin: 0 auto; }
        .cs-card-body { padding: 14px 16px; }

        /* ticket rows */
        .cs-ticket-row {
          display: flex; align-items: center; gap: 9px;
          padding: 8px 10px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 9px; margin-bottom: 6px;
        }
        .cs-tk-priority {
          width: 6px; height: 6px;
          border-radius: 50%; flex-shrink: 0;
        }
        .cs-tk-p-critical { background: #E0384F; box-shadow: 0 0 6px rgba(224,56,79,.5); }
        .cs-tk-p-high { background: #F5A623; }
        .cs-tk-p-medium { background: var(--gold); }
        .cs-tk-p-low { background: var(--green); }
        .cs-tk-id { font-size: 9px; color: var(--text3); font-family: monospace; flex-shrink: 0; }
        .cs-tk-subject { font-size: 11px; font-weight: 600; color: var(--text); flex: 1; }
        .cs-tk-account { font-size: 9px; color: var(--text3); margin-top: 1px; }
        .cs-tk-status {
          font-size: 8px; font-weight: 700;
          padding: 2px 7px; border-radius: 100px;
          white-space: nowrap; flex-shrink: 0;
        }
        .cs-tk-open { background: rgba(224,56,79,.12); color: #E0384F; border: 1px solid rgba(224,56,79,.25); }
        .cs-tk-progress { background: rgba(245,166,35,.11); color: #F5A623; border: 1px solid rgba(245,166,35,.25); }
        .cs-tk-pending { background: rgba(52,112,240,.1); color: var(--blue); border: 1px solid rgba(52,112,240,.25); }
        .cs-tk-resolved { background: rgba(24,184,122,.1); color: var(--green); border: 1px solid rgba(24,184,122,.25); }

        /* SLA card */
        .cs-sla-body { padding: 12px 14px; }
        .cs-sla-lbl {
          font-size: 8.5px; font-weight: 700;
          color: var(--gold); text-transform: uppercase;
          letter-spacing: 1.5px; margin-bottom: 10px;
          display: flex; align-items: center; gap: 5px;
        }
        .cs-sla-live-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--red); animation: csPulse 1.5s infinite;
        }
        .cs-sla-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .cs-sla-bar-wrap { flex: 1; height: 5px; background: rgba(255,255,255,.08); border-radius: 3px; overflow: hidden; }
        .cs-sla-bar-fill { height: 100%; border-radius: 3px; }
        .cs-sla-pct { font-size: 9px; color: var(--text3); width: 28px; text-align: right; }
        .cs-sla-name { font-size: 9px; color: var(--text2); width: 60px; }

        /* CSAT card */
        .cs-csat-body { padding: 12px 14px; }
        .cs-csat-lbl {
          font-size: 8.5px; color: var(--text3);
          text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 8px;
        }
        .cs-csat-score {
          font-family: 'Fraunces', serif;
          font-size: 28px; color: var(--green);
          margin-bottom: 4px; line-height: 1;
        }
        .cs-csat-sub { font-size: 9px; color: var(--text3); margin-bottom: 8px; }
        .cs-csat-stars { display: flex; gap: 3px; }
        .cs-csat-star { color: var(--gold); font-size: 12px; }

        /* stats bar */
        .cs-hero-stats-bar {
          grid-column: 1 / -1;
          position: relative; z-index: 10;
          display: flex; align-items: stretch;
          background: rgba(255,255,255,.032);
          border-top: 1px solid rgba(255,255,255,.07);
          backdrop-filter: blur(14px);
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          margin-top: auto;
        }
        .cs-hero-stats-bar::-webkit-scrollbar { display: none; }

        .cs-hsb-item {
          flex: 1; text-align: center; padding: 20px 16px;
          border-right: 1px solid rgba(255,255,255,.07);
          position: relative; overflow: hidden;
          transition: background .3s;
          scroll-snap-align: center;
        }
        .cs-hsb-item:last-child { border-right: none; }
        .cs-hsb-item::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(196,154,60,.09) 0%, transparent 68%);
          opacity: 0; transition: opacity .35s;
        }
        .cs-hsb-item:hover::before { opacity: 1; }
        .cs-hsb-num {
          font-family: 'Fraunces', serif;
          font-size: clamp(22px, 2vw, 34px);
          color: var(--text); letter-spacing: -1px;
          line-height: 1.2; margin-bottom: 6px;
        }
        .cs-hsb-lbl {
          font-size: 9.5px;
          color: rgba(255,255,255,.36);
          letter-spacing: 1.5px;
          text-transform: uppercase; font-weight: 500;
        }

        /* keyframes */
        @keyframes csGridShift { from { transform: translate(0,0); } to { transform: translate(72px,72px); } }
        @keyframes csOrbFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(20px,-30px) scale(1.06); }
          66% { transform: translate(-12px,18px) scale(.97); }
        }
        @keyframes csDataFlow {
          0%,100% { opacity:0; transform: translateX(-200%); }
          50% { opacity:1; transform: translateX(200%); }
        }
        @keyframes csFloatA { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes csFloatB { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        @keyframes csFloatC { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes csUp { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform: translateY(0); } }
        @keyframes csFade { from { opacity:0; } to { opacity:1; } }
        @keyframes csPulse { 0%,100% { opacity:1; transform: scale(1); } 50% { opacity:.3; transform: scale(1.4); } }

        /* responsive */
        @media (max-width: 900px) {
          .cs-hero { min-height: auto !important; padding-bottom: 0 !important; }
          .cs-hero-grid-wrapper { 
             grid-template-columns: 1fr !important; 
             padding-top: 60px !important; 
             text-align: center !important; 
          }
          .cs-hero-grid-wrapper > div { align-items: center !important; }
          .cs-hero-sub { margin-left: auto !important; margin-right: auto !important; }
          .cs-hero-right { display: none !important; }
          .cs-hero-stats-bar { 
             mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent);
          }
          .cs-hsb-item { flex: 0 0 150px; }
        }
        @media (max-width: 500px) {
          .cs-hero-h1 { font-size: clamp(36px, 10vw, 48px); }
          .cs-btn-hero-gold, .cs-btn-hero-outline { white-space: nowrap !important; }
          .cs-hsb-item { flex: 0 0 140px; padding: 12px 8px; }
          .cs-hsb-num { font-size: 24px; }
        }
      `}),(0,d.jsxs)("section",{className:"cs-hero",children:[(0,d.jsxs)("div",{className:"cs-hero-canvas",children:[(0,d.jsx)("div",{className:"cs-hero-bg"}),(0,d.jsx)("div",{className:"cs-hero-grid"}),(0,d.jsx)("div",{className:"cs-orb1"}),(0,d.jsx)("div",{className:"cs-orb2"}),(0,d.jsx)("div",{className:"cs-orb3"}),(0,d.jsx)("div",{className:"cs-data-line",style:{top:"20%",width:"40%",left:"-5%",animationDelay:"-2s",animationDuration:"9s"}}),(0,d.jsx)("div",{className:"cs-data-line",style:{top:"42%",width:"35%",left:"8%",animationDelay:"-5s",animationDuration:"11s"}}),(0,d.jsx)("div",{className:"cs-data-line",style:{top:"65%",width:"50%",left:"-6%",animationDelay:"-1s",animationDuration:"8s"}}),(0,d.jsx)("div",{className:"cs-data-line",style:{top:"82%",width:"38%",left:"12%",animationDelay:"-7s",animationDuration:"10s"}})]}),(0,d.jsxs)("div",{className:"wrap cs-hero-grid-wrapper",children:[(0,d.jsxs)("div",{className:"cs-hero-left",children:[(0,d.jsxs)("div",{className:"cs-hero-eyebrow",children:[(0,d.jsx)("div",{className:"cs-ey-line"}),"Customer Support & Ticketing"]}),(0,d.jsxs)("h1",{className:"cs-hero-h1",children:["Every ticket solved.",(0,d.jsx)("br",{}),"Every client kept.",(0,d.jsx)("br",{}),(0,d.jsx)("em",{children:"Context never lost."})]}),(0,d.jsx)("p",{className:"cs-hero-sub",children:"Native ticketing built into the same platform where deals are closed. Your reps see open issues before every visit. SLAs auto-track. AI drafts the response."}),(0,d.jsxs)("div",{className:"cs-hero-ctas",children:[(0,d.jsx)("a",{href:"#features",className:"cs-btn-hero-gold",children:"See it in action"}),(0,d.jsx)("a",{href:"#comparison",className:"cs-btn-hero-outline",children:"Compare to legacy tools"})]})]}),(0,d.jsxs)("div",{className:"cs-hero-right",children:[(0,d.jsxs)("div",{className:"cs-hcard cs-hcard-main",children:[(0,d.jsxs)("div",{className:"cs-card-titlebar",children:[(0,d.jsx)("div",{className:"cs-wdot cs-wd-r"}),(0,d.jsx)("div",{className:"cs-wdot cs-wd-y"}),(0,d.jsx)("div",{className:"cs-wdot cs-wd-g"}),(0,d.jsx)("div",{className:"cs-card-lbl",children:"ClientEra — Support Queue"})]}),(0,d.jsxs)("div",{className:"cs-card-body",children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"},children:[(0,d.jsx)("span",{style:{fontSize:"10px",fontWeight:700,color:"var(--text2)"},children:"OPEN TICKETS"}),(0,d.jsx)("span",{style:{fontSize:"9px",color:"var(--gold)",fontWeight:600},children:"8 active \xb7 2 breaching SLA"})]}),[{id:"TK-2041",subject:"Delivery shortfall — PO #4821",account:"Reliance Retail",priority:"cs-tk-p-critical",status:"cs-tk-open",statusLabel:"Critical"},{id:"TK-2038",subject:"Invoice discrepancy on SO-891",account:"Tata Steel",priority:"cs-tk-p-high",status:"cs-tk-progress",statusLabel:"In Progress"},{id:"TK-2035",subject:"Product quality complaint — Batch 7",account:"Mahindra Logistics",priority:"cs-tk-p-medium",status:"cs-tk-pending",statusLabel:"Pending Client"},{id:"TK-2031",subject:"ETA change request for May delivery",account:"Infosys Procurement",priority:"cs-tk-p-low",status:"cs-tk-resolved",statusLabel:"Resolved"}].map(a=>(0,d.jsxs)("div",{className:"cs-ticket-row",children:[(0,d.jsx)("div",{className:`cs-tk-priority ${a.priority}`}),(0,d.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,d.jsx)("div",{className:"cs-tk-subject",children:a.subject}),(0,d.jsx)("div",{className:"cs-tk-account",children:a.account})]}),(0,d.jsx)("div",{className:"cs-tk-id",children:a.id}),(0,d.jsx)("span",{className:`cs-tk-status ${a.status}`,children:a.statusLabel})]},a.id)),(0,d.jsxs)("div",{style:{marginTop:"10px",padding:"8px 10px",background:"rgba(196,154,60,.07)",border:"1px solid rgba(196,154,60,.18)",borderRadius:"8px",display:"flex",alignItems:"center",gap:"8px"},children:[(0,d.jsx)("div",{style:{width:"7px",height:"7px",borderRadius:"50%",background:"var(--gold)",flexShrink:0,animation:"csPulse 2s infinite"}}),(0,d.jsxs)("span",{style:{fontSize:"10px",color:"var(--text2)"},children:["AI drafted reply for TK-2041 — ",(0,d.jsx)("span",{style:{color:"var(--gold)",fontWeight:600},children:"Review & Send"})]})]})]})]}),(0,d.jsxs)("div",{className:"cs-hcard cs-hcard-sla",children:[(0,d.jsxs)("div",{className:"cs-card-titlebar",children:[(0,d.jsx)("div",{className:"cs-wdot cs-wd-r"}),(0,d.jsx)("div",{className:"cs-wdot cs-wd-y"}),(0,d.jsx)("div",{className:"cs-wdot cs-wd-g"}),(0,d.jsx)("div",{className:"cs-card-lbl",children:"SLA Tracker"})]}),(0,d.jsxs)("div",{className:"cs-sla-body",children:[(0,d.jsxs)("div",{className:"cs-sla-lbl",children:[(0,d.jsx)("div",{className:"cs-sla-live-dot"}),"Live SLA Health"]}),[{name:"Critical",pct:72,color:"#E0384F"},{name:"High",pct:88,color:"#F5A623"},{name:"Medium",pct:94,color:"var(--gold)"},{name:"Low",pct:98,color:"var(--green)"}].map(a=>(0,d.jsxs)("div",{className:"cs-sla-row",children:[(0,d.jsx)("span",{className:"cs-sla-name",children:a.name}),(0,d.jsx)("div",{className:"cs-sla-bar-wrap",children:(0,d.jsx)("div",{className:"cs-sla-bar-fill",style:{width:`${a.pct}%`,background:a.color}})}),(0,d.jsxs)("span",{className:"cs-sla-pct",children:[a.pct,"%"]})]},a.name))]})]}),(0,d.jsxs)("div",{className:"cs-hcard cs-hcard-csat",children:[(0,d.jsxs)("div",{className:"cs-card-titlebar",children:[(0,d.jsx)("div",{className:"cs-wdot cs-wd-r"}),(0,d.jsx)("div",{className:"cs-wdot cs-wd-y"}),(0,d.jsx)("div",{className:"cs-wdot cs-wd-g"}),(0,d.jsx)("div",{className:"cs-card-lbl",children:"CSAT"})]}),(0,d.jsxs)("div",{className:"cs-csat-body",children:[(0,d.jsx)("div",{className:"cs-csat-lbl",children:"Satisfaction Score"}),(0,d.jsx)("div",{className:"cs-csat-score",children:"4.7"}),(0,d.jsx)("div",{className:"cs-csat-sub",children:"↑ +0.3 vs last month"}),(0,d.jsx)("div",{className:"cs-csat-stars",children:[1,2,3,4,5].map(a=>(0,d.jsx)("span",{className:"cs-csat-star",children:a<=4?"★":"☆"},a))})]})]})]})]}),(0,d.jsxs)("div",{className:"cs-hero-stats-bar",children:[(0,d.jsxs)("div",{className:"cs-hsb-item",children:[(0,d.jsxs)("div",{className:"cs-hsb-num",children:[(0,d.jsx)("span",{className:"cs-cu","data-t":"94",children:"0"}),"%"]}),(0,d.jsx)("div",{className:"cs-hsb-lbl",children:"SLA Compliance Rate"})]}),(0,d.jsxs)("div",{className:"cs-hsb-item",children:[(0,d.jsxs)("div",{className:"cs-hsb-num",children:["<",(0,d.jsx)("span",{className:"cs-cu","data-t":"4",children:"0"}),"h"]}),(0,d.jsx)("div",{className:"cs-hsb-lbl",children:"Avg First Response"})]}),(0,d.jsxs)("div",{className:"cs-hsb-item",children:[(0,d.jsxs)("div",{className:"cs-hsb-num",children:[(0,d.jsx)("span",{className:"cs-cu","data-t":"87",children:"0"}),"%"]}),(0,d.jsx)("div",{className:"cs-hsb-lbl",children:"AI-Assisted Resolutions"})]}),(0,d.jsxs)("div",{className:"cs-hsb-item",children:[(0,d.jsx)("div",{className:"cs-hsb-num",children:"4.7"}),(0,d.jsx)("div",{className:"cs-hsb-lbl",children:"Avg CSAT Score"})]}),(0,d.jsxs)("div",{className:"cs-hsb-item",children:[(0,d.jsx)("div",{className:"cs-hsb-num",children:"0"}),(0,d.jsx)("div",{className:"cs-hsb-lbl",children:"Context Gaps for Reps"})]})]})]})]})}c(67484)},27381:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31117:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\providers\\\\ScrollReveal.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\providers\\ScrollReveal.tsx","default")},33873:a=>{"use strict";a.exports=require("path")},34469:(a,b,c)=>{"use strict";c.d(b,{default:()=>x});var d=c(48249),e=c(67484),f=c(95997),g=c(76611),h=c(11399),i=c(68762),j=c(70971),k=c(37833),l=c(22341),m=c(65255),n=c(95801),o=c(1353),p=c(12329);let q=(0,c(63871).A)("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);var r=c(49681);let s=[{id:"agent",icon:h.A,label:"Support Agent",headline:'Stop Asking "Can I get your order number?"',desc:"Agents open a ticket and instantly see the client's tier, their open sales deals, and the exact product they were viewing. No more blind troubleshooting.",features:["Real-time CRM Sync","AI Co-pilot Drafting","SLA Breach Warnings"],color:"#3470F0",bg:"rgba(52,112,240,0.08)"},{id:"rep",icon:i.A,label:"Sales Rep",headline:"Never Get Blindsided in a Meeting.",desc:"Sales reps receive push notifications if a critical issue opens on their key accounts before they walk into a renewal meeting.",features:["Pre-visit Briefings","Account Health Score","Churn Alerts"],color:"#c49a3c",bg:"rgba(196,154,60,0.08)"},{id:"manager",icon:j.A,label:"CS Manager",headline:"Manage Escalations Proactively.",desc:"Automatically flag tickets that mention competitors, pricing disputes, or cancellation threats directly to leadership for immediate intervention.",features:["Sentiment Tracking","SLA Escalation Rules","Market IQ Routing"],color:"#17b378",bg:"rgba(23,179,120,0.08)"},{id:"leader",icon:k.A,label:"Leadership",headline:"Connect Support to Revenue.",desc:"Stop viewing support as a cost center. Map CSAT scores directly to NRR (Net Revenue Retention) and overall pipeline health.",features:["Revenue Impact View","Cross-Dept Analytics","ROI Reporting"],color:"#E0384F",bg:"rgba(224,56,79,0.08)"}];function t(){return(0,d.jsxs)("div",{className:"cs-s-widget",children:[(0,d.jsxs)("div",{className:"cs-s-w-head",children:[(0,d.jsx)("div",{className:"cs-s-w-avatar",children:(0,d.jsx)(l.A,{size:16,color:"var(--blue)"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"cs-s-w-title",children:"Enterprise Tkt #884"}),(0,d.jsx)("div",{className:"cs-s-w-sub",children:"Bharti Airtel • Strategic"})]}),(0,d.jsx)("div",{className:"cs-s-w-badge",children:"Live"})]}),(0,d.jsxs)("div",{className:"cs-s-w-ai-box",children:[(0,d.jsxs)("div",{className:"cs-s-w-ai-label",children:[(0,d.jsx)(m.A,{size:12})," AI Ghost-Draft"]}),(0,d.jsx)("div",{className:"cs-s-w-ai-line",style:{width:"90%"}}),(0,d.jsx)("div",{className:"cs-s-w-ai-line",style:{width:"60%"}})]}),(0,d.jsxs)("div",{className:"cs-s-w-footer",children:[(0,d.jsx)(n.A,{size:14,color:"var(--gold)"}),(0,d.jsx)("span",{children:"Renewal Signal: High Confidence"})]})]})}function u(){return(0,d.jsxs)("div",{className:"cs-s-widget",children:[(0,d.jsx)("div",{className:"cs-s-w-mini-label",children:"Account Health Index"}),(0,d.jsxs)("div",{className:"cs-s-w-health-val",children:["96.8",(0,d.jsx)("span",{className:"unit",children:"%"})]}),(0,d.jsx)("div",{className:"cs-s-w-trend positive",children:"↑ 4.2% Growth"}),(0,d.jsxs)("div",{className:"cs-s-w-stack",style:{marginTop:20},children:[(0,d.jsxs)("div",{className:"cs-s-w-alert",children:[(0,d.jsx)(o.A,{size:14})," P1 Urgent Escalation Detected"]}),(0,d.jsxs)("div",{className:"cs-s-w-item",children:[(0,d.jsx)("span",{children:"Market Sentiment"}),(0,d.jsx)("span",{className:"val",style:{color:"var(--gold)"},children:"Stable"})]})]})]})}function v(){return(0,d.jsxs)("div",{className:"cs-s-widget",children:[(0,d.jsxs)("div",{className:"cs-s-w-head",style:{marginBottom:24},children:[(0,d.jsx)("div",{className:"cs-s-w-title",children:"Regional NRR Index"}),(0,d.jsx)(p.A,{size:16,color:"rgba(255,255,255,0.4)"})]}),(0,d.jsx)("div",{className:"cs-s-w-bars",children:["APAC","EMEA","US-E"].map((a,b)=>(0,d.jsxs)("div",{className:"cs-s-w-bar-row",children:[(0,d.jsxs)("div",{className:"label",children:[(0,d.jsx)("span",{children:a})," ",(0,d.jsxs)("span",{children:[98-5*b,"%"]})]}),(0,d.jsx)("div",{className:"bar-track",children:(0,d.jsx)("div",{className:"bar-fill",style:{width:`${98-5*b}%`,background:0===b?"var(--green)":"var(--gold)"}})})]},a))})]})}function w(){return(0,d.jsxs)("div",{className:"cs-s-widget",children:[(0,d.jsxs)("div",{className:"cs-s-w-head",children:[(0,d.jsx)(q,{size:16,color:"#E0384F"}),(0,d.jsx)("div",{className:"cs-s-w-title",children:"Revenue Impact Monitoring"})]}),(0,d.jsxs)("div",{className:"cs-s-w-big-val",children:["$4.2M",(0,d.jsx)("span",{className:"sub",children:"+14%"})]}),(0,d.jsx)("div",{className:"cs-s-w-spark",children:[20,35,25,50,45,70,60,95].map((a,b)=>(0,d.jsx)("div",{className:"spark-bar",style:{height:`${a}%`,opacity:7===b?1:.4}},b))}),(0,d.jsx)("div",{className:"cs-s-w-mini-foot",children:"Attributed to Support Retention Flow"})]})}function x(){let[a,b]=(0,e.useState)(s[0].id),c=s.find(b=>b.id===a)||s[0];return(0,d.jsxs)("section",{id:"personas",className:"cs-s-section",children:[(0,d.jsx)("style",{children:`
        .cs-s-section { 
          padding: 120px 0; 
          background: #F9F8F6; 
          position: relative; overflow: hidden; 
        }
        
        /* Stripe-style background mesh */
        .cs-s-bg-mesh {
          position: absolute; top: 0; left: 0; right: 0; height: 100%;
          background: radial-gradient(circle at 0% 0%, rgba(196,154,60,0.03) 0%, transparent 50%),
                      radial-gradient(circle at 100% 100%, rgba(52,112,240,0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .cs-s-wrap { max-width: 1240px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 2; }
        
        .cs-s-header { text-align: center; max-width: 720px; margin: 0 auto 80px; }
        .cs-s-h2 { font-family: 'Fraunces', serif; font-size: clamp(36px, 5vw, 56px); line-height: 1.05; color: var(--navy); margin-bottom: 24px; font-weight: 350; }
        .cs-s-h2 em { font-style: italic; color: var(--gold); font-weight: 300; }
        
        .cs-s-container {
          background: #fff; border-radius: 32px;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.1);
          overflow: hidden; display: flex; flex-direction: column;
        }

        .cs-s-tabs {
          display: flex; background: #fafafa;
          border-bottom: 1px solid rgba(0,0,0,0.04);
          padding: 8px; gap: 8px;
        }
        .cs-s-tab {
          flex: 1; padding: 16px 24px; border: none; background: transparent;
          border-radius: 12px; cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex; align-items: center; justify-content: center; gap: 12px;
        }
        .cs-s-tab.active { background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
        .cs-s-tab-label { font-size: 13px; font-weight: 600; color: #666; transition: color 0.3s; }
        .cs-s-tab.active .cs-s-tab-label { color: var(--navy); }

        .cs-s-content { padding: clamp(40px, 8vw, 80px); }
        .cs-s-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        
        .cs-s-text h3 { font-family: 'Fraunces', serif; font-size: clamp(28px, 4vw, 42px); color: var(--navy); line-height: 1.15; margin-bottom: 24px; font-weight: 400; }
        .cs-s-text p { font-size: 17px; color: #555; line-height: 1.7; margin-bottom: 40px; font-weight: 300; }
        
        .cs-s-feats { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .cs-s-feat { display: flex; align-items: center; gap: 12px; font-size: 14px; font-weight: 600; color: var(--navy); }
        .cs-s-feat-icon { width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; background: #f4f4f4; color: var(--gold); }

        /* Dashboard Viewport */
        .cs-s-view {
          background: #080f1e; border-radius: 24px; padding: 48px;
          position: relative; overflow: hidden; aspect-ratio: 16 / 11;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 32px 64px -16px rgba(8, 15, 30, 0.4);
        }
        .cs-s-view::after {
          content: ""; position: absolute; top: 0; left: 0; right: 0; height: 100%;
          background: radial-gradient(circle at top right, var(--tab-color), transparent 60%);
          opacity: 0.1; pointer-events: none;
        }

        /* Widget Details */
        .cs-s-widget {
          width: 100%; max-width: 320px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px); border-radius: 20px; padding: 32px;
          position: relative; z-index: 5; color: white;
          animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideUpFade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .cs-s-w-head { display: flex; align-items: center; gap: 12px; }
        .cs-s-w-avatar { width: 32px; height: 32px; border-radius: 8px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; }
        .cs-s-w-title { font-size: 13px; font-weight: 700; }
        .cs-s-w-sub { font-size: 10px; color: rgba(255,255,255,0.4); margin-top: 2px; }
        .cs-s-w-badge { margin-left: auto; font-size: 9px; font-weight: 800; text-transform: uppercase; background: var(--green); color: white; padding: 4px 8px; border-radius: 4px; }
        
        .cs-s-w-ai-box { background: rgba(255,255,255,0.02); border-radius: 12px; padding: 16px; margin: 20px 0; border: 1px dashed rgba(255,255,255,0.1); }
        .cs-s-w-ai-label { font-size: 10px; font-weight: 700; color: var(--gold); display: flex; align-items: center; gap: 6px; margin-bottom: 12px; }
        .cs-s-w-ai-line { height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; margin-bottom: 8px; position: relative; overflow: hidden; }
        .cs-s-w-ai-line::after { content: ""; position: absolute; left: 0; top: 0; height: 100%; width: 40%; background: var(--gold); animation: stripeShimmer 2s infinite; }
        @keyframes stripeShimmer { from { left: -100%; } to { left: 100%; } }

        .cs-s-w-footer { display: flex; align-items: center; gap: 10px; font-size: 10px; font-weight: 700; color: var(--gold); border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px; }

        .cs-s-w-mini-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
        .cs-s-w-health-val { font-size: 48px; font-weight: 800; font-family: 'Fraunces', serif; display: flex; align-items: baseline; }
        .cs-s-w-health-val .unit { font-size: 18px; color: rgba(255,255,255,0.2); margin-left: 4px; }
        .cs-s-w-trend { font-size: 12px; font-weight: 700; margin-top: 4px; }
        .cs-s-w-trend.positive { color: var(--green); }
        .cs-s-w-stack { display: flex; flex-direction: column; gap: 12px; }
        .cs-s-w-alert { background: rgba(224,56,79,0.1); border: 1px solid rgba(224,56,79,0.2); padding: 12px; border-radius: 10px; font-size: 10px; font-weight: 700; color: #ff5a6e; display: flex; align-items: center; gap: 8px; }
        .cs-s-w-item { display: flex; justifyContent: space-between; font-size: 11px; color: rgba(255,255,255,0.6); }

        .cs-s-w-bar-row { margin-bottom: 16px; }
        .cs-s-w-bar-row:last-child { margin-bottom: 0; }
        .cs-s-w-bar-row .label { display: flex; justify-content: space-between; font-size: 11px; font-weight: 600; margin-bottom: 6px; }
        .cs-s-w-bar-row .bar-track { height: 6px; background: rgba(255,255,255,0.05); border-radius: 100px; overflow: hidden; }
        .cs-s-w-bar-row .bar-fill { height: 100%; border-radius: 100px; transition: width 1s ease-out; }

        .cs-s-w-big-val { font-size: 42px; font-weight: 800; font-family: 'Fraunces', serif; margin: 12px 0; }
        .cs-s-w-big-val .sub { font-size: 14px; font-family: 'Inter'; color: var(--green); margin-left: 12px; font-weight: 700; }
        .cs-s-w-spark { display: flex; align-items: flex-end; gap: 4px; height: 60px; margin: 20px 0; }
        .cs-s-w-spark .spark-bar { flex: 1; background: #E0384F; border-radius: 3px 3px 0 0; min-width: 8px; transition: height 1s; }
        .cs-s-w-mini-foot { font-size: 9px; color: rgba(255,255,255,0.3); text-align: center; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.05); }

        @media (max-width: 1024px) {
          .cs-s-grid { gap: 40px; }
          .cs-s-view { padding: 32px; }
        }

        @media (max-width: 900px) {
          .cs-s-section { padding: 80px 0; }
          .cs-s-grid { grid-template-columns: 1fr; gap: 48px; text-align: center; }
          .cs-s-text { max-width: 100%; }
          .cs-s-feats { justify-content: center; }
          .cs-s-feat { justify-content: center; }
          .cs-s-view { aspect-ratio: auto; min-height: 380px; width: 100%; max-width: 600px; margin: 0 auto; }
          .cs-s-widget { max-width: 100%; }
        }

        @media (max-width: 768px) {
          .cs-s-tabs { overflow-x: auto; scrollbar-width: none; border-radius: 0; padding: 4px; }
          .cs-s-tab { min-width: 140px; }
          .cs-s-content { padding: 40px 24px; }
        }

        @media (max-width: 480px) {
          .cs-s-tab { min-width: 120px; padding: 12px 8px; }
          .cs-s-tab-label { font-size: 11px; }
          .cs-s-view { padding: 24px; min-height: 320px; }
          .cs-s-widget { padding: 24px; }
        }
      `}),(0,d.jsx)("div",{className:"cs-s-bg-mesh"}),(0,d.jsxs)("div",{className:"cs-s-wrap",children:[(0,d.jsxs)("div",{className:"cs-s-header reveal",children:[(0,d.jsxs)("div",{className:"eyebrow",style:{justifyContent:"center"},children:[(0,d.jsx)("span",{className:"ey-line"})," Perspective: Revenue Alignment"]}),(0,d.jsxs)("h2",{className:"cs-s-h2",children:["Built for Every",(0,d.jsx)("br",{}),(0,d.jsx)("em",{children:"Stakeholder."})]}),(0,d.jsx)("p",{className:"lead lead-ink",style:{maxWidth:640,margin:"0 auto"},children:"Post-sale success is a team sport. ClientEra surfaces the specific context needed by every member of the revenue team to drive net revenue retention."})]}),(0,d.jsxs)("div",{className:"cs-s-container reveal",children:[(0,d.jsx)("div",{className:"cs-s-tabs",children:s.map(c=>(0,d.jsxs)("button",{className:`cs-s-tab ${a===c.id?"active":""}`,onClick:()=>b(c.id),children:[(0,d.jsx)(c.icon,{size:18,color:a===c.id?c.color:"#999",strokeWidth:2.5}),(0,d.jsx)("span",{className:"cs-s-tab-label",children:c.label})]},c.id))}),(0,d.jsx)("div",{className:"cs-s-content",children:(0,d.jsx)(f.N,{mode:"wait",children:(0,d.jsxs)(g.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.4,ease:[.16,1,.3,1]},className:"cs-s-grid",children:[(0,d.jsxs)("div",{className:"cs-s-text",children:[(0,d.jsx)("h3",{children:c.headline}),(0,d.jsx)("p",{children:c.desc}),(0,d.jsx)("div",{className:"cs-s-feats",children:c.features.map(a=>(0,d.jsxs)("div",{className:"cs-s-feat",children:[(0,d.jsx)("div",{className:"cs-s-feat-icon",children:(0,d.jsx)(r.A,{size:12})}),a]},a))}),(0,d.jsx)("div",{style:{marginTop:40,display:"flex",justifyContent:"center"}})]}),(0,d.jsx)("div",{className:"cs-s-view",style:{"--tab-color":c.color},children:(0,d.jsx)(f.N,{mode:"wait",children:(0,d.jsxs)(g.P.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.05,opacity:0},transition:{duration:.5,ease:"easeOut"},style:{width:"100%",display:"flex",justifyContent:"center"},children:["agent"===a&&(0,d.jsx)(t,{}),"rep"===a&&(0,d.jsx)(u,{}),"manager"===a&&(0,d.jsx)(v,{}),"leader"===a&&(0,d.jsx)(w,{})]},a+"widget")})})]},a)})})]})]})]})}},37833:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]])},38397:(a,b,c)=>{Promise.resolve().then(c.bind(c,26892)),Promise.resolve().then(c.bind(c,83161)),Promise.resolve().then(c.bind(c,15844)),Promise.resolve().then(c.bind(c,46497)),Promise.resolve().then(c.bind(c,2429)),Promise.resolve().then(c.bind(c,17727)),Promise.resolve().then(c.bind(c,20564)),Promise.resolve().then(c.bind(c,34469)),Promise.resolve().then(c.bind(c,44423)),Promise.resolve().then(c.bind(c,26778)),Promise.resolve().then(c.bind(c,53284))},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},42742:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},43415:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>q,metadata:()=>p});var d=c(5735),e=c(55058),f=c(68348),g=c(31117),h=c(50810),i=c(6991),j=c(65833),k=c(6474),l=c(13481),m=c(63022),n=c(69445),o=c(11131);let p={title:"ClientEra | Unified Customer Support",description:"Deepen your commercial relationship with AI-powered customer support. Context-aware ticketing, sentiment analysis, and seamless handoffs."};function q(){return(0,d.jsxs)("main",{children:[(0,d.jsx)(g.default,{}),(0,d.jsx)(e.default,{}),(0,d.jsx)(h.default,{}),(0,d.jsx)(i.default,{}),(0,d.jsx)(j.default,{}),(0,d.jsx)(k.default,{}),(0,d.jsx)(l.default,{}),(0,d.jsx)(m.default,{}),(0,d.jsx)(n.default,{}),(0,d.jsx)(o.default,{}),(0,d.jsx)(f.default,{})]})}},43954:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/interception-routes")},44423:(a,b,c)=>{"use strict";function d(){return null}c.d(b,{default:()=>d}),c(67484)},46497:(a,b,c)=>{"use strict";c.d(b,{default:()=>o});var d=c(48249),e=c(67484),f=c(76611),g=c(89165),h=c(95801),i=c(63871);let j=(0,i.A)("link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);var k=c(22341);let l=(0,i.A)("folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),m=(0,i.A)("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);var n=c(19794);function o(){let a=(0,e.useRef)(null),b=(0,e.useRef)([]),c=[{id:"open",label:"Open",color:"#E0384F",bg:"#fff"},{id:"in_progress",label:"In Progress",color:"#F5A623",bg:"#fff"},{id:"pending_client",label:"Pending Client",color:"var(--blue)",bg:"#fff"},{id:"resolved",label:"Resolved",color:"var(--gold)",bg:"#fff"},{id:"closed",label:"Closed",color:"var(--green)",bg:"#fff"}],i=[{icon:g.A,title:"Rework Workflow",desc:"Approvers can send tickets back to any prior step for correction with a forced reason. No hard rejections that lose history — just continuous refinement."},{icon:h.A,title:"SLA Risk Detection",desc:"SLA breaches are predicted before they happen. Automated escalation rules fire based on account priority and custom business thresholds."},{icon:j,title:"Commercial Linkage",desc:"Every ticket is natively tethered to the relevant Deal or Sales Order. Reps see account health directly on their pipeline timeline."},{icon:k.A,title:"Audit-Trail Threads",desc:"Threaded internal and external comments provide a permanent record. Every interaction is time-stamped and attached to the ticket permanently."},{icon:l,title:"Dynamic Routing",desc:"Configure custom ticket categories that trigger specific intake forms, SLA rules, and intelligent routing based on ticket content."},{icon:m,title:"Priority Governance",desc:"Tiered SLA enforcement across four priority levels. Response and resolution targets are automatically mapped to account importance levels."}];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{children:`
        .cstl-section {
          background: var(--navy);
          position: relative;
          overflow: hidden;
        }
        .cstl-wrap {
          max-width: min(96vw, 1200px);
          margin: 0 auto;
          padding: 80px clamp(20px, 4vw, 72px);
          position: relative; z-index: 1;
        }
        .cstl-header {
          max-width: 640px;
          margin-bottom: 48px;
        }
        .cstl-flow {
          display: flex; 
          align-items: center;
          justify-content: center;
          gap: 0;
          padding: 0;
          margin-bottom: 64px;
          position: relative;
          z-index: 2;
        }

        .cstl-stage-wrapper {
          display: flex;
          align-items: center;
          flex-shrink: 1;
          min-width: 0;
        }

        .cstl-stage {
          flex: 1;
          min-width: 0;
          position: relative;
          z-index: 2;
        }

        .cstl-stage-box {
          position: relative;
          width: 100%;
          padding: 18px 24px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          cursor: pointer;
          background: #fff;
          border: 2px solid;
          border-color: var(--stage-color);
          color: var(--stage-color);
          box-shadow: 0 4px 16px rgba(0,0,0,.06);
          transition: all .35s cubic-bezier(.16,1,.3,1);
          overflow: hidden;
        }
        .cstl-stage-box::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--stage-color);
          opacity: 0;
          transition: opacity .35s cubic-bezier(.16,1,.3,1);
          z-index: -1;
        }
        .cstl-stage-box:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 16px 40px rgba(0,0,0,.15);
          color: #fff;
          border-color: var(--stage-color);
        }
        .cstl-stage-box:hover::before {
          opacity: 1;
        }
        .cstl-stage-box::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.3);
          transform: translate(-50%, -50%);
          transition: width .6s, height .6s;
        }
        .cstl-stage-box:hover::after {
          width: 300px;
          height: 300px;
        }

        .cstl-stage-pulse {
          display: none;
        }

        .cstl-path {
          width: 60px; height: 2px;
          position: relative; display: flex; align-items: center;
          flex-shrink: 0;
          margin: 0;
        }
        .cstl-path-inner {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(196,154,60,0.3), transparent);
          border-radius: 2px;
          overflow: hidden;
        }
        .cstl-path-inner::after {
          content: "";
          position: absolute;
          left: -100%;
          top: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          animation: flowLine 3s ease-in-out infinite;
        }
        @keyframes flowLine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .cstl-path-arrow {
          position: absolute; right: -2px;
          color: var(--gold);
          filter: drop-shadow(0 0 4px rgba(196,154,60,0.4));
          animation: cstlArrowFlow 2s ease-in-out infinite;
        }
        @keyframes cstlArrowFlow {
          0%, 100% { transform: translateX(0); opacity: 0.5; }
          50% { transform: translateX(4px); opacity: 1; }
        }

        .cstl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cstl-feat-card {
          background: rgba(255,255,255,.02);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 18px; 
          padding: 32px;
          transition: all .35s cubic-bezier(.16,1,.3,1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .cstl-feat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(196,154,60,.08) 0%, transparent 50%);
          opacity: 0;
          transition: opacity .35s;
        }
        .cstl-feat-card:hover {
          border-color: rgba(196,154,60,.4);
          background: rgba(255,255,255,.05);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,.2);
        }
        .cstl-feat-card:hover::before {
          opacity: 1;
        }
        .cstl-feat-icon {
          color: var(--gold); 
          margin-bottom: 20px;
          transition: all .35s cubic-bezier(.16,1,.3,1);
        }
        .cstl-feat-card:hover .cstl-feat-icon {
          transform: scale(1.15) rotate(-5deg);
          filter: drop-shadow(0 4px 8px rgba(196,154,60,.4));
        }
        .cstl-feat-title {
          font-size: 15px; font-weight: 600;
          color: var(--text); margin-bottom: 8px;
          font-family: 'Fraunces', serif;
        }
        .cstl-feat-desc {
          font-size: 13px; color: var(--text2);
          line-height: 1.6; font-weight: 300;
        }

        .cstl-reveal {
          opacity: 0; transform: translateY(22px);
          transition: opacity .7s ease, transform .7s cubic-bezier(.16,1,.3,1);
        }
        .cstl-reveal.visible { opacity: 1; transform: none; }
        .cstl-reveal-d1 { transition-delay: .1s; }
        .cstl-reveal-d2 { transition-delay: .15s; }
        .cstl-reveal-d3 { transition-delay: .2s; }
        .cstl-reveal-d4 { transition-delay: .25s; }
        .cstl-reveal-d5 { transition-delay: .3s; }
        .cstl-reveal-d6 { transition-delay: .35s; }

        @media (max-width: 1024px) {
          .cstl-flow { margin-bottom: 48px; }
          .cstl-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .cstl-flow { flex-wrap: wrap; gap: 12px; }
          .cstl-stage-wrapper { flex-direction: column; width: 100%; }
          .cstl-stage { width: 100%; }
          .cstl-path { display: none; }
          .cstl-stage-box { padding: 12px 16px; font-size: 12px; }
        }
        @media (max-width: 640px) {
          .cstl-grid { grid-template-columns: 1fr; }
        }
      `}),(0,d.jsx)("section",{className:"cstl-section",ref:a,id:"lifecycle",children:(0,d.jsxs)("div",{className:"cstl-wrap",children:[(0,d.jsxs)("div",{className:"cstl-header cstl-reveal",children:[(0,d.jsxs)("div",{className:"eyebrow eyebrow-gold",children:[(0,d.jsx)("span",{className:"ey-line"}),"Lifecycle & Governance"]}),(0,d.jsxs)("h2",{className:"h2 h2-white",children:["State Machine Architecture.",(0,d.jsx)("br",{}),(0,d.jsx)("em",{children:"From Open to Closed."})]}),(0,d.jsx)("p",{className:"lead lead-white",children:"A high-trust governance layer designed for enterprise scale. Every status change, rework event, and SLA breach is natively tethered to commercial value in real-time."})]}),(0,d.jsx)("div",{className:"cstl-reveal cstl-reveal-d1",children:(0,d.jsx)("div",{className:"cstl-flow",children:c.map((a,b)=>(0,d.jsxs)("div",{className:"cstl-stage-wrapper",children:[(0,d.jsx)(f.P.div,{className:"cstl-stage",initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.1*b,duration:.5},children:(0,d.jsx)("div",{className:"cstl-stage-box",style:{"--stage-color":a.color},children:a.label})}),b<c.length-1&&(0,d.jsxs)("div",{className:"cstl-path",children:[(0,d.jsx)("div",{className:"cstl-path-inner"}),(0,d.jsx)(n.A,{size:16,className:"cstl-path-arrow"})]})]},a.id))})}),(0,d.jsx)("div",{className:"cstl-grid",children:i.map((a,c)=>(0,d.jsxs)("div",{ref:a=>{b.current[c]=a},className:`cstl-feat-card cstl-reveal cstl-reveal-d${c+1}`,children:[(0,d.jsx)("div",{className:"cstl-feat-icon",children:(0,d.jsx)(a.icon,{size:24,strokeWidth:2.2})}),(0,d.jsx)("div",{className:"cstl-feat-title",children:a.title}),(0,d.jsx)("div",{className:"cstl-feat-desc",children:a.desc})]},c))})]})})]})}},49681:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},50810:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\customersupport\\\\sections\\\\S1_Hero.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\customersupport\\sections\\S1_Hero.tsx","default")},51658:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]])},55058:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\sections\\\\Nav.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\sections\\Nav.tsx","default")},63022:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\customersupport\\\\sections\\\\S8_Comparison.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\customersupport\\sections\\S8_Comparison.tsx","default")},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},65255:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]])},65833:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\customersupport\\\\sections\\\\S3_Solution.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\customersupport\\sections\\S3_Solution.tsx","default")},68348:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\sections\\\\Footer.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\sections\\Footer.tsx","default")},68762:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]])},69445:(a,b,c)=>{"use strict";c.d(b,{default:()=>d});let d=(0,c(77943).registerClientReference)(function(){throw Error("Attempted to call the default export of \"E:\\\\New Folder\\\\Antigravity Tool\\\\client_era\\\\src\\\\components\\\\customersupport\\\\sections\\\\S9_Personas.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"E:\\New Folder\\Antigravity Tool\\client_era\\src\\components\\customersupport\\sections\\S9_Personas.tsx","default")},70722:a=>{"use strict";a.exports=require("next/dist/shared/lib/invariant-error")},77068:a=>{"use strict";a.exports=require("next/dist/shared/lib/size-limit")},83161:(a,b,c)=>{"use strict";c.d(b,{default:()=>f});var d=c(48249),e=c(67484);function f(){let a=(0,e.useRef)(null);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("style",{children:`
        /* ── CS CTA — LIGHT WRAPPER ── */
        .cs-cta-outer {
          background: var(--cream);
          padding: clamp(48px, 5vw, 72px) clamp(20px, 4.8vw, 72px);
          position: relative; overflow: hidden;
        }
        .cs-cta-card {
          max-width: min(96vw, 1180px);
          margin: 0 auto;
          background: var(--navy);
          border-radius: 22px;
          padding: clamp(36px, 3.5vw, 56px) clamp(32px, 4.5vw, 64px);
          display: flex; align-items: center;
          justify-content: space-between;
          gap: clamp(24px, 3.5vw, 52px);
          position: relative; overflow: hidden;
          border: 1px solid rgba(196,154,60,.35);
          box-shadow: 0 0 32px rgba(196,154,60,.1), 0 32px 80px rgba(11,22,40,.28);
          transition: transform .3s ease;
        }
        .cs-cta-card::before {
          content: '';
          position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(196,154,60,.7), transparent);
        }
        .cs-cta-glow {
          position: absolute; border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(196,154,60,.18) 0%, transparent 68%);
          width: 380px; height: 380px;
          top: -160px; right: -80px;
          filter: blur(32px);
          animation: csctaglowdrift 14s ease-in-out infinite;
        }
        @keyframes csctaglowdrift {
          0%,100% { transform: translate(0,0) scale(1); }
          35% { transform: translate(16px,-18px) scale(1.07); }
          70% { transform: translate(-10px,12px) scale(.96); }
        }
        .cs-cta-left { position: relative; z-index: 1; flex: 1; min-width: 0; }
        .cs-cta-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--gold); margin-bottom: 18px;
        }
        .cs-cta-eyebrow::before, .cs-cta-eyebrow::after {
          content: ''; display: block;
          width: 24px; height: 1px;
          background: var(--gold); opacity: .6;
        }
        .cs-cta-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(26px, 2.5vw, 42px); font-weight: 400;
          color: var(--text); line-height: 1.08;
          letter-spacing: -1px; margin-bottom: 10px;
        }
        .cs-cta-h2 em { font-style: italic; color: var(--gold); font-weight: 300; }
        .cs-cta-lead {
          font-size: clamp(13px, .9vw, 15px);
          color: rgba(143,163,192,.85); line-height: 1.6;
        }

        /* cross-page nav pills */
        .cs-cta-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
        .cs-cta-pill {
          padding: 6px 14px; border-radius: 100px;
          font-size: 11.5px; font-weight: 500;
          border: 1px solid rgba(255,255,255,.12);
          color: var(--text2); text-decoration: none;
          transition: all .2s;
        }
        .cs-cta-pill:hover {
          border-color: rgba(196,154,60,.35);
          color: var(--gold); background: rgba(196,154,60,.06);
        }

        .cs-cta-right {
          display: flex; flex-direction: column;
          gap: 10px; width: clamp(180px, 16vw, 230px);
          flex-shrink: 0; position: relative; z-index: 1;
        }
        .cs-cta-btn {
          display: flex; align-items: center; justify-content: center;
          padding: 14px 22px; border-radius: 10px;
          font-size: 14px; font-weight: 600;
          cursor: pointer; border: none;
          transition: all .28s cubic-bezier(.22,1,.36,1);
          text-decoration: none; width: 100%;
        }
        .cs-cta-btn-primary {
          background: var(--gold); color: var(--navy);
          box-shadow: 0 4px 22px rgba(196,154,60,.38);
        }
        .cs-cta-btn-primary:hover {
          background: var(--gold2); transform: translateY(-2px);
          box-shadow: 0 8px 36px rgba(196,154,60,.62);
        }
        .cs-cta-btn-ghost {
          background: rgba(255,255,255,.06); color: var(--text);
          border: 1.5px solid rgba(255,255,255,.22);
        }
        .cs-cta-btn-ghost:hover {
          background: rgba(255,255,255,.11);
          border-color: rgba(255,255,255,.38);
          transform: translateY(-2px);
        }
        .cs-cta-micro {
          text-align: center; font-size: 10.5px;
          color: rgba(255,255,255,.2); margin: 2px 0 0;
        }

        @media (max-width: 680px) {
          .cs-cta-card {
            flex-direction: column; align-items: stretch;
            padding: 28px 22px;
          }
          .cs-cta-left { text-align: center; }
          .cs-cta-eyebrow { justify-content: center; }
          .cs-cta-pills { justify-content: center; }
          .cs-cta-right { width: 100%; }
        }
      `}),(0,d.jsx)("div",{className:"cs-cta-outer",children:(0,d.jsxs)("div",{className:"cs-cta-card",ref:a,children:[(0,d.jsx)("div",{className:"cs-cta-glow","aria-hidden":"true"}),(0,d.jsxs)("div",{className:"cs-cta-left",children:[(0,d.jsx)("div",{className:"cs-cta-eyebrow",children:"Get Started"}),(0,d.jsxs)("h2",{className:"cs-cta-h2",children:["Support that's built",(0,d.jsx)("br",{}),(0,d.jsx)("em",{children:"into the deal."})]}),(0,d.jsx)("p",{className:"cs-cta-lead",children:"Set up in 15 minutes. No integration required. Your team closes deals and resolves issues on the same platform — context never lost."}),(0,d.jsxs)("div",{className:"cs-cta-pills",children:[(0,d.jsx)("a",{href:"/lead-management",className:"cs-cta-pill",children:"← Lead Management"}),(0,d.jsx)("a",{href:"/sales-ops",className:"cs-cta-pill",children:"Sales Operations →"}),(0,d.jsx)("a",{href:"/sales-management",className:"cs-cta-pill",children:"Sales Management →"})]})]}),(0,d.jsxs)("div",{className:"cs-cta-right",children:[(0,d.jsx)("a",{href:"#pricing",className:"cs-cta-btn cs-cta-btn-primary",children:"Book a demo"}),(0,d.jsx)("a",{href:"#features",className:"cs-cta-btn cs-cta-btn-ghost",children:"Explore features"}),(0,d.jsx)("p",{className:"cs-cta-micro",children:"No setup fees \xb7 Cancel anytime"})]})]})})]})}},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},86718:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},89165:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},98631:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(63871).A)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[445,63,29,116,553,441,284],()=>b(b.s=669));module.exports=c})();