import{b as s,d0 as t,Q as l,s as e,d1 as a,G as o,e as r,o as i,f as n,R as m,ae as x,k as d,x as p,d2 as u,m as c,U as f,j as g,l as w}from"./index.js";import"./index4.js";import"./LoginFormTitle.js";import v from"./ForgetPasswordForm.js";import y from"./RegisterForm.js";import h from"./MobileForm.js";import j from"./QrCodeForm.js";import"./find.js";import"./_baseIteratee.js";import"./get.js";import"./index8.js";import"./useFormItem.js";import"./index7.js";import"./download.js";const F={class:"-enter-x xl:hidden"},k={class:"container relative h-full py-2 mx-auto sm:px-10"},b={class:"flex h-full"},I={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},T={class:"my-auto"},_=["alt"],C={class:"mt-10 font-medium text-white -enter-x"},P={class:"inline-block mt-4 text-3xl"},L={class:"mt-5 font-normal text-white dark:text-gray-500 -enter-x"},Q={key:0,class:"mt-5 font-normal text-white dark:text-gray-500 -enter-x icp-no"},R={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"},S=w(" 请以主人的身份，向你的机器人发送“#锅巴登录”指令进行登录。 "),z=s({__name:"Login",props:{sessionTimeout:{type:Boolean}},setup(s){const w=t(),{prefixCls:z}=l("login"),{t:B}=e();a().getShowPicker;const D=o((()=>{var s;return null!=(s=null==w?void 0:w.title)?s:""})),G=o((()=>{var s;return null!=(s=null==w?void 0:w.ICPNo)?s:""}));return(s,t)=>{const l=r("a-empty");return i(),n("div",{class:f([p(z),"relative w-full h-full px-4"])},[m("",!0),x("span",F,[d(p(u),{alwaysShowTitle:!0})]),x("div",k,[x("div",b,[x("div",I,[d(p(u),{class:"-enter-x"}),x("div",T,[x("img",{alt:p(D),src:"/assets/yunzai-right.png",class:"w-1/2 -mt-16 -enter-x"},null,8,_),x("div",C,[x("span",P,c(p(B)("sys.login.signInTitle")),1)]),x("div",L,c(p(B)("sys.login.signInDesc")),1),p(G)?(i(),n("div",Q,c(p(G)),1)):m("",!0)])]),x("div",R,[x("div",{class:f([`${p(z)}-form`,"relative w-full px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent sm:px-8 xl:p-4 xl:shadow-none sm:w-3/4 lg:w-2/4 xl:w-auto enter-x"])},[m("",!0),d(l,{style:{margin:"0 auto"}},{description:g((()=>[S])),_:1}),d(v),d(y),d(h),d(j)],2)])])])],2)}}});export{z as default};
