var e=(e,t,a)=>new Promise(((l,r)=>{var s=e=>{try{o(a.next(e))}catch(t){r(t)}},m=e=>{try{o(a.throw(e))}catch(t){r(t)}},o=e=>e.done?l(e.value):Promise.resolve(e.value).then(s,m);o((a=a.apply(e,t)).next())}));import{b as t,dD as a,r as l,e as r,o as s,f as m,l as o,H as n,dC as i,k as u,z as d,m as h,w as c,e9 as p}from"./index.js";import{u as f}from"./miao.data.js";import{j as b}from"./miao.api.js";import{l as g}from"./lodash.default.js";import"./base64Conver.js";import"./throttle.js";import"./merge.js";const y={key:0,style:{"text-align":"center"}},T=h("保存皮肤配置"),v=t({props:{model:Object,themeName:String,themeNames:Array,debugThemeName:String},emits:["update:model","update:debugThemeName"],setup(t,{emit:h}){const v=t,{createMessage:j}=p(),w=e=>e.debugTheme&&e.currentTheme,[x,{setFieldsValue:N,updateSchema:C,validate:A}]=a({schemas:[{field:"debugTheme",label:"调试皮肤",component:"Switch",bottomHelpMessage:"对已有皮肤进行实时调试（需要手动保存）"},{field:"currentTheme",label:"选择皮肤",component:"Select",show:({model:e})=>e.debugTheme,bottomHelpMessage:"若要新增或删除皮肤，请点击右上角的“皮肤”按钮。"},...f({show:({model:e})=>w(e)})],labelWidth:120,labelAlign:"right",labelCol:{xs:24,sm:5},wrapperCol:{xs:24,sm:19},showActionButtonGroup:!1,baseColProps:{span:24}}),S=l(!1);function P(t,a){return e(this,null,(function*(){x(t),yield function(){return e(this,null,(function*(){c((()=>v.themeNames),(t=>e(this,null,(function*(){Array.isArray(t)||(t=[]);let e=(t=t.filter((e=>"default"!==e))).map((e=>({label:e,value:e})));0===e.length&&(yield N({currentTheme:null})),yield C([{field:"currentTheme",componentProps:{options:e}}])}))),{deep:!0,immediate:!0})}))}(),yield function(t){return e(this,null,(function*(){yield N(v.model),c((()=>v.model),(()=>N(v.model)),{deep:!0}),c(t,(e=>{h("update:model",e),S.value=w(e);let t=S.value&&e.currentTheme||"";h("update:debugThemeName",t)}),{immediate:!0}),c((()=>t.debugTheme),((e,a)=>{!0!==e||a||(t.currentTheme=v.themeName||"")}),{immediate:!0})}))}(a)}))}function k(){return e(this,null,(function*(){let e=yield A(),t=g.omit(e,["debugTheme","currentTheme"]);yield b(e.currentTheme,t),j.success("保存成功~")}))}return(e,t)=>{const a=r("a-button");return s(),m("div",null,[o(n(i),{onRegister:P}),S.value?(s(),m("div",y,[o(a,{type:"primary",preIcon:"ant-design:save",onClick:k},{default:u((()=>[T])),_:1})])):d("",!0)])}}});export{v as default};
