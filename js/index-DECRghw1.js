import{a as V,g as S,R as b,o as Z,u as q,r as u,m as L,M,b as W,d as z,c as Q,j as a,C,e as Y,L as U,I as j,E as J}from"./index-DbpueSGF.js";import{d as t,e as X,f as R,g as v,h as s,B as $}from"./index-BNupAWEw.js";/*!
 * sc2-bank-generator v.1.1.8
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/mineralz-evolution/store.ts
 * sc2-bank-generator/src/components/maps/mineralz-evolution/functions.ts
 * sc2-bank-generator/src/components/maps/mineralz-evolution/index.tsx
 *
 * Сompiled on Mon, 09 Sep 2024 08:44:29 UTC
 */class k{constructor(){this.init(),V(this)}setFields(e){this.params=e?[...e]:[]}updateAt(e,i,c){if(c){this.params[e].value=i;return}const m=[...this.params];m[e].value=i,this.params=m}reset(){this.init()}init(){const e=S(1,40);let i=e*20;const c=Math.floor(S(i*.3,i*.5));i-=c;const m=Math.floor(S(i*.2,i*.4));i-=m;const d=Math.floor(S(i*.1,i*.3));i-=d;const p=Math.floor(S(i*.2,i*.5));i-=p;const y=i,f=e>0?e>5?35:S(0,15):0;this.params=[{type:"number",value:e,description:"Prestige",min:0,max:100,tip:"0 - 100"},{type:"number",value:S(25,175),description:"Level",min:1,max:200,tip:"1 - 200"},{type:"number",value:S(25,125),description:"Wins",min:0,max:419,tip:"0 - 419"},{type:"number",value:35,description:"Nights",min:0,max:35,tip:"0 - 35"},{type:"number",value:35,description:"Elite",min:0,max:35,tip:"0 - 35"},{type:"number",value:35,description:"Nightmare",min:0,max:35,tip:"0 - 35"},{type:"number",value:35,description:"Hell",min:0,max:35,tip:"0 - 35"},{type:"number",value:f,description:"Impossible",min:0,max:35,tip:"0 - 35"},{type:"number",value:m,description:"Wall",min:0,max:999999},{type:"number",value:d,description:"Cannons",min:0,max:999999},{type:"number",value:p,description:"Healer",min:0,max:999999},{type:"number",value:y,description:"Generator",min:0,max:999999},{type:"number",value:c,description:"Economy",min:0,max:999999}]}}const n=new k;class ee{generateXML(e){const i=58.70751953125,c=12,m=22,d=2,p=26,y=18,f=40,K=662,h=1,g=parseInt(e.info.playerID.substring(8)),l=n.params[0].value;if(l>0){e.addKey("PHR","INT",l,"Sec");let I=0;if(l>42){for(let x=0;x<42;x++)I=(I+39)*1.2;e.addKey("PHR2","INT",l-42,"Sec")}else for(let x=0;x<l;x++)I=(I+39)*1.2;e.addKey("PR","FIXED",I,"Sec")}else e.removeKey("PR","Sec"),e.removeKey("PHR","Sec");const E=n.params[1].value;e.addKey("NIVO","FIXED",E,"Sec"),e.addKey("NIVEXP","FIXED",E*1224,"Sec"),e.addKey("EXPP","FIXED",S(1,25)*E,"Sec");const r=n.params[2].value;e.addKey("WINS","FIXED",r,"Sec");const o=n.params[3].value;o>0?(e.addKey("NIGHTMNHD","FIXED",o,"Sec"),e.addKey("KILLED","FIXED",o*4788,"Sec"),o>=35?e.addKey("ZUHIB","FIXED",121186,"Sec"):e.removeKey("ZUHIB","Sec")):(e.removeKey("NIGHTMNHD","Sec"),e.removeKey("KILLED","Sec"),e.removeKey("ZUHIB","Sec"));const N=n.params[4].value;N>0?(e.addKey("NIGHTELITE","FIXED",N,"Sec"),N>=35&&e.addKey("HEAL","FIXED",21634,"Sec")):(e.removeKey("NIGHTELITE","Sec"),e.removeKey("HEAL","Sec"));const H=n.params[5].value;H>0?(e.addKey("NIGHTNMAR","FIXED",H,"Sec"),e.addKey("XPNB","FIXED",H*1655,"Sec"),H>=35&&e.addKey("XPNQ","FIXED",59120,"Sec")):(e.removeKey("NIGHTNMAR","Sec"),e.removeKey("XPNB","Sec"),e.removeKey("XPNQ","Sec"));const T=n.params[6].value;T>0?(e.addKey("HL","FIXED",T,"Sec"),e.addKey("HAL","FIXED",T*1631,"Sec"),T>=35&&e.addKey("HLO","FIXED",25265,"Sec")):(e.removeKey("HL","Sec"),e.removeKey("HAL","Sec"),e.removeKey("HLO","Sec"));const D=n.params[7].value;if(D>0){e.addKey("ims","INT",D,"Sec");const I=Math.abs(t(v(D,10),Math.abs(t(X(R(v(t(v(t(i,s(5)),t(86,s(8)),t(c,s(3)),t(m,s(2)),t(d,s(7)),t(p,s(3)),t(y,s(6)),t(f,s(7)),t(K,s(5)),t(h,s(3)),t(g,65537)),s(3)),1e4)),1e3),10))));if(e.addKey("im","FIXED",v(I+D,10),"Sec"),D>=35){const x=X(R(v(t(v(t(i,s(3)),t(86,s(2)),t(c,s(7)),t(m,s(8)),t(d,s(17)),t(p,s(3)),t(y,s(2)),t(f,s(5)),t(K,s(11)),t(h,s(5)),t(g,65537)),s(10)),1e4)),1e3);e.addKey("is","FIXED",v(X(I,x),3.4),"Sec");const _=X(R(v(t(v(t(i,s(2)),t(86,s(3)),t(c,s(6)),t(m,s(5)),t(d,s(7)),t(p,s(3)),t(y,s(2)),t(f,s(5)),t(K,s(11)),t(h,s(5)),t(g,65537)),s(10)),1e4)),1e3);e.addKey("imval","FIXED",_,"Sec")}else e.removeKey("is","Sec"),e.removeKey("imval","Sec")}else e.removeKey("ims","Sec"),e.removeKey("im","Sec"),e.removeKey("is","Sec"),e.removeKey("imval","Sec");const w=n.params[8].value;w>0?e.addKey("a","INT",w*4,"Sec"):e.removeKey("a","Sec");const P=n.params[9].value;P>0?e.addKey("e","INT",P*7,"Sec"):e.removeKey("e","Sec");const O=n.params[10].value;O>0?e.addKey("i","INT",O*9,"Sec"):e.removeKey("i","Sec");const B=n.params[11].value;B>0?e.addKey("f","INT",B*5,"Sec"):e.removeKey("f","Sec");const G=n.params[12].value;return G>0?e.addKey("o","INT",G*13,"Sec"):e.removeKey("o","Sec"),e.addKey("EASY","FIXED",35,"Sec"),e.addKey("VERSION","FIXED",6,"Sec"),e.updateSignature(),e.getAsString()}parse(e,i){return e.parse(i),e.sections.size!=1||e.sections.get("Sec")==null?(console.error("Wrong bank file!"),null):[{type:"number",value:this.getKey(e,"PHR"),description:"Prestige",min:0,max:40,tip:"0 - 40"},{type:"number",value:this.getKey(e,"NIVO"),description:"Level",min:1,max:200,tip:"1 - 200"},{type:"number",value:this.getKey(e,"WINS"),description:"Wins",min:0,max:999999},{type:"number",value:this.getKey(e,"NIGHTMNHD"),description:"Nights",min:0,max:35,tip:"0 - 35"},{type:"number",value:this.getKey(e,"NIGHTELITE"),description:"Elite",min:0,max:35,tip:"0 - 35"},{type:"number",value:this.getKey(e,"NIGHTNMAR"),description:"Nightmare",min:0,max:35,tip:"0 - 35"},{type:"number",value:this.getKey(e,"HL"),description:"Hell",min:0,max:35,tip:"0 - 35"},{type:"number",value:this.getKey(e,"ims"),description:"Impossible",min:0,max:35,tip:"0 - 35"},{type:"number",value:this.getKey(e,"a")/4,description:"Wall",min:0,max:999999},{type:"number",value:this.getKey(e,"e")/7,description:"Cannons",min:0,max:999999},{type:"number",value:this.getKey(e,"i")/9,description:"Healer",min:0,max:999999},{type:"number",value:this.getKey(e,"f")/5,description:"Generator",min:0,max:999999},{type:"number",value:this.getKey(e,"o")/13,description:"Economy",min:0,max:999999}]}getKey(e,i){const c=e.getKey(i,"Sec");return c?parseInt(c.value):0}}const A=new ee,te=Z(F=>{const{accountStore:e,menuStore:i,mapStore:c,modalStore:m}=q(),[d,p]=u.useState(F.bankName),[y,f]=u.useState(L.get(M.MINERALZ_EVOLUTION).authorID),K=L.get(M.MINERALZ_EVOLUTION).title,h=u.useMemo(()=>new $(d,y,i.playerID,"1"),[e.current,i.playerID,d,y]),g=()=>{c.setMapData(e.current,K,n.params)};u.useEffect(()=>{var o;const r=(o=c.list[e.current])==null?void 0:o[K];r?n.setFields(r):setTimeout(l.onResetClick)},[e.current]);const l={onBankNameChange:u.useCallback(r=>{p(r)},[]),onAuthorIdChange:u.useCallback(r=>{f(r)},[]),onFileDrop:u.useCallback((r,o)=>{const N=A.parse(h,o);N&&(W.flushSync(()=>n.setFields()),n.setFields(N))},[]),onDownloadClick:u.useCallback(()=>{if(i.playerID.split("-").length!=4){m.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}z(A.generateXML(h),d+".SC2Bank"),i.autoSave||g()},[h]),onCopyCodeClick:u.useCallback(()=>{if(i.playerID.split("-").length!=4){m.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}Q(A.generateXML(h)),i.autoSave||g()},[h]),onResetClick:u.useCallback(()=>{p(F.bankName),f(L.get(M.MINERALZ_EVOLUTION).authorID),W.flushSync(()=>n.setFields()),n.reset()},[]),onFieldChange:u.useCallback((r,o)=>{n.updateAt(o,parseInt(r),!0),i.autoSave&&g()},[])},E=u.useMemo(()=>a.jsxs(C,{style:{flexDirection:"column"},children:[a.jsxs(Y,{style:{width:"500px"},children:["Note: the community of this map closely monitors the statistics of the players, their skills and match history, so ",a.jsx("b",{children:"use the hack wisely!"}),a.jsx("br",{}),a.jsx("br",{}),"The ",a.jsx("b",{children:"Reset"})," button generates random real stats, but avoid using it with more than ",a.jsx("b",{children:"5 Prestige"})," / ",a.jsx("b",{children:"5 Impossible"}),".",a.jsx("br",{}),"Or add ",a.jsx("b",{children:"+20 levels"})," / ",a.jsx("b",{children:"+5 wins"})," / ",a.jsx("b",{children:"+2 role wins"})," after every game to looks legit.",a.jsx("br",{})]}),a.jsx(U,{children:"Main stats:"}),a.jsx(C,{style:{flexDirection:"row",border:"1px solid #ffffff40",padding:"10px",justifyContent:"space-around"},alignInputs:!0,children:n.params.map((r,o)=>o<3?a.jsx(j,{index:o,type:"number",style:{width:"50px"},label:r.description+":",onChange:l.onFieldChange,min:r.min.toString(),max:r.max.toString(),value:r.value.toString(),tip:r.tip?r.tip:null},o):null)}),a.jsx(U,{children:"Survived nights and roles:"}),a.jsxs(C,{style:{flexDirection:"row"},children:[a.jsx(C,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:n.params.map((r,o)=>o>=3&&o<8?a.jsx(j,{index:o,type:"number",style:{width:"30px"},label:r.description+":",onChange:l.onFieldChange,min:r.min.toString(),max:r.max.toString(),value:r.value.toString(),tip:r.tip?r.tip:null},o):null)}),a.jsx(C,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:n.params.map((r,o)=>o>=8?a.jsx(j,{index:o,type:"number",style:{width:"50px"},label:r.description+":",onChange:l.onFieldChange,min:r.min.toString(),max:r.max.toString(),value:r.value.toString(),tip:r.tip?r.tip:null},o):null)})]})]}),[n.params]);return a.jsx(J,{bankName:d,authorID:y,onBankNameChange:l.onBankNameChange,onAuthorIdChange:l.onAuthorIdChange,onFileDrop:l.onFileDrop,onDownload:l.onDownloadClick,onCopy:l.onCopyCodeClick,onReset:l.onResetClick,children:E})}),re=b.memo(te);export{re as default};
