"use strict";(self.webpackChunksuncov_russian=self.webpackChunksuncov_russian||[]).push([[966],{"./src/widgets/Trainer/ui/UnionsTrainerWords/ui/UnionsTrainerWords.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:function(){return Primary},__namedExportsOrder:function(){return __namedExportsOrder}});var _UnionsTrainerWords__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/widgets/Trainer/ui/UnionsTrainerWords/ui/UnionsTrainerWords.tsx"),_model_static_wordsForUnionsTests__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/widgets/Trainer/model/static/wordsForUnionsTests.ts");const meta={title:"Widgets/Trainer/UnionsTrainerWords",component:_UnionsTrainerWords__WEBPACK_IMPORTED_MODULE_0__.f,parameters:{layout:"centered"}};__webpack_exports__.default=meta;const Primary={args:{randomWord:_model_static_wordsForUnionsTests__WEBPACK_IMPORTED_MODULE_1__.Q[0],wordOnSuccess:()=>{},wordOnFail:()=>{}}},__namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    randomWord: wordsForUnionsTests[0],\n    wordOnSuccess: () => {},\n    wordOnFail: () => {}\n  }\n}",...Primary.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Trainer/ui/UnionsTrainerWords/ui/UnionsTrainerWords.module.scss":function(module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{d:function(){return UnionsTrainerWords__word}});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-widgets-Trainer-ui-UnionsTrainerWords-ui-UnionsTrainerWords-module__UnionsTrainerWords__word--m6A8U{font-weight:900;font-size:36px;line-height:100%;color:var(--color-black);text-align:center}","",{version:3,sources:["webpack://./src/widgets/Trainer/ui/UnionsTrainerWords/ui/UnionsTrainerWords.module.scss"],names:[],mappings:"AACE,yGACE,eAAA,CACA,cAAA,CACA,gBAAA,CACA,wBAAA,CACA,iBAAA",sourcesContent:[".UnionsTrainerWords {\r\n  &__word {\r\n    font-weight: 900;\r\n    font-size: 36px;\r\n    line-height: 100%;\r\n    color: var(--color-black);\r\n    text-align: center;\r\n  }\r\n}\r\n"],sourceRoot:""}]);var UnionsTrainerWords__word="src-widgets-Trainer-ui-UnionsTrainerWords-ui-UnionsTrainerWords-module__UnionsTrainerWords__word--m6A8U";__webpack_exports__.A=___CSS_LOADER_EXPORT___},"./src/shared/const/global.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return tabletMediaQueryWidth},v:function(){return mobileMediaQueryWidth}}),window.matchMedia=window.matchMedia||function(){return{matches:!1,addListener:function(){},removeListener:function(){}}};const tabletMediaQueryWidth=window.matchMedia("(max-width: 1000px)"),mobileMediaQueryWidth=window.matchMedia("(max-width: 600px)")},"./src/shared/lib/store/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{y:function(){return buildSelector},p:function(){return buildSlice}});var react_redux=__webpack_require__("./node_modules/react-redux/dist/react-redux.mjs");const buildSelector=(selector,isShallowEqual)=>[(...args)=>{const ShallowEqual=isShallowEqual?react_redux.bN:void 0;return(0,react_redux.d4)((state=>selector(state,...args)),ShallowEqual)},selector];var redux_toolkit_modern=__webpack_require__("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs"),redux=__webpack_require__("./node_modules/redux/dist/redux.mjs"),react=__webpack_require__("./node_modules/react/index.js"),AppStore=__webpack_require__("./src/app/store/AppStore.ts");const buildSlice=options=>{const slice=(0,redux_toolkit_modern.Z0)(options);return{...slice,useActions:()=>{const dispatch=(0,AppStore.jL)();return(0,react.useMemo)((()=>(0,redux.zH)(slice.actions,dispatch)),[dispatch])}}}},"./src/shared/ui-kit/TrainerWord/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{M:function(){return _ui_TrainerWord__WEBPACK_IMPORTED_MODULE_0__.M}});var _ui_TrainerWord__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui-kit/TrainerWord/ui/TrainerWord.tsx")},"./src/widgets/Trainer/model/context/TrainerContext.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{H:function(){return TrainerContext}});const TrainerContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)({totalTime:0,setTotalTime:()=>{},isIncorrect:!1,setIsIncorrect:()=>{},isErrorWork:!1,setIsErrorWork:()=>{}})},"./src/widgets/Trainer/model/selectors/getTrainerWords/getTrainerWords.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{n:function(){return useWords}});var _shared_lib_store__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/lib/store/index.ts");const[useWords,getWords]=(0,_shared_lib_store__WEBPACK_IMPORTED_MODULE_0__.y)((state=>state.Trainer?state.Trainer.words:[]),!0)},"./src/widgets/Trainer/model/static/wordsForUnionsTests.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{F:function(){return unionTypes},Q:function(){return wordsForUnionsTests}});const unionTypes=["Сочинительный","Подчинительный"],wordsForUnionsTests=[{word:"И",unionType:"Сочинительный",id:0,trainerType:"unions"},{word:"ДА",unionType:"Сочинительный",id:1,trainerType:"unions"},{word:"НИ…НИ",unionType:"Сочинительный",id:2,trainerType:"unions"},{word:"ТОЖЕ",unionType:"Сочинительный",id:3,trainerType:"unions"},{word:"ТАКЖЕ",unionType:"Сочинительный",id:4,trainerType:"unions"},{word:"А",unionType:"Сочинительный",id:5,trainerType:"unions"},{word:"НО",unionType:"Сочинительный",id:6,trainerType:"unions"},{word:"ЗАТО",unionType:"Сочинительный",id:7,trainerType:"unions"},{word:"ОДНАКО",unionType:"Сочинительный",id:8,trainerType:"unions"},{word:"ИЛИ",unionType:"Сочинительный",id:9,trainerType:"unions"},{word:"ЛИБО",unionType:"Сочинительный",id:10,trainerType:"unions"},{word:"ТО…ТО",unionType:"Сочинительный",id:11,trainerType:"unions"},{word:"НЕ ТО…НЕ ТО",unionType:"Сочинительный",id:12,trainerType:"unions"},{word:"КАК",unionType:"Подчинительный",id:13,trainerType:"unions"},{word:"ЧТОБЫ",unionType:"Подчинительный",id:14,trainerType:"unions"},{word:"БУДТО",unionType:"Подчинительный",id:15,trainerType:"unions"},{word:"КОГДА",unionType:"Подчинительный",id:16,trainerType:"unions"},{word:"КАК ТОЛЬКО",unionType:"Подчинительный",id:17,trainerType:"unions"},{word:"МЕЖДУ ТЕМ",unionType:"Подчинительный",id:18,trainerType:"unions"},{word:"ЛИШЬ",unionType:"Подчинительный",id:19,trainerType:"unions"},{word:"ЕДВА",unionType:"Подчинительный",id:20,trainerType:"unions"},{word:"ПОКА",unionType:"Подчинительный",id:21,trainerType:"unions"},{word:"ИБО",unionType:"Подчинительный",id:22,trainerType:"unions"},{word:"ПОТОМУ",unionType:"Подчинительный",id:23,trainerType:"unions"},{word:"ТАК КАК",unionType:"Подчинительный",id:24,trainerType:"unions"},{word:"ЧТОБЫ",unionType:"Подчинительный",id:25,trainerType:"unions"},{word:"ЕСЛИ",unionType:"Подчинительный",id:26,trainerType:"unions"},{word:"ХОТЯ",unionType:"Подчинительный",id:27,trainerType:"unions"},{word:"ПУСТЬ",unionType:"Подчинительный",id:28,trainerType:"unions"},{word:"НЕСМОТРЯ НА ТО ЧТО",unionType:"Подчинительный",id:29,trainerType:"unions"},{word:"БУДТО",unionType:"Подчинительный",id:30,trainerType:"unions"},{word:"СЛОВНО",unionType:"Подчинительный",id:31,trainerType:"unions"},{word:"КОТОРЫЙ",unionType:"Подчинительный",id:32,trainerType:"unions"},{word:"ЛИ",unionType:"Подчинительный",id:33,trainerType:"unions"},{word:"КАКОЙ",unionType:"Подчинительный",id:34,trainerType:"unions"},{word:"ЧЕЙ",unionType:"Подчинительный",id:35,trainerType:"unions"},{word:"ГДЕ",unionType:"Подчинительный",id:36,trainerType:"unions"},{word:"КУДА",unionType:"Подчинительный",id:37,trainerType:"unions"},{word:"ОТКУДА",unionType:"Подчинительный",id:38,trainerType:"unions"},{word:"ПОЧЕМУ",unionType:"Подчинительный",id:39,trainerType:"unions"},{word:"ЗАЧЕМ",unionType:"Подчинительный",id:40,trainerType:"unions"},{word:"КТО",unionType:"Подчинительный",id:41,trainerType:"unions"},{word:"НАСКОЛЬКО",unionType:"Подчинительный",id:42,trainerType:"unions"},{word:"КАКОВ",unionType:"Подчинительный",id:43,trainerType:"unions"}]},"./src/widgets/Trainer/ui/UnionsTrainerWords/ui/UnionsTrainerWords.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:function(){return UnionsTrainerWords}});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),Stack=__webpack_require__("./src/shared/lib/Stack/index.ts"),global=__webpack_require__("./src/shared/const/global.ts"),TrainerWord=__webpack_require__("./src/shared/ui-kit/TrainerWord/index.ts"),wordsForUnionsTests=__webpack_require__("./src/widgets/Trainer/model/static/wordsForUnionsTests.ts"),getTrainerWords=__webpack_require__("./src/widgets/Trainer/model/selectors/getTrainerWords/getTrainerWords.ts"),TrainerContext=__webpack_require__("./src/widgets/Trainer/model/context/TrainerContext.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),UnionsTrainerWords_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/widgets/Trainer/ui/UnionsTrainerWords/ui/UnionsTrainerWords.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(UnionsTrainerWords_module.A,options),UnionsTrainerWords_module.A&&UnionsTrainerWords_module.A.locals&&UnionsTrainerWords_module.A.locals;const UnionsTrainerWords=(0,react.memo)((({randomWord:randomWord,wordOnSuccess:wordOnSuccess,wordOnFail:wordOnFail})=>{const storeWords=(0,getTrainerWords.n)(),{isIncorrect:isIncorrect,isErrorWork:isErrorWork}=(0,react.useContext)(TrainerContext.H);return(0,jsx_runtime.jsxs)(Stack.so,{width:"100",direction:"column",gap:"10",justify:"center",children:[(0,jsx_runtime.jsx)("span",{className:UnionsTrainerWords_module.d,"data-testid":"UnionsTrainerWords__word",children:randomWord.word}),(0,jsx_runtime.jsx)(Stack.so,{justify:"center",direction:global.L.matches?"column":"row",width:"100",children:wordsForUnionsTests.F.map(((unionType,index)=>(0,jsx_runtime.jsx)(TrainerWord.M,{dataTestId:`UnionsTrainerWords__${unionType}`,onClick:unionType===randomWord.unionType?()=>wordOnSuccess(storeWords,isErrorWork,randomWord.id):()=>wordOnFail(storeWords,isErrorWork,randomWord.id),type:isIncorrect&&unionType!==randomWord.unionType?"invalid":"default",style:0===index?{borderRightWidth:global.L.matches?3:0,borderBottomWidth:global.L.matches?0:3}:{},children:unionType},unionType)))})]})}));UnionsTrainerWords.displayName="UnionsTrainerWords";try{UnionsTrainerWords.displayName="UnionsTrainerWords",UnionsTrainerWords.__docgenInfo={description:"",displayName:"UnionsTrainerWords",props:{randomWord:{defaultValue:null,description:"",name:"randomWord",required:!0,type:{name:"UnionsWordsInterface"}},wordOnSuccess:{defaultValue:null,description:"",name:"wordOnSuccess",required:!0,type:{name:"wordActionsFunctionType"}},wordOnFail:{defaultValue:null,description:"",name:"wordOnFail",required:!0,type:{name:"wordActionsFunctionType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/widgets/Trainer/ui/UnionsTrainerWords/ui/UnionsTrainerWords.tsx#UnionsTrainerWords"]={docgenInfo:UnionsTrainerWords.__docgenInfo,name:"UnionsTrainerWords",path:"src/widgets/Trainer/ui/UnionsTrainerWords/ui/UnionsTrainerWords.tsx#UnionsTrainerWords"})}catch(__react_docgen_typescript_loader_error){}}}]);