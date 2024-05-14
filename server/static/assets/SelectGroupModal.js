var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,i=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&n(e,o,t[o]);if(r)for(var o of r(t))l.call(t,o)&&n(e,o,t[o]);return e},a=(e,r)=>t(e,o(r));import{B as d}from"./TableImg.js";import"./BasicForm.js";import{b as m,bn as p,p as c,B as u,r as f,d9 as g,s as x,f$ as j,x as b,k as h,e as w,a as S,o as y,i as C,j as v,X as I,v as O,V as R}from"./index.js";import{B as _,u as P}from"./index2.js";import{s as B,u as k}from"./useSelectModal.js";import"./index3.js";import"./index14.js";import"./index16.js";import"./onMountedOrActivated.js";import"./useWindowSizeFn.js";import"./useContentViewHeight.js";import"./ArrowLeftOutlined.js";import"./transButton.js";import"./index5.js";import"./index6.js";import"./merge.js";import"./upperFirst.js";import"./_baseIteratee.js";import"./get.js";import"./sortable.esm.js";import"./RedoOutlined.js";import"./FullscreenOutlined.js";import"./scrollTo.js";import"./index21.js";import"./index22.js";import"./index4.js";import"./find.js";import"./useFormItem.js";import"./DeleteOutlined.js";import"./download.js";import"./index7.js";import"./index8.js";import"./uniqBy.js";function F(e){return b.get({url:"/oicq/group/list",params:e})}var T=m({name:"SelectGroupModal",components:{BasicModal:_,BasicTable:d,FormItemRest:p},props:a(i({},B),{modalTitle:c.string.def("选择群")}),emits:["register","getSelectResult"],setup(e,{emit:t}){const o=u(),r=f(),s=g(),l=Object.assign({},x(e),x(o),{canResize:!1,bordered:!0,size:"small"}),[{rowSelection:n,visibleChange:d,selectValues:m,indexColumnProps:p,getSelectResult:c,handleDeleteSelected:b,selectRows:S}]=k(F,l),y=f({x:!1}),[C,{closeModal:v}]=P((()=>{return e=this,t=null,o=function*(){window.innerWidth<900?y.value={x:900}:y.value={x:!1},yield j(r),r.value.setSelectedRowKeys(m.value||[])},new Promise(((r,s)=>{var l=e=>{try{i(o.next(e))}catch(t){s(t)}},n=e=>{try{i(o.throw(e))}catch(t){s(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(l,n);i((o=o.apply(e,t)).next())}));var e,t,o})),I=[{title:"头像",dataIndex:"group_id",width:60,customRender:({text:e})=>h(w("g-avatar"),{id:e,type:"group",qs:100},null)},{title:"群号",dataIndex:"group_id",width:120},{title:"群名",dataIndex:"group_name",ellipsis:!0,align:"left",customRender({text:e,record:t}){if(t.remark!==e){const o=t.owner_id===s.getUserInfo.userId,r=t.admin_flag,l=o?"（群主）":r?"（管理员）":"";return h("span",null,[h("span",null,[e]),h("span",{style:"color:#999;font-size:8px;"},[l])])}return e}},{title:"活跃人数",dataIndex:"active_member_count",width:80,customRender:({text:e})=>(null!=e?e:0)+"人"},{title:"总人数",dataIndex:"member_count",width:80,customRender:({text:e})=>(null!=e?e:0)+"人"}];return{handleOk:function(){c(((e,o)=>{t("getSelectResult",e,o),v()}))},searchInfo:f(e.params),register:C,indexColumnProps:p,visibleChange:d,getBindValue:l,getGroupList:F,formConfig:{baseColProps:{xs:24,sm:8,md:6,lg:8,xl:8,xxl:8},actionColOptions:{xs:24,sm:8,md:8,lg:8,xl:8,xxl:8,style:{paddingLeft:"8px",textAlign:"left"}},labelCol:{xs:24,sm:6},wrapperCol:{xs:24,sm:18},schemas:[{label:"群号",field:"query_group_id",component:"Input",componentProps:{placeholder:"请输入群号"}},{label:"群名称",field:"query_name",component:"Input",componentProps:{placeholder:"请输入群名称"}}],autoSubmitOnEnter:!0},columns:I,rowSelection:n,selectRows:S,selectedTable:{rowKey:"group_id",size:"small",bordered:!0,scroll:{y:390},canResize:!1,pagination:!1,showIndexColumn:!1,columns:[I[0],a(i({},I[1]),{show:!1}),I[2]]},handleDeleteSelected:b,tableScroll:y,tableRef:r}}});const V=["onClick"];var z=S(T,[["render",function(e,t,o,r,s,l){const n=w("BasicTable"),i=w("a-col"),a=w("Icon"),d=w("a-row"),m=w("BasicModal"),p=w("FormItemRest");return y(),C(p,null,{default:v((()=>[h(m,I({width:"800px",title:e.modalTitle,onOk:e.handleOk,onRegister:e.register,onVisibleChange:e.visibleChange},e.$attrs),{default:v((()=>[h(d,null,{default:v((()=>[h(i,{span:e.showSelected?18:24},{default:v((()=>[h(n,I({ref:"tableRef",columns:e.columns,scroll:e.tableScroll},e.getBindValue,{useSearchForm:!0,formConfig:e.formConfig,api:e.getGroupList,searchInfo:e.searchInfo,rowSelection:e.rowSelection,indexColumnProps:e.indexColumnProps}),null,16,["columns","scroll","formConfig","api","searchInfo","rowSelection","indexColumnProps"])])),_:1},8,["span"]),e.showSelected?(y(),C(i,{key:0,span:6},{default:v((()=>[h(n,I(e.selectedTable,{dataSource:e.selectRows,useSearchForm:!0,formConfig:{showActionButtonGroup:!1,baseRowStyle:{minHeight:"40px"}}}),{action:v((({record:t})=>[O("a",{onClick:o=>e.handleDeleteSelected(t)},[h(a,{icon:"ant-design:delete-outlined"})],8,V)])),_:1},16,["dataSource"])])),_:1})):R("",!0)])),_:1})])),_:1},16,["title","onOk","onRegister","onVisibleChange"])])),_:1})}]]);export{z as default};
