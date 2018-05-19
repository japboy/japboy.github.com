!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e){
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(t){return t}},function(t,e,n){"use strict";n.r(e);var i={};n.d(i,"dashToCamelCase",function(){return V}),n.d(i,"camelToDashCase",function(){return W});var s={};n.d(s,"timeOut",function(){return Q}),n.d(s,"animationFrame",function(){return tt}),n.d(s,"idlePeriod",function(){return et}),n.d(s,"microTask",function(){return nt});var r={};n.d(r,"gestures",function(){return Cn}),n.d(r,"recognizers",function(){return Sn}),n.d(r,"deepTargetFind",function(){return xn}),n.d(r,"addListener",function(){return En}),n.d(r,"removeListener",function(){return kn}),n.d(r,"register",function(){return On}),n.d(r,"setTouchAction",function(){return Nn}),n.d(r,"prevent",function(){return An}),n.d(r,"resetMouseCanceller",function(){return Ln}),n.d(r,"findOriginalTarget",function(){return In}),n.d(r,"add",function(){return Dn}),n.d(r,"remove",function(){return Mn});n(0);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let o,a,l=/(url\()([^)]*)(\))/g,h=/(^\/)|(^#)|(^[\w-\d]*:)/;function d(t,e){if(t&&h.test(t))return t;if(void 0===o){o=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",o="http://a/c%20d"===t.href}catch(t){}}return e||(e=document.baseURI||window.location.href),o?new URL(t,e).href:(a||((a=document.implementation.createHTMLDocument("temp")).base=a.createElement("base"),a.head.appendChild(a.base),a.anchor=a.createElement("a"),a.body.appendChild(a.anchor)),a.base.href=e,a.anchor.href=t,a.anchor.href||t)}function c(t,e){return t.replace(l,function(t,n,i,s){return n+"'"+d(i.replace(/["']/g,""),e)+"'"+s})}function u(t){return t.substring(0,t.lastIndexOf("/")+1)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const p=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let _=u(document.baseURI||window.location.href);let f=void 0;let m=!1;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let y=0;function g(){}g.prototype.__mixinApplications,g.prototype.__mixinSet;const b=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let n=y++;return function(i){let s=i.__mixinSet;if(s&&s[n])return i;let r=e,o=r.get(i);o||(o=t(i),r.set(i,o));let a=Object.create(o.__mixinSet||s||null);return a[n]=!0,o.__mixinSet=a,o}},w="link[rel=import][type~=css]",v="include",C="shady-unscoped";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function S(t){const e=customElements.get("dom-module");return e?e.import(t):null}function x(t){const e=c((t.body?t.body:t).textContent,t.baseURI),n=document.createElement("style");return n.textContent=e,n}function T(t){const e=t.trim().split(/\s+/),n=[];for(let t=0;t<e.length;t++)n.push(...P(e[t]));return n}function P(t){const e=S(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...k(e));const n=e.querySelector("template");n&&t.push(...E(n,e.assetpath)),e._styles=t}return e._styles}function E(t,e){if(!t._styles){const n=[],i=t.content.querySelectorAll("style");for(let t=0;t<i.length;t++){let s=i[t],r=s.getAttribute(v);r&&n.push(...T(r).filter(function(t,e,n){return n.indexOf(t)===e})),e&&(s.textContent=c(s.textContent,e)),n.push(s)}t._styles=n}return t._styles}function k(t){const e=[],n=t.querySelectorAll(w);for(let t=0;t<n.length;t++){let i=n[t];if(i.import){const t=i.import,n=i.hasAttribute(C);if(n&&!t._unscopedStyle){const e=x(t);e.setAttribute(C,""),t._unscopedStyle=e}else t._style||(t._style=x(t));e.push(n?t._unscopedStyle:t._style)}}return e}function O(t){let e=S(t);if(e&&void 0===e._cssText){let t=N(e),n=e.querySelector("template");n&&(t+=function(t,e){let n="";const i=E(t,e);for(let t=0;t<i.length;t++){let e=i[t];e.parentNode&&e.parentNode.removeChild(e),n+=e.textContent}return n}(n,e.assetpath)),e._cssText=t||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function N(t){let e="",n=k(t);for(let t=0;t<n.length;t++)e+=n[t].textContent;return e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let R={},A={};class L extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let n=function(t){return R[t]||A[t.toLowerCase()]}(t);return n&&e?n.querySelector(e):n}return null}attributeChangedCallback(t,e,n,i){e!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=d(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=u(e)}return this.__assetpath}register(t){var e;(t=t||this.id)&&(this.id=t,R[t]=this,A[t.toLowerCase()]=this,(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id))}}function I(t){return t.indexOf(".")>=0}function D(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function M(t,e){return 0===t.indexOf(e+".")}function F(t,e){return 0===e.indexOf(t+".")}function H(t,e,n){return e+n.slice(t.length)}function z(t){if(Array.isArray(t)){let e=[];for(let n=0;n<t.length;n++){let i=t[n].toString().split(".");for(let t=0;t<i.length;t++)e.push(i[t])}return e.join(".")}return t}function B(t){return Array.isArray(t)?z(t).split("."):t.toString().split(".")}function q(t,e,n){let i=t,s=B(e);for(let t=0;t<s.length;t++){if(!i)return;i=i[s[t]]}return n&&(n.path=s.join(".")),i}function j(t,e,n){let i=t,s=B(e),r=s[s.length-1];if(s.length>1){for(let t=0;t<s.length-1;t++){if(!(i=i[s[t]]))return}i[r]=n}else i[e]=n;return s.join(".")}L.prototype.modules=R,customElements.define("dom-module",L);const $={},Y=/-[a-z]/g,U=/([A-Z])/g;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function V(t){return $[t]||($[t]=t.indexOf("-")<0?t:t.replace(Y,t=>t[1].toUpperCase()))}function W(t){return $[t]||($[t]=t.replace(U,"-$1").toLowerCase())}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let G=0,X=0,J=[],K=0,Z=document.createTextNode("");new window.MutationObserver(function(){const t=J.length;for(let e=0;e<t;e++){let t=J[e];if(t)try{t()}catch(t){setTimeout(()=>{throw t})}}J.splice(0,t),X+=t}).observe(Z,{characterData:!0});const Q={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},tt={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},et={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},nt={run:t=>(Z.textContent=K++,J.push(t),G++),cancel(t){const e=t-X;if(e>=0){if(!J[e])throw new Error("invalid async handle: "+t);J[e]=null}}},it=nt,st=b(t=>{return class extends t{static createProperties(t){const e=this.prototype;for(let n in t)n in e||e._createPropertyAccessor(n)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[t]){const e=this.constructor.attributeNameForProperty(t);this.__dataAttributes[e]=t}}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this._getProperty(t)},set:e?function(){}:function(e){this._setProperty(t,e)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,n){let i=this.__data[t],s=this._shouldPropertyChange(t,e,i);return s&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||t in this.__dataOld||(this.__dataOld[t]=i),this.__data[t]=e,this.__dataPending[t]=e),s}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,it.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const t=this.__data,e=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(t,e,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,n))}_shouldPropertiesChange(t,e,n){return Boolean(e)}_propertiesChanged(t,e,n){}_shouldPropertyChange(t,e,n){return n!==e&&(n==n||e==e)}attributeChangedCallback(t,e,n,i){e!==n&&this._attributeToProperty(t,n),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,n,i)}_attributeToProperty(t,e,n){if(!this.__serializing){const i=this.__dataAttributes,s=i&&i[t]||t;this[s]=this._deserializeValue(e,n||this.constructor.typeForProperty(s))}}_propertyToAttribute(t,e,n){this.__serializing=!0,n=arguments.length<3?this[t]:n,this._valueToNodeAttribute(this,n,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,n){const i=this._serializeValue(e);void 0===i?t.removeAttribute(n):t.setAttribute(n,i)}_serializeValue(t){switch(typeof t){case"boolean":return t?"":void 0;default:return null!=t?t.toString():void 0}}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let rt=i;const ot={};let at=HTMLElement.prototype;for(;at;){let t=Object.getOwnPropertyNames(at);for(let e=0;e<t.length;e++)ot[t[e]]=!0;at=Object.getPrototypeOf(at)}const lt=b(t=>{const e=st(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(rt.dashToCamelCase(t[e]))}static attributeNameForProperty(t){return rt.camelToDashCase(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){const n=this;n.hasAttribute(t)||this._valueToNodeAttribute(n,e,t)}_serializeValue(t){switch(typeof t){case"object":if(t instanceof Date)return t.toString();if(t)try{return JSON.stringify(t)}catch(t){return""}default:return super._serializeValue(t)}}_deserializeValue(t,e){let n;switch(e){case Object:try{n=JSON.parse(t)}catch(e){n=t}break;case Array:try{n=JSON.parse(t)}catch(e){n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:n=isNaN(t)?String(t):Number(t),n=new Date(n);break;default:n=super._deserializeValue(t,e)}return n}_definePropertyAccessor(t,e){!function(t,e){if(!ot[e]){let n=t[e];void 0!==n&&(t.__data?t._setPendingProperty(e,n):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=n))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}}),ht={"dom-if":!0,"dom-repeat":!0};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function dt(t){let e=t.getAttribute("is");if(e&&ht[e]){let n=t;for(n.removeAttribute("is"),t=n.ownerDocument.createElement(e),n.parentNode.replaceChild(t,n),t.appendChild(n);n.attributes.length;)t.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return t}function ct(t,e){let n=e.parentInfo&&ct(t,e.parentInfo);if(!n)return t;for(let t=n.firstChild,i=0;t;t=t.nextSibling)if(e.parentIndex===i++)return t}function ut(t,e,n,i){i.id&&(e[i.id]=n)}function pt(t,e,n){if(n.events&&n.events.length)for(let i,s=0,r=n.events;s<r.length&&(i=r[s]);s++)t._addMethodEventListenerToNode(e,i.name,i.value,t)}function _t(t,e,n){n.templateInfo&&(e._templateInfo=n.templateInfo)}const ft=b(t=>{return class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let n=t._templateInfo={};n.nodeInfoList=[],n.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,n,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,n){return this._parseTemplateNode(t.content,e,n)}static _parseTemplateNode(t,e,n){let i,s=t;return"template"!=s.localName||s.hasAttribute("preserve-content")?"slot"===s.localName&&(e.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(s,e,n)||i,s.firstChild&&(i=this._parseTemplateChildNodes(s,e,n)||i),s.hasAttributes&&s.hasAttributes()&&(i=this._parseTemplateNodeAttributes(s,e,n)||i),i}static _parseTemplateChildNodes(t,e,n){if("script"!==t.localName&&"style"!==t.localName)for(let i,s=t.firstChild,r=0;s;s=i){if("template"==s.localName&&(s=dt(s)),i=s.nextSibling,s.nodeType===Node.TEXT_NODE){let n=i;for(;n&&n.nodeType===Node.TEXT_NODE;)s.textContent+=n.textContent,i=n.nextSibling,t.removeChild(n),n=i;if(e.stripWhiteSpace&&!s.textContent.trim()){t.removeChild(s);continue}}let o={parentIndex:r,parentInfo:n};this._parseTemplateNode(s,e,o)&&(o.infoIndex=e.nodeInfoList.push(o)-1),s.parentNode&&r++}}static _parseTemplateNestedTemplate(t,e,n){let i=this._parseTemplate(t,e);return(i.content=t.content.ownerDocument.createDocumentFragment()).appendChild(t.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(t,e,n){let i=!1,s=Array.from(t.attributes);for(let r,o=s.length-1;r=s[o];o--)i=this._parseTemplateNodeAttribute(t,e,n,r.name,r.value)||i;return i}static _parseTemplateNodeAttribute(t,e,n,i,s){return"on-"===i.slice(0,3)?(t.removeAttribute(i),n.events=n.events||[],n.events.push({name:i.slice(3),value:s}),!0):"id"===i&&(n.id=s,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let e=this.constructor._parseTemplate(t),n=e.nodeInfoList,i=e.content||t.content,s=document.importNode(i,!0);s.__noInsertionPoint=!e.hasInsertionPoint;let r=s.nodeList=new Array(n.length);s.$={};for(let t,e=0,i=n.length;e<i&&(t=n[e]);e++){let n=r[e]=ct(s,t);ut(0,s.$,n,t),_t(0,n,t),pt(this,n,t)}return s=s}_addMethodEventListenerToNode(t,e,n,i){let s=function(t,e,n){return t=t._methodHost||t,function(e){t[n]?t[n](e,e.detail):console.warn("listener method `"+n+"` not defined")}}(i=i||t,0,n);return this._addEventListenerToNode(t,e,s),s}_addEventListenerToNode(t,e,n){t.addEventListener(e,n)}_removeEventListenerFromNode(t,e,n){t.removeEventListener(e,n)}}}),mt=i;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let yt=0;const gt={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},bt=/[A-Z]/;let wt;function vt(t,e){let n=t[e];if(n){if(!t.hasOwnProperty(e)){n=t[e]=Object.create(t[e]);for(let t in n){let e=n[t],i=n[t]=Array(e.length);for(let t=0;t<e.length;t++)i[t]=e[t]}}}else n=t[e]={};return n}function Ct(t,e,n,i,s,r){if(e){let o=!1,a=yt++;for(let l in n)St(t,e,a,l,n,i,s,r)&&(o=!0);return o}return!1}function St(t,e,n,i,s,r,o,a){let l=!1,h=e[o?D(i):i];if(h)for(let e,d=0,c=h.length;d<c&&(e=h[d]);d++)e.info&&e.info.lastRun===n||o&&!xt(i,e.trigger)||(e.info&&(e.info.lastRun=n),e.fn(t,i,s,r,e.info,o,a),l=!0);return l}function xt(t,e){if(e){let n=e.name;return n==t||e.structured&&M(n,t)||e.wildcard&&F(n,t)}return!0}function Tt(t,e,n,i,s){let r="string"==typeof s.method?t[s.method]:s.method,o=s.property;r?r.call(t,t.__data[o],i[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function Pt(t,e,n){let i=D(e);if(i!==e){return Et(t,W(i)+"-changed",n[e],e),!0}return!1}function Et(t,e,n,i){let s={value:n,queueProperty:!0};i&&(s.path=i),t.dispatchEvent(new CustomEvent(e,{detail:s}))}function kt(t,e,n,i,s,r){let o=(r?D(e):e)!=e?e:null,a=o?q(t,o):t.__data[e];o&&void 0===a&&(a=n[e]),Et(t,s.eventName,a,o)}function Ot(t,e,n,i,s){let r=t.__data[e];f&&(r=f(r,s.attrName,"attribute",t)),t._propertyToAttribute(e,s.attrName,r)}function Nt(t,e,n,i,s){let r=Ft(t,e,n,i,s),o=s.methodInfo;t.__dataHasAccessor&&t.__dataHasAccessor[o]?t._setPendingProperty(o,r,!0):t[o]=r}function Rt(t,e,n,i,s,r,o){n.bindings=n.bindings||[];let a={kind:i,target:s,parts:r,literal:o,isCompound:1!==r.length};if(n.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||mt.camelToDashCase(s)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let n=0;n<a.parts.length;n++){let i=a.parts[n];i.compoundIndex=n,At(t,e,a,i,l)}}function At(t,e,n,i,s){if(!i.literal)if("attribute"===n.kind&&"-"===n.target[0])console.warn("Cannot set attribute "+n.target+' because "-" is not a valid attribute starting character');else{let r=i.dependencies,o={index:s,binding:n,part:i,evaluator:t};for(let n=0;n<r.length;n++){let i=r[n];"string"==typeof i&&((i=jt(i)).wildcard=!0),t._addTemplatePropertyEffect(e,i.rootProperty,{fn:Lt,info:o,trigger:i})}}}function Lt(t,e,n,i,s,r,o){let a=o[s.index],l=s.binding,h=s.part;if(r&&h.source&&e.length>h.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let i=n[e];e=H(h.source,l.target,e),a._setPendingPropertyOrPath(e,i,!1,!0)&&t._enqueueClient(a)}else{!function(t,e,n,i,s){s=function(t,e,n,i){if(n.isCompound){let s=t.__dataCompoundStorage[n.target];s[i.compoundIndex]=e,e=s.join("")}return"attribute"!==n.kind&&("textContent"!==n.target&&("value"!==n.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=void 0==e?"":e)),e}(e,s,n,i),f&&(s=f(s,n.target,n.kind,e));if("attribute"==n.kind)t._valueToNodeAttribute(e,s,n.target);else{let i=n.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[i]?e[gt.READ_ONLY]&&e[gt.READ_ONLY][i]||e._setPendingProperty(i,s)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,i,s)}}(t,a,l,h,s.evaluator._evaluateBinding(t,h,e,n,i,r))}}function It(t,e){if(e.isCompound){let n=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),i=e.parts,s=new Array(i.length);for(let t=0;t<i.length;t++)s[t]=i[t].literal;let r=e.target;n[r]=s,e.literal&&"property"==e.kind&&(t[r]=e.literal)}}function Dt(t,e,n){if(n.listenerEvent){let i=n.parts[0];t.addEventListener(n.listenerEvent,function(t){!function(t,e,n,i,s){let r,o=t.detail,a=o&&o.path;a?(i=H(n,i,a),r=o&&o.value):r=t.target[n],r=s?!r:r,e[gt.READ_ONLY]&&e[gt.READ_ONLY][i]||!e._setPendingPropertyOrPath(i,r,!0,Boolean(a))||o&&o.queueProperty||e._invalidateProperties()}(t,e,n.target,i.source,i.negate)})}}function Mt(t,e,n,i,s,r){r=e.static||r&&("object"!=typeof r||r[e.methodName]);let o={methodName:e.methodName,args:e.args,methodInfo:s,dynamicFn:r};for(let s,r=0;r<e.args.length&&(s=e.args[r]);r++)s.literal||t._addPropertyEffect(s.rootProperty,n,{fn:i,info:o,trigger:s});r&&t._addPropertyEffect(e.methodName,n,{fn:i,info:o})}function Ft(t,e,n,i,s){let r=t._methodHost||t,o=r[s.methodName];if(o){let i=function(t,e,n,i){let s=[];for(let r=0,o=e.length;r<o;r++){let o,a=e[r],l=a.name;if(a.literal?o=a.value:a.structured?void 0===(o=q(t,l))&&(o=i[l]):o=t[l],a.wildcard){let t=0===l.indexOf(n+"."),e=0===n.indexOf(l)&&!t;s[r]={path:e?n:l,value:e?i[n]:o,base:o}}else s[r]=o}return s}(t.__data,s.args,e,n);return o.apply(r,i)}s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Ht=[],zt=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function Bt(t){let e="";for(let n=0;n<t.length;n++){e+=t[n].literal||""}return e}function qt(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:Ht};if(e[2].trim()){return function(t,e){return e.args=t.map(function(t){let n=jt(t);return n.literal||(e.static=!1),n},this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t)}return t}return null}function jt(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:e,value:"",literal:!1},i=e[0];switch("-"===i&&(i=e[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':n.value=e.slice(1,-1),n.literal=!0;break;case"#":n.value=Number(e),n.literal=!0}return n.literal||(n.rootProperty=D(e),n.structured=I(e),n.structured&&(n.wildcard=".*"==e.slice(-2),n.wildcard&&(n.name=e.slice(0,-2)))),n}function $t(t,e,n,i){let s=n+".splices";t.notifyPath(s,{indexSplices:i}),t.notifyPath(n+".length",e.length),t.__data[s]={indexSplices:null}}function Yt(t,e,n,i,s,r){$t(t,e,n,[{index:i,addedCount:s,removed:r,object:e,type:"splice"}])}const Ut=b(t=>{const e=ft(lt(t));class n extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return gt}_initializeProperties(){super._initializeProperties(),Vt.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[gt.READ_ONLY];for(let n in t)e&&e[n]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=t[n])}_addPropertyEffect(t,e,n){this._createPropertyAccessor(t,e==gt.READ_ONLY);let i=vt(this,e)[t];i||(i=this[e][t]=[]),i.push(n)}_removePropertyEffect(t,e,n){let i=vt(this,e)[t],s=i.indexOf(n);s>=0&&i.splice(s,1)}_hasPropertyEffect(t,e){let n=this[e];return Boolean(n&&n[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,gt.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,gt.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,gt.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,gt.COMPUTE)}_setPendingPropertyOrPath(t,e,n,i){if(i||D(Array.isArray(t)?t[0]:t)!==t){if(!i){let n=q(this,t);if(!(t=j(this,t,e))||!super._shouldPropertyChange(t,e,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,n))return function(t,e,n){let i=t.__dataLinkedPaths;if(i){let s;for(let r in i){let o=i[r];F(r,e)?(s=H(r,o,e),t._setPendingPropertyOrPath(s,n,!0,!0)):F(o,e)&&(s=H(o,r,e),t._setPendingPropertyOrPath(s,n,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,n);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,n){n===t[e]&&"object"!=typeof n||(t[e]=n)}_setPendingProperty(t,e,n){let i=this.__dataHasPaths&&I(t),s=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,s[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),i?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(i||this[gt.NOTIFY]&&this[gt.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=n),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let n=t[e];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let n in t)!e&&this[gt.READ_ONLY]&&this[gt.READ_ONLY][n]||this._setPendingPropertyOrPath(n,t[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,n){let i=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,n,i){let s=t[gt.COMPUTE];if(s){let r=e;for(;Ct(t,s,r,n,i);)Object.assign(n,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}(this,e,n,i);let s=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(e,n,i),this._flushClients(),Ct(this,this[gt.REFLECT],e,n,i),Ct(this,this[gt.OBSERVE],e,n,i),s&&function(t,e,n,i,s){let r,o,a=t[gt.NOTIFY],l=yt++;for(let o in e)e[o]&&(a&&St(t,a,l,o,n,i,s)?r=!0:s&&Pt(t,o,n)&&(r=!0));r&&(o=t.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,s,e,n,i),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,n){this[gt.PROPAGATE]&&Ct(this,this[gt.PROPAGATE],t,e,n);let i=this.__templateInfo;for(;i;)Ct(this,i.propertyEffects,t,e,n,i.nodeList),i=i.nextTemplateInfo}linkPaths(t,e){t=z(t),e=z(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=z(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let n={path:""};$t(this,q(this,t,n),n.path,e)}get(t,e){return q(e||this,t)}set(t,e,n){n?j(n,t,e):this[gt.READ_ONLY]&&this[gt.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let n={path:""},i=q(this,t,n),s=i.length,r=i.push(...e);return e.length&&Yt(this,i,n.path,s,e.length,[]),r}pop(t){let e={path:""},n=q(this,t,e),i=Boolean(n.length),s=n.pop();return i&&Yt(this,n,e.path,n.length,0,[s]),s}splice(t,e,n,...i){let s,r={path:""},o=q(this,t,r);return e<0?e=o.length-Math.floor(-e):e&&(e=Math.floor(e)),s=2===arguments.length?o.splice(e):o.splice(e,n,...i),(i.length||s.length)&&Yt(this,o,r.path,e,i.length,s),s}shift(t){let e={path:""},n=q(this,t,e),i=Boolean(n.length),s=n.shift();return i&&Yt(this,n,e.path,0,0,[s]),s}unshift(t,...e){let n={path:""},i=q(this,t,n),s=i.unshift(...e);return e.length&&Yt(this,i,n.path,0,e.length,[]),s}notifyPath(t,e){let n;if(1==arguments.length){let i={path:""};e=q(this,t,i),n=i.path}else n=Array.isArray(t)?z(t):t;this._setPendingPropertyOrPath(n,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var n;this._addPropertyEffect(t,gt.READ_ONLY),e&&(this["_set"+(n=t,n[0].toUpperCase()+n.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,n){let i={property:t,method:e,dynamicFn:Boolean(n)};this._addPropertyEffect(t,gt.OBSERVE,{fn:Tt,info:i,trigger:{name:t}}),n&&this._addPropertyEffect(e,gt.OBSERVE,{fn:Tt,info:i,trigger:{name:e}})}_createMethodObserver(t,e){let n=qt(t);if(!n)throw new Error("Malformed observer expression '"+t+"'");Mt(this,n,gt.OBSERVE,Ft,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,gt.NOTIFY,{fn:kt,info:{eventName:mt.camelToDashCase(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,gt.REFLECT,{fn:Ot,info:{attrName:e}})}_createComputedProperty(t,e,n){let i=qt(e);if(!i)throw new Error("Malformed computed expression '"+e+"'");Mt(this,i,gt.COMPUTE,Nt,t,n)}static addPropertyEffect(t,e,n){this.prototype._addPropertyEffect(t,e,n)}static createPropertyObserver(t,e,n){this.prototype._createPropertyObserver(t,e,n)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,n){this.prototype._createComputedProperty(t,e,n)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let n=this.constructor._parseTemplate(t),i=this.__templateInfo==n;if(!i)for(let t in n.propertyEffects)this._createPropertyAccessor(t);if(e&&((n=Object.create(n)).wasPreBound=i,!i&&this.__templateInfo)){let t=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=t.nextTemplateInfo=n,n.previousTemplateInfo=t,n}return this.__templateInfo=n}static _addTemplatePropertyEffect(t,e,n){(t.hostProps=t.hostProps||{})[e]=!0;let i=t.propertyEffects=t.propertyEffects||{};(i[e]=i[e]||[]).push(n)}_stampTemplate(t){Vt.beginHosting(this);let e=super._stampTemplate(t);Vt.endHosting(this);let n=this._bindTemplate(t,!0);if(n.nodeList=e.nodeList,!n.wasPreBound){let t=n.childNodes=[];for(let n=e.firstChild;n;n=n.nextSibling)t.push(n)}return e.templateInfo=n,function(t,e){let{nodeList:n,nodeInfoList:i}=e;if(i.length)for(let e=0;e<i.length;e++){let s=i[e],r=n[e],o=s.bindings;if(o)for(let e=0;e<o.length;e++){let n=o[e];It(r,n),Dt(r,t,n)}r.__dataHost=t}}(this,n),this.__dataReady&&Ct(this,n.propertyEffects,this.__data,null,!1,n.nodeList),e}_removeBoundDom(t){let e=t.templateInfo;e.previousTemplateInfo&&(e.previousTemplateInfo.nextTemplateInfo=e.nextTemplateInfo),e.nextTemplateInfo&&(e.nextTemplateInfo.previousTemplateInfo=e.previousTemplateInfo),this.__templateInfoLast==e&&(this.__templateInfoLast=e.previousTemplateInfo),e.previousTemplateInfo=e.nextTemplateInfo=null;let n=e.childNodes;for(let t=0;t<n.length;t++){let e=n[t];e.parentNode.removeChild(e)}}static _parseTemplateNode(t,e,n){let i=super._parseTemplateNode(t,e,n);if(t.nodeType===Node.TEXT_NODE){let s=this._parseBindings(t.textContent,e);s&&(t.textContent=Bt(s)||" ",Rt(this,e,n,"text","textContent",s),i=!0)}return i}static _parseTemplateNodeAttribute(t,e,n,i,s){let r=this._parseBindings(s,e);if(r){let s=i,o="property";bt.test(i)?o="attribute":"$"==i[i.length-1]&&(i=i.slice(0,-1),o="attribute");let a=Bt(r);return a&&"attribute"==o&&t.setAttribute(i,a),"input"===t.localName&&"value"===s&&t.setAttribute(s,""),t.removeAttribute(s),"property"===o&&(i=V(i)),Rt(this,e,n,o,i,r,a),!0}return super._parseTemplateNodeAttribute(t,e,n,i,s)}static _parseTemplateNestedTemplate(t,e,n){let i=super._parseTemplateNestedTemplate(t,e,n),s=n.templateInfo.hostProps;for(let t in s){Rt(this,e,n,"property","_host_"+t,[{mode:"{",source:t,dependencies:[t]}])}return i}static _parseBindings(t,e){let n,i=[],s=0;for(;null!==(n=zt.exec(t));){n.index>s&&i.push({literal:t.slice(s,n.index)});let r=n[1][0],o=Boolean(n[2]),a=n[3].trim(),l=!1,h="",d=-1;"{"==r&&(d=a.indexOf("::"))>0&&(h=a.substring(d+2),a=a.substring(0,d),l=!0);let c=qt(a),u=[];if(c){let{args:t,methodName:n}=c;for(let e=0;e<t.length;e++){let n=t[e];n.literal||u.push(n)}let i=e.dynamicFns;(i&&i[n]||c.static)&&(u.push(n),c.dynamicFn=!0)}else u.push(a);i.push({source:a,mode:r,negate:o,customEvent:l,signature:c,dependencies:u,event:h}),s=zt.lastIndex}if(s&&s<t.length){let e=t.substring(s);e&&i.push({literal:e})}return i.length?i:null}static _evaluateBinding(t,e,n,i,s,r){let o;return o=e.signature?Ft(t,n,i,0,e.signature):n!=e.source?q(t,e.source):r&&I(n)?q(t,n):t.__data[n],e.negate&&(o=!o),o}}return wt=n,n});let Vt={stack:[],registerHost(t){if(this.stack.length){this.stack[this.stack.length-1]._enqueueClient(t)}},beginHosting(t){this.stack.push(t)},endHosting(t){let e=this.stack.length;e&&this.stack[e-1]==t&&this.stack.pop()}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Wt=b(t=>{const e=st(t);function n(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof s?e:null}function i(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;t.hasOwnProperty(JSCompiler_renameProperty("properties",t))&&t.properties&&(e=function(t){const e={};for(let n in t){const i=t[n];e[n]="function"==typeof i?{type:i}:i}return e}(t.properties)),t.__ownProperties=e}return t.__ownProperties}class s extends e{static get observedAttributes(){const t=this._properties;return t?Object.keys(t).map(t=>this.attributeNameForProperty(t)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=n(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=i(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=n(this);this.__properties=Object.assign({},t&&t._properties,i(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s}),Gt=b(t=>{const e=Wt(Ut(t));function n(t,e,n,i){const s=e.content.querySelectorAll("style"),r=E(e),o=function(t){let e=S(t);return e?k(e):[]}(n),a=e.content.firstElementChild;for(let n=0;n<o.length;n++){let s=o[n];s.textContent=t._processStyleText(s.textContent,i),e.content.insertBefore(s,a)}let l=0;for(let e=0;e<r.length;e++){let n=r[e],o=s[l];o!==n?(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)):l++,n.textContent=t._processStyleText(n.textContent,i)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,n)}return class extends e{static _finalizeClass(){var t;super._finalizeClass(),this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is&&(t=this.prototype,Xt.push(t));const e=((n=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",n))||(n.__ownObservers=n.hasOwnProperty(JSCompiler_renameProperty("observers",n))?n.observers:null),n.__ownObservers);var n;e&&this.createObservers(e,this._properties);let i=this.template;i&&("string"==typeof i?(console.error("template getter must return HTMLTemplateElement"),i=null):i=i.cloneNode(!0)),this.prototype._template=i}static createProperties(t){for(let r in t)e=this.prototype,n=r,i=t[r],s=t,i.computed&&(i.readOnly=!0),i.computed&&!e._hasReadOnlyEffect(n)&&e._createComputedProperty(n,i.computed,s),i.readOnly&&!e._hasReadOnlyEffect(n)&&e._createReadOnlyProperty(n,!i.computed),i.reflectToAttribute&&!e._hasReflectEffect(n)&&e._createReflectedProperty(n),i.notify&&!e._hasNotifyEffect(n)&&e._createNotifyingProperty(n),i.observer&&e._createPropertyObserver(n,i.observer,s[i.observer]),e._addPropertyToAttributeMap(n);var e,n,i,s}static createObservers(t,e){const n=this.prototype;for(let i=0;i<t.length;i++)n._createMethodObserver(t[i],e)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=L&&L.import(this.is,"template")||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=u(t.url);else{const t=L&&L.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){0,this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=_,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let n in e){let i=e[n];"value"in i&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[n]=i)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let n=t[e];if(!this.hasOwnProperty(e)){let t="function"==typeof n.value?n.value.call(this):n.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}static _processStyleText(t,e){return c(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const i=this.importPath;n(this,e,t,i?d(i):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){if(this.attachShadow)return t?(this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t),this.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=d(this.importPath)),d(t,e)}static _parseTemplateContent(t,e,n){return e.dynamicFns=e.dynamicFns||this._properties,super._parseTemplateContent(t,e,n)}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Xt=[];
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Jt{constructor(t){this.value=t.toString()}toString(){return this.value}}function Kt(t){if(t instanceof Jt)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const Zt=function(t,...e){const n=document.createElement("template");return n.innerHTML=e.reduce((e,n,i)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof Jt)return Kt(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(n)+t[i+1],t[0]),n},Qt=Gt(HTMLElement),te=!(window.ShadyDOM&&window.ShadyDOM.inUse);let ee;function ne(t){ee=(!t||!t.shimcssproperties)&&(te||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?ee=window.ShadyCSS.nativeCss:window.ShadyCSS?(ne(window.ShadyCSS),window.ShadyCSS=void 0):ne(window.WebComponents&&window.WebComponents.flags);const ie=ee;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class se{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function re(t){return function t(e,n){let i=n.substring(e.start,e.end-1);e.parsedCssText=e.cssText=i.trim();if(e.parent){let t=e.previous?e.previous.end:e.parent.start;i=n.substring(t,e.start-1),i=(i=(i=i.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],e=6-t.length;for(;e--;)t="0"+t;return"\\"+t})).replace(de.multipleSpaces," ")).substring(i.lastIndexOf(";")+1);let s=e.parsedSelector=e.selector=i.trim();e.atRule=0===s.indexOf(pe),e.atRule?0===s.indexOf(ue)?e.type=ae.MEDIA_RULE:s.match(de.keyframesRule)&&(e.type=ae.KEYFRAMES_RULE,e.keyframesName=e.selector.split(de.multipleSpaces).pop()):0===s.indexOf(ce)?e.type=ae.MIXIN_RULE:e.type=ae.STYLE_RULE}let s=e.rules;if(s)for(let e,i=0,r=s.length;i<r&&(e=s[i]);i++)t(e,n);return e}(function(t){let e=new se;e.start=0,e.end=t.length;let n=e;for(let i=0,s=t.length;i<s;i++)if(t[i]===le){n.rules||(n.rules=[]);let t=n,e=t.rules[t.rules.length-1]||null;(n=new se).start=i+1,n.parent=t,n.previous=e,t.rules.push(n)}else t[i]===he&&(n.end=i+1,n=n.parent||e);return e}(t=t.replace(de.comments,"").replace(de.port,"")),t)}function oe(t,e,n=""){let i="";if(t.cssText||t.rules){let n=t.rules;if(n&&!function(t){let e=t[0];return Boolean(e)&&Boolean(e.selector)&&0===e.selector.indexOf(ce)}(n))for(let t,s=0,r=n.length;s<r&&(t=n[s]);s++)i=oe(t,e,i);else(i=(i=e?t.cssText:function(t){return function(t){return t.replace(de.mixinApply,"").replace(de.varApply,"")}(t=function(t){return t.replace(de.customProp,"").replace(de.mixinProp,"")}(t))}(t.cssText)).trim())&&(i="  "+i+"\n")}return i&&(t.selector&&(n+=t.selector+" "+le+"\n"),n+=i,t.selector&&(n+=he+"\n\n")),n}const ae={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},le="{",he="}",de={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},ce="--",ue="@media",pe="@",_e=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,fe=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,me=/@media\s(.*)/,ye=new Set,ge="shady-unscoped";function be(t){const e=t.textContent;if(!ye.has(e)){ye.add(e);const n=t.cloneNode(!0);document.head.appendChild(n)}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function we(t,e){return t?("string"==typeof t&&(t=re(t)),e&&Ce(t,e),oe(t,ie)):""}function ve(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=re(t.textContent)),t.__cssRules||null}function Ce(t,e,n,i){if(!t)return;let s=!1,r=t.type;if(i&&r===ae.MEDIA_RULE){let e=t.selector.match(me);e&&(window.matchMedia(e[1]).matches||(s=!0))}r===ae.STYLE_RULE?e(t):n&&r===ae.KEYFRAMES_RULE?n(t):r===ae.MIXIN_RULE&&(s=!0);let o=t.rules;if(o&&!s)for(let t,s=0,r=o.length;s<r&&(t=o[s]);s++)Ce(t,e,n,i)}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function Se(t,e){for(let n in e)null===n?t.style.removeProperty(n):t.style.setProperty(n,e[n])}function xe(t,e){const n=window.getComputedStyle(t).getPropertyValue(e);return n?n.trim():""}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Te=/;\s*/m,Pe=/^\s*(initial)|(inherit)\s*$/,Ee=/\s*!important/,ke="_-_";class Oe{constructor(){this._map={}}set(t,e){t=t.trim(),this._map[t]={properties:e,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Ne=null;class Re{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Oe}detectMixin(t){return function(t){const e=fe.test(t)||_e.test(t);return fe.lastIndex=0,_e.lastIndex=0,e}(t)}gatherStyles(t){const e=function(t){const e=[],n=t.querySelectorAll("style");for(let t=0;t<n.length;t++){const i=n[t];i.hasAttribute(ge)?te||(be(i),i.parentNode.removeChild(i)):(e.push(i.textContent),i.parentNode.removeChild(i))}return e.join("").trim()}(t.content);if(e){const n=document.createElement("style");return n.textContent=e,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,e){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,e):null}transformStyle(t,e=""){let n=ve(t);return this.transformRules(n,e),t.textContent=we(n),n}transformCustomStyle(t){let e=ve(t);return Ce(e,t=>{":root"===t.selector&&(t.selector="html"),this.transformRule(t)}),t.textContent=we(e),e}transformRules(t,e){this._currentElement=e,Ce(t,t=>{this.transformRule(t)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t){return t=t.replace(_e,(t,e,n,i)=>this._produceCssProperties(t,e,n,i)),this._consumeCssProperties(t)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_consumeCssProperties(t){let e=null;for(;e=fe.exec(t);){let n=e[0],i=e[1],s=e.index,r=s+n.indexOf("@apply"),o=s+n.length,a=t.slice(0,r),l=t.slice(o),h=this._cssTextToMap(a),d=this._atApplyToCssProperties(i,h);t=`${a}${d}${l}`,fe.lastIndex=s+d.length}return t}_atApplyToCssProperties(t,e){t=t.replace(Te,"");let n=[],i=this._map.get(t);if(i||(this._map.set(t,{}),i=this._map.get(t)),i){let s,r,o;this._currentElement&&(i.dependants[this._currentElement]=!0);const a=i.properties;for(s in a)o=e&&e[s],r=[s,": var(",t,ke,s],o&&r.push(",",o.replace(Ee,"")),r.push(")"),Ee.test(a[s])&&r.push(" !important"),n.push(r.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,e){let n=Pe.exec(e);return n&&(e=n[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),e}_cssTextToMap(t){let e,n,i=t.split(";"),s={};for(let t,r,o=0;o<i.length;o++)(t=i[o])&&(r=t.split(":")).length>1&&(e=r[0].trim(),n=this._replaceInitialOrInherit(e,r.slice(1).join(":")),s[e]=n);return s}_invalidateMixinEntry(t){if(Ne)for(let e in t.dependants)e!==this._currentElement&&Ne(e)}_produceCssProperties(t,e,n,i){if(n&&function t(e,n){let i=e.indexOf("var(");if(-1===i)return n(e,"","","");let s=function(t,e){let n=0;for(let i=e,s=t.length;i<s;i++)if("("===t[i])n++;else if(")"===t[i]&&0==--n)return i;return-1}(e,i+3),r=e.substring(i+4,s),o=e.substring(0,i),a=t(e.substring(s+1),n),l=r.indexOf(",");return-1===l?n(o,r.trim(),"",a):n(o,r.substring(0,l).trim(),r.substring(l+1).trim(),a)}(n,(t,e)=>{e&&this._map.get(e)&&(i=`@apply ${e};`)}),!i)return t;let s=this._consumeCssProperties(""+i),r=t.slice(0,t.indexOf("--")),o=this._cssTextToMap(s),a=o,l=this._map.get(e),h=l&&l.properties;h?a=Object.assign(Object.create(h),o):this._map.set(e,a);let d,c,u=[],p=!1;for(d in a)void 0===(c=o[d])&&(c="initial"),!h||d in h||(p=!0),u.push(`${e}${ke}${d}: ${c}`);return p&&this._invalidateMixinEntry(l),l&&(l.properties=a),n&&(r=`${t};${r}`),`${r}${u.join("; ")};`}}Re.prototype.detectMixin=Re.prototype.detectMixin,Re.prototype.transformStyle=Re.prototype.transformStyle,Re.prototype.transformCustomStyle=Re.prototype.transformCustomStyle,Re.prototype.transformRules=Re.prototype.transformRules,Re.prototype.transformRule=Re.prototype.transformRule,Re.prototype.transformTemplate=Re.prototype.transformTemplate,Re.prototype._separator=ke,Object.defineProperty(Re.prototype,"invalidCallback",{get:()=>Ne,set(t){Ne=t}});var Ae=Re;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var Le={};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ie="_applyShimCurrentVersion",De="_applyShimNextVersion",Me="_applyShimValidatingVersion",Fe=Promise.resolve();function He(t){let e=Le[t];e&&function(t){t[Ie]=t[Ie]||0,t[Me]=t[Me]||0,t[De]=(t[De]||0)+1}(e)}function ze(t){return t[Ie]===t[De]}function Be(t){return!ze(t)&&t[Me]===t[De]}function qe(t){t[Me]=t[De],t._validating||(t._validating=!0,Fe.then(function(){t[Ie]=t[De],t._validating=!1}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let je,$e=null,Ye=window.HTMLImports&&window.HTMLImports.whenReady||null;function Ue(t){requestAnimationFrame(function(){Ye?Ye(t):($e||($e=new Promise(t=>{je=t}),"complete"===document.readyState?je():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&je()})),$e.then(function(){t&&t()}))})}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ve="__seenByShadyCSS",We="__shadyCSSCachedStyle";let Ge=null,Xe=null;class Je{constructor(){this.customStyles=[],this.enqueued=!1,Ue(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&Xe&&(this.enqueued=!0,Ue(Xe))}addCustomStyle(t){t[Ve]||(t[Ve]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[We])return t[We];let e;return e=t.getStyle?t.getStyle():t}processStyles(){const t=this.customStyles;for(let e=0;e<t.length;e++){const n=t[e];if(n[We])continue;const i=this.getStyleForCustomStyle(n);if(i){const t=i.__appliedElement||i;Ge&&Ge(t),n[We]=t}}return t}}Je.prototype.addCustomStyle=Je.prototype.addCustomStyle,Je.prototype.getStyleForCustomStyle=Je.prototype.getStyleForCustomStyle,Je.prototype.processStyles=Je.prototype.processStyles,Object.defineProperties(Je.prototype,{transformCallback:{get:()=>Ge,set(t){Ge=t}},validateCallback:{get:()=>Xe,set(t){let e=!1;Xe||(e=!0),Xe=t,e&&this.enqueueDocumentValidation()}}});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ke=new Ae;if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new class{constructor(){this.customStyleInterface=null,Ke.invalidCallback=He}ensure(){this.customStyleInterface||(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface&&(this.customStyleInterface.transformCallback=(t=>{Ke.transformCustomStyle(t)}),this.customStyleInterface.validateCallback=(()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})))}prepareTemplate(t,e){this.ensure(),Le[e]=t;let n=Ke.transformTemplate(t,e);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let e=0;e<t.length;e++){let n=t[e],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&Ke.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,e){if(this.ensure(),e&&Se(t,e),t.shadowRoot){this.styleElement(t);let e=t.shadowRoot.children||t.shadowRoot.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}else{let e=t.children||t.childNodes;for(let t=0;t<e.length;t++)this.styleSubtree(e[t])}}styleElement(t){this.ensure();let{is:e}=function(t){let e=t.localName,n="",i="";return e?e.indexOf("-")>-1?n=e:(i=e,n=t.getAttribute&&t.getAttribute("is")||""):(n=t.is,i=t.extends),{is:n,typeExtension:i}}(t),n=Le[e];if(n&&!ze(n)){Be(n)||(this.prepareTemplate(n,e),qe(n));let i=t.shadowRoot;if(i){let t=i.querySelector("style");t&&(t.__cssRules=n._styleAst,t.textContent=we(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}};let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,n,i){t.flushCustomStyles(),t.prepareTemplate(e,n)},styleSubtree(e,n){t.flushCustomStyles(),t.styleSubtree(e,n)},styleElement(e){t.flushCustomStyles(),t.styleElement(e)},styleDocument(e){t.flushCustomStyles(),t.styleDocument(e)},getComputedStyleValue:(t,e)=>xe(t,e),flushCustomStyles(){t.flushCustomStyles()},nativeCss:ie,nativeShadow:te},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=Ke;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ze=class t{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,this._callback()})}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,n,i){return e instanceof t?e.cancel():e=new t,e.setConfig(n,i),e}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Qe="string"==typeof document.head.style.touchAction,tn="__polymerGestures",en="__polymerGesturesHandled",nn="__polymerGesturesTouchAction",sn=2500,rn=["mousedown","mousemove","mouseup","click"],on=[0,1,4,2],an=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function ln(t){return rn.indexOf(t)>-1}let hn=!1;function dn(t){if(!ln(t)&&"touchend"!==t)return Qe&&hn&&m?{passive:!0}:void 0}!function(){try{let t=Object.defineProperty({},"passive",{get(){hn=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();let cn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),un=function(){};un.prototype.reset,un.prototype.mousedown,un.prototype.mousemove,un.prototype.mouseup,un.prototype.touchstart,un.prototype.touchmove,un.prototype.touchend,un.prototype.click;const pn=[],_n={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0};function fn(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];let n=t.getRootNode();if(t.id){let i=n.querySelectorAll(`label[for = ${t.id}]`);for(let t=0;t<i.length;t++)e.push(i[t])}}return e}let mn=function(t){let e=t.sourceCapabilities;var n;if((!e||e.firesTouchEvents)&&(t[en]={skip:!0},"click"===t.type)){let e=!1,i=t.composedPath&&t.composedPath();if(i)for(let t=0;t<i.length;t++){if(i[t].nodeType===Node.ELEMENT_NODE)if("label"===i[t].localName)pn.push(i[t]);else if(n=i[t],_n[n.localName]){let n=fn(i[t]);for(let t=0;t<n.length;t++)e=e||pn.indexOf(n[t])>-1}if(i[t]===bn.mouse.target)return}if(e)return;t.preventDefault(),t.stopPropagation()}};function yn(t){let e=cn?["click"]:rn;for(let n,i=0;i<e.length;i++)n=e[i],t?(pn.length=0,document.addEventListener(n,mn,!0)):document.removeEventListener(n,mn,!0)}function gn(t){let e=t.type;if(!ln(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!an&&(e=on[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}let bn={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function wn(t,e,n){t.movefn=e,t.upfn=n,document.addEventListener("mousemove",e),document.addEventListener("mouseup",n)}function vn(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",function(t){bn.mouse.mouseIgnoreJob||yn(!0),bn.mouse.target=t.composedPath()[0],bn.mouse.mouseIgnoreJob=Ze.debounce(bn.mouse.mouseIgnoreJob,Q.after(sn),function(){yn(),bn.mouse.target=null,bn.mouse.mouseIgnoreJob=null})},!!hn&&{passive:!0});const Cn={},Sn=[];function xn(t,e){let n=document.elementFromPoint(t,e),i=n;for(;i&&i.shadowRoot&&!window.ShadyDOM;){if(i===(i=i.shadowRoot.elementFromPoint(t,e)))break;i&&(n=i)}return n}function Tn(t){if(t.composedPath){const e=t.composedPath();return e.length>0?e[0]:t.target}return t.target}function Pn(t){let e,n=t.type,i=t.currentTarget[tn];if(!i)return;let s=i[n];if(s){if(!t[en]&&(t[en]={},"touch"===n.slice(0,5))){let e=(t=t).changedTouches[0];if("touchstart"===n&&1===t.touches.length&&(bn.touch.id=e.identifier),bn.touch.id!==e.identifier)return;Qe||"touchstart"!==n&&"touchmove"!==n||function(t){let e=t.changedTouches[0],n=t.type;if("touchstart"===n)bn.touch.x=e.clientX,bn.touch.y=e.clientY,bn.touch.scrollDecided=!1;else if("touchmove"===n){if(bn.touch.scrollDecided)return;bn.touch.scrollDecided=!0;let n=function(t){let e="auto",n=t.composedPath&&t.composedPath();if(n)for(let t,i=0;i<n.length;i++)if((t=n[i])[nn]){e=t[nn];break}return e}(t),i=!1,s=Math.abs(bn.touch.x-e.clientX),r=Math.abs(bn.touch.y-e.clientY);t.cancelable&&("none"===n?i=!0:"pan-x"===n?i=r>s:"pan-y"===n&&(i=s>r)),i?t.preventDefault():i("track")}}(t)}if(!(e=t[en]).skip){for(let n,i=0;i<Sn.length;i++)s[(n=Sn[i]).name]&&!e[n.name]&&n.flow&&n.flow.start.indexOf(t.type)>-1&&n.reset&&n.reset();for(let i,r=0;r<Sn.length;r++)s[(i=Sn[r]).name]&&!e[i.name]&&(e[i.name]=!0,i[n](t))}}}function En(t,e,n){return!!Cn[e]&&(function(t,e,n){let i=Cn[e],s=i.deps,r=i.name,o=t[tn];o||(t[tn]=o={});for(let e,n,i=0;i<s.length;i++)e=s[i],cn&&ln(e)&&"click"!==e||((n=o[e])||(o[e]=n={_count:0}),0===n._count&&t.addEventListener(e,Pn,dn(e)),n[r]=(n[r]||0)+1,n._count=(n._count||0)+1);t.addEventListener(e,n),i.touchAction&&Nn(t,i.touchAction)}(t,e,n),!0)}function kn(t,e,n){return!!Cn[e]&&(function(t,e,n){let i=Cn[e],s=i.deps,r=i.name,o=t[tn];if(o)for(let e,n,i=0;i<s.length;i++)e=s[i],(n=o[e])&&n[r]&&(n[r]=(n[r]||1)-1,n._count=(n._count||1)-1,0===n._count&&t.removeEventListener(e,Pn,dn(e)));t.removeEventListener(e,n)}(t,e,n),!0)}function On(t){Sn.push(t);for(let e=0;e<t.emits.length;e++)Cn[t.emits[e]]=t}function Nn(t,e){Qe&&nt.run(()=>{t.style.touchAction=e}),t[nn]=e}function Rn(t,e,n){let i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=n,t.dispatchEvent(i),i.defaultPrevented){let t=n.preventer||n.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function An(t){let e=function(t){for(let e,n=0;n<Sn.length;n++){e=Sn[n];for(let n,i=0;i<e.emits.length;i++)if((n=e.emits[i])===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function Ln(){bn.mouse.mouseIgnoreJob&&bn.mouse.mouseIgnoreJob.flush()}On({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){vn(this.info)},mousedown:function(t){if(!gn(t))return;let e=Tn(t),n=this;wn(this.info,function(t){gn(t)||(n._fire("up",e,t),vn(n.info))},function(t){gn(t)&&n._fire("up",e,t),vn(n.info)}),this._fire("down",e,t)},touchstart:function(t){this._fire("down",Tn(t),t.changedTouches[0],t)},touchend:function(t){this._fire("up",Tn(t),t.changedTouches[0],t)},_fire:function(t,e,n,i){Rn(e,t,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:i,prevent:function(t){return An(t)}})}}),On({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,vn(this.info)},hasMovedEnough:function(t,e){if(this.info.prevent)return!1;if(this.info.started)return!0;let n=Math.abs(this.info.x-t),i=Math.abs(this.info.y-e);return n>=5||i>=5},mousedown:function(t){if(!gn(t))return;let e=Tn(t),n=this,i=function(t){let i=t.clientX,s=t.clientY;n.hasMovedEnough(i,s)&&(n.info.state=n.info.started?"mouseup"===t.type?"end":"track":"start","start"===n.info.state&&An("tap"),n.info.addMove({x:i,y:s}),gn(t)||(n.info.state="end",vn(n.info)),n._fire(e,t),n.info.started=!0)};wn(this.info,i,function(t){n.info.started&&i(t),vn(n.info)}),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=Tn(t),n=t.changedTouches[0],i=n.clientX,s=n.clientY;this.hasMovedEnough(i,s)&&("start"===this.info.state&&An("tap"),this.info.addMove({x:i,y:s}),this._fire(e,n),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=Tn(t),n=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:n.clientX,y:n.clientY}),this._fire(e,n,t))},_fire:function(t,e){let n,i=this.info.moves[this.info.moves.length-2],s=this.info.moves[this.info.moves.length-1],r=s.x-this.info.x,o=s.y-this.info.y,a=0;i&&(n=s.x-i.x,a=s.y-i.y),Rn(t,"track",{state:this.info.state,x:e.clientX,y:e.clientY,dx:r,dy:o,ddx:n,ddy:a,sourceEvent:e,hover:function(){return xn(e.clientX,e.clientY)}})}}),On({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},save:function(t){this.info.x=t.clientX,this.info.y=t.clientY},mousedown:function(t){gn(t)&&this.save(t)},click:function(t){gn(t)&&this.forward(t)},touchstart:function(t){this.save(t.changedTouches[0],t)},touchend:function(t){this.forward(t.changedTouches[0],t)},forward:function(t,e){let n=Math.abs(t.clientX-this.info.x),i=Math.abs(t.clientY-this.info.y),s=Tn(e||t);s&&!s.disabled&&(isNaN(n)||isNaN(i)||n<=25&&i<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;let e=Tn(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let n=e.getBoundingClientRect(),i=t.pageX,s=t.pageY;return!(i>=n.left&&i<=n.right&&s>=n.top&&s<=n.bottom)}return!1}(t))&&(this.info.prevent||Rn(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}});const In=Tn,Dn=En,Mn=kn,Fn=r,Hn=b(t=>{return class extends t{_addEventListenerToNode(t,e,n){Fn.addListener(t,e,n)||super._addEventListenerToNode(t,e,n)}_removeEventListenerFromNode(t,e,n){Fn.removeListener(t,e,n)||super._removeEventListenerFromNode(t,e,n)}}}),zn=/:host\(:dir\((ltr|rtl)\)\)/g,Bn=':host([dir="$1"])',qn=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,jn=':host([dir="$2"]) $1',$n=[];let Yn=null,Un="";function Vn(){Un=document.documentElement.getAttribute("dir")}function Wn(t){if(!t.__autoDirOptOut){t.setAttribute("dir",Un)}}function Gn(){Vn(),Un=document.documentElement.getAttribute("dir");for(let t=0;t<$n.length;t++)Wn($n[t])}const Xn=b(t=>{Yn||(Vn(),(Yn=new MutationObserver(Gn)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=lt(t);class n extends e{static _processStyleText(t,e){return t=super._processStyleText(t,e),t=this._replaceDirInCssText(t)}static _replaceDirInCssText(t){let e=t;return t!==(e=(e=e.replace(zn,Bn)).replace(qn,jn))&&(this.__activateDir=!0),e}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Yn&&Yn.takeRecords().length&&Gn(),$n.push(this),Wn(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const t=$n.indexOf(this);t>-1&&$n.splice(t,1)}}}return n.__activateDir=!1,n});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Jn=!1,Kn=[],Zn=[];function Qn(){Jn=!0,requestAnimationFrame(function(){Jn=!1,ti(Kn),setTimeout(function(){!function(t){for(let e=0,n=t.length;e<n;e++)ei(t.shift())}(Zn)})})}function ti(t){for(;t.length;)ei(t.shift())}function ei(t){const e=t[0],n=t[1],i=t[2];try{n.apply(e,i)}catch(t){setTimeout(()=>{throw t})}}function ni(t,e,n){Jn||Qn(),Zn.push([t,e,n])}n(2);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ii(t,e,n){return{index:t,removed:e,addedCount:n}}const si=0,ri=1,oi=2,ai=3;function li(t,e,n,i,s,r){let o,a=0,l=0,h=Math.min(n-e,r-s);if(0==e&&0==s&&(a=function(t,e,n){for(let i=0;i<n;i++)if(!di(t[i],e[i]))return i;return n}(t,i,h)),n==t.length&&r==i.length&&(l=function(t,e,n){let i=t.length,s=e.length,r=0;for(;r<n&&di(t[--i],e[--s]);)r++;return r}(t,i,h-a)),s+=a,r-=l,(n-=l)-(e+=a)==0&&r-s==0)return[];if(e==n){for(o=ii(e,[],0);s<r;)o.removed.push(i[s++]);return[o]}if(s==r)return[ii(e,[],n-e)];let d=function(t){let e=t.length-1,n=t[0].length-1,i=t[e][n],s=[];for(;e>0||n>0;){if(0==e){s.push(oi),n--;continue}if(0==n){s.push(ai),e--;continue}let r,o=t[e-1][n-1],a=t[e-1][n],l=t[e][n-1];(r=a<l?a<o?a:o:l<o?l:o)==o?(o==i?s.push(si):(s.push(ri),i=o),e--,n--):r==a?(s.push(ai),e--,i=a):(s.push(oi),n--,i=l)}return s.reverse(),s}(function(t,e,n,i,s,r){let o=r-s+1,a=n-e+1,l=new Array(o);for(let t=0;t<o;t++)l[t]=new Array(a),l[t][0]=t;for(let t=0;t<a;t++)l[0][t]=t;for(let n=1;n<o;n++)for(let r=1;r<a;r++)if(di(t[e+r-1],i[s+n-1]))l[n][r]=l[n-1][r-1];else{let t=l[n-1][r]+1,e=l[n][r-1]+1;l[n][r]=t<e?t:e}return l}(t,e,n,i,s,r));o=void 0;let c=[],u=e,p=s;for(let t=0;t<d.length;t++)switch(d[t]){case si:o&&(c.push(o),o=void 0),u++,p++;break;case ri:o||(o=ii(u,[],0)),o.addedCount++,u++,o.removed.push(i[p]),p++;break;case oi:o||(o=ii(u,[],0)),o.addedCount++,u++;break;case ai:o||(o=ii(u,[],0)),o.removed.push(i[p]),p++}return o&&c.push(o),c}function hi(t,e){return li(t,0,t.length,e,0,e.length)}function di(t,e){return t===e}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ci(t){return"slot"===t.localName}class ui{static getFlattenedNodes(t){return ci(t)?(t=t).assignedNodes({flatten:!0}):Array.from(t.childNodes).map(t=>ci(t)?(t=t).assignedNodes({flatten:!0}):[t]).reduce((t,e)=>t.concat(e),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=(()=>{this._schedule()}),this.connect(),this._schedule()}connect(){ci(this._target)?this._listenSlots([this._target]):this._target.children&&(this._listenSlots(this._target.children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ci(this._target)?this._unlistenSlots([this._target]):this._target.children&&(this._unlistenSlots(this._target.children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,nt.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let n=t[e];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),n=hi(e,this._effectiveNodes);for(let e,i=0;i<n.length&&(e=n[i]);i++)for(let n,i=0;i<e.removed.length&&(n=e.removed[i]);i++)t.removedNodes.push(n);for(let i,s=0;s<n.length&&(i=n[s]);s++)for(let n=i.index;n<i.index+i.addedCount;n++)t.addedNodes.push(e[n]);this._effectiveNodes=e;let i=!1;return(t.addedNodes.length||t.removedNodes.length)&&(i=!0,this.callback.call(this._target,t)),i}_listenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];ci(n)&&n.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let n=t[e];ci(n)&&n.removeEventListener("slotchange",this._boundSchedule)}}}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let pi=[];const _i=function(t){pi.push(t)};function fi(){const t=Boolean(pi.length);for(;pi.length;)try{pi.shift().flush()}catch(t){setTimeout(()=>{throw t})}return t}const mi=function(){let t,e;do{t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=fi()}while(t||e)},yi=Element.prototype,gi=yi.matches||yi.matchesSelector||yi.mozMatchesSelector||yi.msMatchesSelector||yi.oMatchesSelector||yi.webkitMatchesSelector,bi=function(t,e){return gi.call(t,e)};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class wi{constructor(t){this.node=t}observeNodes(t){return new ui(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(this.node.contains(t))return!0;let e=t,n=t.ownerDocument;for(;e&&e!==n&&e!==this.node;)e=e.parentNode||e.host;return e===this.node}getOwnerRoot(){return this.node.getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?this.node.assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],e=this.node.assignedSlot;for(;e;)t.push(e),e=e.assignedSlot;return t}importNode(t,e){return(this.node instanceof Document?this.node:this.node.ownerDocument).importNode(t,e)}getEffectiveChildNodes(){return ui.getFlattenedNodes(this.node)}queryDistributedElements(t){let e=this.getEffectiveChildNodes(),n=[];for(let i,s=0,r=e.length;s<r&&(i=e[s]);s++)i.nodeType===Node.ELEMENT_NODE&&bi(i,t)&&n.push(i);return n}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}!function(t,e){for(let n=0;n<e.length;n++){let i=e[n];t[i]=function(){return this.node[i].apply(this.node,arguments)}}}(wi.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),function(t,e){for(let n=0;n<e.length;n++){let i=e[n];Object.defineProperty(t,i,{get:function(){return this.node[i]},configurable:!0})}}(wi.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(t,e){for(let n=0;n<e.length;n++){let i=e[n];Object.defineProperty(t,i,{get:function(){return this.node[i]},set:function(t){this.node[i]=t},configurable:!0})}}(wi.prototype,["textContent","innerHTML"]);wi.prototype.cloneNode,wi.prototype.appendChild,wi.prototype.insertBefore,wi.prototype.removeChild,wi.prototype.replaceChild,wi.prototype.setAttribute,wi.prototype.removeAttribute,wi.prototype.querySelector,wi.prototype.querySelectorAll;const vi=function(t){if(!(t=t||document).__domApi){let e;e=t instanceof Event?new class{constructor(t){this.event=t}get rootTarget(){return this.event.composedPath()[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}(t):new wi(t),t.__domApi=e}return t.__domApi};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ci=window.ShadyCSS;const Si=b(t=>{const e=Xn(Hn(Gt(t))),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class i extends e{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this._applyListeners()}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(t,e,n,i){e!==n&&(super.attributeChangedCallback(t,e,n,i),this.attributeChanged(t,e,n))}attributeChanged(t,e,n){}_initializeProperties(){let t=Object.getPrototypeOf(this);t.hasOwnProperty("__hasRegisterFinished")||(t.__hasRegisterFinished=!0,this._registered()),super._initializeProperties(),this.root=this,this.created()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(t){return this._serializeValue(t)}deserialize(t,e){return this._deserializeValue(t,e)}reflectPropertyToAttribute(t,e,n){this._propertyToAttribute(t,e,n)}serializeValueToAttribute(t,e,n){this._valueToNodeAttribute(n||this,t,e)}extend(t,e){if(!t||!e)return t||e;let n=Object.getOwnPropertyNames(e);for(let i,s=0;s<n.length&&(i=n[s]);s++){let n=Object.getOwnPropertyDescriptor(e,i);n&&Object.defineProperty(t,i,n)}return t}mixin(t,e){for(let n in e)t[n]=e[n];return t}chainObject(t,e){return t&&e&&t!==e&&(t.__proto__=e),t}instanceTemplate(t){let e=this.constructor._contentForTemplate(t);return document.importNode(e,!0)}fire(t,e,n){n=n||{},e=null===e||void 0===e?{}:e;let i=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return i.detail=e,(n.node||this).dispatchEvent(i),i}listen(t,e,n){t=t||this;let i=this.__boundListeners||(this.__boundListeners=new WeakMap),s=i.get(t);s||(s={},i.set(t,s));let r=e+n;s[r]||(s[r]=this._addMethodEventListenerToNode(t,e,n,this))}unlisten(t,e,n){t=t||this;let i=this.__boundListeners&&this.__boundListeners.get(t),s=e+n,r=i&&i[s];r&&(this._removeEventListenerFromNode(t,e,r),i[s]=null)}setScrollDirection(t,e){Nn(e||this,n[t]||"auto")}$$(t){return this.root.querySelector(t)}get domHost(){let t=this.getRootNode();return t instanceof DocumentFragment?t.host:t}distributeContent(){window.ShadyDOM&&this.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return vi(this).getEffectiveChildNodes()}queryDistributedElements(t){return vi(this).queryDistributedElements(t)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let t=this.getEffectiveChildNodes(),e=[];for(let n,i=0;n=t[i];i++)n.nodeType!==Node.COMMENT_NODE&&e.push(n.textContent);return e.join("")}queryEffectiveChildren(t){let e=this.queryDistributedElements(t);return e&&e[0]}queryAllEffectiveChildren(t){return this.queryDistributedElements(t)}getContentChildNodes(t){let e=this.root.querySelector(t||"slot");return e?vi(e).getDistributedNodes():[]}getContentChildren(t){return this.getContentChildNodes(t).filter(function(t){return t.nodeType===Node.ELEMENT_NODE})}isLightDescendant(t){return this!==t&&this.contains(t)&&this.getRootNode()===t.getRootNode()}isLocalDescendant(t){return this.root===t.getRootNode()}scopeSubtree(t,e){}getComputedStyleValue(t){return Ci.getComputedStyleValue(this,t)}debounce(t,e,n){return this._debouncers=this._debouncers||{},this._debouncers[t]=Ze.debounce(this._debouncers[t],n>0?Q.after(n):nt,e.bind(this))}isDebouncerActive(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];return!(!e||!e.isActive())}flushDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.flush()}cancelDebouncer(t){this._debouncers=this._debouncers||{};let e=this._debouncers[t];e&&e.cancel()}async(t,e){return e>0?Q.run(t.bind(this),e):~nt.run(t.bind(this))}cancelAsync(t){t<0?nt.cancel(~t):Q.cancel(t)}create(t,e){let n=document.createElement(t);if(e)if(n.setProperties)n.setProperties(e);else for(let t in e)n[t]=e[t];return n}elementMatches(t,e){return bi(e||this,t)}toggleAttribute(t,e,n){n=n||this,1==arguments.length&&(e=!n.hasAttribute(t)),e?n.setAttribute(t,""):n.removeAttribute(t)}toggleClass(t,e,n){n=n||this,1==arguments.length&&(e=!n.classList.contains(t)),e?n.classList.add(t):n.classList.remove(t)}transform(t,e){(e=e||this).style.webkitTransform=t,e.style.transform=t}translate3d(t,e,n,i){i=i||this,this.transform("translate3d("+t+","+e+","+n+")",i)}arrayDelete(t,e){let n;if(Array.isArray(t)){if((n=t.indexOf(e))>=0)return t.splice(n,1)}else{if((n=q(this,t).indexOf(e))>=0)return this.splice(t,n,1)}return null}_logger(t,e){switch(Array.isArray(e)&&1===e.length&&Array.isArray(e[0])&&(e=e[0]),t){case"log":case"warn":case"error":console[t](...e)}}_log(...t){this._logger("log",t)}_warn(...t){this._logger("warn",t)}_error(...t){this._logger("error",t)}_logf(t,...e){return["[%s::%s]",this.is,t,...e]}}return i.prototype.is="",i});
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let xi={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0};function Ti(t,e){if(!t)return e=e;e=Si(e),Array.isArray(t)||(t=[t]);let n=e.prototype.behaviors;return e=function t(e,n){for(let i=0;i<e.length;i++){let s=e[i];s&&(n=Array.isArray(s)?t(s,n):Pi(s,n))}return n}(t=function t(e,n,i){n=n||[];for(let s=e.length-1;s>=0;s--){let r=e[s];r?Array.isArray(r)?t(r,n):n.indexOf(r)<0&&(!i||i.indexOf(r)<0)&&n.unshift(r):console.warn("behavior is null, check for missing or 404 import")}return n}(t,null,n),e),n&&(t=n.concat(t)),e.prototype.behaviors=t,e}function Pi(t,e){class n extends e{static get properties(){return t.properties}static get observers(){return t.observers}static get template(){return t._template||L&&L.import(this.is,"template")||e.template||this.prototype._template||null}created(){super.created(),t.created&&t.created.call(this)}_registered(){super._registered(),t.beforeRegister&&t.beforeRegister.call(Object.getPrototypeOf(this)),t.registered&&t.registered.call(Object.getPrototypeOf(this))}_applyListeners(){if(super._applyListeners(),t.listeners)for(let e in t.listeners)this._addMethodEventListenerToNode(this,e,t.listeners[e])}_ensureAttributes(){if(t.hostAttributes)for(let e in t.hostAttributes)this._ensureAttribute(e,t.hostAttributes[e]);super._ensureAttributes()}ready(){super.ready(),t.ready&&t.ready.call(this)}attached(){super.attached(),t.attached&&t.attached.call(this)}detached(){super.detached(),t.detached&&t.detached.call(this)}attributeChanged(e,n,i){super.attributeChanged(e,n,i),t.attributeChanged&&t.attributeChanged.call(this,e,n,i)}}n.generatedFrom=t;for(let e in t)if(!(e in xi)){let i=Object.getOwnPropertyDescriptor(t,e);i&&Object.defineProperty(n.prototype,e,i)}return n}const Ei=function(t){let e;return e="function"==typeof t?t:Ei.Class(t),customElements.define(e.is,e),e};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function ki(t,e,n,i,s){let r;s&&(r="object"==typeof n&&null!==n)&&(i=t.__dataTemp[e]);let o=i!==n&&(i==i||n==n);return r&&o&&(t.__dataTemp[e]=n),o}Ei.Class=function(t){t||console.warn("Polymer's Class function requires `info` argument");let e=Pi(t,t.behaviors?Ti(t.behaviors,HTMLElement):Si(HTMLElement));return e.is=t.is,e};const Oi=b(t=>{return class extends t{_shouldPropertyChange(t,e,n){return ki(this,t,e,n,!0)}}}),Ni=b(t=>{return class extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,e,n){return ki(this,t,e,n,this.mutableData)}}});Oi._mutablePropertyChange=ki;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Ri=null;function Ai(){return Ri}Ai.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Ai,writable:!0}});const Li=Ut(Ai),Ii=Oi(Li);const Di=Ut(class{});class Mi extends Di{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=this.children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)e.push(t),t.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let e in t)this._setPendingProperty(e,t[e])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,t=>{t.model=this,n(t)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,e,n)}}_showHideChildren(t){let e=this.children;for(let n=0;n<e.length;n++){let i=e[n];if(Boolean(t)!=Boolean(i.__hideTemplateChildren__))if(i.nodeType===Node.TEXT_NODE)t?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if("slot"===i.localName)if(t)i.__polymerReplaced__=document.createComment("hidden-slot"),i.parentNode.replaceChild(i.__polymerReplaced__,i);else{const t=i.__polymerReplaced__;t&&t.parentNode.replaceChild(i,t)}else i.style&&(t?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=t,i._showHideChildren&&i._showHideChildren(t)}}_setUnmanagedPropertyToNode(t,e,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==e?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,e,n)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do{t=t.__dataHost.__dataHost}while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}Mi.prototype.__dataHost,Mi.prototype.__templatizeOptions,Mi.prototype._methodHost,Mi.prototype.__templatizeOwner,Mi.prototype.__hostProps;const Fi=Oi(Mi);function Hi(t,e,n){let i=n.mutableData?Fi:Mi,s=class extends i{};return s.prototype.__templatizeOptions=n,s.prototype._bindTemplate(t),function(t,e,n,i){let s=n.hostProps||{};for(let e in i.instanceProps){delete s[e];let n=i.notifyInstanceProp;n&&t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:qi(e,n)})}if(i.forwardHostProp&&e.__dataHost)for(let e in s)t.prototype._addPropertyEffect(e,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,e,n){t.__dataHost._setPendingPropertyOrPath("_host_"+e,n[e],!0,!0)}})}(s,t,e,n),s}function zi(t,e,n){let i=n.forwardHostProp;if(i){let s=e.templatizeTemplateClass;if(!s){let t=n.mutableData?Ii:Li;s=e.templatizeTemplateClass=class extends t{};let r=e.hostProps;for(let t in r)s.prototype._addPropertyEffect("_host_"+t,s.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Bi(t,i)}),s.prototype._createNotifyingProperty("_host_"+t)}!function(t,e){Ri=t,Object.setPrototypeOf(t,e.prototype),new e,Ri=null}(t,s),t.__dataProto&&Object.assign(t.__data,t.__dataProto),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties()}}function Bi(t,e){return function(t,n,i){e.call(t.__templatizeOwner,n.substring("_host_".length),i[n])}}function qi(t,e){return function(t,n,i){e.call(t.__templatizeOwner,t,n,i[n])}}function ji(t,e,n){if(n=n||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let i=(e?e.constructor:Mi)._parseTemplate(t),s=i.templatizeInstanceClass;s||(s=Hi(t,i,n),i.templatizeInstanceClass=s),zi(t,i,n);let r=class extends s{};return r.prototype._methodHost=function(t){let e=t.__dataHost;return e&&e._methodHost||e}(t),r.prototype.__dataHost=t,r.prototype.__templatizeOwner=e,r.prototype.__hostProps=i.hostProps,r=r}function $i(t,e){let n;for(;e;)if(n=e.__templatizeInstance){if(n.__dataHost==t)return n;e=n.__dataHost}else e=e.parentNode;return null}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yi=Hn(Ni(Ut(HTMLElement)));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/customElements.define("dom-bind",class extends Yi{static get observedAttributes(){return["mutable-data"]}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){this.parentNode.insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(!(t=t||this.querySelector("template"))){let e=new MutationObserver(()=>{if(!(t=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");e.disconnect(),this.render()});return void e.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let t=this.root.firstChild;t;t=t.nextSibling)this.__children[this.__children.length]=t;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});const Ui=Ni(Qt);class Vi extends Ui{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let t=this.parentNode;for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t)}}__ensureTemplatized(){if(!this.__ctor){let t=this.template=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}let e={};e[this.as]=!0,e[this.indexAs]=!0,e[this.itemsIndexAs]=!0,this.__ctor=ji(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:e,forwardHostProp:function(t,e){let n=this.__instances;for(let i,s=0;s<n.length&&(i=n[s]);s++)i.forwardHostProp(t,e)},notifyInstanceProp:function(t,e,n){if((i=this.as)===(s=e)||M(i,s)||F(i,s)){let i=t[this.itemsIndexAs];e==this.as&&(this.items[i]=n);let s=H(this.as,"items."+i,e);this.notifyPath(s,n)}var i,s}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let e=t,n=this.__getMethodHost();return function(){return n[e].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let t=performance.now(),e=this._targetFrameTime/(t-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*e)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=t,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let e=this.__observePaths;for(let n=0;n<e.length;n++)0===t.indexOf(e[n])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__debounceRender(t,e=0){this.__renderDebouncer=Ze.debounce(this.__renderDebouncer,e>0?Q.after(e):nt,t.bind(this)),_i(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),mi()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let t=this.items||[],e=new Array(t.length);for(let n=0;n<t.length;n++)e[n]=n;this.__filterFn&&(e=e.filter((e,n,i)=>this.__filterFn(t[e],n,i))),this.__sortFn&&e.sort((e,n)=>this.__sortFn(t[e],t[n]));const n=this.__itemsIdxToInstIdx={};let i=0;const s=Math.min(e.length,this.__limit);for(;i<s;i++){let s=this.__instances[i],r=e[i],o=t[r];n[r]=i,s?(s._setPendingProperty(this.as,o),s._setPendingProperty(this.indexAs,i),s._setPendingProperty(this.itemsIndexAs,r),s._flushProperties()):this.__insertInstance(o,i,r)}for(let t=this.__instances.length-1;t>=i;t--)this.__detachAndRemoveInstance(t)}__detachInstance(t){let e=this.__instances[t];for(let t=0;t<e.children.length;t++){let n=e.children[t];e.root.appendChild(n)}return e}__attachInstance(t,e){let n=this.__instances[t];e.insertBefore(n.root,this)}__detachAndRemoveInstance(t){let e=this.__detachInstance(t);e&&this.__pool.push(e),this.__instances.splice(t,1)}__stampInstance(t,e,n){let i={};return i[this.as]=t,i[this.indexAs]=e,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(t,e,n){let i=this.__pool.pop();i?(i._setPendingProperty(this.as,t),i._setPendingProperty(this.indexAs,e),i._setPendingProperty(this.itemsIndexAs,n),i._flushProperties()):i=this.__stampInstance(t,e,n);let s=this.__instances[e+1],r=s?s.children[0]:this;return this.parentNode.insertBefore(i.root,r),this.__instances[e]=i,i}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let n=t.slice(6),i=n.indexOf("."),s=i<0?n:n.substring(0,i);if(s==parseInt(s,10)){let t=i<0?"":n.substring(i+1);this.__handleObservedPaths(t);let r=this.__itemsIdxToInstIdx[s],o=this.__instances[r];if(o){let n=this.as+(t?"."+t:"");o._setPendingPropertyOrPath(n,e,!1,!0),o._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return $i(this.template,t)}}customElements.define(Vi.is,Vi);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class Wi extends Qt{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null}__debounceRender(){this.__renderDebouncer=Ze.debounce(this.__renderDebouncer,nt,()=>this.__render()),_i(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback(),this.parentNode&&(this.parentNode.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||this.parentNode.host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){mi()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let t=this.parentNode;if(t){if(!this.__ctor){let t=this.querySelector("template");if(!t){let t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-if requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}this.__ctor=ji(t,this,{mutableData:!0,forwardHostProp:function(t,e){this.__instance&&(this.if?this.__instance.forwardHostProp(t,e):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[D(t)]=!0))}})}if(this.__instance){this.__syncHostProperties();let e=this.__instance.children;if(e&&e.length){if(this.previousSibling!==e[e.length-1])for(let n,i=0;i<e.length&&(n=e[i]);i++)t.insertBefore(n,this)}}else this.__instance=new this.__ctor,t.insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){let t=this.__invalidProps;if(t){for(let e in t)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let e=t[0].parentNode;for(let n,i=0;i<t.length&&(n=t[i]);i++)e.removeChild(n)}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let t=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(t)}}customElements.define(Wi.is,Wi);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Gi=b(t=>{let e=Gt(t);return class extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(t,e){let n=e.path;if("items"==n){let n=e.base||[],i=this.__lastItems;if(t!==this.__lastMulti&&this.clearSelection(),i){let t=hi(n,i);this.__applySplices(t)}this.__lastItems=n,this.__lastMulti=t}else if("items.splices"==e.path)this.__applySplices(e.value.indexSplices);else{let t=n.slice("items.".length),e=parseInt(t,10);t.indexOf(".")<0&&t==e&&this.__deselectChangedIdx(e)}}__applySplices(t){let e=this.__selectedMap;for(let n=0;n<t.length;n++){let i=t[n];e.forEach((t,n)=>{t<i.index||(t>=i.index+i.removed.length?e.set(n,t+i.addedCount-i.removed.length):e.set(n,-1))});for(let t=0;t<i.addedCount;t++){let n=i.index+t;e.has(this.items[n])&&e.set(this.items[n],n)}}this.__updateLinks();let n=0;e.forEach((t,i)=>{t<0?(this.multi?this.splice("selected",n,1):this.selected=this.selectedItem=null,e.delete(i)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let t=0;this.__selectedMap.forEach(e=>{e>=0&&this.linkPaths("items."+e,"selected."+t++)})}else this.__selectedMap.forEach(t=>{this.linkPaths("selected","items."+t),this.linkPaths("selectedItem","items."+t)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(t){return this.__selectedMap.has(t)}isIndexSelected(t){return this.isSelected(this.items[t])}__deselectChangedIdx(t){let e=this.__selectedIndexForItemIndex(t);if(e>=0){let t=0;this.__selectedMap.forEach((n,i)=>{e==t++&&this.deselect(i)})}}__selectedIndexForItemIndex(t){let e=this.__dataLinkedPaths["items."+t];if(e)return parseInt(e.slice("selected.".length),10)}deselect(t){let e=this.__selectedMap.get(t);if(e>=0){let n;this.__selectedMap.delete(t),this.multi&&(n=this.__selectedIndexForItemIndex(e)),this.__updateLinks(),this.multi?this.splice("selected",n,1):this.selected=this.selectedItem=null}}deselectIndex(t){this.deselect(this.items[t])}select(t){this.selectIndex(this.items.indexOf(t))}selectIndex(t){let e=this.items[t];this.isSelected(e)?this.toggle&&this.deselectIndex(t):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(e,t),this.__updateLinks(),this.multi?this.push("selected",e):this.selected=this.selectedItem=e)}}})(Qt);class Xi extends Gi{static get is(){return"array-selector"}}customElements.define(Xi.is,Xi);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ji=new Je;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,n){},styleSubtree(t,e){Ji.processStyles(),Se(t,e)},styleElement(t){Ji.processStyles()},styleDocument(t){Ji.processStyles(),Se(document.body,t)},getComputedStyleValue:(t,e)=>xe(t,e),flushCustomStyles(){},nativeCss:ie,nativeShadow:te}),window.ShadyCSS.CustomStyleInterface=Ji;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ki="include",Zi=window.ShadyCSS.CustomStyleInterface;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let Qi;window.customElements.define("custom-style",class extends HTMLElement{constructor(){super(),this._style=null,Zi.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const e=t.getAttribute(Ki);return e&&(t.removeAttribute(Ki),t.textContent=function(t){let e=t.trim().split(/\s+/),n="";for(let t=0;t<e.length;t++)n+=O(e[t]);return n}(e)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}),Qi=Oi._mutablePropertyChange;Boolean,Si(HTMLElement).prototype;const ts=document.createElement("template");ts.setAttribute("style","display: none;"),ts.innerHTML='<custom-style>\n  <style is="custom-style">\n    [hidden] {\n      display: none !important;\n    }\n  </style>\n</custom-style><custom-style>\n  <style is="custom-style">\n    html {\n\n      --layout: {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n      };\n\n      --layout-inline: {\n        display: -ms-inline-flexbox;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n      };\n\n      --layout-horizontal: {\n        @apply --layout;\n\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      };\n\n      --layout-horizontal-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: row-reverse;\n        -webkit-flex-direction: row-reverse;\n        flex-direction: row-reverse;\n      };\n\n      --layout-vertical: {\n        @apply --layout;\n\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n      };\n\n      --layout-vertical-reverse: {\n        @apply --layout;\n\n        -ms-flex-direction: column-reverse;\n        -webkit-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n      };\n\n      --layout-wrap: {\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n      };\n\n      --layout-wrap-reverse: {\n        -ms-flex-wrap: wrap-reverse;\n        -webkit-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse;\n      };\n\n      --layout-flex-auto: {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n      };\n\n      --layout-flex-none: {\n        -ms-flex: none;\n        -webkit-flex: none;\n        flex: none;\n      };\n\n      --layout-flex: {\n        -ms-flex: 1 1 0.000000001px;\n        -webkit-flex: 1;\n        flex: 1;\n        -webkit-flex-basis: 0.000000001px;\n        flex-basis: 0.000000001px;\n      };\n\n      --layout-flex-2: {\n        -ms-flex: 2;\n        -webkit-flex: 2;\n        flex: 2;\n      };\n\n      --layout-flex-3: {\n        -ms-flex: 3;\n        -webkit-flex: 3;\n        flex: 3;\n      };\n\n      --layout-flex-4: {\n        -ms-flex: 4;\n        -webkit-flex: 4;\n        flex: 4;\n      };\n\n      --layout-flex-5: {\n        -ms-flex: 5;\n        -webkit-flex: 5;\n        flex: 5;\n      };\n\n      --layout-flex-6: {\n        -ms-flex: 6;\n        -webkit-flex: 6;\n        flex: 6;\n      };\n\n      --layout-flex-7: {\n        -ms-flex: 7;\n        -webkit-flex: 7;\n        flex: 7;\n      };\n\n      --layout-flex-8: {\n        -ms-flex: 8;\n        -webkit-flex: 8;\n        flex: 8;\n      };\n\n      --layout-flex-9: {\n        -ms-flex: 9;\n        -webkit-flex: 9;\n        flex: 9;\n      };\n\n      --layout-flex-10: {\n        -ms-flex: 10;\n        -webkit-flex: 10;\n        flex: 10;\n      };\n\n      --layout-flex-11: {\n        -ms-flex: 11;\n        -webkit-flex: 11;\n        flex: 11;\n      };\n\n      --layout-flex-12: {\n        -ms-flex: 12;\n        -webkit-flex: 12;\n        flex: 12;\n      };\n\n      /* alignment in cross axis */\n\n      --layout-start: {\n        -ms-flex-align: start;\n        -webkit-align-items: flex-start;\n        align-items: flex-start;\n      };\n\n      --layout-center: {\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n      };\n\n      --layout-end: {\n        -ms-flex-align: end;\n        -webkit-align-items: flex-end;\n        align-items: flex-end;\n      };\n\n      --layout-baseline: {\n        -ms-flex-align: baseline;\n        -webkit-align-items: baseline;\n        align-items: baseline;\n      };\n\n      /* alignment in main axis */\n\n      --layout-start-justified: {\n        -ms-flex-pack: start;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n      };\n\n      --layout-center-justified: {\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n      };\n\n      --layout-end-justified: {\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n      };\n\n      --layout-around-justified: {\n        -ms-flex-pack: distribute;\n        -webkit-justify-content: space-around;\n        justify-content: space-around;\n      };\n\n      --layout-justified: {\n        -ms-flex-pack: justify;\n        -webkit-justify-content: space-between;\n        justify-content: space-between;\n      };\n\n      --layout-center-center: {\n        @apply --layout-center;\n        @apply --layout-center-justified;\n      };\n\n      /* self alignment */\n\n      --layout-self-start: {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      };\n\n      --layout-self-center: {\n        -ms-align-self: center;\n        -webkit-align-self: center;\n        align-self: center;\n      };\n\n      --layout-self-end: {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      };\n\n      --layout-self-stretch: {\n        -ms-align-self: stretch;\n        -webkit-align-self: stretch;\n        align-self: stretch;\n      };\n\n      --layout-self-baseline: {\n        -ms-align-self: baseline;\n        -webkit-align-self: baseline;\n        align-self: baseline;\n      };\n\n      /* multi-line alignment in main axis */\n\n      --layout-start-aligned: {\n        -ms-flex-line-pack: start;  /* IE10 */\n        -ms-align-content: flex-start;\n        -webkit-align-content: flex-start;\n        align-content: flex-start;\n      };\n\n      --layout-end-aligned: {\n        -ms-flex-line-pack: end;  /* IE10 */\n        -ms-align-content: flex-end;\n        -webkit-align-content: flex-end;\n        align-content: flex-end;\n      };\n\n      --layout-center-aligned: {\n        -ms-flex-line-pack: center;  /* IE10 */\n        -ms-align-content: center;\n        -webkit-align-content: center;\n        align-content: center;\n      };\n\n      --layout-between-aligned: {\n        -ms-flex-line-pack: justify;  /* IE10 */\n        -ms-align-content: space-between;\n        -webkit-align-content: space-between;\n        align-content: space-between;\n      };\n\n      --layout-around-aligned: {\n        -ms-flex-line-pack: distribute;  /* IE10 */\n        -ms-align-content: space-around;\n        -webkit-align-content: space-around;\n        align-content: space-around;\n      };\n\n      /*******************************\n                Other Layout\n      *******************************/\n\n      --layout-block: {\n        display: block;\n      };\n\n      --layout-invisible: {\n        visibility: hidden !important;\n      };\n\n      --layout-relative: {\n        position: relative;\n      };\n\n      --layout-fit: {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-scroll: {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n      };\n\n      --layout-fullbleed: {\n        margin: 0;\n        height: 100vh;\n      };\n\n      /* fixed position */\n\n      --layout-fixed-top: {\n        position: fixed;\n        top: 0;\n        left: 0;\n        right: 0;\n      };\n\n      --layout-fixed-right: {\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n      };\n\n      --layout-fixed-bottom: {\n        position: fixed;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n      --layout-fixed-left: {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 0;\n      };\n\n    }\n  </style>\n</custom-style>',document.head.appendChild(ts.content);var es=document.createElement("style");es.textContent="[hidden] { display: none !important; }",document.head.appendChild(es),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Ei({_template:Zt`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: 120px 0;

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){ni(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")}),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(t){27===t.keyCode&&(t.preventDefault(),this.close())},_track:function(t){if(!this.persistent&&!this.disableSwipe)switch(t.preventDefault(),t.detail.state){case"start":this._trackStart(t);break;case"track":this._trackMove(t);break;case"end":this._trackEnd(t)}},_trackStart:function(t){this._drawerState=this._DRAWER_STATE.TRACKING;var e=this.$.contentContainer.getBoundingClientRect();this._savedWidth=e.width,"left"===this.position?this._translateOffset=e.left:this._translateOffset=e.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(t){this._translateDrawer(t.detail.dx+this._translateOffset),this._trackDetails.push({dx:t.detail.dx,timeStamp:Date.now()})},_trackEnd:function(t){var e=t.detail.dx+this._translateOffset,n=this.getWidth(),i="left"===this.position?e>=0||e<=-n:e<=0||e>=n;if(!i){var s=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(t,s),this._drawerState===this._DRAWER_STATE.FLINGING)return}var r=n/2;t.detail.dx<-r?this.opened="right"===this.position:t.detail.dx>r&&(this.opened="left"===this.position),i?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(t,e){for(var n,i=Date.now(),s=i-100,r=0,o=e.length-1;r<=o;){var a=r+o>>1,l=e[a];l.timeStamp>=s?(n=l,o=a-1):r=a+1}return n?(t.detail.dx-n.dx)/(i-n.timeStamp||1):0},_flingDrawer:function(t,e){var n=this._calculateVelocity(t,e);if(!(Math.abs(n)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var i,s=t.detail.dx+this._translateOffset,r=this.getWidth(),o="left"===this.position,a=n>0;i=!a&&o?-(s+r):a&&!o?r-s:-s,a?(n=Math.max(n,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(n=Math.min(n,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*i/n;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(t){this.style.transitionDuration=t+"ms",this.$.contentContainer.style.transitionDuration=t+"ms",this.$.scrim.style.transitionDuration=t+"ms"},_styleTransitionTimingFunction:function(t){this.$.contentContainer.style.transitionTimingFunction=t,this.$.scrim.style.transitionTimingFunction=t},_translateDrawer:function(t){var e=this.getWidth();"left"===this.position?(t=Math.max(-e,Math.min(t,0)),this.$.scrim.style.opacity=1+t/e):(t=Math.max(0,Math.min(t,e)),this.$.scrim.style.opacity=1-t/e),this.translate3d(t+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var t=this._drawerState;t===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,t!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),t!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var t=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),e=vi(this).querySelectorAll(t);e.length>0?(this._firstTabStop=e[0],this._lastTabStop=e[e.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var n=this.getAttribute("tabindex");n&&parseInt(n,10)>-1?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(t){if(!this.noFocusTrap){this._drawerState===this._DRAWER_STATE.OPENED&&9===t.keyCode&&(t.shiftKey?this._firstTabStop&&vi(t).localTarget===this._firstTabStop&&(t.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&vi(t).localTarget===this._lastTabStop&&(t.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(t,e){this.toggleClass("visible",t&&!e,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Ei({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var t=this.query;t&&(this.full||"("===t[0]||(t="("+t+")"),this._mq=window.matchMedia(t),this._add(),this.queryHandler(this._mq))},queryHandler:function(t){this._setQueryMatches(t.matches)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const ns=[{properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):window.removeEventListener("resize",this._boundNotifyResize),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this),this._fireResize())},assignParentResizable:function(t){this._parentResizable=t},stopResizeNotificationsFor:function(t){var e=this._interestedResizables.indexOf(t);e>-1&&(this._interestedResizables.splice(e,1),this.unlisten(t,"iron-resize","_onDescendantIronResize"))},resizerShouldNotify:function(t){return!0},_onDescendantIronResize:function(t){this._notifyingDescendant?t.stopPropagation():p||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(t){var e=vi(t).rootTarget;e!==this&&(-1===this._interestedResizables.indexOf(e)&&(this._interestedResizables.push(e),this.listen(e,"iron-resize","_onDescendantIronResize")),e.assignParentResizable(this),this._notifyDescendant(e),t.stopPropagation())},_parentResizableChanged:function(t){t&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(t){this.isAttached&&(this._notifyingDescendant=!0,t.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var t=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function e(){document.removeEventListener("readystatechange",e),t()})}else this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable||(window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())}},{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(t){vi(t).path[0]!==this&&(this.resetLayout(),t.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var t=this._updateLayoutStates.bind(this);s&&tt?(this._layoutDebouncer=Ze.debounce(this._layoutDebouncer,tt,t),_i(this._layoutDebouncer)):this.debounce("resetLayout",t),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var t=this;requestAnimationFrame(function(){t.fire("app-reset-layout")})},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach(function(t){this.resizerShouldNotify(t)&&this._notifyDescendant(t)},this)}}];
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Ei({_template:Zt`
    <style>
      :host {
        display: block;
        /**
         * Force app-drawer-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements.
         */
        position: relative;
        z-index: 0;
      }

      :host ::slotted([slot=drawer]) {
        z-index: 1;
      }

      :host([fullbleed]) {
        @apply --layout-fit;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
        height: 100%;
        transition: var(--app-drawer-layout-content-transition, none);
      }

      #contentContainer[drawer-position=left] {
        margin-left: var(--app-drawer-width, 256px);
      }

      #contentContainer[drawer-position=right] {
        margin-right: var(--app-drawer-width, 256px);
      }
    </style>

    <slot id="drawerSlot" name="drawer"></slot>

    <div id="contentContainer" drawer-position\$="[[_drawerPosition]]">
      <slot></slot>
    </div>

    <iron-media-query query="[[_computeMediaQuery(forceNarrow, responsiveWidth)]]" on-query-matches-changed="_onQueryMatchesChanged"></iron-media-query>
`,is:"app-drawer-layout",behaviors:[ns],properties:{forceNarrow:{type:Boolean,value:!1},responsiveWidth:{type:String,value:"640px"},narrow:{type:Boolean,reflectToAttribute:!0,readOnly:!0,notify:!0},openedWhenNarrow:{type:Boolean,value:!1},_drawerPosition:{type:String}},listeners:{click:"_clickHandler"},observers:["_narrowChanged(narrow)"],get drawer(){return vi(this.$.drawerSlot).getDistributedNodes()[0]},attached:function(){var t=this.drawer;t&&t.setAttribute("no-transition","")},_clickHandler:function(t){var e=vi(t).localTarget;if(e&&e.hasAttribute("drawer-toggle")){var n=this.drawer;n&&!n.persistent&&n.toggle()}},_updateLayoutStates:function(){var t=this.drawer;this.isAttached&&t&&(this._drawerPosition=this.narrow?null:t.position,this._drawerNeedsReset&&(this.narrow?(t.opened=this.openedWhenNarrow,t.persistent=!1):t.opened=t.persistent=!0,t.hasAttribute("no-transition")&&ni(this,function(){t.removeAttribute("no-transition")}),this._drawerNeedsReset=!1))},_narrowChanged:function(){this._drawerNeedsReset=!0,this.resetLayout()},_onQueryMatchesChanged:function(t){this._setNarrow(t.detail.value)},_computeMediaQuery:function(t,e){return t?"(min-width: 0px)":"(max-width: "+e+")"}});
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const is={};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ss=function(t,e){if(null!=is[t])throw new Error("effect `"+t+"` is already registered.");is[t]=e},rs=[{properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(t,e){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),e)if("document"===t)this.scrollTarget=this._doc;else if("string"==typeof t){var n=this.domHost;this.scrollTarget=n&&n.$?n.$[t]:vi(this.ownerDocument).querySelector("#"+t)}else this._isValidScrollTarget()&&(this._oldScrollTarget=t,this._toggleScrollListener(this._shouldHaveListener,t))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(t){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=t)},set _scrollLeft(t){this.scrollTarget===this._doc?window.scrollTo(t,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=t)},scroll:function(t,e){var n;"object"==typeof t?(n=t.left,e=t.top):n=t,n=n||0,e=e||0,this.scrollTarget===this._doc?window.scrollTo(n,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=n,this.scrollTarget.scrollTop=e)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(t,e){var n=e===this._doc?window:e;t?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),n.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(n.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(t){this._shouldHaveListener=t,this._toggleScrollListener(t,this.scrollTarget)}},{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(t){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},detached:function(){this._tearDownEffects()},createEffect:function(t,e){var n=is[t];if(!n)throw new ReferenceError(this._getUndefinedMsg(t));var i=this._boundEffect(n,e||{});return i.setUp(),i},_effectsChanged:function(t,e,n){this._tearDownEffects(),t&&n&&(t.split(" ").forEach(function(t){var n;""!==t&&((n=is[t])?this._effects.push(this._boundEffect(n,e[t])):console.warn(this._getUndefinedMsg(t)))},this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(t,e){e=e||{};var n=parseFloat(e.startsAt||0),i=parseFloat(e.endsAt||1),s=i-n,r=function(){},o=0===n&&1===i?t.run:function(e,i){t.run.call(this,Math.max(0,(e-n)/s),i)};return{setUp:t.setUp?t.setUp.bind(this,e):r,run:t.run?o.bind(this):r,tearDown:t.tearDown?t.tearDown.bind(this):r}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach(function(t){!1!==t.setUp()&&this._effectsRunFn.push(t.run)},this))},_tearDownEffects:function(){this._effects&&this._effects.forEach(function(t){t.tearDown()}),this._effectsRunFn=[],this._effects=[]},_runEffects:function(t,e){this._effectsRunFn&&this._effectsRunFn.forEach(function(n){n(t,e)})},_scrollHandler:function(){if(!this.disabled){var t=this._clampedScrollTop;this._updateScrollState(t),this.threshold>0&&this._setThresholdTriggered(t>=this.threshold)}},_getDOMRef:function(t){console.warn("_getDOMRef","`"+t+"` is undefined")},_getUndefinedMsg:function(t){return"Scroll effect `"+t+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+t+".html ?"}}];
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Ei({_template:Zt`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[rs,ns],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var t,e=vi(this.$.slot).getDistributedNodes(),n=0;t=e[n];n++)if(t.nodeType===Node.ELEMENT_NODE){if(t.hasAttribute("sticky")){this._stickyElRef=t;break}this._stickyElRef||(this._stickyElRef=t)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var t=this._clampedScrollTop,e=0===this._height||0===t,n=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,e||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),e?this._updateScrollState(t,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=n}},_updateScrollState:function(t,e){if(0!==this._height){var n=0,i=0,s=this._top,r=(this._lastScrollTop,this._maxHeaderTop),o=t-this._lastScrollTop,a=Math.abs(o),l=t>this._lastScrollTop,h=performance.now();if(this._mayMove()&&(i=this._clamp(this.reveals?s+o:t,0,r)),t>=this._dHeight&&(i=this.condenses&&!this.fixed?Math.max(this._dHeight,i):i,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&a<100&&((h-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=t,this._initTimestamp=h),t>=r))if(Math.abs(this._initScrollTop-t)>30||a>10){l&&t>=r?i=r:!l&&t>=this._dHeight&&(i=this.condenses&&!this.fixed?this._dHeight:0);var d=o/(h-this._lastTimestamp);this.style.transitionDuration=this._clamp((i-s)/d,0,300)+"ms"}else i=this._top;n=0===this._dHeight?t>0?1:0:i/this._dHeight,e||(this._lastScrollTop=t,this._top=i,this._wasScrollingDown=l,this._lastTimestamp=h),(e||n!==this._progress||s!==i||0===t)&&(this._progress=n,this._runEffects(n,i),this._transformHeader(i))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(t){this.translate3d(0,-t+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&t>=this._stickyElTop?Math.min(t,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(t,e,n){return Math.min(n,Math.max(e,t))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),vi(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(t){switch(t){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return vi(this).querySelector("[main-title]");case"condensedTitle":return vi(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Ei({_template:Zt`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[ns],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return vi(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var t=this.header;if(this.isAttached&&t){this.$.wrapper.classList.remove("initializing"),t.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var e=t.offsetHeight;this.hasScrollingRegion?(t.style.left="",t.style.right=""):requestAnimationFrame(function(){var e=this.getBoundingClientRect(),n=document.documentElement.clientWidth-e.right;t.style.left=e.left+"px",t.style.right=n+"px"}.bind(this));var n=this.$.contentContainer.style;t.fixed&&!t.condenses&&this.hasScrollingRegion?(n.marginTop=e+"px",n.paddingTop=""):(n.paddingTop=e+"px",n.marginTop="")}}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
ss("blend-background",{setUp:function(){var t={};t.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),t.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),t.backgroundFrontLayer.style.willChange="opacity",t.backgroundFrontLayer.style.transform="translateZ(0)",t.backgroundRearLayer.style.willChange="opacity",t.backgroundRearLayer.style.transform="translateZ(0)",t.backgroundRearLayer.style.opacity=0,this._fxBlendBackground=t},run:function(t,e){var n=this._fxBlendBackground;n.backgroundFrontLayer.style.opacity=1-t,n.backgroundRearLayer.style.opacity=t},tearDown:function(){delete this._fxBlendBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
ss("fade-background",{setUp:function(t){var e={},n=t.duration||"0.5s";e.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),e.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),e.backgroundFrontLayer.style.willChange="opacity",e.backgroundFrontLayer.style.webkitTransform="translateZ(0)",e.backgroundFrontLayer.style.transitionProperty="opacity",e.backgroundFrontLayer.style.transitionDuration=n,e.backgroundRearLayer.style.willChange="opacity",e.backgroundRearLayer.style.webkitTransform="translateZ(0)",e.backgroundRearLayer.style.transitionProperty="opacity",e.backgroundRearLayer.style.transitionDuration=n,this._fxFadeBackground=e},run:function(t,e){var n=this._fxFadeBackground;t>=1?(n.backgroundFrontLayer.style.opacity=0,n.backgroundRearLayer.style.opacity=1):(n.backgroundFrontLayer.style.opacity=1,n.backgroundRearLayer.style.opacity=0)},tearDown:function(){delete this._fxFadeBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
ss("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}}),ss("resize-title",{setUp:function(){var t=this._getDOMRef("mainTitle"),e=this._getDOMRef("condensedTitle");if(!e)return console.warn("Scroll effect `resize-title`: undefined `condensed-title`"),!1;if(!t)return console.warn("Scroll effect `resize-title`: undefined `main-title`"),!1;e.style.willChange="opacity",e.style.webkitTransform="translateZ(0)",e.style.transform="translateZ(0)",e.style.webkitTransformOrigin="left top",e.style.transformOrigin="left top",t.style.willChange="opacity",t.style.webkitTransformOrigin="left top",t.style.transformOrigin="left top",t.style.webkitTransform="translateZ(0)",t.style.transform="translateZ(0)";var n=t.getBoundingClientRect(),i=e.getBoundingClientRect(),s={};s.scale=parseInt(window.getComputedStyle(e)["font-size"],10)/parseInt(window.getComputedStyle(t)["font-size"],10),s.titleDX=n.left-i.left,s.titleDY=n.top-i.top,s.condensedTitle=e,s.title=t,this._fxResizeTitle=s},run:function(t,e){var n,i,s=this._fxResizeTitle;this.condenses||(e=0),t>=1?(s.title.style.opacity=0,s.condensedTitle.style.opacity=1):(s.title.style.opacity=1,s.condensedTitle.style.opacity=0),n=Math.min(1,t),i=[[1,s.scale],[0,-s.titleDX],[e,e-s.titleDY]],function(t,e,n){this.transform("translate("+e+"px, "+n+"px) scale3d("+t+", "+t+", 1)",s.title)}.apply(this,i.map(function(t){return t[0]+(t[1]-t[0])*n}))},tearDown:function(){delete this._fxResizeTitle}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
ss("parallax-background",{setUp:function(t){var e={},n=parseFloat(t.scalar);e.background=this._getDOMRef("background"),e.backgroundFrontLayer=this._getDOMRef("backgroundFrontLayer"),e.backgroundRearLayer=this._getDOMRef("backgroundRearLayer"),e.deltaBg=e.backgroundFrontLayer.offsetHeight-e.background.offsetHeight,0===e.deltaBg?(isNaN(n)&&(n=.8),e.deltaBg=(this._dHeight||0)*n):(isNaN(n)&&(n=1),e.deltaBg=e.deltaBg*n),this._fxParallaxBackground=e},run:function(t,e){var n=this._fxParallaxBackground;this.transform("translate3d(0px, "+n.deltaBg*Math.min(1,t)+"px, 0px)",n.backgroundFrontLayer),n.backgroundRearLayer&&this.transform("translate3d(0px, "+n.deltaBg*Math.min(1,t)+"px, 0px)",n.backgroundRearLayer)},tearDown:function(){delete this._fxParallaxBackground}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
ss("material",{setUp:function(){return this.effects="waterfall resize-title blend-background parallax-background",!1}}),
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
ss("resize-snapped-title",{setUp:function(t){var e=this._getDOMRef("mainTitle"),n=this._getDOMRef("condensedTitle"),i=t.duration||"0.2s",s={};return n?e?(e.style.transitionProperty="opacity",e.style.transitionDuration=i,n.style.transitionProperty="opacity",n.style.transitionDuration=i,s.condensedTitle=n,s.title=e,void(this._fxResizeSnappedTitle=s)):(console.warn("Scroll effect `resize-snapped-title`: undefined `main-title`"),!1):(console.warn("Scroll effect `resize-snapped-title`: undefined `condensed-title`"),!1)},run:function(t,e){var n=this._fxResizeSnappedTitle;t>0?(n.title.style.opacity=0,n.condensedTitle.style.opacity=1):(n.title.style.opacity=1,n.condensedTitle.style.opacity=0)},tearDown:function(){var t=this._fxResizeSnappedTitle;t.title.style.transition="",t.condensedTitle.style.transition="",delete this._fxResizeSnappedTitle}}),
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Ei({_template:Zt`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"});const os=document.createElement("template");os.innerHTML='<dom-module id="shared-styles">\n  <template>\n    <style>\n      h1 {\n        margin: 16px 0;\n        color: #212121;\n        font-size: 22px;\n      }\n\n      .card {\n        margin: 24px;\n        padding: 16px;\n        color: #757575;\n        border-radius: 5px;\n        background-color: #fff;\n        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n      }\n\n      .circle {\n        display: inline-block;\n        width: 64px;\n        height: 64px;\n        text-align: center;\n        color: #555;\n        border-radius: 50%;\n        background: #ddd;\n        font-size: 30px;\n        line-height: 64px;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(os.content);var as;window.customElements.define("template-home",class extends Qt{static get template(){return Zt`
      <style include="shared-styles">
        :host {
          --app-primary-color: #eee;
          --app-secondary-color: #000;

          display: block;
        }

        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }

        app-header {
          color: #000;
          background-color: var(--app-primary-color);
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }

        .drawer-list {
          margin: 0 20px;
        }

        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }

        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }

        .content {
          padding: 16px;
        }
      </style>

      <app-drawer-layout fullbleed="" narrow="{{narrow}}">
        <!-- Drawer content -->
        <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
          <app-toolbar>&hearts; Web Components</app-toolbar>
          <section class="content">
            <p>Polymer is great.</p>
          </section>
        </app-drawer>

        <!-- Main content -->
        <app-header-layout has-scrolling-region="">

          <app-header slot="header" condenses="" reveals="" effects="waterfall">
            <app-toolbar>
              <div main-title="">My portal.</div>
            </app-toolbar>
          </app-header>

          <section class="content">
            <p>web is awesome.</p>
          </section>
        </app-header-layout>
      </app-drawer-layout>
    `}constructor(){super()}static get properties(){return{}}}),m=!0,as=window.MyAppGlobals.rootPath,_=as,window.customElements.define("page-home",class extends Qt{static get template(){return Zt`
      <template-home></template-home>
    `}constructor(){super()}static get properties(){return{}}})},function(t,e){
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function n(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?n():window.addEventListener("DOMContentLoaded",n)},function(t,e,n){t.exports=n(1)}]);
//# sourceMappingURL=app-77d7e47.js.map