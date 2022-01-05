"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3466],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=i,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return t?a.createElement(h,r(r({ref:n},m),{},{components:t})):a.createElement(h,r({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},38436:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var a=t(83117),i=t(80102),o=(t(67294),t(3905)),r=["components"],s={title:"Custom Workbench",sidebar_label:"Custom Workbench"},l=void 0,c={unversionedId:"advanced/customize-workbench",id:"advanced/customize-workbench",title:"Custom Workbench",description:"Molecule's default Workbench UI is a clone of VSCode. However, it often can't meet our needs in actual development scenarios.",source:"@site/docs/advanced/customize-workbench.md",sourceDirName:"advanced",slug:"/advanced/customize-workbench",permalink:"/molecule/docs/next/advanced/customize-workbench",editUrl:"https://github.com/DTStack/molecule/website/advanced/customize-workbench.md",tags:[],version:"current",frontMatter:{title:"Custom Workbench",sidebar_label:"Custom Workbench"},sidebar:"docs",previous:{title:"Icon",permalink:"/molecule/docs/next/guides/icons"},next:{title:"Contributing",permalink:"/molecule/docs/next/contributing"}},m=[{value:"Custom Workbench Example",id:"custom-workbench-example",children:[{value:"Restructuring Workbench",id:"restructuring-workbench",children:[],level:3},{value:"Custom MenuBar",id:"custom-menubar",children:[],level:3},{value:"Custom RightSideBar",id:"custom-rightsidebar",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],p={toc:m};function d(e){var n=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Molecule's default ",(0,o.kt)("strong",{parentName:"p"},"Workbench")," UI is a clone of ",(0,o.kt)("strong",{parentName:"p"},"VSCode"),". However, it often can't meet our needs in actual development scenarios."),(0,o.kt)("p",null,"In addition to some built-in atomic ",(0,o.kt)("a",{parentName:"p",href:"../api/namespaces/molecule.component"},"Components"),", Molecule also provides basic ",(0,o.kt)("strong",{parentName:"p"},"Workbench, SideBar, Editor, ActivityBar, MenuBar, Panel, StatusBar")," and other core ",(0,o.kt)("a",{parentName:"p",href:"../guides/extend-workbench"},(0,o.kt)("strong",{parentName:"a"},"UI components")),", so that developers can ",(0,o.kt)("strong",{parentName:"p"},"reassemble")," their own ",(0,o.kt)("strong",{parentName:"p"},"Workbench")," according to their needs."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All code demos in this part are based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," project in ",(0,o.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start"),"."))),(0,o.kt)("h2",{id:"custom-workbench-example"},"Custom Workbench Example"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Custom Workbench",src:t(91889).Z})),(0,o.kt)("p",null,"Molecule's Workbench has a ",(0,o.kt)("strong",{parentName:"p"},"VSCode layout")," by default. In the example above, we placed the ",(0,o.kt)("strong",{parentName:"p"},"MenuBar")," horizontally ",(0,o.kt)("strong",{parentName:"p"},"at the top")," position, and on the right side of the editor, we have customized a ",(0,o.kt)("strong",{parentName:"p"},"RightSideBar"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"At present, the top fixed layout for the ",(0,o.kt)("strong",{parentName:"p"},"MenuBar")," is integrated in Molecule. Besides, we will also integrate the ",(0,o.kt)("strong",{parentName:"p"},"right sidebar (RightSideBar)")," for Molecule in the future."))),(0,o.kt)("h3",{id:"restructuring-workbench"},"Restructuring Workbench"),(0,o.kt)("p",null,"First, open the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule"},"source code")," of Molecule, and find the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/workbench")," directory, then copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"workbench.tsx")," file to the ",(0,o.kt)("inlineCode",{parentName:"p"},"views")," or other directories of your project, and rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"myWorkbench.tsx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'<div className={workbenchFinalClassName}>\n    <Display visible={isMenuBarHorizontal}>\n        <MenuBarView mode={MenuBarMode.horizontal} />\n    </Display>\n    <div className={mainBenchClassName}>\n        <div className={compositeBarClassName}>\n            <Display visible={isMenuBarVertical}>\n                <MenuBarView mode={MenuBarMode.vertical} />\n            </Display>\n            <Display\n                visible={!activityBar.hidden}\n                className={displayActivityBarClassName}\n            >\n                <ActivityBarView />\n            </Display>\n        </div>\n        <SplitPane\n            split="vertical"\n            primary="first"\n            allowResize={true}\n            onChange={onPaneSizeChange as any}\n        >\n            <Pane\n                minSize="170px"\n                initialSize={splitPanePos[0]}\n                maxSize="80%"\n                className={sidebar.hidden ? \'hidden\' : \'\'}\n            >\n                <SidebarView />\n            </Pane>\n            <SplitPane\n                primary="first"\n                split="horizontal"\n                allowResize={true}\n                // react-split-pane onChange: (newSizes: [size, ratio]) => void\uff1b\n                onChange={onHorizontalPaneSizeChange as any}\n            >\n                {getContent(!!panel.panelMaximized, !!panel.hidden)}\n            </SplitPane>\n        </SplitPane>\n    </div>\n</div>\n')),(0,o.kt)("p",null,"In the code, the ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuBarView")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"horizontal")," mode and ",(0,o.kt)("inlineCode",{parentName:"p"},"vertical")," mode are placed in different positions. The ",(0,o.kt)("inlineCode",{parentName:"p"},"SplitPane")," component includes ",(0,o.kt)("inlineCode",{parentName:"p"},"SidebarView")," by default, as well as the ",(0,o.kt)("strong",{parentName:"p"},"Editor")," and ",(0,o.kt)("strong",{parentName:"p"},"Panel")," on the right, but does not include the ",(0,o.kt)("strong",{parentName:"p"},"RightSideBar"),"."),(0,o.kt)("p",null,"The specific transformation is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/views/myWorkbench.tsx"',title:'"/src/views/myWorkbench.tsx"'},'<div className={workbenchClassName}>\n    {!menuBar.hidden && <MyMenuBarView />}\n    <div className={mainBenchClassName}>\n        <div className={compositeBarClassName}>\n            {!activityBar.hidden && <ActivityBarView />}\n        </div>\n        <SplitPane\n            split="vertical"\n            primary="first"\n            allowResize={true}\n            onChange={onPaneSizeChange as any}\n        >\n            <Pane\n                minSize="170px"\n                initialSize={splitPanePos[0]}\n                maxSize="80%"\n                className={sidebar.hidden && \'hidden\'}\n            >\n                <SidebarView />\n            </Pane>\n            <SplitPane\n                primary="first"\n                split="horizontal"\n                allowResize={true}\n                // react-split-pane onChange: (newSizes: [size, ratio]) => void\uff1b\n                onChange={onHorizontalPaneSizeChange as any}\n            >\n                {getContent(!!panel.panelMaximized, !!panel.hidden)}\n            </SplitPane>\n            <Pane\n                minSize="40px"\n                initialSize="240px"\n                maxSize="40%"\n                className={\'rightSidebar\'}\n            >\n                <Sidebar current={MySidePane.id} panes={[MySidePane]} />\n            </Pane>\n        </SplitPane>\n    </div>\n</div>\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The above code is only part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"myWorkbench.tsx")," file, the complete code can refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo/src/views/myWorkbench.tsx"},"molecule-demo"),"."))),(0,o.kt)("p",null,"We removed the MenuBar in the ",(0,o.kt)("inlineCode",{parentName:"p"},"vertical")," mode, and directly rendered the custom ",(0,o.kt)("inlineCode",{parentName:"p"},"MyMenuBarView")," component based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"menuBar.hidden"),". A new panel with a ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"rightSidebar")," is added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"SplitPane")," component, which uses a built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Sidebar")," component, and a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"MySidePane")," component is used in this ",(0,o.kt)("inlineCode",{parentName:"p"},"Sidebar")," component."),(0,o.kt)("h3",{id:"custom-menubar"},"Custom MenuBar"),(0,o.kt)("p",null,"In the picture above, the MenuBar contains a custom ",(0,o.kt)("strong",{parentName:"p"},"Logo")," element, and the MenuBar uses a ",(0,o.kt)("strong",{parentName:"p"},"Horizontal")," layout. Like Workbench, we copy the default ",(0,o.kt)("inlineCode",{parentName:"p"},"menuBar.tsx")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"src/workbench/menuBar")," and rename it to ",(0,o.kt)("inlineCode",{parentName:"p"},"myMenuBar.tsx"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/views/myMenuBar/index.tsx"',title:'"/src/views/myMenuBar/index.tsx"'},'<div className="myMenuBar">\n    <Logo alt="logo" src="logo@1x.png" />\n    <Menu\n        role="menu"\n        mode={MenuMode.Horizontal}\n        trigger="click"\n        onClick={handleClick}\n        style={{ width: \'100%\' }}\n        data={addKeybindingForData(data)}\n    />\n</div>\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Logo")," component is added to the code, and the original ",(0,o.kt)("a",{parentName:"p",href:"../api/namespaces/molecule.component#dropdown"},"DropDown")," is replaced with ",(0,o.kt)("a",{parentName:"p",href:"../api/namespaces/molecule.component#menu"},"Menu")," Components."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The custom ",(0,o.kt)("strong",{parentName:"p"},"Logo")," and ",(0,o.kt)("strong",{parentName:"p"},"Horizontal")," layout functions of the above MenuBar are currently built-in. For details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"../guides/extend-workbench#menubar"},"MenuBar")))),(0,o.kt)("h3",{id:"custom-rightsidebar"},"Custom RightSideBar"),(0,o.kt)("p",null,"Slightly different from ",(0,o.kt)("inlineCode",{parentName:"p"},"MenuBar"),", because the built-in ",(0,o.kt)("a",{parentName:"p",href:"../api/namespaces/molecule#sidebar-1"},"Sidebar")," component is reused, here we only need to pass in ",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.ISidebarPane"},"ISidebarPane")," type components:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/views/mySidePane.tsx"',title:'"/src/views/mySidePane.tsx"'},"import React from 'react';\nimport molecule from '@dtinsight/molecule';\nimport { Header, Content } from '@dtinsight/molecule/esm/workbench/sidebar';\nimport { IActionBarItemProps } from '@dtinsight/molecule/esm/components';\nimport { localize } from '@dtinsight/molecule/esm/i18n/localize';\nimport { ISidebarPane } from '@dtinsight/molecule/esm/model';\n\nconst Toolbar = molecule.component.Toolbar;\n\nexport function MySidePaneView() {\n    const renderHeaderToolbar = React.useCallback((): IActionBarItemProps[] => {\n        return [\n            {\n                icon: 'editor-layout',\n                id: 'tools',\n                title: 'Layout the right SidePane',\n            },\n        ];\n    }, []);\n\n    return (\n        <div className={'mySidePane'}>\n            <Header\n                title={localize('demo.rightSidebar.title', 'Tools')}\n                toolbar={<Toolbar data={renderHeaderToolbar()} />}\n            />\n            <Content>\n                <p style={{ textAlign: 'center' }}>Right Side Pane</p>\n            </Content>\n        </div>\n    );\n}\n\nexport const MySidePane: ISidebarPane = {\n    id: 'mySidePane',\n    title: 'Tools',\n    render: () => {\n        return <MySidePaneView />;\n    },\n};\n")),(0,o.kt)("p",null,"After completing these operations, you can see the layout shown above in the interface. For complete example, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In the above example, a lot of Molecule's ",(0,o.kt)("strong",{parentName:"p"},"built-in")," UI components are used to implement customization. However, using built-in ",(0,o.kt)("a",{parentName:"p",href:"../api/namespaces/molecule.component"},"components")," has a certain start-up cost and requires developers to have a better understanding of the built-in UI components. We will continue to optimize the ",(0,o.kt)("strong",{parentName:"p"},"documentation")," and ",(0,o.kt)("strong",{parentName:"p"},"API")," in subsequent versions to reduce the cost of getting started and provide as many ",(0,o.kt)("strong",{parentName:"p"},"examples")," as possible."))}d.isMDXComponent=!0},91889:function(e,n,t){n.Z=t.p+"assets/images/custom-workbench-3158ab2654f9960571763f9e7106cb45.png"}}]);