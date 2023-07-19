/*!
  * @intlify/shared v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const Ke=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",zt=e=>Ke?Symbol(e):e,Ge=(e,t,r)=>qe({l:e,k:t,s:r}),qe=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),A=e=>typeof e=="number"&&isFinite(e),Ye=e=>oe(e)==="[object Date]",ge=e=>oe(e)==="[object RegExp]",ce=e=>E(e)&&Object.keys(e).length===0;function Be(e,t){typeof console!="undefined"&&(console.warn("[intlify] "+e),t&&console.warn(t.stack))}const Y=Object.assign;let be;const Qe=()=>be||(be=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function ke(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Ze=Object.prototype.hasOwnProperty;function en(e,t){return Ze.call(e,t)}const J=Array.isArray,W=e=>typeof e=="function",C=e=>typeof e=="string",R=e=>typeof e=="boolean",q=e=>e!==null&&typeof e=="object",Ne=Object.prototype.toString,oe=e=>Ne.call(e),E=e=>oe(e)==="[object Object]",Xe=e=>e==null?"":J(e)||E(e)&&e.toString===Ne?JSON.stringify(e,null,2):String(e);function tn(){const e=new Map;return{events:e,on(r,a){const c=e.get(r);c&&c.push(a)||e.set(r,[a])},off(r,a){const c=e.get(r);c&&c.splice(c.indexOf(a)>>>0,1)},emit(r,a){(e.get(r)||[]).slice().map(c=>c(a)),(e.get("*")||[]).slice().map(c=>c(r,a))}}}/*!
  * @intlify/message-resolver v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const ze=Object.prototype.hasOwnProperty;function et(e,t){return ze.call(e,t)}const te=e=>e!==null&&typeof e=="object",K=[];K[0]={w:[0],i:[3,0],["["]:[4],o:[7]};K[1]={w:[1],["."]:[2],["["]:[4],o:[7]};K[2]={w:[2],i:[3,0],[0]:[3,0]};K[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};K[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};K[5]={["'"]:[4,0],o:8,l:[5,0]};K[6]={['"']:[4,0],o:8,l:[6,0]};const tt=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function nt(e){return tt.test(e)}function rt(e){const t=e.charCodeAt(0),r=e.charCodeAt(e.length-1);return t===r&&(t===34||t===39)?e.slice(1,-1):e}function st(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function at(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:nt(t)?rt(t):"*"+t}function lt(e){const t=[];let r=-1,a=0,c=0,l,m,h,d,k,P,_;const y=[];y[0]=()=>{m===void 0?m=h:m+=h},y[1]=()=>{m!==void 0&&(t.push(m),m=void 0)},y[2]=()=>{y[0](),c++},y[3]=()=>{if(c>0)c--,a=4,y[0]();else{if(c=0,m===void 0||(m=at(m),m===!1))return!1;y[1]()}};function N(){const I=e[r+1];if(a===5&&I==="'"||a===6&&I==='"')return r++,h="\\"+I,y[0](),!0}for(;a!==null;)if(r++,l=e[r],!(l==="\\"&&N())){if(d=st(l),_=K[a],k=_[d]||_.l||8,k===8||(a=k[0],k[1]!==void 0&&(P=y[k[1]],P&&(h=l,P()===!1))))return;if(a===7)return t}}const ye=new Map;function Ie(e,t){if(!te(e))return null;let r=ye.get(t);if(r||(r=lt(t),r&&ye.set(t,r)),!r)return null;const a=r.length;let c=e,l=0;for(;l<a;){const m=c[r[l]];if(m===void 0)return null;c=m,l++}return c}function Le(e){if(!te(e))return e;for(const t in e)if(!!et(e,t))if(!t.includes("."))te(e[t])&&Le(e[t]);else{const r=t.split("."),a=r.length-1;let c=e;for(let l=0;l<a;l++)r[l]in c||(c[r[l]]={}),c=c[r[l]];c[r[a]]=e[t],delete e[t],te(c[r[a]])&&Le(c[r[a]])}return e}/*!
  * @intlify/runtime v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const ct=e=>e,ot=e=>"",it="text",ut=e=>e.length===0?"":e.join(""),ft=Xe;function _e(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function dt(e){const t=A(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(A(e.named.count)||A(e.named.n))?A(e.named.count)?e.named.count:A(e.named.n)?e.named.n:t:t}function mt(e,t){t.count||(t.count=e),t.n||(t.n=e)}function pt(e={}){const t=e.locale,r=dt(e),a=q(e.pluralRules)&&C(t)&&W(e.pluralRules[t])?e.pluralRules[t]:_e,c=q(e.pluralRules)&&C(t)&&W(e.pluralRules[t])?_e:void 0,l=f=>f[a(r,f.length,c)],m=e.list||[],h=f=>m[f],d=e.named||{};A(e.pluralIndex)&&mt(r,d);const k=f=>d[f];function P(f){const o=W(e.messages)?e.messages(f):q(e.messages)?e.messages[f]:!1;return o||(e.parent?e.parent.message(f):ot)}const _=f=>e.modifiers?e.modifiers[f]:ct,y=E(e.processor)&&W(e.processor.normalize)?e.processor.normalize:ut,N=E(e.processor)&&W(e.processor.interpolate)?e.processor.interpolate:ft,I=E(e.processor)&&C(e.processor.type)?e.processor.type:it,O={list:h,named:k,plural:l,linked:(f,o)=>{const p=P(f)(O);return C(o)?_(o)(p):p},message:P,type:I,interpolate:N,normalize:y};return O}/*!
  * @intlify/message-compiler v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */function ie(e,t,r={}){const{domain:a,messages:c,args:l}=r,m=e,h=new SyntaxError(String(m));return h.code=e,t&&(h.location=t),h.domain=a,h}function ht(e){throw e}function gt(e,t,r){return{line:e,column:t,offset:r}}function le(e,t,r){const a={start:e,end:t};return r!=null&&(a.source=r),a}const H=" ",bt="\r",D=`
`,kt=String.fromCharCode(8232),yt=String.fromCharCode(8233);function Lt(e){const t=e;let r=0,a=1,c=1,l=0;const m=S=>t[S]===bt&&t[S+1]===D,h=S=>t[S]===D,d=S=>t[S]===yt,k=S=>t[S]===kt,P=S=>m(S)||h(S)||d(S)||k(S),_=()=>r,y=()=>a,N=()=>c,I=()=>l,O=S=>m(S)||d(S)||k(S)?D:t[S],f=()=>O(r),o=()=>O(r+l);function p(){return l=0,P(r)&&(a++,c=0),m(r)&&r++,r++,c++,t[r]}function b(){return m(r+l)&&l++,l++,t[r+l]}function u(){r=0,a=1,c=1,l=0}function L(S=0){l=S}function T(){const S=r+l;for(;S!==r;)p();l=0}return{index:_,line:y,column:N,peekOffset:I,charAt:O,currentChar:f,currentPeek:o,next:p,peek:b,reset:u,resetPeek:L,skipToPeek:T}}const j=void 0,Te="'",_t="tokenizer";function Tt(e,t={}){const r=t.location!==!1,a=Lt(e),c=()=>a.index(),l=()=>gt(a.line(),a.column(),a.index()),m=l(),h=c(),d={currentType:14,offset:h,startLoc:m,endLoc:m,lastType:14,lastOffset:h,lastStartLoc:m,lastEndLoc:m,braceNest:0,inLinked:!1,text:""},k=()=>d,{onError:P}=t;function _(n,s,i,...g){const w=k();if(s.column+=i,s.offset+=i,P){const v=le(w.startLoc,s),U=ie(n,v,{domain:_t,args:g});P(U)}}function y(n,s,i){n.endLoc=l(),n.currentType=s;const g={type:s};return r&&(g.loc=le(n.startLoc,n.endLoc)),i!=null&&(g.value=i),g}const N=n=>y(n,14);function I(n,s){return n.currentChar()===s?(n.next(),s):(_(0,l(),0,s),"")}function O(n){let s="";for(;n.currentPeek()===H||n.currentPeek()===D;)s+=n.currentPeek(),n.peek();return s}function f(n){const s=O(n);return n.skipToPeek(),s}function o(n){if(n===j)return!1;const s=n.charCodeAt(0);return s>=97&&s<=122||s>=65&&s<=90||s===95}function p(n){if(n===j)return!1;const s=n.charCodeAt(0);return s>=48&&s<=57}function b(n,s){const{currentType:i}=s;if(i!==2)return!1;O(n);const g=o(n.currentPeek());return n.resetPeek(),g}function u(n,s){const{currentType:i}=s;if(i!==2)return!1;O(n);const g=n.currentPeek()==="-"?n.peek():n.currentPeek(),w=p(g);return n.resetPeek(),w}function L(n,s){const{currentType:i}=s;if(i!==2)return!1;O(n);const g=n.currentPeek()===Te;return n.resetPeek(),g}function T(n,s){const{currentType:i}=s;if(i!==8)return!1;O(n);const g=n.currentPeek()===".";return n.resetPeek(),g}function S(n,s){const{currentType:i}=s;if(i!==9)return!1;O(n);const g=o(n.currentPeek());return n.resetPeek(),g}function M(n,s){const{currentType:i}=s;if(!(i===8||i===12))return!1;O(n);const g=n.currentPeek()===":";return n.resetPeek(),g}function F(n,s){const{currentType:i}=s;if(i!==10)return!1;const g=()=>{const v=n.currentPeek();return v==="{"?o(n.peek()):v==="@"||v==="%"||v==="|"||v===":"||v==="."||v===H||!v?!1:v===D?(n.peek(),g()):o(v)},w=g();return n.resetPeek(),w}function $(n){O(n);const s=n.currentPeek()==="|";return n.resetPeek(),s}function B(n,s=!0){const i=(w=!1,v="",U=!1)=>{const G=n.currentPeek();return G==="{"?v==="%"?!1:w:G==="@"||!G?v==="%"?!0:w:G==="%"?(n.peek(),i(w,"%",!0)):G==="|"?v==="%"||U?!0:!(v===H||v===D):G===H?(n.peek(),i(!0,H,U)):G===D?(n.peek(),i(!0,D,U)):!0},g=i();return s&&n.resetPeek(),g}function X(n,s){const i=n.currentChar();return i===j?j:s(i)?(n.next(),i):null}function me(n){return X(n,i=>{const g=i.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g>=48&&g<=57||g===95||g===36})}function Me(n){return X(n,i=>{const g=i.charCodeAt(0);return g>=48&&g<=57})}function Ae(n){return X(n,i=>{const g=i.charCodeAt(0);return g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102})}function pe(n){let s="",i="";for(;s=Me(n);)i+=s;return i}function Re(n){let s="";for(;;){const i=n.currentChar();if(i==="{"||i==="}"||i==="@"||i==="|"||!i)break;if(i==="%")if(B(n))s+=i,n.next();else break;else if(i===H||i===D)if(B(n))s+=i,n.next();else{if($(n))break;s+=i,n.next()}else s+=i,n.next()}return s}function We(n){f(n);let s="",i="";for(;s=me(n);)i+=s;return n.currentChar()===j&&_(6,l(),0),i}function $e(n){f(n);let s="";return n.currentChar()==="-"?(n.next(),s+=`-${pe(n)}`):s+=pe(n),n.currentChar()===j&&_(6,l(),0),s}function xe(n){f(n),I(n,"'");let s="",i="";const g=v=>v!==Te&&v!==D;for(;s=X(n,g);)s==="\\"?i+=Ve(n):i+=s;const w=n.currentChar();return w===D||w===j?(_(2,l(),0),w===D&&(n.next(),I(n,"'")),i):(I(n,"'"),i)}function Ve(n){const s=n.currentChar();switch(s){case"\\":case"'":return n.next(),`\\${s}`;case"u":return he(n,s,4);case"U":return he(n,s,6);default:return _(3,l(),0,s),""}}function he(n,s,i){I(n,s);let g="";for(let w=0;w<i;w++){const v=Ae(n);if(!v){_(4,l(),0,`\\${s}${g}${n.currentChar()}`);break}g+=v}return`\\${s}${g}`}function He(n){f(n);let s="",i="";const g=w=>w!=="{"&&w!=="}"&&w!==H&&w!==D;for(;s=X(n,g);)i+=s;return i}function Ue(n){let s="",i="";for(;s=me(n);)i+=s;return i}function je(n){const s=(i=!1,g)=>{const w=n.currentChar();return w==="{"||w==="%"||w==="@"||w==="|"||!w||w===H?g:w===D?(g+=w,n.next(),s(i,g)):(g+=w,n.next(),s(!0,g))};return s(!1,"")}function re(n){f(n);const s=I(n,"|");return f(n),s}function se(n,s){let i=null;switch(n.currentChar()){case"{":return s.braceNest>=1&&_(8,l(),0),n.next(),i=y(s,2,"{"),f(n),s.braceNest++,i;case"}":return s.braceNest>0&&s.currentType===2&&_(7,l(),0),n.next(),i=y(s,3,"}"),s.braceNest--,s.braceNest>0&&f(n),s.inLinked&&s.braceNest===0&&(s.inLinked=!1),i;case"@":return s.braceNest>0&&_(6,l(),0),i=ee(n,s)||N(s),s.braceNest=0,i;default:let w=!0,v=!0,U=!0;if($(n))return s.braceNest>0&&_(6,l(),0),i=y(s,1,re(n)),s.braceNest=0,s.inLinked=!1,i;if(s.braceNest>0&&(s.currentType===5||s.currentType===6||s.currentType===7))return _(6,l(),0),s.braceNest=0,ae(n,s);if(w=b(n,s))return i=y(s,5,We(n)),f(n),i;if(v=u(n,s))return i=y(s,6,$e(n)),f(n),i;if(U=L(n,s))return i=y(s,7,xe(n)),f(n),i;if(!w&&!v&&!U)return i=y(s,13,He(n)),_(1,l(),0,i.value),f(n),i;break}return i}function ee(n,s){const{currentType:i}=s;let g=null;const w=n.currentChar();switch((i===8||i===9||i===12||i===10)&&(w===D||w===H)&&_(9,l(),0),w){case"@":return n.next(),g=y(s,8,"@"),s.inLinked=!0,g;case".":return f(n),n.next(),y(s,9,".");case":":return f(n),n.next(),y(s,10,":");default:return $(n)?(g=y(s,1,re(n)),s.braceNest=0,s.inLinked=!1,g):T(n,s)||M(n,s)?(f(n),ee(n,s)):S(n,s)?(f(n),y(s,12,Ue(n))):F(n,s)?(f(n),w==="{"?se(n,s)||g:y(s,11,je(n))):(i===8&&_(9,l(),0),s.braceNest=0,s.inLinked=!1,ae(n,s))}}function ae(n,s){let i={type:14};if(s.braceNest>0)return se(n,s)||N(s);if(s.inLinked)return ee(n,s)||N(s);const g=n.currentChar();switch(g){case"{":return se(n,s)||N(s);case"}":return _(5,l(),0),n.next(),y(s,3,"}");case"@":return ee(n,s)||N(s);default:if($(n))return i=y(s,1,re(n)),s.braceNest=0,s.inLinked=!1,i;if(B(n))return y(s,0,Re(n));if(g==="%")return n.next(),y(s,4,"%");break}return i}function Je(){const{currentType:n,offset:s,startLoc:i,endLoc:g}=d;return d.lastType=n,d.lastOffset=s,d.lastStartLoc=i,d.lastEndLoc=g,d.offset=c(),d.startLoc=l(),a.currentChar()===j?y(d,14):ae(a,d)}return{nextToken:Je,currentOffset:c,currentPosition:l,context:k}}const Ct="parser",Ot=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function St(e,t,r){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const a=parseInt(t||r,16);return a<=55295||a>=57344?String.fromCodePoint(a):"\uFFFD"}}}function wt(e={}){const t=e.location!==!1,{onError:r}=e;function a(o,p,b,u,...L){const T=o.currentPosition();if(T.offset+=u,T.column+=u,r){const S=le(b,T),M=ie(p,S,{domain:Ct,args:L});r(M)}}function c(o,p,b){const u={type:o,start:p,end:p};return t&&(u.loc={start:b,end:b}),u}function l(o,p,b,u){o.end=p,u&&(o.type=u),t&&o.loc&&(o.loc.end=b)}function m(o,p){const b=o.context(),u=c(3,b.offset,b.startLoc);return u.value=p,l(u,o.currentOffset(),o.currentPosition()),u}function h(o,p){const b=o.context(),{lastOffset:u,lastStartLoc:L}=b,T=c(5,u,L);return T.index=parseInt(p,10),o.nextToken(),l(T,o.currentOffset(),o.currentPosition()),T}function d(o,p){const b=o.context(),{lastOffset:u,lastStartLoc:L}=b,T=c(4,u,L);return T.key=p,o.nextToken(),l(T,o.currentOffset(),o.currentPosition()),T}function k(o,p){const b=o.context(),{lastOffset:u,lastStartLoc:L}=b,T=c(9,u,L);return T.value=p.replace(Ot,St),o.nextToken(),l(T,o.currentOffset(),o.currentPosition()),T}function P(o){const p=o.nextToken(),b=o.context(),{lastOffset:u,lastStartLoc:L}=b,T=c(8,u,L);return p.type!==12?(a(o,11,b.lastStartLoc,0),T.value="",l(T,u,L),{nextConsumeToken:p,node:T}):(p.value==null&&a(o,13,b.lastStartLoc,0,x(p)),T.value=p.value||"",l(T,o.currentOffset(),o.currentPosition()),{node:T})}function _(o,p){const b=o.context(),u=c(7,b.offset,b.startLoc);return u.value=p,l(u,o.currentOffset(),o.currentPosition()),u}function y(o){const p=o.context(),b=c(6,p.offset,p.startLoc);let u=o.nextToken();if(u.type===9){const L=P(o);b.modifier=L.node,u=L.nextConsumeToken||o.nextToken()}switch(u.type!==10&&a(o,13,p.lastStartLoc,0,x(u)),u=o.nextToken(),u.type===2&&(u=o.nextToken()),u.type){case 11:u.value==null&&a(o,13,p.lastStartLoc,0,x(u)),b.key=_(o,u.value||"");break;case 5:u.value==null&&a(o,13,p.lastStartLoc,0,x(u)),b.key=d(o,u.value||"");break;case 6:u.value==null&&a(o,13,p.lastStartLoc,0,x(u)),b.key=h(o,u.value||"");break;case 7:u.value==null&&a(o,13,p.lastStartLoc,0,x(u)),b.key=k(o,u.value||"");break;default:a(o,12,p.lastStartLoc,0);const L=o.context(),T=c(7,L.offset,L.startLoc);return T.value="",l(T,L.offset,L.startLoc),b.key=T,l(b,L.offset,L.startLoc),{nextConsumeToken:u,node:b}}return l(b,o.currentOffset(),o.currentPosition()),{node:b}}function N(o){const p=o.context(),b=p.currentType===1?o.currentOffset():p.offset,u=p.currentType===1?p.endLoc:p.startLoc,L=c(2,b,u);L.items=[];let T=null;do{const F=T||o.nextToken();switch(T=null,F.type){case 0:F.value==null&&a(o,13,p.lastStartLoc,0,x(F)),L.items.push(m(o,F.value||""));break;case 6:F.value==null&&a(o,13,p.lastStartLoc,0,x(F)),L.items.push(h(o,F.value||""));break;case 5:F.value==null&&a(o,13,p.lastStartLoc,0,x(F)),L.items.push(d(o,F.value||""));break;case 7:F.value==null&&a(o,13,p.lastStartLoc,0,x(F)),L.items.push(k(o,F.value||""));break;case 8:const $=y(o);L.items.push($.node),T=$.nextConsumeToken||null;break}}while(p.currentType!==14&&p.currentType!==1);const S=p.currentType===1?p.lastOffset:o.currentOffset(),M=p.currentType===1?p.lastEndLoc:o.currentPosition();return l(L,S,M),L}function I(o,p,b,u){const L=o.context();let T=u.items.length===0;const S=c(1,p,b);S.cases=[],S.cases.push(u);do{const M=N(o);T||(T=M.items.length===0),S.cases.push(M)}while(L.currentType!==14);return T&&a(o,10,b,0),l(S,o.currentOffset(),o.currentPosition()),S}function O(o){const p=o.context(),{offset:b,startLoc:u}=p,L=N(o);return p.currentType===14?L:I(o,b,u,L)}function f(o){const p=Tt(o,Y({},e)),b=p.context(),u=c(0,b.offset,b.startLoc);return t&&u.loc&&(u.loc.source=o),u.body=O(p),b.currentType!==14&&a(p,13,b.lastStartLoc,0,o[b.offset]||""),l(u,p.currentOffset(),p.currentPosition()),u}return{parse:f}}function x(e){if(e.type===14)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"\u2026":t}function Pt(e,t={}){const r={ast:e,helpers:new Set};return{context:()=>r,helper:l=>(r.helpers.add(l),l)}}function Ce(e,t){for(let r=0;r<e.length;r++)ue(e[r],t)}function ue(e,t){switch(e.type){case 1:Ce(e.cases,t),t.helper("plural");break;case 2:Ce(e.items,t);break;case 6:ue(e.key,t),t.helper("linked");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named");break}}function Nt(e,t={}){const r=Pt(e);r.helper("normalize"),e.body&&ue(e.body,r);const a=r.context();e.helpers=Array.from(a.helpers)}function It(e,t){const{sourceMap:r,filename:a,breakLineCode:c,needIndent:l}=t,m={source:e.loc.source,filename:a,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:c,needIndent:l,indentLevel:0},h=()=>m;function d(O,f){m.code+=O}function k(O,f=!0){const o=f?c:"";d(l?o+"  ".repeat(O):o)}function P(O=!0){const f=++m.indentLevel;O&&k(f)}function _(O=!0){const f=--m.indentLevel;O&&k(f)}function y(){k(m.indentLevel)}return{context:h,push:d,indent:P,deindent:_,newline:y,helper:O=>`_${O}`,needIndent:()=>m.needIndent}}function vt(e,t){const{helper:r}=e;e.push(`${r("linked")}(`),Z(e,t.key),t.modifier&&(e.push(", "),Z(e,t.modifier)),e.push(")")}function Et(e,t){const{helper:r,needIndent:a}=e;e.push(`${r("normalize")}([`),e.indent(a());const c=t.items.length;for(let l=0;l<c&&(Z(e,t.items[l]),l!==c-1);l++)e.push(", ");e.deindent(a()),e.push("])")}function Ft(e,t){const{helper:r,needIndent:a}=e;if(t.cases.length>1){e.push(`${r("plural")}([`),e.indent(a());const c=t.cases.length;for(let l=0;l<c&&(Z(e,t.cases[l]),l!==c-1);l++)e.push(", ");e.deindent(a()),e.push("])")}}function Dt(e,t){t.body?Z(e,t.body):e.push("null")}function Z(e,t){const{helper:r}=e;switch(t.type){case 0:Dt(e,t);break;case 1:Ft(e,t);break;case 2:Et(e,t);break;case 6:vt(e,t);break;case 8:e.push(JSON.stringify(t.value),t);break;case 7:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${r("interpolate")}(${r("list")}(${t.index}))`,t);break;case 4:e.push(`${r("interpolate")}(${r("named")}(${JSON.stringify(t.key)}))`,t);break;case 9:e.push(JSON.stringify(t.value),t);break;case 3:e.push(JSON.stringify(t.value),t);break}}const Mt=(e,t={})=>{const r=C(t.mode)?t.mode:"normal",a=C(t.filename)?t.filename:"message.intl",c=!!t.sourceMap,l=t.breakLineCode!=null?t.breakLineCode:r==="arrow"?";":`
`,m=t.needIndent?t.needIndent:r!=="arrow",h=e.helpers||[],d=It(e,{mode:r,filename:a,sourceMap:c,breakLineCode:l,needIndent:m});d.push(r==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),d.indent(m),h.length>0&&(d.push(`const { ${h.map(_=>`${_}: _${_}`).join(", ")} } = ctx`),d.newline()),d.push("return "),Z(d,e),d.deindent(m),d.push("}");const{code:k,map:P}=d.context();return{ast:e,code:k,map:P?P.toJSON():void 0}};function At(e,t={}){const r=Y({},t),c=wt(r).parse(e);return Nt(c,r),Mt(c,r)}/*!
  * @intlify/devtools-if v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const ve={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};/*!
  * @intlify/core-base v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */let z=null;function nn(e){z=e}function Rt(e,t,r){z&&z.emit(ve.I18nInit,{timestamp:Date.now(),i18n:e,version:t,meta:r})}const Wt=$t(ve.FunctionTranslate);function $t(e){return t=>z&&z.emit(e,t)}const xt="9.1.9",fe=-1,rn="";function Vt(){return{upper:e=>C(e)?e.toUpperCase():e,lower:e=>C(e)?e.toLowerCase():e,capitalize:e=>C(e)?`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`:e}}let Ee;function sn(e){Ee=e}let Fe=null;const an=e=>{Fe=e},Ht=()=>Fe;let Oe=0;function ln(e={}){const t=C(e.version)?e.version:xt,r=C(e.locale)?e.locale:"en-US",a=J(e.fallbackLocale)||E(e.fallbackLocale)||C(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:r,c=E(e.messages)?e.messages:{[r]:{}},l=E(e.datetimeFormats)?e.datetimeFormats:{[r]:{}},m=E(e.numberFormats)?e.numberFormats:{[r]:{}},h=Y({},e.modifiers||{},Vt()),d=e.pluralRules||{},k=W(e.missing)?e.missing:null,P=R(e.missingWarn)||ge(e.missingWarn)?e.missingWarn:!0,_=R(e.fallbackWarn)||ge(e.fallbackWarn)?e.fallbackWarn:!0,y=!!e.fallbackFormat,N=!!e.unresolving,I=W(e.postTranslation)?e.postTranslation:null,O=E(e.processor)?e.processor:null,f=R(e.warnHtmlMessage)?e.warnHtmlMessage:!0,o=!!e.escapeParameter,p=W(e.messageCompiler)?e.messageCompiler:Ee,b=W(e.onWarn)?e.onWarn:Be,u=e,L=q(u.__datetimeFormatters)?u.__datetimeFormatters:new Map,T=q(u.__numberFormatters)?u.__numberFormatters:new Map,S=q(u.__meta)?u.__meta:{};Oe++;const M={version:t,cid:Oe,locale:r,fallbackLocale:a,messages:c,datetimeFormats:l,numberFormats:m,modifiers:h,pluralRules:d,missing:k,missingWarn:P,fallbackWarn:_,fallbackFormat:y,unresolving:N,postTranslation:I,processor:O,warnHtmlMessage:f,escapeParameter:o,messageCompiler:p,onWarn:b,__datetimeFormatters:L,__numberFormatters:T,__meta:S};return __INTLIFY_PROD_DEVTOOLS__&&Rt(M,t,S),M}function de(e,t,r,a,c){const{missing:l,onWarn:m}=e;if(l!==null){const h=l(e,r,t,c);return C(h)?h:t}else return t}function ne(e,t,r){const a=e;a.__localeChainCache||(a.__localeChainCache=new Map);let c=a.__localeChainCache.get(r);if(!c){c=[];let l=[r];for(;J(l);)l=Se(c,l,t);const m=J(t)?t:E(t)?t.default?t.default:null:t;l=C(m)?[m]:m,J(l)&&Se(c,l,!1),a.__localeChainCache.set(r,c)}return c}function Se(e,t,r){let a=!0;for(let c=0;c<t.length&&R(a);c++){const l=t[c];C(l)&&(a=Ut(e,t[c],r))}return a}function Ut(e,t,r){let a;const c=t.split("-");do{const l=c.join("-");a=jt(e,l,r),c.splice(-1,1)}while(c.length&&a===!0);return a}function jt(e,t,r){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const c=t.replace(/!/g,"");e.push(c),(J(r)||E(r))&&r[c]&&(a=r[c])}return a}function cn(e,t,r){const a=e;a.__localeChainCache=new Map,ne(e,r,t)}const Jt=e=>e;let we=Object.create(null);function on(e,t={}){{const a=(t.onCacheKey||Jt)(e),c=we[a];if(c)return c;let l=!1;const m=t.onError||ht;t.onError=k=>{l=!0,m(k)};const{code:h}=At(e,t),d=new Function(`return ${h}`)();return l?d:we[a]=d}}function Q(e){return ie(e,null,void 0)}const Pe=()=>"",V=e=>W(e);function un(e,...t){const{fallbackFormat:r,postTranslation:a,unresolving:c,fallbackLocale:l,messages:m}=e,[h,d]=Yt(...t),k=R(d.missingWarn)?d.missingWarn:e.missingWarn,P=R(d.fallbackWarn)?d.fallbackWarn:e.fallbackWarn,_=R(d.escapeParameter)?d.escapeParameter:e.escapeParameter,y=!!d.resolvedMessage,N=C(d.default)||R(d.default)?R(d.default)?h:d.default:r?h:"",I=r||N!=="",O=C(d.locale)?d.locale:e.locale;_&&Kt(d);let[f,o,p]=y?[h,O,m[O]||{}]:Gt(e,h,O,l,P,k),b=h;if(!y&&!(C(f)||V(f))&&I&&(f=N,b=f),!y&&(!(C(f)||V(f))||!C(o)))return c?fe:h;let u=!1;const L=()=>{u=!0},T=V(f)?f:De(e,h,o,f,b,L);if(u)return f;const S=Qt(e,o,p,d),M=pt(S),F=qt(e,T,M),$=a?a(F):F;if(__INTLIFY_PROD_DEVTOOLS__){const B={timestamp:Date.now(),key:C(h)?h:V(f)?f.key:"",locale:o||(V(f)?f.locale:""),format:C(f)?f:V(f)?f.source:"",message:$};B.meta=Y({},e.__meta,Ht()||{}),Wt(B)}return $}function Kt(e){J(e.list)?e.list=e.list.map(t=>C(t)?ke(t):t):q(e.named)&&Object.keys(e.named).forEach(t=>{C(e.named[t])&&(e.named[t]=ke(e.named[t]))})}function Gt(e,t,r,a,c,l){const{messages:m,onWarn:h}=e,d=ne(e,a,r);let k={},P,_=null;const y="translate";for(let N=0;N<d.length&&(P=d[N],k=m[P]||{},(_=Ie(k,t))===null&&(_=k[t]),!(C(_)||W(_)));N++){const I=de(e,t,P,l,y);I!==t&&(_=I)}return[_,P,k]}function De(e,t,r,a,c,l){const{messageCompiler:m,warnHtmlMessage:h}=e;if(V(a)){const k=a;return k.locale=k.locale||r,k.key=k.key||t,k}const d=m(a,Bt(e,r,c,a,h,l));return d.locale=r,d.key=t,d.source=a,d}function qt(e,t,r){return t(r)}function Yt(...e){const[t,r,a]=e,c={};if(!C(t)&&!A(t)&&!V(t))throw Q(14);const l=A(t)?String(t):(V(t),t);return A(r)?c.plural=r:C(r)?c.default=r:E(r)&&!ce(r)?c.named=r:J(r)&&(c.list=r),A(a)?c.plural=a:C(a)?c.default=a:E(a)&&Y(c,a),[l,c]}function Bt(e,t,r,a,c,l){return{warnHtmlMessage:c,onError:m=>{throw l&&l(m),m},onCacheKey:m=>Ge(t,r,m)}}function Qt(e,t,r,a){const{modifiers:c,pluralRules:l}=e,h={locale:t,modifiers:c,pluralRules:l,messages:d=>{const k=Ie(r,d);if(C(k)){let P=!1;const y=De(e,d,t,k,d,()=>{P=!0});return P?Pe:y}else return V(k)?k:Pe}};return e.processor&&(h.processor=e.processor),a.list&&(h.list=a.list),a.named&&(h.named=a.named),A(a.plural)&&(h.pluralIndex=a.plural),h}function fn(e,...t){const{datetimeFormats:r,unresolving:a,fallbackLocale:c,onWarn:l}=e,{__datetimeFormatters:m}=e,[h,d,k,P]=Zt(...t),_=R(k.missingWarn)?k.missingWarn:e.missingWarn;R(k.fallbackWarn)?k.fallbackWarn:e.fallbackWarn;const y=!!k.part,N=C(k.locale)?k.locale:e.locale,I=ne(e,c,N);if(!C(h)||h==="")return new Intl.DateTimeFormat(N).format(d);let O={},f,o=null;const p="datetime format";for(let L=0;L<I.length&&(f=I[L],O=r[f]||{},o=O[h],!E(o));L++)de(e,h,f,_,p);if(!E(o)||!C(f))return a?fe:h;let b=`${f}__${h}`;ce(P)||(b=`${b}__${JSON.stringify(P)}`);let u=m.get(b);return u||(u=new Intl.DateTimeFormat(f,Y({},o,P)),m.set(b,u)),y?u.formatToParts(d):u.format(d)}function Zt(...e){const[t,r,a,c]=e;let l={},m={},h;if(C(t)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(t))throw Q(16);h=new Date(t);try{h.toISOString()}catch{throw Q(16)}}else if(Ye(t)){if(isNaN(t.getTime()))throw Q(15);h=t}else if(A(t))h=t;else throw Q(14);return C(r)?l.key=r:E(r)&&(l=r),C(a)?l.locale=a:E(a)&&(m=a),E(c)&&(m=c),[l.key||"",h,l,m]}function dn(e,t,r){const a=e;for(const c in r){const l=`${t}__${c}`;!a.__datetimeFormatters.has(l)||a.__datetimeFormatters.delete(l)}}function mn(e,...t){const{numberFormats:r,unresolving:a,fallbackLocale:c,onWarn:l}=e,{__numberFormatters:m}=e,[h,d,k,P]=Xt(...t),_=R(k.missingWarn)?k.missingWarn:e.missingWarn;R(k.fallbackWarn)?k.fallbackWarn:e.fallbackWarn;const y=!!k.part,N=C(k.locale)?k.locale:e.locale,I=ne(e,c,N);if(!C(h)||h==="")return new Intl.NumberFormat(N).format(d);let O={},f,o=null;const p="number format";for(let L=0;L<I.length&&(f=I[L],O=r[f]||{},o=O[h],!E(o));L++)de(e,h,f,_,p);if(!E(o)||!C(f))return a?fe:h;let b=`${f}__${h}`;ce(P)||(b=`${b}__${JSON.stringify(P)}`);let u=m.get(b);return u||(u=new Intl.NumberFormat(f,Y({},o,P)),m.set(b,u)),y?u.formatToParts(d):u.format(d)}function Xt(...e){const[t,r,a,c]=e;let l={},m={};if(!A(t))throw Q(14);const h=t;return C(r)?l.key=r:E(r)&&(l=r),C(a)?l.locale=a:E(a)&&(m=a),E(c)&&(m=c),[l.key||"",h,l,m]}function pn(e,t,r){const a=e;for(const c in r){const l=`${t}__${c}`;!a.__numberFormatters.has(l)||a.__numberFormatters.delete(l)}}typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Qe().__INTLIFY_PROD_DEVTOOLS__=!1);/*!
  * @intlify/vue-devtools v9.1.9
  * (c) 2021 kazuya kawaguchi
  * Released under the MIT License.
  */const hn={["vue-devtools-plugin-vue-i18n"]:"Vue I18n devtools",["vue-i18n-resource-inspector"]:"I18n Resources",["vue-i18n-timeline"]:"Vue I18n"},gn={["vue-i18n-resource-inspector"]:"Search for scopes ..."},bn={["vue-i18n-timeline"]:16764185};export{an as A,Yt as B,un as C,Zt as D,fn as E,Xt as F,mn as G,ne as H,rn as M,fe as N,hn as V,Y as a,C as b,q as c,J as d,R as e,ie as f,tn as g,ce as h,A as i,Qe as j,E as k,en as l,zt as m,Le as n,ge as o,W as p,ln as q,sn as r,nn as s,gn as t,cn as u,bn as v,on as w,Ie as x,dn as y,pn as z};