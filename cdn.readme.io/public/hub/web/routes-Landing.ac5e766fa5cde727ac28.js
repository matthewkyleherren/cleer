!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ddc5068b-2b80-412a-947b-460aca29c46e",e._sentryDebugIdIdentifier="sentry-dbid-ddc5068b-2b80-412a-947b-460aca29c46e")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.240.1"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[3787],{32562:(e,n,t)=>{t.d(n,{A:()=>l,i:()=>a});const a={home:"landing",guides:"docs",reference:"reference",recipes:"tutorials",changelog:"changelog",discussions:"discuss",graphql:"graphql"};const l=function(e){if(!e)return{};const n=Object.keys(e),t={};return n.forEach((n=>{const l=a[n];l&&(t[l]="enabled"===e[n].visibility)})),t}},15507:(e,n,t)=>{t.d(n,{A:()=>d});t(16349),t(23922),t(96837),t(57627);var a=t(67136),l=(t(61629),t(28200),t(83902),t(14041)),r=t(94702),i=t(45975),c=t(32562);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,a.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const d=function(){var e=(0,l.useContext)(r.vz).project.flags,n=((0,l.useContext)(r.Rs)||{}).user,t=(0,i.Iw)((function(e){return function(e){const n=Object.keys(e).filter((e=>!["home","graphql"].includes(e))),t={};return n.forEach((n=>{var a;const l=c.i[n];l&&(t[l]=null===(a=e[n])||void 0===a?void 0:a.alias)})),t}(e.data.appearance.navigation.links)}));return t.blog&&(t.blog=""),t.recipes&&(t.tutorials=t.recipes),s(s({home:"Home",landing:"Home",docs:"Guides",tutorials:"Recipes",recipes:"Recipes",reference:"API Reference"},!0===(null==e?void 0:e.graphql)&&{graphql:"GraphQL"}),{},{logs:"API Logs",changelog:"Changelog",discuss:"Discussions",user:n&&n.name||!1},Object.keys(t).reduce((function(e,n){var a=t[n]||!1;return a&&(e[n]=a),e}),{}))}},35250:(e,n,t)=>{t.r(n),t.d(n,{default:()=>S});var a={};t.r(a),t.d(a,{DocsBlock:()=>h,HtmlBlock:()=>A,LinksBlock:()=>j,TextBlock:()=>M,TextMediaBlock:()=>I,ThreeBlock:()=>q});var l=t(55285),r=(t(81198),t(97132),t(95479)),i=t.n(r),c=t(38285),o=t.n(c),s=t(14041),d=t(94702),g=t(71075),u=t(51046),m=t(89648),p=(t(14292),t(39067)),k=t.n(p),f=t(33664),v=t(83420);const L={LandingWrap:"LandingWrap16kRMSdr5J8g",LandingBlock:"LandingBlock3PM-HyBxby3X","LandingBlock-link_viewAll":"LandingBlock-link_viewAllX8PdNqsaoOrY","LandingBlock_align=right":"LandingBlock_align=right5brkzb7uF2uO","LandingBlock_align=center":"LandingBlock_align=center12RqtJarcIcH","LandingBlock_align=left":"LandingBlock_align=leftG1r7ROyW_AGB","LandingBlock-Three":"LandingBlock-Three2lm6yBrv1MlV","LandingBlock-Docs":"LandingBlock-Docs1N0x68Z0Yw2J","LandingBlock-Links":"LandingBlock-Links38HRtdeemVvp","LandingBlock-TextMedia":"LandingBlock-TextMedia2eohAoAZBn4h","LandingBlock-TextMedia_reverse":"LandingBlock-TextMedia_reverse2UDtbGaKixp1","LandingBlock-TextMedia-media":"LandingBlock-TextMedia-media2NFhDb7Wi36K",LandingBlockWrap:"LandingBlockWrap14DcwE_zdFiG"};var y=["title","slug","_id","type","api"],B=function(e){var n=e.docsCategories,t=e.refCategories,a=e.pageType,l=e.className,r="Reference"===a?t:n,i="Reference"===a?"reference":"docs";return r&&r.length?s.createElement("div",{className:(0,u.Ay)(L.LandingBlock,L["LandingBlock-Docs"],l)},null==r?void 0:r.map((function(e){var n=e.title,t=e.pages,a=e._id;return s.createElement("div",{key:"LP-DocsBlock:".concat(a),className:"markdown-body"},s.createElement("h3",null,n),s.createElement("ul",null,t.slice(0,3).map((function(e){var n=e.title,t=e.slug,a=e._id,l=e.type,r=e.api,c=void 0===r?{}:r,o=(0,m.A)(e,y),d="endpoint"===l&&(null==c?void 0:c.method),g="link"===l?"a":f.N_,u=["/".concat(i)];"RealtimePage"===o.pageType&&u.push("intro"),u.push(t);var p="link"===l?o.link_url:u.join("/"),k={href:p,to:p,target:"link"===l&&o.link_external&&"_blank"};return s.createElement("li",{key:"LP-DocsBlock:".concat(a)},s.createElement(g,k,n),!!d&&s.createElement(v.A,{fixedWidth:!0,type:d}))})),t.length>3&&s.createElement("li",null,s.createElement(f.N_,{className:(0,u.Ay)(L["LandingBlock-link_viewAll"]),to:"/".concat(i,"/").concat(t[0].slug)},"View More…"," "))))}))):null};B.propTypes={docsCategories:k().arrayOf(k().object),pageType:k().string,refCategories:k().arrayOf(k().object)};const h=B;var b=t(46354),E=t(86761),_=function(e){var n=e.html,t=e.rdmdOpts,a=void 0===t?{}:t,l=e.className,r=void 0===l?"":l;return s.createElement(E.A,{className:(0,u.Ay)(L.LandingBlock,L["LandingBlock-Html"],r),opts:a},(0,b.x)(n))};_.propTypes={html:k().string,rdmdOpts:k().object};const A=_;t(83902);var O=t(15507),N=t(46517),T=["title","slug","_id","pages"],x=function(e){return e.replace(/s$/,"")},w=function(e){var n,t=e.discuss,a=e.changelogs,l=e.docsCategories,r=e.className,i=((0,s.useContext)(d.QO).domainFull,(0,s.useContext)(d.vz).project.modules),c=(0,O.A)(),o=((0,N.A)().isLoggedIn,{docs:l,changelog:a,discuss:t}),g={discuss:s.createElement(s.Fragment,null,"No ",x(c.discuss.toLowerCase())," posts found."," ",s.createElement(f.N_,{to:"/discuss-new"},s.createElement("b",null,"Ask a question")),".")};return s.createElement("div",{className:(0,u.Ay)(L.LandingBlock,L["LandingBlock-Links"],r)},null===(n=Object.keys(o))||void 0===n?void 0:n.map((function(e){var n;if(null==i||!i[e])return null;var t,a=(null==c?void 0:c[e])||e,l=o[e],r="discuss"===e?"a":f.N_;return s.createElement("div",{key:"LP-LinksBlock:".concat(e),className:"markdown-body"},s.createElement("h3",null,a),s.createElement("ul",null,null!=l&&l.length?s.createElement(s.Fragment,null,null==l||null===(n=l.slice(0,4))||void 0===n?void 0:n.map((function(n){var t,a=n.title,l=n.slug,i=n._id,c=n.pages;(0,m.A)(n,T);"docs"===e&&(l=(null==c||null===(t=c[0])||void 0===t?void 0:t.slug)||"");var o="/".concat(e,"/").concat(l||i);return s.createElement("li",{key:"LP-LinksBlock:item-".concat(i)},s.createElement(r,{href:o,to:o},a))})),s.createElement("li",null,s.createElement(r,{className:(0,u.Ay)(L["LandingBlock-link_viewAll"]),href:"/".concat(e),to:"/".concat(e)},"View All…"))):g[e]||"No ".concat((t=a.toLowerCase(),"".concat(x(t),"s"))," found.")))})))};w.propTypes={changelogs:k().array,discuss:k().array,docsCategories:k().array};const j=w;var D=function(e){var n=e.title,t=e.text,a=e.rdmdOpts,l=void 0===a?{}:a,r=e.className;return s.createElement("div",{className:(0,u.Ay)(L.LandingBlock,L["LandingBlock-Text"],r)},s.createElement(E.A,{opts:l},[n?"## ".concat(n):"",t].join("\n\n")))};D.propTypes={rdmdOpts:k().object,text:k().string,title:k().string};const M=D;var C=["mediaType","mediaImage","mediaCode","mediaHTML","side","rdmdOpts","className"],P=function(e){var n=e.mediaType,t=e.mediaImage,a=e.mediaCode,r=e.mediaHTML,i=e.side,c=e.rdmdOpts,o=void 0===c?{}:c,d=e.className,g=(0,m.A)(e,C);return s.createElement("div",{className:(0,u.Ay)(L.LandingBlock,L["LandingBlock-TextMedia"],"right"===i?L["LandingBlock-TextMedia_reverse"]:"",d)},"html"===n&&s.createElement(A,(0,l.A)({},g,{className:L["LandingBlock-TextMedia-media"],html:r})),"image"===n&&(null==t?void 0:t.length)>0&&s.createElement("img",{className:L["LandingBlock-TextMedia-media"],src:t[0]}),"code"===n&&s.createElement(E.A,{className:L["LandingBlock-TextMedia-media"],opts:o},(0,b.D)(a)),!(null!=g&&g.title||null!=g&&g.text)||s.createElement(M,g))};P.propTypes={mediaCode:k().shape({codes:k().array}),mediaHTML:k().string,mediaImage:k().array,mediaType:k().string,rdmdOpts:k().object,side:k().oneOf(["right","left"]),text:k().string,title:k().string};const I=P;var H=["group0","group1","group2","className"],R=function(e){var n=e.group0,t=e.group1,a=e.group2,r=e.className,i=(0,m.A)(e,H);return s.createElement("div",{className:(0,u.Ay)(L.LandingBlock,L["LandingBlock-Three"],r)},s.createElement(M,(0,l.A)({},i,n)),s.createElement(M,(0,l.A)({},i,t)),s.createElement(M,(0,l.A)({},i,a)))};R.propTypes={group0:k().shape({text:k().string,title:k().string}),group1:k().shape({text:k().string,title:k().string}),group2:k().shape({text:k().string,title:k().string})};const q=R;const S=function(e){var n=(0,g.A)(e),t=n.state,r=n.loading,c=(0,s.useContext)(d.vz).project.landing_bottom,m=void 0===c?[]:c,p=(0,s.useContext)(d.tA);return(0,s.useEffect)((function(){var e=document.getElementsByTagName("body")[0],n="hub-is-home";return e.classList.add(n),function(){return e.classList.remove(n)}}),[]),p.isParent?s.createElement("div",{dangerouslySetInnerHTML:{__html:p.lpMarkup}}):r?null:s.createElement("main",{className:(0,u.Ay)(L.LandingWrap,"rm-LandingPage"),id:"content"},m.map((function(e){var n,r=(n=e.type,null==a?void 0:a["".concat(i()(n).replace(" ",""),"Block")]),c=null!=e&&e.alignment?L["LandingBlock_align=".concat(e.alignment)]:"";return r?s.createElement(r,(0,l.A)({key:o()(),className:c},t,e)):null})))}}}]);
//# sourceMappingURL=routes-Landing.ac5e766fa5cde727ac28.js.map