import{a as e,b as t,T as a,Q as s,o as i,f as l,F as n,h as p,U as r,e as o,i as d,j as c,an as f,al as u,am as m}from"./index.js";const y=t({name:"MenuTypePicker",components:{Tooltip:a},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=s("setting-menu-type-picker");return{prefixCls:e}}}),x=["onClick"],_=[(e=>(u("data-v-7796e69a"),e=e(),m(),e))((()=>f("div",{class:"mix-sidebar"},null,-1)))];var C=e(y,[["render",function(e,t,a,s,u,m){const y=o("Tooltip");return i(),l("div",{class:r(e.prefixCls)},[(i(!0),l(n,null,p(e.menuTypeList||[],(t=>(i(),d(y,{key:t.title,title:t.title,placement:"bottom"},{default:c((()=>[f("div",{onClick:a=>e.handler(t),class:r([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},_,10,x)])),_:2},1032,["title"])))),128))],2)}],["__scopeId","data-v-7796e69a"]]);export{C as default};
