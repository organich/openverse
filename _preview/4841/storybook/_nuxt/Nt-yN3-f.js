import{n as p}from"./BDR3Ouqq.js";import{u as f,a as v}from"./BADMhBhM.js";import{u as g}from"./ChwyIgrk.js";import{u as d}from"./lKZUiFAC.js";import{N as t,T as C}from"./D36rSpla.js";const P=c=>{const s=f(),e=v(),{matches:o}=d(),u=t(()=>e.searchTerm);C(u,a=>{r.value=a});const r=t({get:()=>e.localSearchTerm,set:a=>{e.localSearchTerm=a}}),n=t(()=>e.searchTerm!==r.value),h=()=>{if(r.value===""||!n.value&&o.value)return;c("SUBMIT_SEARCH",{searchType:e.searchType,query:r.value});const a=e.updateSearchPath({searchTerm:r.value});return p(a)},m=t(()=>s.fetchState.isFetching),i=t(()=>s.resultCount),{getI18nCount:S,getLoading:l}=g(),T=t(()=>e.searchTerm===""?"":m.value?l():S(i.value));return{updateSearchState:h,searchTerm:r,searchStatus:T}};export{P as u};
