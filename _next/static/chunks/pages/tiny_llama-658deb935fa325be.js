(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{9730:(e,a,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/tiny_llama",function(){return i(676)}])},3803:(e,a,i)=>{"use strict";i.d(a,{w:()=>l});var t=i(4848),n=i(1106),r=i.n(n),s=i(8904),o=i.n(s);function l(){return(0,t.jsx)("footer",{className:o().footer,children:(0,t.jsxs)("nav",{className:o().nav,children:[(0,t.jsx)(r(),{href:"https://github.com/aygalic",className:o().homeLink,children:"github"}),(0,t.jsx)(r(),{href:"https://www.linkedin.com/in/aygalic/",className:o().homeLink,children:"LinkedIn"})]})})}},9881:(e,a,i)=>{"use strict";i.d(a,{Y:()=>l});var t=i(4848),n=i(1106),r=i.n(n),s=i(6046),o=i.n(s);function l(){return(0,t.jsx)("header",{className:o().header,children:(0,t.jsx)("nav",{className:o().nav,children:(0,t.jsx)(r(),{href:"/",className:o().homeLink,children:"Home"})})})}},676:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>_});var t=i(4848),n=i(3368),r=i.n(n);i(9965);var s=i(9680),o=i.n(s),l=i(9881),c=i(3803),d=i(6540);async function m(){let e=new URLSearchParams({origin:"*",action:"query",format:"json",list:"random",rnlimit:"1",rnnamespace:"0"});try{let a=await fetch("".concat("https://en.wikipedia.org/w/api.php","?").concat(e)),i=(await a.json()).query.random[0].title,t="https://en.wikipedia.org/wiki/".concat(encodeURIComponent(i));return{title:i,articleUrl:t}}catch(e){return console.error("Error fetching random Wikipedia article:",e),null}}async function h(e){let a=new URLSearchParams({origin:"*",action:"query",format:"json",titles:e,prop:"extracts",explaintext:"true",exsectionformat:"plain"});try{let e=await fetch("".concat("https://en.wikipedia.org/w/api.php","?").concat(a)),i=await e.json();return Object.values(i.query.pages)[0].extract}catch(e){return console.error("Error fetching article content:",e),null}}async function u(e){try{let a=await fetch("https://aygalic-tiny-llama.hf.space/llm_on_cpu",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:"Make a very concise summary of the following article: ".concat(e)})}),i=await a.json();if(console.log("Full API response:",i),i)return i;return console.error("Unexpected API response structure:",i),null}catch(e){return console.error("Error getting LLM summary:",e),null}}function _(){let[e,a]=(0,d.useState)(""),[i,n]=(0,d.useState)(""),[s,_]=(0,d.useState)(""),[p,f]=(0,d.useState)(!0),[g,x]=(0,d.useState)(!1),[j,y]=(0,d.useState)(""),[w,v]=(0,d.useState)(!1);(0,d.useEffect)(()=>{k()},[]);let k=async()=>{f(!0),_("");let e=await m();e&&(a(e.articleUrl),n(await h(e.title)||"Failed to load article content.")),f(!1)},b=async()=>{x(!0),console.log("Sending article content to LLM:",i.substring(0,500)+"...");let e=await u(i);console.log("Received summary:",e),_(e||"Failed to generate summary."),x(!1)},L=async()=>{v(!0),y("");try{let e=(await fetch("https://aygalic-tiny-llama.hf.space/llm_on_cpu_stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:"Make a very concise summary of the following article: ".concat(i)})})).body.getReader(),a=new TextDecoder;for(;;){let{value:i,done:t}=await e.read();if(t)break;for(let e of a.decode(i).split("\n\n"))if(e.startsWith("data: ")){let a=e.slice(6);y(e=>e+a)}}}catch(e){console.error("Error in streaming summary:",e)}finally{v(!1)}};return(0,t.jsxs)("div",{className:o().container,children:[(0,t.jsxs)(r(),{children:[(0,t.jsx)("title",{children:"Tiny Llama"}),(0,t.jsx)("link",{rel:"icon",href:"".concat("/portfolio","/favicon.ico")})]}),(0,t.jsx)(l.Y,{}),(0,t.jsxs)("main",{className:o().main,children:[(0,t.jsx)("h1",{className:o().title,children:"Minimal LLM implementation."}),"Built with Llama",(0,t.jsxs)("p",{className:o().text,children:["Using a quantized Llama 3.2 with 1B parameters. This demo simply summarize random wikipedia articles. In order to meet the requirement of file size for git-lfs, the model Has been quantized using ",(0,t.jsx)("a",{href:"https://github.com/ggerganov/llama.cpp",children:"llama.cpp"}),", reducing its size to ~700MB. The model was then deployed on ",(0,t.jsx)("a",{href:"https://huggingface.co/spaces/aygalic/tiny-llama",children:"Hugging Face Spaces"})," through github action.",(0,t.jsx)("br",{}),"Despite its relatively small size the performance are quite poor since the model is running (for free) on 2 vCPU cores.",(0,t.jsx)("br",{}),"You can find the code for the API and quantization script on ",(0,t.jsx)("a",{href:"https://github.com/aygalic/llama-summarizer",children:"github"})," as well as all the machinery for hugging face deployment."]}),(0,t.jsxs)("div",{className:o().subframe,children:[(0,t.jsx)("h2",{children:"Random Wikipedia Article"}),(0,t.jsx)("button",{onClick:k,children:"New Article"}),(0,t.jsx)("br",{}),p?(0,t.jsx)("div",{}):(0,t.jsx)("iframe",{src:e,className:o().wikipedia,title:"Random Wikipedia Article"})]}),(0,t.jsx)("div",{className:o().hidden,children:(0,t.jsxs)("div",{className:o().subframe,children:[(0,t.jsx)("h3",{children:"Article Content"}),(0,t.jsx)("div",{children:p?"Loading...":i})]})}),(0,t.jsx)("div",{className:o().hidden,children:(0,t.jsxs)("div",{className:o().subframe,children:[(0,t.jsx)("button",{onClick:b,disabled:p||g,children:g?"Summarizing...":"Summarize with LLM"}),s&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"LLM Summary"}),(0,t.jsx)("div",{children:s})]})]})}),(0,t.jsxs)("div",{className:o().subframe,children:[(0,t.jsx)("button",{onClick:L,disabled:p||w,children:w?"Generating Summary...":"Get Summary"}),j&&(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{children:"Streaming LLM Summary"}),(0,t.jsx)("div",{children:j})]})]})]}),(0,t.jsx)(c.w,{})]})}},9680:e=>{e.exports={container:"Home_container__d256j",title:"Home_title__hYX6j",description:"Home_description__uXNdx",text:"Home_text__FLP25",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX",subframe:"Home_subframe__T0sZp",subframe_tall:"Home_subframe_tall__4dp1X",wikipedia:"Home_wikipedia___7OOX",logoContainer:"Home_logoContainer__eSRxx",main:"Home_main__VkIEL",hidden:"Home_hidden__RZvqD"}},8904:e=>{e.exports={footer:"footer_footer__e_ilT",nav:"footer_nav__ea2xt",homeLink:"footer_homeLink__fI7wA"}},6046:e=>{e.exports={header:"header_header__OaHfl",nav:"header_nav__q1mtj",homeLink:"header_homeLink__zzaFd"}}},e=>{var a=a=>e(e.s=a);e.O(0,[121,636,593,792],()=>a(9730)),_N_E=e.O()}]);