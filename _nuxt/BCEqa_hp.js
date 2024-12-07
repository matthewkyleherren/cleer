import{_ as v,x as D,d as a,e as d,j as h,q as F,f as t,m as p,k as s,y as M,p as m,t as u,a6 as T,a7 as H,I as C,H as L,A as x,g as w,S as q,i as U,o as B,a as J,r as S,M as G,N as Z,F as b,h as k,G as g,P as K,a8 as Y,O as I,B as A,U as z,z as Q}from"./BLFlnk3S.js";import{N as X}from"./BddWpDnS.js";import{_ as V,B as O}from"./DPtBCa5E.js";import{P as ee}from"./CBbjT2RM.js";import{_ as te}from"./DtYiMMFZ.js";const se={class:"media-wrapper"},ae={class:"content-wrapper"},le={class:"title-wrapper"},oe={class:"-body date"},ne={class:"-h5"},ie={class:"-body"},re={class:"details-wrapper -body"},ce={__name:"MainCard",props:{slug:{type:String,default:""},image:{type:Object,default:()=>{}},title:{type:String,default:""},description:{type:String,default:""},category:{type:Object,default:()=>{}},date:{type:String,default:""},readingTime:{type:[Number,Boolean],default:!1}},setup(e){const r=e,o=D(()=>`/news/blog/${r.slug}`);return(l,c)=>(a(),d("div",{"data-component":"main-card",class:x(`${e.category.colorSlug}`)},[h(s(L),{to:s(o),class:"inner"},{default:F(()=>[t("div",se,[e.image?(a(),p(s(M),{key:0,asset:e.image,sizes:"xsmall:100vw medium:50vw xlarge:50vw"},null,8,["asset"])):m("",!0)]),t("div",ae,[t("div",le,[t("p",oe,u(("parsedConferenceDate"in l?l.parsedConferenceDate:s(T))(e.date)),1),t("p",ne,u(e.title),1),t("p",ie,u(e.description),1)]),t("div",re,[h(s(H),{label:e.category.name,"reading-time":e.readingTime,theme:e.category.colorSlug,type:"label"},null,8,["label","reading-time","theme"]),h(s(C),{slug:"arrow-right",class:"icon"})])])]),_:1},8,["to"])],2))}},de=v(ce,[["__scopeId","data-v-d6061ba6"]]);w.registerPlugin(q);const ue=e=>{const r=U("pageContext");B(()=>{o(),r.$page.loader.ready.then(()=>{l()})}),J(()=>c());const o=()=>{w.set([e.value.querySelector(".title-row")],{opacity:0,scale:.98,y:-40}),w.set([e.value.querySelector(".cards-row")],{opacity:0,scale:.98,y:40}),w.set([document.querySelector('[data-component="type-list"]')],{y:-250,opacity:0})},l=()=>{w.to(e.value.querySelector(".bg"),{autoAlpha:0,ease:"power2.out",duration:1}),w.set(document.querySelector('[data-component="type-list"]'),{delay:.6,opacity:1}),w.to(document.querySelector('[data-component="type-list"]'),{delay:.6,y:0,ease:"power1.out",duration:.6}),w.to(e.value.querySelector(".title-row"),{delay:.35,y:0,scale:1,opacity:1,ease:"power2.out",duration:1.5}),w.to(e.value.querySelector(".cards-row"),{delay:.7,y:0,scale:1,opacity:1,ease:"power1.out",duration:1.8})},c=()=>{}},fe={class:"row expanded cards-row"},pe={class:"xxlarge-24 medium-16 xsmall-32 col"},me={class:"inner main"},he={class:"xxlarge-8 medium-16 xsmall-32 col"},ye={class:"inner secondary"},ge={__name:"Header",props:{title:{type:String,default:""},featuredArticle:{type:Object,default:()=>{}},featuredList:{type:Array,default:()=>[]}},setup(e){const r=S(null);return ue(r),(o,l)=>(a(),d("header",{ref_key:"el",ref:r,"data-component":"news-header"},[l[0]||(l[0]=t("span",{class:"bg"},null,-1)),l[1]||(l[1]=t("div",{class:"row expanded title-row"},[t("div",{class:"xxlarge-32 col"},[t("h1",{class:"-h1"},"Clear Street News")])],-1)),t("div",fe,[t("div",pe,[t("div",me,[h(de,G(Z(e.featuredArticle)),null,16)])]),t("div",he,[t("div",ye,[(a(!0),d(b,null,k(e.featuredList,(c,f)=>(a(),p(s(X),g({key:f,ref_for:!0},c),null,16))),128))])])])],512))}},ls=v(ge,[["__scopeId","data-v-89b7a750"]]),_e={class:"inner"},we={class:"type-wrapper"},ve={__name:"TypeList",props:{types:{type:Array,default:()=>[]},clickFunc:{type:Function,default:()=>{}}},setup(e){const r=e,o=S(null),l=y=>{let n;switch(y){case"/news":n="All";break;case"/news/blog":n="Blog";break;case"/news/press-releases":n="Press Releases";break;case"/news/media-assets":n="Media Assets";break;case"/news/whitepapers":n="Whitepapers";break;case"/news/conferences":n="Conferences";break;case"/news/podcast":n="Podcast";break}return n};K().on("change-news-type",y=>{f(y)});const f=y=>{let n;switch(y){case"/news":n="all";break;case"/news/blog":n="blog";break;case"/news/press-releases":n="press-releases";break;case"/news/media-assets":n="media-assets";break;case"/news/whitepapers":n="whitepapers";break;case"/news/conferences":n="conferences";break;case"/news/podcast":n="podcast";break}r.clickFunc(n),_(n),i(n)},i=y=>{o.value.querySelectorAll("button").forEach($=>{Y($.dataset.type)===y?$.classList.add("active"):$.classList.remove("active")})},_=y=>{let n;y==="all"?n=window.location.protocol+"//"+window.location.host+"/news":n=window.location.protocol+"//"+window.location.host+`/news/${y}`,window.history.pushState({path:n},"",n)},R=I();return B(()=>{const y=R.path;let n;y.includes("/news/blog")?n="blog":y.includes("/news/press-releases")?n="press-releases":y.includes("/news/media-assets")?n="media-assets":y.includes("/news/whitepapers")?n="whitepapers":y.includes("/news/conferences")?n="conferences":y.includes("/news")&&(n="all"),i(n)}),(y,n)=>(a(),d("section",{ref_key:"el",ref:o,"data-component":"type-list"},[t("div",_e,[t("div",we,[(a(!0),d(b,null,k(e.types,($,E)=>(a(),p(s(A),{key:E,theme:"midnight-outline",type:"outline",size:"small","data-type":l($),label:l($),onClick:Qt=>f($)},null,8,["data-type","label","onClick"]))),128))])])],512))}},xe=v(ve,[["__scopeId","data-v-5ee091ad"]]),be={class:"row title-row"},$e={class:"xxlarge-16 xxlarge-offset-8 medium-28 medium-offset-2 small-offset-0 small-32 col"},ke={class:"-h4 title"},Se={class:"press-releases-list"},Ce={class:"row"},Le={class:"xxlarge-16 xxlarge-offset-8 medium-28 medium-offset-2 small-offset-0 small-32 col"},Be={key:0,class:"row bottom-row"},Ae={class:"xxlarge-16 xxlarge-offset-8 medium-28 medium-offset-2 small-offset-0 small-32 col"},Fe={class:"-body"},Me={__name:"PressReleaseList",props:{isWidget:{type:Boolean,default:!1},theme:{type:String,default:"light"},title:{type:String,default:"A look ahead at future conferences"},selectedList:{type:Array,default:()=>[]},contactCta:{type:Object,default:()=>{}},postsCount:{type:[Number,Boolean],default:!1}},setup(e){const r=S(null);B(()=>{o()});const o=()=>{const l=r.value;w.fromTo(l,{opacity:0},{opacity:1,duration:.5,ease:"power1.out"})};return(l,c)=>(a(),d("section",{ref_key:"$el",ref:r,"data-component":"press-release-list",class:x(`${e.theme} ${e.isWidget?"widget":!1}`)},[t("div",be,[t("div",$e,[t("h2",ke,u(e.title),1),e.isWidget&&e.postsCount?(a(),p(s(V),{key:0,label:"View all",length:e.postsCount,to:"/news/press-releases","scroll-to-el":!0},null,8,["length"])):m("",!0)])]),t("div",Se,[t("div",Ce,[t("div",Le,[(a(!0),d(b,null,k(e.selectedList,(f,i)=>(a(),p(s(ee),g({key:i,class:"card",ref_for:!0},f),null,16))),128))])])]),e.contactCta?(a(),d("div",Be,[t("div",Ae,[t("p",Fe,u(e.contactCta.leftLabel),1),h(s(A),{theme:"blueberry-outline",type:"outline",size:"small",label:"Contact us",href:"/contact"})])])):m("",!0)],2))}},N=v(Me,[["__scopeId","data-v-ea5f1d17"]]),De={"data-component":"media-asset-card"},Oe=["href"],Ne={class:"inner"},Pe={class:"title-container"},We={class:"-body"},je={class:"hover-wrapper"},Te={__name:"MediaAssetCard",props:{thumbnail:{type:Object,default:()=>{}},title:{type:String,default:"Clear Street Brand"},asset:{type:String,default:""}},setup(e){return(r,o)=>(a(),d("div",De,[t("a",{href:e.asset,target:"_blank"},[t("div",Ne,[e.thumbnail?(a(),p(s(M),{key:0,asset:e.thumbnail,sizes:"xsmall:400px medium:800px xlarge:1600px"},null,8,["asset"])):m("",!0)]),t("div",Pe,[t("p",We,u(e.title),1)]),t("div",je,[o[0]||(o[0]=t("p",{class:"-body"},"Download",-1)),h(s(C),{slug:"arrow-down"})])],8,Oe)]))}},Ie=v(Te,[["__scopeId","data-v-c9e355bc"]]),ze={class:"row title-row"},Ve={class:"xxlarge-16 xxlarge-offset-8 medium-28 medium-offset-2 small-offset-0 small-32 col"},Re={class:"-h4 title"},Ee={class:"row cards-row"},He={key:0,class:"row bottom-row"},qe={class:"xxlarge-16 xxlarge-offset-8 medium-28 medium-offset-2 small-offset-0 small-32 col"},Ue={class:"-caption"},Je={class:"xxlarge-16 xxlarge-offset-8 medium-28 medium-offset-2 small-offset-0 small-32 col"},Ge={class:"-body"},Ze={__name:"MediaAssetList",props:{isWidget:{type:Boolean,default:!1},image:{type:String,default:""},title:{type:String,default:"Clear Street Brand"},selectedList:{type:Array,default:()=>[]},contactCta:{type:Object,default:()=>{}},downloadKit:{type:String,default:""},postsCount:{type:[Number,Boolean],default:!1}},setup(e){const r={marks:{internalLink:L},styles:{span:"span"}};return(o,l)=>{const c=te;return a(),d("section",{"data-component":"media-asset-list",class:x(`${e.isWidget?"widget":!1}`)},[t("div",ze,[t("div",Ve,[t("h2",Re,u(e.title),1),h(s(A),{class:"button",theme:"blueberry",type:"primary",size:"medium",icon:"arrow-down","icon-placement":"front",label:"Download brand kit",href:e.downloadKit},null,8,["href"])])]),t("div",Ee,[(a(!0),d(b,null,k(e.selectedList,(f,i)=>(a(),d("div",{key:i,class:x(`xxlarge-8 medium-10 ${i===0&&e.selectedList.length<4?"xxlarge-offset-8  medium-offset-2":"xxlarge-offset-0"} small-offset-0 small-12 xsmall-32 col`)},[h(s(Ie),g({class:"card",ref_for:!0},f),null,16)],2))),128))]),e.contactCta?(a(),d("div",He,[t("div",qe,[t("div",Ue,[h(c,{blocks:e.contactCta.text,serializers:r},null,8,["blocks"])])]),t("div",Je,[t("p",Ge,u(e.contactCta.leftLabel),1),h(s(A),{theme:"blueberry-outline",type:"outline",size:"small",label:"Contact us",href:"/contact"})])])):m("",!0)],2)}}},P=v(Ze,[["__scopeId","data-v-ab1d9550"]]),Ke={width:"124",height:"159",viewBox:"0 0 124 159",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function Ye(e,r){return a(),d("svg",Ke,r[0]||(r[0]=[z('<g clip-path="url(#clip0_5140_18118)"><path d="M0 0H89L107 19L124 37V84.5L0 159V0Z" fill="#F4F4F5"></path><path d="M124 82V117V159H0L124 82Z" fill="#F7F7F8"></path><g filter="url(#filter0_d_5140_18118)"><path d="M87.1875 36.8125L124 37L89 0L87.1875 36.8125Z" fill="#F7F7F8"></path></g><rect x="11" y="20" width="50" height="1" fill="#63C895"></rect><path d="M0 145H89.5L97 159H0V145Z" fill="#0E367D"></path><path d="M89.5 145H124V159H97L89.5 145Z" fill="#082B6E"></path><rect width="59.5" height="47" transform="translate(0 112)" fill="#CC0D00"></rect><text fill="white" xml:space="preserve" style="white-space:pre;" font-family="Aeonik Fono" font-size="23.25" letter-spacing="0.02em"><tspan x="7.75" y="143.986">PDF</tspan></text></g><defs><filter id="filter0_d_5140_18118" x="82.1702" y="-2.15029" width="46.8472" height="47.0347" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2.86705"></feOffset><feGaussianBlur stdDeviation="2.50867"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5140_18118"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5140_18118" result="shape"></feBlend></filter><clipPath id="clip0_5140_18118"><rect width="124" height="159" fill="white"></rect></clipPath></defs>',2)]))}const Qe={render:Ye},Xe={"data-component":"whitepaper-card"},et={key:1,class:"icon-composition"},tt={class:"icon-date"},st={class:"icon-title"},at={class:"icon-description"},lt={class:"label-wrapper"},ot={class:"-body_small"},nt={class:"-body"},it={class:"hover-wrapper"},rt={__name:"WhitepaperCard",props:{title:{type:String,default:"Clear Street Brand"},description:{type:String,default:"Clear Street Brand"},date:{type:String,default:"Clear Street Brand"},slug:{type:String,default:""},thumbnail:{type:[Boolean,Object],default:!1}},setup(e){const r=o=>{const l=new Date(o),f=["January","February","March","April","May","June","July","August","September","October","November","December"][l.getMonth()],i=l.getFullYear();return`${f}, ${i}`};return(o,l)=>(a(),d("div",Xe,[h(s(L),{to:e.slug},{default:F(()=>[t("div",{class:x(["inner",e.thumbnail?!1:"file-icon"])},[e.thumbnail?(a(),p(s(M),{key:0,asset:e.thumbnail,sizes:"xsmall:100vw medium:50vw xlarge:25vw"},null,8,["asset"])):(a(),d("span",et,[t("p",tt,u(r(e.date)),1),t("p",st,u(e.title),1),t("p",at,u(e.description),1),h(s(Qe))]))],2),t("div",lt,[t("p",ot,u(r(e.date)),1),t("p",nt,u(e.title),1)]),t("div",it,[l[0]||(l[0]=t("p",{class:"-body"},"View",-1)),h(s(C),{slug:"arrow-external"})])]),_:1},8,["to"])]))}},ct=v(rt,[["__scopeId","data-v-c3cd8233"]]),dt={class:"row title-row"},ut={class:"xxlarge-16 xxlarge-offset-8 medium-28 medium-offset-2 small-offset-0 small-32 col"},ft={class:"-h4 title"},pt={class:"row cards-row"},mt={__name:"WhitepaperList",props:{isWidget:{type:Boolean,default:!1},image:{type:String,default:""},title:{type:String,default:"Clear Street Brand"},selectedList:{type:Array,default:()=>[]},contactCta:{type:Object,default:()=>{}},postsCount:{type:[Number,Boolean],default:!1}},setup(e){const r=S(null);B(()=>{o()});const o=()=>{const l=r.value;w.fromTo(l,{opacity:0},{opacity:1,duration:.5,ease:"power1.out"})};return(l,c)=>(a(),d("section",{ref_key:"$el",ref:r,"data-component":"whitepaper-list",class:x(`${e.isWidget?"widget":!1}`)},[t("div",dt,[t("div",ut,[t("h2",ft,u(e.title),1),e.isWidget?(a(),p(s(V),{key:0,label:"View all",length:e.postsCount,to:"/news/whitepapers","scroll-to-el":!0},null,8,["length"])):m("",!0)])]),t("div",pt,[(a(!0),d(b,null,k(e.selectedList,(f,i)=>(a(),d("div",{key:i,class:x(`xxlarge-8 medium-14 ${i===0&&e.selectedList.length<4?"xxlarge-offset-8 medium-offset-2":"xxlarge-offset-0"} small-offset-0 xsmall-offset-0 xsmall-32 col`)},[h(s(ct),g({ref_for:!0},f),null,16)],2))),128))])],2))}},W=v(mt,[["__scopeId","data-v-f7ce879c"]]),ht={key:0,class:"row title-row"},yt={class:"xxlarge-24 xxlarge-offset-8 small-offset-0 small-32 xsmall-32 col"},gt={class:"-h4 title"},_t={key:0,class:"row title-row"},wt={class:"xxlarge-24 xxlarge-offset-8 small-offset-0 small-32 xsmall-32 col"},vt={class:"-h4 title"},xt={key:2,class:"row list-header"},bt={key:3,class:"row no-conference"},$t={class:"xxlarge-24 xxlarge-offset-8 small-offset-0 small-32 xsmall-32 col"},kt={class:"-h4"},St={class:"conferences-list"},Ct={class:"row conferences"},Lt={class:"xxlarge-8 xsmall-32 entry col"},Bt={class:"-body_large date"},At={class:"xxlarge-8 xsmall-32 entry col"},Ft={class:"-body_large location"},Mt={class:"xxlarge-16 xsmall-32 entry col"},Dt={class:"-body_large title"},Ot={__name:"ConferencesList",props:{isWidget:{type:Boolean,default:!1},theme:{type:String,default:"dark"},title:{type:String,default:"A look ahead at future conferences"},noConferenceMessage:{type:String,default:""},conferences:{type:Array,default:()=>[]}},setup(e){const r=e,o=new Date,l=D(()=>r.conferences.filter(({dateStart:c})=>new Date(c)>=o).sort((c,f)=>new Date(c.dateStart)-new Date(f.dateStart)));return(c,f)=>(a(),d("section",{"data-component":"conferences-list",class:x(`${e.theme}`)},[e.isWidget?(a(),d("div",ht,[t("div",yt,[t("h2",gt,u(e.title),1)])])):m("",!0),e.isWidget?m("",!0):(a(),d(b,{key:1},[s(l).length?(a(),d("div",_t,[t("div",wt,[t("h2",vt,u(e.title),1)])])):m("",!0)],64)),s(l).length?(a(),d("div",xt,f[0]||(f[0]=[z('<div class="xxlarge-8 col header" data-v-c9055555><p class="-body" data-v-c9055555>DATE</p></div><div class="xxlarge-8 col header" data-v-c9055555><p class="-body" data-v-c9055555>LOCATION</p></div><div class="xxlarge-16 col header" data-v-c9055555><p class="-body" data-v-c9055555>CONFERENCE</p></div>',3)]))):m("",!0),s(l).length?m("",!0):(a(),d("div",bt,[t("div",$t,[t("h4",kt,u(e.noConferenceMessage),1)])])),t("div",St,[(a(!0),d(b,null,k(s(l),(i,_)=>(a(),p(s(L),{key:_,href:i.link,target:"_blank",rel:"noopener noreferrer",class:x({last:_===e.conferences.length-1})},{default:F(()=>[t("div",Ct,[t("div",Lt,[t("p",Bt,u(("parsedConferenceDate"in c?c.parsedConferenceDate:s(T))(i.dateStart,i.dateEnd)),1)]),t("div",At,[t("p",Ft,u(i.location),1)]),t("div",Mt,[t("p",Dt,u(i.title),1)]),h(s(C),{slug:"arrow-external"})])]),_:2},1032,["href","class"]))),128))])],2))}},j=v(Ot,[["__scopeId","data-v-c9055555"]]),Nt={"data-component":"podcast-card"},Pt={class:"image-container"},Wt={class:"title-container"},jt={class:"-body date"},Tt={class:"-body title"},It={class:"hover-container"},zt={class:"left"},Vt={class:"episode"},Rt={class:"duration"},Et={class:"right"},Ht={__name:"PodcastCard",props:{type:{type:String,default:"podcast"},episodeUrl:{type:String,default:""},title:{type:String,default:""},episode:{type:String,default:""},duration:{type:String,default:""},date:{type:String,default:""},thumbnail:{type:[Boolean,Object],default:!1}},setup(e){const r=o=>{const l=new Date(o),f=["January","February","March","April","May","June","July","August","September","October","November","December"][l.getMonth()],i=l.getFullYear();return`${f}, ${i}`};return(o,l)=>(a(),d("div",Nt,[h(s(L),{class:"wrapper",to:e.episodeUrl},{default:F(()=>[t("div",Pt,[e.thumbnail?(a(),p(s(M),{key:0,asset:e.thumbnail,sizes:"xsmall:100vw medium:50vw xlarge:25vw"},null,8,["asset"])):(a(),p(s(Q),{key:1,slug:"clearstreet",class:"logo"}))]),t("div",Wt,[t("p",jt,u(r(e.date)),1),t("h3",Tt,u(e.title),1)]),t("div",It,[t("div",zt,[t("span",Vt,"Episode "+u(e.episode),1),l[0]||(l[0]=t("span",{class:"dot"},null,-1)),t("span",Rt,u(e.duration),1)]),t("div",Et,[h(s(C),{slug:"spotifycard"})])])]),_:1},8,["to"])]))}},qt=v(Ht,[["__scopeId","data-v-3fdf141f"]]),Ut={class:"row title-row"},Jt={class:"xxlarge-16 xxlarge-offset-8 medium-28 medium-offset-2 small-offset-0 small-32 col"},Gt={class:"-h4 title"},Zt={class:"row cards-row"},Kt={__name:"PodcastList",props:{isWidget:{type:Boolean,default:!1},title:{type:String,default:"Clear Street Brand"},selectedList:{type:Array,default:()=>[]}},setup(e){const r=S(null);B(()=>{o()});const o=()=>{const l=r.value;w.fromTo(l,{opacity:0},{opacity:1,duration:.5,ease:"power1.out"})};return(l,c)=>(a(),d("section",{ref_key:"$el",ref:r,"data-component":"whitepaper-list",class:x(`${e.isWidget?"widget":!1}`)},[t("div",Ut,[t("div",Jt,[t("h2",Gt,u(e.title),1)])]),t("div",Zt,[(a(!0),d(b,null,k(e.selectedList,(f,i)=>(a(),d("div",{key:i,class:"card-wrapper"},[h(s(qt),g({ref_for:!0},f),null,16)]))),128))])],2))}},Yt=v(Kt,[["__scopeId","data-v-78deb597"]]),os={__name:"NewsComponents",props:{navigation:{type:Object,default:()=>{}},blog:{type:Object,default:()=>{}},pressReleases:{type:Object,default:()=>{}},mediaAssets:{type:Object,default:()=>{}},whitepapers:{type:Object,default:()=>{}},conferences:{type:Object,default:()=>{}},spotifyPodcast:{type:Object,default:()=>{}}},setup(e){const r=I(),o=e,l=D(()=>{const i=r.path;let _;return i.includes("/news/blog")?_="blog":i.includes("/news/press-releases")?_="press-releases":i.includes("/news/media-assets")?_="media-assets":i.includes("/news/whitepapers")?_="whitepapers":i.includes("/news/conferences")?_="conferences":i.includes("/news/podcast")?_="podcast":i.includes("/news")&&(_="all"),_}),c=S(l.value),f=async i=>{c.value=i};return(i,_)=>(a(),d("div",null,[h(s(xe),g(o.navigation,{"click-func":f,"is-all":!0}),null,16),s(c)==="all"?(a(),p(s(O),g({key:0},o.blog,{"is-widget":!0,"is-featured-widget":!0}),null,16)):m("",!0),s(c)==="blog"?(a(),p(s(O),g({key:1},o.blog.page,{"is-widget":!1,"is-featured-widget":!1}),null,16)):m("",!0),s(c)==="all"?(a(),p(s(N),g({key:2},o.pressReleases,{"is-widget":!0}),null,16)):m("",!0),s(c)==="press-releases"?(a(),p(s(N),g({key:3},o.pressReleases.page,{"is-widget":!1}),null,16)):m("",!0),s(c)==="all"?(a(),p(s(P),g({key:4},o.mediaAssets,{"is-widget":!0}),null,16)):m("",!0),s(c)==="media-assets"?(a(),p(s(P),g({key:5},o.mediaAssets.page,{"is-widget":!1}),null,16)):m("",!0),s(c)==="all"?(a(),p(s(W),g({key:6},o.whitepapers,{"is-widget":!0}),null,16)):m("",!0),s(c)==="whitepapers"?(a(),p(s(W),g({key:7},o.whitepapers.page,{"is-widget":!1}),null,16)):m("",!0),s(c)==="all"?(a(),p(s(j),g({key:8},o.conferences,{theme:"light","is-widget":!0}),null,16)):m("",!0),s(c)==="conferences"?(a(),p(s(j),g({key:9},o.conferences.page,{theme:"light","is-widget":!1}),null,16)):m("",!0),s(c)==="podcast"?(a(),p(s(Yt),g({key:10},o.spotifyPodcast.page,{theme:"light","is-widget":!1}),null,16)):m("",!0)]))}};export{ls as H,os as _};
