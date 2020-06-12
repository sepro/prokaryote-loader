var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="prokaryote-loader";var a;var i;var s=false;var o=0;var l=false;var f=typeof window!=="undefined"?window:{};var u=f.CSS;var c=f.document||{head:{}};var $={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var v=function(){return(c.head.attachShadow+"").indexOf("[native")>-1}();var h=function(e){return Promise.resolve(e)};var m=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var p="{visibility:hidden}.hydrated{visibility:inherit}";var d=function(e,r){if(r===void 0){r=""}{return function(){return}}};var g=function(e,r){{return function(){return}}};var y=new WeakMap;var w=function(e,r,t){var n=we.get(e);if(m&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}we.set(e,n)};var b=function(e,r,t,n){var a=_(r);var i=we.get(a);e=e.nodeType===11?e:c;if(i){if(typeof i==="string"){e=e.head||e;var s=y.get(e);var o=void 0;if(!s){y.set(e,s=new Set)}if(!s.has(a)){{if($.$cssShim$){o=$.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=c.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var S=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=d("attachStyles",r.$tagName$);var i=b(v&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var _=function(e,r){return"sc-"+e.$tagName$};var R={};var x="http://www.w3.org/2000/svg";var j="http://www.w3.org/1999/xhtml";var N=function(e){return e!=null};var C=function(e){e=typeof e;return e==="object"||e==="function"};var E=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var M=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o=[];var l=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!C(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?O(null,a):a)}s=i}}};l(t);if(r){{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var u=O(e,null);u.$attrs$=r;if(o.length>0){u.$children$=o}return u}));var O=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}return t};var L={};var A=function(e){return e&&e.$tag$===L};var k=function(e,r,t,n,a,i){if(t!==n){var s=pe(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=P(t);var u=P(n);l.remove.apply(l,f.filter((function(e){return e&&!u.includes(e)})));l.add.apply(l,u.filter((function(e){return e&&!f.includes(e)})))}else{var c=C(n);if((s||c&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var $=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=$){e[r]=$}}else{e[r]=n}}catch(v){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var U=/\s/;var P=function(e){return!e?[]:e.split(U)};var B=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||R;var s=r.$attrs$||R;{for(n in i){if(!(n in s)){k(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){k(a,n,i[n],s[n],t,r.$flags$)}};var I=function(e,r,t,n){var i=r.$children$[t];var o=0;var l;var f;if(i.$text$!==null){l=i.$elm$=c.createTextNode(i.$text$)}else{if(!s){s=i.$tag$==="svg"}l=i.$elm$=c.createElementNS(s?x:j,i.$tag$);if(s&&i.$tag$==="foreignObject"){s=false}{B(null,i,s)}if(N(a)&&l["s-si"]!==a){l.classList.add(l["s-si"]=a)}if(i.$children$){for(o=0;o<i.$children$.length;++o){f=I(e,i,o);if(f){l.appendChild(f)}}}{if(i.$tag$==="svg"){s=false}else if(l.tagName==="foreignObject"){s=true}}}return l};var T=function(e,r,t,n,a,s){var o=e;var l;if(o.shadowRoot&&o.tagName===i){o=o.shadowRoot}for(;a<=s;++a){if(n[a]){l=I(null,t,a);if(l){n[a].$elm$=l;o.insertBefore(l,r)}}}};var z=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;a.remove()}}};var H=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=n.length-1;var u=n[0];var c=n[f];var $;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if(u==null){u=n[++i]}else if(c==null){c=n[--f]}else if(q(o,u)){V(o,u);o=r[++a];u=n[++i]}else if(q(l,c)){V(l,c);l=r[--s];c=n[--f]}else if(q(o,c)){V(o,c);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];c=n[--f]}else if(q(l,u)){V(l,u);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];u=n[++i]}else{{$=I(r&&r[i],t,i);u=n[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>s){T(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){z(r,a,s)}};var q=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var V=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var o=r.$text$;if(o===null){{s=i==="svg"?true:i==="foreignObject"?false:s}{{B(e,r,s)}}if(n!==null&&a!==null){H(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}T(t,null,r,a,0,a.length-1)}else if(n!==null){z(n,0,n.length-1)}if(s&&i==="svg"){s=false}}else if(e.$text$!==o){t.data=o}};var F=function(e,r){var t=e.$hostElement$;var n=e.$vnode$||O(null,null);var s=A(r)?r:M(null,null,r);i=t.tagName;s.$tag$=null;s.$flags$|=4;e.$vnode$=s;s.$elm$=n.$elm$=t.shadowRoot||t;{a=t["s-sc"]}V(n,s)};var W=e("g",(function(e){return ve(e).$hostElement$}));var D=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var G=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var Q=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}G(e,e.$ancestorComponent$);var t=function(){return J(e,r)};return Ee(t)};var J=function(e,r){var t=d("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;t();return te(a,(function(){return K(e,n,r)}))};var K=function(e,r,t){var n=e.$hostElement$;var a=d("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){S(e)}var s=d("render",e.$cmpMeta$.$tagName$);{{F(e,X(e,r))}}if($.$cssShim$){$.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return Y(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var X=function(e,r){try{r=r.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(t){de(t)}return r};var Y=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=d("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ne(t)}{re(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){ee()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ce((function(){return Q(e,false)}))}e.$flags$&=~(4|512)}};var Z=function(e){{var r=ve(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){Q(r,false)}return t}};var ee=function(e){{ne(c.documentElement)}{$.$flags$|=2}Ce((function(){return D(f,"appload",{detail:{namespace:n}})}))};var re=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){de(n)}}return undefined};var te=function(e,r){return e&&e.then?e.then(r):r()};var ne=function(e){return e.classList.add("hydrated")};var ae=function(e,r){if(e!=null&&!C(e)){if(r&1){return String(e)}return e}return e};var ie=function(e,r){return ve(e).$instanceValues$.get(r)};var se=function(e,r,t,n){var a=ve(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=ae(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if((s&(2|16))===2){Q(a,false)}}}};var oe=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return ie(this,n)},set:function(e){se(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;$.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var le=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,l,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=ye(a);if(!s.then)return[3,2];e=g();return[4,s];case 1:s=c.sent();e();c.label=2;case 2:if(!s.isProxied){oe(s,a,2);s.isProxied=true}t=d("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch($){de($)}{n.$flags$&=~8}t();i=_(a);if(!(!we.has(i)&&s.style))return[3,5];o=d("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-cb0bfb69.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=c.sent();c.label=4;case 4:w(i,l,!!(a.$flags$&1));o();c.label=5;case 5:f=n.$ancestorComponent$;u=function(){return Q(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var fe=function(e){if(($.$flags$&1)===0){var r=ve(e);var t=r.$cmpMeta$;var n=d("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){G(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Ce((function(){return le(e,r,t)}))}}n()}};var ue=function(e){if(($.$flags$&1)===0){var r=ve(e);if($.$cssShim$){$.$cssShim$.removeHost(e)}}};var ce=e("b",(function(e,r){if(r===void 0){r={}}var t=d();var n=[];var a=r.exclude||[];var i=f.customElements;var s=c.head;var o=s.querySelector("meta[charset]");var l=c.createElement("style");var u=[];var h;var m=true;Object.assign($,r);$.$resourcesUrl$=new URL(r.resourcesUrl||"./",c.baseURI).href;{if(r.syncQueue){$.$flags$|=4}}e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}if(!v&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;me(r,t);if(t.$flags$&1){if(v){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(m){u.push(this)}else{$.jmp((function(){return fe(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;$.jmp((function(){return ue(e)}))};r.prototype.forceUpdate=function(){Z(this)};r.prototype.componentOnReady=function(){return ve(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,oe(o,t,1))}}))}));{l.innerHTML=n+p;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}m=false;if(u.length){u.map((function(e){return e.connectedCallback()}))}else{{$.jmp((function(){return h=setTimeout(ee,30)}))}}t()}));var $e=new WeakMap;var ve=function(e){return $e.get(e)};var he=e("r",(function(e,r){return $e.set(r.$lazyInstance$=e,r)}));var me=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return $e.set(e,t)};var pe=function(e,r){return r in e};var de=function(e){return console.error(e)};var ge=new Map;var ye=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=ge.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{ge.set(i,e)}return e[a]}),de)};var we=new Map;var be=[];var Se=[];var _e=[];var Re=function(e,r){return function(t){e.push(t);if(!l){l=true;if(r&&$.$flags$&4){Ce(Ne)}else{$.raf(Ne)}}}};var xe=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){de(t)}}e.length=0};var je=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){de(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var Ne=function(){{o++}xe(be);{var e=($.$flags$&6)===2?performance.now()+14*Math.ceil(o*(1/10)):Infinity;je(Se,e);je(_e,e);if(Se.length>0){_e.push.apply(_e,Se);Se.length=0}if(l=be.length+Se.length+_e.length>0){$.raf(Ne)}else{o=0}}};var Ce=function(e){return h().then(e)};var Ee=Re(Se,true);var Me=e("a",(function(){if(!(u&&u.supports&&u.supports("color","var(--c)"))){return r.import("./p-b2525e42.system.js").then((function(){if($.$cssShim$=f.__cssshim){return $.$cssShim$.i()}else{return 0}}))}return h()}));var Oe=e("p",(function(){{$.$cssShim$=f.__cssshim}var e=Array.from(c.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,f.location.href)).href;{Le(t.resourcesUrl,e)}if(!f.customElements){return r.import("./p-67940bdc.system.js").then((function(){return t}))}}return h(t)}));var Le=function(e,r){var t=E(n);try{f[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;f[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=c.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(f[t].m);o.remove()}}));a.set(i,s);c.head.appendChild(o)}return s}}}}}}));