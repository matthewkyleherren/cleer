import{_ as O}from"./DtYiMMFZ.js";import{_ as x,r as k,d as n,e as a,f as t,t as d,p as u,m as _,k as y,B as I,j as b,y as H,g as m,S as A,u as E,i as V,w as F,n as U,o as D,b as G,F as B,h as C,G as T}from"./BLFlnk3S.js";import{C as W}from"./BbpdfCL9.js";const Y={ref:"el","data-component":"primebrokerage-section"},J={class:"header"},K={class:"index"},Q={class:"-body"},X={class:"title col"},Z={class:"-h4"},ee={key:0,class:"-body"},te={class:"button"},ne={class:"image-wrapper"},se={key:0,class:"description -body_large"},oe={__name:"PrimeBrokerageSection",props:{index:{type:[String,Number],default:1},title:{type:String,default:""},description:{type:Array,default:()=>[]},upperTitle:{type:String,default:""},buttonLabel:{type:String,default:""},pageReference:{type:String,default:""},image:{type:Object,default:()=>{}},content:{type:Array,default:()=>[]}},setup(e){const o=k(!1),h=()=>o.value=!0,p=()=>o.value=!1;return(c,i)=>{const v=O;return n(),a("section",Y,[t("div",J,[t("div",K,[t("p",Q,"0"+d(e.index+1),1)]),t("div",X,[t("h4",Z,d(e.title),1),e.upperTitle?(n(),a("p",ee,d(e.upperTitle),1)):u("",!0)]),t("div",te,[e.content?(n(),_(y(I),{key:0,theme:"blueberry-outline",type:"outline",label:e.buttonLabel,onClick:h},null,8,["label"])):(n(),_(y(I),{key:1,theme:"blueberry-outline",type:"outline",label:e.buttonLabel,icon:"arrow-right","icon-placement":"front",href:e.pageReference},null,8,["label","href"]))])]),t("div",ne,[b(y(H),{asset:e.image,sizes:"xsmall:70vw medium:50vw xlarge:100vw"},null,8,["asset"]),e.description?(n(),a("div",se,[b(v,{blocks:e.description},null,8,["blocks"])])):u("",!0)]),y(o)?(n(),_(y(W),{key:0,"close-fn":p,content:e.content,type:"portable-text"},null,8,["content"])):u("",!0)],512)}}},ie=x(oe,[["__scopeId","data-v-d2192ffe"]]),ae={ref:"el","data-component":"primebrokerage-section"},le={class:"header"},ce={class:"index"},re={class:"-body"},de={class:"title col"},ue={class:"-h4"},pe={class:"image-wrapper"},fe={__name:"InvestmentBankingSection",props:{index:{type:[String,Number],default:1},title:{type:String,default:""},image:{type:Object,default:()=>{}}},setup(e){return(o,h)=>(n(),a("section",ae,[t("div",le,[t("div",ce,[t("p",re,"0"+d(e.index+1),1)]),t("div",de,[t("h4",ue,d(e.title),1)])]),t("div",pe,[b(y(H),{asset:e.image,sizes:"xsmall:70vw medium:80vw xlarge:100vw"},null,8,["asset"])])],512))}},me=x(fe,[["__scopeId","data-v-799346f4"]]),ye={ref:"el","data-component":"olympus-section"},he={class:"header"},ge={class:"index"},_e={class:"-body"},be={class:"title col"},ve={class:"-h4"},Se={class:"uppertitle"},ke={key:0,class:"-body"},xe={class:"image-wrapper"},we={key:0,class:"description -body"},$e={__name:"OlympusSection",props:{index:{type:[String,Number],default:1},title:{type:String,default:""},description:{type:Array,default:()=>[]},upperTitle:{type:String,default:""},buttonLabel:{type:String,default:""},pageReference:{type:String,default:""},image:{type:Object,default:()=>{}},content:{type:Array,default:()=>[]}},setup(e){return(o,h)=>{const p=O;return n(),a("section",ye,[t("div",he,[t("div",ge,[t("p",_e,"0"+d(e.index+1),1)]),t("div",be,[t("h4",ve,d(e.title),1)]),t("div",Se,[e.upperTitle?(n(),a("p",ke,d(e.upperTitle),1)):u("",!0)])]),t("div",xe,[e.description?(n(),a("div",we,[b(p,{blocks:e.description},null,8,["blocks"])])):u("",!0),b(y(H),{asset:e.image,sizes:"xsmall:70vw medium:50vw xlarge:100vw"},null,8,["asset"])])],512)}}},Le=x($e,[["__scopeId","data-v-02f4bdab"]]);m.registerPlugin(A);const Be=e=>{const o=E(),h=V("pageContext"),p=k(null),c=k(null);F(o,()=>{N(),U(()=>{v()})}),D(()=>{h.$page.loader.ready.then(()=>{o.width>G.small?v():i()})});const i=()=>{},v=()=>{e.value.classList.add("motion-active");const l=e.value,s=l.querySelectorAll("section"),r=s[0].querySelector(".header").offsetHeight,w=l.querySelector(".inner"),P=l.querySelector(".inner-offset"),$=s.length>4?3:0;l.style.paddingBottom=window.innerHeight+r*(s.length-1+$*3)+"px";const R=e.value.offsetHeight,j=1;l.style.height=s.length*100*j+"vh",s.forEach((g,f)=>{g.style.zIndex=f,f!==0&&(g.style.top=window.innerHeight-r*(s.length-f-$)+r+"px")}),p.value=A.create({trigger:w,start:`top top+=${r}`,end:"bottom bottom",endTrigger:l,pin:w,pinSpacing:!1,onUpdate:({progress:g})=>{const f=m.utils.mapRange(0,1,0,R,g);s.forEach((q,L)=>{if(L===0)return;const S=window.innerHeight-r*(s.length-1-$),z=m.utils.mapRange(S*(L-1),S*L,0,S,f),M=m.utils.clamp(0,S,z);m.set(q,{y:-M})})}}),c.value=A.create({trigger:w,start:`top top+=${r}`,end:"bottom bottom",endTrigger:l,onUpdate:({progress:g})=>{const f=m.utils.clamp(0,r*(s.length-1),g*(r*(s.length-1)));m.set(P,{y:-f})}})},N=()=>{var l,s;(l=p.value)==null||l.kill(),(s=c.value)==null||s.kill()}},Ce={class:"inner"},Te={class:"inner-offset"},Ae={__name:"ScrollableSections",props:{servicesList:{type:[Array,Boolean],default:!1},industriesList:{type:[Array,Boolean],default:!1},olympusList:{type:[Array,Boolean],default:!1}},setup(e){const o=k(null);return Be(o),(h,p)=>(n(),a("section",{ref_key:"el",ref:o,"data-component":"scrollable-sections"},[t("div",Ce,[t("div",Te,[e.servicesList?(n(!0),a(B,{key:0},C(e.servicesList,(c,i)=>(n(),_(ie,T({key:i,index:i,ref_for:!0},c),null,16,["index"]))),128)):u("",!0),e.industriesList?(n(!0),a(B,{key:1},C(e.industriesList,(c,i)=>(n(),_(me,T({key:i,index:i,ref_for:!0},c),null,16,["index"]))),128)):u("",!0),e.olympusList?(n(!0),a(B,{key:2},C(e.olympusList,(c,i)=>(n(),_(Le,T({key:i,index:i,ref_for:!0},c),null,16,["index"]))),128)):u("",!0)])])],512))}},Ne=x(Ae,[["__scopeId","data-v-fa3294b8"]]);export{Ne as S};