var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,i=(e,i)=>{for(var o in i||(i={}))n.call(i,o)&&a(e,o,i[o]);if(t)for(var o of t(i))l.call(i,o)&&a(e,o,i[o]);return e};import{B as o,u as E}from"./index30.js";import{cW as s,bD as u,e_ as _,e$ as r,f0 as O,d9 as d,da as g,f1 as S,dH as T,dy as A,f2 as N,f3 as M,dw as R,f4 as I,f5 as c,f6 as D,f7 as H,b as C,dF as m,dc as L,v as y,x as f,k as p,bO as U,f8 as b,bG as B,F as v,f9 as G,fa as W,fb as h,a as P,bM as F,e as w,o as x,f as X}from"./index.js";import{c as k}from"./createAsyncComponent.js";import{u as j,a as K}from"./index9.js";const V=k((()=>s((()=>import("./TypePicker.js")),["assets/TypePicker.js","assets/TypePicker.css","assets/index.js","assets/index2.css"]))),Y=k((()=>s((()=>import("./ThemeColorPicker.js")),["assets/ThemeColorPicker.js","assets/ThemeColorPicker.css","assets/index.js","assets/index2.css","assets/index30.js","assets/index5.css","assets/index10.js","assets/index.css","assets/ArrowLeftOutlined.js","assets/createAsyncComponent.js","assets/index9.js","assets/index14.css","assets/FullscreenOutlined.js","assets/index11.js","assets/index10.css","assets/useWindowSizeFn.js","assets/useContentViewHeight.js","assets/uniqBy.js","assets/_baseIteratee.js","assets/get.js","assets/RedoOutlined.js","assets/lock.js"]))),Q=k((()=>s((()=>import("./SettingFooter.js")),["assets/SettingFooter.js","assets/SettingFooter.css","assets/index.js","assets/index2.css","assets/CopyOutlined.js","assets/RedoOutlined.js"]))),$=k((()=>s((()=>import("./SwitchItem.js")),["assets/SwitchItem.js","assets/SwitchItem.css","assets/index.js","assets/index2.css","assets/index6.js","assets/index11.css","assets/index30.js","assets/index5.css","assets/index10.js","assets/index.css","assets/ArrowLeftOutlined.js","assets/createAsyncComponent.js","assets/index9.js","assets/index14.css","assets/FullscreenOutlined.js","assets/index11.js","assets/index10.css","assets/useWindowSizeFn.js","assets/useContentViewHeight.js","assets/uniqBy.js","assets/_baseIteratee.js","assets/get.js","assets/RedoOutlined.js","assets/lock.js"]))),Z=k((()=>s((()=>import("./SelectItem.js")),["assets/SelectItem.js","assets/SelectItem.css","assets/index.js","assets/index2.css","assets/index30.js","assets/index5.css","assets/index10.js","assets/index.css","assets/ArrowLeftOutlined.js","assets/createAsyncComponent.js","assets/index9.js","assets/index14.css","assets/FullscreenOutlined.js","assets/index11.js","assets/index10.css","assets/useWindowSizeFn.js","assets/useContentViewHeight.js","assets/uniqBy.js","assets/_baseIteratee.js","assets/get.js","assets/RedoOutlined.js","assets/lock.js"]))),z=k((()=>s((()=>import("./InputNumberItem.js")),["assets/InputNumberItem.js","assets/InputNumberItem.css","assets/index.js","assets/index2.css","assets/index5.js","assets/index22.css","assets/index30.js","assets/index5.css","assets/index10.js","assets/index.css","assets/ArrowLeftOutlined.js","assets/createAsyncComponent.js","assets/index9.js","assets/index14.css","assets/FullscreenOutlined.js","assets/index11.js","assets/index10.css","assets/useWindowSizeFn.js","assets/useContentViewHeight.js","assets/uniqBy.js","assets/_baseIteratee.js","assets/get.js","assets/RedoOutlined.js","assets/lock.js"]))),{t:q}=u();var J=(e=>(e[e.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",e[e.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",e[e.CHANGE_THEME=2]="CHANGE_THEME",e[e.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",e[e.MENU_ACCORDION=4]="MENU_ACCORDION",e[e.MENU_TRIGGER=5]="MENU_TRIGGER",e[e.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",e[e.MENU_COLLAPSED=7]="MENU_COLLAPSED",e[e.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",e[e.MENU_WIDTH=9]="MENU_WIDTH",e[e.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",e[e.MENU_THEME=11]="MENU_THEME",e[e.MENU_SPLIT=12]="MENU_SPLIT",e[e.MENU_FIXED=13]="MENU_FIXED",e[e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",e[e.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",e[e.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",e[e.HEADER_SHOW=17]="HEADER_SHOW",e[e.HEADER_THEME=18]="HEADER_THEME",e[e.HEADER_FIXED=19]="HEADER_FIXED",e[e.HEADER_SEARCH=20]="HEADER_SEARCH",e[e.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",e[e.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",e[e.TABS_SHOW=23]="TABS_SHOW",e[e.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",e[e.LOCK_TIME=25]="LOCK_TIME",e[e.FULL_CONTENT=26]="FULL_CONTENT",e[e.CONTENT_MODE=27]="CONTENT_MODE",e[e.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",e[e.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",e[e.GRAY_MODE=30]="GRAY_MODE",e[e.COLOR_WEAK=31]="COLOR_WEAK",e[e.SHOW_LOGO=32]="SHOW_LOGO",e[e.SHOW_FOOTER=33]="SHOW_FOOTER",e[e.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",e[e.OPEN_PROGRESS=35]="OPEN_PROGRESS",e[e.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",e[e.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION",e))(J||{});const ee=[{value:_.FULL,label:q("layout.setting.contentModeFull")},{value:_.FIXED,label:q("layout.setting.contentModeFixed")}],te=[{value:r.CENTER,label:q("layout.setting.topMenuAlignRight")},{value:r.START,label:q("layout.setting.topMenuAlignLeft")},{value:r.END,label:q("layout.setting.topMenuAlignCenter")}],ne=[O.ZOOM_FADE,O.FADE,O.ZOOM_OUT,O.FADE_SIDE,O.FADE_BOTTOM,O.FADE_SCALE].map((e=>({label:e,value:e}))),le=[{title:q("layout.setting.menuTypeSidebar"),mode:d.INLINE,type:g.SIDEBAR},{title:q("layout.setting.menuTypeMix"),mode:d.INLINE,type:g.MIX},{title:q("layout.setting.menuTypeTopMenu"),mode:d.HORIZONTAL,type:g.TOP_MENU},{title:q("layout.setting.menuTypeMixSidebar"),mode:d.INLINE,type:g.MIX_SIDEBAR}],ae=[{value:S.HOVER,label:q("layout.setting.triggerHover")},{value:S.CLICK,label:q("layout.setting.triggerClick")}];function ie(e,t){const n=A(),l=function(e,t){const n=A(),{getThemeColor:l,getDarkMode:a}=R();switch(e){case J.CHANGE_LAYOUT:const{mode:e,type:o,split:E}=t;return{menuSetting:i({mode:e,type:o,collapsed:!1,show:!0,hidden:!1},void 0===E?{split:E}:{})};case J.CHANGE_THEME_COLOR:return l.value===t?{}:(H(t),{themeColor:t});case J.CHANGE_THEME:return a.value===t||D(t),{};case J.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case J.MENU_ACCORDION:return{menuSetting:{accordion:t}};case J.MENU_TRIGGER:return{menuSetting:{trigger:t}};case J.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case J.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case J.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case J.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case J.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case J.MENU_THEME:return M(t),{menuSetting:{bgColor:t}};case J.MENU_SPLIT:return{menuSetting:{split:t}};case J.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case J.MENU_FIXED:return{menuSetting:{fixed:t}};case J.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case J.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case J.OPEN_PAGE_LOADING:return n.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case J.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case J.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case J.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case J.LOCK_TIME:return{lockTime:t};case J.FULL_CONTENT:return{fullContent:t};case J.CONTENT_MODE:return{contentMode:t};case J.SHOW_BREADCRUMB:return{showBreadCrumb:t};case J.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case J.GRAY_MODE:return c(t),{grayMode:t};case J.SHOW_FOOTER:return{showFooter:t};case J.COLOR_WEAK:return I(t),{colorWeak:t};case J.SHOW_LOGO:return{showLogo:t};case J.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case J.TABS_SHOW:return{multiTabsSetting:{show:t}};case J.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case J.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case J.HEADER_THEME:return N(t),{headerSetting:{bgColor:t}};case J.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case J.HEADER_FIXED:return{headerSetting:{fixed:t}};case J.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}(e,t);n.setProjectConfig(l),e===J.CHANGE_THEME&&(N(),M())}const{t:oe}=u();var Ee=C({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:n,getShowFooter:l,getShowBreadCrumb:a,getShowBreadCrumbIcon:i,getShowLogo:E,getFullContent:s,getColorWeak:u,getGrayMode:_,getLockTime:r,getShowDarkModeToggle:O,getThemeColor:d}=R(),{getOpenPageLoading:S,getBasicTransition:A,getEnableTransition:N,getOpenNProgress:M}=m(),{getIsHorizontal:I,getShowMenu:c,getMenuType:D,getTrigger:H,getCollapsedShowTitle:C,getMenuFixed:P,getCollapsed:F,getCanDrag:w,getTopMenuAlign:x,getAccordion:X,getMenuWidth:k,getMenuBgColor:Ee,getIsTopMenu:se,getSplit:ue,getIsMixSidebar:_e,getCloseMixSidebarOnChange:re,getMixSideTrigger:Oe,getMixSideFixed:de}=L(),{getShowHeader:ge,getFixed:Se,getHeaderBgColor:Te,getShowSearch:Ae}=j(),{getShowMultipleTab:Ne,getShowQuick:Me,getShowRedo:Re,getShowFold:Ie}=K(),ce=y((()=>f(c)&&!f(I)));function De(){let e=f(H);const t=(l=f(ue),[{value:T.NONE,label:q("layout.setting.menuTriggerNone")},{value:T.FOOTER,label:q("layout.setting.menuTriggerBottom")},...l?[]:[{value:T.HEADER,label:q("layout.setting.menuTriggerTop")}]]);var l;return t.some((t=>t.value===e))||(e=T.FOOTER),p(v,null,[p($,{title:oe("layout.setting.splitMenu"),event:J.MENU_SPLIT,def:f(ue),disabled:!f(ce)||f(D)!==g.MIX},null),p($,{title:oe("layout.setting.mixSidebarFixed"),event:J.MENU_FIXED_MIX_SIDEBAR,def:f(de),disabled:!f(_e)},null),p($,{title:oe("layout.setting.closeMixSidebarOnChange"),event:J.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:f(re),disabled:!f(_e)},null),p($,{title:oe("layout.setting.menuCollapse"),event:J.MENU_COLLAPSED,def:f(F),disabled:!f(ce)},null),p($,{title:oe("layout.setting.menuDrag"),event:J.MENU_HAS_DRAG,def:f(w),disabled:!f(ce)},null),p($,{title:oe("layout.setting.menuSearch"),event:J.HEADER_SEARCH,def:f(Ae),disabled:!f(ge)},null),p($,{title:oe("layout.setting.menuAccordion"),event:J.MENU_ACCORDION,def:f(X),disabled:!f(ce)},null),p($,{title:oe("layout.setting.collapseMenuDisplayName"),event:J.MENU_COLLAPSED_SHOW_TITLE,def:f(C),disabled:!f(ce)||!f(F)||f(_e)},null),p($,{title:oe("layout.setting.fixedHeader"),event:J.HEADER_FIXED,def:f(Se),disabled:!f(ge)},null),p($,{title:oe("layout.setting.fixedSideBar"),event:J.MENU_FIXED,def:f(P),disabled:!f(ce)||f(_e)},null),p(Z,{title:oe("layout.setting.mixSidebarTrigger"),event:J.MENU_TRIGGER_MIX_SIDEBAR,def:f(Oe),options:ae,disabled:!f(_e)},null),p(Z,{title:oe("layout.setting.topMenuLayout"),event:J.MENU_TOP_ALIGN,def:f(x),options:te,disabled:!f(ge)||f(ue)||!f(se)&&!f(ue)||f(_e)},null),p(Z,{title:oe("layout.setting.menuCollapseButton"),event:J.MENU_TRIGGER,def:e,options:t,disabled:!f(ce)||f(_e)},null),p(Z,{title:oe("layout.setting.contentMode"),event:J.CONTENT_MODE,def:f(n),options:ee},null),p(z,{title:oe("layout.setting.autoScreenLock"),min:0,event:J.LOCK_TIME,defaultValue:f(r),formatter:e=>0===parseInt(e)?`0(${oe("layout.setting.notAutoScreenLock")})`:`${e}${oe("layout.setting.minute")}`},null),p(z,{title:oe("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:J.MENU_WIDTH,disabled:!f(ce),defaultValue:f(k),formatter:e=>`${parseInt(e)}px`},null)])}return()=>p(o,B(t,{title:oe("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[f(O)&&p(U,null,{default:()=>oe("layout.setting.darkMode")}),f(O)&&p(b,{class:"mx-auto"},null),p(U,null,{default:()=>oe("layout.setting.navMode")}),p(v,null,[p(V,{menuTypeList:le,handler:e=>{ie(J.CHANGE_LAYOUT,{mode:e.mode,type:e.type,split:!f(I)&&void 0})},def:f(D)},null)]),p(U,null,{default:()=>oe("layout.setting.sysTheme")}),p(Y,{colorList:h,def:f(d),event:J.CHANGE_THEME_COLOR},null),p(U,null,{default:()=>oe("layout.setting.headerTheme")}),p(Y,{colorList:G,def:f(Te),event:J.HEADER_THEME},null),p(U,null,{default:()=>oe("layout.setting.sidebarTheme")}),p(Y,{colorList:W,def:f(Ee),event:J.MENU_THEME},null),p(U,null,{default:()=>oe("layout.setting.interfaceFunction")}),De(),p(U,null,{default:()=>oe("layout.setting.interfaceDisplay")}),p(v,null,[p($,{title:oe("layout.setting.breadcrumb"),event:J.SHOW_BREADCRUMB,def:f(a),disabled:!f(ge)},null),p($,{title:oe("layout.setting.breadcrumbIcon"),event:J.SHOW_BREADCRUMB_ICON,def:f(i),disabled:!f(ge)},null),p($,{title:oe("layout.setting.tabs"),event:J.TABS_SHOW,def:f(Ne)},null),p($,{title:oe("layout.setting.tabsRedoBtn"),event:J.TABS_SHOW_REDO,def:f(Re),disabled:!f(Ne)},null),p($,{title:oe("layout.setting.tabsQuickBtn"),event:J.TABS_SHOW_QUICK,def:f(Me),disabled:!f(Ne)},null),p($,{title:oe("layout.setting.tabsFoldBtn"),event:J.TABS_SHOW_FOLD,def:f(Ie),disabled:!f(Ne)},null),p($,{title:oe("layout.setting.sidebar"),event:J.MENU_SHOW_SIDEBAR,def:f(c),disabled:f(I)},null),p($,{title:oe("layout.setting.header"),event:J.HEADER_SHOW,def:f(ge)},null),p($,{title:"Logo",event:J.SHOW_LOGO,def:f(E),disabled:f(_e)},null),p($,{title:oe("layout.setting.footer"),event:J.SHOW_FOOTER,def:f(l)},null),p($,{title:oe("layout.setting.fullContent"),event:J.FULL_CONTENT,def:f(s)},null),p($,{title:oe("layout.setting.grayMode"),event:J.GRAY_MODE,def:f(_)},null),p($,{title:oe("layout.setting.colorWeak"),event:J.COLOR_WEAK,def:f(u)},null)]),p(U,null,{default:()=>oe("layout.setting.animation")}),p(v,null,[p($,{title:oe("layout.setting.progress"),event:J.OPEN_PROGRESS,def:f(M)},null),p($,{title:oe("layout.setting.switchLoading"),event:J.OPEN_PAGE_LOADING,def:f(S)},null),p($,{title:oe("layout.setting.switchAnimation"),event:J.OPEN_ROUTE_TRANSITION,def:f(N)},null),p(Z,{title:oe("layout.setting.animationType"),event:J.ROUTER_TRANSITION,def:f(A),options:ne,disabled:!f(N)},null)]),p(U,null,null),p(Q,null,null)]})}});var se=P(C({name:"SettingButton",components:{SettingDrawer:Ee,Icon:F},setup(){const[e,{openDrawer:t}]=E();return{register:e,openDrawer:t}}}),[["render",function(e,t,n,l,a,i){const o=w("Icon"),E=w("SettingDrawer");return x(),X("div",{onClick:t[0]||(t[0]=t=>e.openDrawer(!0))},[p(o,{icon:"ion:settings-outline"}),p(E,{onRegister:e.register},null,8,["onRegister"])])}]]),ue=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"}));export{ie as b,ue as i};
