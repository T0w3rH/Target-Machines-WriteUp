"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[2104],{7190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(5893),c=n(1151);const i={},r="Misc - 053",a={id:"HackMyVM/Challenges/Misc/053",title:"Misc - 053",description:"created by || 0xH3rshel",source:"@site/docs/HackMyVM/Challenges/Misc/053.md",sourceDirName:"HackMyVM/Challenges/Misc",slug:"/HackMyVM/Challenges/Misc/053",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Misc/053",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Challenges/Misc/053.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Misc - 043",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Misc/043"},next:{title:"Misc - 060",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Misc/060"}},l={},d=[{value:"flag",id:"flag",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"misc---053",children:"Misc - 053"}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsx)(t.p,{children:"created by || 0xH3rshel"}),(0,s.jsx)(t.p,{children:"\u23f2\ufe0f Release Date // 2022-05-15"}),(0,s.jsx)(t.p,{children:"\ud83d\udc80 Solvers // 27"}),(0,s.jsx)(t.p,{children:"\ud83e\udde9 Type // misc"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"9950b5c66f8518f8b012359dc7390589\nc03ec75734f58d87cddff35c57786429\ne757e84e31ef68a74d86d6b52478654c\nHMV{c761d942cf5fe4ba9ece382739afef4e} </pre>\n"})})]}),"\n",(0,s.jsx)(t.p,{children:"\u6839\u636e\u56fd\u5916\u54c8\u5e0c\u5f69\u8679\u8868\u6570\u636e\u5e93\u7684\u6570\u636e"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Hash"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Result"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"9950b5c66f8518f8b012359dc7390589"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"md5"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"4doggy1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"c03ec75734f58d87cddff35c57786429"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"md5"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"3mimis2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"e757e84e31ef68a74d86d6b52478654c"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"md5"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2wagon3"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"\u6839\u636e\u89c4\u5f8b\uff0c\u7f16\u5199\u7206\u7834\u811a\u672c"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'import itertools as its\nimport hashlib\nimport string\n\ns = "1{}4"\n\n\ndef scmmb_v1():\n    for a1 in string.ascii_lowercase:\n        for a2 in string.ascii_lowercase:\n            for a3 in string.ascii_lowercase:\n                for a4 in string.ascii_lowercase:\n                    for a5 in string.ascii_lowercase:\n                        tmp = s.format(a1 + a2 + a3 + a4 + a5)\n                        tmp_hash = hashlib.md5(tmp.encode()).hexdigest()\n                        if tmp_hash == "c761d942cf5fe4ba9ece382739afef4e":\n                            print(tmp, tmp_hash)\n                            return\n\ndef scmmb_v2():\n    dics = its.product(string.ascii_lowercase, repeat=5)\n    for word in dics:\n        tmp = s.format("".join(word))\n        tmp_hash = hashlib.md5(tmp.encode()).hexdigest()\n        if tmp_hash == "c761d942cf5fe4ba9ece382739afef4e":\n            print(tmp, tmp_hash)\n            return\n        \nscmmb_v2()\n\n# 1lordp4 c761d942cf5fe4ba9ece382739afef4e\n'})}),"\n",(0,s.jsx)(t.h2,{id:"flag",children:"flag"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"HMV{1lordp4}\n"})})]})}function o(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const c={},i=s.createContext(c);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);