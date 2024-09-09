import{b as u,a as d}from"./D65YVVAM.js";import{_ as e}from"./CJsAJ7wP.js";import{h as n}from"./D36rSpla.js";import"./dBDJp61W.js";import"./Dm22SxXZ.js";import"./CFMQYC2y.js";import"./DlAUqK2U.js";import"./Cg8BedNo.js";import"./BZI5Q7ZN.js";import"./C6A5PBPG.js";import"./BOX21o1p.js";import"./Gvn891Jj.js";import"./BDR3Ouqq.js";const k={title:"Components/VIconButton",component:e,argTypes:{size:{options:u,control:"select"},variant:{options:d,control:"select"}}},o={render:a=>({components:{VIconButton:e},setup(){return()=>n(e,{...a})}}),name:"Default",args:{variant:"filled-dark",size:"medium",label:"v-icon-button",iconProps:{name:"replay"}}},t={render:a=>({components:{VIconButton:e},setup(){return()=>n("div",{class:"flex gap-x-2"},u.map(r=>n("div",{class:"flex flex-col items-center p-2 gap-2"},[n("p",{class:"label-bold"},r),n(e,{...a,size:r},[])])))}}),name:"Sizes",args:{variant:"filled-dark",size:"small",label:"v-icon-button",iconProps:{name:"replay"}}};var s,i,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VIconButton
    },
    setup() {
      return () => h(VIconButton, {
        ...args
      });
    }
  }),
  name: "Default",
  args: {
    variant: "filled-dark",
    size: "medium",
    label: "v-icon-button",
    iconProps: {
      name: "replay"
    }
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VIconButton
    },
    setup() {
      return () => h("div", {
        class: "flex gap-x-2"
      }, baseButtonSizes.map(size => h("div", {
        class: "flex flex-col items-center p-2 gap-2"
      }, [h("p", {
        class: "label-bold"
      }, size), h(VIconButton, {
        ...args,
        size
      }, [])])));
    }
  }),
  name: "Sizes",
  args: {
    variant: "filled-dark",
    size: "small",
    label: "v-icon-button",
    iconProps: {
      name: "replay"
    }
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const D=["Default","Sizes"];export{o as Default,t as Sizes,D as __namedExportsOrder,k as default};
