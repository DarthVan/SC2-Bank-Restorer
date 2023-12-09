import{a as N,R as U,o as _,u as j,r as i,m as y,M as E,b as D,d as M,c as L,j as p,C as d,S as F,I as b,g as K,E as O}from"./index-lE5ByJvB.js";import{B}from"./index-tTzuzc_F.js";import{S as t,s as m}from"./sc-service-aCTwvgUj.js";import"./starcode-0Uby2Ber.js";/*!
 * sc2-bank-generator v.1.1.0
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/runling-run-4/store.ts
 * sc2-bank-generator/src/components/maps/runling-run-4/functions.ts
 * sc2-bank-generator/src/components/maps/runling-run-4/index.tsx
 *
 * Сompiled on Sat, 09 Dec 2023 21:18:25 UTC
 */class G{constructor(){this.init(),N(this)}setFields(e){this.info=e!=null&&e.info?[...e.info]:[],this.units=e!=null&&e.units?[...e.units]:[]}updateAt(e,n,r,c){if(e!="units"&&typeof r=="number"){if(c){this[e][n].update(r);return}const u=[...this[e]];u[n].update(r),this[e]=u;return}if(e=="units"&&typeof r=="object"){if(c){if(!r){this.units[n][0].update(0);return}this.units[n][r.param].update(r.value);return}const u=[...this.units];r?u[n][r.param].update(r.value):u[n][0].update(0),this[e]=u}}setUnit(e,n,r){if(e<0||e>7)throw new Error("RLR4 Store: setUnit: slot is out of range!");if(!n){this.updateAt("units",e,null,r);return}typeof n.type=="number"&&this.updateAt("units",e,{param:0,value:n.type},r),n.level&&(this.updateAt("units",e,{param:1,value:this._exp[n.level-1]},r),this.updateAt("units",e,{param:7,value:n.level},r),this.updateAt("units",e,{param:8,value:n.level*4},r))}fromLocalStorage(e){if(!e)return;const n=[];e.units.forEach((c,u)=>{const l=[];c.forEach((f,C)=>{l.push(new t(f._current,f._max,f._description))}),n.push(l)}),this.units=n;const r=[];e.info.forEach((c,u)=>{r.push(new t(c._current,c._max,c._description))}),this.info=r}updateChecksums(e,n){for(let r;r<8;r++)this.updateAt("slots",r,this.units[r][0]?1:0,n);this.updateAt("camera",0,this.sumOfStats,n),this.updateAt("camera",1,this.sumOfUnits+e,n)}reset(){this.init()}get sumOfStats(){let e=0;for(let n=0;n<17;n++)(n<10||n>12)&&(e+=this.info[n].current);return e}get sumOfUnits(){let e=0;return this.units.forEach(n=>{if(n[0].current>0)for(let r=1;r<9;r++)r!=7&&(e+=n[r].current)}),e}init(){this.camera=[new t(0,99e6,"Sum of all stats"),new t(0,98e6,"Sum of all units and account")],this.info=[new t(500,19e4,"Normal games"),new t(25,1e5,"Normal games won"),new t(55,11e4,"Hard games"),new t(5,12e4,"Hard games won"),new t(12e3,903e5,"Total saves"),new t(99999,94e6,"Total score"),new t(2e3,96e6,"Total deaths"),new t(200,15e4,"Boss1 kills"),new t(100,16e4,"Boss2 kills"),new t(25,17e4,"Boss3 kills"),new t(25,18e4,"Insane games"),new t(2,19e4,"Insane games won"),new t(1,2e5,"Not used"),new t(5,21e4,"Time mode games"),new t(1,22e4,"Time mode games won"),new t(99999,23e4,"Minigame high score"),new t(999,24e4,"Time mode best score"),new t(72,1e3,"Distance"),new t(90,1001,"Rotation"),new t(90,1002,"Angle"),new t(1,1003,"Camera follow unit"),new t(0,1004,"Hide tips"),new t(1,1005,"Hud on"),new t(0,1006,"Mini map"),new t(0,1007,"Energy bar"),new t(0,1008,"Exp bar"),new t(0,1009,"Menu"),new t(1,1010,"WASD"),new t(0,10,"Increase distance"),new t(0,11,"Decrease distance"),new t(0,12,"Rotation right"),new t(0,13,"Rotation left"),new t(1,14,"Follow runling")],this.slots=[new t(1,425,"Slot 1"),new t(1,426,"Slot 2"),new t(1,427,"Slot 3"),new t(1,428,"Slot 4"),new t(1,429,"Slot 5"),new t(1,430,"Slot 6"),new t(1,431,"Slot 7"),new t(1,432,"Slot 8")],this.units=[];for(let e=0;e<8;e++)this.units.push([new t(2,3e5,"Unit Type"),new t(3e5,81e5,"Exp"),new t(0,32e4,"Regen"),new t(0,33e4,"Energy"),new t(0,34e4,"Speed"),new t(0,35e4,"Skill 1"),new t(0,36e4,"Skill 2"),new t(75,37e4,"Level"),new t(300,38e4,"Free Points")]);this._exp=[0,2,6,13,24,40,62,92,131,180,240,312,397,498,612,742,889,1054,1238,1442,1667,1914,2184,2478,2797,3142,3514,3914,4343,4802,5292,5814,6369,6958,7582,8242,8939,9674,10448,11262,12117,13014,13954,14938,15969,17042,18164,19334,20553,21820,23140,24512,25937,27416,28950,30540,32187,33892,35656,37480,39365,41312,43322,45396,47535,49739,52009,54346,56751,59225,61769,64384,67072,69834,72671]}get isUnitsCorrect(){return this.units.forEach(e=>{const n=e[2].current+e[3].current+e[4].current+e[8].current+(e[5].current+e[6].current)*4;if(n<0||n>300)throw new Error("Points out of range (0-300)!");if(e[0].current<1||e[0].current>5)throw new Error("Undefined unit type! Use 1, 2, 3, 4 or 5");if(e[7].current<1||e[7].current>75)throw new Error("Unit level out of range (1-75)!");if(e[7].current*4!=n)throw new Error("level or scores are incorrect!");if(e[2].current>200||e[3].current>200||e[4].current>200)throw new Error("Energy, regen, speed: 200 max");if(e[5].current>20||e[6].current>20)throw new Error("Skill: 20 max")}),!0}}const a=new G;class H{constructor(){this.STARCODE_KEY="WalkerKey"}generateXML(e){return a.updateChecksums(e.info.getPlayerNumber(),!0),a.units.forEach((n,r)=>{n[0].current>0&&e.addKey("0"+(r+1),"STRING",m.write(n,this.STARCODE_KEY),"unit")}),e.addKey("info","STRING",m.write(a.slots,this.STARCODE_KEY),"unit"),e.addKey("info","STRING",m.write(a.info,this.STARCODE_KEY),"account"),e.addKey("camera","STRING",m.write(a.camera,this.STARCODE_KEY),"account"),e.sort(),e.updateSignature(),e.getAsString()}parse(e,n){var u;if(e.parse(n),e.sections.size!=2||e.sections.get("unit")==null||e.sections.get("account")==null)return console.error("wrong bank file!"),null;const r=[];for(let l=0;l<8;l++)r.push([...a.units[l]]);for(let l=0;l<8;l++){const f=(u=e.getKey("0"+(l+1),"unit"))==null?void 0:u.value;f?m.read(f,r[l],this.STARCODE_KEY):r[l][0].update(0)}const c=[...a.info];return m.read(e.getKey("info","account").value,c,this.STARCODE_KEY),{info:c,units:r}}}const R=new H,Y=_(S=>{const{accountStore:e,menuStore:n,mapStore:r,modalStore:c}=j(),[u,l]=i.useState(S.bankName),[f,C]=i.useState(y.get(E.RUNLING_RUN_4).authorID),v=y.get(E.RUNLING_RUN_4).title,g=i.useMemo(()=>new B(u,f,n.playerID,"1"),[e.current,n.playerID,u,f]),k=i.useMemo(()=>[{value:"0",label:"Empty"},{value:"1",label:"Ling"},{value:"2",label:"Bane"},{value:"3",label:"Hydra"},{value:"4",label:"Ultra"},{value:"5",label:"Roach"}],[]);i.useEffect(()=>{var s;const o=(s=r.list[e.current])==null?void 0:s[v];o?a.fromLocalStorage(o):setTimeout(h.onResetClick)},[e.current]);const w=()=>{r.setMapData(e.current,v,{units:a.units,info:a.info})},h={onBankNameChange:i.useCallback(o=>{l(o)},[]),onAuthorIdChange:i.useCallback(o=>{C(o)},[]),onFileDrop:i.useCallback((o,s)=>{const x=R.parse(g,s);x&&(D.flushSync(()=>a.setFields()),a.setFields(x))},[]),onDownloadClick:i.useCallback(()=>{if(n.playerID.split("-").length!=4){c.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}M(R.generateXML(g),u+".SC2Bank",!0),n.autoSave||w()},[g]),onCopyCodeClick:i.useCallback(()=>{if(n.playerID.split("-").length!=4){c.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}L(R.generateXML(g),!0),n.autoSave||w()},[g]),onResetClick:i.useCallback(()=>{l(S.bankName),C(y.get(E.RUNLING_RUN_4).authorID),D.flushSync(()=>a.setFields()),a.reset()},[]),onUnitTypeChange:i.useCallback((o,s)=>{a.setUnit(s,{type:parseInt(o)},!1),n.autoSave&&w()},[]),onUnitLevelChange:i.useCallback((o,s)=>{a.setUnit(s,{level:parseInt(o)},!0),n.autoSave&&w()},[]),onStatChange:i.useCallback((o,s)=>{a.updateAt("info",s,parseInt(o),!0),n.autoSave&&w()},[]),onSettingChange:i.useCallback((o,s)=>{a.updateAt("info",s,s<20?parseInt(o):o?1:0,!0),n.autoSave&&w()},[])},A=i.useMemo(()=>p.jsx(d,{style:{flexFlow:"column",padding:"0",justifyContent:"space-around",border:"1px solid #ffffff40"},children:a.units.map((o,s)=>p.jsxs(d,{style:{flexDirection:"row",padding:"10px"},children:[p.jsx(F,{label:"Slot "+(s+1)+":",index:s,style:{width:"90px"},onChange:h.onUnitTypeChange,selected:o[0].current.toString(),children:k}),p.jsx(b,{label:"Level:",index:s,type:"number",min:"1",style:{width:"30px"},onChange:h.onUnitLevelChange,max:"75",tip:"Level of unit (1-75)",value:o[7].current.toString()})]},s))}),[a.units]),I=i.useMemo(()=>p.jsxs(p.Fragment,{children:[p.jsx(d,{style:{flexDirection:"column",padding:"10px",border:"1px solid #ffffff40"},alignInputs:!0,children:a.info.map((o,s)=>s!=12&&s<17?p.jsx(b,{label:o.description+":",index:s,type:"number",min:"0",style:{width:"45px"},onChange:h.onStatChange,max:o.max.toString(),value:o.current.toString()},s):null)}),p.jsx(d,{style:{flexDirection:"column",padding:"10px",border:"1px solid #ffffff40"},alignInputs:!0,children:a.info.map((o,s)=>s<17?null:s<20?p.jsx(b,{label:o.description+":",index:s,type:"number",min:"1",style:{width:"45px"},onChange:h.onSettingChange,max:o.max.toString(),value:o.current.toString()},s):p.jsx(K,{label:o.description+":",index:s,onChange:h.onSettingChange,value:o.current==1},s))})]}),[a.info]),T=i.useMemo(()=>p.jsxs(d,{style:{flexDirection:"row",padding:"0"},children:[A,I]}),[a.units,a.info]);return p.jsx(O,{bankName:u,authorID:f,onBankNameChange:h.onBankNameChange,onAuthorIdChange:h.onAuthorIdChange,onFileDrop:h.onFileDrop,onDownload:h.onDownloadClick,onCopy:h.onCopyCodeClick,onReset:h.onResetClick,children:T})}),J=U.memo(Y);export{J as default};
