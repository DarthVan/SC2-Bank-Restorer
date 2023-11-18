import{a as P,b as v,n as F,t as _,R as E,r as h,j as o,C as g,L as m,g as k,I as D,o as K,u as L,m as w,M as A,e as T,d as W,c as V,f as G,E as U}from"./index-wK-OLqSP.js";import{B as X}from"./index-HPs5x_Nj.js";import{s as I}from"./starcode-M2woEvnf.js";/*!
 * sc2-bank-generator v.1.1.0
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/swarm-special-forces/SSFStorage.ts
 * sc2-bank-generator/src/components/maps/swarm-special-forces/store.ts
 * sc2-bank-generator/src/components/maps/swarm-special-forces/functions.ts
 * sc2-bank-generator/src/components/maps/swarm-special-forces/ssf-6b.tsx
 * sc2-bank-generator/src/components/maps/swarm-special-forces/ssf-part.tsx
 * sc2-bank-generator/src/components/maps/swarm-special-forces/ssf-diff.tsx
 * sc2-bank-generator/src/components/maps/swarm-special-forces/index.tsx
 *
 * Сompiled on Sat, 18 Nov 2023 15:02:27 UTC
 */class q{constructor(){this.data=""}reset(){this.data=""}addInt(t){if(t<0)throw new Error("SSF Storage Error! Value negative.");const e=t.toString(),n=e.length;this.data+=n>9?"9999999999":n+e}addBool(t){this.data+=t?"1":"0"}getInt(){if(this.data=="")throw new Error("SSF Storage Error! Empty data.");let t=this.data.substring(0,1);const e=parseInt(t);if(e==0||e>this.data.length)throw new Error("SSF Storage Error! Wrong length: "+e+"; use data length: 1-"+this.data.length);return t=this.data.substring(1,e+1),this.data=this.data.substring(e+1),parseInt(t)}getBool(){if(this.data=="")throw new Error("SSF Storage Error! Empty data.");const t=this.data.substring(0,1);if(t!="0"&&t!="1")throw new Error("SSF Storage Error! Expected boolean (0 or 1).");return this.data=this.data.substring(1),t=="1"}}const r=new q;class z{constructor(){this.init(),P(this)}setFields(t){this.light=t!=null&&t.light?[...t.light]:[],this.heavy=t!=null&&t.heavy?[...t.heavy]:[],this.speed=t!=null&&t.speed?[...t.speed]:[],this.options=t!=null&&t.options?[...t.options]:[],this.bools=t!=null&&t.bools?[...t.bools]:[]}updateAt(t,e,n,i){if(t!="speed"&&typeof e=="number"){if(i){this[t][e].value=n;return}const p=[...this[t]];p[e].value=n,this[t]=p;return}if(t=="speed"&&typeof e=="object"){if(i){this.speed[e.i][e.j][e.k].value=n;return}const p=[...this.speed];p[e.i][e.j][e.k].value=n,this[t]=p}if(t=="bools"&&typeof e=="object"){if(i){this.bools[e.i].flags[e.j].value=n;return}const p=[...this.bools];p[e.i].flags[e.j].value=n,this[t]=p}}reset(){this.init()}init(){this.light=[],this.heavy=[],this.speed=[],this.options=[],this.bools=[{part:0,offset:0,name:"Flamer",flags:[]},{part:0,offset:1,name:"Hammer",flags:[]},{part:0,offset:2,name:"Fortress",flags:[]},{part:1,offset:0,name:"Madness",flags:[]},{part:1,offset:1,name:"Atlantis",flags:[]},{part:1,offset:2,name:"Lightning",flags:[]},{part:1,offset:3,name:"Thunder",flags:[]},{part:2,offset:0,name:"Raynor",flags:[]},{part:2,offset:1,name:"Kerrigan",flags:[]},{part:2,offset:2,name:"Artanis",flags:[]},{part:2,offset:3,name:"Cybermind",flags:[]},{part:3,offset:0,name:"Gary",flags:[]},{part:3,offset:1,name:"Stetmann",flags:[]},{part:3,offset:2,name:"Moopy",flags:[]},{part:0,name:"FlawlessT",flags:[]},{part:1,name:"FlawlessP",flags:[]},{part:2,name:"FlawlessM",flags:[]}]}}const s=new z;class ${constructor(){this.STARCODE_PART="gehkaggen11",this.STARCODE_HASH=4,this.VERSION=2011}generateDefault(t){const e=t||v(5e5,9e6),n=[{type:"number",value:e,description:"Kills"},{type:"number",value:Math.floor(e/v(180,220)),description:"Points"},{type:"number",value:Math.floor(e/v(3200,3500)),description:"Scientists"},{type:"number",value:Math.floor(e/v(1500,1800)),description:"Essences"},{type:"number",value:Math.floor(e/v(8e3,12e3)),description:"Psi Orbs"},{type:"number",value:Math.floor(e/v(14e3,16e3)),description:"MoopyHats"}],i=[];for(let u=0;u<3;u++){const y=Math.floor(e/v(1200*(u+1),2e3*(u+1)));i.push({type:"number",value:y,description:"Wins "+(u+1)})}for(let u=0;u<4;u++)i.push({type:"number",value:0,description:"Boss "+(u+1)+" crypted",hidden:!0});i.push({type:"number",value:0,description:"Flawless crypted",hidden:!0},{type:"boolean",value:!0,description:"Tutorial"},{type:"number",value:v(0,10),description:"ArchivedAcv"});const p=[];for(let u=0;u<6;u++){p.push([]);for(let y=0;y<3;y++){p[u].push([]);for(let b=0;b<2;b++)p[u][y].push({type:"string",value:F(v(250,500)*Math.pow(u+1,1.5)/(b+1)),description:"time "})}}const j=[{type:"number",value:0,description:"Hero type",hidden:!0},{type:"boolean",value:!1,description:"Hero selected",hidden:!0},{type:"boolean",value:!1,description:"Speedrun details",hidden:!0},{type:"boolean",value:!0,description:"Hero panel"},{type:"boolean",value:!1,description:"Hive panel"},{type:"number",value:0,description:"Unit selection",hidden:!0},{type:"boolean",value:!0,description:"Control group 1b",hidden:!0},{type:"number",value:1,description:"Control group 1n",hidden:!0},{type:"boolean",value:!0,description:"Control group 2b",hidden:!0},{type:"number",value:2,description:"Control group 2n",hidden:!0},{type:"boolean",value:!0,description:"Control group 3b",hidden:!0},{type:"number",value:3,description:"Control group 3n",hidden:!0},{type:"boolean",value:!0,description:"Control group 4b",hidden:!0},{type:"number",value:3,description:"Control group 4n",hidden:!0},{type:"boolean",value:!0,description:"Control group 5b",hidden:!0},{type:"number",value:3,description:"Control group 5n",hidden:!0}],d=[...s.bools],C=d.length;for(let u=0;u<C;u++)d[u].flags=this.makeSixBoolsFor(d[u].name);return{light:n,heavy:i,speed:p,options:j,bools:d}}parse(t,e){if(t.parse(e),t.sections.size!=1||!t.sections.has("stats"))return console.error("Wrong bank file!"),null;this.reloadStorage(t,"lightData");const n=[{type:"number",value:r.getInt(),description:"Kills"},{type:"number",value:r.getInt(),description:"Points"},{type:"number",value:r.getInt(),description:"Scientists"},{type:"number",value:r.getInt(),description:"Essences"},{type:"number",value:r.getInt(),description:"Psi Orbs"},{type:"number",value:r.getInt(),description:"MoopyHats"}];if(r.getInt(),r.getInt()!=this.VERSION)throw new Error("Invaliid version in lightData");this.reloadStorage(t,"heavyData");const i=[];for(let d=0;d<3;d++)i.push({type:"number",value:r.getInt(),description:"Wins "+(d+1)});for(let d=0;d<4;d++)i.push({type:"number",value:r.getInt(),description:"Boss "+(d+1)+" crypted",hidden:!0});if(i.push({type:"number",value:r.getInt(),description:"Flawless crypted",hidden:!0},{type:"boolean",value:r.getBool(),description:"Tutorial"},{type:"number",value:r.getInt(),description:"ArchivedAcv"}),r.getInt(),r.getInt()!=this.VERSION)throw new Error("Invaliid version in heavyData");this.reloadStorage(t,"speedrunsData");const p=[];for(let d=0;d<6;d++){p.push([]);for(let C=0;C<3;C++){p[d].push([]);let u=0,y=0;for(let b=0;b<6;b++){const f=r.getInt();b<4?u=Math.max(u,f):y=Math.max(y,f)}p[d][C].push({type:"string",value:F(u),description:"time "}),p[d][C].push({type:"string",value:F(y),description:"time "})}}if(r.getInt(),r.getInt()!=this.VERSION)throw new Error("Invaliid version in speedrunsData");r.data=t.getKey("options","stats").value;const j=[{type:"number",value:r.getInt(),description:"Hero type",hidden:!0},{type:"boolean",value:r.getBool(),description:"Hero selected",hidden:!0},{type:"boolean",value:r.getBool(),description:"Speedrun details",hidden:!0},{type:"boolean",value:r.getBool(),description:"Hero panel"},{type:"boolean",value:r.getBool(),description:"Hive panel"},{type:"number",value:r.getInt(),description:"Unit selection",hidden:!0},{type:"boolean",value:r.getBool(),description:"Control group 1b",hidden:!0},{type:"number",value:r.getInt(),description:"Control group 1n",hidden:!0},{type:"boolean",value:r.getBool(),description:"Control group 2b",hidden:!0},{type:"number",value:r.getInt(),description:"Control group 2n",hidden:!0},{type:"boolean",value:r.getBool(),description:"Control group 3b",hidden:!0},{type:"number",value:r.getInt(),description:"Control group 3n",hidden:!0},{type:"boolean",value:r.getBool(),description:"Control group 4b",hidden:!0},{type:"number",value:r.getInt(),description:"Control group 4n",hidden:!0},{type:"boolean",value:r.getBool(),description:"Control group 5b",hidden:!0},{type:"number",value:r.getInt(),description:"Control group 5n",hidden:!0}];return{light:n,heavy:i,speed:p,options:j,bools:s.bools}}generateXML(t){t.addSection("stats"),t.addKey("version","FIXED","2.01","stats"),r.reset();for(let e=0;e<6;e++)r.addInt(s.light[e].value);r.addInt(v(1,500)),r.addInt(this.VERSION),t.addKey("lightData","STRING",this.storageToSC(),"stats"),r.reset();for(let e=0;e<10;e++)s.heavy[e].type=="number"?r.addInt(s.heavy[e].value):r.addBool(s.heavy[e].value);r.addInt(v(1,500)),r.addInt(this.VERSION),t.addKey("heavyData","STRING",this.storageToSC(),"stats"),r.reset();for(let e=0;e<6;e++)for(let n=0;n<3;n++)for(let i=0;i<6;i++)r.addInt(_(i<4?s.speed[e][n][0].value:s.speed[e][n][1].value));r.addInt(v(1,500)),r.addInt(this.VERSION),t.addKey("speedrunsData","STRING",this.storageToSC(),"stats"),r.reset();for(let e=0;e<6;e++)e>0&&e<5?r.addBool(s.options[e].value):r.addInt(s.options[e].value);for(let e=0;e<10;e+=2)r.addBool(s.options[e+6].value),r.addInt(s.options[e+7].value);return t.addKey("options","STRING",r.data,"stats"),t.sort(),t.updateSignature(),t.getAsString()}recryptAchives(){const t=[0,0,0,0,0];for(let e=0;e<6;e++)for(let n=0;n<14;n++)s.bools[n].flags[e].value==!0&&(t[s.bools[n].part]^=1<<e+6*s.bools[n].offset);for(let e=0;e<6;e++)for(let n=14;n<17;n++)s.bools[n].flags[e].value==!0&&(t[4]^=1<<e+6*s.bools[n].part);for(let e=0;e<4;e++)s.updateAt("heavy",e+3,t[e],!0);s.updateAt("heavy",7,t[4],!0)}updateKey(t){this._scKey=t+this.STARCODE_PART}storageToSC(){return I.encrypt(I.addHash(I.compress(r.data),this.STARCODE_HASH),this._scKey)}reloadStorage(t,e,n="stats"){let i=I.decrypt(t.getKey(e,n).value,this._scKey);if(!I.validate(i,this.STARCODE_HASH))throw new Error("Invaliid data in "+n+" → "+e+"!");i=I.decompress(I.removeHash(i,this.STARCODE_HASH)),r.data=i}makeSixBoolsFor(t){const e=["Easy","Normal","Hard","Brutal","Insane","Hardcore"],n=[];for(let i=0;i<6;i++)n.push({type:"boolean",value:Math.random()>.5,description:t+" "+e[i]});return n}}const x=new $,J=c=>{const t=c.array[0].description.split(" ")[0],e={onChange:h.useCallback((n,i)=>{c.onChange(c.i,i,n)},[])};return o.jsxs(g,{style:{flexDirection:"row",justifyContent:"space-between",width:"200px"},children:[o.jsx(m,{children:t+":"}),o.jsx(g,{style:{flexDirection:"row",justifyContent:"flex-end"},children:c.array.map((n,i)=>o.jsx(k,{index:i,onChange:e.onChange,value:n.value,style:{margin:"4px -3px -4px -3px"}},i))})]})},Q=E.memo(J),Y=c=>{const t={onFieldChange:h.useCallback((e,n)=>{c.onChange(c.i,c.j,n,e)},[])};return o.jsxs(g,{style:{flexDirection:"column"},children:[c.j>0?o.jsx("div",{style:{height:"1px"}}):null,o.jsx(g,{style:{flexDirection:"column"},children:c.array.map((e,n)=>e.hidden?null:o.jsx(D,{index:n,type:"text",style:{width:"70px"},onChange:t.onFieldChange,value:e.value.toString()},n))})]})},Z=E.memo(Y),ee=c=>{let t;switch(c.i){case 0:t="Easy";break;case 1:t="Normal";break;case 2:t="Hard";break;case 3:t="Brutal";break;case 4:t="Insane";break;case 5:t="Hardcore";break}return o.jsxs(g,{style:{flexDirection:"column"},children:[o.jsx(m,{children:t+":"}),o.jsx(g,{style:{flexDirection:"column"},children:c.array.map((e,n)=>o.jsx(Z,{onChange:c.onChange,array:e,i:c.i,j:n},n))})]})},te=E.memo(ee),oe=K(c=>{const{accountStore:t,menuStore:e,mapStore:n,modalStore:i}=L(),[p,j]=h.useState(c.bankName),[d,C]=h.useState(w.get(A.SWARM_SCPECIAL_FORCES).authorID),u=w.get(A.SWARM_SCPECIAL_FORCES).title,y=h.useMemo(()=>new X(p,d,e.playerID,"1"),[t.current,e.playerID,p,d]);h.useEffect(()=>{x.updateKey(e.playerID)},[y]),h.useEffect(()=>{var l;const a=(l=n.list[t.current])==null?void 0:l[u];setTimeout(a?()=>s.setFields(a):()=>{s.reset(),s.setFields(x.generateDefault())})},[t.current]);const b=()=>{n.setMapData(t.current,u,{light:s.light,heavy:s.heavy,speed:s.speed,options:s.options,bools:s.bools})},f={onBankNameChange:h.useCallback(a=>{j(a)},[]),onAuthorIdChange:h.useCallback(a=>{C(a)},[]),onFileDrop:h.useCallback((a,l)=>{const S=x.parse(y,l);S&&(T.flushSync(()=>s.setFields()),s.setFields(S))},[]),onDownloadClick:h.useCallback(()=>{if(e.playerID.split("-").length!=4){i.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}x.recryptAchives(),W(x.generateXML(y),p+".SC2Bank",!0),e.autoSave||b()},[y]),onCopyCodeClick:h.useCallback(()=>{if(e.playerID.split("-").length!=4){i.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}x.recryptAchives(),V(x.generateXML(y),!0),e.autoSave||b()},[y]),onResetClick:h.useCallback(()=>{j(c.bankName),C(w.get(A.SWARM_SCPECIAL_FORCES).authorID),T.flushSync(()=>s.reset()),s.setFields(x.generateDefault())},[]),onFieldChange:h.useCallback((a,l,S)=>{switch(S){case"lightData":s.updateAt("light",l,parseInt(a),!0);break;case"heavyData":s.updateAt("heavy",l,s.heavy[l].type=="number"?parseInt(a):a,!0);break;case"options":s.updateAt("options",l,s.heavy[l].type=="number"?parseInt(a):a,!0);break}e.autoSave&&b()},[]),onSpeedrunsChange:h.useCallback((a,l,S,O)=>{s.updateAt("speed",{i:a,j:l,k:S},O,!0),e.autoSave&&b()},[]),onBoolsChange:h.useCallback((a,l,S)=>{s.updateAt("bools",{i:a,j:l},S,!0),e.autoSave&&b()},[])},R=h.useMemo(()=>o.jsxs(o.Fragment,{children:[o.jsx(m,{children:"Please note that the map has a votekick system."}),o.jsxs(G,{style:{width:"1000px"},children:["If other players suspect inconsistencies in your stats or values like 9999999, you can be kicked from the lobby.",o.jsx("br",{}),"To prevent this, use ",o.jsx("b",{children:"Reset"})," button to generate random realistic statistics.",o.jsx("br",{})]})]}),[]),B=h.useMemo(()=>o.jsxs(o.Fragment,{children:[o.jsx(m,{children:"Main stats:"}),o.jsxs(g,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},children:[o.jsx(g,{style:{flexDirection:"column"},alignInputs:!0,children:s.light.map((a,l)=>a.hidden?null:o.jsx(D,{label:a.description+":",index:l,group:"lightData",type:"number",min:"0",style:{width:"75px"},onChange:f.onFieldChange,max:"999999999",value:a.value.toString()},l))}),o.jsx(g,{style:{flexDirection:"column"},alignInputs:!0,children:s.heavy.map((a,l)=>a.hidden?null:a.type=="number"?o.jsx(D,{label:a.description+":",index:l,group:"heavyData",type:"number",min:"0",style:{width:"75px"},onChange:f.onFieldChange,max:"999999999",value:a.value.toString()},l):o.jsx(k,{label:a.description+":",index:l,group:"heavyData",onChange:f.onFieldChange,value:a.value},l))})]})]}),[s.light,s.heavy]),M=h.useMemo(()=>o.jsxs(o.Fragment,{children:[o.jsx(m,{style:{marginTop:"15px"},children:"Options:"}),o.jsx(g,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:s.options.map((a,l)=>a.hidden?null:a.type=="number"?o.jsx(D,{label:a.description+":",index:l,group:"options",type:"number",min:"0",style:{width:"30px"},onChange:f.onFieldChange,max:"999",value:a.value.toString()},l):o.jsx(k,{label:a.description+":",index:l,group:"options",onChange:f.onFieldChange,value:a.value},l))})]}),[s.options]),H=h.useMemo(()=>o.jsxs(o.Fragment,{children:[o.jsx(m,{children:"Speedruns:"}),o.jsxs(g,{style:{flexDirection:"row",border:"1px solid #ffffff40",padding:"10px"},children:[o.jsxs(g,{style:{flexDirection:"column",marginTop:"5px"},children:[o.jsx(m,{style:{marginTop:"40px"},children:"Terran:"}),o.jsx(m,{style:{marginTop:"57px"},children:"Protoss:"}),o.jsx(m,{style:{marginTop:"57px"},children:"Mecha:"})]}),o.jsxs(g,{style:{flexDirection:"column",margin:"32px 0 0 20px"},children:[o.jsx(m,{children:"Solo:"}),o.jsx(m,{children:"Team:"}),o.jsx(m,{style:{marginTop:"28px"},children:"Solo:"}),o.jsx(m,{children:"Team:"}),o.jsx(m,{style:{marginTop:"30px"},children:"Solo:"}),o.jsx(m,{children:"Team:"})]}),o.jsx(o.Fragment,{children:s.speed.map((a,l)=>o.jsx(te,{onChange:f.onSpeedrunsChange,array:a,i:l},l))})]})]}),[s.speed]),N=h.useMemo(()=>o.jsxs(o.Fragment,{children:[o.jsx(m,{children:"Achives (Easy, Normal, Hard, Brutal, Insane, Hardcore):"}),o.jsx(g,{style:{flexFlow:"column wrap",justifyContent:"space-around",border:"1px solid #ffffff40",maxHeight:"200px"},children:s.bools.map((a,l)=>{var S;return(S=a.flags)!=null&&S.length?o.jsx(Q,{onChange:f.onBoolsChange,array:a.flags,i:l},l):null})})]}),[s.bools]);return o.jsx(U,{bankName:p,authorID:d,onBankNameChange:f.onBankNameChange,onAuthorIdChange:f.onAuthorIdChange,onFileDrop:f.onFileDrop,onDownload:f.onDownloadClick,onCopy:f.onCopyCodeClick,onReset:f.onResetClick,children:o.jsxs(g,{style:{flexDirection:"column"},children:[R,o.jsxs(g,{style:{flexDirection:"row"},children:[o.jsxs(g,{style:{flexDirection:"column"},children:[B,M]}),o.jsxs(g,{style:{flexDirection:"column"},children:[H,N]})]})]})})}),ae=E.memo(oe);export{ae as default};
