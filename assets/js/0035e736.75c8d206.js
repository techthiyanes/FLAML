"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7097:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),l=(n(7294),n(3905));const o={sidebar_label:"completion",title:"autogen.oai.completion"},r=void 0,i={unversionedId:"reference/autogen/oai/completion",id:"reference/autogen/oai/completion",isDocsHomePage:!1,title:"autogen.oai.completion",description:"get\\_key",source:"@site/docs/reference/autogen/oai/completion.md",sourceDirName:"reference/autogen/oai",slug:"/reference/autogen/oai/completion",permalink:"/FLAML/docs/reference/autogen/oai/completion",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/reference/autogen/oai/completion.md",tags:[],version:"current",frontMatter:{sidebar_label:"completion",title:"autogen.oai.completion"},sidebar:"referenceSideBar",next:{title:"code_utils",permalink:"/FLAML/docs/reference/autogen/code_utils"}},s=[{value:"get_key",id:"get_key",children:[],level:4},{value:"Completion Objects",id:"completion-objects",children:[{value:"set_cache",id:"set_cache",children:[],level:4},{value:"tune",id:"tune",children:[],level:4},{value:"create",id:"create",children:[],level:4},{value:"test",id:"test",children:[],level:4},{value:"cost",id:"cost",children:[],level:4},{value:"extract_text",id:"extract_text",children:[],level:4}],level:2},{value:"ChatCompletion Objects",id:"chatcompletion-objects",children:[],level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"get_key"},"get","_","key"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_key(config)\n")),(0,l.kt)("p",null,"Get a unique identifier of a configuration."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"config")," ",(0,l.kt)("em",{parentName:"li"},"dict or list")," - A configuration.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tuple")," - A unique identifier which can be used as a key for a dict.")),(0,l.kt)("h2",{id:"completion-objects"},"Completion Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Completion()\n")),(0,l.kt)("p",null,"A class for OpenAI completion API."),(0,l.kt)("p",null,"It also supports: ChatCompletion, Azure OpenAI API."),(0,l.kt)("h4",{id:"set_cache"},"set","_","cache"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef set_cache(cls, seed=41, cache_path=".cache")\n')),(0,l.kt)("p",null,"Set cache path."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"seed")," ",(0,l.kt)("em",{parentName:"li"},"int, Optional")," - The integer identifier for the pseudo seed.\nResults corresponding to different seeds will be cached in different places."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cache_path")," ",(0,l.kt)("em",{parentName:"li"},"str, Optional")," - The root path for the cache.\nThe complete cache path will be {cache_path}/{seed}.")),(0,l.kt)("h4",{id:"tune"},"tune"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef tune(cls, data, metric, mode, eval_func, log_file_name=None, inference_budget=None, optimization_budget=None, num_samples=1, logging_level=logging.WARNING, **config, ,)\n")),(0,l.kt)("p",null,"Tune the parameters for the OpenAI API call."),(0,l.kt)("p",null,"TODO: support parallel tuning with ray or spark.\nTODO: support agg_method as in test"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," ",(0,l.kt)("em",{parentName:"li"},"list")," - The list of data points."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"metric")," ",(0,l.kt)("em",{parentName:"li"},"str")," - The metric to optimize."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mode")," ",(0,l.kt)("em",{parentName:"li"},"str"),' - The optimization mode, "min" or "max.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"eval_func")," ",(0,l.kt)("em",{parentName:"li"},"Callable")," - The evaluation function for responses.\nThe function should take a list of responses and a data point as input,\nand return a dict of metrics. For example,")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def eval_func(responses, **data):\n    solution = data["solution"]\n    success_list = []\n    n = len(responses)\n    for i in range(n):\n        response = responses[i]\n        succeed = is_equiv_chain_of_thought(response, solution)\n        success_list.append(succeed)\n    return {\n        "expected_success": 1 - pow(1 - sum(success_list) / n, n),\n        "success": any(s for s in success_list),\n    }\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"log_file_name")," ",(0,l.kt)("em",{parentName:"li"},"str, optional")," - The log file."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"inference_budget")," ",(0,l.kt)("em",{parentName:"li"},"float, optional")," - The inference budget, dollar per instance."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"optimization_budget")," ",(0,l.kt)("em",{parentName:"li"},"float, optional")," - The optimization budget, dollar in total."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"num_samples")," ",(0,l.kt)("em",{parentName:"li"},"int, optional")," - The number of samples to evaluate.\n-1 means no hard restriction in the number of trials\nand the actual number is decided by optimization_budget. Defaults to 1."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"logging_level")," ",(0,l.kt)("em",{parentName:"li"},"optional")," - logging level. Defaults to logging.WARNING."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"**config")," ",(0,l.kt)("em",{parentName:"li"},"dict")," - The search space to update over the default search.\nFor prompt, please provide a string/Callable or a list of strings/Callables.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},'If prompt is provided for chat models, it will be converted to messages under role "user".'),(0,l.kt)("li",{parentName:"ul"},"Do not provide both prompt and messages for chat models, but provide either of them."),(0,l.kt)("li",{parentName:"ul"},"A string template will be used to generate a prompt for each data instance\nusing ",(0,l.kt)("inlineCode",{parentName:"li"},"prompt.format(**data)"),"."),(0,l.kt)("li",{parentName:"ul"},"A callable template will be used to generate a prompt for each data instance\nusing ",(0,l.kt)("inlineCode",{parentName:"li"},"prompt(data)"),'.\nFor stop, please provide a string, a list of strings, or a list of lists of strings.\nFor messages (chat models only), please provide a list of messages (for a single chat prefix)\nor a list of lists of messages (for multiple choices of chat prefix to choose from).\nEach message should be a dict with keys "role" and "content". The value of "content" can be a string/Callable template.')))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dict")," - The optimized hyperparameter setting."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tune.ExperimentAnalysis")," - The tuning results.")),(0,l.kt)("h4",{id:"create"},"create"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef create(cls, context: Optional[Dict] = None, use_cache: Optional[bool] = True, **config)\n")),(0,l.kt)("p",null,"Make a completion for a given context."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context")," ",(0,l.kt)("em",{parentName:"li"},"dict, Optional")," - The context to instantiate the prompt.\nIt needs to contain keys that are used by the prompt template.\nE.g., ",(0,l.kt)("inlineCode",{parentName:"li"},'prompt="Complete the following sentence: {prefix}"'),"."),(0,l.kt)("li",{parentName:"ul"},"`",(0,l.kt)("inlineCode",{parentName:"li"},'context={"prefix"'),' - "Today I feel"}`.\nThe actual prompt sent to OpenAI will be:\n"Complete the following sentence: Today I feel".'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"use_cache")," ",(0,l.kt)("em",{parentName:"li"},"bool, Optional")," - Whether to use cached responses."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"**config"),' - Configuration for the completion.\nBesides the parameters for the openai API call, it can also contain a seed (int) for the cache.\nThis is useful when implementing "controlled randomness" for the completion.\nAlso, the "prompt" or "messages" parameter can contain a template (str or Callable) which will be instantiated with the context.')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  Responses from OpenAI API."),(0,l.kt)("h4",{id:"test"},"test"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'@classmethod\ndef test(cls, data, config, eval_func=None, use_cache=True, agg_method="avg", return_responses_and_per_instance_result=False, logging_level=logging.WARNING)\n')),(0,l.kt)("p",null,"Evaluate the responses created with the config for the OpenAI API call."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data")," ",(0,l.kt)("em",{parentName:"li"},"list")," - The list of test data points."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"config")," ",(0,l.kt)("em",{parentName:"li"},"dict")," - Hyperparameter setting for the openai api call."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"eval_func")," ",(0,l.kt)("em",{parentName:"li"},"Callable")," - The evaluation function for responses per data instance.\nThe function should take a list of responses and a data point as input,\nand return a dict of metrics. You need to either provide a valid callable\neval_func; or do not provide one (set None) but call the test function after\ncalling the tune function in which a eval_func is provided.\nIn the latter case we will use the eval_func provided via tune function.\nDefaults to None.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def eval_func(responses, **data):\n    solution = data["solution"]\n    success_list = []\n    n = len(responses)\n    for i in range(n):\n        response = responses[i]\n        succeed = is_equiv_chain_of_thought(response, solution)\n        success_list.append(succeed)\n    return {\n        "expected_success": 1 - pow(1 - sum(success_list) / n, n),\n        "success": any(s for s in success_list),\n    }\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"use_cache")," ",(0,l.kt)("em",{parentName:"li"},"bool, Optional")," - Whether to use cached responses. Defaults to True."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"agg_method")," ",(0,l.kt)("em",{parentName:"li"},"str, Callable or a dict of Callable")," - Result aggregation method (across\nmultiple instances) for each of the metrics. Defaults to 'avg'.\nAn example agg_method in str:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"agg_method = 'median'\n")),(0,l.kt)("p",null,"  An example agg_method in a Callable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"agg_method = np.median\n")),(0,l.kt)("p",null,"  An example agg_method in a dict of Callable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"agg_method={'median_success': np.median, 'avg_success': np.mean}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"return_responses_and_per_instance_result")," ",(0,l.kt)("em",{parentName:"li"},"bool")," - Whether to also return responses\nand per instance results in addition to the aggregated results."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"logging_level")," ",(0,l.kt)("em",{parentName:"li"},"optional")," - logging level. Defaults to logging.WARNING.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  None when no valid eval_func is provided in either test or tune;\nOtherwise, a dict of aggregated results, responses and per instance results if ",(0,l.kt)("inlineCode",{parentName:"p"},"return_responses_and_per_instance_result")," is True;\nOtherwise, a dict of aggregated results (responses and per instance results are not returned)."),(0,l.kt)("h4",{id:"cost"},"cost"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef cost(cls, model: str, response: dict)\n")),(0,l.kt)("p",null,"Compute the cost of an API call."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"model")," ",(0,l.kt)("em",{parentName:"li"},"str")," - The model name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"response")," ",(0,l.kt)("em",{parentName:"li"},"dict")," - The response from OpenAI API.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  The cost in USD."),(0,l.kt)("h4",{id:"extract_text"},"extract","_","text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@classmethod\ndef extract_text(cls, response: dict) -> List[str]\n")),(0,l.kt)("p",null,"Extract the text from a completion or chat response."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"response")," ",(0,l.kt)("em",{parentName:"li"},"dict")," - The response from OpenAI API.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),":"),(0,l.kt)("p",null,"  A list of text in the responses."),(0,l.kt)("h2",{id:"chatcompletion-objects"},"ChatCompletion Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class ChatCompletion(Completion)\n")),(0,l.kt)("p",null,"A class for OpenAI API ChatCompletion."))}c.isMDXComponent=!0}}]);