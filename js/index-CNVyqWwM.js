import{a as T,R as K,o as R,u as M,r as n,m as v,M as y,b as f,d as W,c as E,j as r,C as h,e as A,L as k,S as F,I as D,E as j}from"./index-CkUgLqtY.js";import{B as H}from"./index-BRaYXKte.js";/*!
 * sc2-bank-generator v.1.1.7
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/end-of-dreams/store.ts
 * sc2-bank-generator/src/components/maps/end-of-dreams/functions.ts
 * sc2-bank-generator/src/components/maps/end-of-dreams/index.tsx
 *
 * Сompiled on Mon, 29 Jul 2024 21:39:17 UTC
 */class w{constructor(){this.init(),T(this)}setFields(e){this.params=e?[...e]:[]}updateAt(e,s,u){if(u){this.params[e].value=s;return}const i=[...this.params];i[e].value=s,this.params=i}reset(){this.init()}init(){this.params=[{type:"string",value:"Hero",description:"Rank"},{type:"number",value:9999999,description:"Total Kills",min:0,max:9999999,tip:"0 - 9999999"},{type:"number",value:9999999,description:"Score",min:0,max:9999999,tip:"0 - 9999999"},{type:"number",value:9999999,description:"Easy Wins",min:0,max:9999999,tip:"0 - 9999999"},{type:"number",value:9999999,description:"Medium Wins",min:0,max:9999999,tip:"0 - 9999999"},{type:"number",value:9999999,description:"Hard Wins",min:0,max:9999999,tip:"0 - 9999999"},{type:"number",value:9999999,description:"Hell Wins",min:0,max:9999999,tip:"0 - 9999999"}]}}const t=new w;class B{generateXML(e){e.addKey("Rank","STRING",t.params[0].value,"Ranks"),e.addKey("TotalKills","INT",t.params[1].value,"Stats"),e.addKey("Score","INT",t.params[2].value,"Stats"),e.addKey("EasyWins","INT",t.params[3].value,"Stats"),e.addKey("MediumWins","INT",t.params[4].value,"Stats"),e.addKey("HardWins","INT",t.params[5].value,"Stats"),e.addKey("HellWins","INT",t.params[6].value,"Stats");const s=((t.params[3].value^1)+(t.params[4].value^2)+(t.params[5].value^1)+(t.params[6].value^1))%99;return e.addKey("Sum","INT",s,"Check"),e.updateSignature(),e.getAsString()}parse(e,s){return e.parse(s),e.sections.size!=3||e.sections.get("Stats")==null||e.sections.get("Ranks")==null?(console.error("Wrong bank file!"),null):[{type:"string",value:e.getKey("Rank","Ranks").value,description:"Rank"},{type:"number",value:this.getKey(e,"TotalKills"),description:"Total Kills",min:0,max:9999999,tip:"0 - 9999999"},{type:"number",value:this.getKey(e,"Score"),description:"Score",min:0,max:9999999,tip:"0 - 9999999"},{type:"number",value:this.getKey(e,"EasyWins"),description:"Easy Wins",min:0,max:9999999,tip:"0 - 9999999"},{type:"number",value:this.getKey(e,"MediumWins"),description:"Medium Wins",min:0,max:9999999,tip:"0 - 9999999"},{type:"number",value:this.getKey(e,"HardWins"),description:"Hard Wins",min:0,max:9999999,tip:"0 - 9999999"},{type:"number",value:this.getKey(e,"HellWins"),description:"Hell Wins",min:0,max:9999999,tip:"0 - 9999999"}]}getKey(e,s,u="Stats"){const i=e.getKey(s,u);return i?parseInt(i.value):0}}const g=new B,L=R(c=>{const{accountStore:e,menuStore:s,mapStore:u}=M(),[i,S]=n.useState(c.bankName),[d,b]=n.useState(v.get(y.END_OF_DREAMS).authorID),C=v.get(y.END_OF_DREAMS).title,p=n.useMemo(()=>new H(i,d,s.playerID,"1"),[e.current,s.playerID,i,d]),m=()=>{u.setMapData(e.current,C,t.params)},I=n.useMemo(()=>[{value:"Beginner",label:"Beginner"},{value:"Amateur",label:"Amateur"},{value:"Newbie",label:"Newbie"},{value:"Novice",label:"Novice"},{value:"Soldier",label:"Soldier"},{value:"Slayer",label:"Slayer"},{value:"Hunter",label:"Hunter"},{value:"Assasin",label:"Assasin"},{value:"Commander",label:"Commander"},{value:"Mutant",label:"Mutant"},{value:"Specialop",label:"Specialop"},{value:"Guardian",label:"Guardian"},{value:"Colonel",label:"Colonel"},{value:"Executor",label:"Executor"},{value:"SwarmHost",label:"SwarmHost"},{value:"Templar",label:"Templar"},{value:"Predator",label:"Predator"},{value:"General",label:"General"},{value:"Preserver",label:"Preserver"},{value:"Master",label:"Master"},{value:"Overmind",label:"Overmind"},{value:"WarLord",label:"WarLord"},{value:"Legendary",label:"Legendary"},{value:"Titan",label:"Titan"},{value:"Hero",label:"Hero"}],[]);n.useEffect(()=>{var l;const a=(l=u.list[e.current])==null?void 0:l[C];a?t.setFields(a):setTimeout(o.onResetClick)},[e.current]);const o={onBankNameChange:n.useCallback(a=>{S(a)},[]),onAuthorIdChange:n.useCallback(a=>{b(a)},[]),onFileDrop:n.useCallback((a,l)=>{const x=g.parse(p,l);x&&(f.flushSync(()=>t.setFields()),t.setFields(x))},[]),onDownloadClick:n.useCallback(()=>{W(g.generateXML(p),i+".SC2Bank",!0),s.autoSave||m()},[p]),onCopyCodeClick:n.useCallback(()=>{E(g.generateXML(p),!0),s.autoSave||m()},[p]),onResetClick:n.useCallback(()=>{S(c.bankName),b(v.get(y.END_OF_DREAMS).authorID),f.flushSync(()=>t.setFields()),t.reset()},[]),onFieldChange:n.useCallback((a,l)=>{t.updateAt(l,parseInt(a),!0),s.autoSave&&m()},[]),onRankChange:n.useCallback((a,l)=>{t.updateAt(l,a,!1),s.autoSave&&m()},[])},N=n.useMemo(()=>r.jsxs(h,{style:{flexDirection:"column"},children:[r.jsxs(A,{children:["Note: this map has no validation, so you",r.jsx("br",{})," can skip ",r.jsx("b",{children:"Player id"})," or ",r.jsx("b",{children:"Author id"})," here."]}),r.jsx(k,{children:"Stats:"}),r.jsx(h,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:t.params.map((a,l)=>{if(l<3)return l==0?r.jsx(F,{label:"Rank:",index:l,style:{width:"100px"},onChange:o.onRankChange,selected:a.value.toString(),children:I},l):r.jsx(D,{index:l,type:"number",style:{width:"88px"},label:a.description+":",onChange:o.onFieldChange,min:a.min.toString(),max:a.max.toString(),value:a.value.toString(),tip:a.tip?a.tip:null},l)})}),r.jsx(k,{children:"Wins:"}),r.jsx(h,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:t.params.map((a,l)=>{if(l>2)return r.jsx(D,{index:l,type:"number",style:{width:"88px"},label:a.description+":",onChange:o.onFieldChange,min:a.min.toString(),max:a.max.toString(),value:a.value.toString(),tip:a.tip?a.tip:null},l)})})]}),[t.params]);return r.jsx(j,{bankName:i,authorID:d,onBankNameChange:o.onBankNameChange,onAuthorIdChange:o.onAuthorIdChange,onFileDrop:o.onFileDrop,onDownload:o.onDownloadClick,onCopy:o.onCopyCodeClick,onReset:o.onResetClick,children:N})}),_=K.memo(L);export{_ as default};