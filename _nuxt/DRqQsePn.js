import{_ as S,r,d as o,e as i,f as s,k as c,t as f,j as x,I as A,p as b,F,h as L,m as N,A as O,n as w}from"./BLFlnk3S.js";import{I as R}from"./CO9DY9Fu.js";const T=["data-name","data-selected-option","data-label"],_={class:"dropdown-container","data-lenis-prevent":""},V={class:"dropdown-list"},E=["data-value"],j=["data-value"],q={__name:"Selector",props:{mainLabel:{type:String,default:"All"},name:{type:[Boolean,String],default:!1},options:{type:Array,default:()=>["Test 1","Test 2","Test 3","Test 4","Nest 1","Nest 2","Nest 3","Nest 4","Rest 1","Rest 2","Rest 3","Rest 4","Best 1","Best 2","Best 3","Best 4"]},haveInput:{type:Boolean,default:!1},clickFunc:{type:Function,default:()=>{}},scrollable:{type:Boolean,default:!1},showAll:{type:Boolean,default:!1}},setup(e,{expose:k}){const d=e,l=r(null),t=r(d.mainLabel),u=r(null),v=r(null),B=()=>{l.value.dataset.open==="false"?l.value.dataset.open="true":l.value.dataset.open="false"},p=a=>{t.value=a.target.dataset.value,u.value=a.target.dataset.value,d.clickFunc(t.value),h(),m(),d.haveInput&&t.value==="Other"&&w(()=>{v.value.setFocus()})},I=a=>{t.value=a,d.clickFunc(a),h(),m()},h=()=>{l.value.querySelectorAll(".dropdown-list .item").forEach(n=>{n.dataset.active==="true"&&(n.dataset.active="false"),n.dataset.value===t.value&&(n.dataset.active="true")})},g=a=>u.value=a,m=()=>{l.value.dataset.open="false"};return k({forceHandleOption:I}),(a,n)=>(o(),i("div",{ref_key:"selectorRef",ref:l,"data-component":"selector","data-open":"false",class:O(e.scrollable?"scrollable":"static")},[s("span",{class:"label",onClick:B},[s("span",{class:"-body label-text","data-name":e.name,"data-selected-option":c(u),"data-label":e.mainLabel},f(c(t)),9,T),x(c(A),{slug:"chevron-down",class:"icon"})]),s("div",_,[s("ul",V,[e.showAll?(o(),i("li",{key:0,class:"item -body","data-active":"true","data-value":e.mainLabel,onClick:p},[s("span",null,f(e.mainLabel),1)],8,E)):b("",!0),(o(!0),i(F,null,L(e.options,(y,C)=>(o(),i("li",{key:C,class:"item -body","data-active":"false","data-value":y,onClick:p},[s("span",null,f(y),1)],8,j))),128))])]),e.haveInput&&c(t)==="Other"?(o(),N(c(R),{key:0,ref_key:"other",ref:v,type:"text",label:`${e.mainLabel} — Other`,placeholder:"Other",name:"other","type-fn":g},null,8,["label"])):b("",!0)],2))}},H=S(q,[["__scopeId","data-v-65d4861c"]]);export{H as S};
