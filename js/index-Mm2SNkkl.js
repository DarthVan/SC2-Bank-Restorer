import{a as D,R as x,o as L,u as F,r,m as h,M as j,b as C,d as A,c as M,j as i,C as u,L as T,I as P,f as R,E as B}from"./index-CL-HGexv.js";import{B as w}from"./index-Bil1CS0X.js";/*!
 * sc2-bank-generator v.1.1.8
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/zombie-world-unity/store.ts
 * sc2-bank-generator/src/components/maps/zombie-world-unity/functions.ts
 * sc2-bank-generator/src/components/maps/zombie-world-unity/index.tsx
 *
 * Сompiled on Tue, 26 Nov 2024 20:00:22 UTC
 */class G{constructor(){this.init(),D(this)}setFields(e){this.params=e?[...e]:[]}updateAt(e,s,o){if(o){this.params[e].value=s;return}const d=[...this.params];d[e].value=s,this.params=d}reset(){this.init()}init(){this.params=[{type:"number",value:16999,description:"Waves"},{type:"number",value:45e3,description:"Talent points"},{type:"boolean",value:!0,description:"Fill all talents"},{type:"boolean",value:!0,description:"Get all challenges"},{type:"boolean",value:!0,description:"Upgrade all units"},{type:"number",value:15e8,description:"Assassin"},{type:"number",value:15e8,description:"Builder"},{type:"number",value:15e8,description:"Singletarget"},{type:"number",value:15e8,description:"Specialist"},{type:"number",value:15e8,description:"Splash"},{type:"number",value:15e8,description:"Support"},{type:"number",value:15e8,description:"Tank"}]}}const t=new G;class E{generateXML(e){e.addKey("wave","INT",t.params[0].value,"number"),e.addKey("assassinkills","INT",t.params[5].value,"jjj"),e.addKey("assassinkills","INT",t.params[5].value,"jj"),e.addKey("builderkills","INT",t.params[6].value,"jjj"),e.addKey("builderkills","INT",t.params[6].value,"jj"),e.addKey("singletargetkills","INT",t.params[7].value,"jjj"),e.addKey("singletargetkills","INT",t.params[7].value,"jj"),e.addKey("specialistkills","INT",t.params[8].value,"jjj"),e.addKey("specialistkills","INT",t.params[8].value,"jj"),e.addKey("splashkills","INT",t.params[9].value,"jjj"),e.addKey("splashkills","INT",t.params[9].value,"jj"),e.addKey("supportkills","INT",t.params[10].value,"jjj"),e.addKey("supportkills","INT",t.params[10].value,"jj"),e.addKey("tankkills","INT",t.params[11].value,"jjj"),e.addKey("tankkills","INT",t.params[11].value,"jj"),t.params[4].value?(e.addKey("adeptstage","INT",4,"j"),e.addKey("archonstage","INT",9,"j"),e.addKey("dtstage","INT",0,"j"),e.addKey("dynomito","INT",9,"j"),e.addKey("elecstage","INT",0,"j"),e.addKey("goliathstage","INT",10,"j"),e.addKey("highstage","INT",0,"j"),e.addKey("hotshotstage","INT",3,"j"),e.addKey("hybridstage","INT",9,"j"),e.addKey("immostage","INT",0,"j"),e.addKey("marinestage","INT",9,"j"),e.addKey("medicstage","INT",9,"j"),e.addKey("paragon","INT",0,"j"),e.addKey("paragond","INT",0,"j"),e.addKey("metalmans","INT",9,"j"),e.addKey("reaperstage","INT",9,"j"),e.addKey("scvstage","INT",9,"j"),e.addKey("siegestage","INT",0,"j"),e.addKey("sniperstage","INT",9,"j"),e.addKey("specstage","INT",0,"j"),e.addKey("stalkerstage","INT",9,"j"),e.addKey("tempstage","INT",0,"j"),e.addKey("thorstage","INT",0,"j"),e.addKey("vultures","INT",9,"j"),e.addKey("KillReducerForBounty","FLAG",!0,"j"),e.addKey("unlockhero","FLAG",!0,"j"),e.addKey("UnlockHydralisk2","FLAG",!0,"j")):e.removeSection("j"),t.params[3].value?(e.addKey("GCLInfantry","INT",100,"Challenges"),e.addKey("GCLTeamGame","INT",100,"Challenges"),e.addKey("GCLConstructor","INT",100,"Challenges"),e.addKey("GCLShieldProblems","INT",100,"Challenges"),e.addKey("GCLNext2Ded","INT",100,"Challenges"),e.addKey("GCLWarpSpeed","INT",100,"Challenges"),e.addKey("GCLTorture","INT",100,"Challenges"),e.addKey("CLEvasive","FLAG",!0,"Challenges")):e.removeSection("Challenges");const s=t.params[1].value;return e.addKey("PlayerID","INT",s*5,"PlayerIDNumber"),t.params[2].value?(this.setTPKey("DamagePoints",100,s,e),this.setTPKey("MoveSpeedPoints",10,s,e),this.setTPKey("LifePoints",100,s,e),this.setTPKey("LifeRegenPoints",100,s,e),this.setTPKey("LifeArmorBonusPoints",10,s,e),this.setTPKey("LifeArmorMultiplyPoints",10,s,e),this.setTPKey("ShieldPoints",100,s,e),this.setTPKey("ShieldRegenerationPoints",100,s,e),this.setTPKey("ShieldArmorBonusPoints",10,s,e),this.setTPKey("ShieldArmorMultiplyPoints",10,s,e),this.setTPKey("EnergyPoints",10,s,e),this.setTPKey("EnergyRegenPoints",10,s,e),this.setTPKey("CooldownPoints",25,s,e),this.setTPKey("BuildPoints",25,s,e),this.setTPKey("DamageReductionPoints",10,s,e),this.setTPKey("MineralStartPoints",5e3,s,e),this.setTPKey("VespeneStartPoints",500,s,e),this.setTPKey("RespawnSpeedPoints",20,s,e),this.setTPKey("ExpPoints",100,s,e),this.setTPKey("MasteryPoints",15,s,e),e.addKey("Plays","INT",10*(505-(16+s)),"TP")):e.removeSection("TP"),e.addKey("InfoNumber","INT",s*(9999-(16+s)),"PlayerIDNumber"),e.sort(),e.updateSignature(),e.getAsString()}parse(e,s){return e.parse(s),e.sections.size<4||e.sections.get("jjj")==null||e.sections.get("jj")==null||e.sections.get("TP")==null||e.sections.get("PlayerIDNumber")==null?(console.error("Wrong bank file!"),null):[{type:"number",value:parseInt(e.getKey("wave","number").value),description:"Waves"},{type:"number",value:parseInt(e.getKey("PlayerID","PlayerIDNumber").value)/5,description:"Talent points"},{type:"boolean",value:t.params[2].value,description:"Fill all talents"},{type:"boolean",value:t.params[3].value,description:"Get all challanges"},{type:"boolean",value:t.params[4].value,description:"Upgrade all units"},{type:"number",value:parseInt(e.getKey("assassinkills","jjj").value),description:"Assassin kills"},{type:"number",value:parseInt(e.getKey("builderkills","jjj").value),description:"Builder kills"},{type:"number",value:parseInt(e.getKey("singletargetkills","jjj").value),description:"Singletarget kills"},{type:"number",value:parseInt(e.getKey("specialistkills","jjj").value),description:"Specialist kills"},{type:"number",value:parseInt(e.getKey("splashkills","jjj").value),description:"Splash kills"},{type:"number",value:parseInt(e.getKey("supportkills","jjj").value),description:"Support kills"},{type:"number",value:parseInt(e.getKey("tankkills","jjj").value),description:"Tank kills"}]}setTPKey(e,s,o,d){d.addKey(e,"INT",s*(999-(16+o)),"TP")}}const I=new E,W=L(y=>{const{accountStore:e,menuStore:s,mapStore:o,modalStore:d}=F(),[c,K]=r.useState(y.bankName),[g,v]=r.useState(h.get(j.ZOMBIE_WORLD_UNITY).authorID),N=h.get(j.ZOMBIE_WORLD_UNITY).title,p=r.useMemo(()=>new w(c,g,s.playerID,"1"),[e.current,s.playerID,c,g]),m=()=>{o.setMapData(e.current,N,t.params)};r.useEffect(()=>{var a;const l=(a=o.list[e.current])==null?void 0:a[N];setTimeout(l?()=>t.setFields(l):n.onResetClick)},[e.current]);const n={onBankNameChange:r.useCallback(l=>{K(l)},[]),onAuthorIdChange:r.useCallback(l=>{v(l)},[]),onFileDrop:r.useCallback((l,a)=>{const f=I.parse(p,a);f&&(C.flushSync(()=>t.setFields()),t.setFields(f))},[]),onDownloadClick:r.useCallback(()=>{if(s.playerID.split("-").length!=4){d.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}A(I.generateXML(p),c+".SC2Bank"),s.autoSave||m()},[p]),onCopyCodeClick:r.useCallback(()=>{if(s.playerID.split("-").length!=4){d.setModal("WARN","This map requires a player id to generate valid bank! Use Help for details.");return}M(I.generateXML(p)),s.autoSave||m()},[p]),onResetClick:r.useCallback(()=>{K(y.bankName),v(h.get(j.ZOMBIE_WORLD_UNITY).authorID),C.flushSync(()=>t.setFields()),t.reset()},[]),onFieldChange:r.useCallback((l,a)=>{t.updateAt(a,t.params[a].type=="number"?parseInt(l):l,!0),s.autoSave&&m()},[])},S=r.useMemo(()=>i.jsxs(u,{style:{flexDirection:"row"},children:[i.jsxs(u,{style:{flexDirection:"column"},children:[i.jsx(T,{children:"Stats:"}),i.jsx(u,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:t.params.map((l,a)=>l.hidden?null:a<2?i.jsx(P,{label:l.description+":",index:a,type:"number",min:"0",style:{width:"40px"},onChange:n.onFieldChange,max:a==0?"16999":"45000",value:l.value.toString()},a):null)}),i.jsx(T,{style:{paddingTop:"24px"},children:"Options:"}),i.jsx(u,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:t.params.map((l,a)=>l.hidden?null:a>1&&a<5?i.jsx(R,{label:l.description+":",index:a,onChange:n.onFieldChange,value:l.value},a):null)})]}),i.jsxs(u,{style:{flexDirection:"column"},children:[i.jsx(T,{children:"Kills:"}),i.jsx(u,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:t.params.map((l,a)=>l.hidden?null:a>4?i.jsx(P,{label:l.description+":",index:a,type:"number",min:"0",style:{width:"80px"},onChange:n.onFieldChange,max:"1500000000",value:l.value.toString()},a):null)})]})]}),[t.params]);return i.jsx(B,{bankName:c,authorID:g,onBankNameChange:n.onBankNameChange,onAuthorIdChange:n.onAuthorIdChange,onFileDrop:n.onFileDrop,onDownload:n.onDownloadClick,onCopy:n.onCopyCodeClick,onReset:n.onResetClick,children:S})}),_=x.memo(W);export{_ as default};
