import{r as a}from"./Tv64lZJP.js";import{r as y,g as S,S as f,i as b,u as x,w as d,n as l,o as C,a as A}from"./BLFlnk3S.js";const c=y(null);if(typeof window<"u"&&typeof window.matchMedia=="function"){const t=window.matchMedia("(prefers-reduced-motion: reduce)");t.addEventListener("change",()=>{c.value=t.matches}),c.value=!t||t.matches}function M(){return c}S.registerPlugin(f);const R=(t,i)=>{const m=M(),g=b("pageContext"),p=x();let e,o;d(()=>p.width,()=>{s(),l(()=>r())}),d(m,()=>{s(),l(()=>r())}),C(()=>{g.$page.loader.ready.then(()=>{r()})}),A(()=>s());function r(){const n=t.value.querySelector(".animation-container canvas"),u=n.dataset.file,h=i==="cover"?a.Fit.Cover:a.Fit.Contain,v=i==="cover"?a.Alignment.CenterRight:a.Alignment.Center,w=i?new a.Layout({fit:h,alignment:v}):null;n&&u&&(e=new a.Rive({src:u,canvas:n,autoplay:!1,stateMachines:"State Machine 1",layout:w,onLoad:()=>{n.setAttribute("width",e.artboard.bounds.maxX*2),n.setAttribute("height",e.artboard.bounds.maxY*2),e.resizeDrawingSurfaceToCanvas(),o=f.create({trigger:n,onEnter:()=>e.play(),onEnterBack:()=>e.play(),onLeave:()=>e.pause(),onLeaveBack:()=>e.pause()})}}))}function s(){e&&e.cleanup(),o&&o.kill()}};export{M as a,R as u};
