"use strict";(self.webpackChunksuncov_russian=self.webpackChunksuncov_russian||[]).push([[154],{154:function(i,d,e){e.r(d),e.d(d,{MainPage:function(){return k}});var a=e(540),l=e(848);const n={start:"NpU5zSxW",center:"fwhZ26qV",end:"BzTvmOOl",between:"sdKBCb0K",evenly:"ifmMqurs",around:"JjehcUVD"},r={start:"DJpz5U2v",center:"A6VRoEyb",end:"C8QhaKIr",stretch:"iIbM4IAS"},s={row:"ccqhaMhR",column:"O0hp3Yaa",rowReverse:"wWHfhzLB",columnReverse:"YJrgZJEf"},t={0:"zvQgx1W5",3:"l31TX0Ch",5:"JkAD6mWD",10:"K8dfLg3u",15:"WJ50C52N",20:"WZDHPpmz",30:"WWHIOSeg",40:"vyHx1UMv",50:"Uk6Y7eDK"},v={10:"O8zbODc_",20:"wUVN1CIz",25:"NmsIITRT",30:"tof9BnPd",35:"PTMXnbCe",40:"vWPVL6uh",50:"ulpaIUX2",60:"WSGuU5SX",65:"nIr8ecZK",70:"ohsAKqfE",75:"WuHpY3qT",80:"w2XflOQV",90:"cXSzl314",100:"dkKMqJLr"},o=i=>{const{className:d,children:e,justify:a="start",align:o="center",direction:c="row",gap:u,maxHeight:m,innerRef:h,wrap:y,width:g,relative:f,...b}=i,T=["zqmTGtLG",d,n[a],r[o],s[c],u&&t[u],g&&v[g],m&&"GKMaN6YN",f&&"t9uSFyno",y&&"_7Wla1ri"];return(0,l.jsx)("div",{ref:h,className:T.join(" "),...b,children:e})};o.displayName="Flex";var c="QJimcu9V",u=e(468);const m=i=>{let{children:d,reducers:e,removeAfterUnmount:n=!0}=i;const r=(0,u.Pj)(),s=(0,u.wA)(),t=r.reducerManager.getMountedReducers();return(0,a.useEffect)((()=>(Object.entries(e).forEach((i=>{let[d,e]=i;t[d]||(r.reducerManager.add(d,e),s({type:`@INIT ${d} reducer`}))})),()=>{n&&Object.entries(e).forEach((i=>{let[d]=i;r.reducerManager.remove(d),s({type:`@DESTROY ${d} reducer`})}))})),[s,t,e,n,r.reducerManager]),(0,l.jsx)(l.Fragment,{children:d})};m.displayName="DynamicModuleLoader";var h=e(452),y=e(644),g=e(464);const f=(()=>{const i=(0,h.Z0)({name:"TestsWordsSlice",initialState:{words:[]},reducers:{setWords:(i,d)=>{let{payload:e}=d;i.words=e},changeWordProbability:(i,d)=>{let{payload:e}=d;i.words=i.words.filter((i=>(i.id===e.id&&(i.probability=e.probability),i)))},changeWordUncorrectTimes:(i,d)=>{let{payload:e}=d;i.words=i.words.filter((i=>(i.id===e.id&&(i.uncorrectTimes=e.uncorrectTimes),i)))},changeWordConsecutivelyTimes:(i,d)=>{let{payload:e}=d;i.words=i.words.filter((i=>(i.id===e.id&&(i.consecutivelyTimes=e.consecutivelyTimes),i)))},changeWordInProgressStatus:(i,d)=>{let{payload:e}=d;i.words=i.words.filter((i=>(i.id===e.id&&(i.inProgress=e.inProgress),i)))}}});return{...i,useActions:()=>{const d=(0,g.jL)();return(0,a.useMemo)((()=>(0,y.zH)(i.actions,d)),[d])}}})(),{actions:b,reducer:T,useActions:p}=f,j=(0,a.memo)((i=>{let{words:d}=i;const{setWords:e,changeWordProbability:n,changeWordUncorrectTimes:r,changeWordConsecutivelyTimes:s,changeWordInProgressStatus:t}=p(),[v,u]=(0,a.useState)(null);(0,a.useEffect)((()=>{for(const i of d)i.probability=1,i.uncorrectTimes=0,i.consecutivelyTimes=0,i.inProgress=!1;const i=setTimeout((()=>{e(d),clearTimeout(i)}),0)}),[e,d]);const m=x(),h=(0,a.useCallback)((i=>{let d;if(d=i?i.filter((i=>i.id!==v)):m.filter((i=>i.id!==v)),R((i=>!i)),0===d.length)return;const e=d.reduce(((i,d)=>i+d.probability),0)*Math.random();for(let i=0,a=0;;i++)if(a+=d[i].probability,a>e)return void u(d[i].id)}),[v,m]);(0,a.useEffect)((()=>{m.length&&null===v&&h()}),[v,m,h]);const[y,g]=(0,a.useState)(!1),{totalTime:f,setTotalTime:b}=(0,a.useContext)(M),T=(0,a.useMemo)((()=>m.filter((i=>i.uncorrectTimes>0)).sort(((i,d)=>d.uncorrectTimes-i.uncorrectTimes))),[m]),[j,w]=(0,a.useState)(!1),W=(0,a.useCallback)((()=>{w(!0);const i=T.map((i=>({...i,probability:1,uncorrectTimes:0,consecutivelyTimes:0,inProgress:!1})));e(i),b(0),h(i)}),[b,e,h,T]),[P,C]=(0,a.useState)(!1),k=(0,a.useCallback)((i=>{if(P)return;new Audio("sounds/FailSound.mp3").play(),g(!0),C(!0);const d=()=>{C(!1),g(!1);const e=i.find((i=>i.id===v));j||(n({probability:.2,id:e.id}),r({id:e.id,uncorrectTimes:e.uncorrectTimes+1})),s({id:e.id,consecutivelyTimes:0}),t({id:e.id,inProgress:!1}),h(),document.querySelector("body").style.pointerEvents="all",document.removeEventListener("click",d)},e=setTimeout((()=>{document.querySelector("body").style.pointerEvents="none",document.addEventListener("click",d),clearTimeout(e)}),0)}),[s,t,n,r,j,v,h,P]),E=(0,a.useCallback)((i=>{if(P)return;const d=i.find((i=>i.id===v));if(j){const i=d.consecutivelyTimes+1;s({id:d.id,consecutivelyTimes:i}),3===i&&(t({id:d.id,inProgress:!0}),n({probability:.05,id:d.id}))}else.2===d.probability?n({id:d.id,probability:.1}):.1===d.probability?n({id:d.id,probability:.05}):(n({id:d.id,probability:.01}),t({id:d.id,inProgress:!0}));h()}),[s,t,n,j,v,h,P]),[I,R]=(0,a.useState)(!1),D=(0,a.useMemo)((()=>m.find((i=>i.id===v))),[v,m]);return(0,l.jsx)(l.Fragment,{children:f?(0,l.jsxs)(o,{direction:"column",width:"100",maxHeight:!0,children:[(0,l.jsxs)("span",{children:["Тотальное время: ",Math.round(f/6e4)," минут и"," ",Math.round(f/1e3%60)," секунд"]}),T.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{children:"Неправильные слова:"}),(0,l.jsx)(o,{direction:"column",width:"100",children:T.map((i=>(0,l.jsxs)("span",{children:[i.valid," - ",i.uncorrectTimes," раз"]},i.id)))}),!j&&(0,l.jsx)("button",{onClick:W,type:"button",children:"Работа над ошибками"})]})]}):(0,l.jsxs)(l.Fragment,{children:[y&&(0,l.jsx)(o,{justify:"center",children:"Неверно"}),D&&(0,l.jsxs)(o,{width:"100",justify:"center",align:"center",direction:I?"rowReverse":"row",children:[(0,l.jsx)(o,{onClick:()=>E(m),className:c,justify:"center",children:D.valid},D.valid),(0,l.jsx)(o,{onClick:()=>k(m),className:c,justify:"center",children:D.invalid},D.invalid)]}),(0,l.jsx)(N,{}),(0,l.jsx)(S,{})]})})}));j.displayName="TestsWordsInner";const w=(0,a.memo)((i=>{let{words:d}=i;const[e,n]=(0,a.useState)(0);return(0,l.jsx)(M.Provider,{value:{totalTime:e,setTotalTime:n},children:(0,l.jsx)(m,{removeAfterUnmount:!1,reducers:{TestsWordsReducer:T},children:(0,l.jsx)(j,{words:d})})})}));w.displayName="TestsWords";const[x]=[function(){for(var i=arguments.length,d=new Array(i),e=0;e<i;e++)d[e]=arguments[e];const a=u.bN;return(0,u.d4)((i=>W(i,...d)),a)},W=i=>i.TestsWordsReducer?i.TestsWordsReducer.words:[]];var W,P={};const M=(0,a.createContext)({totalTime:0,setTotalTime:()=>{}}),N=(0,a.memo)((()=>{const i=x(),d=(0,a.useMemo)((()=>i.filter((i=>i.inProgress))),[i]),e=(0,a.useMemo)((()=>{const e=d.length/i.length;return isNaN(e)?0:e}),[i.length,d.length]),n=(0,a.useRef)(new Date);(0,a.useEffect)((()=>{n.current=new Date}),[]);const{setTotalTime:r}=(0,a.useContext)(M);return(0,a.useEffect)((()=>{if(1===e){const i=(new Date).getTime()-n.current.getTime();r(i)}}),[r,e]),(0,l.jsxs)(o,{gap:"5",className:P.TestsProgressBar,children:[(0,l.jsxs)("span",{children:[Math.round(100*e),"%"]}),(0,l.jsx)("progress",{value:e})]})}));N.displayName="TestsProgressBar";const S=(0,a.memo)((()=>{const[i,d]=(0,a.useState)(!1),e=x(),{changeWordProbability:n,changeWordConsecutivelyTimes:r,changeWordInProgressStatus:s}=p(),t=(0,a.useCallback)((()=>{for(const i of e)n({id:i.id,probability:1}),r({id:i.id,consecutivelyTimes:0}),s({id:i.id,inProgress:!1})}),[r,s,n,e]),v=(0,a.useCallback)((()=>{document.hidden&&t()}),[t]),c=(0,a.useCallback)((()=>{i?(d(!1),document.onvisibilitychange=null):(t(),d(!0),document.onvisibilitychange=v)}),[t,v,i]);return(0,l.jsx)(o,{justify:"end",width:"100",maxHeight:!0,children:(0,l.jsxs)(o,{onClick:c,justify:"center",className:"KNrlScBP",direction:"column",gap:"10",children:[(0,l.jsx)("span",{children:"Строгий режим"}),(0,l.jsx)("span",{children:i?"вкл":"выкл"})]})})}));S.displayName="StrictModeSwitcher";const C=[{valid:"аэропОрты",invalid:"аэропортЫ",id:0},{valid:"бАнты",invalid:"бантЫ",id:1},{valid:"бухгАлтеров",invalid:"бухгалтерОв",id:2},{valid:"вероисповЕдание",invalid:"вероисповедАние",id:3},{valid:"водопровОд",invalid:"водопрОвод",id:4},{valid:"дешевИзна",invalid:"дешевизнА",id:5},{valid:"диспансЕр",invalid:"диспАнсер",id:6},{valid:"досУг",invalid:"дОсуг",id:7},{valid:"еретИк",invalid:"ерЕтик",id:8},{valid:"жалюзИ",invalid:"жАлюзи",id:9},{valid:"Иксы",invalid:"иксЫ",id:10},{valid:"каталОг",invalid:"катАлог",id:11},{valid:"квартАл",invalid:"квАртал",id:12},{valid:"крАны",invalid:"кранЫ",id:13},{valid:"кремЕнь",invalid:"крЕмень",id:14},{valid:"кремнЯ",invalid:"крЕмня",id:15},{valid:"лЕкторов",invalid:"лекторОв",id:16},{valid:"лОктя",invalid:"локтЯ",id:17},{valid:"локтЕй",invalid:"лОктей",id:18},{valid:"намЕрение",invalid:"немерЕние",id:19},{valid:"нефтепровОд",invalid:"нефтепрОвод",id:20},{valid:"нОгтя",invalid:"ногтЯ",id:21},{valid:"Отрочество",invalid:"отрОчество",id:22},{valid:"партЕр",invalid:"пАртер",id:23},{valid:"придАное",invalid:"прИданое",id:24},{valid:"свЁкла",invalid:"свеклА",id:25},{valid:"сирОты",invalid:"сИроты",id:26},{valid:"сосредотОчение",invalid:"сосредоточЕние",id:27},{valid:"срЕдства",invalid:"средствА",id:28},{valid:"столЯр",invalid:"стОляр",id:29},{valid:"тОрты",invalid:"тортЫ",id:30},{valid:"тУфля",invalid:"туфлЯ",id:31},{valid:"цемЕнт",invalid:"цЕмент",id:32},{valid:"цепОчка",invalid:"цЕпочка",id:33},{valid:"шАрфы",invalid:"шарфЫ",id:34},{valid:"красИвее",invalid:"красивЕе",id:35},{valid:"кУхонный",invalid:"кухОнный",id:36},{valid:"мозаИчный",invalid:"мозАичный",id:37},{valid:"оптОвый",invalid:"Оптовый",id:38},{valid:"прозорлИвый",invalid:"прозОрливый",id:39},{valid:"слИвовый",invalid:"сливОвый",id:40},{valid:"бралА",invalid:"брАла",id:41},{valid:"воссоздалА",invalid:"воссоздАла",id:42},{valid:"влилАсь",invalid:"влИлась",id:43},{valid:"вручИт",invalid:"врУчит",id:44},{valid:"гналА",invalid:"гнАла",id:45},{valid:"дозвонИтся",invalid:"дозвОнится",id:46},{valid:"дозИровать",invalid:"дозировАть",id:47},{valid:"закУпорить",invalid:"закупОрить",id:48},{valid:"зАнял",invalid:"занЯл",id:49},{valid:"занялА",invalid:"зАняла",id:50},{valid:"зАняли",invalid:"занЯли",id:51},{valid:"заперлА",invalid:"зАперла",id:52},{valid:"запломбировАть",invalid:"запломбИровать",id:53},{valid:"защемИт",invalid:"защЕмит",id:54},{valid:"звонИт",invalid:"звОнит",id:55},{valid:"кАшлянуть",invalid:"кашлянУть",id:56},{valid:"клАла",invalid:"клалА",id:57},{valid:"крАлась",invalid:"кралАсь",id:58},{valid:"кровоточИть",invalid:"кровотОчить",id:59},{valid:"лгалА",invalid:"лгАла",id:60},{valid:"лилА",invalid:"лИла",id:61},{valid:"навралА",invalid:"наврАла",id:62},{valid:"наделИт",invalid:"надЕлит",id:63},{valid:"накренИтся",invalid:"накрЕнится",id:64},{valid:"облегчИть",invalid:"облЕгчить",id:65},{valid:"одолжИт",invalid:"одОлжит",id:66},{valid:"озлОбить",invalid:"озлобИть",id:67},{valid:"окружИт",invalid:"окрУжит",id:68},{valid:"опОшлить",invalid:"опошлИть",id:69},{valid:"освЕдомиться",invalid:"осведомИться",id:70},{valid:"откУпорить",invalid:"откупОрить",id:71},{valid:"пломбировАть",invalid:"пломбИровать",id:72},{valid:"послАла",invalid:"послалА",id:73},{valid:"прИбыл",invalid:"прибЫл",id:74},{valid:"сверлИт",invalid:"свЕрлит",id:75},{valid:"сорИт",invalid:"сОрит",id:76},{valid:"углубИть",invalid:"углУбить",id:77},{valid:"чЕрпать",invalid:"черпАть",id:78},{valid:"щемИт",invalid:"щЕмит",id:79},{valid:"щЁлкать",invalid:"щелкАть",id:80},{valid:"зАгнутый",invalid:"загнУтый",id:81},{valid:"занятА",invalid:"зАнята",id:82},{valid:"зАпертый",invalid:"запЁртый",id:83},{valid:"кормЯщий",invalid:"кОрмящий",id:84},{valid:"кровоточАщий",invalid:"кровотОчащий",id:85},{valid:"нажИвший",invalid:"нАживший",id:86},{valid:"нанЯвшийся",invalid:"нАнявшийся",id:87},{valid:"начАвший",invalid:"нАчавший",id:88},{valid:"нАчатый",invalid:"начАтый",id:89},{valid:"низведЁнный",invalid:"низвЕденный",id:90},{valid:"облегчЁнный",invalid:"облЕгченный",id:91},{valid:"ободрЁнный",invalid:"обОдренный",id:92},{valid:"обострЁнный",invalid:"обОстренный",id:93},{valid:"отключЁнный",invalid:"отклЮченный",id:94},{valid:"поделЁнный",invalid:"подЕленный",id:95},{valid:"понЯвший",invalid:"пОнявший",id:96},{valid:"принятА",invalid:"прИнята",id:97},{valid:"приручЁнный",invalid:"прирУченный",id:98},{valid:"прожИвший",invalid:"прОживший",id:99},{valid:"снятА",invalid:"снЯта",id:100},{valid:"сОгнутый",invalid:"согнУтый",id:101},{valid:"углублЁнный",invalid:"углУбленный",id:102},{valid:"закУпорив",invalid:"закупОрив",id:103},{valid:"начАв",invalid:"нАчав",id:104},{valid:"начАвшись",invalid:"нАчавшись",id:105},{valid:"поднЯв",invalid:"пОдняв",id:106},{valid:"прибЫв",invalid:"прИбыв",id:107},{valid:"дОверху",invalid:"довЕрху",id:108},{valid:"донЕльзя",invalid:"дОнельзя",id:109},{valid:"дОнизу",invalid:"донИзу",id:110},{valid:"дОсуха",invalid:"досУха",id:111},{valid:"красИвее",invalid:"красивЕе",id:112}],k=(0,a.memo)((()=>(0,l.jsx)("main",{className:"Page MainPage__main",children:(0,l.jsx)("div",{className:"padding",children:(0,l.jsx)(w,{words:C})})})));k.displayName="MainPage"}}]);