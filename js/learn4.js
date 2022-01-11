(()=>{var o={"./app/history.js":
/*!************************!*\
  !*** ./app/history.js ***!
  \************************/(e,t,o)=>{"use strict";o.r(t);t=o(/*! jquery */"jquery");o.n(t)()(document).on("click","[data-clear-history-toggle]",e=>{e.preventDefault(),window.sessionStorage.clear(),window.location.reload()})},"./app/nav.js":
/*!********************!*\
  !*** ./app/nav.js ***!
  \********************/(e,t,o)=>{"use strict";o.r(t);var t=o(/*! jquery */"jquery"),r=o.n(t);r()(document).on("click",".nav-prev, .nav-next",e=>{const t=r()(e.currentTarget);window.location.href=t.attr("href")}),r()(document).on("keydown",e=>{if(!!r()('[data-algolia-pro][style="display: none;"]').length){const t=37===e.which?r()("a.nav-prev"):39===e.which?r()("a.nav-next"):null;t&&t.click()}})},"./app/toc.js":
/*!********************!*\
  !*** ./app/toc.js ***!
  \********************/(e,t,o)=>{"use strict";o.r(t);var t=o(/*! jquery */"jquery"),r=o.n(t);r()(document).on("click",".toc-toggle",()=>{r()(".page-toc").toggleClass("toc-closed")})},"./app/utils/index.js":
/*!****************************!*\
  !*** ./app/utils/index.js ***!
  \****************************/(e,t,o)=>{"use strict";o.r(t);t=o(/*! ./progress */"./app/utils/progress.js")},"./app/utils/progress.js":
/*!*******************************!*\
  !*** ./app/utils/progress.js ***!
  \*******************************/()=>{const e=document.documentElement,t=document.body,o="scrollTop",r="scrollHeight",n=document.querySelector(".progress");let s;document.addEventListener("scroll",function(){s=(e[o]||t[o])/((e[r]||t[r])-e.clientHeight)*100,n.style.setProperty("--scroll",s+"%")})},jquery:
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/e=>{"use strict";e.exports=jQuery}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;t=r[e]={exports:{}};return o[e](t,t.exports,n),t.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{"use strict";
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/n.r(s);var e=n(/*! jquery */"jquery"),t=n.n(e);n(/*! ./utils */"./app/utils/index.js"),n(/*! ./toc */"./app/toc.js"),n(/*! ./history */"./app/history.js"),n(/*! ./nav */"./app/nav.js");t()(window).on("load",function(){for(var e in window.sessionStorage.setItem(t()("body").data("url"),"1"),window.sessionStorage)"1"===window.sessionStorage.getItem(e)&&t()(`[data-nav-id="${e}"]`).addClass("visited")})})()})();