if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,f)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const d=e=>i(e,a),n={module:{uri:a},exports:r,require:d};s[a]=Promise.all(c.map((e=>n[e]||d(e)))).then((e=>(f(...e),r)))}}define(["./workbox-d7e7cdfe"],(function(e){"use strict";e.setCacheNameDetails({prefix:"1659251374176"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/ImgManage-d774c3f4.css",revision:"ccffdb1ccb8f6d707c199e564da2de67"},{url:"css/index-cc5d51bd.css",revision:"f8fff0ea4ff8301a0739af822e1d3627"},{url:"css/Setting-b8339136.css",revision:"eedb5244d86750884cbb3a05dfc76a20"},{url:"index.html",revision:"9936a39a2f9327ea26feac942a7d2b7b"},{url:"js/CopyView-67797833.js",revision:"eb9a00b0f2efa2b385e7e7f93044a6a5"},{url:"js/CopyView-legacy-3e2c798e.js",revision:"e84b5aa6720938f91db7a4d8b0a4e348"},{url:"js/ImgManage-688dfa1d.js",revision:"545a361a495524c4a15fd02d33e47a1e"},{url:"js/ImgManage-legacy-56939e52.js",revision:"b7850b7fd87337b39c72e8c2b88cedc5"},{url:"js/index-ef4adf80.js",revision:"de6333945bb78fb0f48daf34533be5f1"},{url:"js/index-legacy-7a85cfe1.js",revision:"4b233972cfbdb97e4e460c69b97fc375"},{url:"js/polyfills-legacy-50793367.js",revision:"9163a37718f4f6a66e5aef3a52daada6"},{url:"js/Setting-49fcae95.js",revision:"59cb04b4242d746eb5d8e4c5689e0771"},{url:"js/Setting-legacy-bfb015d3.js",revision:"550e595a07cb91fcfb18806ee3679b80"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches()}));
