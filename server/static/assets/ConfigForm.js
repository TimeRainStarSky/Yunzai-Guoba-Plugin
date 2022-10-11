var e=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(r,o,a)=>o in r?e(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a,i=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&l(e,o,r[o]);if(a)for(var o of a(r))n.call(r,o)&&l(e,o,r[o]);return e},s=(e,a)=>r(e,o(a)),d=(e,r,o)=>new Promise(((a,t)=>{var n=e=>{try{i(o.next(e))}catch(r){t(r)}},l=e=>{try{i(o.throw(e))}catch(r){t(r)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,l);i((o=o.apply(e,r)).next())}));import{ap as y,a as c,b as u,bc as f,p as m,r as k,ai as p,dD as b,n as F,e as g,o as v,f as h,F as C,h as j,i as O,e9 as S}from"./index.js";import R from"./CardForm.js";import _ from"./ArrayForm.js";function A(){return y.get({url:"/config/tabs"})}function w(e,r){return y.delete({url:"/config/card-Form",params:{formKey:e,cardKey:r}},{errorMessageMode:"modal"})}var K=c(u({name:"ConfigForm",components:{ArrayForm:_,CardForm:R,ScrollContainer:f},props:{cards:m.object.isRequired.type},setup(e){const{createMessage:r}=S(),o=k({}),a=k({}),t=k(e.cards.map((function(e){if("keyFormCard"===e.type)return o.value[e.key]=[],{key:e.key,loading:!1,isKeyForm:!0,card:e};if("arrayFormCard"===e.type)return a.value[e.key]=[],{key:e.key,loading:!1,isArrayForm:!0,card:e};return n(e)})));function n(e,r){const[o,a]=b({labelWidth:120,schemas:e.schemas,labelAlign:"right",showActionButtonGroup:!1,baseColProps:{span:24}});return i({key:e.key,loading:!1,register:o,actions:a},r)}function l(e){return d(this,null,(function*(){var r,t,l;try{e.loading=!0;let d=e.key;e.isKeyForm&&(d=e.card.key);let c=yield(l=d,y.get({url:"/config/data",params:{key:l}},{errorMessageMode:"modal"}));if(e.isKeyForm){let a=e=>e.replace(/^INTEGER__/,""),t=Object.keys(c),l=[],d=[],y=[],u=null!=(r=o.value[e.card.key])?r:[];t.forEach((e=>{u.find((r=>r.key===a(e)))||d.push(e)})),u.forEach((e=>{t.find((r=>a(r)===e.key))||y.push(e.key)})),l=t.filter((e=>!d.includes(e)&&!y.includes(e)));let f=(e,r)=>{var o;let a={};for(const[t,n]of Object.entries(c))if(t===r){a[r]=n;break}null==(o=e.actions)||o.setFieldsValue(a)},m=d.map((r=>{let o=r,t=n({key:a(r),schemas:e.card.schemas.map((e=>s(i({},e),{field:o+"."+e.field})))},{fieldKey:o,isKeyForm:e.isKeyForm,card:e.card}),l=t.register;return t.register=function(...e){l(...e),F((()=>f(t,o)))},t})),k=e=>(r,o)=>"default"===r.key?e:r.key.localeCompare(o.key);u=u.concat(m).filter((e=>!y.includes(e.key))),u=u.sort(k(1)).sort(k(-1)),u.forEach((e=>{for(const r of l)if(a(r)===e.key){F((()=>f(e,r)));break}})),o.value[e.card.key]=u}else e.isArrayForm?a.value[e.key]=c:yield null==(t=e.actions)?void 0:t.setFieldsValue(c)}finally{e.loading=!1}}))}function c(e){return d(this,null,(function*(){var o,a,t;try{e.loading=!0;let n=yield null==(o=e.actions)?void 0:o.validate(),i=e.key;if(e.isKeyForm){i=e.card.key;let r=Object.entries(n);n={};for(let[e,o]of r)if(e.includes(".")){let[r,a]=e.split(".");n[r]||(n[r]={}),n[r][a]=o}else n[e]=o}yield(a=i,t=n,y.post({url:"/config/data",params:{key:a,data:t}})),r.success("保存成功~"),yield l(e)}finally{e.loading=!1}}))}return p((()=>{for(let e of t.value)l(e)})),{forms:t,keyForms:o,arrayForms:a,onRedo:l,onSubmit:c,onAddCard:function(e){return d(this,arguments,(function*({form:e,key:a}){if(o.value[e.card.key].findIndex((e=>e.key===a))>-1)return r.warn("已存在相同的配置"),!1;yield c(s(i({},e),{key:a,actions:s(i({},e.actions),{validate:()=>d(this,null,(function*(){return{["INTEGER__"+a]:{__place__:0}}}))})}))}))},onDelCard:function(e){return d(this,arguments,(function*({form:e}){try{e.loading=!0;let o=e.fieldKey,a=e.card.key;yield w(o,a),r.success("删除成功~"),yield l(e)}finally{e.loading=!1}}))}}}}),[["render",function(e,r,o,a,t,n){const l=g("CardForm"),i=g("ArrayForm");return v(),h("div",null,[(v(!0),h(C,null,j(e.cards,((r,o)=>(v(),h(C,{key:r.key},["keyFormCard"===r.type?(v(!0),h(C,{key:0},j(e.keyForms[r.key],(o=>(v(),O(l,{key:o.key,card:r,form:o,isDefault:"default"===o.key,allowFold:"default"!==o.key,defaultFold:"",onRedo:e.onRedo,onSubmit:e.onSubmit,onAddCard:e.onAddCard,onDelCard:e.onDelCard},null,8,["card","form","isDefault","allowFold","onRedo","onSubmit","onAddCard","onDelCard"])))),128)):"arrayFormCard"===r.type?(v(),O(i,{key:1,card:r,form:e.forms[o],value:e.arrayForms[r.key],onRedo:e.onRedo,onSubmit:e.onSubmit},null,8,["card","form","value","onRedo","onSubmit"])):(v(),O(l,{key:2,card:r,form:e.forms[o],onRedo:e.onRedo,onSubmit:e.onSubmit},null,8,["card","form","onRedo","onSubmit"]))],64)))),128))])}]]),P=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{K as C,P as a,A as q};
