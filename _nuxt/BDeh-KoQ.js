import{x as T,aj as x,ak as F,al as O,R as $,am as n}from"./BLFlnk3S.js";function U(o,r,i){const[e={},u]=typeof r=="string"?[{},r]:[r,i],t=T(()=>n(o)),s=e.key||x([u,typeof t.value=="string"?t.value:"",...j(e)]);if(!s||typeof s!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+s);if(!o)throw new Error("[nuxt] [useFetch] request is missing.");const c=s===u?"$f"+s:s;if(!e.baseURL&&typeof t.value=="string"&&t.value[0]==="/"&&t.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:d,lazy:y,default:b,transform:g,pick:w,watch:h,immediate:v,getCachedData:k,deep:_,dedupe:q,...D}=e,l=F({...O,...D,cache:typeof e.cache=="boolean"?void 0:e.cache}),R={server:d,lazy:y,default:b,transform:g,pick:w,immediate:v,getCachedData:k,deep:_,dedupe:q,watch:h===!1?[]:[l,t,...h||[]]};let a;return $(c,()=>{var p;(p=a==null?void 0:a.abort)==null||p.call(a,"Request aborted as another request to the same endpoint was initiated."),a=typeof AbortController<"u"?new AbortController:{};const m=n(e.timeout);let f;return m&&(f=setTimeout(()=>a.abort("Request aborted due to timeout."),m),a.signal.onabort=()=>clearTimeout(f)),(e.$fetch||globalThis.$fetch)(t.value,{signal:a.signal,...l}).finally(()=>{clearTimeout(f)})},R)}function j(o){var i;const r=[((i=n(o.method))==null?void 0:i.toUpperCase())||"GET",n(o.baseURL)];for(const e of[o.params||o.query]){const u=n(e);if(!u)continue;const t={};for(const[s,c]of Object.entries(u))t[n(s)]=n(c);r.push(t)}return r}export{U as u};
