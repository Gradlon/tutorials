(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["mdbDropdownItem"]=e():t["mdbDropdownItem"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),a=n("fc6a"),c=n("c04e"),u=n("5135"),f=n("0cfb"),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=a(t),e=c(e,!0),f)try{return s(t,e)}catch(n){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),a=n("6eeb"),c=n("ce4e"),u=n("e893"),f=n("94ca");t.exports=function(t,e){var n,s,l,p,d,y,v=t.target,h=t.global,b=t.stat;if(s=h?r:b?r[v]||c(v,{}):(r[v]||{}).prototype,s)for(l in e){if(d=e[l],t.noTargetGet?(y=o(s,l),p=y&&y.value):p=s[l],n=f(h?l:v+(b?".":"#")+l,t.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;u(d,p)}(t.sham||p&&p.sham)&&i(d,"sham",!0),a(s,l,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"428f":function(t,e,n){t.exports=n("da84")},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"45e1":function(t,e,n){},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),a=function(t){return function(e,n,a){var c,u=r(e),f=o(u.length),s=i(a,f);if(t&&n!=n){while(f>s)if(c=u[s++],c!=c)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),i=n("7418"),a=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"69f3":function(t,e,n){var r,o,i,a=n("7f9a"),c=n("da84"),u=n("861d"),f=n("9112"),s=n("5135"),l=n("f772"),p=n("d012"),d=c.WeakMap,y=function(t){return i(t)?o(t):r(t,{})},v=function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(a){var h=new d,b=h.get,g=h.has,m=h.set;r=function(t,e){return m.call(h,t,e),e},o=function(t){return b.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var x=l("state");p[x]=!0,r=function(t,e){return f(t,x,e),e},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:y,getterFor:v}},"6eeb":function(t,e,n){var r=n("da84"),o=n("5692"),i=n("9112"),a=n("5135"),c=n("ce4e"),u=n("9e81"),f=n("69f3"),s=f.get,l=f.enforce,p=String(u).split("toString");o("inspectSource",(function(t){return u.call(t)})),(t.exports=function(t,e,n,o){var u=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||i(n,"name",e),l(n).source=p.join("string"==typeof e?e:"")),t!==r?(u?!s&&t[e]&&(f=!0):delete t[e],f?t[e]=n:i(t,e,n)):f?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u.call(this)}))},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7f9a":function(t,e,n){var r=n("da84"),o=n("9e81"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o.call(i))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"857a":function(t,e,n){var r=n("1d80"),o=/"/g;t.exports=function(t,e,n,i){var a=String(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),c+">"+a+"</"+e+">"}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==f||n!=u&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),a=n("c04e"),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9e81":function(t,e,n){var r=n("5692");t.exports=r("native-function-to-string",Function.toString)},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},b414:function(t,e,n){"use strict";var r=n("45e1"),o=n.n(r);o.a},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},c7cd:function(t,e,n){"use strict";var r=n("23e7"),o=n("857a"),i=n("eae9");r({target:"String",proto:!0,forced:i("fixed")},{fixed:function(){return o(this,"tt","","")}})},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,a=n("d012");t.exports=function(t,e){var n,c=o(t),u=0,f=[];for(n in c)!r(a,n)&&r(c,n)&&f.push(n);while(e.length>u)r(c,n=e[u++])&&(~i(f,n)||f.push(n));return f}},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("428f"),o=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),a=n("9bf2");t.exports=function(t,e){for(var n=o(e),c=a.f,u=i.f,f=0;f<n.length;f++){var s=n[f];r(t,s)||c(t,s,u(e,s))}}},eae9:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fb15:function(t,e,n){"use strict";var r;(n.r(e),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.to?"router-link":t.tag,{tag:"component",class:t.className,attrs:{tabindex:0,to:t.to,exact:t.exact,href:!t.to&&t.href,target:t.tab},on:{click:function(e){return t.$emit("click",e)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.stopPropagation(),t.handleKeypress(e))}}},[t._t("default"),t.submenuIcon?n("mdb-icon",{staticClass:"pl-2",attrs:{icon:t.submenuIcon}}):t._e()],2)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{class:t.className})},c=[],u=(n("c7cd"),{props:{icon:{type:String},size:{type:[Boolean,String],default:!1},fixed:{type:Boolean,default:!1},pull:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!1},spin:{type:Boolean,default:!1},pulse:{type:Boolean,default:!1},rotate:{type:[Boolean,String],default:!1},flip:{type:[Boolean,String],default:!1},inverse:{type:[Boolean,String],default:!1},stack:{type:[Boolean,String],default:!1},color:{type:String,default:""},far:{type:Boolean,default:!1},regular:{type:Boolean,default:!1},fal:{type:Boolean,default:!1},light:{type:Boolean,default:!1},fab:{type:Boolean,default:!1},fad:{type:Boolean,default:!1},duotone:{type:Boolean,default:!1},brands:{type:Boolean,default:!1}},computed:{className:function(){return[this.far||this.regular?"far":this.fal||this.light?"fal":this.fab||this.brands?"fab":this.fad||this.duotone?"fad":"fas",this.icon&&"fa-"+this.icon,this.size&&"fa-"+this.size,this.fixed&&"fa-fw",this.pull&&"fa-pull-"+this.pull,this.border&&"fa-border",this.spin&&"fa-spin",this.pulse&&"fa-pulse",this.rotate&&"fa-rotate-"+this.rotate,this.flip&&"fa-flip-"+this.flip,this.inverse&&"fa-inverse",this.stack&&"fa-"+this.stack,this.color&&"text-"+this.color]}}}),f=u,s=f;function l(t,e,n,r,o,i,a,c){var u,f="function"===typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=u):o&&(u=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(f.functional){f._injectStyles=u;var s=f.render;f.render=function(t,e){return u.call(e),s(t,e)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:f}}var p=l(s,a,c,!1,null,"fa8e63a8",null),d=p.exports,y={components:{mdbIcon:d},props:{tag:{type:String,default:"a"},to:[String,Object],href:{type:String},disabled:{type:Boolean,default:!1},active:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},newTab:{type:Boolean,default:!1},submenu:{type:Boolean,default:!1},submenuIcon:String},computed:{className:function(){return["dropdown-item",this.disabled?"disabled":"",this.active?"active":"",this.submenu&&"dropdown-submenu"]},tab:function(){return!!this.newTab&&"_blank"}},methods:{handleKeypress:function(t){t.target.click()}}},v=y,h=v,b=(n("b414"),l(h,o,i,!1,null,"4f92296a",null)),g=b.exports;n.d(e,"mdbDropdownItem",(function(){return y}));e["default"]=g},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map