import{b as a,e as t,o as e,f as l,v as s,m as n,F as o,k as u,j as r,l as i,s as d,bR as c,bS as p,bT as f,V as m}from"./index.js";import{D as k}from"./DeleteOutlined.js";var b=a({__name:"TableBatchDropdown",props:{text:{type:String,default:""},showBatch:{type:Boolean,default:!1}},emits:["clear","menuClick"],setup(a,{emit:b}){const y=b;return(b,_)=>{const h=t("a-button");return e(),l("div",null,[s("span",null,n(a.text),1),a.showBatch?(e(),l(o,{key:0},[u(h,{type:"link",onClick:_[0]||(_[0]=()=>y("clear"))},{default:r((()=>[i(" 取消选择")])),_:1}),u(d(f),null,{overlay:r((()=>[u(d(c),{onClick:_[1]||(_[1]=a=>y("menuClick",a))},{default:r((()=>[u(d(c).Item,{key:"uninstall-batch"},{default:r((()=>[u(d(k)),i(" 批量卸载 ")])),_:1})])),_:1})])),default:r((()=>[u(h,{type:"link",class:"ant-dropdown-link"},{default:r((()=>[i(" 批量操作 "),u(d(p))])),_:1})])),_:1})],64)):m("",!0)])}}});export{b as default};
