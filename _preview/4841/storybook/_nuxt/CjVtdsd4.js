import{u as y}from"./CXqaUaDA.js";import{v as W}from"./DEfBnNKa.js";import{e as I,b as j,w as x}from"./DCwVccl7.js";import{_ as A}from"./CJsAJ7wP.js";import{d as B,N as h,D,L as S,M as R,A as u,ac as H,C as J,J as C,K as v,Q as K,H as L}from"./D36rSpla.js";import{_ as O}from"./DlAUqK2U.js";const P={class:"absolute z-10 h-8 w-8 flex-none"},$=B({__name:"VScroller",props:{direction:{}},emits:["click"],setup(_){const a=_,{t}=y({useScope:"global"}),c=h(()=>a.direction==="forward"?"chevron-forward":"chevron-back"),d=h(()=>t(a.direction==="forward"?"mediaDetails.scroll.forward":"mediaDetails.scroll.back"));return(i,n)=>(R(),D("div",P,[S(A,{"icon-props":{name:c.value,rtlFlip:!0},label:d.value,variant:"transparent-gray",size:"small",onClick:n[0]||(n[0]=b=>i.$emit("click"))},null,8,["icon-props","label"])]))}}),m=150,p=44,Q=B({__name:"VScrollableLine",setup(_){const a=u(null),t=u(null),c=u(null),{localeProperties:d}=y({useScope:"global"}),i=h(()=>d.value.dir??"ltr"),n=u(!1),{x:b}=I(t),{width:V}=j(a),s=H({start:!1,end:!1}),w=()=>{n.value=!0,s.start=!1,s.end=!0},M=e=>{s[e]=!1,f.value=!1,setTimeout(()=>{f.value=!0},500)},f=u(!0);x(V,e=>{var o;const r=(((o=t.value)==null?void 0:o.scrollWidth)??0)>=e;r&&!n.value?w():!r&&n.value&&(n.value=!1,s.start=!1,s.end=!1)},{debounce:500}),J(()=>{var e;!t.value||!a.value||((e=t.value)==null?void 0:e.scrollWidth)>a.value.scrollWidth&&w()});const T=(e,l)=>e.scrollWidth-e.clientWidth-(l==="rtl"?-e.scrollLeft:e.scrollLeft),z=e=>Math.abs(e.scrollLeft),E=(e,l,r)=>e==="start"?z(r):T(r,l),N=({side:e})=>{if(M(e),!t.value)return;const l=e==="start"?0:i.value==="ltr"?t.value.scrollWidth:-t.value.scrollWidth;t.value.scrollTo({left:l,behavior:"smooth"})},k=e=>{var g;if(!t.value||!c.value)return;const l=c.value;s[e==="start"?"end":"start"]=!0;let r=E(e,i.value,l),o=m;if(r-p<=m){N({side:e});return}r<m*2&&(o=r/2),i.value==="rtl"&&(o=-o);let F=e==="start"?-o:o;(g=t.value)==null||g.scrollBy({left:F,behavior:"smooth"})};return x(b,e=>{if(!t.value)return;const l=Math.abs(e),r=t.value.scrollWidth-l-t.value.clientWidth;s.start=l>=p,s.end=r>=p},{debounce:100}),(e,l)=>(R(),D("div",{ref_key:"containerRef",ref:a,class:v(["container relative flex min-w-0",{"pointer-events-none":!f.value}])},[C("div",{ref_key:"innerContainerRef",ref:c,class:v(["inner-container max-w-full",{"faded-overflow-s":s.start,"faded-overflow-e":s.end}])},[C("div",{ref_key:"buttonsRef",ref:t,class:v(["buttons flex justify-start gap-x-3 overflow-x-scroll sm:gap-x-1",[s.start?s.end?"me-11 ms-11 w-[calc(100%_-_2_*_theme(spacing.11))]":"ms-11 w-[calc(100%_-_theme(spacing.11))]":s.end?"me-11 w-[calc(100%_-_theme(spacing.11))]":""]])},[K(e.$slots,"default",{},void 0,!0)],2)],2),L(S($,{class:"start-0",direction:"back",onClick:l[0]||(l[0]=r=>k("start"))},null,512),[[W,s.start]]),L(S($,{class:"end-0",direction:"forward",onClick:l[1]||(l[1]=r=>k("end"))},null,512),[[W,s.end]])],2))}}),te=O(Q,[["__scopeId","data-v-727c534c"]]);export{te as V};
