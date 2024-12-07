import{an as h,r as m,ao as g,w as v,a as y,ap as w,aq as p,ar as _,as as b,at as T,O as q,au as E}from"./BLFlnk3S.js";function l(e,n={}){const a=n.head||h();if(a)return a.ssr?a.push(e,n):A(a,e,n)}function A(e,n,a={}){const t=m(!1),r=m({});g(()=>{r.value=t.value?{}:b(n)});const i=e.push(r.value,a);return v(r,u=>{i.patch(u)}),_()&&(y(()=>{i.dispose()}),w(()=>{t.value=!0}),p(()=>{t.value=!1})),i}function M(e,n){const{title:a,titleTemplate:t,...r}=e;return l({title:a,titleTemplate:t,_flatMeta:r},{...n,transform(i){const s=T({...i._flatMeta});return delete i._flatMeta,{...i,meta:s}}})}var f={};const c=f.BASE_URL?f.BASE_URL:"http://localhost:3000",o="Clear Street",d="/social-preview.jpg",I=e=>{const n=q(),t=E().public.menuPayload;l({viewport:"width=device-width, initial-scale=1",charset:"utf-8",title:"ClearStreet",htmlAttrs:{lang:"en"},script:[{async:!0,defer:!0,src:"https://analytics.madebyburo.com/umami.js","data-website-id":"3302b21c-8d33-481d-97e0-6f976f4d59b9"},{async:!0,defer:!0,src:"https://apis.google.com/js/api.js"}],link:[{rel:"icon",type:"image/png",href:"/icon.png"},{rel:"canonical",href:c+n.fullPath}]},{mode:"client"}),l({meta:[{name:"description",content:t.mainDescription},{name:"theme-color",content:"#2e21de"},{name:"google-site-verification",content:"2MALGn6Nd7TlogT0dytFBWxfRFLjR5PULpnKKATezsU"}],script:[{async:!0,defer:!0,type:"text/javascript",children:`
						!(function (f, b, e, v, n, t, s) {
						if (f.fbq) return
						n = f.fbq = function () {
							n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
						}
						if (!f._fbq) f._fbq = n
						n.push = n
						n.loaded = !0
						n.version = '2.0'
						n.queue = []
						t = b.createElement(e)
						t.async = !0
						t.src = v
						s = b.getElementsByTagName(e)[0]
						s.parentNode.insertBefore(t, s)
					})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
					fbq('init', '1253892159099136')
					fbq('track', 'PageView')
					`},{async:!0,defer:!0,type:"text/javascript",children:`
					!function(s,a,e,v,n,t,z){if(s.saq)return;n=s.saq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!s._saq)s._saq=n;n.push=n;n.loaded=!0;n.version='1.0';n.queue=[];t=a.createElement(e);t.async=!0;t.src=v;z=a.getElementsByTagName(e)[0];z.parentNode.insertBefore(t,z)}(window,document,'script','https://tags.srv.stackadapt.com/events.js');saq('ts', 'Yn8RPAfQFUNa5Zgk3mHNuw');
					`}]});function r(){let s;return n.fullPath==="/"?s=t.siteSettings.mainTitle+" — "+t.siteSettings.mainDescription:s=e.title?e.title+" | "+t.siteSettings.mainTitle+" — "+t.siteSettings.mainDescription:o,s}function i(){let s;return n.fullPath==="/"?s=t.siteSettings.mainTitle+" — "+t.siteSettings.mainDescription:s=e.title?e.title+" | "+t.siteSettings.mainTitle:o,s}M({charset:"utf-8",formatDetection:"telephone=no",title:r(),description:e.description?e.description:t.siteSettings.mainDescription,keywords:e.keywords?e.keywords:"",author:"Clear Street",ogTitle:e.title?i():o,ogDescription:e.description?e.description:t.siteSettings.mainDescription,ogImage:e.image?e.image.url:c+d,ogImageWidth:e.image?e.image.width:"1400",ogImageHeight:e.image?e.image.height:"700",ogType:"website",ogSiteName:e.title?i():o,ogUrl:c+n.fullPath,twitterTitle:e.title?i():o,twitterDescription:e.description?e.description:t.siteSettings.mainDescription,twitterImage:e.image?e.image.url:c+d,twitterCard:"summary_large_image"})};export{l as a,I as u};
