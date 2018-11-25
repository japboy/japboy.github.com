!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=2)}([,,function(t,e,s){t.exports=s(3)},function(t,e,s){"use strict";s.r(e);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const i=new WeakMap,n=t=>"function"==typeof t&&i.has(t),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,s=null)=>{let i=e;for(;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,p=new RegExp(`${l}|${c}`),d=(()=>{const t=document.createElement("div");return t.setAttribute("style","{{bad value}}"),"{{bad value}}"!==t.getAttribute("style")})();class h{constructor(t,e){this.parts=[],this.element=e;let s=-1,i=0;const n=[],o=e=>{const r=e.content,a=document.createTreeWalker(r,133,null,!1);let c,h;for(;a.nextNode();){s++,c=h;const e=h=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const n=e.attributes;let o=0;for(let t=0;t<n.length;t++)n[t].value.indexOf(l)>=0&&o++;for(;o-- >0;){const n=t.strings[i],o=m.exec(n)[2],r=d&&"style"===o?"style$":/^[a-zA-Z-]*$/.test(o)?o:o.toLowerCase(),a=e.getAttribute(r).split(p);this.parts.push({type:"attribute",index:s,name:o,strings:a}),e.removeAttribute(r),i+=a.length-1}}"TEMPLATE"===e.tagName&&o(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(l)<0)continue;const o=e.parentNode,r=t.split(p),a=r.length-1;i+=a;for(let t=0;t<a;t++)o.insertBefore(""===r[t]?f():document.createTextNode(r[t]),e),this.parts.push({type:"node",index:s++});o.insertBefore(""===r[a]?f():document.createTextNode(r[a]),e),n.push(e)}else if(8===e.nodeType)if(e.nodeValue===l){const t=e.parentNode,o=e.previousSibling;null===o||o!==c||o.nodeType!==Node.TEXT_NODE?t.insertBefore(f(),e):s--,this.parts.push({type:"node",index:s++}),n.push(e),null===e.nextSibling?t.insertBefore(f(),e):s--,h=c,i++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(l,t+1));)this.parts.push({type:"node",index:-1})}}};o(e);for(const t of n)t.parentNode.removeChild(t)}}const u=t=>-1!==t.index,f=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let s=0,i=0;const n=t=>{const o=document.createTreeWalker(t,133,null,!1);let r=o.nextNode();for(;s<e.length&&null!==r;){const t=e[s];if(u(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(r),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(r,t.name,t.strings,this.options));s++}else i++,"TEMPLATE"===r.nodeName&&n(r.content),r=o.nextNode();else this._parts.push(void 0),s++}};return n(t),o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!0;for(let i=0;i<t;i++){const t=this.strings[i];e+=t;const n=t.lastIndexOf(">");!(s=(n>-1||s)&&-1===t.indexOf("<",n+1))&&d&&(e=e.replace(m,(t,e,s,i)=>"style"===s?`${e}style$${i}`:t)),e+=s?c:l}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const y=t=>null===t||!("object"==typeof t||"function"==typeof t);class v{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new b(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:String(e);else s+="string"==typeof t?t:String(t)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||y(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=f()),t._insert(this.endNode=f())}insertAfterPart(t){t._insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}const t=this._pendingValue;t!==a&&(y(t)?t!==this.value&&this._commitText(t):t instanceof _?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):void 0!==t.then?this._commitPromise(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const s=new g(e,t.processor,this.options),i=s._clone();s.update(t.values),this._commitNode(i),this.value=s}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)void 0===(s=e[i])&&(s=new x(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}_commitPromise(t){this.value=t,t.then(e=>{this.value===t&&(this.setValue(e),this.commit())})}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class w{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=a}}class P extends v{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new S(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class S extends b{}let N=!1;try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class T{constructor(t,e,s){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=this._pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),this._options=E(t),i&&this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options),this.value=t,this._pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const C=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];return"."===n?new P(t,e.slice(1),s).parts:"@"===n?[new T(t,e.slice(1),i.eventContext)]:"?"===n?[new w(t,e.slice(1),s)]:new v(t,e,s).parts}handleTextExpression(t){return new x(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(t){let e=V.get(t.type);void 0===e&&(e=new Map,V.set(t.type,e));let s=e.get(t.strings);return void 0===s&&(s=new h(t,t.getTemplateElement()),e.set(t.strings,s)),s}const V=new Map,A=new WeakMap,M=(t,...e)=>new _(t,e,"html",C),j=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function R(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,j,null,!1);let o=U(i),r=i[o],a=-1,l=0;const c=[];let p=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(c.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==r&&r.index===a;)r.index=null!==p?-1:r.index-l,r=i[o=U(i,o)]}c.forEach(t=>t.parentNode.removeChild(t))}const k=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const s=document.createTreeWalker(t,j,null,!1);for(;s.nextNode();)e++;return e},U=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(u(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const $=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),F=!1);const I=["html","svg"],q=new Set,z=(t,e,s)=>{q.add(s);const i=t.querySelectorAll("style");if(0===i.length)return;const n=document.createElement("style");for(let t=0;t<i.length;t++){const e=i[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}if((t=>{I.forEach(e=>{const s=V.get($(e,t));void 0!==s&&s.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),R(t,s)})})})(s),function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const o=document.createTreeWalker(i,j,null,!1);let r=U(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===s&&(a=k(e),s.parentNode.insertBefore(e,s));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=U(n,r);return}r=U(n,r)}}(e,n,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,s),window.ShadyCSS.nativeShadow){const s=e.element.content.querySelector("style");t.insertBefore(s.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(n,e.element.content.firstChild);const t=new Set;t.add(n),R(e,t)}},L=t=>null!==t,B=t=>t?"":null,H=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,reflect:!1,hasChanged:H},D=new Promise(t=>t(!0)),X=1,G=4,Y=8;class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,s]of this._classProperties){const i=this._attributeNameForProperty(e,s);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}return t}static createProperty(t,e=W){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(i){const n=this[t];this[s]=i,this._requestPropertyUpdate(t,n,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,s=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of s)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const s=void 0!==e&&e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=H){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e&&e.type;if(void 0===s)return t;const i=s===Boolean?L:"function"==typeof s?s:s.fromAttribute;return i?i(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?B:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&X?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=W){const i=this.constructor,n=i._propertyValueToAttribute(e,s);if(void 0!==n){const e=i._attributeNameForProperty(t,s);void 0!==e&&(this._updateState=this._updateState|Y,null===n?this.removeAttribute(e):this.setAttribute(e,n),this._updateState=this._updateState&~Y)}}_attributeToProperty(t,e){if(!(this._updateState&Y)){const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i);this[i]=s._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const s=this.constructor._classProperties.get(t)||W;return this._requestPropertyUpdate(t,e,s)}return this._invalidate()}_requestPropertyUpdate(t,e,s){return this.constructor._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===s.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|G;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&G}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&X||(this._updateState=this._updateState|X,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}Z._attributeToPropertyMap=new Map,Z._finalized=!0,Z._classProperties=new Map,Z.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=t=>(e,s)=>{e.constructor.createProperty(s,t)};K((t,e)=>t.querySelector(e)),K((t,e)=>t.querySelectorAll(e));function K(t){return e=>(s,i)=>{Object.defineProperty(s,i,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Q extends Z{update(t){super.update(t);const e=this.render();e instanceof _&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}Q.render=((t,e,s)=>{const i=s.scopeName,n=A.has(e);if(((t,e,s)=>{let i=A.get(e);void 0===i&&(r(e,e.firstChild),A.set(e,i=new x(Object.assign({templateFactory:O},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,e,Object.assign({templateFactory:(t=>e=>{const s=$(e.type,t);let i=V.get(s);void 0===i&&(i=new Map,V.set(s,i));let n=i.get(e.strings);if(void 0===n){const s=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(s,t),n=new h(e,s),i.set(e.strings,n)}return n})(i)},s)),e instanceof ShadowRoot&&F&&t instanceof _){if(!q.has(i)){const t=A.get(e).value;z(e,t.template,i)}n||window.ShadyCSS.styleElement(e.host)}});var tt,et=function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};!function(t){t.Top="top",t.Left="left",t.Right="right",t.Bottom="bottom"}(tt||(tt={}));class st extends Q{constructor(){super(),this.direction=tt.Bottom}render(){return M`
      <style>
        :host {
          display: inline-block;
          position: relative;
        }
        .balloon {
          background-color: #0a0a0a;
          border-radius: 3px;
          box-sizing: border-box;
          color: #fff;
          display: inline-block;
          font-size: 16px;
          margin: 1.5em 0;
          width: 280px;
          padding: 7px 10px;
          position: relative;
        }
        .balloon.bottom::before {
          border-bottom: 15px solid transparent;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 15px solid #0a0a0a;
          content: "";
          left: 50%;
          margin-left: -15px;
          position: absolute;
          top: 100%;
        }
        .balloon.top::before {
          border-bottom: 15px solid #0a0a0a;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
          border-top: 15px solid transparent;
          content: "";
          left: 50%;
          margin-left: -15px;
          margin-top: -30px;
          position: absolute;
          top: 0;
        }
      </style>
      <div class="balloon ${this.direction}">
        <slot></slot>
      </div>
    `}}et([J({type:String})],st.prototype,"direction",void 0),window.customElements.define("atom-balloon",st);class it extends Q{constructor(){super()}toggle(){this.active=!this.active,this.requestUpdate()}render(){return M`
      <style>
        .portrait {
          background-color: #eee;
          border-radius: 50px;
          cursor: pointer;
          height: 100px;
          left: calc(50% - 50px);
          position: absolute;
          top: calc(75% - 50px);
          transform: rotate(0);
          transition-duration: 0.3s;
          transition-property: transform;
          width: 100px;
        }
        .portrait[aria-selected="true"] {
          transform: rotate(10deg);
        }
        .balloon {
          left: calc(50% - 140px);
          margin-top: 10px;
          opacity: 0;
          position: absolute;
          top: calc(75% - 330px);
          transition-duration: 0.3s;
          transition-property: margin-top, opacity;
        }
        .balloon[aria-selected="true"] {
          margin-top: 0;
          opacity: 1;
        }
      </style>

      <main>
        <img
          aria-selected="${this.active?"true":"false"}"
          class="portrait"
          height="100"
          src="https://www.gravatar.com/avatar/${this.gravatar}?s=200"
          width="100"
          @click="${this.toggle}"
        >
        <atom-balloon
          aria-selected="${this.active?"true":"false"}"
          class="balloon"
          direction="bottom"
        >
          <p>Hi, I'm Yu Inao.<br>Currently working as a senior web frontend developer in Tokyo.</p>
          <p>My passions focus on web UI development, component-based UI design, performant web, web apps, &amp; web standards.</p>
        </atom-balloon>
      </main>
    `}}(function(t,e,s,i){var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);o>3&&r&&Object.defineProperty(e,s,r)})([J({type:String})],it.prototype,"gravatar",void 0),window.customElements.define("template-home",it);window.customElements.define("page-home",class extends Q{static get properties(){return{}}constructor(){super()}render(){return M`
      <template-home gravatar="1e4b7d2f20a2ecb20497d9b8704e6107"></template-home>
    `}})}]);
//# sourceMappingURL=app-b1b7b77.js.map