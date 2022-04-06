"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[41991],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),s=i,f=m["".concat(d,".").concat(s)]||m[s]||c[s]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70003:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(83117),i=n(80102),l=(n(67294),n(3905)),a=["components"],o={id:"molecule.model.BuiltInEditorTabDataType",title:"Interface: BuiltInEditorTabDataType",sidebar_label:"BuiltInEditorTabDataType",custom_edit_url:null},d=void 0,p={unversionedId:"api/interfaces/molecule.model.BuiltInEditorTabDataType",id:"api/interfaces/molecule.model.BuiltInEditorTabDataType",title:"Interface: BuiltInEditorTabDataType",description:"molecule.model.BuiltInEditorTabDataType",source:"@site/docs/api/interfaces/molecule.model.BuiltInEditorTabDataType.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/molecule.model.BuiltInEditorTabDataType",permalink:"/molecule/docs/next/api/interfaces/molecule.model.BuiltInEditorTabDataType",editUrl:null,tags:[],version:"current",frontMatter:{id:"molecule.model.BuiltInEditorTabDataType",title:"Interface: BuiltInEditorTabDataType",sidebar_label:"BuiltInEditorTabDataType",custom_edit_url:null},sidebar:"api",previous:{title:"ITreeProps",permalink:"/molecule/docs/next/api/interfaces/molecule.component.ITreeProps"},next:{title:"IActivityBar",permalink:"/molecule/docs/next/api/interfaces/molecule.model.IActivityBar"}},u=[{value:"Indexable",id:"indexable",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"language",id:"language",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"modified",id:"modified",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"path",id:"path",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"value",id:"value",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule"},"molecule"),".",(0,l.kt)("a",{parentName:"p",href:"../namespaces/molecule.model"},"model"),".BuiltInEditorTabDataType"),(0,l.kt)("h2",{id:"indexable"},"Indexable"),(0,l.kt)("p",null,"\u25aa ","[key: ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,l.kt)("inlineCode",{parentName:"p"},"any")),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"language"},"language"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"language"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/jianaijun/molecule/blob/05ad264/src/model/workbench/editor.ts#L23"},"model/workbench/editor.ts:23")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"modified"},"modified"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"modified"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/jianaijun/molecule/blob/05ad264/src/model/workbench/editor.ts#L26"},"model/workbench/editor.ts:26")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"path"},"path"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"path"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/jianaijun/molecule/blob/05ad264/src/model/workbench/editor.ts#L24"},"model/workbench/editor.ts:24")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"value"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/jianaijun/molecule/blob/05ad264/src/model/workbench/editor.ts#L25"},"model/workbench/editor.ts:25")))}m.isMDXComponent=!0}}]);