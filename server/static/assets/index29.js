var t=(t,e,i)=>new Promise(((s,n)=>{var a=t=>{try{r(i.next(t))}catch(e){n(e)}},l=t=>{try{r(i.throw(t))}catch(e){n(e)}},r=t=>t.done?s(t.value):Promise.resolve(t.value).then(a,l);r((i=i.apply(t,e)).next())}));import{b as e,U as i,r as s,c as n,ex as a,I as l,db as r,e as o,o as u,f as p,i as m,s as d,fT as c,k as f,j as v,v as g,m as j,c5 as x,W as y}from"./index.js";import{P as _}from"./index14.js";import{_ as k}from"./Exception.vue_vue_type_style_index_0_lang.js";import{u as h}from"./index26.js";import{P as b,G as P}from"./GPluginModal.js";import{a as w}from"./index2.js";import{_ as E}from"./PluginIcon.js";import"./index16.js";import"./onMountedOrActivated.js";import"./useWindowSizeFn.js";import"./useContentViewHeight.js";import"./ArrowLeftOutlined.js";import"./transButton.js";import"./index15.js";import"./get.js";import"./MarkdownViewer.js";import"./guoba.js";import"./BasicForm.js";import"./index4.js";import"./find.js";import"./_baseIteratee.js";import"./index5.js";import"./index6.js";import"./useFormItem.js";import"./index3.js";import"./DeleteOutlined.js";import"./upperFirst.js";import"./download.js";import"./index7.js";import"./index8.js";import"./uniqBy.js";import"./common.js";import"./FullscreenOutlined.js";const O={key:1},T={class:"plugin-title"},C=["href"],F={class:"plugin-content"},R={class:"content-desc"},A=g("span",null,"保存",-1),D={style:{"text-align":"center"}},G=g("span",null,"保存",-1),I=e({__name:"index",setup(e){const{prefixCls:I}=i("plugin-detail"),M=h(),z=s(),B=s(!0),N=s(!0),U=n({isError:!1,status:a.PAGE_NOT_FOUND,title:"404",message:"未找到该插件"}),V=l((()=>{var t,e;return null!=(e=null==(t=r.currentRoute.value.params)?void 0:t.name)?e:""})),W=s();function q(){return t(this,null,(function*(){try{B.value=!0,yield z.value.savePluginConfigData()}finally{B.value=!1}}))}!function(){t(this,null,(function*(){try{if(!V.value)return U.isError=!0,U.title="非法的插件名",U.message="遇到该问题请刷新页面重试！",void(U.status=a.ERROR);const t=(yield M.getPlugins()).find((t=>t.name===V.value));if(!t)return U.isError=!0,U.title="插件不存在",void(U.message=" ");if(!t.installed)return U.isError=!0,U.status=a.PAGE_NOT_DATA,U.title="插件未安装",void(U.message=" ");W.value=t}finally{N.value=!1,B.value=!1}}))}();const[H,{openModal:L}]=w();function S(){L(!0,{plugin:W.value})}return(t,e)=>{const i=o("a-col"),s=o("a-button"),n=o("a-row"),a=o("a-card");return u(),p("div",{class:y([d(I)])},[N.value?(u(),m(d(c),{key:0,active:""})):U.isError?(u(),p("div",O,[f(d(k),{status:U.status,title:U.title,subTitle:U.message,btnText:"返回插件管理",goPath:"/plugins"},null,8,["status","title","subTitle"])])):(u(),m(d(_),{key:2,loading:B.value,sticky:"",stickyTop:"-50px"},{title:v((()=>[g("div",T,[f(E,{plugin:W.value,size:24},null,8,["plugin"]),g("a",{class:"title-name",onClick:S},j(W.value.title),1),g("a",{href:W.value.link,target:"_blank",style:{"margin-left":"4px"}},[f(d(x),{icon:"bx:link",style:{"font-size":"20px"}})],8,C)])])),headerContent:v((()=>[g("div",F,[g("div",R,j(W.value.description),1)])])),footer:v((()=>[f(n,null,{default:v((()=>[f(i,{span:12}),f(i,{span:12,style:{"text-align":"right","padding-bottom":"8px"}},{default:v((()=>[f(s,{type:"primary","pre-icon":"ant-design:save",onClick:q},{default:v((()=>[A])),_:1})])),_:1})])),_:1})])),default:v((()=>[f(n,{justify:"center"},{default:v((()=>[f(i,{xxl:16,xl:18,lg:20,md:22,sm:24,xs:24},{default:v((()=>[f(a,null,{default:v((()=>[f(b,{ref_key:"configFormRef",ref:z,plugin:W.value},null,8,["plugin"]),g("div",D,[f(s,{type:"primary","pre-icon":"ant-design:save",onClick:q},{default:v((()=>[G])),_:1})])])),_:1})])),_:1})])),_:1}),f(P,{onRegister:d(H)},null,8,["onRegister"])])),_:1},8,["loading"]))],2)}}});export{I as default};
