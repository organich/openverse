import{a as w,m as F,f as V}from"./BADMhBhM.js";import{I as s}from"./Cgdi_O8X.js";import{_ as i}from"./B84NJKGo.js";import{h as a}from"./D36rSpla.js";import"./C6A5PBPG.js";import"./4MnmF0OT.js";import"./BZI5Q7ZN.js";import"./CFMQYC2y.js";import"./Dt-H8hG_.js";import"./CTON8dBl.js";import"./DCwVccl7.js";import"./Cpj98o6Y.js";import"./Ci7G4jyV.js";import"./Xs_VBmP5.js";import"./CpXWnaV6.js";import"./BUOwoxew.js";import"./CVtkxrq9.js";import"./D0ww02ZN.js";import"./CXqaUaDA.js";import"./BSEdKPgk.js";import"./Cg8BedNo.js";import"./BOX21o1p.js";import"./Gvn891Jj.js";import"./BDR3Ouqq.js";import"./dBDJp61W.js";import"./Dm22SxXZ.js";import"./DlAUqK2U.js";import"./Dmb94LNO.js";const Z={title:"Components/VHeader/VFilterButton",component:i,argTypes:{pressed:{type:"boolean"},appliedFilters:{type:"number"},disabled:{type:"boolean"},onToggle:{action:"toggle"}}},g=p=>({components:{VFilterButton:i},setup(){const o=w();o.setSearchType(s);function y(T){o.clearFilters();const h=[...F[s]];let e=0,m=1;for(let n=0;n<T;n++){let l=h[m];o.toggleFilter({filterType:l,codeIdx:e}),e+=1,V[l].length===e&&(m+=1,e=0)}}return y(p.appliedFilters),()=>a("div",{class:"flex"},[a("div",{id:"wrapper",class:"px-4 h-16 bg-surface flex align-center justify-center"},[a(i,p)])])}}),t={render:g.bind({}),name:"Default",parameters:{viewport:{defaultViewport:"lg"}}},r={render:g.bind({}),name:"With text label",parameters:{viewport:{defaultViewport:"xl"}}};var d,c,f;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: "Default",
  parameters: {
    viewport: {
      defaultViewport: "lg"
    }
  }
}`,...(f=(c=t.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var u,x,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: "With text label",
  parameters: {
    viewport: {
      defaultViewport: "xl"
    }
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const $=["Default","WithTextLabel"];export{t as Default,r as WithTextLabel,$ as __namedExportsOrder,Z as default};
