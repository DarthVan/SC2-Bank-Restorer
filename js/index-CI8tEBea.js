import{a as L,g as D,R as H,j as s,C as h,f as R,L as K,I as w,S as P,B as A,o as k,u as B,r as p,m as M,M as q,b as N,d as _,c as X,h as W,E as O,e as G}from"./index-DbpueSGF.js";import{i as b,s as Z,e as I,j as J,h as T,B as U}from"./index-BNupAWEw.js";/*!
 * sc2-bank-generator v.1.1.8
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/store.ts
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/functions.ts
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/hero.tsx
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/jewel.tsx
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/index.tsx
 *
 * Сompiled on Mon, 09 Sep 2024 08:44:29 UTC
 */class V{constructor(){this.init(),L(this)}setFields(e){this.stats=e!=null&&e.stats?[...e.stats]:[],this.heroes=e!=null&&e.heroes?[...e.heroes]:[],this.jewels=e!=null&&e.jewels?[...e.jewels]:[]}addJewel(e=!1){const l={type:1,minerals:5,damage:5,life:5,armor:5,speed:5,unique:0,upgrade:0};this.jewels=[...this.jewels,l]}removeJewel(e){this.jewels=[...this.jewels.filter((l,t)=>t!=e)]}clearJewels(){this.jewels=[]}selectAllHero(){const e=this.heroes[1].active,l=[...this.heroes];l.forEach((t,m)=>{l[m]={...t},l[m].active=!e}),this.heroes=[...l]}updateAt(e,l,t,m){if(m){if(e=="stats"&&typeof l=="number"){this[e][l].value=t;return}if(e!="stats"&&typeof l=="object"){this[e][l.i][l.key]=t;return}}if(e=="stats"&&typeof l=="number"){const n=[...this.stats];n[l].value=t,this.stats=n;return}if(e!="stats"&&typeof l=="object"){const n=[...this[e]],f={...n[l.i]};if(f[l.key]=t,e=="jewels"&&l.key=="type"){const c=f,{min:d,max:S}=C.getJewelRange(c.type);c.minerals=D(d,S)*10,c.damage=D(d,S),c.life=D(d,S),c.armor=D(d,S),c.speed=D(d,S)}n[l.i]=f,this[e]=n;return}}reset(){this.init()}init(){this.stats=[{type:"number",value:2e9,description:"Total Kills"},{type:"number",value:11,description:"Best Solo"},{type:"number",value:1e3,description:"Jewel Dust"},{type:"number",value:125,description:"Skip Wave At"},{type:"boolean",value:!0,description:"Challenges",tip:"Complete all challenges"}],this.heroes=[{active:!0,name:"Sniper",type:1,kills:5e3,level:20,prestige:16,pMax:99,ascension:"11111111"},{active:!0,name:"Adept",type:2,kills:5e3,level:20,prestige:20,pMax:99,ascension:"11111111"},{active:!0,name:"Zeloat",type:3,kills:5e3,level:20,prestige:18,pMax:99,ascension:"11111111"},{active:!0,name:"Archon",type:4,kills:5e3,level:20,prestige:16,pMax:99,ascension:"11111111"},{active:!0,name:"Marine",type:5,kills:5e3,level:20,prestige:16,pMax:99,ascension:"11111111"},{active:!0,name:"Medic",type:6,kills:5e3,level:20,prestige:16,pMax:99,ascension:"11111111"},{active:!0,name:"Probe",type:7,kills:5e3,level:20,prestige:16,pMax:99,ascension:"11111111"},{active:!0,name:"Dark Templar",type:8,kills:5e3,level:20,prestige:20,pMax:99,ascension:"11111111"},{active:!0,name:"Firebat",type:9,kills:5e3,level:20,prestige:16,pMax:99,ascension:"11111111"},{active:!0,name:"Siege Tank",type:10,kills:5e3,level:20,prestige:5,pMax:99,ascension:"11111111"},{active:!0,name:"High Templar",type:11,kills:5e3,level:20,prestige:5,pMax:99,ascension:"11111111"}],this.jewels=[{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:1,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:2,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:3,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:4,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:5,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:6,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:7,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:8,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:9,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:10,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:11,upgrade:0},{type:11,minerals:1250,damage:-5e3,life:-1e3,armor:-1e3,speed:-1e3,unique:0,upgrade:-200},{type:11,minerals:1250,damage:-5e3,life:-1e3,armor:-1e3,speed:-1e3,unique:0,upgrade:-200},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:8,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:8,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:9,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:9,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:9,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:9,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:9,upgrade:0}]}}const o=new V;class Y{generateXML(e){e.removeSection("Purchases"),e.removeSection("Primary"),e.removeSection("SoulStat"),e.removeSection("SoulType"),e.removeSection("CLHistory"),e.removeSection("Settings");const l=o.stats[0].value;e.addKey("Primary","INT",l,"Primary");const t=parseInt(e.info.playerID.substring(7,11));if(e.addKey("Version","FIXED",b(I(T(l),t+1)),"Version"),o.stats[1].value>0){const g=o.stats[1].value;e.addKey("BS","INT",g,"Primary");const u=parseInt(e.info.playerID.substring(9,11));e.addKey("BC","FIXED",b(I(J(g,2),u+1)),"Primary")}const m=o.stats[2].value;e.addKey("Ratio","INT",m*13,"Settings");let n=m*10;const f=o.stats[3].value;f&&e.addKey("skipwavethreshold","INT",f,"Settings"),e.addKey("Particles","FLAG",!1,"Settings"),e.addKey("Visuals","FLAG",!1,"Settings");let c=0,d=0;const S=o.heroes.length;for(let g=0;g<S;g++){const u=o.heroes[g];if(!u.active&&g>0)continue;const i=u.type;e.addKey("H"+i,"FLAG",!0,"Purchases"),e.addKey("H"+i+"K","INT",u.kills,"Primary"),e.addKey("H"+i+"L","INT",u.level,"Primary"),e.addKey("H"+i+"P","INT",u.prestige,"Primary"),e.addKey("H"+i+"A","STRING",u.ascension,"Primary"),d+=i*(i+1),c+=u.kills,c+=u.level-1,c+=u.prestige;const r=String(u.ascension);for(let v=0;v<r.length;v++)c+=parseInt(Z(r,v+1,v+1))*100}e.addKey("Previous","FIXED",b(I(T(c),t+2)),"Version");const j=parseInt(e.info.playerID.substring(7,10));e.addKey("Upcoming","FIXED",b(I(T(d),j+3.25)),"Version");const x=o.jewels.length;for(let g=0;g<x;g++){const u=o.jewels[g];e.addKey("Soul"+(g+1),"INT",u.type,"SoulType"),e.addKey("Soul"+(g+1)+"Stat1","FIXED",u.minerals,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat2","FIXED",u.damage,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat3","FIXED",u.life,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat4","FIXED",u.armor,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat5","FIXED",u.speed,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat6","FIXED",u.unique,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat7","FIXED",u.upgrade,"SoulStat"),n+=u.minerals+u.damage+u.life+u.armor+u.speed+u.unique+u.upgrade}if(o.stats[4].value){const g=parseInt(e.info.playerID.substring(8,10)),u=4;for(let i=0;i<30;i++){const r="C"+b(J((i+1)*g,2),u);e.addKey(r,"FLAG",!0,"CLHistory")}}const y=parseInt(e.info.playerID.substring(8,11)),F=b(I(T(n),y+T(n)+1));return e.addKey("Time","FIXED",F,"TimePlayed"),e.sort(),e.updateSignature(),e.getAsString()}parse(e,l){if(e.parse(l),e.sections.size<2||!e.sections.get("Primary")||!e.sections.get("Purchases"))return console.error("Wrong bank file!"),null;let t;const m=[{type:"number",value:0,description:"Total Kills"},{type:"number",value:1,description:"Best Solo"},{type:"number",value:0,description:"Jewel Dust"},{type:"number",value:125,description:"Skip Wave At"}];t=e.getKey("Primary","Primary"),t&&(m[0].value=t.value),t=e.getKey("BS","Primary"),t&&(m[1].value=t.value),t=e.getKey("Ratio","Settings"),t&&(m[2].value=t.value/13),t=e.getKey("skipwavethreshold","Settings"),t&&(m[3].value=t.value);const n=[{active:!0,name:"Sniper",type:1,kills:0,level:1,prestige:0,ascension:"00000000"},{active:!1,name:"Adept",type:2,kills:0,level:1,prestige:0,ascension:"00000000"},{active:!1,name:"Zeloat",type:3,kills:0,level:1,prestige:0,ascension:"00000000"},{active:!1,name:"Archon",type:4,kills:0,level:1,prestige:0,ascension:"00000000"},{active:!1,name:"Marine",type:5,kills:0,level:1,prestige:0,ascension:"00000000"},{active:!1,name:"Medic",type:6,kills:0,level:1,prestige:0,ascension:"00000000"},{active:!1,name:"Probe",type:7,kills:0,level:1,prestige:0,ascension:"00000000"},{active:!1,name:"Dark Templar",type:8,kills:0,level:1,prestige:0,ascension:"00000000"},{active:!1,name:"Firebat",type:9,kills:0,level:1,prestige:0,ascension:"00000000"},{active:!1,name:"Siege Tank",type:10,kills:0,level:1,prestige:0,ascension:"00000000"},{active:!1,name:"High Templar",type:11,kills:0,level:1,prestige:0,ascension:"00000000"}];for(let c=0;c<n.length;c++){const d=c+1;t=e.getKey("H"+d,"Purchases"),t&&(n[c].active=!0,t=e.getKey("H"+d+"K","Primary"),t&&(n[c].kills=t.value),t=e.getKey("H"+d+"L","Primary"),t&&(n[c].level=t.value),t=e.getKey("H"+d+"P","Primary"),t&&(n[c].prestige=t.value),t=e.getKey("H"+d+"A","Primary"),t&&(n[c].ascension=t.value))}const f=[];for(let c=0;c<100;c++){const d=c+1;if(t=e.getKey("Soul"+d,"SoulType"),!t)continue;const S={type:t.value,minerals:e.getKey("Soul"+d+"Stat1","SoulStat").value,damage:e.getKey("Soul"+d+"Stat2","SoulStat").value,life:e.getKey("Soul"+d+"Stat3","SoulStat").value,armor:e.getKey("Soul"+d+"Stat4","SoulStat").value,speed:e.getKey("Soul"+d+"Stat5","SoulStat").value,unique:e.getKey("Soul"+d+"Stat6","SoulStat").value,upgrade:e.getKey("Soul"+d+"Stat7","SoulStat").value};f.push(S)}return{stats:m,heroes:n,jewels:f}}getJewelTypes(){return[{value:"1",label:"Simple"},{value:"2",label:"Regular"},{value:"3",label:"Advanced"},{value:"4",label:"Brutality"},{value:"5",label:"Insanity"},{value:"6",label:"Nightmare"},{value:"7",label:"Chaos"},{value:"8",label:"Agonizing"},{value:"9",label:"Inferno"},{value:"10",label:"Tormented"},{value:"11",label:"Death"},{value:"12",label:"Unique"}]}getJewelRange(e){switch(e){case 1:return{min:1,max:5};case 2:return{min:5,max:10};case 3:return{min:5,max:20};case 4:return{min:10,max:30};case 5:return{min:15,max:40};case 6:return{min:20,max:50};case 7:return{min:25,max:60};case 8:return{min:30,max:75};case 9:return{min:35,max:90};case 10:return{min:40,max:90};case 11:return{min:50,max:125};case 12:return{min:50,max:125}}return null}getUniqueJewelsTypes(){return[{value:"1",label:"Marine buff"},{value:"2",label:"Cooldowns 10%"},{value:"3",label:"Adept buff"},{value:"4",label:"Ghost buff"},{value:"5",label:"Dark Templar buff"},{value:"6",label:"Medic buff"},{value:"7",label:"Siege Tank buff"},{value:"8",label:"Movespeed +2"},{value:"9",label:"Less HP, more DMG"},{value:"10",label:"20% chance x2 DMG"},{value:"11",label:"Slows/stuns immune"}]}getDifficultTypes(){return[{value:"0",label:"None"},{value:"1",label:"Easy"},{value:"2",label:"Normal"},{value:"3",label:"Hard"},{value:"4",label:"Brutal"},{value:"5",label:"Insane"},{value:"6",label:"Nightmare"},{value:"7",label:"Chaotic"},{value:"8",label:"Torture"},{value:"9",label:"Inferno"},{value:"10",label:"Torment"},{value:"11",label:"Death"}]}}const C=new Y,z=a=>{var e;return s.jsxs(h,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"200px",marginBottom:"10px"},children:[a.index>0?s.jsx(R,{onChange:l=>a.onChange(l,a.index,"active"),value:a.hero.active,label:a.hero.name,tip:"Activate this hero?"}):s.jsx(K,{children:a.hero.name}),s.jsxs(h,{style:{flexDirection:"column"},children:[s.jsxs(h,{style:{flexDirection:"row"},children:[s.jsx(w,{type:"number",min:"0",max:"1500000000",style:{width:"80px"},tip:"Kills",onChange:l=>a.onChange(l,a.index,"kills"),value:a.hero.kills.toString()}),s.jsx(w,{type:"number",min:"1",max:"50",style:{width:"20px"},tip:"Level",onChange:l=>a.onChange(l,a.index,"level"),value:a.hero.level.toString()}),s.jsx(w,{type:"number",min:"0",max:((e=a.hero.pMax)==null?void 0:e.toString())||"20",style:{width:"20px"},tip:"Prestige",onChange:l=>a.onChange(l,a.index,"prestige"),value:a.hero.prestige.toString()})]}),s.jsx(h,{style:{flexDirection:"column",margin:"10px 0 0 0",padding:"0 2px"},alignInputs:!0,children:s.jsx(w,{type:"text",style:{width:"65px"},tip:'Ascension code (ON:"1", OFF:"0")',onChange:l=>a.onChange(l,a.index,"ascension"),label:"Ascension",value:a.hero.ascension.toString(),maxSymbols:8,pattern:/[^01]/g})})]})]})},Q=H.memo(z),$=a=>{const e=C.getJewelTypes(),l=C.getUniqueJewelsTypes(),{min:t,max:m}=C.getJewelRange(a.jewel.type);return s.jsxs(h,{style:{flexDirection:"row",border:"1px solid #ffffff40",padding:"10px",width:"570px",height:"min-content",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[s.jsxs(h,{style:{flexDirection:"row"},children:[s.jsx(P,{style:{width:"100px",margin:"0"},onChange:n=>a.onChange(n,a.index,"type"),selected:a.jewel.type.toString(),children:e}),s.jsx(w,{type:"number",style:{width:"35px"},onChange:n=>a.onChange(n,a.index,"minerals"),value:a.jewel.minerals.toString(),min:(t*10).toString(),max:(m*10).toString(),tip:"Minerals:"+t*10+"-"+m*10}),s.jsx(w,{type:"number",style:{width:"25px"},onChange:n=>a.onChange(n,a.index,"damage"),value:a.jewel.damage.toString(),min:t.toString(),max:m.toString(),tip:"Damage:"+t+"-"+m}),s.jsx(w,{type:"number",style:{width:"25px"},onChange:n=>a.onChange(n,a.index,"life"),value:a.jewel.life.toString(),min:t.toString(),max:m.toString(),tip:"Life:"+t+"-"+m}),s.jsx(w,{type:"number",style:{width:"25px"},onChange:n=>a.onChange(n,a.index,"armor"),value:a.jewel.armor.toString(),min:t.toString(),max:m.toString(),tip:"Armor:"+t+"-"+m}),s.jsx(w,{type:"number",style:{width:"25px"},onChange:n=>a.onChange(n,a.index,"speed"),value:a.jewel.speed.toString(),min:t.toString(),max:m.toString(),tip:"Speed:"+t+"-"+m}),a.jewel.type==12?s.jsx(P,{style:{width:"160px",margin:"0"},onChange:n=>a.onChange(n,a.index,"unique"),selected:a.jewel.unique.toString(),children:l}):null]}),s.jsx(A,{onClick:()=>a.onRemove(a.index),style:{width:"25px",background:"linear-gradient(#6b030377, #d83131aa)",border:"1px solid #ee5050"},children:"×"})]})},ee=H.memo($),te=k(a=>{const{accountStore:e,menuStore:l,mapStore:t,modalStore:m}=B(),[n,f]=p.useState(a.bankName),[c,d]=p.useState(M.get(q.ZOMBIE_WORLD_LIBERTY).authorID),S=M.get(q.ZOMBIE_WORLD_LIBERTY).title,j=p.useMemo(()=>new U(n,c,l.playerID,"1"),[e.current,l.playerID,n,c]),x=()=>{t.setMapData(e.current,S,{stats:o.stats,heroes:o.heroes,jewels:o.jewels})};p.useEffect(()=>{var r;const i=(r=t.list[e.current])==null?void 0:r[S];setTimeout(i?()=>o.setFields(i):y.onResetClick)},[e.current]);const y={onBankNameChange:p.useCallback(i=>{f(i)},[]),onAuthorIdChange:p.useCallback(i=>{d(i)},[]),onFileDrop:p.useCallback((i,r)=>{const v=C.parse(j,r);v&&(N.flushSync(()=>o.setFields()),o.setFields(v))},[]),onDownloadClick:p.useCallback(()=>{if(l.playerID.split("-").length!=4){m.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}_(C.generateXML(j),n+".SC2Bank"),l.autoSave||x()},[j]),onCopyCodeClick:p.useCallback(()=>{if(l.playerID.split("-").length!=4){m.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}X(C.generateXML(j)),l.autoSave||x()},[j]),onResetClick:p.useCallback(()=>{f(a.bankName),d(M.get(q.ZOMBIE_WORLD_LIBERTY).authorID),o.reset()},[]),onFieldChange:p.useCallback((i,r)=>{r<4?o.updateAt("stats",r,parseInt(i),r!=1):o.updateAt("stats",r,i,!1),l.autoSave&&x()},[]),onHeroChange:p.useCallback((i,r,v)=>{const E=v=="active";o.updateAt("heroes",{i:r,key:v},v=="active"||v=="ascension"?i:parseInt(i),E),l.autoSave&&x()},[]),onAllHeroSelect:p.useCallback(()=>{o.selectAllHero()},[]),onJewelAdd:p.useCallback(()=>{o.addJewel(),l.autoSave&&x()},[]),onJewelsClear:p.useCallback(()=>{o.clearJewels(),l.autoSave&&x()},[]),onJewelRemove:p.useCallback(i=>{o.removeJewel(i),l.autoSave&&x()},[]),onJewelChange:p.useCallback((i,r,v)=>{o.updateAt("jewels",{i:r,key:v},parseInt(i),!1),l.autoSave&&x()},[])},F=p.useMemo(()=>s.jsxs(s.Fragment,{children:[s.jsx(K,{style:{paddingTop:"5px"},children:"Stats:"}),s.jsx(h,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"230px",height:"180px"},alignInputs:!0,children:o.stats.map((i,r)=>r==1?s.jsx(P,{label:i.description+":",onChange:y.onFieldChange,selected:o.stats[1].value.toString(),index:r,style:{width:"100px"},children:C.getDifficultTypes()},r):r==4?s.jsx(R,{label:i.description+":",onChange:y.onFieldChange,value:o.stats[4].value,index:r,style:{width:"100px"},tip:i.tip},r):s.jsx(w,{label:i.description+":",index:r,type:"number",style:r==0?{width:"80px"}:{width:"50px"},onChange:y.onFieldChange,min:"0",max:r==0?"2000000000":r==2?"500000":"500",value:i.value.toString(),tip:i.tip},r))})]}),[o.stats]),g=p.useMemo(()=>s.jsxs(s.Fragment,{children:[s.jsxs(h,{style:{flexDirection:"row",alignItems:"center",paddingTop:"20px"},children:[s.jsx(K,{children:"Heroes:"}),s.jsx(h,{style:{flexDirection:"row",justifyContent:"flex-end"},children:s.jsx(A,{onClick:y.onAllHeroSelect,children:"Select all"})})]}),s.jsx(h,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"230px",height:"265px",overflowY:"auto"},children:o.heroes.map((i,r)=>s.jsx(Q,{hero:i,onChange:y.onHeroChange,index:r},r))})]}),[o.heroes]),u=p.useMemo(()=>s.jsxs(h,{style:{flexDirection:"column"},children:[s.jsxs(h,{style:{flexDirection:"row",alignItems:"center"},children:[s.jsx(K,{style:{paddingTop:"5px"},children:"Jewels:"}),s.jsxs(h,{style:{flexDirection:"row",justifyContent:"flex-end"},children:[s.jsx(A,{onClick:y.onJewelAdd,children:"Add"}),s.jsx(A,{onClick:y.onJewelsClear,children:"Clear"})]})]}),s.jsx(h,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"600px",height:"508px",overflowY:"auto"},children:o.jewels.map((i,r)=>s.jsx(ee,{jewel:i,index:r,onChange:y.onJewelChange,onRemove:y.onJewelRemove},W()))})]}),[o.jewels]);return s.jsx(O,{bankName:n,authorID:c,onBankNameChange:y.onBankNameChange,onAuthorIdChange:y.onAuthorIdChange,onFileDrop:y.onFileDrop,onDownload:y.onDownloadClick,onCopy:y.onCopyCodeClick,onReset:y.onResetClick,children:s.jsxs(s.Fragment,{children:[s.jsx(G,{children:"Note: The map is still in beta. Some combinations can be bugged!"}),s.jsxs(h,{style:{flexDirection:"row"},children:[s.jsxs(h,{style:{flexDirection:"column"},children:[F,g]}),u]})]})})}),se=H.memo(te);export{se as default};
