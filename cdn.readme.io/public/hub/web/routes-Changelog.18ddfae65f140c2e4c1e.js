!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="f0914535-83f1-41e2-b0b2-410b324d1da7",e._sentryDebugIdIdentifier="sentry-dbid-f0914535-83f1-41e2-b0b2-410b324d1da7")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.237.0"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[2144],{1240:(e,t,n)=>{var r=n(16917)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}},46402:e=>{e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},14847:(e,t,n)=>{var r=n(19416),o=n(57155);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},97132:(e,t,n)=>{"use strict";var r=n(64938),o=n(53828)(1);r(r.P+r.F*!n(1915)([].map,!0),"Array",{map:function(e){return o(this,e,arguments[1])}})},68392:(e,t,n)=>{"use strict";var r=n(28899),o=n(46402),a=n(56286);n(23773)("search",1,(function(e,t,n,i){return[function(n){var r=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=i(n,e,this);if(t.done)return t.value;var s=r(e),c=String(this),l=s.lastIndex;o(l,0)||(s.lastIndex=0);var g=a(s,c);return o(s.lastIndex,l)||(s.lastIndex=l),null===g?-1:g.index}]}))},74397:(e,t,n)=>{"use strict";var r=n(64938),o=n(14847),a="includes";r(r.P+r.F*n(1240)(a),"String",{includes:function(e){return!!~o(this,e,a).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},22866:(e,t,n)=>{"use strict";var r=n(64938),o=n(76162),a=n(14847),i="startsWith",s=""[i];r(r.P+r.F*n(1240)(i),"String",{startsWith:function(e){var t=a(this,e,i),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return s?s.call(t,r,n):t.slice(n,n+r.length)===r}})},3260:(e,t,n)=>{"use strict";var r=n(64938),o=n(2925)(!0);r(r.P,"Array",{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(44937)("includes")},53310:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});const r={ChangelogIcon:"ChangelogIcon2Gu9w8NXcM_c",ChangelogIcon_added:"ChangelogIcon_added1pTN1uSXzdyu",ChangelogIcon_fixed:"ChangelogIcon_fixed39IKzR1aYuxL",ChangelogIcon_improved:"ChangelogIcon_improved6EeszHbCOX8L",ChangelogIcon_deprecated:"ChangelogIcon_deprecatedLkYegHFXlw3b",ChangelogIcon_removed:"ChangelogIcon_removed1aaxsMvl4H0v",ChangelogList_empty:"ChangelogList_empty3nKSALVOy2Z3",ChangelogList_pagination:"ChangelogList_pagination3R5YTitfIL8D",ChangelogPage:"ChangelogPage3Hd1EE55GPPg",ChangelogPage_back:"ChangelogPage_back2ekpJp-mJpOM",ChangelogPage_list:"ChangelogPage_list1TGHEVYCxDvl","ChangelogPage_list-date":"ChangelogPage_list-date3RAj7xc-jORy","ChangelogPage_list-type":"ChangelogPage_list-typeFVrMFVmFdVK8","ChangelogPage_list-icon":"ChangelogPage_list-iconB9zmKwu7APny","ChangelogPage_list-post":"ChangelogPage_list-post3xw89mLtUYu4",ChangelogPost:"ChangelogPost3IWNOaGQe_H1",ChangelogPostExcerpt:"ChangelogPostExcerpt3aGQ8Xxa74DX",ChangelogPost_back:"ChangelogPost_back2YF_OA02gya-","ChangelogPost_back-icon":"ChangelogPost_back-icon1-2xhmCu0Ul2",ChangelogPost_date:"ChangelogPost_date2Nj3qJy6ZUmT",ChangelogPost_header:"ChangelogPost_headerIohRwZIL4M5B",ChangelogPost_text:"ChangelogPost_text25nFcEF_ZQyf",ChangelogPost_title:"ChangelogPost_title1wfGHpCMrYb1",ChangelogPost_titleexcerpt:"ChangelogPost_titleexcerpttFbeBG-OZgYd",ChangelogPost_type:"ChangelogPost_type1FDOeEUUWHhh","ChangelogPost-author":"ChangelogPost-author1JktEnrmv-So"}},71075:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var r=n(89648),o=n(14041),a=n(94702),i=n(67136),s=n(32816),c=n(92207),l=n.n(c),g=(n(22866),n(83902),n(18586),n(74397),n(3260),n(81198),n(16349),n(23922),n(96837),n(57627),n(86090)),u=n(13202),d=n(20775),h=n(49555),p=(n(68392),n(61629),n(97132),n(93849),n(8947),["endpoint","origin","protocol"]);const f=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.endpoint,i=(t.origin,t.protocol,(0,r.A)(t,p),(0,g.zy)().search),s=(0,o.useContext)(a.vz).project,c=s.flags;s.parent;if("undefined"==typeof window)return"";var l=s.siblings||[];l.length&&(e={childrenProjects:l.map((function(e){return e.subdomain}))});var u=new a.V0({child:Boolean(l.length),hasOneChild:!(null==c||!c.singleProjectEnterprise),parent:e,project:s}).relative(n).split("?"),d=(0,h.A)(u,2),f=d[0],v=d[1],C=new URLSearchParams(void 0===v?i:v);return C.set("json","on"),C.toString().length>0&&(f="".concat(f,"?").concat(C.toString())),f};var v=n(45975);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,i.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _="/404";function y(e){return P.apply(this,arguments)}function P(){return(P=(0,s.A)(l().mark((function e(t){var n,r,o,a,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{redirect:"follow",headers:{"x-requested-with":"XMLHttpRequest"}});case 2:if(n=e.sent,r=n.headers.get("Content-Type"),!["application/json","application/problem+json"].some((function(e){return null==r?void 0:r.includes(e)}))){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=void 0;case 12:if(o=e.t0,a=n.redirected?new URL(n.url).pathname:void 0,n.ok){e.next=20;break}throw(i=new Error('An error occurred while fetching "'.concat(t,'"'))).status=n.status,i.statusText=n.statusText,i.url=t,i;case 20:return e.abrupt("return",{redirected:n.redirected,redirectedPath:a,json:o});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=["meta"];function w(e,t){var n=(0,o.useContext)(a.y0).updateAppMeta,i=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=f(),r=(0,g.W5)(),i=(0,g.g)(),s=(0,g.zy)(),c=(0,g.W6)(),l=(0,o.useContext)(a.vz).project,h=(0,o.useContext)(a.IT),p=(0,v.f8)((function(e){return e.isSuperHub})),C=(0,d.A)(),P=C.isClient,b=C.isServer,w=n||P&&window.location||"/",x=!p&&"/reference"===s.pathname&&s.hash.startsWith("#"),A=(0,o.useMemo)((function(){if(b&&Object.keys(t).length)return!0;var e=w.split(/(?:\?|&)json=on/)[0];return[t.reqUrl,t.slugUrl].includes(e)}),[w,t,b]);(0,o.useEffect)((function(){if(x){var e=s.hash.replace("#","");c.replace("/reference/".concat(e))}}),[c,x,s.hash]);var E=(0,u.Ay)(A?null:w,y,{fallbackData:A&&!x?{json:t,redirected:!1}:void 0,revalidateOnFocus:!1}),O=E.data,I=void 0===O?{}:O,j=I.json,L=I.redirected,S=I.redirectedPath,k=E.error,D=E.mutate,F=E.isValidating,R=!!j&&!L,H=!(null===(e=null==S?void 0:S.startsWith(h))||void 0===e||e),N=!!k&&!k.status,U=401===(null==k?void 0:k.status),q=!(null==l||!l.internal);(0,o.useEffect)((function(){if(q&&(U||N)){var e="password"===l.internal,t="redirect=".concat(window.location.pathname);window.location.assign(e?"/password?".concat(t):"/login?".concat(t))}}),[U,N,q,l.internal]),(0,o.useEffect)((function(){(404===(null==k?void 0:k.status)||null!=j&&j.is404)&&!A&&c.replace(_)}),[k,c,A,null==j?void 0:j.is404]),(0,o.useEffect)((function(){if(R&&"function"==typeof $){var e=null==j?void 0:j.meta;$(window).trigger("pageLoad",{meta:e,params:i,opts:m({reactApp:"on"},r),hash:window.location.hash,name:null==e?void 0:e.type})}}),[R,null==i?void 0:i.slug,null==r?void 0:r.url]);var z=S;return z&&L&&(H?(window.location.replace(z),null!=j&&j.doc&&(j.doc={})):z=z.replace("".concat(l.subdomain,"/"),"")),{data:j,loading:H||!k&&!j,redirected:L&&!H,redirectedPath:z,error:k,mutate:D,validating:F}}(e),s=i.data,c=void 0===s?{}:s,l=c.meta,h=(0,r.A)(c,b),p=i.error,C=i.loading,P=i.mutate,w=i.redirected,x=i.redirectedPath,A=i.validating;return(0,o.useEffect)((function(){l&&("function"==typeof t&&t(l),n(l))}),[l]),{loading:C,state:h,meta:l,redirected:w,redirectedPath:x,error:p,mutate:P,validating:A}}},74885:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var r=n(55285),o=n(68392),a=n.n(o),i=n(20774),s=n(14041),c=n(86090),l=n(94702),g=n(71075),u=n(82169),d=n(53310),h=(0,i.Ay)({resolved:{},chunkName:function(){return"Post"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(5236),n.e(6859),n.e(7449),n.e(2395),n.e(6522),n.e(9141)]).then(n.bind(n,43779))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 43779}},{ssr:!0}),p=(0,i.Ay)({resolved:{},chunkName:function(){return"List"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(5236),n.e(6859),n.e(1802),n.e(9772),n.e(3284),n.e(7449),n.e(7372),n.e(2395),n.e(6522),n.e(7112),n.e(73),n.e(2637),n.e(4674),n.e(1731)]).then(n.bind(n,1820))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var r=this.resolve(t);return n(r)},resolve:function e(){return 1820}},{ssr:!0}),f={added:"icon-plus1 ".concat(d.A.ChangelogIcon_added),fixed:"icon-check1 ".concat(d.A.ChangelogIcon_fixed),improved:"icon-heart1 ".concat(d.A.ChangelogIcon_improved),deprecated:"icon-alert-triangle ".concat(d.A.ChangelogIcon_deprecated),removed:"icon-x ".concat(d.A.ChangelogIcon_removed)},v=function(e){var t=(0,c.zy)().search,n=(0,g.A)(e),o=n.state,a=n.loading,i=(0,s.useContext)(l.vz).project.appearance.changelog,d=i.showAuthor,v=i.showExactDate;return s.createElement("main",{className:"rm-Changelog",id:"content"},s.createElement("div",{className:"rm-Container rm-ContainerNarrow ".concat(a?"rm-Changelog_loading":"")},s.createElement(c.dO,null,s.createElement(c.qh,{path:"/changelog/:slug"},s.createElement(u.A,null),s.createElement(h,{changelog:(null==o?void 0:o.changelog)||{},exactDate:v,showAuthor:d,typeIconClasses:f})),s.createElement(c.qh,{exact:!0,path:"/changelog"},s.createElement(u.A,{deps:[t],smooth:!0}),s.createElement(p,(0,r.A)({loading:a,typeIconClasses:f},o))))))};const C=v}}]);
//# sourceMappingURL=routes-Changelog.18ddfae65f140c2e4c1e.js.map