import{a as e,b as a,c_ as t,c$ as n,p as s,B as l,r as o,c as i,s as r,ac as u,z as d,w as c,e as p,o as g,f as m,k as v,X as f}from"./index.js";import{a as h}from"./index2.js";import{u as S}from"./useFormItem.js";import{G as j}from"./GSelectBiz.js";import"./useWindowSizeFn.js";import"./FullscreenOutlined.js";var O=e(a({name:"GSelectFriend",inheritAttrs:!1,components:{GSelectBiz:j,SelectFriendModal:t((()=>n((()=>import("./SelectFriendModal.js")),["assets/SelectFriendModal.js","assets/TableImg.js","assets/TableImg.css","assets/index.js","assets/index24.css","assets/index3.js","assets/index20.css","assets/BasicForm.js","assets/BasicForm.css","assets/index4.js","assets/index18.css","assets/find.js","assets/_baseIteratee.js","assets/get.js","assets/index5.js","assets/index15.css","assets/index6.js","assets/index23.css","assets/useFormItem.js","assets/transButton.js","assets/index2.js","assets/index10.css","assets/useWindowSizeFn.js","assets/FullscreenOutlined.js","assets/upperFirst.js","assets/download.js","assets/index7.js","assets/index2.css","assets/index8.js","assets/index12.css","assets/uniqBy.js","assets/index14.js","assets/index22.css","assets/index16.js","assets/index13.css","assets/onMountedOrActivated.js","assets/useContentViewHeight.js","assets/ArrowLeftOutlined.js","assets/merge.js","assets/sortable.esm.js","assets/RedoOutlined.js","assets/scrollTo.js","assets/index21.js","assets/index21.css","assets/index22.js","assets/useSelectModal.js"])))},props:{value:s.array,rowKey:s.string.def("user_id"),labelKey:s.string.def("nickname"),params:s.object.def((()=>({})))},emits:["options-change","change","update:value"],setup(e,{emit:a}){const t=l(),n=o([]),[s,{openModal:p}]=h(),[g]=S(e,"value","change",n),m=o([]),v=i({value:[],change:!1}),f=Object.assign({},r(e),r(t)),j=o(!0),O=o(!1);return u("selectOptions",m),u("selectValues",v),u("loadingEcho",O),d((()=>function(){let a=e.value;a&&a.length>0?v.value=a:v.value=[]}())),c(v,(()=>{v&&(g.value=v.value)})),{state:g,attrs:t,selectOptions:m,getBindValue:f,selectValues:v,btnLoading:j,loadingEcho:O,registerModal:function(...e){j.value=!1,s.apply(null,e)},setValue:function(e,t){m.value=e,g.value=t,v.value=t,a("update:value",t)},handleOpen:function(){p(!0,{isUpdate:!1})}}}}),[["render",function(e,a,t,n,s,l){const o=p("GSelectBiz"),i=p("SelectFriendModal");return g(),m("div",null,[v(o,f({onHandleOpen:e.handleOpen,loading:e.btnLoading||e.loadingEcho,showButton:""},e.attrs),null,16,["onHandleOpen","loading"]),v(i,f({rowKey:e.rowKey,onRegister:e.registerModal,onGetSelectResult:e.setValue},e.getBindValue),null,16,["rowKey","onRegister","onGetSelectResult"])])}],["__scopeId","data-v-376d66e4"]]);export{O as default};
