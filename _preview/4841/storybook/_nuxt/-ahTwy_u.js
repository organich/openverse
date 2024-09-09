import{V as m}from"./dBDJp61W.js";import{_ as e}from"./D06FS7--.js";import{A as I,h as n}from"./D36rSpla.js";import"./Dm22SxXZ.js";import"./CFMQYC2y.js";import"./DlAUqK2U.js";import"./DEfBnNKa.js";const a={fieldId:"fruit",blankText:"Fruit",labelText:"Fruit",choices:[{key:"a",text:"Apple"},{key:"b",text:"Banana"},{key:"c",text:"Cantaloupe"}]},G={title:"Components/VSelectField",component:e,argTypes:{"onUpdate:modelValue":{action:"update:modelValue"}}},A={render:r=>({components:{VSelectField:e},setup(){return()=>n(e,r)}}),args:{}},t={...A,name:"Default",args:a},s={...A,name:"Without border",args:{...a,variant:"borderless"}},o={render:r=>({components:{VSelectField:e},setup(){const l=I("a");return()=>n("div",[n(e,{...r,modelValue:l.value}),l.value])}}),name:"v-model",args:a},c={render:r=>({components:{VSelectField:e,VIcon:m},setup(){return()=>n(e,r,{start:()=>n(m,{name:"radiomark"})})}}),name:"With icon",args:a},i={render:r=>({components:{VSelectField:e,VIcon:m},setup(){return()=>n(e,{...r,class:"max-w-[100px]"},{start:()=>n(m,{name:"radiomark"})})}}),name:"With constraints",args:{...a,choices:[{key:"short",text:"Kiwi"},{key:"long",text:"Bob Gordon American Elderberry"}]}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Template,
  name: "Default",
  args: baseArgs
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,h,V;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Template,
  name: "Without border",
  args: {
    ...baseArgs,
    variant: "borderless"
  }
}`,...(V=(h=s.parameters)==null?void 0:h.docs)==null?void 0:V.source}}};var b,S,x;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VSelectField
    },
    setup() {
      const choice = ref("a");
      return () => h("div", [h(VSelectField, {
        ...args,
        modelValue: choice.value
      }), choice.value]);
    }
  }),
  name: "v-model",
  args: baseArgs
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var f,F,k;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VSelectField,
      VIcon
    },
    setup() {
      return () => h(VSelectField, args, {
        start: () => h(VIcon, {
          name: "radiomark"
        })
      });
    }
  }),
  name: "With icon",
  args: baseArgs
}`,...(k=(F=c.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var W,v,y;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VSelectField,
      VIcon
    },
    setup() {
      return () => h(VSelectField, {
        ...args,
        class: "max-w-[100px]"
      }, {
        start: () => h(VIcon, {
          name: "radiomark"
        })
      });
    }
  }),
  name: "With constraints",
  args: {
    ...baseArgs,
    choices: [{
      key: "short",
      text: "Kiwi"
    }, {
      key: "long",
      text: "Bob Gordon American Elderberry"
    }]
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const K=["Default","WithoutBorder","VModel","WithIcon","WithConstraints"];export{t as Default,o as VModel,i as WithConstraints,c as WithIcon,s as WithoutBorder,K as __namedExportsOrder,G as default};
