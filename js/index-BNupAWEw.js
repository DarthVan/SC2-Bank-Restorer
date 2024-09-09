/*!
 * sc2-bank-generator v.1.1.8
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
 * Сompiled on Mon, 09 Sep 2024 08:44:29 UTC
 */function G(...s){let t=u(s[0]);if(s.length==1)return t;for(let e=1;e<s.length;e++)t=u(t*u(s[e]));return t}function R(s,t){return u(u(s)/u(t))}function K(s){return u(Math.round(u(s)))}function W(s,t){return u(Math.pow(u(s),u(t)))}function q(s){return u(Math.pow(u(s%1048576),.5))}function H(s,t){return u(u(s)%u(t))}function $(s,t,e=!0){e||(s=s.toLowerCase(),t=t.toLowerCase());const r=s.indexOf(t);return r==-1?0:r+1}function J(s,t,e){const r=t-1,n=e<=0?void 0:e;return s.substring(r,n)}function Q(s){return s.length}function Y(s,t){const e=s.split(" ");if(t<0||t>=e.length)throw new Error(`Invalid index: ${t}`);return e[t]}function x(s,t=4){let e=1;for(;t-- >0;)e*=10;return(Math.floor(s*e+.1)/e).toString()}Array.from({length:5},()=>Array(5).fill(0));function u(s){return P(s,4096)}function P(s,t=4096){return Math.floor(s*t)/t}const T=Math.pow(2,24),V=Math.pow(2,32);function I(s){let t="";for(let e=7;e>=0;--e){const r=s>>>(e<<2)&15;t+=r.toString(16)}return t}function F(s,t){return s<<t|s>>>32-t}class L{constructor(t){this.bytes=new Uint8Array(t<<2)}get(t){return t<<=2,this.bytes[t]*T+(this.bytes[t+1]<<16|this.bytes[t+2]<<8|this.bytes[t+3])}set(t,e){const r=Math.floor(e/T),n=e-r*T;t<<=2,this.bytes[t]=r,this.bytes[t+1]=n>>16,this.bytes[t+2]=n>>8&255,this.bytes[t+3]=n&255}}function X(s){s=s.replace(/[\u0080-\u07ff]/g,function(r){const n=r.charCodeAt(0);return String.fromCharCode(192|n>>6,128|n&63)}),s=s.replace(/[\u0080-\uffff]/g,function(r){const n=r.charCodeAt(0);return String.fromCharCode(224|n>>12,128|n>>6&63,128|n&63)});const t=s.length,e=new Uint8Array(t);for(let r=0;r<t;++r)e[r]=s.charCodeAt(r);return e.buffer}function j(s){let t;s instanceof ArrayBuffer?t=s:t=X(String(s));const e=t.byteLength,r=e<<3,n=r+65,y=Math.ceil(n/512)<<9>>>3>>>2,_=new L(y),b=_.bytes,h=new Uint32Array(80),E=new Uint8Array(t);let m=1732584193,c=4023233417,w=2562383102,f=271733878,S=3285377520,l,i;for(l=0;l<e;++l)b[l]=E[l];for(b[e]=128,_.set(y-2,Math.floor(r/V)),_.set(y-1,r&4294967295),l=0;l<y;l+=16){for(i=0;i<16;++i)h[i]=_.get(l+i);for(;i<80;++i)h[i]=F(h[i-3]^h[i-8]^h[i-14]^h[i-16],1);let C=m,g=c,d=w,p=f,M=S,N,v,O;for(i=0;i<80;++i)i<20?(N=g&d|~g&p,v=1518500249):i<40?(N=g^d^p,v=1859775393):i<60?(N=g&d^g&p^d&p,v=2400959708):(N=g^d^p,v=3395469782),O=F(C,5)+N+M+v+h[i]&4294967295,M=p,p=d,d=F(g,30),g=C,C=O;m=m+C&4294967295,c=c+g&4294967295,w=w+d&4294967295,f=f+p&4294967295,S=S+M&4294967295}return I(m)+I(c)+I(w)+I(f)+I(S)}class Z{constructor(t,e,r,n){this._info=new U(t,e,r),this._version=n||"1",this.init()}parse(t){let e=null;const r=new DOMParser;try{if(typeof t=="string")e=r.parseFromString(t,"text/xml").firstElementChild;else throw new Error("Received data is not valid xml!")}catch{throw new Error("Received data is not valid xml!")}if(e==null)return;this._version=e.getAttribute("version"),e.firstChild.nodeName=="Bank"&&(e=e.firstElementChild),this._sections.clear();const n=e.getElementsByTagName("Section");for(let o=0;o<n.length;o++){const D=new A(n[o].getAttribute("name")),y=n[o].getElementsByTagName("Key");for(let _=0;_<y.length;_++){const b=y[_],h=b.getAttribute("name");let E,m;const c=b.children;if(c[0]&&c[0].nodeName!="Value"){E=a.NODES;const w=[];for(let f=0;f<c.length;f++){const S=c[f].nodeName,l=c[f].attributes.item(0).name,i=c[f].getAttribute(l);w.push({name:S,type:l,value:i})}m=w}else E=b.firstElementChild.attributes.item(0).name,m=b.firstElementChild.getAttribute(E);D.set(h,new B(h,E,m))}this._sections.set(D.name,D)}this._signature=null;try{this._signature=e.getElementsByTagName("Signature")[0].getAttribute("value")}catch{this._signature=null}}addSection(t){return this._sections.has(t)||this._sections.set(t,new A(t)),this._sections.get(t)}addKey(t,e,r,n){const o=this.addSection(n);switch(typeof r){case"boolean":r=r?"1":"0";break;case"number":r=r.toString();break;case"string":break;case"object":e=="POINT"&&(r=x(r.x)+","+x(r.y));break}return o.has(t)?o.get(t).update(r):o.set(t,new B(t,a[e],r)),o.get(t)}getKey(t,e){return this._sections.has(e)?this._sections.get(e).get(t):null}removeSection(t){return this._sections.delete(t)}removeKey(t,e){return this._sections.has(e)?this._sections.get(e).delete(t):!1}sort(){this._sections.forEach(t=>{t.forEach(e=>{e.type==a.NODES&&e.sortNodes()}),this._sections.set(t.name,t.sort(),!0)}),this._sections=this._sections.sort()}getAsString(){let t=`<?xml version="1.0" encoding="utf-8"?>
<Bank version="`+this._version+`">
`;return this._sections.forEach(e=>{t+='	<Section name="'+e.name+`">
`,e.forEach(r=>{t+='		<Key name="'+r.name+`">
`,r.type==a.NODES?t+=r.stringValue:t+="			<Value "+r.type+'="'+r.stringValue+`"/>
`,t+=`		</Key>
`}),t+=`	</Section>
`}),this._signature&&(t+='	<Signature value="'+this._signature+`"/>
`),t+="</Bank>",t}updateSignature(){let t="";return t+=this._info.authorID,t+=this._info.playerID,t+=this._info.bankName,this._sections.forEach(e=>{t+=e.name,e.forEach(r=>{if(t+=r.name,r.type==a.NODES){const n=r.value;for(let o=0;o<n.length;o++)t+=n[o].name+n[o].type,n[o].type!=a.TEXT&&(t+=n[o].value)}else t+="Value",t+=r.type,r.type!=a.TEXT&&(t+=r.stringValue)})}),this._signature=j(t).toUpperCase()}async openFile(t,e){const r=new XMLHttpRequest;r.onreadystatechange=()=>{r.readyState==4&&r.status==200&&(this.parse.call(this,r.response),e&&e())},r.open("GET",t,!0),r.send()}get info(){return this._info}get sections(){return this._sections}get signature(){return this._signature}get version(){return this._version}init(){this._sections=new A("Sections")}}class U{constructor(t,e,r){this._bankName=t,this._authorID=e,this._playerID=r}getAuthorNumber(){return parseInt(this._authorID.split("-")[3])}getPlayerNumber(){return parseInt(this._playerID.split("-")[3])}get bankName(){return this._bankName}get authorID(){return this._authorID}get playerID(){return this._playerID}}class B{constructor(t,e,r){this._name=t,this._type=e,this._value=r}update(t){this._value=t}get name(){return this._name}get type(){return this._type}get value(){switch(this._type){case a.STRING:return this._value;case a.TEXT:return this._value;case a.INT:return parseInt(this._value);case a.FLAG:return this._value=="1";case a.FIXED:return parseFloat(this._value);case a.POINT:const t=this._value.split(",");return{x:parseFloat(t[0]),y:parseFloat(t[1])};case a.NODES:return this._value}return null}get stringValue(){if(this.type==a.NODES){const t=this.value;let e="";for(let r=0;r<t.length;r++)e+="			<"+t[r].name+" "+t[r].type+'="'+t[r].value+`"/>
`;return e}return String(this._value)}sortNodes(){if(this.type!=a.NODES)return;const t=new Intl.Collator("en",{ignorePunctuation:!0});this.value.sort((e,r)=>t.compare(e.name,r.name))}}class A extends Map{constructor(t,e){super(e),this._name=t}set(t,e,r=!1){return r||this.isValidName(e.name,t),super.set(t,e)}sort(){const t=new Intl.Collator("en",{ignorePunctuation:!0});return new A(this._name,[...this.entries()].sort((e,r)=>t.compare(e[0],r[0])))}clear(){super.clear()}get name(){return this._name}isValidName(t,e){if(e&&e!=t)throw new Error("BankMap: Error! Key "+e+" and BankName are different!");return this.forEach((r,n)=>{if(n==t)throw new Error("BankMap: Error! Name "+t+" already used!")}),!0}}var a=(s=>(s.INT="int",s.FIXED="fixed",s.STRING="string",s.FLAG="flag",s.TEXT="text",s.POINT="point",s.NODES="nodes",s))(a||{});export{Z as B,Q as a,$ as b,Y as c,H as d,R as e,K as f,G as g,q as h,x as i,W as j,J as s};
