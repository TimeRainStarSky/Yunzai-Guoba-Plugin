import{b as s,e as a,o as e,f as t,D as l,l as n,k as c,m as r}from"./index.js";const o={class:"lg:flex justify-between"},i=l("div",{class:"text-lg text-md m-1"},null,-1),u=r("回滚"),d=r("备份"),p=r("保存"),m=s({emits:["save","rollback","backup"],setup(s,{emit:r}){const m=()=>{r("save")},k=()=>{r("rollback")},b=()=>{r("backup")};return(s,r)=>{const f=a("a-button");return e(),t("div",o,[i,l("div",null,[n(f,{class:"mr-2",type:"primary",preIcon:"ant-design:undo",danger:"",onClick:k},{default:c((()=>[u])),_:1}),n(f,{class:"mr-2",type:"primary",preIcon:"dashicons:backup",onClick:b},{default:c((()=>[d])),_:1}),n(f,{class:"",type:"success",preIcon:"ant-design:save",onClick:m},{default:c((()=>[p])),_:1})])])}}});export{m as default};
