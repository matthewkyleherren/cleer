import{_ as D,Y as Ce,u as K,i as R,Z as xe,r as k,a as ee,o as G,b as N,n as ne,d as v,e as x,j as $,y as Me,l as se,k as S,F as I,h as z,f as c,p as W,T as Re,g as _,S as j,w as le,t as L,m as F,G as V,A as oe,E as _e,q as Ae,I as be,z as ve,Q as $e,B as ke,$ as me,s as Fe,M as Ee,N as Be,J as Ge,K as We,L as Ue}from"./BLFlnk3S.js";import{S as Ye}from"./L8mL5fKl.js";import{r as Oe}from"./Tv64lZJP.js";import{M as Xe}from"./8kGz4h2j.js";import{a as Qe,_ as Ze}from"./D3KPaupx.js";import{_ as Je}from"./DtYiMMFZ.js";import{P as Ke}from"./CBbjT2RM.js";import{G as et}from"./MCm20n4E.js";import{F as tt}from"./kcU7VYkb.js";import{u as ot,a as st}from"./ClNogb_c.js";import{u as lt}from"./BDeh-KoQ.js";import"./BbpdfCL9.js";import"./BddWpDnS.js";const Pe=window.setInterval,at=["src"],nt={__name:"DashboardImageSequence",props:{video:{type:[Boolean,Object],default:!1}},setup(e,{expose:t}){const n=Ce(),o=K();R("pageContext");const s=xe(),l=k(null),y=k(null),p=k(null),a=k(null),i=k(!1),r=k(!1),u=k(!1),d=k(!1);let g=0;ee(()=>{d.value&&(l.value.querySelector(".intro-video"),l.value.querySelector(".intro-video").addEventListener("canplaythrough",f),l.value.querySelector(".intro-video").addEventListener("ended",w))}),G(()=>{d.value=o.width>N.small,d.value||l.value.querySelector(".intro-video").remove(),ne(()=>{h()})});const h=()=>{d.value&&(l.value.querySelector(".intro-video").addEventListener("canplaythrough",f),l.value.querySelector(".intro-video").addEventListener("ended",w))},f=()=>i.value=!0,w=()=>r.value=!0,b=()=>u.value=!0,m=()=>l.value.querySelector(".full-video").play(),q=()=>{const T=new Promise(P=>{if(n.homeHeaderPlayed)P();else{const A=Pe(()=>{l.value.querySelector(".intro-video").play(),P(),clearInterval(A)},10)}}),C=new Promise(P=>{if(n.homeHeaderPlayed)P();else{const A=Pe(()=>{if(r.value){clearInterval(A),P();return}},10)}});return{start:T,end:C}},B=()=>new Promise(T=>{const C=[];a.value.forEach(P=>{const A=Re(P);C.push(A)}),Promise.all(C).then(()=>{b(),T()})}),M=T=>{const C=Math.floor(_.utils.mapRange(0,1,1,75,T));a.value[g].style.visibility="hidden",a.value[g].style.opacity="0",a.value[C].style.visibility="visible",a.value[C].style.opacity="1",g=C},E=T=>{T?(_.set([l.value.querySelector(".scroll-video")],{clearProps:"all"}),_.killTweensOf([l.value.querySelector(".scroll-video")]),l.value.querySelector(".intro-video").style.opacity=0,_.fromTo(l.value.querySelector(".scroll-video"),{y:40,opacity:0,scale:.95},{y:0,scale:1,opacity:1,ease:"power2.inOut",duration:1.5,delay:.5})):_.to(l.value.querySelector(".scroll-video"),{opacity:1,duration:.25,onComplete:()=>l.value.querySelector(".intro-video").style.opacity=0})};return G(()=>{a.value=l.value.querySelectorAll(".scroll-video img")}),t({playIntro:q,playMobile:m,scrub:M,switchVideo:E,canPlayScroll:B}),(T,C)=>(v(),x("div",{ref_key:"el",ref:l,"data-component":"dashboard"},[$(Me,{class:"img",asset:e.video.fallbackImage,sizes:"xsmall:800px medium:1600px xlarge:3200px"},null,8,["asset"]),$(se,{ref_key:"intro",ref:y,class:"intro-video",asset:e.video.intro,muted:!0,playsinline:"",loop:!1},null,8,["asset"]),$(se,{ref:"full",class:"full-video",asset:e.video.full,muted:!0,playsinline:"",loop:!1},null,8,["asset"]),S(s).isDesktop?(v(),x("div",{key:0,ref_key:"scroll",ref:p,class:"scroll-video"},[(v(),x(I,null,z(76,P=>c("img",{key:P,src:`/imgs/home/header/webp/ct_header_end${P}.webp`,alt:"Dashboard sequence"},null,8,at)),64))],512)):W("",!0)],512))}},rt=D(nt,[["__scopeId","data-v-16998658"]]);_.registerPlugin(j);const it=(e,t)=>{const{isMobile:n,isTablet:o}=xe(),s=K(),l=R("pageContext"),y=R("$scroller"),p=Ce();le(()=>s.width,()=>{g(),a()}),ee(()=>g()),G(()=>a());const a=()=>{(n||o||s.touch)&&s.width<=N.medium?i():r(),l.$page.loader.ready.then(()=>{ne(()=>{(n||o||s.touch)&&s.width<=N.medium?u():(y.value.stop(),d())})})},i=()=>{_.set([e.value.querySelector(".title-row .title"),e.value.querySelector(".title-row .scroll-btn"),e.value.querySelector(".title-row .description")],{y:40,opacity:0})},r=()=>{_.set([e.value.querySelector(".title-row .title"),e.value.querySelector(".title-row .scroll-btn"),e.value.querySelector(".title-row .description")],{y:40,opacity:0})},u=()=>{e.value.classList.add("ready"),t.value.playMobile(),_.fromTo([e.value.querySelector(".title-row .title"),e.value.querySelector(".title-row .scroll-btn"),e.value.querySelector(".title-row .description")],{y:80,opacity:0},{y:0,opacity:1,ease:"power2.out",stagger:.1,duration:1,delay:p.homeHeaderPlayed||p.isFirstLoad?0:2})},d=()=>{e.value.classList.add("ready");const{start:h,end:f}=t.value.playIntro(),w=t.value.canPlayScroll();h.then(()=>{p.homeHeaderPlayed?w.then(()=>{t.value&&t.value.switchVideo(!0),_.fromTo([e.value.querySelector(".title-row .title"),e.value.querySelector(".title-row .scroll-btn")],{y:80,opacity:0},{y:0,opacity:1,ease:"power2.inOut",stagger:.25,duration:2,delay:p.homeHeaderPlayed?0:2})}):_.fromTo([e.value.querySelector(".title-row .title"),e.value.querySelector(".title-row .scroll-btn")],{y:80,opacity:0},{y:0,opacity:1,ease:"power2.inOut",stagger:.25,duration:2,delay:p.homeHeaderPlayed?0:2})}),Promise.all([f,w]).then(()=>{p.homeHeaderPlayed||(t.value&&t.value.switchVideo(!1),p.setHomeHeaderIntro(!0)),y.value.start(),_.to(e.value,{yPercent:-6,ease:"none",scrollTrigger:{trigger:e.value,start:"top top",end:"bottom bottom",scrub:!0}}),_.fromTo([e.value.querySelector(".title-row .scroll-btn-container")],{scale:1,opacity:1},{opacity:0,y:-10,ease:"none",scrollTrigger:{trigger:e.value,start:"top top",end:"top+=250px top",scrub:!0}}),_.fromTo([e.value.querySelector(".title-row .description")],{y:80,opacity:0},{y:0,opacity:1,ease:"none",stagger:.1,scrollTrigger:{trigger:e.value,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:({progress:b})=>{t.value&&t.value.scrub(b)}}})})},g=()=>{_.killTweensOf([e.value.querySelector(".title-row .description"),e.value.querySelector(".title-row .scroll-btn"),e.value.querySelector(".title-row .title")]),_.set([e.value.querySelector(".title-row .description"),e.value.querySelector(".title-row .scroll-btn"),e.value.querySelector(".title-row .title")],{clearProps:"all"})}},ct={class:"inner"},ut={class:"animation-container"},dt={class:"row align-center title-row"},pt={class:"xxlarge-32 col title-col"},yt={class:"-h3 title"},ht={class:"-body_large description"},ft={class:"scroll-btn-container"},gt={__name:"Header",props:{title:{type:String,default:""},description:{type:String,default:""},video:{type:[Boolean,Object],default:!1}},setup(e){const t=R("$scroller"),n=k(null),o=k(null);it(n,o);const s=()=>t.value.scrollTo(window.innerWidth>N.small?window.innerHeight*2:window.innerHeight,2);return(l,y)=>(v(),x("header",{ref_key:"el",ref:n,"data-component":"header"},[c("div",ct,[c("div",ut,[y[0]||(y[0]=c("span",{class:"gradient-top"},null,-1)),y[1]||(y[1]=c("span",{class:"gradient-bottom"},null,-1)),$(rt,{ref_key:"dashboard",ref:o,video:e.video},null,8,["video"])]),c("div",dt,[c("div",pt,[c("h1",yt,L(e.title),1),c("p",ht,L(e.description),1),c("span",ft,[$(S(Ye),{class:"scroll-btn",onClick:s})])])])])],512))}},vt=D(gt,[["__scopeId","data-v-c302eb90"]]);_.registerPlugin(j);const mt=e=>{const t=[],n=R("pageContext"),o=K();let s={root:null,rootMargin:"0px",threshold:.5},l,y;ee(()=>{t.forEach(i=>i.cleanup()),l.disconnect(),y.kill()}),G(()=>{p(),n.$page.loader.ready.then(()=>{a()})});const p=()=>{_.set(e.value,{y:20,opacity:0})},a=()=>{const i=[];_.to(e.value,{y:0,opacity:1,delay:o.width>N.small||o.width<=N.xsmall?0:2.5}),e.value.querySelectorAll(".item").forEach((r,u)=>{const d=r.querySelector("canvas"),g=d.dataset.file;r.index=u;const h=new Promise(f=>{const w=new Oe.Rive({src:g,canvas:d,autoplay:!1,onLoad:()=>{w.resizeDrawingSurfaceToCanvas(),f()}});t.push(w)});i.push(h)}),Promise.all(i).then(()=>{y=j.create({trigger:e.value,onEnter:()=>e.value.classList.add("active"),onLeave:()=>e.value.classList.remove("active"),onEnterBack:()=>e.value.classList.add("active"),onLeaveBack:()=>e.value.classList.remove("active")});const r=u=>{u.forEach(d=>{d.isIntersecting&&(t[d.target.index].play(),l.unobserve(d.target))})};l=new IntersectionObserver(r,s),e.value.querySelectorAll(".item").forEach(u=>{l.observe(u)})})};return{}},_t={class:"loop-container"},bt={class:"list"},xt={key:0,class:"image-wrapper"},St=["data-file"],wt={class:"content-wrapper"},qt={class:"-h4 content-title"},$t={class:"-body content-description"},kt={class:"list"},Pt={key:0,class:"image-wrapper"},Tt=["data-file"],Lt={class:"content-wrapper"},Ct={class:"-h4 content-title"},Mt={class:"-body content-description"},At={__name:"StatisticsLoop",props:{list:{type:Array,default:()=>[]}},setup(e){const t=k(null);return mt(t),(n,o)=>(v(),x("div",{ref_key:"el",ref:t,"data-component":"statistics-loop"},[c("div",_t,[c("ul",bt,[(v(!0),x(I,null,z(e.list,(s,l)=>(v(),x("li",{key:l,class:"item"},[s.animation?(v(),x("div",xt,[c("canvas",{class:"canvas","data-file":s.animation.file},null,8,St)])):W("",!0),c("div",wt,[c("p",qt,L(s.title),1),c("p",$t,L(s.description),1)])]))),128))]),c("ul",kt,[(v(!0),x(I,null,z(e.list,(s,l)=>(v(),x("li",{key:l,class:"item"},[s.animation?(v(),x("div",Pt,[c("canvas",{class:"canvas","data-file":s.animation.file},null,8,Tt)])):W("",!0),c("div",Lt,[c("p",Ct,L(s.title),1),c("p",Mt,L(s.description),1)])]))),128))])])],512))}},Et=D(At,[["__scopeId","data-v-eb83121f"]]);_.registerPlugin(j);const Bt=e=>{const t=K(),n=R("pageContext");le(()=>t.width,()=>{l(),o(),ne(()=>{s()})}),G(()=>{o(),n.$page.loader.ready.then(()=>{s()})}),ee(()=>l());const o=()=>{_.set(e.value.querySelectorAll(".card"),{opacity:0,y:t.width>N.small?140:80})},s=()=>{_.to(e.value.querySelectorAll(".card"),{opacity:1,y:0,delay:t.width>N.small||t.width<=N.xsmall?0:2.5,ease:"power2.out",stagger:.25,duration:2,scrollTrigger:{trigger:e.value,start:"top bottom",end:"bottom bottom",scrub:t.width>N.small}}),_.to(e.value,{opacity:0,scrollTrigger:{trigger:e.value,start:"bottom center",end:"bottom top",scrub:!0}})},l=()=>{_.killTweensOf([e.value.querySelectorAll(".card"),e.value]),_.set([e.value.querySelectorAll(".card"),e.value],{clearProps:"all"})}},Ot={class:"row align-center"},It={class:"xxlarge-26 xlarge-28 medium-32 small-32 col cards-list"},zt={__name:"Vectors",props:{list:{type:Array,default:()=>[]}},setup(e){const t=k(null);return Bt(t),(n,o)=>(v(),x("section",{id:"vectors",ref_key:"el",ref:t,"data-component":"vectors"},[o[0]||(o[0]=c("span",{class:"bg"},null,-1)),c("div",Ot,[c("div",It,[(v(!0),x(I,null,z(e.list,(s,l)=>(v(),F(S(Xe),V({key:l,class:"card",ref_for:!0},s,{index:l}),null,16,["index"]))),128))])])],512))}},Dt=D(zt,[["__scopeId","data-v-2ef994c7"]]);/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ht=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,Nt=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,Vt=Math.PI/180,he=Math.sin,fe=Math.cos,ce=Math.abs,ie=Math.sqrt,jt=function(t){return typeof t=="number"},Te=1e5,J=function(t){return Math.round(t*Te)/Te||0};function Rt(e,t,n,o,s,l,y){for(var p=e.length,a,i,r,u,d;--p>-1;)for(a=e[p],i=a.length,r=0;r<i;r+=2)u=a[r],d=a[r+1],a[r]=u*t+d*o+l,a[r+1]=u*n+d*s+y;return e._dirty=1,e}function Ft(e,t,n,o,s,l,y,p,a){if(!(e===p&&t===a)){n=ce(n),o=ce(o);var i=s%360*Vt,r=fe(i),u=he(i),d=Math.PI,g=d*2,h=(e-p)/2,f=(t-a)/2,w=r*h+u*f,b=-u*h+r*f,m=w*w,q=b*b,B=m/(n*n)+q/(o*o);B>1&&(n=ie(B)*n,o=ie(B)*o);var M=n*n,E=o*o,T=(M*E-M*q-E*m)/(M*q+E*m);T<0&&(T=0);var C=(l===y?-1:1)*ie(T),P=C*(n*b/o),A=C*-(o*w/n),te=(e+p)/2,Z=(t+a)/2,re=te+(r*P-u*A),De=Z+(u*P+r*A),U=(w-P)/n,Y=(b-A)/o,ue=(-w-P)/n,de=(-b-A)/o,Se=U*U+Y*Y,we=(Y<0?-1:1)*Math.acos(U/ie(Se)),X=(U*de-Y*ue<0?-1:1)*Math.acos((U*ue+Y*de)/ie(Se*(ue*ue+de*de)));isNaN(X)&&(X=d),!y&&X>0?X-=g:y&&X<0&&(X+=g),we%=g,X%=g;var qe=Math.ceil(ce(X)/(g/4)),Q=[],pe=X/qe,ye=4/3*he(pe/2)/(1+fe(pe/2)),He=r*n,Ne=u*n,Ve=u*-o,je=r*o,H;for(H=0;H<qe;H++)s=we+H*pe,w=fe(s),b=he(s),U=fe(s+=pe),Y=he(s),Q.push(w-ye*b,b+ye*w,U+ye*Y,Y-ye*U,U,Y);for(H=0;H<Q.length;H+=2)w=Q[H],b=Q[H+1],Q[H]=w*He+b*Ve+re,Q[H+1]=w*Ne+b*je+De;return Q[H-2]=p,Q[H-1]=a,Q}}function Gt(e){var t=(e+"").replace(Nt,function(P){var A=+P;return A<1e-4&&A>-1e-4?0:A}).match(Ht)||[],n=[],o=0,s=0,l=2/3,y=t.length,p=0,a="ERROR: malformed path: "+e,i,r,u,d,g,h,f,w,b,m,q,B,M,E,T,C=function(A,te,Z,re){m=(Z-A)/3,q=(re-te)/3,f.push(A+m,te+q,Z-m,re-q,Z,re)};if(!e||!isNaN(t[0])||isNaN(t[1]))return console.log(a),n;for(i=0;i<y;i++)if(M=g,isNaN(t[i])?(g=t[i].toUpperCase(),h=g!==t[i]):i--,u=+t[i+1],d=+t[i+2],h&&(u+=o,d+=s),i||(w=u,b=d),g==="M")f&&(f.length<8?n.length-=1:p+=f.length),o=w=u,s=b=d,f=[u,d],n.push(f),i+=2,g="L";else if(g==="C")f||(f=[0,0]),h||(o=s=0),f.push(u,d,o+t[i+3]*1,s+t[i+4]*1,o+=t[i+5]*1,s+=t[i+6]*1),i+=6;else if(g==="S")m=o,q=s,(M==="C"||M==="S")&&(m+=o-f[f.length-4],q+=s-f[f.length-3]),h||(o=s=0),f.push(m,q,u,d,o+=t[i+3]*1,s+=t[i+4]*1),i+=4;else if(g==="Q")m=o+(u-o)*l,q=s+(d-s)*l,h||(o=s=0),o+=t[i+3]*1,s+=t[i+4]*1,f.push(m,q,o+(u-o)*l,s+(d-s)*l,o,s),i+=4;else if(g==="T")m=o-f[f.length-4],q=s-f[f.length-3],f.push(o+m,s+q,u+(o+m*1.5-u)*l,d+(s+q*1.5-d)*l,o=u,s=d),i+=2;else if(g==="H")C(o,s,o=u,s),i+=1;else if(g==="V")C(o,s,o,s=u+(h?s-o:0)),i+=1;else if(g==="L"||g==="Z")g==="Z"&&(u=w,d=b,f.closed=!0),(g==="L"||ce(o-u)>.5||ce(s-d)>.5)&&(C(o,s,u,d),g==="L"&&(i+=2)),o=u,s=d;else if(g==="A"){if(E=t[i+4],T=t[i+5],m=t[i+6],q=t[i+7],r=7,E.length>1&&(E.length<3?(q=m,m=T,r--):(q=T,m=E.substr(2),r-=2),T=E.charAt(1),E=E.charAt(0)),B=Ft(o,s,+t[i+1],+t[i+2],+t[i+3],+E,+T,(h?o:0)+m*1,(h?s:0)+q*1),i+=r,B)for(r=0;r<B.length;r++)f.push(B[r]);o=f[f.length-2],s=f[f.length-1]}else console.log(a);return i=f.length,i<6?(n.pop(),i=0):f[0]===f[i-2]&&f[1]===f[i-1]&&(f.closed=!0),n.totalPoints=p+i,n}function Wt(e){jt(e[0])&&(e=[e]);var t="",n=e.length,o,s,l,y;for(s=0;s<n;s++){for(y=e[s],t+="M"+J(y[0])+","+J(y[1])+" C",o=y.length,l=2;l<o;l++)t+=J(y[l++])+","+J(y[l++])+" "+J(y[l++])+","+J(y[l++])+" "+J(y[l++])+","+J(y[l])+" ";y.closed&&(t+="z")}return t}/*!
 * CustomEase 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var O,Ie,ze=function(){return O||typeof window<"u"&&(O=window.gsap)&&O.registerPlugin&&O},Le=function(){O=ze(),O?(O.registerEase("_CE",ae.create),Ie=1):console.warn("Please gsap.registerPlugin(CustomEase)")},Ut=1e20,ge=function(t){return~~(t*1e3+(t<0?-.5:.5))/1e3},Yt=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,Xt=/[cLlsSaAhHvVtTqQ]/g,Qt=function(t){var n=t.length,o=Ut,s;for(s=1;s<n;s+=6)+t[s]<o&&(o=+t[s]);return o},Zt=function(t,n,o){!o&&o!==0&&(o=Math.max(+t[t.length-1],+t[1]));var s=+t[0]*-1,l=-o,y=t.length,p=1/(+t[y-2]+s),a=-n||(Math.abs(+t[y-1]-+t[1])<.01*(+t[y-2]-+t[0])?Qt(t)+l:+t[y-1]+l),i;for(a?a=1/a:a=-p,i=0;i<y;i+=2)t[i]=(+t[i]+s)*p,t[i+1]=(+t[i+1]+l)*a},Jt=function e(t,n,o,s,l,y,p,a,i,r,u){var d=(t+o)/2,g=(n+s)/2,h=(o+l)/2,f=(s+y)/2,w=(l+p)/2,b=(y+a)/2,m=(d+h)/2,q=(g+f)/2,B=(h+w)/2,M=(f+b)/2,E=(m+B)/2,T=(q+M)/2,C=p-t,P=a-n,A=Math.abs((o-p)*P-(s-a)*C),te=Math.abs((l-p)*P-(y-a)*C),Z;return r||(r=[{x:t,y:n},{x:p,y:a}],u=1),r.splice(u||r.length-1,0,{x:E,y:T}),(A+te)*(A+te)>i*(C*C+P*P)&&(Z=r.length,e(t,n,d,g,m,q,E,T,i,r,u),e(E,T,B,M,w,b,p,a,i,r,u+1+(r.length-Z))),r},ae=function(){function e(n,o,s){Ie||Le(),this.id=n,this.setData(o,s)}var t=e.prototype;return t.setData=function(o,s){s=s||{},o=o||"0,0,1,1";var l=o.match(Yt),y=1,p=[],a=[],i=s.precision||1,r=i<=1,u,d,g,h,f,w,b,m,q;if(this.data=o,(Xt.test(o)||~o.indexOf("M")&&o.indexOf("C")<0)&&(l=Gt(o)[0]),u=l.length,u===4)l.unshift(0,0),l.push(1,1),u=8;else if((u-2)%6)throw"Invalid CustomEase";for((+l[0]!=0||+l[u-2]!=1)&&Zt(l,s.height,s.originY),this.segment=l,h=2;h<u;h+=6)d={x:+l[h-2],y:+l[h-1]},g={x:+l[h+4],y:+l[h+5]},p.push(d,g),Jt(d.x,d.y,+l[h],+l[h+1],+l[h+2],+l[h+3],g.x,g.y,1/(i*2e5),p,p.length-1);for(u=p.length,h=0;h<u;h++)b=p[h],m=p[h-1]||b,(b.x>m.x||m.y!==b.y&&m.x===b.x||b===m)&&b.x<=1?(m.cx=b.x-m.x,m.cy=b.y-m.y,m.n=b,m.nx=b.x,r&&h>1&&Math.abs(m.cy/m.cx-p[h-2].cy/p[h-2].cx)>2&&(r=0),m.cx<y&&(m.cx?y=m.cx:(m.cx=.001,h===u-1&&(m.x-=.001,y=Math.min(y,.001),r=0)))):(p.splice(h--,1),u--);if(u=1/y+1|0,f=1/u,w=0,b=p[0],r){for(h=0;h<u;h++)q=h*f,b.nx<q&&(b=p[++w]),d=b.y+(q-b.x)/b.cx*b.cy,a[h]={x:q,cx:f,y:d,cy:0,nx:9},h&&(a[h-1].cy=d-a[h-1].y);a[u-1].cy=p[p.length-1].y-d}else{for(h=0;h<u;h++)b.nx<h*f&&(b=p[++w]),a[h]=b;w<p.length-1&&(a[h-1]=p[p.length-2])}return this.ease=function(B){var M=a[B*u|0]||a[u-1];return M.nx<B&&(M=M.n),M.y+(B-M.x)/M.cx*M.cy},this.ease.custom=this,this.id&&O&&O.registerEase(this.id,this.ease),this},t.getSVGData=function(o){return e.getSVGData(this,o)},e.create=function(o,s,l){return new e(o,s,l).ease},e.register=function(o){O=o,Le()},e.get=function(o){return O.parseEase(o)},e.getSVGData=function(o,s){s=s||{};var l=s.width||100,y=s.height||100,p=s.x||0,a=(s.y||0)+y,i=O.utils.toArray(s.path)[0],r,u,d,g,h,f,w,b,m,q;if(s.invert&&(y=-y,a=0),typeof o=="string"&&(o=O.parseEase(o)),o.custom&&(o=o.custom),o instanceof e)r=Wt(Rt([o.segment],l,0,0,-y,p,a));else{for(r=[p,a],w=Math.max(5,(s.precision||1)*200),g=1/w,w+=2,b=5/w,m=ge(p+g*l),q=ge(a+o(g)*-y),u=(q-a)/(m-p),d=2;d<w;d++)h=ge(p+d*g*l),f=ge(a+o(d*g)*-y),(Math.abs((f-q)/(h-m)-u)>b||d===w-1)&&(r.push(m,q),u=(f-q)/(h-m)),m=h,q=f;r="M"+r.join(",")}return i&&i.setAttribute("d",r),r},e}();ze()&&O.registerPlugin(ae);ae.version="3.12.5";_.registerPlugin(j);_.registerPlugin(ae);const Kt=(e,t,n)=>{const o=[],s=[];let l;const y=K(),p=R("pageContext");le(()=>y.width,()=>{i(),ne(()=>{a()})}),G(()=>{p.$page.loader.ready.then(()=>{a()})}),ee(()=>i());const a=()=>{const r=e.value.querySelectorAll(".video-container");l=j.create({trigger:e.value,start:"top bottom",end:"bottom top",onEnterBack:()=>r[r.length-1].querySelector("video").play(),onLeave:()=>r[r.length-1].querySelector("video").pause()}),e.value.querySelectorAll(".title-container").forEach((u,d)=>{const g=j.create({trigger:u,start:"top bottom",end:"top top",onEnter:()=>{r.forEach(h=>h.classList.remove("active")),r[d].classList.add("active"),r[d].querySelector("video").play()},onEnterBack:()=>{r.forEach(h=>h.classList.remove("active")),r[d].classList.add("active"),r[d].querySelector("video").play()},onLeave:()=>d+1!==r.length&&r[d].querySelector("video").pause(),onLeaveBack:()=>d+1!==r.length&&r[d].querySelector("video").pause(),onUpdate:({progress:h})=>{const f=Number(Math.sin(h*Math.PI).toFixed(2));d+1<r.length?t.value[d]=1-f:h>.5?t.value[d]=0:t.value[d]=1-f,d===0&&h>.5&&e.value.style.setProperty("--reasons-firstBackgroundColor","#040313"),d===0&&h<.5&&e.value.style.setProperty("--reasons-firstBackgroundColor","#2e21de")}});_.fromTo(u.querySelector(".title"),{y:20,opacity:0},{y:-20,opacity:1,ease:ae.create("custom","M0,0 C0.202,0 0.253,1 0.5,1 0.672,1 0.819,0 1,0 "),scrollTrigger:{trigger:u.querySelector(".title"),start:()=>"top+=100px bottom",end:()=>"top top",scrub:!0}}),u.querySelector(".description")&&_.fromTo(u.querySelector(".description"),{y:-20,opacity:0},{y:20,opacity:1,ease:ae.create("custom","M0,0 C0.202,0 0.253,1 0.5,1 0.672,1 0.819,0 1,0 "),scrollTrigger:{trigger:u.querySelector(".description"),start:()=>"top bottom",end:()=>"top center",scrub:!0}}),o.push(g)})},i=()=>{o.forEach(r=>r.kill()),s.forEach(r=>r.kill()),l==null||l.kill()}},eo={class:"bg-container"},to={class:"titles-container"},oo={class:"-h3 title"},so={class:"-body_large description"},lo={__name:"Reasons",props:{list:{type:Array,default:()=>[]}},setup(e){const t=k(null),n=k([1,1,1]),o=k([0,0,0]);return Kt(t,n),(s,l)=>{const y=Qe;return v(),x("section",{ref_key:"el",ref:t,"data-component":"reasons"},[c("div",eo,[(v(!0),x(I,null,z(e.list,(p,a)=>(v(),x("div",{key:a,class:oe(`video-container ${a===0?"active":""}`),style:_e(`--overlay-opacity: ${S(n)[a]}`)},[$(y,null,{default:Ae(()=>[$(S(se),{asset:p.video},null,8,["asset"])]),_:2},1024)],6))),128))]),c("div",to,[(v(!0),x(I,null,z(e.list,(p,a)=>(v(),x("div",{key:a,class:"title-container",style:_e(`--titles-opacity: ${S(o)[a]}`)},[c("h2",oo,L(p.title),1),c("p",so,L(p.description),1)],4))),128))])],512)}}},ao=D(lo,[["__scopeId","data-v-27209efd"]]),no={class:"icon-container"},ro={class:"content-container"},io={class:"-h3 title"},co={class:"list"},uo={__name:"Card",props:{title:{type:String,default:""},icon:{type:String,default:""},list:{type:Array,default:()=>[]},backgroundType:{type:String,default:"half-width"},background:{type:[Boolean,Object],default:!1}},setup(e){return(t,n)=>(v(),x("div",{"data-component":"card",class:oe(`${e.backgroundType}`)},[c("div",{class:oe(`left-col ${e.backgroundType}`)},[c("span",no,[$(S(be),{class:"icon",slug:e.icon,size:"xlarge"},null,8,["slug"])]),c("div",ro,[c("h3",io,L(e.title),1),c("ul",co,[(v(!0),x(I,null,z(e.list,(o,s)=>(v(),x("li",{key:s,class:"-body_medium item"},L(o),1))),128))])])],2),c("div",{class:oe(`right-col ${e.backgroundType}`)},[$(S(se),{asset:e.background,autoplay:"",muted:"",loop:""},null,8,["asset"])],2)],2))}},po=D(uo,[["__scopeId","data-v-fd428702"]]),yo={__name:"Video",props:{intro:{type:[Boolean,Object],default:!1},loop:{type:[Boolean,Object],default:!1}},setup(e,{expose:t}){const n=k(null),o=k(!1);return t({playIntro:()=>{const a=n.value.querySelector(".intro");a.play();const i=new Promise(r=>{a.addEventListener("ended",()=>r())});return{isLoop:o,end:i}},playLoop:()=>{n.value.querySelector(".loop").play()},pauseLoop:()=>{n.value.querySelector(".loop").pause()},switchVideo:()=>{o.value=!0;const a=n.value.querySelector(".intro"),i=n.value.querySelector(".loop");a.style.opacity=0,i.style.opacity=1}}),(a,i)=>(v(),x("div",{ref_key:"el",ref:n,"data-component":"video"},[e.intro?(v(),F(S(se),{key:0,asset:e.intro,muted:!0,loop:!1,class:"intro"},null,8,["asset"])):W("",!0),e.loop?(v(),F(S(se),{key:1,asset:e.loop,loop:!0,muted:!0,class:"loop"},null,8,["asset"])):W("",!0)],512))}},ho=D(yo,[["__scopeId","data-v-ab51cf22"]]);_.registerPlugin(j);const fo=(e,t)=>{let n;const o=K(),s=R("pageContext");le(()=>o.width,()=>{y(),ne(()=>{l()})}),G(()=>{s.$page.loader.ready.then(()=>{l()})}),ee(()=>y());const l=()=>{const p=Number(e.value.querySelector(".cards-col").style.getPropertyValue("--fixedTop"))*.01;n=j.create({trigger:e.value,start:"top bottom",end:"bottom top",scrub:!0,onEnter:()=>{var r;const{isLoop:a,end:i}=t.value.playIntro();a.value?(r=t.value)==null||r.playLoop():i.then(()=>{var u,d;(u=t.value)==null||u.playLoop(),(d=t.value)==null||d.switchVideo()})},onEnterBack:()=>{var a;return(a=t.value)==null?void 0:a.playLoop()},onLeave:()=>{var a;return(a=t.value)==null?void 0:a.pauseLoop()},onLeaveBack:()=>{var a;return(a=t.value)==null?void 0:a.pauseLoop()}}),o.width>N.small&&e.value.querySelectorAll(".card").forEach(a=>{_.to(a,{yPercent:-30,scale:.9,opacity:0,backgroundColor:"#D0E3FF",scrollTrigger:{trigger:a,start:()=>`top top+=${o.height*p}`,scrub:!0}})})},y=()=>{_.killTweensOf([e.value.querySelectorAll(".card")]),_.set([e.value.querySelectorAll(".card")],{clearProps:"all"}),n==null||n.kill()}},go={class:"video-container"},vo={class:"row"},mo={class:"xxlarge-14 xxlarge-offset-8 large-16 large-offset-6 small-28 small-offset-0 col"},_o={class:"-h2 title"},bo={class:"row align-center"},xo={__name:"GlobalMarket",props:{video:{type:[Boolean,Object],default:!1},title:{type:String,default:""},list:{type:Array,default:()=>[]}},setup(e){const t=k(null),n=k(null);return fo(t,n),(o,s)=>(v(),x("section",{ref_key:"el",ref:t,"data-component":"global-market"},[c("div",go,[$(ho,{ref_key:"videoEl",ref:n,class:"video-comp",intro:e.video.intro,loop:e.video.loop},null,8,["intro","loop"])]),c("div",vo,[c("div",mo,[c("h2",_o,L(e.title),1)])]),c("div",bo,[c("div",{class:"xxlarge-22 large-24 medium-28 small-30 xsmall-32 col cards-col",style:_e(`--cardsNumber: ${e.list.length}; --fixedTop: 22`)},[(v(!0),x(I,null,z(e.list,(l,y)=>(v(),F(po,V({key:y,ref_for:!0},l,{class:"card"}),null,16))),128))],4)])],512))}},So=D(xo,[["__scopeId","data-v-9ebe2a47"]]),wo={"data-component":"rolling-list"},qo={class:"list"},$o={class:"list ghost"},ko={__name:"RollingList",props:{list:{type:Array,default:()=>[]}},setup(e){const t=k(-1);return(n,o)=>(v(),x("div",wo,[c("ul",qo,[(v(!0),x(I,null,z(e.list,(s,l)=>(v(),x("li",{key:l,class:oe(`-h2 item ${S(t)===l?"active":""}`)},[c("span",null,L(s),1)],2))),128))]),c("ul",$o,[(v(!0),x(I,null,z(e.list,(s,l)=>(v(),x("li",{key:l,class:oe(`-h2 item ${S(t)===l?"active":""}`)},[c("span",null,L(s),1)],2))),128))])]))}},Po=D(ko,[["__scopeId","data-v-a98420c9"]]),To={class:"title-container"},Lo={class:"-body_large"},Co={class:"animation-container"},Mo={key:0,class:"media"},Ao={__name:"Card",props:{title:{type:String,default:""},animation:{type:[Boolean,Object],default:!1}},setup(e){const t=e,n=R("pageContext"),o=k(null);let s=!1,l=!1;const y=()=>{l&&(l=!1,s.reset(),s.play(),setTimeout(()=>l=!0,2e3))};return G(()=>{n.$page.loader.ready.then(()=>{const p=o.value.querySelector("canvas");if(p){const a=t.animation.file;s=new Oe.Rive({src:a,canvas:p,autoplay:!1,onLoad:()=>{l=!0,s.resizeDrawingSurfaceToCanvas()}})}})}),(p,a)=>(v(),x("div",{ref_key:"el",ref:o,"data-component":"card",onMouseenter:y},[c("div",To,[c("h4",Lo,L(e.title),1)]),c("div",Co,[e.animation.file?(v(),x("canvas",Mo)):e.animation.fallbackImage?(v(),F(S(Me),{key:1,class:"media",asset:e.animation.fallbackImage},null,8,["asset"])):W("",!0)])],544))}},Eo=D(Ao,[["__scopeId","data-v-79284dce"]]);_.registerPlugin(j);const Bo=e=>{const t=K(),n=R("pageContext"),o=xe();le(()=>t.width,()=>{y(),ne(()=>t.width>N.small?l():s())}),G(()=>{n.$page.loader.ready.then(()=>{t.width>N.small?l():s()})}),ee(()=>y());const s=()=>{},l=()=>{const p=e.value.querySelector(".intro-section"),a=p.getBoundingClientRect(),i=a.height+a.top+window.scrollY-t.height,r=e.value.querySelector(".intro-section .logo-container .wrapper"),u=r.querySelector(".center-letter").getBoundingClientRect(),d=Math.round(u.left-r.getBoundingClientRect().left+u.width/2),g=Math.round(u.top-r.getBoundingClientRect().top+u.height/2-1);r.style.setProperty("--originX",d+"px"),r.style.setProperty("--originY",g+"px");const h={x:1};o.isFirefox&&(r.querySelector(".overlay-logo").style.display="none",_.to(r.querySelectorAll(".transition-logo .center-letter"),{fill:"#000000",ease:"power2.inOut",scrollTrigger:{trigger:e.value,start:a.top+window.scrollY,end:()=>i-t.height,scrub:!0}})),_.to(h,{x:300,ease:"power2.inOut",onUpdate:()=>{r.style.transform=`matrix(${h.x}, 0, 0, ${h.x}, 0, 0)`},scrollTrigger:{trigger:e.value,start:a.top+window.scrollY,end:()=>i-t.height,scrub:!0,onUpdate:({progress:f})=>{o.isFirefox||(r.querySelector(".overlay-logo").style.opacity=f*2)}}}),_.fromTo(p.querySelector(".logo-container"),{scale:.75,opacity:0},{scale:1,opacity:1,ease:"none",scrollTrigger:{trigger:p.querySelector(".logo-container"),start:"top bottom",end:a.top,scrub:!0}}),_.fromTo(e.value.querySelector(".content-section"),{opacity:0},{opacity:1,ease:"none",scrollTrigger:{trigger:e.value,start:i-t.height*1.5,end:()=>i-t.height*1,scrub:!0}}),_.fromTo(e.value.querySelector(".content-section .inner"),{scale:1.05},{scale:1,ease:"none",scrollTrigger:{trigger:e.value,start:i-t.height*1.5,end:()=>i-t.height*1,scrub:!0}})},y=()=>{_.killTweensOf([e.value.querySelector(".intro-section .logo-container"),e.value.querySelector(".intro-section .transition-logo"),e.value.querySelector(".content-section"),e.value.querySelector(".content-section .inner")]),_.set([e.value.querySelector(".intro-section .logo-container"),e.value.querySelector(".intro-section .transition-logo"),e.value.querySelector(".content-section"),e.value.querySelector(".content-section .inner")],{clearProps:"all"}),e.value.querySelector(".intro-section .logo-container .wrapper").style=""}},Oo={class:"intro-section"},Io={class:"logo-container"},zo={class:"wrapper"},Do={class:"content-section"},Ho={class:"inner"},No={class:"row align-center title-row"},Vo={class:"xxlarge-18 large-20 small-28 xsmall-32 col title-col"},jo={class:"-h3 title"},Ro={class:"row ctas-container"},Fo={class:"xxlarge-32 col ctas-col"},Go={class:"background-container"},Wo={class:"studio"},Uo={class:"row"},Yo={class:"xxlarge-16 xxlarge-offset-8 medium-20 medium-offset-6 xsmall-32 xsmall-offset-0 col studio-title-col"},Xo={class:"-h4 title"},Qo={class:"row align-center cards-container"},Zo={class:"xxlarge-20 medium-28 xsmall-32 col cards-col"},Jo={class:"row rolling-row"},Ko={class:"xxlarge-26 xsmall-32 col"},es={__name:"StudioHighlights",props:{title:{type:String,default:""},video:{type:[Boolean,Object],default:!1},cta:{type:[Boolean,Object],default:!1},studio:{type:[Boolean,Object],default:!1}},setup(e){const t=k(null);return Bo(t),(n,o)=>{const s=Je;return v(),x("section",{ref_key:"el",ref:t,"data-component":"studio-highlights"},[c("div",Oo,[o[0]||(o[0]=c("div",{class:"bg"},null,-1)),c("div",Io,[c("div",zo,[$(S(ve),{class:"transition-logo",slug:"studio",theme:"none"}),$(S(ve),{class:"overlay-logo",slug:"studio",theme:"none"})])])]),c("div",Do,[c("div",Ho,[c("div",No,[c("div",Vo,[c("h2",jo,L(e.title),1)])]),c("div",Ro,[c("div",Fo,[e.cta?(v(),F(S(ke),{key:0,label:e.cta.label,theme:"blueberry",href:S($e)(e.cta)},null,8,["label","href"])):W("",!0)])]),c("div",Go,[$(S(se),{asset:e.video,autoplay:"",muted:"",playsinline:"",loop:!0},null,8,["asset"])]),o[2]||(o[2]=c("span",{class:"spacer"},null,-1)),c("div",Wo,[c("div",Uo,[c("div",Yo,[$(S(ve),{class:"logo",slug:"studio",theme:"none"}),c("h3",Xo,[$(s,{blocks:e.studio.title},null,8,["blocks"])]),e.studio.cta?(v(),F(S(ke),{key:0,class:"studio-button",label:e.studio.cta.label,theme:"blueberry",href:S($e)(e.studio.cta)},null,8,["label","href"])):W("",!0)])]),c("div",Qo,[c("div",Zo,[(v(!0),x(I,null,z(e.studio.list,(l,y)=>(v(),F(Eo,V({key:y,ref_for:!0},l,{class:"card"}),null,16))),128))])]),c("div",Jo,[o[1]||(o[1]=c("div",{class:"xxlarge-6 xsmall-32 col title-col"},[c("h3",{class:"-h2 title"},"For")],-1)),c("div",Ko,[$(S(Po),{class:"rolling-list",list:e.studio.for},null,8,["list"])])])])])])],512)}}},ts=D(es,[["__scopeId","data-v-59d65631"]]);_.registerPlugin(j);_.registerPlugin(ae);const os=(e,t,n,o)=>{let s,l;const y=K(),p=R("pageContext");le(()=>y.width,()=>{u(),ne(()=>{a()})}),le(t,(d,g)=>{_.to(e.value.querySelector(".-h4.zone-title"),{opacity:0,yPercent:25,duration:.3,ease:"power3.out",onComplete:()=>{o.value=n[d].title,_.to(e.value.querySelector(".-h4.zone-title"),{opacity:1,yPercent:0,duration:.3,ease:"power3.out"})}}),_.to(e.value.querySelectorAll(".zones")[g].querySelectorAll(".exchange-wrapper"),{opacity:0,yPercent:50,duration:.5,stagger:.01,ease:"power3.out",onComplete:()=>{_.to(e.value.querySelectorAll(".zones")[d].querySelectorAll(".exchange-wrapper"),{opacity:1,yPercent:0,duration:.5,stagger:.05,ease:"power3.out"})}}),e.value.querySelectorAll(".zones")[d].querySelectorAll(".exchange-wrapper").length>4&&window.innerWidth<=390&&_.fromTo(e.value.querySelectorAll(".zones")[d],{x:0},{x:-e.value.querySelectorAll(".zones")[d].offsetWidth+window.innerWidth,delay:1,duration:6,ease:"power1.inOut"})}),G(()=>{p.$page.loader.ready.then(()=>{a()})}),ee(()=>u());const a=()=>{s=j.create({trigger:e.value,start:"top bottom",end:"bottom top",onEnter:()=>{l.play(),_.to(e.value.querySelector(".-h4.zone-title"),{opacity:1,yPercent:0,duration:.3,ease:"power3.out"}),e.value.querySelectorAll(".zones")[t.value].querySelectorAll(".exchange-wrapper").length>4&&window.innerWidth<=390&&_.fromTo(e.value.querySelectorAll(".zones")[t.value],{x:0},{x:-e.value.querySelectorAll(".zones")[t.value].offsetWidth+window.innerWidth,delay:1,duration:6,ease:"power1.inOut"})},onEnterBack:()=>{l.play()},onLeave:()=>{l.pause()},onLeaveBack:()=>{l.pause()}}),l=_.timeline({paused:!0,ease:"none",repeat:-1,repeatDelay:.3}),l.fromTo(e.value,{"--inner-percentage":"0%"},{"--inner-percentage":"100%",duration:10,ease:"linear",onComplete:()=>{t.value<n.length-1?t.value=t.value+1:t.value=0}})},i=()=>{t.value>0?t.value=t.value-1:t.value=n.length-1,l.progress(0),l.play()},r=()=>{t.value<n.length-1?t.value=t.value+1:t.value=0,l.progress(0),l.play()},u=()=>{s==null||s.kill(),l==null||l.kill()};return{timeTimeline:l,prev:i,next:r}},ss={class:"webgl-container"},ls={class:"row"},as={class:"xxlarge-32 col"},ns={class:"-h4 main"},rs={class:"-h4 zone-title"},is={class:"row exchanges-row"},cs={class:"xxlarge-32 col"},us={class:"inner"},ds={class:"-p_large_medium"},ps={key:0,class:"tag desktop"},ys={class:"-body"},hs={key:0,class:"tag mobile"},fs={class:"navigation-wrapper"},gs={__name:"Exchanges",props:{mainTitle:{type:[String,Boolean],default:!1},zones:{type:[Array,Boolean],default:()=>[]}},setup(e){const t=e,n=k(null),o=k(0),s=k(t.zones[0].title);me("zones",t.zones),me("currentIndex",o),me("exchangeTitle",s);const l=()=>{a()},y=()=>{p()},{prev:p,next:a}=os(n,o,t.zones,s);return(i,r)=>(v(),x("section",{ref_key:"el",ref:n,"data-component":"exchanges"},[c("div",ss,[$(S(Ze),{blob:""})]),c("div",ls,[c("div",as,[c("h4",ns,L(e.mainTitle),1),c("h4",rs,L(S(s)),1)])]),c("div",is,[c("div",cs,[c("div",us,[(v(!0),x(I,null,z(e.zones,(u,d)=>(v(),x("div",{key:d,class:oe(["zones",d===0?"active":!1])},[(v(!0),x(I,null,z(u.exchanges,(g,h)=>(v(),x("div",{key:h,class:"exchange-wrapper"},[c("p",ds,[Fe(L(g.exchangeName)+" ",1),g.goLiveDate?(v(),x("span",ps,L(g.goLiveDate),1)):W("",!0)]),c("p",ys,"("+L(g.country)+")",1),g.goLiveDate?(v(),x("span",hs,L(g.goLiveDate),1)):W("",!0)]))),128))],2))),128)),c("div",fs,[c("button",{class:"circular-btn arrow-left",onClick:y},[$(S(be),{slug:"chevron-left"})]),c("button",{class:"circular-btn arrow-right",onClick:l},[r[0]||(r[0]=c("div",{class:"inner-circle"},null,-1)),$(S(be),{slug:"chevron-right"})])])])])])],512))}},vs=D(gs,[["__scopeId","data-v-0069f700"]]),ms={"data-component":"in-the-news"},_s={class:"row"},bs={class:"xxlarge-20 xxlarge-offset-6 xsmall-32 xsmall-offset-0 col"},xs={class:"-h4 title"},Ss={class:"list"},ws={__name:"InTheNews",props:{title:{type:String,default:""},selectedList:{type:Array,default:()=>[]}},setup(e){return(t,n)=>(v(),x("section",ms,[c("div",_s,[c("div",bs,[c("h2",xs,L(e.title),1),c("ul",Ss,[(v(!0),x(I,null,z(e.selectedList,(o,s)=>(v(),x("li",{key:s,class:"item"},[$(S(Ke),V({ref_for:!0},o,{slug:o.link}),null,16,["slug"])]))),128))])])])]))}},qs=D(ws,[["__scopeId","data-v-db590093"]]),$s={__name:"Home",props:{homeHeader:{type:[Boolean,Object],default:!1},homeStatistics:{type:[Boolean,Object],default:!1},vectors:{type:[Boolean,Object],default:!1},reasons:{type:[Boolean,Object],default:!1},globalMarket:{type:[Boolean,Object],default:!1},studioHighlights:{type:[Boolean,Object],default:!1},homeExchanges:{type:[Boolean,Object],default:!1},inTheNews:{type:[Boolean,Object],default:!1},footer:{type:[Boolean,Object],default:!1}},setup(e){const{onEnter:t,onLeave:n}=We();return(o,s)=>(v(),F(S(Ge),{slug:"home","data-component":"home","transition-enter":S(t),"transition-leave":S(n)},{default:Ae(()=>[$(S(vt),V(e.homeHeader,{"data-section-intersect":"light"}),null,16),$(S(Et),V(e.homeStatistics,{"data-section-intersect":"light"}),null,16),$(S(Dt),V(e.vectors,{"data-section-intersect":"light"}),null,16),$(S(ao),V(e.reasons,{"data-section-intersect":"light"}),null,16),$(S(So),V(e.globalMarket,{"data-section-intersect":"light"}),null,16),$(S(ts),V(e.studioHighlights,{"data-section-intersect":"dark","data-section-offset-intersect":"80vh"}),null,16),$(S(vs),Ee(Be(e.homeExchanges)),null,16),$(S(qs),V(e.inTheNews,{"data-section-intersect":"light"}),null,16),$(S(et)),$(S(tt),V(e.footer,{theme:"light","data-section-intersect":"light"}),null,16)]),_:1},8,["transition-enter","transition-leave"]))}},ks=D($s,[["__scopeId","data-v-c021b1a8"]]),Ns={__name:"index",async setup(e){let t,n;const{data:o}=([t,n]=Ue(()=>lt("/cms/page?slug=home","$PslAyef5YX")),t=await t,n(),t);return ot(o.value.pageSetup),st({bodyAttrs:{class:"home"}}),(s,l)=>(v(),F(S(ks),Ee(Be(S(o).sections)),null,16))}};export{Ns as default};