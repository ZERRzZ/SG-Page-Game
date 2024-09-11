import{h as B,e as N,f as Ie,b as x,c as $,g as H,i as Nn,j as _n,a as kn,_ as $n,d as Dn}from"./@babel-CFFMjQWX.js";import{c as pe}from"./classnames-BK5ccKcQ.js";import{F as De}from"./rc-overflow-DRCnfb5s.js";import{o as On,n as Ft,H as Ln,q as Oe,K as ie,z as Ge,b as Vt,e as An,y as Ut,x as Tn}from"./rc-util-C9ivse0O.js";import{r as n}from"./react-s7AnpVDj.js";import{r as Fn}from"./react-dom-CKXDipwq.js";import{T as Vn}from"./@rc-component-BABNZfcJ.js";import{C as Un}from"./rc-motion-DyAdOdRG.js";var zt=n.createContext(null);function Ht(r,e){return r===void 0?null:"".concat(r,"-").concat(e)}function jt(r){var e=n.useContext(zt);return Ht(e,r)}var zn=["children","locked"],te=n.createContext(null);function Hn(r,e){var a=N({},r);return Object.keys(e).forEach(function(t){var i=e[t];i!==void 0&&(a[t]=i)}),a}function Le(r){var e=r.children,a=r.locked,t=B(r,zn),i=n.useContext(te),o=On(function(){return Hn(i,t)},[i,t],function(l,u){return!a&&(l[0]!==u[0]||!Ft(l[1],u[1],!0))});return n.createElement(te.Provider,{value:o},e)}var jn=[],Gt=n.createContext(null);function Ye(){return n.useContext(Gt)}var Wt=n.createContext(jn);function Ae(r){var e=n.useContext(Wt);return n.useMemo(function(){return r!==void 0?[].concat(Ie(e),[r]):e},[e,r])}var qt=n.createContext(null),mt=n.createContext({}),ut=ie.LEFT,ct=ie.RIGHT,st=ie.UP,We=ie.DOWN,qe=ie.ENTER,Bt=ie.ESC,_e=ie.HOME,ke=ie.END,Ot=[st,We,ut,ct];function Gn(r,e,a,t){var i,o="prev",l="next",u="children",s="parent";if(r==="inline"&&t===qe)return{inlineTrigger:!0};var c=x(x({},st,o),We,l),M=x(x(x(x({},ut,a?l:o),ct,a?o:l),We,u),qe,u),v=x(x(x(x(x(x({},st,o),We,l),qe,u),Bt,s),ut,a?u:s),ct,a?s:u),g={inline:c,horizontal:M,vertical:v,inlineSub:c,horizontalSub:v,verticalSub:v},R=(i=g["".concat(r).concat(e?"":"Sub")])===null||i===void 0?void 0:i[t];switch(R){case o:return{offset:-1,sibling:!0};case l:return{offset:1,sibling:!0};case s:return{offset:-1,sibling:!1};case u:return{offset:1,sibling:!1};default:return null}}function Wn(r){for(var e=r;e;){if(e.getAttribute("data-menu-list"))return e;e=e.parentElement}return null}function qn(r,e){for(var a=r||document.activeElement;a;){if(e.has(a))return a;a=a.parentElement}return null}function pt(r,e){var a=Ln(r,!0);return a.filter(function(t){return e.has(t)})}function Lt(r,e,a){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var i=pt(r,e),o=i.length,l=i.findIndex(function(u){return a===u});return t<0?l===-1?l=o-1:l-=1:t>0&&(l+=1),l=(l+o)%o,i[l]}var dt=function(e,a){var t=new Set,i=new Map,o=new Map;return e.forEach(function(l){var u=document.querySelector("[data-menu-id='".concat(Ht(a,l),"']"));u&&(t.add(u),o.set(u,l),i.set(l,u))}),{elements:t,key2element:i,element2key:o}};function Bn(r,e,a,t,i,o,l,u,s,c){var M=n.useRef(),v=n.useRef();v.current=e;var g=function(){Oe.cancel(M.current)};return n.useEffect(function(){return function(){g()}},[]),function(R){var b=R.which;if([].concat(Ot,[qe,Bt,_e,ke]).includes(b)){var P=o(),p=dt(P,t),E=p,w=E.elements,f=E.key2element,m=E.element2key,C=f.get(e),d=qn(C,w),L=m.get(d),y=Gn(r,l(L,!0).length===1,a,b);if(!y&&b!==_e&&b!==ke)return;(Ot.includes(b)||[_e,ke].includes(b))&&R.preventDefault();var j=function(T){if(T){var Y=T,W=T.querySelector("a");W!=null&&W.getAttribute("href")&&(Y=W);var X=m.get(T);u(X),g(),M.current=Oe(function(){v.current===X&&Y.focus()})}};if([_e,ke].includes(b)||y.sibling||!d){var k;!d||r==="inline"?k=i.current:k=Wn(d);var K,A=pt(k,w);b===_e?K=A[0]:b===ke?K=A[A.length-1]:K=Lt(k,w,d,y.offset),j(K)}else if(y.inlineTrigger)s(L);else if(y.offset>0)s(L,!0),g(),M.current=Oe(function(){p=dt(P,t);var re=d.getAttribute("aria-controls"),T=document.getElementById(re),Y=Lt(T,p.elements);j(Y)},5);else if(y.offset<0){var D=l(L,!0),ne=D[D.length-2],G=f.get(ne);s(ne,!1),j(G)}}c==null||c(R)}}function Yn(r){Promise.resolve().then(r)}var ht="__RC_UTIL_PATH_SPLIT__",At=function(e){return e.join(ht)},Xn=function(e){return e.split(ht)},vt="rc-menu-more";function Jn(){var r=n.useState({}),e=$(r,2),a=e[1],t=n.useRef(new Map),i=n.useRef(new Map),o=n.useState([]),l=$(o,2),u=l[0],s=l[1],c=n.useRef(0),M=n.useRef(!1),v=function(){M.current||a({})},g=n.useCallback(function(f,m){var C=At(m);i.current.set(C,f),t.current.set(f,C),c.current+=1;var d=c.current;Yn(function(){d===c.current&&v()})},[]),R=n.useCallback(function(f,m){var C=At(m);i.current.delete(C),t.current.delete(f)},[]),b=n.useCallback(function(f){s(f)},[]),P=n.useCallback(function(f,m){var C=t.current.get(f)||"",d=Xn(C);return m&&u.includes(d[0])&&d.unshift(vt),d},[u]),p=n.useCallback(function(f,m){return f.some(function(C){var d=P(C,!0);return d.includes(m)})},[P]),E=function(){var m=Ie(t.current.keys());return u.length&&m.push(vt),m},w=n.useCallback(function(f){var m="".concat(t.current.get(f)).concat(ht),C=new Set;return Ie(i.current.keys()).forEach(function(d){d.startsWith(m)&&C.add(i.current.get(d))}),C},[]);return n.useEffect(function(){return function(){M.current=!0}},[]),{registerPath:g,unregisterPath:R,refreshOverflowKeys:b,isSubPathKey:p,getKeyPath:P,getKeys:E,getSubPathKeys:w}}function $e(r){var e=n.useRef(r);e.current=r;var a=n.useCallback(function(){for(var t,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return(t=e.current)===null||t===void 0?void 0:t.call.apply(t,[e].concat(o))},[]);return r?a:void 0}var Zn=Math.random().toFixed(5).toString().slice(2),Tt=0;function Qn(r){var e=Ge(r,{value:r}),a=$(e,2),t=a[0],i=a[1];return n.useEffect(function(){Tt+=1;var o="".concat(Zn,"-").concat(Tt);i("rc-menu-uuid-".concat(o))},[]),t}function Yt(r,e,a,t){var i=n.useContext(te),o=i.activeKey,l=i.onActive,u=i.onInactive,s={active:o===r};return e||(s.onMouseEnter=function(c){a==null||a({key:r,domEvent:c}),l(r)},s.onMouseLeave=function(c){t==null||t({key:r,domEvent:c}),u(r)}),s}function Xt(r){var e=n.useContext(te),a=e.mode,t=e.rtl,i=e.inlineIndent;if(a!=="inline")return null;var o=r;return t?{paddingRight:o*i}:{paddingLeft:o*i}}function Jt(r){var e=r.icon,a=r.props,t=r.children,i;return e===null||e===!1?null:(typeof e=="function"?i=n.createElement(e,N({},a)):typeof e!="boolean"&&(i=e),i||t||null)}var er=["item"];function Be(r){var e=r.item,a=B(r,er);return Object.defineProperty(a,"item",{get:function(){return Vt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),e}}),a}var tr=["title","attribute","elementRef"],nr=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],rr=["active"],ar=function(r){Nn(a,r);var e=_n(a);function a(){return kn(this,a),e.apply(this,arguments)}return $n(a,[{key:"render",value:function(){var i=this.props,o=i.title,l=i.attribute,u=i.elementRef,s=B(i,tr),c=Ut(s,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Vt(!l,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(De.Item,H({},l,{title:typeof o=="string"?o:void 0},c,{ref:u}))}}]),a}(n.Component),ir=n.forwardRef(function(r,e){var a=r.style,t=r.className,i=r.eventKey;r.warnKey;var o=r.disabled,l=r.itemIcon,u=r.children,s=r.role,c=r.onMouseEnter,M=r.onMouseLeave,v=r.onClick,g=r.onKeyDown,R=r.onFocus,b=B(r,nr),P=jt(i),p=n.useContext(te),E=p.prefixCls,w=p.onItemClick,f=p.disabled,m=p.overflowDisabled,C=p.itemIcon,d=p.selectedKeys,L=p.onActive,y=n.useContext(mt),j=y._internalRenderMenuItem,k="".concat(E,"-item"),K=n.useRef(),A=n.useRef(),D=f||o,ne=An(e,A),G=Ae(i),re=function(O){return{key:i,keyPath:Ie(G).reverse(),item:K.current,domEvent:O}},T=l||C,Y=Yt(i,D,c,M),W=Y.active,X=B(Y,rr),ae=d.includes(i),ue=Xt(G.length),ce=function(O){if(!D){var J=re(O);v==null||v(Be(J)),w(J)}},F=function(O){if(g==null||g(O),O.which===ie.ENTER){var J=re(O);v==null||v(Be(J)),w(J)}},V=function(O){L(i),R==null||R(O)},he={};r.role==="option"&&(he["aria-selected"]=ae);var se=n.createElement(ar,H({ref:K,elementRef:ne,role:s===null?"none":s||"menuitem",tabIndex:o?null:-1,"data-menu-id":m&&P?null:P},b,X,he,{component:"li","aria-disabled":o,style:N(N({},ue),a),className:pe(k,x(x(x({},"".concat(k,"-active"),W),"".concat(k,"-selected"),ae),"".concat(k,"-disabled"),D),t),onClick:ce,onKeyDown:F,onFocus:V}),u,n.createElement(Jt,{props:N(N({},r),{},{isSelected:ae}),icon:T}));return j&&(se=j(se,r,{selected:ae})),se});function or(r,e){var a=r.eventKey,t=Ye(),i=Ae(a);return n.useEffect(function(){if(t)return t.registerPath(a,i),function(){t.unregisterPath(a,i)}},[i]),t?null:n.createElement(ir,H({},r,{ref:e}))}const Ct=n.forwardRef(or);var lr=["className","children"],ur=function(e,a){var t=e.className,i=e.children,o=B(e,lr),l=n.useContext(te),u=l.prefixCls,s=l.mode,c=l.rtl;return n.createElement("ul",H({className:pe(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),t),role:"menu"},o,{"data-menu-list":!0,ref:a}),i)},gt=n.forwardRef(ur);gt.displayName="SubMenuList";function bt(r,e){return Tn(r).map(function(a,t){if(n.isValidElement(a)){var i,o,l=a.key,u=(i=(o=a.props)===null||o===void 0?void 0:o.eventKey)!==null&&i!==void 0?i:l,s=u==null;s&&(u="tmp_key-".concat([].concat(Ie(e),[t]).join("-")));var c={key:u,eventKey:u};return n.cloneElement(a,c)}return a})}var _={adjustX:1,adjustY:1},cr={topLeft:{points:["bl","tl"],overflow:_},topRight:{points:["br","tr"],overflow:_},bottomLeft:{points:["tl","bl"],overflow:_},bottomRight:{points:["tr","br"],overflow:_},leftTop:{points:["tr","tl"],overflow:_},leftBottom:{points:["br","bl"],overflow:_},rightTop:{points:["tl","tr"],overflow:_},rightBottom:{points:["bl","br"],overflow:_}},sr={topLeft:{points:["bl","tl"],overflow:_},topRight:{points:["br","tr"],overflow:_},bottomLeft:{points:["tl","bl"],overflow:_},bottomRight:{points:["tr","br"],overflow:_},rightTop:{points:["tr","tl"],overflow:_},rightBottom:{points:["br","bl"],overflow:_},leftTop:{points:["tl","tr"],overflow:_},leftBottom:{points:["bl","br"],overflow:_}};function Zt(r,e,a){if(e)return e;if(a)return a[r]||a.other}var dr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function vr(r){var e=r.prefixCls,a=r.visible,t=r.children,i=r.popup,o=r.popupStyle,l=r.popupClassName,u=r.popupOffset,s=r.disabled,c=r.mode,M=r.onVisibleChange,v=n.useContext(te),g=v.getPopupContainer,R=v.rtl,b=v.subMenuOpenDelay,P=v.subMenuCloseDelay,p=v.builtinPlacements,E=v.triggerSubMenuAction,w=v.forceSubMenuRender,f=v.rootClassName,m=v.motion,C=v.defaultMotions,d=n.useState(!1),L=$(d,2),y=L[0],j=L[1],k=R?N(N({},sr),p):N(N({},cr),p),K=dr[c],A=Zt(c,m,C),D=n.useRef(A);c!=="inline"&&(D.current=A);var ne=N(N({},D.current),{},{leavedClassName:"".concat(e,"-hidden"),removeOnLeave:!1,motionAppear:!0}),G=n.useRef();return n.useEffect(function(){return G.current=Oe(function(){j(a)}),function(){Oe.cancel(G.current)}},[a]),n.createElement(Vn,{prefixCls:e,popupClassName:pe("".concat(e,"-popup"),x({},"".concat(e,"-rtl"),R),l,f),stretch:c==="horizontal"?"minWidth":null,getPopupContainer:g,builtinPlacements:k,popupPlacement:K,popupVisible:y,popup:i,popupStyle:o,popupAlign:u&&{offset:u},action:s?[]:[E],mouseEnterDelay:b,mouseLeaveDelay:P,onPopupVisibleChange:M,forceRender:w,popupMotion:ne,fresh:!0},t)}function fr(r){var e=r.id,a=r.open,t=r.keyPath,i=r.children,o="inline",l=n.useContext(te),u=l.prefixCls,s=l.forceSubMenuRender,c=l.motion,M=l.defaultMotions,v=l.mode,g=n.useRef(!1);g.current=v===o;var R=n.useState(!g.current),b=$(R,2),P=b[0],p=b[1],E=g.current?a:!1;n.useEffect(function(){g.current&&p(!1)},[v]);var w=N({},Zt(o,c,M));t.length>1&&(w.motionAppear=!1);var f=w.onVisibleChanged;return w.onVisibleChanged=function(m){return!g.current&&!m&&p(!0),f==null?void 0:f(m)},P?null:n.createElement(Le,{mode:o,locked:!g.current},n.createElement(Un,H({visible:E},w,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(m){var C=m.className,d=m.style;return n.createElement(gt,{id:e,className:C,style:d},i)}))}var mr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","popupStyle","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],pr=["active"],hr=function(e){var a=e.style,t=e.className,i=e.title,o=e.eventKey;e.warnKey;var l=e.disabled,u=e.internalPopupClose,s=e.children,c=e.itemIcon,M=e.expandIcon,v=e.popupClassName,g=e.popupOffset,R=e.popupStyle,b=e.onClick,P=e.onMouseEnter,p=e.onMouseLeave,E=e.onTitleClick,w=e.onTitleMouseEnter,f=e.onTitleMouseLeave,m=B(e,mr),C=jt(o),d=n.useContext(te),L=d.prefixCls,y=d.mode,j=d.openKeys,k=d.disabled,K=d.overflowDisabled,A=d.activeKey,D=d.selectedKeys,ne=d.itemIcon,G=d.expandIcon,re=d.onItemClick,T=d.onOpenChange,Y=d.onActive,W=n.useContext(mt),X=W._internalRenderSubMenuItem,ae=n.useContext(qt),ue=ae.isSubPathKey,ce=Ae(),F="".concat(L,"-submenu"),V=k||l,he=n.useRef(),se=n.useRef(),de=c??ne,O=M??G,J=j.includes(o),oe=!K&&J,Te=ue(D,o),Fe=Yt(o,V,w,f),ve=Fe.active,Me=B(Fe,pr),Je=n.useState(!1),Re=$(Je,2),Se=Re[0],Ze=Re[1],Z=function(ee){V||Ze(ee)},Qe=function(ee){Z(!0),P==null||P({key:o,domEvent:ee})},Ve=function(ee){Z(!1),p==null||p({key:o,domEvent:ee})},xe=n.useMemo(function(){return ve||(y!=="inline"?Se||ue([A],o):!1)},[y,ve,A,Se,o,ue]),et=Xt(ce.length),Ce=function(ee){V||(E==null||E({key:o,domEvent:ee}),y==="inline"&&T(o,!J))},Pe=$e(function(Q){b==null||b(Be(Q)),re(Q)}),Ee=function(ee){y!=="inline"&&T(o,ee)},tt=function(){Y(o)},ge=C&&"".concat(C,"-popup"),q=n.createElement("div",H({role:"menuitem",style:et,className:"".concat(F,"-title"),tabIndex:V?null:-1,ref:he,title:typeof i=="string"?i:null,"data-menu-id":K&&C?null:C,"aria-expanded":oe,"aria-haspopup":!0,"aria-controls":ge,"aria-disabled":V,onClick:Ce,onFocus:tt},Me),i,n.createElement(Jt,{icon:y!=="horizontal"?O:void 0,props:N(N({},e),{},{isOpen:oe,isSubMenu:!0})},n.createElement("i",{className:"".concat(F,"-arrow")}))),be=n.useRef(y);if(y!=="inline"&&ce.length>1?be.current="vertical":be.current=y,!K){var fe=be.current;q=n.createElement(vr,{mode:fe,prefixCls:F,visible:!u&&oe&&y!=="inline",popupClassName:v,popupOffset:g,popupStyle:R,popup:n.createElement(Le,{mode:fe==="horizontal"?"vertical":fe},n.createElement(gt,{id:ge,ref:se},s)),disabled:V,onVisibleChange:Ee},q)}var we=n.createElement(De.Item,H({role:"none"},m,{component:"li",style:a,className:pe(F,"".concat(F,"-").concat(y),t,x(x(x(x({},"".concat(F,"-open"),oe),"".concat(F,"-active"),xe),"".concat(F,"-selected"),Te),"".concat(F,"-disabled"),V)),onMouseEnter:Qe,onMouseLeave:Ve}),q,!K&&n.createElement(fr,{id:ge,open:oe,keyPath:ce},s));return X&&(we=X(we,e,{selected:Te,active:xe,open:oe,disabled:V})),n.createElement(Le,{onItemClick:Pe,mode:y==="horizontal"?"vertical":y,itemIcon:de,expandIcon:O},we)};function yt(r){var e=r.eventKey,a=r.children,t=Ae(e),i=bt(a,t),o=Ye();n.useEffect(function(){if(o)return o.registerPath(e,t),function(){o.unregisterPath(e,t)}},[t]);var l;return o?l=i:l=n.createElement(hr,r,i),n.createElement(Wt.Provider,{value:t},l)}var Cr=["className","title","eventKey","children"],gr=["children"],br=function(e){var a=e.className,t=e.title;e.eventKey;var i=e.children,o=B(e,Cr),l=n.useContext(te),u=l.prefixCls,s="".concat(u,"-item-group");return n.createElement("li",H({role:"presentation"},o,{onClick:function(M){return M.stopPropagation()},className:pe(s,a)}),n.createElement("div",{role:"presentation",className:"".concat(s,"-title"),title:typeof t=="string"?t:void 0},t),n.createElement("ul",{role:"group",className:"".concat(s,"-list")},i))};function Qt(r){var e=r.children,a=B(r,gr),t=Ae(a.eventKey),i=bt(e,t),o=Ye();return o?i:n.createElement(br,Ut(a,["warnKey"]),i)}function en(r){var e=r.className,a=r.style,t=n.useContext(te),i=t.prefixCls,o=Ye();return o?null:n.createElement("li",{role:"separator",className:pe("".concat(i,"-item-divider"),e),style:a})}var yr=["label","children","key","type"];function ft(r){return(r||[]).map(function(e,a){if(e&&Dn(e)==="object"){var t=e,i=t.label,o=t.children,l=t.key,u=t.type,s=B(t,yr),c=l??"tmp-".concat(a);return o||u==="group"?u==="group"?n.createElement(Qt,H({key:c},s,{title:i}),ft(o)):n.createElement(yt,H({key:c},s,{title:i}),ft(o)):u==="divider"?n.createElement(en,H({key:c},s)):n.createElement(Ct,H({key:c},s),i)}return null}).filter(function(e){return e})}function Ir(r,e,a){var t=r;return e&&(t=ft(e)),bt(t,a)}var Mr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],ye=[],Rr=n.forwardRef(function(r,e){var a,t=r,i=t.prefixCls,o=i===void 0?"rc-menu":i,l=t.rootClassName,u=t.style,s=t.className,c=t.tabIndex,M=c===void 0?0:c,v=t.items,g=t.children,R=t.direction,b=t.id,P=t.mode,p=P===void 0?"vertical":P,E=t.inlineCollapsed,w=t.disabled,f=t.disabledOverflow,m=t.subMenuOpenDelay,C=m===void 0?.1:m,d=t.subMenuCloseDelay,L=d===void 0?.1:d,y=t.forceSubMenuRender,j=t.defaultOpenKeys,k=t.openKeys,K=t.activeKey,A=t.defaultActiveFirst,D=t.selectable,ne=D===void 0?!0:D,G=t.multiple,re=G===void 0?!1:G,T=t.defaultSelectedKeys,Y=t.selectedKeys,W=t.onSelect,X=t.onDeselect,ae=t.inlineIndent,ue=ae===void 0?24:ae,ce=t.motion,F=t.defaultMotions,V=t.triggerSubMenuAction,he=V===void 0?"hover":V,se=t.builtinPlacements,de=t.itemIcon,O=t.expandIcon,J=t.overflowedIndicator,oe=J===void 0?"...":J,Te=t.overflowedIndicatorPopupClassName,Fe=t.getPopupContainer,ve=t.onClick,Me=t.onOpenChange,Je=t.onKeyDown;t.openAnimation,t.openTransitionName;var Re=t._internalRenderMenuItem,Se=t._internalRenderSubMenuItem,Ze=B(t,Mr),Z=n.useMemo(function(){return Ir(g,v,ye)},[g,v]),Qe=n.useState(!1),Ve=$(Qe,2),xe=Ve[0],et=Ve[1],Ce=n.useRef(),Pe=Qn(b),Ee=R==="rtl",tt=Ge(j,{value:k,postState:function(h){return h||ye}}),ge=$(tt,2),q=ge[0],be=ge[1],fe=function(h){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function U(){be(h),Me==null||Me(h)}I?Fn.flushSync(U):U()},we=n.useState(q),Q=$(we,2),ee=Q[0],tn=Q[1],nt=n.useRef(!1),nn=n.useMemo(function(){return(p==="inline"||p==="vertical")&&E?["vertical",E]:[p,!1]},[p,E]),It=$(nn,2),Ue=It[0],rt=It[1],Mt=Ue==="inline",rn=n.useState(Ue),Rt=$(rn,2),le=Rt[0],an=Rt[1],on=n.useState(rt),St=$(on,2),ln=St[0],un=St[1];n.useEffect(function(){an(Ue),un(rt),nt.current&&(Mt?be(ee):fe(ye))},[Ue,rt]);var cn=n.useState(0),xt=$(cn,2),ze=xt[0],sn=xt[1],at=ze>=Z.length-1||le!=="horizontal"||f;n.useEffect(function(){Mt&&tn(q)},[q]),n.useEffect(function(){return nt.current=!0,function(){nt.current=!1}},[]);var me=Jn(),Pt=me.registerPath,Et=me.unregisterPath,dn=me.refreshOverflowKeys,wt=me.isSubPathKey,vn=me.getKeyPath,Kt=me.getKeys,fn=me.getSubPathKeys,mn=n.useMemo(function(){return{registerPath:Pt,unregisterPath:Et}},[Pt,Et]),pn=n.useMemo(function(){return{isSubPathKey:wt}},[wt]);n.useEffect(function(){dn(at?ye:Z.slice(ze+1).map(function(S){return S.key}))},[ze,at]);var hn=Ge(K||A&&((a=Z[0])===null||a===void 0?void 0:a.key),{value:K}),Nt=$(hn,2),Ke=Nt[0],it=Nt[1],Cn=$e(function(S){it(S)}),gn=$e(function(){it(void 0)});n.useImperativeHandle(e,function(){return{list:Ce.current,focus:function(h){var I,U=Kt(),z=dt(U,Pe),je=z.elements,ot=z.key2element,wn=z.element2key,$t=pt(Ce.current,je),Dt=Ke??($t[0]?wn.get($t[0]):(I=Z.find(function(Kn){return!Kn.props.disabled}))===null||I===void 0?void 0:I.key),Ne=ot.get(Dt);if(Dt&&Ne){var lt;Ne==null||(lt=Ne.focus)===null||lt===void 0||lt.call(Ne,h)}}}});var bn=Ge(T||[],{value:Y,postState:function(h){return Array.isArray(h)?h:h==null?ye:[h]}}),_t=$(bn,2),He=_t[0],yn=_t[1],In=function(h){if(ne){var I=h.key,U=He.includes(I),z;re?U?z=He.filter(function(ot){return ot!==I}):z=[].concat(Ie(He),[I]):z=[I],yn(z);var je=N(N({},h),{},{selectedKeys:z});U?X==null||X(je):W==null||W(je)}!re&&q.length&&le!=="inline"&&fe(ye)},Mn=$e(function(S){ve==null||ve(Be(S)),In(S)}),kt=$e(function(S,h){var I=q.filter(function(z){return z!==S});if(h)I.push(S);else if(le!=="inline"){var U=fn(S);I=I.filter(function(z){return!U.has(z)})}Ft(q,I,!0)||fe(I,!0)}),Rn=function(h,I){var U=I??!q.includes(h);kt(h,U)},Sn=Bn(le,Ke,Ee,Pe,Ce,Kt,vn,it,Rn,Je);n.useEffect(function(){et(!0)},[]);var xn=n.useMemo(function(){return{_internalRenderMenuItem:Re,_internalRenderSubMenuItem:Se}},[Re,Se]),Pn=le!=="horizontal"||f?Z:Z.map(function(S,h){return n.createElement(Le,{key:S.key,overflowDisabled:h>ze},S)}),En=n.createElement(De,H({id:b,ref:Ce,prefixCls:"".concat(o,"-overflow"),component:"ul",itemComponent:Ct,className:pe(o,"".concat(o,"-root"),"".concat(o,"-").concat(le),s,x(x({},"".concat(o,"-inline-collapsed"),ln),"".concat(o,"-rtl"),Ee),l),dir:R,style:u,role:"menu",tabIndex:M,data:Pn,renderRawItem:function(h){return h},renderRawRest:function(h){var I=h.length,U=I?Z.slice(-I):null;return n.createElement(yt,{eventKey:vt,title:oe,disabled:at,internalPopupClose:I===0,popupClassName:Te},U)},maxCount:le!=="horizontal"||f?De.INVALIDATE:De.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(h){sn(h)},onKeyDown:Sn},Ze));return n.createElement(mt.Provider,{value:xn},n.createElement(zt.Provider,{value:Pe},n.createElement(Le,{prefixCls:o,rootClassName:l,mode:le,openKeys:q,rtl:Ee,disabled:w,motion:xe?ce:null,defaultMotions:xe?F:null,activeKey:Ke,onActive:Cn,onInactive:gn,selectedKeys:He,inlineIndent:ue,subMenuOpenDelay:C,subMenuCloseDelay:L,forceSubMenuRender:y,builtinPlacements:se,triggerSubMenuAction:he,getPopupContainer:Fe,itemIcon:de,expandIcon:O,onItemClick:Mn,onOpenChange:kt},n.createElement(qt.Provider,{value:pn},En),n.createElement("div",{style:{display:"none"},"aria-hidden":!0},n.createElement(Gt.Provider,{value:mn},Z)))))}),Xe=Rr;Xe.Item=Ct;Xe.SubMenu=yt;Xe.ItemGroup=Qt;Xe.Divider=en;export{en as D,Xe as E,Ct as M,yt as S,Qt as a,Ae as u};
