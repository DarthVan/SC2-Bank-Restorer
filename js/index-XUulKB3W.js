import{a as T,R as w,o as y,u as A,r as n,m as p,M as g,b,d as F,c as O,j as u,C as q,e as M,I as N,E as R}from"./index-qJ4zurkb.js";import{B as j}from"./index-_32m_0Lo.js";import{S as l,s as x}from"./sc-service-g_Hghx3V.js";import"./starcode-g-jHP0od.js";/*!
 * sc2-bank-generator v.1.1.0
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/zombie-city/store.ts
 * sc2-bank-generator/src/components/maps/zombie-city/functions.ts
 * sc2-bank-generator/src/components/maps/zombie-city/index.tsx
 *
 * Сompiled on Sun, 21 Jan 2024 17:56:32 UTC
 */class v{constructor(){this.init(),T(this)}setFields(e){this.queue=e?[...e]:[]}updateAt(e,t,r){if(r){this.queue[e].update(t);return}const o=[...this.queue];o[e].update(t),this.queue=o}fromLocalStorage(e){if(!e)return;const t=[];e.forEach((r,o)=>{t.push(new l(r._current,r._max,r._description))}),this.queue=t}reset(){this.init()}init(){this.queue=[new l(666,1e3,"Waves"),new l(66666666,99e6,"Kills"),new l(1,1e5,"Deaths"),new l(666,5e4,"Games"),new l(39960,1e6,"Minutes")]}}const a=new v;class B{constructor(){this.STARCODE_KEY="OnFbXRyxYzPuv7of(v5v7[zdvUiDzXO]gVb9FVI9b>M>l}Gt6L",this.SECTION="23EGWEG234AG4",this.KEY="AWEO322AOIGWE3wqogej23"}generateXML(e){return e.addKey(this.KEY,"STRING",x.write(a.queue,this.STARCODE_KEY),this.SECTION),e.updateSignature(),e.getAsString()}parse(e,t){if(e.parse(t),e.sections.size!=1||e.sections.get(this.SECTION)==null)return console.error("Wrong bank file!"),null;const r=e.sections.get(this.SECTION).get(this.KEY).value,o=[...a.queue];return x.read(r,o,this.STARCODE_KEY),o}}const S=new B,Y=y(d=>{const{accountStore:e,menuStore:t,mapStore:r}=A(),[o,E]=n.useState(d.bankName),[C,f]=n.useState(p.get(g.ZOMBIE_CITY).authorID),I=p.get(g.ZOMBIE_CITY).title,h=n.useMemo(()=>new j(o,C,t.playerID,"1"),[e.current,t.playerID,o,C]),m=()=>{r.setMapData(e.current,I,a.queue)};n.useEffect(()=>{var i;const s=(i=r.list[e.current])==null?void 0:i[I];s?a.fromLocalStorage(s):setTimeout(c.onResetClick)},[e.current]);const c={onBankNameChange:n.useCallback(s=>{E(s)},[]),onAuthorIdChange:n.useCallback(s=>{f(s)},[]),onFileDrop:n.useCallback((s,i)=>{const k=S.parse(h,i);k&&(b.flushSync(()=>a.setFields()),a.setFields(k))},[]),onDownloadClick:n.useCallback(()=>{F(S.generateXML(h),o+".SC2Bank",!0),t.autoSave||m()},[h]),onCopyCodeClick:n.useCallback(()=>{O(S.generateXML(h),!0),t.autoSave||m()},[h]),onResetClick:n.useCallback(()=>{E(d.bankName),f(p.get(g.ZOMBIE_CITY).authorID),b.flushSync(()=>a.setFields()),a.reset()},[]),onFieldChange:n.useCallback((s,i)=>{a.updateAt(i,parseInt(s),!0),t.autoSave&&m()},[])},D=n.useMemo(()=>u.jsxs(q,{style:{flexDirection:"column"},alignInputs:!0,children:[u.jsxs(M,{children:["Note: this map has no validation, so you",u.jsx("br",{})," can skip ",u.jsx("b",{children:"Player id"})," or ",u.jsx("b",{children:"Author id"})," here."]}),u.jsx(u.Fragment,{children:a.queue.map((s,i)=>u.jsx(N,{index:i,type:"number",style:{width:"80px"},label:s.description+":",onChange:c.onFieldChange,min:"0",max:s.max.toString(),value:s.current.toString()},i))})]}),[a.queue]);return u.jsx(R,{bankName:o,authorID:C,onBankNameChange:c.onBankNameChange,onAuthorIdChange:c.onAuthorIdChange,onFileDrop:c.onFileDrop,onDownload:c.onDownloadClick,onCopy:c.onCopyCodeClick,onReset:c.onResetClick,children:D})}),W=w.memo(Y);export{W as default};
