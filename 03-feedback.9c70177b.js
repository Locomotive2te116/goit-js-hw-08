function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,a=setTimeout(j,t),l?y(e):f}function T(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function j(){var e=v();if(T(e))return w(e);a=setTimeout(j,function(e){var n=t-(e-u);return s?p(n,i-(e-c)):n}(e))}function w(e){return a=void 0,g&&o?y(e):(o=r=void 0,f)}function O(){var e=v(),n=T(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return h(u);if(s)return a=setTimeout(j,t),y(u)}return void 0===a&&(a=setTimeout(j,t)),f}return t=b(t)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},O.flush=function(){return void 0===a?f:w(v())},O}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form");console.log(y);const h={};fromStorageToInput=()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(null!==e)for(const t in e)e.hasOwnProperty(t)&&(y.elements[t].value=e[t])},fromStorageToInput();const T=({target:e})=>{const t=e.value,n=e.name;h[n]=t,localStorage.setItem("feedback-form-state",JSON.stringify(h))};y.addEventListener("input",e(t)(T,500)),y.addEventListener("change",T),y.addEventListener("submit",(e=>{e.preventDefault(),y.reset(),localStorage.removeItem("feedback-form-state"),console.log(h)}));
//# sourceMappingURL=03-feedback.9c70177b.js.map
