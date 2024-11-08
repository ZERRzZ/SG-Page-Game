import{r,R as z}from"./react-BWtM72Fx.js";import{R as B}from"./react-dom-BGFKlzYW.js";import{m as H,l as A,D as K,a as W,R as G,u as X,N as Y,b as q,c as J,d as Q,e as Z}from"./react-router-CAzjYiVp.js";import{c as $,b as ee,E as te,s as ne,d as U}from"./@remix-run-DxFES9XG.js";/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function C(){return C=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},C.apply(this,arguments)}function re(t,n){if(t==null)return{};var e={},a=Object.keys(t),i,o;for(o=0;o<a.length;o++)i=a[o],!(n.indexOf(i)>=0)&&(e[i]=t[i]);return e}function ie(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ae(t,n){return t.button===0&&(!n||n==="_self")&&!ie(t)}const oe=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],se="6";try{window.__reactRouterVersion=se}catch{}function _e(t,n){return $({basename:n==null?void 0:n.basename,future:C({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:ee({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||le(),routes:t,mapRouteProperties:H,dataStrategy:n==null?void 0:n.dataStrategy,patchRoutesOnNavigation:n==null?void 0:n.patchRoutesOnNavigation,window:n==null?void 0:n.window}).initialize()}function le(){var t;let n=(t=window)==null?void 0:t.__staticRouterHydrationData;return n&&n.errors&&(n=C({},n,{errors:ue(n.errors)})),n}function ue(t){if(!t)return null;let n=Object.entries(t),e={};for(let[a,i]of n)if(i&&i.__type==="RouteErrorResponse")e[a]=new te(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let u=new o(i.message);u.stack="",e[a]=u}catch{}}if(e[a]==null){let o=new Error(i.message);o.stack="",e[a]=o}}else e[a]=i;return e}const ce=r.createContext({isTransitioning:!1}),fe=r.createContext(new Map),de="startTransition",O=z[de],ve="flushSync",D=B[ve];function pe(t){O?O(t):t()}function x(t){D?D(t):t()}class he{constructor(){this.status="pending",this.promise=new Promise((n,e)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",n(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",e(a))}})}}function be(t){let{fallbackElement:n,router:e,future:a}=t,[i,o]=r.useState(e.state),[u,h]=r.useState(),[f,s]=r.useState({isTransitioning:!1}),[c,w]=r.useState(),[d,T]=r.useState(),[m,b]=r.useState(),E=r.useRef(new Map),{v7_startTransition:P}=a||{},L=r.useCallback(l=>{P?pe(l):l()},[P]),v=r.useCallback((l,y)=>{let{deletedFetchers:p,flushSync:k,viewTransitionOpts:g}=y;p.forEach(S=>E.current.delete(S)),l.fetchers.forEach((S,M)=>{S.data!==void 0&&E.current.set(M,S.data)});let j=e.window==null||e.window.document==null||typeof e.window.document.startViewTransition!="function";if(!g||j){k?x(()=>o(l)):L(()=>o(l));return}if(k){x(()=>{d&&(c&&c.resolve(),d.skipTransition()),s({isTransitioning:!0,flushSync:!0,currentLocation:g.currentLocation,nextLocation:g.nextLocation})});let S=e.window.document.startViewTransition(()=>{x(()=>o(l))});S.finished.finally(()=>{x(()=>{w(void 0),T(void 0),h(void 0),s({isTransitioning:!1})})}),x(()=>T(S));return}d?(c&&c.resolve(),d.skipTransition(),b({state:l,currentLocation:g.currentLocation,nextLocation:g.nextLocation})):(h(l),s({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}))},[e.window,d,c,E,L]);r.useLayoutEffect(()=>e.subscribe(v),[e,v]),r.useEffect(()=>{f.isTransitioning&&!f.flushSync&&w(new he)},[f]),r.useEffect(()=>{if(c&&u&&e.window){let l=u,y=c.promise,p=e.window.document.startViewTransition(async()=>{L(()=>o(l)),await y});p.finished.finally(()=>{w(void 0),T(void 0),h(void 0),s({isTransitioning:!1})}),T(p)}},[L,u,c,e.window]),r.useEffect(()=>{c&&u&&i.location.key===u.location.key&&c.resolve()},[c,d,i.location,u]),r.useEffect(()=>{!f.isTransitioning&&m&&(h(m.state),s({isTransitioning:!0,flushSync:!1,currentLocation:m.currentLocation,nextLocation:m.nextLocation}),b(void 0))},[f.isTransitioning,m]),r.useEffect(()=>{},[]);let R=r.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:l=>e.navigate(l),push:(l,y,p)=>e.navigate(l,{state:y,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(l,y,p)=>e.navigate(l,{replace:!0,state:y,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[e]),_=e.basename||"/",I=r.useMemo(()=>({router:e,navigator:R,static:!1,basename:_}),[e,R,_]),N=r.useMemo(()=>({v7_relativeSplatPath:e.future.v7_relativeSplatPath}),[e.future.v7_relativeSplatPath]);return r.useEffect(()=>A(a,e.future),[a,e.future]),r.createElement(r.Fragment,null,r.createElement(K.Provider,{value:I},r.createElement(W.Provider,{value:i},r.createElement(fe.Provider,{value:E.current},r.createElement(ce.Provider,{value:f},r.createElement(G,{basename:_,location:i.location,navigationType:i.historyAction,navigator:R,future:N},i.initialized||e.future.v7_partialHydration?r.createElement(we,{routes:e.routes,future:e.future,state:i}):n))))),null)}const we=r.memo(me);function me(t){let{routes:n,future:e,state:a}=t;return X(n,void 0,a,e)}const Re=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ye=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=r.forwardRef(function(n,e){let{onClick:a,relative:i,reloadDocument:o,replace:u,state:h,target:f,to:s,preventScrollReset:c,viewTransition:w}=n,d=re(n,oe),{basename:T}=r.useContext(Y),m,b=!1;if(typeof s=="string"&&ye.test(s)&&(m=s,Re))try{let v=new URL(window.location.href),R=s.startsWith("//")?new URL(v.protocol+s):new URL(s),_=ne(R.pathname,T);R.origin===v.origin&&_!=null?s=_+R.search+R.hash:b=!0}catch{}let E=q(s,{relative:i}),P=ge(s,{replace:u,state:h,target:f,preventScrollReset:c,relative:i,viewTransition:w});function L(v){a&&a(v),v.defaultPrevented||P(v)}return r.createElement("a",C({},d,{href:m||E,onClick:b||o?a:L,ref:e,target:f}))});var F;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(F||(F={}));var V;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(V||(V={}));function ge(t,n){let{target:e,replace:a,state:i,preventScrollReset:o,relative:u,viewTransition:h}=n===void 0?{}:n,f=J(),s=Q(),c=Z(t,{relative:u});return r.useCallback(w=>{if(ae(w,e)){w.preventDefault();let d=a!==void 0?a:U(s)===U(c);f(t,{replace:d,state:i,preventScrollReset:o,relative:u,viewTransition:h})}},[s,f,c,a,i,e,t,o,u,h])}export{xe as L,be as R,_e as c};
