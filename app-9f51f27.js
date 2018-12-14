!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=15)}({15:function(t,e,i){t.exports=i(16)},16:function(t,e,i){"use strict";i.r(e);
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
const n=new WeakMap,s=t=>"function"==typeof t&&n.has(t),o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(t,e,i=null)=>{let n=e;for(;n!==i;){const e=n.nextSibling;t.removeChild(n),n=e}},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,d=`\x3c!--${l}--\x3e`,p=new RegExp(`${l}|${d}`),c="$lit$";class h{constructor(t,e){this.parts=[],this.element=e;let i=-1,n=0;const s=[],o=e=>{const r=e.content,a=document.createTreeWalker(r,133,null,!1);let d,h;for(;a.nextNode();){i++,d=h;const e=h=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const s=e.attributes;let o=0;for(let t=0;t<s.length;t++)s[t].value.indexOf(l)>=0&&o++;for(;o-- >0;){const s=t.strings[n],o=m.exec(s)[2],r=o.toLowerCase()+c,a=e.getAttribute(r).split(p);this.parts.push({type:"attribute",index:i,name:o,strings:a}),e.removeAttribute(r),n+=a.length-1}}"TEMPLATE"===e.tagName&&o(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(l)<0)continue;const o=e.parentNode,r=t.split(p),a=r.length-1;n+=a;for(let t=0;t<a;t++)o.insertBefore(""===r[t]?f():document.createTextNode(r[t]),e),this.parts.push({type:"node",index:i++});o.insertBefore(""===r[a]?f():document.createTextNode(r[a]),e),s.push(e)}else if(8===e.nodeType)if(e.nodeValue===l){const t=e.parentNode,o=e.previousSibling;null===o||o!==d||o.nodeType!==Node.TEXT_NODE?t.insertBefore(f(),e):i--,this.parts.push({type:"node",index:i++}),s.push(e),null===e.nextSibling?t.insertBefore(f(),e):i--,h=d,n++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(l,t+1));)this.parts.push({type:"node",index:-1})}}};o(e);for(const t of s)t.parentNode.removeChild(t)}}const u=t=>-1!==t.index,f=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class g{constructor(t,e,i){this._parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this._parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let i=0,n=0;const s=t=>{const o=document.createTreeWalker(t,133,null,!1);let r=o.nextNode();for(;i<e.length&&null!==r;){const t=e[i];if(u(t))if(n===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(r),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(r,t.name,t.strings,this.options));i++}else n++,"TEMPLATE"===r.nodeName&&s(r.content),r=o.nextNode();else this._parts.push(void 0),i++}};return s(t),o&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */class y{constructor(t,e,i,n){this.strings=t,this.values=e,this.type=i,this.processor=n}getHTML(){const t=this.strings.length-1;let e="";for(let i=0;i<t;i++){const t=this.strings[i];let n=!1;e+=t.replace(m,(t,e,i,s)=>(n=!0,e+i+c+s+l)),n||(e+=d)}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
const _=t=>null===t||!("object"==typeof t||"function"==typeof t);class v{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new b(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let n=0;n<e;n++){i+=t[n];const e=this.parts[n];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)i+="string"==typeof e?e:String(e);else i+="string"==typeof t?t:String(t)}}return i+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||_(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(f()),this.endNode=t.appendChild(f())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=f()),t._insert(this.endNode=f())}insertAfterPart(t){t._insert(this.startNode=f()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;s(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}const t=this._pendingValue;t!==a&&(_(t)?t!==this.value&&this._commitText(t):t instanceof y?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const i=new g(e,t.processor,this.options),n=i._clone();i.update(t.values),this._commitNode(n),this.value=i}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,n=0;for(const s of t)void 0===(i=e[n])&&(i=new x(this.options),e.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(e[n-1])),i.setValue(s),i.commit(),n++;n<e.length&&(e.length=n,this.clear(i&&i.endNode))}clear(t=this.startNode){r(this.startNode.parentNode,t.nextSibling,this.endNode)}}class w{constructor(t,e,i){if(this.value=void 0,this._pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this._pendingValue=t}commit(){for(;s(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=a}}class S extends v{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends b{}let N=!1;try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class T{constructor(t,e,i){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;s(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=this._pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=E(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const E=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const C=new class{handleAttributeExpressions(t,e,i,n){const s=e[0];return"."===s?new S(t,e.slice(1),i).parts:"@"===s?[new T(t,e.slice(1),n.eventContext)]:"?"===s?[new w(t,e.slice(1),i)]:new v(t,e,i).parts}handleTextExpression(t){return new x(t)}};
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
 */function A(t){let e=O.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},O.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(l);return void 0===(i=e.keyString.get(n))&&(i=new h(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const O=new Map,V=new WeakMap,k=(t,...e)=>new y(t,e,"html",C),M=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
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
 */function j(t,e){const{element:{content:i},parts:n}=t,s=document.createTreeWalker(i,M,null,!1);let o=U(n),r=n[o],a=-1,l=0;const d=[];let p=null;for(;s.nextNode();){a++;const t=s.currentNode;for(t.previousSibling===p&&(p=null),e.has(t)&&(d.push(t),null===p&&(p=t)),null!==p&&l++;void 0!==r&&r.index===a;)r.index=null!==p?-1:r.index-l,r=n[o=U(n,o)]}d.forEach(t=>t.parentNode.removeChild(t))}const R=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const i=document.createTreeWalker(t,M,null,!1);for(;i.nextNode();)e++;return e},U=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(u(e))return i}return-1};
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
const z=(t,e)=>`${t}--${e}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),F=!1);const I=["html","svg"],$=new Set,L=(t,e,i)=>{$.add(i);const n=t.querySelectorAll("style");if(0===n.length)return;const s=document.createElement("style");for(let t=0;t<n.length;t++){const e=n[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}if((t=>{I.forEach(e=>{const i=O.get(z(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),j(t,i)})})})(i),function(t,e,i=null){const{element:{content:n},parts:s}=t;if(null==i)return void n.appendChild(e);const o=document.createTreeWalker(n,M,null,!1);let r=U(s),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(a=R(e),i.parentNode.insertBefore(e,i));-1!==r&&s[r].index===l;){if(a>0){for(;-1!==r;)s[r].index+=a,r=U(s,r);return}r=U(s,r)}}(e,s,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,i),window.ShadyCSS.nativeShadow){const i=e.element.content.querySelector("style");t.insertBefore(i.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(s,e.element.content.firstChild);const t=new Set;t.add(s),j(e,t)}},q=t=>null!==t,B=t=>t?"":null,H=(t,e)=>e!==t&&(e==e||t==t),W={attribute:!0,type:String,reflect:!1,hasChanged:H},D=new Promise(t=>t(!0)),X=1,G=4,Y=8;class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=D,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,i]of this._classProperties){const n=this._attributeNameForProperty(e,i);void 0!==n&&(this._attributeToPropertyMap.set(n,e),t.push(n))}return t}static createProperty(t,e=W){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[i]},set(n){const s=this[t];this[i]=n,this._requestPropertyUpdate(t,s,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,i=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const t of i)this.createProperty(t,e[t])}static _attributeNameForProperty(t,e){const i=void 0!==e&&e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=H){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e&&e.type;if(void 0===i)return t;const n=i===Boolean?q:"function"==typeof i?i:i.fromAttribute;return n?n(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?B:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&X?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=W){const n=this.constructor,s=n._propertyValueToAttribute(e,i);if(void 0!==s){const e=n._attributeNameForProperty(t,i);void 0!==e&&(this._updateState=this._updateState|Y,null===s?this.removeAttribute(e):this.setAttribute(e,s),this._updateState=this._updateState&~Y)}}_attributeToProperty(t,e){if(!(this._updateState&Y)){const i=this.constructor,n=i._attributeToPropertyMap.get(t);if(void 0!==n){const t=i._classProperties.get(n);this[n]=i._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const i=this.constructor._classProperties.get(t)||W;return this._requestPropertyUpdate(t,e,i)}return this._invalidate()}_requestPropertyUpdate(t,e,i){return this.constructor._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===i.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|G;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&G}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&X||(this._updateState=this._updateState|X,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}J._attributeToPropertyMap=new Map,J._finalized=!0,J._classProperties=new Map,J.properties={};
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
const K=t=>(e,i)=>{e.constructor.createProperty(i,t)};Q((t,e)=>t.querySelector(e)),Q((t,e)=>t.querySelectorAll(e));function Q(t){return e=>(i,n)=>{Object.defineProperty(i,n,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}
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
class Z extends J{update(t){super.update(t);const e=this.render();e instanceof y&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}Z.render=((t,e,i)=>{const n=i.scopeName,s=V.has(e),o=e instanceof ShadowRoot&&F&&t instanceof y,a=o&&!$.has(n),d=a?document.createDocumentFragment():e;if(((t,e,i)=>{let n=V.get(e);void 0===n&&(r(e,e.firstChild),V.set(e,n=new x(Object.assign({templateFactory:A},i))),n.appendInto(e)),n.setValue(t),n.commit()})(t,d,Object.assign({templateFactory:(t=>e=>{const i=z(e.type,t);let n=O.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},O.set(i,n));let s=n.stringsArray.get(e.strings);if(void 0!==s)return s;const o=e.strings.join(l);if(void 0===(s=n.keyString.get(o))){const i=e.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(i,t),s=new h(e,i),n.keyString.set(o,s)}return n.stringsArray.set(e.strings,s),s})(n)},i)),a){const t=V.get(d);V.delete(d),t.value instanceof g&&L(d,t.value.template,n),r(e,e.firstChild),e.appendChild(d),V.set(e,t)}!s&&o&&window.ShadyCSS.styleElement(e.host)});var tt,et=function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r};!function(t){t.Top="top",t.Left="left",t.Right="right",t.Bottom="bottom"}(tt||(tt={}));class it extends Z{constructor(){super(),this.direction=tt.Bottom}render(){return k`
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
        @media only screen and (max-height: 400px) and (min-width: 600px) {
          .balloon {
            width: 480px;
          }
        }
      </style>
      <div class="balloon ${this.direction}">
        <slot></slot>
      </div>
    `}}et([K({type:String})],it.prototype,"direction",void 0),window.customElements.define("atom-balloon",it);class nt extends Z{constructor(){super(),this.active=!1,this.initialized=!1,setTimeout(this.toggle.bind(this),600)}firstUpdated(){this.initialized=!0}toggle(){this.active=!this.active,this.initialized&&!this.active?this.hired=!this.hired:this.hired=!1,this.requestUpdate()}render(){return k`
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
          top: calc(75% - 340px);
          transition-duration: 0.3s;
          transition-property: margin-top, opacity;
        }
        .balloon[aria-selected="true"] {
          margin-top: 0;
          opacity: 1;
        }
        .linkedin {
          background-color: #0077b5;
          border-radius: 3px;
          box-sizing: border-box;
          color: #fff;
          left: 50%;
          margin-left: -38px;
          margin-top: 70px;
          position: absolute;
          text-align: center;
          top: 75%;
          width: 76px;
          padding: 3px;
          font-size: smaller;
        }
        .linkedin a:link,
        .linkedin a:visited {
          color: #fff;
          text-decoration: none;
        }
        @media only screen and (max-height: 400px) and (min-width: 600px) {
          .balloon {
            top: calc(75% - 260px);
            left: calc(50% - 240px);
          }
          .linkedin {
            margin-left: 60px;
            margin-top: 20px;
          }
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
        ${this.hired?k`
            <p class="linkedin">
              <a href="https://www.linkedin.com/in/yuinao/">LinkedIn</a>
            </p>
          `:k``}
      </main>
    `}}(function(t,e,i,n){var s,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,i,r):s(e,i))||r);o>3&&r&&Object.defineProperty(e,i,r)})([K({type:String})],nt.prototype,"gravatar",void 0),window.customElements.define("template-home",nt);window.customElements.define("page-home",class extends Z{static get properties(){return{}}constructor(){super()}render(){return k`
      <template-home gravatar="1e4b7d2f20a2ecb20497d9b8704e6107"></template-home>
    `}})}});
//# sourceMappingURL=app-9f51f27.js.map