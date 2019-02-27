!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),a=n(3);o.render(r.createElement(a.App,null),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n(4),l=n(5),s=n(12),c=function(e){function t(t){var n=e.call(this,t)||this;return n.state={countries:null,selectedCountry:null,stations:null},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;google.script.run.withSuccessHandler(function(t){e.setState({countries:t}),e.countrySelected(t.find(function(e){return"US"===e.code}))}).getCountrySummaries()},t.prototype.countrySelected=function(e){var t=this;this.setState({selectedCountry:e}),google.script.run.withSuccessHandler(function(e){t.setState({stations:e})}).getStationsByCountry(e.id)},t.prototype.render=function(){return a.createElement("div",null,a.createElement(i.Intro,null),null!=this.state.countries&&a.createElement(l.CountryDropdown,{countries:this.state.countries,onChange:this.countrySelected.bind(this)}),null!=this.state.selectedCountry&&a.createElement(s.Stations,{stations:this.state.stations}))},t}(a.Component);t.App=c},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return o(t,e),t.prototype.render=function(){return a.createElement("div",{className:"jumbotron"},a.createElement("h1",{className:"display-4"},"Radio Promo App"),a.createElement("p",{className:"lead"},"Explain things here..."),a.createElement("hr",{className:"my-4"}),a.createElement("p",null,"Maybe some more text here/"))},t}(a.Component);t.Intro=i},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n(6),l=n(8),s=n(11),c=function(e){function t(t){var n=e.call(this,t)||this;return n.state={selectedCountry:null},n}return o(t,e),t.prototype.formatCountry=function(e){if(!e.id)return e.text;var t=e.code.toLowerCase();return"uk"===t&&(t="gb"),$(l.renderToStaticMarkup(a.createElement("span",{key:e.id,className:s.countrySelector},a.createElement("img",{className:"mr-3",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+t+".svg",alt:"Card image cap"}),a.createElement("span",null,e.name," - ",e.stations," stations"))))},t.prototype.formatCountrySelection=function(e){if(!e.id)return e.text;var t=e.code.toLowerCase();return"uk"===t&&(t="gb"),$(l.renderToStaticMarkup(a.createElement("span",{key:e.id,className:s.countrySelector},a.createElement("img",{className:"mr-3",src:"http://files.stevenskelton.ca/flag-icon/flag-icon/svg/country-4x3/"+t+".svg",alt:"Card image cap"}),a.createElement("span",null,e.name))))},t.prototype.countrySelected=function(e){var t=e.params.data;this.props.onChange(t)},t.prototype.render=function(){var e=$.fn.select2.amd.require("select2/data/customDataAdapter"),t={"select2:select":this.countrySelected.bind(this)};return a.createElement(i.Select2,{width:"100%",data:this.props.countries,templateResult:this.formatCountry,templateSelection:this.formatCountrySelection,dataAdapter:e,events:t})},t}(a.Component);t.CountryDropdown=c},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n(7);!function(){function e(e,t){}e.prototype.addOptions=function(e){},e.prototype.convertToOptions=function(e){return null}}();i.fn.select2.amd.define("select2/data/customDataAdapter",["select2/data/array"],function(e){return function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.$element=t,r}return o(t,e),t.prototype.updateOptions=function(e){this.$element.find("option").remove();this.addOptions(this.convertToOptions(e.data))},t}(e)});var l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;console.log("did mount",this.props.dataAdapter),this.$el=i(this.el),this.$el.select2(this.props),Object.keys(this.props.events).forEach(function(t){return i(e.el).on(t,function(n){console.log("listened for "+t),e.props.events[t](n)})})},t.prototype.componentWillUnmount=function(){this.$el.select2("destroy")},t.prototype.componentDidUpdate=function(e){(console.log("did update",i(i(this.el).data("select2"))),JSON.stringify(e)!==JSON.stringify(this.props))&&(i(this.el).data("select2").dataAdapter.updateOptions(this.props),i(this.el).trigger("change"))},t.prototype.render=function(){var e=this;return a.createElement("div",null,a.createElement("select",{className:"select2",ref:function(t){return e.el=t}}))},t}(a.Component);t.Select2=l},function(e,t){e.exports=jQuery},function(e,t,n){"use strict";e.exports=n(9)},function(e,t,n){"use strict";
/** @license React v16.8.3
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(10),o=n(0);function a(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,a,i,l){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,i,l],c=0;(e=Error(t.replace(/%s/g,function(){return s[c++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var i="function"==typeof Symbol&&Symbol.for,l=i?Symbol.for("react.portal"):60106,s=i?Symbol.for("react.fragment"):60107,c=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,p=i?Symbol.for("react.provider"):60109,f=i?Symbol.for("react.context"):60110,d=i?Symbol.for("react.concurrent_mode"):60111,h=i?Symbol.for("react.forward_ref"):60112,m=i?Symbol.for("react.suspense"):60113,y=i?Symbol.for("react.memo"):60115,v=i?Symbol.for("react.lazy"):60116;function g(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case d:return"ConcurrentMode";case s:return"Fragment";case l:return"Portal";case u:return"Profiler";case c:return"StrictMode";case m:return"Suspense"}if("object"==typeof e)switch(e.$$typeof){case f:return"Context.Consumer";case p:return"Context.Provider";case h:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case y:return g(e.type);case v:if(e=1===e._status?e._result:null)return g(e)}return null}var b=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;b.hasOwnProperty("ReactCurrentDispatcher")||(b.ReactCurrentDispatcher={current:null});var w={};function x(e,t){for(var n=0|e._threadCount;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}for(var E=new Uint16Array(16),_=0;15>_;_++)E[_]=_+1;E[15]=0;var S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k=Object.prototype.hasOwnProperty,O={},C={};function N(e){return!!k.call(C,e)||!k.call(O,e)&&(S.test(e)?C[e]=!0:(O[e]=!0,!1))}function F(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function j(e,t,n,r,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new j(e,0,!1,e,null)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new j(t,1,!1,e[1],null)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new j(e,2,!1,e.toLowerCase(),null)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new j(e,2,!1,e,null)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new j(e,3,!1,e.toLowerCase(),null)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new j(e,3,!0,e,null)}),["capture","download"].forEach(function(e){P[e]=new j(e,4,!1,e,null)}),["cols","rows","size","span"].forEach(function(e){P[e]=new j(e,6,!1,e,null)}),["rowSpan","start"].forEach(function(e){P[e]=new j(e,5,!1,e.toLowerCase(),null)});var M=/[\-:]([a-z])/g;function D(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,D);P[t]=new j(t,1,!1,e,null)}),"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,D);P[t]=new j(t,1,!1,e,"http://www.w3.org/1999/xlink")}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,D);P[t]=new j(t,1,!1,e,"http://www.w3.org/XML/1998/namespace")}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new j(e,1,!1,e.toLowerCase(),null)});var I=/["'&<>]/;function A(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=I.exec(e);if(t){var n,r="",o=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==n&&(r+=e.substring(o,n)),o=n+1,r+=t}e=o!==n?r+e.substring(o,n):r}return e}var T=null,z=null,L=null,R=!1,V=!1,W=null,$=0;function U(){return null===T&&a("307"),T}function H(){return 0<$&&a("312"),{memoizedState:null,queue:null,next:null}}function q(){return null===L?null===z?(R=!1,z=L=H()):(R=!0,L=z):null===L.next?(R=!1,L=L.next=H()):(R=!0,L=L.next),L}function B(e,t,n,r){for(;V;)V=!1,$+=1,L=null,n=e(t,r);return z=T=null,$=0,L=W=null,n}function G(e,t){return"function"==typeof t?t(e):t}function Z(e,t,n){if(T=U(),L=q(),R){var r=L.queue;if(t=r.dispatch,null!==W&&void 0!==(n=W.get(r))){W.delete(r),r=L.memoizedState;do{r=e(r,n.action),n=n.next}while(null!==n);return L.memoizedState=r,[r,t]}return[L.memoizedState,t]}return e=e===G?"function"==typeof t?t():t:void 0!==n?n(t):t,L.memoizedState=e,e=(e=L.queue={last:null,dispatch:null}).dispatch=function(e,t,n){if(25>$||a("301"),e===T)if(V=!0,e={action:n,next:null},null===W&&(W=new Map),void 0===(n=W.get(t)))W.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}}.bind(null,T,e),[L.memoizedState,e]}function J(){}var Q=0,X={readContext:function(e){var t=Q;return x(e,t),e[t]},useContext:function(e){U();var t=Q;return x(e,t),e[t]},useMemo:function(e,t){if(T=U(),t=void 0===t?null:t,null!==(L=q())){var n=L.memoizedState;if(null!==n&&null!==t){e:{var r=n[1];if(null===r)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++){var a=t[o],i=r[o];if((a!==i||0===a&&1/a!=1/i)&&(a==a||i==i)){r=!1;break e}}r=!0}}if(r)return n[0]}}return e=e(),L.memoizedState=[e,t],e},useReducer:Z,useRef:function(e){T=U();var t=(L=q()).memoizedState;return null===t?(e={current:e},L.memoizedState=e):t},useState:function(e){return Z(G,e)},useLayoutEffect:function(){},useCallback:function(e){return e},useImperativeHandle:J,useEffect:J,useDebugValue:J},Y={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function K(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var ee={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},te=r({menuitem:!0},ee),ne={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},re=["Webkit","ms","Moz","O"];Object.keys(ne).forEach(function(e){re.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ne[t]=ne[e]})});var oe=/([A-Z])/g,ae=/^ms-/,ie=o.Children.toArray,le=b.ReactCurrentDispatcher,se={listing:!0,pre:!0,textarea:!0},ce=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,ue={},pe={};var fe=Object.prototype.hasOwnProperty,de={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function he(e,t){void 0===e&&a("152",g(t)||"Component")}function me(e,t,n){function i(o,i){var l=function(e,t,n){var r=e.contextType;if("object"==typeof r&&null!==r)return x(r,n),r[n];if(e=e.contextTypes){for(var o in n={},e)n[o]=t[o];t=n}else t=w;return t}(i,t,n),s=[],c=!1,u={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===s)return null},enqueueReplaceState:function(e,t){c=!0,s=[t]},enqueueSetState:function(e,t){if(null===s)return null;s.push(t)}},p=void 0;if(i.prototype&&i.prototype.isReactComponent){if(p=new i(o.props,l,u),"function"==typeof i.getDerivedStateFromProps){var f=i.getDerivedStateFromProps.call(null,o.props,p.state);null!=f&&(p.state=r({},p.state,f))}}else if(T={},p=i(o.props,l,u),null==(p=B(i,o.props,p,l))||null==p.render)return void he(e=p,i);if(p.props=o.props,p.context=l,p.updater=u,void 0===(u=p.state)&&(p.state=u=null),"function"==typeof p.UNSAFE_componentWillMount||"function"==typeof p.componentWillMount)if("function"==typeof p.componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&p.componentWillMount(),"function"==typeof p.UNSAFE_componentWillMount&&"function"!=typeof i.getDerivedStateFromProps&&p.UNSAFE_componentWillMount(),s.length){u=s;var d=c;if(s=null,c=!1,d&&1===u.length)p.state=u[0];else{f=d?u[0]:p.state;var h=!0;for(d=d?1:0;d<u.length;d++){var m=u[d];null!=(m="function"==typeof m?m.call(p,f,o.props,l):m)&&(h?(h=!1,f=r({},f,m)):r(f,m))}p.state=f}}else s=null;if(he(e=p.render(),i),o=void 0,"function"==typeof p.getChildContext&&"object"==typeof(l=i.childContextTypes))for(var y in o=p.getChildContext())y in l||a("108",g(i)||"Unknown",y);o&&(t=r({},t,o))}for(;o.isValidElement(e);){var l=e,s=l.type;if("function"!=typeof s)break;i(l,s)}return{child:e,context:t}}var ye=function(){function e(t,n){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function");o.isValidElement(t)?t.type!==s?t=[t]:(t=t.props.children,t=o.isValidElement(t)?[t]:ie(t)):t=ie(t),t={type:null,domNamespace:Y.html,children:t,childIndex:0,context:w,footer:""};var r=E[0];if(0===r){var i=E,l=2*(r=i.length);65536>=l||a("304");var c=new Uint16Array(l);for(c.set(i),(E=c)[0]=r+1,i=r;i<l-1;i++)E[i]=i+1;E[l-1]=0}else E[0]=E[r];this.threadID=r,this.stack=[t],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=n,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[]}return e.prototype.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;E[e]=E[0],E[0]=e}},e.prototype.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=this.threadID;x(n,r);var o=n[r];this.contextStack[t]=n,this.contextValueStack[t]=o,n[r]=e.props.value},e.prototype.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=n},e.prototype.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},e.prototype.read=function(e){if(this.exhausted)return null;var t=Q;Q=this.threadID;var n=le.current;le.current=X;try{for(var r=[""],o=!1;r[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var i=this.threadID;E[i]=E[0],E[0]=i;break}var l=this.stack[this.stack.length-1];if(o||l.childIndex>=l.children.length){var s=l.footer;if(""!==s&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===l.type)this.currentSelectValue=null;else if(null!=l.type&&null!=l.type.type&&l.type.type.$$typeof===p)this.popProvider(l.type);else if(l.type===m){this.suspenseDepth--;var c=r.pop();if(o){o=!1;var u=l.fallbackFrame;u||a("303"),this.stack.push(u);continue}r[this.suspenseDepth]+=c}r[this.suspenseDepth]+=s}else{var f=l.children[l.childIndex++],d="";try{d+=this.render(f,l.context,l.domNamespace)}catch(e){throw e}r.length<=this.suspenseDepth&&r.push(""),r[this.suspenseDepth]+=d}}return r[0]}finally{le.current=n,Q=t}},e.prototype.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?A(n):this.previousWasTextNode?"\x3c!-- --\x3e"+A(n):(this.previousWasTextNode=!0,A(n));if(e=(t=me(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!o.isValidElement(e)){if(null!=e&&null!=e.$$typeof){var i=e.$$typeof;i===l&&a("257"),a("258",i.toString())}return e=ie(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}if("string"==typeof(i=e.type))return this.renderDOM(e,t,n);switch(i){case c:case d:case u:case s:return e=ie(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case m:a("294")}if("object"==typeof i&&null!==i)switch(i.$$typeof){case h:T={};var g=i.render(e.props,e.ref);return g=B(i.render,e.props,g,e.ref),g=ie(g),this.stack.push({type:null,domNamespace:n,children:g,childIndex:0,context:t,footer:""}),"";case y:return e=[o.createElement(i.type,r({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case p:return n={type:e,domNamespace:n,children:i=ie(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case f:i=e.type,g=e.props;var b=this.threadID;return x(i,b),i=ie(g.children(i[b])),this.stack.push({type:e,domNamespace:n,children:i,childIndex:0,context:t,footer:""}),"";case v:a("295")}a("130",null==i?i:typeof i,"")},e.prototype.renderDOM=function(e,t,n){var i=e.type.toLowerCase();n===Y.html&&K(i),ue.hasOwnProperty(i)||(ce.test(i)||a("65",i),ue[i]=!0);var l=e.props;if("input"===i)l=r({type:void 0},l,{defaultChecked:void 0,defaultValue:void 0,value:null!=l.value?l.value:l.defaultValue,checked:null!=l.checked?l.checked:l.defaultChecked});else if("textarea"===i){var s=l.value;if(null==s){s=l.defaultValue;var c=l.children;null!=c&&(null!=s&&a("92"),Array.isArray(c)&&(1>=c.length||a("93"),c=c[0]),s=""+c),null==s&&(s="")}l=r({},l,{value:void 0,children:""+s})}else if("select"===i)this.currentSelectValue=null!=l.value?l.value:l.defaultValue,l=r({},l,{value:void 0});else if("option"===i){c=this.currentSelectValue;var u=function(e){if(null==e)return e;var t="";return o.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(l.children);if(null!=c){var p=null!=l.value?l.value+"":u;if(s=!1,Array.isArray(c)){for(var f=0;f<c.length;f++)if(""+c[f]===p){s=!0;break}}else s=""+c===p;l=r({selected:void 0,children:void 0},l,{selected:s,children:u})}}for(w in(s=l)&&(te[i]&&(null!=s.children||null!=s.dangerouslySetInnerHTML)&&a("137",i,""),null!=s.dangerouslySetInnerHTML&&(null!=s.children&&a("60"),"object"==typeof s.dangerouslySetInnerHTML&&"__html"in s.dangerouslySetInnerHTML||a("61")),null!=s.style&&"object"!=typeof s.style&&a("62","")),s=l,c=this.makeStaticMarkup,u=1===this.stack.length,p="<"+e.type,s)if(fe.call(s,w)){var d=s[w];if(null!=d){if("style"===w){f=void 0;var h="",m="";for(f in d)if(d.hasOwnProperty(f)){var y=0===f.indexOf("--"),v=d[f];if(null!=v){var g=f;if(pe.hasOwnProperty(g))g=pe[g];else{var b=g.replace(oe,"-$1").toLowerCase().replace(ae,"-ms-");g=pe[g]=b}h+=m+g+":",m=f,h+=y=null==v||"boolean"==typeof v||""===v?"":y||"number"!=typeof v||0===v||ne.hasOwnProperty(m)&&ne[m]?(""+v).trim():v+"px",m=";"}}d=h||null}f=null;e:if(y=i,v=s,-1===y.indexOf("-"))y="string"==typeof v.is;else switch(y){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":y=!1;break e;default:y=!0}y?de.hasOwnProperty(w)||(f=N(f=w)&&null!=d?f+'="'+A(d)+'"':""):(y=w,f=d,d=P.hasOwnProperty(y)?P[y]:null,(v="style"!==y)&&(v=null!==d?0===d.type:2<y.length&&("o"===y[0]||"O"===y[0])&&("n"===y[1]||"N"===y[1])),v||F(y,f,d,!1)?f="":null!==d?(y=d.attributeName,f=3===(d=d.type)||4===d&&!0===f?y+'=""':y+'="'+A(f)+'"'):f=N(y)?y+'="'+A(f)+'"':""),f&&(p+=" "+f)}}c||u&&(p+=' data-reactroot=""');var w=p;s="",ee.hasOwnProperty(i)?w+="/>":(w+=">",s="</"+e.type+">");e:{if(null!=(c=l.dangerouslySetInnerHTML)){if(null!=c.__html){c=c.__html;break e}}else if("string"==typeof(c=l.children)||"number"==typeof c){c=A(c);break e}c=null}return null!=c?(l=[],se[i]&&"\n"===c.charAt(0)&&(w+="\n"),w+=c):l=ie(l.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?K(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:i,children:l,childIndex:0,context:t,footer:s}),this.previousWasTextNode=!1,w},e}(),ve={renderToString:function(e){e=new ye(e,!1);try{return e.read(1/0)}finally{e.destroy()}},renderToStaticMarkup:function(e){e=new ye(e,!0);try{return e.read(1/0)}finally{e.destroy()}},renderToNodeStream:function(){a("207")},renderToStaticNodeStream:function(){a("208")},version:"16.8.3"},ge={default:ve},be=ge&&ve||ge;e.exports=be.default||be},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,i,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))o.call(n,c)&&(l[c]=n[c]);if(r){i=r(n);for(var u=0;u<i.length;u++)a.call(n,i[u])&&(l[i[u]]=n[i[u]])}}return l}},function(e,t,n){e.exports={"card-img-overlay":"card-img-overlay",cardImgOverlay:"card-img-overlay","country-selector":"country-selector",countrySelector:"country-selector"}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n(13),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={stations:[]},n}return o(t,e),t.prototype.render=function(){return null==this.props.stations?a.createElement("div",null,"Loading stations..."):a.createElement("div",null,a.createElement("div",null,"There are ",this.props.stations.length," stations"),a.createElement("div",{className:"row d-flex align-items-stretch"},this.props.stations.map(function(e){return a.createElement(i.Summary,{station:e})})))},t}(a.Component);t.Stations=l},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),i=n(14),l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={},n}return o(t,e),t.prototype.render=function(){return i.Util.isEmpty(this.props)?a.createElement("div",null,"Loading station..."):a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex flex-wrap"},a.createElement("div",{className:"card"},a.createElement("div",{className:"card-header"},this.props.station.code),a.createElement("div",{className:"card-body"},a.createElement("h5",{className:"card-title"},this.props.station.name),a.createElement("p",{className:"card-text"},this.props.station.location),!i.Util.isEmpty(this.props.station.parentGroup)&&a.createElement("p",{className:"card-text"},this.props.station.parentGroup)),a.createElement("div",{className:"card-footer"},a.createElement("span",null,a.createElement("a",{href:"#"},a.createElement("i",{className:"fas fa-eye"}))),a.createElement("span",null,this.props.station.website?a.createElement("a",{href:this.props.station.website,target:"_blank"},a.createElement("i",{className:"fas fa-link"})):a.createElement("span",null," ")),a.createElement("span",null,this.props.station.twitter?a.createElement("a",{href:"https://twitter.com/"+this.props.station.twitter,target:"_blank"},a.createElement("i",{className:"fab fa-twitter"})):a.createElement("span",null," ")),a.createElement("span",null,this.props.station.instagram?a.createElement("a",{href:"https://instagram.com/"+this.props.station.instagram,target:"_blank"},a.createElement("i",{className:"fab fa-instagram"})):a.createElement("span",null," ")),a.createElement("span",null,this.props.station.facebook?a.createElement("a",{href:"https://facebook.com/"+this.props.station.facebook,target:"_blank"},a.createElement("i",{className:"fab fa-facebook"})):a.createElement("span",null," ")),a.createElement("span",null,this.props.station.email?a.createElement("a",{href:"mailto:"+this.props.station.email,target:"_blank"},a.createElement("i",{className:"fas fa-envelope"})):a.createElement("span",null," ")),a.createElement("span",null,this.props.station.text?a.createElement("a",{href:"#"},a.createElement("i",{className:"fas fa-comment"})):a.createElement("span",null," ")),a.createElement("span",null,this.props.station.phone?a.createElement("a",{href:"#"},a.createElement("i",{className:"fas fa-phone"})):a.createElement("span",null," ")),a.createElement("span",null,this.props.station.note?a.createElement("a",{href:"#"},a.createElement("i",{className:"fas fa-sticky-note"})):a.createElement("span",null," ")))))},t}(a.Component);t.Summary=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.isEmpty=function(e){return[Object,Array].includes((e||{}).constructor)&&!Object.entries(e||{}).length},e.createJSONOutput=function(e){return HtmlService.createHtmlOutput("<pre>"+JSON.stringify(e,null,4)+"</pre>")},e}();t.Util=r}]);
//# sourceMappingURL=index_bundle.js.map