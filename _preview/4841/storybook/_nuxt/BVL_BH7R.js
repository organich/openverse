import{W as F}from"./BghFeiRs.js";import{h}from"./D36rSpla.js";const G={title:"Meta/Focus",decorators:[F]},e=N=>k=>({setup(){return()=>h("div",{class:`h-30 w-30 flex items-center justify-center ${N} ${k.classNames.join(" ")}`,"data-testid":"focus-target",tabindex:"0"},"Focus on me")}}),r={render:e("border border-disabled hover:border-hover").bind({}),name:"Slim transparent",args:{classNames:["focus-slim-tx"]}},s={render:e("bg-tertiary text-over-dark border border-tx").bind({}),name:"Slim filled",args:{classNames:["focus-slim-filled"]}},a={render:e("bg-primary text-over-dark").bind({}),name:"Slim filled borderless",args:{classNames:["focus-slim-borderless-filled"]}},o={render:e("bg-complementary text-default").bind({}),name:"Bold filled",args:{classNames:["focus-bold-filled"]}},t={render:e("bg-tertiary text-over-dark border border-tx").bind({}),name:"Colored",args:{classNames:["focus-slim-tx bg-complementary"]},parameters:{backgrounds:{default:"dark"}}};var d,l,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: GetTemplate("border border-disabled hover:border-hover").bind({}),
  name: "Slim transparent",
  args: {
    classNames: ["focus-slim-tx"]
  }
}`,...(n=(l=r.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var m,i,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: GetTemplate("bg-tertiary text-over-dark border border-tx").bind({}),
  name: "Slim filled",
  args: {
    classNames: ["focus-slim-filled"]
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var b,p,u;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: GetTemplate("bg-primary text-over-dark").bind({}),
  name: "Slim filled borderless",
  args: {
    classNames: ["focus-slim-borderless-filled"]
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: GetTemplate("bg-complementary text-default").bind({}),
  name: "Bold filled",
  args: {
    classNames: ["focus-bold-filled"]
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var S,v,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: GetTemplate("bg-tertiary text-over-dark border border-tx").bind({}),
  name: "Colored",
  args: {
    classNames: ["focus-slim-tx bg-complementary"]
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const C=["SlimTransparent","SlimFilled","SlimFilledBorderless","BoldFilled","Colored"];export{o as BoldFilled,t as Colored,s as SlimFilled,a as SlimFilledBorderless,r as SlimTransparent,C as __namedExportsOrder,G as default};
