const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Bu1vvKY9.js","./BLFlnk3S.js","./entry.CuKyFPZT.css","./5k4Fl3l9.js","./Globe.D1sME5PJ.css","./OVx2CuZT.js","./Globe.DGmOlfLV.css"])))=>i.map(i=>d[i]);
import{a0 as d,r as _,o as f,$ as E,e as p,d as i,m as u,q as T,k as g,a1 as b,a2 as x,a3 as s}from"./BLFlnk3S.js";const R=Symbol.for("nuxt:client-only"),A=d({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(o,{slots:t,attrs:e}){const a=_(!1);return f(()=>{a.value=!0}),E(R,!0),r=>{var l;if(a.value)return(l=t.default)==null?void 0:l.call(t);const n=t.fallback||t.placeholder;if(n)return n();const c=r.fallback||r.placeholder||"",m=r.fallbackTag||r.placeholderTag||"span";return p(m,e,c)}}});function M(){if(!document||!window||window.matchMedia("(prefers-reduced-motion: reduce)")===!0||window.matchMedia("(prefers-reduced-motion: reduce)").matches===!0||navigator.hardwareConcurrency&&navigator.hardwareConcurrency<4)return!1;try{let t=document.createElement("canvas");const e=t.getContext("webgl2"),a=!!e,r=e.getExtension("WEBGL_debug_renderer_info"),n={vendor:e.getParameter(r.UNMASKED_VENDOR_WEBGL),renderer:e.getParameter(r.UNMASKED_RENDERER_WEBGL),maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE),maxTextureUnits:e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),maxCombinedTextureUnits:e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),maxVertexAttributes:e.getParameter(e.MAX_VERTEX_ATTRIBS),maxVertexUniformVectors:e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),maxFragmentUniformVectors:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)};return e&&(e.getExtension("WEBGL_lose_context").loseContext(),t.remove(),t=null),a}catch{return!1}}const S={__name:"Globe.client",props:{blob:Boolean},setup(o){const t=o,e=x(async()=>t.blob?s(()=>import("./Bu1vvKY9.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url):s(()=>import("./OVx2CuZT.js"),__vite__mapDeps([5,1,2,3,6]),import.meta.url)),a=_(M());return(r,n)=>{const c=A;return i(),u(c,null,{default:T(()=>[a.value?(i(),u(g(e),{key:0})):b(r.$slots,"default",{key:1})]),_:3})}}};export{S as _,A as a};
