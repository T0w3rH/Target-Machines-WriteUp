"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[1684],{6603:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=i(5893),r=i(1151);const s={},a="Prog - 047",c={id:"HackMyVM/Challenges/Prog/047",title:"Prog - 047",description:"created by || avijneyam",source:"@site/docs/HackMyVM/Challenges/Prog/047.md",sourceDirName:"HackMyVM/Challenges/Prog",slug:"/HackMyVM/Challenges/Prog/047",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Prog/047",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Challenges/Prog/047.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Prog - 015",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Prog/015"},next:{title:"Web",permalink:"/Target-Machines-WriteUp/docs/category/HackMyVM-Web"}},o={},l=[{value:"\u9898\u76ee\u4fe1\u606f",id:"\u9898\u76ee\u4fe1\u606f",level:2},{value:"\u9898\u76ee\u9644\u4ef6",id:"\u9898\u76ee\u9644\u4ef6",level:2},{value:"\u89e3\u51b3",id:"\u89e3\u51b3",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"prog---047",children:"Prog - 047"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"created by || avijneyam"}),(0,t.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2022-04-11"}),(0,t.jsx)(n.p,{children:"\ud83d\udc80 Solvers // 19"}),(0,t.jsx)(n.p,{children:"\ud83e\udde9 Type // prog"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u76ee\u4fe1\u606f",children:"\u9898\u76ee\u4fe1\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"magic_num_list = [12, 43, 36, 47, 21, 40, 23, 42, 14, 54, 10, 53, 14, 36, 32, 40, 28, 50, 22, 40]\nHint: Use python code for decoding the magic_num_list...\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u9898\u76ee\u9644\u4ef6",children:"\u9898\u76ee\u9644\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import string\n\ndef magic_encode(flag):\n    flag, magic_num_list = divmod(flag, 61)\n    return f"{string.digits[1:] + string.ascii_uppercase + string.ascii_lowercase}" [magic_num_list]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u89e3\u51b3",children:"\u89e3\u51b3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import string\n\nmagic_num_list = [12, 43, 36, 47, 21, 40, 23, 42, 14, 54, 10, 53, 14, 36, 32, 40, 28, 50, 22, 40]\n\ncharset = string.digits[1:] + string.ascii_uppercase + string.ascii_lowercase\n\nres = ""\n\nfor i in magic_num_list:\n    tmp = ord(charset[i])-1\n    res += chr(tmp)\n\nprint("HMV{" + res + "}")\n\n\ndef magic_encode(flag):\n    flag, magic_num_list = divmod(flag, 61)\n    return f"{string.digits[1:] + string.ascii_uppercase + string.ascii_lowercase}"[magic_num_list]\n\n# HMV{ChalLeNgEsArEaWeSoMe}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>a});var t=i(7294);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);