import{u as a}from"./Dm22SxXZ.js";import{d as i,A as r,T as l,D as t,J as c,K as f,M as u}from"./D36rSpla.js";import{_ as p}from"./DlAUqK2U.js";const d=["viewBox"],m=["href"],v=i({__name:"VIcon",props:{name:{},viewBox:{default:"0 0 24 24"},gId:{default:"icon"},size:{default:6},rtlFlip:{type:Boolean,default:!1}},setup(n){const e=n;if(!e.viewBox.split(" ").every(o=>!isNaN(parseInt(o))))throw new Error(`Invalid viewBox "${e.viewBox}" for icon "${e.name}".`);if(![4,5,6,8,10,12].includes(e.size))throw new Error(`Invalid size "${e.size}" for icon "${e.name}".`);const s=r({url:"",class:""});return s.value=a(e.name.includes("/")?e.name:`icons/${e.name}`),l(()=>e.name,o=>{s.value=a(o)}),(o,w)=>(u(),t("svg",{viewBox:o.viewBox,focusable:"false",class:f(["v-icon flex-none",[`w-${o.size}`,`h-${o.size}`,{"rtl-flip":o.rtlFlip},s.value.class]]),"aria-hidden":"true"},[c("use",{href:s.value.url},null,8,m)],10,d))}}),x=p(v,[["__scopeId","data-v-40ccf7ce"]]);export{x as V};
