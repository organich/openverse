import{d as w}from"./DEfBnNKa.js";import{h as p,ay as N,ak as v,ac as g}from"./D36rSpla.js";var I=Object.defineProperty,j=(e,t)=>{for(var r in t)I(e,r,{get:t[r],enumerable:!0})};const{sanitizeStoryContextUpdate:E}=__STORYBOOK_MODULE_PREVIEW_API__;var F={};j(F,{applyDecorators:()=>U,mount:()=>b,parameters:()=>h,render:()=>y,renderToCanvas:()=>P});var y=(e,t)=>{let{id:r,component:i}=t;if(!i)throw new Error(`Unable to render story ${r} as the component annotation is missing from the default export`);return()=>p(i,e,L(e,t))},D=e=>{globalThis.PLUGINS_SETUP_FUNCTIONS??(globalThis.PLUGINS_SETUP_FUNCTIONS=new Set),globalThis.PLUGINS_SETUP_FUNCTIONS.add(e)},C=async(e,t)=>{globalThis&&globalThis.PLUGINS_SETUP_FUNCTIONS&&await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map(r=>r(e,t)))},d=new Map;async function P({storyFn:e,forceRemount:t,showMain:r,showException:i,storyContext:n,id:a},s){let u=d.get(s);if(u&&!t){let l=e(),c=T(l,n);return R(u.reactiveArgs,c),()=>{f(u.vueApp,s)}}u&&t&&f(u.vueApp,s);let o=w({setup(){n.args=g(n.args);let l=e(),c=T(l,n),_={vueApp:o,reactiveArgs:g(c)};return d.set(s,_),()=>p(l)}});return o.config.errorHandler=(l,c,_)=>{var S;(S=window.__STORYBOOK_PREVIEW__)!=null&&S.storyRenders.some(m=>m.id===a&&m.phase==="playing")?setTimeout(()=>{throw l},0):i(l)},await C(o,n),o.mount(s),r(),()=>{f(o,s)}}function L(e,t){let{argTypes:r}=t,i=Object.entries(e).filter(([n])=>{var a,s;return((s=(a=r[n])==null?void 0:a.table)==null?void 0:s.category)==="slots"}).map(([n,a])=>[n,typeof a=="function"?a:()=>a]);return Object.fromEntries(i)}function T(e,t){return e.props&&N(e)?e.props:t.args}function R(e,t){if(Object.keys(t).length===0)return;let r=v(e)?e:g(e);Object.keys(r).forEach(i=>{i in t||delete r[i]}),Object.assign(r,t)}function f(e,t){e==null||e.unmount(),d.has(t)&&d.delete(t)}function z(e){return typeof e=="function"?{render:e,name:e.name}:e}function O(e,t){let r=e;return r===null?null:typeof r=="function"?r:t?{...z(r),components:{...r.components||{},story:t}}:{render(){return p(r)}}}function U(e,t){return t.reduce((r,i)=>n=>{let a,s=i(u=>{let o=E(u);return u&&(o.args=Object.assign(n.args,o.args)),a=r({...n,...o}),a},n);return a||(a=r(n)),s===a?a:O(s,()=>p(a))},r=>O(e(r)))}var b=e=>async(t,r)=>(t&&(e.originalStoryFn=()=>()=>p(t,r==null?void 0:r.props,r==null?void 0:r.slots)),await e.renderToCanvas(),e.canvas),h={renderer:"vue3"};const M=Object.freeze(Object.defineProperty({__proto__:null,applyDecorators:U,mount:b,parameters:h,render:y,renderToCanvas:P},Symbol.toStringTag,{value:"Module"}));export{M as a,F as e,D as s};
