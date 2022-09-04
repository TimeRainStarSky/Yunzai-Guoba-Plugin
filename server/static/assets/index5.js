import{k as e,aw as t,cC as n,cD as a,b as r,r as i,ak as u,cE as l,V as o,H as s,N as c,ax as v,ai as f,_ as d,K as p,v as g,ap as m,w as b,ah as y,T as h,av as S,G as N,y as w,q as x,bo as E,C as I,X as O}from"./index.js";var k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"};function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){B(e,t,n[t])}))}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(n,a){var r=M({},n,a.attrs);return e(t,M({},r,{icon:k}),null)};F.displayName="UpOutlined",F.inheritAttrs=!1;var A=F;function T(){return"function"==typeof BigInt}function _(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),(t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,"")).startsWith(".")&&(t="0".concat(t));var a=t||"0",r=a.split("."),i=r[0]||"0",u=r[1]||"0";"0"===i&&"0"===u&&(n=!1);var l=n?"-":"";return{negative:n,negativeStr:l,trimStr:a,integerStr:i,decimalStr:u,fullStr:"".concat(l).concat(a)}}function C(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function D(e){var t=String(e);if(C(e)){var n=Number(t.slice(t.indexOf("e-")+2)),a=t.match(/\.(\d+)/);return(null==a?void 0:a[1])&&(n+=a[1].length),n}return t.includes(".")&&j(t)?t.length-t.indexOf(".")-1:0}function P(e){var t=String(e);if(C(e)){if(e>Number.MAX_SAFE_INTEGER)return String(T()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(T()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(D(t))}return _(t).fullStr}function j(e){return"number"==typeof e?!Number.isNaN(e):!!e&&(/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e))}var q=function(){function e(t){a(this,e),this.origin="",(t||0===t)&&String(t).trim()?(this.origin=String(t),this.number=Number(t)):this.empty=!0}return n(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var n=Number(t);if(Number.isNaN(n))return this;var a=this.number+n;if(a>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var r=Math.max(D(this.number),D(n));return new e(a.toFixed(r))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(null==e?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?this.isInvalidate()?"":P(this.number):this.origin}}]),e}(),R=function(){function e(t){if(a(this,e),this.origin="",(t||0===t)&&String(t).trim())if(this.origin=String(t),"-"!==t){var n=t;if(C(n)&&(n=Number(n)),j(n="string"==typeof n?n:P(n))){var r=_(n);this.negative=r.negative;var i=r.trimStr.split(".");this.integer=BigInt(i[0]);var u=i[1]||"0";this.decimal=BigInt(u),this.decimalLen=u.length}else this.nan=!0}else this.nan=!0;else this.empty=!0}return n(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){var t="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0"));return BigInt(t)}},{key:"negate",value:function(){var t=new e(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var n=new e(t);if(n.isInvalidate())return this;var a=Math.max(this.getDecimalStr().length,n.getDecimalStr().length),r=_((this.alignDecimal(a)+n.alignDecimal(a)).toString()),i=r.negativeStr,u=r.trimStr,l="".concat(i).concat(u.padStart(a+1,"0"));return new e("".concat(l.slice(0,-a),".").concat(l.slice(-a)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(null==e?void 0:e.toString())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return e?this.isInvalidate()?"":_("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function z(e){return T()?new R(e):new q(e)}function G(e,t,n){if(""===e)return"";var a=_(e),r=a.negativeStr,i=a.integerStr,u=a.decimalStr,l="".concat(t).concat(u),o="".concat(r).concat(i);if(n>=0){var s=Number(u[n]);return s>=5?G(z(e).add("".concat(r,"0.").concat("0".repeat(n)).concat(10-s)).toString(),t,n):0===n?o:"".concat(o).concat(t).concat(u.padEnd(n,"0").slice(0,n))}return".0"===l?o:"".concat(o).concat(l)}var H=r({name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(t,n){var a=n.slots,r=n.emit,v=i(),f=function(e,t){e.preventDefault(),r("step",t),v.value=setTimeout((function e(){r("step",t),v.value=setTimeout(e,200)}),600)},d=function(){clearTimeout(v.value)};return u((function(){d()})),function(){if(l())return null;var n=t.prefixCls,r=t.upDisabled,i=t.downDisabled,u="".concat(n,"-handler"),v=o(u,"".concat(u,"-up"),s({},"".concat(u,"-up-disabled"),r)),p=o(u,"".concat(u,"-down"),s({},"".concat(u,"-down-disabled"),i)),g={unselectable:"on",role:"button",onMouseup:d,onMouseleave:d},m=a.upNode,b=a.downNode;return e("div",{class:"".concat(u,"-wrap")},[e("span",c(c({},g),{},{onMousedown:function(e){f(e,!0)},"aria-label":"Increase Value","aria-disabled":r,class:v}),[(null==m?void 0:m())||e("span",{unselectable:"on",class:"".concat(n,"-handler-up-inner")},null)]),e("span",c(c({},g),{},{onMousedown:function(e){f(e,!1)},"aria-label":"Decrease Value","aria-disabled":i,class:p}),[(null==b?void 0:b())||e("span",{unselectable:"on",class:"".concat(n,"-handler-down-inner")},null)])])}}});var V=globalThis&&globalThis.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},$=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},L=function(e){var t=z(e);return t.isInvalidate()?null:t},W=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}},X=r({name:"InnerInputNumber",inheritAttrs:!1,props:d(d({},W()),{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(t,n){var a=n.attrs,r=n.slots,l=n.emit,h=n.expose,S=i(),N=i(!1),w=i(!1),x=i(!1),E=i(z(t.value));var I,O=function(e,n){if(!n)return t.precision>=0?t.precision:Math.max(D(e),D(t.step))},k=function(e){var n=String(e);if(t.parser)return t.parser(n);var a=n;return t.decimalSeparator&&(a=a.replace(t.decimalSeparator,".")),a.replace(/[^\w.-]+/g,"")},M=i(""),B=function(e,n){if(t.formatter)return t.formatter(e,{userTyping:n,input:String(M.value)});var a="number"==typeof e?P(e):e;if(!n){var r=O(a,n);if(j(a)&&(t.decimalSeparator||r>=0))a=G(a,t.decimalSeparator||".",r)}return a},F=(I=t.value,E.value.isInvalidate()&&["string","number"].includes(p(I))?Number.isNaN(I)?"":I:B(E.value.toString(),!1));function A(e,t){M.value=B(e.isInvalidate()?e.toString(!1):e.toString(!t),t)}M.value=F;var T,_,C=g((function(){return L(t.max)})),q=g((function(){return L(t.min)})),R=g((function(){return!(!C.value||!E.value||E.value.isInvalidate())&&C.value.lessEquals(E.value)})),W=g((function(){return!(!q.value||!E.value||E.value.isInvalidate())&&E.value.lessEquals(q.value)})),X=function(e,t){var n=i(null);return[function(){try{var t=e.value,a=t.selectionStart,r=t.selectionEnd,i=t.value,u=i.substring(0,a),l=i.substring(r);n.value={start:a,end:r,value:i,beforeTxt:u,afterTxt:l}}catch(o){}},function(){if(e.value&&n.value&&t.value)try{var a=e.value.value,r=n.value,i=r.beforeTxt,u=r.afterTxt,l=r.start,o=a.length;if(a.endsWith(u))o=a.length-n.value.afterTxt.length;else if(a.startsWith(i))o=i.length;else{var s=i[l-1],c=a.indexOf(s,l-1);-1!==c&&(o=c+1)}e.value.setSelectionRange(o,o)}catch(f){v(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(f.message))}}]}(S,N),K=m(X,2),U=K[0],J=K[1],Q=function(e){return C.value&&!e.lessEquals(C.value)?C.value:q.value&&!q.value.lessEquals(e)?q.value:null},Y=function(e){return!Q(e)},Z=function(e,n){var a,r,i=e,u=Y(i)||i.isEmpty();if(i.isEmpty()||n||(i=Q(i)||i,u=!0),!t.readonly&&!t.disabled&&u){var l=i.toString(),o=O(l,n);return o>=0&&(i=z(G(l,".",o))),i.equals(E.value)||(r=i,void 0===t.value&&(E.value=r),null===(a=t.onChange)||void 0===a||a.call(t,i.isEmpty()?null:$(t.stringMode,i)),void 0===t.value&&A(i,n)),i}return E.value},ee=(T=i(0),_=function(){f.cancel(T.value)},u((function(){_()})),function(e){_(),T.value=f((function(){e()}))}),te=function e(n){var a;if(U(),M.value=n,!x.value){var r=z(k(n));r.isNaN()||Z(r,!0)}null===(a=t.onInput)||void 0===a||a.call(t,n),ee((function(){var a=n;t.parser||(a=n.replace(/。/g,".")),a!==n&&e(a)}))},ne=function(){x.value=!0},ae=function(){x.value=!1,te(S.value.value)},re=function(e){te(e.target.value)},ie=function(e){var n,a;if(!(e&&R.value||!e&&W.value)){w.value=!1;var r=z(t.step);e||(r=r.negate());var i=(E.value||z(0)).add(r.toString()),u=Z(i,!1);null===(n=t.onStep)||void 0===n||n.call(t,$(t.stringMode,u),{offset:t.step,type:e?"up":"down"}),null===(a=S.value)||void 0===a||a.focus()}},ue=function(e){var n=z(k(M.value)),a=n;a=n.isNaN()?E.value:Z(n,e),void 0!==t.value?A(E.value,!1):a.isNaN()||A(a,!1)},le=function(e){var n,a=e.which;w.value=!0,a===y.ENTER&&(x.value||(w.value=!1),ue(!1),null===(n=t.onPressEnter)||void 0===n||n.call(t,e)),!1!==t.keyboard&&!x.value&&[y.UP,y.DOWN].includes(a)&&(ie(y.UP===a),e.preventDefault())},oe=function(){w.value=!1},se=function(e){ue(!1),N.value=!1,w.value=!1,l("blur",e)};return b((function(){return t.precision}),(function(){E.value.isInvalidate()||A(E.value,!1)}),{flush:"post"}),b((function(){return t.value}),(function(){var e=z(t.value);E.value=e;var n=z(k(M.value));e.equals(n)&&w.value&&!t.formatter||A(e,w.value)}),{flush:"post"}),b(M,(function(){t.formatter&&J()}),{flush:"post"}),b((function(){return t.disabled}),(function(e){e&&(N.value=!1)})),h({focus:function(){var e;null===(e=S.value)||void 0===e||e.focus()},blur:function(){var e;null===(e=S.value)||void 0===e||e.blur()}}),function(){var n,i=d(d({},a),t),u=i.prefixCls,v=void 0===u?"rc-input-number":u,f=i.min,p=i.max,g=i.step,m=void 0===g?1:g;i.defaultValue,i.value;var b=i.disabled,y=i.readonly;i.keyboard;var h=i.controls,w=void 0===h||h,x=i.autofocus;i.stringMode,i.parser,i.formatter,i.precision,i.decimalSeparator,i.onChange,i.onInput,i.onPressEnter,i.onStep;var I=i.lazy,O=i.class,k=i.style,B=V(i,["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"]),F=r.upHandler,A=r.downHandler,T="".concat(v,"-input"),_={};return I?_.onChange=re:_.onInput=re,e("div",{class:o(v,O,(n={},s(n,"".concat(v,"-focused"),N.value),s(n,"".concat(v,"-disabled"),b),s(n,"".concat(v,"-readonly"),y),s(n,"".concat(v,"-not-a-number"),E.value.isNaN()),s(n,"".concat(v,"-out-of-range"),!E.value.isInvalidate()&&!Y(E.value)),n)),style:k,onKeydown:le,onKeyup:oe},[w&&e(H,{prefixCls:v,upDisabled:R.value,downDisabled:W.value,onStep:ie},{upNode:F,downNode:A}),e("div",{class:"".concat(T,"-wrap")},[e("input",c(c(c({autofocus:x,autocomplete:"off",role:"spinbutton","aria-valuemin":f,"aria-valuemax":p,"aria-valuenow":E.value.isInvalidate()?null:E.value.toString(),step:m},B),{},{ref:S,class:T,value:M.value,disabled:b,readonly:y,onFocus:function(e){N.value=!0,l("focus",e)}},_),{},{onBlur:se,onCompositionstart:ne,onCompositionend:ae}),null)])])}}});function K(e){return null!=e}var U=globalThis&&globalThis.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},J=W(),Q=r({name:"AInputNumber",inheritAttrs:!1,props:d(d({},J),{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:h.any,addonAfter:h.any,prefix:h.any,"update:value":J.onChange,valueModifiers:Object}),slots:["addonBefore","addonAfter","prefix"],setup:function(t,n){var a=n.emit,r=n.expose,u=n.attrs,l=n.slots,v=S(),f=N("input-number",t),p=f.prefixCls,g=f.size,m=f.direction,y=i(void 0===t.value?t.defaultValue:t.value),h=i(!1);b((function(){return t.value}),(function(){y.value=t.value}));var k=i(null);r({focus:function(){var e;null===(e=k.value)||void 0===e||e.focus()},blur:function(){var e;null===(e=k.value)||void 0===e||e.blur()}});var M=function(e){void 0===t.value&&(y.value=e),a("update:value",e),a("change",e),v.onFieldChange()},B=function(e){h.value=!1,a("blur",e),v.onFieldBlur()},F=function(e){h.value=!0,a("focus",e)};return w((function(){x((function(){}))})),function(){var n,a,r,i,v=d(d({},u),t),f=v.class,b=v.bordered,S=v.readonly,N=v.style,w=v.addonBefore,x=void 0===w?null===(a=l.addonBefore)||void 0===a?void 0:a.call(l):w,T=v.addonAfter,_=void 0===T?null===(r=l.addonAfter)||void 0===r?void 0:r.call(l):T,C=v.prefix,D=void 0===C?null===(i=l.prefix)||void 0===i?void 0:i.call(l):C,P=v.valueModifiers,j=void 0===P?{}:P,q=U(v,["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"]),R=p.value,z=g.value,G=o((s(n={},"".concat(R,"-lg"),"large"===z),s(n,"".concat(R,"-sm"),"small"===z),s(n,"".concat(R,"-rtl"),"rtl"===m.value),s(n,"".concat(R,"-readonly"),S),s(n,"".concat(R,"-borderless"),!b),n),f),H=e(X,c(c({},I(q,["size","defaultValue"])),{},{ref:k,lazy:!!j.lazy,value:y.value,class:G,prefixCls:R,readonly:S,onChange:M,onBlur:B,onFocus:F}),{upHandler:function(){return e(A,{class:"".concat(R,"-handler-up-inner")},null)},downHandler:function(){return e(E,{class:"".concat(R,"-handler-down-inner")},null)}}),V=K(x)||K(_);if(K(D)){var $,L=o("".concat(R,"-affix-wrapper"),(s($={},"".concat(R,"-affix-wrapper-focused"),h.value),s($,"".concat(R,"-affix-wrapper-disabled"),t.disabled),s($,"".concat(R,"-affix-wrapper-sm"),"small"===g.value),s($,"".concat(R,"-affix-wrapper-lg"),"large"===g.value),s($,"".concat(R,"-affix-wrapper-rtl"),"rtl"===m.value),s($,"".concat(R,"-affix-wrapper-readonly"),S),s($,"".concat(R,"-affix-wrapper-borderless"),!b),s($,"".concat(f),!V&&f),$));H=e("div",{class:L,style:N,onMouseup:function(){return k.value.focus()}},[e("span",{class:"".concat(R,"-prefix")},[D]),H])}if(V){var W,J="".concat(R,"-group"),Q="".concat(J,"-addon"),Y=x?e("div",{class:Q},[x]):null,Z=_?e("div",{class:Q},[_]):null,ee=o("".concat(R,"-wrapper"),J,s({},"".concat(J,"-rtl"),"rtl"===m.value)),te=o("".concat(R,"-group-wrapper"),(s(W={},"".concat(R,"-group-wrapper-sm"),"small"===z),s(W,"".concat(R,"-group-wrapper-lg"),"large"===z),s(W,"".concat(R,"-group-wrapper-rtl"),"rtl"===m.value),W),f);H=e("div",{class:te,style:N},[e("div",{class:ee},[Y,H,Z])])}return O(H,{style:N})}}}),Y=d(Q,{install:function(e){return e.component(Q.name,Q),e}});export{Y as I};