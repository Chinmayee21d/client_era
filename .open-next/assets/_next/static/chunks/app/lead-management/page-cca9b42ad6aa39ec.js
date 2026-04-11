(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{1732:(e,a,r)=>{"use strict";r.d(a,{default:()=>x});var t=r(5155),i=r(2115),l=r(642),s=r(7896),o=r(7915),n=r(1093),d=r(4980),c=r(4514);let p=[{id:"linkedin",icon:o.A,label:"LinkedIn Import",rule:"Always requires human review",outcome:"Manual",outcomeCol:"#F5A623",bg:"rgba(245,166,35,.06)",border:"rgba(245,166,35,.2)",color:"#F5A623",detail:"LinkedIn profiles require a human to verify intent before entering the pipeline. A qualification task is assigned to the lead owner with a 48-hour SLA."},{id:"webform",icon:n.A,label:"Web Form — Known Domain",rule:"Auto-qualifies immediately",outcome:"Auto",outcomeCol:"#18B87A",bg:"rgba(24,184,122,.06)",border:"rgba(24,184,122,.2)",color:"#18B87A",detail:"If the email domain matches a known company in your database, the lead is auto-qualified with source tracking and enters the pipeline immediately."},{id:"revenue",icon:d.A,label:"Revenue > Threshold",rule:"Requires manager sign-off",outcome:"Escalate",outcomeCol:"#8B5CF6",bg:"rgba(139,92,246,.06)",border:"rgba(139,92,246,.2)",color:"#8B5CF6",detail:"Leads with estimated revenue above your enterprise threshold are routed to manager review before entering the pipeline. Both owner and manager are notified."},{id:"default",icon:c.A,label:"Default — No Action Taken",rule:"Auto-qualifies after 24 hours",outcome:"Timed",outcomeCol:"#3470F0",bg:"rgba(52,112,240,.06)",border:"rgba(52,112,240,.2)",color:"#3470F0",detail:"If no one acts on an unqualified lead within 24 hours, it auto-qualifies according to default policy. Both owner and manager are notified at the 12-hour mark."}];function m({rule:e,isMobile:a}){return(0,t.jsxs)("div",{style:{background:"var(--surface)",borderRadius:a?16:18,border:`1.5px solid ${e.border}`,padding:a?"22px 20px":"28px 26px",boxShadow:"0 8px 40px rgba(0,0,0,.3)",marginTop:8*!!a,marginBottom:24*!!a,width:"100%"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:20,paddingBottom:16,borderBottom:"1px solid var(--border)"},children:[(0,t.jsx)("div",{style:{width:38,height:38,borderRadius:10,background:e.bg,border:`1px solid ${e.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:e.color},children:(0,t.jsx)(e.icon,{size:20,strokeWidth:2})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:e.color},children:[e.outcome," Qualification"]}),(0,t.jsx)("div",{style:{fontFamily:"'Fraunces', serif",fontSize:18,fontWeight:400,color:"var(--text)"},children:e.label})]})]}),(0,t.jsx)("p",{style:{fontSize:14,color:"var(--text2)",lineHeight:1.72,marginBottom:20},children:e.detail}),(0,t.jsxs)("div",{style:{background:"rgba(255,255,255,.03)",border:"1px solid var(--border)",borderRadius:12,padding:"14px 16px"},children:[(0,t.jsx)("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,color:"var(--text3)",marginBottom:10},children:"Qualification Queue"}),(0,t.jsx)("p",{style:{fontSize:12.5,color:"var(--text2)",lineHeight:1.65,margin:0},children:"Unqualified leads surface in a visible queue for the lead's owner and their manager — no lead goes unnoticed."})]})]})}function x(){let[e,a]=(0,i.useState)("webform"),[r,o]=(0,i.useState)(0),n=p.find(a=>a.id===e)||p[1];return(0,t.jsxs)("section",{id:"qualification",style:{background:"var(--navy)"},children:[(0,t.jsx)("style",{children:`
        .lm-qual-tab {
          display: flex; align-items: center; gap: 10px;
          padding: 14px 18px; border-radius: 12px;
          border: 1.5px solid transparent;
          cursor: pointer; transition: all .3s;
        }
        .lm-qual-tab:hover:not(.lm-qual-active) {
          background: var(--surface); border-color: var(--border);
        }
        .lm-qual-active { background: var(--surface2); box-shadow: 0 8px 32px rgba(0,0,0,.2); }
        .lm-qual-tab-icon {
          width: 36px; height: 36px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform .3s;
        }
        .lm-qual-tab:hover .lm-qual-tab-icon { transform: scale(1.1) rotate(-4deg); }
        .lm-qual-outcome {
          display: inline-flex; font-size: 9px; font-weight: 700;
          padding: 2px 8px; border-radius: 100px; text-transform: uppercase; letter-spacing: .5px;
          margin-left: auto; flex-shrink: 0;
        }

        .lm-qual-desktop { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; alignItems: start; }
        .lm-qual-mobile { display: none; }

        @media (max-width: 900px) { 
          .lm-qual-desktop { display: none; }
          .lm-qual-mobile { display: flex; flex-direction: column; gap: 0; }
        }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{marginBottom:48},children:[(0,t.jsxs)("div",{className:"eyebrow",children:[(0,t.jsx)("span",{className:"ey-line"}),"Feature 5 — Automated Lead Qualification"]}),(0,t.jsxs)("h2",{className:"h2",children:["Qualification That Fits ",(0,t.jsx)("em",{children:"Your Rules"})," —",(0,t.jsx)("br",{}),"Not Ours."]}),(0,t.jsx)("p",{className:"lead",children:"Whether a lead needs human review before entering the pipeline is fully configurable per tenant, per source channel, and per criteria rule. Set the policy once — the system enforces it every time."})]}),(0,t.jsxs)("div",{className:"reveal lm-qual-desktop",style:{transitionDelay:".15s"},children:[(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:10},children:p.map(r=>(0,t.jsxs)("div",{className:`lm-qual-tab ${e===r.id?"lm-qual-active":""}`,style:{borderColor:e===r.id?r.border:"transparent"},onClick:()=>a(r.id),children:[(0,t.jsx)("div",{className:"lm-qual-tab-icon",style:{background:r.bg,border:`1px solid ${r.border}`,color:r.color},children:(0,t.jsx)(r.icon,{size:18,strokeWidth:2})}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsx)("div",{style:{fontSize:12,fontWeight:600,color:e===r.id?r.color:"var(--text2)"},children:r.label}),(0,t.jsx)("div",{style:{fontSize:11,color:"var(--text3)"},children:r.rule})]}),(0,t.jsx)("span",{className:"lm-qual-outcome",style:{background:r.bg,border:`1px solid ${r.border}`,color:r.color},children:r.outcome})]},r.id))}),(0,t.jsx)(l.N,{mode:"wait",children:(0,t.jsx)(s.P.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.3},children:(0,t.jsx)(m,{rule:n,isMobile:!1})},n.id)})]}),(0,t.jsxs)("div",{className:"lm-qual-mobile reveal",children:[(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:20},children:p.map((e,a)=>(0,t.jsxs)("div",{className:"lm-qual-tab",style:{borderColor:r===a?e.border:"transparent",background:r===a?"var(--surface2)":"var(--surface)",cursor:"pointer"},onClick:()=>o(a),children:[(0,t.jsx)("div",{className:"lm-qual-tab-icon",style:{background:e.bg,border:`1px solid ${e.border}`,color:e.color},children:(0,t.jsx)(e.icon,{size:18,strokeWidth:2})}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsx)("div",{style:{fontSize:12,fontWeight:600,color:r===a?e.color:"var(--text2)"},children:e.label}),(0,t.jsx)("div",{style:{fontSize:11,color:"var(--text3)"},children:e.rule})]}),(0,t.jsx)("span",{className:"lm-qual-outcome",style:{background:e.bg,border:`1px solid ${e.border}`,color:e.color},children:e.outcome})]},e.id))}),(0,t.jsx)(m,{rule:p[r],isMobile:!0})]})]})]})}},2977:(e,a,r)=>{"use strict";r.d(a,{default:()=>m});var t=r(5155),i=r(7896),l=r(49),s=r(538),o=r(7635),n=r(4514),d=r(1628);let c=[{label:"Company",value:"BlueSky Logistics Pvt Ltd",kept:!0},{label:"Contact",value:"Anita Roy \xb7 VP Operations",kept:!0},{label:"Source",value:"LinkedIn Import \xb7 March 2026",kept:!0},{label:"Lead Score",value:"82 / 100 at conversion",kept:!0},{label:"Campaign",value:"Logistics Growth Q1",kept:!0},{label:"Visit History",value:"3 meetings logged",kept:!0}],p=[{Icon:l.A,title:"No Re-entry on Conversion",desc:"When you click Convert, ClientEra creates an Account, Contact, and Deal — optionally a Sales Quote — in one step. Zero redundant data entry."},{Icon:s.A,title:"Full History Travels Forward",desc:"The campaign touch, form fill, enrichment data, qualification notes, and sales hand-off notes all travel onto the new Account record. Reps don't start blind."},{Icon:o.A,title:"Duplicate Detection",desc:"Before creating a new Account or Contact, ClientEra checks for existing matches by domain, company name, and contact details. You choose to merge or create new."}];function m(){return(0,t.jsxs)("section",{id:"conversion",style:{background:"var(--navy)"},children:[(0,t.jsx)("style",{children:`
        .lm-conv-field {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 14px; border-radius: 8px; transition: background .2s; cursor: default;
        }
        .lm-conv-field:hover { background: rgba(255,255,255,.04); }
        .lm-conv-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent; transition: all .28s; cursor: default;
        }
        .lm-conv-feat:hover {
          background: rgba(255,255,255,.04); border-color: rgba(255,255,255,.07);
          transform: translateX(6px);
        }
        .lm-conv-feat-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: var(--gold-bg); border: 1px solid rgba(196,154,60,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); flex-shrink: 0; transition: transform .3s;
        }
        .lm-conv-feat:hover .lm-conv-feat-icon { transform: scale(1.1) rotate(-4deg); }
        @media (max-width: 900px) { .lm-conv-cols { grid-template-columns: 1fr !important; } }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{marginBottom:48},children:[(0,t.jsxs)("div",{className:"eyebrow",children:[(0,t.jsx)("span",{className:"ey-line"}),"Feature 7 — Lead Conversion"]}),(0,t.jsxs)("h2",{className:"h2",children:["One Click to Convert —",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Zero Context Lost."})]}),(0,t.jsx)("p",{className:"lead",children:"Converting a lead to a customer shouldn't mean starting over. In ClientEra, the lead becomes the account. Everything travels forward."})]}),(0,t.jsxs)("div",{className:"reveal lm-conv-cols",style:{display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:48,alignItems:"center",transitionDelay:".15s"},children:[(0,t.jsxs)("div",{style:{background:"rgba(13,28,52,.88)",backdropFilter:"blur(22px)",border:"1px solid var(--border2)",borderRadius:16,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,.4)"},children:[(0,t.jsxs)("div",{className:"ce-card-titlebar",children:[(0,t.jsx)("span",{className:"ce-wdot ce-wd-r"}),(0,t.jsx)("span",{className:"ce-wdot ce-wd-y"}),(0,t.jsx)("span",{className:"ce-wdot ce-wd-g"}),(0,t.jsx)("span",{className:"ce-card-lbl",children:"Convert Lead → Account + Deal"})]}),(0,t.jsxs)("div",{style:{padding:"16px 18px"},children:[(0,t.jsx)("div",{style:{fontSize:8,fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,color:"var(--text3)",marginBottom:10},children:"Fields carried forward — automatically"}),c.map((e,a)=>(0,t.jsxs)(i.P.div,{className:"lm-conv-field",initial:{opacity:0,x:-12},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.08*a},children:[(0,t.jsx)(n.A,{size:13,style:{color:"#18B87A",flexShrink:0},strokeWidth:2.5}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsxs)("span",{style:{fontSize:10,color:"var(--text3)",marginRight:8},children:[e.label,":"]}),(0,t.jsx)("span",{style:{fontSize:12,fontWeight:600,color:"var(--text)"},children:e.value})]})]},e.label)),(0,t.jsxs)(i.P.div,{initial:{opacity:0,y:12},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.6},style:{marginTop:16,padding:"12px 16px",background:"rgba(24,184,122,.08)",border:"1px solid rgba(24,184,122,.22)",borderRadius:12,display:"flex",alignItems:"center",gap:10},children:[(0,t.jsxs)("div",{style:{flex:1},children:[(0,t.jsx)("div",{style:{fontSize:11,fontWeight:700,color:"var(--green)",marginBottom:2},children:"Conversion Complete"}),(0,t.jsx)("div",{style:{fontSize:10,color:"var(--text3)"},children:"Account, Contact, Deal and Quote created \xb7 0 fields re-entered"})]}),(0,t.jsx)(d.A,{size:16,style:{color:"var(--green)",flexShrink:0}})]})]})]}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:p.map((e,a)=>(0,t.jsxs)(i.P.div,{className:"lm-conv-feat",initial:{opacity:0,x:16},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.1*a},children:[(0,t.jsx)("div",{className:"lm-conv-feat-icon",children:(0,t.jsx)(e.Icon,{size:20,strokeWidth:2})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:14,fontWeight:600,color:"var(--text)",marginBottom:4},children:e.title}),(0,t.jsx)("div",{style:{fontSize:12.5,color:"var(--text2)",lineHeight:1.6},children:e.desc})]})]},e.title))})]})]})]})}},4309:(e,a,r)=>{"use strict";r.d(a,{default:()=>m});var t=r(5155),i=r(7896),l=r(4832),s=r(7233),o=r(2289),n=r(7099),d=r(1975),c=r(2140);let p=[{Icon:l.A,title:"Web-to-Lead Forms",desc:"Embeddable forms on your website or landing pages. Every submission creates a lead with source, UTM parameters, and campaign attribution automatically applied.",color:"#2D5BE3",bg:"rgba(45,91,227,.08)",border:"rgba(45,91,227,.2)"},{Icon:s.A,title:"LinkedIn Import",desc:"Save a LinkedIn profile as a lead in one click. Professional data pre-populated via the enrichment engine. Bulk import supported.",color:"#0A66C2",bg:"rgba(10,102,194,.08)",border:"rgba(10,102,194,.2)"},{Icon:o.A,title:"Email Campaign Clicks",desc:"Contacts who click and fill a campaign form become leads attributed to that specific campaign and touchpoint automatically.",color:"var(--gold)",bg:"rgba(196,154,60,.08)",border:"rgba(196,154,60,.2)"},{Icon:n.A,title:"Inbound RfQ",desc:"A company emails a quote request before any relationship exists? They're a lead. Instantly tracked, not lost in someone's inbox.",color:"#8B5CF6",bg:"rgba(139,92,246,.08)",border:"rgba(139,92,246,.2)"},{Icon:d.A,title:"Manual Entry & CSV",desc:"For outbound prospecting, referrals, and event lists. Bulk import with field mapping and deduplication built in.",color:"var(--green)",bg:"rgba(24,184,122,.08)",border:"rgba(24,184,122,.2)"},{Icon:c.A,title:"Event Registrations",desc:"Trade show or webinar attendees become leads attributed to that event campaign — zero manual work after the event.",color:"#F59E0B",bg:"rgba(245,158,11,.08)",border:"rgba(245,158,11,.2)"}];function m(){return(0,t.jsxs)("section",{id:"capture",style:{background:"#f8f8f6",overflow:"hidden"},children:[(0,t.jsx)("style",{children:`
        .lm-cap-card {
          background: #fff; 
          border: 1px solid rgba(0,0,0,.04);
          border-radius: 20px; 
          padding: 24px 22px;
          display: flex; 
          flex-direction: column;
          align-items: flex-start; 
          gap: 18px;
          transition: all .4s cubic-bezier(.22, 1, .36, 1); 
          cursor: default;
          height: 100%;
          position: relative;
          box-shadow: 0 4px 12px rgba(0,0,0,.02);
        }
        
        .lm-cap-card:hover { 
          transform: translateY(-6px); 
          box-shadow: 0 24px 48px rgba(0,0,0,.08);
          border-color: rgba(0,0,0,.08);
        }

        .lm-cap-icon {
          width: 48px; 
          height: 48px; 
          border-radius: 14px;
          display: flex; 
          align-items: center; 
          justify-content: center;
          flex-shrink: 0; 
          transition: all .4s cubic-bezier(.22, 1, .36, 1);
          position: relative;
        }

        .lm-cap-card:hover .lm-cap-icon { 
          transform: rotate(-8deg) scale(1.1); 
        }

        /* Decorative bottom accent */
        .lm-cap-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 24px; right: 24px;
          height: 2px;
          background: var(--gold);
          transform: scaleX(0);
          transition: transform .4s ease;
          border-radius: 2px;
          opacity: 0.6;
        }
        .lm-cap-card:hover::after {
          transform: scaleX(1);
        }
        
        .lm-cap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .lm-cap-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .lm-cap-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .lm-cap-card { padding: 20px 16px; gap: 14px; }
          .lm-cap-icon { width: 40px; height: 40px; }
        }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{marginBottom:60},children:[(0,t.jsxs)("div",{className:"eyebrow eyebrow-dark",children:[(0,t.jsx)("span",{className:"ey-line"}),"Feature 2 — Lead Capture & Attribution"]}),(0,t.jsxs)("h2",{className:"h2 h2-ink",children:["Every Lead. Tracked From",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"the First Touch."})]}),(0,t.jsx)("p",{className:"lead lead-ink",children:"ClientEra captures leads from every channel and tags every single one back to its origin. Every lead record shows its complete origin: channel, campaign, specific asset, and exact timestamp of first engagement."})]}),(0,t.jsx)("div",{className:"reveal lm-cap-grid",children:p.map((e,a)=>(0,t.jsxs)(i.P.div,{className:"lm-cap-card",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1*a,ease:[.22,1,.36,1]},whileHover:{scale:1.02},children:[(0,t.jsx)("div",{className:"lm-cap-icon",style:{background:e.bg,border:`1.5px solid ${e.border}`,color:e.color,boxShadow:`0 8px 16px -4px ${e.border}`},children:(0,t.jsx)(e.Icon,{size:22,strokeWidth:2.2})}),(0,t.jsxs)("div",{style:{flex:1},children:[(0,t.jsx)("div",{style:{fontSize:14,fontWeight:700,color:"var(--navy)",marginBottom:8,letterSpacing:"-0.01em"},children:e.title}),(0,t.jsx)("div",{style:{fontSize:12,color:"var(--ink2)",lineHeight:1.6,opacity:.85},children:e.desc})]})]},e.title))})]})]})}},4477:(e,a,r)=>{"use strict";r.d(a,{default:()=>x});var t=r(5155),i=r(3987),l=r(2508),s=r(49),o=r(8368),n=r(4903),d=r(8515),c=r(9),p=r(3923);let m=[{label:"Unqualified Lead",Icon:i.A,color:"#56728F"},{label:"Qualified Lead",Icon:l.A,color:"#3470F0"},{label:"Account: Prospect",Icon:s.A,color:"#8B5CF6"},{label:"RfQ / Quote",Icon:o.A,color:"#C49A3C"},{label:"Deal in Pipeline",Icon:n.A,color:"#18B87A"},{label:"SO Created: Client",Icon:d.A,color:"#22C55E"},{label:"Invoice",Icon:c.A,color:"#F59E0B"},{label:"Repeat",Icon:p.A,color:"#C49A3C"}];function x(){return(0,t.jsxs)("section",{id:"approach",className:"section-light",children:[(0,t.jsx)("style",{children:`
        .lm-flow-stage {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          position: relative;
        }
        .lm-flow-icon {
          width: 52px; height: 52px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          border: 1.5px solid;
          background: rgba(255,255,255,0.6);
          transition: transform .3s; cursor: default;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          backdrop-filter: blur(4px);
        }
        .lm-flow-stage:hover .lm-flow-icon { transform: translateY(-5px) scale(1.08); }
        .lm-flow-label {
          font-size: 10px; font-weight: 600; text-align: center;
          text-transform: uppercase; letter-spacing: 1px;
          max-width: 70px; line-height: 1.3;
        }
        .lm-flow-arrow {
          width: 28px; flex-shrink: 0; align-self: flex-start; margin-top: 18px;
          color: var(--ink3); font-size: 14px; text-align: center;
        }
        .lm-blockquote {
          border-left: 2px solid var(--ink3);
          padding-left: 24px; margin-top: 48px;
          font-family: 'Fraunces', serif; font-size: 20px;
          font-style: italic; color: var(--ink2); line-height: 1.55;
          font-weight: 300;
        }
        .lm-flow-wrap {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .lm-flow-wrap::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 700px) {
          .lm-flow-wrap { 
            flex-wrap: nowrap !important; 
            justify-content: flex-start !important; 
            overflow-x: auto !important;
            padding: 24px 16px !important;
            gap: 4px !important;
          }
          .lm-flow-arrow { display: block !important; margin-top: 18px !important; }
          .lm-approach-cards { grid-template-columns: 1fr !important; }
          .lm-flow-stage { min-width: 78px; }
        }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{maxWidth:740,marginBottom:56},children:[(0,t.jsxs)("div",{className:"eyebrow eyebrow-dark",children:[(0,t.jsx)("span",{className:"ey-line"}),"The ClientEra Approach"]}),(0,t.jsxs)("h2",{className:"h2 h2-ink",children:["One Entity. One Timeline.",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Zero Re-entry."})]}),(0,t.jsx)("p",{className:"lead lead-ink",children:"In ClientEra, a Lead and an Account are the same entity at different lifecycle stages. When a lead converts, nothing is rebuilt and nothing is lost. The campaign touch, the form fill, the enrichment data, the sales notes — all of it travels forward on a single, unbroken timeline."})]}),(0,t.jsx)("div",{className:"reveal lm-flow-wrap",style:{display:"flex",alignItems:"flex-start",gap:0,padding:"32px",borderRadius:20,background:"rgba(255,255,255,0.65)",border:"1px solid rgba(0,0,0,0.07)",backdropFilter:"blur(8px)",boxShadow:"0 8px 32px rgba(0,0,0,0.06)",overflowX:"auto",transitionDelay:".12s"},children:m.map((e,a)=>(0,t.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",flex:a<m.length-1?"1":"none",minWidth:72},children:[(0,t.jsxs)("div",{className:"lm-flow-stage",children:[(0,t.jsx)("div",{className:"lm-flow-icon",style:{borderColor:e.color+"50",color:e.color},children:(0,t.jsx)(e.Icon,{size:20,strokeWidth:1.8})}),(0,t.jsx)("span",{className:"lm-flow-label",style:{color:e.color},children:e.label})]}),a<m.length-1&&(0,t.jsx)("div",{className:"lm-flow-arrow",children:"→"})]},e.label))}),(0,t.jsxs)("div",{className:"reveal approach-cards",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,marginTop:40,transitionDelay:".2s"},children:[(0,t.jsxs)("div",{style:{padding:"28px 32px",borderRadius:16,background:"rgba(10,20,40,0.05)",border:"1px solid rgba(10,20,40,0.10)"},children:[(0,t.jsx)("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:"var(--ink3)",marginBottom:10},children:"Old systems"}),(0,t.jsx)("p",{style:{fontSize:15,color:"var(--ink3)",lineHeight:1.65,margin:0},children:"Record what happened — then require someone to manually copy data between tools at every stage transition."})]}),(0,t.jsxs)("div",{style:{padding:"28px 32px",borderRadius:16,background:"rgba(52,112,240,0.06)",border:"1.5px solid rgba(52,112,240,0.2)"},children:[(0,t.jsx)("div",{style:{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:"#0A2D80",marginBottom:10},children:"ClientEra"}),(0,t.jsx)("p",{style:{fontSize:15,color:"var(--ink2)",lineHeight:1.65,margin:0},children:"Decides what should happen next — and executes it automatically on one unbroken entity record."})]})]}),(0,t.jsx)("blockquote",{className:"lm-blockquote reveal",style:{transitionDelay:".28s"},children:'"Old systems record what happened. ClientEra decides what should happen next — and executes it."'})]})]})}},6038:(e,a,r)=>{"use strict";r.d(a,{default:()=>p});var t=r(5155),i=r(7896),l=r(2622),s=r(1025),o=r(8817),n=r(1628);let d=[{Icon:l.A,title:"Dynamic Segmentation",desc:"Build audience segments from any combination of lead attributes — industry, geography, score range, source channel, engagement behaviour, or custom fields. Segments update automatically.",color:"var(--gold)",bg:"rgba(196,154,60,.08)",border:"rgba(196,154,60,.2)"},{Icon:s.A,title:"Multi-Touch Nurture Sequences",desc:"Configurable triggers (time delay, engagement event, or score change), communication types (email, LinkedIn touch, SDR call task), and branching logic based on recipient response.",color:"#3470F0",bg:"rgba(52,112,240,.08)",border:"rgba(52,112,240,.2)"},{Icon:o.A,title:"Suppression Management",desc:"Unsubscribes, bounces, and opt-outs managed natively. Suppression rules cascade across all campaign types by default — configurable to channel-specific suppression.",color:"#18B87A",bg:"rgba(24,184,122,.08)",border:"rgba(24,184,122,.2)"}],c=[{day:"Day 0",action:"Welcome Email → Score below 75 on open",color:"#3470F0",status:"Sent"},{day:"Day 3",action:"Case Study Email → Opens tracked",color:"#C49A3C",status:"Sent"},{day:"Day 7",action:"SDR Call Task assigned → No click on Day 3",color:"#8B5CF6",status:"Active"},{day:"Day 14",action:"LinkedIn Touch Suggestion → Engagement check",color:"#18B87A",status:"Pending"},{day:"Day 21",action:"Re-score evaluation → MQL or extend hold",color:"#F59E0B",status:"Scheduled"}];function p(){return(0,t.jsxs)("section",{id:"nurture",style:{background:"#f8f8f6"},children:[(0,t.jsx)("style",{children:`
        .lm-nur-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent; transition: all .28s; cursor: default;
        }
        .lm-nur-feat:hover {
          background: rgba(0,0,0,.03); border-color: rgba(0,0,0,.07);
          transform: translateX(6px);
        }
        .lm-nur-feat-icon {
          width: 40px; height: 40px; border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: transform .3s;
        }
        .lm-nur-feat:hover .lm-nur-feat-icon { transform: scale(1.1) rotate(-4deg); }
        .lm-seq-row {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 10px 14px; border-radius: 10px;
          background: rgba(0,0,0,.025); border: 1px solid rgba(0,0,0,.05);
          margin-bottom: 8px; transition: all .2s; cursor: default;
        }
        .lm-seq-row:hover { background: rgba(0,0,0,.05); transform: translateX(4px); }
        @media (max-width: 900px) { .lm-nur-cols { grid-template-columns: 1fr !important; } }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{marginBottom:48},children:[(0,t.jsxs)("div",{className:"eyebrow eyebrow-dark",children:[(0,t.jsx)("span",{className:"ey-line"}),"Feature 8 — Lead Nurture & Segmentation"]}),(0,t.jsxs)("h2",{className:"h2 h2-ink",children:["Leads That Aren't Ready Today —",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Won't Stay That Way."})]}),(0,t.jsx)("p",{className:"lead lead-ink",children:"Leads that don't reach the MQL threshold don't disappear. They stay in the nurture queue, managed through sequences and campaigns until their score crosses the line."})]}),(0,t.jsxs)("div",{className:"reveal lm-nur-cols",style:{display:"grid",gridTemplateColumns:"1fr 1.1fr",gap:48,alignItems:"start",transitionDelay:".15s"},children:[(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:d.map((e,a)=>(0,t.jsxs)(i.P.div,{className:"lm-nur-feat",initial:{opacity:0,x:-16},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.1*a},children:[(0,t.jsx)("div",{className:"lm-nur-feat-icon",style:{background:e.bg,border:`1px solid ${e.border}`,color:e.color},children:(0,t.jsx)(e.Icon,{size:20,strokeWidth:2})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:14,fontWeight:600,color:"var(--ink)",marginBottom:4},children:e.title}),(0,t.jsx)("div",{style:{fontSize:12.5,color:"var(--ink3)",lineHeight:1.6},children:e.desc})]})]},e.title))}),(0,t.jsxs)("div",{style:{background:"#fff",border:"1.5px solid rgba(0,0,0,.07)",borderRadius:18,overflow:"hidden",boxShadow:"0 8px 28px rgba(0,0,0,.06)"},children:[(0,t.jsxs)("div",{style:{padding:"12px 18px",borderBottom:"1px solid rgba(0,0,0,.06)",display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)(s.A,{size:15,style:{color:"#3470F0"}}),(0,t.jsx)("span",{style:{fontSize:10,fontWeight:700,color:"var(--ink3)",textTransform:"uppercase",letterSpacing:1.5},children:"Active Nurture Sequence — Anita Roy"})]}),(0,t.jsxs)("div",{style:{padding:"16px 18px"},children:[(0,t.jsx)("div",{style:{fontSize:8,fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,color:"var(--ink3)",marginBottom:12},children:"Sequence: Enterprise Late-Stage \xb7 Step 3 Active"}),c.map((e,a)=>(0,t.jsxs)(i.P.div,{className:"lm-seq-row",initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08*a},children:[(0,t.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",background:e.color,flexShrink:0,marginTop:4}}),(0,t.jsxs)("div",{style:{flex:1},children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:700,color:e.color,marginBottom:2},children:e.day}),(0,t.jsx)("div",{style:{fontSize:12,color:"var(--ink)",lineHeight:1.5},children:e.action})]}),(0,t.jsx)("div",{style:{fontSize:9,fontWeight:700,padding:"2px 8px",borderRadius:100,background:`${e.color}15`,border:`1px solid ${e.color}30`,color:e.color,flexShrink:0},children:e.status})]},e.day)),(0,t.jsxs)("div",{style:{marginTop:12,display:"flex",alignItems:"center",gap:8,color:"var(--ink3)",fontSize:11},children:[(0,t.jsx)(n.A,{size:13,style:{color:"#3470F0"}}),"Score will be re-evaluated at Day 21. If score ≥ 75, lead auto-promotes to MQL."]})]})]})]})]})]})}},7059:(e,a,r)=>{"use strict";r.d(a,{default:()=>x});var t=r(5155),i=r(2115),l=r(7896),s=r(6572),o=r(5398),n=r(7233),d=r(1628);let c=[{Icon:s.A,title:"Territory Prospecting Map",desc:"A live geographic map of your territory — accounts colour-coded by status, colleagues' accounts per sharing policy, and prospect markers for companies not yet in the platform."},{Icon:o.A,title:"Competitor Displacement Tracking",desc:"Accounts flagged as using a competitor are marked for prospecting. See the competitor, last noted date, and the displacement strategy — fed directly into your morning brief."},{Icon:n.A,title:"LinkedIn Sales Navigator Integration",desc:"Search LinkedIn Sales Navigator from within ClientEra. Save any profile as a lead in one click. Data is pre-populated via the enrichment engine. Saved searches sync automatically.",badge:"Growth & Enterprise"}],p=[{name:"Zeta Systems Pvt Ltd",industry:"Manufacturing",status:"Prospect",chance:82,color:"#18B87A"},{name:"BlueSky Logistics",industry:"Logistics",status:"Competitor Account",chance:61,color:"#F5A623"},{name:"Apex Pharma Ltd",industry:"Pharma",status:"Uncontacted",chance:74,color:"#3470F0"},{name:"Meridian Foods",industry:"FMCG",status:"Prospect",chance:55,color:"#C49A3C"}];function m({isMobile:e}){return(0,t.jsxs)("div",{style:{background:"rgba(13,28,52,.88)",backdropFilter:"blur(22px)",border:"1px solid var(--border2)",borderRadius:e?20:16,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,.4)",marginTop:12*!!e,marginBottom:32*!!e},children:[(0,t.jsxs)("div",{className:"ce-card-titlebar",children:[(0,t.jsx)("span",{className:"ce-wdot ce-wd-r"}),(0,t.jsx)("span",{className:"ce-wdot ce-wd-y"}),(0,t.jsx)("span",{className:"ce-wdot ce-wd-g"}),(0,t.jsx)("span",{className:"ce-card-lbl",children:"Territory Prospect Map — West Region"})]}),(0,t.jsxs)("div",{style:{padding:"16px 18px"},children:[(0,t.jsx)("div",{style:{fontSize:8,fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,color:"var(--text3)",marginBottom:10},children:"Prospect accounts in territory"}),p.map((e,a)=>(0,t.jsxs)(l.P.div,{className:"lm-pros-row",children:[(0,t.jsx)("div",{style:{width:7,height:7,borderRadius:"50%",background:e.color,flexShrink:0}}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsx)("div",{style:{fontSize:12,fontWeight:600,color:"var(--text)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),(0,t.jsx)("div",{style:{fontSize:10,color:"var(--text3)"},children:e.industry})]}),(0,t.jsx)("div",{style:{fontSize:10,color:"var(--text3)",marginRight:10,whiteSpace:"nowrap"},children:e.status}),(0,t.jsxs)("div",{style:{textAlign:"right",flexShrink:0},children:[(0,t.jsxs)("div",{style:{fontSize:13,fontWeight:700,color:e.color},children:[e.chance,"%"]}),(0,t.jsx)("div",{style:{fontSize:8,color:"var(--text3)"},children:"fit"})]})]},e.name)),(0,t.jsxs)("div",{style:{marginTop:14,padding:"10px 14px",background:"rgba(196,154,60,.06)",border:"1px solid rgba(196,154,60,.18)",borderRadius:10,display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)("div",{style:{width:6,height:6,borderRadius:"50%",background:"var(--gold)",animation:"pulse 2s infinite",flexShrink:0}}),(0,t.jsx)("span",{style:{fontSize:10,color:"var(--gold)",fontWeight:500},children:"4 new prospects found this week"}),(0,t.jsx)(d.A,{size:12,style:{color:"var(--gold)",marginLeft:"auto",flexShrink:0}})]})]})]})}function x(){let[e,a]=(0,i.useState)(0);return(0,t.jsxs)("section",{id:"prospecting",style:{background:"var(--navy)"},children:[(0,t.jsx)("style",{children:`
        .lm-pros-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent;
          transition: all .28s; cursor: default;
        }
        .lm-pros-feat:hover { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.07); transform: translateX(6px); }
        .lm-pros-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: var(--gold-bg); border: 1px solid rgba(196,154,60,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); flex-shrink: 0;
        }
        .lm-pros-row {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 10px;
        }
        .lm-pros-badge {
          display: inline-flex; font-size: 9px; font-weight: 700;
          padding: 2px 8px; border-radius: 100px; text-transform: uppercase;
          letter-spacing: .5px; background: rgba(196,154,60,.12);
          border: 1px solid rgba(196,154,60,.3); color: var(--gold);
          margin-top: 6px;
        }

        .lm-pros-desktop { display: grid; grid-template-columns: 1.15fr 1fr; gap: 80px; alignItems: center; }
        .lm-pros-mobile { display: none; }

        @media (max-width: 900px) { 
          .lm-pros-desktop { display: none; }
          .lm-pros-mobile { display: flex; flex-direction: column; gap: 0; }
        }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{marginBottom:48},children:[(0,t.jsxs)("div",{className:"eyebrow",children:[(0,t.jsx)("span",{className:"ey-line"}),"Feature 1 — Prospecting Tools"]}),(0,t.jsxs)("h2",{className:"h2",children:["Find the Leads Your",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Competitors Miss."})]}),(0,t.jsx)("p",{className:"lead",children:"ClientEra gives reps tools to identify, map, and prioritise prospects."})]}),(0,t.jsxs)("div",{className:"reveal lm-pros-desktop",style:{transitionDelay:".15s"},children:[(0,t.jsx)(m,{}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:c.map((e,a)=>(0,t.jsxs)(l.P.div,{className:"lm-pros-feat",initial:{opacity:0,x:16},whileInView:{opacity:1,x:0},transition:{delay:.1*a},children:[(0,t.jsx)("div",{className:"lm-pros-icon",children:(0,t.jsx)(e.Icon,{size:20,strokeWidth:2})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:14,fontWeight:600,color:"var(--text)",marginBottom:4},children:e.title}),(0,t.jsx)("div",{style:{fontSize:12.5,color:"var(--text2)",lineHeight:1.6},children:e.desc}),e.badge&&(0,t.jsx)("div",{className:"lm-pros-badge",children:e.badge})]})]},e.title))})]}),(0,t.jsxs)("div",{className:"lm-pros-mobile reveal",children:[(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:20},children:c.map((r,i)=>(0,t.jsxs)("div",{className:"lm-pros-feat",style:{background:e===i?"rgba(255,255,255,.08)":"rgba(255,255,255,.04)",borderColor:e===i?"rgba(196,154,60,.3)":"rgba(255,255,255,.07)",cursor:"pointer"},onClick:()=>a(i),children:[(0,t.jsx)("div",{className:"lm-pros-icon",children:(0,t.jsx)(r.Icon,{size:20,strokeWidth:2})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:14,fontWeight:600,color:e===i?"var(--gold)":"var(--text)",marginBottom:4},children:r.title}),(0,t.jsx)("div",{style:{fontSize:12.5,color:"var(--text2)",lineHeight:1.6},children:r.desc}),r.badge&&(0,t.jsx)("div",{className:"lm-pros-badge",children:r.badge})]})]},r.title))}),(0,t.jsx)(m,{isMobile:!0})]})]})]})}},7264:(e,a,r)=>{"use strict";r.d(a,{default:()=>m});var t=r(5155),i=r(2115),l=r(7896),s=r(4479),o=r(3961),n=r(6901);let d=[{name:"Priya Sharma",co:"Reliance Industries",fit:88,intent:94,total:91,status:"MQL Ready",statusCol:"#18B87A",badge:!0},{name:"Rahul Mehta",co:"Tata Consultancy",fit:72,intent:82,total:77,status:"In Queue",statusCol:"#818cf8",badge:!0},{name:"Anita Roy",co:"Bajaj Finance",fit:65,intent:58,total:62,status:"Nurture",statusCol:"#fbbf24",badge:!1},{name:"Kiran Das",co:"Infosys Ltd",fit:45,intent:35,total:40,status:"Cold",statusCol:"var(--text3)",badge:!1}],c=[{Icon:s.A,title:"Two-Dimensional Scoring",desc:"Fit Score (ICP match via enrichment data) + Intent Score (engagement depth and signals) = a single 0–100 score, updated continuously."},{Icon:o.A,title:"Configurable MQL Threshold",desc:"Set the score above which a lead automatically enters the handoff queue. Thresholds configurable per channel, industry segment, or campaign."},{Icon:n.A,title:"AI Signal Overlay",desc:"The AI surfaces leads showing buying intent before they cross your MQL threshold — always advisory, never overrides your configured scoring model."}];function p({activeFeatureIndex:e,isMobile:a}){return(0,t.jsxs)("div",{style:{background:"#fff",border:"1.5px solid rgba(0,0,0,.07)",borderRadius:18,overflow:"hidden",boxShadow:"0 8px 32px rgba(0,0,0,.06)",marginTop:16*!!a,marginBottom:32*!!a},children:[(0,t.jsxs)("div",{style:{padding:"14px 18px",borderBottom:"1px solid rgba(0,0,0,.06)",display:"flex",alignItems:"center",gap:10},children:[(0,t.jsx)("span",{style:{fontSize:10,fontWeight:700,color:"var(--ink3)",textTransform:"uppercase",letterSpacing:1.5},children:"Lead Score Board"}),(0,t.jsxs)("div",{style:{marginLeft:"auto",display:"flex",gap:14},children:[(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("div",{style:{fontSize:9,color:"#2D5BE3",fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"FIT"})}),(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("div",{style:{fontSize:9,color:"#18B87A",fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"INTENT"})}),(0,t.jsx)("div",{style:{textAlign:"center"},children:(0,t.jsx)("div",{style:{fontSize:9,color:"var(--ink)",fontWeight:700,textTransform:"uppercase",letterSpacing:1},children:"SCORE"})})]})]}),(0,t.jsxs)("div",{style:{padding:"16px 18px"},children:[d.map((e,a)=>(0,t.jsxs)(l.P.div,{className:"lm-score-lead-row",children:[(0,t.jsx)("div",{style:{width:30,height:30,borderRadius:8,background:"rgba(196,154,60,.12)",border:"1px solid rgba(196,154,60,.25)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"var(--gold)",flexShrink:0},children:e.name.charAt(0)}),(0,t.jsxs)("div",{style:{flex:1},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,t.jsx)("span",{style:{fontSize:12,fontWeight:600,color:"var(--ink)"},children:e.name}),e.badge&&(0,t.jsxs)("span",{className:"lm-ai-pill",children:[(0,t.jsx)(n.A,{size:8}),"AI"]})]}),(0,t.jsx)("div",{style:{fontSize:10,color:"var(--ink3)"},children:e.co})]}),(0,t.jsxs)("div",{style:{display:"flex",gap:14,marginLeft:8},children:[(0,t.jsx)("div",{style:{textAlign:"center",minWidth:28},children:(0,t.jsx)("div",{style:{fontSize:12,fontWeight:700,color:"#2D5BE3"},children:e.fit})}),(0,t.jsx)("div",{style:{textAlign:"center",minWidth:28},children:(0,t.jsx)("div",{style:{fontSize:12,fontWeight:700,color:"#18B87A"},children:e.intent})}),(0,t.jsxs)("div",{style:{textAlign:"center",minWidth:36},children:[(0,t.jsx)("div",{style:{fontFamily:"'Fraunces', serif",fontSize:16,fontWeight:400,color:e.statusCol,lineHeight:1},children:e.total}),(0,t.jsx)("div",{style:{fontSize:8,color:"var(--ink3)"},children:e.status})]})]})]},e.name)),(0,t.jsxs)("div",{style:{marginTop:16,padding:"10px 14px",background:"rgba(196,154,60,.06)",border:"1px solid rgba(196,154,60,.18)",borderRadius:10,display:"flex",alignItems:"center",gap:10},children:[(0,t.jsxs)("div",{style:{fontSize:10,color:"var(--gold)",fontWeight:500,flex:1},children:["MQL Threshold set at ",(0,t.jsx)("strong",{children:"75"})," — auto-handoff active"]}),(0,t.jsx)("span",{style:{fontSize:9,padding:"2px 8px",borderRadius:100,background:"rgba(24,184,122,.1)",border:"1px solid rgba(24,184,122,.25)",color:"var(--green)",fontWeight:700},children:"2 MQLs"})]})]})]})}function m(){let[e,a]=(0,i.useState)(0);return(0,t.jsxs)("section",{id:"scoring",style:{background:"#f8f8f6"},children:[(0,t.jsx)("style",{children:`
        .lm-score-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent; transition: all .28s; cursor: default;
        }
        .lm-score-feat:hover { background: rgba(0,0,0,.03); border-color: rgba(0,0,0,.07); transform: translateX(6px); }
        .lm-score-feat-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: rgba(45,91,227,.08); border: 1px solid rgba(45,91,227,.18);
          display: flex; align-items: center; justify-content: center;
          color: #2D5BE3; flex-shrink: 0;
        }
        .lm-score-lead-row {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 10px;
          background: rgba(0,0,0,.025); border: 1px solid rgba(0,0,0,.05);
          margin-bottom: 8px;
        }
        .lm-ai-pill {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 8px; font-weight: 700; padding: 2px 7px; border-radius: 100px;
          background: rgba(196,154,60,.1); border: 1px solid rgba(196,154,60,.25);
          color: var(--gold); text-transform: uppercase; letter-spacing: .8px;
        }

        .lm-scoring-desktop { display: grid; grid-template-columns: 1.1fr 1fr; gap: 80px; alignItems: center; }
        .lm-scoring-mobile { display: none; }

        @media (max-width: 900px) { 
          .lm-scoring-desktop { display: none; }
          .lm-scoring-mobile { display: flex; flex-direction: column; gap: 0; }
        }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{marginBottom:48},children:[(0,t.jsxs)("div",{className:"eyebrow eyebrow-dark",children:[(0,t.jsx)("span",{className:"ey-line"}),"Feature 4 — AI-Assisted Lead Scoring"]}),(0,t.jsxs)("h2",{className:"h2 h2-ink",children:["Know Which Leads Are Ready —",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Before Your Reps Ask."})]}),(0,t.jsx)("p",{className:"lead lead-ink",children:"ClientEra scores every lead on two dimensions, continuously. No manual rules to maintain. One combined 0–100 score, updated in real time."})]}),(0,t.jsxs)("div",{className:"reveal lm-scoring-desktop",style:{transitionDelay:".15s"},children:[(0,t.jsx)(p,{}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:c.map((e,a)=>(0,t.jsxs)(l.P.div,{className:"lm-score-feat",initial:{opacity:0,x:16},whileInView:{opacity:1,x:0},transition:{delay:.1*a},children:[(0,t.jsx)("div",{className:"lm-score-feat-icon",children:(0,t.jsx)(e.Icon,{size:20})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:14,fontWeight:600,color:"var(--ink)",marginBottom:4},children:e.title}),(0,t.jsx)("div",{style:{fontSize:12.5,color:"var(--ink3)",lineHeight:1.6},children:e.desc})]})]},e.title))})]}),(0,t.jsxs)("div",{className:"lm-scoring-mobile reveal",children:[(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:20},children:c.map((r,i)=>(0,t.jsxs)("div",{className:"lm-score-feat",style:{background:e===i?"rgba(0,0,0,.06)":"rgba(0,0,0,.03)",borderColor:e===i?"rgba(45,91,227,.25)":"rgba(0,0,0,.07)",cursor:"pointer"},onClick:()=>a(i),children:[(0,t.jsx)("div",{className:"lm-score-feat-icon",children:(0,t.jsx)(r.Icon,{size:20})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:14,fontWeight:600,color:e===i?"#2D5BE3":"var(--ink)",marginBottom:4},children:r.title}),(0,t.jsx)("div",{style:{fontSize:12.5,color:"var(--ink3)",lineHeight:1.6},children:r.desc})]})]},r.title))}),(0,t.jsx)(p,{activeFeatureIndex:e,isMobile:!0})]})]})]})}},7949:(e,a,r)=>{"use strict";r.d(a,{default:()=>s});var t=r(5155),i=r(2508),l=r(4290);function s(){return(0,t.jsxs)("section",{id:"hero",className:"ce-hero",style:{display:"block",minHeight:"92vh"},children:[(0,t.jsx)("style",{children:`
        .lm-ai-badge {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 3px 8px; border-radius: 20px;
          background: rgba(196,154,60,0.12); border: 1px solid rgba(196,154,60,0.3);
          font-size: 9px; font-weight: 700; color: var(--gold);
          text-transform: uppercase; letter-spacing: 1px;
        }
        .lm-live-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #22C55E;
          box-shadow: 0 0 8px #22C55E; animation: pulse 2s infinite;
        }
        .lm-lead-row {
          display: flex; align-items: center; gap: 12px;
          padding: 10px 14px; border-radius: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          transition: all .2s; cursor: default;
        }
        .lm-lead-row:hover { background: rgba(255,255,255,0.06); transform: translateX(3px); }
        @media (max-width: 900px) {
          .ce-hero { min-height: auto !important; padding-bottom: 0 !important; }
          .lm-hero-right-panel { display: none !important; }
          .lm-hero-grid-inner { 
            grid-template-columns: 1fr !important; 
            padding-top: 60px !important; 
            text-align: center !important; 
          }
          .ce-hero-left { align-items: center !important; }
          .ce-hero-sub { margin-left: auto !important; margin-right: auto !important; }
          
          .ce-hero-stats-bar { 
            mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent);
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            backdrop-filter: blur(14px);
            background: rgba(255,255,255,.032);
          }
          .ce-hsb-item { 
            flex: 0 0 160px; 
            scroll-snap-align: center;
            position: relative;
            overflow: hidden;
            transition: background .3s;
          }
          .ce-hsb-item::before {
            content: '';
            position: absolute; inset: 0;
            background: radial-gradient(ellipse at 50% 0%, rgba(196,154,60,.09) 0%, transparent 68%);
            opacity: 0; transition: opacity .35s;
          }
          .ce-hsb-item:hover::before { opacity: 1; }
          
          .ce-hsb-num {
            font-family: 'Fraunces', serif;
            font-size: clamp(22px, 2vw, 34px);
            color: var(--text); letter-spacing: -1px;
            line-height: 1; margin-bottom: 5px;
            position: relative; z-index: 1;
          }
          .ce-hsb-lbl {
            font-size: 9.5px;
            color: rgba(255,255,255,.36);
            letter-spacing: 1.5px;
            text-transform: uppercase; font-weight: 500;
            position: relative; z-index: 1;
          }
        }
        @media (max-width: 500px) {
          .ce-hero-h1 { font-size: clamp(34px, 10vw, 44px) !important; }
          .ce-hsb-item { flex: 0 0 140px; }
        }
      `}),(0,t.jsxs)("div",{className:"ce-hero-canvas",children:[(0,t.jsx)("div",{className:"ce-hero-bg"}),(0,t.jsx)("div",{className:"ce-hero-grid"}),(0,t.jsx)("div",{className:"ce-hero-orb1"}),(0,t.jsx)("div",{className:"ce-hero-orb2",style:{background:"rgba(196,154,60,.10)"}}),[{top:"20%",width:"38%",left:"-4%",delay:"-3s",dur:"9s"},{top:"38%",width:"45%",left:"8%",delay:"-6s",dur:"11s"},{top:"55%",width:"32%",left:"-6%",delay:"-1s",dur:"8s"},{top:"70%",width:"40%",left:"4%",delay:"-8s",dur:"12s"}].map((e,a)=>(0,t.jsx)("div",{className:"ce-data-line",style:{top:e.top,width:e.width,left:e.left,animationDelay:e.delay,animationDuration:e.dur}},a))]}),(0,t.jsxs)("div",{className:"wrap lm-hero-grid-inner",style:{position:"relative",zIndex:10,display:"grid",gridTemplateColumns:"minmax(0,1.05fr) minmax(0,0.95fr)",gap:"4vw",minHeight:"86vh",paddingTop:88,alignItems:"center"},children:[(0,t.jsxs)("div",{className:"ce-hero-left",style:{padding:0},children:[(0,t.jsxs)("div",{className:"ce-hero-eyebrow",children:[(0,t.jsx)("span",{className:"ey-line"}),"Lead Management Portal"]}),(0,t.jsxs)("h1",{className:"ce-hero-h1",style:{maxWidth:660,lineHeight:1.12},children:["Capture, Nurture, and",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Close"})," Every Lead."]}),(0,t.jsx)("p",{className:"ce-hero-sub",style:{maxWidth:580},children:"ClientEra automatically scores, intelligently routes, and seamlessly hands off prospects to your sales team — ensuring you never lose context, or a deal."}),(0,t.jsxs)("div",{className:"ce-hero-ctas",children:[(0,t.jsx)("a",{href:"#cta",className:"btn-hero-gold",children:"See It In Action →"}),(0,t.jsx)("a",{href:"#prospecting",className:"btn-hero-outline",children:"↓ Explore Features"})]})]}),(0,t.jsxs)("div",{className:"lm-hero-right-panel",style:{position:"relative",height:640,alignSelf:"center"},children:[(0,t.jsx)("style",{children:`
            .lm-glass {
              position: absolute;
              background: rgba(12, 22, 44, 0.72);
              backdrop-filter: blur(24px);
              -webkit-backdrop-filter: blur(24px);
              border: 1px solid rgba(255,255,255,0.09);
              border-radius: 18px;
              box-shadow: 0 28px 56px rgba(0,0,0,0.44), inset 0 1px 0 rgba(255,255,255,0.08);
              overflow: hidden;
            }
            .lm-main-card {
              width: 110%; right: -5%; top: 5%; z-index: 3;
              animation: float-main 11s ease-in-out infinite;
            }
            .lm-bubble {
              position: absolute;
              background: rgba(12,22,44,0.88);
              backdrop-filter: blur(24px);
              -webkit-backdrop-filter: blur(24px);
              border: 1px solid rgba(255,255,255,0.13);
              border-radius: 22px;
              box-shadow: 0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15);
              padding: 16px 20px;
              display: flex; align-items: center; gap: 14px;
              z-index: 5;
            }
            .lm-b1 { right: 62%; top: 62%; width: 270px; border-bottom-right-radius: 6px; animation: float-b1 8s ease-in-out infinite reverse; }
            .lm-b2 { right: -8%; top: 70%; width: 290px; border-bottom-left-radius: 6px; animation: float-b2 10s ease-in-out infinite 1.5s; }
            @keyframes float-main { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
            @keyframes float-b1  { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-8px) rotate(1deg); } }
            @keyframes float-b2  { 0%,100% { transform: translateY(0) rotate(1deg); } 50% { transform: translateY(9px) rotate(-.5deg); } }
            .lm-card-header {
              display: flex; align-items: center; gap: 8px;
              padding: 13px 18px;
              background: rgba(0,0,0,0.28);
              border-bottom: 1px solid rgba(255,255,255,0.05);
            }
            .lm-dots { display: flex; gap: 6px; }
            .lm-dot { width: 9px; height: 9px; border-radius: 50%; }
            .lm-dot.r { background: #E0384F; box-shadow: 0 0 7px rgba(224,56,79,.4); }
            .lm-dot.y { background: #F5A623; box-shadow: 0 0 7px rgba(245,166,35,.4); }
            .lm-dot.g { background: #22C55E; box-shadow: 0 0 7px rgba(34,197,94,.4); }
            .lm-card-title { font-size: 11px; font-weight: 500; color: rgba(255,255,255,0.38); letter-spacing: .5px; margin-left: 8px; }
          `}),(0,t.jsxs)("div",{className:"lm-glass lm-main-card",children:[(0,t.jsxs)("div",{className:"lm-card-header",children:[(0,t.jsxs)("div",{className:"lm-dots",children:[(0,t.jsx)("div",{className:"lm-dot r"}),(0,t.jsx)("div",{className:"lm-dot y"}),(0,t.jsx)("div",{className:"lm-dot g"})]}),(0,t.jsx)("div",{className:"lm-card-title",children:"app.clientera.io / lead-management"}),(0,t.jsxs)("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:6,fontSize:10,color:"rgba(255,255,255,0.3)",background:"rgba(255,255,255,0.04)",padding:"4px 10px",borderRadius:20},children:[(0,t.jsx)("span",{className:"lm-live-dot"}),"Live"]})]}),(0,t.jsxs)("div",{style:{padding:"18px 20px"},children:[(0,t.jsx)("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:10,marginBottom:18},children:[{label:"Total Leads",val:"2,841",delta:"+12%",color:"var(--gold)"},{label:"MQLs Today",val:"47",delta:"+8",color:"#4ade80"},{label:"In Handoff",val:"23",delta:"Queue",color:"#818cf8"},{label:"Avg. Score",val:"72",delta:"of 100",color:"#38bdf8"}].map(e=>(0,t.jsxs)("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:12,padding:"12px 14px"},children:[(0,t.jsx)("div",{style:{fontSize:9,textTransform:"uppercase",letterSpacing:1,color:"var(--text3)",marginBottom:6},children:e.label}),(0,t.jsx)("div",{style:{fontFamily:"'Fraunces', serif",fontSize:22,fontWeight:400,color:e.color,lineHeight:1},children:e.val}),(0,t.jsx)("div",{style:{fontSize:10,color:"var(--text3)",marginTop:4},children:e.delta})]},e.label))}),(0,t.jsx)("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,color:"var(--text3)",marginBottom:10},children:"Recent MQLs"}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[{name:"Priya Sharma",co:"Reliance Industries",score:91,status:"Handoff Ready",color:"#4ade80",badge:"AI"},{name:"Rahul Mehta",co:"Tata Consultancy",score:84,status:"In Queue",color:"#818cf8",badge:"AI"},{name:"Anita Roy",co:"Bajaj Finance",score:76,status:"Nurture",color:"#fbbf24",badge:null}].map(e=>(0,t.jsxs)("div",{className:"lm-lead-row",children:[(0,t.jsx)("div",{style:{width:30,height:30,borderRadius:8,background:"rgba(196,154,60,0.15)",border:"1px solid rgba(196,154,60,0.25)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"var(--gold)",flexShrink:0},children:e.name.charAt(0)}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,t.jsx)("span",{style:{fontSize:12,fontWeight:600,color:"#fff"},children:e.name}),e.badge&&(0,t.jsx)("span",{className:"lm-ai-badge",children:"AI"})]}),(0,t.jsx)("div",{style:{fontSize:10,color:"var(--text3)"},children:e.co})]}),(0,t.jsxs)("div",{style:{textAlign:"right"},children:[(0,t.jsx)("div",{style:{fontFamily:"'Fraunces', serif",fontSize:16,color:e.color,lineHeight:1},children:e.score}),(0,t.jsx)("div",{style:{fontSize:9,color:"var(--text3)"},children:e.status})]})]},e.name))})]})]}),(0,t.jsxs)("div",{className:"lm-bubble lm-b1",children:[(0,t.jsx)("div",{style:{width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,rgba(52,112,240,.2),rgba(52,112,240,.05))",border:"1px solid rgba(52,112,240,.35)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:"#818cf8"},children:(0,t.jsx)(i.A,{size:18,strokeWidth:1.8})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:700,color:"#818cf8",textTransform:"uppercase",letterSpacing:.5,marginBottom:4},children:"Enrichment Complete"}),(0,t.jsxs)("div",{style:{fontSize:12,color:"#e2e8f0",lineHeight:1.4},children:[(0,t.jsx)("strong",{style:{color:"#fff"},children:"Priya Sharma"})," promoted to VP Procurement at Reliance."]})]})]}),(0,t.jsxs)("div",{className:"lm-bubble lm-b2",children:[(0,t.jsx)("div",{style:{width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,rgba(196,154,60,.2),rgba(196,154,60,.05))",border:"1px solid rgba(196,154,60,.35)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,color:"var(--gold)"},children:(0,t.jsx)(l.A,{size:18,strokeWidth:1.8})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:700,color:"var(--gold)",textTransform:"uppercase",letterSpacing:.5,marginBottom:4},children:"MQL Threshold Crossed"}),(0,t.jsxs)("div",{style:{fontSize:12,color:"#e2e8f0",lineHeight:1.4},children:["Lead score ",(0,t.jsx)("strong",{style:{color:"#fff"},children:"91/100"})," — entering ",(0,t.jsx)("span",{style:{color:"#4ade80"},children:"handoff queue"}),"."]})]})]})]})]}),(0,t.jsxs)("div",{className:"ce-hero-stats-bar",style:{position:"relative",zIndex:10,display:"flex",alignItems:"stretch",background:"rgba(255,255,255,.032)",borderTop:"1px solid rgba(255,255,255,.07)",backdropFilter:"blur(14px)",overflowX:"auto",scrollbarWidth:"none",msOverflowStyle:"none"},children:[(0,t.jsx)("style",{children:".ce-hero-stats-bar::-webkit-scrollbar { display: none; }"}),[{num:"9",lbl:"Feature Modules"},{num:"AI",lbl:"Lead Scoring"},{num:"6+",lbl:"Capture Channels"},{num:"Zero",lbl:"Re-entry on Convert"},{num:"100%",lbl:"Audit Trail"}].map(e=>(0,t.jsxs)("div",{className:"ce-hsb-item",children:[(0,t.jsx)("div",{className:"ce-hsb-num",children:e.num}),(0,t.jsx)("div",{className:"ce-hsb-lbl",children:e.lbl})]},e.lbl))]})]})}},8370:(e,a,r)=>{"use strict";r.d(a,{default:()=>m});var t=r(5155),i=r(7896),l=r(49),s=r(5197),o=r(184),n=r(1767),d=r(4478);let c=[{Icon:l.A,title:"Company Intelligence",desc:"Description, industry, headcount, funding rounds, revenue estimates, technology stack, and recent news — automatically surfaced on every lead record."},{Icon:s.A,title:"News & Signals",desc:'Any news mentioning the company in the last 30 days. Executive changes. Product launches. Expansion announcements — under "What\'s Happening" on every lead.'},{Icon:o.A,title:"Contact-Level Enrichment",desc:"Current role and company verified against LinkedIn. Job title changes, employment changes, and publicly visible professional activity."},{Icon:n.A,title:"Career Event Alerts",desc:'"Priya Sharma was promoted to VP Procurement at Reliance." Reps are notified the moment a key contact changes role or company.'}],p=[{label:"Company",value:"Reliance Industries Ltd",refreshed:"2h ago",provider:"Clearbit"},{label:"Headcount",value:"2,36,000+",refreshed:"1d ago",provider:"Apollo"},{label:"Revenue Est.",value:"$106B",refreshed:"1d ago",provider:"ZoomInfo"},{label:"Tech Stack",value:"SAP, Salesforce, AWS",refreshed:"3d ago",provider:"Clearbit"},{label:"Recent News",value:"Acquired Karkinos Healthcare",refreshed:"6h ago",provider:"NewsAPI"}];function m(){return(0,t.jsxs)("section",{id:"enrichment",style:{background:"var(--navy)"},children:[(0,t.jsx)("style",{children:`
        .lm-enr-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 16px 18px; border-radius: 14px;
          border: 1px solid transparent; transition: all .28s; cursor: default;
        }
        .lm-enr-feat:hover {
          background: rgba(255,255,255,.04);
          border-color: rgba(255,255,255,.07);
          transform: translateX(6px);
        }
        .lm-enr-feat-icon {
          width: 40px; height: 40px; border-radius: 11px;
          background: rgba(52,112,240,.1); border: 1px solid rgba(52,112,240,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--blue); flex-shrink: 0; transition: transform .3s;
        }
        .lm-enr-feat:hover .lm-enr-feat-icon { transform: scale(1.1) rotate(-4deg); }
        .lm-enr-row {
          display: grid; grid-template-columns: 1fr 1fr auto;
          gap: 10px; align-items: center;
          padding: 9px 14px; border-radius: 8px; transition: background .2s;
        }
        .lm-enr-row:hover { background: rgba(255,255,255,.04); }
        @media (max-width: 900px) { .lm-enr-cols { grid-template-columns: 1fr !important; } }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{marginBottom:48},children:[(0,t.jsxs)("div",{className:"eyebrow",children:[(0,t.jsx)("span",{className:"ey-line"}),"Feature 3 — External Data Enrichment"]}),(0,t.jsxs)("h2",{className:"h2",children:["Your Rep Should Never",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Need to Google a Lead."})]}),(0,t.jsx)("p",{className:"lead",children:"For every lead in ClientEra, a background enrichment job runs daily — pulling intelligence from best-in-class providers and surfacing it on the lead record and pre-visit brief. The moment a lead enters the system, it starts getting smarter."})]}),(0,t.jsxs)("div",{className:"reveal lm-enr-cols",style:{display:"grid",gridTemplateColumns:"1fr 1.15fr",gap:48,alignItems:"start",transitionDelay:".15s"},children:[(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:c.map((e,a)=>(0,t.jsxs)(i.P.div,{className:"lm-enr-feat",initial:{opacity:0,x:-16},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.1*a},children:[(0,t.jsx)("div",{className:"lm-enr-feat-icon",children:(0,t.jsx)(e.Icon,{size:20,strokeWidth:2})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:14,fontWeight:600,color:"var(--text)",marginBottom:4},children:e.title}),(0,t.jsx)("div",{style:{fontSize:12.5,color:"var(--text2)",lineHeight:1.6},children:e.desc})]})]},e.title))}),(0,t.jsxs)("div",{style:{background:"rgba(13,28,52,.88)",backdropFilter:"blur(22px)",border:"1px solid var(--border2)",borderRadius:16,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,.4)"},children:[(0,t.jsxs)("div",{className:"ce-card-titlebar",children:[(0,t.jsx)("span",{className:"ce-wdot ce-wd-r"}),(0,t.jsx)("span",{className:"ce-wdot ce-wd-y"}),(0,t.jsx)("span",{className:"ce-wdot ce-wd-g"}),(0,t.jsx)("span",{className:"ce-card-lbl",children:"Lead Enrichment Record — Priya Sharma"})]}),(0,t.jsxs)("div",{style:{padding:"16px 18px"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[(0,t.jsx)("div",{style:{width:36,height:36,borderRadius:10,background:"rgba(196,154,60,.15)",border:"1px solid rgba(196,154,60,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"var(--gold)"},children:"PS"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:13,fontWeight:600,color:"var(--text)"},children:"Priya Sharma"}),(0,t.jsx)("div",{style:{fontSize:10,color:"var(--text3)"},children:"VP Procurement \xb7 Reliance Industries"})]}),(0,t.jsx)("div",{style:{marginLeft:"auto",fontSize:9,fontWeight:700,padding:"3px 8px",borderRadius:100,background:"rgba(24,184,122,.12)",border:"1px solid rgba(24,184,122,.25)",color:"var(--green)"},children:"Score 91"})]}),(0,t.jsxs)("div",{style:{fontSize:8,fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,color:"var(--text3)",marginBottom:6,display:"grid",gridTemplateColumns:"1fr 1fr auto",gap:10,padding:"0 14px",borderBottom:"1px solid var(--border)",paddingBottom:6},children:[(0,t.jsx)("span",{children:"Field"}),(0,t.jsx)("span",{children:"Value"}),(0,t.jsx)("span",{children:"Provider"})]}),p.map((e,a)=>(0,t.jsxs)(i.P.div,{className:"lm-enr-row",initial:{opacity:0,y:6},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.08*a},children:[(0,t.jsx)("div",{style:{fontSize:11,color:"var(--text3)",fontWeight:500},children:e.label}),(0,t.jsx)("div",{style:{fontSize:11,fontWeight:600,color:"var(--text)"},children:e.value}),(0,t.jsxs)("div",{style:{fontSize:9,color:"var(--text3)",textAlign:"right",whiteSpace:"nowrap"},children:[e.provider," \xb7 ",e.refreshed]})]},e.label)),(0,t.jsxs)("div",{style:{marginTop:14,padding:"10px 14px",background:"rgba(139,92,246,.06)",border:"1px solid rgba(139,92,246,.2)",borderRadius:10,display:"flex",gap:8,alignItems:"flex-start"},children:[(0,t.jsx)(n.A,{size:13,style:{color:"#8B5CF6",flexShrink:0,marginTop:1}}),(0,t.jsxs)("span",{style:{fontSize:10,color:"#c4b5fd",lineHeight:1.5},children:[(0,t.jsx)("strong",{style:{color:"#fff"},children:"Career Alert:"})," Priya Sharma promoted to VP Procurement — 3 days ago."]})]}),(0,t.jsxs)("div",{style:{marginTop:10,display:"flex",alignItems:"center",gap:6},children:[(0,t.jsx)(d.A,{size:11,style:{color:"var(--green)"}}),(0,t.jsx)("span",{style:{fontSize:9,color:"var(--text3)"},children:"All providers under DPA \xb7 GDPR & DPDP compliant"})]})]})]})]})]})]})}},8557:(e,a,r)=>{"use strict";r.d(a,{default:()=>l});var t=r(5155),i=r(4478);function l(){return(0,t.jsx)("section",{className:"ce-cta-outer",id:"lm-cta",style:{background:"var(--cream)"},children:(0,t.jsxs)("div",{className:"ce-cta-card",children:[(0,t.jsx)("div",{className:"ce-cta-glow"}),(0,t.jsxs)("div",{className:"ce-cta-left",children:[(0,t.jsx)("div",{className:"ce-cta-eyebrow",children:"ClientEra"}),(0,t.jsxs)("h2",{className:"ce-cta-h2",children:["Start Turning Signals",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Into Revenue."})]}),(0,t.jsx)("p",{className:"ce-cta-lead",children:"From the first campaign touch to the signed invoice — one timeline, one system, zero context lost. Request access today and stop losing deals in the handoff."})]}),(0,t.jsxs)("div",{className:"ce-cta-right",children:[(0,t.jsx)("a",{href:"#",className:"ce-cta-btn ce-cta-btn-primary",children:"Request Early Access →"}),(0,t.jsx)("a",{href:"#",className:"ce-cta-btn ce-cta-btn-ghost",children:"Book a Demo"}),(0,t.jsxs)("p",{className:"ce-cta-micro",children:[(0,t.jsx)(i.A,{size:14,style:{color:"#18B87A",verticalAlign:"text-bottom"},strokeWidth:2})," ","SOC2, ISO 27001, & GDPR Compliant"]})]})]})})}},8613:(e,a,r)=>{Promise.resolve().then(r.bind(r,8643)),Promise.resolve().then(r.bind(r,4477)),Promise.resolve().then(r.bind(r,4309)),Promise.resolve().then(r.bind(r,2977)),Promise.resolve().then(r.bind(r,8557)),Promise.resolve().then(r.bind(r,8370)),Promise.resolve().then(r.bind(r,9377)),Promise.resolve().then(r.bind(r,7949)),Promise.resolve().then(r.bind(r,6038)),Promise.resolve().then(r.bind(r,8626)),Promise.resolve().then(r.bind(r,7059)),Promise.resolve().then(r.bind(r,1732)),Promise.resolve().then(r.bind(r,7264)),Promise.resolve().then(r.bind(r,9675)),Promise.resolve().then(r.bind(r,1824)),Promise.resolve().then(r.bind(r,4480))},8626:(e,a,r)=>{"use strict";r.d(a,{default:()=>n});var t=r(5155),i=r(5411),l=r(3809),s=r(5903);let o=[{id:"visibility",Icon:i.A,headline:'"You handed off a lead to sales two weeks ago. You have no idea if they called."',desc:"Marketing loses sight of every lead the moment it enters the sales queue. There is no way to know if it was picked up, ignored, or mishandled — until it's too late.",stat:"67%",statLabel:"of MQLs never get a follow-up"},{id:"context",Icon:l.A,headline:'"The rep opened the deal with zero background. The prospect had been engaged for three months."',desc:"When a lead becomes a deal, all context — campaigns touched, content downloaded, forms filled — lives in a different tool. Reps start from scratch every time.",stat:"3–5",statLabel:"tools needed to reconstruct context"},{id:"scoring",Icon:s.A,headline:'"We call everyone. Half are not ready. The other half became deals at a competitor."',desc:"Most teams rely on gut feel or rigid manual rules to decide who is ready. High-fit leads get ignored. Low-intent leads waste sales time. Neither outcome is acceptable.",stat:"\xb140%",statLabel:"typical forecast variance from gut feel"}];function n(){return(0,t.jsxs)("section",{id:"problem",style:{background:"#f8f8f6"},children:[(0,t.jsx)("style",{children:`
        .lm-prob-card {
          position: relative;
          background-color: #fff;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          perspective: 1000px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 24px rgba(0,0,0,.06);
          transition: all .6s cubic-bezier(.175,.885,.32,1.275);
          height: 300px;
          cursor: default;
        }
        .lm-prob-card:hover {
          transform: scale(1.04);
          box-shadow: 0 20px 48px rgba(0,0,0,.12);
          border-color: rgba(224,56,79,.25);
          z-index: 10;
        }
        .lm-prob-front {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 28px 24px;
          gap: 16px; transition: all .6s cubic-bezier(.175,.885,.32,1.275);
          width: 100%; height: 100%;
        }
        .lm-prob-card:hover .lm-prob-front { transform: scale(0); opacity: 0; }
        .lm-prob-icon {
          width: 52px; height: 52px; border-radius: 12px;
          background: rgba(224,56,79,.06);
          border: 1px solid rgba(224,56,79,.15);
          display: flex; align-items: center; justify-content: center;
          color: #E0384F; flex-shrink: 0;
        }
        .lm-prob-back {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%; padding: 28px 24px;
          box-sizing: border-box; background-color: #fff;
          transform: rotateX(-90deg); transform-origin: bottom;
          transition: all .6s cubic-bezier(.175,.885,.32,1.275);
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .lm-prob-card:hover .lm-prob-back { transform: rotateX(0deg); }
        .lm-prob-stat {
          font-family: 'Fraunces', serif; font-size: 28px;
          font-weight: 400; color: #E0384F; line-height: 1; margin-bottom: 4px;
        }
        .lm-prob-statlbl {
          font-size: 9px; color: #64748b;
          text-transform: uppercase; letter-spacing: 1.2px;
        }
        @media (max-width: 900px) { .lm-prob-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) { .lm-prob-card { height: auto !important; min-height: 220px; } }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{textAlign:"center",marginBottom:64,maxWidth:640,margin:"0 auto 64px"},children:[(0,t.jsxs)("div",{className:"eyebrow eyebrow-dark",style:{justifyContent:"center"},children:[(0,t.jsx)("span",{className:"ey-line"}),"The Cost of Managing Blind"]}),(0,t.jsxs)("h2",{className:"h2 h2-ink",style:{textAlign:"center"},children:["Sound ",(0,t.jsx)("em",{children:"familiar?"})]}),(0,t.jsx)("p",{className:"lead lead-ink",style:{margin:"0 auto",textAlign:"center"},children:"Every marketing and sales leader has felt this pain. Three structural failures that cost pipeline every single month."})]}),(0,t.jsx)("div",{className:"reveal lm-prob-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:20,transitionDelay:".15s"},children:o.map(e=>(0,t.jsxs)("div",{className:"lm-prob-card",children:[(0,t.jsxs)("div",{className:"lm-prob-front",children:[(0,t.jsx)("div",{className:"lm-prob-icon",children:(0,t.jsx)(e.Icon,{size:26,strokeWidth:2})}),(0,t.jsx)("div",{style:{fontFamily:"'Fraunces', serif",fontSize:16,fontWeight:500,color:"var(--ink)",lineHeight:1.35},children:e.headline})]}),(0,t.jsxs)("div",{className:"lm-prob-back",children:[(0,t.jsx)("div",{style:{fontSize:13,color:"var(--ink3)",lineHeight:1.65},children:e.desc}),(0,t.jsxs)("div",{style:{borderTop:"1px solid #f1f5f9",paddingTop:16,display:"flex",flexDirection:"column"},children:[(0,t.jsx)("div",{className:"lm-prob-stat",children:e.stat}),(0,t.jsx)("div",{className:"lm-prob-statlbl",children:e.statLabel})]})]})]},e.id))})]})]})}},8643:(e,a,r)=>{"use strict";r.d(a,{default:()=>m});var t=r(5155),i=r(7896),l=r(4071),s=r(9965),o=r(4549),n=r(3810);let d=[{label:"Leads Generated",val:"2,841",pct:100,color:"#3470F0"},{label:"MQLs Created",val:"847",pct:72,color:"#C49A3C"},{label:"SQLs Converted",val:"412",pct:48,color:"#8B5CF6"},{label:"Deals Opened",val:"198",pct:32,color:"#18B87A"},{label:"Revenue Won",val:"$4.2M",pct:18,color:"#22C55E"}],c=[{reason:"Not ICP fit",pct:38,color:"#E0384F"},{reason:"Wrong timing",pct:27,color:"#F5A623"},{reason:"Already customer",pct:21,color:"#3470F0"},{reason:"Duplicate lead",pct:14,color:"var(--text3)"}],p=[{Icon:l.A,title:"Pipeline Attribution",desc:"Total pipeline value generated by marketing-sourced leads — broken down by campaign, channel, and time period."},{Icon:s.A,title:"Lead Velocity",desc:"How quickly leads move from creation → MQL → first meeting. Velocity trends surface bottlenecks before they become pipeline problems."},{Icon:o.A,title:"Sales Feedback Loop",desc:"MQL acceptance and rejection rates by campaign. Rejection reasons categorised and trended — giving Marketing the data to refine the scoring model."},{Icon:n.A,title:"Marketing Influence Reporting",desc:"Deals where the account had at least one marketing touchpoint — a more complete picture of marketing's contribution to revenue."}];function m(){return(0,t.jsxs)("section",{id:"analytics",style:{background:"var(--navy)"},children:[(0,t.jsx)("style",{children:`
        .lm-ana-feat {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 14px 18px; border-radius: 14px;
          border: 1px solid transparent; transition: all .28s; cursor: default;
        }
        .lm-ana-feat:hover {
          background: rgba(255,255,255,.04); border-color: rgba(255,255,255,.07);
          transform: translateX(6px);
        }
        .lm-ana-feat-icon {
          width: 38px; height: 38px; border-radius: 10px;
          background: var(--gold-bg); border: 1px solid rgba(196,154,60,.2);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold); flex-shrink: 0; transition: transform .3s;
        }
        .lm-ana-feat:hover .lm-ana-feat-icon { transform: scale(1.1) rotate(-4deg); }
        .lm-funnel-row {
          display: flex; align-items: center; gap: 12px;
          padding: 7px 0; cursor: default;
        }
        .lm-funnel-row:hover { opacity: .85; }
        @media (max-width: 900px) { .lm-ana-cols { grid-template-columns: 1fr !important; } }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{marginBottom:48},children:[(0,t.jsxs)("div",{className:"eyebrow",children:[(0,t.jsx)("span",{className:"ey-line"}),"Feature 9 — Lead Attribution & Analytics"]}),(0,t.jsxs)("h2",{className:"h2",children:["Every Lead, Traced Back to Its Source —",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"and Forward to Its Revenue."})]}),(0,t.jsx)("p",{className:"lead",children:"ClientEra doesn't just track leads — it tracks what they become. Every marketing touchpoint is connected to the pipeline value, deal, and revenue it ultimately produced."})]}),(0,t.jsxs)("div",{className:"reveal lm-ana-cols",style:{display:"grid",gridTemplateColumns:"1.15fr 1fr",gap:48,alignItems:"start",transitionDelay:".15s"},children:[(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[(0,t.jsxs)("div",{style:{background:"rgba(13,28,52,.88)",backdropFilter:"blur(22px)",border:"1px solid var(--border2)",borderRadius:16,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,.4)"},children:[(0,t.jsxs)("div",{className:"ce-card-titlebar",children:[(0,t.jsx)("span",{className:"ce-wdot ce-wd-r"}),(0,t.jsx)("span",{className:"ce-wdot ce-wd-y"}),(0,t.jsx)("span",{className:"ce-wdot ce-wd-g"}),(0,t.jsx)("span",{className:"ce-card-lbl",children:"Pipeline Attribution Funnel — Q1 2026"})]}),(0,t.jsx)("div",{style:{padding:"16px 18px"},children:d.map((e,a)=>(0,t.jsxs)("div",{className:"lm-funnel-row",children:[(0,t.jsx)("div",{style:{width:80,fontSize:10,color:"var(--text3)",fontWeight:600,flexShrink:0},children:e.label}),(0,t.jsx)("div",{style:{flex:1,height:22,background:"rgba(255,255,255,.05)",borderRadius:5,overflow:"hidden"},children:(0,t.jsx)(i.P.div,{style:{height:"100%",borderRadius:5,background:e.color+"cc",display:"flex",alignItems:"center",paddingLeft:8},initial:{width:0},whileInView:{width:`${e.pct}%`},viewport:{once:!0},transition:{delay:.1*a+.2,duration:.6}})}),(0,t.jsx)("div",{style:{fontFamily:"'Fraunces', serif",fontSize:15,fontWeight:400,color:e.color,minWidth:56,textAlign:"right",flexShrink:0},children:e.val})]},e.label))})]}),(0,t.jsxs)("div",{style:{background:"rgba(13,28,52,.88)",border:"1px solid var(--border2)",borderRadius:14,padding:"18px 20px"},children:[(0,t.jsxs)("div",{style:{fontSize:9,fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,color:"var(--text3)",marginBottom:14,display:"flex",alignItems:"center",gap:8},children:[(0,t.jsx)(s.A,{size:13,style:{color:"var(--gold)"}}),"MQL Rejection Reasons"]}),c.map((e,a)=>(0,t.jsxs)("div",{style:{marginBottom:10},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[(0,t.jsx)("span",{style:{fontSize:11,fontWeight:600,color:"var(--text2)"},children:e.reason}),(0,t.jsxs)("span",{style:{fontSize:12,fontWeight:700,color:e.color},children:[e.pct,"%"]})]}),(0,t.jsx)("div",{style:{height:7,borderRadius:4,background:"rgba(255,255,255,.05)",overflow:"hidden"},children:(0,t.jsx)(i.P.div,{style:{height:"100%",borderRadius:4,background:e.color+"50",border:`1px solid ${e.color}30`},initial:{width:0},whileInView:{width:`${e.pct}%`},viewport:{once:!0},transition:{duration:.6,delay:.1*a}})})]},e.reason))]})]}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:6},children:p.map((e,a)=>(0,t.jsxs)(i.P.div,{className:"lm-ana-feat",initial:{opacity:0,x:16},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.1*a},children:[(0,t.jsx)("div",{className:"lm-ana-feat-icon",children:(0,t.jsx)(e.Icon,{size:20,strokeWidth:2})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:14,fontWeight:600,color:"var(--text)",marginBottom:4},children:e.title}),(0,t.jsx)("div",{style:{fontSize:12.5,color:"var(--text2)",lineHeight:1.6},children:e.desc})]})]},e.title))})]})]})]})}},9377:(e,a,r)=>{"use strict";r.d(a,{default:()=>p});var t=r(5155),i=r(2115),l=r(2765),s=r(2572),o=r(7896),n=r(184);let d=[{n:1,text:"Lead reaches MQL score threshold, or Marketing manually promotes it"},{n:2,text:"Lead enters the SDR queue or directly into Inside Sales / Field Sales queue"},{n:3,text:"The receiving rep is notified with a full context brief: source, score, engagement history, enrichment, and Marketing's handoff notes"},{n:4,text:"Marketing sees when the lead was picked up, by whom, and what happened next"},{n:5,text:"If unclaimed beyond a configurable SLA, both Marketing and the sales manager are notified automatically"}],c=[{label:"Lead",value:"Rahul Mehta — Tata Consulting",sub:"Score: 84 \xb7 Source: Web Form \xb7 Campaign: Enterprise Q1"},{label:"Handoff Notes",value:"Interested in Q2 expansion budget. Mentioned evaluating 3 CRM solutions.",sub:"Marketing \xb7 Sneha Verma \xb7 10 min ago"},{label:"Assigned To",value:"Aryan Shah — Inside Sales",sub:"Notified via email + in-app \xb7 2 min ago"}];function p(){let e=(0,i.useRef)(null),{scrollYProgress:a}=(0,l.L)({target:e,offset:["start end","end start"]});return(0,s.G)(a,[.2,.8],[0,350]),(0,t.jsxs)("section",{ref:e,id:"handoff",style:{background:"#f8f8f6",paddingTop:100,paddingBottom:100},children:[(0,t.jsx)("style",{children:`
        .lm-hf-step {
          display: flex; gap: 24px; align-items: flex-start;
          padding-bottom: 32px; position: relative;
        }
        .lm-hf-step:last-child { padding-bottom: 0; }
        .lm-hf-step:not(:last-child)::after {
          content: '';
          position: absolute; left: 21px; top: 50px; bottom: 10px;
          width: 2px; background: rgba(0,0,0,0.04);
        }
        .lm-hf-num {
          width: 44px; height: 44px; border-radius: 14px;
          background: #fff; border: 1.5px solid rgba(0,0,0,.06);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; z-index: 1;
          font-family: 'Fraunces', serif; font-size: 18px; font-weight: 500; color: var(--navy);
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          transition: all 0.3s ease;
        }
        .lm-hf-step:hover .lm-hf-num {
          border-color: var(--gold);
          color: var(--gold);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(196,154,60,0.15);
        }
        .lm-handoff-field {
          padding: 14px 16px; border-radius: 12px;
          background: #fdfdfd; border: 1px solid rgba(0,0,0,.04);
          margin-bottom: 12px; transition: all 0.2s ease;
        }
        .lm-handoff-field:hover {
          background: #fff;
          border-color: var(--gold);
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .lm-data-bar {
          height: 4px; border-radius: 2px; background: rgba(0,0,0,0.05);
          overflow: hidden; margin-top: 8px; position: relative;
        }
        .lm-data-fill {
          position: absolute; left: 0; top: 0; height: 100%;
          background: var(--gold); border-radius: 2px;
        }
        @media (max-width: 900px) { .lm-hf-cols { grid-template-columns: 1fr !important; gap: 60px !important; } }
      `}),(0,t.jsxs)("div",{className:"wrap",children:[(0,t.jsxs)("div",{className:"reveal",style:{marginBottom:64},children:[(0,t.jsxs)("div",{className:"eyebrow eyebrow-dark",children:[(0,t.jsx)("span",{className:"ey-line"}),"Feature 6 — MQL Handoff to Sales"]}),(0,t.jsxs)("h2",{className:"h2 h2-ink",children:["The Cleanest Handoff",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"in the Business."})]}),(0,t.jsx)("p",{className:"lead lead-ink",children:"When a lead reaches MQL status, the handoff is a structured, documented process — not a Slack message or a forwarded email. Marketing retains full visibility on every lead they send to sales."})]}),(0,t.jsxs)("div",{className:"reveal lm-hf-cols",style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1.2fr)",gap:80,alignItems:"start",transitionDelay:".15s"},children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:"var(--ink3)",marginBottom:32},children:"Standard Operating Procedure"}),d.map((e,a)=>(0,t.jsxs)(o.P.div,{className:"lm-hf-step",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.6,delay:.1*a,ease:[.22,1,.36,1]},children:[(0,t.jsx)("div",{className:"lm-hf-num",children:e.n}),(0,t.jsxs)("div",{style:{paddingTop:6},children:[(0,t.jsxs)("p",{style:{fontSize:15,color:"var(--navy)",fontWeight:600,marginBottom:8,margin:0},children:["Step ",e.n]}),(0,t.jsx)("p",{style:{fontSize:14,color:"var(--ink2)",lineHeight:1.7,margin:0},children:e.text})]})]},e.n))]}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:24},children:(0,t.jsxs)("div",{style:{background:"#fff",border:"1px solid rgba(0,0,0,.05)",borderRadius:24,overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,.04)"},children:[(0,t.jsxs)("div",{style:{padding:"20px 24px",borderBottom:"1px solid rgba(0,0,0,.06)",display:"flex",alignItems:"center",gap:10,background:"rgba(45,91,227,0.02)"},children:[(0,t.jsx)(n.A,{size:18,style:{color:"var(--navy)"}}),(0,t.jsx)("span",{style:{fontSize:12,fontWeight:700,color:"var(--navy)",textTransform:"uppercase",letterSpacing:2},children:"MQL Handoff Brief"}),(0,t.jsx)("span",{style:{marginLeft:"auto",fontSize:10,padding:"4px 12px",borderRadius:100,background:"rgba(24,184,122,.1)",color:"var(--green)",fontWeight:700},children:"Priority: High"})]}),(0,t.jsx)("div",{style:{padding:"24px"},children:c.map((e,a)=>(0,t.jsxs)(o.P.div,{className:"lm-handoff-field",initial:{opacity:0,scale:.98},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.1*a},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:1.2,color:"var(--gold)"},children:e.label}),"Lead"===e.label&&(0,t.jsx)("div",{style:{fontSize:10,color:"var(--ink3)"},children:"Engagement: 84%"})]}),(0,t.jsx)("div",{style:{fontSize:15,fontWeight:600,color:"var(--navy)",marginBottom:4},children:e.value}),(0,t.jsx)("div",{style:{fontSize:11,color:"var(--ink3)",lineHeight:1.5},children:e.sub}),"Lead"===e.label&&(0,t.jsx)("div",{className:"lm-data-bar",children:(0,t.jsx)(o.P.div,{initial:{width:0},whileInView:{width:"84%"},transition:{duration:1,delay:.5},className:"lm-data-fill"})})]},e.label))})]})})]})]})]})}},9675:(e,a,r)=>{"use strict";r.d(a,{default:()=>i});var t=r(2115);function i(){return(0,t.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return document.querySelectorAll(".reveal").forEach(a=>e.observe(a)),()=>e.disconnect()},[]),null}}},e=>{e.O(0,[500,426,38,607,441,794,358],()=>e(e.s=8613)),_N_E=e.O()}]);