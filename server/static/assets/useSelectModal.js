var e=(e,l,t)=>new Promise(((a,n)=>{var o=e=>{try{i(t.next(e))}catch(l){n(l)}},u=e=>{try{i(t.throw(e))}catch(l){n(l)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(o,u);i((t=t.apply(e,l)).next())}));import{p as l,ad as t,r as a,c as n,w as o,x as u,af as i}from"./index.js";const c={isRadioSelection:l.bool.def(!1),rowKey:l.string.def("id"),labelKey:l.string.def("name"),params:l.object.def((()=>({}))),showButton:l.bool.def(!0),showSelected:l.bool.def(!1),maxSelectCount:l.number.def(0),modalTitle:l.string.def("选择")};function s(l,c){const s=t("selectOptions",a([])),r=t("selectValues",n({value:[],change:!1})),d=t("loadingEcho",a(!1)),h=a([]),v=a([]),f=a([]),g=i();let S=!0;function y(t,a){return e(this,null,(function*(){if(v.value=t,c.showSelected&&u(v).length!==u(a).length){let{records:e}=yield l({code:u(v).join(","),pageSize:u(v).length});f.value=e}else f.value=a}))}o(r,(()=>{if(0==r.change){let e={};e[c.rowKey]=r.value.join(","),d.value=S,S=!1,p(e,!0).then().finally((()=>{d.value=S}))}v.value=r.value}),{immediate:!0});const m={type:c.isRadioSelection?"radio":"checkbox",columnWidth:40,selectedRowKeys:v,onChange:y};function p(t,a){return e(this,null,(function*(){let{records:e}=yield l(t);if(h.value=e,console.log("useSelectModel",c),a){let l=[];e.forEach((e=>{l.push({label:e[c.labelKey],value:e[c.rowKey]})})),s.value=l}}))}return[{onSelectChange:y,getDataSource:p,visibleChange:function(t){return e(this,null,(function*(){t&&c.showSelected&&function(){e(this,null,(function*(){let{records:e}=yield l({code:r.value.join(","),pageSize:r.value.length});v.value=r.value,f.value=e}))}()}))},selectOptions:s,selectValues:r,rowSelection:m,indexColumnProps:{dataIndex:"index",title:"#",width:40},checkedKeys:v,selectRows:f,dataSource:h,getSelectResult:function(e){let l=[],t=[];if(f.value.forEach((e=>{l.push({label:e[c.labelKey],value:e[c.rowKey]})})),v.value.forEach((e=>{t.push(e)})),s.value=l,c.maxSelectCount&&t.length>c.maxSelectCount)return g.createMessage.warning(`最多只能选择${c.maxSelectCount}条数据`),!1;e&&e(l,t)},handleDeleteSelected:function(e){v.value=v.value.splice(v.value.indexOf(e.id),1),f.value=f.value.filter((l=>l.id!==e.id))},reset:function(){v.value=[],f.value=[]}}]}export{c as s,s as u};