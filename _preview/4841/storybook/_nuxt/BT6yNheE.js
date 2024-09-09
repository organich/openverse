import{W as g}from"./BghFeiRs.js";import{_ as n}from"./Bx6GcBc6.js";import{V as a}from"./Be8cW6kX.js";import{h as e}from"./D36rSpla.js";import"./DEfBnNKa.js";import"./dBDJp61W.js";import"./Dm22SxXZ.js";import"./CFMQYC2y.js";import"./DlAUqK2U.js";import"./CXqaUaDA.js";import"./BSEdKPgk.js";import"./Bnkvtx4f.js";import"./Ci7G4jyV.js";import"./D0ww02ZN.js";const A={title:"Components/VCheckbox",component:n,decorators:[g],args:{id:"default",name:"Code is Poetry",value:"codeIsPoetry",checked:!1,isSwitch:!1},argTypes:{onChange:{action:"change"}}},f={render:r=>({components:{VCheckbox:n},setup(){return()=>e(n,r,{default:()=>r.name})}})},s={...f,name:"Default"},c={...f,name:"Switch",args:{isSwitch:!0}},t={name:"License Checkbox",render:r=>({components:{VCheckbox:n,VLicense:a},setup(){return()=>e("fieldset",{},[e("legend",{},"License"),e(n,{...r,class:"mb-4"},[e(a,{license:"by-nc",class:"me-4"})])])}}),args:{id:"cc-by",name:"license",value:"cc-by",checked:!0}};var o,m,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Template,
  name: "Default"
}`,...(i=(m=s.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var p,l,d;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Template,
  name: "Switch",
  args: {
    isSwitch: true
  }
}`,...(d=(l=c.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "License Checkbox",
  render: args => ({
    components: {
      VCheckbox,
      VLicense
    },
    setup() {
      return () => h("fieldset", {}, [h("legend", {}, "License"), h(VCheckbox, {
        ...args,
        class: "mb-4"
      }, [h(VLicense, {
        license: "by-nc",
        class: "me-4"
      })])]);
    }
  }),
  args: {
    id: "cc-by",
    name: "license",
    value: "cc-by",
    checked: true
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const E=["Default","Switch","LicenseCheckbox"];export{s as Default,t as LicenseCheckbox,c as Switch,E as __namedExportsOrder,A as default};
