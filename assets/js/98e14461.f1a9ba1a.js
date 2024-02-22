"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[5239],{6247:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(5893),i=n(1151);const r={},s="Stego - 064",a={id:"HackMyVM/Challenges/Stego/064",title:"Stego - 064",description:"created by || rpj7",source:"@site/docs/HackMyVM/Challenges/Stego/064.md",sourceDirName:"HackMyVM/Challenges/Stego",slug:"/HackMyVM/Challenges/Stego/064",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Stego/064",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Challenges/Stego/064.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Stego - 063",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Stego/063"},next:{title:"Prog",permalink:"/Target-Machines-WriteUp/docs/category/prog-1"}},l={},c=[{value:"flag",id:"flag",level:2}];function d(A){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...A.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"stego---064",children:"Stego - 064"}),"\n",(0,t.jsxs)(e.admonition,{type:"note",children:[(0,t.jsx)(e.p,{children:"created by || rpj7"}),(0,t.jsx)(e.p,{children:"\u23f2\ufe0f Release Date // 2024-01-24"}),(0,t.jsx)(e.p,{children:"\ud83d\udc80 Solvers // 3"}),(0,t.jsx)(e.p,{children:"\ud83e\udde9 Type // stego"}),(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"Flag inside the file."})})]}),"\n",(0,t.jsx)(e.p,{children:"\u5f97\u5230\u7684\u539f\u56fe\u4e3a\uff1a"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img raw",src:n(4208).Z+"",width:"680",height:"389"})}),"\n",(0,t.jsx)(e.p,{children:"\u7ed9\u51fa\u7684\u4ee3\u7801\u4e3a\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"from PIL import Image\n\nim = Image.open('challenge.png')\npixelMap = im.load()\nimg = Image.new( im.mode, im.size)\npixelsNew = img.load()\n\nfor i in range(img.size[0]):\n    for j in range(img.size[1]):\n        RGB = im.getpixel((i,j))\n        R,G,B = RGB\n        #\n\n        #\n        pixelsNew[i,j] = (R,G,B)\nim.close()\n\nimg.show()\nimg.save(\"flag.png\") \nimg.close()\n\n# Can you find the flag hidden in the image?\n# may need to 'pip3 install pillow' if not installed\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6839\u636e\u56fe\u7247\u7684\u4fe1\u606f\uff0c\u4ee5\u53ca\u4ee3\u7801\uff0c\u53ef\u4ee5\u6539\u5199\u51fa"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'from PIL import Image\n\ndef isEven(num):\n    if num % 2 == 0:\n        return True\n    else:\n        return False\n\nim = Image.open("challenge.png")\npixelMap = im.load()\nimg = Image.new(im.mode, im.size)\npixelsNew = img.load()\n\nfor i in range(img.size[0]):\n    for j in range(img.size[1]):\n        RGB = im.getpixel((i, j))\n        R, G, B = RGB\n        if isEven(R + G + B):\n            pixelsNew[i, j] = (R, G, B)\n\nim.close()\nimg.show()\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u53ef\u4ee5\u5f97\u5230\u4ee5\u4e0b\u56fe\u50cf"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img decode",src:n(6475).Z+"",width:"680",height:"389"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e3a\u4e86\u6570\u636e\u66f4\u660e\u663e\u4e00\u70b9\uff0c\u53ef\u4ee5\u8fdb\u884c\u4e00\u5b9a\u7684\u4f18\u5316"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:'\nfrom PIL import Image\n\ndef isEven(num):\n    if num % 2 == 0:\n        return True\n    else:\n        return False\n\nim = Image.open("challenge.png")\npixelMap = im.load()\nimg = Image.new(im.mode, im.size)\npixelsNew = img.load()\n\nfor i in range(img.size[0]):\n    for j in range(img.size[1]):\n        RGB = im.getpixel((i, j))\n        R, G, B = RGB\n        if isEven(R + G + B):\n            pixelsNew[i, j] = (0, 0, 0)\n        else:\n            pixelsNew[i, j] = (255, 255, 255)\n\nim.close()\nimg.show()\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u5f97\u5230\u7684\u56fe\u50cf\uff0c\u53ef\u8bfb\u6027\u53d8\u5f97\u66f4\u597d"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"img decode advanced",src:n(390).Z+"",width:"680",height:"389"})}),"\n",(0,t.jsx)(e.h2,{id:"flag",children:"flag"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plaintext",children:"HMV{Play_with_Pixels}\n"})})]})}function p(A={}){const{wrapper:e}={...(0,i.a)(),...A.components};return e?(0,t.jsx)(e,{...A,children:(0,t.jsx)(d,{...A})}):d(A)}},4208:(A,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/image_20240200-130011-8fca48317858e914b1a3d7514583804c.png"},390:(A,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,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"},6475:(A,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/image_20240256-125648-93a3f7e6d6652b0bc7a3a3770b1c6cc7.png"},1151:(A,e,n)=>{n.d(e,{Z:()=>a,a:()=>s});var t=n(7294);const i={},r=t.createContext(i);function s(A){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function a(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(i):A.components||i:s(A.components),t.createElement(r.Provider,{value:e},A.children)}}}]);