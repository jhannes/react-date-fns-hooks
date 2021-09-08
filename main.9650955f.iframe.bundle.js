(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{102:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FormatDistance})),__webpack_require__.d(__webpack_exports__,"b",(function(){return FormatDistanceStrict})),__webpack_require__.d(__webpack_exports__,"c",(function(){return FormatRelative}));__webpack_require__(836),__webpack_require__(203),__webpack_require__(839),__webpack_require__(13),__webpack_require__(7),__webpack_require__(77),__webpack_require__(840),__webpack_require__(5),__webpack_require__(8),__webpack_require__(19),__webpack_require__(14),__webpack_require__(10),__webpack_require__(17),__webpack_require__(16),__webpack_require__(6),__webpack_require__(27);var date_fns__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(295),date_fns__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(855),date_fns__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(853),date_fns__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(854),react__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(85);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var DateFnsContext=react__WEBPACK_IMPORTED_MODULE_20__.createContext({});function DateFnsProvider(_ref){var locale=_ref.locale,baseDate=_ref.baseDate,children=_ref.children;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(DateFnsContext.Provider,{value:{locale:locale,baseDate:baseDate},children:children})}function useDateFunction(date,calculation){var opts=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(react__WEBPACK_IMPORTED_MODULE_20__.useDebugValue)(date,(function(date){return new Date(date).toISOString()}));var context=Object(react__WEBPACK_IMPORTED_MODULE_20__.useContext)(DateFnsContext);function calculateValue(){return calculation(new Date(date),new Date(opts.baseDate||context.baseDate||new Date),opts.locale||context.locale)}function delay(date){var baseDate=opts.baseDate||context.baseDate||new Date,seconds=Math.abs(Object(date_fns__WEBPACK_IMPORTED_MODULE_16__.a)(new Date(date),new Date(baseDate)));return seconds<30?1e3:seconds<120?2e3:6e4}function scheduleTimer(){setValue(calculateValue()),timer.current=setTimeout(scheduleTimer,delay(date))}var _useState=Object(react__WEBPACK_IMPORTED_MODULE_20__.useState)((function(){return calculateValue()})),_useState2=_slicedToArray(_useState,2),value=_useState2[0],setValue=_useState2[1],timer=Object(react__WEBPACK_IMPORTED_MODULE_20__.useRef)();return Object(react__WEBPACK_IMPORTED_MODULE_20__.useEffect)((function(){if(!opts.baseDate&&!context.baseDate)return scheduleTimer(),function(){clearTimeout(timer.current)}}),[]),value}function useFormatDistance(date,options){return useDateFunction(date,(function(date,baseDate,locale){return Object(date_fns__WEBPACK_IMPORTED_MODULE_17__.a)(date,baseDate,Object.assign({},options,{locale:locale}))}))}function FormatDistance(_ref2){var date=_ref2.date,text=useFormatDistance(date,{locale:_ref2.locale,addSuffix:_ref2.addSuffix,includeSeconds:_ref2.includeSeconds});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("time",{dateTime:new Date(date).toString(),children:text})}function useFormatDistanceStrict(date,options){return useDateFunction(date,(function(date,baseDate,locale){return Object(date_fns__WEBPACK_IMPORTED_MODULE_18__.a)(date,baseDate,Object.assign({},options,{locale:locale}))}))}function FormatDistanceStrict(_ref3){var date=_ref3.date,text=useFormatDistanceStrict(date,{locale:_ref3.locale,addSuffix:_ref3.addSuffix,unit:_ref3.unit,roundingMethod:_ref3.roundingMethod});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("time",{dateTime:new Date(date).toString(),children:text})}function useFormatRelative(date,options){return useDateFunction(date,(function(date,baseDate,locale){return Object(date_fns__WEBPACK_IMPORTED_MODULE_19__.a)(date,baseDate,Object.assign({},options,{locale:locale}))}))}function FormatRelative(_ref4){var date=_ref4.date,text=useFormatRelative(date,{locale:_ref4.locale,weekStartsOn:_ref4.weekStartsOn});return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("time",{dateTime:new Date(date).toString(),children:text})}DateFnsProvider.displayName="DateFnsProvider",FormatDistance.displayName="FormatDistance",FormatDistanceStrict.displayName="FormatDistanceStrict",FormatRelative.displayName="FormatRelative";try{DateFnsProvider.displayName="DateFnsProvider",DateFnsProvider.__docgenInfo={description:"A React Context for date-fns functionality",displayName:"DateFnsProvider",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"Locale"}},baseDate:{defaultValue:null,description:"",name:"baseDate",required:!1,type:{name:"DateLike"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-date-fns-hooks.tsx#DateFnsProvider"]={docgenInfo:DateFnsProvider.__docgenInfo,name:"DateFnsProvider",path:"src/react-date-fns-hooks.tsx#DateFnsProvider"})}catch(__react_docgen_typescript_loader_error){}try{useDateFunction.displayName="useDateFunction",useDateFunction.__docgenInfo={description:"Performs the argument calculation periodically and returns the result as\nReact state. The frequency of the calculation depends on the difference\nbetween the `date` argument and the `baseDate` (default: current date).\nWhen the date is close to now, the `calculation` recalculates more\nfrequently. At most calls `calculation` about once per second. If\n`baseDate` is provided, the value is only calculated once and never update.",displayName:"useDateFunction",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-date-fns-hooks.tsx#useDateFunction"]={docgenInfo:useDateFunction.__docgenInfo,name:"useDateFunction",path:"src/react-date-fns-hooks.tsx#useDateFunction"})}catch(__react_docgen_typescript_loader_error){}try{useFormatDistance.displayName="useFormatDistance",useFormatDistance.__docgenInfo={description:"Calls the `formatDistance` function from date-fns periodically, updating\nthe returned value when needed",displayName:"useFormatDistance",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-date-fns-hooks.tsx#useFormatDistance"]={docgenInfo:useFormatDistance.__docgenInfo,name:"useFormatDistance",path:"src/react-date-fns-hooks.tsx#useFormatDistance"})}catch(__react_docgen_typescript_loader_error){}try{FormatDistance.displayName="FormatDistance",FormatDistance.__docgenInfo={description:"Returns a &lt;time&gt; component with the formatted distance to the specified date",displayName:"FormatDistance",props:{date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"DateLike"}},includeSeconds:{defaultValue:null,description:"",name:"includeSeconds",required:!1,type:{name:"boolean"}},addSuffix:{defaultValue:null,description:"",name:"addSuffix",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"Locale"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-date-fns-hooks.tsx#FormatDistance"]={docgenInfo:FormatDistance.__docgenInfo,name:"FormatDistance",path:"src/react-date-fns-hooks.tsx#FormatDistance"})}catch(__react_docgen_typescript_loader_error){}try{useFormatDistanceStrict.displayName="useFormatDistanceStrict",useFormatDistanceStrict.__docgenInfo={description:"Calls the `formatDistanceStrict` function from date-fns periodically, updating\nthe returned value when needed",displayName:"useFormatDistanceStrict",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-date-fns-hooks.tsx#useFormatDistanceStrict"]={docgenInfo:useFormatDistanceStrict.__docgenInfo,name:"useFormatDistanceStrict",path:"src/react-date-fns-hooks.tsx#useFormatDistanceStrict"})}catch(__react_docgen_typescript_loader_error){}try{FormatDistanceStrict.displayName="FormatDistanceStrict",FormatDistanceStrict.__docgenInfo={description:"Returns a &lt;time&gt; component with the strict formatted distance to the specified date",displayName:"FormatDistanceStrict",props:{date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"DateLike"}},addSuffix:{defaultValue:null,description:"",name:"addSuffix",required:!1,type:{name:"boolean"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"enum",value:[{value:'"second"'},{value:'"minute"'},{value:'"hour"'},{value:'"day"'},{value:'"month"'},{value:'"year"'}]}},roundingMethod:{defaultValue:null,description:"",name:"roundingMethod",required:!1,type:{name:"enum",value:[{value:'"floor"'},{value:'"ceil"'},{value:'"round"'}]}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"Locale"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-date-fns-hooks.tsx#FormatDistanceStrict"]={docgenInfo:FormatDistanceStrict.__docgenInfo,name:"FormatDistanceStrict",path:"src/react-date-fns-hooks.tsx#FormatDistanceStrict"})}catch(__react_docgen_typescript_loader_error){}try{useFormatRelative.displayName="useFormatRelative",useFormatRelative.__docgenInfo={description:"Calls the `formatRelative` function from date-fns periodically, updating\nthe returned value when needed",displayName:"useFormatRelative",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-date-fns-hooks.tsx#useFormatRelative"]={docgenInfo:useFormatRelative.__docgenInfo,name:"useFormatRelative",path:"src/react-date-fns-hooks.tsx#useFormatRelative"})}catch(__react_docgen_typescript_loader_error){}try{FormatRelative.displayName="FormatRelative",FormatRelative.__docgenInfo={description:"Returns a &lt;time&gt; component with the formatted relative to the specified date",displayName:"FormatRelative",props:{date:{defaultValue:null,description:"",name:"date",required:!0,type:{name:"DateLike"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"Locale"}},weekStartsOn:{defaultValue:null,description:"",name:"weekStartsOn",required:!1,type:{name:"enum",value:[{value:"0"},{value:"2"},{value:"1"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/react-date-fns-hooks.tsx#FormatRelative"]={docgenInfo:FormatRelative.__docgenInfo,name:"FormatRelative",path:"src/react-date-fns-hooks.tsx#FormatRelative"})}catch(__react_docgen_typescript_loader_error){}},475:function(module,exports,__webpack_require__){__webpack_require__(476),__webpack_require__(633),__webpack_require__(634),__webpack_require__(844),__webpack_require__(845),__webpack_require__(850),__webpack_require__(851),__webpack_require__(849),__webpack_require__(846),__webpack_require__(852),__webpack_require__(847),__webpack_require__(848),module.exports=__webpack_require__(832)},543:function(module,exports){},634:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(341)},832:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(341).configure)([__webpack_require__(833),__webpack_require__(834)],module,!1)}).call(this,__webpack_require__(197)(module))},833:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=833},834:function(module,exports,__webpack_require__){var map={"./stories/FormatDistance.stories.tsx":835,"./stories/FormatDistanceStrict.stories.tsx":842,"./stories/FormatRelative.stories.tsx":843};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=834},835:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Seconds",(function(){return Seconds})),__webpack_require__.d(__webpack_exports__,"Minutes",(function(){return Minutes})),__webpack_require__.d(__webpack_exports__,"Days",(function(){return Days})),__webpack_require__.d(__webpack_exports__,"Months",(function(){return Months}));__webpack_require__(13),__webpack_require__(203),__webpack_require__(289),__webpack_require__(0);var _react_date_fns_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(102),date_fns__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(74),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(85);__webpack_exports__.default={title:"FormatDistance",addSuffix:!0,component:_react_date_fns_hooks__WEBPACK_IMPORTED_MODULE_4__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_react_date_fns_hooks__WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({},args))};Template.displayName="Template";var date=new Date,Seconds=Template.bind({});Seconds.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{seconds:-10}),includeSeconds:!0,addSuffix:!0};var Minutes=Template.bind({});Minutes.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{minutes:-4}),includeSeconds:!0,addSuffix:!0};var Days=Template.bind({});Days.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{days:-4}),addSuffix:!0};var Months=Template.bind({});Months.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{months:-4,days:3}),addSuffix:!0},Seconds.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatDistance {...args} />\n)"}},Seconds.parameters),Minutes.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatDistance {...args} />\n)"}},Minutes.parameters),Days.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatDistance {...args} />\n)"}},Days.parameters),Months.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatDistance {...args} />\n)"}},Months.parameters)},842:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Seconds",(function(){return Seconds})),__webpack_require__.d(__webpack_exports__,"Minutes",(function(){return Minutes})),__webpack_require__.d(__webpack_exports__,"Days",(function(){return Days})),__webpack_require__.d(__webpack_exports__,"Months",(function(){return Months}));__webpack_require__(13),__webpack_require__(203),__webpack_require__(289),__webpack_require__(0);var _react_date_fns_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(102),date_fns__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(74),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(85);__webpack_exports__.default={title:"FormatDistanceStrict",addSuffix:!0,component:_react_date_fns_hooks__WEBPACK_IMPORTED_MODULE_4__.b};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_react_date_fns_hooks__WEBPACK_IMPORTED_MODULE_4__.b,Object.assign({},args))};Template.displayName="Template";var date=new Date,Seconds=Template.bind({});Seconds.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{seconds:-10}),unit:"second",roundingMethod:"floor",addSuffix:!0};var Minutes=Template.bind({});Minutes.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{minutes:-4}),unit:"minute",addSuffix:!0};var Days=Template.bind({});Days.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{days:-4}),unit:"day",addSuffix:!0};var Months=Template.bind({});Months.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{months:-4,days:3}),unit:"month",addSuffix:!0},Seconds.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatDistanceStrict {...args} />\n)"}},Seconds.parameters),Minutes.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatDistanceStrict {...args} />\n)"}},Minutes.parameters),Days.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatDistanceStrict {...args} />\n)"}},Days.parameters),Months.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatDistanceStrict {...args} />\n)"}},Months.parameters)},843:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Seconds",(function(){return Seconds})),__webpack_require__.d(__webpack_exports__,"Minutes",(function(){return Minutes})),__webpack_require__.d(__webpack_exports__,"Days",(function(){return Days})),__webpack_require__.d(__webpack_exports__,"Months",(function(){return Months}));__webpack_require__(13),__webpack_require__(203),__webpack_require__(289),__webpack_require__(0);var _react_date_fns_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(102),date_fns__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(74),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(85);__webpack_exports__.default={title:"FormatRelative",addSuffix:!0,component:_react_date_fns_hooks__WEBPACK_IMPORTED_MODULE_4__.c};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_react_date_fns_hooks__WEBPACK_IMPORTED_MODULE_4__.c,Object.assign({},args))};Template.displayName="Template";var date=new Date,Seconds=Template.bind({});Seconds.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{seconds:-10})};var Minutes=Template.bind({});Minutes.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{minutes:-4})};var Days=Template.bind({});Days.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{days:-4})};var Months=Template.bind({});Months.args={date:Object(date_fns__WEBPACK_IMPORTED_MODULE_5__.a)(date,{months:-4,days:3})},Seconds.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatRelative {...args} />\n)"}},Seconds.parameters),Minutes.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatRelative {...args} />\n)"}},Minutes.parameters),Days.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatRelative {...args} />\n)"}},Days.parameters),Months.parameters=Object.assign({storySource:{source:"(args) => (\n  <FormatRelative {...args} />\n)"}},Months.parameters)}},[[475,2,3]]]);