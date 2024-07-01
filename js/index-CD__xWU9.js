import{a as F,R as E,o as R,u as v,r as a,m,M as C,b as f,d as A,c as y,j as g,E as D}from"./index-DDS_a1fz.js";import{B as T}from"./index-BKwc41nQ.js";/*!
 * sc2-bank-generator v.1.1.6
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/trancespace-fortress-3/functions.ts
 * sc2-bank-generator/src/components/maps/trancespace-fortress-3/store.ts
 * sc2-bank-generator/src/components/maps/trancespace-fortress-3/index.tsx
 *
 * Сompiled on Mon, 01 Jul 2024 21:38:46 UTC
 */class b{constructor(){this._skipItemIndexes=new Set([3,4,6,7,10,11,14,15,16,17,23,26,30,31,34,35,36,37,46,47,48,49,50,57,58,59,64,65,66,67,68,69,70,71,72,73,74,75,76,81,82,83,84,90,91,92,93,94,116,117,118,119,121,122,123,130,131,132,133,138,139,140,142,149,150,151,152,153,155,156,157,158,160,161,162,169,177,178,179,180,185,186,197,217,218,219,226,227,228,236,237,243,244,245,248,249,250,257,258,259,260,270,271,272,273,274,278,279,289,292,293,296,297,301,302,303,304,307,308,309,313,314,322,323,325,326,338,339,340,341,344,345,346,349,350,355,356,357,358,362,363,364,368,369,375,376,377,378,386,387,388,389,395,396,397,398,399,401,402,411,412,416,417,420,422,423,432,435,436,437,438,441,446,447,449,453,454,461,462,463,469,470,471,478,479,480,489,490,495,496,498,499,500,505,506,515,516,517,520,522,525,526,543,544,545,546,547,549,550])}generateXML(e){return e.addKey("VERSION","FIXED",6,"tsslevels"),e.updateSignature(),e.getAsString()}parse(e,t){return e.parse(t),e.sections.size!=1||e.sections.get("tsslevels")==null?(console.error("Wrong bank file!"),null):[]}getKey(e,t){const n=e.getKey(t,"tsslevels");return n?parseInt(n.value):0}getIndexFor(e){return 0}insertItems(e,t){const n=[...t];for(let s=0;s<550;s++){if(this._skipItemIndexes.has(s))continue;const c=n.shift();e.addKey("tsssecretitem"+(s+1),"INT",c.value,"tsslevels"),e.addKey("sdasdi19028"+(s+1),"INT",c.value,"tsslevels")}}}const h=new b;class x{constructor(){this.init(),F(this)}setFields(e){this.params=e?[...e]:[]}updateAt(e,t,n){if(n){this.params[e].value=t;return}const s=[...this.params];s[e].value=t,this.params=s}reset(){this.init()}init(){}}const i=new x,N=R(d=>{const{accountStore:e,menuStore:t,mapStore:n}=v(),[s,c]=a.useState(d.bankName),[p,S]=a.useState(m.get(C.TRANCESPACE_FORTRESS_3).authorID),I=m.get(C.TRANCESPACE_FORTRESS_3).title,u=a.useMemo(()=>new T(s,p,t.playerID,"1"),[e.current,t.playerID,s,p]);a.useEffect(()=>{var l;const o=(l=n.list[e.current])==null?void 0:l[I];o?i.setFields(o):setTimeout(r.onResetClick)},[e.current]);const r={onBankNameChange:a.useCallback(o=>{c(o)},[]),onAuthorIdChange:a.useCallback(o=>{S(o)},[]),onFileDrop:a.useCallback((o,l)=>{const k=h.parse(u,l);k&&(f.flushSync(()=>i.setFields()),i.setFields(k))},[]),onDownloadClick:a.useCallback(()=>{A(h.generateXML(u),s+".SC2Bank",!0),t.autoSave},[u]),onCopyCodeClick:a.useCallback(()=>{y(h.generateXML(u),!0),t.autoSave},[u]),onResetClick:a.useCallback(()=>{c(d.bankName),S(m.get(C.TRANCESPACE_FORTRESS_3).authorID),f.flushSync(()=>i.setFields()),i.reset()},[]),onFieldChange:a.useCallback((o,l)=>{i.updateAt(l,parseInt(o),!0),t.autoSave},[])};return g.jsx(D,{bankName:s,authorID:p,onBankNameChange:r.onBankNameChange,onAuthorIdChange:r.onAuthorIdChange,onFileDrop:r.onFileDrop,onDownload:r.onDownloadClick,onCopy:r.onCopyCodeClick,onReset:r.onResetClick,children:g.jsx("div",{style:{color:"white",fontSize:"24px"},children:"Work in progress..."})})}),B=E.memo(N);export{B as default};
