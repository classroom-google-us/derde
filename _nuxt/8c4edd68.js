import{r as p,E as m}from"./entry.045c8965.js";const u=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function l(e,o){if(typeof e!="string")throw new TypeError("argument str must be a string");const i={},c=(o||{}).decode||h;let s=0;for(;s<e.length;){const r=e.indexOf("=",s);if(r===-1)break;let n=e.indexOf(";",s);if(n===-1)n=e.length;else if(n<r){s=e.lastIndexOf(";",r-1)+1;continue}const f=e.slice(s,r).trim();if(i[f]===void 0){let a=e.slice(r+1,n).trim();a.codePointAt(0)===34&&(a=a.slice(1,-1)),i[f]=y(a,c)}s=n+1}return i}function d(e,o,i){const t=i||{},c=t.encode||x;if(typeof c!="function")throw new TypeError("option encode is invalid");if(!u.test(e))throw new TypeError("argument name is invalid");const s=c(o);if(s&&!u.test(s))throw new TypeError("argument val is invalid");let r=e+"="+s;if(t.maxAge!==void 0&&t.maxAge!==null){const n=t.maxAge-0;if(Number.isNaN(n)||!Number.isFinite(n))throw new TypeError("option maxAge is invalid");r+="; Max-Age="+Math.floor(n)}if(t.domain){if(!u.test(t.domain))throw new TypeError("option domain is invalid");r+="; Domain="+t.domain}if(t.path){if(!u.test(t.path))throw new TypeError("option path is invalid");r+="; Path="+t.path}if(t.expires){if(!w(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");r+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(r+="; HttpOnly"),t.secure&&(r+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":{r+="; Priority=Low";break}case"medium":{r+="; Priority=Medium";break}case"high":{r+="; Priority=High";break}default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:{r+="; SameSite=Strict";break}case"lax":{r+="; SameSite=Lax";break}case"strict":{r+="; SameSite=Strict";break}case"none":{r+="; SameSite=None";break}default:throw new TypeError("option sameSite is invalid")}return t.partitioned&&(r+="; Partitioned"),r}function w(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function y(e,o){try{return o(e)}catch(i){return e}}function h(e){return e.includes("%")?decodeURIComponent(e):e}function x(e){return encodeURIComponent(e)}const S=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,g=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,b=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function k(e,o){if(e!=="__proto__"&&!(e==="constructor"&&o&&typeof o=="object"&&"prototype"in o))return o}function N(e,o={}){if(typeof e!="string")return e;const i=e.toLowerCase().trim();if(i==="true")return!0;if(i==="false")return!1;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i!=="undefined"){if(!b.test(e)){if(o.strict)throw new SyntaxError("Invalid JSON");return e}try{return S.test(e)||g.test(e)?JSON.parse(e,k):JSON.parse(e)}catch(t){if(o.strict)throw t;return e}}}const E={path:"/",watch:!0,decode:e=>N(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function F(e,o){var s,r;const i={...E,...o},t=C(i)||{},c=p((r=t[e])!=null?r:(s=i.default)==null?void 0:s.call(i));{const n=()=>{I(e,c.value,i)};i.watch?m(c,n,{deep:i.watch!=="shallow"}):n()}return c}function C(e={}){return l(document.cookie,e)}function T(e,o,i={}){return o==null?d(e,o,{...i,maxAge:-1}):d(e,o,i)}function I(e,o,i={}){document.cookie=T(e,o,i)}export{F as u};
