"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[3369],{6528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(5893),a=n(1151);const r={},c="Misc - 005",i={id:"HackMyVM/Challenges/Misc/005",title:"Misc - 005",description:"created by || bit",source:"@site/docs/HackMyVM/Challenges/Misc/005.md",sourceDirName:"HackMyVM/Challenges/Misc",slug:"/HackMyVM/Challenges/Misc/005",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Misc/005",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Challenges/Misc/005.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Misc",permalink:"/Target-Machines-WriteUp/docs/category/HackMyVM-Misc"},next:{title:"Misc - 008",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Misc/008"}},l={},d=[{value:"flag",id:"flag",level:2}];function o(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"misc---005",children:"Misc - 005"}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"created by || bit"}),(0,s.jsx)(t.p,{children:"\u23f2\ufe0f Release Date // 2022-03-04"}),(0,s.jsx)(t.p,{children:"\ud83d\udc80 Solvers // 369"}),(0,s.jsx)(t.p,{children:"\ud83e\udde9 Type // misc"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"Hey! I got the /etc/shadow file from the machine, but I don't know how to crack the root password.\nI think it is the flag in HMV{rootpassword} format.\n"})})]}),"\n",(0,s.jsx)(t.p,{children:"\u5f97\u5230\u7684 shadow \u6587\u4ef6\u5185\u5bb9"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"root:$6$xyz$ZGQOqL77wiYAgPxsNEv2Kz3INjzK4JdG29RbaHaW5lrkH8bA8W7kC3GK4CctGrFO7.E2va7kSgF3eQXNWYQee.:15758:0:99999:7:::\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u63d0\u53d6\u5176\u4e2d\u7684\u54c8\u5e0c\u503c"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"$6$xyz$ZGQOqL77wiYAgPxsNEv2Kz3INjzK4JdG29RbaHaW5lrkH8bA8W7kC3GK4CctGrFO7.E2va7kSgF3eQXNWYQee.\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u53ef\u4ee5\u786e\u5b9a\u54c8\u5e0c\u7c7b\u578b\u4e3a"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Hash-Mode"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Hash-Name"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"1800"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"sha512crypt $6$, SHA512 (Unix)"})]})})]}),"\n",(0,s.jsx)(t.p,{children:"\u4f7f\u7528 hashcat \u8fdb\u884c\u7206\u7834"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"PS D:\\_Tool\\hashcat-6.2.6> .\\hashcat.exe -d 2 -O -a 0 -m 1800 .\\hash.txt .\\dics\\rockyou.txt\nhashcat (v6.2.6) starting\n\nDictionary cache built:\n* Filename..: .\\dics\\rockyou.txt\n* Passwords.: 14344392\n* Bytes.....: 139921507\n* Keyspace..: 14344385\n* Runtime...: 1 sec\n\n$6$xyz$ZGQOqL77wiYAgPxsNEv2Kz3INjzK4JdG29RbaHaW5lrkH8bA8W7kC3GK4CctGrFO7.E2va7kSgF3eQXNWYQee.:reddragon\n\nSession..........: hashcat\nStatus...........: Cracked\nHash.Mode........: 1800 (sha512crypt $6$, SHA512 (Unix))\nHash.Target......: $6$xyz$ZGQOqL77wiYAgPxsNEv2Kz3INjzK4JdG29RbaHaW5lrk...WYQee.\nTime.Started.....: Fri Feb 02 22:14:22 2024 (0 secs)\nTime.Estimated...: Fri Feb 02 22:14:22 2024 (0 secs)\nKernel.Feature...: Optimized Kernel\nGuess.Base.......: File (.\\dics\\rockyou.txt)\nGuess.Queue......: 1/1 (100.00%)\nSpeed.#2.........:    87718 H/s (8.98ms) @ Accel:1024 Loops:128 Thr:32 Vec:1\nRecovered........: 1/1 (100.00%) Digests (total), 1/1 (100.00%) Digests (new)\nProgress.........: 32780/14344385 (0.23%)\nRejected.........: 12/32780 (0.04%)\nRestore.Point....: 0/14344385 (0.00%)\nRestore.Sub.#2...: Salt:0 Amplifier:0-1 Iteration:4992-5000\nCandidate.Engine.: Device Generator\nCandidates.#2....: 123456 -> disneyworld\nHardware.Mon.#2..: Temp: 51c Util: 99% Core:1845MHz Mem:6000MHz Bus:8\n"})}),"\n",(0,s.jsx)(t.h2,{id:"flag",children:"flag"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"HMV{reddragon}\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var s=n(7294);const a={},r=s.createContext(a);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);