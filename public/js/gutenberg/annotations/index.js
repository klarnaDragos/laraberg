this.wp=this.wp||{},this.wp.annotations=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=214)}({1:function(t,n){!function(){t.exports=this.wp.i18n}()},15:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",function(){return r})},17:function(t,n,e){"use strict";var r=e(31);function o(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(n,"a",function(){return o})},2:function(t,n){!function(){t.exports=this.lodash}()},20:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}e.d(n,"a",function(){return r})},214:function(t,n,e){"use strict";e.r(n);var r={};e.d(r,"__experimentalGetAnnotationsForBlock",function(){return b}),e.d(r,"__experimentalGetAllAnnotationsForBlock",function(){return O}),e.d(r,"__experimentalGetAnnotationsForRichText",function(){return g}),e.d(r,"__experimentalGetAnnotations",function(){return m});var o={};e.d(o,"__experimentalAddAnnotation",function(){return x}),e.d(o,"__experimentalRemoveAnnotation",function(){return A}),e.d(o,"__experimentalUpdateAnnotationRange",function(){return _}),e.d(o,"__experimentalRemoveAnnotationsBySource",function(){return j});var a=e(4),i=e(15),u=e(17),c=e(8),f=e(2);function l(t,n){var e=t.filter(n);return t.length===e.length?t:e}var s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ANNOTATION_ADD":var e=n.blockClientId,r={id:n.id,blockClientId:e,richTextIdentifier:n.richTextIdentifier,source:n.source,selector:n.selector,range:n.range};if("range"===r.selector&&!function(t){return Object(f.isNumber)(t.start)&&Object(f.isNumber)(t.end)&&t.start<=t.end}(r.range))return t;var o=Object(f.get)(t,e,[]);return Object(c.a)({},t,Object(i.a)({},e,[].concat(Object(u.a)(o),[r])));case"ANNOTATION_REMOVE":return Object(f.mapValues)(t,function(t){return l(t,function(t){return t.id!==n.annotationId})});case"ANNOTATION_UPDATE_RANGE":return Object(f.mapValues)(t,function(t){var e=!1,r=t.map(function(t){return t.id===n.annotationId?(e=!0,Object(c.a)({},t,{range:{start:n.start,end:n.end}})):t});return e?r:t});case"ANNOTATION_REMOVE_SOURCE":return Object(f.mapValues)(t,function(t){return l(t,function(t){return t.source!==n.source})})}return t},d=e(20),p=e(32),v=[],b=Object(p.a)(function(t,n){return Object(f.get)(t,n,[]).filter(function(t){return"block"===t.selector})},function(t,n){return[Object(f.get)(t,n,v)]}),O=function(t,n){return Object(f.get)(t,n,v)},g=Object(p.a)(function(t,n,e){return Object(f.get)(t,n,[]).filter(function(t){return"range"===t.selector&&e===t.richTextIdentifier}).map(function(t){var n=t.range,e=Object(d.a)(t,["range"]);return Object(c.a)({},n,e)})},function(t,n){return[Object(f.get)(t,n,v)]});function m(t){return Object(f.flatMap)(t,function(t){return t})}var h=e(65),y=e.n(h);function x(t){var n=t.blockClientId,e=t.richTextIdentifier,r=void 0===e?null:e,o=t.range,a=void 0===o?null:o,i=t.selector,u=void 0===i?"range":i,c=t.source,f=void 0===c?"default":c,l=t.id,s={type:"ANNOTATION_ADD",id:void 0===l?y()():l,blockClientId:n,richTextIdentifier:r,source:f,selector:u};return"range"===u&&(s.range=a),s}function A(t){return{type:"ANNOTATION_REMOVE",annotationId:t}}function _(t,n,e){return{type:"ANNOTATION_UPDATE_RANGE",annotationId:t,start:n,end:e}}function j(t){return{type:"ANNOTATION_REMOVE_SOURCE",source:t}}Object(a.registerStore)("core/annotations",{reducer:s,selectors:r,actions:o});var N=e(22),T=e(1),w="core/annotation",I="annotation-text-";var E={name:w,title:Object(T.__)("Annotation"),tagName:"mark",className:"annotation-text",attributes:{className:"class",id:"id"},edit:function(){return null},__experimentalGetPropsForEditableTreePreparation:function(t,n){var e=n.richTextIdentifier,r=n.blockClientId;return{annotations:t("core/annotations").__experimentalGetAnnotationsForRichText(r,e)}},__experimentalCreatePrepareEditableTree:function(t){var n=t.annotations;return function(t,e){if(0===n.length)return t;var r={formats:t,text:e};return(r=function(t){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach(function(n){var e=n.start,r=n.end;e>t.text.length&&(e=t.text.length),r>t.text.length&&(r=t.text.length);var o=I+n.source,a=I+n.id;t=Object(N.applyFormat)(t,{type:w,attributes:{className:o,id:a}},e,r)}),t}(r,n)).formats}},__experimentalGetPropsForEditableTreeChangeHandler:function(t){return{removeAnnotation:t("core/annotations").__experimentalRemoveAnnotation,updateAnnotationRange:t("core/annotations").__experimentalUpdateAnnotationRange}},__experimentalCreateOnChangeEditableValue:function(t){return function(n){var e=function(t){var n={};return t.forEach(function(t,e){(t=(t=t||[]).filter(function(t){return t.type===w})).forEach(function(t){var r=t.attributes.id;r=r.replace(I,""),n.hasOwnProperty(r)||(n[r]={start:e}),n[r].end=e+1})}),n}(n),r=t.removeAnnotation,o=t.updateAnnotationRange;!function(t,n,e){var r=e.removeAnnotation,o=e.updateAnnotationRange;t.forEach(function(t){var e=n[t.id];if(e){var a=t.start,i=t.end;a===e.start&&i===e.end||o(t.id,e.start,e.end)}else r(t.id)})}(t.annotations,e,{removeAnnotation:r,updateAnnotationRange:o})}}},R=E.name,k=Object(d.a)(E,["name"]);Object(N.registerFormatType)(R,k);var P=e(26);Object(P.addFilter)("editor.BlockListBlock","core/annotations",function(t){return Object(a.withSelect)(function(t,n){var e=n.clientId;return{className:t("core/annotations").__experimentalGetAnnotationsForBlock(e).map(function(t){return"is-annotated-by-"+t.source}).join(" ")}})(t)})},22:function(t,n){!function(){t.exports=this.wp.richText}()},26:function(t,n){!function(){t.exports=this.wp.hooks}()},31:function(t,n,e){"use strict";function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}e.d(n,"a",function(){return r})},32:function(t,n,e){"use strict";var r,o;function a(t){return[t]}function i(t){return!!t&&"object"==typeof t}function u(){var t={clear:function(){t.head=null}};return t}function c(t,n,e){var r;if(t.length!==n.length)return!1;for(r=e;r<t.length;r++)if(t[r]!==n[r])return!1;return!0}r={},o="undefined"!=typeof WeakMap,n.a=function(t,n){var e,f;function l(){e=o?new WeakMap:u()}function s(){var e,r,o,a,i,u=arguments.length;for(a=new Array(u),o=0;o<u;o++)a[o]=arguments[o];for(i=n.apply(null,a),(e=f(i)).isUniqueByDependants||(e.lastDependants&&!c(i,e.lastDependants,0)&&e.clear(),e.lastDependants=i),r=e.head;r;){if(c(r.args,a,1))return r!==e.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=e.head,r.prev=null,e.head.prev=r,e.head=r),r.val;r=r.next}return r={val:t.apply(null,a)},a[0]=null,r.args=a,e.head&&(e.head.prev=r,r.next=e.head),e.head=r,r.val}return n||(n=a),f=o?function(t){var n,o,a,c,f=e,l=!0;for(n=0;n<t.length;n++){if(!i(o=t[n])){l=!1;break}f.has(o)?f=f.get(o):(a=new WeakMap,f.set(o,a),f=a)}return f.has(r)||((c=u()).isUniqueByDependants=l,f.set(r,c)),f.get(r)}:function(){return e},s.getDependants=n,s.clear=l,l(),s}},4:function(t,n){!function(){t.exports=this.wp.data}()},65:function(t,n,e){var r=e(92),o=e(91);t.exports=function(t,n,e){var a=n&&e||0;"string"==typeof t&&(n="binary"===t?new Array(16):null,t=null);var i=(t=t||{}).random||(t.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var u=0;u<16;++u)n[a+u]=i[u];return n||o(i)}},8:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e(15);function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){Object(r.a)(t,n,e[n])})}return t}},91:function(t,n){for(var e=[],r=0;r<256;++r)e[r]=(r+256).toString(16).substr(1);t.exports=function(t,n){var r=n||0,o=e;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],"-",o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join("")}},92:function(t,n){var e="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var r=new Uint8Array(16);t.exports=function(){return e(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,n=0;n<16;n++)0==(3&n)&&(t=4294967296*Math.random()),o[n]=t>>>((3&n)<<3)&255;return o}}}});