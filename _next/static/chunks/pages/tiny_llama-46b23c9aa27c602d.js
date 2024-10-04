(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[340],{8294:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tiny_llama",function(){return n(5653)}])},6167:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var a=n(5893),i=n(1664),r=n.n(i),o=n(4062),s=n.n(o);function l(){return(0,a.jsx)("footer",{className:s().footer,children:(0,a.jsxs)("nav",{className:s().nav,children:[(0,a.jsx)(r(),{href:"https://github.com/aygalic",className:s().homeLink,children:"github"}),(0,a.jsx)(r(),{href:"https://www.linkedin.com/in/aygalic/",className:s().homeLink,children:"LinkedIn"})]})})}},1978:function(e,t,n){"use strict";n.d(t,{h:function(){return l}});var a=n(5893),i=n(1664),r=n.n(i),o=n(1026),s=n.n(o);function l(){return(0,a.jsx)("header",{className:s().header,children:(0,a.jsx)("nav",{className:s().nav,children:(0,a.jsx)(r(),{href:"/",className:s().homeLink,children:"Home"})})})}},5653:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(5893),i=n(9008),r=n.n(i);n(5675);var o=n(4609),s=n.n(o),l=n(1978),c=n(6167),d=n(7294);async function h(){let e=new URLSearchParams({origin:"*",action:"query",format:"json",list:"random",rnlimit:"1",rnnamespace:"0"});try{let t=await fetch("".concat("https://en.wikipedia.org/w/api.php","?").concat(e)),n=(await t.json()).query.random[0].title,a="https://en.wikipedia.org/wiki/".concat(encodeURIComponent(n));return{title:n,articleUrl:a}}catch(e){return console.error("Error fetching random Wikipedia article:",e),null}}async function m(e){let t=new URLSearchParams({origin:"*",action:"query",format:"json",titles:e,prop:"extracts",explaintext:"true",exsectionformat:"plain"});try{let e=await fetch("".concat("https://en.wikipedia.org/w/api.php","?").concat(t)),n=await e.json();return Object.values(n.query.pages)[0].extract}catch(e){return console.error("Error fetching article content:",e),null}}async function u(e){try{let t=await fetch("https://aygalic-tiny-llama.hf.space/llm_on_cpu",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({item:"Summarize the following article: ".concat(e)})}),n=await t.json();if(console.log("Full API response:",n),n)return n;return console.error("Unexpected API response structure:",n),null}catch(e){return console.error("Error getting LLM summary:",e),null}}function f(){let[e,t]=(0,d.useState)(""),[n,i]=(0,d.useState)(""),[o,f]=(0,d.useState)(""),[x,_]=(0,d.useState)(!0),[p,g]=(0,d.useState)(!1);(0,d.useEffect)(()=>{w()},[]);let w=async()=>{_(!0),f("");let e=await h();e&&(t(e.articleUrl),i(await m(e.title)||"Failed to load article content.")),_(!1)},j=async()=>{g(!0),console.log("Sending article content to LLM:",n.substring(0,500)+"...");let e=await u(n);console.log("Received summary:",e),f(e||"Failed to generate summary."),g(!1)};return(0,a.jsxs)("div",{className:s().container,children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Tiny Llama"}),(0,a.jsx)("link",{rel:"icon",href:"".concat("/portfolio","/favicon.ico")})]}),(0,a.jsx)(l.h,{}),(0,a.jsxs)("main",{className:s().main,children:[(0,a.jsx)("h1",{className:s().title,children:"LLM."}),(0,a.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-gray-100 p-4",children:(0,a.jsxs)("div",{className:"w-full max-w-4xl h-3/4 bg-white rounded-lg shadow-lg overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center p-4 bg-blue-500 text-white",children:[(0,a.jsx)("h2",{className:"text-xl font-bold",children:"Random Wikipedia Article"}),(0,a.jsx)("button",{onClick:w,className:"px-4 py-2 bg-white text-blue-500 rounded hover:bg-blue-100 transition-colors",children:"New Article"})]}),(0,a.jsx)("div",{className:"h-full",children:x?(0,a.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"})}):(0,a.jsx)("iframe",{src:e,className:"w-full h-full border-none",title:"Random Wikipedia Article"})})]})}),(0,a.jsxs)("div",{className:"mt-8 p-4 bg-white rounded-lg shadow-lg",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Article Content"}),(0,a.jsx)("div",{className:"max-h-96 overflow-y-auto mb-4",children:x?"Loading...":n}),(0,a.jsx)("button",{onClick:j,disabled:x||p,className:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors disabled:bg-gray-400",children:p?"Summarizing...":"Summarize with LLM"})]}),o&&(0,a.jsxs)("div",{className:"mt-8 p-4 bg-white rounded-lg shadow-lg",children:[(0,a.jsx)("h3",{className:"text-xl font-bold mb-4",children:"LLM Summary"}),(0,a.jsx)("div",{className:"max-h-96 overflow-y-auto",children:o})]})]}),(0,a.jsx)(c.$,{})]})}},4609:function(e){e.exports={container:"Home_container__d256j",title:"Home_title__hYX6j",description:"Home_description__uXNdx",text:"Home_text__FLP25",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX",subframe:"Home_subframe__T0sZp",logoContainer:"Home_logoContainer__eSRxx",main:"Home_main__VkIEL"}},4062:function(e){e.exports={footer:"footer_footer__e_ilT",nav:"footer_nav__ea2xt",homeLink:"footer_homeLink__fI7wA"}},1026:function(e){e.exports={header:"header_header__OaHfl",nav:"header_nav__q1mtj",homeLink:"header_homeLink__zzaFd"}}},function(e){e.O(0,[247,888,774,179],function(){return e(e.s=8294)}),_N_E=e.O()}]);