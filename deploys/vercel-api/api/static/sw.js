if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const o=e=>i(e,f),d={module:{uri:f},exports:n,require:o};s[f]=Promise.all(c.map((e=>d[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-97c586e7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"1724077203578"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/ImgManage-77057876.css",revision:"32e213d1b244844e16700192b25a8c44"},{url:"css/index-020a9439.css",revision:"fc8de9c3a734debf72ad09906412b45a"},{url:"index.html",revision:"3dcc57d8975cfa19fe4d60f14eb28f8a"},{url:"js/ImgManage-51787f1b.js",revision:"59ff29763ac97d5c3bda2b3de7feeac4"},{url:"js/ImgManage-legacy-122a9e28.js",revision:"7fdbf15a5f6c81976fc437f29b1005fe"},{url:"js/index-6fefb80f.js",revision:"3b7f64307c4f772ddc79ebeb057979f4"},{url:"js/index-legacy-f9e9823f.js",revision:"e0c328ce92625a323d2a8cb947c1fde0"},{url:"js/polyfills-legacy-69e47d67.js",revision:"1eeb950467ecee546564ea11406088e4"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches()}));
