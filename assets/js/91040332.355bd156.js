"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[573],{90663:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(85893),s=t(11151);const a={},i="\u6e17\u900f\u6d4b\u8bd5\u5e38\u7528 poc",o={permalink:"/Target-Machines-WriteUp/blog/2024/01/01/Commonly Used PoCs in Penetration Testing",editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/blog/2024-01-01-Commonly Used PoCs in Penetration Testing/index.md",source:"@site/blog/2024-01-01-Commonly Used PoCs in Penetration Testing/index.md",title:"\u6e17\u900f\u6d4b\u8bd5\u5e38\u7528 poc",description:"\u4fe1\u606f\u641c\u96c6",date:"2024-01-01T00:00:00.000Z",formattedDate:"2024\u5e741\u67081\u65e5",tags:[],readingTime:.325,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"\u6587\u7ae0\u683c\u5f0f\u6307\u5357",permalink:"/Target-Machines-WriteUp/blog/Article Format Guide"}},c={authorsImageUrls:[]},l=[{value:"\u4fe1\u606f\u641c\u96c6",id:"\u4fe1\u606f\u641c\u96c6",level:2},{value:"nmap \u4fe1\u606f\u641c\u96c6",id:"nmap-\u4fe1\u606f\u641c\u96c6",level:3},{value:"\u63d0\u6743\u63a2\u6d4b",id:"\u63d0\u6743\u63a2\u6d4b",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u4fe1\u606f\u641c\u96c6",children:"\u4fe1\u606f\u641c\u96c6"}),"\n",(0,r.jsx)(n.h3,{id:"nmap-\u4fe1\u606f\u641c\u96c6",children:"nmap \u4fe1\u606f\u641c\u96c6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sudo nmap -A --min-rate=5000 -T4 -p- ip\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u63d0\u6743\u63a2\u6d4b",children:"\u63d0\u6743\u63a2\u6d4b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u5bfb\u627e\u7279\u6b8a\u7a0b\u5e8f\u80fd\u529b\n\ngetcap -r / 2>/dev/null\n\n# \u5bfb\u627e suid \u7279\u6b8a\u6587\u4ef6\n\nfind / -perm -u=s -type f 2>/dev/null\n\n## \u5217\u51fa sudo \u53ef\u6267\u884c\u8303\u56f4\n\nsudo -l\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);