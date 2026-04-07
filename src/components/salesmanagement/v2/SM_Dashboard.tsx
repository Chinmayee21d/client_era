'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Sidebar nav items (no emojis) ─── */
const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'DB', group: 'ops' },
  { id: 'team', label: 'My Team', icon: 'TM', group: 'ops' },
  { id: 'approvals', label: 'Approvals', icon: 'AP', group: 'ops' },
  { id: 'sor', label: 'SOR Tracker', icon: 'SR', group: 'ops' },
  { id: 'leads', label: 'Lead Tracker', icon: 'LD', group: 'ops' },
  { id: 'proforma', label: 'Proforma Invoices', icon: 'PI', group: 'fin' },
  { id: 'invoices', label: 'Invoices', icon: 'IN', group: 'fin' },
  { id: 'analytics', label: 'Sales Analytics', icon: 'AN', group: 'fin' },
  { id: 'schemes', label: 'Schemes', icon: 'SC', group: 'fin' },
];

/* ────────────────────────────── SCREENS ────────────────────────────── */

function DashboardScreen() {
  return (
    <div className="db-screen-content fade-in">
      <div className="db-topbar">
        <div className="db-topbar-trail">SF / Dashboard</div>
        <div className="db-topbar-search">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
          <span className="db-search-text">Search accounts, deals…</span>
        </div>
        <div className="db-topbar-user">
          <span className="db-user-active-dot"></span>
          Ananya K. · SALES HEAD
        </div>
      </div>

      <div className="db-content-scroll">
        <div className="db-welcome-row">
          <div className="db-welcome">
            <div className="db-welcome-greet">Good morning, Ananya</div>
            <div className="db-welcome-title">Welcome back to Command Center</div>
            <div className="db-welcome-sub">Team performance overview for today — 03 Apr 2026</div>
          </div>
          <div className="db-live-badge">
            <span className="db-live-icon">●</span> LIVE
          </div>
        </div>

        <div className="db-stats-strip">
          {[
            { lbl: 'Team Revenue MTD', val: '₹78.4L', cls: 'green', trend: '↑ 12.4%', tCls: 'up' },
            { lbl: 'Pipeline Value', val: '₹290L', cls: 'blue', trend: '↑ 5.2%', tCls: 'up' },
            { lbl: 'Pending Approvals', val: '3', cls: 'amber', trend: 'Action needed', tCls: 'warning' },
            { lbl: 'At-Risk Accounts', val: '2', cls: 'red', trend: 'Critical', tCls: 'down' },
          ].map((s, i) => (
            <div key={i} className="db-stat-card">
              <div className="db-stat-lbl">{s.lbl}</div>
              <div className={`db-stat-val ${s.cls}`}>{s.val}</div>
              <div className={`db-stat-trend ${s.tCls}`}>{s.trend}</div>
            </div>
          ))}
        </div>

        <div className="db-main-grid">
          {/* Left — Team Targets + Revenue Graph */}
          <div className="db-grid-feature">
            <div className="db-section-head">
              <div>
                <div className="db-section-title">Team Targets &amp; Revenue</div>
                <div className="db-section-sub">FINANCIAL INTELLIGENCE · Q2 2026</div>
              </div>
            </div>

            <div className="db-revenue-graph-container">
              <div className="db-graph-y-axis">
                <span>100L</span><span>75L</span><span>50L</span><span>25L</span><span>0</span>
              </div>
              <div className="db-graph-line-wrap">
                <svg className="db-svg-graph" viewBox="0 0 700 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3470F0" stopOpacity="1" />
                      <stop offset="100%" stopColor="#3470F0" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3470F0" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#3470F0" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Area fill */}
                  <path 
                    d="M 50 117 L 150 90 L 250 63 L 350 101 L 450 56 L 550 33 L 650 63 L 650 180 L 50 180 Z" 
                    fill="url(#areaGrad)" 
                  />
                  
                  {/* The Line */}
                  <path 
                    d="M 50 117 L 150 90 L 250 63 L 350 101 L 450 56 L 550 33 L 650 63" 
                    fill="none" 
                    stroke="#3470F0" 
                    strokeWidth="3.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  
                  {/* Points */}
                  {[
                    { x: 50, y: 117, val: '45' },
                    { x: 150, y: 90, val: '62' },
                    { x: 250, y: 63, val: '78' },
                    { x: 350, y: 101, val: '55' },
                    { x: 450, y: 56, val: '82' },
                    { x: 550, y: 33, val: '95' },
                    { x: 650, y: 63, val: '78' },
                  ].map((p, i) => (
                    <g key={i} className="db-graph-point-group">
                      <circle cx={p.x} cy={p.y} r="6" fill="#fff" stroke="#3470F0" strokeWidth="2.5" />
                      <circle className="db-pulse" cx={p.x} cy={p.y} r="10" fill="#3470F0" opacity="0.15" />
                    </g>
                  ))}
                </svg>
                
                <div className="db-graph-labels">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((lbl, i) => (
                    <span key={i} className="db-graph-label">{lbl}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="db-targets-detailed-grid">
              <div className="db-target-item">
                <div className="db-target-meta">Quarterly Pipeline</div>
                <div className="db-target-value">₹8.4Cr</div>
                <div className="db-target-progress"><div className="db-progress-inner blue" style={{ width: '68%' }}></div></div>
                <div className="db-target-pct">68% of Target</div>
              </div>
              <div className="db-target-item">
                <div className="db-target-meta">Visit Compliance</div>
                <div className="db-target-value">92%</div>
                <div className="db-target-progress"><div className="db-progress-inner green" style={{ width: '92%' }}></div></div>
                <div className="db-target-pct">Excellent</div>
              </div>
              <div className="db-target-item">
                <div className="db-target-meta">Quote to PO</div>
                <div className="db-target-value">61%</div>
                <div className="db-target-progress"><div className="db-progress-inner amber" style={{ width: '61%' }}></div></div>
                <div className="db-target-pct">Needs Focus</div>
              </div>
            </div>
          </div>

          {/* Right — Alerts */}
          <div className="db-grid-sidebar">
            <div className="db-section-head">
              <div className="db-section-title">Morning Alerts</div>
              <div className="db-section-link">View All</div>
            </div>
            <div className="db-alerts-stack">
              {[
                { type: 'critical', text: 'Haryana Krishi — deal stalled 12 days (₹6.2L)', time: '2h ago' },
                { type: 'warning', text: 'Balaji Auto — SOR pending approval (₹10.5L)', time: '4h ago' },
                { type: 'info', text: 'Coaching session with Mahesh at 11:00 AM', time: 'Now' },
                { type: 'warning', text: 'Visit Breach: 3 accounts not visited 30+ days', time: '6h ago' },
                { type: 'critical', text: 'Rajasthan Tractor — credit limit exceeded', time: '8h ago' },
              ].map((a, i) => (
                <div key={i} className={`db-alert-card ${a.type}`}>
                  <div className="db-alert-indicator"></div>
                  <div className="db-alert-content">
                    <div className="db-alert-text">{a.text}</div>
                    <div className="db-alert-time">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Team ── */
const ALL_MEMBERS = [
  { id: 1, init: 'MY', name: 'Mahesh Yadav', role: 'FIELD REP', pct: 65, status: 'At client', color: '#18B87A', health: 66, bio: 'Expert in Agriculture Segment, N India.', deals: 8, revenue: '₹14.2L', bg: '#dcfce7' },
  { id: 2, init: 'PK', name: 'Preethi Kumar', role: 'INSIDE REP', pct: 66, status: 'On call', color: '#18B87A', health: 68, bio: 'Deal nurture & lead intake coordinator.', deals: 12, revenue: '₹9.4L', bg: '#dbeafe' },
  { id: 3, init: 'AD', name: 'Arjun Desai', role: 'SDR', pct: 70, status: 'Available', color: '#18B87A', health: 72, bio: 'Pipeline generation & qualification.', deals: 24, revenue: '₹4.8L', bg: '#ede9fe' },
  { id: 4, init: 'RK', name: 'Ramesh Kumar', role: 'FIELD REP', pct: 53, status: 'In transit', color: '#E8A020', health: 61, bio: 'Senior field rep — Mining segment.', deals: 5, revenue: '₹22.1L', bg: '#fef9c3' },
  { id: 5, init: 'SN', name: 'Sneha Nair', role: 'KAM', pct: 88, status: 'Available', color: '#18B87A', health: 91, bio: 'Key account management — West India.', deals: 6, revenue: '₹18.5L', bg: '#fce7f3' },
  { id: 6, init: 'VR', name: 'Vivek Rajan', role: 'FIELD REP', pct: 44, status: 'Offline', color: '#E0384F', health: 52, bio: 'Covers OTR & Mining in South India.', deals: 3, revenue: '₹8.1L', bg: '#fee2e2' },
  { id: 7, init: 'KP', name: 'Kavya Prakash', role: 'SDR', pct: 78, status: 'On call', color: '#18B87A', health: 80, bio: 'SQL qualification & initial outreach.', deals: 31, revenue: '₹2.9L', bg: '#d1fae5' },
  { id: 8, init: 'RS', name: 'Rohit Sharma', role: 'INSIDE REP', pct: 61, status: 'Available', color: '#18B87A', health: 63, bio: 'Specialises in proforma & SOR follow-up.', deals: 9, revenue: '₹11.7L', bg: '#e0f2fe' },
];

function TeamScreen() {
  const [selectedMember, setSelectedMember] = useState<(typeof ALL_MEMBERS)[0] | null>(null);

  return (
    <div className="db-screen-content fade-in" style={{ position: 'relative' }}>
      <div className="db-topbar">
        <div className="db-topbar-trail">SF / Manager / Team</div>
        <div className="db-topbar-search">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
          <span className="db-search-text">Search team member…</span>
        </div>
        <div className="db-topbar-user">Ananya K. · SALES HEAD</div>
      </div>

      <div className="db-content-scroll">
        <div className="db-page-header">
          <div className="db-page-icon-box" style={{ background: '#1e293b' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          </div>
          <div>
            <div className="db-page-title">My Team Intelligence</div>
            <div className="db-page-sub">North &amp; West India cluster · <strong>8 active members</strong></div>
          </div>
        </div>

        <div className="db-team-grid">
          {ALL_MEMBERS.map((m) => (
            <div
              key={m.id}
              className={`db-team-card-v2 ${selectedMember?.id === m.id ? 'selected' : ''}`}
              onClick={() => setSelectedMember(m)}
            >
              <div className="db-team-card-header">
                <div className="db-team-avatar-v2" style={{ background: m.bg, color: '#1e293b' }}>{m.init}</div>
                <div className="db-team-status-pill">
                  <span className="db-status-dot" style={{ background: m.color }}></span>
                  {m.status}
                </div>
              </div>
              <div className="db-team-card-main">
                <div className="db-team-name-v2">{m.name}</div>
                <div className="db-team-role-v2">{m.role}</div>
              </div>
              <div className="db-team-stats-row">
                <div className="db-t-stat">
                  <div className="db-t-val">{m.pct}%</div>
                  <div className="db-t-lbl">Target</div>
                </div>
                <div className="db-t-stat">
                  <div className="db-t-val">{m.health}</div>
                  <div className="db-t-lbl">Health</div>
                </div>
                <div className="db-t-stat">
                  <div className="db-t-val">{m.deals}</div>
                  <div className="db-t-lbl">Deals</div>
                </div>
              </div>
              <div className="db-card-action">Tap to view details →</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-in detail panel */}
      {selectedMember && (
        <div className="db-member-detail-overlay" onClick={() => setSelectedMember(null)}>
          <div className="db-member-detail-panel" onClick={(e) => e.stopPropagation()}>
            <div className="db-panel-header">
              <div className="db-panel-profile">
                <div className="db-panel-avatar" style={{ background: selectedMember.bg, color: '#1e293b' }}>
                  {selectedMember.init}
                </div>
                <div>
                  <div className="db-panel-name">{selectedMember.name}</div>
                  <div className="db-panel-role">{selectedMember.role}</div>
                </div>
              </div>
              <button className="db-panel-close" onClick={() => setSelectedMember(null)}>×</button>
            </div>
            <div className="db-panel-content">
              <div className="db-p-section">
                <div className="db-p-title">Overview</div>
                <p className="db-p-text">{selectedMember.bio}</p>
              </div>
              <div className="db-p-grid">
                <div className="db-p-card"><div className="db-p-card-val">{selectedMember.deals}</div><div className="db-p-card-lbl">Active Deals</div></div>
                <div className="db-p-card"><div className="db-p-card-val">{selectedMember.revenue}</div><div className="db-p-card-lbl">Revenue MTD</div></div>
                <div className="db-p-card"><div className="db-p-card-val">{selectedMember.health}/100</div><div className="db-p-card-lbl">Perf Health</div></div>
              </div>
              <div className="db-p-section">
                <div className="db-p-title">Current Focus</div>
                <div className="db-p-focus-item">Completing <strong>Haryana Krishi</strong> deal closure.</div>
                <div className="db-p-focus-item">Routing logistics for <strong>Balaji Auto</strong>.</div>
                <div className="db-p-focus-item">Weekly review call with SM on <strong>Fri 4 PM</strong>.</div>
              </div>
            </div>
            <div className="db-panel-footer">
              <button className="db-panel-btn-primary">Initiate Coaching</button>
              <button className="db-panel-btn-secondary">View Pipeline</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Approvals ── */
function ApprovalsScreen() {
  return (
    <div className="db-screen-content fade-in">
      <div className="db-topbar">
        <div className="db-topbar-trail">SF / Sors / Approvals</div>
        <div className="db-topbar-search">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
          <span className="db-search-text">Search pending orders…</span>
        </div>
        <div className="db-topbar-user">Ananya K. · SALES HEAD</div>
      </div>
      <div className="db-content-scroll">
        <div className="db-page-header-row">
          <div>
            <div className="db-page-title">Operation Approvals</div>
            <div className="db-page-sub">Central queue for SORs, Discounts, and Scheme enrollments</div>
          </div>
          <button className="db-btn-primary">+ Add SOR</button>
        </div>

        <div className="db-approvals-queue">
          <div className="db-queue-tabs">
            <div className="db-q-tab active">SOR Pending (6)</div>
            <div className="db-q-tab">Price Overrides (12)</div>
            <div className="db-q-tab">Scheme Exceptions (4)</div>
          </div>
          <div className="db-queue-table-v2">
            <div className="db-v2-head">
              <span>SOR REF</span>
              <span>DISTRIBUTOR</span>
              <span>VALUE</span>
              <span>SEGMENT</span>
              <span>STATUS</span>
              <span>ACTIONS</span>
            </div>
            {[
              { id: 'SOR-2026-0093', dist: 'Rajasthan Tractors', val: '₹42,00,000', seg: 'Agriculture', status: 'draft' },
              { id: 'SOR-2026-0092', dist: 'Haryana Krishi', val: '₹18,90,000', seg: 'OTR', status: 'submitted' },
              { id: 'SOR-2026-0091', dist: 'Balaji Auto', val: '₹28,40,000', seg: 'Agriculture', status: 'under-review' },
              { id: 'SOR-2026-0090', dist: 'Kumar Distributors', val: '₹9,80,000', seg: 'Industrial', status: 'submitted' },
              { id: 'SOR-2026-0089', dist: 'Balaji Auto', val: '₹18,50,000', seg: 'OTR', status: 'draft' },
              { id: 'SOR-2026-0088', dist: 'Sharma Logistics', val: '₹12,20,000', seg: 'Industrial', status: 'under-review' },
            ].map((r, i) => (
              <div key={i} className="db-v2-row">
                <span className="db-v2-id">{r.id}</span>
                <span className="db-v2-dist">{r.dist}</span>
                <span className="db-v2-val">{r.val}</span>
                <span className="db-v2-seg">{r.seg}</span>
                <span><span className={`db-status-badge ${r.status}`}>{r.status.replace('-', ' ')}</span></span>
                <span className="db-v2-actions">
                  <button className="btn-v2-approve">Approve</button>
                  <button className="btn-v2-more">···</button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── SOR Tracker ── */
function SORScreen() {
  return (
    <div className="db-screen-content fade-in">
      <div className="db-topbar">
        <div className="db-topbar-trail">SF / Trackers / SOR</div>
        <div className="db-topbar-search">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
          <span className="db-search-text">Search SOR #…</span>
        </div>
        <div className="db-topbar-user">Ananya K. · SALES HEAD</div>
      </div>
      <div className="db-content-scroll">
        <div className="db-tracker-hero">
          <div>
            <div className="db-tracker-title">SOR-2026-0091 Workflow</div>
            <div className="db-tracker-meta">Balaji Auto · Project Agrimax 2026</div>
          </div>
          <div className="db-tracker-status-box">
            <div className="db-s-lbl">Current Stage</div>
            <div className="db-s-val">CO Approval Pending</div>
          </div>
        </div>

        <div className="db-workflow-stepper">
          {['Draft', 'Submitted', 'SM Approval', 'CO Approval', 'SO Creation', 'Logistics', 'Fulfilled'].map((step, i) => (
            <div key={i} className={`db-step-item ${i < 3 ? 'completed' : i === 3 ? 'active' : 'pending'}`}>
              <div className="db-step-circle">{i < 3 ? '✓' : i + 1}</div>
              <div className="db-step-label">{step}</div>
              {i < 6 && <div className="db-step-line"></div>}
            </div>
          ))}
        </div>

        <div className="db-tracker-details">
          <div className="db-detail-box">
            <div className="db-d-head">Operational Details</div>
            <div className="db-d-grid">
              <div className="db-d-item"><span className="db-d-lbl">Product</span><span className="db-d-val">400/75-28 LIFT STAR × 80</span></div>
              <div className="db-d-item"><span className="db-d-lbl">Total Value</span><span className="db-d-val">₹28,40,000</span></div>
              <div className="db-d-item"><span className="db-d-lbl">Expected Delivery</span><span className="db-d-val">Apr 18, 2026</span></div>
              <div className="db-d-item"><span className="db-d-lbl">Sales Rep</span><span className="db-d-val">Mahesh Yadav</span></div>
              <div className="db-d-item"><span className="db-d-lbl">Segment</span><span className="db-d-val">Agriculture</span></div>
            </div>
          </div>
          <div className="db-detail-box">
            <div className="db-d-head">Timeline History</div>
            <div className="db-timeline-v2">
              <div className="db-tm-item"><strong>Mar 22</strong> — SOR Created by Mahesh Yadav</div>
              <div className="db-tm-item"><strong>Mar 23</strong> — Approved by SM Ananya Krishnan</div>
              <div className="db-tm-item active"><strong>Today</strong> — Pending at CO Desk for pricing validation</div>
              <div className="db-tm-item"><strong>Apr 15</strong> — Scheduled dispatch from Bhiwadi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Lead Tracker ── */
function LeadTrackerScreen() {
  return (
    <div className="db-screen-content fade-in">
      <div className="db-topbar">
        <div className="db-topbar-trail">SF / Trackers / Leads</div>
        <div className="db-topbar-user">Ananya K. · SALES HEAD</div>
      </div>
      <div className="db-content-scroll">
        <div className="db-page-header">
          <div>
            <div className="db-page-title">Lead Lifecycle Intelligence</div>
            <div className="db-page-sub">Path from first touch to deal closure — Q2 2026</div>
          </div>
        </div>

        <div className="db-leads-summary-row">
          {[
            { val: '240', lbl: 'New Leads', cls: '' },
            { val: '84', lbl: 'Qualified (SQL)', cls: '' },
            { val: '31', lbl: 'Proposals Sent', cls: '' },
            { val: '12', lbl: 'Deals Won', cls: '' },
            { val: '₹2.4Cr', lbl: 'Pipeline Value', cls: 'green' },
          ].map((s, i) => (
            <div key={i} className="db-lead-stat">
              <div className={`db-ls-val ${s.cls}`}>{s.val}</div>
              <div className="db-ls-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="db-funnel-viz">
          {[
            { lbl: 'Capture — 240 Leads (100%)', cls: 'l1', w: '100%' },
            { lbl: 'MQL — Qualified Marketing (80%)', cls: 'l2', w: '80%' },
            { lbl: 'SQL — Sales Accepted (50%)', cls: 'l3', w: '55%' },
            { lbl: 'Proposal Stage (30%)', cls: 'l4', w: '35%' },
            { lbl: 'Closed Won (15%) — 12 Deals', cls: 'l5', w: '18%' },
          ].map((f, i) => (
            <div key={i} className={`db-funnel-layer ${f.cls}`} style={{ width: f.w }}>{f.lbl}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Proforma ── */
function ProformaScreen() {
  return (
    <div className="db-screen-content fade-in">
      <div className="db-topbar">
        <div className="db-topbar-trail">SF / Invoicing / Proforma</div>
        <div className="db-topbar-user">Ananya K. · SALES HEAD</div>
      </div>
      <div className="db-content-scroll">
        <div className="db-page-header-row">
          <div>
            <div className="db-page-title">Proforma Management</div>
            <div className="db-page-sub">Validating commercial offers before final tax invoicing</div>
          </div>
          <button className="db-btn-primary">+ Create PI</button>
        </div>
        <div className="db-pi-grid">
          {[
            { num: 'PI-2026-0044', dist: 'Balaji Auto Cluster', val: '₹18.5L', date: 'Apr 12, 2026' },
            { num: 'PI-2026-0043', dist: 'Sharma Logistics', val: '₹12.2L', date: 'Apr 10, 2026' },
            { num: 'PI-2026-0042', dist: 'Rajasthan Tractors', val: '₹28.4L', date: 'Apr 08, 2026' },
            { num: 'PI-2026-0041', dist: 'Haryana Krishi', val: '₹9.8L', date: 'Apr 05, 2026' },
          ].map((p, i) => (
            <div key={i} className="db-pi-card">
              <div className="db-pi-head">
                <span className="db-pi-num">{p.num}</span>
                <span className="db-pi-status">Pending Approval</span>
              </div>
              <div className="db-pi-body">
                <div className="db-pi-dist">{p.dist}</div>
                <div className="db-pi-val">{p.val}</div>
                <div className="db-pi-date">Valid until {p.date}</div>
              </div>
              <div className="db-pi-footer">
                <button className="db-pi-btn">Open Invoice</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Invoices ── */
function InvoicesScreen() {
  return (
    <div className="db-screen-content fade-in">
      <div className="db-topbar">
        <div className="db-topbar-trail">SF / Invoicing / Receivables</div>
        <div className="db-topbar-user">Ananya K. · SALES HEAD</div>
      </div>
      <div className="db-content-scroll">
        <div className="db-page-header">
          <div>
            <div className="db-page-title">Accounts Receivable</div>
            <div className="db-page-sub">Tracking payments, aging, and credit limits</div>
          </div>
        </div>

        <div className="db-invoice-summary-grid">
          <div className="db-i-card">
            <span className="db-i-lbl">Outstanding</span>
            <span className="db-i-val">₹1.2Cr</span>
            <div className="db-i-progress"><div className="db-i-p-inner" style={{ width: '70%', background: '#E0384F' }}></div></div>
          </div>
          <div className="db-i-card">
            <span className="db-i-lbl">Paid MTD</span>
            <span className="db-i-val">₹48.5L</span>
            <div className="db-i-progress"><div className="db-i-p-inner" style={{ width: '60%', background: '#18B87A' }}></div></div>
          </div>
          <div className="db-i-card">
            <span className="db-i-lbl">Avg. Aging</span>
            <span className="db-i-val">12 Days</span>
            <div className="db-i-progress"><div className="db-i-p-inner" style={{ width: '40%', background: '#3470F0' }}></div></div>
          </div>
        </div>

        <div className="db-invoice-list-v2">
          <div className="db-inv-head">
            <span>INV #</span>
            <span>DISTRIBUTOR</span>
            <span>DUE DATE</span>
            <span>STATUS</span>
            <span>VALUE</span>
          </div>
          {[
            { id: 'INV-2026-0195', dist: 'Balaji Auto', due: 'Apr 15, 2026', status: 'paid', val: '₹4.2L' },
            { id: 'INV-2026-0194', dist: 'Sharma Logistics', due: 'Apr 12, 2026', status: 'paid', val: '₹6.8L' },
            { id: 'INV-2026-0193', dist: 'Haryana Krishi', due: 'Apr 08, 2026', status: 'overdue', val: '₹3.1L' },
            { id: 'INV-2026-0192', dist: 'Rajasthan Tractors', due: 'Apr 20, 2026', status: 'paid', val: '₹11.5L' },
            { id: 'INV-2026-0191', dist: 'Kumar Distributor', due: 'Apr 25, 2026', status: 'paid', val: '₹2.4L' },
          ].map((r, i) => (
            <div key={i} className="db-inv-row">
              <span className="db-inv-id">{r.id}</span>
              <span className="db-inv-dist">{r.dist}</span>
              <span className="db-inv-date">{r.due}</span>
              <span><span className={`db-status-badge ${r.status}`}>{r.status.charAt(0).toUpperCase() + r.status.slice(1)}</span></span>
              <span className="db-inv-val">{r.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Analytics ── */
function AnalyticsScreen() {
  const monthlyData = [
    { lbl: 'Oct', rev: 72, tgt: 80 },
    { lbl: 'Nov', rev: 85, tgt: 80 },
    { lbl: 'Dec', rev: 78, tgt: 85 },
    { lbl: 'Jan', rev: 92, tgt: 90 },
    { lbl: 'Feb', rev: 88, tgt: 90 },
    { lbl: 'Mar', rev: 96, tgt: 95 },
  ];

  return (
    <div className="db-screen-content fade-in">
      <div className="db-topbar">
        <div className="db-topbar-trail">SF / Intelligence / Analytics</div>
        <div className="db-topbar-user">Ananya K. · SALES HEAD</div>
      </div>
      <div className="db-content-scroll">
        <div className="db-page-header">
          <div>
            <div className="db-page-title">Sales Intelligence Hub</div>
            <div className="db-page-sub">6-month performance trends, territory breakdown &amp; KPI forecasts</div>
          </div>
        </div>

        {/* KPI Row */}
        <div className="db-an-kpi-row">
          {[
            { lbl: 'Win Rate', val: '68%', sub: '↑ +4% vs last qtr', color: '#18B87A' },
            { lbl: 'Avg Deal Size', val: '₹12.4L', sub: '↑ +8% vs last qtr', color: '#3470F0' },
            { lbl: 'Sales Cycle', val: '18 days', sub: '↓ -3 days improved', color: '#8b5cf6' },
            { lbl: 'Churn Risk', val: '4.2%', sub: '↓ Improved vs 6.1%', color: '#E0384F' },
          ].map((k, i) => (
            <div key={i} className="db-an-kpi-card">
              <div className="db-an-kpi-val" style={{ color: k.color }}>{k.val}</div>
              <div className="db-an-kpi-lbl">{k.lbl}</div>
              <div className="db-an-kpi-sub">{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Revenue Trend Chart */}
        <div className="db-an-chart-card">
          <div className="db-an-chart-head">
            <div className="db-an-chart-title">Monthly Revenue vs Target (₹L)</div>
            <div className="db-an-chart-legend">
              <span className="db-an-leg-item blue-leg">Revenue</span>
              <span className="db-an-leg-item gray-leg">Target</span>
            </div>
          </div>
          <div className="db-an-chart">
            <div className="db-an-y-axis">
              <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
            </div>
            <div className="db-an-bars-area">
              {monthlyData.map((d, i) => (
                <div key={i} className="db-an-bar-group">
                  <div className="db-an-bar-pair">
                    <div className="db-an-bar rev" style={{ height: `${d.rev}%` }} title={`₹${d.rev}L`} />
                    <div className="db-an-bar tgt" style={{ height: `${d.tgt}%` }} title={`Target ₹${d.tgt}L`} />
                  </div>
                  <span className="db-an-bar-lbl">{d.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Territory breakdown */}
        <div className="db-an-territory-grid">
          {[
            { territory: 'North India', revenue: '₹42L', target: '₹55L', pct: 76, rep: 'Mahesh Yadav' },
            { territory: 'West India', revenue: '₹28L', target: '₹35L', pct: 80, rep: 'Sneha Nair' },
            { territory: 'South India', revenue: '₹8.4L', target: '₹20L', pct: 42, rep: 'Vivek Rajan' },
          ].map((t, i) => (
            <div key={i} className="db-an-ter-card">
              <div className="db-an-ter-head">
                <div className="db-an-ter-name">{t.territory}</div>
                <div className="db-an-ter-pct" style={{ color: t.pct > 70 ? '#18B87A' : '#E0384F' }}>{t.pct}%</div>
              </div>
              <div className="db-an-ter-rep">{t.rep}</div>
              <div className="db-an-ter-vals">{t.revenue} / {t.target}</div>
              <div className="db-target-progress" style={{ marginTop: '10px' }}>
                <div className="db-progress-inner" style={{ width: `${t.pct}%`, background: t.pct > 70 ? '#18B87A' : '#E0384F' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Schemes ── */
function SchemesScreen() {
  return (
    <div className="db-screen-content fade-in">
      <div className="db-topbar">
        <div className="db-topbar-trail">SF / Commercial / Schemes</div>
        <div className="db-topbar-user">Ananya K. · SALES HEAD</div>
      </div>
      <div className="db-content-scroll">
        <div className="db-page-header-row">
          <div>
            <div className="db-page-title">Incentive Programs 2026</div>
            <div className="db-page-sub">Distributor tiering and loyalty bonus configurations</div>
          </div>
          <button className="db-btn-primary">+ New Scheme</button>
        </div>
        <div className="db-schemes-grid-v2">
          {[
            { name: 'Volume Bonus (VB) CY 2026', type: 'Annual', target: '10,000 MT', active: 42, color: '#3470F0' },
            { name: 'Focus Segment Targets (Pcs)', type: 'Annual', target: '500 Pcs', active: 18, color: '#8b5cf6' },
            { name: 'Half Yearly Loyalty Bonus', type: 'Half-Yearly', target: 'Tiered', active: 24, color: '#18B87A' },
            { name: 'Agriculture Bias & Radial QLVD', type: 'Monthly', target: '2000 MT', active: 11, color: '#E8A020' },
            { name: 'OTR Segment Growth Incentive', type: 'Quarterly', target: '500 Units', active: 8, color: '#E0384F' },
          ].map((s, i) => (
            <div key={i} className="db-scheme-card-v2">
              <div className="db-sc-dot" style={{ background: s.color }}></div>
              <div className="db-sc-body">
                <div className="db-sc-name">{s.name}</div>
                <div className="db-sc-meta">{s.type} · Target: {s.target}</div>
              </div>
              <div className="db-sc-stats">
                <div className="db-sc-val">{s.active}</div>
                <div className="db-sc-lbl">Distributors</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────── SCREENS MAP ────────────── */
const SCREENS: Record<string, React.ReactNode> = {
  dashboard: <DashboardScreen />,
  team: <TeamScreen />,
  approvals: <ApprovalsScreen />,
  sor: <SORScreen />,
  leads: <LeadTrackerScreen />,
  proforma: <ProformaScreen />,
  invoices: <InvoicesScreen />,
  analytics: <AnalyticsScreen />,
  schemes: <SchemesScreen />,
};

/* ────────────── MAIN EXPORT ────────────── */
export default function SM_Dashboard() {
  const [activeScreen, setActiveScreen] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBookDemo, setShowBookDemo] = useState(false);

  const ops = NAV_ITEMS.filter(n => n.group === 'ops');
  const fin = NAV_ITEMS.filter(n => n.group === 'fin');

  useEffect(() => {
    // Scroll trigger removed as per request to keep main dashboard sharp
  }, []);

  const handleNav = (id: string) => {
    setActiveScreen(id);
    setSidebarOpen(false);
    if (id !== 'dashboard') {
      setShowBookDemo(true);
    } else {
      setShowBookDemo(false);
    }
  };

  return (
    <section style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden', padding: '100px 0 120px' }} id="sm-dashboard-section">
      <div className="sm-db-bg">
        <div className="sm-db-orb sm-db-orb1" />
        <div className="sm-db-orb sm-db-orb2" />
      </div>

      <div className="sm-db-wrap reveal">
        {/* Section header */}
        <div className="sm-db-header">
          <div className="eyebrow eyebrow-dark"><span className="ey-line" />Command Center Dashboard</div>
          <h2 className="h2 h2-ink">The Unified <em>Commercial OS.</em></h2>
          <p className="lead lead-ink">
            An interactive preview of the sales ecosystem. Click the sidebar to explore each module.
          </p>
        </div>

        {/* Browser window */}
        <div 
          className="sm-db-window-fixed" 
        >
          {/* Chrome bar */}
          <div className="sm-db-chrome">
            <div className="sm-db-dots">
              <span className="sm-db-dot red" /><span className="sm-db-dot yellow" /><span className="sm-db-dot green" />
            </div>
            <div className="sm-db-url-bar">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <span className="sm-db-url-text">clientera.app / manager / {activeScreen}</span>
            </div>
            {/* Mobile hamburger */}
            <button className="sm-db-menu-btn" onClick={(e: React.MouseEvent) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }} aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
          </div>

          {/* Layout */}
          <div className="sm-db-layout">
            {/* Mobile overlay */}
            {sidebarOpen && (
              <div className="sm-db-sidebar-overlay" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <div className={`sm-db-sidebar-v2 ${sidebarOpen ? 'open' : ''}`}>
              <div className="sm-db-sidebar-logo">
                <div className="sm-db-sf-badge">SF</div>
                <span className="sm-db-sidebar-brand">CLIENTERA</span>
              </div>

              <div className="sm-db-sidebar-nav">
                <div className="sm-db-nav-group-label">OPERATIONS</div>
                {ops.map((item: any) => (
                  <button
                    key={item.id}
                    className={`sm-db-nav-button ${activeScreen === item.id ? 'active' : ''}`}
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); handleNav(item.id); }}
                  >
                    <span className="sm-db-nav-badge">{item.icon}</span>
                    <span className="sm-db-nav-label">{item.label}</span>
                    {activeScreen === item.id && <span className="sm-db-nav-indicator" />}
                  </button>
                ))}

                <div className="sm-db-nav-group-label">FINANCE &amp; ANALYTICS</div>
                {fin.map((item: any) => (
                  <button
                    key={item.id}
                    className={`sm-db-nav-button ${activeScreen === item.id ? 'active' : ''}`}
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); handleNav(item.id); }}
                  >
                    <span className="sm-db-nav-badge">{item.icon}</span>
                    <span className="sm-db-nav-label">{item.label}</span>
                    {activeScreen === item.id && <span className="sm-db-nav-indicator" />}
                  </button>
                ))}
              </div>

              <div className="sm-db-sidebar-user">
                <div className="sm-db-user-pill">
                  <div className="sm-db-user-avatar">AK</div>
                  <div className="sm-db-user-info">
                    <div className="sm-db-user-name">Ananya K.</div>
                    <div className="sm-db-user-role">Sales Manager</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="sm-db-main-v2" style={{ position: 'relative', overflow: 'hidden' }}>
              <motion.div 
                animate={showBookDemo ? { filter: 'blur(12px)', opacity: 0.6, scale: 0.98 } : { filter: 'blur(0px)', opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ height: '100%', width: '100%' }}
              >
                {SCREENS[activeScreen]}
              </motion.div>



              {/* Book a Demo Golden Button (Focused Overlay) */}
              <AnimatePresence>
                {showBookDemo && (
                  <motion.div 
                    className="db-book-demo-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => { setShowBookDemo(false); setActiveScreen('dashboard'); }}
                  >
                    <motion.div 
                      className="db-book-demo-modal"
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button className="db-book-demo-golden-plus">
                        <span className="db-book-demo-text-plus">Explore Strategy Demo</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                      </button>
                      <p className="db-book-demo-subtext">Click anywhere to return to dashboard</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
