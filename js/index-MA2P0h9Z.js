import{a as b,R as I,o as y,u as A,r as n,m,M as v,d as f,c as U,j as l,C as N,e as w,f as R,E as H}from"./index-_MVS0ra8.js";import{B as T}from"./index-zMefnyZU.js";/*!
 * sc2-bank-generator v.1.1.4
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/runling-run-8/prestige/store.ts
 * sc2-bank-generator/src/components/maps/runling-run-8/prestige/functions.ts
 * sc2-bank-generator/src/components/maps/runling-run-8/prestige/index.tsx
 *
 * Сompiled on Thu, 15 Feb 2024 22:54:54 UTC
 */class j{constructor(){this.init(),b(this)}setFields(e){this.active=e!=null&&e.active?e.active:!1,this.hide=e!=null&&e.hide?e.hide:!1}updateAt(e,i){this[e]=i}reset(){this.init()}init(){this.active=!1,this.hide=!1}}const t=new j;class F{generateXML(e){return e.addKey("Active","STRING",t.active?"1":"0","HUD"),e.addKey("Hide","STRING",t.hide?"1":"0","HUD"),e.getAsString()}parse(e,i){if(e.parse(i),e.sections.size!=1||e.sections.get("HUD")==null)throw new Error("Wrong bank file!");const r=e.getKey("Active","HUD").value=="1",c=e.getKey("Hide","HUD").value=="1";return{active:r,hide:c}}}const k=new F,M=y(d=>{const{accountStore:e,mapStore:i,menuStore:r}=A(),[c,D]=n.useState(d.bankName),[C,x]=n.useState(m.get(v.RUNLING_RUN_8).authorID),g=m.get(v.RUNLING_RUN_8).title,u=n.useMemo(()=>new T(c,C,r.playerID,"1"),[e.current,r.playerID,c,C]);n.useEffect(()=>{var s,h;const a=(h=(s=i.list[e.current])==null?void 0:s[g])==null?void 0:h.prestige;a?t.setFields(a):setTimeout(o.onResetClick)},[e.current]);const p=()=>{var s,h;const a=(h=(s=i.list[e.current])==null?void 0:s[g])==null?void 0:h.ilovepie;i.setMapData(e.current,g,{ilovepie:a,prestige:{active:t.active,hide:t.hide}})},o={onBankNameChange:n.useCallback(a=>{D(a)},[]),onAuthorIdChange:n.useCallback(a=>{x(a)},[]),onFileDrop:n.useCallback((a,s)=>{t.setFields(k.parse(u,s))},[]),onDownloadClick:n.useCallback(()=>{f(k.generateXML(u),c+".SC2Bank",!0),r.autoSave||p()},[u]),onCopyCodeClick:n.useCallback(()=>{U(k.generateXML(u),!0),r.autoSave||p()},[u]),onResetClick:n.useCallback(()=>{D(d.bankName),x(m.get(v.RUNLING_RUN_8).authorID),t.reset()},[]),onSettingChange:n.useCallback((a,s)=>{s==0?t.updateAt("active",a):t.updateAt("hide",a),r.autoSave&&p()},[])},S=n.useMemo(()=>l.jsxs(N,{style:{flexDirection:"column"},children:[l.jsx(w,{children:"This bank file is for HUD only"}),l.jsxs(N,{style:{flexDirection:"row",padding:"10px"},children:[l.jsx(R,{label:"Active:",index:0,onChange:o.onSettingChange,value:t.active}),l.jsx(R,{label:"Hide:",index:1,onChange:o.onSettingChange,value:t.hide})]})]}),[t.active,t.hide]);return l.jsx(H,{bankName:c,authorID:C,onBankNameChange:o.onBankNameChange,onAuthorIdChange:o.onAuthorIdChange,onFileDrop:o.onFileDrop,onDownload:o.onDownloadClick,onCopy:o.onCopyCodeClick,onReset:o.onResetClick,children:S})}),E=I.memo(M);export{E as default};
