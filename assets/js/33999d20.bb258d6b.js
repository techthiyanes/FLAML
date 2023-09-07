"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=o,h=p["".concat(u,".").concat(b)]||p[b]||m[b]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5720:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={},i="AutoGen - Automated Multi Agent Chat",l={unversionedId:"Examples/AutoGen-AgentChat",id:"Examples/AutoGen-AgentChat",isDocsHomePage:!1,title:"AutoGen - Automated Multi Agent Chat",description:"flaml.autogen offers conversable agents powered by LLM, tool or human, which can be used to perform tasks collectively via automated chat. This framwork allows tool use and human participance via multi-agent conversation.",source:"@site/docs/Examples/AutoGen-AgentChat.md",sourceDirName:"Examples",slug:"/Examples/AutoGen-AgentChat",permalink:"/FLAML/docs/Examples/AutoGen-AgentChat",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Examples/AutoGen-AgentChat.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Zero Shot AutoML",permalink:"/FLAML/docs/Use-Cases/Zero-Shot-AutoML"},next:{title:"AutoGen - Tune GPT Models",permalink:"/FLAML/docs/Examples/AutoGen-OpenAI"}},u=[],c={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"autogen---automated-multi-agent-chat"},"AutoGen - Automated Multi Agent Chat"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"flaml.autogen")," offers conversable agents powered by LLM, tool or human, which can be used to perform tasks collectively via automated chat. This framwork allows tool use and human participance via multi-agent conversation.\nPlease find documentation about this feature ",(0,o.kt)("a",{parentName:"p",href:"/docs/Use-Cases/Autogen#agents"},"here"),"."),(0,o.kt)("p",null,"Links to notebook examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_auto_feedback_from_code_execution.ipynb"},"Automated Task Solving with Code Generation, Execution & Debugging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_human_feedback.ipynb"},"Auto Code Generation, Execution, Debugging and Human Feedback")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_web_info.ipynb"},"Solve Tasks Requiring Web Info")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_function_call.ipynb"},"Use Provided Tools as Functions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_planning.ipynb"},"Automated Task Solving with Coding & Planning Agents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_two_users.ipynb"},"Automated Task Solving with GPT-4 + Multiple Human Users")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_chess.ipynb"},"Automated Chess Game Playing & Chitchatting by GPT-4 Agents")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_groupchat.ipynb"},"Automated Task Solving by Group Chat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_groupchat_research.ipynb"},"Automated Complex Task Solving by Group Chat")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_stream.ipynb"},"Automated Continual Learning from New Data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/FLAML/blob/main/notebook/autogen_agentchat_RetrieveChat.ipynb"},"Automated Code Generation and Question Answering with Retrieval Augemented Agents"))))}s.isMDXComponent=!0}}]);