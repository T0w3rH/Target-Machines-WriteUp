"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[4872],{5990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>E,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var s=n(5893),l=n(1151);const d={},r="Tracer",a={id:"HackTheBox/Sherlocks/Tracer/index",title:"Tracer",description:"A junior SOC analyst on duty has reported multiple alerts indicating the presence of PsExec on a workstation. They verified the alerts and escalated the alerts to tier II. As an Incident responder you triaged the endpoint for artefacts of interest. Now please answer the questions regarding this security event so you can report it to your incident manager.",source:"@site/docs/HackTheBox/Sherlocks/Tracer/index.md",sourceDirName:"HackTheBox/Sherlocks/Tracer",slug:"/HackTheBox/Sherlocks/Tracer/",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Sherlocks/Tracer/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackTheBox/Sherlocks/Tracer/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackTheBox_Sidebar",previous:{title:"Ore",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Sherlocks/Ore/"},next:{title:"_template",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Sherlocks/template"}},i={},c=[{value:"\u9898\u76ee\u6570\u636e",id:"\u9898\u76ee\u6570\u636e",level:2},{value:"Task 1",id:"task-1",level:2},{value:"Task 2",id:"task-2",level:2},{value:"Task 3",id:"task-3",level:2},{value:"Task 4",id:"task-4",level:2},{value:"Task 5",id:"task-5",level:2},{value:"Task 6",id:"task-6",level:2},{value:"Task 7",id:"task-7",level:2}];function x(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tracer",children:"Tracer"}),"\n",(0,s.jsxs)(t.admonition,{title:"Sherlock Scenario",type:"info",children:[(0,s.jsx)(t.p,{children:"A junior SOC analyst on duty has reported multiple alerts indicating the presence of PsExec on a workstation. They verified the alerts and escalated the alerts to tier II. As an Incident responder you triaged the endpoint for artefacts of interest. Now please answer the questions regarding this security event so you can report it to your incident manager."}),(0,s.jsx)(t.p,{children:"\u4e00\u540d\u503c\u73ed\u7684\u521d\u7ea7 SOC \u5206\u6790\u5e08\u62a5\u544a\u4e86\u591a\u4e2a\u8b66\u62a5\uff0c\u8868\u660e\u5de5\u4f5c\u7ad9\u4e0a\u5b58\u5728 PsExec\u3002\u4ed6\u4eec\u9a8c\u8bc1\u4e86\u8fd9\u4e9b\u8b66\u62a5\u5e76\u5c06\u5176\u5347\u7ea7\u7ed9\u4e8c\u7ea7\u652f\u6301\u56e2\u961f\u3002\u4f5c\u4e3a\u4e8b\u4ef6\u54cd\u5e94\u4eba\u5458\uff0c\u60a8\u5bf9\u7aef\u70b9\u8fdb\u884c\u4e86\u521d\u6b65\u8c03\u67e5\uff0c\u4ee5\u67e5\u627e\u611f\u5174\u8da3\u7684\u8bc1\u636e\u3002\u73b0\u5728\uff0c\u8bf7\u56de\u7b54\u4ee5\u4e0b\u5173\u4e8e\u8fd9\u4e00\u5b89\u5168\u4e8b\u4ef6\u7684\u95ee\u9898\uff0c\u4ee5\u4fbf\u5411\u60a8\u7684\u4e8b\u4ef6\u7ecf\u7406\u62a5\u544a\u3002"})]}),"\n",(0,s.jsx)(t.h2,{id:"\u9898\u76ee\u6570\u636e",children:"\u9898\u76ee\u6570\u636e"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(2128).Z+"",children:"tracer.zip"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["\u672c\u6587\u7ae0\u4f7f\u7528\u4e86 ",(0,s.jsx)(t.a,{href:"https://www.nirsoft.net/utils/full_event_log_view.html",children:"FullEventLogView"})," \u5de5\u5177\u8f85\u52a9\u8fdb\u884c\u65e5\u5fd7\u5206\u6790"]})}),"\n",(0,s.jsx)(t.h2,{id:"task-1",children:"Task 1"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"SOC \u56e2\u961f\u6000\u7591\u6709\u4e00\u4e2a\u5bf9\u624b\u6f5c\u4f0f\u5728\u4ed6\u4eec\u7684\u73af\u5883\u4e2d\uff0c\u5e76\u4e14\u6b63\u5728\u4f7f\u7528 PsExec \u8fdb\u884c\u6a2a\u5411\u79fb\u52a8\u3002\u4e00\u540d\u521d\u7ea7 SOC \u5206\u6790\u5e08\u7279\u522b\u62a5\u544a\u4e86\u5728\u4e00\u53f0\u5de5\u4f5c\u7ad9\u4e0a\u4f7f\u7528\u4e86 PsExec\u3002\u653b\u51fb\u8005\u5728\u7cfb\u7edf\u4e0a\u6267\u884c\u4e86\u591a\u5c11\u6b21 PsExec\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5728 ",(0,s.jsx)(t.code,{children:"Security.evtx"})," \u4e2d\uff0c\u65e5\u5fd7\u7b2c\u4e00\u6761\u5c31\u662f\u6211\u4eec\u8981\u8ffd\u8e2a\u7684 PsExec \u5bf9\u8c61"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">\n  <System>\n    <Provider Name="Microsoft-Windows-Security-Auditing" Guid="{54849625-5478-4994-a5ba-3e3b0328c30d}" />\n    <EventID>4625</EventID>\n    <Version>0</Version>\n    <Level>0</Level>\n    <Task>12544</Task>\n    <Opcode>0</Opcode>\n    <Keywords>0x8010000000000000</Keywords>\n    <TimeCreated SystemTime="2023-09-07T12:10:03.3378931Z" />\n    <EventRecordID>24554</EventRecordID>\n    <Correlation ActivityID="{3e97425f-e181-0001-8a42-973e81e1d901}" />\n    <Execution ProcessID="808" ThreadID="880" />\n    <Channel>Security</Channel>\n    <Computer>Forela-Wkstn002.forela.local</Computer>\n    <Security />\n  </System>\n  <EventData>\n    <Data Name="SubjectUserSid">S-1-5-18</Data>\n    <Data Name="SubjectUserName">FORELA-WKSTN002$</Data>\n    <Data Name="SubjectDomainName">FORELA</Data>\n    <Data Name="SubjectLogonId">0x3e7</Data>\n    <Data Name="TargetUserSid">S-1-0-0</Data>\n    <Data Name="TargetUserName">administrator</Data>\n    <Data Name="TargetDomainName">FORELA-WKSTN002</Data>\n    <Data Name="Status">0xc000006d</Data>\n    <Data Name="FailureReason">%%2313</Data>\n    <Data Name="SubStatus">0xc000006a</Data>\n    <Data Name="LogonType">2</Data>\n    <Data Name="LogonProcessName">Advapi  </Data>\n    <Data Name="AuthenticationPackageName">Negotiate</Data>\n    <Data Name="WorkstationName">FORELA-WKSTN002</Data>\n    <Data Name="TransmittedServices">-</Data>\n    <Data Name="LmPackageName">-</Data>\n    <Data Name="KeyLength">0</Data>\n    <Data Name="ProcessId">0x262c</Data>\n    <Data Name="ProcessName">C:\\Windows\\PSEXESVC.exe</Data>\n    <Data Name="IpAddress">-</Data>\n    <Data Name="IpPort">-</Data>\n  </EventData>\n</Event>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\u53ef\u4ee5\u5f97\u5230 PsExec \u7684\u5177\u4f53\u670d\u52a1\u7684\u540d\u79f0\uff1a",(0,s.jsx)(t.code,{children:"PSEXESVC"})]}),"\n",(0,s.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(t.code,{children:"FullEventLogView"})," \u4f7f\u7528\u5173\u952e\u5b57 ",(0,s.jsx)(t.code,{children:"psexesvc security"}),"\uff0c\u5171\u7b5b\u9009\u51fa\u6765 9 \u6761\u8bb0\u5f55"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"FullEventLogView",src:n(9136).Z+"",width:"1426",height:"760"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",metastring:'title="Answer"',children:"9\n"})}),"\n",(0,s.jsx)(t.h2,{id:"task-2",children:"Task 2"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"PsExec \u5de5\u5177\u91ca\u653e\u7684\u670d\u52a1\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u540d\u79f0\u662f\u4ec0\u4e48\uff0c\u4f7f\u5f97\u653b\u51fb\u8005\u80fd\u591f\u6267\u884c\u8fdc\u7a0b\u547d\u4ee4\uff1f"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u4e0a\u4e00\u9898\u4e2d\u5c31\u6709"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",metastring:'title="Answer"',children:"PSEXESVC.exe\n"})}),"\n",(0,s.jsx)(t.h2,{id:"task-3",children:"Task 3"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u73b0\u5728\u6211\u4eec\u786e\u8ba4\u4e86 PsExec \u8fd0\u884c\u4e86\u591a\u6b21\uff0c\u6211\u4eec\u7279\u522b\u5173\u6ce8\u7b2c 5 \u6b21\u8fd0\u884c\u7684 PsExec \u5b9e\u4f8b\u3002PsExec \u670d\u52a1\u4e8c\u8fdb\u5236\u6587\u4ef6\u8fd0\u884c\u7684\u65f6\u95f4\u6233\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["\u95ee\u9898\u9700\u8981\u8ba4\u771f\u5ba1\u9898\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u91cc\u63d0\u95ee\u7684\u662f ",(0,s.jsx)(t.code,{children:"psexec"})," \u7684\u6267\u884c\u65f6\u95f4\uff0c\u800c\u7cfb\u7edf\u65e5\u5fd7\u4e2d\u6240\u8bb0\u5f55\u7684\u662f ",(0,s.jsx)(t.code,{children:"psexec"})," \u6267\u884c\u7528\u6237\u767b\u5f55\u7684\u4e8b\u4ef6"]})}),"\n",(0,s.jsxs)(t.p,{children:["\u5982\u679c\u9700\u8981\u5bf9\u7a0b\u5e8f\u7684\u6267\u884c\u6570\u636e\u8fdb\u884c\u5206\u6790\uff0c\u7ed3\u5408\u9898\u76ee\u4e2d\u6240\u7ed9\u7684\u9644\u4ef6\uff0c\u5c31\u53ea\u80fd\u5bf9 ",(0,s.jsx)(t.code,{children:"prefetch"})," \u6587\u4ef6\u8fdb\u884c\u5206\u6790"]}),"\n",(0,s.jsxs)(t.p,{children:["\u63a5\u4e0b\u6765\u8981\u5bf9 ",(0,s.jsx)(t.code,{children:"prefetch"})," \u6587\u4ef6\u8fdb\u884c\u5206\u6790\uff0c\u56e0\u4e3a ",(0,s.jsx)(t.code,{children:"prefetch"})," \u6587\u4ef6\u4e2d\u50a8\u5b58\u4e86\u7a0b\u5e8f\u5728\u8fd0\u884c\u65f6\u7684\u7f13\u5b58\u6570\u636e\uff0c\u53ef\u80fd\u5176\u4e2d\u542b\u6709\u6709\u4ef7\u503c\u7684\u4fe1\u606f"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4e3a\u4e86\u5bf9 ",(0,s.jsx)(t.code,{children:"prefetch"})," \u6587\u4ef6\u8fdb\u884c\u5206\u6790\uff0c\u5c06\u4f7f\u7528 ",(0,s.jsx)(t.a,{href:"https://github.com/EricZimmerman/PECmd",children:"PECmd"})," \u8fd9\u4e2a\u5de5\u5177"]}),"\n",(0,s.jsxs)(t.p,{children:["\u9488\u5bf9 ",(0,s.jsx)(t.code,{children:"psexec"}),"\uff0c\u5b9a\u4f4d\u5230 ",(0,s.jsx)(t.code,{children:"PSEXESVC.EXE-AD70946C.pf"})," \u6587\u4ef6\uff0c\u8fdb\u884c\u5206\u6790"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"PS D:\\_Tool\\_ForensicAnalyzer\\PECmd> .\\PECmd.exe -f D:\\Downloads\\tracer\\Tracer\\C\\Windows\\prefetch\\PSEXESVC.EXE-AD70946C.pf --csv D:\\Downloads\\res\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u5206\u6790\u62a5\u544a\u5c06\u4f1a\u4fdd\u5b58\u5728 ",(0,s.jsx)(t.code,{children:"D:\\Downloads\\res"})," \u76ee\u5f55\u4e0b\uff0c\u5bf9 ",(0,s.jsx)(t.code,{children:"20240102035233_PECmd_Output_Timeline.csv"})," \u8fd9\u4e2a\u62a5\u544a\u6587\u4ef6\u8fdb\u884c\u67e5\u770b"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"RunTime"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"ExecutableName"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2023/9/7 12:10"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"\\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXESVC.EXE"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2023/9/7 12:09"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"\\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXESVC.EXE"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2023/9/7 12:08"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"\\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXESVC.EXE"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2023/9/7 12:08"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"\\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXESVC.EXE"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2023/9/7 12:06"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"\\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXESVC.EXE"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2023/9/7 11:57"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"\\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXESVC.EXE"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2023/9/7 11:57"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"\\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXESVC.EXE"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"2023/9/7 11:55"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:"\\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXESVC.EXE"})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"\u5373\u53ef\u5b9a\u4f4d\u65f6\u95f4"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",metastring:'title="Answer"',children:"07/09/2023 12:06:54\n"})}),"\n",(0,s.jsx)(t.h2,{id:"task-4",children:"Task 4"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u60a8\u80fd\u786e\u8ba4\u653b\u51fb\u8005\u8fdb\u884c\u6a2a\u5411\u79fb\u52a8\u7684\u5de5\u4f5c\u7ad9\u7684\u4e3b\u673a\u540d\u5417\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5728 ",(0,s.jsx)(t.code,{children:"PECmd"})," \u5de5\u5177\u7684\u547d\u4ee4\u884c\u8f93\u51fa\u7ed3\u679c\u4e2d\uff0c\u7814\u5224 ",(0,s.jsx)(t.code,{children:"Files referenced"})," \u90e8\u5206\u7684\u8bb0\u5f55"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"00: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\NTDLL.DLL\n01: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXESVC.EXE (Executable: True)\n02: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\KERNEL32.DLL\n03: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\KERNELBASE.DLL\n04: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\LOCALE.NLS\n05: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\USER32.DLL\n06: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\USERENV.DLL\n07: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\WIN32U.DLL\n08: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\UCRTBASE.DLL\n09: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\GDI32.DLL\n10: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\RPCRT4.DLL\n11: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\GDI32FULL.DLL\n12: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\MSVCP_WIN.DLL\n13: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\ADVAPI32.DLL\n14: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\MSVCRT.DLL\n15: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\SECHOST.DLL\n16: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\SHELL32.DLL\n17: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\WTSAPI32.DLL\n18: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\KERNEL.APPCORE.DLL\n19: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\NTMARTA.DLL\n20: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-CAD5E7EF.KEY\n21: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\CRYPTSP.DLL\n22: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\RSAENH.DLL\n23: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\BCRYPT.DLL\n24: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\SSPICLI.DLL\n25: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\PROFAPI.DLL\n26: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\BCRYPTPRIMITIVES.DLL\n27: \\VOLUME{01d951602330db46-52233816}\\PROGRAMDATA\\MICROSOFT\\CRYPTO\\RSA\\S-1-5-18\\F05260A40AE771219C4528E4628312CD_B02EC91E-ADE1-4F67-9328-AE89B0EBD197\n28: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\CRYPTBASE.DLL\n29: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\NETAPI32.DLL\n30: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\LOGONCLI.DLL\n31: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\NETUTILS.DLL\n32: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\SYSTEM32\\WINSTA.DLL\n33: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-89A517EE.KEY\n34: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-415385DF.KEY\n35: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-C3E84A44.KEY\n36: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-95F03CFE.KEY\n37: \\VOLUME{01d951602330db46-52233816}\\$MFT\n38: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-663BCB85.KEY\n39: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-7AA5D6C6.KEY\n40: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-EDCC783C.KEY\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5373\u53ef\u4ece key \u6587\u4ef6\u7684\u6587\u4ef6\u540d\u4e2d\uff0c\u5f97\u5230\u4e3b\u673a\u540d"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",metastring:'title="Answer"',children:"FORELA-WKSTN001\n"})}),"\n",(0,s.jsx)(t.h2,{id:"task-5",children:"Task 5"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"Psexec \u7684\u5012\u6570\u7b2c 5 \u4e2a\u5b9e\u4f8b\u91ca\u653e\u7684\u5bc6\u94a5\u6587\u4ef6\u7684\u5168\u540d\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5bf9\u4e0a\u4e00\u9898\u4e2d ",(0,s.jsx)(t.code,{children:"Files referenced"})," \u90e8\u5206\u7684\u8bb0\u5f55\u8fdb\u884c\u7b5b\u9009\uff0c\u4fdd\u7559\u4e0b key \u6587\u4ef6\u7684\u8bb0\u5f55"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",children:"20: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-CAD5E7EF.KEY\n33: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-89A517EE.KEY\n34: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-415385DF.KEY\n35: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-C3E84A44.KEY\n36: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-95F03CFE.KEY\n38: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-663BCB85.KEY\n39: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-7AA5D6C6.KEY\n40: \\VOLUME{01d951602330db46-52233816}\\WINDOWS\\PSEXEC-FORELA-WKSTN001-EDCC783C.KEY\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u6309\u7167\u987a\u5e8f\u5b9a\u4f4d\u7b2c\u4e94\u4e2a\u5373\u53ef"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",metastring:'title="Answer"',children:"PSEXEC-FORELA-WKSTN001-95F03CFE.key\n"})}),"\n",(0,s.jsx)(t.h2,{id:"task-6",children:"Task 6"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u60a8\u80fd\u786e\u8ba4\u8be5\u5bc6\u94a5\u6587\u4ef6\u5728\u78c1\u76d8\u4e0a\u521b\u5efa\u7684\u65f6\u95f4\u6233\u5417\uff1f"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u4e3a\u4e86\u786e\u5b9a\u6587\u4ef6\u7684\u65f6\u95f4\u6233\uff0c\u9700\u8981\u5bf9 Windows \u78c1\u76d8\u9ed8\u8ba4\u7684 NTFS \u50a8\u5b58\u7ed3\u6784\u534f\u8bae\u7684 ",(0,s.jsx)(t.code,{children:"$Extend"})," \u76f8\u5173\u8bb0\u5f55\u8fdb\u884c\u89e3\u6790"]}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd9\u91cc\u4f7f\u7528\u5230 ",(0,s.jsx)(t.a,{href:"https://github.com/EricZimmerman/MFTECmd",children:"MFTECmd"})," \u8fd9\u6b3e\u5de5\u5177"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"PS D:\\_Tool\\_ForensicAnalyzer\\MFTECmd> .\\MFTECmd.exe -f 'D:\\Downloads\\tracer\\Tracer\\C\\$Extend\\$J' --json 'D:\\Downloads\\tracer\\Tracer\\C\\$Extend'\n......\nUsn entries found in D:\\Downloads\\tracer\\Tracer\\C\\$Extend\\$J: 145,944\n        CSV output will be saved to D:\\Downloads\\tracer\\Tracer\\C\\$Extend\\20240102044257_MFTECmd_$J_Output.csv\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u5bf9\u63d0\u53d6\u5f97\u5230\u7684\u6570\u636e\u8fdb\u884c\u7b5b\u9009\uff0c\u53ef\u4ee5\u5f97\u5230\u4e09\u6761\u8bb0\u5f55"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Extension"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"EntryNumber"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"SequenceNumber"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"ParentEntryNumber"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"ParentSequenceNumber"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"ParentPath"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"UpdateSequenceNumber"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"UpdateTimestamp"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"UpdateReasons"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"FileAttributes"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"OffsetToData"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"SourceFile"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PSEXEC-FORELA-WKSTN001-95F03CFE.key"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:".key"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"219314"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"12"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"102274"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3247682232"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"06:55.1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"FileCreate"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Archive"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"25375416"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"D:\\Downloads\\tracer\\Tracer\\C$Extend$J"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PSEXEC-FORELA-WKSTN001-95F03CFE.key"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:".key"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"219314"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"12"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"102274"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3247682368"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"06:55.1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DataExtend"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"FileCreate"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Archive"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"25375552"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PSEXEC-FORELA-WKSTN001-95F03CFE.key"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:".key"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"219314"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"12"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"102274"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3247682504"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"06:55.1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DataExtend"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"FileCreate"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"RenameOldName"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Archive"})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",metastring:'title="Answer"',children:"07/09/2023 12:06:55\n"})}),"\n",(0,s.jsx)(t.h2,{id:"task-7",children:"Task 7"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:'\u7b2c 5 \u4e2a PsExec \u5b9e\u4f8b\u7684\u4ee5 "stderr" \u5173\u952e\u5b57\u7ed3\u5c3e\u7684\u547d\u540d\u7ba1\u9053\u7684\u5168\u540d\u662f\u4ec0\u4e48\uff1f'}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\u5bf9 ",(0,s.jsx)(t.code,{children:"Microsoft-Windows-Sysmon%4Operational.evtx"})," \u8fd9\u4e2a\u65e5\u5fd7\u6587\u4ef6\u8fdb\u884c\u5206\u6790\uff0c\u9488\u5bf9\u4e0a\u6587\u5f97\u5230\u7684\u65f6\u95f4\u6233 ",(0,s.jsx)(t.code,{children:"07/09/2023 12:06:54"})," \u8fdb\u884c\u7b5b\u9009\uff0c\u5373\u53ef\u5f97\u5230\u4ee5\u4e0b\u6570\u636e"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">\n  <System>\n    <Provider Name="Microsoft-Windows-Sysmon" Guid="{5770385f-c22a-43e0-bf4c-06f5698ffbd9}" />\n    <EventID>17</EventID>\n    <Version>1</Version>\n    <Level>4</Level>\n    <Task>17</Task>\n    <Opcode>0</Opcode>\n    <Keywords>0x8000000000000000</Keywords>\n    <TimeCreated SystemTime="2023-09-07T12:06:55.0846666Z" />\n    <EventRecordID>159603</EventRecordID>\n    <Correlation />\n    <Execution ProcessID="3552" ThreadID="4360" />\n    <Channel>Microsoft-Windows-Sysmon/Operational</Channel>\n    <Computer>Forela-Wkstn002.forela.local</Computer>\n    <Security UserID="S-1-5-18" />\n  </System>\n  <EventData>\n    <Data Name="RuleName">-</Data>\n    <Data Name="EventType">CreatePipe</Data>\n    <Data Name="UtcTime">2023-09-07 12:06:55.069</Data>\n    <Data Name="ProcessGuid">{b02ec91e-bcde-64f9-0c02-000000003000}</Data>\n    <Data Name="ProcessId">6836</Data>\n    <Data Name="PipeName">\\PSEXESVC-FORELA-WKSTN001-3056-stderr</Data>\n    <Data Name="Image">C:\\WINDOWS\\PSEXESVC.exe</Data>\n    <Data Name="User">NT AUTHORITY\\SYSTEM</Data>\n  </EventData>\n</Event>\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-plaintext",metastring:'title="Answer"',children:"\\PSEXESVC-FORELA-WKSTN001-3056-stderr\n"})})]})}function E(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},2128:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/files/tracer-f42eab0c139ccbc23eb4998f5562d39b.zip"},9136:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image_20240131-113152-77bf027934d731fbdd84a8afa32a3e0e.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const l={},d=s.createContext(l);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);