import{_ as l,V as m,i as P}from"./CP-GIH3A.js";import{V as d}from"./dBDJp61W.js";import{_ as I}from"./9vmdOcPO.js";import{V as v}from"./Cg8BedNo.js";import{A as g,h as s}from"./D36rSpla.js";import"./C6A5PBPG.js";import"./RevM6cLn.js";import"./DQnMOLSw.js";import"./BZI5Q7ZN.js";import"./CFMQYC2y.js";import"./fl49u9nx.js";import"./DlAUqK2U.js";import"./Dm22SxXZ.js";import"./2RywF_mY.js";import"./DCwVccl7.js";import"./CE20bghl.js";import"./DEfBnNKa.js";import"./Ds7S2MXG.js";import"./BOX21o1p.js";import"./Gvn891Jj.js";import"./BDR3Ouqq.js";const X={title:"Components/VItemGroup",component:l,subcomponents:{VItem:m,VIcon:d,VPopover:I,VButton:v},argTypes:{direction:{options:P,control:{type:"radio"}},bordered:{control:{type:"boolean"}}}},k='This is a "menu" style item group. Multiple items can be active at a time and all have the "menuitemcheckbox" role.',A=(n,r,i)=>s(m,{key:n.id,selected:i.value.id===n.id,isFirst:r===0,onClick:()=>{i.value=n},size:"medium"},{default:()=>[s(d,{name:n.icon}),s("span",{},n.label)]}),G=(n,r,i,t,a)=>s(m,{key:n.id,selected:i.value.has(n.id),isFirst:r===0,onClick:()=>t(n),size:"medium"},{default:()=>[s(d,{name:n.icon}),s("span",{class:a==="horizontal"?"pe-2":""},n.label)]}),p={render:n=>({components:{VItemGroup:l,VItem:m,VIcon:d},setup(){const r=["close","pause","play","replay"],i=new Array(r.length).fill(null).map((a,e)=>({id:e,label:`Item ${e}`,icon:r[e]})),t=g({});return()=>s("div",{},[s("p",{},'This is a "radio" style list group. Only a single element can be selected at a time.'),s("div",{style:"width: 300px"},[s(l,{...n,type:"radiogroup"},{default:()=>i.map((a,e)=>A(a,e,t))})])])}}),name:"Default",args:{direction:"vertical",bordered:!0}},c={render:n=>({components:{VItemGroup:l,VItem:m,VIcon:d},setup(){const r=["close","pause","play","replay"],i=new Array(r.length).fill(null).map((e,o)=>({id:o,label:`Item ${o}`,icon:r[o]})),t=g(new Set),a=e=>{t.value.delete(e.id)?t.value=new Set(t.value):t.value=new Set(t.value.add(e.id))};return()=>s("div",{},[s("p",{},k),s("div",{style:"width: 300px"},[s(l,{...n,type:"menu"},{default:()=>i.map((e,o)=>G(e,o,t,a))})])])}}),name:"Menu",args:{direction:"vertical",bordered:!0}},u={render:n=>({components:{VButton:v,VPopover:I,VItem:m,VItemGroup:l,VIcon:d},setup(){const r=["close","pause","play","replay"],i=new Array(r.length).fill(null).map((e,o)=>({id:o,label:`Item ${o}`,icon:r[o]})),t=g(new Set),a=e=>{t.value.delete(e.id)?t.value=new Set(t.value):t.value=new Set(t.value.add(e.id))};return()=>s(I,{id:"item-group-popover"},{trigger:({a11yProps:e,visible:o})=>s(v,{variant:"filled-pink-8",size:"medium",...e,pressed:o},{default:()=>o?"Close menu":"Open menu"}),default:()=>[s(l,{...n,type:"menu"},{default:()=>i.map((e,o)=>G(e,o,t,a,n.direction))})]})}}),name:"Popover",args:{direction:"vertical",bordered:!1}};var f,y,h;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VItemGroup,
      VItem,
      VIcon
    },
    setup() {
      const icons = ["close", "pause", "play", "replay"];
      const items = new Array(icons.length).fill(null).map((_, i) => ({
        id: i,
        label: \`Item \${i}\`,
        icon: icons[i]
      }));
      const selectedItem = ref(({} as Item));
      return () => h("div", {}, [h("p", {}, 'This is a "radio" style list group. Only a single element can be selected at a time.'), h("div", {
        style: "width: 300px"
      }, [h(VItemGroup, {
        ...args,
        type: "radiogroup"
      }, {
        default: () => items.map((item, idx) => defaultItem(item, idx, selectedItem))
      })])]);
    }
  }),
  name: "Default",
  args: {
    direction: "vertical",
    bordered: true
  }
}`,...(h=(y=p.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var V,b,w;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VItemGroup,
      VItem,
      VIcon
    },
    setup() {
      const icons = ["close", "pause", "play", "replay"];
      const items = new Array(icons.length).fill(null).map((_, i) => ({
        id: i,
        label: \`Item \${i}\`,
        icon: icons[i]
      }));
      const selectedItemIds = ref(new Set<number>());
      const toggleItem = (item: Item) => {
        if (selectedItemIds.value.delete(item.id)) {
          selectedItemIds.value = new Set(selectedItemIds.value);
        } else {
          selectedItemIds.value = new Set(selectedItemIds.value.add(item.id));
        }
      };
      return () => h("div", {}, [h("p", {}, menuDescription), h("div", {
        style: "width: 300px"
      }, [h(VItemGroup, {
        ...args,
        type: "menu"
      }, {
        default: () => items.map((item, idx) => menuItem(item, idx, selectedItemIds, toggleItem))
      })])]);
    }
  }),
  name: "Menu",
  args: {
    direction: "vertical",
    bordered: true
  }
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var S,_,x;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VButton,
      VPopover,
      VItem,
      VItemGroup,
      VIcon
    },
    setup() {
      const icons = ["close", "pause", "play", "replay"];
      const items = new Array(icons.length).fill(null).map((_, i) => ({
        id: i,
        label: \`Item \${i}\`,
        icon: icons[i]
      }));
      const selectedItemIds = ref(new Set<number>());
      const toggleItem = (item: Item) => {
        if (selectedItemIds.value.delete(item.id)) {
          selectedItemIds.value = new Set(selectedItemIds.value);
        } else {
          selectedItemIds.value = new Set(selectedItemIds.value.add(item.id));
        }
      };
      return () => h(VPopover, {
        id: "item-group-popover"
      }, {
        trigger: ({
          a11yProps,
          visible
        }: TriggerProps) => h(VButton, {
          variant: "filled-pink-8",
          size: "medium",
          ...a11yProps,
          pressed: visible
        }, {
          default: () => visible ? "Close menu" : "Open menu"
        }),
        default: () => [h(VItemGroup, {
          ...args,
          type: "menu"
        }, {
          default: () => items.map((item, idx) => menuItem(item, idx, selectedItemIds, toggleItem, args.direction))
        })]
      });
    }
  }),
  name: "Popover",
  args: {
    direction: "vertical",
    bordered: false
  }
}`,...(x=(_=u.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const Y=["Default","Menu","Popover"];export{p as Default,c as Menu,u as Popover,Y as __namedExportsOrder,X as default};
