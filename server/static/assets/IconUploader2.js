import{d as e,p as a}from"./esm.js";import{a as t,b as l,r as s,e as o,o as i,i as n,k as d,D as r,H as c,f as u,a2 as p,l as f,z as v,fV as m,A as g,C as b,m as y}from"./index.js";const w=e=>(g("data-v-79b47af2"),e=e(),b(),e),h={class:"frame"},k={key:1},x={class:"wrap"},L=w((()=>r("div",null,"替换",-1))),R={class:"wrap"},A=w((()=>r("input",{type:"file",id:"upload1",style:{display:"none"},name:"icon",accept:"image/bmp,image/jpeg,image/png"},null,-1))),B=y("选择图片"),C={key:0},I=y("确定"),_=w((()=>r("div",{class:"tip"},"请使图片尽量填满取景框",-1)));var j=t(l({props:{uploader:Object,iconB64List:Array},setup(t){const l=t,g=s(null),b=()=>{let e=document.getElementById("upload1");void 0===e.bind&&(e.bind=!0,e.addEventListener("change",(e=>{let a=e.target.files;if(0!==a.size){let e=a[0],t=new FileReader;t.readAsDataURL(e),t.onload=()=>{g.value=t.result}}}))),e.click()},y=()=>{let e=l.uploader.selected;a.getFile().then((a=>{let t=document.createElement("canvas");t.width=100,t.height=100;let s=new FileReader;s.onload=function(){let a=t.getContext("2d"),o=new Image;o.src=s.result,o.onload=function(){a.textAlign="center",a.font="bold 14px sans-serif",a.drawImage(o,0,0,80,80),a.fillText(e,40,95),l.iconB64List[e]=t.toDataURL(),g.value=null}},s.readAsDataURL(a)}))};return document.getElementById("upload1"),(a,l)=>{const s=o("a-button");return i(),n(c(m),{visible:t.uploader.show,"onUpdate:visible":l[0]||(l[0]=e=>t.uploader.show=e),width:"420px",closable:!1,footer:null},{default:d((()=>[r("div",h,[g.value?(i(),n(c(e),{key:0,boxStyle:{height:"300px",width:"100%",backgroundColor:"#f8f8f8"},img:g.value,options:{viewMode:1,dragMode:"move",aspectRatio:1}},null,8,["img"])):(i(),u("div",k,[r("div",x,[L,r("div",{class:"icon",style:p(`background: url(${t.iconB64List[t.uploader.selected]}) 0 0 no-repeat`)},null,4)])])),r("div",R,[A,f(s,{block:"",type:"info",onClick:b},{default:d((()=>[B])),_:1}),g.value?(i(),u("div",C,[f(s,{block:"",type:"success",onClick:y},{default:d((()=>[I])),_:1}),_])):v("",!0)])])])),_:1},8,["visible"])}}}),[["__scopeId","data-v-79b47af2"]]);export{j as default};
