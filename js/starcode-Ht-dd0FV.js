/*!
 * sc2-bank-generator v.1.1.0
 *
 * Compiled from:
 *
 * sc2-bank-generator/src/core/starcode/starcode.ts
 *
 * Сompiled on Sun, 21 Jan 2024 22:00:18 UTC
 */class c{constructor(){this.ALPHABET="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!$%/()=?,.-;:_^#+* @{[]}|~`",this.ALENGTH=this.ALPHABET.length,this.AMAP=new Map;for(let t=0;t<this.ALENGTH;t++)this.AMAP.set(this.ALPHABET.charAt(t),t);this.reset(),console.log("starcode initialized.")}encrypt(t,r){const e=t.length,i=r.length;let s="";for(let h=0;h<e;h++)s+=this.shift(t.charAt(h),r.charAt(h%i),!0);return s}decrypt(t,r){const e=t.length,i=r.length;let s="";for(let h=0;h<e;h++)s+=this.shift(t.charAt(h),r.charAt(h%i),!1);return s}compress(t){const r=this.ALENGTH.toString();let e="";for(;t!="0";)e=this.chr(parseInt(this.modulo(t,r)))+e,t=this.divide(t,r);return e}decompress(t){const r=this.ALENGTH.toString(),e=t.length;let i="0";for(let s=0;s<e;s++)i=this.add(i,this.multiply(this.power(r,e-(s+1)),this.ord(t.charAt(s)).toString()));return i}getInt(t){const r=parseInt(this.modulo(this.code,(t+1).toString()));return this.code=this.divide(this.code,(t+1).toString()),r}setInt(t,r){if(t>r)throw new Error("STARCODE: value must be less or equal to maxValue!");this.code=this.add(this.multiply(this.code,(r+1).toString()),t.toString())}addHash(t,r){return this.hash(t,r)+t}removeHash(t,r){return t.substring(r)}validate(t,r,e=!1){const i=e?t.substring(0,r):null;return this.hash(t.substring(r),r,i)==t.substring(0,r)}reset(){this.code="0"}compressAndEncrypt(t){return this.code=this.encrypt(this.compress(this.code),t)}decryptAndDecompress(t,r){return this.code=this.decompress(this.decrypt(t,r))}add(t,r){r.length>t.length?t=this.fill(t,r.length):r=this.fill(r,t.length);let e=0,i="";for(let s=t.length-1;s>=0;s--){const h=parseInt(t.charAt(s))+parseInt(r.charAt(s));i=((h+e)%10).toString()+i,e=Math.floor((h+e)/10)}return e?e.toString()+i:i}subtract(t,r){r.length>t.length?t=this.fill(t,r.length):r=this.fill(r,t.length);let e="",i=0;for(let s=t.length-1;s>=0;s--){let h=parseInt(t.charAt(s))-parseInt(r.charAt(s))-i;h<0?(i=1,h+=10):i=0,e=h.toString()+e}return this.cut(e)}multiply(t,r){if(r=="0")return"0";const e=parseInt(r);let i=0,s="";for(let h=t.length-1;h>=0;h--){const n=parseInt(t.charAt(h))*e+i;s=(n%10).toString()+s,i=Math.floor(n/10)}return i>0&&(s=i.toString()+s),s}divide(t,r){const e=parseInt(r),i=t.length;let s=0,h="";for(let n=0;n<i;n++){const o=parseInt(t.charAt(n))+s*10;h+=Math.floor(o/e).toString(),s=o%e}return this.cut(h)}modulo(t,r){const e=parseInt(r),i=t.length;let s=0;for(let h=0;h<i;h++)s=(parseInt(t.charAt(h))+s*10)%e;return s.toString()}cut(t){const r=t.length-1;let e=0;for(;e<r&&t.charAt(e)=="0";)e++;return t.substring(e)}power(t,r){if(r<=0)return"1";let e=t;for(;r>1;)e=this.multiply(e,t),r--;return e}chr(t){return this.ALPHABET.charAt(t)}ord(t){return this.AMAP.get(t)}shift(t,r,e=!0){if(e)return this.chr((this.ord(t)+this.ord(r))%this.ALENGTH);const i=this.ord(t)-this.ord(r);return i<0?this.chr((i+this.ALENGTH)%this.ALENGTH):this.chr(i%this.ALENGTH)}fill(t,r){r-=t.length;let e="";for(;r>0;)e+="0",r--;return e+t}hash(t,r,e){let i="0";for(let n=t.length-1;n>=0;n--)i=this.add(i,(this.ord(t.charAt(n))*(n+1)).toString());if(!e)return this.fill(this.compress(this.modulo(i,this.int(Math.pow(this.ALENGTH,r)).toString())),r);let s=172319;return(n=>{s++;let o=Math.pow(this.ALENGTH,r);o=o>s?o=s:o;const l=this.fill(this.compress(this.modulo(i,o.toString())),r);s%1e3==0&&console.log("max:",s,"; hash:",l,"; origin:",n),l!=n?setTimeout(e,5,i,r):console.log("max found!:",s,"; hash:",l,"; origin:",n)})(e),"test"}int(t){return t>172319?172319:Math.floor(t)}}const a=new c;export{a as s};
