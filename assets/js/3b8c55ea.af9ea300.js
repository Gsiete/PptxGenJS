(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),o=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=o(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||b[u]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var r=n(3),a=n(8),i=(n(0),n(106)),l={id:"installation",title:"Installation"},s={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Modern Applications",source:"@site/docs/installation.md",slug:"/installation",permalink:"/PptxGenJS/docs/installation",version:"current",lastUpdatedBy:"Brent Ely",lastUpdatedAt:1620018135,formattedLastUpdatedAt:"5/3/2021",sidebar:"docs",previous:{title:"Quick Start Guide",permalink:"/PptxGenJS/docs/quick-start"},next:{title:"Integration",permalink:"/PptxGenJS/docs/integration"}},p=[{value:"Modern Applications",id:"modern-applications",children:[{value:"Install with NPM",id:"install-with-npm",children:[]},{value:"Install with Yarn",id:"install-with-yarn",children:[]},{value:"Additional Builds",id:"additional-builds",children:[]}]},{value:"Browser-Based Applications",id:"browser-based-applications",children:[{value:"Using CDN",id:"using-cdn",children:[]},{value:"Download",id:"download",children:[]}]}],c={toc:p};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"modern-applications"},"Modern Applications"),Object(i.b)("h3",{id:"install-with-npm"},"Install with ",Object(i.b)("a",{parentName:"h3",href:"https://www.npmjs.com/package/pptxgenjs"},"NPM")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install pptxgenjs --save\n")),Object(i.b)("h3",{id:"install-with-yarn"},"Install with Yarn"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add pptxgenjs\n")),Object(i.b)("h3",{id:"additional-builds"},"Additional Builds"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"CommonJS: ",Object(i.b)("inlineCode",{parentName:"li"},"dist/pptxgen.cjs.js")),Object(i.b)("li",{parentName:"ul"},"ES Module: ",Object(i.b)("inlineCode",{parentName:"li"},"dist/pptxgen.es.js"))),Object(i.b)("h2",{id:"browser-based-applications"},"Browser-Based Applications"),Object(i.b)("h3",{id:"using-cdn"},"Using CDN"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/pptxgenjs"},"jsDelivr Home")),Object(i.b)("p",null,"Bundle: Modern Browsers and IE11"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.6.0/dist/pptxgen.bundle.js"><\/script>\n')),Object(i.b)("p",null,"Min files: Modern Browsers"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.6.0/libs/jszip.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/pptxgenjs@3.6.0/dist/pptxgen.min.js"><\/script>\n')),Object(i.b)("h3",{id:"download"},"Download"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/gitbrent/PptxGenJS/releases/latest"},"GitHub Latest Release")),Object(i.b)("p",null,"Bundle: Modern Browsers and IE11"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<script src="PptxGenJS/dist/pptxgen.bundle.js"><\/script>\n')),Object(i.b)("p",null,"Min files: Modern Browsers"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<script src="PptxGenJS/libs/jszip.min.js"><\/script>\n<script src="PptxGenJS/dist/pptxgen.min.js"><\/script>\n')))}o.isMDXComponent=!0}}]);