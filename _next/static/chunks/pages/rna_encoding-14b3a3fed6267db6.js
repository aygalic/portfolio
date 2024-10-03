(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[124],{3003:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rna_encoding",function(){return n(9904)}])},6167:function(e,t,n){"use strict";n.d(t,{$:function(){return c}});var a=n(5893),i=n(1664),o=n.n(i),s=n(4062),r=n.n(s);function c(){return(0,a.jsx)("footer",{className:r().footer,children:(0,a.jsxs)("nav",{className:r().nav,children:[(0,a.jsx)(o(),{href:"https://github.com/aygalic",className:r().homeLink,children:"github"}),(0,a.jsx)(o(),{href:"https://www.linkedin.com/in/aygalic/",className:r().homeLink,children:"LinkedIn"})]})})}},1978:function(e,t,n){"use strict";n.d(t,{h:function(){return c}});var a=n(5893),i=n(1664),o=n.n(i),s=n(1026),r=n.n(s);function c(){return(0,a.jsx)("header",{className:r().header,children:(0,a.jsx)("nav",{className:r().nav,children:(0,a.jsx)(o(),{href:"/",className:r().homeLink,children:"Home"})})})}},9904:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(5893),i=n(9008),o=n.n(i);n(5675);var s=n(4609),r=n.n(s),c=n(1978),h=n(6167);function l(){return(0,a.jsxs)("div",{className:r().container,children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Encoding RNA data"}),(0,a.jsx)("link",{rel:"icon",href:"".concat("/portfolio","/favicon.ico")})]}),(0,a.jsx)(c.h,{}),(0,a.jsxs)("main",{className:r().main,children:[(0,a.jsx)("h1",{className:r().title,children:"Encoding RNA data."}),(0,a.jsx)("p",{className:r().description,children:"The evolution of the latent representation of BRCA data throughout the training procedure!"}),(0,a.jsx)("h2",{children:"Background"}),(0,a.jsx)("p",{className:r().text,children:"Transcriptomic (RNAseq) data is very high dimensional and difficult to deal with using classical statistical techniques. Autoencoder, a kind of neural network that focuses on reconstructing the input through a bottleneck have been of tremendous help tackling this issue. They enable us to work with smaller representations, enabling subsequent stratification, inference and visualizations."}),(0,a.jsx)("h2",{children:"Method"}),(0,a.jsx)("p",{className:r().text,children:"I implemented a highly modular auto encoder approach where different part can be swapped out, assessing the performance of multiple approaches. Such modules go from the type of layers we use (conventional multi layer perceptron (MLP), as well as convolutional neural network (CNN)) to the type of latent space we implement. The following approach were considered : No variational approach, Variational Autoencoder (VAE) and Vector-Quantized VAE (VQ-VAE)."}),(0,a.jsx)("h2",{children:"Results"}),(0,a.jsx)("iframe",{src:"https://aygalic.github.io/biosequence_encoding/pca_animation.html",title:"description",className:r().subframe}),(0,a.jsx)("p",{className:r().text,children:"Each point correspond to the patient representation through the encoder at different steps of the training process. This is achieved by training an auto encoder over RNAseq data from ~1200 patients provided openly by the TCGA project. At a given set of steps, we compute the PCA projection of the latent representation of the whole dataset and then put everything together in a nice smooth animation."}),(0,a.jsx)("h2",{children:"Going further"}),(0,a.jsxs)("p",{className:r().text,children:["Some automatic parameter search methods have been implemented. This was the goal of my thesis, where I assess the clustering capabilities on one dataset with a set of hyperparameter. I would then use those same hyper parameters on a different set, with similar processing steps, hoping to discover an underlying structure within the target dataset.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"You can find the code used to build this dynamic representation and more ",(0,a.jsx)("a",{href:"https://github.com/aygalic/biosequence_encoding/",children:"on my github"})," as well as its ",(0,a.jsx)("a",{href:"https://aygalic.github.io/biosequence_encoding/",children:"documentation"}),"."]})]}),(0,a.jsx)(h.$,{})]})}},4609:function(e){e.exports={container:"Home_container__d256j",title:"Home_title__hYX6j",description:"Home_description__uXNdx",text:"Home_text__FLP25",grid:"Home_grid__AVljO",card:"Home_card__E5spL",logo:"Home_logo__IOQAX",subframe:"Home_subframe__T0sZp",logoContainer:"Home_logoContainer__eSRxx",main:"Home_main__VkIEL"}},4062:function(e){e.exports={footer:"footer_footer__e_ilT",nav:"footer_nav__ea2xt",homeLink:"footer_homeLink__fI7wA"}},1026:function(e){e.exports={header:"header_header__OaHfl",nav:"header_nav__q1mtj",homeLink:"header_homeLink__zzaFd"}}},function(e){e.O(0,[247,888,774,179],function(){return e(e.s=3003)}),_N_E=e.O()}]);