(function(t,e){"object"===typeof exports&&"object"===typeof module?module.exports=e():"function"===typeof define&&define.amd?define([],e):"object"===typeof exports?exports["mdbNavbar"]=e():t["mdbNavbar"]=e()})("undefined"!==typeof self?self:this,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"06cf":function(t,e,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),a=n("fc6a"),c=n("c04e"),s=n("5135"),l=n("0cfb"),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e,!0),l)try{return f(t,e)}catch(n){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},"0cfb":function(t,e,n){var r=n("83ab"),o=n("d039"),i=n("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),a=n("9112");for(var c in o){var s=r[c],l=s&&s.prototype;if(l&&l.forEach!==i)try{a(l,"forEach",i)}catch(f){l.forEach=i}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("b301");t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1be4":function(t,e,n){var r=n("d066");t.exports=r("document","documentElement")},"1c0b":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,e,n){var r=n("a691"),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},"23e7":function(t,e,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),a=n("6eeb"),c=n("ce4e"),s=n("e893"),l=n("94ca");t.exports=function(t,e){var n,f,u,p,d,h,g=t.target,v=t.global,b=t.stat;if(f=v?r:b?r[g]||c(g,{}):(r[g]||{}).prototype,f)for(u in e){if(d=e[u],t.noTargetGet?(h=o(f,u),p=h&&h.value):p=f[u],n=l(v?u:g+(b?".":"#")+u,t.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;s(d,p)}(t.sham||p&&p.sham)&&i(d,"sham",!0),a(f,u,d,t)}}},"241c":function(t,e,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"37e8":function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("825a"),a=n("df75");t.exports=r?Object.defineProperties:function(t,e){i(t);var n,r=a(e),c=r.length,s=0;while(c>s)o.f(t,n=r[s++],e[n]);return t}},"3bbe":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"428f":function(t,e,n){t.exports=n("da84")},"44ad":function(t,e,n){var r=n("d039"),o=n("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},4930:function(t,e,n){var r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4d64":function(t,e,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),a=function(t){return function(e,n,a){var c,s=r(e),l=o(s.length),f=i(a,l);if(t&&n!=n){while(l>f)if(c=s[f++],c!=c)return!0}else for(;l>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},"50c4":function(t,e,n){var r=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},5692:function(t,e,n){var r=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.3.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var r=n("d066"),o=n("241c"),i=n("7418"),a=n("825a");t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),o=n("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(a,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"69f3":function(t,e,n){var r,o,i,a=n("7f9a"),c=n("da84"),s=n("861d"),l=n("9112"),f=n("5135"),u=n("f772"),p=n("d012"),d=c.WeakMap,h=function(t){return i(t)?o(t):r(t,{})},g=function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(a){var v=new d,b=v.get,y=v.has,m=v.set;r=function(t,e){return m.call(v,t,e),e},o=function(t){return b.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var x=u("state");p[x]=!0,r=function(t,e){return l(t,x,e),e},o=function(t){return f(t,x)?t[x]:{}},i=function(t){return f(t,x)}}t.exports={set:r,get:o,has:i,enforce:h,getterFor:g}},"6eeb":function(t,e,n){var r=n("da84"),o=n("5692"),i=n("9112"),a=n("5135"),c=n("ce4e"),s=n("9e81"),l=n("69f3"),f=l.get,u=l.enforce,p=String(s).split("toString");o("inspectSource",(function(t){return s.call(t)})),(t.exports=function(t,e,n,o){var s=!!o&&!!o.unsafe,l=!!o&&!!o.enumerable,f=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||i(n,"name",e),u(n).source=p.join("string"==typeof e?e:"")),t!==r?(s?!f&&t[e]&&(l=!0):delete t[e],l?t[e]=n:i(t,e,n)):l?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||s.call(this)}))},7156:function(t,e,n){var r=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(t,a),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7554:function(t,e,n){"use strict";var r=n("d73e"),o=n.n(r);o.a},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var r=n("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,e,n){var r=n("825a"),o=n("37e8"),i=n("7839"),a=n("d012"),c=n("1be4"),s=n("cc12"),l=n("f772"),f=l("IE_PROTO"),u="prototype",p=function(){},d=function(){var t,e=s("iframe"),n=i.length,r="<",o="script",a=">",l="java"+o+":";e.style.display="none",c.appendChild(e),e.src=String(l),t=e.contentWindow.document,t.open(),t.write(r+o+a+"document.F=Object"+r+"/"+o+a),t.close(),d=t.F;while(n--)delete d[u][i[n]];return d()};t.exports=Object.create||function(t,e){var n;return null!==t?(p[u]=r(t),n=new p,p[u]=null,n[f]=t):n=d(),void 0===e?n:o(n,e)},a[f]=!0},"7f9a":function(t,e,n){var r=n("da84"),o=n("9e81"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o.call(i))},"825a":function(t,e,n){var r=n("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var r=n("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"857a":function(t,e,n){var r=n("1d80"),o=/"/g;t.exports=function(t,e,n,i){var a=String(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),c+">"+a+"</"+e+">"}},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},"90e3":function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},9112:function(t,e,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"94ca":function(t,e,n){var r=n("d039"),o=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==l||n!=s&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},"9bf2":function(t,e,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),a=n("c04e"),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9e81":function(t,e,n){var r=n("5692");t.exports=r("native-function-to-string",Function.toString)},a691:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},a9e3:function(t,e,n){"use strict";var r=n("83ab"),o=n("da84"),i=n("94ca"),a=n("6eeb"),c=n("5135"),s=n("c6b6"),l=n("7156"),f=n("c04e"),u=n("d039"),p=n("7c73"),d=n("241c").f,h=n("06cf").f,g=n("9bf2").f,v=n("58a8").trim,b="Number",y=o[b],m=y.prototype,x=s(p(m))==b,S=function(t){var e,n,r,o,i,a,c,s,l=f(t,!1);if("string"==typeof l&&l.length>2)if(l=v(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(i=l.slice(2),a=i.length,c=0;c<a;c++)if(s=i.charCodeAt(c),s<48||s>o)return NaN;return parseInt(i,r)}return+l};if(i(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(x?u((function(){m.valueOf.call(n)})):s(n)!=b)?l(new y(S(e)),n,O):S(e)},L=r?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;L.length>_;_++)c(y,w=L[_])&&!c(O,w)&&g(O,w,h(y,w));O.prototype=m,m.constructor=O,a(o,b,O)}},b301:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!n||!r((function(){n.call(null,e||function(){throw 1},1)}))}},b622:function(t,e,n){var r=n("da84"),o=n("5692"),i=n("90e3"),a=n("4930"),c=r.Symbol,s=o("wks");t.exports=function(t){return s[t]||(s[t]=a&&c[t]||(a?c:i)("Symbol."+t))}},b727:function(t,e,n){var r=n("f8c2"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),c=n("65f0"),s=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,f=4==t,u=6==t,p=5==t||u;return function(d,h,g,v){for(var b,y,m=i(d),x=o(m),S=r(h,g,3),w=a(x.length),O=0,L=v||c,_=e?L(d,w):n?L(d,0):void 0;w>O;O++)if((p||O in x)&&(b=x[O],y=S(b,O,m),t))if(e)_[O]=y;else if(y)switch(t){case 3:return!0;case 5:return b;case 6:return O;case 2:s.call(_,b)}else if(f)return!1;return u?-1:l||f?f:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c04e:function(t,e,n){var r=n("861d");t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},c7cd:function(t,e,n){"use strict";var r=n("23e7"),o=n("857a"),i=n("eae9");r({target:"String",proto:!0,forced:i("fixed")},{fixed:function(){return o(this,"tt","","")}})},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},c975:function(t,e,n){"use strict";var r=n("23e7"),o=n("4d64").indexOf,i=n("b301"),a=[].indexOf,c=!!a&&1/[1].indexOf(1,-0)<0,s=i("indexOf");r({target:"Array",proto:!0,forced:c||s},{indexOf:function(t){return c?a.apply(this,arguments)||0:o(this,t,arguments.length>1?arguments[1]:void 0)}})},ca84:function(t,e,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,a=n("d012");t.exports=function(t,e){var n,c=o(t),s=0,l=[];for(n in c)!r(a,n)&&r(c,n)&&l.push(n);while(e.length>s)r(c,n=e[s++])&&(~i(l,n)||l.push(n));return l}},cc12:function(t,e,n){var r=n("da84"),o=n("861d"),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},ce4e:function(t,e,n){var r=n("da84"),o=n("9112");t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var r=n("428f"),o=n("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},d2bb:function(t,e,n){var r=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},d73e:function(t,e,n){},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("c8ba"))},df75:function(t,e,n){var r=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return r(t,o)}},e893:function(t,e,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),a=n("9bf2");t.exports=function(t,e){for(var n=o(e),c=a.f,s=i.f,l=0;l<n.length;l++){var f=n[l];r(t,f)||c(t,f,s(e,f))}}},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},eae9:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},f6fd:function(t,e){(function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})})(document)},f772:function(t,e,n){var r=n("5692"),o=n("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},f8c2:function(t,e,n){var r=n("1c0b");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},fb15:function(t,e,n){"use strict";var r;(n.r(e),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.navClass,on:{click:t.close}},[t.toggler?n("button",{class:t.navTogglerClass,attrs:{type:"button","data-toggle":"collapse","data-target":t.target,"aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[t.animation?n("div",{ref:"animatedIcon",class:"animated-icon"+t.animation},[n("span"),n("span"),n("span"),"2"===t.animation?n("span"):t._e()]):n("span",{class:t.navTogglerIcon},[t.hamburger?n("mdb-icon",{class:t.togglerIconClass,attrs:{icon:t.togglerIcon,size:t.togglerSize,far:t.far,fal:t.fal,fab:t.fab,fad:t.fad}}):t._e()],1)]):t._e(),t._t("default")],2)},i=[],a=(n("4160"),n("c975"),n("a9e3"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{class:t.className})}),c=[],s=(n("c7cd"),{props:{icon:{type:String},size:{type:[Boolean,String],default:!1},fixed:{type:Boolean,default:!1},pull:{type:[Boolean,String],default:!1},border:{type:Boolean,default:!1},spin:{type:Boolean,default:!1},pulse:{type:Boolean,default:!1},rotate:{type:[Boolean,String],default:!1},flip:{type:[Boolean,String],default:!1},inverse:{type:[Boolean,String],default:!1},stack:{type:[Boolean,String],default:!1},color:{type:String,default:""},far:{type:Boolean,default:!1},regular:{type:Boolean,default:!1},fal:{type:Boolean,default:!1},light:{type:Boolean,default:!1},fab:{type:Boolean,default:!1},fad:{type:Boolean,default:!1},duotone:{type:Boolean,default:!1},brands:{type:Boolean,default:!1}},computed:{className:function(){return[this.far||this.regular?"far":this.fal||this.light?"fal":this.fab||this.brands?"fab":this.fad||this.duotone?"fad":"fas",this.icon&&"fa-"+this.icon,this.size&&"fa-"+this.size,this.fixed&&"fa-fw",this.pull&&"fa-pull-"+this.pull,this.border&&"fa-border",this.spin&&"fa-spin",this.pulse&&"fa-pulse",this.rotate&&"fa-rotate-"+this.rotate,this.flip&&"fa-flip-"+this.flip,this.inverse&&"fa-inverse",this.stack&&"fa-"+this.stack,this.color&&"text-"+this.color]}}}),l=s,f=l;function u(t,e,n,r,o,i,a,c){var s,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(s=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=s):o&&(s=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(l.functional){l._injectStyles=s;var f=l.render;l.render=function(t,e){return s.call(e),f(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,s):[s]}return{exports:t,options:l}}var p=u(f,a,c,!1,null,"fa8e63a8",null),d=p.exports,h={components:{mdbIcon:d},props:{tag:{type:String,default:"nav"},animation:{type:[Number,String],default:null},animated:{type:Boolean},color:{type:String},dark:{type:Boolean,default:!1},light:{type:Boolean,default:!1},double:{type:Boolean,default:!1},expand:{type:String,default:"large"},hamburger:{type:Boolean},navIconClass:{type:String},position:{type:String},target:{type:String,default:"navbarSupportedContent"},togglerClass:{type:String},transparent:{type:Boolean},scrolling:{type:Boolean,default:!1},scrollingOffset:{type:Number,default:100},center:{type:Boolean,default:!1},toggler:{type:Boolean,default:!0},togglerIcon:{type:String,default:"bars"},togglerSize:{type:String,default:"1x"},far:{type:Boolean,default:!1},fal:{type:Boolean,default:!1},fab:{type:Boolean,default:!1},fad:{type:Boolean,default:!1},togglerIconClass:String},data:function(){return{scrolled:!1,toggleClicked:!0}},computed:{navClass:function(){var t=["primary","secondary","danger","warning","success","info","default","elegant","stylish","unique","special"];return["navbar",this.dark&&"navbar-dark",this.light&&"navbar-light",this.color&&!this.transparent&&-1!==t.indexOf(this.color)?this.color+"-color":"",this.color&&!this.transparent&&-1===t.indexOf(this.color)?this.color:"","small"===this.expand||"sm"===this.expand?"navbar-expand-sm":"medium"===this.expand||"md"===this.expand?"navbar-expand-md":"large"===this.expand||"lg"===this.expand?"navbar-expand-lg":"navbar-expand-lx","top"===this.position?"fixed-top":"bottom"===this.position?"fixed-bottom":"",this.scrolling&&"scrolling-navbar",this.double&&"double-nav",this.center&&"justify-content-center"]},navTogglerIcon:function(){return[this.hamburger?"":"navbar-toggler-icon",this.navIconClass]},navTogglerClass:function(){return["navbar-toggler",this.togglerClass]}},methods:{toggle:function(){var t=this;this.toggleClicked?(this.collapse.classList.toggle("show-navbar"),this.collapse.classList.remove("hide-navbar"),this.collapse.classList.toggle("collapse"),this.collapse.style.overflow="hidden",this.collapseOverflow=setTimeout((function(){t.collapse.style.overflow="initial"}),300),this.animation&&this.$refs.animatedIcon.classList.add("open"),this.toggleClicked=!1):(this.collapse.classList.add("hide-navbar"),this.collapse.classList.toggle("show-navbar"),this.collapse.style.overflow="hidden",this.collapseOverflow=setTimeout((function(){t.collapse.classList.toggle("collapse"),t.collapse.style.overflow="initial"}),300),this.animation&&this.$refs.animatedIcon.classList.remove("open"),this.toggleClicked=!0)},close:function(t){var e=this;window.innerWidth>990||!this.toggler||t.target.classList.contains("dropdown-toggle")||"INPUT"!==t.target.tagName&&(this.collapse.classList.add("hide-navbar"),this.collapse.classList.remove("show-navbar"),this.collapse.style.overflow="hidden",this.collapseOverflow=setTimeout((function(){e.collapse.classList.add("collapse"),e.collapse.style.overflow="initial"}),300),this.animation&&this.$refs.animatedIcon.classList.remove("open"),this.toggleClicked=!0)},handleScroll:function(){this.scrolling&&(window.scrollY>this.scrollingOffset&&!1===this.scrolled?(this.$el.style.paddingTop="5px",this.$el.style.paddingBottom="5px",this.transparent&&this.$el.classList.add("".concat(this.color,"-color")),this.$el.classList.add("top-nav-collapse"),this.scrolled=!0):window.scrollY<this.scrollingOffset&&!0===this.scrolled&&(this.$el.style.paddingTop="12px",this.$el.style.paddingBottom="12px",this.transparent&&this.$el.classList.remove("".concat(this.color,"-color")),this.$el.classList.remove("top-nav-collapse"),this.scrolled=!1))},onClick:function(t){(t.target.classList.contains("navbar-toggler")||t.target.parentNode.classList.contains("navbar-toggler"))&&this.toggle()},searchForCollapseContent:function(t){"undefined"!==typeof t.attributes&&"undefined"!==typeof t.attributes.id&&t.id===this.target&&(this.collapse=t,this.collapse.classList.add("collapse"))}},mounted:function(){var t=this;window.addEventListener("scroll",this.handleScroll),this.$slots.default.forEach((function(e){e.elm.id===t.target?(t.collapse=e.elm,t.collapse.classList.add("collapse")):(t.children=e.elm.childNodes,t.children.forEach((function(e){t.searchForCollapseContent(e),e.childNodes.forEach((function(e){t.searchForCollapseContent(e),e.childNodes.forEach((function(e){t.searchForCollapseContent(e)}))}))})))}))},destroy:function(){document.removeEventListener("click",this.onClick),window.removeEventListener("scroll",this.handleScroll)}},g=h,v=g,b=(n("7554"),u(v,o,i,!1,null,"70023284",null)),y=b.exports;n.d(e,"mdbNavbar",(function(){return h}));e["default"]=y},fc6a:function(t,e,n){var r=n("44ad"),o=n("1d80");t.exports=function(t){return r(o(t))}},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map