if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),t={module:{uri:o},exports:c,require:d};i[o]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-BunEKI37.css",revision:null},{url:"index.html",revision:"37ee9c647993e27c9c8d7dad84c6d73a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"./android-chrome-192x192.png",revision:"eea63b5637e1f13888467610e9803f6c"},{url:"./android-chrome-512x512.png",revision:"92bf0058f98ee4eef1a2d33276b7f057"},{url:"./apple-touch-icon.png",revision:"799b01e0fce53b70c4179ba18a47fa92"},{url:"./maskable_icon.png",revision:"ced3de443fcdbfd682d4a66dfc05a351"},{url:"manifest.webmanifest",revision:"ec29ae3a30ae3eb907af6650dc2595c7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
