import{a as e,b as t,de as s,U as i,e as n,o as r,f as o,F as a,h as l,x as p,a2 as c,l as d}from"./index.js";import{b as m}from"./index29.js";import"./index23.js";import"./index3.js";import"./ArrowLeftOutlined.js";import"./createAsyncComponent.js";import"./index2.js";import"./index4.js";import"./useContentViewHeight.js";import"./RedoOutlined.js";import"./lock.js";const f=t({name:"ThemeColorPicker",components:{CheckOutlined:s},props:{colorList:{type:Array,defualt:[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:t}=i("setting-theme-picker");return{prefixCls:t,handleClick:function(t){e.event&&m(e.event,t)}}}}),u=["onClick"];var C=e(f,[["render",function(e,t,s,i,m,f){const C=n("CheckOutlined");return r(),o("div",{class:p(e.prefixCls)},[(r(!0),o(a,null,l(e.colorList||[],(t=>(r(),o("span",{key:t,onClick:s=>e.handleClick(t),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:c({background:t})},[d(C)],14,u)))),128))],2)}]]);export{C as default};
