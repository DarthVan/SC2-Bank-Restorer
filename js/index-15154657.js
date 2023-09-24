import{a as k,b as I,R,j as a,C as v,g as H,L as A,I as x,S as B,B as F,o as M,u as q,r as h,m as J,M as P,e as E,d as L,c as _,h as X,E as W,f as Z}from"./index-82a81613.js";import{e as b,a as K,d as T,f as O,B as U}from"./index-788c3cec.js";/*!
 * sc2-bank-generator v.1.0.8
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/store.ts
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/functions.ts
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/hero.tsx
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/jewel.tsx
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/index.tsx
 *
 * Сompiled on Sun, 24 Sep 2023 20:57:45 UTC
 */class Y{constructor(){this.init(),k(this)}setFields(e){this.stats=e!=null&&e.stats?[...e.stats]:[],this.heroes=e!=null&&e.heroes?[...e.heroes]:[],this.jewels=e!=null&&e.jewels?[...e.jewels]:[]}addJewel(e=!1){const s={type:1,minerals:5,damage:5,life:5,armor:5,speed:5,unique:0,upgrade:0};this.jewels=[...this.jewels,s]}removeJewel(e){this.jewels=[...this.jewels.filter((s,t)=>t!=e)]}clearJewels(){this.jewels=[]}selectAllHero(){const e=this.heroes[1].active,s=[...this.heroes];s.forEach((t,o)=>{s[o]={...t},s[o].active=!e}),this.heroes=[...s]}updateAt(e,s,t,o){if(o){if(e=="stats"&&typeof s=="number"){this[e][s].value=t;return}if(e!="stats"&&typeof s=="object"){this[e][s.i][s.key]=t;return}}if(e=="stats"&&typeof s=="number"){const n=[...this.stats];n[s].value=t,this.stats=n;return}if(e!="stats"&&typeof s=="object"){const n=[...this[e]],y={...n[s.i]};if(y[s.key]=t,e=="jewels"&&s.key=="type"){const u=y,{min:m,max:S}=j.getJewelRange(u.type);u.minerals=I(m,S)*10,u.damage=I(m,S),u.life=I(m,S),u.armor=I(m,S),u.speed=I(m,S)}n[s.i]=y,this[e]=n;return}}reset(){this.init()}init(){this.stats=[{type:"number",value:15e8,description:"Total Kills"},{type:"number",value:8,description:"Best Solo"},{type:"number",value:1e3,description:"Jewel Dust"},{type:"number",value:300,description:"Skip Wave At"}],this.heroes=[{active:!0,name:"Sniper",type:1,kills:5e3,level:20,prestige:16},{active:!0,name:"Adept",type:2,kills:5e3,level:20,prestige:16},{active:!1,name:"Zeloat",type:3,kills:5e3,level:20,prestige:16},{active:!1,name:"Archon",type:4,kills:5e3,level:20,prestige:16},{active:!1,name:"Marine",type:5,kills:5e3,level:20,prestige:16},{active:!1,name:"Medic",type:6,kills:5e3,level:20,prestige:16},{active:!1,name:"Probe",type:7,kills:5e3,level:20,prestige:16},{active:!1,name:"Dark Templar",type:8,kills:5e3,level:20,prestige:16}],this.jewels=[{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:1,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:2,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:3,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:4,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:5,upgrade:0},{type:11,minerals:1250,damage:-5e3,life:125,armor:125,speed:-1e3,unique:0,upgrade:-200},{type:11,minerals:1250,damage:-5e3,life:125,armor:125,speed:-1e3,unique:0,upgrade:-200}]}}const i=new Y;class V{generateXML(e){e.removeSection("Purchases"),e.removeSection("Primary"),e.removeSection("SoulStat"),e.removeSection("SoulType");const s=i.stats[0].value;e.addKey("Primary","INT",s,"Primary");const t=parseInt(e.info.playerID.substring(7,11));if(e.addKey("Version","FIXED",b(K(T(s),t+1)),"Version"),i.stats[1].value>0){const g=i.stats[1].value;e.addKey("BS","INT",g,"Primary");const r=parseInt(e.info.playerID.substring(9,11));e.addKey("BC","FIXED",b(K(O(g,2),r+1)),"Primary")}const o=i.stats[2].value;e.addKey("Ratio","INT",o*13,"Settings");let n=o*10;e.addKey("skipwavethreshold","INT",i.stats[3].value,"Settings");let y=0,u=0;const m=i.heroes.length;for(let g=0;g<m;g++){const r=i.heroes[g];if(!r.active&&g>0)continue;const w=r.type;e.addKey("H"+w,"FLAG",!0,"Purchases"),e.addKey("H"+w+"K","INT",r.kills,"Primary"),e.addKey("H"+w+"L","INT",r.level,"Primary"),e.addKey("H"+w+"P","INT",r.prestige,"Primary"),u+=w*(w+1),y+=r.kills,y+=r.level-1,y+=r.prestige}e.addKey("Previous","FIXED",b(K(T(y),t+2)),"Version");const S=parseInt(e.info.playerID.substring(7,10));e.addKey("Upcoming","FIXED",b(K(T(u),S+3.25)),"Version");const D=i.jewels.length;for(let g=0;g<D;g++){const r=i.jewels[g];e.addKey("Soul"+(g+1),"INT",r.type,"SoulType"),e.addKey("Soul"+(g+1)+"Stat1","FIXED",r.minerals,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat2","FIXED",r.damage,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat3","FIXED",r.life,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat4","FIXED",r.armor,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat5","FIXED",r.speed,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat6","FIXED",r.unique,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat7","FIXED",r.upgrade,"SoulStat"),n+=r.minerals+r.damage+r.life+r.armor+r.speed+r.unique+r.upgrade}const f=parseInt(e.info.playerID.substring(8,11)),p=b(K(T(n),f+T(n)+1));return e.addKey("Time","FIXED",p,"TimePlayed"),e.sort(),e.updateSignature(),e.getAsString()}parse(e,s){if(e.parse(s),e.sections.size<2||e.sections.get("Primary")==null||e.sections.get("Purchases")==null)return console.error("Wrong bank file!"),null;let t;const o=[{type:"number",value:0,description:"Total Kills"},{type:"number",value:1,description:"Best Solo"},{type:"number",value:0,description:"Jewel Dust"},{type:"number",value:300,description:"Skip Wave At"}];t=e.getKey("Primary","Primary"),t&&(o[0].value=t.value),t=e.getKey("BS","Primary"),t&&(o[1].value=t.value),t=e.getKey("Ratio","Settings"),t&&(o[2].value=t.value/13),t=e.getKey("skipwavethreshold","Settings"),t&&(o[3].value=t.value);const n=[{active:!0,name:"Sniper",type:1,kills:0,level:1,prestige:0},{active:!1,name:"Adept",type:2,kills:0,level:1,prestige:0},{active:!1,name:"Zeloat",type:3,kills:0,level:1,prestige:0},{active:!1,name:"Archon",type:4,kills:0,level:1,prestige:0},{active:!1,name:"Marine",type:5,kills:0,level:1,prestige:0},{active:!1,name:"Medic",type:6,kills:0,level:1,prestige:0},{active:!1,name:"Probe",type:7,kills:0,level:1,prestige:0},{active:!1,name:"Dark Templar",type:8,kills:0,level:1,prestige:0}];for(let u=0;u<9;u++){const m=u+1;t=e.getKey("H"+m,"Purchases"),t&&(n[u].active=!0,t=e.getKey("H"+m+"K","Primary"),t&&(n[u].kills=t.value),t=e.getKey("H"+m+"L","Primary"),t&&(n[u].level=t.value),t=e.getKey("H"+m+"P","Primary"),t&&(n[u].prestige=t.value))}const y=[];for(let u=0;u<100;u++){const m=u+1;if(t=e.getKey("Soul"+m,"SoulType"),!t)continue;const S={type:t.value,minerals:e.getKey("Soul"+m+"Stat1","SoulStat").value,damage:e.getKey("Soul"+m+"Stat2","SoulStat").value,life:e.getKey("Soul"+m+"Stat3","SoulStat").value,armor:e.getKey("Soul"+m+"Stat4","SoulStat").value,speed:e.getKey("Soul"+m+"Stat5","SoulStat").value,unique:e.getKey("Soul"+m+"Stat6","SoulStat").value,upgrade:e.getKey("Soul"+m+"Stat7","SoulStat").value};y.push(S)}return{stats:o,heroes:n,jewels:y}}getJewelTypes(){return[{value:"1",label:"Simple"},{value:"2",label:"Regular"},{value:"3",label:"Advanced"},{value:"4",label:"Brutality"},{value:"5",label:"Insanity"},{value:"6",label:"Nightmare"},{value:"7",label:"Chaos"},{value:"8",label:"Agonizing"},{value:"9",label:"Inferno"},{value:"10",label:"Tormented"},{value:"11",label:"Death"},{value:"12",label:"Unique"}]}getJewelRange(e){switch(e){case 1:return{min:1,max:5};case 2:return{min:5,max:10};case 3:return{min:5,max:20};case 4:return{min:10,max:30};case 5:return{min:15,max:40};case 6:return{min:20,max:50};case 7:return{min:25,max:60};case 8:return{min:30,max:75};case 9:return{min:35,max:90};case 10:return{min:40,max:90};case 11:return{min:50,max:125};case 12:return{min:50,max:125}}return null}getUniqueJewelsTypes(){return[{value:"1",label:"Marine buff"},{value:"2",label:"Cooldowns 10%"},{value:"3",label:"Adept buff"},{value:"4",label:"Ghost buff"},{value:"5",label:"Dark Templar buff"}]}getDifficultTypes(){return[{value:"0",label:"None"},{value:"1",label:"Easy"},{value:"2",label:"Normal"},{value:"3",label:"Hard"},{value:"4",label:"Brutal"},{value:"5",label:"Insane"},{value:"6",label:"Nightmare"},{value:"7",label:"Chaotic"},{value:"8",label:"Torture"},{value:"9",label:"Inferno"}]}}const j=new V,z=l=>a.jsxs(v,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"200px",marginBottom:"10px"},children:[l.index>0?a.jsx(H,{onChange:e=>l.onChange(e,l.index,"active"),value:l.hero.active,label:l.hero.name,tip:"Activate this hero?"}):a.jsx(A,{children:l.hero.name}),a.jsxs(v,{style:{flexDirection:"row"},children:[a.jsx(x,{type:"number",min:"0",max:"1500000000",style:{width:"80px"},tip:"Kills",onChange:e=>l.onChange(e,l.index,"kills"),value:l.hero.kills.toString()}),a.jsx(x,{type:"number",min:"1",max:"50",style:{width:"20px"},tip:"Level",onChange:e=>l.onChange(e,l.index,"level"),value:l.hero.level.toString()}),a.jsx(x,{type:"number",min:"0",max:"16",style:{width:"20px"},tip:"Prestige",onChange:e=>l.onChange(e,l.index,"prestige"),value:l.hero.prestige.toString()})]})]}),G=R.memo(z),Q=l=>{const e=j.getJewelTypes(),s=j.getUniqueJewelsTypes(),{min:t,max:o}=j.getJewelRange(l.jewel.type);return a.jsxs(v,{style:{flexDirection:"row",border:"1px solid #ffffff40",padding:"10px",width:"570px",height:"min-content",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[a.jsxs(v,{style:{flexDirection:"row"},children:[a.jsx(B,{style:{width:"100px",margin:"0"},onChange:n=>l.onChange(n,l.index,"type"),selected:l.jewel.type.toString(),children:e}),a.jsx(x,{type:"number",style:{width:"35px"},onChange:n=>l.onChange(n,l.index,"minerals"),value:l.jewel.minerals.toString(),min:(t*10).toString(),max:(o*10).toString(),tip:"Minerals:"+t*10+"-"+o*10}),a.jsx(x,{type:"number",style:{width:"25px"},onChange:n=>l.onChange(n,l.index,"damage"),value:l.jewel.damage.toString(),min:t.toString(),max:o.toString(),tip:"Damage:"+t+"-"+o}),a.jsx(x,{type:"number",style:{width:"25px"},onChange:n=>l.onChange(n,l.index,"life"),value:l.jewel.life.toString(),min:t.toString(),max:o.toString(),tip:"Life:"+t+"-"+o}),a.jsx(x,{type:"number",style:{width:"25px"},onChange:n=>l.onChange(n,l.index,"armor"),value:l.jewel.armor.toString(),min:t.toString(),max:o.toString(),tip:"Armor:"+t+"-"+o}),a.jsx(x,{type:"number",style:{width:"25px"},onChange:n=>l.onChange(n,l.index,"speed"),value:l.jewel.speed.toString(),min:t.toString(),max:o.toString(),tip:"Speed:"+t+"-"+o}),l.jewel.type==12?a.jsx(B,{style:{width:"160px",margin:"0"},onChange:n=>l.onChange(n,l.index,"unique"),selected:l.jewel.unique.toString(),children:s}):null]}),a.jsx(F,{onClick:()=>l.onRemove(l.index),style:{width:"25px"},children:"×"})]})},$=R.memo(Q),ee=M(l=>{const{accountStore:e,menuStore:s,mapStore:t,modalStore:o}=q(),[n,y]=h.useState(l.bankName),[u,m]=h.useState(J.get(P.ZOMBIE_WORLD_LIBERTY).authorID),S=J.get(P.ZOMBIE_WORLD_LIBERTY).title,D=h.useMemo(()=>new U(n,u,s.playerID,"1"),[e.current,s.playerID,n,u]),f=()=>{t.setMapData(e.current,S,{stats:i.stats,heroes:i.heroes,jewels:i.jewels})};h.useEffect(()=>{var c;const d=(c=t.list[e.current])==null?void 0:c[S];d?(E.flushSync(()=>i.setFields()),setTimeout(()=>i.setFields(d))):setTimeout(p.onResetClick)},[e.current]);const p={onBankNameChange:h.useCallback(d=>{y(d)},[]),onAuthorIdChange:h.useCallback(d=>{m(d)},[]),onFileDrop:h.useCallback((d,c)=>{const C=j.parse(D,c);C&&(E.flushSync(()=>i.setFields()),i.setFields(C))},[]),onDownloadClick:h.useCallback(()=>{if(s.playerID.split("-").length!=4){o.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}L(j.generateXML(D),n+".SC2Bank",!0),s.autoSave||f()},[D]),onCopyCodeClick:h.useCallback(()=>{if(s.playerID.split("-").length!=4){o.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}_(j.generateXML(D),!0),s.autoSave||f()},[D]),onResetClick:h.useCallback(()=>{y(l.bankName),m(J.get(P.ZOMBIE_WORLD_LIBERTY).authorID),E.flushSync(()=>i.setFields()),i.reset()},[]),onFieldChange:h.useCallback((d,c)=>{i.updateAt("stats",c,parseInt(d),!0),s.autoSave&&f()},[]),onHeroChange:h.useCallback((d,c,C)=>{const N=C!="active";i.updateAt("heroes",{i:c,key:C},C=="active"?d:parseInt(d),N),s.autoSave&&f()},[]),onAllHeroSelect:h.useCallback(()=>{i.selectAllHero()},[]),onJewelAdd:h.useCallback(()=>{i.addJewel(),s.autoSave&&f()},[]),onJewelsClear:h.useCallback(()=>{i.clearJewels(),s.autoSave&&f()},[]),onJewelRemove:h.useCallback(d=>{i.removeJewel(d),s.autoSave&&f()},[]),onJewelChange:h.useCallback((d,c,C)=>{i.updateAt("jewels",{i:c,key:C},parseInt(d),!1),s.autoSave&&f()},[])},g=h.useMemo(()=>a.jsxs(a.Fragment,{children:[a.jsx(A,{style:{paddingTop:"5px"},children:"Stats:"}),a.jsx(v,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"230px",height:"145px"},alignInputs:!0,children:i.stats.map((d,c)=>c==1?a.jsx(B,{label:"Best Solo:",onChange:p.onFieldChange,selected:i.stats[1].value.toString(),index:c,style:{width:"100px"},children:j.getDifficultTypes()},c):a.jsx(x,{label:d.description+":",index:c,type:"number",style:c==0?{width:"80px"}:{width:"50px"},onChange:p.onFieldChange,min:c<3?"0":"100",max:c==0?"1500000000":c==2?"500000":"300",value:d.value.toString()},c))})]}),[i.stats]),r=h.useMemo(()=>a.jsxs(a.Fragment,{children:[a.jsxs(v,{style:{flexDirection:"row",alignItems:"center",paddingTop:"20px"},children:[a.jsx(A,{children:"Heroes:"}),a.jsx(v,{style:{flexDirection:"row",justifyContent:"flex-end"},children:a.jsx(F,{onClick:p.onAllHeroSelect,children:"Select all"})})]}),a.jsx(v,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"230px",height:"300px",overflowY:"auto"},children:i.heroes.map((d,c)=>a.jsx(G,{hero:d,onChange:p.onHeroChange,index:c},c))})]}),[i.heroes]),w=h.useMemo(()=>a.jsxs(v,{style:{flexDirection:"column"},children:[a.jsxs(v,{style:{flexDirection:"row",alignItems:"center"},children:[a.jsx(A,{style:{paddingTop:"5px"},children:"Jewels:"}),a.jsxs(v,{style:{flexDirection:"row",justifyContent:"flex-end"},children:[a.jsx(F,{onClick:p.onJewelAdd,children:"Add"}),a.jsx(F,{onClick:p.onJewelsClear,children:"Clear"})]})]}),a.jsx(v,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"600px",height:"508px",overflowY:"auto"},children:i.jewels.map((d,c)=>a.jsx($,{jewel:d,index:c,onChange:p.onJewelChange,onRemove:p.onJewelRemove},X()))})]}),[i.jewels]);return a.jsx(W,{bankName:n,authorID:u,onBankNameChange:p.onBankNameChange,onAuthorIdChange:p.onAuthorIdChange,onFileDrop:p.onFileDrop,onDownload:p.onDownloadClick,onCopy:p.onCopyCodeClick,onReset:p.onResetClick,children:a.jsxs(a.Fragment,{children:[a.jsx(Z,{children:"Note: The map is still in beta. Some combinations can be bugged!"}),a.jsxs(v,{style:{flexDirection:"row"},children:[a.jsxs(v,{style:{flexDirection:"column"},children:[g,r]}),w]})]})})}),ae=R.memo(ee);export{ae as default};
