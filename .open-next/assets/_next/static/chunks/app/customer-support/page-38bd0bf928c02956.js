(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[225],{13:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]])},1362:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},1519:(e,s,a)=>{"use strict";a.d(s,{default:()=>A});var t=a(5155),i=a(2115),r=a(8195),n=a(3961),o=a(3219),c=a(2869),l=a(9619);let d="#080f1e",p="#0c1526",x="#14243c",h="rgba(255,255,255,.06)",g="rgba(255,255,255,.11)",m="#e8eeff",b="#94aac4",f="#526880",u="#c49a3c",v="#17b378",y="#e0384f",w=e=>new Promise(s=>setTimeout(s,e));function j({col:e=v,sz:s=5}){return(0,t.jsx)("span",{style:{display:"inline-block",width:s,height:s,borderRadius:"50%",background:e,flexShrink:0,boxShadow:`0 0 8px ${e}aa`,animation:"aidPulse 2.2s ease-in-out infinite"}})}function k({pct:e,col:s,delay:a=0,h:r=3,show:n}){let[o,c]=(0,i.useState)(0);return(0,i.useEffect)(()=>{if(!n)return void c(0);let s=setTimeout(()=>c(e),a+100);return()=>clearTimeout(s)},[n,e,a]),(0,t.jsx)("div",{style:{height:r,borderRadius:99,background:"rgba(255,255,255,.04)",overflow:"hidden"},children:(0,t.jsx)("div",{style:{height:"100%",borderRadius:99,background:s,width:`${o}%`,transition:"width 1.4s cubic-bezier(.16,1,.3,1)",boxShadow:`0 0 10px ${s}33`}})})}function N({x:e,y:s,vis:a,ring:i}){return(0,t.jsxs)("div",{style:{position:"absolute",left:e,top:s,pointerEvents:"none",zIndex:1e3,transform:"translate(-3px,-2px)",transition:"left .6s cubic-bezier(.16,1,.3,1), top .6s cubic-bezier(.16,1,.3,1), opacity .3s",opacity:+!!a},children:[i&&(0,t.jsx)("div",{style:{position:"absolute",top:-12,left:-12,width:32,height:32,borderRadius:"50%",border:`2px solid ${u}`,opacity:0,animation:"aidRipple .6s ease-out forwards"}}),(0,t.jsx)("svg",{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.4))"},children:(0,t.jsx)("path",{d:"M4 3L18 12.5L10 14L7 22L4 3Z",fill:"white",stroke:d,strokeWidth:"1.5",strokeLinejoin:"round"})})]})}function A(){let[e,s]=(0,i.useState)(0),[a,A]=(0,i.useState)(""),[z,S]=(0,i.useState)(100),[C,R]=(0,i.useState)(100),[I,F]=(0,i.useState)(!1),[E,M]=(0,i.useState)(!1),[L,P]=(0,i.useState)(""),[T,$]=(0,i.useState)(0),[B,D]=(0,i.useState)(""),[Y,W]=(0,i.useState)([]),[H,O]=(0,i.useState)(!1),[q,G]=(0,i.useState)(!1),U=(0,i.useRef)(null),_=(0,i.useRef)(null),V=(0,i.useRef)(null),K=(0,i.useRef)(!1),X=(0,i.useCallback)((e,s,a=600)=>(S(e),R(s),w(a)),[]),Z=(0,i.useCallback)(async()=>{M(!0),await w(400),M(!1)},[]),Q=(0,i.useCallback)(async(e,s,a=40)=>{let t="";for(let i of e)s(t+=i),await w(Math.random()*a+a/2)},[]),J=(0,i.useCallback)(async()=>{if(!K.current){if(K.current=!0,s(0),A("Standby — Monitoring Incoming Requests..."),F(!1),G(!1),P(""),$(0),D(""),W([]),O(!1),await w(1500),F(!0),A("Stage 1 — Parsing Intent & Sentiment Analytics"),await X(140,210,800),await Q("I've been charged twice for my subscription and I can't reach anyone on the phone! Please fix this ASAP.",P,45),await w(800),$(22),A("✓ Critical billing intent detected \xb7 Sentiment: High Frustration"),await w(1800),s(1),A("Stage 2 — Scanning Cross-System Intelligence..."),G(!0),await X(80,260,700),await w(400),W([{title:"Billing Sync Logs",confidence:99,type:"ERP"},{title:"Commercial Deal #8822",confidence:91,type:"CRM"}]),await w(1200),G(!1),$(55),A("✓ Duplicate payment verified in Stripe metadata. Solution found."),await w(2e3),s(2),A("Stage 3 — Drafting Context-Aware Resolution..."),await X(200,240,700),s(2),A("Stage 3 — Drafting Context-Aware Resolution..."),await X(200,240,700),await Q("Hello! I've located the duplicate transaction (Ref: #882A) caused by a momentary sync lag. I've already initiated a direct refund which will appear in 3-5 days. I've also added a 10% credit to your next bill as a goodwill gesture for the inconvenience.",D,25),await w(1e3),A("Proposal ready for Governance check."),await w(1800),s(3),A("Stage 4 — Human-in-the-Loop Approval"),V.current&&_.current){let e=_.current.getBoundingClientRect(),s=V.current.getBoundingClientRect();await X(s.left-e.left+s.width/2,s.top-e.top+s.height/2,900),await Z(),O(!0),$(98),A("✓ Response Dispatched. Strategic relationship secured.")}await w(3500),F(!1),K.current=!1,setTimeout(J,2e3)}},[X,Z,Q]);return(0,i.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&J()},{threshold:.15});return U.current&&e.observe(U.current),()=>e.disconnect()},[J]),(0,t.jsxs)("section",{className:"cs-ai-intelligence",ref:U,id:"ai-intelligence",children:[(0,t.jsx)("style",{children:`
        .cs-ai-intelligence { background: var(--cream); padding: clamp(80px, 10vw, 140px) 0; overflow: hidden; }
        .cs-ai-grid { max-width: 1200px; margin: 0 auto; padding: 0 clamp(20px, 5vw, 40px); display: grid; grid-template-columns: 1fr 1.4fr; gap: 100px; align-items: start; }
        
        .cs-ai-content { position: relative; z-index: 2; }
        .cs-ai-eyebrow { display: inline-flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 700; color: var(--gold); text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 24px; }
        .cs-ai-ey-line { width: 32px; height: 1.5px; background: var(--gold); border-radius: 99px; }
        .cs-ai-h2 { font-family: 'Fraunces', serif; font-size: clamp(36px, 4.5vw, 54px); line-height: 1.05; color: var(--navy); margin-bottom: 32px; font-weight: 400; }
        
        /* Feature Cards with Hover Effects */
        .cs-ai-feature-card {
          border-radius: 16px;
          padding: 20px 24px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .cs-ai-feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.35s;
          z-index: 0;
        }
        .cs-ai-feature-card > * {
          position: relative;
          z-index: 1;
        }
        
        .cs-ai-feature-white {
          background: white;
          border: 1px solid #e8e4de;
        }
        .cs-ai-feature-white::before {
          background: radial-gradient(circle at 50% 0%, rgba(196,154,60,0.08) 0%, transparent 70%);
        }
        .cs-ai-feature-white:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
          border-color: rgba(196,154,60,0.3);
        }
        .cs-ai-feature-white:hover::before {
          opacity: 1;
        }
        
        .cs-ai-feature-gold {
          background: rgba(196,154,60,0.04);
          border: 1px solid rgba(196,154,60,0.1);
        }
        .cs-ai-feature-gold::before {
          background: radial-gradient(circle at 50% 0%, rgba(196,154,60,0.12) 0%, transparent 70%);
        }
        .cs-ai-feature-gold:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(196,154,60,0.15);
          border-color: rgba(196,154,60,0.35);
          background: rgba(196,154,60,0.08);
        }
        .cs-ai-feature-gold:hover::before {
          opacity: 1;
        }
        
        .cs-ai-feature-icon {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 10px;
        }
        .cs-ai-feature-card:hover .cs-ai-feature-icon {
          transform: scale(1.15) rotate(-5deg);
          filter: drop-shadow(0 4px 8px rgba(196,154,60,0.4));
        }
        .cs-ai-h2 em { font-style: italic; color: var(--gold); font-weight: 300; }
        .cs-ai-lead { font-size: 17px; color: var(--ink3); line-height: 1.7; margin-bottom: 40px; font-weight: 300; max-width: 480px; }
        .cs-dash-wrapper { margin-top: 156px; }

        /* Dashboard Shell */
        .cs-dash-shell {
          background: ${d};
          border-radius: 20px;
          border: 1px solid ${g};
          box-shadow: 0 40px 100px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.04);
          position: relative; overflow: hidden;
          aspect-ratio: 16 / 13;
          display: flex; flex-direction: column;
          color: white;
        }

        .cs-dash-top { height: 40px; background: ${p}; border-bottom: 1px solid ${h}; display: flex; align-items: center; padding: 0 16px; gap: 12px; position: relative; z-index: 10; }
        .cs-dash-dots { display: flex; gap: 6px; }
        .cs-dash-dot { width: 9px; height: 9px; border-radius: 50%; }

        .cs-dash-main { flex: 1; display: grid; grid-template-columns: 180px 1fr; overflow: hidden; }
        .cs-dash-side { background: ${p}; border-right: 1px solid ${h}; padding: 20px; display: flex; flex-direction: column; gap: 20px; }
        
        .cs-dash-body { padding: 20px; position: relative; overflow: hidden; display: flex; flex-direction: column; }
        .cs-scan-line { position: absolute; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, ${u}, transparent); top: 0; z-index: 5; box-shadow: 0 0 12px ${u}; animation: dashScan 2s linear infinite; display: none; }
        .cs-scan-line.active { display: block; }
        @keyframes dashScan { from { top: 0; } to { top: 100%; } }

        .cs-step-pills { display: flex; gap: 6px; margin-bottom: 20px; }
        .cs-step-pill { flex: 1; height: 3px; border-radius: 4px; background: ${g}; transition: all .6s; }
        .cs-step-pill.active { background: var(--gold); box-shadow: 0 0 8px var(--gold); }
        .cs-step-pill.done { background: ${v}; }

        .cs-ticket-card { background: ${x}; border: 1px solid ${g}; border-radius: 10px; padding: 14px; font-size: 11.5px; line-height: 1.5; color: ${b}; position: relative; }
        .cs-draft-box { background: rgba(255,255,255,0.02); border: 1px dashed rgba(196,154,60,0.3); border-radius: 10px; padding: 14px; margin-top: 16px; font-size: 11.5px; line-height: 1.5; color: ${m}; position: relative; animation: dashFadeIn 0.5s ease; }
        @keyframes dashFadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }

        .cs-caption-dock { height: 38px; background: #000; border-top: 1px solid ${h}; display: flex; align-items: center; padding: 0 18px; font-size: 10px; color: ${b}; gap: 10px; letter-spacing: 0.5px; }

        .cs-btn-action { padding: 10px 20px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; border: none; transition: all .3s cubic-bezier(.22,1,.36,1); }
        .cs-btn-approve { background: var(--gold); color: ${d}; }
        .cs-btn-approve.success { background: ${v}; color: white; }

        @keyframes aidPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.5; } }
        @keyframes aidRipple { 0% { transform: scale(0.3); opacity: 1; } 100% { transform: scale(3.5); opacity: 0; } }

        @media (max-width: 1024px) {
          .cs-ai-grid { grid-template-columns: 1fr; text-align: center; gap: 48px; }
          .cs-ai-lead { margin: 0 auto 40px; }
          .cs-dash-wrapper { margin-top: 0; }
          .cs-dash-shell { aspect-ratio: 16/13; }
        }
        @media (max-width: 768px) {
          .cs-dash-side { display: none; }
          .cs-dash-main { grid-template-columns: 1fr; }
          .cs-dash-shell { aspect-ratio: 1/1; }
        }
      `}),(0,t.jsxs)("div",{className:"cs-ai-grid",ref:_,children:[(0,t.jsxs)("div",{className:"cs-ai-content reveal",children:[(0,t.jsxs)("div",{className:"cs-ai-eyebrow",children:[(0,t.jsx)("span",{className:"cs-ai-ey-line"})," Native Intelligence"]}),(0,t.jsxs)("h2",{className:"cs-ai-h2",children:["The AI knows the deal",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Inside and out."})]}),(0,t.jsx)("p",{className:"cs-ai-lead",children:"ClientEra's AI doesn't just read the ticket. It reads the customer's full history — commercial value, historical sentiment, and operational commitments — to resolve issues before they escalate."}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[(0,t.jsxs)("div",{className:"cs-ai-feature-card cs-ai-feature-white",children:[(0,t.jsx)(r.A,{size:18,color:"var(--gold)",className:"cs-ai-feature-icon"}),(0,t.jsx)("div",{style:{fontSize:13,fontWeight:700,color:"var(--navy)",marginBottom:4},children:"Cross-Silo Context"}),(0,t.jsx)("div",{style:{fontSize:11,color:"var(--ink3)",lineHeight:1.5},children:"Aggregates data from Zendesk, Freshdesk, and internal ERPs automatically."})]}),(0,t.jsxs)("div",{className:"cs-ai-feature-card cs-ai-feature-gold",children:[(0,t.jsxs)("div",{style:{fontSize:13,fontWeight:700,color:"var(--gold)",marginBottom:6,display:"flex",alignItems:"center",gap:6},children:[(0,t.jsx)(n.A,{size:14,className:"cs-ai-feature-icon"})," 72% Efficiency"]}),(0,t.jsx)("div",{style:{fontSize:11,color:"var(--ink3)",lineHeight:1.5},children:"Reduction in first-response time across elite enterprise deployments."})]})]})]}),(0,t.jsx)("div",{className:"cs-dash-wrapper reveal",children:(0,t.jsxs)("div",{className:"cs-dash-shell",children:[(0,t.jsxs)("div",{className:"cs-dash-top",children:[(0,t.jsxs)("div",{className:"cs-dash-dots",children:[(0,t.jsx)("div",{className:"cs-dash-dot",style:{background:"#FF5F57"}}),(0,t.jsx)("div",{className:"cs-dash-dot",style:{background:"#FFBD2E"}}),(0,t.jsx)("div",{className:"cs-dash-dot",style:{background:"#28C840"}})]}),(0,t.jsx)("div",{style:{fontSize:10,color:f,letterSpacing:1.2,fontWeight:500},children:"AI_COPILOT_CMD_CENTER v4.0"})]}),(0,t.jsxs)("div",{className:"cs-dash-main",children:[(0,t.jsxs)("div",{className:"cs-dash-side",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:8.5,fontWeight:700,color:f,textTransform:"uppercase",letterSpacing:1.8,marginBottom:12},children:"Sentiment Analysis"}),(0,t.jsxs)("div",{style:{background:x,border:`1px solid ${g}`,borderRadius:10,padding:12},children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:8,alignItems:"center"},children:[(0,t.jsx)("span",{style:{fontSize:16},children:T>50?"\uD83D\uDE42":"\uD83D\uDE21"}),(0,t.jsxs)("span",{style:{fontSize:11,fontWeight:700,color:T>50?v:y},children:[T,"%"]})]}),(0,t.jsx)(k,{pct:T,col:T>50?v:y,show:!0})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:8.5,fontWeight:700,color:f,textTransform:"uppercase",letterSpacing:1.8,marginBottom:12},children:"Knowledge Hits"}),(0,t.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:8},children:0===Y.length?(0,t.jsx)("div",{style:{padding:12,border:`1px dashed ${h}`,borderRadius:8,fontSize:9,color:f,textAlign:"center"},children:"Awaiting Scan..."}):Y.map((e,s)=>(0,t.jsxs)("div",{className:"dashFadeIn",style:{background:"rgba(255,255,255,0.03)",borderRadius:8,padding:10,border:`1px solid ${h}`},children:[(0,t.jsx)("div",{style:{fontSize:10,fontWeight:700,color:m,marginBottom:4},children:e.title}),(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",fontSize:8},children:[(0,t.jsxs)("span",{style:{color:f},children:["Source: ",e.type]}),(0,t.jsxs)("span",{style:{color:v},children:[e.confidence,"% Match"]})]})]},s))})]}),(0,t.jsxs)("div",{style:{marginTop:"auto",background:"rgba(196,154,60,0.06)",borderRadius:10,padding:12,border:`1px solid ${g}`,textAlign:"center"},children:[(0,t.jsx)(o.A,{size:18,color:"var(--gold)",style:{margin:"0 auto 8px",animation:"aidPulse 2s infinite"}}),(0,t.jsx)("div",{style:{fontSize:8,fontWeight:700,color:"var(--gold)",letterSpacing:1},children:"AUTO-OPTIMIZING"})]})]}),(0,t.jsxs)("div",{className:"cs-dash-body",children:[(0,t.jsx)(N,{x:z,y:C,vis:I,ring:E}),(0,t.jsx)("div",{className:`cs-scan-line ${q?"active":""}`}),(0,t.jsx)("div",{className:"cs-step-pills",children:[0,1,2,3].map(s=>(0,t.jsx)("div",{className:`cs-step-pill ${e>=s?3===e&&H?"done":"active":""}`},s))}),(0,t.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[(0,t.jsx)("div",{style:{width:32,height:32,borderRadius:8,background:"#192D48",border:`1px solid ${h}`,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(c.A,{size:16,color:b})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{fontSize:12,fontWeight:700,color:m},children:"Amit K. (Bharti Airtel)"}),(0,t.jsx)("div",{style:{fontSize:9,color:f},children:"Strategic Enterprise Acc."})]})]}),(0,t.jsxs)("div",{className:"cs-ticket-card",children:[L,0===e&&0===L.length&&(0,t.jsx)("span",{className:"cs-ai-cursor"})]}),e>=2&&(0,t.jsxs)("div",{className:"cs-draft-box",children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[(0,t.jsx)(l.A,{size:14,color:"var(--gold)"}),(0,t.jsx)("span",{style:{fontSize:10,fontWeight:700,color:"var(--gold)",letterSpacing:1},children:"AI RESOLUTION SUGGESTION"})]}),(0,t.jsxs)("div",{style:{color:"rgba(255,255,255,.85)",fontSize:12},children:[B,2===e&&B.length<100&&(0,t.jsx)("span",{className:"cs-ai-cursor"})]})]}),3===e&&(0,t.jsxs)("div",{style:{marginTop:"auto",display:"flex",gap:10,justifyContent:"flex-end"},children:[(0,t.jsx)("button",{className:"cs-btn-action",style:{background:"rgba(255,255,255,0.05)",color:b,border:`1.5px solid ${g}`},children:"Regenerate"}),(0,t.jsx)("button",{ref:V,className:`cs-btn-action cs-btn-approve ${H?"success":""}`,children:H?"Response Sent ✓":"Send Resolution"})]})]})]})]}),(0,t.jsxs)("div",{className:"cs-caption-dock",children:[(0,t.jsx)(j,{col:u}),(0,t.jsx)("span",{children:a})]})]})})]})]})}},1562:(e,s,a)=>{"use strict";a.d(s,{default:()=>k});var t=a(5155),i=a(2115),r=a(642),n=a(7896),o=a(13),c=a(7810),l=a(4071),d=a(6179),p=a(6035),x=a(9619),h=a(3961),g=a(3219),m=a(9123);let b=(0,a(2240).A)("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]);var f=a(2651);let u=[{id:"agent",icon:o.A,label:"Support Agent",headline:'Stop Asking "Can I get your order number?"',desc:"Agents open a ticket and instantly see the client's tier, their open sales deals, and the exact product they were viewing. No more blind troubleshooting.",features:["Real-time CRM Sync","AI Co-pilot Drafting","SLA Breach Warnings"],color:"#3470F0",bg:"rgba(52,112,240,0.08)"},{id:"rep",icon:c.A,label:"Sales Rep",headline:"Never Get Blindsided in a Meeting.",desc:"Sales reps receive push notifications if a critical issue opens on their key accounts before they walk into a renewal meeting.",features:["Pre-visit Briefings","Account Health Score","Churn Alerts"],color:"#c49a3c",bg:"rgba(196,154,60,0.08)"},{id:"manager",icon:l.A,label:"CS Manager",headline:"Manage Escalations Proactively.",desc:"Automatically flag tickets that mention competitors, pricing disputes, or cancellation threats directly to leadership for immediate intervention.",features:["Sentiment Tracking","SLA Escalation Rules","Market IQ Routing"],color:"#17b378",bg:"rgba(23,179,120,0.08)"},{id:"leader",icon:d.A,label:"Leadership",headline:"Connect Support to Revenue.",desc:"Stop viewing support as a cost center. Map CSAT scores directly to NRR (Net Revenue Retention) and overall pipeline health.",features:["Revenue Impact View","Cross-Dept Analytics","ROI Reporting"],color:"#E0384F",bg:"rgba(224,56,79,0.08)"}];function v(){return(0,t.jsxs)("div",{className:"cs-s-widget",children:[(0,t.jsxs)("div",{className:"cs-s-w-head",children:[(0,t.jsx)("div",{className:"cs-s-w-avatar",children:(0,t.jsx)(p.A,{size:16,color:"var(--blue)"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"cs-s-w-title",children:"Enterprise Tkt #884"}),(0,t.jsx)("div",{className:"cs-s-w-sub",children:"Bharti Airtel • Strategic"})]}),(0,t.jsx)("div",{className:"cs-s-w-badge",children:"Live"})]}),(0,t.jsxs)("div",{className:"cs-s-w-ai-box",children:[(0,t.jsxs)("div",{className:"cs-s-w-ai-label",children:[(0,t.jsx)(x.A,{size:12})," AI Ghost-Draft"]}),(0,t.jsx)("div",{className:"cs-s-w-ai-line",style:{width:"90%"}}),(0,t.jsx)("div",{className:"cs-s-w-ai-line",style:{width:"60%"}})]}),(0,t.jsxs)("div",{className:"cs-s-w-footer",children:[(0,t.jsx)(h.A,{size:14,color:"var(--gold)"}),(0,t.jsx)("span",{children:"Renewal Signal: High Confidence"})]})]})}function y(){return(0,t.jsxs)("div",{className:"cs-s-widget",children:[(0,t.jsx)("div",{className:"cs-s-w-mini-label",children:"Account Health Index"}),(0,t.jsxs)("div",{className:"cs-s-w-health-val",children:["96.8",(0,t.jsx)("span",{className:"unit",children:"%"})]}),(0,t.jsx)("div",{className:"cs-s-w-trend positive",children:"↑ 4.2% Growth"}),(0,t.jsxs)("div",{className:"cs-s-w-stack",style:{marginTop:20},children:[(0,t.jsxs)("div",{className:"cs-s-w-alert",children:[(0,t.jsx)(g.A,{size:14})," P1 Urgent Escalation Detected"]}),(0,t.jsxs)("div",{className:"cs-s-w-item",children:[(0,t.jsx)("span",{children:"Market Sentiment"}),(0,t.jsx)("span",{className:"val",style:{color:"var(--gold)"},children:"Stable"})]})]})]})}function w(){return(0,t.jsxs)("div",{className:"cs-s-widget",children:[(0,t.jsxs)("div",{className:"cs-s-w-head",style:{marginBottom:24},children:[(0,t.jsx)("div",{className:"cs-s-w-title",children:"Regional NRR Index"}),(0,t.jsx)(m.A,{size:16,color:"rgba(255,255,255,0.4)"})]}),(0,t.jsx)("div",{className:"cs-s-w-bars",children:["APAC","EMEA","US-E"].map((e,s)=>(0,t.jsxs)("div",{className:"cs-s-w-bar-row",children:[(0,t.jsxs)("div",{className:"label",children:[(0,t.jsx)("span",{children:e})," ",(0,t.jsxs)("span",{children:[98-5*s,"%"]})]}),(0,t.jsx)("div",{className:"bar-track",children:(0,t.jsx)("div",{className:"bar-fill",style:{width:`${98-5*s}%`,background:0===s?"var(--green)":"var(--gold)"}})})]},e))})]})}function j(){return(0,t.jsxs)("div",{className:"cs-s-widget",children:[(0,t.jsxs)("div",{className:"cs-s-w-head",children:[(0,t.jsx)(b,{size:16,color:"#E0384F"}),(0,t.jsx)("div",{className:"cs-s-w-title",children:"Revenue Impact Monitoring"})]}),(0,t.jsxs)("div",{className:"cs-s-w-big-val",children:["$4.2M",(0,t.jsx)("span",{className:"sub",children:"+14%"})]}),(0,t.jsx)("div",{className:"cs-s-w-spark",children:[20,35,25,50,45,70,60,95].map((e,s)=>(0,t.jsx)("div",{className:"spark-bar",style:{height:`${e}%`,opacity:7===s?1:.4}},s))}),(0,t.jsx)("div",{className:"cs-s-w-mini-foot",children:"Attributed to Support Retention Flow"})]})}function k(){let[e,s]=(0,i.useState)(u[0].id),a=u.find(s=>s.id===e)||u[0];return(0,t.jsxs)("section",{id:"personas",className:"cs-s-section",children:[(0,t.jsx)("style",{children:`
        .cs-s-section { 
          padding: 120px 0; 
          background: #F9F8F6; 
          position: relative; overflow: hidden; 
        }
        
        /* Stripe-style background mesh */
        .cs-s-bg-mesh {
          position: absolute; top: 0; left: 0; right: 0; height: 100%;
          background: radial-gradient(circle at 0% 0%, rgba(196,154,60,0.03) 0%, transparent 50%),
                      radial-gradient(circle at 100% 100%, rgba(52,112,240,0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .cs-s-wrap { max-width: 1240px; margin: 0 auto; padding: 0 40px; position: relative; z-index: 2; }
        
        .cs-s-header { text-align: center; max-width: 720px; margin: 0 auto 80px; }
        .cs-s-h2 { font-family: 'Fraunces', serif; font-size: clamp(36px, 5vw, 56px); line-height: 1.05; color: var(--navy); margin-bottom: 24px; font-weight: 350; }
        .cs-s-h2 em { font-style: italic; color: var(--gold); font-weight: 300; }
        
        .cs-s-container {
          background: #fff; border-radius: 32px;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.1);
          overflow: hidden; display: flex; flex-direction: column;
        }

        .cs-s-tabs {
          display: flex; background: #fafafa;
          border-bottom: 1px solid rgba(0,0,0,0.04);
          padding: 8px; gap: 8px;
        }
        .cs-s-tab {
          flex: 1; padding: 16px 24px; border: none; background: transparent;
          border-radius: 12px; cursor: pointer; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex; align-items: center; justify-content: center; gap: 12px;
        }
        .cs-s-tab.active { background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.04); }
        .cs-s-tab-label { font-size: 13px; font-weight: 600; color: #666; transition: color 0.3s; }
        .cs-s-tab.active .cs-s-tab-label { color: var(--navy); }

        .cs-s-content { padding: clamp(40px, 8vw, 80px); }
        .cs-s-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        
        .cs-s-text h3 { font-family: 'Fraunces', serif; font-size: clamp(28px, 4vw, 42px); color: var(--navy); line-height: 1.15; margin-bottom: 24px; font-weight: 400; }
        .cs-s-text p { font-size: 17px; color: #555; line-height: 1.7; margin-bottom: 40px; font-weight: 300; }
        
        .cs-s-feats { display: grid; grid-template-columns: 1fr; gap: 14px; }
        .cs-s-feat { display: flex; align-items: center; gap: 12px; font-size: 14px; font-weight: 600; color: var(--navy); }
        .cs-s-feat-icon { width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; background: #f4f4f4; color: var(--gold); }

        /* Dashboard Viewport */
        .cs-s-view {
          background: #080f1e; border-radius: 24px; padding: 48px;
          position: relative; overflow: hidden; aspect-ratio: 16 / 11;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 32px 64px -16px rgba(8, 15, 30, 0.4);
        }
        .cs-s-view::after {
          content: ""; position: absolute; top: 0; left: 0; right: 0; height: 100%;
          background: radial-gradient(circle at top right, var(--tab-color), transparent 60%);
          opacity: 0.1; pointer-events: none;
        }

        /* Widget Details */
        .cs-s-widget {
          width: 100%; max-width: 320px;
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px); border-radius: 20px; padding: 32px;
          position: relative; z-index: 5; color: white;
          animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideUpFade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

        .cs-s-w-head { display: flex; align-items: center; gap: 12px; }
        .cs-s-w-avatar { width: 32px; height: 32px; border-radius: 8px; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; }
        .cs-s-w-title { font-size: 13px; font-weight: 700; }
        .cs-s-w-sub { font-size: 10px; color: rgba(255,255,255,0.4); margin-top: 2px; }
        .cs-s-w-badge { margin-left: auto; font-size: 9px; font-weight: 800; text-transform: uppercase; background: var(--green); color: white; padding: 4px 8px; border-radius: 4px; }
        
        .cs-s-w-ai-box { background: rgba(255,255,255,0.02); border-radius: 12px; padding: 16px; margin: 20px 0; border: 1px dashed rgba(255,255,255,0.1); }
        .cs-s-w-ai-label { font-size: 10px; font-weight: 700; color: var(--gold); display: flex; align-items: center; gap: 6px; margin-bottom: 12px; }
        .cs-s-w-ai-line { height: 4px; background: rgba(255,255,255,0.05); border-radius: 2px; margin-bottom: 8px; position: relative; overflow: hidden; }
        .cs-s-w-ai-line::after { content: ""; position: absolute; left: 0; top: 0; height: 100%; width: 40%; background: var(--gold); animation: stripeShimmer 2s infinite; }
        @keyframes stripeShimmer { from { left: -100%; } to { left: 100%; } }

        .cs-s-w-footer { display: flex; align-items: center; gap: 10px; font-size: 10px; font-weight: 700; color: var(--gold); border-top: 1px solid rgba(255,255,255,0.05); padding-top: 16px; }

        .cs-s-w-mini-label { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
        .cs-s-w-health-val { font-size: 48px; font-weight: 800; font-family: 'Fraunces', serif; display: flex; align-items: baseline; }
        .cs-s-w-health-val .unit { font-size: 18px; color: rgba(255,255,255,0.2); margin-left: 4px; }
        .cs-s-w-trend { font-size: 12px; font-weight: 700; margin-top: 4px; }
        .cs-s-w-trend.positive { color: var(--green); }
        .cs-s-w-stack { display: flex; flex-direction: column; gap: 12px; }
        .cs-s-w-alert { background: rgba(224,56,79,0.1); border: 1px solid rgba(224,56,79,0.2); padding: 12px; border-radius: 10px; font-size: 10px; font-weight: 700; color: #ff5a6e; display: flex; align-items: center; gap: 8px; }
        .cs-s-w-item { display: flex; justifyContent: space-between; font-size: 11px; color: rgba(255,255,255,0.6); }

        .cs-s-w-bar-row { margin-bottom: 16px; }
        .cs-s-w-bar-row:last-child { margin-bottom: 0; }
        .cs-s-w-bar-row .label { display: flex; justify-content: space-between; font-size: 11px; font-weight: 600; margin-bottom: 6px; }
        .cs-s-w-bar-row .bar-track { height: 6px; background: rgba(255,255,255,0.05); border-radius: 100px; overflow: hidden; }
        .cs-s-w-bar-row .bar-fill { height: 100%; border-radius: 100px; transition: width 1s ease-out; }

        .cs-s-w-big-val { font-size: 42px; font-weight: 800; font-family: 'Fraunces', serif; margin: 12px 0; }
        .cs-s-w-big-val .sub { font-size: 14px; font-family: 'Inter'; color: var(--green); margin-left: 12px; font-weight: 700; }
        .cs-s-w-spark { display: flex; align-items: flex-end; gap: 4px; height: 60px; margin: 20px 0; }
        .cs-s-w-spark .spark-bar { flex: 1; background: #E0384F; border-radius: 3px 3px 0 0; min-width: 8px; transition: height 1s; }
        .cs-s-w-mini-foot { font-size: 9px; color: rgba(255,255,255,0.3); text-align: center; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.05); }

        @media (max-width: 1024px) {
          .cs-s-grid { gap: 40px; }
          .cs-s-view { padding: 32px; }
        }

        @media (max-width: 900px) {
          .cs-s-section { padding: 80px 0; }
          .cs-s-grid { grid-template-columns: 1fr; gap: 48px; text-align: center; }
          .cs-s-text { max-width: 100%; }
          .cs-s-feats { justify-content: center; }
          .cs-s-feat { justify-content: center; }
          .cs-s-view { aspect-ratio: auto; min-height: 380px; width: 100%; max-width: 600px; margin: 0 auto; }
          .cs-s-widget { max-width: 100%; }
        }

        @media (max-width: 768px) {
          .cs-s-tabs { overflow-x: auto; scrollbar-width: none; border-radius: 0; padding: 4px; }
          .cs-s-tab { min-width: 140px; }
          .cs-s-content { padding: 40px 24px; }
        }

        @media (max-width: 480px) {
          .cs-s-tab { min-width: 120px; padding: 12px 8px; }
          .cs-s-tab-label { font-size: 11px; }
          .cs-s-view { padding: 24px; min-height: 320px; }
          .cs-s-widget { padding: 24px; }
        }
      `}),(0,t.jsx)("div",{className:"cs-s-bg-mesh"}),(0,t.jsxs)("div",{className:"cs-s-wrap",children:[(0,t.jsxs)("div",{className:"cs-s-header reveal",children:[(0,t.jsxs)("div",{className:"eyebrow",style:{justifyContent:"center"},children:[(0,t.jsx)("span",{className:"ey-line"})," Perspective: Revenue Alignment"]}),(0,t.jsxs)("h2",{className:"cs-s-h2",children:["Built for Every",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Stakeholder."})]}),(0,t.jsx)("p",{className:"lead lead-ink",style:{maxWidth:640,margin:"0 auto"},children:"Post-sale success is a team sport. ClientEra surfaces the specific context needed by every member of the revenue team to drive net revenue retention."})]}),(0,t.jsxs)("div",{className:"cs-s-container reveal",children:[(0,t.jsx)("div",{className:"cs-s-tabs",children:u.map(a=>(0,t.jsxs)("button",{className:`cs-s-tab ${e===a.id?"active":""}`,onClick:()=>s(a.id),children:[(0,t.jsx)(a.icon,{size:18,color:e===a.id?a.color:"#999",strokeWidth:2.5}),(0,t.jsx)("span",{className:"cs-s-tab-label",children:a.label})]},a.id))}),(0,t.jsx)("div",{className:"cs-s-content",children:(0,t.jsx)(r.N,{mode:"wait",children:(0,t.jsxs)(n.P.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.4,ease:[.16,1,.3,1]},className:"cs-s-grid",children:[(0,t.jsxs)("div",{className:"cs-s-text",children:[(0,t.jsx)("h3",{children:a.headline}),(0,t.jsx)("p",{children:a.desc}),(0,t.jsx)("div",{className:"cs-s-feats",children:a.features.map(e=>(0,t.jsxs)("div",{className:"cs-s-feat",children:[(0,t.jsx)("div",{className:"cs-s-feat-icon",children:(0,t.jsx)(f.A,{size:12})}),e]},e))}),(0,t.jsx)("div",{style:{marginTop:40,display:"flex",justifyContent:"center"}})]}),(0,t.jsx)("div",{className:"cs-s-view",style:{"--tab-color":a.color},children:(0,t.jsx)(r.N,{mode:"wait",children:(0,t.jsxs)(n.P.div,{initial:{scale:.95,opacity:0},animate:{scale:1,opacity:1},exit:{scale:1.05,opacity:0},transition:{duration:.5,ease:"easeOut"},style:{width:"100%",display:"flex",justifyContent:"center"},children:["agent"===e&&(0,t.jsx)(v,{}),"rep"===e&&(0,t.jsx)(y,{}),"manager"===e&&(0,t.jsx)(w,{}),"leader"===e&&(0,t.jsx)(j,{})]},e+"widget")})})]},e)})})]})]})]})}},2032:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]])},2314:(e,s,a)=>{"use strict";a.d(s,{default:()=>g});var t=a(5155),i=a(2115),r=a(7896),n=a(9199),o=a(3961),c=a(2240);let l=(0,c.A)("link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);var d=a(6035);let p=(0,c.A)("folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]),x=(0,c.A)("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);var h=a(1362);function g(){let e=(0,i.useRef)(null),s=(0,i.useRef)([]);(0,i.useEffect)(()=>{let s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.1}),a=e.current;if(a)return a.querySelectorAll(".cstl-reveal").forEach(e=>s.observe(e)),()=>s.disconnect()},[]),(0,i.useEffect)(()=>{s.current.forEach(e=>{e&&(e.addEventListener("mousemove",s=>{let a,t,i;return a=e.getBoundingClientRect(),t=(s.clientX-a.left)/a.width*100,i=(s.clientY-a.top)/a.height*100,void(e.style.setProperty("--mouse-x",`${t}%`),e.style.setProperty("--mouse-y",`${i}%`))}),e.addEventListener("mouseleave",()=>{e.style.setProperty("--mouse-x","50%"),e.style.setProperty("--mouse-y","50%")}))})},[]);let a=[{id:"open",label:"Open",color:"#E0384F",bg:"#fff"},{id:"in_progress",label:"In Progress",color:"#F5A623",bg:"#fff"},{id:"pending_client",label:"Pending Client",color:"var(--blue)",bg:"#fff"},{id:"resolved",label:"Resolved",color:"var(--gold)",bg:"#fff"},{id:"closed",label:"Closed",color:"var(--green)",bg:"#fff"}],c=[{icon:n.A,title:"Rework Workflow",desc:"Approvers can send tickets back to any prior step for correction with a forced reason. No hard rejections that lose history — just continuous refinement."},{icon:o.A,title:"SLA Risk Detection",desc:"SLA breaches are predicted before they happen. Automated escalation rules fire based on account priority and custom business thresholds."},{icon:l,title:"Commercial Linkage",desc:"Every ticket is natively tethered to the relevant Deal or Sales Order. Reps see account health directly on their pipeline timeline."},{icon:d.A,title:"Audit-Trail Threads",desc:"Threaded internal and external comments provide a permanent record. Every interaction is time-stamped and attached to the ticket permanently."},{icon:p,title:"Dynamic Routing",desc:"Configure custom ticket categories that trigger specific intake forms, SLA rules, and intelligent routing based on ticket content."},{icon:x,title:"Priority Governance",desc:"Tiered SLA enforcement across four priority levels. Response and resolution targets are automatically mapped to account importance levels."}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        .cstl-section {
          background: var(--navy);
          position: relative;
          overflow: hidden;
        }
        .cstl-wrap {
          max-width: min(96vw, 1200px);
          margin: 0 auto;
          padding: 80px clamp(20px, 4vw, 72px);
          position: relative; z-index: 1;
        }
        .cstl-header {
          max-width: 640px;
          margin-bottom: 48px;
        }
        .cstl-flow {
          display: flex; 
          align-items: center;
          justify-content: center;
          gap: 0;
          padding: 0;
          margin-bottom: 64px;
          position: relative;
          z-index: 2;
        }

        .cstl-stage-wrapper {
          display: flex;
          align-items: center;
          flex-shrink: 1;
          min-width: 0;
        }

        .cstl-stage {
          flex: 1;
          min-width: 0;
          position: relative;
          z-index: 2;
        }

        .cstl-stage-box {
          position: relative;
          width: 100%;
          padding: 18px 24px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          cursor: pointer;
          background: #fff;
          border: 2px solid;
          border-color: var(--stage-color);
          color: var(--stage-color);
          box-shadow: 0 4px 16px rgba(0,0,0,.06);
          transition: all .35s cubic-bezier(.16,1,.3,1);
          overflow: hidden;
        }
        .cstl-stage-box::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--stage-color);
          opacity: 0;
          transition: opacity .35s cubic-bezier(.16,1,.3,1);
          z-index: -1;
        }
        .cstl-stage-box:hover {
          transform: translateY(-6px) scale(1.04);
          box-shadow: 0 16px 40px rgba(0,0,0,.15);
          color: #fff;
          border-color: var(--stage-color);
        }
        .cstl-stage-box:hover::before {
          opacity: 1;
        }
        .cstl-stage-box::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.3);
          transform: translate(-50%, -50%);
          transition: width .6s, height .6s;
        }
        .cstl-stage-box:hover::after {
          width: 300px;
          height: 300px;
        }

        .cstl-stage-pulse {
          display: none;
        }

        .cstl-path {
          width: 60px; height: 2px;
          position: relative; display: flex; align-items: center;
          flex-shrink: 0;
          margin: 0;
        }
        .cstl-path-inner {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, rgba(196,154,60,0.3), transparent);
          border-radius: 2px;
          overflow: hidden;
        }
        .cstl-path-inner::after {
          content: "";
          position: absolute;
          left: -100%;
          top: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          animation: flowLine 3s ease-in-out infinite;
        }
        @keyframes flowLine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .cstl-path-arrow {
          position: absolute; right: -2px;
          color: var(--gold);
          filter: drop-shadow(0 0 4px rgba(196,154,60,0.4));
          animation: cstlArrowFlow 2s ease-in-out infinite;
        }
        @keyframes cstlArrowFlow {
          0%, 100% { transform: translateX(0); opacity: 0.5; }
          50% { transform: translateX(4px); opacity: 1; }
        }

        .cstl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .cstl-feat-card {
          background: rgba(255,255,255,.02);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 18px; 
          padding: 32px;
          transition: all .35s cubic-bezier(.16,1,.3,1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .cstl-feat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(196,154,60,.08) 0%, transparent 50%);
          opacity: 0;
          transition: opacity .35s;
        }
        .cstl-feat-card:hover {
          border-color: rgba(196,154,60,.4);
          background: rgba(255,255,255,.05);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,.2);
        }
        .cstl-feat-card:hover::before {
          opacity: 1;
        }
        .cstl-feat-icon {
          color: var(--gold); 
          margin-bottom: 20px;
          transition: all .35s cubic-bezier(.16,1,.3,1);
        }
        .cstl-feat-card:hover .cstl-feat-icon {
          transform: scale(1.15) rotate(-5deg);
          filter: drop-shadow(0 4px 8px rgba(196,154,60,.4));
        }
        .cstl-feat-title {
          font-size: 15px; font-weight: 600;
          color: var(--text); margin-bottom: 8px;
          font-family: 'Fraunces', serif;
        }
        .cstl-feat-desc {
          font-size: 13px; color: var(--text2);
          line-height: 1.6; font-weight: 300;
        }

        .cstl-reveal {
          opacity: 0; transform: translateY(22px);
          transition: opacity .7s ease, transform .7s cubic-bezier(.16,1,.3,1);
        }
        .cstl-reveal.visible { opacity: 1; transform: none; }
        .cstl-reveal-d1 { transition-delay: .1s; }
        .cstl-reveal-d2 { transition-delay: .15s; }
        .cstl-reveal-d3 { transition-delay: .2s; }
        .cstl-reveal-d4 { transition-delay: .25s; }
        .cstl-reveal-d5 { transition-delay: .3s; }
        .cstl-reveal-d6 { transition-delay: .35s; }

        @media (max-width: 1024px) {
          .cstl-flow { margin-bottom: 48px; }
          .cstl-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 768px) {
          .cstl-flow { flex-wrap: wrap; gap: 12px; }
          .cstl-stage-wrapper { flex-direction: column; width: 100%; }
          .cstl-stage { width: 100%; }
          .cstl-path { display: none; }
          .cstl-stage-box { padding: 12px 16px; font-size: 12px; }
        }
        @media (max-width: 640px) {
          .cstl-grid { grid-template-columns: 1fr; }
        }
      `}),(0,t.jsx)("section",{className:"cstl-section",ref:e,id:"lifecycle",children:(0,t.jsxs)("div",{className:"cstl-wrap",children:[(0,t.jsxs)("div",{className:"cstl-header cstl-reveal",children:[(0,t.jsxs)("div",{className:"eyebrow eyebrow-gold",children:[(0,t.jsx)("span",{className:"ey-line"}),"Lifecycle & Governance"]}),(0,t.jsxs)("h2",{className:"h2 h2-white",children:["State Machine Architecture.",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"From Open to Closed."})]}),(0,t.jsx)("p",{className:"lead lead-white",children:"A high-trust governance layer designed for enterprise scale. Every status change, rework event, and SLA breach is natively tethered to commercial value in real-time."})]}),(0,t.jsx)("div",{className:"cstl-reveal cstl-reveal-d1",children:(0,t.jsx)("div",{className:"cstl-flow",children:a.map((e,s)=>(0,t.jsxs)("div",{className:"cstl-stage-wrapper",children:[(0,t.jsx)(r.P.div,{className:"cstl-stage",initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.1*s,duration:.5},children:(0,t.jsx)("div",{className:"cstl-stage-box",style:{"--stage-color":e.color},children:e.label})}),s<a.length-1&&(0,t.jsxs)("div",{className:"cstl-path",children:[(0,t.jsx)("div",{className:"cstl-path-inner"}),(0,t.jsx)(h.A,{size:16,className:"cstl-path-arrow"})]})]},e.id))})}),(0,t.jsx)("div",{className:"cstl-grid",children:c.map((e,a)=>(0,t.jsxs)("div",{ref:e=>{s.current[a]=e},className:`cstl-feat-card cstl-reveal cstl-reveal-d${a+1}`,children:[(0,t.jsx)("div",{className:"cstl-feat-icon",children:(0,t.jsx)(e.icon,{size:24,strokeWidth:2.2})}),(0,t.jsx)("div",{className:"cstl-feat-title",children:e.title}),(0,t.jsx)("div",{className:"cstl-feat-desc",children:e.desc})]},a))})]})})]})}},2651:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]])},2869:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]])},3024:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]])},3219:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]])},4514:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},4667:(e,s,a)=>{Promise.resolve().then(a.bind(a,8552)),Promise.resolve().then(a.bind(a,5537)),Promise.resolve().then(a.bind(a,8143)),Promise.resolve().then(a.bind(a,2314)),Promise.resolve().then(a.bind(a,8164)),Promise.resolve().then(a.bind(a,1519)),Promise.resolve().then(a.bind(a,7262)),Promise.resolve().then(a.bind(a,1562)),Promise.resolve().then(a.bind(a,9675)),Promise.resolve().then(a.bind(a,1824)),Promise.resolve().then(a.bind(a,4480))},5537:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});var t=a(5155),i=a(2115);function r(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let s=e.current;if(!s)return;let a=e=>{let a=s.getBoundingClientRect(),t=(e.clientX-(a.left+a.width/2))/a.width,i=(e.clientY-(a.top+a.height/2))/a.height;s.style.transform=`perspective(1200px) rotateX(${-(3*i)}deg) rotateY(${3*t}deg)`},t=()=>{s.style.transform="perspective(1200px) rotateX(0deg) rotateY(0deg)"};return s.addEventListener("mousemove",a),s.addEventListener("mouseleave",t),()=>{s.removeEventListener("mousemove",a),s.removeEventListener("mouseleave",t)}},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        /* ── CS CTA — LIGHT WRAPPER ── */
        .cs-cta-outer {
          background: var(--cream);
          padding: clamp(48px, 5vw, 72px) clamp(20px, 4.8vw, 72px);
          position: relative; overflow: hidden;
        }
        .cs-cta-card {
          max-width: min(96vw, 1180px);
          margin: 0 auto;
          background: var(--navy);
          border-radius: 22px;
          padding: clamp(36px, 3.5vw, 56px) clamp(32px, 4.5vw, 64px);
          display: flex; align-items: center;
          justify-content: space-between;
          gap: clamp(24px, 3.5vw, 52px);
          position: relative; overflow: hidden;
          border: 1px solid rgba(196,154,60,.35);
          box-shadow: 0 0 32px rgba(196,154,60,.1), 0 32px 80px rgba(11,22,40,.28);
          transition: transform .3s ease;
        }
        .cs-cta-card::before {
          content: '';
          position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(196,154,60,.7), transparent);
        }
        .cs-cta-glow {
          position: absolute; border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(196,154,60,.18) 0%, transparent 68%);
          width: 380px; height: 380px;
          top: -160px; right: -80px;
          filter: blur(32px);
          animation: csctaglowdrift 14s ease-in-out infinite;
        }
        @keyframes csctaglowdrift {
          0%,100% { transform: translate(0,0) scale(1); }
          35% { transform: translate(16px,-18px) scale(1.07); }
          70% { transform: translate(-10px,12px) scale(.96); }
        }
        .cs-cta-left { position: relative; z-index: 1; flex: 1; min-width: 0; }
        .cs-cta-eyebrow {
          display: flex; align-items: center; gap: 10px;
          font-size: 11px; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase;
          color: var(--gold); margin-bottom: 18px;
        }
        .cs-cta-eyebrow::before, .cs-cta-eyebrow::after {
          content: ''; display: block;
          width: 24px; height: 1px;
          background: var(--gold); opacity: .6;
        }
        .cs-cta-h2 {
          font-family: 'Fraunces', serif;
          font-size: clamp(26px, 2.5vw, 42px); font-weight: 400;
          color: var(--text); line-height: 1.08;
          letter-spacing: -1px; margin-bottom: 10px;
        }
        .cs-cta-h2 em { font-style: italic; color: var(--gold); font-weight: 300; }
        .cs-cta-lead {
          font-size: clamp(13px, .9vw, 15px);
          color: rgba(143,163,192,.85); line-height: 1.6;
        }

        /* cross-page nav pills */
        .cs-cta-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 20px; }
        .cs-cta-pill {
          padding: 6px 14px; border-radius: 100px;
          font-size: 11.5px; font-weight: 500;
          border: 1px solid rgba(255,255,255,.12);
          color: var(--text2); text-decoration: none;
          transition: all .2s;
        }
        .cs-cta-pill:hover {
          border-color: rgba(196,154,60,.35);
          color: var(--gold); background: rgba(196,154,60,.06);
        }

        .cs-cta-right {
          display: flex; flex-direction: column;
          gap: 10px; width: clamp(180px, 16vw, 230px);
          flex-shrink: 0; position: relative; z-index: 1;
        }
        .cs-cta-btn {
          display: flex; align-items: center; justify-content: center;
          padding: 14px 22px; border-radius: 10px;
          font-size: 14px; font-weight: 600;
          cursor: pointer; border: none;
          transition: all .28s cubic-bezier(.22,1,.36,1);
          text-decoration: none; width: 100%;
        }
        .cs-cta-btn-primary {
          background: var(--gold); color: var(--navy);
          box-shadow: 0 4px 22px rgba(196,154,60,.38);
        }
        .cs-cta-btn-primary:hover {
          background: var(--gold2); transform: translateY(-2px);
          box-shadow: 0 8px 36px rgba(196,154,60,.62);
        }
        .cs-cta-btn-ghost {
          background: rgba(255,255,255,.06); color: var(--text);
          border: 1.5px solid rgba(255,255,255,.22);
        }
        .cs-cta-btn-ghost:hover {
          background: rgba(255,255,255,.11);
          border-color: rgba(255,255,255,.38);
          transform: translateY(-2px);
        }
        .cs-cta-micro {
          text-align: center; font-size: 10.5px;
          color: rgba(255,255,255,.2); margin: 2px 0 0;
        }

        @media (max-width: 680px) {
          .cs-cta-card {
            flex-direction: column; align-items: stretch;
            padding: 28px 22px;
          }
          .cs-cta-left { text-align: center; }
          .cs-cta-eyebrow { justify-content: center; }
          .cs-cta-pills { justify-content: center; }
          .cs-cta-right { width: 100%; }
        }
      `}),(0,t.jsx)("div",{className:"cs-cta-outer",children:(0,t.jsxs)("div",{className:"cs-cta-card",ref:e,children:[(0,t.jsx)("div",{className:"cs-cta-glow","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"cs-cta-left",children:[(0,t.jsx)("div",{className:"cs-cta-eyebrow",children:"Get Started"}),(0,t.jsxs)("h2",{className:"cs-cta-h2",children:["Support that's built",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"into the deal."})]}),(0,t.jsx)("p",{className:"cs-cta-lead",children:"Set up in 15 minutes. No integration required. Your team closes deals and resolves issues on the same platform — context never lost."}),(0,t.jsxs)("div",{className:"cs-cta-pills",children:[(0,t.jsx)("a",{href:"/lead-management",className:"cs-cta-pill",children:"← Lead Management"}),(0,t.jsx)("a",{href:"/sales-ops",className:"cs-cta-pill",children:"Sales Operations →"}),(0,t.jsx)("a",{href:"/sales-management",className:"cs-cta-pill",children:"Sales Management →"})]})]}),(0,t.jsxs)("div",{className:"cs-cta-right",children:[(0,t.jsx)("a",{href:"#pricing",className:"cs-cta-btn cs-cta-btn-primary",children:"Book a demo"}),(0,t.jsx)("a",{href:"#features",className:"cs-cta-btn cs-cta-btn-ghost",children:"Explore features"}),(0,t.jsx)("p",{className:"cs-cta-micro",children:"No setup fees \xb7 Cancel anytime"})]})]})})]})}},6035:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("message-square",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]])},6179:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("chart-line",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]])},7262:(e,s,a)=>{"use strict";a.d(s,{default:()=>x});var t=a(5155),i=a(3024),r=a(3961),n=a(2032);let o=(0,a(2240).A)("radio",[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);var c=a(9123),l=a(3210),d=a(4514);let p=[{dim:"Customer Context",legacy:"Isolated ticket snapshots",clientera:"Unified 360\xb0 Commercial Timeline",icon:i.A},{dim:"Agent Empowerment",legacy:"Blind troubleshooting",clientera:"Real-time Sales & Deal Visibility",icon:r.A},{dim:"Account Health",legacy:"Static CSAT collections",clientera:"Predictive Churn Risk Indicators",icon:n.A},{dim:"Commercial Link",legacy:"Manual CRM updates",clientera:"Native Billing & ERP Integration",icon:o},{dim:"Strategic AI",legacy:"Generic support chatbots",clientera:"Deep-Silo Context Retrieval",icon:c.A}];function x(){return(0,t.jsxs)("section",{id:"comparison",className:"cs-comp-section section-dark",children:[(0,t.jsx)("style",{children:`
        .cs-comp-section { padding: 80px 0; background: var(--navy); color: white; position: relative; overflow: hidden; }
        .cs-comp-wrap { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        
        .cs-comp-header { text-align: center; max-width: 800px; margin: 0 auto 64px; }
        
        .cs-table-surface {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
          backdrop-filter: blur(10px);
        }

        .cs-table-head {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cs-head-cell { padding: 24px 32px; font-size: 11px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 2px; }
        .cs-head-gold { color: var(--gold); border-left: 1px solid rgba(196,154,60,0.2); background: rgba(196,154,60,0.06); }

        .cs-table-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1fr;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .cs-table-row:hover { background: rgba(255,255,255,0.02); transform: scale(1.005); z-index: 10; }
        .cs-table-row:last-child { border: none; }

        .cs-cell { padding: 24px 32px; display: flex; align-items: center; gap: 16px; font-size: 15px; }
        .cs-dim-cell { font-weight: 600; color: white; border-right: 1px solid rgba(255,255,255,0.04); }
        .cs-legacy-cell { color: var(--text3); font-style: italic; opacity: 0.8; }
        .cs-success-cell {
          color: white; font-weight: 500;
          background: rgba(196,154,60,0.02);
          border-left: 1px solid rgba(196,154,60,0.15);
          box-shadow: inset 0 0 40px rgba(196,154,60,0.02);
        }

        @media (max-width: 1024px) {
          .cs-table-head, .cs-table-row { grid-template-columns: 1fr 1.5fr 1.5fr; }
        }
        @media (max-width: 768px) {
          .cs-table-head { display: none; }
          .cs-table-row { grid-template-columns: 1fr; gap: 0; padding: 20px; border-bottom: 2px solid rgba(255,255,255,0.08); }
          .cs-cell { padding: 12px 0; border: none !important; }
          .cs-success-cell { background: none; }
        }
      `}),(0,t.jsxs)("div",{className:"cs-comp-wrap",children:[(0,t.jsxs)("div",{className:"cs-comp-header reveal",children:[(0,t.jsxs)("div",{className:"eyebrow",style:{justifyContent:"center"},children:[(0,t.jsx)("span",{className:"ey-line"})," The Competitive Edge"]}),(0,t.jsxs)("h2",{className:"h2",style:{color:"white"},children:["Legacy Systems vs.",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"ClientEra Success."})]}),(0,t.jsx)("p",{className:"lead",style:{margin:"0 auto",color:"var(--text2)"},children:"Old tools track what happened. ClientEra calculates what your team should do next — and ensures no commercial context is lost in the silos of support."})]}),(0,t.jsxs)("div",{className:"cs-table-surface reveal",children:[(0,t.jsxs)("div",{className:"cs-table-head",children:[(0,t.jsx)("div",{className:"cs-head-cell",children:"Dimension"}),(0,t.jsx)("div",{className:"cs-head-cell",children:"Legacy SaaS"}),(0,t.jsx)("div",{className:"cs-head-cell cs-head-gold",children:"ClientEra Support"})]}),p.map((e,s)=>(0,t.jsxs)("div",{className:"cs-table-row",children:[(0,t.jsxs)("div",{className:"cs-cell cs-dim-cell",children:[(0,t.jsx)(e.icon,{size:18,color:"var(--gold)"}),e.dim]}),(0,t.jsxs)("div",{className:"cs-cell cs-legacy-cell",children:[(0,t.jsx)(l.A,{size:14,color:"var(--red)"})," ",e.legacy]}),(0,t.jsxs)("div",{className:"cs-cell cs-success-cell",children:[(0,t.jsx)(d.A,{size:16,color:"var(--gold)"})," ",e.clientera]})]},e.dim))]})]})]})}},7810:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]])},8143:(e,s,a)=>{"use strict";a.d(s,{default:()=>d});var t=a(5155),i=a(2115),r=a(2240);let n=(0,r.A)("link-2-off",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]),o=(0,r.A)("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);var c=a(9619);let l=(0,r.A)("trending-down",[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]]);function d(){let e=(0,i.useRef)(null);(0,i.useEffect)(()=>{let s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.12}),a=e.current;if(a)return a.querySelectorAll(".cs-reveal").forEach(e=>s.observe(e)),()=>s.disconnect()},[]);let s=[{icon:n,title:"Support is Siloed From Sales",desc:"Your rep walks into a client meeting blind — a critical delivery complaint was raised three days ago but they had no idea. The ticket lived in Zendesk. The deal lived in the CRM. Never the twain shall meet.",color:"var(--red)",bg:"rgba(224,56,79,.06)",border:"rgba(224,56,79,.15)"},{icon:o,title:"SLAs Tracked in Spreadsheets",desc:"No real-time SLA engine. Someone manually updates a Google Sheet every morning. By the time a breach is noticed, the client has already escalated to senior leadership or LinkedIn.",color:"var(--gold)",bg:"rgba(196,154,60,.06)",border:"rgba(196,154,60,.15)"},{icon:c.A,title:"AI Bolted On, Not Built In",desc:"Your chatbot can't see order history. It can't see unpaid invoices. It answers generic questions while your rep has to manually pull context from four different browser tabs.",color:"var(--blue)",bg:"rgba(52,112,240,.06)",border:"rgba(52,112,240,.15)"},{icon:l,title:"Declining CSAT Goes Unnoticed",desc:"A strategic account's satisfaction score drops from 4.8 to 3.2 over three months. No alert fires. No rep is notified. The churn signal was there — but buried in a dashboard no one checks.",color:"#F5A623",bg:"rgba(245,166,35,.06)",border:"rgba(245,166,35,.15)"}];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        .cs-problem-section {
          background: #fcfbf9;
          position: relative;
          overflow: hidden;
          padding-top: 0;
        }
        .cs-problem-wrap {
          max-width: min(96vw, 1200px);
          margin: 0 auto;
          padding: 80px clamp(20px, 4vw, 72px) 80px;
        }
        .cs-problem-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 8px 0;
        }
        .cs-problem-card {
          background: #fff;
          border-radius: 18px;
          padding: 28px;
          border: 1px solid #e8e4de;
          box-shadow: 0 4px 18px rgba(11, 22, 40, 0.03);
          transition: all .35s cubic-bezier(.16,1,.3,1);
          cursor: default;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .cs-problem-card::before {
          content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px;
          background: var(--card-color); transform: translateY(-100%); transition: transform .3s;
        }
        .cs-problem-card:hover::before { transform: translateY(0); }
        .cs-problem-card:hover {
          transform: translateY(-8px);
          border-color: var(--card-border);
          box-shadow: 0 28px 60px rgba(11,22,40,.12);
        }
        .cs-prob-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          display: flex; align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 1px solid;
          transition: transform .3s;
          background: var(--card-bg);
          border-color: var(--card-border);
          color: var(--card-color);
        }
        .cs-problem-card:hover .cs-prob-icon-wrap {
          transform: scale(1.1) rotate(-3deg);
        }
        .cs-prob-title {
          font-size: 17px; font-weight: 600;
          color: var(--navy); margin-bottom: 12px;
          font-family: 'Fraunces', serif;
          line-height: 1.3;
        }
        .cs-prob-desc {
          font-size: 13.5px; color: var(--ink3);
          line-height: 1.65; font-weight: 300;
          flex: 1;
        }

        /* stats highlight strip */
        .cs-prob-strip {
          margin-top: 60px;
          padding: 32px;
          background: #f8f8f6;
          border: 1px solid #e8e4de;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .cs-ps-icon { color: var(--red); flex-shrink: 0; }
        .cs-ps-text { font-size: 15px; color: var(--navy); font-weight: 500; line-height: 1.5; }
        .cs-ps-text strong { color: var(--red); }

        .cs-reveal {
          opacity: 0; transform: translateY(30px);
          transition: opacity .8s ease, transform .8s cubic-bezier(.16,1,.3,1);
        }
        .cs-reveal.visible { opacity: 1; transform: none; }
        .cs-reveal-d1 { transition-delay: .1s; }
        .cs-reveal-d2 { transition-delay: .2s; }
        .cs-reveal-d3 { transition-delay: .3s; }
        .cs-reveal-d4 { transition-delay: .4s; }

        @media (max-width: 900px) {
          .cs-problem-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .cs-problem-card { padding: 24px; }
          .cs-prob-strip { flex-direction: column; text-align: center; }
        }
        @media (max-width: 480px) {
           .cs-problem-grid { grid-template-columns: 1fr; gap: 12px; }
           .cs-problem-card { padding: 20px; }
           .cs-prob-title { font-size: 15px; }
           .cs-prob-desc { font-size: 12px; }
        }
      `}),(0,t.jsx)("section",{className:"cs-problem-section",ref:e,id:"problem",children:(0,t.jsxs)("div",{className:"cs-problem-wrap",children:[(0,t.jsxs)("div",{className:"reveal cs-reveal",style:{textAlign:"center",maxWidth:800,margin:"0 auto 80px"},children:[(0,t.jsxs)("div",{className:"eyebrow eyebrow-dark",style:{justifyContent:"center"},children:[(0,t.jsx)("span",{className:"ey-line"}),"The Critical Gap"]}),(0,t.jsxs)("h2",{className:"h2 h2-ink",children:["Support is an afterthought.",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"It costs you clients."})]}),(0,t.jsx)("p",{className:"lead lead-ink",style:{margin:"0 auto"},children:'Most companies handle post-sale issues in a disconnected system, creating a "Black Hole" where customer dissatisfaction grows in silence until it\'s too late to save the account.'})]}),(0,t.jsx)("div",{className:"cs-problem-grid",children:s.map((e,s)=>(0,t.jsxs)("div",{className:`cs-problem-card cs-reveal cs-reveal-d${s+1}`,style:{"--card-color":e.color,"--card-bg":e.bg,"--card-border":e.border},children:[(0,t.jsx)("div",{className:"cs-prob-icon-wrap",children:(0,t.jsx)(e.icon,{size:24,strokeWidth:2.2})}),(0,t.jsx)("div",{className:"cs-prob-title",children:e.title}),(0,t.jsx)("div",{className:"cs-prob-desc",children:e.desc})]},s))})]})})]})}},8164:(e,s,a)=>{"use strict";a.d(s,{default:()=>d});var t=a(5155),i=a(2115),r=a(2032),n=a(4071);let o=(0,a(2240).A)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]),c=[{label:"Avg. Resolution Time",value:"42m",trend:"+12%",color:"var(--green)"},{label:"First Response SLA",value:"99.4%",trend:"Steady",color:"var(--blue)"},{label:"Customer Satisfaction (CSAT)",value:"4.8/5",trend:"↑",color:"var(--gold)"},{label:"AI Prediction Accuracy",value:"94%",trend:"+4%",color:"var(--green)"}],l=[{name:"North America",score:98,status:"Healthy"},{name:"Europe",score:92,status:"Satisfactory"},{name:"Asia-Pacific",score:86,status:"Attention"},{name:"Latin America",score:94,status:"Healthy"}];function d(){let[e,s]=(0,i.useState)([0,0,0,0]),[a,d]=(0,i.useState)(!1),p=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{if(e.isIntersecting){d(!0);let e=[42,99,4.8,94],a=[0,0,0,0],t=setInterval(()=>{s([...a=a.map((s,a)=>Math.min(s+e[a]/20,e[a]))]),a.every((s,a)=>s>=e[a])&&clearInterval(t)},30)}},{threshold:.1});return p.current&&e.observe(p.current),()=>e.disconnect()},[]),(0,t.jsxs)("section",{className:"cs-metrics-section section-mid",ref:p,id:"satisfaction",children:[(0,t.jsx)("style",{children:`
        .cs-metrics-section { padding: 100px 0; color: white; position: relative; overflow: hidden; }
        .cs-metrics-wrap { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
        
        .cs-metrics-header { text-align: center; max-width: 700px; margin: 0 auto 64px; }
        .cs-metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }
        
        .cs-m-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px; padding: 20px 18px;
          text-align: center; transition: all 0.3s;
        }
        .cs-m-card:hover { transform: translateY(-5px); border-color: var(--gold); background: rgba(196,154,60,0.05); }
        .cs-m-label { font-size: 11px; font-weight: 700; color: var(--text3); text-transform: uppercase; letter-spacing: 2.5px; margin-bottom: 10px; }
        .cs-m-value { font-family: 'Fraunces', serif; font-size: 36px; color: white; margin-bottom: 6px; }
        .cs-m-trend { font-size: 12px; font-weight: 600; }

        .cs-ops-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 24px;
        }
        .cs-ops-panel {
          background: var(--surface);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 24px; padding: clamp(16px, 3vw, 32px);
          overflow: hidden;
          min-width: 0;
        }
        
        .cs-region-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .cs-region-row:last-child { border: none; }
        .cs-region-bar-wrap { flex: 1; margin: 0 24px; height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; position: relative; overflow: hidden; }
        .cs-region-bar { height: 100%; transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1); }

        .cs-alert-toast {
          background: rgba(224,56,79,0.1); border: 1px solid rgba(224,56,79,0.3); border-radius: 12px;
          padding: 16px; margin-top: 24px; display: flex; align-items: center; gap: 12px;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }

        @media (max-width: 1024px) {
          .cs-metrics-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .cs-ops-grid { grid-template-columns: 1fr; gap: 32px; }
        }
        @media (max-width: 768px) {
          .cs-metrics-wrap { padding: 0 24px; }
          .cs-metrics-header { margin-bottom: 40px; }
          .cs-ops-panel { padding: 24px; }
        }
        @media (max-width: 480px) {
          .cs-metrics-grid { grid-template-columns: 1fr; gap: 16px; }
          .cs-m-value { font-size: 32px; }
          .cs-region-row { padding: 12px 0; }
          .cs-region-bar-wrap { margin: 0 12px; }
        }
      `}),(0,t.jsxs)("div",{className:"cs-metrics-wrap",children:[(0,t.jsxs)("div",{className:"cs-metrics-header reveal",children:[(0,t.jsxs)("div",{className:"eyebrow",style:{justifyContent:"center"},children:[(0,t.jsx)("span",{className:"ey-line"})," Performance & Satisfaction"]}),(0,t.jsxs)("h2",{className:"h2",style:{color:"white"},children:["Metrics that drive",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Strategic Decisions."})]}),(0,t.jsx)("p",{className:"lead",style:{margin:"0 auto",color:"var(--text2)"},children:"We don't just track emojis. ClientEra correlates support satisfaction with commercial risk, surfacing accounts that need immediate leadership attention."})]}),(0,t.jsx)("div",{className:"cs-metrics-grid reveal",children:c.map((s,a)=>(0,t.jsxs)("div",{className:"cs-m-card",children:[(0,t.jsx)("div",{className:"cs-m-label",children:s.label}),(0,t.jsxs)("div",{className:"cs-m-value",children:[2===a?e[a].toFixed(1):Math.round(e[a]),s.value.replace(/[0-9.]/g,"")]}),(0,t.jsx)("div",{className:"cs-m-trend",style:{color:s.color},children:s.trend})]},s.label))}),(0,t.jsxs)("div",{className:"cs-ops-grid reveal",children:[(0,t.jsxs)("div",{className:"cs-ops-panel",children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24},children:[(0,t.jsx)("h3",{style:{fontSize:18,color:"white",fontWeight:600},children:"Regional Global Health"}),(0,t.jsxs)("div",{style:{display:"flex",gap:12,fontSize:11,color:"var(--text3)"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,t.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:"var(--green)"}})," Healthy"]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,t.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",background:"var(--gold)"}})," Attention"]})]})]}),l.map(e=>(0,t.jsxs)("div",{className:"cs-region-row",children:[(0,t.jsx)("div",{style:{width:140,fontSize:13,fontWeight:500,color:"var(--text2)"},children:e.name}),(0,t.jsx)("div",{className:"cs-region-bar-wrap",children:(0,t.jsx)("div",{className:"cs-region-bar",style:{width:a?`${e.score}%`:"0%",background:e.score>90?"var(--green)":"var(--gold)"}})}),(0,t.jsxs)("div",{style:{width:40,textAlign:"right",fontSize:13,fontWeight:700,color:e.score>90?"var(--green)":"var(--gold)"},children:[e.score,"%"]})]},e.name))]}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[(0,t.jsxs)("div",{className:"cs-ops-panel",style:{flex:1,padding:24},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[(0,t.jsx)(r.A,{size:20,color:"var(--red)"}),(0,t.jsx)("h3",{style:{fontSize:14,fontWeight:700,color:"white"},children:"Predictive Risk Warning"})]}),(0,t.jsxs)("div",{style:{background:"rgba(255,255,255,0.02)",borderRadius:12,padding:16,border:"1px solid rgba(255,255,255,0.05)"},children:[(0,t.jsxs)("div",{style:{fontSize:12,color:"var(--text2)",lineHeight:1.6},children:["AI detected ",(0,t.jsx)("strong",{children:"declining sentiment"})," in 3 high-value accounts (Reliance, Tata Steel, Bharti)."]}),(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:12},children:[(0,t.jsx)(n.A,{size:14,color:"var(--red)"}),(0,t.jsx)("span",{style:{fontSize:11,fontWeight:700,color:"var(--red)"},children:"High Churn Probability: 42%"})]})]})]}),(0,t.jsxs)("div",{className:"cs-ops-panel",style:{flex:1,padding:24,background:"rgba(196,154,60,0.05)",borderColor:"rgba(196,154,60,0.15)"},children:[(0,t.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[(0,t.jsx)(o,{size:20,color:"var(--gold)"}),(0,t.jsx)("h3",{style:{fontSize:14,fontWeight:700,color:"var(--gold)"},children:"Top Performing Region"})]}),(0,t.jsx)("div",{style:{fontSize:24,fontFamily:"Fraunces",color:"white",marginBottom:4},children:"North America"}),(0,t.jsx)("div",{style:{fontSize:12,color:"var(--text3)"},children:"Maintaining 98% resolution in <1 hour."})]})]})]})]})]})}},8195:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]])},8552:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});var t=a(5155),i=a(2115);function r(){return(0,i.useEffect)(()=>{document.querySelectorAll(".cs-cu").forEach(e=>{let s=+(e.dataset.t||0),a=performance.now(),t=i=>{let r=Math.min((i-a)/1400,1);e.textContent=String(Math.round((1-Math.pow(1-r,3))*s)),r<1&&requestAnimationFrame(t)};setTimeout(()=>requestAnimationFrame(t),700)})},[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        /* ── CS HERO ── */
        .cs-hero {
          position: relative;
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: var(--navy);
        }
        .cs-hero-grid-wrapper {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
          padding-top: clamp(80px, 8vh, 100px);
          padding-bottom: clamp(40px, 6vh, 80px);
          flex: 1;
        }

        /* animated bg canvas */
        .cs-hero-canvas {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 1;
        }
        .cs-hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 55%, rgba(196, 154, 60, .07) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 20%, rgba(52, 112, 240, .05) 0%, transparent 50%),
            radial-gradient(ellipse at 10% 80%, rgba(24,184,122,.04) 0%, transparent 40%);
        }
        .cs-hero-grid {
          position: absolute;
          inset: -60%;
          background-image:
            linear-gradient(rgba(196,154,60,.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(196,154,60,.05) 1px, transparent 1px);
          background-size: 72px 72px;
          animation: csGridShift 60s linear infinite;
        }
        .cs-orb1 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: rgba(196,154,60,.06);
          bottom: -120px; right: -120px;
          filter: blur(90px);
          animation: csOrbFloat 24s 2s ease-in-out infinite;
        }
        .cs-orb2 {
          position: absolute;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: rgba(52,112,240,.14);
          top: 35%; left: 52%;
          filter: blur(85px);
          animation: csOrbFloat 34s 5s ease-in-out infinite;
        }
        .cs-orb3 {
          position: absolute;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(24,184,122,.08);
          top: 10%; left: 20%;
          filter: blur(70px);
          animation: csOrbFloat 28s 8s ease-in-out infinite;
        }
        .cs-data-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(196,154,60,.45), transparent);
          animation: csDataFlow 9s ease-in-out infinite;
          animation-fill-mode: both;
          opacity: 0;
        }

        .cs-hero-left {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .cs-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: clamp(9px, 2.2vw, 11px);
          font-weight: 500;
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: clamp(16px,2.5vw,26px);
          opacity: 0;
          animation: csUp .6s .1s forwards;
        }
        .cs-ey-line { width: 20px; height: 1px; background: var(--gold); }
        .cs-hero-h1 {
          font-family: 'Fraunces', serif;
          font-size: clamp(32px, 4.5vw, 64px);
          line-height: 1.08;
          letter-spacing: clamp(-0.5px, -0.15vw, -1.5px);
          color: var(--text);
          margin-bottom: clamp(12px, 2vw, 20px);
          opacity: 0;
          animation: csUp .65s .2s forwards;
        }
        .cs-hero-h1 em { font-style: italic; color: var(--gold); font-weight: 300; }
        .cs-hero-sub {
          font-size: clamp(15px, 1.2vw, 18px);
          color: var(--text2);
          max-width: min(100%, 500px);
          line-height: 1.72;
          margin-bottom: clamp(24px, 4vw, 36px);
          font-weight: 300;
          opacity: 0;
          animation: csUp .65s .32s forwards;
        }
        .cs-hero-ctas {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: clamp(32px, 5vw, 52px);
          opacity: 0;
          animation: csUp .65s .42s forwards;
        }
        .cs-btn-hero-gold {
          font-size: 14.5px; font-weight: 600;
          color: var(--navy); background: var(--gold);
          border: none; border-radius: 10px;
          padding: 13px 28px; cursor: pointer;
          text-decoration: none;
          transition: all .2s;
          display: inline-flex; align-items: center;
          white-space: nowrap;
        }
        .cs-btn-hero-gold:hover {
          background: var(--gold2);
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(196,154,60,.3);
        }
        .cs-btn-hero-outline {
          font-size: 14.5px; font-weight: 400;
          color: var(--text); background: none;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 10px; padding: 13px 28px;
          cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center;
          white-space: nowrap; transition: all .2s;
        }
        .cs-btn-hero-outline:hover { border-color: rgba(255,255,255,.28); }

        /* right floating cards */
        .cs-hero-right {
          position: relative;
          height: 90vh;
          z-index: 10;
          opacity: 0;
          animation: csFade .8s .35s forwards;
        }

        /* Ticket card */
        .cs-hcard {
          position: absolute;
          background: rgba(13,28,52,.9);
          backdrop-filter: blur(22px);
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 14px;
          box-shadow: 0 20px 52px rgba(0,0,0,.38), 0 0 0 1px rgba(255,255,255,.03);
        }
        .cs-hcard-main {
          width: clamp(320px, 34vw, 520px);
          top: 15%; right: 0%;
          animation: csFloatA 8s 1s ease-in-out infinite;
          z-index: 14;
        }
        .cs-hcard-sla {
          width: clamp(200px, 18vw, 270px);
          top: 62%; right: calc(38% + 50px);
          animation: csFloatB 7s 2s ease-in-out infinite;
          z-index: 18;
        }
        .cs-hcard-csat {
          width: clamp(160px, 14vw, 220px);
          top: 68%; right: -2%;
          animation: csFloatC 9s 1.5s ease-in-out infinite;
          z-index: 18;
        }

        .cs-card-titlebar {
          height: 30px;
          background: rgba(255,255,255,.035);
          border-bottom: 1px solid rgba(255,255,255,.07);
          display: flex; align-items: center; gap: 5px;
          padding: 0 11px; border-radius: 14px 14px 0 0;
        }
        .cs-wdot { width: 8px; height: 8px; border-radius: 50%; }
        .cs-wd-r { background: #FF5F57; }
        .cs-wd-y { background: #FFBD2E; }
        .cs-wd-g { background: #28C840; }
        .cs-card-lbl { font-size: 9.5px; color: var(--text3); margin: 0 auto; }
        .cs-card-body { padding: 14px 16px; }

        /* ticket rows */
        .cs-ticket-row {
          display: flex; align-items: center; gap: 9px;
          padding: 8px 10px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 9px; margin-bottom: 6px;
        }
        .cs-tk-priority {
          width: 6px; height: 6px;
          border-radius: 50%; flex-shrink: 0;
        }
        .cs-tk-p-critical { background: #E0384F; box-shadow: 0 0 6px rgba(224,56,79,.5); }
        .cs-tk-p-high { background: #F5A623; }
        .cs-tk-p-medium { background: var(--gold); }
        .cs-tk-p-low { background: var(--green); }
        .cs-tk-id { font-size: 9px; color: var(--text3); font-family: monospace; flex-shrink: 0; }
        .cs-tk-subject { font-size: 11px; font-weight: 600; color: var(--text); flex: 1; }
        .cs-tk-account { font-size: 9px; color: var(--text3); margin-top: 1px; }
        .cs-tk-status {
          font-size: 8px; font-weight: 700;
          padding: 2px 7px; border-radius: 100px;
          white-space: nowrap; flex-shrink: 0;
        }
        .cs-tk-open { background: rgba(224,56,79,.12); color: #E0384F; border: 1px solid rgba(224,56,79,.25); }
        .cs-tk-progress { background: rgba(245,166,35,.11); color: #F5A623; border: 1px solid rgba(245,166,35,.25); }
        .cs-tk-pending { background: rgba(52,112,240,.1); color: var(--blue); border: 1px solid rgba(52,112,240,.25); }
        .cs-tk-resolved { background: rgba(24,184,122,.1); color: var(--green); border: 1px solid rgba(24,184,122,.25); }

        /* SLA card */
        .cs-sla-body { padding: 12px 14px; }
        .cs-sla-lbl {
          font-size: 8.5px; font-weight: 700;
          color: var(--gold); text-transform: uppercase;
          letter-spacing: 1.5px; margin-bottom: 10px;
          display: flex; align-items: center; gap: 5px;
        }
        .cs-sla-live-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--red); animation: csPulse 1.5s infinite;
        }
        .cs-sla-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
        .cs-sla-bar-wrap { flex: 1; height: 5px; background: rgba(255,255,255,.08); border-radius: 3px; overflow: hidden; }
        .cs-sla-bar-fill { height: 100%; border-radius: 3px; }
        .cs-sla-pct { font-size: 9px; color: var(--text3); width: 28px; text-align: right; }
        .cs-sla-name { font-size: 9px; color: var(--text2); width: 60px; }

        /* CSAT card */
        .cs-csat-body { padding: 12px 14px; }
        .cs-csat-lbl {
          font-size: 8.5px; color: var(--text3);
          text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 8px;
        }
        .cs-csat-score {
          font-family: 'Fraunces', serif;
          font-size: 28px; color: var(--green);
          margin-bottom: 4px; line-height: 1;
        }
        .cs-csat-sub { font-size: 9px; color: var(--text3); margin-bottom: 8px; }
        .cs-csat-stars { display: flex; gap: 3px; }
        .cs-csat-star { color: var(--gold); font-size: 12px; }

        /* stats bar */
        .cs-hero-stats-bar {
          grid-column: 1 / -1;
          position: relative; z-index: 10;
          display: flex; align-items: stretch;
          background: rgba(255,255,255,.032);
          border-top: 1px solid rgba(255,255,255,.07);
          backdrop-filter: blur(14px);
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          margin-top: auto;
        }
        .cs-hero-stats-bar::-webkit-scrollbar { display: none; }

        .cs-hsb-item {
          flex: 1; text-align: center; padding: 20px 16px;
          border-right: 1px solid rgba(255,255,255,.07);
          position: relative; overflow: hidden;
          transition: background .3s;
          scroll-snap-align: center;
        }
        .cs-hsb-item:last-child { border-right: none; }
        .cs-hsb-item::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(196,154,60,.09) 0%, transparent 68%);
          opacity: 0; transition: opacity .35s;
        }
        .cs-hsb-item:hover::before { opacity: 1; }
        .cs-hsb-num {
          font-family: 'Fraunces', serif;
          font-size: clamp(22px, 2vw, 34px);
          color: var(--text); letter-spacing: -1px;
          line-height: 1.2; margin-bottom: 6px;
        }
        .cs-hsb-lbl {
          font-size: 9.5px;
          color: rgba(255,255,255,.36);
          letter-spacing: 1.5px;
          text-transform: uppercase; font-weight: 500;
        }

        /* keyframes */
        @keyframes csGridShift { from { transform: translate(0,0); } to { transform: translate(72px,72px); } }
        @keyframes csOrbFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(20px,-30px) scale(1.06); }
          66% { transform: translate(-12px,18px) scale(.97); }
        }
        @keyframes csDataFlow {
          0%,100% { opacity:0; transform: translateX(-200%); }
          50% { opacity:1; transform: translateX(200%); }
        }
        @keyframes csFloatA { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes csFloatB { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-9px); } }
        @keyframes csFloatC { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes csUp { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform: translateY(0); } }
        @keyframes csFade { from { opacity:0; } to { opacity:1; } }
        @keyframes csPulse { 0%,100% { opacity:1; transform: scale(1); } 50% { opacity:.3; transform: scale(1.4); } }

        /* responsive */
        @media (max-width: 900px) {
          .cs-hero { min-height: auto !important; padding-bottom: 0 !important; }
          .cs-hero-grid-wrapper { 
             grid-template-columns: 1fr !important; 
             padding-top: 60px !important; 
             text-align: center !important; 
          }
          .cs-hero-grid-wrapper > div { align-items: center !important; }
          .cs-hero-sub { margin-left: auto !important; margin-right: auto !important; }
          .cs-hero-right { display: none !important; }
          .cs-hero-stats-bar { 
             mask-image: linear-gradient(to right, transparent, black 15% , black 85%, transparent);
          }
          .cs-hsb-item { flex: 0 0 150px; }
        }
        @media (max-width: 500px) {
          .cs-hero-h1 { font-size: clamp(36px, 10vw, 48px); }
          .cs-btn-hero-gold, .cs-btn-hero-outline { white-space: nowrap !important; }
          .cs-hsb-item { flex: 0 0 140px; padding: 12px 8px; }
          .cs-hsb-num { font-size: 24px; }
        }
      `}),(0,t.jsxs)("section",{className:"cs-hero",children:[(0,t.jsxs)("div",{className:"cs-hero-canvas",children:[(0,t.jsx)("div",{className:"cs-hero-bg"}),(0,t.jsx)("div",{className:"cs-hero-grid"}),(0,t.jsx)("div",{className:"cs-orb1"}),(0,t.jsx)("div",{className:"cs-orb2"}),(0,t.jsx)("div",{className:"cs-orb3"}),(0,t.jsx)("div",{className:"cs-data-line",style:{top:"20%",width:"40%",left:"-5%",animationDelay:"-2s",animationDuration:"9s"}}),(0,t.jsx)("div",{className:"cs-data-line",style:{top:"42%",width:"35%",left:"8%",animationDelay:"-5s",animationDuration:"11s"}}),(0,t.jsx)("div",{className:"cs-data-line",style:{top:"65%",width:"50%",left:"-6%",animationDelay:"-1s",animationDuration:"8s"}}),(0,t.jsx)("div",{className:"cs-data-line",style:{top:"82%",width:"38%",left:"12%",animationDelay:"-7s",animationDuration:"10s"}})]}),(0,t.jsxs)("div",{className:"wrap cs-hero-grid-wrapper",children:[(0,t.jsxs)("div",{className:"cs-hero-left",children:[(0,t.jsxs)("div",{className:"cs-hero-eyebrow",children:[(0,t.jsx)("div",{className:"cs-ey-line"}),"Customer Support & Ticketing"]}),(0,t.jsxs)("h1",{className:"cs-hero-h1",children:["Every ticket solved.",(0,t.jsx)("br",{}),"Every client kept.",(0,t.jsx)("br",{}),(0,t.jsx)("em",{children:"Context never lost."})]}),(0,t.jsx)("p",{className:"cs-hero-sub",children:"Native ticketing built into the same platform where deals are closed. Your reps see open issues before every visit. SLAs auto-track. AI drafts the response."}),(0,t.jsxs)("div",{className:"cs-hero-ctas",children:[(0,t.jsx)("a",{href:"#features",className:"cs-btn-hero-gold",children:"See it in action"}),(0,t.jsx)("a",{href:"#comparison",className:"cs-btn-hero-outline",children:"Compare to legacy tools"})]})]}),(0,t.jsxs)("div",{className:"cs-hero-right",children:[(0,t.jsxs)("div",{className:"cs-hcard cs-hcard-main",children:[(0,t.jsxs)("div",{className:"cs-card-titlebar",children:[(0,t.jsx)("div",{className:"cs-wdot cs-wd-r"}),(0,t.jsx)("div",{className:"cs-wdot cs-wd-y"}),(0,t.jsx)("div",{className:"cs-wdot cs-wd-g"}),(0,t.jsx)("div",{className:"cs-card-lbl",children:"ClientEra — Support Queue"})]}),(0,t.jsxs)("div",{className:"cs-card-body",children:[(0,t.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"},children:[(0,t.jsx)("span",{style:{fontSize:"10px",fontWeight:700,color:"var(--text2)"},children:"OPEN TICKETS"}),(0,t.jsx)("span",{style:{fontSize:"9px",color:"var(--gold)",fontWeight:600},children:"8 active \xb7 2 breaching SLA"})]}),[{id:"TK-2041",subject:"Delivery shortfall — PO #4821",account:"Reliance Retail",priority:"cs-tk-p-critical",status:"cs-tk-open",statusLabel:"Critical"},{id:"TK-2038",subject:"Invoice discrepancy on SO-891",account:"Tata Steel",priority:"cs-tk-p-high",status:"cs-tk-progress",statusLabel:"In Progress"},{id:"TK-2035",subject:"Product quality complaint — Batch 7",account:"Mahindra Logistics",priority:"cs-tk-p-medium",status:"cs-tk-pending",statusLabel:"Pending Client"},{id:"TK-2031",subject:"ETA change request for May delivery",account:"Infosys Procurement",priority:"cs-tk-p-low",status:"cs-tk-resolved",statusLabel:"Resolved"}].map(e=>(0,t.jsxs)("div",{className:"cs-ticket-row",children:[(0,t.jsx)("div",{className:`cs-tk-priority ${e.priority}`}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsx)("div",{className:"cs-tk-subject",children:e.subject}),(0,t.jsx)("div",{className:"cs-tk-account",children:e.account})]}),(0,t.jsx)("div",{className:"cs-tk-id",children:e.id}),(0,t.jsx)("span",{className:`cs-tk-status ${e.status}`,children:e.statusLabel})]},e.id)),(0,t.jsxs)("div",{style:{marginTop:"10px",padding:"8px 10px",background:"rgba(196,154,60,.07)",border:"1px solid rgba(196,154,60,.18)",borderRadius:"8px",display:"flex",alignItems:"center",gap:"8px"},children:[(0,t.jsx)("div",{style:{width:"7px",height:"7px",borderRadius:"50%",background:"var(--gold)",flexShrink:0,animation:"csPulse 2s infinite"}}),(0,t.jsxs)("span",{style:{fontSize:"10px",color:"var(--text2)"},children:["AI drafted reply for TK-2041 — ",(0,t.jsx)("span",{style:{color:"var(--gold)",fontWeight:600},children:"Review & Send"})]})]})]})]}),(0,t.jsxs)("div",{className:"cs-hcard cs-hcard-sla",children:[(0,t.jsxs)("div",{className:"cs-card-titlebar",children:[(0,t.jsx)("div",{className:"cs-wdot cs-wd-r"}),(0,t.jsx)("div",{className:"cs-wdot cs-wd-y"}),(0,t.jsx)("div",{className:"cs-wdot cs-wd-g"}),(0,t.jsx)("div",{className:"cs-card-lbl",children:"SLA Tracker"})]}),(0,t.jsxs)("div",{className:"cs-sla-body",children:[(0,t.jsxs)("div",{className:"cs-sla-lbl",children:[(0,t.jsx)("div",{className:"cs-sla-live-dot"}),"Live SLA Health"]}),[{name:"Critical",pct:72,color:"#E0384F"},{name:"High",pct:88,color:"#F5A623"},{name:"Medium",pct:94,color:"var(--gold)"},{name:"Low",pct:98,color:"var(--green)"}].map(e=>(0,t.jsxs)("div",{className:"cs-sla-row",children:[(0,t.jsx)("span",{className:"cs-sla-name",children:e.name}),(0,t.jsx)("div",{className:"cs-sla-bar-wrap",children:(0,t.jsx)("div",{className:"cs-sla-bar-fill",style:{width:`${e.pct}%`,background:e.color}})}),(0,t.jsxs)("span",{className:"cs-sla-pct",children:[e.pct,"%"]})]},e.name))]})]}),(0,t.jsxs)("div",{className:"cs-hcard cs-hcard-csat",children:[(0,t.jsxs)("div",{className:"cs-card-titlebar",children:[(0,t.jsx)("div",{className:"cs-wdot cs-wd-r"}),(0,t.jsx)("div",{className:"cs-wdot cs-wd-y"}),(0,t.jsx)("div",{className:"cs-wdot cs-wd-g"}),(0,t.jsx)("div",{className:"cs-card-lbl",children:"CSAT"})]}),(0,t.jsxs)("div",{className:"cs-csat-body",children:[(0,t.jsx)("div",{className:"cs-csat-lbl",children:"Satisfaction Score"}),(0,t.jsx)("div",{className:"cs-csat-score",children:"4.7"}),(0,t.jsx)("div",{className:"cs-csat-sub",children:"↑ +0.3 vs last month"}),(0,t.jsx)("div",{className:"cs-csat-stars",children:[1,2,3,4,5].map(e=>(0,t.jsx)("span",{className:"cs-csat-star",children:e<=4?"★":"☆"},e))})]})]})]})]}),(0,t.jsxs)("div",{className:"cs-hero-stats-bar",children:[(0,t.jsxs)("div",{className:"cs-hsb-item",children:[(0,t.jsxs)("div",{className:"cs-hsb-num",children:[(0,t.jsx)("span",{className:"cs-cu","data-t":"94",children:"0"}),"%"]}),(0,t.jsx)("div",{className:"cs-hsb-lbl",children:"SLA Compliance Rate"})]}),(0,t.jsxs)("div",{className:"cs-hsb-item",children:[(0,t.jsxs)("div",{className:"cs-hsb-num",children:["<",(0,t.jsx)("span",{className:"cs-cu","data-t":"4",children:"0"}),"h"]}),(0,t.jsx)("div",{className:"cs-hsb-lbl",children:"Avg First Response"})]}),(0,t.jsxs)("div",{className:"cs-hsb-item",children:[(0,t.jsxs)("div",{className:"cs-hsb-num",children:[(0,t.jsx)("span",{className:"cs-cu","data-t":"87",children:"0"}),"%"]}),(0,t.jsx)("div",{className:"cs-hsb-lbl",children:"AI-Assisted Resolutions"})]}),(0,t.jsxs)("div",{className:"cs-hsb-item",children:[(0,t.jsx)("div",{className:"cs-hsb-num",children:"4.7"}),(0,t.jsx)("div",{className:"cs-hsb-lbl",children:"Avg CSAT Score"})]}),(0,t.jsxs)("div",{className:"cs-hsb-item",children:[(0,t.jsx)("div",{className:"cs-hsb-num",children:"0"}),(0,t.jsx)("div",{className:"cs-hsb-lbl",children:"Context Gaps for Reps"})]})]})]})]})}},9199:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]])},9619:(e,s,a)=>{"use strict";a.d(s,{A:()=>t});let t=(0,a(2240).A)("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]])},9675:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var t=a(2115);function i(){return(0,t.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.08,rootMargin:"0px 0px -40px 0px"});return document.querySelectorAll(".reveal").forEach(s=>e.observe(s)),()=>e.disconnect()},[]),null}}},e=>{e.O(0,[500,426,607,441,794,358],()=>e(e.s=4667)),_N_E=e.O()}]);