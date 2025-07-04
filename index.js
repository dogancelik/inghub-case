/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let s=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const n=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new s(n,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,m=f?f.emptyScript:"",v=p.reactiveElementPolyfillSupport,g=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);s?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(e)i.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of n){const n=document.createElement("style"),s=t.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=e.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n,this[n]=s.fromAttribute(e,t.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,s=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??w)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==s||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[g("elementProperties")]=new Map,x[g("finalized")]=new Map,v?.({ReactiveElement:x}),(p.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,E=$.trustedTypes,k=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+S,A=`<${z}>`,M=document,L=()=>M.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,_=Array.isArray,O="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,P=/>/g,D=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,U=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),F=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),H=new WeakMap,J=M.createTreeWalker(M,129);function G(t,e){if(!_(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const V=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===R?"!--"===c[1]?r=T:void 0!==c[1]?r=P:void 0!==c[2]?(I.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=D):void 0!==c[3]&&(r=D):r===D?">"===c[0]?(r=s??R,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?D:'"'===c[3]?U:j):r===U||r===j?r=D:r===T||r===P?r=R:(r=D,s=void 0);const d=r===D&&t[e+1].startsWith("/>")?" ":"";o+=r===R?i+A:l>=0?(n.push(a),i.slice(0,l)+C+i.slice(l)+S+d):i+S+(-2===l?e:d)}return[G(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class W{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[c,l]=V(t,e);if(this.el=W.createElement(c,i),J.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=J.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(C)){const e=l[o++],i=n.getAttribute(t).split(S),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:s,name:r[2],strings:i,ctor:"."===r[1]?X:"?"===r[1]?tt:"@"===r[1]?et:Q}),n.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:s}),n.removeAttribute(t));if(I.test(n.tagName)){const t=n.textContent.split(S),e=t.length-1;if(e>0){n.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],L()),J.nextNode(),a.push({type:2,index:++s});n.append(t[e],L())}}}else if(8===n.nodeType)if(n.data===z)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(S,t+1));)a.push({type:7,index:s}),t+=S.length-1}s++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,n){if(e===F)return e;let s=void 0!==n?i._$Co?.[n]:i._$Cl;const o=N(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),void 0===o?s=void 0:(s=new o(t),s._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=s:i._$Cl=s),void 0!==s&&(e=Y(t,s._$AS(t,e.values),s,n)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??M).importNode(e,!0);J.currentNode=n;let s=J.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new K(s,s.nextSibling,this,t):1===a.type?e=new a.ctor(s,a.name,a.strings,this,t):6===a.type&&(e=new it(s,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(s=J.nextNode(),o++)}return J.currentNode=M,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),N(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>_(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=W.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Z(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=H.get(t.strings);return void 0===e&&H.set(t.strings,e=new W(t)),e}k(t){_(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new K(this.O(L()),this.O(L()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=Y(this,t,e,0),o=!N(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=Y(this,n[i+r],e,r),a===F&&(a=this._$AH[r]),o||=!N(a)||a!==this._$AH[r],a===q?t=q:t!==q&&(t+=(a??"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}}class et extends Q{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??q)===F)return;const i=this._$AH,n=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==q&&(i===q||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const nt=$.litHtmlPolyfillSupport;nt?.(W,K),($.litHtmlVersions??=[]).push("3.3.0");const st=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ot=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let s=n._$litPart$;if(void 0===s){const t=i?.renderBefore??null;n._$litPart$=s=new K(e.insertBefore(L(),t),t,void 0,i??{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};ot._$litElement$=!0,ot.finalized=!0,st.litElementHydrateSupport?.({LitElement:ot});const rt=st.litElementPolyfillSupport;function at(t,e){void 0===e&&(e={});for(var i=function(t){for(var e=[],i=0;i<t.length;){var n=t[i];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)e.push({type:"CHAR",index:i,value:t[i++]});else{var s=1,o="";if("?"===t[a=i+1])throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<t.length;)if("\\"!==t[a]){if(")"===t[a]){if(0===--s){a++;break}}else if("("===t[a]&&(s++,"?"!==t[a+1]))throw new TypeError("Capturing groups are not allowed at ".concat(a));o+=t[a++]}else o+=t[a++]+t[a++];if(s)throw new TypeError("Unbalanced pattern at ".concat(i));if(!o)throw new TypeError("Missing pattern at ".concat(i));e.push({type:"PATTERN",index:i,value:o}),i=a}else{for(var r="",a=i+1;a<t.length;){var c=t.charCodeAt(a);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;r+=t[a++]}if(!r)throw new TypeError("Missing parameter name at ".concat(i));e.push({type:"NAME",index:i,value:r}),i=a}else e.push({type:"CLOSE",index:i,value:t[i++]});else e.push({type:"OPEN",index:i,value:t[i++]});else e.push({type:"ESCAPED_CHAR",index:i++,value:t[i++]});else e.push({type:"MODIFIER",index:i,value:t[i++]})}return e.push({type:"END",index:i,value:""}),e}(t),n=e.prefixes,s=void 0===n?"./":n,o=e.delimiter,r=void 0===o?"/#?":o,a=[],c=0,l=0,h="",d=function(t){if(l<i.length&&i[l].type===t)return i[l++].value},u=function(t){var e=d(t);if(void 0!==e)return e;var n=i[l],s=n.type,o=n.index;throw new TypeError("Unexpected ".concat(s," at ").concat(o,", expected ").concat(t))},p=function(){for(var t,e="";t=d("CHAR")||d("ESCAPED_CHAR");)e+=t;return e},f=function(t){var e=a[a.length-1],i=t||(e&&"string"==typeof e?e:"");if(e&&!i)throw new TypeError('Must have text between two parameters, missing text after "'.concat(e.name,'"'));return!i||function(t){for(var e=0,i=r;e<i.length;e++){var n=i[e];if(t.indexOf(n)>-1)return!0}return!1}(i)?"[^".concat(ht(r),"]+?"):"(?:(?!".concat(ht(i),")[^").concat(ht(r),"])+?")};l<i.length;){var m=d("CHAR"),v=d("NAME"),g=d("PATTERN");if(v||g){var y=m||"";-1===s.indexOf(y)&&(h+=y,y=""),h&&(a.push(h),h=""),a.push({name:v||c++,prefix:y,suffix:"",pattern:g||f(y),modifier:d("MODIFIER")||""})}else{var w=m||d("ESCAPED_CHAR");if(w)h+=w;else if(h&&(a.push(h),h=""),d("OPEN")){y=p();var b=d("NAME")||"",x=d("PATTERN")||"",$=p();u("CLOSE"),a.push({name:b||(x?c++:""),pattern:b&&!x?f(y):x,prefix:y,suffix:$,modifier:d("MODIFIER")||""})}else u("END")}}return a}function ct(t,e){return lt(at(t,e),e)}function lt(t,e){void 0===e&&(e={});var i=dt(e),n=e.encode,s=void 0===n?function(t){return t}:n,o=e.validate,r=void 0===o||o,a=t.map(function(t){if("object"==typeof t)return new RegExp("^(?:".concat(t.pattern,")$"),i)});return function(e){for(var i="",n=0;n<t.length;n++){var o=t[n];if("string"!=typeof o){var c=e?e[o.name]:void 0,l="?"===o.modifier||"*"===o.modifier,h="*"===o.modifier||"+"===o.modifier;if(Array.isArray(c)){if(!h)throw new TypeError('Expected "'.concat(o.name,'" to not repeat, but got an array'));if(0===c.length){if(l)continue;throw new TypeError('Expected "'.concat(o.name,'" to not be empty'))}for(var d=0;d<c.length;d++){var u=s(c[d],o);if(r&&!a[n].test(u))throw new TypeError('Expected all "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(u,'"'));i+=o.prefix+u+o.suffix}}else if("string"!=typeof c&&"number"!=typeof c){if(!l){var p=h?"an array":"a string";throw new TypeError('Expected "'.concat(o.name,'" to be ').concat(p))}}else{u=s(String(c),o);if(r&&!a[n].test(u))throw new TypeError('Expected "'.concat(o.name,'" to match "').concat(o.pattern,'", but got "').concat(u,'"'));i+=o.prefix+u+o.suffix}}else i+=o}return i}}function ht(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function dt(t){return t&&t.sensitive?"":"i"}function ut(t,e,i){return function(t,e,i){void 0===i&&(i={});for(var n=i.strict,s=void 0!==n&&n,o=i.start,r=void 0===o||o,a=i.end,c=void 0===a||a,l=i.encode,h=void 0===l?function(t){return t}:l,d=i.delimiter,u=void 0===d?"/#?":d,p=i.endsWith,f="[".concat(ht(void 0===p?"":p),"]|$"),m="[".concat(ht(u),"]"),v=r?"^":"",g=0,y=t;g<y.length;g++){var w=y[g];if("string"==typeof w)v+=ht(h(w));else{var b=ht(h(w.prefix)),x=ht(h(w.suffix));if(w.pattern)if(e&&e.push(w),b||x)if("+"===w.modifier||"*"===w.modifier){var $="*"===w.modifier?"?":"";v+="(?:".concat(b,"((?:").concat(w.pattern,")(?:").concat(x).concat(b,"(?:").concat(w.pattern,"))*)").concat(x,")").concat($)}else v+="(?:".concat(b,"(").concat(w.pattern,")").concat(x,")").concat(w.modifier);else{if("+"===w.modifier||"*"===w.modifier)throw new TypeError('Can not repeat "'.concat(w.name,'" without a prefix and suffix'));v+="(".concat(w.pattern,")").concat(w.modifier)}else v+="(?:".concat(b).concat(x,")").concat(w.modifier)}}if(c)s||(v+="".concat(m,"?")),v+=i.endsWith?"(?=".concat(f,")"):"$";else{var E=t[t.length-1],k="string"==typeof E?m.indexOf(E[E.length-1])>-1:void 0===E;s||(v+="(?:".concat(m,"(?=").concat(f,"))?")),k||(v+="(?=".concat(m,"|").concat(f,")"))}return new RegExp(v,dt(i))}(at(t,i),e,i)}function pt(t,e,i){return t instanceof RegExp?function(t,e){if(!e)return t;for(var i=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,s=i.exec(t.source);s;)e.push({name:s[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),s=i.exec(t.source);return t}(t,e):Array.isArray(t)?function(t,e,i){var n=t.map(function(t){return pt(t,e,i).source});return new RegExp("(?:".concat(n.join("|"),")"),dt(i))}(t,e,i):ut(t,e,i)}function ft(t){return"object"==typeof t&&!!t}function mt(t){return"function"==typeof t}function vt(t){return"string"==typeof t}function gt(t=[]){return Array.isArray(t)?t:[t]}function yt(t){return`[Vaadin.Router] ${t}`}rt?.({LitElement:ot}),(st.litElementVersions??=[]).push("4.2.0");class wt extends Error{code;context;constructor(t){super(yt(`Page not found (${t.pathname})`)),this.context=t,this.code=404}}const bt=Symbol("NotFoundResult");function xt(t){return new wt(t)}function $t(t){return(Array.isArray(t)?t[0]:t)??""}function Et(t){return $t(t?.path)}const kt=new Map;function Ct(t){try{return decodeURIComponent(t)}catch{return t}}kt.set("|false",{keys:[],pattern:/(?:)/u});var St=function(t,e,i=!1,n=[],s){const o=`${t}|${String(i)}`,r=$t(e);let a=kt.get(o);if(!a){const e=[];a={keys:e,pattern:pt(t,e,{end:i,strict:""===t})},kt.set(o,a)}const c=a.pattern.exec(r);if(!c)return null;const l={...s};for(let t=1;t<c.length;t++){const e=a.keys[t-1],i=e.name,n=c[t];void 0===n&&Object.hasOwn(l,i)||("+"===e.modifier||"*"===e.modifier?l[i]=n?n.split(/[/?#]/u).map(Ct):[]:l[i]=n?Ct(n):n)}return{keys:[...n,...a.keys],params:l,path:c[0]}};var zt=function t(e,i,n,s,o){let r,a,c=0,l=Et(e);return l.startsWith("/")&&(n&&(l=l.substring(1)),n=!0),{next(h){if(e===h)return{done:!0,value:void 0};e.i??=function(t){return Array.isArray(t)&&t.length>0?t:void 0}(e.children);const d=e.i??[],u=!e.i&&!e.children;if(!r&&(r=St(l,i,u,s,o),r))return{value:{keys:r.keys,params:r.params,path:r.path,route:e}};if(r&&d.length>0)for(;c<d.length;){if(!a){const s=d[c];s.parent=e;let o=r.path.length;o>0&&"/"===i.charAt(o)&&(o+=1),a=t(s,i.substring(o),n,r.keys,r.params)}const s=a.next(h);if(!s.done)return{done:!1,value:s.value};a=null,c+=1}return{done:!0,value:void 0}}}};function At(t){if(mt(t.route.action))return t.route.action(t)}class Mt extends Error{code;context;constructor(t,e){let i=`Path '${t.pathname}' is not properly resolved due to an error.`;const n=Et(t.route);n&&(i+=` Resolution had failed on route: '${n}'`),super(i,e),this.code=e?.code,this.context=t}warn(){console.warn(this.message)}}class Lt{baseUrl;#t;errorHandler;resolveRoute;#e;constructor(t,{baseUrl:e="",context:i,errorHandler:n,resolveRoute:s=At}={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e,this.errorHandler=n,this.resolveRoute=s,Array.isArray(t)?this.#e={i:t,m:!0,action:()=>{},path:""}:this.#e={...t,parent:void 0},this.#t={...i,hash:"",next:async()=>bt,params:{},pathname:"",resolver:this,route:this.#e,search:"",chain:[]}}get root(){return this.#e}get context(){return this.#t}get v(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#e.i??[]]}removeRoutes(){this.#e.i=[]}async resolve(t){const e=this,i={...this.#t,...vt(t)?{pathname:t}:t,next:c},n=zt(this.#e,this.S(i.pathname)??i.pathname,!!this.baseUrl),s=this.resolveRoute;let o=null,r=null,a=i;async function c(t=!1,l=o?.value?.route,h){const d=null===h?o?.value?.route:void 0;if(o=r??n.next(d),r=null,!t&&(o.done||!function(t,e){let i=t;for(;i;)if(i=i.parent,i===e)return!0;return!1}(o.value.route,l)))return r=o,bt;if(o.done)throw xt(i);a={...i,params:o.value.params,route:o.value.route,chain:a.chain?.slice()},function(t,e){const{path:i,route:n}=e;if(n&&!n.m){const e={path:i,route:n};if(n.parent&&t.chain)for(let e=t.chain.length-1;e>=0&&t.chain[e].route!==n.parent;e--)t.chain.pop();t.chain?.push(e)}}(a,o.value);const u=await s(a);return null!=u&&u!==bt?(a.result=(p=u)&&"object"==typeof p&&"next"in p&&"params"in p&&"result"in p&&"route"in p?u.result:u,e.#t=a,a):await c(t,l,u);var p}try{return await c(!0,this.#e)}catch(t){const e=t instanceof wt?t:new Mt(a,{code:500,cause:t});if(this.errorHandler)return a.result=this.errorHandler(e),a;throw t}}setRoutes(t){this.#e.i=[...gt(t)]}S(t){if(!this.baseUrl)return t;const e=this.v,i=t.startsWith("/")?new URL(e).origin+t:`./${t}`,n=new URL(i,e).href;return n.startsWith(e)?n.slice(e.length):void 0}addRoutes(t){return this.#e.i=[...this.#e.i??[],...gt(t)],this.getRoutes()}}function Nt(t,e,i,n){const s=e.name??n?.(e);if(s&&(t.has(s)?t.get(s)?.push(e):t.set(s,[e])),Array.isArray(i))for(const s of i)s.parent=e,Nt(t,s,s.i??s.children,n)}function _t(t,e){const i=t.get(e);if(i){if(i.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return i[0]}}var Ot=function(t,e={}){if(!(t instanceof Lt))throw new TypeError("An instance of Resolver is expected");const i=new Map,n=new Map;return(s,o)=>{let r=_t(n,s);if(!r&&(n.clear(),Nt(n,t.root,t.root.i,e.cacheKeyProvider),r=_t(n,s),!r))throw new Error(`Route "${s}" not found`);let a=r.fullPath?i.get(r.fullPath):void 0;if(!a){let t=Et(r),e=r.parent;for(;e;){const i=Et(e);i&&(t=`${i.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`),e=e.parent}const n=at(t),s=Object.create(null);for(const t of n)vt(t)||(s[t.name]=!0);a={keys:s,tokens:n},i.set(t,a),r.fullPath=t}let c=lt(a.tokens,{encode:encodeURIComponent,...e})(o)||"/";if(e.stringifyQueryParams&&o){const t={};for(const[e,i]of Object.entries(o))!(e in a.keys)&&i&&(t[e]=i);const i=e.stringifyQueryParams(t);i&&(c+=i.startsWith("?")?i:`?${i}`)}return c}};const Rt=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,Tt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Pt(t,e){if("function"!=typeof t)return;const i=Rt.exec(t.toString());if(i)try{t=new Function(i[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};const Dt=function(t,e){if(window.Vaadin.developmentMode)return Pt(t,e)};function jt(){
/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(Tt?!(Tt&&Object.keys(Tt).map(t=>Tt[t]).filter(t=>t.productionMode).length>0):!Pt(function(){return!0}))}catch(t){return!1}}());!function(t,e=(window.Vaadin??={})){e.registrations??=[],e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}(),Dt(jt);var Ut=async function(t,e){return t.classList.add(e),await new Promise(i=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const n=t.getBoundingClientRect(),s=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;t.setAttribute("style",`position: absolute; ${s}`),((t,e)=>{const i=()=>{t.removeEventListener("animationend",i),e()};t.addEventListener("animationend",i)})(t,()=>{t.classList.remove(e),t.removeAttribute("style"),i()})}else t.classList.remove(e),i()})};function It(t){if(!t||!vt(t.path))throw new Error(yt('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!(mt(t.action)||Array.isArray(t.children)||mt(t.children)||vt(t.component)||vt(t.redirect)))throw new Error(yt(`Expected route config "${t.path}" to include either "component, redirect" or "action" function but none found.`));t.redirect&&["bundle","component"].forEach(e=>{e in t&&console.warn(yt(`Route config "${String(t.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function Bt(t){gt(t).forEach(t=>It(t))}function Ft(t,e){const i=e.v;return i?new URL(t.replace(/^\//u,""),i).pathname:t}function qt(t){return t.map(t=>t.path).reduce((t,e)=>e.length?`${t.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`:t,"")}function Ht({chain:t=[],hash:e="",params:i={},pathname:n="",redirectFrom:s,resolver:o,search:r=""},a){const c=t.map(t=>t.route);return{baseUrl:o?.baseUrl??"",getUrl:(e={})=>o?Ft(ct(function(t){return qt(t.map(t=>t.route))}(t))({...i,...e}),o):"",hash:e,params:i,pathname:n,redirectFrom:s,route:a??(Array.isArray(c)?c.at(-1):void 0)??null,routes:c,search:r,searchParams:new URLSearchParams(r)}}function Jt(t,e){const i={...t.params};return{redirect:{from:t.pathname,params:i,pathname:e}}}function Gt(t,e,...i){if("function"==typeof t)return t.apply(e,i)}function Vt(t,e,...i){return n=>n&&ft(n)&&("cancel"in n||"redirect"in n)?n:Gt(e?.[t],e,...i)}function Wt(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:"go"===t,detail:e}))}function Yt(t){if(t instanceof Element)return t.nodeName.toLowerCase()}function Zt(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const i=t instanceof MouseEvent?t.composedPath():t.path??[];for(let t=0;t<i.length;t++){const n=i[t];if("nodeName"in n&&"a"===n.nodeName.toLowerCase()){e=n;break}}for(;e&&e instanceof Node&&"a"!==Yt(e);)e=e.parentNode;if(!e||"a"!==Yt(e))return;const n=e;if(n.target&&"_self"!==n.target.toLowerCase())return;if(n.hasAttribute("download"))return;if(n.hasAttribute("router-ignore"))return;if(n.pathname===window.location.pathname&&""!==n.hash)return;const s=n.origin||function(t){const{port:e,protocol:i}=t;return`${i}//${"http:"===i&&"80"===e||"https:"===i&&"443"===e?t.hostname:t.host}`}(n);if(s!==window.location.origin)return;const{hash:o,pathname:r,search:a}=n;Wt("go",{hash:o,pathname:r,search:a})&&t instanceof MouseEvent&&(t.preventDefault(),"click"===t.type&&window.scrollTo(0,0))}function Kt(t){if("vaadin-router-ignore"===t.state)return;const{hash:e,pathname:i,search:n}=window.location;Wt("go",{hash:e,pathname:i,search:n})}let Qt=[];const Xt={CLICK:{activate(){window.document.addEventListener("click",Zt)},inactivate(){window.document.removeEventListener("click",Zt)}},POPSTATE:{activate(){window.addEventListener("popstate",Kt)},inactivate(){window.removeEventListener("popstate",Kt)}}};function te(t=[]){Qt.forEach(t=>t.inactivate()),t.forEach(t=>t.activate()),Qt=t}function ee(){return{cancel:!0}}const ie={A:-1,params:{},route:{m:!0,children:[],path:"",action(){}},pathname:"",next:async()=>bt};class ne extends Lt{location=Ht({resolver:this});ready=Promise.resolve(this.location);#i=new WeakSet;#n=new WeakSet;#s=this.#o.bind(this);#r=0;#a;M;#c;#l=null;#h=null;constructor(t,e){const i=document.head.querySelector("base"),n=i?.getAttribute("href");super([],{baseUrl:n?new URL(n,document.URL).href.replace(/[^/]*$/u,""):void 0,...e,resolveRoute:async t=>await this.#d(t)}),te(Object.values(Xt)),this.setOutlet(t),this.subscribe()}async#d(t){const{route:e}=t;if(mt(e.children)){let i=await e.children(function({next:t,...e}){return e}(t));mt(e.children)||({children:i}=e),function(t,e){if(!Array.isArray(t)&&!ft(t))throw new Error(yt(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(t)}`));const i=gt(t);i.forEach(t=>It(t)),e.i=i}(i,e)}const i={component:t=>{const e=document.createElement(t);return this.#n.add(e),e},prevent:ee,redirect:e=>Jt(t,e)};return await Promise.resolve().then(async()=>{if(this.#u(t))return await Gt(e.action,e,t,i)}).then(t=>null==t||"object"!=typeof t&&"symbol"!=typeof t||!(t instanceof HTMLElement||t===bt||ft(t)&&"redirect"in t)?vt(e.redirect)?i.redirect(e.redirect):void 0:t).then(t=>null!=t?t:vt(e.component)?i.component(e.component):void 0)}setOutlet(t){t&&this.#p(t),this.#a=t}getOutlet(){return this.#a}async setRoutes(t,e=!1){return this.M=void 0,this.#c=void 0,Bt(t),super.setRoutes(t),e||this.#o(),await this.ready}addRoutes(t){return Bt(t),super.addRoutes(t)}async render(t,e=!1){this.#r+=1;const i=this.#r,n={...ie,...vt(t)?{hash:"",search:"",pathname:t}:t,A:i};return this.ready=this.#f(n,e),await this.ready}async#f(t,e){const{A:i}=t;try{const n=await this.resolve(t),s=await this.#m(n);if(!this.#u(s))return this.location;const o=this.M;if(s===o)return this.#v(o,!0),this.location;if(this.location=Ht(s),e&&this.#v(s,1===i),Wt("location-changed",{router:this,location:this.location}),s.L)return this.#g(s,o),this.M=s,this.location;this.#y(s,o);const r=this.#w(s);if(this.#b(s),this.#x(s,o),await r,this.#u(s))return this.#$(),this.M=s,this.location}catch(n){if(i===this.#r){e&&this.#v(this.context);for(const t of this.#a?.children??[])t.remove();throw this.location=Ht(Object.assign(t,{resolver:this})),Wt("error",{router:this,error:n,...t}),n}}return this.location}async#m(t,e=t){const i=await this.#E(e),n=i!==e?i:t,s=Ft(qt(i.chain??[]),this)===i.pathname,o=async(t,e=t.route,i)=>{const n=await t.next(!1,e,i);return null===n||n===bt?s?t:null!=e.parent?await o(t,e.parent,n):n:n},r=await o(i);if(null==r||r===bt)throw xt(n);return r!==i?await this.#m(n,r):await this.#k(i)}async#E(t){const{result:e}=t;if(e instanceof HTMLElement)return function(t,e){if(e.location=Ht(t),t.chain){const i=t.chain.map(t=>t.route).indexOf(t.route);t.chain[i].element=e}}(t,e),t;if(e&&"redirect"in e){const i=await this.#C(e.redirect,t.N,t.A);return await this.#E(i)}throw e instanceof Error?e:new Error(yt(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const[e="Unknown"]=/ (.*)\]$/u.exec(String(t))??[];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`))}async#k(t){return await this.#S(t).then(async e=>e===this.M||e===t?e:await this.#m(e))}async#S(t){const e=this.M??{},i=e.chain??[],n=t.chain??[];let s=Promise.resolve(void 0);const o=e=>Jt(t,e);if(t.R=0,t.L=!1,i.length){for(let e=0;e<Math.min(i.length,n.length)&&(i[e].route===n[e].route&&(i[e].path===n[e].path||i[e].element===n[e].element)&&this.#z(i[e].element,n[e].element));t.R++,e++);if(t.L=n.length===i.length&&t.R===n.length&&this.#z(t.result,e.result),t.L){for(let e=n.length-1;e>=0;e--)s=this.#A(s,t,{prevent:ee},i[e]);for(let e=0;e<n.length;e++)s=this.#M(s,t,{prevent:ee,redirect:o},n[e]),i[e].element.location=Ht(t,i[e].route)}else for(let e=i.length-1;e>=t.R;e--)s=this.#A(s,t,{prevent:ee},i[e])}if(!t.L)for(let e=0;e<n.length;e++)e<t.R?e<i.length&&i[e].element&&(i[e].element.location=Ht(t,i[e].route)):(s=this.#M(s,t,{prevent:ee,redirect:o},n[e]),n[e].element&&(n[e].element.location=Ht(t,n[e].route)));return await s.then(async e=>{if(e&&ft(e)){if("cancel"in e&&this.M)return this.M.A=t.A,this.M;if("redirect"in e)return await this.#C(e.redirect,t.N,t.A)}return t})}async#A(t,e,i,n){const s=Ht(e);let o=await t;if(this.#u(e)){o=Vt("onBeforeLeave",n.element,s,i,this)(o)}if(!ft(o)||!("redirect"in o))return o}async#M(t,e,i,n){const s=Ht(e,n.route),o=await t;if(this.#u(e)){return Vt("onBeforeEnter",n.element,s,i,this)(o)}}#z(t,e){return t instanceof Element&&e instanceof Element&&(this.#n.has(t)&&this.#n.has(e)?t.localName===e.localName:t===e)}#u(t){return t.A===this.#r}async#C(t,e=0,i=0){if(e>256)throw new Error(yt(`Too many redirects when rendering ${t.from}`));return await this.resolve({...ie,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,N:e+1,A:i})}#p(t=this.#a){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(yt(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))}#v({pathname:t,search:e="",hash:i=""},n){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==i){const s=n?"replaceState":"pushState";window.history[s](null,document.title,t+e+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#g(t,e){let i=this.#a;for(let n=0;n<(t.R??0);n++){const s=e?.chain?.[n].element;if(s){if(s.parentNode!==i)break;t.chain[n].element=s,i=s}}return i}#y(t,e){this.#p(),this.#L();const i=this.#g(t,e);this.#l=[],this.#h=Array.from(i?.children??[]).filter(e=>this.#i.has(e)&&e!==t.result);let n=i;for(let e=t.R??0;e<(t.chain?.length??0);e++){const s=t.chain[e].element;s&&(n?.appendChild(s),this.#i.add(s),n===i&&this.#l.push(s),n=s)}}#$(){if(this.#h)for(const t of this.#h)t.remove();this.#h=null,this.#l=null}#L(){if(this.#h&&this.#l){for(const t of this.#l)t.remove();this.#h=null,this.#l=null}}#x(t,e){if(e?.chain&&null!=t.R)for(let i=e.chain.length-1;i>=t.R&&this.#u(t);i--){const n=e.chain[i].element;if(n)try{const e=Ht(t);Gt(n.onAfterLeave,n,e,{},this)}finally{if(this.#h?.includes(n))for(const t of n.children)t.remove()}}}#b(t){if(t.chain&&null!=t.R)for(let e=t.R;e<t.chain.length&&this.#u(t);e++){const i=t.chain[e].element;if(i){const n=Ht(t,t.chain[e].route);Gt(i.onAfterEnter,i,n,{},this)}}}async#w(t){const e=this.#h?.[0],i=this.#l?.[0],n=[],{chain:s=[]}=t;let o;for(let t=s.length-1;t>=0;t--)if(s[t].route.animate){o=s[t].route.animate;break}if(e&&i&&o){const t=ft(o)&&o.leave?o.leave:"leaving",s=ft(o)&&o.enter?o.enter:"entering";n.push(Ut(e,t)),n.push(Ut(i,s))}return await Promise.all(n),t}subscribe(){window.addEventListener("vaadin-router-go",this.#s)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#s)}#o(t){const{pathname:e,search:i,hash:n}=t instanceof CustomEvent?t.detail:window.location;vt(this.S(e))&&(t?.preventDefault&&t.preventDefault(),this.render({pathname:e,search:i,hash:n},!0))}static setTriggers(...t){te(t)}urlForName(t,e){return this.#c||(this.#c=Ot(this,{cacheKeyProvider:t=>"component"in t&&"string"==typeof t.component?t.component:void 0})),Ft(this.#c(t,e??void 0),this)}urlForPath(t,e){return Ft(ct(t)(e??void 0),this)}static go(t){const{pathname:e,search:i,hash:n}=vt(t)?new URL(t,"http://a"):t;return Wt("go",{pathname:e,search:i,hash:n})}}class se extends ne{P(t,e){window.location.hash.substring(1)!==t&&(window.location.hash="#"+t)}}function oe(t){const e=t.newURL.indexOf("#")>-1?t.newURL.substring(t.newURL.indexOf("#")+1):"/";ne.go(e)}const re={activate(){window.addEventListener("hashchange",oe,!1)},inactivate(){window.removeEventListener("hashchange",oe,!1)}};ne.NavigationTrigger=[re];const ae={tr:{employeeList:"Çalışan Listesi",employees:"Çalışanlar",addNew:"Yeni Ekle",addEmployee:"Çalışan Ekle",editEmployee:"Çalışan Düzenle",firstName:"Adı",lastName:"Soyadı",dateOfEmployment:"İşe Giriş Tarihi",dateOfBirth:"Doğum Tarihi",phone:"Telefon Numarası",email:"E-posta",department:"Departman",position:"Pozisyon",analytics:"Analitik",tech:"Teknoloji",junior:"Junior",medior:"Medior",senior:"Senior",search:"Ara",list:"Liste",table:"Tablo",edit:"Düzenle",delete:"Sil",areYouSure:"Emin misiniz?",confirmDelete:"{firstName} {lastName} çalışan kaydı silinecek",proceed:"Devam Et",cancel:"İptal",save:"Kaydet",required:"Zorunlu",invalidEmail:"Geçersiz e-posta",invalidPhone:"Geçersiz telefon",uniqueError:"Bu e-posta veya telefon ile kayıtlı çalışan var",actions:"İşlemler",noResults:"Çalışan bulunamadı.",page:"Sayfa",of:"/",next:"İleri",prev:"Geri",youAreEditing:"{firstName} {lastName} düzenliyorsunuz"},en:{employeeList:"Employee List",employees:"Employees",addNew:"Add New",addEmployee:"Add Employee",editEmployee:"Edit Employee",firstName:"First Name",lastName:"Last Name",dateOfEmployment:"Date of Employment",dateOfBirth:"Date of Birth",phone:"Phone",email:"Email",department:"Department",position:"Position",analytics:"Analytics",tech:"Tech",junior:"Junior",medior:"Medior",senior:"Senior",search:"Search",list:"List",table:"Table",edit:"Edit",delete:"Delete",areYouSure:"Are you sure?",confirmDelete:"Selected Employee record of {firstName} {lastName} will be deleted",proceed:"Proceed",cancel:"Cancel",save:"Save",required:"Required",invalidEmail:"Invalid email",invalidPhone:"Invalid phone",uniqueError:"Employee with this email or phone already exists",actions:"Actions",noResults:"No employees found.",page:"Page",of:"of",next:"Next",prev:"Previous",youAreEditing:"You are editing {firstName} {lastName}"}};class ce extends EventTarget{constructor(){super(),this._locale=document.documentElement.lang||"en"}get locale(){return this._locale}set locale(t){this._locale!==t&&(this._locale=t,this.dispatchEvent(new CustomEvent("locale-changed",{detail:{locale:t}})))}onLocaleChanged(t){this.addEventListener("locale-changed",t)}offLocaleChanged(t){this.removeEventListener("locale-changed",t)}}const le=new ce,he=(t,e={})=>{const i=ae[le.locale][t]||t;return Object.keys(e).reduce((t,i)=>t.replace(`{${i}}`,e[i]),i)};class de extends ot{static styles=o`
    nav {
      background: #fff;
      height: 47px;
      display: flex;
      padding: 0 20px 0 11px;
      justify-content: space-between;
      align-items: center;
      gap: 15px;
    }
    a {
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
    .col {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .left a {
      color: black;
    }
    .right a {
      color: var(--primary-color);
      font-weight: 500;
      font-size: 14px;
      transition: opacity 0.2s;
      opacity: 0.6;
    }
    .right a[active], .right a:hover {
      opacity: 1;
    }
    .lang-flag {
      cursor: pointer;
      font-size: 1.3rem;
      margin-left: 4px;
      border: none;
      background: none;
      padding: 0;
      vertical-align: middle;
      line-height: 1;
    }
    @media (max-width: 600px) {
      nav {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `;constructor(){super(),this._lang=le.locale}connectedCallback(){super.connectedCallback(),this._onLocaleChanged=t=>{t.detail&&t.detail.locale&&t.detail.locale!==this._lang&&(this._lang=t.detail.locale,le.locale=this._lang,this.requestUpdate())},le.onLocaleChanged(this._onLocaleChanged),window.addEventListener("popstate",this._onPopState=()=>this.requestUpdate())}disconnectedCallback(){window.removeEventListener("popstate",this._onPopState),le.offLocaleChanged(this._onLocaleChanged),super.disconnectedCallback()}_toggleLang(){this._lang="en"===this._lang?"tr":"en",le.locale=this._lang,this.requestUpdate()}_onNavClick(t,e){t.preventDefault(),window.history.pushState({},"",e),window.dispatchEvent(new PopStateEvent("popstate"))}render(){const t=window.location.pathname;return B`
      <nav>
        <div class="col left">
          <a href="/" ?active=${"/"===t} @click=${t=>this._onNavClick(t,"/")}>
            <svg-icon size="16px" name="ing"></svg-icon>
            ING
          </a>
        </div>
        <div class="col right">
          <a href="/employees" ?active=${t.startsWith("/employees")&&!t.endsWith("add")}
             @click=${t=>this._onNavClick(t,"/employees")}>
            <svg-icon size="16px" name="user-tie"></svg-icon>
            ${he("employees")}
          </a>
          <a href="/employees/add" ?active=${t.endsWith("add")}
             @click=${t=>this._onNavClick(t,"/employees/add")}>
            <svg-icon size="16px" name="plus"></svg-icon>
            ${he("addNew")}
          </a>
          <button class="lang-flag" @click=${this._toggleLang} title=${"en"===this._lang?"Türkçe":"English"}>
            ${"en"===this._lang?"🇬🇧":"🇹🇷"}
          </button>
        </div>
      </nav>
    `}}customElements.define("nav-menu",de);const ue="employee-records",pe=["Ahmet","Mehmet","Ayşe","Fatma","Emre","Zeynep","Ali","Elif","Can","Deniz"];function fe(){let t=[];try{t=function(t=400){return Array.from({length:t},(t,e)=>({id:`fake-id-${e+1}`,firstName:pe[e%pe.length],lastName:`LastName${e+1}`,phone:`+9053${(e+1).toString().padStart(8,"0")}`,email:`fake${e+1}@sourtimes.org`,department:e%2==0?"Analytics":"Tech",position:e%3==0?"Junior":e%3==1?"Medior":"Senior",dateOfEmployment:new Date(2022,8,23+e%30).toISOString().split("T")[0],dateOfBirth:new Date(1990,0,1+e%30).toISOString().split("T")[0]}))}()}catch{}try{return JSON.parse(localStorage.getItem(ue))||t}catch{return t}}function me(t){localStorage.setItem(ue,JSON.stringify(t))}const ve=new window.Set,ge={getAll:()=>fe(),add(t){const e=fe();e.push(t),me(e),ye()},update(t,e){let i=fe();i=i.map(i=>i.id===t?{...i,...e}:i),me(i),ye()},delete(t){let e=fe();e=e.filter(e=>e.id!==t),me(e),ye()},subscribe:t=>(ve.add(t),()=>ve.delete(t)),isUnique:(t,e,i=null)=>!fe().some(n=>(n.email===t||n.phone===e)&&n.id!==i),getById:t=>fe().find(e=>e.id===t)};function ye(){ve.forEach(t=>t())}function we(t){if(!t)return"";let e=t instanceof Date?t:new Date(t);if(isNaN(e))return"";const i="tr"===le.locale?"tr-TR":"en-US";return new Intl.DateTimeFormat(i,{year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}class be extends ot{static properties={open:{type:Boolean},firstName:{type:String},lastName:{type:String},onProceed:{type:Function},onCancel:{type:Function},onClose:{type:Function}};static styles=o`
    :host {
      display: block;
    }
    dialog {
      border: none;
      border-radius: 8px;
      box-shadow: 0 6px 16px #0005;
      padding: 0;
      min-width: 350px;
      max-width: 90vw;
    }
    form {
      padding: 32px 24px 24px 24px;
      position: relative;
      background: #fff;
      border-radius: 8px;
    }
    h2 {
      margin: 0 0 12px 0;
      color: var(--primary-color);
      font-size: 22px;
      font-weight: 700;
    }
    p {
      margin: 0 0 24px 0;
      color: #222;
      font-size: 16px;
    }
    .dialog-actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .proceed {
      background: var(--primary-color);
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      padding: 10px 0;
      cursor: pointer;
    }
    .cancel {
      background: #fff;
      color: var(--secondary-color);
      border: 1px solid var(--secondary-color);
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      padding: 10px 0;
      cursor: pointer;
    }
    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--primary-color);
      padding: 0;
    }
  `;updated(t){if(this.open)this.shadowRoot.getElementById("delete-dialog").showModal();else{const t=this.shadowRoot.getElementById("delete-dialog");t&&t.open&&t.close()}}render(){return B`
      <dialog id="delete-dialog">
        <form method="dialog" @submit=${t=>t.preventDefault()}>
          <button type="button" class="close-btn" @click=${this.onClose}>
            <svg-icon size="30px" name="xmark"></svg-icon>
          </button>
          <h2>${he("areYouSure")}</h2>
          <p>
            ${he("confirmDelete",{firstName:this.firstName,lastName:this.lastName})}
          </p>
          <div class="dialog-actions">
            <button type="button" class="proceed" @click=${this.onProceed}>${he("proceed")}</button>
            <button type="button" class="cancel" @click=${this.onCancel}>${he("cancel")}</button>
          </div>
        </form>
      </dialog>
    `}}customElements.define("delete-dialog",be);class xe extends ot{static properties={view:{type:String},employees:{type:Array},search:{type:String},page:{type:Number},pageSize:{type:Number},total:{type:Number},checkedEmployees:{type:Object}};static styles=o`
    .toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }
    .view-toggle {
      display: flex;
      align-items: center;
      gap: 21px;
    }
    .view-toggle button {
      margin-left: 0.5rem;
      color: var(--primary-color);
      border: none;
      background-color: transparent;
      padding: 0;
      height: 26px;
      width: 26px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    .view-toggle button[selected] {
      opacity: 1;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    tr:not(:last-child) {
      border-bottom: 1px solid var(--table-border-color);
    }
    th,
    td {
      text-align: center;
      background-color: #fff;
    }
    th {
      height: 76px;
      color: var(--primary-color);
      font-size: 14px;
      font-weight: 500;
    }
    td {
      height: 87px;
    }
    input[type='checkbox'] {
      width: 20px;
      height: 20px;
      border-radius: 6px;
      vertical-align: middle;
      border: 2px solid var(--label-color);
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      cursor: pointer;
      &:checked {
        appearance: auto;
        /* For a 25px box, a 12.5px radius circle is centered at 50% 50% */
        clip-path: circle(12px at 50% 50%);
        background-color: blue;
      }
    }
    .actions button {
      color: var(--primary-color);
      border: none;
      background-color: transparent;
      padding: 7px;
      border-radius: 3px;
      cursor: pointer;
    }
    .pagination {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      gap: 8px;
      align-items: center;
    }
    .pagination button {
      background: none;
      border: none;
      color: var(--primary-color);
      font-size: 18px;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
    .pagination button.selected {
      background: var(--primary-color);
      color: #fff;
      font-weight: bold;
    }
    .pagination span {
      font-size: 20px;
      padding: 0 4px;
      color: #888;
    }
    .list-mode {
      display: grid;
      grid-template-columns: repeat(2, 433px);
      grid-template-rows: repeat(2, auto);
      column-gap: 110px;
      row-gap: 37px;
      justify-content: center;
    }
    .list-item {
      display: flex;
      flex-wrap: wrap;
      box-shadow: 0 2px 8px #0003;
      border-radius: 6px;
      background: #fff;
      padding: 24px 17px;
      width: 433px;
      row-gap: 30px;
      box-sizing: border-box;
      margin: 0;
    }
    .list-item > div {
      flex-basis: 50%;
      font-size: 16px;
    }
    .list-item b {
      display: block;
      color: var(--label-color);
      font-size: 14px;
      font-weight: 400;
    }
    .list-item .actions {
      flex-basis: 100%;
      display: flex;
      gap: 12px;
      justify-content: flex-start;
    }
    .list-item .edit {
      background: var(--secondary-color);
      color: #fff;
      border: none;
      padding: 8px 18px;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .list-item .delete {
      background: var(--primary-color);
      color: #fff;
      border: none;
      padding: 8px 18px;
      border-radius: 4px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    @media (max-width: 700px) {
      table,
      thead,
      tbody,
      th,
      td,
      tr {
        display: block;
      }
      th,
      td {
        border: none;
        padding: 0.5rem 0;
      }
      th {
        background: none;
      }
    }
    /* Dialog styles */
    .delete-dialog {
      border: none;
      border-radius: 8px;
      box-shadow: 0 4px 16px #005;
      padding: 0;
      min-width: 350px;
      max-width: 90vw;
    }
    .delete-dialog form {
      padding: 32px 24px 24px 24px;
      position: relative;
      background: #fff;
      border-radius: 8px;
    }
    .delete-dialog h2 {
      margin: 0 0 12px 0;
      color: var(--primary-color);
      font-size: 22px;
      font-weight: 700;
    }
    .delete-dialog p {
      margin: 0 0 24px 0;
      color: #222;
      font-size: 16px;
    }
    .dialog-actions {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .dialog-actions .proceed {
      background: var(--primary-color);
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      padding: 10px 0;
      cursor: pointer;
    }
    .dialog-actions .cancel {
      background: #fff;
      color: var(--secondary-color);
      border: 1px solid var(--secondary-color);
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      padding: 10px 0;
      cursor: pointer;
    }
    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      background: none;
      border: none;
      cursor: pointer;
      color: var(--primary-color);
      padding: 0;
    }
  `;constructor(){super(),this.view="table",this.employees=[],this.search="",this.page=1,this.pageSize=10,this.total=0,this.checkedEmployees=new window.Set,this.unsubscribe=null,this._onLocaleChanged=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.unsubscribe=ge.subscribe(()=>this._updateList()),this._updateList(),le.onLocaleChanged(this._onLocaleChanged)}disconnectedCallback(){this.unsubscribe&&this.unsubscribe(),le.offLocaleChanged(this._onLocaleChanged),super.disconnectedCallback()}_updateList(){let t=ge.getAll();if(this.search){const e=this.search.toLowerCase();t=t.filter(t=>t.firstName.toLowerCase().includes(e)||t.lastName.toLowerCase().includes(e)||t.department.toLowerCase().includes(e)||t.position.toLowerCase().includes(e))}this.total=t.length;let e=this.pageSize;e="list"===this.view?4:10;const i=(this.page-1)*e;this.employees=t.slice(i,i+e);const n=new window.Set(this.employees.map(t=>t.id));this.checkedEmployees=new window.Set([...this.checkedEmployees].filter(t=>n.has(t)))}_onSearch(t){this.search=t.target.value,this.page=1,this._updateList()}_changeView(t){this.view=t,this.page=1,this._updateList()}_goTo(t){this.page=t,this._updateList()}_edit(t){window.history.pushState({},"",`/employees/edit/${t}`),window.dispatchEvent(new PopStateEvent("popstate"))}_showDeleteDialog(t){const e=this.employees.find(e=>e.id===t);this._deleteDialogEmployee=e,this._deleteDialogOpen=!0,this.requestUpdate(),setTimeout(()=>{this.shadowRoot.getElementById("delete-dialog").showModal()})}_closeDeleteDialog(){this._deleteDialogOpen=!1,this._deleteDialogEmployee=null,this.requestUpdate();const t=this.shadowRoot.getElementById("delete-dialog");t&&t.open&&t.close()}_confirmDeleteDialog(){this._deleteDialogEmployee&&ge.delete(this._deleteDialogEmployee.id),this._closeDeleteDialog()}_onCheckEmployee(t,e){const i=t.target.checked,n=new window.Set(this.checkedEmployees);i?n.add(e):n.delete(e),this.checkedEmployees=n}_onToggleAll(t){const e=t.target.checked,i=this.employees.map(t=>t.id);this.checkedEmployees=e?new window.Set([...this.checkedEmployees,...i]):new window.Set([...this.checkedEmployees].filter(t=>!i.includes(t)))}render(){const t=this._deleteDialogEmployee;return B`
      <route-header title="employeeList">
        <div class="toolbar">
          <div class="view-toggle">
            <button
              ?selected=${"table"===this.view}
              @click=${()=>this._changeView("table")}
            >
              <svg-icon size="100%" name="bars"></svg-icon>
            </button>
            <button
              ?selected=${"list"===this.view}
              @click=${()=>this._changeView("list")}
            >
              <svg-icon size="100%" name="table-cells"></svg-icon>
            </button>
          </div>
        </div>
      </route-header>

      ${"table"===this.view?this._renderTable():this._renderList()}
      ${this._renderPagination()}

      <delete-dialog
        .open=${!!t}
        .firstName=${t?t.firstName:""}
        .lastName=${t?t.lastName:""}
        .onProceed=${this._confirmDeleteDialog.bind(this)}
        .onCancel=${this._closeDeleteDialog.bind(this)}
        .onClose=${this._closeDeleteDialog.bind(this)}
      ></delete-dialog>
    `}_renderTable(){if(!this.employees.length)return B`<p>${he("noResults")}</p>`;const t=this.employees.map(t=>t.id),e=t.length>0&&t.every(t=>this.checkedEmployees.has(t)),i=t.some(t=>this.checkedEmployees.has(t));return B`
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                .checked=${e}
                .indeterminate=${!e&&i}
                @change=${this._onToggleAll.bind(this)}
                title="${he(e?"unselectAll":"selectAll")}"
              />
            </th>
            <th>${he("firstName")}</th>
            <th>${he("lastName")}</th>
            <th>${he("dateOfEmployment")}</th>
            <th>${he("dateOfBirth")}</th>
            <th>${he("phone")}</th>
            <th>${he("email")}</th>
            <th>${he("department")}</th>
            <th>${he("position")}</th>
            <th>${he("actions")}</th>
          </tr>
        </thead>
        <tbody>
          ${this.employees.map(t=>B`
              <tr>
                <td>
                  <input
                    type="checkbox"
                    .checked=${this.checkedEmployees.has(t.id)}
                    @change=${e=>this._onCheckEmployee(e,t.id)}
                  />
                </td>
                <td>${t.firstName}</td>
                <td>${t.lastName}</td>
                <td>${we(t.dateOfEmployment)}</td>
                <td>${we(t.dateOfBirth)}</td>
                <td>${t.phone}</td>
                <td>${t.email}</td>
                <td>${he(t.department.toLowerCase())}</td>
                <td>${he(t.position.toLowerCase())}</td>
                <td class="actions">
                  <button class="edit" @click=${()=>this._edit(t.id)}>
                    <svg-icon size="18px" name="pen-to-square"></svg-icon>
                  </button>
                  <button
                    class="delete"
                    @click=${()=>this._showDeleteDialog(t.id)}
                  >
                    <svg-icon size="18px" name="trash"></svg-icon>
                  </button>
                </td>
              </tr>
            `)}
        </tbody>
      </table>
    `}_renderList(){return this.employees.length?B`
      <ul class="list-mode">
        ${this.employees.map(t=>B`
            <li class="list-item">
              <div><b>${he("firstName")}:</b> ${t.firstName}</div>
              <div><b>${he("lastName")}:</b> ${t.lastName}</div>
              <div>
                <b>${he("dateOfEmployment")}:</b> ${we(t.dateOfEmployment)}
              </div>
              <div>
                <b>${he("dateOfBirth")}:</b> ${we(t.dateOfBirth)}
              </div>
              <div><b>${he("phone")}:</b> ${t.phone}</div>
              <div><b>${he("email")}:</b> ${t.email}</div>
              <div>
                <b>${he("department")}:</b> ${he(t.department.toLowerCase())}
              </div>
              <div><b>${he("position")}:</b> ${he(t.position.toLowerCase())}</div>
              <div class="actions">
                <button class="edit" @click=${()=>this._edit(t.id)}>
                  <svg-icon size="14px" name="pen-to-square"></svg-icon>
                  ${he("edit")}
                </button>
                <button
                  class="delete"
                  @click=${()=>this._showDeleteDialog(t.id)}
                >
                  <svg-icon size="14px" name="trash"></svg-icon>
                  ${he("delete")}
                </button>
              </div>
            </li>
          `)}
      </ul>
    `:B`<p>${he("noResults")}</p>`}_renderPagination(){const t="list"===this.view?4:10;if(this.total<=t)return"";const e=Math.ceil(this.total/t),i=this.page;let n=1,s=e;e<=7?(n=1,s=e):i<=3?(n=1,s=5):i>=e-2?(n=e-4,s=e):(n=i-2,s=i+2),n<1&&(n=1),s>e&&(s=e);const o=[];for(let t=n;t<=s;t++)o.push(B`
        <button
          class=${t===i?"selected":""}
          @click=${()=>this._goTo(t)}
        >
          ${t}
        </button>
      `);return B`
      <div class="pagination">
        <button
          ?disabled=${1===i}
          @click=${()=>this._goTo(i-1)}
          title="${he("prev")}"
        >
          <svg-icon size="16px" name="chevron-left"></svg-icon>
        </button>
        ${n>1?B`<button
              @click=${()=>this._goTo(1)}
              class=${1===i?"selected":""}
            >
              1
            </button>`:""}
        ${n>2?B`<span>&hellip;</span>`:""} ${o}
        ${s<e-1?B`<span>&hellip;</span>`:""}
        ${s<e?B`<button
              @click=${()=>this._goTo(e)}
              class=${i===e?"selected":""}
            >
              ${e}
            </button>`:""}
        <button
          ?disabled=${i===e}
          @click=${()=>this._goTo(i+1)}
          title="${he("next")}"
        >
          <svg-icon size="16px" name="chevron-right"></svg-icon>
        </button>
      </div>
    `}}customElements.define("employee-list",xe);class $e extends ot{static properties={employee:{type:Object},isEdit:{type:Boolean},errors:{type:Object}};static styles=o`
    h2 {
      color: var(--primary-color);
      margin-left: 52px;
    }
    form {
      min-height: 70vh;
      margin: 0 auto;
      background: #ffffff;
      padding: 16px;
      border-radius: 8px;
      box-shadow: 0 0 8px #0001;
      display: flex;
      flex-direction: column;
    }
    .you-are-editing {
      min-height: 65px;
    }
    .you-are-editing p {
      margin: 0;
    }
    .fields {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 149px;
      row-gap: 59px;
      flex-basis: 85%;
      width: 85%;
      margin: 0 auto 82px auto;
    }
    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 0;
      /* Remove flex-basis and width for grid layout */
    }
    label {
      display: block;
      margin-bottom: 0.3rem;
      font-weight: 500;
      color: #363636;
    }
    input,
    select {
      width: var(--form-field-width);
      padding: 0.5rem;
      border: 1px solid #6f6f6f;
      border-radius: 4px;
      background-color: #fff;
    }
    .error {
      color: #e53935;
      font-size: 0.9rem;
      margin-bottom: 0.5rem;
    }
    .actions {
      flex-basis: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 66px;
    }
    button {
      width: var(--form-field-width);
      background: var(--primary-color);
      color: #fff;
      border: none;
      padding: 0.7rem 1.5rem;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
    }
    button.cancel {
      background: #fff;
      color: #525199;
      border: 1px solid #525199;
    }
  `;constructor(){super(),this.employee={id:"",firstName:"",lastName:"",dateOfEmployment:"",dateOfBirth:"",phone:"",email:"",department:"Analytics",position:"Junior"},this.isEdit=!1,this.errors={}}connectedCallback(){super.connectedCallback();const t=window.location.pathname.match(/edit\/(.+)$/);if(t){const e=ge.getById(t[1]);e&&(this.employee={...e},this.isEdit=!0)}this._onLocaleChanged=()=>this.requestUpdate(),le.onLocaleChanged(this._onLocaleChanged)}disconnectedCallback(){le.offLocaleChanged(this._onLocaleChanged),super.disconnectedCallback()}_onInput(t){const{name:e,value:i}=t.target;this.employee={...this.employee,[e]:i},this.errors={...this.errors,[e]:void 0}}_validate(){const t=this.employee,e={};return t.firstName||(e.firstName=he("required")),t.lastName||(e.lastName=he("required")),t.dateOfEmployment||(e.dateOfEmployment=he("required")),t.dateOfBirth||(e.dateOfBirth=he("required")),t.phone||(e.phone=he("required")),/^\+?\d{10,15}$/.test(t.phone)||(e.phone=he("invalidPhone")),t.email||(e.email=he("required")),/^\S+@\S+\.\S+$/.test(t.email)||(e.email=he("invalidEmail")),ge.isUnique(t.email,t.phone,this.isEdit?t.id:null)||(e.email=he("uniqueError")),e}_onSubmit(t){t.preventDefault();const e=this._validate();Object.keys(e).length?this.errors=e:(this.isEdit?ge.update(this.employee.id,this.employee):(this.employee.id=Date.now().toString(),ge.add(this.employee)),window.history.pushState({},"","/employees"),window.dispatchEvent(new PopStateEvent("popstate")))}_onCancel(){window.history.pushState({},"","/employees"),window.dispatchEvent(new PopStateEvent("popstate"))}render(){const t=this.employee;return B`
      <route-header
        .title="${this.isEdit?"editEmployee":"addEmployee"}"
      ></route-header>
      <form @submit=${this._onSubmit.bind(this)}>
        <div class="you-are-editing">
          ${this.isEdit?B`
                <p>
                  ${he("youAreEditing",{firstName:this.employee.firstName,lastName:this.employee.lastName})}
                </p>
              `:null}
        </div>

        <div class="fields">
          <div class="field">
            <label>${he("firstName")}</label>
            <input
              name="firstName"
              .value=${t.firstName}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.firstName?B`<div class="error">${this.errors.firstName}</div>`:""}
          </div>
          <div class="field">
            <label>${he("lastName")}</label>
            <input
              name="lastName"
              .value=${t.lastName}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.lastName?B`<div class="error">${this.errors.lastName}</div>`:""}
          </div>
          <div class="field">
            <label>${he("dateOfEmployment")}</label>
            <input
              name="dateOfEmployment"
              type="date"
              .value=${t.dateOfEmployment}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.dateOfEmployment?B`<div class="error">${this.errors.dateOfEmployment}</div>`:""}
          </div>
          <div class="field">
            <label>${he("dateOfBirth")}</label>
            <input
              name="dateOfBirth"
              type="date"
              .value=${t.dateOfBirth}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.dateOfBirth?B`<div class="error">${this.errors.dateOfBirth}</div>`:""}
          </div>
          <div class="field">
            <label>${he("phone")}</label>
            <input
              name="phone"
              .value=${t.phone}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.phone?B`<div class="error">${this.errors.phone}</div>`:""}
          </div>
          <div class="field">
            <label>${he("email")}</label>
            <input
              name="email"
              .value=${t.email}
              @input=${this._onInput.bind(this)}
            />
            ${this.errors.email?B`<div class="error">${this.errors.email}</div>`:""}
          </div>
          <div class="field">
            <label>${he("department")}</label>
            <select
              name="department"
              .value=${t.department}
              @input=${this._onInput.bind(this)}
            >
              <option value="Analytics">${he("analytics")}</option>
              <option value="Tech">${he("tech")}</option>
            </select>
          </div>
          <div class="field">
            <label>${he("position")}</label>
            <select
              name="position"
              .value=${t.position}
              @input=${this._onInput.bind(this)}
            >
              <option value="Junior">${he("junior")}</option>
              <option value="Medior">${he("medior")}</option>
              <option value="Senior">${he("senior")}</option>
            </select>
          </div>
        </div>

        <div class="actions">
          <button type="submit">${he("save")}</button>
          <button type="button" class="cancel" @click=${this._onCancel}>
            ${he("cancel")}
          </button>
        </div>
      </form>
    `}}customElements.define("employee-form",$e);class Ee extends ot{static properties={title:{type:String}};static styles=o`
    :host {
      display: block;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 6px 43px 6px;
    }
    h2 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
      color: var(--primary-color);
    }
  `;constructor(){super(),this._onLocaleChanged=()=>this.requestUpdate()}connectedCallback(){super.connectedCallback(),le.onLocaleChanged(this._onLocaleChanged)}disconnectedCallback(){le.offLocaleChanged(this._onLocaleChanged),super.disconnectedCallback()}render(){return B`
      <div class="header">
        <h2>${this.title?he(this.title):""}</h2>
        <div class="actions"><slot></slot></div>
      </div>
    `}}customElements.define("route-header",Ee);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ke=1,Ce=2,Se=t=>(...e)=>({_$litDirective$:t,values:e});let ze=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae="important",Me=" !"+Ae,Le=Se(class extends ze{constructor(t){if(super(t),t.type!==ke||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const n=t[i];return null==n?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const n=e[t];if(null!=n){this.ft.add(t);const e="string"==typeof n&&n.endsWith(Me);t.includes("-")||e?i.setProperty(t,e?n.slice(0,-11):n,e?Ae:""):i[t]=n}}return F}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ne extends ze{constructor(t){if(super(t),this.it=q,t.type!==Ce)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this._t=void 0,this.it=t;if(t===F)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ne.directiveName="unsafeHTML",Ne.resultType=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class _e extends Ne{}_e.directiveName="unsafeSVG",_e.resultType=2;const Oe=Se(_e),Re={"user-tie":'<path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z"/>',plus:'<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>',"table-cells":'<path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 64l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0zM64 224l88 0 0 64-88 0 0-64zm232 0l0 64-88 0 0-64 88 0zm64 0l88 0 0 64-88 0 0-64zM152 352l0 64-88 0 0-64 88 0zm56 0l88 0 0 64-88 0 0-64zm240 0l0 64-88 0 0-64 88 0z"/>',bars:'<path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>',"pen-to-square":'<path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/>',trash:'<path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/>',"chevron-left":'<path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>',"chevron-right":'<path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>',xmark:'<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>',ing:'<style type="text/css"> .st0{fill:#FF6200;} .st1{fill:#FFFFFF;} </style> <metadata> <sfw xmlns="ns_sfw;"> <slices> </slices> <sliceSourceBounds bottomLeftOrigin="true" height="77.7" width="77.7" x="172.5" y="-230.3"> </sliceSourceBounds> </sfw> </metadata> <g> <path class="st0" d="M62.1,77.7H15.5C7,77.7,0,70.8,0,62.2V15.5C0,7,7,0,15.5,0h46.6c8.6,0,15.5,7,15.5,15.5v46.6 \t\tC77.7,70.8,70.7,77.7,62.1,77.7L62.1,77.7z"> </path> <path class="st1" d="M75.6,67.5c-0.6-0.3-0.6-0.3-1.6-0.3c-0.3-0.3-1-0.3-1.3-0.3c0.2,1.1,0.6,2.1,1,3.2c0.2,0.5,0.6,0.9,1.1,1.2 \t\tc0.5-0.7,1-1.5,1.4-2.3C75.8,68.3,75.6,67.8,75.6,67.5 M65.3,77.4c-0.2-0.8-0.4-1.7-0.5-2.3v-5.1c-1.3,0.3-1.6,0.6-1.9,0.6 \t\tc-1,0.6-1.6,0.9-1.6,1.6c0,1.3,0.3,2.5,0.3,3.2c0,1,0,1.6,0.3,1.9c0.5,0.2,0.8,0.2,1.1,0.3C63.8,77.6,64.6,77.5,65.3,77.4 \t\t M45.2,70.7c0,0-0.3-1.6-0.6-2.2c-0.3-0.8-0.9-1.4-1.6-1.9c-0.3,0-0.9-0.6-1.3-0.3c0,0-0.3,2.5-0.6,2.8c0.6,1,1.3,1.6,1.6,2.5 \t\tc0.3,0.9,0.6,2.2,1.3,3.2C44.2,73.5,45.2,72.9,45.2,70.7 M71.1,72.6c-0.6-0.6,0.6-2.9-1-2.9c-0.6-0.3-2.5-1-2.5-1 \t\tc-0.3,1-0.3,2.8,0,3.8c0,0.7,0.9,2.4,1.6,3.4c0.8-0.4,1.6-0.9,2.4-1.5C71.4,73.9,71.2,73.3,71.1,72.6L71.1,72.6z M68.9,45 \t\tc1.3,0-1.6-1.3-2.8-2.2c-0.2,0-0.5-0.1-0.6-0.3c-0.6-0.6-1-1.9-2.2-2.2c-0.2,0-0.3-0.1-0.3-0.3c0,0,0,0,0,0c0-0.9-0.3-4.7-0.3-4.7 \t\tc0.6,1.3,1.9,1.3,2.5,1.3c1.3,0,2.2-0.3,2.8-1.3c0-0.3,0.3-0.9,0.6-0.9c0.6-0.3,1.3-0.6,1.6-1.3c0.3,0,0.6-0.6,0.6-0.6 \t\tC68,32,62,32,62,32c-1,0.3-1.9,1.3-1.9,1.6c0,0,0.6,3.5,0.6,3.8c0,2.2,0.3,2.2,0.3,4.4c1,0.6,1.3,0.6,1.9,1.3 \t\tc0.3,0.6,0.6,1.3,1,1.9c1.3,0.6,2.8,1.3,3.8,2.2C68,47.3,68.9,45.7,68.9,45L68.9,45z M67,50.7c-0.9-0.3-1.9-1-3.8-0.6 \t\tc-0.3,0.3-0.3,0.3-0.3,1.3c1.6,0,2.5,1,3.8,1.3C66.7,52.6,67,51.1,67,50.7L67,50.7z M60.4,27.3c0.6,0,0.6,1.3,0.6,1.9 \t\tc1.6,0,3.2,0.3,3.8-0.3c3.5-1.6-1.9-2.9-2.5-2.9c-1.6-0.3-4.7-1.3-3.5,0C58.8,26.7,59.7,26.7,60.4,27.3L60.4,27.3z M67,23.2 \t\tc2.2,0.6,3.8,1.9,5.4,3.8c1,0,1.9-0.6,2.2-1.6c0.3-1.6,0.6-4.1-0.3-5.4c-0.6-0.6-0.9-1-2.5-1.3c-1.2-0.3-2.6,0-3.5,1 \t\tC67.7,20.6,66.7,21.9,67,23.2L67,23.2z M53.7,26c0-0.6-1.3-0.3-1.9,0c-0.6,0-1.6,0.6-2.5,1.3c-0.9,1-1.6,1.3-1.6,2.2h1.6 \t\tc1.6,0,1.9,0.6,2.5-0.3C52.8,27.9,53.7,27.3,53.7,26L53.7,26z M51.8,33.6c0-0.6-0.6-1.3-1.6-1.6h-4.1c-1.6,0-2.9,0-4.4,0.3 \t\tc0.6,1.3,2.2,2.5,2.8,3.2c0.6,0.6,1.3,1.3,2.5,1.3c1.3-0.3,1.3,0,1.9-0.3c0,0.6,0.3,1.6,0,2.2c0,0.3,0.3,2.9-0.9,3.2 \t\tc-0.9,0.3-2.2,1-2.8,1.9c-0.6,0.9-1,2.5,0,3.2c0.6,0.3,1.3-0.6,2.2-1c1-0.3,0.9-1,1.3-1.9c0.6-0.6,1.9-1,2.2-1.6v-1 \t\tc0.3-2.9,0.3-3.5,0.6-5.4C51.5,35.8,51.8,34,51.8,33.6L51.8,33.6z M49.3,50.7c-0.6-0.3-1.3-0.3-1.9-0.3c-0.7,0-1.5,0.1-2.2,0.3 \t\tc0.2,0.6,0.4,1.3,0.6,1.9c0.9-0.3,1.3-0.6,1.9-0.9C47.7,51.7,49,51.1,49.3,50.7L49.3,50.7z M42.7,25.1c0.6-0.6,2.5-1.9,2.5-1.9 \t\tc0.3,0,0.3-0.3,0.3-0.6c-0.6-2.2-1.3-2.2-2.5-2.9c-0.6-0.5-1.4-0.7-2.2-0.6c-1.3,0.3-3.5,1-4.1,2.9c0,0.3-0.3,1.6,0.6,2.8 \t\tc0.6,1.3,1.9,2.2,2.5,2.9C40.7,27.6,41.1,26,42.7,25.1L42.7,25.1z M68.9,49.2c2.4,0,5.3,0.6,8.8,2v2.1c-3.5-1.4-6.7-1.7-8.4-2.2 \t\tv2.5c1.3,0.3,1.9,1,3.2,1.3c0.5,0.2,3.2,1.7,5.3,2.8v2.2c-3.8-2.4-6.5-3.3-9.7-4.7c-0.6,0.6-0.9,1.6-1.9,2.2 \t\tc-0.3,0.3-2.5-1.6-3.8-2.2c-0.9-0.6-2.8-0.9-4.1-1.3c-0.3,0-0.3-0.6-0.3-0.9c-0.3-1-0.6-1.9-0.3-2.2c1.6-0.6,2.2-1.9,2.2-2.8 \t\ts0.9,0.3,1.9,0c0.6-0.6,0.9-1.3,0.6-1.9c0-0.6-0.3-1.3-0.9-1.3c-3.1-1.3-6.7-1.3-9.8,0c-1,0.3-1,1.6-0.6,2.5c0.3,1.3,1.6,0.6,2.5,0 \t\tc0.3,0-0.3,1,0.3,1.9c0.6,1.3,1.9,1.6,1.9,1.9c0,1,0,1-0.3,1.6c0,0.6,0,1.3-0.6,1.6c-1.9,0.3-3.5,0.9-5.4,1.6 \t\tc-0.9,0.3-1.9,1.3-2.8,1.3c-0.6,0-1.3-1.3-1.6-1.6c-0.6,0-0.6-0.3-1.9,0c-3.7,1.5-7.3,3.3-10.8,5.4c-0.6-0.6-0.3-1.6-0.6-2.2 \t\tc3.5-2.2,7.2-4.1,11.1-5.7c0.3-0.3,0-1.3-0.3-1.9c0,0-2.2-0.3-6.3,1c-2.5,0.6-5.4,2.2-5.7,2.2C30.1,53.5,30,52.8,30,52 \t\tc1.9-1,4-1.8,6-2.5c2.2-0.6,4.4-0.6,6.7-1c-0.3,0-0.3-0.6-0.3-1c-0.9-1.9-2.5-3.5-4.1-5.1c-0.6-1.3-1.3-2.8-1.3-3.5 \t\tc0.6-0.6,1.3,0.3,2.2,0.3c-0.4-1.1-0.6-2.3-0.6-3.5c-0.3-1.3-0.3-1.3-0.3-2.8c0-1.9,0.6-2.8,0.3-3.2c-0.3-0.3-1.6-0.9-1.9-0.9 \t\tc-0.6-0.3-0.9-0.3-1.3-1c-1-1.6-1.9-2.8-1.9-4.4c0-1.6,0.6-2.9,1.3-4.4c0.3-1.3,1.9-1.9,2.9-2.5c1-0.6,1.9-0.3,2.8-0.3 \t\tc2.2,0,4.1,1.3,5.7,2.2c1.1,0.9,1.9,2.1,2.2,3.5h2.8c1.6,0.3,3.2,0.6,5.1,1.6c2.2-1.9,6-2.2,7.9-2.2c0-3.5,2.5-5.4,4.4-5.4 \t\tc1.6-0.3,2.5-0.6,4.8,0.3c1.6,0.9,3.8,4.1,3.8,4.4c0.6,1.3,0.3,2.9,0.3,4.8c-0.2,0.8-0.3,1.7-0.3,2.5c-0.3,1.3-1.9,2.2-2.8,2.5 \t\tc0,2.2-0.6,3.5-0.9,5.4c0,1-0.3,1.9-0.6,2.8c0.9-0.3,1.3-0.9,2.2-0.9c-0.6,4.1-1.6,3.5-2.5,5.4c-0.4,1.4-1,2.7-1.9,3.8 \t\tc-0.5,0.5-1,0.9-1.6,1.3C68.3,48.5,68.9,48.8,68.9,49.2 M52.1,73.5c-0.3-0.6-0.9-1-1.6-0.9c-0.6,0-2.2-1-2.2-0.3 \t\tc-1.6,0-0.3,1.6-0.3,2.5c0,0.7,0.9,1.9,1.8,2.9h2.9c-0.1-0.4-0.2-0.9-0.3-1.3C52.1,75.4,52.5,74.5,52.1,73.5L52.1,73.5z M46.8,59.3 \t\tc0.3,1.2,0.7,2.4,1.3,3.5c0.3,0,0.6,0.6,0.9,0.6c0.6-0.6,1.3-1.6,2.2-1.9v1.3c0,1,0,1.6,0.3,2.5c0,1,1,1,2.2,1 \t\tc1.3,0,1.6-2.2,1.6-2.5c0,0,0.3,1.3,2.2,2.2c0,0,2.2,0,2.2-0.3c0.3-1.6,0.6-1.9,0.3-3.2c0,0,1.9,1.3,2.9,2.5 \t\tc0.6-0.6,1.3-1.9,1.3-2.2c0.6-1.3,0.6-2.8,0.6-4.1c-2.5-1.6-5.7-1.9-8.9-1.9C53.1,56.8,49.9,57.1,46.8,59.3L46.8,59.3z M58.8,71.3 \t\tC57.5,71.6,55,72,55,72.9c-0.3,0.9,0,1.9,0,2.5c0.3,0.6,0.3,1.3,0.3,2.2v0.1h2.4c0.6-0.8,1.1-1.4,1.4-2.3 \t\tC59.4,74.5,59.1,72.9,58.8,71.3L58.8,71.3z M26.8,20c-0.6,0.9-0.6,1.9-0.6,2.8c0,1.6,0.3,2.8,0.6,4.8c-1.3,0.9-1.9,1.6-3.2,2.2 \t\tc0.3,1.9,0.6,5.4,0.6,5.4c0.6-0.9,0.6-0.9,1.3-1.6c1.3-0.9,1.9-1.6,3.5-2.8c0.3-0.6,0.6-0.3,1.6-1c0.3-0.3,0.6-0.6,0.6-0.9 \t\tc0-0.6-0.3-1.3-0.6-1.9c-0.3-0.6-0.9-2.2-0.9-2.5c0-2.5,0.3-3.2,0.6-5.4C29,18.7,27.4,18.7,26.8,20 M31.2,41.6 \t\tc-3.2,1-5.4,1.6-6,2.2c-1.6,1-2.2,1.6-3.8,2.5c0,1.9,0,1.9,0.3,2.9l0.3,3.8c0.6-1,2.5-2.9,3.5-4.1c1.4-1.6,3.1-2.9,5.1-3.8 \t\tC30.9,43.8,31.2,42.8,31.2,41.6 M25.2,71.6c0,0,1-0.6,1-1.3c1.6-1.9,3.5-3.5,3.8-3.8c-0.6-1.6-0.9-1.9-1.9-2.8 \t\tc-0.3,0.3-1.9,1.3-2.2,1.9c-0.6,0.3-1.3,0.6-1.6,0.9c0,0.6,0.3,1,0.6,1.6C24.9,68.8,25.2,70.4,25.2,71.6 M37.3,65 \t\tc-0.3-0.6-1.3-1-1.9-1.3c-0.6,0-1.3,1.3-1.3,2.5c0.1,1.3,0.3,2.6,0.6,3.8c0,0.3,0.6,0.6,1.3,0.9c1,0.6,1.9,1,2.8,1.6 \t\tc0,0-0.9-2.9-1.3-4.4C37.3,67.2,37.9,65.9,37.3,65 M40.4,10.2c0.3,0.6,4.1,2.9,5.7,3.8c1.3,1,2.5,1.3,3.8,1.9 \t\tc0.9-1.2,1.5-2.6,1.9-4.1c1,0.6,2.2,0.6,3.2,1c0,1.3,0,2.5,0.3,3.8c0,0.6,0.6,0.3,1.9-0.3c1.9-0.6,3.8-1,4.7-1.3 \t\tc2.2-1.3,3.5-3.8,5.4-3.8c1.6,0,4.4,0.9,5.1,1.6c0.9,0.3,1.6,0.6,2.5,0.6c0.9,0,1.7-0.7,2.4-1.3c-0.1-0.5-0.2-1-0.4-1.4 \t\tc-2.5-1.6-5.3-3.2-8-4.3C67,8,65.7,9.3,64.8,9.3c-1,0-0.3-1.9-0.3-3.2c-0.9,0-1.6,0-2.5-0.3c-0.6,2.2-1,5.1-2.5,5.7 \t\tc-0.4,0.2-0.8,0.3-1.3,0.3V9.2c0-0.3,1.3-2.5,1-2.8c0,0-2.8,0.6-3.5,1c-0.3,0.3-2.2,1.3-2.5,1.3c-0.4-0.1-0.8-0.3-1.3-0.3 \t\tc-0.9-0.6-1.6-0.6-2.5-1.3c-1.3,3.8-1.6,4.7-1.6,4.1c0,0-4.4-2.9-6-4.8c-4.1,0.6-4.1,1.3-7.6,2.5c-1.3,1.3-3.2,2.8-4.4,4.8 \t\tc-0.6,1.3-1.3,1.9-1.9,3.2l3.2,1.3c0.8-1,1.6-2.1,2.2-3.2C35.4,13.7,39.2,11.5,40.4,10.2L40.4,10.2z M22.4,54.2v1.6 \t\tc0,0.6,0.3,4.1,0.3,5.1c0.3,1,0.3,1.9,0.6,2.8c0.3,0.6,0.6,1.3,0.6,1.9c0.4-0.2,0.7-0.6,1-1c0.9-1,1.3-1.9,1.9-3.2 \t\tc-0.3-2.2-1-4.1-1-4.7c0-2.5,0.3-3.2,0.6-4.8C25.2,52.6,23.7,53.6,22.4,54.2L22.4,54.2z M31.6,36.8c0-1.9,0.6-1.9,0.3-2.5 \t\ts-2.8,0-3.5,0c-1.6,0.3-4.4,1.3-4.4,1.9c-0.3,0.9-0.3,3.2-0.3,3.5c0.3,1,0.3,1.9,0.6,2.8c0.9-1,1.3-1.3,1.9-1.6 \t\tc0.3-0.3,3.8-2.8,4.1-3.2C30.9,37.1,31.2,37.4,31.6,36.8L31.6,36.8z M29,77c-0.3,0.3-0.5,0.5-0.9,0.7h-1.2c-0.5-1.6-1.2-3.1-2-4.5 \t\tc0,0,4.7-1.9,6-1.9c0.3,0.6,0.6,1.6,1.3,2.2C31.6,74.2,29.7,76.1,29,77"> </path> </g>'},Te={"user-tie":"0 0 448 512",plus:"0 0 448 512","table-cells":"0 0 512 512",bars:"0 0 448 512","pen-to-square":"0 0 512 512",trash:"0 0 448 512","chevron-left":"0 0 320 512","chevron-right":"0 0 320 512",xmark:"0 0 384 512",ing:"0 0 77.7 77.7"};class Pe extends ot{static properties={name:{type:String},size:{type:String},color:{type:String}};static styles=o`
    :host {
      display: inline-block;
      --icon-size: 24px;
      --icon-color: currentColor;
    }
    svg {
      width: var(--icon-size);
      height: var(--icon-size);
      fill: var(--icon-color);
      display: block;
    }
  `;renderSvg(t){const e=Te[t]||"0 0 448 512",i={width:this.size||"var(--icon-size)",height:this.size||"var(--icon-size)",fill:this.color||"var(--icon-color)"};return B`
      <svg
        viewBox="${e}"
        xmlns="http://www.w3.org/2000/svg"
        style=${Le(i)}
      >
        ${Oe(Re[t]||"")}
      </svg>
    `}render(){return B`${this.name?this.renderSvg(this.name):""}`}}customElements.define("svg-icon",Pe);class De extends ot{static styles=o`
    :host {
      display: block;
      min-height: 100vh;
      background: #f8f8f8;
      font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
      font-optical-sizing: auto;
    }
    main {
      max-width: 93%;
      margin: 0 auto;
      padding: 35px 45px;
    }
  `;_routerInitialized=!1;updated(){if(!this._routerInitialized){const t=this.renderRoot.querySelector("#outlet");if(t){const e="dogancelik.com"===window.location.hostname;new se(t,e?{baseUrl:"/inghub-case/"}:{}).setRoutes([{path:"/",redirect:"/employees"},{path:"/employees",component:"employee-list"},{path:"/employees/add",component:"employee-form"},{path:"/employees/edit/:id",component:"employee-form"}]),this._routerInitialized=!0}}}render(){return B`
      <nav-menu></nav-menu>
      <main>
        <div id="outlet"></div>
      </main>
    `}}customElements.define("app-root",De),window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("app-root");document.body.appendChild(t)});
