import{a as t,b as e,bi as a,ba as o,aM as s,U as i,r,R as n,b2 as l,e as u,o as f,i as p,k as c,D as h,l as b,x as d,z as g,a8 as m,H as _,A as v,C}from"./index.js";import{D as F,G as k,S as x}from"./siteSetting.js";import{a as y}from"./useContentViewHeight.js";import{G as L}from"./GithubFilled.js";const R=e({name:"LayoutFooter",components:{Footer:a.Footer,GithubFilled:L},setup(){const{t:t}=m(),{getShowFooter:e}=o(),{currentRoute:a}=s(),{prefixCls:u}=i("layout-footer"),f=r(null),{setFooterHeight:p}=y();return{getShowLayoutFooter:n((()=>{var t,o;if(_(e)){const e=null==(t=_(f))?void 0:t.$el;p((null==e?void 0:e.offsetHeight)||0)}else p(0);return _(e)&&!(null==(o=_(a).meta)?void 0:o.hiddenFooter)})),prefixCls:u,t:t,DOC_URL:F,GITHUB_URL:k,SITE_URL:x,openWindow:l,footerRef:f}}}),j=t=>(v("data-v-c0ba2c9e"),t=t(),C(),t),w=j((()=>h("a",{href:"https://oicqjs.github.io/oicq/",target:"_blank"},"OICQ文档",-1))),G=j((()=>h("a",{href:"https://github.com/Le-niao/Yunzai-Bot",target:"_blank"},"Yunzai-Bot",-1))),S=[j((()=>h("span",null,"Copyright ©2022",-1))),j((()=>h("a",{href:"https://github.com/zolay-poi",target:"_blank"}," Zolay-poi ",-1))),j((()=>h("span",null," & ",-1))),j((()=>h("a",{href:"https://github.com/vbenjs/vue-vben-admin",target:"_blank"}," Vben Admin ",-1)))];var z=t(R,[["render",function(t,e,a,o,s,i){const r=u("GithubFilled"),n=u("Footer");return t.getShowLayoutFooter?(f(),p(n,{key:0,class:d(t.prefixCls),ref:"footerRef"},{default:c((()=>[h("div",{class:d(`${t.prefixCls}__links`)},[w,b(r,{onClick:e[0]||(e[0]=e=>t.openWindow("https://gitee.com/guoba-yunzai")),class:d(`${t.prefixCls}__github`)},null,8,["class"]),G],2),h("div",{class:d(`${t.prefixCls}__links`)},S,2)])),_:1},8,["class"])):g("",!0)}],["__scopeId","data-v-c0ba2c9e"]]);export{z as default};
