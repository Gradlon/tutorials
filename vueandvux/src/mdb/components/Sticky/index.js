(function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports["Sticky"]=n():t["Sticky"]=n()})("undefined"!==typeof self?self:this,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="fb15")}({"06cf":function(t,n,e){var r=e("83ab"),o=e("d1e7"),c=e("5c6c"),i=e("fc6a"),u=e("c04e"),f=e("5135"),a=e("0cfb"),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=i(t),n=u(n,!0),a)try{return s(t,n)}catch(e){}if(f(t,n))return c(!o.f.call(t,n),t[n])}},"0cfb":function(t,n,e){var r=e("83ab"),o=e("d039"),c=e("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},"1d80":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,n,e){var r=e("d039"),o=e("b622"),c=o("species");t.exports=function(t){return!r((function(){var n=[],e=n.constructor={};return e[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"23cb":function(t,n,e){var r=e("a691"),o=Math.max,c=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):c(e,n)}},"23e7":function(t,n,e){var r=e("da84"),o=e("06cf").f,c=e("9112"),i=e("6eeb"),u=e("ce4e"),f=e("e893"),a=e("94ca");t.exports=function(t,n){var e,s,p,l,d,v,y=t.target,b=t.global,x=t.stat;if(s=b?r:x?r[y]||u(y,{}):(r[y]||{}).prototype,s)for(p in n){if(d=n[p],t.noTargetGet?(v=o(s,p),l=v&&v.value):l=s[p],e=a(b?p:y+(x?".":"#")+p,t.forced),!e&&void 0!==l){if(typeof d===typeof l)continue;f(d,l)}(t.sham||l&&l.sham)&&c(d,"sham",!0),i(s,p,d,t)}}},"241c":function(t,n,e){var r=e("ca84"),o=e("7839"),c=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,c)}},"428f":function(t,n,e){t.exports=e("da84")},"44ad":function(t,n,e){var r=e("d039"),o=e("c6b6"),c="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},4930:function(t,n,e){var r=e("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4d64":function(t,n,e){var r=e("fc6a"),o=e("50c4"),c=e("23cb"),i=function(t){return function(n,e,i){var u,f=r(n),a=o(f.length),s=c(i,a);if(t&&e!=e){while(a>s)if(u=f[s++],u!=u)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},"50c4":function(t,n,e){var r=e("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},5692:function(t,n,e){var r=e("c430"),o=e("c6cd");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.3.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,n,e){var r=e("d066"),o=e("241c"),c=e("7418"),i=e("825a");t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(i(t)),e=c.f;return e?n.concat(e(t)):n}},"5c6c":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"65f0":function(t,n,e){var r=e("861d"),o=e("e8b5"),c=e("b622"),i=c("species");t.exports=function(t,n){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?r(e)&&(e=e[i],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},"69f3":function(t,n,e){var r,o,c,i=e("7f9a"),u=e("da84"),f=e("861d"),a=e("9112"),s=e("5135"),p=e("f772"),l=e("d012"),d=u.WeakMap,v=function(t){return c(t)?o(t):r(t,{})},y=function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}};if(i){var b=new d,x=b.get,h=b.has,g=b.set;r=function(t,n){return g.call(b,t,n),n},o=function(t){return x.call(b,t)||{}},c=function(t){return h.call(b,t)}}else{var m=p("state");l[m]=!0,r=function(t,n){return a(t,m,n),n},o=function(t){return s(t,m)?t[m]:{}},c=function(t){return s(t,m)}}t.exports={set:r,get:o,has:c,enforce:v,getterFor:y}},"6eeb":function(t,n,e){var r=e("da84"),o=e("5692"),c=e("9112"),i=e("5135"),u=e("ce4e"),f=e("9e81"),a=e("69f3"),s=a.get,p=a.enforce,l=String(f).split("toString");o("inspectSource",(function(t){return f.call(t)})),(t.exports=function(t,n,e,o){var f=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||c(e,"name",n),p(e).source=l.join("string"==typeof n?n:"")),t!==r?(f?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=e:c(t,n,e)):a?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||f.call(this)}))},7418:function(t,n){n.f=Object.getOwnPropertySymbols},7839:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,n,e){var r=e("1d80");t.exports=function(t){return Object(r(t))}},"7f9a":function(t,n,e){var r=e("da84"),o=e("9e81"),c=r.WeakMap;t.exports="function"===typeof c&&/native code/.test(o.call(c))},"825a":function(t,n,e){var r=e("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,n,e){var r=e("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},8418:function(t,n,e){"use strict";var r=e("c04e"),o=e("9bf2"),c=e("5c6c");t.exports=function(t,n,e){var i=r(n);i in t?o.f(t,i,c(0,e)):t[i]=e}},"861d":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"90e3":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},9112:function(t,n,e){var r=e("83ab"),o=e("9bf2"),c=e("5c6c");t.exports=r?function(t,n,e){return o.f(t,n,c(1,e))}:function(t,n,e){return t[n]=e,t}},"94ca":function(t,n,e){var r=e("d039"),o=/#|\.prototype\./,c=function(t,n){var e=u[i(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},i=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=c.data={},f=c.NATIVE="N",a=c.POLYFILL="P";t.exports=c},"99af":function(t,n,e){"use strict";var r=e("23e7"),o=e("d039"),c=e("e8b5"),i=e("861d"),u=e("7b0b"),f=e("50c4"),a=e("8418"),s=e("65f0"),p=e("1dde"),l=e("b622"),d=l("isConcatSpreadable"),v=9007199254740991,y="Maximum allowed index exceeded",b=!o((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),x=p("concat"),h=function(t){if(!i(t))return!1;var n=t[d];return void 0!==n?!!n:c(t)},g=!b||!x;r({target:"Array",proto:!0,forced:g},{concat:function(t){var n,e,r,o,c,i=u(this),p=s(i,0),l=0;for(n=-1,r=arguments.length;n<r;n++)if(c=-1===n?i:arguments[n],h(c)){if(o=f(c.length),l+o>v)throw TypeError(y);for(e=0;e<o;e++,l++)e in c&&a(p,l,c[e])}else{if(l>=v)throw TypeError(y);a(p,l++,c)}return p.length=l,p}})},"9bf2":function(t,n,e){var r=e("83ab"),o=e("0cfb"),c=e("825a"),i=e("c04e"),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(c(t),n=i(n,!0),c(e),o)try{return u(t,n,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},"9e81":function(t,n,e){var r=e("5692");t.exports=r("native-function-to-string",Function.toString)},a691:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},b301:function(t,n,e){"use strict";var r=e("d039");t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},b622:function(t,n,e){var r=e("da84"),o=e("5692"),c=e("90e3"),i=e("4930"),u=r.Symbol,f=o("wks");t.exports=function(t){return f[t]||(f[t]=i&&u[t]||(i?u:c)("Symbol."+t))}},c04e:function(t,n,e){var r=e("861d");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,n){t.exports=!1},c6b6:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},c6cd:function(t,n,e){var r=e("da84"),o=e("ce4e"),c="__core-js_shared__",i=r[c]||o(c,{});t.exports=i},c8ba:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},c975:function(t,n,e){"use strict";var r=e("23e7"),o=e("4d64").indexOf,c=e("b301"),i=[].indexOf,u=!!i&&1/[1].indexOf(1,-0)<0,f=c("indexOf");r({target:"Array",proto:!0,forced:u||f},{indexOf:function(t){return u?i.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},ca84:function(t,n,e){var r=e("5135"),o=e("fc6a"),c=e("4d64").indexOf,i=e("d012");t.exports=function(t,n){var e,u=o(t),f=0,a=[];for(e in u)!r(i,e)&&r(u,e)&&a.push(e);while(n.length>f)r(u,e=n[f++])&&(~c(a,e)||a.push(e));return a}},cc12:function(t,n,e){var r=e("da84"),o=e("861d"),c=r.document,i=o(c)&&o(c.createElement);t.exports=function(t){return i?c.createElement(t):{}}},ce4e:function(t,n,e){var r=e("da84"),o=e("9112");t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},d012:function(t,n){t.exports={}},d039:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},d066:function(t,n,e){var r=e("428f"),o=e("da84"),c=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?c(r[t])||c(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},d1e7:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);n.f=c?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},da84:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e("c8ba"))},e893:function(t,n,e){var r=e("5135"),o=e("56ef"),c=e("06cf"),i=e("9bf2");t.exports=function(t,n){for(var e=o(n),u=i.f,f=c.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||u(t,s,f(n,s))}}},e8b5:function(t,n,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f6fd:function(t,n){(function(t){var n="currentScript",e=t.getElementsByTagName("script");n in t||Object.defineProperty(t,n,{get:function(){try{throw new Error}catch(r){var t,n=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in e)if(e[t].src==n||"interactive"==e[t].readyState)return e[t];return null}}})})(document)},f772:function(t,n,e){var r=e("5692"),o=e("90e3"),c=r("keys");t.exports=function(t){return c[t]||(c[t]=o(t))}},fb15:function(t,n,e){"use strict";var r;(e.r(n),"undefined"!==typeof window)&&(e("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(e.p=r[1]));e("99af"),e("c975");var o,c,i,u={bind:function(t,n){var e=t.style,r=n.value||{};if(c=r.stickyTop||0,i=r.zIndex||1e3,e.position="-webkit-sticky",e.position="sticky",1!==e.position.indexOf("sticky"))return e.top="".concat(c,"px"),void(e.zIndex=i);var u=t.firstElementChild.style;u.cssText="left: 0; right: 0; top: ".concat(c,"px; z-index: ").concat(i,"; ").concat(u.cssText);var f=!1,a=function(){f||(e.height||(e.height="".concat(t.offsetHeight,"px")),u.position="fixed",f=!0)},s=function(){f&&(u.position="",f=!1)},p=function(){var n=t.getBoundingClientRect().top;n<=c?a():s()};o=function(){if(!window.requestAnimationFrame)return setTimeout(p,16);window.requestAnimationFrame(p)},window.addEventListener("scroll",o)},unbind:function(){window.removeEventListener("scroll",o)},update:function(t,n){var e=n.value||{};c=e.stickyTop||0,i=e.zIndex||1e3;var r=t.firstElementChild.style;t.style.top="".concat(c,"px"),r.top="".concat(c,"px"),t.style.zIndex=i,r.zIndex=i}};n["default"]=u},fc6a:function(t,n,e){var r=e("44ad"),o=e("1d80");t.exports=function(t){return r(o(t))}}})}));
//# sourceMappingURL=index.umd.min.js.map