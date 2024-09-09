import{k as s}from"./RevM6cLn.js";import{V as I}from"./Cg8BedNo.js";import{d as A,$ as _,A as h,C as T,a0 as C,N as p,O as k,P as L,R as F,M as S,Q as E,D as $,J as M,Z as z}from"./D36rSpla.js";import{_ as B}from"./DlAUqK2U.js";const N=Symbol();function g(e){return e==null||e.value==null?null:"$el"in e.value?e.value.$el:e.value}const R=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),n=Object.freeze({First:1,Previous:2,Next:4,Last:8,WrapAround:16}),x=Object.freeze({Error:"Error",Overflow:"Overflow",Success:"Success",Underflow:"Underflow"}),y=Object.freeze({Next:1,Previous:-1});function U(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(R))}function Q(e){e instanceof HTMLElement&&e.focus()}const V=["textarea","input"].join(",");function j(e){var a;return((a=e==null?void 0:e.matches)==null?void 0:a.call(e,V))??!1}function W(e,a=l=>l){return e.slice().sort((l,r)=>{const i=a(l),u=a(r);if(i===null||u===null)return 0;const d=i.compareDocumentPosition(u);return d&Node.DOCUMENT_POSITION_FOLLOWING?-1:d&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function w(e,a){const l=(Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)??document,r=Array.isArray(e)?W(e):U(e),i=l.activeElement,u=(()=>{if(a&(n.First|n.Next))return y.Next;if(a&(n.Previous|n.Last))return y.Previous;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(a&n.First)return 0;if(a&n.Previous)return Math.max(0,r.indexOf(i))-1;if(a&n.Next)return Math.max(0,r.indexOf(i))+1;if(a&n.Last)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})();let b=0;const f=r.length;let t;do{if(b>=f||b+f<=0)return x.Error;let c=d+b;if(a&n.WrapAround)c=(c+f)%f;else{if(c<0)return x.Underflow;if(c>=f)return x.Overflow}t=r[c],t==null||t.focus(),b+=u}while(t!==l.activeElement);return(!t.hasAttribute("tabindex")||t.getAttribute("tabindex")==="-1")&&t.setAttribute("tabindex","0"),a&(n.Next|n.Previous)&&j(t)&&t.select(),x.Success}const K=A({__name:"VTab",props:{id:{},disabled:{type:Boolean,default:!1},size:{default:"default"}},setup(e){const a=e,l=_(N);if(!l)throw new Error("Could not resolve tabContext in VTab");const r=l,i=h(null);T(()=>r.registerTab(i)),C(()=>r.unregisterTab(i));const u=p(()=>r.selectedId.value===a.id),d=()=>{var o;a.disabled||(r.activation.value==="auto"&&r.setSelectedId(a.id),(o=g(i))==null||o.focus())},b=()=>{var o;a.disabled||((o=g(i))==null||o.focus(),r.setSelectedId(a.id))},f=o=>{o.preventDefault()},t=(o,v)=>{let m=o===s.ArrowRight;return v==="rtl"&&(m=!m),m?n.Next:n.Previous},c=o=>{let v=r.tabs.value.map(D=>g(D)).filter(Boolean);if([s.Spacebar,s.Enter,s.Home,s.PageUp,s.End,s.PageDown,s.ArrowLeft,s.ArrowRight].includes(o.key))switch(o.preventDefault(),o.stopPropagation(),o.key){case s.Spacebar:case s.Enter:{r.setSelectedId(a.id);break}case s.Home:case s.PageUp:{w(v,n.First);break}case s.End:case s.PageDown:{w(v,n.Last);break}case s.ArrowLeft:{w(v,t(s.ArrowLeft,document.dir)|n.WrapAround);break}case s.ArrowRight:{w(v,t(s.ArrowRight,document.dir)|n.WrapAround);break}}},O=p(()=>({"aria-controls":`panel-${a.id}`,"aria-selected":u.value,disabled:a.disabled?!0:void 0})),P=p(()=>r.variant.value);return(o,v)=>(S(),k(I,F({id:`tab-${o.id}`,ref_key:"internalTabRef",ref:i,role:"tab",tabindex:u.value?0:-1,size:"disabled",variant:"plain--avoid"},O.value,{class:["rounded-none bg-default focus-slim-tx focus:z-10",[P.value,`size-${o.size}`,{[`${P.value}-selected`]:u.value}]],onClick:b,onFocus:d,onMousedown:f,onKeydown:c}),{default:L(()=>[E(o.$slots,"default",{},void 0,!0)]),_:3},16,["id","tabindex","class"]))}}),Z=B(K,[["__scopeId","data-v-e8f10556"]]),X=A({__name:"VTabs",props:{label:{},manual:{type:Boolean,default:!1},variant:{default:"bordered"},selectedId:{},tablistStyle:{}},emits:["change","close"],setup(e,{emit:a}){const l=e,r=a,i=h(l.selectedId),u=h([]),d=h([]),b={selectedId:i,activation:p(()=>l.manual?"manual":"auto"),variant:p(()=>l.variant),tabs:u,panels:d,setSelectedId(t){i.value!==t&&(i.value=t,r("change",t))},registerTab(t){u.value.includes(t)||u.value.push(t)},unregisterTab(t){let c=u.value.indexOf(t);c!==-1&&u.value.splice(c,1)},registerPanel(t){d.value.includes(t)||d.value.push(t)},unregisterPanel(t){let c=d.value.indexOf(t);c!==-1&&d.value.splice(c,1)}};z(N,b);const f=p(()=>l.label.startsWith("#")?{"aria-labelledby":l.label.slice(1)}:{"aria-label":l.label});return(t,c)=>(S(),$("div",null,[M("div",F({role:"tablist",class:["flex flex-row items-stretch",t.tablistStyle]},f.value),[E(t.$slots,"tabs")],16),E(t.$slots,"default")]))}});export{Z as V,X as _,Q as a,w as f,N as t};
