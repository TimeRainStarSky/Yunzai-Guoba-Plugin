var e=(e,t,i)=>new Promise(((n,a)=>{var s=e=>{try{o(i.next(e))}catch(t){a(t)}},l=e=>{try{o(i.throw(e))}catch(t){a(t)}},o=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,l);o((i=i.apply(e,t)).next())}));import{b as t,U as i,r as n,I as a,db as s,e as l,o,f as r,i as u,s as p,fT as d,k as m,ex as c,j as v,v as f,m as g,c5 as j,W as x}from"./index.js";import{P as y}from"./index14.js";import{_}from"./Exception.vue_vue_type_style_index_0_lang.js";import{u as k}from"./index26.js";import{P as h,G as b}from"./GPluginModal.js";import{a as P}from"./index2.js";import{_ as w}from"./PluginIcon.js";import"./index16.js";import"./onMountedOrActivated.js";import"./useWindowSizeFn.js";import"./useContentViewHeight.js";import"./ArrowLeftOutlined.js";import"./transButton.js";import"./index15.js";import"./get.js";import"./MarkdownViewer.js";import"./guoba.js";import"./BasicForm.js";import"./index4.js";import"./find.js";import"./_baseIteratee.js";import"./index5.js";import"./index6.js";import"./useFormItem.js";import"./index3.js";import"./upperFirst.js";import"./download.js";import"./index7.js";import"./index8.js";import"./uniqBy.js";import"./common.js";import"./FullscreenOutlined.js";const C={key:1},F={class:"plugin-title"},O=["href"],T={class:"plugin-content"},I={class:"content-desc"},M=f("span",null,"保存",-1),R={style:{"text-align":"center"}},z=f("span",null,"保存",-1),A=t({__name:"index",setup(t){const{prefixCls:A}=i("plugin-detail"),B=k(),G=n(),D=n(!0),E=n(!0),N=n(!1),U=a((()=>{var e,t;return null!=(t=null==(e=s.currentRoute.value.params)?void 0:e.name)?t:""})),V=n();function W(){return e(this,null,(function*(){try{D.value=!0,yield G.value.savePluginConfigData()}finally{D.value=!1}}))}!function(){e(this,null,(function*(){try{if(!U.value)return void(N.value=!0);const e=(yield B.getPlugins()).find((e=>e.name===U.value));if(!e)return void(N.value=!0);V.value=e}finally{E.value=!1,D.value=!1}}))}();const[q,{openModal:H}]=P();function L(){H(!0,{plugin:V.value})}return(e,t)=>{const i=l("a-col"),n=l("a-button"),a=l("a-row"),s=l("a-card");return o(),r("div",{class:x([p(A)])},[E.value?(o(),u(p(d),{key:0,active:""})):N.value?(o(),r("div",C,[m(p(_),{status:p(c).PAGE_NOT_FOUND,subTitle:"未找到该插件",btnText:"返回插件列表",goPath:"/plugins/index"},null,8,["status"])])):(o(),u(p(y),{key:2,loading:D.value,sticky:"",stickyTop:"-50px"},{title:v((()=>[f("div",F,[m(w,{plugin:V.value,size:24},null,8,["plugin"]),f("a",{class:"title-name",onClick:L},g(V.value.title),1),f("a",{href:V.value.link,target:"_blank",style:{"margin-left":"4px"}},[m(p(j),{icon:"bx:link",style:{"font-size":"20px"}})],8,O)])])),headerContent:v((()=>[f("div",T,[f("div",I,g(V.value.description),1)])])),footer:v((()=>[m(a,null,{default:v((()=>[m(i,{span:12}),m(i,{span:12,style:{"text-align":"right","padding-bottom":"8px"}},{default:v((()=>[m(n,{type:"primary","pre-icon":"ant-design:save",onClick:W},{default:v((()=>[M])),_:1})])),_:1})])),_:1})])),default:v((()=>[m(a,{justify:"center"},{default:v((()=>[m(i,{xxl:16,xl:18,lg:20,md:22,sm:24,xs:24},{default:v((()=>[m(s,null,{default:v((()=>[m(h,{ref_key:"configFormRef",ref:G,plugin:V.value},null,8,["plugin"]),f("div",R,[m(n,{type:"primary","pre-icon":"ant-design:save",onClick:W},{default:v((()=>[z])),_:1})])])),_:1})])),_:1})])),_:1}),m(b,{onRegister:p(q)},null,8,["onRegister"])])),_:1},8,["loading"]))],2)}}});export{A as default};
