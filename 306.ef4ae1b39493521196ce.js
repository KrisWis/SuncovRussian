"use strict";(self.webpackChunksuncov_russian=self.webpackChunksuncov_russian||[]).push([[306],{2411:function(e,t,n){n.d(t,{L:function(){return r},v:function(){return s}}),window.matchMedia=window.matchMedia||function(){return{matches:!1,addListener:function(){},removeListener:function(){}}};const r=window.matchMedia("(max-width: 1000px)"),s=window.matchMedia("(max-width: 600px)")},7660:function(e,t,n){n.d(t,{T:function(){return r}});const r=e=>{new Audio(`/SuncovRussian/sounds/${e}.mp3`).play()}},9306:function(e,t,n){n.r(t),n.d(t,{TrainerPage:function(){return q}});var r={};n.r(r),n.d(r,{Hint:function(){return u},Hint__text:function(){return m},Hint__text__active:function(){return h},Hint__text__top:function(){return f}});var s={};n.r(s),n.d(s,{TrainerWord:function(){return W},TrainerWord__default:function(){return C},TrainerWord__invalid:function(){return I}});var i=n(8383),o="xikJpYWM",a=n(6540),c=n(1468),d=n(4848);const l=e=>{let{children:t,reducers:n,removeAfterUnmount:r=!0}=e;const s=(0,c.Pj)(),i=s.reducerManager.getMountedReducers();return(0,a.useEffect)((()=>(Object.entries(n).forEach((e=>{let[t,n]=e;i[t]||s.reducerManager.add(t,n)})),()=>{r&&Object.entries(n).forEach((e=>{let[t]=e;s.reducerManager.remove(t)}))})),[i,n,r,s.reducerManager]),(0,d.jsx)(d.Fragment,{children:t})};l.displayName="DynamicModuleLoader";var u="q8EozCQs",m="LpcIMF4O",h="GCrxjsBF",f="mE9OXUTJ";const p=(0,a.memo)((e=>{let{textClassName:t,text:n,textDirection:s="right"}=e;const[o,c]=(0,a.useState)(!1);return(0,d.jsxs)(i.s,{relative:!0,align:"start",gap:"10",children:[(0,d.jsx)(i.s,{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),className:u,justify:"center",children:(0,d.jsx)("span",{children:"?"})}),(0,d.jsx)("p",{className:`${m}\n              ${o&&h}\n              ${r[`Hint__text__${s}`]}\n              ${t}`,children:n})]})}));p.displayName="Hint";var y=n(3519),x=n(5337),j=n(3800),w=n(6491),T="VR6nnRel",b="XVOH8ddq";const v=e=>{const{setWords:t}=(0,w.MR)();return{initializeWords:(0,a.useCallback)((()=>{const n=JSON.parse(JSON.stringify(e));for(const e of n)e.probability=1,e.uncorrectTimes=0,e.consecutivelyTimes=0,e.inProgress=!1;t(n)}),[t,e])}};var g=n(1118);const k=(0,a.memo)((e=>{let{updateRandomWord:t,words:n,theme:r}=e;const{isCheckMode:s,isOneLifeMode:o,allAttemptsCount:c,setAllAttemptsCount:l}=(0,a.useContext)(x.U),u=(0,j.n)(),{setWords:m}=(0,w.MR)(),{totalTime:h,setTotalTime:f,isErrorWork:p,setIsErrorWork:y}=(0,a.useContext)(x.U),k=(0,a.useMemo)((()=>Math.round(h/6e4)),[h]),M=(0,a.useMemo)((()=>Math.round(h/1e3%60)),[h]),W=(0,a.useMemo)((()=>u.filter((e=>e.uncorrectTimes>0)).sort(((e,t)=>t.uncorrectTimes-e.uncorrectTimes))),[u]),C=(0,a.useCallback)((()=>{y(!0);const e=W.map((e=>({...e,probability:1,uncorrectTimes:0,consecutivelyTimes:0,inProgress:!1})));m(e),f(0),l(0),t(e)}),[l,y,f,m,t,W]),{initializeWords:I}=v(n.items),N=(0,a.useCallback)((()=>{I(),f(0),y(!1),l(0)}),[I,l,y,f]);return(0,d.jsxs)(i.s,{className:"SZbvI01N",justify:"between",direction:"column",width:"100",maxHeight:!0,children:[(0,d.jsxs)("span",{className:b,children:["Общее время:"," ",`${k<10?"0":""}${k}`,":",`${M<10?"0":""}${M}`]}),o&&(0,d.jsxs)("span",{className:T,children:["Количество попыток: ",c]}),(0,d.jsxs)("span",{className:T,children:["Тема: ",r]}),(s||o)&&(0,d.jsxs)("span",{className:T,children:["Режим: «",s?"Проверка":"Одна жизнь","»"]}),W.length>0&&!o?(0,d.jsxs)(i.s,{className:"KQIgMBSl",gap:"20",maxHeight:!0,justify:"between",direction:"column",children:[(0,d.jsxs)(i.s,{direction:"column",children:[(0,d.jsx)("span",{className:b,children:"Ошибки:"}),(0,d.jsx)(i.s,{direction:"column",gap:"3",width:"100",children:W.map((e=>(0,d.jsxs)("span",{className:"JCvfyDc1",children:["primary"===n.type&&(0,d.jsxs)(d.Fragment,{children:[e.valid," -"," ",e.uncorrectTimes," ",[2,3,4].includes(e.uncorrectTimes)?"раза":"раз"]}),"unions"===n.type&&(0,d.jsxs)(d.Fragment,{children:[e.word," -"," ",e.uncorrectTimes," ",[2,3,4].includes(e.uncorrectTimes)?"раза":"раз"," ","(Правильно: ",e.unionType,")"]})]},e.id)))})]}),!p&&(0,d.jsx)(g.$,{onClick:C,type:"button",children:"Работа над ошибками"})]}):(0,d.jsx)(g.$,{onClick:N,type:"button",children:"Повторить"})]})}));k.displayName="TrainerTotalResult";var M=n(2411),W="rxqnQXoT",C="RcYBccp8",I="ywWLKwMM";const N=(0,a.memo)((e=>{let{className:t,style:n,dataTestId:r,onClick:o,children:a,type:c="default"}=e;return(0,d.jsx)(i.s,{justify:"center","data-testid":r,width:"100",onClick:()=>{const e=document.querySelectorAll(".TrainerWord");e.forEach((e=>{e.style.transitionDuration="0ms"}));const t=setTimeout((()=>{clearTimeout(t),e.forEach((e=>{e.style.transitionDuration="var(--transition-duration-default)"}))}),100);o&&o()},className:`TrainerWord ${W} ${t} ${s[`TrainerWord__${c}`]}`,style:n,children:a})}));N.displayName="TrainerWord";const _=["Сочинительный","Подчинительный"],O=(0,a.memo)((e=>{let{randomWord:t,wordOnSuccess:n,wordOnFail:r}=e;const s=(0,j.n)(),{isIncorrect:o,isErrorWork:c}=(0,a.useContext)(x.U);return(0,d.jsxs)(i.s,{width:"100",direction:"column",gap:"10",justify:"center",children:[(0,d.jsx)("span",{className:"hRRLbvjX","data-testid":"UnionsTrainerWords__word",children:t.word}),(0,d.jsx)(i.s,{justify:"center",direction:M.L.matches?"column":"row",width:"100",children:_.map(((e,i)=>(0,d.jsx)(N,{dataTestId:`UnionsTrainerWords__${e}`,onClick:e===t.unionType?()=>n(s,c,t.id):()=>r(s,c,t.id),type:o&&e!==t.unionType?"invalid":"default",style:0===i?{borderRightWidth:M.L.matches?3:0,borderBottomWidth:M.L.matches?0:3}:{},children:e},e)))})]})}));O.displayName="UnionsTrainerWords";const S=(e,t,n)=>{const r=(0,j.n)(),s=(0,a.useMemo)((()=>r.find((t=>t.id===e))),[e,r]);return{updateRandomWord:(0,a.useCallback)((s=>{const i=(s||r).filter((t=>t.id!==e&&0!==t.probability)),o=[!0,!1][Math.floor(2*Math.random())];if(t(o),0===i.length)return;const a=i.reduce(((e,t)=>e+(t.probability||1)),0)*Math.random();for(let e=0,t=0;;e++)if(t+=i[e].probability||1,t>a)return void n(i[e].id)}),[e,n,t,r]),randomWord:s}};var L=n(7660);const R=(e,t,n,r)=>{const{changeWordProbability:s,changeWordUncorrectTimes:i,changeWordConsecutivelyTimes:o,changeWordInProgressStatus:c}=(0,w.MR)(),d=(0,j.n)(),{initializeWords:l}=v(d),{isOneLifeMode:u,isCheckMode:m,setAllAttemptsCount:h}=(0,a.useContext)(x.U),[f,p]=(0,a.useState)(!1),{updateRandomWord:y}=S(e,t,n),T=(0,a.useCallback)(((e,t,n)=>{p(!1),r(!1);const a=e.find((e=>e.id===n));a&&(t||(s({probability:.2,id:a.id}),i({id:a.id,uncorrectTimes:a.uncorrectTimes+1})),o({id:a.id,consecutivelyTimes:0}),c({id:a.id,inProgress:!1}),m&&(s({id:a.id,probability:0}),c({id:a.id,inProgress:!0})),y(),document.querySelector("main").style.pointerEvents="all",document.onclick=null)}),[o,c,s,i,m,r,y]),b=(0,a.useCallback)(((e,t,n)=>{if(f)return;u&&(l(),h((e=>e+1))),(0,L.T)("FailSound"),r(!0),p(!0);const s=document.querySelector("main"),i=setTimeout((()=>{s.style.pointerEvents="none",document.onclick=()=>T(e,t,n),clearTimeout(i)}),0)}),[l,u,h,r,T,f]),g=(0,a.useCallback)(((e,t,n)=>{if(f)return;const r=e.find((e=>e.id===n));if(r){if(t){const e=r.consecutivelyTimes+1;o({id:r.id,consecutivelyTimes:e}),3===e&&(c({id:r.id,inProgress:!0}),s({probability:.05,id:r.id}))}else.2===r.probability?s({id:r.id,probability:.1}):.1===r.probability?s({id:r.id,probability:.05}):(s({id:r.id,probability:u?0:.01}),c({id:r.id,inProgress:!0}));m&&(s({id:r.id,probability:0}),c({id:r.id,inProgress:!0})),y()}}),[o,c,s,m,u,y,f]);return{showNewWord:T,wordOnSuccess:g,wordOnFail:b,waitRepeatedClickInFail:f}},P=(0,a.memo)((e=>{let{randomWord:t,randomWordsIsReverse:n,wordOnFail:r,wordOnSuccess:s}=e;const o=(0,j.n)(),{isIncorrect:c,isErrorWork:l}=(0,a.useContext)(x.U),u=e=>(0,d.jsx)(d.Fragment,{children:t.differenceIndexes?(0,d.jsx)(i.s,{children:e.split("").map(((n,r)=>(0,d.jsx)(a.Fragment,{children:" "===n?(0,d.jsx)("span",{style:{width:7}}):(0,d.jsx)("span",{style:{fontWeight:t.differenceIndexes&&t.differenceIndexes.includes(r+1)?"bold":"normal"},children:n},e+n+r)},e+n+r)))}):e});return(0,d.jsxs)(i.s,{justify:"center",direction:M.L.matches?n?"columnReverse":"column":n?"rowReverse":"row",width:"100",children:[(0,d.jsx)(N,{dataTestId:"PrimaryTrainerWords__valid",onClick:()=>s(o,l,t.id),style:{borderRightWidth:M.L.matches||n||c?3:0,borderBottomWidth:M.L.matches?n||c?3:0:3,fontSize:t.valid.length>=10?20:36},children:u(t.valid)}),(0,d.jsx)(N,{dataTestId:"PrimaryTrainerWords__invalid",onClick:()=>r(o,l,t.id),type:c?"invalid":"default",style:{borderRightWidth:M.L.matches?3:n?0:3,borderBottomWidth:M.L.matches&&n?0:3,fontSize:t.valid.length>=10?20:36},children:u(t.invalid)})]})}));P.displayName="PrimaryTrainerWords";var E,$=n(2980);function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F.apply(null,arguments)}var A=e=>a.createElement("svg",F({xmlns:"http://www.w3.org/2000/svg",width:21,height:18,fill:"none"},e),E||(E=a.createElement("path",{stroke:"var(--color-white)",strokeWidth:3,d:"M2 10.5 6.5 15l13-13"})));const U=(0,a.memo)((e=>{let{name:t,onClick:n,modeIsOn:r,setModeIsOn:s,hintText:o}=e;const c=(0,a.useCallback)((()=>{s(!r),n()}),[n,r,s]),[l,u]=(0,a.useState)(!1);return(0,d.jsxs)(i.s,{direction:"column",relative:!0,children:[(0,d.jsxs)(i.s,{className:`SsHLGFH8\n        ${r&&"asGKPX1D"}`,children:[(0,d.jsx)(i.s,{onClick:c,className:"m0UHa6ZK",justify:"center","data-testid":`ModeSwitcherItem__${t}`,"data-selected":r,children:(0,d.jsx)(A,{className:"d_cw2q17"})}),(0,d.jsx)("span",{onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),className:"d9iTjNx0",children:t})]}),o&&(0,d.jsx)(i.s,{justify:"center",className:`dPvMNF15 \n        ${l&&"VBHbPcMg"}`,children:o})]})}));U.displayName="ModeSwitcherItem";const H=(0,a.memo)((e=>{let{items:t}=e;return(0,d.jsx)(i.s,{justify:"end",width:"100",gap:"10",relative:!0,children:(0,d.jsx)(i.s,{direction:"column",gap:"10",children:t.map((e=>(0,d.jsx)(U,{...e},e.name)))})})}));H.displayName="ModeSwitcher";const B=(0,a.memo)((()=>{const[e,t]=(0,a.useState)(!0),{strictModeItem:n}=((e,t)=>{const n=(0,j.n)(),{changeWordProbability:r,changeWordConsecutivelyTimes:s,changeWordInProgressStatus:i}=(0,w.MR)(),o=(0,a.useCallback)((()=>{for(const e of n)r({id:e.id,probability:1}),s({id:e.id,consecutivelyTimes:0}),i({id:e.id,inProgress:!1})}),[s,i,r,n]),c=(0,a.useCallback)((()=>{document.hidden&&o()}),[o]);return{strictModeItem:{name:"Строгий",onClick:(0,a.useCallback)((()=>{e?document.onvisibilitychange=null:(o(),document.onvisibilitychange=c)}),[o,c,e]),modeIsOn:e,setModeIsOn:t,hintText:"Обнуляет прогресс каждый раз, когда вы покидаете сайт."}}})(e,t),{OneLifeModeItem:r}=(()=>{const{setIsOneLifeMode:e,isOneLifeMode:t,setIsCheckMode:n}=(0,a.useContext)(x.U);return{OneLifeModeItem:{name:"Одна жизнь",onClick:(0,a.useCallback)((()=>{t||n(!1),e(!t)}),[t,n,e]),modeIsOn:t,setModeIsOn:e,hintText:"Прогресс обнуляется при первой же ошибке"}}})(),{CheckModeItem:s}=(()=>{const{setIsCheckMode:e,isCheckMode:t,setIsOneLifeMode:n}=(0,a.useContext)(x.U);return{CheckModeItem:{name:"Проверка",onClick:(0,a.useCallback)((()=>{t||n(!1),e(!t)}),[t,e,n]),modeIsOn:t,setModeIsOn:e,hintText:"Слово не будут повторяться даже при допущении ошибки"}}})(),i=[n,r,s];return(0,d.jsx)(H,{items:i})}));B.displayName="TrainerModeSwitcher";const D=(0,a.memo)((e=>{let{words:t,theme:n}=e;const[r,s]=(0,a.useState)(null),[c,l]=(0,a.useState)(!1),{randomWord:u,updateRandomWord:m}=S(r,l,s),{totalTime:h,setIsIncorrect:f,isIncorrect:w,setIsErrorWork:T,setTotalTime:b}=(0,a.useContext)(x.U);(0,a.useEffect)((()=>{u||s(0)}),[u,r]);const{wordOnFail:g,wordOnSuccess:W}=R(r,l,s,f),C=(0,j.n)();(0,a.useEffect)((()=>{C.length&&null===r&&m()}),[r,C,m]);const{checkArrowsPress:I}=((e,t,n,r,s)=>{const{totalTime:i,isIncorrect:o,isErrorWork:c}=(0,a.useContext)(x.U),{showNewWord:d,waitRepeatedClickInFail:l}=R(e,n,t,r);return{checkArrowsPress:(t,n)=>{if(i)return;l&&o&&d(n.items,c,e);const r=document.querySelectorAll(".TrainerWord"),a=e=>{if("unions"!==n.type)if(s){const t=r[0===e?1:0];t&&t.click()}else r[e].click();else r[e].click()};M.L.matches?"ArrowUp"===t.key?a(0):"ArrowDown"===t.key&&a(1):"ArrowLeft"===t.key?a(0):"ArrowRight"===t.key&&a(1)}}})(r,s,l,f,c);(0,a.useEffect)((()=>(document.onkeydown=e=>I(e,t),()=>{document.onkeydown=null})),[I,t]);const{initializeWords:N}=v(t.items);return(0,a.useEffect)((()=>{const e=setTimeout((()=>{f(!1),T(!1),b(0),N(),clearTimeout(e)}),0)}),[N,T,f,b]),(0,d.jsx)(y.YW,{className:"JNyDWZu7",children:C.length>0&&(0,d.jsx)(d.Fragment,{children:h?(0,d.jsx)(k,{words:t,updateRandomWord:m,theme:n}):(0,d.jsxs)(d.Fragment,{children:["primary"===t.type&&(0,d.jsx)(i.s,{width:"100",children:(0,d.jsx)(p,{text:"Выбирайте ответ, а система будет предлагать новые слова или\n                    те, в которых были допущены ошибки. Когда вы перестанете их\n                    допускать, шкала полностью заполнится. Заполните шкалу\n                    несколько раз, сделайте работу над ошибками - и вы готовы.",textClassName:o})}),"unions"===t.type&&(0,d.jsx)(i.s,{width:"100",children:(0,d.jsx)(p,{text:"В этом тренажере под подчинительным союзом понимается любое\n                    средство подчинительной связи, т.е. союз, союзное слово,\n                    частица",textClassName:o})}),w&&(0,d.jsx)(i.s,{className:"Ts9_k9h3","data-testid":"Trainer__uncorrect",justify:"center",children:"Неверно"}),u&&(0,d.jsxs)(d.Fragment,{children:["primary"===t.type&&(0,d.jsx)(P,{randomWord:u,randomWordsIsReverse:c,wordOnFail:g,wordOnSuccess:W}),"unions"===t.type&&(0,d.jsx)(O,{randomWord:u,wordOnSuccess:W,wordOnFail:g})]}),(0,d.jsx)($.i,{}),(0,d.jsx)(B,{})]})})})}));D.displayName="TrainerInner";const q=(0,a.memo)((e=>{let{words:t,theme:n}=e;const[r,s]=(0,a.useState)(0),[i,o]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1),[m,h]=(0,a.useState)(!1),[f,p]=(0,a.useState)(!1),[y,j]=(0,a.useState)(0);return(0,d.jsx)(x.U.Provider,{value:{totalTime:r,setTotalTime:s,isIncorrect:i,setIsIncorrect:o,isErrorWork:c,setIsErrorWork:u,isOneLifeMode:m,setIsOneLifeMode:h,isCheckMode:f,setIsCheckMode:p,allAttemptsCount:y,setAllAttemptsCount:j},children:(0,d.jsx)(l,{removeAfterUnmount:!1,reducers:{Trainer:w.a3},children:(0,d.jsx)(D,{words:t,theme:n})})})}));q.displayName="TrainerPage"},1118:function(e,t,n){n.d(t,{$:function(){return d}});var r={};n.r(r),n.d(r,{Button:function(){return s},Button__big:function(){return i},Button__medium:function(){return o}});var s="Zcv0nPBe",i="tRD9g3We",o="XA0XHP5S",a=n(6540),c=n(4848);const d=(0,a.memo)((e=>{let{className:t,children:n,variant:i="medium",...o}=e;return(0,c.jsx)("button",{...o,className:`${s} ${r[`Button__${i}`]} ${t}`,children:n})}));d.displayName="Button"}}]);