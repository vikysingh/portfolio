!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=8)}([function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(a=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},function(n){n.exports=JSON.parse('{"skills":["HTML5","CSS3","JavaScript - ES6+","Bootstrap","Sass","NPM","Webpack","Babel","Reactjs","React Chartjs","Ant deisgn","Axios","Redux (React-Redux)","Git","GitHub","Facebook API","TMdb API","VSCODE","Figma","Jest","Enzyme","NextJS"],"classes":["bg-white","py-3","px-4","m-2","d-flex","justify-content-center","align-items-center"]}')},function(n,r,t){var e=t(6),o=t(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){"use strict";var e=t(0),o=t.n(e)()(!1);o.push([n.i,".S0yd-0z1V1P9IQmir-GPV {\r\n    font-weight: bolder;\r\n    font-size: 3rem;\r\n    color: #008167;\r\n}",""]),o.locals={"section-title":"S0yd-0z1V1P9IQmir-GPV"},r.a=o},function(n,r,t){"use strict";n.exports=function(n,r){return r||(r={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,r,t){"use strict";r.a=t.p+"cc130af13d3bc91b8d47b159f73b640d.jpg"},function(n,r,t){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},i=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),a=[];function c(n){for(var r=-1,t=0;t<a.length;t++)if(a[t].identifier===n){r=t;break}return r}function s(n,r){for(var t={},e=[],o=0;o<n.length;o++){var i=n[o],s=r.base?i[0]+r.base:i[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=c(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:g(f,r),references:1}),e.push(l)}return e}function d(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var l,u=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function f(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=u(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var h=null,b=0;function g(n,r){var t,e,o;if(r.singleton){var i=b++;t=h||(h=d(r)),e=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=d(r),e=p.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var t=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var o=c(t[e]);a[o].references--}for(var i=s(n,r),d=0;d<t.length;d++){var l=c(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=i}}}},function(n,r,t){"use strict";t.r(r);var e=t(0),o=t.n(e),i=t(3),a=t(4),c=t.n(a),s=t(5),d=o()(!1);d.i(i.a);var l=c()(s.a);d.push([n.i,"body {\r\n    padding: 0;\r\n    margin: 0;\r\n    max-width: 100vw;\r\n    overflow-x: hidden;\r\n}\r\n\r\n#nav {\r\n    width: 50%;\r\n    position: fixed;\r\n    height: 100vh;\r\n    z-index: 3;\r\n    transform: translateX(-150%);\r\n}\r\n\r\n#nav ul {\r\n    background-color: #eee;\r\n}\r\n\r\n#nav li a {\r\n    font-size: 3rem;\r\n}\r\n\r\n#nav-indicator {\r\n    height: 5px;\r\n    width: 40px;\r\n    background-color: #FC427B;\r\n\r\n    cursor: pointer;\r\n    z-index: 4;\r\n\r\n    position: fixed;\r\n    top: 35px;\r\n    left: -100px; \r\n\r\n    transition: 300ms all ease;\r\n}\r\n\r\n#nav-indicator::before, #nav-indicator::after {\r\n    content: '';\r\n    position: fixed;\r\n    height: 3px;\r\n    width: 30px;\r\n    background-color: #FC427B;\r\n    cursor: pointer;\r\n    transition: 200ms all ease;\r\n}\r\n\r\n#nav-indicator::before {\r\n    margin-top: -8px;\r\n}\r\n\r\n#nav-indicator::after {\r\n    margin-top: 10px;\r\n}\r\n\r\n/* #nav-indicator:hover::before {\r\n    transform: translateY(5px);\r\n} */\r\n\r\n/* #nav-indicator:hover::after {\r\n    transform: translateY(-5px);\r\n} */\r\n\r\n#social-icons-bar {\r\n    height: 50px;\r\n    background-color: transparent;\r\n    width: 10%;\r\n    position: fixed;\r\n    right: -40%;\r\n    top: 10px;\r\n    z-index: 25;\r\n}\r\n\r\n#social-icons-bar a {\r\n    height: auto;\r\n    margin: 0 5px;\r\n}\r\n\r\n#social-icons-bar > a:first-child > img {\r\n    width: 25px;\r\n}\r\n\r\n#social-icons-bar > a:nth-child(2) > img {\r\n    width: 45px;\r\n}\r\n\r\nheader {\r\n    height: 100vh !important;\r\n    background-color: #000;\r\n}\r\n\r\nheader h2 {\r\n    z-index: 1;\r\n    font-size: 8rem;\r\n    font-weight: bolder;\r\n    color: #fff;\r\n    background-image: url("+l+");\r\n    background-size: cover;\r\n    background-clip: text;\r\n    -webkit-background-clip: text;\r\n    color: transparent;\r\n    background-position: 50% 80%;\r\n    transform-origin: center;\r\n    transform: scale(12);\r\n    display: none;\r\n}\r\n\r\nmain {\r\n    max-width: 100vw !important;\r\n    overflow-x: hidden;\r\n    padding: 0 !important;\r\n    display: none;\r\n}\r\n\r\n.heading{\r\n    height: 80vh;\r\n    background-color: #55E6C1;\r\n    width: 100vw;\r\n    padding-left: 15%;\r\n    padding-top: 15%;\r\n}\r\n\r\n.heading h2 {\r\n    font-size: 3.8rem;\r\n    width: 80%;\r\n}\r\n\r\n.wave {\r\n    width: 50%;\r\n    height: 200px;\r\n    margin-top: -5px;\r\n\r\n    background-color: #55E6C1;\r\n    border-bottom-left-radius: 70%;\r\n}\r\n\r\n.wave::before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 30%;\r\n    width: 60%;\r\n    height: 260px;\r\n    border-bottom-left-radius: 70%;\r\n    border-bottom-right-radius: 70%;\r\n    background-color: #55E6C1;\r\n}\r\n\r\n.wave::after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 70%;\r\n    width: 30%;\r\n    height: 260px;\r\n    border-bottom-left-radius: 70%;\r\n    background-color: #55E6C1;\r\n}\r\n\r\n.progetti {\r\n    height: auto;\r\n}\r\n\r\n.progetti_body {\r\n    width: 80%;\r\n    height: auto;\r\n}\r\n\r\n.progetti_card {\r\n    width: 28%;\r\n    height: 200px;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.progetti_card img {\r\n    width: 100%;\r\n    height: 200px;\r\n    /* z-index: 20; */\r\n    margin-top: -220px;\r\n}\r\n\r\n.progetti_card_body {\r\n    background-color: #55E6C1;\r\n    transition: 400ms all ease;\r\n    transform: translateY(100%);\r\n    z-index: 20;\r\n}\r\n\r\n.progetti_card_body svg {\r\n    width: 2em;\r\n    height: 2em;\r\n}\r\n\r\n.progetti_card:hover > .progetti_card_body {\r\n    transform: translateY(0%);\r\n}\r\n\r\n.about {\r\n    height: auto;\r\n}\r\n\r\n.about_body {\r\n    width: 80%;\r\n    margin-top: 6% !important;\r\n}\r\n\r\n.about_body_profilo_card {\r\n    background-color: rgb(40, 42, 44);\r\n    min-width: 40%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.about_body_profilo_card img {\r\n    width: 300px;\r\n    height: 300px;\r\n    border: 10px solid #55E6C1;\r\n    border-radius: 50%;\r\n}\r\n\r\n.about_body_testo {\r\n    width: 40%;\r\n\r\n}\r\n\r\n.about_body_testo p {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.skills {\r\n    background-color: #55E6C1;\r\n    height: auto;\r\n}\r\n\r\n.skills_body {\r\n    width: 60%;\r\n    height: auto;\r\n    margin-top: 3%;\r\n}\r\n\r\n.skills_body > h6 {\r\n    height: 40px;\r\n    font-size: 0.9rem;\r\n    cursor: default;\r\n    user-select: none;\r\n    transition: 200ms all ease;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.skills_body > h6:hover {\r\n    border-right: 4px solid dodgerblue;\r\n}\r\n\r\n.contatti {\r\n    background-color: rgb(232, 232, 232);\r\n    height: auto;\r\n}\r\n\r\n.contatti > form {\r\n    width: 30%;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.contatti form label {\r\n    font-weight: normal;\r\n    font-size: 0.9rem !important;\r\n}\r\n\r\n.contatti textarea, .contatti input {\r\n    border-radius: 0;\r\n    background-color: rgb(210, 210, 210);\r\n}\r\n\r\n.contatti > form input {\r\n    height: 50px;\r\n}\r\n\r\n.contatti > form input:focus, .contatti > form textarea:focus {\r\n    background-color: rgb(210, 210, 210);\r\n    outline: none;\r\n}\r\n\r\n.contatti form button {\r\n    background-color: #55E6C1 !important;\r\n    text-transform: uppercase;\r\n    font-weight: bolder;\r\n    font-size: 1rem;\r\n}\r\n\r\n#footer {\r\n    display: none;\r\n}\r\n\r\nfooter a {\r\n    color: #eee;\r\n}\r\n\r\nfooter a:hover {\r\n    color: #eee;\r\n    text-decoration: none;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    #nav {\r\n        width: 80%;\r\n    }\r\n\r\n    #nav li a {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    #social-icons-bar {\r\n        height: auto;\r\n        right: 15px;\r\n        top: 15px;\r\n    }\r\n\r\n    #social-icons-bar a {\r\n        margin: 5px 0;\r\n    }\r\n\r\n    header h1 {\r\n        font-size: 14rem;\r\n    }\r\n\r\n    header h2 {\r\n        font-size: 2.6rem;\r\n    }\r\n\r\n    .heading {\r\n        height: auto;\r\n        padding-bottom: 10%;\r\n        padding-left: 10%;\r\n    }\r\n\r\n    .heading h2 {\r\n        font-size: 3rem;\r\n        /* height: auto; */\r\n    }\r\n\r\n    .wave {\r\n        width: 100%;\r\n        margin-top: -5px;\r\n    }\r\n\r\n    .wave::after, .wave::before {\r\n        display: none;\r\n    }\r\n\r\n    .progetti_body {\r\n        width: 90%;\r\n    }\r\n\r\n    .progetti_card {\r\n        height: 180px;\r\n        width: 100%;\r\n        margin: 10px 0;\r\n    }\r\n\r\n    .about_body {\r\n        width: 100%;\r\n    }\r\n\r\n    .about_body_profilo_card {\r\n        min-width: 80% !important;\r\n    }\r\n\r\n    .about_body_testo {\r\n        width: 100%;\r\n        padding-top: 5% ;\r\n    }\r\n\r\n    .about_body_testo p {\r\n        margin-left: -10% !important;\r\n        min-width: 80% !important;\r\n        margin-right: 5%;\r\n    }\r\n\r\n    .contatti form {\r\n        width: 85%;\r\n    }\r\n}",""]),r.default=d},function(n,r,t){"use strict";t.r(r);t(2);var e=t(1);function o(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function i(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function a(n,r,t){return r&&i(n.prototype,r),t&&i(n,t),n}var c=function(){function n(r,t,e){o(this,n),this.nav=document.querySelector(r),this.isOpen=t,this.navIndicator=document.querySelector(e)}return a(n,[{key:"closeNavbar",value:function(){this.nav.style.transition="200ms",this.nav.style.transform="translateX(-150%)",this.navIndicator.style.transform="rotate(0deg)",this.isOpen=!1}},{key:"openNavbar",value:function(){this.nav.style.transition="300ms",this.nav.style.transform="translateX(0%)",this.navIndicator.style.transform="rotate(90deg)",this.isOpen=!0}},{key:"setNavIndicator",value:function(){var n=this;this.navIndicator.addEventListener("click",(function(){n.isOpen?(n.openNavbar(),n.isOpen=!1):(n.closeNavbar(),n.isOpen=!0)}))}}]),n}(),s=function(){function n(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];o(this,n),this.skillsBody=document.querySelector(r),this.skills=t,this.classes=e}return a(n,[{key:"mapSkill",value:function(){var n,r=this;this.skills.map((function(t){(n=document.createElement("h6")).textContent=t,r.classes.map((function(r){return n.classList.add(r)})),r.skillsBody.appendChild(n)}))}}]),n}(),d=new c("#nav",!1,"#nav-indicator"),l=new s(".skills_body",e.skills,e.classes),u=document.querySelector("#social-icons-bar"),f=document.querySelector("#header-title"),p=d.navIndicator,h=document.querySelector("#home"),b=document.querySelector("footer"),g=gsap.timeline();document.addEventListener("DOMContentLoaded",(function(){!function(){g.to(f,{duration:2,display:"block",transform:"scale(1)"}).to(f,{marginTop:"-50px"}).to(p,{left:"35px",duration:1,delay:-.5},"-=1").to(u,{right:"5%",duration:1,delay:-.5}).to(h,{display:"block"}).to(b,{display:"flex"}),d.setNavIndicator();for(var n=0;n<d.nav.children.length;n++)d.nav.children[n].addEventListener("click",(function(){return d.closeNavbar()}));l.mapSkill()}()}))}]);