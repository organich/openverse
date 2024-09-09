import{a as u}from"./BS9R2VWD.js";import{V as o}from"./DXN4UINi.js";import{h as c}from"./D36rSpla.js";import"./DEfBnNKa.js";import"./Ck1zm_Kp.js";import"./CJsAJ7wP.js";import"./dBDJp61W.js";import"./Dm22SxXZ.js";import"./CFMQYC2y.js";import"./DlAUqK2U.js";import"./Cg8BedNo.js";import"./BZI5Q7ZN.js";import"./C6A5PBPG.js";import"./BOX21o1p.js";import"./Gvn891Jj.js";import"./BDR3Ouqq.js";const E={title:"Components/Audio track/Audio control",component:o,argTypes:{status:{options:u,control:"select"},size:{options:["small","medium","large"],control:"select"},onToggle:{action:"toggle"}}},p={render:l=>({components:{VAudioControl:o},setup(){return()=>c(o,l)}})},e={...p,name:"Default",args:{status:"playing",size:"large"}},t={...p,name:"Disabled",args:{disabled:!0,status:"playing",size:"medium"}};var r,a,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Template,
  name: "Default",
  args: {
    status: "playing",
    size: "large"
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var n,i,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Template,
  name: "Disabled",
  args: {
    disabled: true,
    status: "playing",
    size: "medium"
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const O=["Default","Disabled"];export{e as Default,t as Disabled,O as __namedExportsOrder,E as default};
