import{w as c}from"./BZI5Q7ZN.js";import{u as m}from"./DbCtmoQP.js";import{u as d}from"./Ck1zm_Kp.js";import{V as r}from"./dBDJp61W.js";import{V as u}from"./Cg8BedNo.js";import{d as h,V as y,N as b,O as f,P as w,K as V,I as g,M as t,L as n,D as k,J as B,U as T,F as v,G as L}from"./D36rSpla.js";const C={class:"label-regular block max-w-30 flex-none truncate text-start"},H=h({__name:"VSearchTypeButton",props:{searchType:{},showLabel:{type:Boolean,default:!1}},emits:["click"],setup(l){const p=l,a=y();(!a["aria-haspopup"]||a["aria-expanded"]===void 0)&&c("You should provide `aria-haspopup` and `aria-expanded` props to VSearchTypeButton.");const s=b(()=>m().getSearchTypeProps(p.searchType).label),{doneHydrating:i}=d();return(e,o)=>(t(),f(u,{class:V(["min-w-12 gap-x-2",{"!px-3":e.showLabel}]),variant:"bordered-white","icon-only":!e.showLabel,disabled:!g(i),size:"large","aria-label":e.$t("searchType.selectLabel",{type:s.value}),onClick:o[0]||(o[0]=S=>e.$emit("click"))},{default:w(()=>[n(r,{name:e.searchType},null,8,["name"]),e.showLabel?(t(),k(v,{key:0},[B("span",C,T(s.value),1),n(r,{name:"caret-down"})],64)):L("",!0)]),_:1},8,["class","icon-only","disabled","aria-label"]))}});export{H as _};
