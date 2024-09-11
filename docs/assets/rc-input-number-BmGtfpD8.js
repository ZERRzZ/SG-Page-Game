import{b as C,g as Y,h as Ve,c as L,d as ze}from"./@babel-CFFMjQWX.js";import{n as Me,t as Ee,g as h,c as ye,v as Je,d as ue}from"./@rc-component-BABNZfcJ.js";import{c as se}from"./classnames-BK5ccKcQ.js";import{B as Qe,t as Xe}from"./rc-input-D93r1FNS.js";import{r}from"./react-s7AnpVDj.js";import{b as Ze,q as j,F as ea,f as _e,G as oe}from"./rc-util-C9ivse0O.js";function aa(e,i){var u=r.useRef(null);function w(){try{var m=e.selectionStart,N=e.selectionEnd,c=e.value,b=c.substring(0,m),g=c.substring(N);u.current={start:m,end:N,value:c,beforeTxt:b,afterTxt:g}}catch{}}function d(){if(e&&u.current&&i)try{var m=e.value,N=u.current,c=N.beforeTxt,b=N.afterTxt,g=N.start,l=m.length;if(m.endsWith(b))l=m.length-u.current.afterTxt.length;else if(m.startsWith(c))l=c.length;else{var p=c[g-1],v=m.indexOf(p,g-1);v!==-1&&(l=v+1)}e.setSelectionRange(l,l)}catch(f){Ze(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(f.message))}}return[w,d]}var na=200,ra=600;function ta(e){var i=e.prefixCls,u=e.upNode,w=e.downNode,d=e.upDisabled,m=e.downDisabled,N=e.onStep,c=r.useRef(),b=r.useRef([]),g=r.useRef();g.current=N;var l=function(){clearTimeout(c.current)},p=function(y,O){y.preventDefault(),l(),g.current(O);function k(){g.current(O),c.current=setTimeout(k,na)}c.current=setTimeout(k,ra)};r.useEffect(function(){return function(){l(),b.current.forEach(function(I){return j.cancel(I)})}},[]);var v=ea();if(v)return null;var f="".concat(i,"-handler"),E=se(f,"".concat(f,"-up"),C({},"".concat(f,"-up-disabled"),d)),P=se(f,"".concat(f,"-down"),C({},"".concat(f,"-down-disabled"),m)),R=function(){return b.current.push(j(l))},W={unselectable:"on",role:"button",onMouseUp:R,onMouseLeave:R};return r.createElement("div",{className:"".concat(f,"-wrap")},r.createElement("span",Y({},W,{onMouseDown:function(y){p(y,!0)},"aria-label":"Increase Value","aria-disabled":d,className:E}),u||r.createElement("span",{unselectable:"on",className:"".concat(i,"-handler-up-inner")})),r.createElement("span",Y({},W,{onMouseDown:function(y){p(y,!1)},"aria-label":"Decrease Value","aria-disabled":m,className:P}),w||r.createElement("span",{unselectable:"on",className:"".concat(i,"-handler-down-inner")})))}function Ce(e){var i=typeof e=="number"?Me(e):Ee(e).fullStr,u=i.includes(".");return u?Ee(i.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}const ua=function(){var e=r.useRef(0),i=function(){j.cancel(e.current)};return r.useEffect(function(){return i},[]),function(u){i(),e.current=j(function(){u()})}};var oa=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","changeOnWheel","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","changeOnBlur"],sa=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","className","classNames"],Re=function(i,u){return i||u.isEmpty()?u.toString():u.toNumber()},De=function(i){var u=h(i);return u.isInvalidate()?null:u},la=r.forwardRef(function(e,i){var u,w=e.prefixCls,d=w===void 0?"rc-input-number":w,m=e.className,N=e.style,c=e.min,b=e.max,g=e.step,l=g===void 0?1:g,p=e.defaultValue,v=e.value,f=e.disabled,E=e.readOnly,P=e.upHandler,R=e.downHandler,W=e.keyboard,I=e.changeOnWheel,y=I===void 0?!1:I,O=e.controls,k=O===void 0?!0:O;e.classNames;var le=e.stringMode,H=e.parser,D=e.formatter,V=e.precision,M=e.decimalSeparator,G=e.onChange,z=e.onInput,J=e.onPressEnter,Q=e.onStep,ie=e.changeOnBlur,Be=ie===void 0?!0:ie,Oe=Ve(e,oa),ce="".concat(d,"-input"),U=r.useRef(null),Ue=r.useState(!1),fe=L(Ue,2),X=fe[0],de=fe[1],x=r.useRef(!1),$=r.useRef(!1),q=r.useRef(!1),$e=r.useState(function(){return h(v??p)}),ve=L($e,2),s=ve[0],me=ve[1];function Ae(n){v===void 0&&me(n)}var Z=r.useCallback(function(n,a){if(!a)return V>=0?V:Math.max(ye(n),ye(l))},[V,l]),ee=r.useCallback(function(n){var a=String(n);if(H)return H(a);var o=a;return M&&(o=o.replace(M,".")),o.replace(/[^\w.-]+/g,"")},[H,M]),ae=r.useRef(""),pe=r.useCallback(function(n,a){if(D)return D(n,{userTyping:a,input:String(ae.current)});var o=typeof n=="number"?Me(n):n;if(!a){var t=Z(o,a);if(Je(o)&&(M||t>=0)){var S=M||".";o=ue(o,S,t)}}return o},[D,Z,M]),Fe=r.useState(function(){var n=p??v;return s.isInvalidate()&&["string","number"].includes(ze(n))?Number.isNaN(n)?"":n:pe(s.toString(),!1)}),ge=L(Fe,2),A=ge[0],Ne=ge[1];ae.current=A;function F(n,a){Ne(pe(n.isInvalidate()?n.toString(!1):n.toString(!a),a))}var _=r.useMemo(function(){return De(b)},[b,V]),B=r.useMemo(function(){return De(c)},[c,V]),be=r.useMemo(function(){return!_||!s||s.isInvalidate()?!1:_.lessEquals(s)},[_,s]),Se=r.useMemo(function(){return!B||!s||s.isInvalidate()?!1:s.lessEquals(B)},[B,s]),Ke=aa(U.current,X),he=L(Ke,2),Pe=he[0],We=he[1],Ie=function(a){return _&&!a.lessEquals(_)?_:B&&!B.lessEquals(a)?B:null},ne=function(a){return!Ie(a)},T=function(a,o){var t=a,S=ne(t)||t.isEmpty();if(!t.isEmpty()&&!o&&(t=Ie(t)||t,S=!0),!E&&!f&&S){var K=t.toString(),te=Z(K,o);return te>=0&&(t=h(ue(K,".",te)),ne(t)||(t=h(ue(K,".",te,!0)))),t.equals(s)||(Ae(t),G==null||G(t.isEmpty()?null:Re(le,t)),v===void 0&&F(t,o)),t}return s},ke=ua(),we=function n(a){if(Pe(),ae.current=a,Ne(a),!$.current){var o=ee(a),t=h(o);t.isNaN()||T(t,!0)}z==null||z(a),ke(function(){var S=a;H||(S=a.replace(/。/g,".")),S!==a&&n(S)})},He=function(){$.current=!0},qe=function(){$.current=!1,we(U.current.value)},Te=function(a){we(a.target.value)},re=function(a){var o;if(!(a&&be||!a&&Se)){x.current=!1;var t=h(q.current?Ce(l):l);a||(t=t.negate());var S=(s||h(0)).add(t.toString()),K=T(S,!1);Q==null||Q(Re(le,K),{offset:q.current?Ce(l):l,type:a?"up":"down"}),(o=U.current)===null||o===void 0||o.focus()}},xe=function(a){var o=h(ee(A)),t=o;o.isNaN()?t=T(s,a):t=T(o,a),v!==void 0?F(s,!1):t.isNaN()||F(t,!1)},Le=function(){x.current=!0},Ye=function(a){var o=a.key,t=a.shiftKey;x.current=!0,q.current=t,o==="Enter"&&($.current||(x.current=!1),xe(!1),J==null||J(a)),W!==!1&&!$.current&&["Up","ArrowUp","Down","ArrowDown"].includes(o)&&(re(o==="Up"||o==="ArrowUp"),a.preventDefault())},je=function(){x.current=!1,q.current=!1};r.useEffect(function(){if(y&&X){var n=function(t){re(t.deltaY<0),t.preventDefault()},a=U.current;if(a)return a.addEventListener("wheel",n,{passive:!1}),function(){return a.removeEventListener("wheel",n)}}});var Ge=function(){Be&&xe(!1),de(!1),x.current=!1};return oe(function(){s.isInvalidate()||F(s,!1)},[V,D]),oe(function(){var n=h(v);me(n);var a=h(ee(A));(!n.equals(a)||!x.current||D)&&F(n,x.current)},[v]),oe(function(){D&&We()},[A]),r.createElement("div",{className:se(d,m,(u={},C(u,"".concat(d,"-focused"),X),C(u,"".concat(d,"-disabled"),f),C(u,"".concat(d,"-readonly"),E),C(u,"".concat(d,"-not-a-number"),s.isNaN()),C(u,"".concat(d,"-out-of-range"),!s.isInvalidate()&&!ne(s)),u)),style:N,onFocus:function(){de(!0)},onBlur:Ge,onKeyDown:Ye,onKeyUp:je,onCompositionStart:He,onCompositionEnd:qe,onBeforeInput:Le},k&&r.createElement(ta,{prefixCls:d,upNode:P,downNode:R,upDisabled:be,downDisabled:Se,onStep:re}),r.createElement("div",{className:"".concat(ce,"-wrap")},r.createElement("input",Y({autoComplete:"off",role:"spinbutton","aria-valuemin":c,"aria-valuemax":b,"aria-valuenow":s.isInvalidate()?null:s.toString(),step:l},Oe,{ref:_e(U,i),className:ce,value:A,onChange:Te,disabled:f,readOnly:E}))))}),ia=r.forwardRef(function(e,i){var u=e.disabled,w=e.style,d=e.prefixCls,m=e.value,N=e.prefix,c=e.suffix,b=e.addonBefore,g=e.addonAfter,l=e.className,p=e.classNames,v=Ve(e,sa),f=r.useRef(null),E=function(R){f.current&&Xe(f.current,R)};return r.createElement(Qe,{className:l,triggerFocus:E,prefixCls:d,value:m,disabled:u,style:w,prefix:N,suffix:c,addonAfter:g,addonBefore:b,classNames:p,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"}},r.createElement(la,Y({prefixCls:d,disabled:u,ref:_e(f,i),className:p==null?void 0:p.input},v)))});ia.displayName="InputNumber";export{ia as I};