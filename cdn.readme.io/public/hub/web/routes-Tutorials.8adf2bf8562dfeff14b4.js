/*! For license information please see routes-Tutorials.8adf2bf8562dfeff14b4.js.LICENSE.txt */
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="680f142a-3bef-4540-bb92-db6549d46dd4",e._sentryDebugIdIdentifier="sentry-dbid-680f142a-3bef-4540-bb92-db6549d46dd4")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.235.0"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[4467],{1240:(e,t,o)=>{var r=o(16917)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(o){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}},14847:(e,t,o)=>{var r=o(19416),a=o(57155);e.exports=function(e,t,o){if(r(t))throw TypeError("String#"+o+" doesn't accept regex!");return String(a(e))}},97132:(e,t,o)=>{"use strict";var r=o(64938),a=o(53828)(1);r(r.P+r.F*!o(1915)([].map,!0),"Array",{map:function(e){return a(this,e,arguments[1])}})},74397:(e,t,o)=>{"use strict";var r=o(64938),a=o(14847),n="includes";r(r.P+r.F*o(1240)(n),"String",{includes:function(e){return!!~a(this,e,n).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},22866:(e,t,o)=>{"use strict";var r=o(64938),a=o(76162),n=o(14847),i="startsWith",l=""[i];r(r.P+r.F*o(1240)(i),"String",{startsWith:function(e){var t=n(this,e,i),o=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return l?l.call(t,r,o):t.slice(o,o+r.length)===r}})},3260:(e,t,o)=>{"use strict";var r=o(64938),a=o(2925)(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),o(44937)("includes")},98248:(e,t,o)=>{"use strict";o.d(t,{P:()=>r});const r="/dash?to=plans"},71409:(e,t,o)=>{"use strict";o.d(t,{A:()=>p});var r=o(14041),a=o(52114),n=o(27068),i=o(94569),l=o(10880);const c={EmptyState:"EmptyStateif3N52l2a_IV","EmptyState-content":"EmptyState-content1mvwo6TCgxyQ","EmptyState-title":"EmptyState-title10_Kcvg34Q5D","EmptyState-description":"EmptyState-description1CGy2oKXGeAf"},s={changelog:{actionLabel:"New Post",description:"Try creating a new post!",icon:"megaphone",title:"No Changelogs"},customPage:{actionLabel:"New Page",description:"Create your first custom page!",icon:"custom-pages",title:"No Custom Pages"},discussion:{actionLabel:"New Question",description:"Nobody's asked a question yet. Be the first!",icon:"message-circle",title:"No Discussions"},guide:{actionLabel:"New Page",description:"Create your first guides page!",icon:"book-open",title:"No Guides"},history:{actionLabel:"",description:"",icon:"clock",title:"No History"},recipe:{actionLabel:"New Recipe",description:"Recipes are task-driven guidance for your API. Try creating a new Recipe for your users!",icon:"recipes",title:"No Recipes"},reference:{actionLabel:"New API Definition",description:"ReadMe can generate your API reference from a specification file.",icon:"code",title:"No API Endpoints"}},u=/^https?:\/\//i;function p({action:e,className:t,onAction:o,section:p}){const d=(0,a.A)(c,"EmptyState"),{title:m,description:f,icon:b,actionLabel:g}=s[p],T=!(!e&&!o||!g),y=!!e&&u.test(e),E=!!e&&!y;return r.createElement(i.A,{align:"center",className:d("&",t),justify:"center"},r.createElement(i.A,{align:"center",className:d("-content"),gap:"md",layout:"col"},r.createElement(l.A,{color:"blue",name:b,size:40}),r.createElement(i.A,{align:"center",gap:"xs",layout:"col"},r.createElement("h2",{className:d("-title")},m),!!T&&r.createElement("p",{className:d("-description")},f)),!!T&&r.createElement(i.A,{className:d("-actions"),gap:"sm"},"recipe"===p&&r.createElement(n.A,{href:"https://docs.readme.com/recipes/publish-all-docs-in-category",kind:"secondary",size:"sm",target:"_blank"},"Try Example",r.createElement(l.A,{name:"arrow-up-right"})),r.createElement(n.A,{href:y?e:void 0,kind:"primary",onClick:o,size:"sm",to:E?e:void 0},r.createElement(l.A,{name:"plus"}),g))))}},556:(e,t,o)=>{"use strict";o.d(t,{A:()=>i});var r=o(14041),a=o(51046),n=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o};const i=(0,r.memo)((0,r.forwardRef)(((e,t)=>{var{children:o,className:i,description:l,isIndeterminate:c=!1,isLabelMuted:s=!1,label:u,onChange:p,size:d="md",style:m,type:f="checkbox",kind:b="default"}=e,g=n(e,["children","className","description","isIndeterminate","isLabelMuted","label","onChange","size","style","type","kind"]);const T=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>null==T?void 0:T.current));const y=(0,a.Ay)("Toggle",`Toggle_${f}`,"toggle"===f&&`Toggle_toggle_${d}`,"toggle"===f&&"default"!==b&&`Toggle_${b}`,i),E=(0,r.useCallback)((e=>{null==p||p(e)}),[p]);return(0,r.useEffect)((()=>{"checkbox"===f&&(null==T?void 0:T.current)&&(T.current.indeterminate=c)}),[c,f]),r.createElement("label",{className:y,style:m},r.createElement("input",Object.assign({ref:T},g,{className:"Toggle-input",onChange:E,type:"toggle"===f?"checkbox":f})),r.createElement("div",{className:"Toggle-display"},r.createElement("i",{className:"Toggle-display-icon icon-check-heavy"}),r.createElement("i",{className:"Toggle-display-icon icon-minus-heavy"})),!(!u&&!o)&&r.createElement("span",{className:(0,a.Ay)("Toggle-label",`Toggle-label_${d}`,s&&"Toggle-label_muted")},u||o),!!l&&r.createElement("span",{className:"Toggle-description"},l))})))},55478:(e,t,o)=>{"use strict";o.d(t,{C6:()=>a,Cl:()=>n,Ju:()=>l,Tt:()=>i,gz:()=>s,zs:()=>c});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},r(e,t)};function a(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}var n=function(){return n=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var a in t=arguments[o])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)};function i(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(o[r[a]]=e[r[a]])}return o}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,o=t&&e[t],r=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var r,a,n=o.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=n.next()).done;)i.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(o=n.return)&&o.call(n)}finally{if(a)throw a.error}}return i}function s(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}},4880:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>M});o(16349),o(23922),o(96837),o(57627);var r=o(67136),a=o(49555),n=(o(18586),o(83902),o(93849),o(8947),o(97132),o(22866),o(14292),o(46108)),i=o.n(n),l=o(39067),c=o.n(l),s=o(14041),u=o(86090),p=o(98248),d=o(94702),m=o(43069),f=o(46517),b=o(45975),g=o(51046),T=o(71409),y=o(27068),E=o(47168),h=o(97495),v=o(41458),C=o(556),N=o(53614),A=(o(28200),o(11236)),w=o.n(A),P=o(66491);const H={TutorialHero:"TutorialHero3tJ8Cd5oYe9Y","TutorialHero-Col":"TutorialHero-Col36EgTIuhTZbz","TutorialHero-Col-Title":"TutorialHero-Col-Title2qWomArFMVwW","TutorialHero-Col-Description":"TutorialHero-Col-Description2ACFUNRKSY1U","TutorialHero-Col-Heading":"TutorialHero-Col-Heading3t-a3GUY3Pkb","TutorialHero-Col-List":"TutorialHero-Col-List1Cgd5Lzy9Mmn","TutorialHero-Col-List_ellipsis":"TutorialHero-Col-List_ellipsis_MMu8vGCG8Ng","TutorialHero-Col-List-Item":"TutorialHero-Col-List-Item11o8wpj7wrhl","TutorialHero-Col-Ellipsis":"TutorialHero-Col-Ellipsis3UnmiRSBbmPw","TutorialHero-Col-Ellipsis-Popup":"TutorialHero-Col-Ellipsis-Popup3pPMCpF4XcZN","TutorialHero-Col-Button":"TutorialHero-Col-Button30kgQ21_O-Ef","TutorialHero-Image":"TutorialHero-Image1aNUyFg1gF5S","TutorialHero-Image-TutorialEditor-Nav":"TutorialHero-Image-TutorialEditor-Nav1EmkdJF9vWHV","TutorialHero-Image-TutorialEditor-Nav-Button":"TutorialHero-Image-TutorialEditor-Nav-Button1XpzRqr7GTeH"};var _="undefined"!=typeof window?o(29557).default:function(){},O=function(e){var t=e.hero,o=e.openTutorial;return s.createElement("section",{className:(0,g.Ay)(H.TutorialHero,"rm-RecipeHero")},s.createElement("div",{className:H["TutorialHero-Col"]},s.createElement(v.A,{className:H["TutorialHero-Col-Title"],level:1},t.title),s.createElement("span",{className:"rm-Markdown markdown-body ".concat(H["TutorialHero-Col-Description"])},w()(t.description)),!!t.steps&&t.steps.length>0&&s.createElement(s.Fragment,null,s.createElement("div",{className:H["TutorialHero-Col-Heading"]},"IN THIS RECIPE"),s.createElement("ol",{className:H["TutorialHero-Col-List"]},t.steps.slice(0,3).map((function(e,t){return s.createElement("li",{key:t,className:H["TutorialHero-Col-List-Item"]},e.title)})))),!!t.steps&&t.steps.length>3&&s.createElement("button",{className:H["TutorialHero-Col-Ellipsis"],type:"button"},"•••",s.createElement("div",{className:H["TutorialHero-Col-Ellipsis-Popup"]},s.createElement("ol",{className:[H["TutorialHero-Col-List"],H["TutorialHero-Col-List_ellipsis"]].join(" ")},t.steps.slice(3).map((function(e,t){return s.createElement("li",{key:t,className:H["TutorialHero-Col-List-Item"]},e.title)}))))),s.createElement(y.A,{className:(0,g.Ay)(H["TutorialHero-Col-Button"],"rm-RecipeHero-button"),onClick:function(){return o("View",t)},size:"lg"},!!t.emoji&&s.createElement("span",{className:H["TutorialHero-Col-Button-Emoji"]},t.emoji),s.createElement("span",null,"Open Recipe"))),s.createElement("div",{className:H["TutorialHero-Image"]},s.createElement("div",{className:H["TutorialHero-Image-TutorialEditor-Nav"]},!!t.snippet&&t.snippet.codeOptions.map((function(e){var t=e.name;return s.createElement(y.A,{key:t,bem:{white_text:!0},className:H["TutorialHero-Image-TutorialEditor-Nav-Button"]},t)}))),s.createElement("label",null,_(t.snippet?t.snippet.codeOptions[0].code:"",t.snippet?t.snippet.codeOptions[0].highlightedSyntax:"javascript",{dark:!0,highlightMode:!0,tokenizeVariables:!0,foldGutter:!0},{className:"CodeEditor-Input CodeEditor-Input_readonly"}))))};O.propTypes={hero:P.oS.isRequired,openTutorial:c().func.isRequired};const k=O;var S=o(52395),R=o(1375),I=o(51235),j=o(12420);const B={Tutorial:"Tutorial3nWTwBeG014e",Tutorial_loading:"Tutorial_loading3Xo3gsfsu-1O",spinner:"spinnerqwgS5eFgal1k",Tutorial_superhub:"Tutorial_superhubq8cp_ikGqNqb","Tutorial-Wrapper":"Tutorial-Wrapper3WrC9LAJdoL5",TutorialGrid:"TutorialGrid26plsmAq5mws",TutorialToolbar:"TutorialToolbar27eNzt0imdZR","TutorialToolbar-Button":"TutorialToolbar-Button2iV8TtYdE3Eo","TutorialToolbar-PopoverWrapper":"TutorialToolbar-PopoverWrapper2mrgP1UyojkI","TutorialToolbar-Popover":"TutorialToolbar-Popover3kmBe3gBpfZf","TutorialToolbar-Button-Icon":"TutorialToolbar-Button-Icon1RUg-DwdhWrl","TutorialToolbar-Button-Arrow":"TutorialToolbar-Button-Arrow2VlxJCE3uoJK","TutorialToolbar-Popover-Description":"TutorialToolbar-Popover-DescriptionB_Gd8M-pTJHn","TutorialToolbar-Popover-Description-Button":"TutorialToolbar-Popover-Description-Button1H_QzIRpPVrE",TutorialToolbar_superhub:"TutorialToolbar_superhub3yMy5kXEzLye",TutorialConfirmation:"TutorialConfirmation1r99yGgOGvdB","TutorialConfirmation-Title":"TutorialConfirmation-Title3GjUUqq1sM2Z","TutorialConfirmation-Description":"TutorialConfirmation-DescriptionCS2mvwFpYC76",TutorialFooter:"TutorialFooter105CzRqw2rhi",SuperHubModalWrapper:"SuperHubModalWrapperalenJTA9KBoj"};var D=o(31832);function L(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function x(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?L(Object(o),!0).forEach((function(t){(0,r.A)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):L(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function M(e){var t=(0,D.A)(),o=(0,b.f8)((function(e){return[e.isSuperHub,e.isSuperHubAdmin,e.isEditing,e.apiBaseUrl]})),r=(0,a.A)(o,4),n=r[0],l=r[1],c=r[2],A=r[3],w=(0,s.useContext)(d.y0).updateAppMeta,P=(0,s.useContext)(d.IT),H=n?A.split("/versions")[0]:e.baseUrl||P,_=e.modalTarget,O=e.confirmationTarget,L=e.slug,M=e.referenceEnabled,U=e.isFreePlan,W=e.stagingUrl,F=(0,u.W6)(),G=(0,f.A)().isAdminUser,q=(0,s.useState)({}),z=(0,a.A)(q,2),V=z[0],J=z[1],Y=(0,s.useState)({}),K=(0,a.A)(Y,2),Q=K[0],X=K[1],Z=(0,s.useState)([]),$=(0,a.A)(Z,2),ee=$[0],te=$[1],oe=(0,s.useState)(!0),re=(0,a.A)(oe,2),ae=re[0],ne=re[1],ie=(0,s.useState)({open:!1,action:"View"}),le=(0,a.A)(ie,2),ce=le[0],se=le[1],ue=(0,s.useState)({}),pe=(0,a.A)(ue,2),de=pe[0],me=pe[1],fe=(0,s.useState)(!1),be=(0,a.A)(fe,2),ge=be[0],Te=be[1],ye=(0,s.useState)(),Ee=(0,a.A)(ye,2),he=Ee[0],ve=Ee[1],Ce=s.createRef(),Ne=(0,m.A)(H),Ae=Ne.response,we=Ne.error,Pe=Ne.setError,He=Ne.pendingRequest,_e=Ne.initRequest,Oe=function(){return t.getTutorials(_e)};(0,s.useEffect)((function(){Oe()}),[]),(0,s.useEffect)((function(){He&&Oe()}),[He]),(0,s.useEffect)((function(){Object.keys(Ae).length&&ne(!1)}),[Ae]),(0,s.useEffect)((function(){Ae.hero&&J(Ae.hero)}),[Ae.hero]),(0,s.useEffect)((function(){Ae.tutorialOnboarding&&X(Ae.tutorialOnboarding)}),[Ae.tutorialOnboarding]),(0,s.useEffect)((function(){Ae.tutorials&&te(Ae.tutorials)}),[Ae.tutorials]),(0,s.useEffect)((function(){"moduleEnabled"in Ae&&Te(Ae.moduleEnabled)}),[Ae.moduleEnabled]),(0,s.useEffect)((function(){L&&(t.getTutorial(_e,L),setTimeout((function(){return Oe()})))}),[L]),(0,s.useEffect)((function(){Ae.tutorial&&!Ae.tutorialPublishToggled&&(ve(Ae.tutorial),se({open:!0,action:"View"}))}),[Ae.tutorial]),(0,s.useEffect)((function(){w({title:(null==he?void 0:he.title)||"Recipes",type:"tutorials",description:null==he?void 0:he.description})}),[null==he?void 0:he.title,null==he?void 0:he.description,w]);var ke=!!V&&!!V.title||ee.length>0,Se=n?c&&ke:G,Re=(0,s.useCallback)((function(e){if(!/https?:\/\//.test(H)){var t=e?"/recipes/".concat(e):"/recipes";F.push("".concat(n&&c?"/update":"").concat(t))}}),[H,F,c,n]),Ie=(0,s.useCallback)((function(e,t){se({open:!0,action:e}),ve((function(o){var r,a,n,l=null==o||null===(r=o._id)||void 0===r?void 0:r.toString(),c=null!==(a=null==t||null===(n=t._id)||void 0===n?void 0:n.toString())&&void 0!==a?a:"";return l!==c&&"Create"===e?x({},i()(R.tk)):l!==c?(Re(t.slug),x({},t)):(Re(t.slug),o)}))}),[Re]),je=function(e){var o=e.published;return Ce.current.toggle(!0),me({title:"Are you sure you want to ".concat(o?"publish":"unpublish"," this Recipe?"),body:o?"This will make it viewable all users.":"It will no longer be viewable to users.",action:t.updateTutorial.bind(null,_e,e),buttonText:o?"Publish It!":"Unpublish Recipe"})},Be=function(e){return Ce.current.toggle(!0),me({title:"Are you sure you want to delete ".concat(e.title?"‘".concat(e.title,"’"):"this Recipe","?"),body:"You cannot undo this action.",action:t.deleteTutorial.bind(null,_e,e),buttonText:"Delete Recipe"})},De=function(e){var o=e._id;return e.published?t.makeHero(_e,{_id:o,slug:e.slug}):(Ce.current.toggle(!0),me({title:"Are you sure you want to feature an unpublished Recipe?",body:"Featuring an unpublished Recipe will publish it. Make sure it’s ready!",action:t.makeHero.bind(null,_e,{_id:o,slug:e.slug}),buttonText:"Feature It!"}))},Le=we;if(we&&DOMParser)try{var xe=(new DOMParser).parseFromString(we,"text/html");Le=xe.firstElementChild.innerText}catch(e){Le="Unexpected error. Please contact support@readme.io!",console.error(e)}(0,s.useEffect)((function(){G&&Le&&(0,h.me)(s.createElement(h.Ay,{dismissible:!0,handleClick:function(){return Pe(null)},kind:"error",position:"top"},s.createElement("p",null,Le)),{position:"top"})}),[G,Le,Pe]);var Me=(0,s.useCallback)((function(){return s.createElement("div",{className:(0,g.Ay)(B.TutorialToolbar,n&&B.TutorialToolbar_superhub)},!n&&s.createElement("button",{className:B["TutorialToolbar-Button"],type:"Button"},ge?s.createElement("i",{className:"icon icon-eye-2 ".concat(B["TutorialToolbar-Button-Icon"])}):s.createElement("i",{className:"icon icon-eye-off ".concat(B["TutorialToolbar-Button-Icon"])}),s.createElement("span",null,"Show Recipes",s.createElement("i",{className:"fa fa-chevron-down ".concat(B["TutorialToolbar-Button-Arrow"])})),s.createElement("div",{className:B["TutorialToolbar-PopoverWrapper"]},s.createElement("div",{className:B["TutorialToolbar-Popover"]},s.createElement(C.A,{checked:ge,disabled:!ee.length||U,label:"Show Recipes",onChange:function(){return t.toggleModule(_e)},type:"toggle"}),U?s.createElement("div",{className:B["TutorialToolbar-Popover-Description"]},"Recipes are only available on paid plans. Upgrade your plan to make this section visible to users."," ",s.createElement("a",{className:B["TutorialToolbar-Popover-Description-Button"],href:p.P,rel:"noreferrer",target:"_blank"},"Upgrade")):s.createElement("div",{className:B["TutorialToolbar-Popover-Description"]},"Make your Recipes page visible to users. This must be enabled to see embedded Recipes in Guides or API References.")))),n?s.createElement(y.A,{onClick:function(){return Ie("Create")}},"New Recipe"):s.createElement("button",{className:B["TutorialToolbar-Button"],onClick:function(){return Ie("Create")},type:"Button"},s.createElement("i",{className:"icon icon-recipes-new ".concat(B["TutorialToolbar-Button-Icon"])}),"Create Recipe"))}),[t,_e,U,n,ge,Ie,ee.length]),Ue=(0,s.useCallback)((function(){return s.createElement("div",{className:(0,g.Ay)(B.TutorialToolbar,n&&B.TutorialToolbar_superhub)},s.createElement("button",{className:B["TutorialToolbar-Button"],onClick:function(){window.open(W,"_blank")},type:"Button"},s.createElement("i",{className:"icon icon-recipes-new ".concat(B["TutorialToolbar-Button-Icon"])}),"Edit Recipes on Staging"))}),[n,W]);return s.createElement(j.d.Provider,{value:n?c:G},s.createElement(j.u.Provider,{value:e.variables},s.createElement(d.IT.Provider,{value:H},s.createElement("main",{className:(0,g.Ay)("rm-Recipes",B.Tutorial,!!ae&&B.Tutorial_loading,n&&B.Tutorial_superhub),id:"content"},s.createElement("div",{className:B["Tutorial-Wrapper"]},!ae&&!ke&&(n?s.createElement(T.A,{onAction:l?function(){return Ie("Create")}:void 0,section:"recipe"}):s.createElement(I.A,{body:"Recipes are task-driven guidance for your API. Try creating a new Recipe for your users!",className:!!ce.open&&"paused",heading:"Create a Recipe to Get Started"},W?s.createElement(y.A,{href:W,target:"_blank"},"Edit Recipes on Staging"):s.createElement(y.A,{onClick:function(){return Ie("Create")}},"Create Recipe"),s.createElement(y.A,{bem:{shale:!0},href:"https://docs.readme.com/recipes/publish-all-docs-in-category",target:"_blank"},"Try Example"))),!!ke&&s.createElement(s.Fragment,null,!!V&&!!V.title&&s.createElement(k,{hero:V,openTutorial:Ie}),s.createElement("section",{className:B.TutorialGrid},ee.map((function(e,o){return s.createElement(N.A,{key:"tut-".concat(o),className:B["TutorialGrid-Card"],deleteTutorial:Be,makeHero:De,numTutorials:ee.length,openTutorial:Ie,publish:je,shiftOrder:function(e){return t.shiftOrder(_e,e,o)},stagingUrl:W,tutorial:e})}))))),!!Se&&!ce.open&&!W&&s.createElement(Me,null),!!Se&&!ce.open&&!!W&&s.createElement(Ue,null),!!U&&s.createElement("div",{className:"".concat(B.TutorialFooter," hub-footer")},s.createElement("a",{className:"hub-notification",href:p.P,id:"recipe-notification"},s.createElement("i",{className:"icon icon-alert-circle"}),"Recipes is only available on paid plans. Upgrade to make it public."))),s.createElement(S.A,{action:ce.action,baseUrl:H,closeTutorialModal:function(){Re(),se((function(e){return x(x({},e),{},{open:!1})}))},confirmModal:Ce,onboarding:Q,open:ce.open,referenceEnabled:M,requestDataRefresh:function(){return Oe()},setConfirmModal:me,target:_,tutorial:he}),s.createElement(E.Ay,{ref:Ce,className:B.TutorialConfirmation,size:"sm",target:O,verticalCenter:!0},s.createElement(E.cw,null,s.createElement(v.A,{className:B["TutorialConfirmation-Title"],level:4},de.title),s.createElement("p",{className:B["TutorialConfirmation-Description"]},de.body)),s.createElement(E.jl,{justify:"center"},s.createElement(y.A,{bem:{shale_text:!0},onClick:function(){me({}),Ce.current.toggle(!1)}},"Cancel"),s.createElement(y.A,{bem:"Delete Tutorial"===de.buttonText?{red:!0}:{blue:!0},onClick:function(){de.action(),Ce.current.toggle(!1)}},de.buttonText))),s.createElement("div",{className:(0,g.Ay)("ModalWrapper",n&&B.SuperHubModalWrapper),id:_.startsWith("#")?_.slice(1):_}),s.createElement("div",{className:"ModalWrapper",id:O.startsWith("#")?O.slice(1):O}),s.createElement(h.ud,null))))}M.propTypes={baseUrl:c().string,confirmationTarget:c().string,isAdmin:c().bool.isRequired,isFreePlan:c().bool,modalTarget:c().string,referenceEnabled:c().bool,slug:c().string,stagingUrl:c().string,variables:c().shape({defaults:c().arrayOf(c().any),user:c().any})},M.defaultProps={baseUrl:"",confirmationTarget:"#confirmation-root",isAdmin:!1,modalTarget:"#modal-root",referenceEnabled:!1,variables:{defaults:[],user:{}}}}}]);
//# sourceMappingURL=routes-Tutorials.8adf2bf8562dfeff14b4.js.map