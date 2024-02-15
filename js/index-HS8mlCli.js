import{a as n1,R as r1,o as l1,u as o1,r as I,m as O,M as P,b as z,d as s1,c as a1,j as _,C as G,e as u1,L as W,f as c1,I as d1,E as g1}from"./index-jw30AxZG.js";import{s as A,a as H,b as q,c as V,B as f1}from"./index-2Iz74nhv.js";/*!
 * sc2-bank-generator v.1.1.4
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/components/maps/exodus-3/crypto.ts
 * sc2-bank-generator/src/components/maps/exodus-3/store.ts
 * sc2-bank-generator/src/components/maps/exodus-3/functions.ts
 * sc2-bank-generator/src/components/maps/exodus-3/index.tsx
 *
 * Сompiled on Thu, 15 Feb 2024 22:31:30 UTC
 */const e1=16,w=new Uint8Array(e1);let x=0;const j=new Uint8Array(4096),v=new Array(16),l=new Array(255),e=new Uint8Array(256),t=new Uint8Array(256),C=new Uint8Array(11),p1=`\x07\b	
\v\f\r\x1B !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ`;function S1(n,r){return q(p1,A(n,r+1,r+1),!0)}function m1(n){return l[n]}const L="0123456789abcdef";function _1(n){const r=A(n,1,1),a=A(n,2,2),d=q(L,r,!1)-1,o=q(L,a,!1)-1;return d*16+o}function X(n){return v[n]}function t1(n){let r="";return r+=X((n&240)>>4),r+=X(n&15),r}const Y=4,k=4,B=10,u=[new Uint8Array(4),new Uint8Array(4),new Uint8Array(4),new Uint8Array(4)],h=new Uint8Array(256);function U(n){return e[n]}function y1(n){return t[n]}function v1(){let n,r,a,d;const o=new Uint16Array(4);for(n=0;n<k;n+=1)h[n*4+0]=w[n*4+0],h[n*4+1]=w[n*4+1],h[n*4+2]=w[n*4+2],h[n*4+3]=w[n*4+3];for(n=4;n<44;n+=1)a=(n-1)*4,o[0]=h[a+0],o[1]=h[a+1],o[2]=h[a+2],o[3]=h[a+3],n%4==0&&(d=o[0],o[0]=o[1],o[1]=o[2],o[2]=o[3],o[3]=d,o[0]=U(o[0]),o[1]=U(o[1]),o[2]=U(o[2]),o[3]=U(o[3]),o[0]=o[0]^C[n/k]),r=n-4,a=(n-k)*4,h[r+0]=h[a+0]^o[0],h[r+1]=h[a+1]^o[1],h[r+2]=h[a+2]^o[2],h[r+3]=h[a+3]^o[3]}function K(n){for(let r=0;r<4;r+=1)for(let a=0;a<4;a+=1)u[r][a]^=h[n*Y*4+r*Y+a]}function Z(){for(let n=0;n<4;n+=1)for(let r=0;r<4;r+=1)u[r][n]=U(u[r][n])}function J(){let n;n=u[0][1],u[0][1]=u[1][1],u[1][1]=u[2][1],u[2][1]=u[3][1],u[3][1]=n,n=u[0][2],u[0][2]=u[2][2],u[2][2]=n,n=u[1][2],u[1][2]=u[3][2],u[3][2]=n,n=u[0][3],u[0][3]=u[3][3],u[3][3]=u[2][3],u[2][3]=u[1][3],u[1][3]=n}function F(n){let r=1,a=27,d=n>>7&r;return d*=a,d^=n<<1,d}function p(n,r){let a=0,d=1;return a+=(r&d)*n^(r>>1&d)*F(n)^(r>>2&d)*F(F(n))^(r>>3&d)*F(F(F(n)))^(r>>4&d)*F(F(F(F(n)))),a}function h1(){let n,r,a,d;for(let o=0;o<4;o+=1)n=u[o][0],r=u[o][1],a=u[o][2],d=u[o][3],u[o][0]=p(n,2)^p(r,3)^p(a,1)^p(d,1),u[o][1]=p(n,1)^p(r,2)^p(a,3)^p(d,1),u[o][2]=p(n,1)^p(r,1)^p(a,2)^p(d,3),u[o][3]=p(n,3)^p(r,1)^p(a,1)^p(d,2)}function b1(){let n,r,a,d;for(let o=0;o<4;o+=1)n=u[o][0],r=u[o][1],a=u[o][2],d=u[o][3],u[o][0]=p(n,14)^p(r,11)^p(a,13)^p(d,9),u[o][1]=p(n,9)^p(r,14)^p(a,11)^p(d,13),u[o][2]=p(n,13)^p(r,9)^p(a,14)^p(d,11),u[o][3]=p(n,11)^p(r,13)^p(a,9)^p(d,14)}function Q(){for(let n=0;n<4;n+=1)for(let r=0;r<4;r+=1)u[r][n]=y1(u[r][n])}function $(){let n;n=u[3][1],u[3][1]=u[2][1],u[2][1]=u[1][1],u[1][1]=u[0][1],u[0][1]=n,n=u[0][2],u[0][2]=u[2][2],u[2][2]=n,n=u[1][2],u[1][2]=u[3][2],u[3][2]=n,n=u[0][3],u[0][3]=u[1][3],u[1][3]=u[2][3],u[2][3]=u[3][3],u[3][3]=n}function x1(){K(0);for(let n=1;n<B;n+=1)Z(),J(),h1(),K(n);Z(),J(),K(B)}function E1(){K(B);for(let n=B-1;n>0;n-=1)$(),Q(),K(n),b1();$(),Q(),K(0)}function I1(){let n="";for(let r=0;r<e1;r+=1)n+=t1(w[r])}function T1(){F1(),A1(),w1(),j1(),R1(),C1()}function C1(){for(let n=0;n<16;n+=1)w[n]=1+n*16;v1(),I1()}function F1(){v[0]="0",v[1]="1",v[2]="2",v[3]="3",v[4]="4",v[5]="5",v[6]="6",v[7]="7",v[8]="8",v[9]="9",v[10]="a",v[11]="b",v[12]="c",v[13]="d",v[14]="e",v[15]="f"}function R1(){l[32]=" ",l[33]="!",l[34]='"',l[35]="#",l[36]="$",l[37]="%",l[38]="&",l[39]="'",l[40]="(",l[41]=")",l[42]="*",l[43]="+",l[44]=",",l[45]="-",l[46]=".",l[47]="/",l[48]="0",l[49]="1",l[50]="2",l[51]="3",l[52]="4",l[53]="5",l[54]="6",l[55]="7",l[56]="8",l[57]="9",l[58]=":",l[59]=";",l[60]="<",l[61]="=",l[62]=">",l[63]="?",l[64]="@",l[65]="A",l[66]="B",l[67]="C",l[68]="D",l[69]="E",l[70]="F",l[71]="G",l[72]="H",l[73]="I",l[74]="J",l[75]="K",l[76]="L",l[77]="M",l[78]="N",l[79]="O",l[80]="P",l[81]="Q",l[82]="R",l[83]="S",l[84]="T",l[85]="U",l[86]="V",l[87]="W",l[88]="X",l[89]="Y",l[90]="Z",l[91]="[",l[92]="\\",l[93]="]",l[94]="^",l[95]="_",l[96]="`",l[97]="a",l[98]="b",l[99]="c",l[100]="d",l[101]="e",l[102]="f",l[103]="g",l[104]="h",l[105]="i",l[106]="j",l[107]="k",l[108]="l",l[109]="m",l[110]="n",l[111]="o",l[112]="p",l[113]="q",l[114]="r",l[115]="s",l[116]="t",l[117]="u",l[118]="v",l[119]="w",l[120]="x",l[121]="y",l[122]="z",l[123]="{",l[124]="|",l[125]="}",l[126]="~"}function A1(){e[0]=99,e[1]=124,e[2]=119,e[3]=123,e[4]=242,e[5]=107,e[6]=111,e[7]=197,e[8]=48,e[9]=1,e[10]=103,e[11]=43,e[12]=254,e[13]=215,e[14]=171,e[15]=118,e[16]=202,e[17]=130,e[18]=201,e[19]=125,e[20]=250,e[21]=89,e[22]=71,e[23]=240,e[24]=173,e[25]=212,e[26]=162,e[27]=175,e[28]=156,e[29]=164,e[30]=114,e[31]=192,e[32]=183,e[33]=253,e[34]=147,e[35]=38,e[36]=54,e[37]=63,e[38]=247,e[39]=204,e[40]=52,e[41]=165,e[42]=229,e[43]=241,e[44]=113,e[45]=216,e[46]=49,e[47]=21,e[48]=4,e[49]=199,e[50]=35,e[51]=195,e[52]=24,e[53]=150,e[54]=5,e[55]=154,e[56]=7,e[57]=18,e[58]=128,e[59]=226,e[60]=235,e[61]=39,e[62]=178,e[63]=117,e[64]=9,e[65]=131,e[66]=44,e[67]=26,e[68]=27,e[69]=110,e[70]=90,e[71]=160,e[72]=82,e[73]=59,e[74]=214,e[75]=179,e[76]=41,e[77]=227,e[78]=47,e[79]=132,e[80]=83,e[81]=209,e[82]=0,e[83]=237,e[84]=32,e[85]=252,e[86]=177,e[87]=91,e[88]=106,e[89]=203,e[90]=190,e[91]=57,e[92]=74,e[93]=76,e[94]=88,e[95]=207,e[96]=208,e[97]=239,e[98]=170,e[99]=251,e[100]=67,e[101]=77,e[102]=51,e[103]=133,e[104]=69,e[105]=249,e[106]=2,e[107]=127,e[108]=80,e[109]=60,e[110]=159,e[111]=168,e[112]=81,e[113]=163,e[114]=64,e[115]=143,e[116]=146,e[117]=157,e[118]=56,e[119]=245,e[120]=188,e[121]=182,e[122]=218,e[123]=33,e[124]=16,e[125]=255,e[126]=243,e[127]=210,e[128]=205,e[129]=12,e[130]=19,e[131]=236,e[132]=95,e[133]=151,e[134]=68,e[135]=23,e[136]=196,e[137]=167,e[138]=126,e[139]=61,e[140]=100,e[141]=93,e[142]=25,e[143]=115,e[144]=96,e[145]=129,e[146]=79,e[147]=220,e[148]=34,e[149]=42,e[150]=144,e[151]=136,e[152]=70,e[153]=238,e[154]=184,e[155]=20,e[156]=222,e[157]=94,e[158]=11,e[159]=219,e[160]=224,e[161]=50,e[162]=58,e[163]=10,e[164]=73,e[165]=6,e[166]=36,e[167]=92,e[168]=194,e[169]=211,e[170]=172,e[171]=98,e[172]=145,e[173]=149,e[174]=228,e[175]=121,e[176]=231,e[177]=200,e[178]=55,e[179]=109,e[180]=141,e[181]=213,e[182]=78,e[183]=169,e[184]=108,e[185]=86,e[186]=244,e[187]=234,e[188]=101,e[189]=122,e[190]=174,e[191]=8,e[192]=186,e[193]=120,e[194]=37,e[195]=46,e[196]=28,e[197]=166,e[198]=180,e[199]=198,e[200]=232,e[201]=221,e[202]=116,e[203]=31,e[204]=75,e[205]=189,e[206]=139,e[207]=138,e[208]=112,e[209]=62,e[210]=181,e[211]=102,e[212]=72,e[213]=3,e[214]=246,e[215]=14,e[216]=97,e[217]=53,e[218]=87,e[219]=185,e[220]=134,e[221]=193,e[222]=29,e[223]=158,e[224]=225,e[225]=248,e[226]=152,e[227]=17,e[228]=105,e[229]=217,e[230]=142,e[231]=148,e[232]=155,e[233]=30,e[234]=135,e[235]=233,e[236]=206,e[237]=85,e[238]=40,e[239]=223,e[240]=140,e[241]=161,e[242]=137,e[243]=13,e[244]=191,e[245]=230,e[246]=66,e[247]=104,e[248]=65,e[249]=153,e[250]=45,e[251]=15,e[252]=176,e[253]=84,e[254]=187,e[255]=22}function w1(){t[0]=82,t[1]=9,t[2]=106,t[3]=213,t[4]=48,t[5]=54,t[6]=165,t[7]=56,t[8]=191,t[9]=64,t[10]=163,t[11]=158,t[12]=129,t[13]=243,t[14]=215,t[15]=251,t[16]=124,t[17]=227,t[18]=57,t[19]=130,t[20]=155,t[21]=47,t[22]=255,t[23]=135,t[24]=52,t[25]=142,t[26]=67,t[27]=68,t[28]=196,t[29]=222,t[30]=233,t[31]=203,t[32]=84,t[33]=123,t[34]=148,t[35]=50,t[36]=166,t[37]=194,t[38]=35,t[39]=61,t[40]=238,t[41]=76,t[42]=149,t[43]=11,t[44]=66,t[45]=250,t[46]=195,t[47]=78,t[48]=8,t[49]=46,t[50]=161,t[51]=102,t[52]=40,t[53]=217,t[54]=36,t[55]=178,t[56]=118,t[57]=91,t[58]=162,t[59]=73,t[60]=109,t[61]=139,t[62]=209,t[63]=37,t[64]=114,t[65]=248,t[66]=246,t[67]=100,t[68]=134,t[69]=104,t[70]=152,t[71]=22,t[72]=212,t[73]=164,t[74]=92,t[75]=204,t[76]=93,t[77]=101,t[78]=182,t[79]=146,t[80]=108,t[81]=112,t[82]=72,t[83]=80,t[84]=253,t[85]=237,t[86]=185,t[87]=218,t[88]=94,t[89]=21,t[90]=70,t[91]=87,t[92]=167,t[93]=141,t[94]=157,t[95]=132,t[96]=144,t[97]=216,t[98]=171,t[99]=0,t[100]=140,t[101]=188,t[102]=211,t[103]=10,t[104]=247,t[105]=228,t[106]=88,t[107]=5,t[108]=184,t[109]=179,t[110]=69,t[111]=6,t[112]=208,t[113]=44,t[114]=30,t[115]=143,t[116]=202,t[117]=63,t[118]=15,t[119]=2,t[120]=193,t[121]=175,t[122]=189,t[123]=3,t[124]=1,t[125]=19,t[126]=138,t[127]=107,t[128]=58,t[129]=145,t[130]=17,t[131]=65,t[132]=79,t[133]=103,t[134]=220,t[135]=234,t[136]=151,t[137]=242,t[138]=207,t[139]=206,t[140]=240,t[141]=180,t[142]=230,t[143]=115,t[144]=150,t[145]=172,t[146]=116,t[147]=34,t[148]=231,t[149]=173,t[150]=53,t[151]=133,t[152]=226,t[153]=249,t[154]=55,t[155]=232,t[156]=28,t[157]=117,t[158]=223,t[159]=110,t[160]=71,t[161]=241,t[162]=26,t[163]=113,t[164]=29,t[165]=41,t[166]=197,t[167]=137,t[168]=111,t[169]=183,t[170]=98,t[171]=14,t[172]=170,t[173]=24,t[174]=190,t[175]=27,t[176]=252,t[177]=86,t[178]=62,t[179]=75,t[180]=198,t[181]=210,t[182]=121,t[183]=32,t[184]=154,t[185]=219,t[186]=192,t[187]=254,t[188]=120,t[189]=205,t[190]=90,t[191]=244,t[192]=31,t[193]=221,t[194]=168,t[195]=51,t[196]=136,t[197]=7,t[198]=199,t[199]=49,t[200]=177,t[201]=18,t[202]=16,t[203]=89,t[204]=39,t[205]=128,t[206]=236,t[207]=95,t[208]=96,t[209]=81,t[210]=127,t[211]=169,t[212]=25,t[213]=181,t[214]=74,t[215]=13,t[216]=45,t[217]=229,t[218]=122,t[219]=159,t[220]=147,t[221]=201,t[222]=156,t[223]=239,t[224]=160,t[225]=224,t[226]=59,t[227]=77,t[228]=174,t[229]=42,t[230]=245,t[231]=176,t[232]=200,t[233]=235,t[234]=187,t[235]=60,t[236]=131,t[237]=83,t[238]=153,t[239]=97,t[240]=23,t[241]=43,t[242]=4,t[243]=126,t[244]=186,t[245]=119,t[246]=214,t[247]=38,t[248]=225,t[249]=105,t[250]=20,t[251]=99,t[252]=85,t[253]=33,t[254]=12,t[255]=125}function j1(){C[0]=141,C[1]=1,C[2]=2,C[3]=4,C[4]=8,C[5]=16,C[6]=32,C[7]=64,C[8]=128,C[9]=27,C[10]=54}function i1(n){j[x]=n,x+=1}function K1(n){const r=n.length-1;for(let a=0;a<=r;a+=1)i1(S1(n,a))}function N1(n){i1(n)}function s(n){let r="",a=0,d=0,o=0,i=0,g=0,c=0;if(A(n,n.length,n.length)==" ")return console.error("ECBEncrypt error: whitespace only"),"";if(n=="")return console.error("ECBEncrypt error: empty string"),"";for(x=0,K1(n);o<x;){if(x-o<16){const f=16-x;for(let S=x;S<x+f;S+=1)j[S]=32;x+=f}for(a=o,o+=16,d=o,i=a;i<d;)for(g=0;g<4;g+=1)for(c=0;c<4;c+=1)u[g][c]=j[i],j[i]=0,i+=1;for(x1(),i=a;i<d;)for(g=0;g<4;g+=1)for(c=0;c<4;c+=1)r+=t1(u[g][c]),i+=1}return R(r)==n,r}function R(n){let r="",a=n,d="",o=0,i=0,g=0,c=0,f=0,S=0,T=0,y=0,N=0;if(n=="")return console.error("ECBDecrypt error: empty string"),"";for(x=0;a!="";)d=A(a,1,2),a=A(a,3,a.length),o=_1(d),N1(o);for(;c<x;){if(x-c<16){for(N=16-x,S=x;S<x+N;S+=1)j[S]=32;x+=N}for(i=c,c+=16,g=c,f=i;f<g;)for(T=0;T<4;T+=1)for(y=0;y<4;y+=1)u[T][y]=j[f],f+=1;for(E1(),f=i;f<g;)for(T=0;T<4;T+=1)for(y=0;y<4;y+=1)r+=m1(u[T][y]),f+=1}for(;A(r,r.length,H(r))==" ";)r=A(r,1,H(r)-1);return r}class D1{constructor(){this.init(),n1(this)}setFields(r){this.resources=r?[...r]:[]}updateOption(r,a,d){if(d){this.options[r].value=a;return}const o=[...this.options];o[r].value=a,this.options=o}updateAt(r,a,d){if(d){this.resources[r].value=a;return}const o=[...this.resources];o[r].value=a,this.resources=o}reset(){this.init()}init(){this.resources=[{type:"number",value:9e7,description:"Vanadium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:9e7,description:"Chromium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:9e7,description:"Titanium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:9e7,description:"Tungsten",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:9e7,description:"Gold",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:9e7,description:"Noobium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:9e7,description:"Osmium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:9e7,description:"Iridium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:9e7,description:"Palladium",min:0,max:9e7,tip:"0 - 90000000"}],this.options=[{type:"boolean",value:!0,description:"Unlock all stuff",tip:"Unlock all hidden weapons, PAs, turrets, structures"},{type:"boolean",value:!0,description:"Upgrade all stuff",tip:"Set 20 level and 10 prestige for any stuff"},{type:"boolean",value:!1,description:"Overload mod points",tip:"Avoid to use this, its a real cheats :D"}]}}const b=new D1;class G1{constructor(){T1()}generateXML(r){const a=b.options[0].value,d=b.options[1].value,o=b.options[2].value;let i,g,c;for(i="",g=9,c=0;c<g;c++)i+=s(String(b.resources[c].value))+" ";if(r.addKey("R","STRING",i,"R"),i="",g=18,a){for(c=0;c<g;c++)i+=s(String(c+1))+" ";r.addKey("U","STRING",i,"W"),r.addKey("V","STRING",i,"W")}for(a&&(i=s(String(0))+" ",r.addKey("E","STRING",i,"W")),c=0;c<g;c++){if(i="",d?(i+=s(String(550))+" ",i+=s(String(20))+" ",i+=s(String(10))+" "):(i+=s(String(20))+" ",i+=s(String(1))+" ",i+=s(String(0))+" "),o&&c==0)i+=s(String(550))+" ",i+=s(String(10))+" ",i+=s(String(10))+" ",i+=s(String(10))+" ",i+=s(String(30))+" ",i+=s(String(50))+" ",i+=s(String(3))+" ",i+=s(String(5))+" ",i+=s(String(50))+" ";else for(let f=0;f<9;f++)i+=s(String(0))+" ";r.addKey(String(c),"STRING",i,"W")}if(i="",g=11,a){for(c=0;c<g;c++)i+=s(String(c+1))+" ";r.addKey("U","STRING",i,"PA"),r.addKey("V","STRING",i,"PA")}for(a&&(i=s(String(0))+" ",r.addKey("E","STRING",i,"PA")),c=0;c<g;c++){if(i="",d?(i+=s(String(550))+" ",i+=s(String(20))+" ",i+=s(String(10))+" "):(i+=s(String(20))+" ",i+=s(String(1))+" ",i+=s(String(0))+" "),o&&c==0)i+=s(String(20))+" ",i+=s(String(998))+" ",i+=s(String(100))+" ",i+=s(String(10))+" ",i+=s(String(50))+" ",i+=s(String(20))+" ",i+=s(String(100))+" ",i+=s(String(500))+" ",i+=s(String(100))+" ";else for(let f=0;f<9;f++)i+=s(String(0))+" ";r.addKey(String(c),"STRING",i,"PA")}if(i="",g=5,a){for(c=0;c<g;c++)i+=s(String(c+1))+" ";r.addKey("U","STRING",i,"TO"),r.addKey("V","STRING",i,"TO")}for(a&&(i=s(String(0))+" ",r.addKey("E","STRING",i,"TO")),c=0;c<g;c++){if(i="",d?(i+=s(String(550))+" ",i+=s(String(20))+" ",i+=s(String(10))+" "):(i+=s(String(20))+" ",i+=s(String(1))+" ",i+=s(String(0))+" "),o&&c==0)i+=s(String(500))+" ",i+=s(String(20))+" ",i+=s(String(40))+" ",i+=s(String(200))+" ",i+=s(String(10))+" ",i+=s(String(7))+" ";else for(let f=0;f<6;f++)i+=s(String(0))+" ";r.addKey(String(c),"STRING",i,"TO")}if(i="",g=20,a){for(c=0;c<g;c++)i+=s(String(c+1))+" ";r.addKey("U","STRING",i,"T"),r.addKey("V","STRING",i,"T")}for(a&&(i="",i+=s(String(15))+" ",i+=s(String(14))+" ",i+=s(String(16))+" ",i+=s(String(7))+" ",i+=s(String(0))+" ",r.addKey("E","STRING",i,"T")),c=0;c<g;c++){if(i="",d?(i+=s(String(550))+" ",i+=s(String(20))+" ",i+=s(String(10))+" "):(i+=s(String(20))+" ",i+=s(String(1))+" ",i+=s(String(0))+" "),o&&c==0)i+=s(String(15))+" ",i+=s(String(99))+" ",i+=s(String(990))+" ",i+=s(String(10))+" ",i+=s(String(10))+" ",i+=s(String(10))+" ",i+=s(String(33))+" ",i+=s(String(22))+" ",i+=s(String(20))+" ";else for(let f=0;f<9;f++)i+=s(String(0))+" ";r.addKey(String(c),"STRING",i,"T")}if(i="",g=23,a){for(c=0;c<g;c++)i+=s(String(c+1))+" ";r.addKey("U","STRING",i,"S"),r.addKey("V","STRING",i,"S")}for(a&&(i="",i+=s(String(18))+" ",i+=s(String(15))+" ",i+=s(String(12))+" ",i+=s(String(5))+" ",i+=s(String(11))+" ",i+=s(String(21))+" ",r.addKey("E","STRING",i,"S")),i=s(String(0))+" ",r.addKey("SE","STRING",i,"S"),c=0;c<g;c++){if(i="",d?(i+=s(String(550))+" ",i+=s(String(20))+" ",i+=s(String(10))+" "):(i+=s(String(20))+" ",i+=s(String(1))+" ",i+=s(String(0))+" "),o&&c==0)for(let f=0;f<9;f++)i+=s(String(15))+" ";else for(let f=0;f<9;f++)i+=s(String(0))+" ";r.addKey(String(c),"STRING",i,"S")}return r.getAsString()}parse(r,a){if(r.parse(a),!r.getKey("R","R"))return console.error("Wrong bank file!"),null;let d,o,i,g;for(d=[],o=r.getKey("R","R").value,i=9,g=0;g<i;g++){const S=V(o,g);S!=""?d.push(parseInt(R(S)||"0")):d.push(0)}o=r.getKey("E","W").value,console.log("Equiped weapon index:",parseInt(R(o)||"0")),o=r.getKey("E","PA").value,console.log("Equiped armor index:",parseInt(R(o)||"0")),o=r.getKey("E","TO").value,console.log("Equiped tool index:",parseInt(R(o)||"0")),o=r.getKey("E","T").value;const c=[];for(g=0;g<5;g++){const S=V(o,g);S!=""?c.push(parseInt(R(S)||"0")):c.push(0)}console.log("Equiped turrest indexes:",c),o=r.getKey("E","S").value;const f=[];for(g=0;g<6;g++){const S=V(o,g);S!=""?f.push(parseInt(R(S)||"0")):f.push(0)}return console.log("Equiped structures indexes:",f),o=r.getKey("SE","S").value,console.log("Equiped supply index:",parseInt(R(o)||"0")),[{type:"number",value:d[0],description:"Vanadium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:d[1],description:"Chromium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:d[2],description:"Titanium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:d[3],description:"Tungsten",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:d[4],description:"Gold",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:d[5],description:"Noobium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:d[6],description:"Osmium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:d[7],description:"Iridium",min:0,max:9e7,tip:"0 - 90000000"},{type:"number",value:d[8],description:"Palladium",min:0,max:9e7,tip:"0 - 90000000"}]}}const M=new G1,U1=l1(n=>{const{accountStore:r,menuStore:a,mapStore:d}=o1(),[o,i]=I.useState(n.bankName),[g,c]=I.useState(O.get(P.EXODUS_3).authorID),f=O.get(P.EXODUS_3).title,S=I.useMemo(()=>new f1(o,g,a.playerID,"1"),[r.current,a.playerID,o,g]),T=()=>{d.setMapData(r.current,f,{resources:b.resources})};I.useEffect(()=>{var D;const m=(D=d.list[r.current])==null?void 0:D[f],E=m==null?void 0:m.resources;E?b.setFields(E):setTimeout(y.onResetClick)},[r.current]);const y={onBankNameChange:I.useCallback(m=>{i(m)},[]),onAuthorIdChange:I.useCallback(m=>{c(m)},[]),onFileDrop:I.useCallback((m,E)=>{const D=M.parse(S,E);D&&(z.flushSync(()=>b.setFields()),b.setFields(D))},[]),onDownloadClick:I.useCallback(()=>{s1(M.generateXML(S),o+".SC2Bank",!0),a.autoSave||T()},[S]),onCopyCodeClick:I.useCallback(()=>{a1(M.generateXML(S),!0),a.autoSave||T()},[S]),onResetClick:I.useCallback(()=>{i(n.bankName),c(O.get(P.EXODUS_3).authorID),z.flushSync(()=>b.setFields()),b.reset()},[]),onFieldChange:I.useCallback((m,E)=>{b.updateAt(E,parseInt(m),!0),a.autoSave&&T()},[]),onOptionChange:I.useCallback((m,E)=>{b.updateOption(E,m,!0)},[])},N=I.useMemo(()=>_.jsxs(G,{style:{flexDirection:"row"},children:[_.jsxs(G,{style:{flexDirection:"column",height:"100%"},children:[_.jsxs(u1,{children:["Note: this map has no validation, so you",_.jsx("br",{})," can skip ",_.jsx("b",{children:"Player id"})," or ",_.jsx("b",{children:"Author id"})," here.",_.jsx("br",{}),_.jsx("br",{}),"While the map in beta, I'm too lazy to add",_.jsx("br",{})," inputs for each game param :P",_.jsx("br",{}),"Hacking resources allows you to get",_.jsx("br",{})," anything in the game."]}),_.jsx(W,{style:{marginTop:"74px"},children:"Options:"}),_.jsx(G,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:b.options.map((m,E)=>_.jsx(c1,{label:m.description+":",index:E,onChange:y.onOptionChange,value:m.value==1,tip:m.tip?m.tip:null},E))})]}),_.jsxs(G,{style:{flexDirection:"column"},children:[_.jsx(W,{children:"Resources:"}),_.jsx(G,{style:{flexDirection:"column",border:"1px solid #ffffff40",padding:"10px"},alignInputs:!0,children:b.resources.map((m,E)=>_.jsx(d1,{index:E,type:"number",style:{width:"88px"},label:m.description+":",onChange:y.onFieldChange,min:m.min.toString(),max:m.max.toString(),value:m.value.toString(),tip:m.tip?m.tip:null},E))})]})]}),[b.resources,b.options]);return _.jsx(g1,{bankName:o,authorID:g,onBankNameChange:y.onBankNameChange,onAuthorIdChange:y.onAuthorIdChange,onFileDrop:y.onFileDrop,onDownload:y.onDownloadClick,onCopy:y.onCopyCodeClick,onReset:y.onResetClick,children:N})}),P1=r1.memo(U1);export{P1 as default};
