import{u as c}from"./CXqaUaDA.js";import{i as t}from"./vQCScaZm.js";import{g as u}from"./DdMEaL1I.js";import{V as p,g as r}from"./DSskDkW4.js";import{u as l}from"./Cgdi_O8X.js";import{_ as f}from"./C5nGTbmm.js";import"./BSEdKPgk.js";import"./D36rSpla.js";import"./D0ww02ZN.js";import"./Xs_VBmP5.js";import"./C6A5PBPG.js";import"./BDR3Ouqq.js";import"./CFMQYC2y.js";import"./BG4T5isn.js";import"./BUOwoxew.js";import"./CVtkxrq9.js";import"./4MnmF0OT.js";import"./Gvn891Jj.js";import"./dBDJp61W.js";import"./Dm22SxXZ.js";import"./DlAUqK2U.js";import"./DEfBnNKa.js";import"./Ds7S2MXG.js";import"./DQnMOLSw.js";import"./CJsAJ7wP.js";import"./Cg8BedNo.js";import"./BZI5Q7ZN.js";import"./BOX21o1p.js";import"./CpXWnaV6.js";import"./DCwVccl7.js";import"./Dt-H8hG_.js";import"./D06FS7--.js";const e=u({originalTitle:"Test Audio",sensitivity:[],isSensitive:!1}),g={render:d=>({template:`
    <div class="flex flex-col gap-y-2">
      <VLanguageSelect />
      <section class="wrapper flex flex-col p-2 gap-y-2 bg-surface">
        <VMetadata
        v-for="datum in data"
        :key="datum.media.id"
        :metadata="datum.metadata"
        :media="datum.media"
        v-bind="datum"
        class="bg-default"/>
      </section>
    </div>
  `,components:{VMetadata:p,VLanguageSelect:f},setup(){l().$patch({providers:{audio:[{source_name:e.source}],image:[{source_name:t.source}]},sourceNames:{audio:[e.source],image:[t.source]}});const o=c({useScope:"global"}),n=[{metadata:r(t,o,{width:t.width,height:t.height,type:t.filetype}),media:t},{metadata:r(e,o),media:e}];return{args:d,data:n}}})},U={title:"Components/VMediaInfo/VMetadata",component:p},a={...g,name:"VMetadata"};var i,m,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Template,
  name: "VMetadata"
}`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const W=["Default"];export{a as Default,W as __namedExportsOrder,U as default};
