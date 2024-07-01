import{a as L,R as M,o as K,u as F,r as i,m as v,M as R,b as x,d as O,c as B,j as p,C as S,S as G,I as b,f as P,E as Y}from"./index-DDS_a1fz.js";import{B as H}from"./index-BKwc41nQ.js";import{S as t,s as g}from"./sc-service-yVcIm5no.js";import"./starcode-PeA1TjQD.js";/*!
 * sc2-bank-generator v.1.1.6
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/runling-run-8/i-love-pie/store.ts
 * sc2-bank-generator/src/components/maps/runling-run-8/i-love-pie/functions.ts
 * sc2-bank-generator/src/components/maps/runling-run-8/i-love-pie/index.tsx
 *
 * Сompiled on Mon, 01 Jul 2024 21:38:46 UTC
 */class W{constructor(){this.init(),L(this)}setFields(e){this.info=e!=null&&e.info?[...e.info]:[],this.units=e!=null&&e.units?[...e.units]:[]}updateAt(e,n,r,c){if(e!="units"&&typeof r=="number"){if(c){this[e][n].update(r);return}const u=[...this[e]];u[n].update(r),this[e]=u;return}if(e=="units"&&typeof r=="object"){if(c){if(!r){this.units[n][0].update(0);return}this.units[n][r.param].update(r.value);return}const u=[...this.units];r?u[n][r.param].update(r.value):u[n][0].update(0),this[e]=u}}setUnit(e,n,r){if(e<0||e>7)throw new Error("RLR8 Store: setUnit: slot is out of range!");if(!n){this.updateAt("units",e,null,r);return}typeof n.type=="number"&&this.updateAt("units",e,{param:0,value:n.type},r),n.level&&(this.updateAt("units",e,{param:1,value:this._exp[n.level-1]},r),this.updateAt("units",e,{param:7,value:n.level},r),this.updateAt("units",e,{param:8,value:n.level*4},r))}fromLocalStorage(e){if(!e)return;const n=[];e.units.forEach((c,u)=>{const l=[];c.forEach((f,y)=>{l.push(new t(f._current,f._max,f._description))}),n.push(l)}),this.units=n;const r=[];e.info.forEach((c,u)=>{r.push(new t(c._current,c._max,c._description))}),this.info=r}updateChecksums(e,n){for(let r;r<8;r++)this.updateAt("slots",r,this.units[r][0]?1:0,n);this.updateAt("camera",0,this.sumOfStats,n),this.updateAt("camera",1,this.sumOfUnits+e,n),this.updateAt("set2",0,e,n)}reset(){this.init()}get sumOfStats(){let e=0;for(let n=0;n<16;n++)(n<10||n>12)&&(e+=this.info[n].current);return e}get sumOfUnits(){let e=0;return this.units.forEach(n=>{if(n[0].current>0)for(let r=1;r<9;r++)r!=7&&(e+=n[r].current)}),e}init(){this.camera=[new t(0,99e6,"Sum of all stats"),new t(0,98e6,"Sum of all units and account")],this.info=[new t(500,9e4,"Normal games"),new t(25,1e5,"Normal games won"),new t(55,11e4,"Hard games"),new t(5,12e4,"Hard games won"),new t(12e3,93e6,"Total saves"),new t(99999,94e6,"Total score"),new t(2e3,96e6,"Total deaths"),new t(200,15e4,"Boss1 kills"),new t(100,16e4,"Boss2 kills"),new t(25,17e4,"Boss3 kills"),new t(25,18e4,"Insane games"),new t(2,19e4,"Insane games won"),new t(1,2e5,"Not used"),new t(10,21e4,"Chaos mode games"),new t(1,22e4,"Chaos mode games won"),new t(25,23e4,"Prestige"),new t(72,1e3,"Distance"),new t(90,1001,"Rotation"),new t(90,1002,"Angle"),new t(1,1003,"Camera follow unit"),new t(0,1004,"Hide tips"),new t(1,1005,"Hud on"),new t(0,1006,"Mini map"),new t(0,1007,"Energy bar"),new t(0,1008,"Exp bar"),new t(0,1009,"Menu"),new t(1,1010,"WASD"),new t(0,10,"Increase distance"),new t(0,11,"Decrease distance"),new t(0,12,"Rotation right"),new t(0,13,"Rotation left"),new t(1,14,"Follow runling")],this.slots=[new t(1,425,"Slot 1"),new t(1,426,"Slot 2"),new t(1,427,"Slot 3"),new t(1,428,"Slot 4"),new t(1,429,"Slot 5"),new t(1,430,"Slot 6"),new t(1,431,"Slot 7"),new t(1,432,"Slot 8")],this.units=[];for(let e=0;e<8;e++)this.units.push([new t(e+1,3e5,"Unit Type"),new t(2e5,81e5,"Exp"),new t(0,32e4,"Regen"),new t(0,33e4,"Energy"),new t(0,34e4,"Speed"),new t(0,35e4,"Skill 1"),new t(0,36e4,"Skill 2"),new t(100,37e4,"Level"),new t(400,38e4,"Free Points")]);this.set2=[new t(0,97e6,"PlayerID numeric part")],this._exp=[0,3,10,22,40,65,98,140,192,255,330,418,520,637,770,920,1088,1275,1482,1710,1960,2233,2530,2852,3200,3575,3978,4410,4872,5365,5890,6448,7040,7667,8330,9030,9768,10545,11362,12220,13120,14063,15095,16173,17298,18471,19693,20965,22288,23663,25091,26573,28110,29703,31353,33061,34828,36655,38543,40493,42506,44583,46725,48933,51208,53551,55963,58445,60998,63623,66321,69093,72016,75016,78094,81251,84488,87806,91206,94689,98256,101908,105646,109471,113384,117386,121478,125661,129936,134304,138766,143323,147976,152726,157574,162521,167568,172716,177966,183319]}get isUnitsCorrect(){return this.units.forEach(e=>{const n=e[2].current+e[3].current+e[4].current+e[8].current+(e[5].current+e[6].current)*4;if(n<0||n>400)throw new Error("Points out of range (0-300)!");if(e[0].current<0||e[0].current>8)throw new Error("Undefined unit type! Use 0, 1, 2, 3, 4, 5, 6, 7, 8");if(e[7].current<1||e[7].current>100)throw new Error("Unit level out of range (1-100)!");if(e[7].current*4!=n)throw new Error("level or scores are incorrect!");if(e[2].current>200||e[3].current>200||e[4].current>200)throw new Error("Energy, regen, speed: 200 max");if(e[5].current>20||e[6].current>20)throw new Error("Skill: 20 max")}),!0}}const a=new W;class X{constructor(){this.STARCODE_KEY="Ks8N10dj6L3M"}generateXML(e){return a.updateChecksums(e.info.getPlayerNumber(),!0),a.units.forEach((n,r)=>{n[0].current>0&&e.addKey("0"+(r+1),"STRING",g.write(n,this.STARCODE_KEY),"unit")}),e.addKey("info","STRING",g.write(a.slots,this.STARCODE_KEY),"unit"),e.addKey("info","STRING",g.write(a.info,this.STARCODE_KEY),"account"),e.addKey("camera","STRING",g.write(a.camera,this.STARCODE_KEY),"account"),e.addKey("set2","STRING",g.write(a.set2,this.STARCODE_KEY),"account"),e.sort(),e.updateSignature(),e.getAsString()}parse(e,n){var u;if(e.parse(n),e.sections.size!=2||e.sections.get("unit")==null||e.sections.get("account")==null)return console.error("wrong bank file!"),null;const r=[];for(let l=0;l<8;l++)r.push([...a.units[l]]);for(let l=0;l<8;l++){const f=(u=e.getKey("0"+(l+1),"unit"))==null?void 0:u.value;f?g.read(f,r[l],this.STARCODE_KEY):r[l][0].update(0)}const c=[...a.info];return g.read(e.getKey("info","account").value,c,this.STARCODE_KEY),{info:c,units:r}}}const I=new X,z=K(C=>{const{accountStore:e,menuStore:n,mapStore:r,modalStore:c}=F(),[u,l]=i.useState(C.bankName),[f,y]=i.useState(v.get(R.RUNLING_RUN_8).authorID),E=v.get(R.RUNLING_RUN_8).title,d=i.useMemo(()=>new H(u,f,n.playerID,"1"),[e.current,n.playerID,u,f]),A=i.useMemo(()=>[{value:"0",label:"Empty"},{value:"1",label:"Ling"},{value:"2",label:"Bane"},{value:"3",label:"Hydra"},{value:"4",label:"Ultra"},{value:"5",label:"Roach"},{value:"6",label:"Impaler"},{value:"7",label:"Infested"},{value:"8",label:"Drone"}],[]);i.useEffect(()=>{var s,w;const o=(w=(s=r.list[e.current])==null?void 0:s[E])==null?void 0:w.ilovepie;o?a.fromLocalStorage(o):setTimeout(h.onResetClick)},[e.current]);const m=()=>{var s,w;const o=(w=(s=r.list[e.current])==null?void 0:s[E])==null?void 0:w.prestige;r.setMapData(e.current,E,{ilovepie:{units:a.units,info:a.info},prestige:o})},h={onBankNameChange:i.useCallback(o=>{l(o)},[]),onAuthorIdChange:i.useCallback(o=>{y(o)},[]),onFileDrop:i.useCallback((o,s)=>{const w=I.parse(d,s);w&&(x.flushSync(()=>a.setFields()),a.setFields(w))},[]),onDownloadClick:i.useCallback(()=>{if(n.playerID.split("-").length!=4){c.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}O(I.generateXML(d),u+".SC2Bank",!0),n.autoSave||m()},[d]),onCopyCodeClick:i.useCallback(()=>{if(n.playerID.split("-").length!=4){c.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}B(I.generateXML(d),!0),n.autoSave||m()},[d]),onResetClick:i.useCallback(()=>{l(C.bankName),y(v.get(R.RUNLING_RUN_8).authorID),x.flushSync(()=>a.setFields()),a.reset()},[]),onUnitTypeChange:i.useCallback((o,s)=>{a.setUnit(s,{type:parseInt(o)},!1),n.autoSave&&m()},[]),onUnitLevelChange:i.useCallback((o,s)=>{a.setUnit(s,{level:parseInt(o)},!0),n.autoSave&&m()},[]),onStatChange:i.useCallback((o,s)=>{a.updateAt("info",s,parseInt(o),!0),n.autoSave&&m()},[]),onSettingChange:i.useCallback((o,s)=>{a.updateAt("info",s,s<19?parseInt(o):o?1:0,!0),n.autoSave&&m()},[])},[k,N,T,D]=i.useMemo(()=>[{flexDirection:"row",padding:"10px"},{width:"90px"},{width:"30px"},{width:"45px"}],[]),U=i.useMemo(()=>p.jsx(S,{style:{flexFlow:"column",padding:"0",justifyContent:"space-around",border:"1px solid #ffffff40"},children:a.units.map((o,s)=>p.jsxs(S,{style:k,children:[p.jsx(G,{label:"Slot "+(s+1)+":",index:s,style:N,onChange:h.onUnitTypeChange,selected:o[0].current.toString(),children:A}),p.jsx(b,{label:"Level:",index:s,type:"number",min:"1",style:T,onChange:h.onUnitLevelChange,max:"100",placeholder:"Level of unit (1-100)",value:o[7].current.toString()})]},s))}),[a.units]),_=i.useMemo(()=>p.jsxs(p.Fragment,{children:[p.jsx(S,{style:{flexDirection:"column",padding:"10px",border:"1px solid #ffffff40"},alignInputs:!0,children:a.info.map((o,s)=>s!=12&&s<16?p.jsx(b,{label:o.description+":",index:s,type:"number",min:"0",style:D,onChange:h.onStatChange,max:o.max.toString(),value:o.current.toString()},s):null)}),p.jsx(S,{style:{flexDirection:"column",padding:"10px",border:"1px solid #ffffff40"},alignInputs:!0,children:a.info.map((o,s)=>s<16?null:s<19?p.jsx(b,{label:o.description+":",index:s,type:"number",min:"1",style:D,onChange:h.onSettingChange,max:o.max.toString(),value:o.current.toString()},s):p.jsx(P,{label:o.description+":",index:s,onChange:h.onSettingChange,value:o.current==1},s))})]}),[a.info]),j=i.useMemo(()=>p.jsxs(S,{style:{flexDirection:"row",padding:"0"},children:[U,_]}),[a.units,a.info]);return p.jsx(Y,{bankName:u,authorID:f,onBankNameChange:h.onBankNameChange,onAuthorIdChange:h.onAuthorIdChange,onFileDrop:h.onFileDrop,onDownload:h.onDownloadClick,onCopy:h.onCopyCodeClick,onReset:h.onResetClick,children:j})}),$=M.memo(z);export{$ as default};
