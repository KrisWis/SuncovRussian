"use strict";(self.webpackChunksuncov_russian=self.webpackChunksuncov_russian||[]).push([[445],{9598:function(e,t,s){s.d(t,{u:function(){return c},R:function(){return n}});var r=s(6540);const n=(0,r.createContext)({maxCorrectAnswersCount:0,setMaxCorrectAnswersCount:()=>{},correctAnswersCount:0,setCorrectAnswersCount:()=>{},testIsFailed:!1,setTestIsFailed:()=>{},testHasMissedAnswers:!1,setTestHasMissedAnswers:()=>{},currentItemIndex:0,setCurrentItemIndex:()=>{},theme:"",items:[]});var a=s(4848);const c=(0,r.memo)((e=>{let{children:t,theme:s,items:c}=e;const[i,l]=(0,r.useState)(0),[o,d]=(0,r.useState)(0),[u,m]=(0,r.useState)(!1),[h,w]=(0,r.useState)(!1),[f,x]=(0,r.useState)(0);return(0,r.useEffect)((()=>{l(0),d(0),m(!1),w(!1),x(0)}),[s]),(0,a.jsx)(n.Provider,{value:{maxCorrectAnswersCount:i,setMaxCorrectAnswersCount:l,correctAnswersCount:o,setCorrectAnswersCount:d,testIsFailed:u,setTestIsFailed:m,testHasMissedAnswers:h,setTestHasMissedAnswers:w,theme:s,items:c||[],currentItemIndex:f,setCurrentItemIndex:x},children:t})}));c.displayName="ProviderForTests"},307:function(e,t,s){s.d(t,{j:function(){return p}});var r,n,a,c=s(8383),i=s(6540),l=s(1118);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},o.apply(null,arguments)}var d,u,m,h=e=>i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",width:192,height:192,fill:"none"},e),r||(r=i.createElement("g",{fill:"#000",clipPath:"url(#DislikeSVG_svg__a)"},i.createElement("path",{d:"M133.694 122.605h13.731a3.44 3.44 0 0 0 3.432-3.433V57.385a3.434 3.434 0 0 0-3.432-3.433h-13.731a3.435 3.435 0 0 0-3.433 3.433v61.787a3.44 3.44 0 0 0 3.433 3.433M54.288 122.604c.553.094 26.437 0 26.437 0l-3.615 9.864c-2.495 6.813-.88 17.214 6.042 20.912 2.254 1.205 5.403 1.809 7.942 1.17a5.73 5.73 0 0 0 3.498-2.621c.877-1.486.786-3.22 1.099-4.867.792-4.177 2.766-8.149 5.822-11.13 5.33-5.198 21.885-20.193 21.885-20.193V60.817h-57.21c-7.72-.005-12.78 8.616-8.972 15.35-4.538 2.907-6.09 9.03-3.432 13.73-4.54 2.907-6.091 9.03-3.433 13.731-7.831 5.015-5.213 17.429 3.937 18.976"}))),n||(n=i.createElement("circle",{cx:96,cy:96,r:92.191,stroke:"#000",strokeWidth:7.619})),a||(a=i.createElement("defs",null,i.createElement("clipPath",{id:"DislikeSVG_svg__a"},i.createElement("path",{fill:"#fff",d:"M150.857 156.952H45.715V51.81h105.142z"})))));function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},w.apply(null,arguments)}var f=e=>i.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:192,height:192,fill:"none",style:{rotate:"180deg"}},e),d||(d=i.createElement("g",{fill:"#000",clipPath:"url(#LikeSVG_svg__a)"},i.createElement("path",{d:"M133.694 122.605h13.731a3.44 3.44 0 0 0 3.432-3.433V57.385a3.434 3.434 0 0 0-3.432-3.433h-13.731a3.435 3.435 0 0 0-3.433 3.433v61.787a3.44 3.44 0 0 0 3.433 3.433M54.288 122.604c.553.094 26.437 0 26.437 0l-3.615 9.864c-2.495 6.813-.88 17.214 6.042 20.912 2.254 1.205 5.403 1.809 7.942 1.17a5.73 5.73 0 0 0 3.498-2.621c.877-1.486.786-3.22 1.099-4.867.792-4.177 2.766-8.149 5.822-11.13 5.33-5.198 21.885-20.193 21.885-20.193V60.817h-57.21c-7.72-.005-12.78 8.616-8.972 15.35-4.538 2.907-6.09 9.03-3.432 13.73-4.54 2.907-6.091 9.03-3.433 13.731-7.831 5.015-5.213 17.429 3.937 18.976"}))),u||(u=i.createElement("circle",{cx:96,cy:96,r:92.191,stroke:"#000",strokeWidth:7.619})),m||(m=i.createElement("defs",null,i.createElement("clipPath",{id:"LikeSVG_svg__a"},i.createElement("path",{fill:"#fff",d:"M150.857 156.952H45.715V51.81h105.142z"}))))),x=s(4848);const g=(0,i.memo)((e=>{let{markElement:t,dataTestIDForMark:s}=e;return(0,x.jsx)(x.Fragment,{children:t})}));g.displayName="TemplateForTestsMark";var C=s(2025);const p=(0,i.memo)((e=>{let{className:t,theme:s,testElement:r,checkButtonOnClick:n,correctAnswersCount:a,maxCorrectAnswersCount:o,testIsFailed:d,testHasMissedAnswers:u,continueButtonOnClick:m,withDislike:w=!0,withLike:p=!0,withResults:_=!0,dataTestIdForButton:k,dataTestIdForLike:A,dataTestIdForDislike:T}=e;const v=(0,i.useMemo)((()=>(!d||u)&&(a!==o||!o)),[a,o,u,d]);return(0,x.jsxs)(c.s,{direction:"column",gap:"50",maxHeight:!0,width:"100",className:t,children:[s&&(0,x.jsxs)("h1",{className:"Ax5CzVkR",children:["тема: ",s]}),(0,x.jsxs)(c.s,{width:"60",gap:"30",justify:"center",direction:"column",children:[r,(0,x.jsxs)(c.s,{width:"100",justify:o>0&&!u&&!m?"end":"center",relative:!0,children:[(v||m)&&(0,x.jsx)(l.$,{"data-testid":k,onClick:!v&&m?m:()=>{const{testIsFailed:e,testHasMissedAnswers:t}=n();e&&!t&&(0,C.A)("FailSound")},variant:"medium",type:"button",className:"PqweGHy7",children:v?"Проверить":"Продолжить"}),(0,x.jsxs)(c.s,{className:m?"EkVE_N5q":"",align:"center",direction:"column",gap:"10",children:[_&&o>0&&!u&&(0,x.jsxs)("span",{className:"t_QOI1DX",children:["Итог: ",a,"/",o]}),o>0&&!u&&(0,x.jsx)(x.Fragment,{children:a!==o||d?(0,x.jsx)(x.Fragment,{children:w&&(0,x.jsx)(g,{markElement:(0,x.jsx)(h,{}),dataTestIDForMark:T})}):(0,x.jsx)(x.Fragment,{children:p&&(0,x.jsx)(g,{markElement:(0,x.jsx)(f,{}),dataTestIDForMark:A})})})]})]})]})]})}));p.displayName="TemplateForTests"},2025:function(e,t,s){s.d(t,{A:function(){return n}});var r=s(1599);const n=e=>{(0,r.a)()||new Audio(`/SuncovRussian/sounds/${e}.mp3`).play()}},1445:function(e,t,s){s.r(t),s.d(t,{TestsPage:function(){return m}});var r=s(9254),n=s(6540),a=s(9598),c=s(8383),i="DVks6KMO",l=s(4848);const o=(0,n.memo)((e=>{let{caption:t,items:s,hasOneCorrectAnswer:r,index:a,maxCorrectAnswersCount:o,testHasMissedAnswers:d}=e;const u=(0,n.useCallback)((e=>{(e=>{e.target.closest('[data-name="Test"]').querySelector('[data-name="Test__bg"]').classList.remove(i)})(e),((e,t)=>{const s=t.target;s.checked&&"true"===s.dataset.wasChecked&&(s.checked=!1),e&&t.target.closest('[data-name="Test"]').querySelectorAll('[data-name="Test__radioButton"]').forEach((e=>{e!==s&&(e.checked=!1,e.dataset.wasChecked="false")})),s.dataset.wasChecked=String(s.checked)})(r,e)}),[r]);return(0,l.jsxs)(c.s,{direction:"column",className:"b4MKmANw \n        "+(o>0&&!d?"sX_mKTJb":""),justify:"center",gap:"20",relative:!0,"data-name":"Test",width:"100",id:`Test__${a}`,"data-testid":"Test",children:[(0,l.jsx)("div",{"data-name":"Test__bg",className:"_7Ez2P6VF"}),(0,l.jsxs)("h2",{className:"OZadstZ_",children:[t," (укажите ответ",r?"":"ы","):"]}),(0,l.jsx)(c.s,{width:"100",align:"start",direction:"column",gap:"10",children:s.map(((e,t)=>(0,l.jsxs)(c.s,{gap:"10",children:[(0,l.jsx)("input",{className:"Cd61qJPH",type:"radio",onClick:u,"data-name":"Test__radioButton","data-index":t,"data-testid":`Test__radioButton__${a}`}),(0,l.jsx)("label",{className:"r6cHJJfR",htmlFor:e.value+t,children:e.value})]},e.value)))})]})}));o.displayName="Test";var d=s(307);const u=(0,n.memo)((()=>{const{maxCorrectAnswersCount:e,setMaxCorrectAnswersCount:t,correctAnswersCount:s,setCorrectAnswersCount:r,testIsFailed:u,setTestIsFailed:m,testHasMissedAnswers:h,setTestHasMissedAnswers:w,theme:f,items:x}=(0,n.useContext)(a.R),{checkTestCorrectness:g}=((e,t,s,r,n)=>({checkTestCorrectness:()=>{const a=document.querySelectorAll('[data-name="Test"]'),c=Array.from(a).some((e=>{const t=e.querySelectorAll('[data-name="Test__radioButton"]');return Array.from(t).every((e=>!e.checked))}));let l=0,o=!1;for(let t=0;t<a.length;t++){const s=a[t],r=s.querySelectorAll('[data-name="Test__radioButton"]'),n=s.querySelector('[data-name="Test__bg"]'),d=e[t],u=Array.from(r).filter((e=>e.checked)).map((e=>Number(e.getAttribute("data-index"))));if(0!==u.length){if(!c){let e;if(d.hasOneCorrectAnswer)e=d.items.findIndex((e=>e.isCorrect))===u[0];else{const t=d.items.map(((e,t)=>e.isCorrect?t:-1)).filter((e=>-1!==e));e=JSON.stringify(u.sort())===JSON.stringify(t.sort())}e?l+=1:(o=!0,n.classList.add("hUM0QlSm"))}}else n.classList.add(i)}return t(a.length),s(l),r(o),n(c),{testIsFailed:o,testHasMissedAnswers:c}}}))(x,t,r,m,w);return(0,l.jsx)(d.j,{testElement:(0,l.jsx)(c.s,{width:"100",direction:"column",gap:"50",children:x.map(((t,s)=>(0,l.jsx)(o,{hasOneCorrectAnswer:t.hasOneCorrectAnswer,caption:t.caption,items:t.items,index:s,maxCorrectAnswersCount:e,testHasMissedAnswers:h},t.caption)))}),checkButtonOnClick:g,correctAnswersCount:s,maxCorrectAnswersCount:e,testIsFailed:u,testHasMissedAnswers:h,theme:f,dataTestIdForButton:"TestsPage__checkButton",dataTestIdForDislike:"TestsPage__dislike",dataTestIdForLike:"TestsPage__like"})}));u.displayName="TestTemplate";const m=(0,n.memo)((e=>{let{theme:t,item:s}=e;return(0,l.jsx)(r.YW,{withMarginTop:!0,children:(0,l.jsx)(a.u,{theme:t,items:s.items,children:(0,l.jsx)(u,{})})})}));m.displayName="TestsPage"},1118:function(e,t,s){s.d(t,{$:function(){return o}});var r={};s.r(r),s.d(r,{Button:function(){return n},Button__big:function(){return a},Button__medium:function(){return c}});var n="Zcv0nPBe",a="tRD9g3We",c="XA0XHP5S",i=s(6540),l=s(4848);const o=(0,i.memo)((e=>{let{className:t,children:s,variant:a="medium",...c}=e;return(0,l.jsx)("button",{...c,className:`${n} ${r[`Button__${a}`]} ${t}`,children:s})}));o.displayName="Button"}}]);