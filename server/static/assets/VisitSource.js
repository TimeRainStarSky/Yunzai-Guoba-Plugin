import{b as e,r as a,w as t,o as i,i as o,j as n,an as l,N as s,x as r,fr as d}from"./index.js";import{u as m}from"./useECharts.js";const u=e({__name:"VisitSource",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const u=e,f=a(null),{setOptions:h}=m(f);return t((()=>u.loading),(()=>{u.loading||h({tooltip:{trigger:"item"},legend:{bottom:"1%",left:"center"},series:[{color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],name:"访问来源",type:"pie",radius:["40%","70%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},label:{show:!1,position:"center"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"}},labelLine:{show:!1},data:[{value:1048,name:"搜索引擎"},{value:735,name:"直接访问"},{value:580,name:"邮件营销"},{value:484,name:"联盟广告"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return 100*Math.random()}}]})}),{immediate:!0}),(a,t)=>(i(),o(r(d),{title:"访问来源",loading:e.loading},{default:n((()=>[l("div",{ref_key:"chartRef",ref:f,style:s({width:e.width,height:e.height})},null,4)])),_:1},8,["loading"]))}});export{u as default};
