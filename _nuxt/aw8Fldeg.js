import{_ as b,d as l,e as f,f as s,t as T,F as H,h as M,m as D,G as S,k as c,g as A,S as w,r as q,o as R,U as P,j as L,p as N,H as $,a4 as W,q as F,J as K,K as V,O as j,L as z}from"./BLFlnk3S.js";import{_ as G}from"./DtYiMMFZ.js";import{I as O}from"./qBP7SdQI.js";import{P as k}from"./CBbjT2RM.js";import{F as U}from"./kcU7VYkb.js";import{P as Y}from"./D2-QYa08.js";import{u as Z}from"./BDeh-KoQ.js";import{u as Q}from"./ClNogb_c.js";const J={"data-component":"legal-header"},X={class:"row expanded align-center"},tt={class:"xxlarge-13 large-20 small-32 col"},et={class:"-h1"},at={__name:"Header",props:{title:{type:String,default:""}},setup(d){return(n,u)=>(l(),f("header",J,[s("div",X,[s("div",tt,[s("h1",et,T(d.title),1)])])]))}},dt=b(at,[["__scopeId","data-v-2894326d"]]),nt={"data-component":"page-hub"},st={__name:"PageHub",props:{items:{type:Array,default:()=>[]}},setup(d){return(n,u)=>(l(),f("div",nt,[(l(!0),f(H,null,M(d.items,(h,r)=>(l(),D(c(k),S({key:r,class:"card documentation hub",ref_for:!0},h),null,16))),128))]))}},ot=b(st,[["__scopeId","data-v-2de9aefe"]]),ct={"data-component":"documentation"},lt={class:"-h4"},it={__name:"Documentation",props:{title:{type:String,default:""},items:{type:Array,default:()=>[]}},setup(d){return(n,u)=>(l(),f("div",ct,[s("h4",lt,T(d.title),1),(l(!0),f(H,null,M(d.items,(h,r)=>(l(),D(c(k),S({key:r,class:"card documentation",ref_for:!0},h),null,16))),128))]))}},rt=b(it,[["__scopeId","data-v-799ee0f1"]]),ut={class:"-h3"},vt={class:"main-tabs"},ht={__name:"LegalStatements",props:{title:{type:String,default:""}},setup(d){A.registerPlugin(w);const n=q(null);R(()=>{u(),h(),r()});function u(){fetch("https://sheets.googleapis.com/v4/spreadsheets/1WxWtSKGhOuxIgLaMvu_KcbVwZmIdficWLdDKvrP6ynE/values/Daily!A:K?key=AIzaSyDgXU8zfhlxTND982uCp7WpWyFumL5HolQ").then(t=>t.json()).then(t=>{if(t&&t.values&&t.values.length>1){const a=t.values.slice(1).sort((o,v)=>new Date(v[0])-new Date(o[0]));E(a[0]),C(a),document.getElementById("latestDataDate").textContent=a[0][0]}setTimeout(()=>w.refresh(),100)}).catch(t=>console.error("Error fetching data:",t));function E(t){document.getElementById("segTotal").textContent=t[1],document.getElementById("segRequired").textContent=t[2],document.getElementById("segExcess").textContent=t[3],document.getElementById("securedTotal").textContent=t[4],document.getElementById("securedRequired").textContent=t[5],document.getElementById("securedExcess").textContent=t[6],document.getElementById("swapsTotal").textContent=t[7],document.getElementById("swapsRequired").textContent=t[8],document.getElementById("swapsExcess").textContent=t[9],document.getElementById("urlDaily").innerHTML=`<a href="${t[10]}" target="_blank" rel="noopener noreferrer">View Statement</a>`}function C(t){const a=document.getElementById("fcmDataBody");a.innerHTML="",t.forEach((o,v)=>{const i=document.createElement("tr");o.forEach((x,B)=>{const _=document.createElement("td");if(B===o.length-1){const I=document.createElement("a");I.href=x,I.textContent="View",I.target="_blank",I.rel="noopener noreferrer",_.appendChild(I)}else _.textContent=x;i.appendChild(_)}),a.appendChild(i)})}}function h(){fetch("https://sheets.googleapis.com/v4/spreadsheets/1WxWtSKGhOuxIgLaMvu_KcbVwZmIdficWLdDKvrP6ynE/values/Monthly!A:G?key=AIzaSyDgXU8zfhlxTND982uCp7WpWyFumL5HolQ").then(t=>t.json()).then(t=>{if(t&&t.values&&t.values.length>1){const a=t.values.slice(1).sort((o,v)=>new Date(v[0])-new Date(o[0]));E(a[0]),C(a),document.getElementById("latestMonthDataDate").textContent=a[0][0]}setTimeout(()=>w.refresh(),100)}).catch(t=>{console.error("Error fetching data:",t),document.getElementById("fcmMonthDataBody").innerHTML='<tr><td colspan="6">Failed to load data. Please try again later.</td></tr>'});function E(t){document.getElementById("netCap").textContent=t[1],document.getElementById("adjNetCap").textContent=t[2],document.getElementById("netCapReq").textContent=t[3],document.getElementById("excNetCap").textContent=t[4],document.getElementById("urlMonthly").innerHTML=`<a href="${t[5]}" target="_blank" rel="noopener noreferrer">View Statement</a>`}function C(t){const a=document.getElementById("fcmMonthDataBody");a.innerHTML="",t.forEach((o,v)=>{const i=document.createElement("tr");o.forEach((x,B)=>{const _=document.createElement("td");B===5?_.innerHTML=`<a href="${x}" target="_blank" rel="noopener noreferrer">View</a>`:_.textContent=x,i.appendChild(_)}),v===0&&i.classList.add("top-row-highlight"),a.appendChild(i)})}}function r(){const p="AIzaSyDgXU8zfhlxTND982uCp7WpWyFumL5HolQ";[{folderId:"1_McYu_Ut6Ltu2dch0JuzNQyBqDFpzGBZ",elementId:"pdfList1"},{folderId:"1oI5ZxNMmOBct9N13CnVNI64Kchf6WL3H",elementId:"pdfList2"},{folderId:"1dZiDJqbWOih9Ne1ISp2IICUFZwDcWEdF",elementId:"pdfList3"}].forEach(g=>{y(g.folderId,g.elementId)});function y(g,E){const C=`https://www.googleapis.com/drive/v3/files?q='${g}'+in+parents&fields=files(id,name,modifiedTime)&orderBy=modifiedTime desc&key=${p}`;fetch(C).then(t=>t.json()).then(t=>{const a=t.files,o=document.getElementById(E);if(o){if(o.innerHTML="",!a.length){o.innerHTML="<li>No files found.</li>";return}a.forEach(function(v){const i=document.createElement("li");i.textContent=v.name,i.title=`Modified: ${new Date(v.modifiedTime).toLocaleString()}`,i.style.cursor="pointer",i.onclick=function(){window.open(`https://drive.google.com/file/d/${v.id}/view?usp=sharing`,"_blank")},o.appendChild(i)}),setTimeout(()=>w.refresh(),100)}}).catch(function(t){console.error("Error listing files from folder "+g+":",t);const a=document.getElementById(E);a.innerHTML="<li>Error loading files. Please try again later.</li>"})}}function m(p){n.value.querySelectorAll(".main-tabs li").forEach(e=>{e.dataset.tab===p?e.classList.add("active"):e.classList.remove("active")}),n.value.querySelectorAll(".tab-content").forEach(e=>{e.classList.contains(p)?e.classList.add("active"):e.classList.remove("active")}),setTimeout(()=>w.refresh(),100)}return(p,e)=>(l(),f("div",{ref_key:"$el",ref:n,"data-component":"legal-statements"},[s("h2",ut,T(d.title),1),s("div",vt,[s("ul",null,[s("li",{"data-tab":"daily",class:"active",onClick:e[0]||(e[0]=y=>m("daily"))},e[4]||(e[4]=[s("p",{class:"-body"},"Daily Stmts",-1)])),s("li",{"data-tab":"monthly",onClick:e[1]||(e[1]=y=>m("monthly"))},e[5]||(e[5]=[s("p",{class:"-body"},"Monthly Stmts",-1)])),s("li",{"data-tab":"annual",onClick:e[2]||(e[2]=y=>m("annual"))},e[6]||(e[6]=[s("p",{class:"-body"},"Annual Filings",-1)])),s("li",{"data-tab":"firm",onClick:e[3]||(e[3]=y=>m("firm"))},e[7]||(e[7]=[s("p",{class:"-body"},"Firm Disclosures",-1)]))])]),e[8]||(e[8]=P('<div class="tab-content daily active" data-v-9d880e0c><h6 id="latestDataTitle" class="-body_large" data-v-9d880e0c>Latest Balances: <span id="latestDataDate" data-v-9d880e0c></span></h6><div id="urlDaily" data-v-9d880e0c></div><div id="fcmLatestData" class="fcm-month-data-display" data-v-9d880e0c><table class="fcm-latest-table" data-v-9d880e0c><thead data-v-9d880e0c><tr data-v-9d880e0c><th data-v-9d880e0c>Segregated</th><th data-v-9d880e0c></th><th data-v-9d880e0c>Secured</th><th data-v-9d880e0c></th><th data-v-9d880e0c>Swaps</th><th data-v-9d880e0c></th></tr></thead><tbody data-v-9d880e0c><tr data-v-9d880e0c><td data-v-9d880e0c>Total Held</td><td id="segTotal" data-v-9d880e0c></td><td data-v-9d880e0c>Total Held</td><td id="securedTotal" data-v-9d880e0c></td><td data-v-9d880e0c>Total Held</td><td id="swapsTotal" data-v-9d880e0c></td></tr><tr data-v-9d880e0c><td data-v-9d880e0c>Required</td><td id="segRequired" data-v-9d880e0c></td><td data-v-9d880e0c>Required</td><td id="securedRequired" data-v-9d880e0c></td><td data-v-9d880e0c>Required</td><td id="swapsRequired" data-v-9d880e0c></td></tr><tr data-v-9d880e0c><td data-v-9d880e0c>Excess</td><td id="segExcess" data-v-9d880e0c></td><td data-v-9d880e0c>Excess</td><td id="securedExcess" data-v-9d880e0c></td><td data-v-9d880e0c>Excess</td><td id="swapsExcess" data-v-9d880e0c></td></tr></tbody></table></div><h6 class="-body_medium" data-v-9d880e0c>History:</h6><div class="fcm-scrollable-table" data-lenis-prevent data-v-9d880e0c><table class="fcm-data-table" data-lenis-prevent data-v-9d880e0c><colgroup data-v-9d880e0c><col style="width:10%;" data-v-9d880e0c><col style="width:8%;" data-v-9d880e0c><col style="width:8%;" data-v-9d880e0c><col style="width:8%;" data-v-9d880e0c><col style="width:8%;" data-v-9d880e0c><col style="width:8%;" data-v-9d880e0c><col style="width:8%;" data-v-9d880e0c><col style="width:8%;" data-v-9d880e0c><col style="width:8%;" data-v-9d880e0c><col style="width:8%;" data-v-9d880e0c><col style="width:9%;" data-v-9d880e0c></colgroup><thead data-v-9d880e0c><tr data-v-9d880e0c><th data-v-9d880e0c>Date</th><th data-v-9d880e0c>Seg Total</th><th data-v-9d880e0c>Seg Required</th><th data-v-9d880e0c>Seg Excess</th><th data-v-9d880e0c>Secured Total</th><th data-v-9d880e0c>Secured Required</th><th data-v-9d880e0c>Secured Excess</th><th data-v-9d880e0c>Swaps Total</th><th data-v-9d880e0c>Swaps Required</th><th data-v-9d880e0c>Swaps Excess</th><th data-v-9d880e0c>Statement</th></tr></thead><tbody id="fcmDataBody" data-v-9d880e0c></tbody></table></div></div><div class="tab-content monthly" data-v-9d880e0c><h6 class="-body_large" data-v-9d880e0c>Monthly financials as of: <span id="latestMonthDataDate" data-v-9d880e0c></span></h6><div id="fcmMonthLatestData" class="fcm-month-data-display" data-v-9d880e0c><table class="fcm-month-latest-table" data-v-9d880e0c><thead data-v-9d880e0c><tr data-v-9d880e0c><th data-v-9d880e0c>Balances</th><th data-v-9d880e0c></th></tr></thead><tbody data-v-9d880e0c><tr data-v-9d880e0c><td data-v-9d880e0c>Net Capital</td><td id="netCap" data-v-9d880e0c></td></tr><tr data-v-9d880e0c><td data-v-9d880e0c>Adjusted Net Capital</td><td id="adjNetCap" data-v-9d880e0c></td></tr><tr data-v-9d880e0c><td data-v-9d880e0c>Net Capital Requirement</td><td id="netCapReq" data-v-9d880e0c></td></tr><tr data-v-9d880e0c><td data-v-9d880e0c>Excess Net Capital</td><td id="excNetCap" data-v-9d880e0c></td></tr><tr data-v-9d880e0c><td id="urlMonthly" data-v-9d880e0c></td><td data-v-9d880e0c></td></tr></tbody></table></div><h6 class="-body_medium" data-v-9d880e0c>History:</h6><div class="fcm-month-scrollable-table" data-v-9d880e0c><table class="fcm-month-data-table" data-v-9d880e0c><colgroup data-v-9d880e0c><col style="width:20%;" data-v-9d880e0c><col style="width:15%;" data-v-9d880e0c><col style="width:15%;" data-v-9d880e0c><col style="width:15%;" data-v-9d880e0c><col style="width:15%;" data-v-9d880e0c><col style="width:10%;" data-v-9d880e0c><col style="width:10%;" data-v-9d880e0c></colgroup><thead data-v-9d880e0c><tr data-v-9d880e0c><th data-v-9d880e0c>Date</th><th data-v-9d880e0c>Net Cap</th><th data-v-9d880e0c>Adj Net Cap</th><th data-v-9d880e0c>Net Cap Req</th><th data-v-9d880e0c>Excess Net Cap</th><th data-v-9d880e0c>Statement</th><th data-v-9d880e0c>Posted On</th></tr></thead><tbody id="fcmMonthDataBody" data-v-9d880e0c></tbody></table></div></div><div class="tab-content annual" data-v-9d880e0c><div id="pdfListContainer" data-v-9d880e0c><ul id="pdfList2" style="list-style-type:none;padding:0;margin:0;" data-v-9d880e0c></ul></div></div><div class="tab-content firm" data-v-9d880e0c><div id="pdfListContainer" data-v-9d880e0c><ul id="pdfList3" style="list-style-type:none;padding:0;margin:0;" data-v-9d880e0c></ul></div></div>',4))],512))}},mt=b(ht,[["__scopeId","data-v-9d880e0c"]]),pt={"data-component":"legal-content"},ft={key:0,class:"content"},yt={__name:"LegalContent",props:{body:{type:[Boolean,Array],default:!1}},setup(d){const n={types:{figureLegal:O,pagesHub:ot,documentation:rt,legalStatements:mt},marks:{link:$,internalLink:$},styles:{span:"span"}};return(u,h)=>{const r=G;return l(),f("section",pt,[d.body?(l(),f("div",ft,[L(r,{blocks:d.body,serializers:n},null,8,["blocks"])])):N("",!0)])}}},gt=b(yt,[["__scopeId","data-v-acd642fa"]]),_t={__name:"Legal",props:{slug:{type:String,default:""},legalContent:{type:Object,default:()=>{}},footer:{type:Object,default:()=>{}}},setup(d){const n=d,{$preview:u}=W(),{onEnter:h,onLeave:r}=V();return(m,p)=>(l(),D(c(K),{slug:d.slug,class:"page","transition-enter":c(h),"transition-leave":c(r)},{default:F(()=>[c(u)?(l(),D(c(Y),{key:0})):N("",!0),L(c(dt),{title:d.legalContent.title},null,8,["title"]),L(c(gt),{body:d.legalContent.body},null,8,["body"]),L(c(U),S(n.footer,{theme:"light"}),null,16)]),_:1},8,["slug","transition-enter","transition-leave"]))}},Et=b(_t,[["__scopeId","data-v-8af7dcc0"]]),Bt={__name:"[...slug]",async setup(d){let n,u;const r=j().params.slug[0],{data:m}=([n,u]=z(()=>Z(`/cms/page?slug=legal.${r}`,"$r0MehdcE7B")),n=await n,u(),n);return Q(m.value.pageSetup),(p,e)=>(l(),D(c(Et),S(c(m).sections,{slug:c(m).pageSetup.slug.current}),null,16,["slug"]))}};export{Bt as default};