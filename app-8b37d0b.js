!function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=15)}({15:function(t,e,s){t.exports=s(16)},16:function(t,e,s){"use strict";s.r(e);
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
const i=new WeakMap,n=t=>"function"==typeof t&&i.has(t),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(t,e,s=null)=>{let i=e;for(;i!==s;){const e=i.nextSibling;t.removeChild(i),i=e}},a={},l={},d=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${d}--\x3e`,p=new RegExp(`${d}|${c}`),h="$lit$";class u{constructor(t,e){this.parts=[],this.element=e;let s=-1,i=0;const n=[],r=e=>{const o=e.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){s++;const e=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const n=e.attributes;let r=0;for(let t=0;t<n.length;t++)n[t].value.indexOf(d)>=0&&r++;for(;r-- >0;){const n=t.strings[i],r=g.exec(n)[2],o=r.toLowerCase()+h,a=e.getAttribute(o).split(p);this.parts.push({type:"attribute",index:s,name:r,strings:a}),e.removeAttribute(o),i+=a.length-1}}"TEMPLATE"===e.tagName&&r(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(d)>=0){const r=e.parentNode,o=t.split(p),a=o.length-1;for(let t=0;t<a;t++)r.insertBefore(""===o[t]?m():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:++s});""===o[a]?(r.insertBefore(m(),e),n.push(e)):e.data=o[a],i+=a}}else if(8===e.nodeType)if(e.data===d){const t=e.parentNode;null!==e.previousSibling&&s!==l||(s++,t.insertBefore(m(),e)),l=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(n.push(e),s--),i++}else{let t=-1;for(;-1!==(t=e.data.indexOf(d,t+1));)this.parts.push({type:"node",index:-1})}}};r(e);for(const t of n)t.parentNode.removeChild(t)}}const f=t=>-1!==t.index,m=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class y{constructor(t,e,s){this._parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this._parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let s=0,i=0;const n=t=>{const r=document.createTreeWalker(t,133,null,!1);let o=r.nextNode();for(;s<e.length&&null!==o;){const t=e[s];if(f(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(o.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(o,t.name,t.strings,this.options));s++}else i++,"TEMPLATE"===o.nodeName&&n(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return n(t),r&&(document.adoptNode(t),customElements.upgrade(t)),t}}
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
 */class _{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="";for(let s=0;s<t;s++){const t=this.strings[s],i=g.exec(t);e+=i?t.substr(0,i.index)+i[1]+i[2]+h+i[3]+d:t+c}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
const v=t=>null===t||!("object"==typeof t||"function"==typeof t);class b{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)s+="string"==typeof e?e:String(e);else s+="string"==typeof t?t:String(t)}}return s+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===a||v(t)&&t===this.value||(this.value=t,n(t)||(this.committer.dirty=!0))}commit(){for(;n(this.value);){const t=this.value;this.value=a,t(this)}this.value!==a&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(m()),this.endNode=t.appendChild(m())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=m()),t._insert(this.endNode=m())}insertAfterPart(t){t._insert(this.startNode=m()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}const t=this._pendingValue;t!==a&&(v(t)?t!==this.value&&this._commitText(t):t instanceof _?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===l?(this.value=l,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const s=new y(e,t.processor,this.options),i=s._clone();s.update(t.values),this._commitNode(i),this.value=s}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)void 0===(s=e[i])&&(s=new x(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){o(this.startNode.parentNode,t.nextSibling,this.endNode)}}class w{constructor(t,e,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=a}}class P extends b{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends S{}let C=!1;try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class A{constructor(t,e,s){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;n(this._pendingValue);){const t=this._pendingValue;this._pendingValue=a,t(this)}if(this._pendingValue===a)return;const t=this._pendingValue,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=T(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const T=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
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
 */const k=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];return"."===n?new P(t,e.slice(1),s).parts:"@"===n?[new A(t,e.slice(1),i.eventContext)]:"?"===n?[new w(t,e.slice(1),s)]:new b(t,e,s).parts}handleTextExpression(t){return new x(t)}};
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
 */function O(t){let e=E.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},E.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(d);return void 0===(s=e.keyString.get(i))&&(s=new u(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const E=new Map,V=new WeakMap,R=(t,...e)=>new _(t,e,"html",k),j=133;
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
 */function M(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,j,null,!1);let r=U(i),o=i[r],a=-1,l=0;const d=[];let c=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(d.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==o&&o.index===a;)o.index=null!==c?-1:o.index-l,o=i[r=U(i,r)]}d.forEach(t=>t.parentNode.removeChild(t))}const z=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,j,null,!1);for(;s.nextNode();)e++;return e},U=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(f(e))return s}return-1};
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
const q=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),I=!1);const $=["html","svg"],L=new Set,F=(t,e,s)=>{L.add(s);const i=t.querySelectorAll("style");if(0===i.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,s);const n=document.createElement("style");for(let t=0;t<i.length;t++){const e=i[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}if((t=>{$.forEach(e=>{const s=E.get(q(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),M(t,s)})})})(s),function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,j,null,!1);let o=U(n),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=z(e),s.parentNode.insertBefore(e,s));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=U(n,o);return}o=U(n,o)}}(e,n,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,s),window.ShadyCSS.nativeShadow){const s=e.element.content.querySelector("style");t.insertBefore(s.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(n,e.element.content.firstChild);const t=new Set;t.add(n),M(e,t)}},B=(t,e)=>t,H=(t,e)=>{if(t in e)for(;e!==Object.prototype;){if(e.hasOwnProperty(t))return Object.getOwnPropertyDescriptor(e,t);e=Object.getPrototypeOf(e)}},W={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},D=(t,e)=>e!==t&&(e==e||t==t),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:D},Y=Promise.resolve(!0),G=1,K=4,Q=8,X=16,Z=32;class tt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Y,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,s]of this._classProperties){const i=this._attributeNameForProperty(e,s);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}return t}static _ensureClassProperties(){if(!this.hasOwnProperty(B("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=J){if(this._ensureClassProperties(),this._classProperties.set(t,e),!e.noAccessor){const e=H(t,this.prototype);let s;if(void 0!==e&&e.set&&e.get){const{set:i,get:n}=e;s={get(){return n.call(this)},set(e){const s=this[t];i.call(this,e),this.requestUpdate(t,s)},configurable:!0,enumerable:!0}}else{const e="symbol"==typeof t?Symbol():`__${t}`;s={get(){return this[e]},set(s){const i=this[t];this[e]=s,this.requestUpdate(t,i)},configurable:!0,enumerable:!0}}Object.defineProperty(this.prototype,t,s)}}static _finalize(){if(this.hasOwnProperty(B("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t._finalize&&t._finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(B("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=D){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||W,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||W.toAttribute)(t,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Z,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=J){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=this._updateState|Q,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=this._updateState&~Q}}_attributeToProperty(t,e){if(this._updateState&Q)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||J;this._updateState=this._updateState|X,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~X}}requestUpdate(t,e){let s=!0;if(void 0!==t&&!this._changedProperties.has(t)){const i=this.constructor,n=i._classProperties.get(t)||J;i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.set(t,e),!0!==n.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|K;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Z}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&G}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}tt.finalized=!0;
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
const et=(t,e)=>({kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}}),st=t=>(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):et(t,e),it=(rt((t,e)=>t.querySelector(e)),rt((t,e)=>t.querySelectorAll(e)),(t,e,s)=>{Object.defineProperty(e,s,t)}),nt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function rt(t){return e=>(s,i)=>{const n={get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0};return void 0!==i?it(n,s,i):nt(n,s)}}const ot="adoptedStyleSheets"in Document.prototype;
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
class at extends tt{static get styles(){return[]}static get _uniqueStyles(){if(void 0===this._styles){const t=this.styles.reduceRight((t,e)=>(t.add(e),t),new Set);this._styles=[],t.forEach(t=>this._styles.unshift(t))}return this._styles}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._uniqueStyles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ot?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof _&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._uniqueStyles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}at.finalized=!0,at.render=((t,e,s)=>{const i=s.scopeName,n=V.has(e),r=e instanceof ShadowRoot&&I&&t instanceof _,a=r&&!L.has(i),l=a?document.createDocumentFragment():e;if(((t,e,s)=>{let i=V.get(e);void 0===i&&(o(e,e.firstChild),V.set(e,i=new x(Object.assign({templateFactory:O},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:(t=>e=>{const s=q(e.type,t);let i=E.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},E.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(d);if(void 0===(n=i.keyString.get(r))){const s=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(s,t),n=new u(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n})(i)},s)),a){const t=V.get(l);V.delete(l),t.value instanceof y&&F(l,t.value.template,i),o(e,e.firstChild),e.appendChild(l),V.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)});var lt,dt=function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);return r>3&&o&&Object.defineProperty(e,s,o),o};!function(t){t.Top="top",t.Left="left",t.Right="right",t.Bottom="bottom"}(lt||(lt={}));class ct extends at{constructor(){super(),this.direction=lt.Bottom}render(){return R`
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
    `}}dt([st({type:String})],ct.prototype,"direction",void 0),window.customElements.define("atom-balloon",ct);class pt extends at{constructor(){super(),this.active=!1,this.initialized=!1,setTimeout(this.toggle.bind(this),600)}firstUpdated(){this.initialized=!0}toggle(){this.active=!this.active,this.initialized&&!this.active?this.hired=!this.hired:this.hired=!1,this.requestUpdate()}render(){return R`
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
        ${this.hired?R`
            <p class="linkedin">
              <a href="https://www.linkedin.com/in/yuinao/">LinkedIn</a>
            </p>
          `:R``}
      </main>
    `}}(function(t,e,s,i){var n,r=arguments.length,o=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,s,o):n(e,s))||o);r>3&&o&&Object.defineProperty(e,s,o)})([st({type:String})],pt.prototype,"gravatar",void 0),window.customElements.define("template-home",pt);window.customElements.define("page-home",class extends at{static get properties(){return{}}constructor(){super()}render(){return R`
      <template-home gravatar="1e4b7d2f20a2ecb20497d9b8704e6107"></template-home>
    `}})}});
//# sourceMappingURL=app-8b37d0b.js.map