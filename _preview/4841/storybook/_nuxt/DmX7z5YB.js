import{u as k,d as v}from"./C6A5PBPG.js";import{u as he}from"./BUOwoxew.js";import{i as y,x as ge,b as D,u as N,c as Z,h as O,a as ee}from"./BSEdKPgk.js";import{h as M,e as me,b as Le,c as _e,d as we,j as F,f as W}from"./CFMQYC2y.js";import{_ as S}from"./CNEBUHZX.js";import{a7 as ye,a1 as V,I as _}from"./D36rSpla.js";import{a as ve,n as Ce}from"./BDR3Ouqq.js";const Pe="$s";function te(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,o]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=Pe+n,r=k(),s=ye(r.payload.state,a);if(s.value===void 0&&o){const i=o();if(V(i))return r.payload.state[a]=i,i;s.value=i}return s}const B=["en","ar","es","ru"],Y={en:[{key:"../src/locales/en.json",load:()=>S(()=>import("./i1_L4g2b.js"),[],import.meta.url),cache:!0}],ar:[{key:"../src/locales/ar.json",load:()=>S(()=>import("./CXRtkiyO.js"),[],import.meta.url),cache:!0}],es:[{key:"../src/locales/es.json",load:()=>S(()=>import("./BMZ0DROp.js"),[],import.meta.url),cache:!0}],ru:[{key:"../src/locales/ru.json",load:()=>S(()=>import("./CdljXjto.js"),[],import.meta.url),cache:!0}]},vt=[()=>S(()=>import("./C5mRyCJw.js"),[],import.meta.url)],q=[{code:"en",dir:"ltr",iso:"en",name:"English",nativeName:"English",files:[{path:"locales/en.json"}]},{code:"ar",name:"Arabic",nativeName:"العربية",iso:"ar",language:"ar",wpLocale:"ar",dir:"rtl",translated:100,files:[{path:"locales/ar.json"}]},{code:"es",name:"Spanish (Spain)",nativeName:"Español",iso:"es",language:"es",wpLocale:"es_ES",dir:"ltr",translated:100,files:[{path:"locales/es.json"}]},{code:"ru",name:"Russian",nativeName:"Русский",iso:"ru",language:"ru",wpLocale:"ru_RU",dir:"ltr",translated:48,files:[{path:"locales/ru.json"}]}],ne="@nuxtjs/i18n",Ct=!1,Re=!1,ke="nuxtI18n",xe="i18n_redirected",Pt="nuxt-i18n-slp",Rt=typeof window<"u";function Se(e){e=e||[];const t=[];for(const n of e)y(n)?t.push({code:n}):t.push(n);return t}function be(e){return e!=null&&"global"in e&&"mode"in e}function De(e){return e!=null&&!("__composer"in e)&&"locale"in e&&V(e.locale)}function Ie(e){return e!=null&&"__composer"in e}function C(e){return be(e)?e.global:e}function oe(e){const t=C(e);return De(t)?t:Ie(t)?t.__composer:t}function z(e){return _(C(e).locale)}function Ee(e){return _(C(e).locales)}function Oe(e){return _(C(e).localeCodes)}function $e(e,t){const n=C(e);V(n.locale)?n.locale.value=t:n.locale=t}function ae(e){return y(e)?e:ge(e)?e.toString():"(null)"}function G(e,t,{defaultLocale:n,strategy:o,routesNameSeparator:a,defaultLocaleRouteNameSuffix:r}){let s=ae(e)+(o==="no_prefix"?"":a+t);return t===n&&o==="prefix_and_default"&&(s+=a+r),s}function kt(e,t){return D(e)?e(t):e}function Ae(e,t){const n=[];for(const[o,a]of t.entries()){const r=e.find(s=>s.iso.toLowerCase()===a.toLowerCase());if(r){n.push({code:r.code,score:1-o/t.length});break}}for(const[o,a]of t.entries()){const r=a.split("-")[0].toLowerCase(),s=e.find(i=>i.iso.split("-")[0].toLowerCase()===r);if(s){n.push({code:s.code,score:.999-o/t.length});break}}return n}const Be=Ae;function Ue(e,t){return e.score===t.score?t.code.length-e.code.length:t.score-e.score}const Te=Ue;function je(e,t,{matcher:n=Be,comparer:o=Te}={}){const a=[];for(const s of e){const{code:i}=s,u=s.iso||i;a.push({code:i,iso:u})}const r=n(a,t);return r.length>1&&r.sort(o),r.length?r[0].code:""}function U(e){return new RegExp(`^/(${e.join("|")})(?:/|$)`,"i")}const b=new Map;async function xt(e,t){const n={messages:{}};for(const o of e){const{default:a}=await o(),r=typeof a=="function"?await t.runWithContext(async()=>await a()):a;N(r,n)}return n}function re(e,t){let n=[];if(Z(e))n=e;else if(O(e)){const o=[...t,"default"];for(const a of o)e[a]&&(n=[...n,...e[a].filter(Boolean)])}else y(e)&&t.every(o=>o!==e)&&n.push(e);return n}async function St(e,t,n){const{defaultLocale:o,initialLocale:a,localeCodes:r,fallbackLocale:s,lazy:i}=n;if(i&&s){const l=re(s,[o,a]);await Promise.all(l.map(c=>X(c,t,e)))}const u=i?[...new Set().add(o).add(a)]:r;return await Promise.all(u.map(l=>X(l,t,e))),e}async function Ne(e,{key:t,load:n}){let o=null;try{const a=await n().then(r=>r.default||r);D(a)?o=await a(e):(o=a,o!=null&&b&&b.set(t,o))}catch(a){console.error("Failed locale loading: "+a.message)}return o}async function T(e,t,n){const o=t[e];if(o==null){console.warn("Could not find messages for locale code: "+e);return}const a={};for(const r of o){let s=null;b&&b.has(r.key)&&r.cache?s=b.get(r.key):s=await Ne(e,r),s!=null&&N(s,a)}n(e,a)}async function X(e,t,n){await T(e,t,(a,r)=>{const s=n[a]||{};N(r,s),n[a]=s})}function Me(e,t){return[e.slice(0,t),e.slice(t)]}function Fe(e){const{fullPath:t,query:n,hash:o,name:a,path:r,params:s,meta:i,redirectedFrom:u,matched:l}=e;return{fullPath:t,params:s,query:n,hash:o,name:a,path:r,meta:i,matched:l,redirectedFrom:u}}function Ve({router:e},t,n,o){var l,c;if(n!=="prefix")return e.resolve(t);const[a,r]=Me(t.path,1),s=`${a}${o}${r===""?r:`/${r}`}`,i=(c=(l=e.options)==null?void 0:l.routes)==null?void 0:c.find(d=>d.path===s);if(i==null)return t;const u=ee({},t,i);return u.path=s,e.resolve(u)}const qe=new Set(["prefix_and_default","prefix_except_default"]);function ze(e){const{currentLocale:t,defaultLocale:n,strategy:o}=e;return!(t===n&&qe.has(o))&&o!=="no_prefix"}const Ke=ze;function I(e,t){const{routesNameSeparator:n}=e.runtimeConfig.public.i18n,o=_(t);return o==null||!o.name?void 0:ae(o.name).split(n)[0]}function K(e,t,n){var a;if(typeof t=="string"&&M(t,{acceptRelative:!0}))return t;const o=H(e,t,n);return o==null?"":((a=o.redirectedFrom)==null?void 0:a.fullPath)||o.fullPath}function se(e,t,n){return H(e,t,n)??void 0}function bt(e,t,n){return H(e,t,n)??void 0}function H(e,t,n){const{router:o,i18n:a}=e,r=n||z(a),{routesNameSeparator:s,defaultLocale:i,defaultLocaleRouteNameSuffix:u,strategy:l,trailingSlash:c}=e.runtimeConfig.public.i18n,d=st(e.runtimeConfig);let h;if(y(t))if(t[0]==="/"){const{pathname:f,search:m,hash:L}=me(t),P=Le(m);h={path:f,query:P,hash:L}}else h={name:t};else h=t;let p=ee({},h);if((f=>"path"in f&&!!f.path&&!("name"in f))(p)){const f=Ve(e,p,l,r),m=I(e,f);y(m)?(p={name:G(m,r,{defaultLocale:i,strategy:l,routesNameSeparator:s,defaultLocaleRouteNameSuffix:u}),params:f.params,query:f.query,hash:f.hash},p.state=f.state):(d({currentLocale:r,defaultLocale:i,strategy:l})&&(p.path=`/${r}${p.path}`),p.path=c?_e(p.path,!0):we(p.path,!0))}else!p.name&&!("path"in p)&&(p.name=I(e,o.currentRoute.value)),p.name=G(p.name,r,{defaultLocale:i,strategy:l,routesNameSeparator:s,defaultLocaleRouteNameSuffix:u});try{const f=o.resolve(p);return f.name?f:o.resolve(t)}catch(f){if(typeof f=="object"&&"type"in f&&f.type===1)return null}}const He=e=>e;function Qe(e,t){var o;if(e.runtimeConfig.public.i18n.experimental.switchLocalePathLinkSSR)return _(e.metaState.value);const n=t.meta||{};return((o=_(n))==null?void 0:o[ke])||{}}function E(e,t,n){const o=n??e.router.currentRoute.value,a=I(e,o);if(!a)return"";const r=it(e.runtimeConfig),s=Fe(o),i=Qe(e,o)[t],u={...s,name:a,params:{...s.params,...i}},l=K(e,u,t);return r(l,t)}function We(e,{addDirAttribute:t=!1,addSeoAttributes:n=!0,identifierAttribute:o="hid"}){const{defaultDirection:a}=v().public.i18n,r=oe(e.i18n),s={htmlAttrs:{},link:[],meta:[]};if(_(r.locales)==null||_(r.baseUrl)==null)return s;const i=z(e.i18n),u=Ee(e.i18n),l=Se(u).find(h=>h.code===i)||{code:i},c=l.iso,d=l.dir||a;return t&&(s.htmlAttrs.dir=d),n&&i&&_(r.locales)&&(c&&(s.htmlAttrs.lang=c),s.link.push(...Ye(e,_(u),o),...Ge(e,o,n)),s.meta.push(...Xe(e,o,n),...Je(l,c,o),...Ze(_(u),c,o))),s}function Q(){const e=k(),t=oe(e.$i18n);return F(_(t.baseUrl),e.$config.app.baseURL)}function Ye(e,t,n){const o=Q(),{defaultLocale:a,strategy:r}=v().public.i18n,s=[];if(r==="no_prefix")return s;const i=new Map;for(const u of t){const l=u.iso;if(!l){console.warn("Locale ISO code is required to generate alternate link");continue}const[c,d]=l.split("-");c&&d&&(u.isCatchallLocale||!i.has(c))&&i.set(c,u),i.set(l,u)}for(const[u,l]of i.entries()){const c=E(e,l.code);c&&s.push({[n]:`i18n-alt-${u}`,rel:"alternate",href:j(c,o),hreflang:u})}if(a){const u=E(e,a);u&&s.push({[n]:"i18n-xd",rel:"alternate",href:j(u,o),hreflang:"x-default"})}return s}function ie(e,t,n){const o=e.router.currentRoute.value,a=se(e,{...o,path:void 0,name:I(e,o)});if(!a)return"";let r=j(a.path,t);const s=O(n)&&n.canonicalQueries||[],i=a.query,u=new URLSearchParams;for(const c of s)if(c in i){const d=i[c];Z(d)?d.forEach(h=>u.append(c,h||"")):u.append(c,d||"")}const l=u.toString();return l&&(r=`${r}?${l}`),r}function Ge(e,t,n){const o=Q(),a=ie(e,o,n);return a?[{[t]:"i18n-can",rel:"canonical",href:a}]:[]}function Xe(e,t,n){const o=Q(),a=ie(e,o,n);return a?[{[t]:"i18n-og-url",property:"og:url",content:a}]:[]}function Je(e,t,n){return!e||!t?[]:[{[n]:"i18n-og",property:"og:locale",content:ce(t)}]}function Ze(e,t,n){return e.filter(a=>a.iso&&a.iso!==t).map(a=>({[n]:`i18n-og-alt-${a.iso}`,property:"og:locale:alternate",content:ce(a.iso)}))}function ce(e){return(e||"").replace(/-/g,"_")}function j(e,t){return e.match(/^https?:\/\//)?e:F(t,e)}function et(e,t){return $(e,"setLocaleCookie",t)}function tt(e,t,n){return $(e,"mergeLocaleMessage",t,n)}function nt(e,t,n,o,a){return $(e,"onBeforeLanguageSwitch",t,n,o,a)}function ot(e,t,n){return $(e,"onLanguageSwitched",t,n)}function le(e){return{i18n:e??k().$i18n,router:ve(),runtimeConfig:v(),metaState:te("nuxt-i18n-meta",()=>({}))}}async function Dt(e,t,n,o=!1){const{differentDomains:a,skipSettingLocaleOnNavigate:r,lazy:s}=n,i=A(n),u=k(),l=z(t),c=Oe(t);function d(p=l){i===!1||!i.useCookie||r||et(t,p)}if(!e||!o&&a||l===e)return d(),!1;const h=await nt(t,l,e,o,u);if(h&&c.includes(h)){if(l===h)return d(),!1;e=h}if(s){const p=ct(t,"fallbackLocale"),g=(f,m)=>tt(t,f,m);if(p){const f=re(p,[e]);await Promise.all(f.map(m=>T(m,Y,g)))}await T(e,Y,g)}return r?!1:(d(e),$e(t,e),await ot(t,l,e),!0)}function It(e,t,n,o,a,r){const{strategy:s,defaultLocale:i,differentDomains:u}=r,l=A(r),c=D(o)?o():o,{ssg:d,callType:h,firstAccess:p,localeCookie:g}=a,{locale:f,stat:m,reason:L,from:P}=l?ft(e,n,a,c):ut;if(L==="detect_ignore_on_ssg")return c;if((P==="navigator_or_header"||P==="cookie"||P==="fallback")&&f)return f;let w=f;return w||(u?w=pt(q,s,e):s!=="no_prefix"?w=t(e):l||(w=c)),!w&&l&&l.useCookie&&(w=g||""),w||(w=i||""),w}function Et({route:e,targetLocale:t,routeLocaleGetter:n,calledWithRouting:o=!1}){const a=k(),r=le(),{strategy:s,differentDomains:i}=r.runtimeConfig.public.i18n;let u="";const{fullPath:l}=e.to;if(!i&&(o||s!=="no_prefix")&&n(e.to)!==t){const c=a.$switchLocalePath(t)||a.$localePath(l,t);y(c)&&c&&!W(c,l)&&!c.startsWith("//")&&(u=e.from&&e.from.fullPath===c?"":c)}if((i||Re)&&n(e.to)!==t){const c=E(r,t,e.to);y(c)&&c&&!W(c,l)&&!c.startsWith("//")&&(u=c)}return u}function at(e){return O(e)&&"path"in e&&"statusCode"in e}const rt=()=>te(ne+":redirect",()=>"");function J(e,t){return Ce(e,{redirectCode:t})}async function Ot(e,{status:t=302,enableNavigate:n=!1}={}){const{nuxtApp:o,i18n:a,locale:r,route:s}=e,{rootRedirect:i,differentDomains:u,skipSettingLocaleOnNavigate:l}=o.$config.public.i18n;let{redirectPath:c}=e;if(s.path==="/"&&i)return y(i)?c="/"+i:at(i)&&(c="/"+i.path,t=i.statusCode),c=o.$localePath(c,r),J(c,t);if(!(l&&(a.__pendingLocale=r,a.__pendingLocalePromise=new Promise(d=>{a.__resolvePendingLocalePromise=d}),!n))){if(u){const d=rt();d.value&&d.value!==c&&(d.value="",window.location.assign(c))}else if(c)return J(c,t)}}function $t(e,t){x(e,"$i18n",C(t)),x(e,"$getRouteBaseName",R(I)),x(e,"$localePath",R(K)),x(e,"$localeRoute",R(se)),x(e,"$switchLocalePath",R(E)),x(e,"$localeHead",R(We))}function st(e=v()){return t=>Ke(t)&&!e.public.i18n.differentDomains}function it(e=v()){return(t,n)=>{if(e.public.i18n.differentDomains){const o=fe(n);return o?F(o,t):t}else return He(t)}}function At(){return()=>{const e=k(),{baseUrl:t,defaultLocale:n,differentDomains:o}=e.$config.public.i18n;if(D(t))return t(e);const a=D(n)?n():n;if(o&&a){const r=fe(a);if(r)return r}return t}}function ue(e){return ne+" "+e}function $(e,t,...n){const o=C(e),[a,r]=[o,o[t]];return Reflect.apply(r,a,[...n])}function ct(e,t){const n=C(e);return _(n[t])}function x(e,t,n){Object.defineProperty(e,t,{get:()=>n})}function R(e,t=le()){return(...n)=>e(t,...n)}function lt(){let e;return navigator.languages&&(e=je(q,navigator.languages)),e}function Bt(){const e=A(),t=e&&e.cookieKey||xe,n=new Date,o={expires:new Date(n.setDate(n.getDate()+365)),path:"/",sameSite:e&&e.cookieCrossOrigin?"none":"lax",secure:e&&e.cookieCrossOrigin||e&&e.cookieSecure};return e&&e.cookieDomain&&(o.domain=e.cookieDomain),he(t,o)}function Ut(e,t,n){if(t===!1||!t.useCookie)return;const o=e.value??void 0;if(o!=null){if(B.includes(o))return o;if(n)return e.value=n,n;e.value=void 0}}function Tt(e,t,n){n===!1||!n.useCookie||(e.value=t)}const ut={locale:"",stat:!1,reason:"unknown",from:"unknown"};function ft(e,t,n,o=""){const{strategy:a}=v().public.i18n,{ssg:r,callType:s,firstAccess:i,localeCookie:u}=n;if(!i)return{locale:a==="no_prefix"?o:"",stat:!1,reason:"first_access_only"};const{redirectOn:l,alwaysRedirect:c,useCookie:d,fallbackLocale:h}=A(),p=y(e)?e:e.path;if(a!=="no_prefix"){if(l==="root"){if(p!=="/")return{locale:"",stat:!1,reason:"not_redirect_on_root"}}else if(l==="no prefix"&&!c&&p.match(U(B)))return{locale:"",stat:!1,reason:"not_redirect_on_no_prefix"}}let g="unknown",f,m;d&&(m=f=u,g="cookie"),m||(m=lt(),g="navigator_or_header");const L=m||h;!m&&h&&(g="fallback");const P=o||t;if(L&&(!d||c||!f)){if(a==="no_prefix")return{locale:L,stat:!0,from:g};if(s==="setup"&&L!==P)return{locale:L,stat:!0,from:g};if(c){const w=p==="/",de=l==="all",pe=l==="no prefix"&&!p.match(U(B));if(w||de||pe)return{locale:L,stat:!0,from:g}}}return r==="ssg_setup"&&L?{locale:L,stat:!0,from:g}:(g==="navigator_or_header"||g==="cookie")&&L?{locale:L,stat:!0,from:g}:{locale:"",stat:!1,reason:"not_found_match"}}function dt(){let e;return e=window.location.host,e}function pt(e,t,n){let o=dt()||"";if(o){let a;const r=e.filter(s=>{if(s&&s.domain){let i=s.domain;return M(s.domain)&&(i=s.domain.replace(/(http|https):\/\//,"")),i===o}return!1});if(r.length===1)a=r[0];else if(r.length>1)if(t==="no_prefix")console.warn(ue("Multiple matching domains found! This is not supported for no_prefix strategy in combination with differentDomains!")),a=r[0];else{if(n){const s=O(n)?n.path:y(n)?n:"";if(s&&s!==""){const i=s.match(U(r.map(u=>u.code)));i&&i.length>1&&(a=r.find(u=>u.code===i[1]))}}a||(a=r.find(s=>s.domainDefault))}if(a)return a.code;o=""}return o}function fe(e){var r,s;const t=v();k();const n=t.public.i18n,o=q.find(i=>i.code===e),a=((s=(r=n==null?void 0:n.locales)==null?void 0:r[e])==null?void 0:s.domain)??(o==null?void 0:o.domain);if(a){if(M(a,{strict:!0}))return a;let i;return i=new URL(window.location.origin).protocol,i+"//"+a}console.warn(ue("Could not find domain name for locale "+e))}const A=(e=v().public.i18n)=>(e==null?void 0:e.detectBrowserLanguage)===!1?!1:e==null?void 0:e.detectBrowserLanguage;function jt(){return R(K)}function Nt(){return R(E)}export{vt as A,St as B,Y as C,q as D,Dt as E,Et as F,Ot as G,T as H,lt as I,Tt as J,$e as K,z as L,tt as M,Pt as S,te as a,le as b,I as c,se as d,bt as e,We as f,oe as g,Rt as h,Ie as i,kt as j,B as k,K as l,U as m,A as n,Bt as o,Ct as p,It as q,H as r,E as s,Ut as t,jt as u,$t as v,R as w,Nt as x,At as y,xt as z};
