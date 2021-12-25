"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2110],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3902:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],u={},l=void 0,s={unversionedId:"Examples/Integrate - AzureML",id:"Examples/Integrate - AzureML",isDocsHomePage:!1,title:"Integrate - AzureML",description:"FLAML can be used together with AzureML. On top of that, using mlflow and ray is easy too.",source:"@site/docs/Examples/Integrate - AzureML.md",sourceDirName:"Examples",slug:"/Examples/Integrate - AzureML",permalink:"/FLAML/docs/Examples/Integrate - AzureML",editUrl:"https://github.com/microsoft/FLAML/edit/main/website/docs/Examples/Integrate - AzureML.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"AutoML for XGBoost",permalink:"/FLAML/docs/Examples/AutoML-for-XGBoost"},next:{title:"Integrate - Scikit-learn Pipeline",permalink:"/FLAML/docs/Examples/Integrate - Scikit-learn Pipeline"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Enable mlflow in AzureML workspace",id:"enable-mlflow-in-azureml-workspace",children:[],level:3},{value:"Start an AutoML run",id:"start-an-automl-run",children:[],level:3},{value:"Use ray to distribute across a cluster",id:"use-ray-to-distribute-across-a-cluster",children:[{value:"Build a ray environment in AzureML",id:"build-a-ray-environment-in-azureml",children:[],level:4},{value:"Create a compute cluster with multiple nodes",id:"create-a-compute-cluster-with-multiple-nodes",children:[],level:4},{value:"Run distributed AutoML job",id:"run-distributed-automl-job",children:[],level:4},{value:"Run distributed tune job",id:"run-distributed-tune-job",children:[],level:4}],level:3}],c={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"FLAML can be used together with AzureML. On top of that, using mlflow and ray is easy too."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Install the ","[azureml]"," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "flaml[azureml]"\n')),(0,o.kt)("p",null,"Setup a AzureML workspace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from azureml.core import Workspace\n\nws = Workspace.create(name='myworkspace', subscription_id='<azure-subscription-id>',resource_group='myresourcegroup')\n")),(0,o.kt)("h3",{id:"enable-mlflow-in-azureml-workspace"},"Enable mlflow in AzureML workspace"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import mlflow\nfrom azureml.core import Workspace\n\nws = Workspace.from_config()\nmlflow.set_tracking_uri(ws.get_mlflow_tracking_uri())\n")),(0,o.kt)("h3",{id:"start-an-automl-run"},"Start an AutoML run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from flaml.data import load_openml_dataset\n\n# Download [Airlines dataset](https://www.openml.org/d/1169) from OpenML. The task is to predict whether a given flight will be delayed, given the information of the scheduled departure.\nX_train, X_test, y_train, y_test = load_openml_dataset(dataset_id=1169, data_dir="./")\n\nfrom flaml import AutoML\n\nautoml = AutoML()\nsettings = {\n    "time_budget": 60,  # total running time in seconds\n    "metric": "accuracy",  # metric to optimize\n    "task": "classification",  # task type  \n    "log_file_name": "airlines_experiment.log",  # flaml log file\n}\nmlflow.set_experiment("flaml")  # the experiment name in AzureML workspace\nwith mlflow.start_run() as run:  # create a mlflow run\n    automl.fit(X_train=X_train, y_train=y_train, **settings)\n')),(0,o.kt)("p",null,'The metrics in the run will be automatically logged in an experiment named "flaml" in your AzureML workspace.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/notebook/integrate_azureml.ipynb"},"Link to notebook")," | ",(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/microsoft/FLAML/blob/main/notebook/integrate_azureml.ipynb"},"Open in colab")),(0,o.kt)("h3",{id:"use-ray-to-distribute-across-a-cluster"},"Use ray to distribute across a cluster"),(0,o.kt)("p",null,"When you have a compute cluster in AzureML, you can distribute ",(0,o.kt)("inlineCode",{parentName:"p"},"flaml.AutoML")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"flaml.tune")," with ray."),(0,o.kt)("h4",{id:"build-a-ray-environment-in-azureml"},"Build a ray environment in AzureML"),(0,o.kt)("p",null,"Create a docker file such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/test/.Docker/Dockerfile-cpu"},".Docker/Dockerfile-cpu"),". Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"RUN pip install flaml[blendsearch,ray]")," is included in the docker file."),(0,o.kt)("p",null,"Then build a AzureML environment in the workspace ",(0,o.kt)("inlineCode",{parentName:"p"},"ws"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'ray_environment_name = "aml-ray-cpu"\nray_environment_dockerfile_path = "./Docker/Dockerfile-cpu"\n\n# Build CPU image for Ray\nray_cpu_env = Environment.from_dockerfile(name=ray_environment_name, dockerfile=ray_environment_dockerfile_path)\nray_cpu_env.register(workspace=ws)\nray_cpu_build_details = ray_cpu_env.build(workspace=ws)\n\nimport time\nwhile ray_cpu_build_details.status not in ["Succeeded", "Failed"]:\n    print(f"Awaiting completion of ray CPU environment build. Current status is: {ray_cpu_build_details.status}")\n    time.sleep(10)\n')),(0,o.kt)("p",null,"You only need to do this step once for one workspace."),(0,o.kt)("h4",{id:"create-a-compute-cluster-with-multiple-nodes"},"Create a compute cluster with multiple nodes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from azureml.core.compute import AmlCompute, ComputeTarget\n\ncompute_target_name = "cpucluster"\nnode_count = 2\n\n# This example uses CPU VM. For using GPU VM, set SKU to STANDARD_NC6\ncompute_target_size = "STANDARD_D2_V2"\n\nif compute_target_name in ws.compute_targets:\n    compute_target = ws.compute_targets[compute_target_name]\n    if compute_target and type(compute_target) is AmlCompute:\n        if compute_target.provisioning_state == "Succeeded":\n            print("Found compute target; using it:", compute_target_name)\n        else:\n            raise Exception(\n                "Found compute target but it is in state", compute_target.provisioning_state)\nelse:\n    print("creating a new compute target...")\n    provisioning_config = AmlCompute.provisioning_configuration(\n        vm_size=compute_target_size,\n        min_nodes=0,\n        max_nodes=node_count)\n\n    # Create the cluster\n    compute_target = ComputeTarget.create(ws, compute_target_name, provisioning_config)\n\n    # Can poll for a minimum number of nodes and for a specific timeout.\n    # If no min node count is provided it will use the scale settings for the cluster\n    compute_target.wait_for_completion(show_output=True, min_node_count=None, timeout_in_minutes=20)\n\n    # For a more detailed view of current AmlCompute status, use get_status()\n    print(compute_target.get_status().serialize())\n')),(0,o.kt)("p",null,'If the computer target "cpucluster" already exists, it will not be recreated.'),(0,o.kt)("h4",{id:"run-distributed-automl-job"},"Run distributed AutoML job"),(0,o.kt)("p",null,"Assuming you have an automl script like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/test/ray/distribute_automl.py"},"ray/distribute_automl.py"),". It uses ",(0,o.kt)("inlineCode",{parentName:"p"},'ray.init(address="auto")')," to initialize the cluster, and uses ",(0,o.kt)("inlineCode",{parentName:"p"},"n_concurrent_trials=k")," to inform ",(0,o.kt)("inlineCode",{parentName:"p"},"AutoML.fit()")," to perform k concurrent trials in parallel."),(0,o.kt)("p",null,"Submit an AzureML job as the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from azureml.core import Workspace, Experiment, ScriptRunConfig, Environment\n\ncommand = ["python distribute_automl.py"]\nray_environment_name = \'aml-ray-cpu\'\nenv = Environment.get(workspace=ws, name=ray_environment_name)\nconfig = ScriptRunConfig(\n    source_directory=\'ray/\',\n    command=command,\n    compute_target=compute_target,\n    environment=env,\n)\n\nconfig.run_config.node_count = 2\nconfig.run_config.environment_variables["_AZUREML_CR_START_RAY"] = "true"\nconfig.run_config.environment_variables["AZUREML_COMPUTE_USE_COMMON_RUNTIME"] = "true"\n\nexp = Experiment(ws, \'distribute-automl\')\nrun = exp.submit(config)\n\nprint(run.get_portal_url())  # link to ml.azure.com\nrun.wait_for_completion(show_output=True)\n')),(0,o.kt)("p",null,"The line\n",(0,o.kt)("inlineCode",{parentName:"p"},'config.run_config.environment_variables["_AZUREML_CR_START_RAY"] = "true"'),"\ntells AzureML to start ray on each node of the cluster."),(0,o.kt)("h4",{id:"run-distributed-tune-job"},"Run distributed tune job"),(0,o.kt)("p",null,"Prepare a script like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/main/test/ray/distribute_tune.py"},"ray/distribute_tune.py"),". Replace the command in the above eample with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'command = ["python distribute_tune.py"]\n')),(0,o.kt)("p",null,"Everything else is the same."))}m.isMDXComponent=!0}}]);