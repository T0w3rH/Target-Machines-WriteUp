"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[4595],{7656:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var a=t(5893),s=t(1151);const c={},i="Misc - 043",o={id:"HackMyVM/Challenges/Misc/043",title:"Misc - 043",description:"created by || eMVee",source:"@site/docs/HackMyVM/Challenges/Misc/043.md",sourceDirName:"HackMyVM/Challenges/Misc",slug:"/HackMyVM/Challenges/Misc/043",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Misc/043",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Challenges/Misc/043.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Misc - 041",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Misc/041"},next:{title:"Misc - 053",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Misc/053"}},r={},l=[{value:"flag",id:"flag",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"misc---043",children:"Misc - 043"}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"created by || eMVee"}),(0,a.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2023-12-19"}),(0,a.jsx)(n.p,{children:"\ud83d\udc80 Solvers // 12"}),(0,a.jsx)(n.p,{children:"\ud83e\udde9 Type // misc"}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"Capture the flag from this MS Excel File."})})]}),"\n",(0,a.jsx)(n.p,{children:"\u5c31\u662f\u4e00\u4e2a Excel \u7684 vba \u5b8f\uff0c\u5c06 xlsm \u6587\u4ef6\u4f5c\u4e3a zip \u538b\u7f29\u5305\u8fdb\u884c\u89e3\u538b\uff0c\u5f97\u5230"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"./xl/vbaProject.bin\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,a.jsx)(n.a,{href:"https://github.com/decalage2/oletools",children:"python-oletools"}),"\u8fdb\u884c\u89e3\u7801"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~/tmp]\n\u2514\u2500\u2500\u257c $olevba vbaProject.bin \nXLMMacroDeobfuscator: pywin32 is not installed (only is required if you want to use MS Excel)\nolevba 0.60.1 on Python 3.11.2 - http://decalage.info/python/oletools\n===============================================================================\n......\n-------------------------------------------------------------------------------\nVBA MACRO ThisWorkbook \nin file: vbaProject.bin - OLE stream: 'ThisWorkbook'\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \n(empty macro)\n-------------------------------------------------------------------------------\nVBA MACRO Blad1 \nin file: vbaProject.bin - OLE stream: 'Blad1'\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \n(empty macro)\n-------------------------------------------------------------------------------\nVBA MACRO Module1 \nin file: vbaProject.bin - OLE stream: 'Module1'\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - \nSub Flag()\nAttribute Flag.VB_ProcData.VB_Invoke_Func = \" \\n14\"\n'Here is the flag: HMV{b63ce4efbf0b4214a470a707d34bc3ba}\n    MsgBox \"This is not the flag\"\nEnd Sub\n+----------+--------------------+---------------------------------------------+\n|Type      |Keyword             |Description                                  |\n+----------+--------------------+---------------------------------------------+\n|Suspicious|Hex Strings         |Hex-encoded strings were detected, may be    |\n|          |                    |used to obfuscate strings (option --decode to|\n|          |                    |see all)                                     |\n+----------+--------------------+---------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.h2,{id:"flag",children:"flag"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"HMV{b63ce4efbf0b4214a470a707d34bc3ba}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(7294);const s={},c=a.createContext(s);function i(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);