/*! modernizr 3.9.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-appearance-checked-csscalc-csstransforms-flexbox-flexboxlegacy-flexwrap-localstorage-svg-prefixedcss-setclasses-shiv !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=a(S?"svg":"body"),e.fake=!0),e}function s(e,n,r,o){var s,l,c,u,f="modernizr",d=a("div"),p=i();if(parseInt(r,10))for(;r--;)c=a("div"),c.id=o?o[r]:f+(r+1),d.appendChild(c);return s=a("style"),s.type="text/css",s.id="s"+f,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),l=n(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=u,C.offsetHeight):d.parentNode.removeChild(d),!!l}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var a=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(a){var i=a.error?"error":"log";a[i].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function u(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(l(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+l(t[o])+":"+r+")");return a=a.join(" or "),s("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"===c(e,null,"position")})}return n}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t,i,s){function l(){d&&(delete _.style,delete _.modElem)}if(s=!r(s,"undefined")&&s,!r(i,"undefined")){var c=u(e,i);if(!r(c,"undefined"))return c}for(var d,p,m,h,v,g=["modernizr","tspan","samp"];!_.style&&g.length;)d=!0,_.modElem=a(g.shift()),_.style=_.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],v=_.style[h],o(h,"-")&&(h=f(h)),_.style[h]!==n){if(s||r(i,"undefined"))return l(),"pfx"!==t||h;try{_.style[h]=i}catch(e){}if(_.style[h]!==v)return l(),"pfx"!==t||h}return l(),!1}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var a in e)if(e[a]in t)return!1===n?e[a]:(o=t[e[a]],r(o,"function")?p(o,n||t):o);return!1}function h(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+E.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?d(s,t,o,a):(s=(e+" "+T.join(i+" ")+i).split(" "),m(s,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var g=[],y={_version:"3.9.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=y,Modernizr=new Modernizr;var x=[],C=t.documentElement,S="svg"===C.nodeName.toLowerCase();S||function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=y.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=n+" "+e,c(t)}function a(e){var t=g[e[h]];return t||(t={},v++,e[h]=v,g[v]=t),t}function i(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;i<l;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var r=a(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var u,f,d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){u=!0,f=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==d.shivCSS,supportsUnknownElements:f,shivMethods:!1!==d.shivMethods,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:o};e.html5=y,c(t),"object"==typeof module&&module.exports&&(module.exports=y)}(void 0!==e?e:this,t);var b="Moz O ms Webkit",E=y._config.usePrefixes?b.split(" "):[];y._cssomPrefixes=E;var w={elem:a("modernizr")};Modernizr._q.push(function(){delete w.elem});var _={style:w.elem.style};Modernizr._q.unshift(function(){delete _.style});var T=y._config.usePrefixes?b.toLowerCase().split(" "):[];y._domPrefixes=T,y.testAllProps=h;var k=function(t){var r,o=z.length,a=e.CSSRule;if(void 0===a)return n;if(!t)return!1;if(t=t.replace(/^@/,""),(r=t.replace(/-/g,"_").toUpperCase()+"_RULE")in a)return"@"+t;for(var i=0;i<o;i++){var s=z[i];if(s.toUpperCase()+"_"+r in a)return"@-"+s.toLowerCase()+"-"+t}return!1};y.atRule=k;var N=y.prefixed=function(e,t,n){return 0===e.indexOf("@")?k(e):(-1!==e.indexOf("-")&&(e=f(e)),t?h(e,t,n):h(e,"pfx"))};y.prefixedCSS=function(e){var t=N(e);return t&&l(t)};y.testAllProps=v,Modernizr.addTest("appearance",v("appearance"));var z=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];y._prefixes=z,Modernizr.addTest("csscalc",function(){var e=a("a");return e.style.cssText="width:"+z.join("calc(10px);width:"),!!e.style.length}),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)});var j=y.testStyles=s;Modernizr.addTest("checked",function(){return j("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",v("boxDirection","reverse",!0)),Modernizr.addTest("flexwrap",v("flexWrap","wrap",!0)),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,o,a,i,s;for(var l in g)if(g.hasOwnProperty(l)){if(e=[],t=g[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(Modernizr[s[0]]&&(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean)||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),x.push((o?"":"no-")+s.join("-"))}}(),function(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),S?C.className.baseVal=t:C.className=t)}(x),delete y.addTest,delete y.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);