import{a as t,b as e,eW as o,eS as a,eD as s,Q as i,r as n,G as r,bm as l,o as u,i as p,j as f,an as c,k as h,U as d,R as b,s as m,x as g,e as _,al as F,am as v}from"./index.js";import{D as C,G as k,S as x}from"./siteSetting.js";import{a as y}from"./useContentViewHeight.js";import{G as j}from"./GithubFilled.js";import"./useWindowSizeFn.js";const S=e({name:"LayoutFooter",components:{Footer:o.Footer,GithubFilled:j},setup(){const{t:t}=m(),{getShowFooter:e}=a(),{currentRoute:o}=s(),{prefixCls:u}=i("layout-footer"),p=n(null),{setFooterHeight:f}=y();return{getShowLayoutFooter:r((()=>{var t,a;if(g(e)){const e=null==(t=g(p))?void 0:t.$el;f((null==e?void 0:e.offsetHeight)||0)}else f(0);return g(e)&&!(null==(a=g(o).meta)?void 0:a.hiddenFooter)})),prefixCls:u,t:t,DOC_URL:C,GITHUB_URL:k,SITE_URL:x,openWindow:l,footerRef:p}}}),w=t=>(F("data-v-c0ba2c9e"),t=t(),v(),t),G=w((()=>c("a",{href:"https://oicqjs.github.io/oicq/",target:"_blank"},"OICQ文档",-1))),L=w((()=>c("a",{href:"https://github.com/Le-niao/Yunzai-Bot",target:"_blank"},"Yunzai-Bot",-1))),R=[w((()=>c("span",null,"Copyright ©2022",-1))),w((()=>c("a",{href:"https://github.com/zolay-poi",target:"_blank"}," Zolay-poi ",-1))),w((()=>c("span",null," & ",-1))),w((()=>c("a",{href:"https://github.com/vbenjs/vue-vben-admin",target:"_blank"}," Vben Admin ",-1)))];var z=t(S,[["render",function(t,e,o,a,s,i){const n=_("GithubFilled"),r=_("Footer");return t.getShowLayoutFooter?(u(),p(r,{key:0,class:d(t.prefixCls),ref:"footerRef"},{default:f((()=>[c("div",{class:d(`${t.prefixCls}__links`)},[G,h(n,{onClick:e[0]||(e[0]=e=>t.openWindow("https://gitee.com/guoba-yunzai")),class:d(`${t.prefixCls}__github`)},null,8,["class"]),L],2),c("div",{class:d(`${t.prefixCls}__links`)},R,2)])),_:1},8,["class"])):b("",!0)}],["__scopeId","data-v-c0ba2c9e"]]);export{z as default};
