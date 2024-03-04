"use strict";(self.webpackChunktarget_machines_write_up=self.webpackChunktarget_machines_write_up||[]).push([[1545],{372:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(5893),s=n(1151);const r={},i="Logjammer",o={id:"HackTheBox/Sherlocks/Logjammer/index",title:"Logjammer",description:"You have been presented the opportunity to work as a junior DFIR consultant for a big consultancy, however they have provided a technical assessment for you to complete. The consultancy Forela-Security would like to gauge your knowledge on Windows Event Log Analysis. Please analyse and report back on the questions they have asked.",source:"@site/docs/HackTheBox/Sherlocks/Logjammer/index.md",sourceDirName:"HackTheBox/Sherlocks/Logjammer",slug:"/HackTheBox/Sherlocks/Logjammer/",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Sherlocks/Logjammer/",draft:!1,unlisted:!1,editUrl:"https://github.com/TryHackMyOffsecBox/Target-Machines-WriteUp/edit/main/docs/HackTheBox/Sherlocks/Logjammer/index.md",tags:[],version:"current",frontMatter:{},sidebar:"HackTheBox_Sidebar",previous:{title:"Lockpick",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Sherlocks/Lockpick/"},next:{title:"Meerkat",permalink:"/Target-Machines-WriteUp/docs/HackTheBox/Sherlocks/Meerkat/"}},c={},l=[{value:"\u9898\u76ee\u6570\u636e",id:"\u9898\u76ee\u6570\u636e",level:2},{value:"Task 1",id:"task-1",level:2},{value:"Task 2",id:"task-2",level:2},{value:"Task 3",id:"task-3",level:2},{value:"Task 4",id:"task-4",level:2},{value:"Task 5",id:"task-5",level:2},{value:"Task 6",id:"task-6",level:2},{value:"Task 7",id:"task-7",level:2},{value:"Task 8",id:"task-8",level:2},{value:"Task 9",id:"task-9",level:2},{value:"Task 10",id:"task-10",level:2},{value:"Task 11",id:"task-11",level:2},{value:"Task 12",id:"task-12",level:2}];function d(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"logjammer",children:"Logjammer"}),"\n",(0,t.jsxs)(a.admonition,{title:"Sherlock Scenario",type:"info",children:[(0,t.jsx)(a.p,{children:"You have been presented the opportunity to work as a junior DFIR consultant for a big consultancy, however they have provided a technical assessment for you to complete. The consultancy Forela-Security would like to gauge your knowledge on Windows Event Log Analysis. Please analyse and report back on the questions they have asked."}),(0,t.jsx)(a.p,{children:"\u4f60\u88ab\u63d0\u4f9b\u4e86\u4e00\u4efd\u6280\u672f\u8bc4\u4f30\uff0c\u8fd9\u662f\u4e3a\u4e86\u6210\u4e3a\u4e00\u5bb6\u5927\u578b\u54a8\u8be2\u516c\u53f8\u7684\u521d\u7ea7\u6570\u5b57\u53d6\u8bc1\u548c\u5e94\u6025\u54cd\u5e94\uff08DFIR\uff09\u987e\u95ee\u3002\u54a8\u8be2\u516c\u53f8 Forela-Security \u5e0c\u671b\u8bc4\u4f30\u4f60\u5728 Windows \u4e8b\u4ef6\u65e5\u5fd7\u5206\u6790\u65b9\u9762\u7684\u77e5\u8bc6\u3002\u8bf7\u5206\u6790\u5e76\u62a5\u544a\u4ed6\u4eec\u63d0\u51fa\u7684\u95ee\u9898\u3002"})]}),"\n",(0,t.jsx)(a.h2,{id:"\u9898\u76ee\u6570\u636e",children:"\u9898\u76ee\u6570\u636e"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(5662).Z+"",children:"logjammer.zip"})}),"\n",(0,t.jsx)(a.h2,{id:"task-1",children:"Task 1"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u7528\u6237 cyberjunkie \u4f55\u65f6\u6210\u529f\u767b\u5f55\u4e86\u4ed6\u7684\u8ba1\u7b97\u673a\uff1f\uff08UTC \u65f6\u95f4\uff09"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["\u767b\u5f55\u7684\u4e8b\u4ef6 ID \u4e3a ",(0,t.jsx)(a.code,{children:"4648"}),"\uff0c\u501f\u6b64\u53ef\u4ee5\u5b9a\u4f4d\u5230\u4ee5\u4e0b\u8bb0\u5f55"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">\n  <System>\n    <Provider Name="Microsoft-Windows-Security-Auditing" Guid="{54849625-5478-4994-a5ba-3e3b0328c30d}" />\n    <EventID>4648</EventID>\n    <Version>0</Version>\n    <Level>0</Level>\n    <Task>12544</Task>\n    <Opcode>0</Opcode>\n    <Keywords>0x8020000000000000</Keywords>\n    <TimeCreated SystemTime="2023-03-27T14:37:09.8798342Z" />\n    <EventRecordID>13057</EventRecordID>\n    <Correlation ActivityID="{986a053f-60b9-0002-5b05-6a98b960d901}" />\n    <Execution ProcessID="780" ThreadID="824" />\n    <Channel>Security</Channel>\n    <Computer>DESKTOP-887GK2L</Computer>\n    <Security />\n  </System>\n  <EventData>\n    <Data Name="SubjectUserSid">S-1-5-18</Data>\n    <Data Name="SubjectUserName">DESKTOP-887GK2L$</Data>\n    <Data Name="SubjectDomainName">WORKGROUP</Data>\n    <Data Name="SubjectLogonId">0x3e7</Data>\n    <Data Name="LogonGuid">{00000000-0000-0000-0000-000000000000}</Data>\n    <Data Name="TargetUserName">CyberJunkie</Data>\n    <Data Name="TargetDomainName">DESKTOP-887GK2L</Data>\n    <Data Name="TargetLogonGuid">{00000000-0000-0000-0000-000000000000}</Data>\n    <Data Name="TargetServerName">localhost</Data>\n    <Data Name="TargetInfo">localhost</Data>\n    <Data Name="ProcessId">0x570</Data>\n    <Data Name="ProcessName">C:\\Windows\\System32\\svchost.exe</Data>\n    <Data Name="IpAddress">127.0.0.1</Data>\n    <Data Name="IpPort">0</Data>\n  </EventData>\n</Event>\n'})}),"\n",(0,t.jsx)(a.p,{children:"\u8bb0\u5f97\u8f6c\u6362\u4e3a UTC \u6807\u51c6\u65f6\u95f4"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"27/03/2023 14:37:09\n"})}),"\n",(0,t.jsx)(a.h2,{id:"task-2",children:"Task 2"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u7528\u6237\u7be1\u6539\u4e86\u7cfb\u7edf\u7684\u9632\u706b\u5899\u8bbe\u7f6e\u3002\u5206\u6790\u9632\u706b\u5899\u4e8b\u4ef6\u65e5\u5fd7\u4ee5\u627e\u51fa\u6dfb\u52a0\u7684\u9632\u706b\u5899\u89c4\u5219\u7684\u540d\u79f0\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["\u6dfb\u52a0\u9632\u706b\u5899\u89c4\u5219\u7684\u4e8b\u4ef6 ID \u4e3a ",(0,t.jsx)(a.code,{children:"2004"})]}),"\n",(0,t.jsxs)(a.p,{children:["\u901a\u8fc7\u5bf9\u65e5\u5fd7\u6587\u4ef6\u7684\u7b5b\u67e5\uff0c\u53ef\u4ee5\u5f97\u5230\u7528\u6237\u7684\u7528\u6237 ID \u4e3a ",(0,t.jsx)(a.code,{children:"S-1-5-21-3393683511-3463148672-371912004-1001"})]}),"\n",(0,t.jsx)(a.p,{children:"\u501f\u6b64\u5f97\u5230\u4e86\u4ee5\u4e0b\u8bb0\u5f55"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">\n  <System>\n    <Provider Name="Microsoft-Windows-Windows Firewall With Advanced Security" Guid="{d1bc9aff-2abf-4d71-9146-ecb2a986eb85}" />\n    <EventID>2004</EventID>\n    <Version>0</Version>\n    <Level>4</Level>\n    <Task>0</Task>\n    <Opcode>0</Opcode>\n    <Keywords>0x8000020000000000</Keywords>\n    <TimeCreated SystemTime="2023-03-27T14:44:43.4157021Z" />\n    <EventRecordID>1120</EventRecordID>\n    <Correlation />\n    <Execution ProcessID="2384" ThreadID="2868" />\n    <Channel>Microsoft-Windows-Windows Firewall With Advanced Security/Firewall</Channel>\n    <Computer>DESKTOP-887GK2L</Computer>\n    <Security UserID="S-1-5-19" />\n  </System>\n  <EventData>\n    <Data Name="RuleId">{11309293-FB68-4969-93F9-7F75A9032570}</Data>\n    <Data Name="RuleName">Metasploit C2 Bypass</Data>\n    <Data Name="Origin">1</Data>\n    <Data Name="ApplicationPath">\n    </Data>\n    <Data Name="ServiceName">\n    </Data>\n    <Data Name="Direction">2</Data>\n    <Data Name="Protocol">6</Data>\n    <Data Name="LocalPorts">*</Data>\n    <Data Name="RemotePorts">4444</Data>\n    <Data Name="Action">3</Data>\n    <Data Name="Profiles">2147483647</Data>\n    <Data Name="LocalAddresses">*</Data>\n    <Data Name="RemoteAddresses">*</Data>\n    <Data Name="RemoteMachineAuthorizationList">\n    </Data>\n    <Data Name="RemoteUserAuthorizationList">\n    </Data>\n    <Data Name="EmbeddedContext">\n    </Data>\n    <Data Name="Flags">1</Data>\n    <Data Name="Active">1</Data>\n    <Data Name="EdgeTraversal">0</Data>\n    <Data Name="LooseSourceMapped">0</Data>\n    <Data Name="SecurityOptions">0</Data>\n    <Data Name="ModifyingUser">S-1-5-21-3393683511-3463148672-371912004-1001</Data>\n    <Data Name="ModifyingApplication">C:\\Windows\\System32\\mmc.exe</Data>\n    <Data Name="SchemaVersion">542</Data>\n    <Data Name="RuleStatus">65536</Data>\n    <Data Name="LocalOnlyMapped">0</Data>\n  </EventData>\n</Event>\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"Metasploit C2 Bypass\n"})}),"\n",(0,t.jsx)(a.h2,{id:"task-3",children:"Task 3"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u9632\u706b\u5899\u89c4\u5219\u7684\u65b9\u5411\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"\u4e0a\u4e00\u9898\u7684\u65e5\u5fd7\u6570\u636e\u4e2d\u5c31\u6709"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"Outbound\n"})}),"\n",(0,t.jsx)(a.h2,{id:"task-4",children:"Task 4"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u7528\u6237\u66f4\u6539\u4e86\u8ba1\u7b97\u673a\u7684\u5ba1\u8ba1\u7b56\u7565\u3002\u8fd9\u4e2a\u66f4\u6539\u7b56\u7565\u7684\u5b50\u7c7b\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["\u5ba1\u8ba1\u7b56\u7565\u66f4\u6539\u7684\u65e5\u5fd7 ID \u4e3a ",(0,t.jsx)(a.code,{children:"4719"})," \u501f\u6b64\u5b9a\u4f4d\u5230\u4ee5\u4e0b\u8bb0\u5f55"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">\n  <System>\n    <Provider Name="Microsoft-Windows-Security-Auditing" Guid="{54849625-5478-4994-a5ba-3e3b0328c30d}" />\n    <EventID>4719</EventID>\n    <Version>0</Version>\n    <Level>0</Level>\n    <Task>13568</Task>\n    <Opcode>0</Opcode>\n    <Keywords>0x8020000000000000</Keywords>\n    <TimeCreated SystemTime="2023-03-27T14:50:03.7218352Z" />\n    <EventRecordID>13102</EventRecordID>\n    <Correlation ActivityID="{986a053f-60b9-0002-5b05-6a98b960d901}" />\n    <Execution ProcessID="780" ThreadID="1488" />\n    <Channel>Security</Channel>\n    <Computer>DESKTOP-887GK2L</Computer>\n    <Security />\n  </System>\n  <EventData>\n    <Data Name="SubjectUserSid">S-1-5-18</Data>\n    <Data Name="SubjectUserName">DESKTOP-887GK2L$</Data>\n    <Data Name="SubjectDomainName">WORKGROUP</Data>\n    <Data Name="SubjectLogonId">0x3e7</Data>\n    <Data Name="CategoryId">%%8274</Data>\n    <Data Name="SubcategoryId">%%12804</Data>\n    <Data Name="SubcategoryGuid">{0cce9227-69ae-11d9-bed3-505054503030}</Data>\n    <Data Name="AuditPolicyChanges">%%8449</Data>\n  </EventData>\n</Event>\n'})}),"\n",(0,t.jsx)(a.p,{children:"Other Object Access Events"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"'})}),"\n",(0,t.jsx)(a.h2,{id:"task-5",children:"Task 5"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:'\u7528\u6237 "cyberjunkie" \u521b\u5efa\u4e86\u4e00\u4e2a\u8ba1\u5212\u4efb\u52a1\u3002\u8fd9\u4e2a\u4efb\u52a1\u7684\u540d\u79f0\u662f\u4ec0\u4e48\uff1f'}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["\u521b\u5efa\u8ba1\u5212\u4efb\u52a1\u7684\u4e8b\u4ef6 ID \u4e3a ",(0,t.jsx)(a.code,{children:"4698"}),"\uff0c\u501f\u6b64\u5b9a\u4f4d\u5230\u4ee5\u4e0b\u8bb0\u5f55"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">\n  <System>\n    <Provider Name="Microsoft-Windows-Security-Auditing" Guid="{54849625-5478-4994-a5ba-3e3b0328c30d}" />\n    <EventID>4698</EventID>\n    <Version>1</Version>\n    <Level>0</Level>\n    <Task>12804</Task>\n    <Opcode>0</Opcode>\n    <Keywords>0x8020000000000000</Keywords>\n    <TimeCreated SystemTime="2023-03-27T14:51:21.4817206Z" />\n    <EventRecordID>13103</EventRecordID>\n    <Correlation ActivityID="{986a053f-60b9-0002-5b05-6a98b960d901}" />\n    <Execution ProcessID="780" ThreadID="4180" />\n    <Channel>Security</Channel>\n    <Computer>DESKTOP-887GK2L</Computer>\n    <Security />\n  </System>\n  <EventData>\n    <Data Name="SubjectUserSid">S-1-5-21-3393683511-3463148672-371912004-1001</Data>\n    <Data Name="SubjectUserName">CyberJunkie</Data>\n    <Data Name="SubjectDomainName">DESKTOP-887GK2L</Data>\n    <Data Name="SubjectLogonId">0x25f28</Data>\n    <Data Name="TaskName">\\HTB-AUTOMATION</Data>\n    <Data Name="TaskContent">......</Data>\n    <Data Name="ClientProcessStartKey">4222124650660162</Data>\n    <Data Name="ClientProcessId">9320</Data>\n    <Data Name="ParentProcessId">6112</Data>\n    <Data Name="RpcCallClientLocality">0</Data>\n    <Data Name="FQDN">DESKTOP-887GK2L</Data>\n  </EventData>\n</Event>\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"HTB-AUTOMATION\n"})}),"\n",(0,t.jsx)(a.h2,{id:"task-6",children:"Task 6"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u88ab\u5b89\u6392\u6267\u884c\u4efb\u52a1\u7684\u6587\u4ef6\u7684\u5b8c\u6574\u8def\u5f84\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["\u5728\u4e0a\u6587\u8bb0\u5f55\u7684 ",(0,t.jsx)(a.code,{children:"TaskContent"})," \u6761\u76ee\u4e2d\u5c31\u6709"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-16"?>\n<Task version="1.2"\n    xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">\n    <RegistrationInfo>\n        <Date>2023-03-27T07:51:21.4599985</Date>\n        <Author>DESKTOP-887GK2L\\CyberJunkie</Author>\n        <Description>practice</Description>\n        <URI>\\HTB-AUTOMATION</URI>\n    </RegistrationInfo>\n    <Triggers>\n        <CalendarTrigger>\n            <StartBoundary>2023-03-27T09:00:00</StartBoundary>\n            <Enabled>true</Enabled>\n            <ScheduleByDay>\n                <DaysInterval>1</DaysInterval>\n            </ScheduleByDay>\n        </CalendarTrigger>\n    </Triggers>\n    <Principals>\n        <Principal id="Author">\n            <RunLevel>LeastPrivilege</RunLevel>\n            <UserId>DESKTOP-887GK2L\\CyberJunkie</UserId>\n            <LogonType>InteractiveToken</LogonType>\n        </Principal>\n    </Principals>\n    <Settings>\n        <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>\n        <DisallowStartIfOnBatteries>true</DisallowStartIfOnBatteries>\n        <StopIfGoingOnBatteries>true</StopIfGoingOnBatteries>\n        <AllowHardTerminate>true</AllowHardTerminate>\n        <StartWhenAvailable>false</StartWhenAvailable>\n        <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>\n        <IdleSettings>\n            <Duration>PT10M</Duration>\n            <WaitTimeout>PT1H</WaitTimeout>\n            <StopOnIdleEnd>true</StopOnIdleEnd>\n            <RestartOnIdle>false</RestartOnIdle>\n        </IdleSettings>\n        <AllowStartOnDemand>true</AllowStartOnDemand>\n        <Enabled>true</Enabled>\n        <Hidden>false</Hidden>\n        <RunOnlyIfIdle>false</RunOnlyIfIdle>\n        <WakeToRun>false</WakeToRun>\n        <ExecutionTimeLimit>P3D</ExecutionTimeLimit>\n        <Priority>7</Priority>\n    </Settings>\n    <Actions Context="Author">\n        <Exec>\n            <Command>C:\\Users\\CyberJunkie\\Desktop\\Automation-HTB.ps1</Command>\n            <Arguments>-A cyberjunkie@hackthebox.eu</Arguments>\n        </Exec>\n    </Actions>\n</Task>\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"C:\\Users\\CyberJunkie\\Desktop\\Automation-HTB.ps1\n"})}),"\n",(0,t.jsx)(a.h2,{id:"task-7",children:"Task 7"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u8be5\u547d\u4ee4\u7684\u53c2\u6570\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"\u4e0a\u4e00\u9898\u4e2d\u5c31\u6709"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"-A cyberjunkie@hackthebox.eu\n"})}),"\n",(0,t.jsx)(a.h2,{id:"task-8",children:"Task 8"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u7cfb\u7edf\u4e0a\u8fd0\u884c\u7684\u9632\u75c5\u6bd2\u8f6f\u4ef6\u8bc6\u522b\u51fa\u4e00\u4e2a\u5a01\u80c1\u5e76\u5bf9\u5176\u6267\u884c\u4e86\u64cd\u4f5c\u3002\u9632\u75c5\u6bd2\u8f6f\u4ef6\u8bc6\u522b\u51fa\u7684\u6076\u610f\u8f6f\u4ef6\u662f\u54ea\u4e2a\u5de5\u5177\uff1f"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"Microsoft Defender"})," \u68c0\u6d4b\u5230\u6076\u610f\u8f6f\u4ef6\u7684\u4e8b\u4ef6 ID \u4e3a ",(0,t.jsx)(a.code,{children:"1117"}),"\uff0c\u501f\u6b64\u5b9a\u4f4d\u5230\u4ee5\u4e0b\u8bb0\u5f55"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">\n  <System>\n    <Provider Name="Microsoft-Windows-Windows Defender" Guid="{11cd958a-c507-4ef3-b3f2-5fd9dfbd2c78}" />\n    <EventID>1117</EventID>\n    <Version>0</Version>\n    <Level>4</Level>\n    <Task>0</Task>\n    <Opcode>0</Opcode>\n    <Keywords>0x8000000000000000</Keywords>\n    <TimeCreated SystemTime="2023-03-27T14:42:48.3526591Z" />\n    <EventRecordID>443</EventRecordID>\n    <Correlation />\n    <Execution ProcessID="3300" ThreadID="3056" />\n    <Channel>Microsoft-Windows-Windows Defender/Operational</Channel>\n    <Computer>DESKTOP-887GK2L</Computer>\n    <Security UserID="S-1-5-18" />\n  </System>\n  <EventData>\n    <Data Name="Product Name">Microsoft Defender Antivirus</Data>\n    <Data Name="Product Version">4.18.2302.7</Data>\n    <Data Name="Detection ID">{0EBC4BEA-5532-4EFB-8A34-64F91CC8702E}</Data>\n    <Data Name="Detection Time">2023-03-27T14:42:34.272Z</Data>\n    <Data Name="Unused">\n    </Data>\n    <Data Name="Unused2">\n    </Data>\n    <Data Name="Threat ID">2147814944</Data>\n    <Data Name="Threat Name">HackTool:MSIL/SharpHound!MSR</Data>\n    <Data Name="Severity ID">4</Data>\n    <Data Name="Severity Name">High</Data>\n    <Data Name="Category ID">34</Data>\n    <Data Name="Category Name">Tool</Data>\n    <Data Name="FWLink">https://go.microsoft.com/fwlink/?linkid=37020&amp;name=HackTool:MSIL/SharpHound!MSR&amp;threatid=2147814944&amp;enterprise=0</Data>\n    <Data Name="Status Code">103</Data>\n    <Data Name="Status Description">\n    </Data>\n    <Data Name="State">2</Data>\n    <Data Name="Source ID">4</Data>\n    <Data Name="Source Name">Downloads and attachments</Data>\n    <Data Name="Process Name">Unknown</Data>\n    <Data Name="Detection User">DESKTOP-887GK2L\\CyberJunkie</Data>\n    <Data Name="Unused3">\n    </Data>\n    <Data Name="Path">containerfile:_C:\\Users\\CyberJunkie\\Downloads\\SharpHound-v1.1.0.zip; file:_C:\\Users\\CyberJunkie\\Downloads\\SharpHound-v1.1.0.zip-&gt;SharpHound.exe; webfile:_C:\\Users\\CyberJunkie\\Downloads\\SharpHound-v1.1.0.zip|https://objects.githubusercontent.com/github-production-release-asset-2e65be/385323486/70d776cc-8f83-44d5-b226-2dccc4f7c1e3?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230327%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20230327T144228Z&amp;X-Amz-Expires=300&amp;X-Amz-Signature=f969ef5ca3eec150dc1e23623434adc1e4a444ba026423c32edf5e85d881a771&amp;X-Amz-SignedHeaders=host&amp;actor_id=0&amp;key_id=0&amp;repo_id=385323486&amp;response-content-disposition=attachment%3B%20filename%3DSharpHound-v1.1.0.zip&amp;response-content-type=application%2Foctet-stream|pid:3532,ProcessStart:133244017530289775</Data>\n    <Data Name="Origin ID">4</Data>\n    <Data Name="Origin Name">Internet</Data>\n    <Data Name="Execution ID">0</Data>\n    <Data Name="Execution Name">Unknown</Data>\n    <Data Name="Type ID">0</Data>\n    <Data Name="Type Name">Concrete</Data>\n    <Data Name="Pre Execution Status">0</Data>\n    <Data Name="Action ID">2</Data>\n    <Data Name="Action Name">Quarantine</Data>\n    <Data Name="Unused4">\n    </Data>\n    <Data Name="Error Code">0x80508023</Data>\n    <Data Name="Error Description">The program could not find the malware and other potentially unwanted software on this device. </Data>\n    <Data Name="Unused5">\n    </Data>\n    <Data Name="Post Clean Status">0</Data>\n    <Data Name="Additional Actions ID">0</Data>\n    <Data Name="Additional Actions String">No additional actions required</Data>\n    <Data Name="Remediation User">NT AUTHORITY\\SYSTEM</Data>\n    <Data Name="Unused6">\n    </Data>\n    <Data Name="Security intelligence Version">AV: 1.385.1261.0, AS: 1.385.1261.0, NIS: 1.385.1261.0</Data>\n    <Data Name="Engine Version">AM: 1.1.20100.6, NIS: 1.1.20100.6</Data>\n  </EventData>\n</Event>\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"SharpHound\n"})}),"\n",(0,t.jsx)(a.h2,{id:"task-9",children:"Task 9"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u5f15\u53d1\u8b66\u62a5\u7684\u6076\u610f\u8f6f\u4ef6\u7684\u5b8c\u6574\u8def\u5f84\u662f\u4ec0\u4e48\uff1f"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"\u4e0a\u6587\u5c31\u6709"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"C:\\Users\\CyberJunkie\\Downloads\\SharpHound-v1.1.0.zip\n"})}),"\n",(0,t.jsx)(a.h2,{id:"task-10",children:"Task 10"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u9632\u75c5\u6bd2\u8f6f\u4ef6\u91c7\u53d6\u4e86\u4ec0\u4e48\u884c\u52a8\uff1f"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"\u4e0a\u6587\u5c31\u6709"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"Quarantine\n"})}),"\n",(0,t.jsx)(a.h2,{id:"task-11",children:"Task 11"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u7528\u6237\u4f7f\u7528 PowerShell \u6267\u884c\u4e86\u54ea\u4e2a\u547d\u4ee4\uff1f"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["\u6267\u884c\u547d\u4ee4\u7684\u4e8b\u4ef6ID\u4e3a",(0,t.jsx)(a.code,{children:"4104"}),"\uff0c\u5b9a\u4f4d\u5230\u4ee5\u4e0b\u8bb0\u5f55"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">\n  <System>\n    <Provider Name="Microsoft-Windows-PowerShell" Guid="{a0c1853b-5c40-4b15-8766-3cf1c58f985a}" />\n    <EventID>4104</EventID>\n    <Version>1</Version>\n    <Level>5</Level>\n    <Task>2</Task>\n    <Opcode>15</Opcode>\n    <Keywords>0x0</Keywords>\n    <TimeCreated SystemTime="2023-03-27T14:58:33.3647699Z" />\n    <EventRecordID>571</EventRecordID>\n    <Correlation ActivityID="{986a053f-60b9-0001-a819-6a98b960d901}" />\n    <Execution ProcessID="7152" ThreadID="2000" />\n    <Channel>Microsoft-Windows-PowerShell/Operational</Channel>\n    <Computer>DESKTOP-887GK2L</Computer>\n    <Security UserID="S-1-5-21-3393683511-3463148672-371912004-1001" />\n  </System>\n  <EventData>\n    <Data Name="MessageNumber">1</Data>\n    <Data Name="MessageTotal">1</Data>\n    <Data Name="ScriptBlockText">Get-FileHash -Algorithm md5 .\\Desktop\\Automation-HTB.ps1</Data>\n    <Data Name="ScriptBlockId">b4fcf72f-abdc-4a84-923f-8e06a758000b</Data>\n    <Data Name="Path">\n    </Data>\n  </EventData>\n</Event>\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"Get-FileHash -Algorithm md5 .\\Desktop\\Automation-HTB.ps1\n"})}),"\n",(0,t.jsx)(a.h2,{id:"task-12",children:"Task 12"}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"\u6211\u4eec\u6000\u7591\u7528\u6237\u5220\u9664\u4e86\u4e00\u4e9b\u4e8b\u4ef6\u65e5\u5fd7\u3002\u88ab\u6e05\u9664\u7684\u4e8b\u4ef6\u65e5\u5fd7\u6587\u4ef6\u662f\u54ea\u4e2a\uff1f"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["\u65e5\u5fd7\u6e05\u7a7a\u7684\u4e8b\u4ef6 ID \u4e3a ",(0,t.jsx)(a.code,{children:"104"}),"\uff0c\u5c31\u53ef\u4ee5\u5b9a\u4f4d\u5230\u4ee5\u4e0b\u65e5\u5fd7\u8bb0\u5f55"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-xml",children:'<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">\n  <System>\n    <Provider Name="Microsoft-Windows-Eventlog" Guid="{fc65ddd8-d6ef-4962-83d5-6e5cfe9ce148}" />\n    <EventID>104</EventID>\n    <Version>0</Version>\n    <Level>4</Level>\n    <Task>104</Task>\n    <Opcode>0</Opcode>\n    <Keywords>0x8000000000000000</Keywords>\n    <TimeCreated SystemTime="2023-03-27T15:01:56.5158362Z" />\n    <EventRecordID>2186</EventRecordID>\n    <Correlation />\n    <Execution ProcessID="1332" ThreadID="5332" />\n    <Channel>System</Channel>\n    <Computer>DESKTOP-887GK2L</Computer>\n    <Security UserID="S-1-5-21-3393683511-3463148672-371912004-1001" />\n  </System>\n  <UserData>\n    <LogFileCleared xmlns="http://manifests.microsoft.com/win/2004/08/windows/eventlog">\n      <SubjectUserName>CyberJunkie</SubjectUserName>\n      <SubjectDomainName>DESKTOP-887GK2L</SubjectDomainName>\n      <Channel>Microsoft-Windows-Windows Firewall With Advanced Security/Firewall</Channel>\n      <BackupPath>\n      </BackupPath>\n    </LogFileCleared>\n  </UserData>\n</Event>\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-plaintext",metastring:'title="Answer"',children:"Microsoft-Windows-Windows Firewall With Advanced Security/Firewall\n"})})]})}function m(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5662:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/files/logjammer-bb55a8f09590aff2862c633dbe9cda65.zip"},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>i});var t=n(7294);const s={},r=t.createContext(s);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);