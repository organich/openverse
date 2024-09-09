import{u as we}from"./CXqaUaDA.js";import{k as M}from"./RevM6cLn.js";import{N as s,A as I,d as ye,a7 as se,D as c,I as b,G as P,K as L,F as H,E as ae,af as U,J as oe,U as V,R as _e,av as xe,M as v}from"./D36rSpla.js";import{u as Se}from"./L_noQeTX.js";import{r as Me,h as Te}from"./Dt-H8hG_.js";import{_ as Be}from"./DlAUqK2U.js";const Pe=({duration:a,currentTime:d,isSeekable:t,isReady:l,onSeek:i,onTogglePlayback:r})=>{const{t:n}=we({useScope:"global"}),f=s(()=>({"aria-role":"slider","aria-valuemax":a.value,"aria-valuenow":d.value,"aria-valuetext":n("waveform.currentTime",{time:d.value}),"aria-orientation":"horizontal","aria-valuemin":"0"})),o=1,k=15,_=s(()=>l.value?k/a.value:0),h=s(()=>l.value?o/a.value:0),g=s(()=>l.value?d.value/a.value:0),m=I(!1),x=u=>{const{key:R,shiftKey:O,metaKey:E}=u;if(E)i(R.includes("Left")?0:1);else{const S=R.includes("Left")?-1:1,X=(O?_.value:h.value)*S;i(g.value+X)}},w=[M.ArrowLeft,M.ArrowRight],F=[...w,M.Home,M.End],y=[...F,M.Spacebar],D=u=>t.value?y.includes(u.key):u.key===M.Spacebar;return{attributes:f,listeners:{keydown:u=>{if(D(u)){if(u.preventDefault(),m.value=F.includes(u.key),w.includes(u.key))return x(u);if(u.key===M.Home)return i(0);if(u.key===M.End)return i(1);if(u.key===M.Spacebar)return r()}},blur:()=>{m.value=!1}},meta:{modSeekDeltaFrac:_,seekDeltaFrac:h,currentFrac:g},willBeHandled:D,isSeeking:m}},Fe=(a,d)=>{const t=(r,n,f)=>r+(n-r)*f,l=[],i=(a.length-1)/(d-1);l[0]=a[0];for(let r=1;r<d-1;r++){const n=r*i,f=Math.floor(n),o=Math.ceil(n),k=n-f;l[r]=t(a[f],a[o],k)}return l[d-1]=a[a.length-1],l},De=(a,d)=>{const t=a.length,l=[];let i=0;const r=(t-2)/(d-2);let n=0,f,o,k,_;l[i++]=a[n];for(let h=0;h<d-2;h++){let g=0,m=0,x=Math.floor((h+1)*r)+1,w=Math.floor((h+2)*r)+1;w=w<t?w:t;const F=w-x;for(;x<w;x++)g+=x,m+=a[x];g/=F,m/=F;let y=Math.floor(h*r)+1;const D=Math.floor((h+1)*r)+1,A=n,W=a[n];for(o=k=-1,f=0,_=0;y<D;y++)k=Math.abs((A-g)*(a[y]-W)-(A-y)*(m-W))*.5,k>o&&(o=k,f=a[y],_=y);l[i++]=f,n=_}return l[i++]=a[t-1],l},q=(a,d=!1)=>{const t=d?a/1e3:a,l=~~(t/3600);let i=(~~(t%3600/60)).toString();const r=(~~t%60).toString().padStart(2,"0"),n=[];return l>0&&(n.push(l),i=i.padStart(2,"0")),n.push(i,r),n.join(":")},Ae=["tabIndex","aria-disabled","aria-label"],Ie=["viewBox"],We=["width","height"],Ce=["width","height"],Ee=["viewBox"],Ke=["width"],Le=["viewBox"],Re=["x","y","height"],ze={key:1,class:"duration timestamp bg-background-var right-0"},$e={key:3,class:"loading absolute inset-0 flex items-center justify-center text-xs font-bold"},Ne=1,j=2,J=2,He=2,Ve=ye({__name:"VWaveform",props:{peaks:{},message:{},currentTime:{default:0},duration:{default:0},usableFrac:{default:1},features:{default:()=>["timestamps","seek"]},featureNotices:{default:()=>({})},audioId:{},isTabbable:{type:Boolean,default:!0},isParentSeeking:{type:Boolean,default:!1}},emits:["seeked","toggle-playback","focus","blur"],setup(a,{emit:d}){const t=a,l=d,i=e=>f.value?e.clientX-f.value.getBoundingClientRect().x:e.clientX,r=e=>i(e)/o.value.width,n=e=>Math.floor((e-J)/(j+J)),f=I(null),{dimens:o}=Se(f),k=s(()=>t.features.includes("duration")),_=s(()=>t.features.includes("timestamps")),h=s(()=>t.features.includes("seek")),g=s(()=>!t.message),m=s(()=>h.value&&g.value),x=s(()=>!t.isTabbable&&t.isParentSeeking||re.value),w=s(()=>n(o.value.width)),F=e=>{const p=Me(Te(e));return Array.from({length:100},()=>p())},y=s(()=>{var e;return(e=t.peaks)!=null&&e.length?t.peaks:F(t.audioId)}),D=s(()=>{let e=y.value;const p=e.length,T=w.value;return p<T?e=Fe(e,T):p>T&&(e=De(e,T)),e.map(B=>Math.max(B,0)*o.value.height)}),A=s(()=>[0,0,o.value.width,o.value.height].join(" ")),W=e=>e*j+e*J,Q=e=>o.value.height-D.value[e],C=s(()=>{const e=K.value?S.value??0:Z.value;return o.value.width*e}),u=I(),R=s(()=>K.value?Y.value:t.currentTime),O=s(()=>{if(!u.value)return!1;const e=C.value,p=u.value.offsetWidth;return e<p+2}),E=s(()=>Number.isFinite(t.duration)&&t.duration<Ne),S=I(null),z=s(()=>{const e=S.value??Z.value;return o.value.width*e}),X=s(()=>n(z.value)),G=I(null),Y=s(()=>S.value?S.value*t.duration:t.duration),le=s(()=>{if(!G.value)return!1;const e=z.value,p=G.value.offsetWidth;return e<p+2}),{isSeeking:re,...$}=Pe({duration:se(t,"duration"),currentTime:se(t,"currentTime"),isSeekable:h,isReady:g,onSeek:e=>{te(),l("seeked",e)},onTogglePlayback:()=>l("toggle-playback")}),ne=s(()=>({...m.value?$.attributes.value:{}})),{currentFrac:Z}=$.meta,ee=e=>{S.value=r(e)},te=()=>{S.value=null},ie=e=>{l("seeked",r(e))};let N=null;const K=I(!1),ue=e=>{t.isTabbable||e.preventDefault(),K.value=!1,N=i(e),ee(e)},ce=e=>{if(N){const p=i(e);Math.abs(p-N)>He&&(K.value=!0)}ee(e)},ve=e=>{K.value=!1,N=null,ie(e)},fe=()=>{te()},de=e=>{e.stopPropagation(),e.preventDefault()},me=e=>{l("focus",e)},he=e=>{$.listeners.blur(),l("blur",e)},ge=s(()=>m.value?{mousedown:ue,mousemove:ce,mouseup:ve,mouseleave:fe,click:de,blur:he,focus:me,keydown:$.listeners.keydown}:{}),pe=s(()=>({"--usable-height":`${Math.floor(t.usableFrac*100)}%`,"--unusable-height":`${Math.floor((1-t.usableFrac)*100)}%`})),ke=s(()=>({"--progress-time-left":`${C.value}px`})),be=s(()=>({"--seek-time-left":`${z.value}px`}));return(e,p)=>(v(),c("div",_e(ne.value,{ref_key:"el",ref:f,class:"waveform bg-background-var group/waveform relative overflow-hidden text-default focus-visible:outline-none",style:pe.value,tabIndex:e.isTabbable&&m.value?0:-1,"aria-disabled":!m.value,"aria-label":e.$t("waveform.label")},xe(ge.value)),[m.value?(v(),c("svg",{key:0,class:"shadow-ring-1 absolute inset-0 z-20 hidden h-full w-full group-focus/waveform:block",xmlns:"http://www.w3.org/2000/svg",viewBox:A.value,preserveAspectRatio:"none"},[b(o).width&&b(o).height?(v(),c("rect",{key:0,class:"stroke-pink-8",x:"0.75",y:"0.75",width:b(o).width-1.5,height:b(o).height-1.5,rx:"2",fill:"none","stroke-width":"1.5"},null,8,We)):P("",!0),b(o).width&&b(o).height?(v(),c("rect",{key:1,class:"stroke-white",x:"2",y:"2",width:b(o).width-4,height:b(o).height-4,fill:"none","stroke-width":"1",rx:"0.75"},null,8,Ce)):P("",!0)],8,Ie)):P("",!0),(v(),c("svg",{class:"absolute inset-0 h-full w-full",xmlns:"http://www.w3.org/2000/svg",viewBox:A.value,preserveAspectRatio:"none"},[g.value?(v(),c("rect",{key:0,class:"progress-bar",x:"0",y:"0",width:C.value,height:"100%"},null,8,Ke)):P("",!0)],8,Ee)),(v(),c("svg",{class:L(["bars absolute bottom-0 w-full",{"with-space":k.value||_.value}]),xmlns:"http://www.w3.org/2000/svg",viewBox:A.value,preserveAspectRatio:"none"},[(v(!0),c(H,null,ae(D.value,(T,B)=>(v(),c("rect",{key:B,class:L(["origin-bottom transform transition-transform duration-500",[g.value?"scale-y-100":"scale-y-0",B<=X.value?"fill-wave-active":"fill-wave-inactive"]]),x:W(B),y:Q(B),width:j,height:T},null,10,Re))),128))],10,Le)),m.value&&x.value?(v(),c("div",{key:1,class:"absolute top-0 z-20 hidden h-full flex-col items-center justify-between bg-black group-focus/waveform:flex group-focus:flex",style:U({width:`${j}px`,left:`${C.value}px`})},[(v(),c(H,null,ae({top:["-translate-y-1/2"],bottom:["translate-y-1/2"]},(T,B)=>oe("div",{key:B,class:L(["h-2 w-2 transform rounded-full bg-black",T])},"   ",2)),64))],4)):P("",!0),g.value?(v(),c(H,{key:2},[_.value?(v(),c(H,{key:0},[oe("div",{ref_key:"progressTimestampEl",ref:u,class:L(["progress timestamp z-10 transform",[...O.value?["bg-background-var"]:["bg-complementary","-translate-x-full"]]]),style:U(ke.value)},V(b(q)(R.value,E.value)),7),S.value?(v(),c("div",{key:0,ref_key:"seekTimestampEl",ref:G,class:L(["seek timestamp transform",{"-translate-x-full":!le.value}]),style:U(be.value)},V(b(q)(Y.value,E.value)),7)):P("",!0)],64)):P("",!0),k.value?(v(),c("div",ze,V(b(q)(e.duration,E.value)),1)):P("",!0)],64)):(v(),c("div",$e,V(e.message),1))],16,Ae))}}),Je=Be(Ve,[["__scopeId","data-v-dbe8ca01"]]);export{Je as V,q as t,Pe as u};
