!function(e){var t={};function s(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=2)}([function(e,t){
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.JSCompiler_renameProperty=function(e){return e}},function(e,t,s){"use strict";s.r(t);s(0);
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
window.ShadyDOM,Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let r=(i=document.baseURI||window.location.href).substring(0,i.lastIndexOf("/")+1);var i;let n=!1;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
let o=0;function a(){}a.prototype.__mixinApplications,a.prototype.__mixinSet;const l=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let s=o++;return function(r){let i=r.__mixinSet;if(i&&i[s])return r;let n=t,o=n.get(r);o||(o=e(r),n.set(r,o));let a=Object.create(o.__mixinSet||i||null);return a[s]=!0,o.__mixinSet=a,o}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let h=0,c=0,u=[],d=0,p=document.createTextNode("");new window.MutationObserver(function(){const e=u.length;for(let t=0;t<e;t++){let e=u[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}u.splice(0,e),c+=e}).observe(p,{characterData:!0});const _={run:e=>(p.textContent=d++,u.push(e),h++),cancel(e){const t=e-c;if(t>=0){if(!u[t])throw new Error("invalid async handle: "+e);u[t]=null}}},m=l(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let s in e)s in t||t._createPropertyAccessor(s)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,s){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),!this.__dataOld||e in this.__dataOld||(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,_.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(e,t,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,s))}_shouldPropertiesChange(e,t,s){return Boolean(t)}_propertiesChanged(e,t,s){}_shouldPropertyChange(e,t,s){return s!==t&&(s==s||t==t)}attributeChangedCallback(e,t,s,r){t!==s&&this._attributeToProperty(e,s),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,s,r)}_attributeToProperty(e,t,s){if(!this.__serializing){const r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,s||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,s){this.__serializing=!0,s=arguments.length<3?this[e]:s,this._valueToNodeAttribute(this,s,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,s){const r=this._serializeValue(t);void 0===r?e.removeAttribute(s):e.setAttribute(s,r)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}});const g=l(e=>{const t=m(e);function s(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;e.hasOwnProperty(JSCompiler_renameProperty("properties",e))&&e.properties&&(t=
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function(e){const t={};for(let s in e){const r=e[s];t[s]="function"==typeof r?{type:r}:r}return t}(e.properties)),e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){const e=this._properties;return e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=s(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=s(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});
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
const f=new Map;class y{constructor(e,t,s,r=R){this.strings=e,this.values=t,this.type=s,this.partCallback=r}getHTML(){const e=this.strings.length-1;let t="",s=!0;for(let r=0;r<e;r++){const e=this.strings[r];t+=e;const i=C(e);t+=(s=i>-1?i<e.length:s)?P:b}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}function v(e,t,s=function(e){let t=f.get(e.type);void 0===t&&(t=new Map,f.set(e.type,t));let s=t.get(e.strings);return void 0===s&&(s=new T(e,e.getTemplateElement()),t.set(e.strings,s)),s}){const r=s(e);let i=t.__templateInstance;if(void 0!==i&&i.template===r&&i._partCallback===e.partCallback)return void i.update(e.values);i=new I(r,e.partCallback,s),t.__templateInstance=i;const n=i._clone();i.update(e.values),z(t,t.firstChild),t.appendChild(n)}const b=`{{lit-${String(Math.random()).slice(2)}}}`,P=`\x3c!--${b}--\x3e`,w=new RegExp(`${b}|${P}`),x=/[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;function C(e){const t=e.lastIndexOf(">");return e.indexOf("<",t+1)>-1?e.length:t}class N{constructor(e,t,s,r,i){this.type=e,this.index=t,this.name=s,this.rawName=r,this.strings=i}}class T{constructor(e,t){this.parts=[],this.element=t;const s=this.element.content,r=document.createTreeWalker(s,133,null,!1);let i=-1,n=0;const o=[];let a,l;for(;r.nextNode();){i++,a=l;const t=l=r.currentNode;if(1===t.nodeType){if(!t.hasAttributes())continue;const s=t.attributes;let r=0;for(let e=0;e<s.length;e++)s[e].value.indexOf(b)>=0&&r++;for(;r-- >0;){const r=e.strings[n],o=x.exec(r)[1],a=s.getNamedItem(o),l=a.value.split(w);this.parts.push(new N("attribute",i,a.name,o,l)),t.removeAttribute(a.name),n+=l.length-1}}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(b)<0)continue;const s=t.parentNode,r=e.split(w),a=r.length-1;n+=a;for(let e=0;e<a;e++)s.insertBefore(""===r[e]?document.createComment(""):document.createTextNode(r[e]),t),this.parts.push(new N("node",i++));s.insertBefore(""===r[a]?document.createComment(""):document.createTextNode(r[a]),t),o.push(t)}else if(8===t.nodeType&&t.nodeValue===b){const e=t.parentNode,s=t.previousSibling;null===s||s!==a||s.nodeType!==Node.TEXT_NODE?e.insertBefore(document.createComment(""),t):i--,this.parts.push(new N("node",i++)),o.push(t),null===t.nextSibling?e.insertBefore(document.createComment(""),t):i--,l=a,n++}}for(const e of o)e.parentNode.removeChild(e)}}const A=(e,t)=>S(t)?(t=t(e),V):null===t?void 0:t,S=e=>"function"==typeof e&&!0===e.__litDirective,V={},O=e=>null===e||!("object"==typeof e||"function"==typeof e);class k{constructor(e,t,s,r){this.instance=e,this.element=t,this.name=s,this.strings=r,this.size=r.length-1,this._previousValues=[]}_interpolate(e,t){const s=this.strings,r=s.length-1;let i="";for(let n=0;n<r;n++){i+=s[n];const r=A(this,e[t+n]);if(r&&r!==V&&(Array.isArray(r)||"string"!=typeof r&&r[Symbol.iterator]))for(const e of r)i+=e;else i+=r}return i+s[r]}_equalToPreviousValues(e,t){for(let s=t;s<t+this.size;s++)if(this._previousValues[s]!==e[s]||!O(e[s]))return!1;return!0}setValue(e,t){if(this._equalToPreviousValues(e,t))return;const s=this.strings;let r;2===s.length&&""===s[0]&&""===s[1]?(r=A(this,e[t]),Array.isArray(r)&&(r=r.join(""))):r=this._interpolate(e,t),r!==V&&this.element.setAttribute(this.name,r),this._previousValues=e}}class E{constructor(e,t,s){this.instance=e,this.startNode=t,this.endNode=s,this._previousValue=void 0}setValue(e){if((e=A(this,e))!==V)if(O(e)){if(e===this._previousValue)return;this._setText(e)}else e instanceof y?this._setTemplateResult(e):Array.isArray(e)||e[Symbol.iterator]?this._setIterable(e):e instanceof Node?this._setNode(e):void 0!==e.then?this._setPromise(e):this._setText(e)}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_setNode(e){this._previousValue!==e&&(this.clear(),this._insert(e),this._previousValue=e)}_setText(e){const t=this.startNode.nextSibling;e=void 0===e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._setNode(document.createTextNode(e)),this._previousValue=e}_setTemplateResult(e){const t=this.instance._getTemplate(e);let s;this._previousValue&&this._previousValue.template===t?s=this._previousValue:(s=new I(t,this.instance._partCallback,this.instance._getTemplate),this._setNode(s._clone()),this._previousValue=s),s.update(e.values)}_setIterable(e){Array.isArray(this._previousValue)||(this.clear(),this._previousValue=[]);const t=this._previousValue;let s=0;for(const r of e){let e=t[s];if(void 0===e){let r=this.startNode;if(s>0){r=t[s-1].endNode=document.createTextNode(""),this._insert(r)}e=new E(this.instance,r,this.endNode),t.push(e)}e.setValue(r),s++}if(0===s)this.clear(),this._previousValue=void 0;else if(s<t.length){const e=t[s-1];t.length=s,this.clear(e.endNode.previousSibling),e.endNode=this.endNode}}_setPromise(e){this._previousValue=e,e.then(t=>{this._previousValue===e&&this.setValue(t)})}clear(e=this.startNode){z(this.startNode.parentNode,e.nextSibling,this.endNode)}}const R=(e,t,s)=>{if("attribute"===t.type)return new k(e,s,t.name,t.strings);if("node"===t.type)return new E(e,s,s.nextSibling);throw new Error(`Unknown part type ${t.type}`)};class I{constructor(e,t,s){this._parts=[],this.template=e,this._partCallback=t,this._getTemplate=s}update(e){let t=0;for(const s of this._parts)void 0===s.size?(s.setValue(e[t]),t++):(s.setValue(e,t),t+=s.size)}_clone(){const e=document.importNode(this.template.element.content,!0),t=this.template.parts;if(t.length>0){const s=document.createTreeWalker(e,133,null,!1);let r=-1;for(let e=0;e<t.length;e++){const i=t[e];for(;r<i.index;)r++,s.nextNode();this._parts.push(this._partCallback(this,i,s.currentNode))}}return e}}const z=(e,t,s=null)=>{let r=t;for(;r!==s;){const t=r.nextSibling;e.removeChild(r),r=t}},H=e=>t=>{const s=`${t.type}--${e}`;let r=f.get(s);void 0===r&&(r=new Map,f.set(s,r));let i=r.get(t.strings);if(void 0===i){const s=t.getTemplateElement();"object"==typeof window.ShadyCSS&&window.ShadyCSS.prepareTemplate(s,e),i=new T(t,s),r.set(t.strings,i)}return i};
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
const M=(e,...t)=>new y(e,t,"html",$),$=(e,t,s)=>{if("attribute"===t.type){if("on-"===t.rawName.substr(0,3)){return new class{constructor(e,t,s){this.instance=e,this.element=t,this.eventName=s}setValue(e){const t=A(this,e);t!==this._listener&&(null==t?this.element.removeEventListener(this.eventName,this):null==this._listener&&this.element.addEventListener(this.eventName,this),this._listener=t)}handleEvent(e){"function"==typeof this._listener?this._listener.call(this.element,e):"function"==typeof this._listener.handleEvent&&this._listener.handleEvent(e)}}(e,s,t.rawName.slice(3))}const r=t.name.substr(t.name.length-1);if("$"===r){const r=t.name.slice(0,-1);return new k(e,s,r,t.strings)}if("?"===r){return new class extends k{setValue(e,t){const s=this.strings;if(2!==s.length||""!==s[0]||""!==s[1])throw new Error("boolean attributes can only contain a single expression");{const s=A(this,e[t]);if(s===V)return;s?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}}(e,s,t.name.slice(0,-1),t.strings)}return new class extends k{setValue(e,t){const s=this.strings;let r;this._equalToPreviousValues(e,t)||((r=2===s.length&&""===s[0]&&""===s[1]?A(this,e[t]):this._interpolate(e,t))!==V&&(this.element[this.name]=r),this._previousValues=e)}}(e,s,t.rawName,t.strings)}return R(e,t,s)};class j extends(g(HTMLElement)){constructor(){super(...arguments),this.__renderComplete=null,this.__resolveRenderComplete=null,this.__isInvalid=!1,this.__isChanging=!1}ready(){this._root=this._createRoot(),super.ready(),this._firstRendered()}_firstRendered(){}_createRoot(){return this.attachShadow({mode:"open"})}_shouldPropertiesChange(e,t,s){const r=this._shouldRender(e,t,s);return!r&&this.__resolveRenderComplete&&this.__resolveRenderComplete(!1),r}_shouldRender(e,t,s){return!0}_propertiesChanged(e,t,s){super._propertiesChanged(e,t,s);const r=this._render(e);r&&void 0!==this._root&&this._applyRender(r,this._root),this._didRender(e,t,s),this.__resolveRenderComplete&&this.__resolveRenderComplete(!0)}_flushProperties(){this.__isChanging=!0,this.__isInvalid=!1,super._flushProperties(),this.__isChanging=!1}_shouldPropertyChange(e,t,s){const r=super._shouldPropertyChange(e,t,s);return r&&this.__isChanging&&console.trace("Setting properties in response to other properties changing "+`considered harmful. Setting '${e}' from `+`'${this._getProperty(e)}' to '${t}'.`),r}_render(e){throw new Error("_render() not implemented")}_applyRender(e,t){!function(e,t,s){v(e,t,H(s))}(e,t,this.localName)}_didRender(e,t,s){}_requestRender(){this._invalidateProperties()}_invalidateProperties(){this.__isInvalid=!0,super._invalidateProperties()}get renderComplete(){return this.__renderComplete||(this.__renderComplete=new Promise(e=>{this.__resolveRenderComplete=(t=>{this.__resolveRenderComplete=this.__renderComplete=null,e(t)})}),!this.__isInvalid&&this.__resolveRenderComplete&&Promise.resolve().then(()=>this.__resolveRenderComplete(!1))),this.__renderComplete}}window.customElements.define("atom-layout-grid",class extends j{static get properties(){return{column:Number}}constructor(){super()}_render({column:e}){return M`
      <style>
        :host {
          --atom-layout-grid: calc((var(--app-column) * ${e}) + (var(--app-gutter) * ${e-1}));
        }
        div {
          background-color: #eee;
          display: inline-block;
          margin-bottom: var(--app-gutter);
          margin-right: var(--app-gutter);
          width: var(--atom-layout-grid);
          min-height: var(--atom-layout-grid);
        }
      </style>
      <div>
        <h1>Yo</h1>
        <slot></slot>
      </div>
    `}});window.customElements.define("atom-layout",class extends j{static get properties(){return{margin:Number}}constructor(){super()}_render({margin:e}){return M`
      <style>
        :host {
          --atom-layout-margin: ${e};
        }
        div {
          margin-left: calc(var(--app-baseline-regular) * var(--atom-layout-margin));
          margin-right: calc(var(--app-baseline-regular) * var(--atom-layout-margin));
        }
      </style>
      <div>
        <slot></slot>
      </div>
    `}});window.customElements.define("atom-heading",class extends j{static get properties(){return{}}_render(){return M`
      <style>
        :host {
          color: #f00;
        }
        h1 {
          color: #0f0;
          font-weight: normal;
        }
        h1 ::slotted {
          color: #00f;
        }
      </style>
      <h1><slot></slot></h1>
    `}});window.customElements.define("template-home",class extends j{static get properties(){return{messages:Array}}constructor(){super(),this.messages=["Hey","Hi!","Hello.","Greetings!","Yo","Hola~","Hey","Hi!","Hello.","Greetings!","Yo","Hola~"]}_render({messages:e}){return M`
      <style>
        :host {
          --app-primary-color: #eee;
          --app-secondary-color: #000;

          display: block;
        }

        .testing {
          background-color: #eee;
        }
      </style>

      <atom-layout margin="3">
        <header>
          <h1>My portal.</h1>
          <ul role="navigation">
            <li>Unko</li>
            <li>Unko</li>
            <li>Unko</li>
          </ul>
        </header>

        <main>
          ${e.map(e=>M`
            <atom-layout-grid column="3">
              <p>${e}</p>
            </atom-layout-grid>
          `)}
        </main>
      </atom-layout>
    `}});var F;window.customElements.define("page-home",class extends j{static get properties(){return{}}constructor(){super()}_render(){return M`
      <template-home></template-home>
    `}}),n=!0,F=window.MyAppGlobals.rootPath,r=F},function(e,t,s){e.exports=s(1)}]);
//# sourceMappingURL=app-12ca1e2.js.map