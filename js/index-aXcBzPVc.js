import{a as H,g as b,R as E,j as s,C as v,f as k,L as A,I as w,S as P,B as F,o as q,u as L,r as p,m as M,M as J,b as N,d as _,c as X,h as W,E as Z,e as O}from"./index-_MVS0ra8.js";import{i as I,e as T,j as R,h as K,B as U}from"./index-zMefnyZU.js";/*!
 * sc2-bank-generator v.1.1.4
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/store.ts
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/functions.ts
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/hero.tsx
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/jewel.tsx
 * sc2-bank-generator/src/components/maps/zombie-world-liberty/index.tsx
 *
 * Сompiled on Thu, 15 Feb 2024 22:54:54 UTC
 */class Y{constructor(){this.init(),H(this)}setFields(e){this.stats=e!=null&&e.stats?[...e.stats]:[],this.heroes=e!=null&&e.heroes?[...e.heroes]:[],this.jewels=e!=null&&e.jewels?[...e.jewels]:[]}addJewel(e=!1){const a={type:1,minerals:5,damage:5,life:5,armor:5,speed:5,unique:0,upgrade:0};this.jewels=[...this.jewels,a]}removeJewel(e){this.jewels=[...this.jewels.filter((a,t)=>t!=e)]}clearJewels(){this.jewels=[]}selectAllHero(){const e=this.heroes[1].active,a=[...this.heroes];a.forEach((t,c)=>{a[c]={...t},a[c].active=!e}),this.heroes=[...a]}updateAt(e,a,t,c){if(c){if(e=="stats"&&typeof a=="number"){this[e][a].value=t;return}if(e!="stats"&&typeof a=="object"){this[e][a.i][a.key]=t;return}}if(e=="stats"&&typeof a=="number"){const i=[...this.stats];i[a].value=t,this.stats=i;return}if(e!="stats"&&typeof a=="object"){const i=[...this[e]],y={...i[a.i]};if(y[a.key]=t,e=="jewels"&&a.key=="type"){const m=y,{min:d,max:S}=j.getJewelRange(m.type);m.minerals=b(d,S)*10,m.damage=b(d,S),m.life=b(d,S),m.armor=b(d,S),m.speed=b(d,S)}i[a.i]=y,this[e]=i;return}}reset(){this.init()}init(){this.stats=[{type:"number",value:2e9,description:"Total Kills"},{type:"number",value:11,description:"Best Solo"},{type:"number",value:1e3,description:"Jewel Dust"},{type:"number",value:250,description:"Skip Wave At"},{type:"boolean",value:!0,description:"Challenges"}],this.heroes=[{active:!0,name:"Sniper",type:1,kills:5e3,level:20,prestige:16,pMax:16},{active:!0,name:"Adept",type:2,kills:5e3,level:20,prestige:19,pMax:19},{active:!0,name:"Zeloat",type:3,kills:5e3,level:20,prestige:18,pMax:18},{active:!0,name:"Archon",type:4,kills:5e3,level:20,prestige:16,pMax:16},{active:!0,name:"Marine",type:5,kills:5e3,level:20,prestige:16,pMax:16},{active:!0,name:"Medic",type:6,kills:5e3,level:20,prestige:16,pMax:16},{active:!0,name:"Probe",type:7,kills:5e3,level:20,prestige:16,pMax:16},{active:!0,name:"Dark Templar",type:8,kills:5e3,level:20,prestige:17,pMax:17},{active:!0,name:"Firebat",type:9,kills:5e3,level:20,prestige:9,pMax:9},{active:!0,name:"Siege Tank",type:10,kills:5e3,level:20,prestige:5,pMax:5}],this.jewels=[{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:1,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:2,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:3,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:4,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:5,upgrade:0},{type:11,minerals:1250,damage:-5e3,life:-1e3,armor:-1e3,speed:-1e3,unique:0,upgrade:-200},{type:11,minerals:1250,damage:-5e3,life:-1e3,armor:-1e3,speed:-1e3,unique:0,upgrade:-200},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:2,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:2,upgrade:0},{type:12,minerals:1250,damage:125,life:125,armor:125,speed:125,unique:2,upgrade:0}]}}const r=new Y;class V{generateXML(e){e.removeSection("Purchases"),e.removeSection("Primary"),e.removeSection("SoulStat"),e.removeSection("SoulType"),e.removeSection("CLHistory");const a=r.stats[0].value;e.addKey("Primary","INT",a,"Primary");const t=parseInt(e.info.playerID.substring(7,11));if(e.addKey("Version","FIXED",I(T(K(a),t+1)),"Version"),r.stats[1].value>0){const g=r.stats[1].value;e.addKey("BS","INT",g,"Primary");const o=parseInt(e.info.playerID.substring(9,11));e.addKey("BC","FIXED",I(T(R(g,2),o+1)),"Primary")}const c=r.stats[2].value;e.addKey("Ratio","INT",c*13,"Settings");let i=c*10;e.addKey("skipwavethreshold","INT",r.stats[3].value,"Settings");let y=0,m=0;const d=r.heroes.length;for(let g=0;g<d;g++){const o=r.heroes[g];if(!o.active&&g>0)continue;const f=o.type;e.addKey("H"+f,"FLAG",!0,"Purchases"),e.addKey("H"+f+"K","INT",o.kills,"Primary"),e.addKey("H"+f+"L","INT",o.level,"Primary"),e.addKey("H"+f+"P","INT",o.prestige,"Primary"),m+=f*(f+1),y+=o.kills,y+=o.level-1,y+=o.prestige}e.addKey("Previous","FIXED",I(T(K(y),t+2)),"Version");const S=parseInt(e.info.playerID.substring(7,10));e.addKey("Upcoming","FIXED",I(T(K(m),S+3.25)),"Version");const D=r.jewels.length;for(let g=0;g<D;g++){const o=r.jewels[g];e.addKey("Soul"+(g+1),"INT",o.type,"SoulType"),e.addKey("Soul"+(g+1)+"Stat1","FIXED",o.minerals,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat2","FIXED",o.damage,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat3","FIXED",o.life,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat4","FIXED",o.armor,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat5","FIXED",o.speed,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat6","FIXED",o.unique,"SoulStat"),e.addKey("Soul"+(g+1)+"Stat7","FIXED",o.upgrade,"SoulStat"),i+=o.minerals+o.damage+o.life+o.armor+o.speed+o.unique+o.upgrade}if(r.stats[4]){const g=parseInt(e.info.playerID.substring(8,10)),o=4;for(let f=0;f<30;f++){const u="C"+I(R((f+1)*g,2),o);e.addKey(u,"FLAG",!0,"CLHistory")}}const x=parseInt(e.info.playerID.substring(8,11)),h=I(T(K(i),x+K(i)+1));return e.addKey("Time","FIXED",h,"TimePlayed"),e.sort(),e.updateSignature(),e.getAsString()}parse(e,a){if(e.parse(a),e.sections.size<2||e.sections.get("Primary")==null||e.sections.get("Purchases")==null)return console.error("Wrong bank file!"),null;let t;const c=[{type:"number",value:0,description:"Total Kills"},{type:"number",value:1,description:"Best Solo"},{type:"number",value:0,description:"Jewel Dust"},{type:"number",value:300,description:"Skip Wave At"}];t=e.getKey("Primary","Primary"),t&&(c[0].value=t.value),t=e.getKey("BS","Primary"),t&&(c[1].value=t.value),t=e.getKey("Ratio","Settings"),t&&(c[2].value=t.value/13),t=e.getKey("skipwavethreshold","Settings"),t&&(c[3].value=t.value);const i=[{active:!0,name:"Sniper",type:1,kills:0,level:1,prestige:0},{active:!1,name:"Adept",type:2,kills:0,level:1,prestige:0},{active:!1,name:"Zeloat",type:3,kills:0,level:1,prestige:0},{active:!1,name:"Archon",type:4,kills:0,level:1,prestige:0},{active:!1,name:"Marine",type:5,kills:0,level:1,prestige:0},{active:!1,name:"Medic",type:6,kills:0,level:1,prestige:0},{active:!1,name:"Probe",type:7,kills:0,level:1,prestige:0},{active:!1,name:"Dark Templar",type:8,kills:0,level:1,prestige:0},{active:!1,name:"Firebat",type:9,kills:0,level:1,prestige:0},{active:!1,name:"Siege Tank",type:10,kills:0,level:1,prestige:0}];for(let m=0;m<9;m++){const d=m+1;t=e.getKey("H"+d,"Purchases"),t&&(i[m].active=!0,t=e.getKey("H"+d+"K","Primary"),t&&(i[m].kills=t.value),t=e.getKey("H"+d+"L","Primary"),t&&(i[m].level=t.value),t=e.getKey("H"+d+"P","Primary"),t&&(i[m].prestige=t.value))}const y=[];for(let m=0;m<100;m++){const d=m+1;if(t=e.getKey("Soul"+d,"SoulType"),!t)continue;const S={type:t.value,minerals:e.getKey("Soul"+d+"Stat1","SoulStat").value,damage:e.getKey("Soul"+d+"Stat2","SoulStat").value,life:e.getKey("Soul"+d+"Stat3","SoulStat").value,armor:e.getKey("Soul"+d+"Stat4","SoulStat").value,speed:e.getKey("Soul"+d+"Stat5","SoulStat").value,unique:e.getKey("Soul"+d+"Stat6","SoulStat").value,upgrade:e.getKey("Soul"+d+"Stat7","SoulStat").value};y.push(S)}return{stats:c,heroes:i,jewels:y}}getJewelTypes(){return[{value:"1",label:"Simple"},{value:"2",label:"Regular"},{value:"3",label:"Advanced"},{value:"4",label:"Brutality"},{value:"5",label:"Insanity"},{value:"6",label:"Nightmare"},{value:"7",label:"Chaos"},{value:"8",label:"Agonizing"},{value:"9",label:"Inferno"},{value:"10",label:"Tormented"},{value:"11",label:"Death"},{value:"12",label:"Unique"}]}getJewelRange(e){switch(e){case 1:return{min:1,max:5};case 2:return{min:5,max:10};case 3:return{min:5,max:20};case 4:return{min:10,max:30};case 5:return{min:15,max:40};case 6:return{min:20,max:50};case 7:return{min:25,max:60};case 8:return{min:30,max:75};case 9:return{min:35,max:90};case 10:return{min:40,max:90};case 11:return{min:50,max:125};case 12:return{min:50,max:125}}return null}getUniqueJewelsTypes(){return[{value:"1",label:"Marine buff"},{value:"2",label:"Cooldowns 10%"},{value:"3",label:"Adept buff"},{value:"4",label:"Ghost buff"},{value:"5",label:"Dark Templar buff"}]}getDifficultTypes(){return[{value:"0",label:"None"},{value:"1",label:"Easy"},{value:"2",label:"Normal"},{value:"3",label:"Hard"},{value:"4",label:"Brutal"},{value:"5",label:"Insane"},{value:"6",label:"Nightmare"},{value:"7",label:"Chaotic"},{value:"8",label:"Torture"},{value:"9",label:"Inferno"},{value:"10",label:"Torment"},{value:"11",label:"Death"}]}}const j=new V,z=l=>{var e;return s.jsxs(v,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"200px",marginBottom:"10px"},children:[l.index>0?s.jsx(k,{onChange:a=>l.onChange(a,l.index,"active"),value:l.hero.active,label:l.hero.name,tip:"Activate this hero?"}):s.jsx(A,{children:l.hero.name}),s.jsxs(v,{style:{flexDirection:"row"},children:[s.jsx(w,{type:"number",min:"0",max:"1500000000",style:{width:"80px"},tip:"Kills",onChange:a=>l.onChange(a,l.index,"kills"),value:l.hero.kills.toString()}),s.jsx(w,{type:"number",min:"1",max:"50",style:{width:"20px"},tip:"Level",onChange:a=>l.onChange(a,l.index,"level"),value:l.hero.level.toString()}),s.jsx(w,{type:"number",min:"0",max:((e=l.hero.pMax)==null?void 0:e.toString())||"16",style:{width:"20px"},tip:"Prestige",onChange:a=>l.onChange(a,l.index,"prestige"),value:l.hero.prestige.toString()})]})]})},G=E.memo(z),Q=l=>{const e=j.getJewelTypes(),a=j.getUniqueJewelsTypes(),{min:t,max:c}=j.getJewelRange(l.jewel.type);return s.jsxs(v,{style:{flexDirection:"row",border:"1px solid #ffffff40",padding:"10px",width:"570px",height:"min-content",alignItems:"center",justifyContent:"space-between",marginBottom:"10px"},children:[s.jsxs(v,{style:{flexDirection:"row"},children:[s.jsx(P,{style:{width:"100px",margin:"0"},onChange:i=>l.onChange(i,l.index,"type"),selected:l.jewel.type.toString(),children:e}),s.jsx(w,{type:"number",style:{width:"35px"},onChange:i=>l.onChange(i,l.index,"minerals"),value:l.jewel.minerals.toString(),min:(t*10).toString(),max:(c*10).toString(),tip:"Minerals:"+t*10+"-"+c*10}),s.jsx(w,{type:"number",style:{width:"25px"},onChange:i=>l.onChange(i,l.index,"damage"),value:l.jewel.damage.toString(),min:t.toString(),max:c.toString(),tip:"Damage:"+t+"-"+c}),s.jsx(w,{type:"number",style:{width:"25px"},onChange:i=>l.onChange(i,l.index,"life"),value:l.jewel.life.toString(),min:t.toString(),max:c.toString(),tip:"Life:"+t+"-"+c}),s.jsx(w,{type:"number",style:{width:"25px"},onChange:i=>l.onChange(i,l.index,"armor"),value:l.jewel.armor.toString(),min:t.toString(),max:c.toString(),tip:"Armor:"+t+"-"+c}),s.jsx(w,{type:"number",style:{width:"25px"},onChange:i=>l.onChange(i,l.index,"speed"),value:l.jewel.speed.toString(),min:t.toString(),max:c.toString(),tip:"Speed:"+t+"-"+c}),l.jewel.type==12?s.jsx(P,{style:{width:"160px",margin:"0"},onChange:i=>l.onChange(i,l.index,"unique"),selected:l.jewel.unique.toString(),children:a}):null]}),s.jsx(F,{onClick:()=>l.onRemove(l.index),style:{width:"25px"},children:"×"})]})},$=E.memo(Q),ee=q(l=>{const{accountStore:e,menuStore:a,mapStore:t,modalStore:c}=L(),[i,y]=p.useState(l.bankName),[m,d]=p.useState(M.get(J.ZOMBIE_WORLD_LIBERTY).authorID),S=M.get(J.ZOMBIE_WORLD_LIBERTY).title,D=p.useMemo(()=>new U(i,m,a.playerID,"1"),[e.current,a.playerID,i,m]),x=()=>{t.setMapData(e.current,S,{stats:r.stats,heroes:r.heroes,jewels:r.jewels})};p.useEffect(()=>{var n;const u=(n=t.list[e.current])==null?void 0:n[S];setTimeout(u?()=>r.setFields(u):h.onResetClick)},[e.current]);const h={onBankNameChange:p.useCallback(u=>{y(u)},[]),onAuthorIdChange:p.useCallback(u=>{d(u)},[]),onFileDrop:p.useCallback((u,n)=>{const C=j.parse(D,n);C&&(N.flushSync(()=>r.setFields()),r.setFields(C))},[]),onDownloadClick:p.useCallback(()=>{if(a.playerID.split("-").length!=4){c.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}_(j.generateXML(D),i+".SC2Bank",!0),a.autoSave||x()},[D]),onCopyCodeClick:p.useCallback(()=>{if(a.playerID.split("-").length!=4){c.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}X(j.generateXML(D),!0),a.autoSave||x()},[D]),onResetClick:p.useCallback(()=>{y(l.bankName),d(M.get(J.ZOMBIE_WORLD_LIBERTY).authorID),r.reset()},[]),onFieldChange:p.useCallback((u,n)=>{n<4?r.updateAt("stats",n,parseInt(u),n!=1):r.updateAt("stats",n,u,!1),a.autoSave&&x()},[]),onHeroChange:p.useCallback((u,n,C)=>{const B=C!="active";r.updateAt("heroes",{i:n,key:C},C=="active"?u:parseInt(u),B),a.autoSave&&x()},[]),onAllHeroSelect:p.useCallback(()=>{r.selectAllHero()},[]),onJewelAdd:p.useCallback(()=>{r.addJewel(),a.autoSave&&x()},[]),onJewelsClear:p.useCallback(()=>{r.clearJewels(),a.autoSave&&x()},[]),onJewelRemove:p.useCallback(u=>{r.removeJewel(u),a.autoSave&&x()},[]),onJewelChange:p.useCallback((u,n,C)=>{r.updateAt("jewels",{i:n,key:C},parseInt(u),!1),a.autoSave&&x()},[])},g=p.useMemo(()=>s.jsxs(s.Fragment,{children:[s.jsx(A,{style:{paddingTop:"5px"},children:"Stats:"}),s.jsx(v,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"230px",height:"180px"},alignInputs:!0,children:r.stats.map((u,n)=>n==1?s.jsx(P,{label:u.description+":",onChange:h.onFieldChange,selected:r.stats[1].value.toString(),index:n,style:{width:"100px"},children:j.getDifficultTypes()},n):n==4?s.jsx(k,{label:u.description+":",onChange:h.onFieldChange,value:r.stats[4].value,index:n,style:{width:"100px"}},n):s.jsx(w,{label:u.description+":",index:n,type:"number",style:n==0?{width:"80px"}:{width:"50px"},onChange:h.onFieldChange,min:n<3?"0":"100",max:n==0?"2000000000":n==2?"500000":"300",value:u.value.toString()},n))})]}),[r.stats]),o=p.useMemo(()=>s.jsxs(s.Fragment,{children:[s.jsxs(v,{style:{flexDirection:"row",alignItems:"center",paddingTop:"20px"},children:[s.jsx(A,{children:"Heroes:"}),s.jsx(v,{style:{flexDirection:"row",justifyContent:"flex-end"},children:s.jsx(F,{onClick:h.onAllHeroSelect,children:"Select all"})})]}),s.jsx(v,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"230px",height:"265px",overflowY:"auto"},children:r.heroes.map((u,n)=>s.jsx(G,{hero:u,onChange:h.onHeroChange,index:n},n))})]}),[r.heroes]),f=p.useMemo(()=>s.jsxs(v,{style:{flexDirection:"column"},children:[s.jsxs(v,{style:{flexDirection:"row",alignItems:"center"},children:[s.jsx(A,{style:{paddingTop:"5px"},children:"Jewels:"}),s.jsxs(v,{style:{flexDirection:"row",justifyContent:"flex-end"},children:[s.jsx(F,{onClick:h.onJewelAdd,children:"Add"}),s.jsx(F,{onClick:h.onJewelsClear,children:"Clear"})]})]}),s.jsx(v,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px",width:"600px",height:"508px",overflowY:"auto"},children:r.jewels.map((u,n)=>s.jsx($,{jewel:u,index:n,onChange:h.onJewelChange,onRemove:h.onJewelRemove},W()))})]}),[r.jewels]);return s.jsx(Z,{bankName:i,authorID:m,onBankNameChange:h.onBankNameChange,onAuthorIdChange:h.onAuthorIdChange,onFileDrop:h.onFileDrop,onDownload:h.onDownloadClick,onCopy:h.onCopyCodeClick,onReset:h.onResetClick,children:s.jsxs(s.Fragment,{children:[s.jsx(O,{children:"Note: The map is still in beta. Some combinations can be bugged!"}),s.jsxs(v,{style:{flexDirection:"row"},children:[s.jsxs(v,{style:{flexDirection:"column"},children:[g,o]}),f]})]})})}),le=E.memo(ee);export{le as default};
