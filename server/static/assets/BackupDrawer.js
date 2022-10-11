var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&o(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&o(e,n,t[n]);return e},l=(e,t,n)=>new Promise(((r,a)=>{var i=e=>{try{s(n.next(e))}catch(t){a(t)}},o=e=>{try{s(n.throw(e))}catch(t){a(t)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,o);s((n=n.apply(e,t)).next())}));import{B as c,a as p}from"./index23.js";import{a as d,b as u,s as m,r as f,R as y,H as b,e as g,o as v,i as w,k as h,l as k,D as O,q as j,f as P,z as C,X as D,Y as _,m as x,e9 as I,u as L}from"./index.js";import{f as B,h as R,r as A,i as S}from"./miao.api.js";import"./index3.js";import"./ArrowLeftOutlined.js";import"./base64Conver.js";const q=u({name:"BackupDrawer",components:{BasicDrawer:c},emits:["register","reload"],setup(e,{emit:r}){const a=m(),{createMessage:i,createConfirm:o}=I(),{createPrompt:c}=L(),d=f(!1),u=f([]),[g,{closeDrawer:v,setDrawerProps:w}]=p((function(){h()}));function h(){return l(this,null,(function*(){try{O(!0),u.value=(yield B()).reverse()}finally{O(!1)}}))}function k(){v()}function O(e){d.value=e,w({confirmLoading:e})}return{getProps:y((()=>{let r={width:document.body.clientWidth>=768?700:"100%",title:"喵喵帮助备份",confirmLoading:b(d)};var i;return i=s(s(s({},b(a)),r),e),t(i,n({onOk:k,onCancel:k,onRegister:g}))})),loading:d,backupList:u,onAdd:function(){c({title:"新增备份",required:!0,placeholder:"请输入备份名称",bottomHelpMessage:"注：新版备份只会备份配置和图标，背景图片请使用“皮肤”功能。",onOk(e){return l(this,null,(function*(){yield R(e),yield h()}))}})},onRollback:function(e){return l(this,null,(function*(){let t=!1;if(2===e.version||(t=yield new Promise((e=>{o({iconType:"warning",title:"备份版本过低",content:"当前备份为旧版备份，是否要转换为新版备份？",onOk:()=>e(!0),onCancel:()=>e(!1)})})),t))try{O(!0),yield A(e.id),t&&(yield h()),r("reload")}finally{O(!1)}}))},onDelete:function(e){return l(this,null,(function*(){try{O(!0),yield S(e.id),yield h()}finally{O(!1)}}))}}}}),z={style:{"margin-bottom":"8px"}},H=x("新增备份"),M={key:0,class:"remark-old"};var E=d(q,[["render",function(e,t,n,r,a,i){const o=g("a-button"),s=g("a-popconfirm"),l=g("a-list-item-meta"),c=g("a-list-item"),p=g("a-list"),d=g("a-spin"),u=g("BasicDrawer");return v(),w(u,D(_(e.getProps)),{default:h((()=>[k(d,{wrapperClassName:"p-2",spinning:e.loading},{default:h((()=>[O("div",z,[k(o,{type:"primary",preIcon:"ant-design:plus",onClick:e.onAdd},{default:h((()=>[H])),_:1},8,["onClick"])]),k(p,{size:"large",bordered:"",dataSource:e.backupList},{renderItem:h((({item:t})=>[k(c,null,{actions:h((()=>[k(s,{title:"确定要还原吗？",placement:"left",onConfirm:()=>e.onRollback(t)},{default:h((()=>[k(o,{type:"primary",shape:"circle",preIcon:"ant-design:undo"})])),_:2},1032,["onConfirm"]),k(s,{title:"确定要删除吗？",placement:"left",onConfirm:()=>e.onDelete(t)},{default:h((()=>[k(o,{type:"primary",shape:"circle",danger:"",preIcon:"ant-design:delete"})])),_:2},1032,["onConfirm"])])),default:h((()=>[k(l,{description:t.time},{title:h((()=>[O("span",null,j(t.remark),1),2!==t.version?(v(),P("span",M,"OLD")):C("",!0)])),_:2},1032,["description"])])),_:2},1024)])),_:1},8,["dataSource"])])),_:1},8,["spinning"])])),_:1},16)}],["__scopeId","data-v-736ebd1c"]]);export{E as default};
