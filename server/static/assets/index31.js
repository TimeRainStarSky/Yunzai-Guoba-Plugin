import{ai as t,ag as e,k as n,aw as o,Q as i,b as r,D as a,r as s,c,w as u,q as l,y as m,be as p,eK as f,ak as g,_ as d,E as v,X as j,Y as b,Z as y,L as w,$ as T,a_ as x,a as k,cW as O,dw as S,eT as h,bQ as F,v as L,x as _,dD as C,e as D,o as E,f as B,i as P,bU as A,bT as I,F as H}from"./index.js";import{u as V}from"./index9.js";import{c as U}from"./createAsyncComponent.js";import R from"./SessionTimeoutLogin.js";import{s as z,g as M}from"./scrollTo.js";import"./FullscreenOutlined.js";import"./index11.js";import"./useWindowSizeFn.js";import"./useContentViewHeight.js";import"./uniqBy.js";import"./_baseIteratee.js";import"./get.js";import"./index10.js";import"./RedoOutlined.js";import"./lock.js";import"./Login.js";import"./index4.js";import"./index2.js";import"./LoginFormTitle.js";import"./ForgetPasswordForm.js";import"./index8.js";import"./useFormItem.js";import"./RegisterForm.js";import"./index7.js";import"./MobileForm.js";import"./QrCodeForm.js";import"./download.js";var N={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};function Q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){q(t,e,n[e])}))}return t}function q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var W=function(t,e){var i=Q({},t,e.attrs);return n(o,Q({},i,{icon:N}),null)};W.displayName="VerticalAlignTopOutlined",W.inheritAttrs=!1;var X=W,K=i(r({name:"ABackTop",inheritAttrs:!1,props:{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function},setup:function(o,i){var r,k,O,S,h=i.slots,F=i.attrs,L=i.emit,_=a("back-top",o),C=_.prefixCls,D=_.direction,E=s(),B=c({visible:!1,scrollEvent:null}),P=function(){return E.value&&E.value.ownerDocument?E.value.ownerDocument:window},A=function(t){var e=o.target,n=void 0===e?P:e,i=o.duration;z(0,{getContainer:n,duration:i}),L("click",t)},I=(r=function(t){var e=o.visibilityHeight,n=M(t.target,!0);B.visible=n>e},O=function(t){return function(){k=null,r.apply(void 0,e(t))}},S=function(){if(null==k){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];k=t(O(n))}},S.cancel=function(){return t.cancel(k)},S),H=function(){var t=(o.target||P)();B.scrollEvent=x(t,"scroll",(function(t){I(t)})),I({target:t})},V=function(){B.scrollEvent&&B.scrollEvent.remove(),I.cancel()};return u((function(){return o.target}),(function(){V(),l((function(){H()}))})),m((function(){l((function(){H()}))})),p((function(){l((function(){H()}))})),f((function(){V()})),g((function(){V()})),function(){var t,e,o=n("div",{class:"".concat(C.value,"-content")},[n("div",{class:"".concat(C.value,"-icon")},[n(X,null,null)])]),i=d(d({},F),{onClick:A,class:(t={},v(t,"".concat(C.value),!0),v(t,"".concat(F.class),F.class),v(t,"".concat(C.value,"-rtl"),"rtl"===D.value),t)}),r=j("fade");return n(T,r,{default:function(){return[b(n("div",w(w({},i),{},{ref:E}),[(null===(e=h.default)||void 0===e?void 0:e.call(h))||o]),[[y,B.visible]])]}})}}}));var Y=k(r({name:"LayoutFeatures",components:{BackTop:K,LayoutLockPage:U((()=>O((()=>import("./index27.js")),["assets/index27.js","assets/index.js","assets/index2.css","assets/LockPage.js","assets/LockPage.css","assets/lock.js","assets/header.js"]))),SettingDrawer:U((()=>O((()=>import("./index35.js").then((function(t){return t.i}))),["assets/index35.js","assets/index30.js","assets/index5.css","assets/index.js","assets/index2.css","assets/index10.js","assets/index.css","assets/ArrowLeftOutlined.js","assets/createAsyncComponent.js","assets/index9.js","assets/index14.css","assets/FullscreenOutlined.js","assets/index11.js","assets/index10.css","assets/useWindowSizeFn.js","assets/useContentViewHeight.js","assets/uniqBy.js","assets/_baseIteratee.js","assets/get.js","assets/RedoOutlined.js","assets/lock.js"]))),SessionTimeoutLogin:R},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:n,getFullContent:o}=S(),i=h(),{prefixCls:r}=F("setting-drawer-feature"),{getShowHeader:a}=V(),s=L((()=>i.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:L((()=>{if(!_(e))return!1;const t=_(n);return t===C.AUTO?!_(a)||_(o):t===C.FIXED})),prefixCls:r,getIsSessionTimeout:s}}}),[["render",function(t,e,o,i,r,a){const s=D("LayoutLockPage"),c=D("BackTop"),u=D("SettingDrawer"),l=D("SessionTimeoutLogin");return E(),B(H,null,[n(s),t.getUseOpenBackTop?(E(),P(c,{key:0,target:t.getTarget},null,8,["target"])):A("",!0),t.getIsFixedSettingDrawer?(E(),P(u,{key:1,class:I(t.prefixCls)},null,8,["class"])):A("",!0),t.getIsSessionTimeout?(E(),P(l,{key:2})):A("",!0)],64)}]]);export{Y as default};
