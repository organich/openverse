import{b as V}from"./DEfBnNKa.js";import{V as _}from"./dBDJp61W.js";import{d as w,V as k,_ as y,N as a,D as o,J as r,Q as A,L as S,H as g,U as m,G as x,F as C,E as T,R as N,K as B,M as l}from"./D36rSpla.js";const D={class:"pointer-events-none absolute inset-y-0 start-2 my-auto h-fit"},F={class:"pointer-events-none absolute inset-y-0 end-2 my-auto h-fit"},I=["id","name","aria-label"],E={key:0,disabled:"",value:""},L=["value"],G=w({inheritAttrs:!1,__name:"VSelectField",props:{modelValue:{default:""},blankText:{default:""},fieldId:{},labelText:{},choices:{},showSelected:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(p,{emit:f}){const i=p,h=f,d=k(),n=y(),b=a(()=>d.name??i.fieldId),u=a({get:()=>i.modelValue,set:e=>{h("update:modelValue",e)}}),v=a(()=>n&&n.start&&n.start().length!==0),c=a(()=>{const{class:e,...s}=d;return{classAttrs:e,nonClassAttrs:s}});return(e,s)=>(l(),o("div",{class:B(["relative m-0.5px box-content block w-fit rounded-sm border border-default text-sm focus-within:m-0 focus-within:border-1.5 focus-within:border-focus hover:border-hover focus-within:hover:border-focus",c.value.classAttrs])},[r("div",D,[A(e.$slots,"start")]),r("div",F,[S(_,{name:"caret-down"})]),g(r("select",N({id:e.fieldId,"onUpdate:modelValue":s[0]||(s[0]=t=>u.value=t),class:["flex h-[calc(theme(spacing.10)_-_2_*_theme(borderWidth.DEFAULT))] appearance-none truncate bg-tx pe-10",[e.showSelected?"w-full":"w-0 max-w-0",v.value?"ps-10":"ps-2"]],name:b.value},c.value.nonClassAttrs,{"aria-label":e.labelText}),[e.blankText?(l(),o("option",E,m(e.blankText),1)):x("",!0),(l(!0),o(C,null,T(e.choices,t=>(l(),o("option",{key:t.key,value:t.key},m(t.text),9,L))),128))],16,I),[[V,u.value]])],2))}});export{G as _};
