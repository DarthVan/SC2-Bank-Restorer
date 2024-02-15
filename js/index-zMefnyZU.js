/*!
 * sc2-bank-generator v.1.1.4
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/core/sc2/index.ts
 * sc2-bank-generator/src/utils/sha1.ts
 * sc2-bank-generator/src/core/bank/bank.ts
 * sc2-bank-generator/src/core/bank/bank-info.ts
 * sc2-bank-generator/src/core/bank/bank-key.ts
 * sc2-bank-generator/src/core/bank/bank-map.ts
 * sc2-bank-generator/src/core/bank/index.ts
 *
 * Сompiled on Thu, 15 Feb 2024 22:54:54 UTC
 */function O(...s){let t=o(s[0]);if(s.length==1)return t;for(let e=1;e<s.length;e++)t=o(t*o(s[e]));return t}function R(s,t){return o(o(s)/o(t))}function K(s){return o(Math.round(o(s)))}function W(s,t){return o(Math.pow(o(s),o(t)))}function k(s){return o(Math.pow(o(s%1048576),.5))}function q(s,t){return o(o(s)%o(t))}function H(s,t,e=!0){e||(s=s.toLowerCase(),t=t.toLowerCase());const r=s.indexOf(t);return r==-1?0:r+1}function $(s,t,e){const r=t-1,n=e<=0?void 0:e;return s.substring(r,n)}function J(s){return s.length}function Q(s,t){const e=s.split(" ");if(t<0||t>=e.length)throw new Error(`Invalid index: ${t}`);return e[t]}function B(s,t=4){let e=1;for(;t-- >0;)e*=10;return(Math.floor(s*e+.1)/e).toString()}Array.from({length:5},()=>Array(5).fill(0));function o(s){return L(s,4096)}function L(s,t=4096){return Math.floor(s*t)/t}const F=Math.pow(2,24),V=Math.pow(2,32);function w(s){let t="";for(let e=7;e>=0;--e){const r=s>>>(e<<2)&15;t+=r.toString(16)}return t}function T(s,t){return s<<t|s>>>32-t}class j{constructor(t){this.bytes=new Uint8Array(t<<2)}get(t){return t<<=2,this.bytes[t]*F+(this.bytes[t+1]<<16|this.bytes[t+2]<<8|this.bytes[t+3])}set(t,e){const r=Math.floor(e/F),n=e-r*F;t<<=2,this.bytes[t]=r,this.bytes[t+1]=n>>16,this.bytes[t+2]=n>>8&255,this.bytes[t+3]=n&255}}function U(s){s=s.replace(/[\u0080-\u07ff]/g,function(r){const n=r.charCodeAt(0);return String.fromCharCode(192|n>>6,128|n&63)}),s=s.replace(/[\u0080-\uffff]/g,function(r){const n=r.charCodeAt(0);return String.fromCharCode(224|n>>12,128|n>>6&63,128|n&63)});const t=s.length,e=new Uint8Array(t);for(let r=0;r<t;++r)e[r]=s.charCodeAt(r);return e.buffer}function X(s){let t;s instanceof ArrayBuffer?t=s:t=U(String(s));const e=t.byteLength,r=e<<3,n=r+65,m=Math.ceil(n/512)<<9>>>3>>>2,f=new j(m),d=f.bytes,c=new Uint32Array(80),I=new Uint8Array(t);let p=1732584193,A=4023233417,v=2562383102,N=271733878,C=3285377520,u,i;for(u=0;u<e;++u)d[u]=I[u];for(d[e]=128,f.set(m-2,Math.floor(r/V)),f.set(m-1,r&4294967295),u=0;u<m;u+=16){for(i=0;i<16;++i)c[i]=f.get(u+i);for(;i<80;++i)c[i]=T(c[i-3]^c[i-8]^c[i-14]^c[i-16],1);let M=p,h=A,g=v,_=N,D=C,b,y,x;for(i=0;i<80;++i)i<20?(b=h&g|~h&_,y=1518500249):i<40?(b=h^g^_,y=1859775393):i<60?(b=h&g^h&_^g&_,y=2400959708):(b=h^g^_,y=3395469782),x=T(M,5)+b+D+y+c[i]&4294967295,D=_,_=g,g=T(h,30),h=M,M=x;p=p+M&4294967295,A=A+h&4294967295,v=v+g&4294967295,N=N+_&4294967295,C=C+D&4294967295}return w(p)+w(A)+w(v)+w(N)+w(C)}class Y{constructor(t,e,r,n){this._info=new G(t,e,r),this._version=n||"1",this.init()}parse(t){let e=null;const r=new DOMParser;try{if(typeof t=="string")e=r.parseFromString(t,"text/xml").firstElementChild;else throw new Error("Received data is not valid xml!")}catch{throw new Error("Received data is not valid xml!")}if(e==null)return;this._version=e.getAttribute("version"),e.firstChild.nodeName=="Bank"&&(e=e.firstElementChild),this._sections.clear();const n=e.getElementsByTagName("Section");for(let a=0;a<n.length;a++){const S=new E(n[a].getAttribute("name")),m=n[a].getElementsByTagName("Key");for(let f=0;f<m.length;f++){const d=m[f],c=d.getAttribute("name"),I=d.firstElementChild.attributes.item(0).name,p=d.firstElementChild.getAttribute(I);S.set(c,new P(c,I,p))}this._sections.set(S.name,S)}this._signature=null;try{this._signature=e.getElementsByTagName("Signature")[0].getAttribute("value")}catch{this._signature=null}}addSection(t){return this._sections.has(t)||this._sections.set(t,new E(t)),this._sections.get(t)}addKey(t,e,r,n){const a=this.addSection(n);switch(typeof r){case"boolean":r=r?"1":"0";break;case"number":r=r.toString();break;case"string":break;case"object":e=="POINT"&&(r=B(r.x)+","+B(r.y));break}return a.has(t)?a.get(t).update(r):a.set(t,new P(t,l[e],r)),a.get(t)}getKey(t,e){return this._sections.has(e)?this._sections.get(e).get(t):null}removeSection(t){return this._sections.delete(t)}removeKey(t,e){return this._sections.has(e)?this._sections.get(e).delete(t):!1}sort(){this._sections.forEach(t=>{this._sections.set(t.name,t.sort(),!0)}),this._sections=this._sections.sort()}getAsString(){let t=`<?xml version="1.0" encoding="utf-8"?>
<Bank version="`+this._version+`">
`;return this._sections.forEach(e=>{t+='	<Section name="'+e.name+`">
`,e.forEach(r=>{t+='		<Key name="'+r.name+`">
`,t+="			<Value "+r.type+'="'+r.stringValue+`"/>
`,t+=`		</Key>
`}),t+=`	</Section>
`}),this._signature&&(t+='	<Signature value="'+this._signature+`"/>
`),t+="</Bank>",t}updateSignature(){let t="";return t+=this._info.authorID,t+=this._info.playerID,t+=this._info.bankName,this._sections.forEach(e=>{t+=e.name,e.forEach(r=>{t+=r.name,t+="Value",t+=r.type,r.type!=l.TEXT&&(t+=r.stringValue)})}),this._signature=X(t).toUpperCase()}async openFile(t,e){const r=new XMLHttpRequest;r.onreadystatechange=()=>{r.readyState==4&&r.status==200&&(this.parse.call(this,r.response),e&&e())},r.open("GET",t,!0),r.send()}get info(){return this._info}get sections(){return this._sections}get signature(){return this._signature}get version(){return this._version}init(){this._sections=new E("Sections")}}class G{constructor(t,e,r){this._bankName=t,this._authorID=e,this._playerID=r}getAuthorNumber(){return parseInt(this._authorID.split("-")[3])}getPlayerNumber(){return parseInt(this._playerID.split("-")[3])}get bankName(){return this._bankName}get authorID(){return this._authorID}get playerID(){return this._playerID}}class P{constructor(t,e,r){this._name=t,this._type=e,this._value=r}update(t){this._value=t}get name(){return this._name}get type(){return this._type}get value(){switch(this._type){case l.STRING:return this._value;case l.TEXT:return this._value;case l.INT:return parseInt(this._value);case l.FLAG:return this._value=="1";case l.FIXED:return parseFloat(this._value);case l.POINT:const t=this._value.split(",");return{x:parseFloat(t[0]),y:parseFloat(t[1])}}return null}get stringValue(){return this._value}}class E extends Map{constructor(t,e){super(e),this._name=t}set(t,e,r=!1){return r||this.isValidName(e.name,t),super.set(t,e)}sort(){const t=new Intl.Collator("en",{numeric:!0,sensitivity:"base"});return new E(this._name,[...this.entries()].sort((e,r)=>t.compare(e[0],r[0])))}clear(){super.clear()}get name(){return this._name}isValidName(t,e){if(e&&e!=t)throw new Error("BankMap: Error! Key "+e+" and BankName are different!");return this.forEach((r,n)=>{if(n==t)throw new Error("BankMap: Error! Name "+t+" already used!")}),!0}}var l=(s=>(s.INT="int",s.FIXED="fixed",s.STRING="string",s.FLAG="flag",s.TEXT="text",s.POINT="point",s))(l||{});export{Y as B,J as a,H as b,Q as c,q as d,R as e,K as f,O as g,k as h,B as i,W as j,$ as s};
