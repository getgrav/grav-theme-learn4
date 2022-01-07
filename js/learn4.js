!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./app/main.js")}({"./app/history.js":
/*!************************!*\
  !*** ./app/history.js ***!
  \************************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! jquery */"jquery");(0,((o=r)&&o.__esModule?o:{default:o}).default)(document).on("click","[data-clear-history-toggle]",function(e){e.preventDefault(),window.sessionStorage.clear(),window.location.reload()})},"./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! jquery */"jquery"),u=(o=r)&&o.__esModule?o:{default:o};n(/*! ./utils */"./app/utils/index.js"),n(/*! ./toc */"./app/toc.js"),n(/*! ./history */"./app/history.js"),n(/*! ./nav */"./app/nav.js"),(0,u.default)(window).on("load",function(){for(var e in window.sessionStorage.setItem((0,u.default)("body").data("url"),"1"),window.sessionStorage)"1"===window.sessionStorage.getItem(e)&&(0,u.default)('[data-nav-id="'+e+'"]').addClass("visited")})},"./app/nav.js":
/*!********************!*\
  !*** ./app/nav.js ***!
  \********************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! jquery */"jquery"),u=(o=r)&&o.__esModule?o:{default:o};(0,u.default)(document).on("click",".nav-prev, .nav-next",function(e){var t=(0,u.default)(e.currentTarget);window.location.href=t.attr("href")}),(0,u.default)(document).on("keydown",function(e){var t=37===e.which?(0,u.default)("a.nav-prev"):39===e.which?(0,u.default)("a.nav-next"):null;t&&t.click()})},"./app/toc.js":
/*!********************!*\
  !*** ./app/toc.js ***!
  \********************/
/*! no static exports found */function(e,t,n){"use strict";var o,r=n(/*! jquery */"jquery"),u=(o=r)&&o.__esModule?o:{default:o};(0,u.default)(document).on("click",".toc-toggle",function(){(0,u.default)(".page-toc").toggleClass("toc-closed")})},"./app/utils/index.js":
/*!****************************!*\
  !*** ./app/utils/index.js ***!
  \****************************/
/*! no static exports found */function(e,t,n){"use strict";n(/*! ./progress */"./app/utils/progress.js")},"./app/utils/progress.js":
/*!*******************************!*\
  !*** ./app/utils/progress.js ***!
  \*******************************/
/*! no static exports found */function(e,t,n){"use strict";var o=document.documentElement,r=document.body,u="scrollTop",a="scrollHeight",i=document.querySelector(".progress"),l=void 0;document.addEventListener("scroll",function(){l=(o[u]||r[u])/((o[a]||r[a])-o.clientHeight)*100,i.style.setProperty("--scroll",l+"%")})},jquery:
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */function(e,t){e.exports=jQuery}});