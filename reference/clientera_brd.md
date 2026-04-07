# Clientera — Business Requirements Document
## AI-Powered Commercial Operating System
**Version:** 2.0 — Current
**Status:** Current
**Classification:** Confidential

---

## Document Control

| Version | Date | Status | Summary |
|---|---|---|---|
| 1.0 | 2026 | Superseded | Initial discovery |
| 1.1 | 2026 | Superseded | Desktop web rep, desk rep features, device strategy, QR check-in, tablet features, account ownership model |
| 1.2 | 2026 | Superseded | Lead management, external enrichment, commercial ops, customer service, product catalogue, pricing engine, RfQ, configurable quote workflows, form builder, approval engine, config inheritance, data ingestion, platform phasing |
| 1.3 | 2026 | Superseded | Distribution flow, SOR entity chain, workflow builder, master data management, custom fields, commercial engine, claims module, integration hub |
| 1.4 | 2026 | Superseded | Workflow & approval update. Module-gated mandatory WorkflowRoutes. Permission-queue and context-resolved approver types. Rework mechanic. |
| 1.5 | 2026 | Superseded | ETA Change Request module added. |
| 1.6 | 2026 | Superseded | Dynamic rule-based targets. Advanced KPI engine with AND/OR coverage groups, target cloning, interactive leaderboards. |
| 2.0 | 2026-03-28 | **Current** | Full platform rebrand to **Clientera**. Marketing Manager persona and complete Marketing module added (§8). Sales Operations module fully integrated as §35. Distributor Portal formalised as §36. AI Intelligence Layer consolidated as §37. |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Vision](#2-product-vision)
3. [Target Market & Pricing Tiers](#3-target-market--pricing-tiers)
4. [Platform Architecture Principles](#4-platform-architecture-principles)
5. [User Roles & The Role Builder](#5-user-roles--the-role-builder)
6. [Organisational Hierarchy Engine](#6-organisational-hierarchy-engine)
7. [Device Strategy & Rep Personas](#7-device-strategy--rep-personas)
8. [Marketing Manager Features](#8-marketing-manager-features)
9. [Field Sales Rep Features](#9-field-sales-rep-features)
10. [Desk & Inside Sales Rep Features](#10-desk--inside-sales-rep-features)
11. [Management & Hierarchy Features](#11-management--hierarchy-features)
12. [Director & Owner Features](#12-director--owner-features)
13. [Back Office & Admin Features](#13-back-office--admin-features)
14. [The Intelligent Daily Co-Pilot](#14-the-intelligent-daily-co-pilot)
15. [Client Intelligence Card](#15-client-intelligence-card)
16. [Pipeline & Configurable Commercial Flow](#16-pipeline--configurable-commercial-flow)
17. [Integrations & BYOK](#17-integrations--byok)
18. [Customisable KPIs, Targets, Workflows & Analytics](#18-customisable-kpis-targets-workflows--analytics)
19. [Account Ownership & Data Isolation](#19-account-ownership--data-isolation)
20. [Audit Trail](#20-audit-trail)
21. [Compliance & Security](#21-compliance--security)
22. [Multi-Tenancy & Platform Administration](#22-multi-tenancy--platform-administration)
23. [Onboarding & Default Setup](#23-onboarding--default-setup)
24. [Notifications & Communication](#24-notifications--communication)
25. [Non-Functional Requirements](#25-non-functional-requirements)
26. [Lead Management & Prospecting](#26-lead-management--prospecting)
27. [External Data Enrichment](#27-external-data-enrichment)
28. [Commercial Operations — Invoice, Payment & Credit](#28-commercial-operations--invoice-payment--credit)
29. [Customer Service & Ticketing](#29-customer-service--ticketing)
30. [Product Catalogue, Pricing & Discount Engine](#30-product-catalogue-pricing--discount-engine)
31. [RfQ & Configurable Quote Workflows](#31-rfq--configurable-quote-workflows)
32. [Configurable Forms & Approval Engine](#32-configurable-forms--approval-engine)
33. [Universal Config Inheritance](#33-universal-config-inheritance)
34. [Data Import & Ingestion](#34-data-import--ingestion)
35. [Platform Phasing & Roadmap](#35-platform-phasing--roadmap)
36. [Master Data Management](#36-master-data-management)
37. [Custom Fields Engine](#37-custom-fields-engine)
38. [Commercial Engine](#38-commercial-engine)
39. [Claims](#39-claims)
40. [Integration Hub](#40-integration-hub)
41. [Advanced Custom Fields Engine & Formulas](#41-advanced-custom-fields-engine--formulas)
42. [Visual Field Builder & Universal Label Overrides](#42-visual-field-builder--universal-label-overrides)
43. [Workflow Builder — Module-Gated Routes & Permission Queues](#43-workflow-builder--module-gated-routes--permission-queues)
44. [ETA Change Request — Controlled ETA Amendments](#44-eta-change-request--controlled-eta-amendments)
45. [Target Setting & KPI Leaderboard Engine](#45-target-setting--kpi-leaderboard-engine)
46. [Sales Operations Module — Entities, State Machines & Workflows](#46-sales-operations-module--entities-state-machines--workflows)
47. [Distributor Portal](#47-distributor-portal)
48. [AI Intelligence Layer](#48-ai-intelligence-layer)

---

## 1. Executive Summary

This document defines the business requirements for **Clientera** — an AI-powered Commercial Operating System and multi-tenant SaaS product designed to give companies complete visibility and control over their entire commercial relationship with clients, from the first marketing signal through to payment collection and ongoing customer service.

The platform serves multiple distinct personas on a single unified product. Marketing managers run campaigns, score leads, and hand off qualified prospects to sales with full context intact. Field reps use the mobile app for GPS-verified client visits, route planning, and on-site engagement. Desk-based inside sales reps use the full desktop web app for calendar-driven call management, email workflow, and video meeting intelligence. Hybrid reps move fluidly between both. A field rep and an inside rep can exist in the same company, on the same platform, under the same management hierarchy, with their activity visible in the same manager dashboard.

The core problem this platform solves is the fragmentation of commercial relationships across disconnected tools. Managers cannot see where their reps are, which clients are being neglected, what is blocking a deal, or whether a client who just received an invoice is already raising a support ticket. Reps carry too much cognitive load — remembering who to visit, what was discussed, what the client asked for, and what needs to happen to close. And the intelligence that would make both groups more effective — company news, contact promotions, competitor signals, payment history — is scattered across the internet, the ERP, and the inbox, never assembled into a single view.

This platform assembles that view. It gives managers real-time operational visibility while giving reps an intelligent daily co-pilot. It tracks the full commercial lifecycle from lead to payment. It surfaces customer service issues in the same card a rep reads before a visit. It enriches every account and contact automatically from external sources. And it is architectured from the start to grow — so that the workflow configured for a ten-person team today becomes the foundation for a five-hundred-person organisation without rebuilding.

The platform is built as a SaaS product sold to multiple companies. Each company operates in complete isolation with its own configurable hierarchy, roles, KPIs, workflows, pricing rules, and data. The platform is designed to comply with all major international data protection and security standards from day one.

---

## 2. Product Vision

**"The single place where the commercial relationship lives — from the first conversation to the last payment."**

The platform has four guiding design principles:

**Principle 1 — If it's not easy, reps won't use it.**
Every interaction a rep has with the platform must feel like less work, not more. One-tap check-ins for field reps. One-click meeting start for desk reps. Voice notes instead of typing. AI-generated summaries. Pre-filled prices and product mappings. The platform must earn its place in a rep's day by saving them time, not consuming it — whether that rep is standing in a client's office or sitting at their desk on a Zoom call.

**Principle 2 — The platform is the central nervous system, not the data collector.**
The platform does not try to replace best-in-class tools like Fireflies, Otter, Gmail, Outlook, or Zoom — or the ERP that owns invoicing and payments. Instead it integrates with them, pulls the relevant data, and presents it in context. Reps continue using the tools they already know. The platform is where all that data makes sense together.

**Principle 3 — Managers get the truth without asking for it.**
No manual reports. No end-of-day summaries typed by reps. The platform surfaces what managers need to know automatically — exceptions, risks, overdue items, and performance trends — so they can manage by exception rather than by interrogation.

**Principle 4 — The architecture never needs rebuilding.**
Every entity in the platform is designed for its full lifecycle from day one. A Lead and an Account are the same entity at different lifecycle stages — no migration needed when a prospect converts. A ServiceTicket and a pipeline Deal sit in the same client intelligence card — no integration glue needed later. Config inheritance is universal — the same mechanism that governs workflow defaults governs pricing rules, approval hierarchies, KPIs, and notification preferences. Build once, extend forever.

---

## 3. Target Market & Pricing Tiers

The platform is sold to companies of any size that have a field sales team. It is priced in three tiers based on team size, hierarchy complexity, and feature requirements.

### 3.1 Starter Tier

Designed for micro-businesses and solo sales operations.

- Maximum 5 users
- 2 hierarchy levels — Owner and Sales Reps only. No middle management.
- All standard KPIs
- Full AI co-pilot features — BYOK only. Customer must provide their own API keys.
- All integrations except ERP — BYOK only for all integrations
- Standard workflows — no custom workflow builder
- No API access
- Platform branding only
- Self-serve support and documentation
- No SSO
- CSV data export
- Self-serve onboarding

### 3.2 Growth Tier

Designed for growing sales teams with regional or functional structure.

- Up to 50 users
- Up to 3 hierarchy levels
- All KPIs including custom KPI builder
- Full AI co-pilot — BYOK or platform-provided keys
- All integrations including ERP — BYOK available for all
- Custom workflow builder
- Full API access
- Platform branding
- Priority email support
- No SSO
- CSV and API data export
- Guided onboarding

### 3.3 Enterprise Tier

Designed for large or complex sales organisations.

- Unlimited users
- Unlimited hierarchy levels
- All KPIs including custom and cross-company benchmarking
- Full AI co-pilot with predictive analytics — BYOK or platform-provided keys
- All integrations including ERP and custom integrations — BYOK available
- Custom workflow builder with company-wide locked workflows
- Full API access with webhooks and dedicated sandbox environment
- Custom branding — logo, colours, custom domain
- Dedicated account manager and SLA
- SSO — SAML and OAuth
- Full data portability
- White-glove onboarding

### 3.4 Compliance Across All Tiers

All three tiers are fully compliant with the following standards and regulations from day one:

- SOC 2 Type II
- ISO 27001
- GDPR — EU General Data Protection Regulation
- EUDR — EU Deforestation Regulation (where applicable to customer industry)
- DPDP — India's Digital Personal Data Protection Act 2023
- CCPA — California Consumer Privacy Act
- PDPA — Thailand and Singapore variants
- PIPEDA — Canada

Compliance is not a tier feature. It is a platform-wide commitment that applies equally to every customer regardless of plan.

---

## 4. Platform Architecture Principles

### 4.1 Multi-Tenancy

Every company that purchases the platform is a separate tenant. Tenant isolation is absolute and non-negotiable:

- Each tenant has its own data partition. No data is shared between tenants under any circumstances.
- Tenant data is encrypted separately, using the tenant's own BYOK key if configured.
- Even platform super admins cannot access tenant data without explicit permission, and all such access is fully logged.
- A breach of one tenant's data must not expose any other tenant's data.

### 4.2 Integration-First Philosophy

The platform does not attempt to replicate what best-in-class tools already do well. Instead it integrates with those tools and becomes the place where all data lands, is contextualised, and is acted upon.

The platform builds and owns:
- The client intelligence card and unified client timeline
- The daily co-pilot and route optimisation engine
- The GPS check-in and visit verification engine
- The pipeline and SO progression workflow
- The account ownership and territory isolation rules
- The configurable hierarchy, role, KPI, and workflow engines
- The manager and director dashboards
- The audit trail and compliance infrastructure

The platform integrates with and pulls data from:
- Email — Gmail, Outlook / Microsoft 365
- Calendar — Google Calendar, Outlook Calendar
- Meeting transcription — Fireflies, Otter.ai, Microsoft Copilot, Notion AI
- Video meetings — Zoom, Microsoft Teams, Google Meet
- Phone and VoIP — RingCentral, Aircall, Twilio and others
- WhatsApp Business API
- CRM systems — Salesforce, HubSpot, Zoho and others (Growth and Enterprise)
- ERP systems — custom per customer via API, two-way sync (Growth and Enterprise)
- External enrichment — Clearbit, Apollo, ZoomInfo for company and contact intelligence
- News and signal sources — NewsAPI, Google News, LinkedIn, X/Twitter API
- Ticketing systems — Zendesk, Freshdesk, Intercom, Jira Service Management
- Prospecting — LinkedIn Sales Navigator
- Contact import — Google Contacts, Outlook Contacts

### 4.3 Source Tagging

Every piece of data in the platform carries a source tag that permanently identifies how it was created. This is a trust and accountability mechanism that runs through the entire platform:

- 🤖 **System captured** — automatically logged by the platform. GPS check-ins, call durations, email auto-links, AI transcriptions.
- ✍️ **Rep entered** — manually typed or voice-noted by the rep.
- 📎 **Integration synced** — pulled in from a connected third-party tool.
- 👔 **Manager added** — entered or edited by someone in a management role.
- ⚙️ **Admin configured** — set by system or company admin.

Source tags are immutable. They cannot be changed after the fact. They are visible in the audit trail and, where relevant, in the UI itself.

### 4.4 Data Residency

The platform offers region-specific hosting to support data localisation requirements:

- India — for DPDP compliance
- European Union — for GDPR compliance
- United States — for US-based customers
- Additional regions as required

Customers select their data residency region at onboarding. Data does not leave the selected region except where explicitly permitted and consented to.

---

## 5. User Roles & The Role Builder

### 5.1 Philosophy

The platform does not impose fixed roles. Instead, roles are built from **permission modules** — discrete sets of capabilities that can be combined in any configuration. A user's role is the sum of the modules they have been assigned.

This allows complete flexibility. A user can be a sales rep, a back office operator, and a system admin simultaneously. A senior rep can have partial management visibility without full management authority. A finance director can have read-only access to pipeline data without any operational access.

### 5.2 Default Role Templates

The following templates are available out of the box. Each is a pre-configured collection of modules that can be edited, extended, or used as-is.

**Distributor**
External partner selling on behalf of the organisation. SOR creation (within assigned accounts and SKU restrictions), own pipeline view, own order history, own target attainment dashboard, Proforma Invoice and Invoice receipt, communication with assigned internal contact. Cannot see other distributors' data, internal dashboards, pricing rules, or margin data. Proxy creation by an internal user is supported — the internal user can create SORs on behalf of the distributor; attribution goes to the distributor.

**Sales Rep**
Field visits, client management, contact management, pipeline management, quote builder, follow-up management, route planner, email integration, calendar integration, expense logging, personal analytics.

**Senior Rep**
Everything in Sales Rep, plus: limited team visibility (own mentees only), approval authority within defined value limits.

**Team Lead**
Everything in Senior Rep, plus: rep monitoring, KPI management (view only), account reassignment within own team, team analytics.

**Sales Manager**
Everything in Team Lead, plus: full KPI management, workflow builder, higher approval authority, coaching tools, regional analytics.

**Regional Director**
Everything in Sales Manager, plus: full sub-tree visibility, cross-team analytics, company-wide analytics, cross-team account reassignment.

**Back Office Operations**
SO workflow, account onboarding, document management, approval queues, expense approval, client management (read only).

**System Admin**
User management, hierarchy management, integration management, BYOK key management, data management, system configuration, compliance centre, audit log access.

**Company Owner**
All modules. No restrictions.

### 5.3 The Role Builder

Company admins and level-based admins (within their scope) can create custom roles using the role builder:

- Start from a template or build from scratch
- Each permission module is presented as a toggle — on or off
- Sub-permissions within modules are individually configurable. For example, Pipeline Management contains: view pipeline, edit pipeline, delete pipeline records — each toggleable independently.
- Dependency warnings are shown when enabling a module that has prerequisites or when enabling a sensitive module like cross-team reassignment
- A plain English role summary is generated before saving so the admin can review exactly what the role permits
- Roles are named and saved and can be assigned to any number of users
- A user can hold multiple roles simultaneously. Their effective permissions are the union of all assigned roles.

### 5.4 Role Assignment Rules

- A level-based admin can only assign roles containing modules they themselves possess
- Permissions cannot be escalated beyond one's own level
- Only company admin can assign the full admin module set
- Only company admin can assign cross-team permissions
- Role assignments are fully logged in the audit trail

### 5.5 Plan-Based Module Availability

Not all modules are available on all plans. Modules locked on a given plan are visible in the role builder but shown as locked with an upgrade prompt. No functionality above the plan level can be configured regardless of role.

---

## 6. Organisational Hierarchy Engine

### 6.1 Configurable Hierarchy

The platform does not impose a fixed organisational structure. Every company defines its own hierarchy — how many levels it has, what each level is called, and how permissions flow between them.

Examples of valid hierarchy configurations:
- 1 level: Owner only (solo operator)
- 2 levels: Sales Rep → Owner
- 3 levels: Field Agent → Team Lead → Sales Manager
- 5 levels: Sales Executive → Senior Executive → Regional Manager → National Head → Director
- Any other configuration the company requires

The system treats all hierarchy levels equally. It does not know or care what levels are called. It only understands order and reporting lines.

### 6.2 Default Setups by Level Count

When a company configures their hierarchy, the platform suggests a default setup based on the number of levels chosen. These are pre-populated starting points, not fixed configurations.

**1 Level — Solo Operator**
Default name: Sales Rep. Default KPIs: visits per week, follow-ups closed, quotes sent, POs received. Default workflows: overdue follow-up reminder, PO notification to owner. Default dashboard: personal scorecard.

**2 Levels — Small Team**
Default names: Sales Rep, Sales Manager. Rep KPIs focus on activity. Manager KPIs focus on pipeline and conversion. Default workflows: 3-day overdue escalation, PO notification to manager, new account approval by manager. Manager dashboard: team map and pipeline summary.

**3 Levels — Growing Business**
Default names: Field Rep, Team Lead, Sales Manager. Introduces territory management and cross-team visibility at top level. Default workflows: two-stage quote approval, territory conflict detection. KPIs add team performance comparison and forecast accuracy.

**4 Levels — Mid-Size Organisation**
Default names: Sales Executive, Senior Executive, Regional Manager, National Head. Introduces regional analytics and cross-territory reporting. Workflows include multi-level approval chains and automatic escalation paths. KPIs add regional benchmarking.

**5+ Levels — Enterprise**
Fully custom from the start with an enterprise template as the starting point. Includes division-level analytics, board-ready reporting, and complex multi-level approval chains.

### 6.3 Hierarchy Administration

- Levels can be added, removed, or renamed at any time without breaking historical data
- Users can be moved between positions in the hierarchy
- Historical reporting lines are preserved — past activity is always attributable to the structure that existed at the time
- Hierarchy changes are logged in the audit trail with full before and after state

### 6.4 Permissions Flow

Admin rights and visibility flow downward only. A user can manage and see what is below them. Never what is beside them or above them unless explicitly granted by the company admin.

---

## 7. Device Strategy & Rep Personas

### 7.1 The Three Rep Personas

The platform serves three distinct rep personas on a single unified product. A company can have all three types simultaneously. Every rep uses the same login, the same workspace, and generates data in the same unified pipeline and client timeline. The interface adapts based on the rep's configured persona and the device they are using.

**Field Rep**
Primarily uses the React Native mobile app on a phone or cellular tablet. Their day is structured around physical visits to client sites. GPS-based check-in, route planning, voice notes, and photo capture are their primary tools. They may also access the web app for account management and reporting.

**Desk Rep — Inside Sales**
Primarily uses the full desktop web app on a laptop or desktop. Their day is structured around scheduled calls, video meetings, and email. Calendar-triggered meeting briefs, one-click meeting start and end, integrated video platform controls, and email management are their primary tools. GPS features are not relevant to their workflow.

**Hybrid Rep**
Uses both the mobile app and the web app depending on context. When visiting clients in the field they behave as a field rep. When working from their desk or a hotel room they behave as a desk rep. The platform adapts automatically based on the device and context.

### 7.2 The Adaptive Interface

The interface renders differently based on three signals working together:

**Configured persona** — when a manager or admin sets up a user, they configure their rep type as field, desk, or hybrid. This sets the default experience and determines which features are surfaced prominently.

**Device and screen size** — the platform detects the device and screen size and adapts the layout accordingly. A hybrid rep on their phone gets the mobile rep experience. The same rep on their laptop gets the desk rep experience.

**Active context** — if a desk rep opens the mobile app, they see the desk-optimised mobile view rather than the field rep view. If a field rep sits at a desk and opens the web app, they see a rep dashboard rather than the manager dashboard.

### 7.3 Device Matrix

| Device | Primary App | Check-In Method | Verification Badge | Primary Persona |
|---|---|---|---|---|
| Android or iOS phone | React Native mobile app | GPS proximity — automatic prompt | GPS-verified | Field rep |
| Android or iOS tablet with cellular | React Native mobile app | GPS proximity — automatic prompt | GPS-verified | Field or hybrid rep |
| Android or iOS tablet WiFi-only | React Native mobile app | WiFi positioning — lower confidence radius | WiFi-verified | Field or hybrid rep |
| iPad or Android tablet at desk | Web app on browser | One-click meeting start from calendar | Calendar-triggered | Desk or hybrid rep |
| Any device with camera | React Native or web app | QR code scan at client location | QR-verified | Field or hybrid rep |
| Small laptop or Chromebook | Web app on browser | Manual confirmation, QR scan, or browser geolocation | Manually-confirmed or QR-verified | Hybrid or desk rep |
| Standard laptop or desktop | Web app on browser | Calendar-triggered or one-click meeting start | Calendar-triggered | Desk rep |
| Large monitor | Web app on browser | Calendar-triggered or one-click meeting start | Calendar-triggered | Manager, director, admin |

### 7.4 Check-In Verification Hierarchy

Every visit or meeting record carries a verification badge that permanently and honestly reflects how the check-in was established. This badge is visible to managers and is part of the audit trail. It cannot be changed after the fact.

| Badge | Method | Accuracy | Notes |
|---|---|---|---|
| GPS-verified | Native GPS on phone or cellular tablet | 5–10 metres | Gold standard. Automatic proximity prompt. |
| WiFi-verified | WiFi positioning on WiFi-only tablet | 20–100 metres | Lower confidence. System flags reduced accuracy. |
| QR-verified | QR code scan at client premises | Physical presence confirmed | No location accuracy needed — presence is confirmed by the scan itself. |
| Browser-located | Browser Geolocation API on laptop | 50 metres to 5km | Used as a supporting signal to suggest nearest client. Not used as primary verification. |
| Calendar-triggered | Meeting started from a calendar event | Not location-based | Standard for desk reps. Meeting platform and time are the verification. |
| Manually-confirmed | Rep confirmed they are at the location | No technical verification | Honest label. Manager can see it was not technically verified. |

### 7.5 QR Code Check-In

QR code check-in is available as an option across all devices and all plan tiers. It is particularly valuable for devices without GPS — laptops, WiFi-only tablets — and for buildings where GPS signal is weak or unavailable.

**How it works:**
Each account has a unique QR code generated by the platform. The QR code is downloadable from the account record by the account owner or admin. The company prints it and places it at the client's reception, meeting room entrance, or any relevant physical location at the client site.

When a rep arrives at the client site, they open the platform on any device with a camera — phone, tablet, or laptop webcam — and scan the QR code. The scan immediately triggers a check-in for that account, timestamped and logged as QR-verified.

**QR code security:**
Each QR code encodes the account ID and a cryptographically signed verification token. The token is validated server-side on scan. Tokens can be rotated by the account owner or admin at any time — for example if a printed QR code is lost or the client relationship ends. Old tokens are immediately invalidated on rotation.

**QR code management:**
- Company admin or account owner downloads the QR code from the account settings
- QR codes are available in print-ready formats — A4 poster, business card size, sticker format
- Each account has one active QR code at a time
- Token rotation generates a new QR code — old one is immediately invalid
- QR code scan history is part of the visit audit trail

**When QR check-in makes sense:**
- Laptops and WiFi-only tablets with no reliable GPS
- Enterprise client offices where GPS is blocked by building materials
- Client sites the rep visits regularly — a permanent QR code at reception
- Any situation where the rep wants unambiguous proof of physical presence without relying on GPS accuracy

### 7.6 Tablet-Specific Features

Tablets — both in the field and at a desk — unlock features that are more powerful on a larger screen:

**Presentation mode** — a clean, client-facing view of quotes, product catalogues, or SO checklists with no internal system UI visible. Rep rotates the tablet, slides it across the table, and the client sees a professional presentation. Available on both the mobile app (tablet layout) and the web app.

**Quote review with client** — the quote builder has a presentation mode specifically designed to be shown to a client on a tablet screen during a meeting. The client can see line items, totals, and terms clearly. The rep can adjust quantities or apply a discount in real time while the client watches.

**SO checklist walkthrough** — rep and client can review the SO checklist together on the tablet screen, ticking items off collaboratively.

**Photo capture** — tablets have cameras. All photo capture features available on phones are available on tablets. Less convenient to hold up than a phone but usable for photographing products, shelf placement, or whiteboards.

### 7.7 Responsive Design Breakpoints

The web app is designed responsively across the full range of screen sizes. Tablet breakpoints are first-class citizens, not an afterthought.

| Breakpoint | Width | Layout Behaviour |
|---|---|---|
| Mobile | 320px–480px | Not served by web app — React Native mobile app |
| Tablet portrait | 768px–1024px | Two-panel layout. Client list left, detail right. Sidebars collapse to icons. |
| Tablet landscape / small laptop | 1024px–1280px | Approaching full desktop layout. Tables compress. Map adjusts. |
| Standard laptop | 1280px–1440px | Full desktop layout. Primary target for web app design. |
| Large monitor | 1440px+ | Expanded layout. More data visible simultaneously. Manager dashboards benefit most. |

---

## 8. Marketing Manager Features

### 8.1 Overview

The Marketing Manager is the first persona in the commercial lifecycle. They are responsible for generating awareness, capturing leads, qualifying interest, and handing off market-ready prospects to the sales team with full context intact. In Clientera, marketing is not a separate tool bolted onto the side of a CRM — it is the opening stage of the same unified customer timeline that sales and operations work in.

The Marketing Manager uses the full desktop web app. Their primary workspace is the Campaigns module, the Lead Queue, and the Marketing Analytics dashboard. Everything they do feeds directly into the same customer entity that the sales rep, the inside rep, and the operations team all work with.

### 8.2 Campaign Management

The Marketing Manager creates and manages campaigns directly in Clientera. Each campaign has a defined type, a target audience, a budget, a start and end date, and a set of associated assets.

**Campaign types:**
- Email campaign — built natively or through a connected marketing automation platform (Mailchimp, HubSpot Marketing, ActiveCampaign)
- Event — webinar, trade show, or physical event registration
- Paid digital — Google Ads, LinkedIn Ads, Meta (tracked via UTM parameters)
- Content — blog, whitepaper, or gated download driving form submissions
- Outbound sequence — SDR-driven multi-touch outreach sequences
- Referral — structured referral programme tracked through the platform

**Native vs integrated campaigns:**
For organisations connected to an external marketing automation platform, Clientera pulls campaign performance data in via integration — sends, open rates, click rates, and unsubscribes are mirrored into Clientera and linked to the relevant leads and accounts. For organisations without a dedicated marketing platform, Clientera provides a native email campaign builder sufficient for transactional and nurture campaigns.

**Campaign record:**
Every campaign record holds its metadata (type, audience definition, budget, dates), its performance metrics (impressions, clicks, form fills, leads generated), the leads attributed to it, and the downstream commercial outcomes those leads produced — pipeline value created, deals won, and revenue invoiced. This attribution chain is always live and always accurate.

### 8.3 Lead Capture & Attribution

Leads enter Clientera from multiple sources, and every lead is tagged with the campaign and channel that originated it.

**Capture sources:**
- Web-to-lead forms embedded on the company's website or landing pages — submissions create leads automatically with source tag `web_form` and the UTM parameters from the URL
- Email campaign clicks — contacts who click a campaign link and fill a form are created as leads attributed to that campaign
- Manual entry by the Marketing Manager or an SDR
- LinkedIn import — individual profiles or bulk import via LinkedIn Sales Navigator integration
- Event registrations — attendees of a connected event become leads attributed to that event campaign
- Inbound enquiries — RfQ emails or enquiry form submissions from companies with no prior relationship

Every lead record shows its complete origin: which campaign, which channel, which specific asset or touchpoint, and the exact date of first engagement.

### 8.4 Lead Scoring & MQL Definition

The Marketing Manager configures the scoring model that determines when a lead becomes a Marketing Qualified Lead (MQL) and is ready for sales handoff.

**Scoring dimensions:**

*Fit score* — how well the company matches the ideal customer profile. Factors: industry, company size, geography, product relevance. Populated from enrichment data (Clearbit, Apollo, ZoomInfo) and the information on the lead capture form. Configured once per tenant by the Marketing Manager.

*Intent score* — how strong the signals of purchase readiness are. Factors: number of touchpoints, recency and depth of engagement (page views, content downloads, event attendance), inbound versus outbound origin. Each factor is weighted, and the weights are configurable.

*Combined lead score* — a single 0–100 score computed from weighted fit and intent dimensions. Updated continuously as new signals arrive.

**MQL threshold:**
The Marketing Manager sets the score threshold above which a lead is automatically promoted to MQL status and entered into the SDR or sales handoff queue. Thresholds can differ per lead source channel, per industry segment, or per campaign. Leads that do not reach the MQL threshold remain in the nurture queue and continue to receive campaign touches.

**AI-assisted scoring:**
The platform's AI layer contributes a signal overlay to the score — analysing enrichment data, news signals, and behavioural patterns to surface leads that are showing buying intent even before they have crossed the threshold. AI suggestions are advisory; they do not override the configured scoring model unless the Marketing Manager explicitly configures auto-promote rules that reference the AI signal.

### 8.5 MQL Handoff to Sales

When a lead reaches MQL status, the handoff to sales is a structured, documented process — not a loose email or Slack message.

**Handoff flow:**
1. Lead reaches MQL score threshold, or the Marketing Manager manually promotes a lead
2. Lead enters the SDR queue (if an SDR layer exists) or the Inside Sales / Field Sales queue directly
3. The receiving rep is notified with a full context brief: lead source, score breakdown, engagement history, enrichment profile, and any notes left by the Marketing Manager
4. The Marketing Manager can see when the lead was picked up, by whom, and what happened to it — pipeline created, first meeting booked, or no action taken
5. If a lead sits in the handoff queue unclaimed beyond a configurable SLA, the Marketing Manager and the sales manager are both notified

**Handoff notes:**
When promoting a lead to MQL, the Marketing Manager can leave structured handoff notes — the specific opportunity they see, the product or segment they believe is relevant, and any intelligence about the company's situation gathered from campaign interactions. These notes are permanently attached to the lead record and travel with it through conversion to Account.

**Lead rejection and return:**
Sales can reject an MQL if they determine it is not ready — they must provide a reason. The rejected lead is returned to the Marketing Manager's queue with the rejection reason attached. This closed loop ensures the scoring model is continuously calibrated against real-world sales feedback.

### 8.6 Lead Nurture & Segmentation

Leads that are not yet ready for sales handoff stay in the marketing nurture queue. The Marketing Manager manages them through campaigns and sequences until their score crosses the MQL threshold.

**Segmentation:**
The Marketing Manager can create audience segments from any combination of lead attributes — industry, geography, score range, source channel, engagement behaviour, or custom fields. Segments are dynamic — as leads' attributes change, their segment membership updates automatically.

**Nurture sequences:**
Multi-touch sequences attached to a segment. Each step has a trigger (time delay, engagement event, or score change), a communication type (email, LinkedIn touch suggestion, or call task for an SDR), and branching logic based on how the recipient responded to the previous step.

**Suppression management:**
The Marketing Manager manages unsubscribes, bounces, and opt-outs directly in Clientera. Suppression rules cascade across all campaign types — a contact who unsubscribes from one campaign is suppressed from all automated outbound by default, configurable to channel-specific suppression.

### 8.7 Content & Asset Library

A centralised library of all marketing assets — email templates, brochures, case studies, product sheets, pitch decks, and landing page copy. Assets are versioned, tagged by product and campaign, and accessible to both the marketing team and the sales team for use in proposals and client communications.

When sales reps share documents with clients from within Clientera, they pull from this library. The Marketing Manager can see which assets are being used in sales conversations and which are not, creating a direct feedback loop between field usage and content strategy.

### 8.8 Marketing Analytics Dashboard

The Marketing Manager's primary performance view answers the questions that matter to marketing leadership.

**Pipeline attribution:**
Total pipeline value generated by marketing-sourced leads, broken down by campaign, channel, and time period. Shown as a funnel — leads generated, MQLs created, SQLs converted, deals opened, revenue won. Every pound of pipeline is traceable back to the campaign that originated it.

**Campaign performance:**
Side-by-side comparison of all active and completed campaigns. Metrics: leads generated, MQL conversion rate, cost per lead, cost per MQL, pipeline value per campaign, revenue influenced. Campaigns with exceptional or poor performance are surfaced as alerts.

**Lead velocity:**
How quickly leads are moving through the funnel from creation to MQL to first meeting. Velocity trends surface bottlenecks — if the MQL-to-meeting conversion rate is dropping, the Marketing Manager sees it before it becomes a pipeline problem.

**Channel mix analysis:**
Which channels are delivering the highest-quality leads — not just the most leads. Quality is measured by downstream conversion rate and average deal size, not just top-of-funnel volume.

**Sales feedback loop:**
Aggregate view of MQL acceptance and rejection rates by the sales team, broken down by campaign and segment. Rejection reasons are categorised and trended over time, giving the Marketing Manager the data needed to continuously refine the scoring model.

**Marketing influence reporting:**
Beyond pure attribution, the platform tracks marketing-influenced pipeline — deals where the account had at least one marketing touchpoint even if the lead originated from a rep or inbound channel. This gives a more complete picture of marketing's contribution to revenue.

### 8.9 Budget Management

The Marketing Manager tracks campaign spend directly in Clientera. Each campaign has an allocated budget. Spend is entered manually or pulled from a connected advertising platform. The budget view shows allocated versus spent and flags campaigns that are tracking over budget.

### 8.10 Integration with Sales Workflow

The Marketing Manager does not operate in isolation from the sales team — they share the same customer data.

- **Account enrichment** — the Marketing Manager can trigger enrichment on any company in the platform. Results are immediately visible to the sales team on the same account record.
- **Territory and ownership** — when creating campaigns targeting specific accounts or territories, the Marketing Manager can see which rep owns which account and can notify the relevant rep when their account shows campaign engagement.
- **Account-based marketing** — for named-account campaigns, the Marketing Manager works from the same account list as the sales team. Campaign engagement on a named account is surfaced on the Client Intelligence Card so the rep sees it before their next visit.
- **Event planning** — when a trade show or event is planned in a territory, the Marketing Manager can notify the relevant field reps so they can plan client meetings around it. Event attendance lists are importable as leads.

---

## 9. Field Sales Rep Features

### 7.1 The Daily Start — Morning Experience

When a rep opens the platform each morning they are presented with a **Today's Plan** screen. The platform has already prepared their day. They are not greeted with a blank dashboard.

Today's Plan contains:
- Scheduled visits for the day in optimised geographic order
- Overdue follow-ups that must be handled today — shown in red
- A count of client emails requiring attention, summarised by AI
- Overnight alerts — urgent client emails, missed calls, payment flags
- Daily target status — where the rep stands against their monthly goal
- Account news — if a client company has been in the news, it is surfaced here

### 7.2 Email Management

The platform connects to the rep's Gmail or Outlook account and organises emails **by client**, not by time. The rep sees a client-centric inbox, not a chronological one.

Features:
- Emails from known clients are automatically linked to the relevant client record
- AI surfaces only the emails that require attention — urgent, unanswered, or containing a question
- AI drafts a suggested reply in context — the rep edits and sends directly from the platform without opening their email client
- If an email contains a question about an order or quote, relevant data is pre-pulled into the draft reply
- Emails flagged as urgent — complaints, cancellation signals, payment disputes — are highlighted prominently
- Emails received during a visit are held and surfaced after check-out so the rep stays present during the meeting
- Emails from unknown senders at known companies trigger a new contact suggestion — one tap to add

### 7.3 Adding New Contacts

Three methods, all fast:

**Business card scanner** — rep points camera at a card, details are extracted automatically and linked to the existing company record or used to create a new one.

**Manual entry** — minimal required fields. Name, number, email, role. Designed for speed.

**Email auto-detection** — when a rep receives an email from an unrecognised sender at a known company, the platform suggests adding them as a contact with one tap.

Once added, the platform attempts to enrich the contact profile by pulling publicly available information including LinkedIn profile data, company role, and professional background.

Every contact is owned by the rep's team. No other team can access it.

### 7.4 Pre-Visit Experience — Travelling to the Client

While the rep is en route, the platform prepares them:

- Pre-visit brief loads automatically — last visit summary, open follow-ups, SO checklist status, last order details, credit status, recent emails from the client
- Contact profile for the person they are meeting — professional background, history with the company, what they have previously raised or asked about
- AI-suggested talking points — based on open items, pipeline stage, and what the client last discussed
- Competitor notes from previous visits — surfaced as a reminder
- One-tap ETA message to the client if the rep is running late — sent directly from the platform

### 8.5 Arriving at the Client — Check-In

The platform offers multiple check-in methods to accommodate every device and situation. Every method logs a timestamped, source-tagged visit record immediately visible to the manager in the live dashboard.

**GPS proximity check-in — primary method on phones and cellular tablets:**
When a rep is within a configurable radius — default 200 metres — of a known account location, the mobile app prompts automatically. Rep confirms with one tap. Check-in is timestamped and logged as GPS-verified.

**QR code check-in — available on any device with a camera:**
Rep scans the QR code placed at the client's premises using their phone, tablet, or laptop webcam. Immediately triggers a check-in logged as QR-verified. No GPS required. Particularly valuable in buildings where GPS signal is weak, on WiFi-only tablets, or on laptops. Each QR code encodes a cryptographically signed token validated server-side — it cannot be spoofed or reused outside the client location.

**WiFi positioning check-in — WiFi-only tablets:**
On devices without GPS, the platform uses browser or OS WiFi positioning. Accuracy is lower — typically 20 to 100 metres. Check-in is logged as WiFi-verified with a reduced confidence flag visible to the manager.

**Manual check-in — always available as a fallback:**
Rep opens the account and confirms they are at the location. Logged honestly as manually-confirmed. Manager can see no technical verification was used. Never blocked — a rep can always log a visit.

**Common to all check-in methods:**
- If the account is owned by another rep or team, check-in is blocked and the manager is notified
- On check-in, the rep sees a quick snapshot — last visit date, what was promised, pipeline stage, SO checklist progress
- Rep selects or adds the contact they are meeting
- Unscheduled visits are flagged as unplanned but logged normally

### 7.6 During the Visit

Designed for near-zero friction:

- **Voice notes** — rep hits record and speaks naturally. AI transcribes in the background. No typing required during the meeting.
- **Photo capture** — product placement, whiteboards, signage, delivery areas — all tagged to the client record
- **Objection logger** — pre-defined tags. One tap to log price concern, competitor mentioned, decision maker absent, and similar. No typing.
- **Pipeline progression** — rep can advance the deal to the next stage from within the visit screen
- **On-the-spot quotation** — rep builds a rough quote, shows it to the client on screen, and it is saved to the record
- **SO checklist** — rep can tick off items live during the meeting
- **New contact** — if the rep meets someone new during the visit, they can add them instantly via card scan or quick form

### 7.7 Leaving the Client — Check-Out

- GPS detects departure or rep taps Check Out
- Visit duration is automatically calculated and logged
- Platform immediately prompts: *"How did it go?"* — three options: Positive, Neutral, Needs Attention. One tap.
- Platform prompts: *"Any follow-ups?"* — rep adds tasks or AI suggests them based on the voice note content
- Next visit suggestion — if the account has a frequency rule, the platform suggests scheduling the next visit with one tap
- Voice note is transcribed and structured into meeting notes automatically — rep reviews and confirms before saving

### 7.8 Follow-Up & Task Management

- Every follow-up has an owner, a due date, and a client link
- Rep sees their follow-ups in a simple prioritised list — overdue in red, due today in amber, upcoming in grey
- Reminders are sent via WhatsApp and email — gentle the day before, firmer on the day
- One tap to mark complete, snooze, or reassign
- If a follow-up involves sending a document, the rep can attach from the document library and send directly from the task
- Follow-ups overdue by 3 or more days automatically escalate to the manager's view

### 7.9 Account & Contact Management

- Reps request new accounts. Manager or admin approves before the account is active.
- Once approved, the account is locked to the rep and their team
- Rep completes the company profile — name, address, industry, size, key contacts
- Platform attempts to auto-enrich company data — company information, news, public financials if available
- Rep can flag account status — Prospect, Active, At-Risk, Dormant
- Prospect accounts use the pipeline as a conversion progression rather than a deal tracker

### 7.10 Phone Call Tracking

- When a rep calls a client number saved in the platform, the call is automatically detected and logged against the client record (subject to device permissions)
- Duration tracked, timestamp logged
- After the call ends, the platform prompts for a one-tap outcome and optional voice note
- If call recording is permitted by device, platform policy, and applicable law, the recording is stored against the client record and transcribed by AI
- Missed incoming calls from known clients are flagged — *"[Client Name] called and was not answered. Follow up?"*
- For companies using VoIP systems such as RingCentral, Aircall, or Twilio, call data is pulled via integration automatically
- Manual call logging is always available as a fallback

### 7.11 Calendar Meeting Tracking

- Sync with Google Calendar and Outlook Calendar
- Calendar events linked to known clients appear automatically in the client timeline
- Pre-meeting brief is triggered the same way as a physical visit
- For video meetings on Zoom, Teams, or Google Meet, the platform integrates with connected transcription tools (Fireflies, Otter.ai etc.) to pull meeting notes and action items automatically
- After any meeting, AI produces a structured summary — what was discussed, what was agreed, next steps — sourced from the transcription integration
- Manual notes are always available if no transcription integration is connected

### 7.12 The Unified Client Timeline

Every client record contains a single chronological timeline showing all interactions regardless of channel:

- Visits — with GPS verification status, duration, notes, photos, sentiment
- Phone calls — with duration, recording if available, transcript if captured
- Emails — sent and received, linked automatically
- Calendar meetings — with notes and action items from transcription integrations
- Quotes sent — with version history
- POs received
- SOs created
- Follow-ups — open and closed
- Pipeline stage changes — with who changed them and when

Every item in the timeline shows its source tag so it is always clear whether data was system captured, rep entered, or integration synced.

### 7.13 Rep Analytics — Personal Scorecard

Reps have access to their own performance data answering one fundamental question — *"Am I going to hit my number?"*

- Target vs actual — revenue, visits, quotes sent, POs received — current month vs last month
- Pipeline value by stage — total value of deals at each stage
- Win rate — quotes sent vs POs received
- Average deal size and trend
- Visit frequency compliance — are they meeting frequency rules on key accounts
- Follow-up completion rate — tasks closed on time vs overdue
- Best performing clients — by revenue and by engagement
- Dormant accounts — assigned accounts not visited in 30, 60, or 90 days — configurable
- Activity vs results — are visits converting to pipeline movement

### 7.14 Expense Logging

- Auto-captured mileage based on GPS movement during the working day
- Manual expense entry — description, amount, category, receipt photo
- Expenses linked to specific client visits where applicable
- Submitted to manager or back office for approval
- Status tracking — submitted, approved, queried, paid

### 7.15 Competitor Intelligence

- During or after any visit, rep can log competitor activity — which competitor, what was discussed, what threat level
- Pre-defined competitor list managed by admin, with ability to add new ones on the fly
- Competitor mentions are aggregated across the whole platform and surfaced to managers and directors as market intelligence

### 7.16 On-the-Spot Quotation Builder

- Rep selects products or services from a pre-configured catalogue
- Quantities, pricing, and applicable discounts applied
- Quote is shown on screen — can be shown to the client live during the meeting
- Quote is saved to the client record and pipeline
- Quote can be emailed to the client directly from the platform
- If the quote value exceeds the rep's approval threshold, it is flagged for manager approval before sending

---

## 9. Desk & Inside Sales Rep Features

### 9.1 Overview

Desk-based inside sales reps conduct their entire sales process from a laptop or desktop — calls over Zoom, Teams, or Google Meet, email, and LinkedIn. They never leave their desk. GPS check-ins and route planning are irrelevant to them. The platform serves them through the full desktop web app with a rep persona that mirrors the field rep experience but is structured around communication rather than physical movement.

The core data model is identical. Visits become meetings. Check-ins become meeting starts. Voice notes become call transcripts. The pipeline, follow-ups, SO workflow, client intelligence card, and analytics are completely shared between field and desk reps.

### 9.2 The Daily Start — Today's Schedule

When a desk rep opens the platform each morning they see a **Today's Schedule** — a timeline view of their day, not a route map.

- Every scheduled call and meeting in order, with client name, platform (Zoom/Teams/Meet/phone), duration, and a colour-coded readiness status
- A morning digest — client emails requiring attention summarised by AI
- Overdue follow-ups surfaced at the top in red
- Daily target status — where they stand against their monthly goal
- Overnight alerts — urgent emails, missed calls, payment flags from the previous evening
- Account news — if a client company has been in the news, surfaced here

### 9.3 Pre-Meeting Brief — Calendar-Triggered

Fifteen minutes before a scheduled meeting, the platform automatically surfaces the client intelligence card for that account. This is identical to the pre-visit brief a field rep receives while driving to a client — same content, same AI-generated talking points, same contact profile.

The brief contains:
- Last interaction summary — last call, last email, last meeting — and what was discussed
- Open follow-ups from previous interactions
- Pipeline stage and SO checklist status
- Contact profile for the person they are meeting — professional background, relationship history
- Recent emails from the client — including any unanswered ones
- AI-suggested talking points based on open items and pipeline stage
- Competitor notes from previous interactions

The desk rep walks into the Zoom call as prepared as the field rep walking into a client office.

### 9.4 Starting a Meeting — One-Click Meeting Start

One-click meeting start replaces GPS check-in for desk reps. The rep clicks **Start Meeting** on the scheduled event card. The meeting is immediately:
- Timestamped and logged against the client record
- Visible to the manager in the live activity feed as an active meeting
- Tagged as calendar-triggered in the verification badge

If the meeting is on Zoom, Teams, or Google Meet, the join link is surfaced directly in the platform — one click opens the call in the native platform. The rep never has to hunt for the link.

If a meeting is unscheduled — an impromptu call with a client — the rep can start a manual meeting from the client record. It is flagged as unplanned but logged normally.

### 9.5 During a Meeting — In-App Controls

The app sits alongside the video call window — it does not replace the video platform. During an active meeting the desk rep has quick-access controls without switching contexts:

- **One-tap objection logging** — price concern, competitor mentioned, decision maker absent — same predefined tags as the field rep
- **Quick notes** — short text notes that attach to the meeting record
- **Pipeline stage update** — move the deal forward without leaving the view
- **SO checklist** — tick off items live during the meeting
- **Competitor mention** — log which competitor came up and what was said
- **Contact note** — add something to the contact profile discovered during the call

If Fireflies or Otter is connected, transcription is running in the background automatically. The desk rep does not need to do anything during the call for notes to be captured.

### 9.6 Ending a Meeting — One-Click Meeting End

Rep clicks **End Meeting**. Duration is automatically logged. The platform prompts identically to field rep check-out:

- *"How did it go?"* — Positive, Neutral, or Needs Attention. One tap.
- *"Any follow-ups?"* — AI suggests follow-up tasks from the transcript if available. Rep confirms or edits.
- *"Schedule next call?"* — if the account has a frequency rule, the platform suggests scheduling the next touchpoint with one tap.

The meeting transcript from Fireflies or Otter arrives within minutes, is structured into meeting notes automatically, and is linked to the client timeline. The rep reviews and confirms — minimal effort.

### 9.7 Email as the Primary Workflow

For desk reps, email is where a significant portion of selling happens. The email management workspace becomes the central view between calls.

- Client emails organised by account — not by time. Everything about Acme Corp in one place.
- AI surfaces only the emails requiring attention — urgent, unanswered, or containing a question
- AI drafts a suggested reply in context of the full client record — the rep edits and sends without opening Gmail or Outlook
- One-tap snooze — *"remind me about this before my call with them tomorrow"*
- One-tap follow-up creation from any email
- Urgency flags — complaints, cancellation signals, payment disputes highlighted prominently
- Emails from unrecognised senders at known companies trigger a new contact suggestion

### 9.8 Outbound Calling from the Web App

For desk reps making outbound calls outside of scheduled meetings:

- Click-to-call from any contact record — dials via the connected VoIP system if integrated (RingCentral, Aircall, Twilio) or opens the native dialler
- Call is logged automatically if VoIP integration is connected
- Manual call log always available — one-tap outcome plus optional voice note
- After any call the platform prompts for outcome and follow-up creation

### 9.9 Presentation Mode — Tablets and Shared Screens

When a desk rep is sharing their screen during a video call, or using a tablet in a client meeting, Presentation Mode provides a clean client-facing view:

- All internal system UI is hidden — no pipeline stages, no rep notes, no system fields
- Quote displayed clearly — line items, totals, terms — in a professional format the client can read
- Product catalogue in a visual grid layout
- SO checklist shown as a clean progress view
- Rep can switch in and out of Presentation Mode without interrupting the call

### 9.10 Desk Rep Analytics

Identical KPIs to field rep analytics adapted for the inside sales context:

- Calls made today, this week, this month — vs target
- Meetings completed — vs scheduled
- Email response time — average time to reply to client emails
- Follow-up completion rate
- Pipeline value and movement this week
- Win rate — quotes sent vs POs received
- Average deal size and trend
- Accounts not contacted in 14, 30, or 60 days — configurable

---

## 10. Management & Hierarchy Features

### 10.1 The Manager Dashboard — Live Operations View

The manager dashboard is a real-time view of their team's activity. It is designed around the principle of exception-based management — if everything is fine, the dashboard is calm. If something needs attention, it is impossible to miss.

For a mixed team of field and desk reps the dashboard shows both simultaneously:
- Which reps are in the field, at a client site, or have not yet started their day
- Live map of rep locations and current client check-ins
- Red flags requiring attention — overdue follow-ups, missed scheduled visits, urgent client emails unanswered, stalled deals
- Team performance summary — visits today, calls made, quotes sent, POs received
- Manager's own action list — approvals pending, reassignments needed, escalations from reps

### 8.2 Rep Monitoring

The platform provides visibility without micromanagement. The emphasis is on patterns and outcomes, not real-time surveillance.

- GPS-verified check-ins confirm visits happened without requiring the manager to ask
- Visit duration shows how much time is being spent at each account — useful for coaching
- Activity vs results correlation — is the rep's visit volume translating into pipeline movement
- Data quality indicator — what percentage of the rep's activity is system-verified vs manually entered
- Activity trend — is a rep's engagement level dropping week on week

### 8.3 Territory & Account Oversight

- Full view of all accounts in the team — status, last visit, pipeline stage, visit frequency compliance
- Accounts not visited within a configurable threshold — 14, 30, 60, or 90 days — flagged automatically
- Unassigned accounts queue — accounts without a rep, with AI-powered assignment suggestions
- Conflict detection — if any account ownership overlap is detected it is flagged immediately
- Prospect pipeline — accounts reps have identified as new business opportunities, pending manager approval

### 8.4 Account Reassignment

Managers can reassign accounts within their sub-tree. Cross-team reassignment requires company admin authority.

The reassignment workflow:
- Initiating person states a reason — rep leaving, territory rebalance, account too large, conflict of interest
- Current account owner is notified — they cannot block but are informed
- New owner receives full context — complete client timeline, open follow-ups, pipeline status
- Optional grace period — outgoing rep retains read access for a defined number of days to brief the incoming rep
- Reassignment is permanently logged in the audit trail

**Temporary reassignment for absence cover:**
- A rep on leave can be covered by a colleague
- Covering rep receives read access and can check in and log activity
- Covering rep cannot modify the pipeline, reassign contacts, or alter the SO checklist
- Coverage reverts automatically on the return date
- A log of all covering activity is presented to the returning rep on their first day back

**AI-powered reassignment suggestions:**
When an account needs assigning, the AI suggests candidates based on geographic proximity, industry expertise, current workload, relationship history, and conversion track record. The AI suggests — a human decides.

### 8.5 Pipeline Oversight

- Full pipeline view across the team — every deal, every stage, total quoted value, total PO value
- Deals that have not progressed in a configurable number of days are flagged as stalled
- Conversion rates — quotes to POs across the team and per individual rep
- PO received notifications — immediate alert to manager, triggers back office SO workflow
- Pipeline forecast — based on deals in late stages, what is likely to close this month
- Quote vs PO gap analysis — which clients consistently negotiate down and by how much

### 8.6 Follow-Up & Task Oversight

- All overdue follow-ups across the team in one view
- Escalated items — follow-ups overdue by 3 or more days surfaced automatically
- Manager can reassign tasks between reps
- Manager can create tasks and assign them directly to reps
- Client response tracking — if a client email has gone unanswered for more than 24 hours, manager is notified

### 8.7 Team Communication

- Manager can message reps directly within the platform, contextual to a specific client or task
- Approval workflows — quote approvals, new account requests, expense claims — all managed in-platform with full context attached
- End of day team summary — auto-generated and delivered to the manager. No manual reporting from reps required.

---

## 11. Director & Owner Features

### 9.1 Business Health Dashboard

The director's home screen answers one question at a glance — *"Is the business on track?"*

- Total pipeline value — quoted and PO committed, side by side
- Revenue forecast for current month and quarter
- Team performance summary — each manager's team shown as a green, amber, or red indicator
- Top 5 accounts by pipeline value
- Top 5 at-risk accounts
- Critical alerts only — items that genuinely require director-level attention

### 9.2 Cross-Team Visibility

Directors see across all teams while each team remains isolated from the others:

- Side-by-side team and manager performance comparison
- Territory coverage analysis — which areas are over-served and which are underserved
- Detection of parent company and subsidiary conflicts — cases where two teams may unknowingly be approaching related companies
- Total company pipeline in a single consolidated view

### 9.3 Business Analytics

- Revenue pipeline by stage across the whole business
- Forecast accuracy over time — how reliable is the pipeline as a predictor of actual revenue
- Win and loss trends — by industry, region, account size, and time period
- Competitor landscape — aggregated from all rep-logged competitor mentions across the platform
- Average deal size trends
- Client retention signals — accounts that were active and have gone quiet
- New business vs existing business ratio

### 9.4 Manager Performance View

- Team KPI consistency — is the team hitting targets reliably or is performance volatile
- Forecast accuracy per manager — do they over-promise and under-deliver
- Account health in their territory — are accounts healthy or deteriorating
- Data quality in their team — are reps logging properly
- Coaching effectiveness — when a rep was flagged, did the manager intervene and did it improve

### 9.5 Strategic Account Management

- Directors can flag any account as strategic, elevating it to permanent visibility on the director dashboard
- Complete relationship history of any strategic account is accessible regardless of which team manages it
- Company-level visit frequency rules can be set for strategic accounts, overriding team-level settings
- If a strategic account goes a configurable number of days without a visit, the director is notified directly

### 9.6 Director Approval Authority

- Quotes above a defined value threshold
- Discounts beyond a defined percentage
- New accounts in sensitive territories or industries
- Account reassignments between teams
- Changes to company-wide mandatory KPIs or locked workflows
- User onboarding at the highest hierarchy levels

### 9.7 Board-Ready Reporting

- One-tap generation of a formatted business summary for stakeholder presentation
- Scheduled weekly business review report delivered every Monday morning
- Company-wide alert thresholds — if total pipeline drops below a defined value, director is notified immediately

---

## 12. Back Office & Admin Features

### 10.1 Two Distinct Personas

**System Admin** configures and maintains the platform — hierarchy, users, permissions, integrations, keys, and compliance settings.

**Back Office Operations** handles the business processes triggered by sales activity — SO creation, account onboarding, document management, approvals.

In a small company these may be the same person. In a large company they may be entirely different departments. The platform supports both through the role builder.

### 10.2 System Admin Capabilities

**User management:** Add, edit, deactivate users. Bulk import via spreadsheet. Assign to hierarchy positions. Manage licenses. Structured offboarding workflow — account reassignment queue, access revocation, data retention.

**Hierarchy management:** Build and modify the org structure. Add or remove levels. Rename levels without breaking historical data. Preview changes before applying.

**Integration management:** Connect and monitor all third-party integrations. Monitor sync health and error rates. Handle integration failures with guided resolution. Manage OAuth token health. Configure data field mapping for ERP integrations.

**BYOK key management:** Register, rotate, and revoke encryption keys and API keys for all integrations. Monitor key health and expiry. Zero-downtime key rotation. Full key usage audit log.

**Data management:** Manage master data — industries, territories, currencies, product categories. Duplicate account detection and merge tools. Bulk import from CSV or previous CRM. Data export and backup. Data retention policy configuration.

**System configuration:** Company profile and branding. Notification settings. Visit rule configuration — check-in radius, GPS verification requirements, minimum visit duration thresholds. Pipeline stage definitions. SO workflow configuration. Approval threshold settings.

### 10.3 Back Office Operations Capabilities

**SO creation workflow:**
When a rep logs a PO received, back office receives a structured notification containing all deal context — client details, rep name, quote reference, quoted value, PO document, PO value, and special terms. Back office creates the SO in the connected ERP or system of record, links the SO number back to the client record in the platform, and updates the pipeline stage. The rep and manager are notified automatically with the SO reference.

**Account onboarding:**
When a new account is approved, back office receives a task to complete setup — KYC checks if required, credit limit assessment, payment terms configuration. Account is formally activated and the rep is notified.

**Document management:**
Central repository for all client-facing documents — price lists, brochures, terms, contract templates. Version controlled. Reps access and send from within the platform. When a document is updated, old versions are archived and reps automatically receive the new version. Access is logged in the audit trail.

**Approval queues:**
New account requests, high-value quotes, expense claims, credit limit increase requests, and data correction requests are all managed through structured approval queues with full context attached to each item.

**Compliance operations:**
Data Subject Access Requests, right to erasure requests, recording consent records, and breach response coordination are all managed through the compliance centre.

### 10.4 Back Office Dashboard

Task and queue management view:
- Incoming queue — new POs, new accounts, pending approvals
- In progress — SOs being created, accounts being verified
- Overdue — items past SLA, shown in red
- Completed today
- Integration status — ERP sync health
- Document library
- Compliance queue

### 10.5 Boundaries

Back office cannot see real-time rep locations. They cannot modify visit notes or meeting records. They cannot reassign accounts. They cannot change pipeline stages directly. They cannot access recordings or transcripts unless specifically granted.

---

## 13. The Intelligent Daily Co-Pilot

The co-pilot is the platform's core intelligence layer for reps. It removes cognitive load by thinking ahead so the rep does not have to.

### 11.1 Morning Briefing

Every morning the platform generates a personalised daily plan for each rep:

- Visits suggested based on account frequency rules, geographic proximity, pipeline urgency, and overdue follow-ups
- Route optimised by geography — clients in the same area grouped together to minimise travel time
- For each planned visit — a brief summary of what the rep needs to know before they arrive
- Priority flag on accounts that are overdue for a visit or have urgent open items
- Email digest — client emails requiring attention today, summarised
- Personal target status — where the rep stands and what they need to do today to stay on track

### 11.2 Area Intelligence

When a rep is visiting clients in a specific area, the platform surfaces additional suggestions:

- Other assigned accounts within a defined radius that have not been visited recently
- Prospect accounts nearby that have been dormant
- *"You're in Andheri today. Here are 3 accounts within 2km you haven't visited in 30 days."*

### 11.3 Next Action Intelligence

After every interaction — visit, call, email, meeting — the platform suggests the next logical action:

- Based on the pipeline stage of the account
- Based on what was discussed in the visit notes or transcript
- Based on open follow-ups and their due dates
- Based on the account's visit frequency rule

### 11.4 End of Day Summary

At the end of each working day the platform generates a summary for the rep:
- Visits completed
- Calls made and logged
- Follow-ups closed
- Emails handled
- New contacts added
- Pipeline movements made
- Unfinished items rolling to tomorrow with priority flags
- Mileage and expense log for review

---

## 14. Client Intelligence Card

The client intelligence card is the central view for any account. It is the first thing a rep sees when they open a client record and it answers every question they might have before walking into a meeting.

### 12.1 Company Information

- Company name, industry, size, address, website
- Auto-enriched data — company description, news, public financial information if available
- Account status — Prospect, Active, At-Risk, Dormant
- Account tier — configurable by the company
- Assigned rep and team
- Account creation date and history

### 12.2 Contact Profiles

For every contact at the company:
- Name, role, email, phone
- LinkedIn-enriched professional background
- Relationship history — all interactions this contact has been part of
- Notes — what they care about, their communication preferences, their role in the buying decision
- Last contacted date

### 12.3 Financial Summary

- Credit limit and current utilisation
- Payment terms
- Last order details — date, value, products or services
- Outstanding invoices if ERP is connected
- Order history and trend

### 12.4 Pipeline & SO Status

- Current pipeline stage
- Quoted value and PO value tracked separately
- SO checklist progress
- Time in current stage
- Days since last meaningful interaction

### 12.5 Open Items

- All open follow-up tasks — owner and due date
- Unanswered emails
- Pending approvals
- SO checklist incomplete items

### 12.6 Unified Timeline

Complete chronological history of all interactions — visits, calls, emails, meetings, quotes, POs, SOs, follow-ups. Each item shows its source tag and can be expanded for full detail.

---

## 15. Pipeline & Configurable Commercial Flow

### 15.1 Configurable Pipeline Entity Chain

The commercial flow from deal to fulfilment is fully configurable per tenant. The platform supports a set of standard entity types that can be enabled, disabled, and ordered to match any organisation's commercial process.

**Standard entity types (all optional except Deal):**

| Entity | Description |
|---|---|
| **Deal** | The sales opportunity. Always present. |
| **Service Order Request (SOR)** | A request to create a Service Order. Created by a rep, distributor, or proxy. Goes through a configured approval and routing flow before becoming an SO. |
| **Service Order (SO)** | The confirmed operational instruction. Created from an approved SOR or directly from a Deal depending on configuration. |
| **Proforma Invoice** | A pre-invoice document confirming items and pricing. Created in external system or platform after SO confirmation. Optional — configurable per tenant. |
| **ETA Notification** | Ops sets the expected dispatch date and notifies the rep/distributor. Always part of the SO — not a separate entity, but a tracked event in the chain. |
| **Dispatch Date Confirmation** | Ops confirms the actual dispatch date. Triggers the ASN if enabled. Always part of the SO — tracked event in the chain. |
| **Advance Shipment Notice (ASN)** | Formal shipment notification document sent to the rep/distributor when goods are dispatched. Contains line items, quantities, dispatch date, ETA, and shipment reference details. Optional — configurable per tenant. |
| **Invoice** | The final billing document. Generated after dispatch confirmation (and ASN if enabled). |

**Default flow:**

```
Deal → SOR → SO → Proforma Invoice → ETA Set → Dispatch Date Confirmed → ASN → Invoice
```

**Example alternative flows:**

```
Simple direct sales:
Deal → SO → ETA Set → Dispatch Date Confirmed → Invoice

Without Proforma or ASN:
Deal → SOR → SO → ETA Set → Dispatch Date Confirmed → Invoice

Without ASN only:
Deal → SOR → SO → Proforma Invoice → ETA Set → Dispatch Date Confirmed → Invoice
```

The flow, which entities are mandatory, and which are optional is configured by the company admin. Once configured, the platform enforces the sequence — an SO cannot be created without an approved SOR if SOR is enabled, and so on.

### 15.2 Stage Progression Rules

- Reps and distributors move deals forward through stages manually or via configured workflow triggers
- Backward movement is permitted but requires a reason (minimum 10 characters)
- Each stage transition is logged in the audit trail with actor, timestamp, and reason
- Configurable entry requirements can prevent a stage transition until conditions are met — for example a quote must be attached before moving to Quotation stage

### 15.3 Service Order Request (SOR)

The SOR is a formal request to fulfil a deal. It sits between the Deal and the Service Order and enables a configurable routing and approval process before operational commitment.

**Who can create an SOR:**
- Sales reps
- Distributors
- Proxy creators — an internal user authorised to create an SOR on behalf of a distributor or rep who cannot access the system. The SOR is attributed to the original party; the proxy creator is logged separately.

**SOR routing:**
Every SOR is evaluated against the tenant's configured workflow rules. Based on those rules it is routed through one or more stages — approval, costing, revision, sign-off — before being converted to an SO. See §17.2 for the full workflow engine.

**SOR states:**
`draft` → `submitted` → `in_review` → `pending_costing` → `sent_back` → `approved` → `converted_to_so` → `rejected` → `cancelled`

Not all states are reached in every flow. The active states depend on which workflow stages apply.

**Custom fields:** Any custom fields assigned to the SOR form or SOR document are available on every SOR (see §36).

### 15.4 Proforma Invoice

The Proforma Invoice step is optional and configurable per tenant. When enabled, a Proforma is generated after the SO is confirmed by Operations. The Proforma is the first document in the fulfilment sequence — it confirms what will be shipped and at what price, before the goods move.

**Default position in chain:** SO → **Proforma Invoice** → ETA Set → Dispatch Date Confirmed → ASN → Invoice

**Source — configurable per tenant:**
- **External system as source** — Proforma Invoices are created in a third-party system (ERP, billing system) and pushed to the platform via integration. The platform receives them, links them to the correct SO by reference, and triggers the approval flow. The platform does not create the Proforma internally in this mode.
- **Platform as source** — Proforma Invoices are created directly in the platform against the SO.

**Approval flow:**
1. Proforma arrives or is created against the SO
2. Routed to the user(s) with Proforma approval permission — no specific role required, permission-based only
3. Approver can approve individually or bulk-approve multiple Proformas in one action
4. On approval → Proforma is sent to the originating Rep or Distributor

**Batch processing:**
When an external system pushes multiple Proformas simultaneously, all resulting Proformas enter the approval queue together. The approver sees them as a batch and can approve all, approve selectively, or reject individual ones with a reason.

Whether the Proforma step exists is a tenant-level configuration. Tenants that do not need it skip to ETA and Dispatch.

**Custom fields:** Any custom fields assigned to the Proforma Invoice form or Proforma Invoice document are available on every Proforma (see §36).

### 15.5 Operations — ETA Notification and Dispatch Date Confirmation

After the Proforma is approved, Operations manages the fulfilment timeline. Two distinct operations exist and both trigger notifications to the relevant parties.

**ETA — bulk upload or API**

Operations uploads a file (CSV or via API) mapping SO references to ETAs. The platform matches each row to the corresponding SO, updates the ETA field, and immediately notifies the originating Rep or Distributor.

- Notification sent to: originator (rep or distributor), account manager if different
- Notification content: SO reference, SOR reference, ETA date, items and quantities
- Notification channels: in-app, email, WhatsApp — per recipient's configured preferences
- SOs with no match in the upload are flagged in an error report
- Can also be done via third-party logistics or WMS push (see §39)

**Dispatch Date Confirmation — bulk upload or API**

Operations uploads a file mapping SO references to confirmed dispatch dates. When a dispatch date is set, the SO status updates to `dispatched` and the chain progresses.

- Notification sent to: originator (rep or distributor), account manager if different
- Notification content: SO reference, SOR reference, confirmed dispatch date, items and quantities, any shipment reference details entered by Ops
- If ASN is enabled for this tenant, the dispatch date confirmation automatically triggers the ASN (see §15.6)

Both operations are logged in the audit trail with the uploading user, timestamp, and count of records updated.

### 15.6 Advance Shipment Notice (ASN)

The ASN is an optional step in the commercial chain, configurable per tenant. When enabled, it is automatically generated when Ops confirms the dispatch date. The ASN is a formal document notifying the recipient that their shipment is on its way, giving them everything they need to prepare to receive it.

**Default position in chain:** SO → Proforma → ETA Set → Dispatch Date Confirmed → **ASN** → Invoice

**The ASN contains:**
- ASN reference number (auto-generated)
- SO reference and SOR reference
- Shipper details (the sending organisation)
- Recipient details (the distributor or rep the order is addressed to)
- Line items — SKU, description, quantity, UoM for each item being shipped
- Dispatch date
- Expected arrival date / ETA
- Shipment reference details — courier name, vehicle number, AWB number, tracking link, or any other reference Ops enters
- Any notes from Operations

**Source — configurable per tenant:**
- **Platform as source** — ASN is generated directly in the platform when Ops confirms the dispatch date. Platform auto-populates line items from the SO/Proforma. Ops reviews, adds shipment reference details, and sends.
- **External system as source** — ASN is generated in a third-party logistics, WMS, or ERP system and pushed to the platform via integration. Platform receives it, links it to the correct SO chain by reference, and delivers it to the rep/distributor. The platform does not generate the ASN internally in this mode.
- **Bidirectional** — platform generates the ASN and simultaneously pushes it to an external system (e.g. distributor's own WMS needs to receive it). Both sides get the document.

**Trigger:**
ASN is auto-generated the moment Ops confirms the dispatch date, using the line items from the SO/Proforma. Ops can review and add shipment reference details before the ASN is sent, or it can be sent immediately if configured for auto-send.

**Delivery:**
- Sent to the originating Rep or Distributor
- Delivered via in-app notification, email, and/or WhatsApp — per recipient's configured preferences
- Visible as a document in the platform, linked to the SO chain
- Downloadable as a PDF
- Can be pushed to a third-party system via integration (see §39)

**ASN states:** `draft` → `sent` → `acknowledged` (optional — recipient can acknowledge receipt)

**Custom fields:** Any custom fields assigned to the ASN form or ASN document are available on every ASN (see §36). For example, a tenant could add a `cold_chain_required` boolean field that appears on the ASN document and drives handling instructions.

Whether the ASN step exists is a tenant-level configuration. The flow without ASN goes directly from Dispatch Date Confirmed to Invoice.

### 15.7 Invoice

The Invoice is the final billing document, created against the SO after dispatch.

**Default position in chain:** SO → Proforma → ETA Set → Dispatch Date Confirmed → ASN → **Invoice**

**Source — configurable per tenant:**
- **External system as source** — Invoice created in ERP or billing system, pushed to platform. Platform links it to the SO and triggers target attribution.
- **Platform as source** — Invoice created directly in the platform against the SO.

**Target attribution:**
When an Invoice is confirmed, the platform automatically calculates target attainment for the originating Rep or Distributor and everyone in their attribution chain (see §17.2). Attribution fires based on the tenant's configured timing — real-time or periodic reconciliation.

The Invoice is permanently linked to the full chain: Deal → SOR → SO → Proforma → ASN → Invoice.

**Custom fields:** Any custom fields assigned to the Invoice form or Invoice document are available on every Invoice (see §36).

### 15.8 Full Chain Tracking, Audit Trail & Live Status Visibility

Whatever the configured flow, every entity in the commercial chain is permanently linked and fully traceable. Two distinct capabilities exist for every entity — live status visibility and immutable audit trail. Both apply to SOR, SO, Proforma Invoice, ASN, and Invoice.

**The default chain:**
```
Deal → SOR → SO → Proforma Invoice → ETA Set → Dispatch Date Confirmed → ASN → Invoice
                                          ↑                ↑
                                     Ops notifies      Ops notifies
                                     rep/distributor   rep/distributor
                                     of ETA            + triggers ASN
```

From any entity in the chain, any user with access can navigate to any other entity in one click.

---

#### Live Status Visibility — where is it right now

Every SOR, SO, Proforma Invoice, ASN, and Invoice shows a clear, real-time status panel visible to everyone who has access to that entity. This is not history — it is the current state.

**The status panel shows:**
- Current position in the chain (e.g. "Proforma approved — awaiting dispatch confirmation")
- Current workflow stop (e.g. "At Costing Team", "Awaiting Proforma Approval", "With Ops")
- The specific person or queue it is currently sitting with, by name
- How long it has been at the current stop
- The next expected step
- Current approval status at the current stop (e.g. "Pending Level 1 approval — waiting on Rahul Mehta")
- Whether any action is overdue (highlighted if SLA or configured time limit exceeded)
- A visual timeline of all stops — completed stops shown with green tick, current stop highlighted, pending stops greyed out

**Who can see it:**
- The originator (rep or distributor) who created the SOR can always see where their request is
- Everyone in the workflow chain can see the full status
- The manager and director above the originator can see it
- Any user with explicit access to that entity can see it
- Distributors see the status of their own SORs and the Proformas, ASNs, and Invoices addressed to them — in plain language, not internal workflow terminology

---

#### Audit Trail — immutable record of everything that happened

Every action on every commercial chain entity is recorded permanently and cannot be edited or deleted.

**Every audit event records:**
- The entity and its reference number
- The action taken
- Who did it — full name, role, and user ID
- When — exact timestamp
- What changed — old value and new value for every field change
- Which workflow stop and approval level it was at
- The reason — for approval decisions, send-backs, and field changes that require justification

**Specific events always captured:**
- SOR created (by whom, on behalf of whom if proxy)
- SOR submitted, assigned, modified at each workflow stop (every field change: old → new)
- Discount or price change applied at costing stop (original → revised, by whom)
- Approval decisions (approve / reject / rework, by whom, with reason)
- Send-backs (to which stop, with reason)
- SO created from approved SOR
- Proforma received from external system or created in platform
- Proforma approval decision (by whom)
- Proforma sent to rep or distributor
- ETA set or updated (old ETA → new ETA, by whom, notified parties)
- Dispatch date confirmed (by whom, notified parties)
- ASN generated (auto or manual)
- ASN sent to recipient (when, to whom, delivery channel)
- ASN acknowledged by recipient (if applicable)
- Invoice created and linked to chain
- Target attainment updated (which rep/distributor, amount credited)

**Audit trail visibility:**
- Every user sees the audit trail for entities they have access to
- Full chronological activity feed on every entity page — cannot be hidden or filtered away
- Managers and directors see audit trail for all entities under their scope
- Distributors see a curated version — status changes, approval decisions, and actions that affect them; internal notes and internal workflow details are not shown

**Immutability:**
- No audit event can be edited or deleted by any user including company admins
- Stored in a separate append-only audit database (§19)
- Integration-received events logged identically to platform-created events

---

**Chain-level summary — visible from any entity:**
- Originator and proxy creator
- Current status of every entity in the chain at a glance
- Each approval decision with who made it and when
- ETA and dispatch date set by Ops
- ASN reference and shipment details
- Any send-backs with reasons
- Attribution chain (who gets credit and at what percentage — see §17.2)
- Source system for each entity (platform-created or integration-received)



### 15.8 Distributor as a User Type

Distributors are external partners who sell on behalf of the organisation. They are a distinct user type with their own persona and access model.

**What distributors can do:**
- Create SORs (subject to their account and SKU restrictions)
- View their own pipeline and order history
- See their target attainment against their assigned targets — overall and per SKU
- Receive approved Proforma Invoices and final Invoices for their orders
- Create claims (see §38)
- Communicate with their assigned internal contact

**What distributors cannot do:**
- See other distributors' data
- Access internal rep dashboards, manager views, or director analytics
- See pricing rules or margin data
- Access accounts not assigned to them

**Distributor target visibility:**
Distributors see their own targets set by the sales team — overall revenue/volume targets and per-SKU targets for the configured period (annual, quarterly, monthly). Running attainment is calculated from confirmed invoices and shown as a progress indicator. Distributors cannot see other distributors' targets or attainment.

**Distributor assignment:**
Each distributor is assigned to one or more accounts. Their SOR creation is restricted to those accounts and the SKUs configured for them on each account (see §17.3 Target Engine).

**Proxy creation:**
An internal user can be designated as a proxy for a distributor. The proxy can create SORs on the distributor's behalf. The SOR is attributed to the distributor for target and reporting purposes. The proxy is logged in the audit trail.

---

## 16. Integrations & BYOK

### 14.1 Integration Philosophy

The platform integrates with best-in-class tools rather than replicating their functionality. Every integration is optional. The platform functions without any integrations connected, though with reduced intelligence.

### 14.2 Supported Integrations

**Email:** Gmail, Outlook / Microsoft 365

**Calendar:** Google Calendar, Outlook Calendar

**Meeting transcription:** Fireflies.ai, Otter.ai, Microsoft Copilot, Notion AI

**Video meetings:** Zoom, Microsoft Teams, Google Meet

**Phone and VoIP:** RingCentral, Aircall, Twilio — and other VoIP systems via API

**Messaging:** WhatsApp Business API

**CRM:** Salesforce, HubSpot, Zoho (Growth and Enterprise)

**ERP:** Custom per customer via API (Growth and Enterprise)

All third-party integration partners must have a Data Processing Agreement in place before the integration is made available to customers.

### 14.3 Bring Your Own Key — BYOK

BYOK is available on all plans and is the only option on the Starter plan.

**What BYOK covers:**

**AI tools** — customers provide their own API key for AI services (OpenAI, Anthropic, Google Gemini, xAI Grok, or any model via OpenRouter). AI processing happens under the customer's key. The platform never uses its own AI account for BYOK customers. If the key expires or is revoked, AI features pause gracefully without affecting other functionality.

**Integration credentials** — OAuth tokens generated by each integration are encrypted at rest using the customer's BYOK encryption key. The platform never stores unencrypted credentials.

**Data at rest** — customers can provide their own KMS key (AWS KMS, Google Cloud KMS, Azure Key Vault, HashiCorp Vault). All tenant data is encrypted using this key. Key revocation results in immediate data inaccessibility — important for security incident response and offboarding.

**ERP credentials** — ERP API credentials are stored encrypted under the customer's BYOK key and are never shared across tenants.

**BYOK Key Management Centre:**
- Register keys for each integration category
- Monitor key status — active, expiring soon, expired, revoked
- One-click key rotation with zero downtime
- Expiry reminders — configurable advance notice
- Emergency revocation — immediate, with clear warnings about the impact
- Full key usage audit log — every operation that used each key

### 14.4 Integration Data Handling

- Data pulled from integrations is tagged with the integration source in the source tag system
- Raw references back to the original record in the source system are preserved — the platform does not claim ownership of integrated data
- Sync frequency is configurable per integration
- Integration failures are surfaced to the system admin with specific error details and guided resolution steps
- All integration access is logged in the audit trail

---

## 17. Customisable KPIs, Targets, Workflows & Analytics

### 17.1 KPI Engine

Every management level can create custom KPIs relevant to their team and goals. The platform ships with a comprehensive set of standard KPIs that are available immediately on all plans. All existing KPIs continue to work exactly as before — the Target Engine (§17.3) is additive, not a replacement.

**Standard KPI categories:**

*Activity KPIs:* Visits per week, calls logged per day, emails responded to within 24 hours, new contacts added per month, check-ins per territory, average time per visit.

*Pipeline KPIs:* Quotes sent per month, quote to PO conversion rate, average days in each pipeline stage, pipeline value by stage, pipeline coverage ratio, average deal age.

*Revenue KPIs:* PO value vs target, quoted value vs PO value gap, revenue from new vs existing accounts, average order value trend, revenue per visit.

*Client health KPIs:* Accounts not visited in 30/60/90 days, visit frequency compliance rate, client email response time, at-risk account count.

*Team behaviour KPIs:* Data quality score, follow-up completion rate, SO checklist completion rate, overdue task count, missed scheduled visits.

**Custom KPI builder (Growth and Enterprise):**
- Define the metric — any data the system captures can become a KPI
- Set the target — absolute number or percentage
- Set the measurement period — daily, weekly, monthly, quarterly
- Set the scope — whole team, specific reps, specific account tiers
- Set the weight — contribution to an overall performance score if configured
- Set threshold levels — what constitutes green, amber, and red performance

**KPI suggestion engine:**
When a manager or admin is configuring their KPI set, the platform asks three questions — What is your team's primary goal? What is your biggest current challenge? What does success look like in 90 days? Based on the answers, a recommended starter KPI pack is presented. Alternate KPIs are shown with explanations of when each is more appropriate.

**Company-wide mandatory KPIs:**
Directors and company admins can designate certain KPIs as mandatory across all teams. Managers can add their own KPIs but cannot remove mandatory ones.

### 17.2 Revenue Target Engine

Revenue targets are a specialised KPI type that operates at a finer granularity than the standard KPI engine. They are defined separately and tracked against the commercial flow (invoices, SOs, volume).

**Target dimensions — targets can be defined at any combination of:**

| Dimension | Example |
|---|---|
| Overall | Rep must achieve ₹50L revenue this month |
| Per SKU — volume | Rep must sell 500 units of Product A this month |
| Per SKU — revenue | Rep must achieve ₹10L from Product A this month |
| Per SKU — both | Rep must sell 500 units AND ₹10L from Product A |
| Per account — overall | Acme Corp account must generate ₹20L total this quarter |
| Per account — SKU restricted | Acme Corp can only order Products A, B, C; total volume must be ≥ 200 units; total revenue must be ≥ ₹8L |
| Per account — SKU volume | Acme Corp: Product A minimum 100 units |

Any combination of these dimensions can be active simultaneously for a single rep or distributor.

**Who targets apply to:**
- Individual reps
- Distributors
- Managers (whose targets may be partially fulfilled by their team's performance — see attribution below)
- Directors / VPs

**Attribution — configurable credit chain:**

When an invoice is created, the revenue and volume flow through a configurable attribution chain. Each person in the chain receives a configurable percentage of credit.

Example:
- Originating rep or distributor: 100% credit
- Their direct manager: 80% credit
- Regional VP: 50% credit
- National director: 25% credit

Attribution percentages are configured **per user**, not per role — two managers on the same team can have different attribution percentages. Attribution can be based on revenue, volume, or both independently.

**Attribution timing — configurable per tenant:**
- **Real-time** — target attainment updates the moment an invoice is created
- **Periodic reconciliation** — attainment is calculated at a configured interval (weekly, monthly, quarterly) and updated in batch

**Reversal:**
Whether a cancelled or disputed invoice reverses attribution is configurable per tenant.

### 17.3 Workflow Builder

**Available on Growth and Enterprise plans.**

The workflow builder defines the routing of an entity between stops (departments, teams, queues) and the actions taken at each stop. Workflow is distinct from approval — workflow is about *doing*, approval is about *sign-off*.

**Workflow vs Approval — the precise distinction:**

| | Workflow | Approval |
|---|---|---|
| **What it is** | Routing and actions | Sign-off |
| **Who does it** | Assigned team or user at each stop | Approver(s) in a defined hierarchy |
| **What happens** | Entity is modified — price changed, discount applied, fields updated, notes added, ETA set | Entity is validated — Approve, Reject, or Rework |
| **Example** | Costing team reviews and changes line item prices | Senior costing manager approves the revised pricing |
| **Configured in** | Workflow Builder | Approval Chain Builder (§31.2) |

A workflow stop can optionally trigger an approval chain. The approval chain runs *after* the workflow actions at that stop are complete, *before* the entity moves to the next stop.

```
SOR arrives at Costing stop
        ↓
WORKFLOW actions (doing):
  Costing team reviews and changes prices
  Applies discount
  Adds costing notes
        ↓
APPROVAL chain triggers (sign-off):
  Level 1: user with costing_approval permission → Approve / Reject / Rework
  If Rework → returns to Costing team workflow actions
  If Approved → entity moves to next workflow stop
```

**Trigger events — a workflow can be triggered by any event on any entity:**
- Any entity created, updated, or deleted
- Any field on any entity changing to a specific value
- A pipeline stage transition
- An SOR submitted, approval completed, or rework requested
- An SO created or confirmed
- A Proforma Invoice received or approved
- An invoice created
- A time-based event (e.g. 3 days without action on an SOR)
- Any custom field change — e.g. `complexity_level changes to "high"`

**Condition logic — full boolean expressions:**

Conditions can combine any fields from any entity using AND, OR, NOT, IF/ELSE, and nested groups to any depth.

Example — automated routing decision:
```
IF (sor.value > 500000 AND account.tier = "enterprise")
  OR (sor.complexity_level = "high")
THEN → Route: Sales → Costing → Ops
ELSE → Route: Sales → Ops
```

**Manual routing decision:**
At any workflow stop, the person at that stop can be given the ability to manually choose the next route. Example: Sales person reviews the SOR and decides whether to send it to Costing or directly to Ops. This is configured per stop in the workflow builder — the stop can be set to automated routing, manual routing, or automated with manual override.

**Actions — available at each workflow stop:**
- Update any field on the entity (price, discount, notes, status, any custom field)
- Apply or modify a discount on the entity — e.g. costing team reviews and adjusts line item prices or applies a discount before the entity moves forward
- Notify a specified person, role, or group
- Assign the entity to a specific person or queue
- Trigger an approval chain (see §31.2)
- Route to the next configured stop
- Send back to a previous stop with a reason
- Create a follow-up task
- Send a WhatsApp or email message
- Escalate if no action taken within a configured time
- Trigger another workflow
- Mark a stop as automated (no human action needed — passes through instantly)

**Sequential and parallel stops:**

Workflows support both sequential stops (stop 2 starts when stop 1 is complete) and parallel branches (multiple stops run simultaneously). A parallel branch can require all branches to complete before proceeding, or any one branch.

```
SOR submitted
├── Branch A: Legal review
└── Branch B: Technical review
Both complete → moves to Costing stop
```

**Workflow governance:**
- Company admins can lock certain workflows as company-wide — cannot be disabled by managers
- Level-based admins can only create workflows within their sub-tree scope
- All workflow creations, modifications, and deletions are logged in the audit trail
- Workflows are versioned — changes take effect on new instances, not in-flight ones

### 17.4 Analytics & Reporting

**Dashboard customisation:**
Every management level has a fully rearrangeable home screen. Widgets can be added, removed, and reordered. Specific reports can be pinned to the dashboard. Different managers can have completely different dashboard configurations.

**Custom report builder:**
- Select metrics from any data the system captures
- Select dimensions — by rep, region, account tier, industry, time period
- Select visualisation — table, bar chart, line chart, map, funnel
- Save as a named report
- Schedule for automated delivery via email or WhatsApp

**Persistent filters:**
Each user sets their default filters — their team, their region, their account tier. Every report and view respects these defaults automatically without requiring re-selection.

**Comparison views:**
Compare reps against each other on any metric. Compare current period vs previous period. Compare actual vs target. Compare account performance across regions or industries.

**Compliance reports:**
Pre-built reports formatted for SOC 2 auditors, GDPR data subject requests, and DPDP compliance reviews.

---

## 18. Account Ownership & Data Isolation

### 18.1 Three-Level Account Hierarchy

The platform supports a flexible three-level account hierarchy that accommodates everything from a single standalone client to a sprawling conglomerate with hundreds of legal entities and regional offices.

**ClientGroup** — the top-level container for related legal entities. Tata Group, Mahindra Group, a multinational holding company. No direct sales activity occurs at this level — it is a container and reporting rollup. ClientGroups can be nested for conglomerate structures. A configurable group owner receives rollup visibility across all child accounts and segments.

**Account** — the legal or operational entity. Tata Chemicals Ltd, Tata Motors Ltd, Acme Corp. The fundamental unit of sales activity. All visits, contacts, pipeline, and documents are scoped to an Account. An Account may belong to a ClientGroup or be standalone.

**AccountSegment** — a defined subdivision of an Account for multi-rep selling. Tata Chemicals Delhi, Tata Chemicals Mumbai, Tata Chemicals — Product X line. Each segment has a scope type (product line, geography, division, or custom) and is assigned to one primary rep. Segments share the parent account's contact base and full interaction timeline but have their own independent pipeline deals.

### 18.2 Multi-Rep Account Ownership

Multiple reps can be formally assigned to the same Account with distinct scopes. This is the standard model for large accounts. The assignment is configured by an admin or manager per account.

Examples: Rep A sells Product X to Acme Corp, Rep B sells Product Y — both assigned to Acme Corp with different product line scopes. Tata Chemicals Delhi and Tata Chemicals Mumbai are two segments of the same Account assigned to two different reps. Tata Chemicals and Tata Motors are separate Accounts within the Tata Group ClientGroup owned by different reps, with a group owner seeing across both.

### 18.3 Shared Account Timeline

All reps assigned to any segment of an account see the complete interaction timeline — every visit, call, email, and meeting from every rep on the account. The timeline labels which rep and which segment each interaction belongs to.

Pipeline deals and quote values are private per rep. A rep cannot see another rep's deal amounts unless a manager explicitly grants cross-rep pipeline visibility.

### 18.4 SharingPolicy — Configurable Visibility Within ClientGroups

The admin configures a SharingPolicy per ClientGroup defining the baseline visibility rules for all accounts and segments within it. The policy controls: how far activity is visible to co-assigned reps (group, account, segment, or private), whether contacts are shared within the group or account, and whether deal values are visible to co-assigned reps. The policy cascades down and can be overridden at the Account level.

### 18.5 Manual ShareGrant — Explicit Time-Bound Sharing

Any rep can explicitly share any specific item — an account, a meeting note, a visit record, a contact, a deal — with any named person in the tenant for a defined time period. Shareable with anyone in the company. Grantor sets the access level and end date. No platform-imposed maximum duration. The grantor or any manager above either party can revoke it early. ShareGrants always add access — they never restrict.

### 18.6 Bulk Handover

When a rep goes on vacation or is transferred, they — or any manager above them — can initiate a bulk handover that creates multiple ShareGrants simultaneously across their account portfolio. Select all accounts or filter by territory, tier, or industry. Assign one or multiple receiving reps. Set the handover period. A 15-minute undo window is available after processing. Receiving reps can log new activity during the handover — attributed to them and flagged as during-handover. When the handover expires, access is silently revoked and all logged activity remains permanently on the timeline.

### 18.7 Tenant Data Isolation

Tenant isolation is absolute. No account, contact, or data belonging to one tenant is ever accessible to another. Enforced at both application layer and database layer via Row Level Security.

### 18.8 Duplicate Account Detection

When a rep adds a new account, the system runs fuzzy name matching. If a likely match is detected, the account is created immediately in pending-duplicate-review status — the rep is not blocked. The rep sees a persistent banner confirming the account is under review. The admin reviews both side by side and decides to merge, keep separate, or dismiss. If merged, all data is migrated to the surviving account and the rep is notified.

### 18.9 Contact Sharing Within ClientGroups

By default contacts are scoped to their Account. Contact sharing across accounts within a ClientGroup is enabled per-ClientGroup by the admin. When enabled, a contact — such as a group CFO — can be linked to multiple accounts within the same group. Contact sharing never crosses ClientGroup boundaries.

### 18.10 Rep Deactivation — Account Queue

When a rep is deactivated, all owned accounts immediately enter the unassigned queue. The direct reporting manager is notified with the full list. AI-generated reassignment suggestions are presented based on geography, workload, and industry match. Accounts remain in the queue until explicitly reassigned.

---

## 19. Audit Trail

### 17.1 Scope

Every action in the platform generates an immutable audit event. There are no exceptions. The audit trail is the permanent, tamper-proof record of everything that has ever happened in the system.

### 17.2 What Is Logged

**Data actions:** Record created, viewed, edited (with old and new values), deleted (soft delete only — hard deletion is not permitted), exported, reassigned.

**Access actions:** Login (success and failure), password reset, session duration, permission changes, user creation and deactivation.

**Integration actions:** Integration connected and disconnected, data synced, API key registered and rotated, external API calls.

**Financial and pipeline actions:** Quote created, sent, modified, and withdrawn. PO logged. SO created. Pipeline stage changed. Discount applied and approved. Service Order Request created, submitted, assigned, modified, approved, rejected, or sent back — every field change with old and new values. Service Order created, ETA set, dispatch date confirmed. Proforma Invoice received, linked to SO, approved, rejected, sent to recipient. ASN generated, sent, and acknowledged. Invoice created, linked to chain, target attainment triggered. Claim created and submitted. Any price or discount change made at any workflow stop — who changed it, from what value, to what value, at what time.

**Administrative actions:** Hierarchy changes, KPI and workflow changes, company settings changes, compliance settings changes, support access by platform super admin.

### 17.3 Properties of Every Audit Event

Every audit event records: an immutable timestamp in UTC to millisecond precision, the identity of the actor including user ID, name, role, and hierarchy level, the device type and OS, the IP address with geolocation, the session ID, the reason for the action where a reason is required, and the full before and after state for any edit.

### 17.4 Immutability

Audit events cannot be edited or deleted. Not by company admins. Not by platform super admins. The audit log storage is append-only at the database level. No update or delete operations are permitted.

### 17.5 Storage & Retention

- Audit logs are stored separately from the main application database
- Encrypted separately from main data, under their own key
- Retained for a minimum of 7 years — configurable per compliance requirement
- Automatically replicated to a separate geographic region
- Exportable in JSON and CSV formats for external auditors

### 17.6 Access

- Company admin — full access to their tenant's audit log
- Level admins — access to events within their sub-tree only
- Reps and managers — access to their own activity log
- External auditors — temporary read-only access to specified segments with an expiry date
- Platform super admins — access to all tenants' logs, but their access is itself logged

### 17.7 The Audit Trail Interface

A searchable, filterable, human-readable interface:
- Search by user, record, action type, date range, IP address
- Timeline view per client record — everything that happened to a specific account
- User activity view — everything a specific user did in a defined period
- Anomaly alerts — unusual patterns flagged automatically. Login from new country, bulk data export, mass deletion, repeated failed logins.

---

## 20. Compliance & Security

### 18.1 Regulatory Compliance

The platform is designed and built to comply with the following regulations across all plans and all tenants:

- **SOC 2 Type II** — security, availability, and confidentiality controls with annual third-party audit
- **ISO 27001** — information security management with formal policies, risk assessment, and supplier security requirements
- **GDPR** — consent management, right to access, right to erasure, data portability, 72-hour breach notification, privacy by design
- **DPDP 2023** — explicit consent for processing Indian personal data, data fiduciary obligations, data localisation for applicable categories, grievance officer appointment
- **CCPA** — California consumer privacy rights
- **EUDR** — EU Deforestation Regulation compliance support for applicable customer industries
- **PDPA** — Thailand and Singapore variants
- **PIPEDA** — Canada

### 18.2 Consent Management

- Explicit consent is required before location tracking begins for any rep
- Explicit consent is required before call recording or meeting transcription begins
- Both parties to a call or meeting must be aware of recording in applicable jurisdictions
- Consent records are stored permanently and are auditable
- Consent can be withdrawn at any time — data collection stops immediately

### 18.3 Individual Rights

- **Right to access** — any user or contact can request all data held about them. Handled through the compliance centre.
- **Right to erasure** — deletion requests are processed through a structured workflow. Soft deletion with full audit trail. Backup purge on schedule.
- **Data portability** — users can export their personal data in a machine-readable format.
- **Breach notification** — automated workflow to notify affected parties within 72 hours of a confirmed breach.

### 18.4 Data Security

- All data encrypted at rest using AES-256
- All data encrypted in transit using TLS 1.3
- BYOK available for all encryption at rest
- Regular penetration testing by independent third parties
- Vulnerability disclosure programme
- Incident response procedures documented and tested

### 18.5 Compliance Centre

Every company admin has access to a compliance centre containing:
- Consent status dashboard — across all users and all data types
- Data retention policies and automatic deletion schedules
- Active Data Processing Agreements with all connected integrations
- DSAR management — incoming requests, processing status, response history
- Breach detection alerts and notification workflow
- Compliance reports exportable for auditors

---

## 21. Multi-Tenancy & Platform Administration

### 19.1 Tenant Isolation

Every company is a completely separate tenant. Tenant data is partitioned, encrypted independently, and never accessible to other tenants. A breach of one tenant must not expose any other tenant.

### 19.2 Platform Super Admin

The platform operator has a super admin layer above all tenants:

- Company directory — all tenants, their plan, user count, last active date
- Usage analytics — feature adoption, drop-off points, growth metrics
- Health monitoring — technical issues, integration failures, sync errors
- Support tools — ability to access a tenant's environment for support, with full audit logging and tenant notification
- Billing management — plan per tenant, usage-based billing, invoicing
- Feature flags — enable or disable features per tenant or per plan tier
- Announcement system — push notifications to all tenants or specific ones

### 19.3 Feature Flags

Feature flags allow the platform operator to control which features are available to which tenants and plan tiers. This enables plan enforcement, beta feature rollout, and per-tenant custom configurations without deploying separate code.

---

## 22. Onboarding & Default Setup

### 20.1 Self-Serve Onboarding — Starter

Step 1: Company profile — name, logo, industry, timezone, currency, data residency region.
Step 2: Hierarchy setup — select number of levels, accept default names and permissions or customise.
Step 3: Invite company admin — sets password and reviews configuration.
Step 4: Add users — individually or via spreadsheet import.
Step 5: Connect integrations — each optional, guided connection flow.
Step 6: Import existing accounts — CSV upload with field mapping.
Step 7: Review default KPIs and workflows — accept or customise.
Step 8: Go live.

Target time to first active user: under 2 hours for a small team.

### 20.2 Guided Onboarding — Growth

All steps from Starter plus a guided setup call with the platform team to configure hierarchy, KPIs, workflows, and integrations correctly for the customer's specific business.

### 20.3 White-Glove Onboarding — Enterprise

Dedicated onboarding manager. Full configuration assistance. Data migration from existing CRM or spreadsheets. Custom integration setup. Team training sessions. Handover to dedicated account manager.

### 20.4 KPI and Workflow Suggestion Engine

At onboarding and whenever a new hierarchy level is added, the suggestion engine presents recommended KPIs and workflows based on the company's industry, team size, and stated goals. Suggestions are accepted, modified, or dismissed. The system explains in plain English why each KPI or workflow is being suggested and what it measures.

---

## 23. Notifications & Communication

### 21.1 Notification Channels

- **In-app** — always available regardless of plan
- **Email** — available on all plans
- **WhatsApp** — via WhatsApp Business API, available on all plans

### 21.2 Notification Configuration

Every user configures their own notification preferences — which events trigger notifications, through which channels, and at what frequency. Managers configure team-level notification defaults. Company admins set the outer boundaries of what can be configured.

### 21.3 Notification Types

**Rep notifications:** Daily morning plan, pre-visit brief, check-in prompts, follow-up reminders, email alerts, PO confirmations, SO raised confirmations, expense approval status.

**Manager notifications:** Rep check-ins, overdue escalations, PO received, new account requests, stalled deals, end of day team summary, approval requests.

**Director notifications:** High-value POs received, strategic account alerts, pipeline threshold breaches, weekly business review.

**Admin/Back office notifications:** PO received for SO creation, new account for onboarding, approval queue items, integration failures, compliance requests.

### 21.4 Notification Intelligence

The platform avoids notification fatigue by:
- Grouping related notifications into digests where appropriate
- Suppressing non-urgent notifications during active visits — held and delivered after check-out
- Learning from dismissal patterns — if a user consistently dismisses a notification type, the platform suggests adjusting their preferences

---

## 24. Non-Functional Requirements

### 22.1 Performance

- Dashboard load time under 2 seconds on standard mobile connection
- Check-in and check-out operations under 1 second response time
- AI-generated visit summaries available within 5 minutes of check-out
- Search results returned within 1 second
- Real-time map updates with maximum 30 second latency

### 22.2 Availability

- 99.9% uptime SLA for Growth and Enterprise plans
- Planned maintenance windows outside business hours with advance notice
- Status page publicly available

### 22.3 Offline Mode

- Core rep features must function without an internet connection — check-ins, visit notes, voice recording, follow-up creation
- Data syncs automatically when connection is restored
- Offline actions are clearly indicated and timestamped at the time of offline entry, with sync confirmation shown when connection returns

### 22.4 Mobile

- Native mobile experience optimised for iOS and Android
- Designed for one-handed use — field reps are often holding something
- Minimal data usage — important for reps in areas with limited connectivity
- Web access available for managers and admins who primarily work at a desk

### 22.5 Scalability

- Architecture must support growth from 5 users to 50,000 users without re-engineering
- Multi-tenant data partitioning must not degrade as tenant count grows
- Integrations must handle high-frequency sync without performance impact

### 22.6 Data Portability

- Customers can export all their data at any time in standard formats
- On contract termination, customer data is available for export for 90 days before deletion
- Data deletion is complete — including from backups — within a defined timeframe per compliance requirements

---

---

## 25. Lead Management & Prospecting

### 25.1 The Lead Entity

A Lead is a person or organisation at the earliest stage of commercial awareness — not yet a verified Account and not yet in the pipeline. Leads and Accounts are the same underlying entity at different lifecycle stages. There is no wall between them. When a Lead converts, nothing is rebuilt and nothing is lost.

A Lead has a source, a qualification status, an owner, and an enrichment profile. It may have contacts attached before it becomes an Account. It may have an RfQ attached before the Deal is formally opened. All of this travels intact through conversion.

**Lead sources:** Manual entry by a rep or admin. Web form submission from the company's website or a landing page. LinkedIn import — individual or bulk. CSV/spreadsheet import. Enrichment tool suggestion — Clearbit or Apollo surfaces a company matching a defined prospect profile. Inbound RfQ — a company sends a quote request before a formal relationship exists. Referral — tagged as referred by an existing contact or account.

### 25.2 Lead Qualification

Whether a lead requires human qualification before it can enter the pipeline is fully configurable per tenant, per source channel, and per criteria rule.

Examples: LinkedIn imports always require human review. Web form submissions from a known company domain are auto-qualified. Leads with estimated revenue above a configured threshold require manager sign-off. All others auto-qualify after 24 hours if no one acts.

AI assists qualification by scoring each lead on fit (industry, company size, geography, product relevance) and intent (what signals suggest readiness — job postings, funding news, recent executive change, inbound engagement). The AI score is advisory — it does not make the qualification decision unless the tenant configures auto-qualify rules that reference it.

Unqualified leads sit in a qualification queue visible to the lead's owner and their manager. Qualified leads move to Prospect status automatically.

### 25.3 Lead Conversion

When a lead is qualified, conversion is a single atomic operation:

- A new Account is created with status Prospect, inheriting all enrichment data from the Lead
- The Lead's contacts become Contacts on the new Account
- Any RfQs attached to the Lead transfer automatically to the new Account and the Deal opens in the pipeline
- The Lead record is marked converted and preserved for audit — it is never deleted
- If the Lead's company name fuzzy-matches an existing Account, the duplicate detection engine fires before conversion completes. If a match is confirmed, the Lead's data merges into the existing Account instead of creating a new one

No confirmation screen. No manual data re-entry. One action, everything moves.

### 25.4 Prospecting Tools

**Territory prospecting map.** Reps and managers see a geographic map of their territory showing: accounts they own (colour-coded by status), accounts owned by colleagues (visible per SharingPolicy), and prospect markers — companies in the territory that are not yet in the platform. Prospect markers come from enrichment tools surfacing known companies in a postcode or region.

**Competitor displacement tracking.** Accounts flagged as using a competitor are marked for prospecting. The rep sees which competitor, when it was last noted, and what the displacement strategy should be. This feeds into the morning brief when a rep is visiting that area.

**LinkedIn Sales Navigator integration (Growth and Enterprise).** Reps can search LinkedIn Sales Navigator from within the platform, save a profile as a Lead with one click, and have the Lead's professional data pre-populated via the enrichment engine. Saved searches sync automatically — new LinkedIn matches that meet the saved criteria appear as suggested Leads.

**Web-to-lead forms.** The platform generates an embeddable web form that the tenant places on their website or a landing page. Submissions create Leads automatically with the source tagged as web_form. Field mapping and required fields are configurable. Spam filtering is applied. The form submitter receives a configurable acknowledgement email.

### 25.5 Prospect-to-Client Lifecycle

The full lifecycle is a continuous pipeline with no architectural breaks:

```
Lead (unqualified)
  → Lead (qualified)
    → Account (Prospect) + Contact created
      → RfQ or direct Quote
        → Deal enters pipeline
          → PO Received
            → SO Created → Account status becomes Client
              → Invoice mirrored from ERP
                → Payment mirrored from ERP
                  → Repeat pipeline, upsell, service tickets
```

The Account's sub-type (Prospect vs Client) is a status field, not a separate entity. The Client Intelligence Card shows progressively richer content as the account moves through the lifecycle — the same component, different data.

---

## 26. External Data Enrichment

### 26.1 Enrichment Philosophy

The platform never builds or maintains its own data sources. It integrates with best-in-class enrichment providers and owns the presentation, contextualisation, and intelligence layer on top. The rep should never need to Google their client before a visit — the platform already knows.

### 26.2 Account-Level Enrichment

For every Account and Lead, a background enrichment job runs on a configurable schedule (default: daily). It pulls and stores:

**Company intelligence:** Company description, industry, headcount, funding rounds, revenue estimates, technology stack, recent news mentions, regulatory filings where available. Sources: Clearbit, Apollo, ZoomInfo, NewsAPI, Google News.

**News and signals:** Any news article mentioning the company in the last 30 days. Executive changes. Product launches. Expansion announcements. Partnership or acquisition news. These are surfaced in the Client Intelligence Card under a "What's happening" section and included in the pre-visit brief.

**Social signals:** LinkedIn company page updates, recent posts by the company or its executives. X/Twitter mentions if the company has a presence. These are flagged when they are commercially relevant — a CFO posting about cutting costs is a signal the rep should know before a visit. Instagram and Facebook monitoring is planned for a future release; manual entry is available in the interim.

**ClientGroup enrichment:** If the account belongs to a ClientGroup, enrichment runs at the group level as well. A rep selling into one subsidiary of a conglomerate sees the parent group's news and strategic direction in their brief.

### 26.3 Contact-Level Enrichment

Enrichment runs for every Contact and Lead contact on a configurable schedule. It pulls and stores:

**Professional signals:** Current role and company (verified against LinkedIn). Job title changes — if a contact was a Procurement Manager last month and is now Head of Procurement, the rep is notified. Employment changes — if a key contact has left the company, the rep is alerted immediately. LinkedIn activity — recent posts, shares, and comments that are publicly visible and professionally relevant.

**Career events:** Promotion detected, new role at same company, moved to a new company, returning after a gap. Each triggers a notification to the owning rep: *"Priya Sharma, your main contact at Acme Corp, was promoted to VP Procurement last week."*

All contact enrichment data is tagged as integration-synced. Personal social signals (Instagram, Facebook, iMessage) are not pulled automatically — they can be noted manually by the rep and tagged as rep-entered.

### 26.4 Enrichment Data Handling

All enrichment data is stored in the `enrichment_data` JSONB column on the Account and Contact records — the schema already supports this. Enrichment data is clearly labelled in the UI as externally sourced with the provider name and the date it was last refreshed. Reps can flag enrichment data as incorrect, which suppresses it and queues a manual review.

Enrichment providers must have a Data Processing Agreement in place. Enrichment data that includes personal information is subject to the same GDPR/DPDP rules as all other personal data on the platform. If a contact raises an erasure request, their enrichment data is purged along with all other personal data in the same operation.

---

## 27. Commercial Operations — Invoice, Payment & Credit

### 27.1 Architecture Principle

The ERP is the system of record for invoicing, payments, and credit notes. The platform does not generate invoices or process payments. It mirrors the commercial tail of the relationship from the ERP and surfaces that data in the Client Intelligence Card so that reps and managers can see the full commercial picture — not just the sales activity — before any interaction.

If a tenant has no ERP connected, a lightweight native record can be created manually for each invoice or payment to fill the gap. The entity structure is identical regardless of source — only the source tag differs.

### 27.2 Invoice Mirroring

Invoices are pulled from the ERP via two-way sync. Each invoice record holds: SO reference, invoice number, issue date, due date, total value, currency, line items, and current status. Status values: draft, sent, partially\_paid, paid, overdue, disputed.

When an invoice becomes overdue, the rep who owns the account is notified. If it remains overdue beyond a configurable threshold, their manager is notified. The overdue invoice appears as an open item on the Client Intelligence Card and in the pre-visit brief — a rep walking into a meeting knows before they sit down that there is an unpaid invoice.

### 27.3 Payment Mirroring

Payments are pulled from the ERP. Partial payments are supported — a payment is linked to one or more invoices and can cover them partially. Each payment record holds: payment date, amount, currency, payment method, and the invoices it applies to.

Payment history is visible in the Client Intelligence Card under Financial Summary. Payment behaviour — average days to pay, history of late payments, any disputed invoices — is computed from the payment record and surfaced as a financial health indicator.

### 27.4 Credit Notes

Credit notes are pulled from the ERP. Each credit note is linked to the invoice it adjusts. Credit notes appear in the account's financial summary and in the unified timeline.

### 27.5 PO Forwarding

When a rep marks a deal as PO Received and uploads the PO document:

- The PO is immediately routed to the designated back office contact or team for SO creation. The routing target is configurable per tenant — it can be a named user, a role, or a team. The notification includes the full deal context: account, quoted value, PO document, and which rep logged it.
- The back office creates the SO in the ERP and enters the SO reference back into the platform. This triggers the deal stage to move to SO Created and the Account status to flip from Prospect to Client if it has not already done so.
- In a future release, the platform will parse the PO document automatically using AI to extract PO number, value, and line items, and push them to the ERP directly. The architecture supports this extension without any structural change.

---

## 28. Customer Service & Ticketing

### 28.1 Why Native First

Most companies buying this platform do not have a mature ticketing system. Building natively means the rep, the manager, and the back office all work in one place — the same platform where the deal was closed is where the post-sale issue is tracked. This also means the ticket data feeds directly into the Client Intelligence Card and the pre-visit brief without any integration complexity.

For companies that already have Zendesk, Freshdesk, Intercom, or Jira Service Management, the platform integrates with those systems and mirrors ticket data in. The native and integration paths produce the same data structure — only the source tag differs.

### 28.2 Service Ticket

A ticket records a client issue from open to resolution. Any user with the create\_ticket permission can raise one — a rep in the field, back office, a manager, or via portal submission if the tenant has enabled client-facing portal access.

Each ticket has: account, contact, category (configurable per tenant), priority (low, medium, high, critical), status, SLA target (response time and resolution time, configured per priority level and per account tier), resolution notes, and a satisfaction rating collected on closure.

**Ticket status machine:** open → in\_progress → pending\_client → resolved → closed. Each transition is logged in the audit trail. Backward movement is permitted with a reason. SLA breach is flagged in real time and escalated per the configured escalation rules.

**Commercial linkage:** A ticket can be linked to a Deal or SO if the issue is commercial in nature — a delivery dispute, a quality claim against a fulfilled order, a billing discrepancy. This linkage appears in the timeline of both the ticket and the deal.

### 28.3 Ticket Comments

Tickets have threaded comments with two visibility modes. Internal comments are visible only to users on the platform — never shown to the client. External comments are client-facing and sent via email integration when the ticket is linked to a contact with an email address. The comment thread is the full audit record of the issue — every response, every status change, every attachment, in chronological order.

### 28.4 Client Portal

Tenants with client portal enabled can give their clients a URL where clients can submit new tickets, check the status of existing ones, and respond to external comments. Portal access is a tenant-level configuration — on or off. The portal is branded with the tenant's logo and colours. Tickets submitted via the portal carry the source tag web\_portal. Portal access credentials are managed separately from platform user credentials.

### 28.5 Ticketing Integration Sync

For tenants with an existing ticketing system, the platform connects via API and mirrors tickets in. The platform never becomes the system of record for externally-originated tickets — it displays them in context alongside natively-created ones. External tickets carry the source tag integration\_synced and include a link back to the record in the original system.

Supported integrations: Zendesk, Freshdesk, Intercom, Jira Service Management. Additional ticketing systems can be connected via the generic webhook integration.

### 28.6 Customer Satisfaction

CSAT and NPS surveys are configurable per tenant. Triggers: automatically on ticket closure, on SO fulfilment, or on a configurable time-based schedule (e.g. quarterly NPS for all active clients).

Satisfaction scores are stored per account and per contact. They appear in the Client Intelligence Card as a trend — not just the latest score but the direction of travel. A rep walking into a meeting where the last three CSAT scores have declined sees that flag before the client says a word. A declining satisfaction trend on a large account triggers a manager notification.

Satisfaction data feeds directly into the pre-visit brief, the morning briefing, and the account health analytics.

---

## 29. Product Catalogue, Pricing & Discount Engine

### 29.1 Product Catalogue

The product catalogue stores every SKU the tenant sells. Each product record holds: product code, name, description, unit of measure, whether it is a finished good (can be quoted directly) or a configurable/made-to-order item (requires the complex RfQ route), base price, currency, and tax rate.

The catalogue is populated via CSV import, ERP sync, or manual entry. All three paths use the same validation and the same entity structure. Products can be marked inactive without deletion — they disappear from the quoting UI but their history is preserved.

### 29.2 Price Master

The price master defines the price for every product under every applicable condition. Pricing can be structured along any combination of dimensions the tenant requires: standard list price, customer-specific price, account tier price (platinum, gold, silver), volume tier price (price per unit drops above defined quantity thresholds), regional price, and currency variants.

The resolution order when a rep builds a quote: customer-specific price first, then account tier price, then volume tier (if quantity qualifies), then regional price, then list price. The system applies the most specific applicable rule automatically. If no rule applies, the base product price is used.

Price master records are created and maintained by users with the `manage_pricing` permission. Price changes are versioned — historical quotes reference the price that was in effect when the quote was created, not the current price.

### 29.3 Auto-Fill on Quote Creation

When a rep adds a product line to a quote, the price is auto-filled from the price master based on the account, the product, and the quantity entered. The rep sees the resolved price and the rule that produced it. The rep can change the price manually, subject to their discount limit (see §29.4).

For made-to-order items, no price is auto-filled — the line item is created with a placeholder and routes through the RfQ process to receive a price.

### 29.4 Discount Engine

Discount limits are configured per user or per role — whoever has the `set_discount_limits` permission can set limits for users at or below them in the hierarchy. The scope of who a discount limit applies to is configurable: a manager can set limits that apply only to their direct reports, or to their full sub-tree, or to the whole organisation if they have the authority.

When a rep applies a discount on a quote line item:

- If the discount is within their personal limit: applied immediately, no approval needed.
- If the discount exceeds their limit: the quote moves to pending\_approval and is routed to the first user in the approval hierarchy who has authority over that discount level.
- The approval hierarchy for discounts follows the same universal approval engine as all other approvals (see §31).

Discount limits and approval thresholds are part of the config inheritance model — a tenant default is set, and individual limits are set relative to that. A user's effective discount limit is the most specific applicable rule, resolved by walking up from account-level config to tenant-level config to platform default.

---

## 30. RfQ & Configurable Quote Workflows

### 30.1 Two Quote Paths

**Direct quote.** The rep builds a quote from the product catalogue without a formal RfQ. Prices auto-fill from the price master. The rep applies any discount within their limit. The quote goes through the standard approval flow if required, then is sent. This is the default flow for finished goods with known pricing.

**RfQ-driven quote.** The client sends a request for quote, or the rep generates an internal RfQ from a visit or call record based on what the client asked for. The RfQ is the starting point; the quote is the output of processing it.

### 30.2 Inbound RfQ

When a client sends an RfQ — via email, web form, or manual entry by the rep — the platform creates an RfQ record linked to the account. The rep (or whoever has the process\_rfq permission) reviews it and determines the type:

**Standard RfQ:** The requested products exist in the catalogue as finished goods. The rep quotes directly, following the same direct quote flow with prices from the price master.

**Complex RfQ:** The requested products require manufacturing, configuration, or specialist costing. The RfQ is routed to the designated specialist — whoever holds the `quote_specialist` permission, or a named user or team configured per tenant. The specialist produces the costing externally and either uploads a completed quote document or enters the structured quote data directly into the platform via UI or API. The uploaded quote becomes a version in the quote history. All subsequent approval, sending, and tracking follows the standard quote flow.

### 30.3 Product Mapping Engine

The gap between what a client requests and what exists in the product catalogue is closed by the Product Mapping engine. A mapping record says: *"when a client asks for X, it resolves to finished good FG\_Y, or to FG\_X + FG\_Y + FG\_Z with defined quantities."*

Mappings are created in three ways. A user with the `manage_product_mappings` permission creates them manually. The AI engine suggests a mapping from the unstructured language in a visit note, call transcript, or RfQ description — the rep confirms or edits the suggestion. Over time, confirmed mappings accumulate into a proprietary knowledge asset for the tenant that makes quoting faster and more consistent.

Each mapping has a confidence score reflecting how many times it has been used and confirmed. High-confidence mappings are applied automatically when a matching phrase appears in an RfQ. Low-confidence mappings surface as suggestions for the rep to confirm.

### 30.4 Configurable Quote Workflow Templates

Beyond the two standard paths, tenants can define named workflow templates that reflect their specific business processes. Examples: Standard Finished Goods Flow, Make-to-Order Flow, Framework Agreement Flow, Tender Response Flow.

Each workflow template defines: the ordered stages a quote moves through, any required form at each stage (see §31), the approval requirements per stage, the routing rules for complex types, and the exit conditions that must be met before moving to the next stage.

Workflow templates are assigned at the Deal level. If no template is assigned to a deal, the system resolves through config inheritance: account-level template first, tenant default next, platform default last.

---

## 31. Configurable Forms & Approval Engine

### 31.1 Form Builder

The form builder is a single component used everywhere in the platform that requires structured data capture. It is not a standalone feature — it is infrastructure that every domain uses.

A form template defines: a set of fields, each with a type (text, number, date, dropdown, multi-select, file upload, checkbox, signature), a label, a required flag, a default value (resolved through config inheritance), validation rules, and conditional visibility (show this field only if field X equals value Y).

Form templates are attached to: workflow stage entry requirements, ticket category intake forms, lead qualification forms, onboarding checklists, SO checklists, and any future entity that requires structured data capture. One form builder, used everywhere.

Form submissions are validated before the stage or action can proceed. Incomplete required fields block the transition. All form data is stored, versioned, and included in the audit trail.

### 31.2 Approval Engine

The approval engine handles sign-off. It does not modify entities — it validates them. Approval has exactly three outcomes: **Approve**, **Reject**, **Rework**.

- **Approve** — the entity passes this approval level and proceeds (either to the next approval level or back to the workflow)
- **Reject** — the entity is rejected. The originator is notified. The workflow stops at this point.
- **Rework** — the entity is sent back to the previous workflow stop for revision. Once revised, it re-enters the approval chain from the beginning of that chain.

**Approval is always triggered by a workflow action.** It never runs standalone. A workflow stop includes an "trigger approval chain" action which names the approval chain to run. When that action fires, the approval chain takes over. The workflow does not proceed to the next stop until the approval chain completes with Approve.

**Approval Chain Builder:**

An approval chain is a named, reusable configuration. It defines one or more levels:

| Level | Who approves | Behaviour |
|---|---|---|
| 1 | User(s) with `approve_sor` permission | Must approve before level 2 is notified |
| 2 | User(s) with `approve_sor_senior` permission | Must approve before chain completes |

**Approver selection — permission-based dropdown:**
When configuring an approval chain level, the admin selects approvers from a dropdown. The dropdown shows only users who hold the relevant approval permission for that entity type. For example, when building a Proforma Invoice approval chain, only users with `approve_proforma` permission appear as options.

This means:
- Permissions are assigned to users in the role builder as usual
- The approval chain builder filters the user list by permission — the admin cannot select someone who doesn't have the right permission
- If a user loses the permission later, they are removed from active approval chains automatically

**Approval routing patterns:**
- **Single approver** — one named user must approve
- **Any-of-list** — any one user from a defined set may approve
- **All-of-list** — all users in a defined set must approve (order does not matter)
- **Sequential chain** — a defined sequence where level 1 must approve before level 2 is notified, and so on
- **Value-threshold routing** — below ₹X goes to one approver, above ₹X goes to a different approver

**Approval chains are independent and reusable.** The same approval chain can be used in multiple workflow stops across multiple workflows. Changing the chain updates it everywhere it is used, for new instances only — in-flight approvals complete under the chain as it was when they started.

**Every approval action is immutably logged** — who was asked, when, what they decided, and any reason provided. Approval records cannot be edited or deleted.



---

## 32. Universal Config Inheritance

### 32.1 The Principle

Every configurable aspect of the platform resolves through a three-level inheritance chain. The resolution is always: account-level config first, tenant-level config next, platform default last. The first defined value wins.

```
resolve(key, account_id, tenant_id):
  return accountConfig[account_id][key]
      ?? tenantConfig[tenant_id][key]
      ?? platformDefault[key]
```

This is not a feature of one module. It is the architectural backbone that governs all configuration across the entire platform — without exception.

### 32.2 What Inherits

Config inheritance applies to: workflow templates, form templates, approval rules, KPI definitions and targets, pricing rules and discount limits, SLA targets for service tickets, lead qualification rules, notification preferences, enrichment schedules, report templates, and pipeline stage names and definitions.

### 32.3 Who Can Write at Each Level

- **Platform default** — platform operator only. This is the baseline for all tenants that have not configured an override.
- **Tenant level** — users with the `admin` permission module. Company-wide defaults are set here.
- **Account level** — users with the `configure_account_settings` permission. Customer-specific overrides are set here. A user's effective permission limit is their own hierarchy level — they cannot write at a level above their own.

Having permission to write at account level does not grant permission to write at tenant level. Having permission to write at tenant level does not grant platform-level access. The levels are strictly separate.

### 32.4 Locking

Any config value at any level can be marked locked by a user with admin authority. A locked value cannot be overridden at any level below it. This allows company admins to enforce non-negotiable standards — a mandatory approval rule, a minimum SLA, a required form field — that individual account managers cannot bypass.

---

## 33. Data Import & Ingestion

### 33.1 Four Ingestion Paths

All four paths produce identically structured data. The only difference is the source tag.

**Structured import (CSV/XLSX).** A guided import UI handles: accounts, contacts, products, leads, historical deals, price master entries, and user rosters. The flow is: upload file → automatic field mapping with manual correction UI → preview showing validation errors highlighted per row → dry-run confirmation showing what will be created, updated, or skipped → commit. On partial failure, the failed rows are reported with specific errors. The successful rows are committed. The import can be fully rolled back within 30 minutes of completion if the admin identifies a problem.

**Integration sync (ERP, Google, Outlook, LinkedIn, enrichment, ticketing).** OAuth where available, API key where not. Conflict resolution on sync: by default, data in the platform takes precedence over incoming sync data for fields that have been manually edited since the last sync. This is configurable per tenant — tenants can flip this to let the sync source always win for specific fields. Every sync operation is logged: what was created, updated, skipped, and why.

**API submission.** Every entity that can be created in the UI can be created via API with identical validation and business rule enforcement. The complex RfQ quote upload is a specific example — a specialist produces a quote in an external tool and POSTs the structured data back. Source tag: api\_submitted. Full audit trail identical to UI-created records.

**Manual entry.** Always available. Never blocked by integration failures. Source tagged as rep\_entered or admin\_configured. The system never forces an integration — every workflow has a manual fallback.

### 33.2 Contact Import from Google and Outlook

Reps can connect their Google Contacts or Outlook Contacts via OAuth. The import flow presents all contacts with a smart matching step: contacts that match an existing account by email domain are suggested for linking to that account. Contacts without a match are offered as new Leads. The rep reviews and confirms before any records are created. Imported contacts carry the source tag integration\_synced.

### 33.3 Account Import

Bulk account import from CSV includes smart duplicate detection — before any account is created, the import engine runs the same fuzzy matching that the manual account creation flow uses. Probable duplicates are flagged in the preview step. The admin can choose to merge, create anyway, or skip for each flagged pair. This prevents a bulk import from creating hundreds of duplicate accounts.

### 33.4 Historical Data Migration

For customers migrating from an existing CRM or spreadsheet system, the platform provides a guided migration service: Salesforce export, HubSpot export, Zoho export, and generic CSV. Field mapping is assisted by AI — the system suggests the most likely mapping and the admin confirms or corrects. Historical deals, contacts, and notes are imported with their original dates preserved so the timeline is complete from day one.

---

## 34. Platform Phasing & Roadmap

### 34.1 Phase 1 — Core (Current Scope)

Everything defined in §1–24 of this document. The foundation: field and desk rep workflows, GPS check-in, pipeline management, QR codes, team hierarchy, role-based permissions, account ownership and sharing model, audit trail, compliance infrastructure, integrations (email, calendar, VoIP, meetings), AI co-pilot, KPIs, and workflows.

**Goal:** Get reps using the platform, get managers seeing the truth, prove the value loop.

### 34.2 Phase 2 — Customer Intelligence (3–6 months post-launch)

- External enrichment — Clearbit/Apollo integration for company and contact intelligence (§26)
- Contact-level enrichment — promotion detection, job change alerts, LinkedIn activity signals
- Customer satisfaction — CSAT and NPS surveys, post-ticket and post-fulfilment triggers (§28.6)
- Service tickets — native ticketing, basic SLA engine, client portal option (§28)
- Client Intelligence Card updated to surface satisfaction trends and enrichment signals alongside existing data

**Goal:** The rep walks into every meeting knowing more than the client expects them to know.

### 34.3 Phase 3 — Commercial Operations (6–9 months post-launch)

- Invoice and payment mirroring from ERP (§27)
- Two-way ERP sync — SO reference flows in, invoice status flows back
- Product catalogue and price master (§29)
- Discount engine with configurable limits and approval routing (§29.4)
- RfQ entity — inbound and outbound, standard and complex routing (§30)
- Product mapping engine with AI suggestion (§30.3)
- Configurable quote workflow templates (§30.4)

**Goal:** The platform owns the full commercial relationship from quote to payment, not just the sales activity.

### 34.4 Phase 4 — Growth Engine (9–12 months post-launch)

- Lead management — full lead entity, qualification rules, AI lead scoring (§25)
- Web-to-lead forms (§25.4)
- Territory prospecting map (§25.4)
- LinkedIn Sales Navigator integration (§25.4)
- Prospect enrichment — the Phase 2 enrichment engine applied to leads before conversion
- Competitor displacement tracking (§25.4)

**Goal:** The platform generates new pipeline, not just manages existing pipeline.

### 34.5 Phase 5 — Platform Maturity (12–18 months post-launch)

- Advanced form builder with conditional logic (§31.1)
- Full universal approval engine across all entities (§31.2)
- Made-to-order manufacturing workflow support with production-side handoffs
- Personal social signal enrichment — Instagram, Facebook (manual entry available from Phase 2)
- PO document parsing — AI extracts PO number, value, and line items, pushes to ERP directly
- WhatsApp and iMessage signal capture (manual in earlier phases)
- Cross-product integration — if AIT is connected, SO data flows into GST processing automatically
- Full marketplace of integration connectors

**Goal:** The platform becomes the commercial operating system for the business — not a tool they use but infrastructure they run on.

---

## 35. Master Data Management

### 35.1 Philosophy

Master data is the foundational reference data the entire platform depends on. Each master is independently manageable, versionable, and can be owned by the platform or a third-party system (see §39). Every master supports custom fields (see §36).

### 35.2 Item Master

The central repository of all products and SKUs.

**Core fields:**
- Item code, item name, description
- Item category and sub-category
- Base unit of measure (UoM) — links to UoM Master
- Secondary UoM with conversion factor (e.g. 1 carton = 12 units)
- Item type: finished good, raw material, service, configurable, made-to-order
- Status: active, inactive, discontinued
- Tax classification — links to tax rules
- HSN/SAC code (for GST)
- Base list price per currency
- Minimum order quantity
- Lead time (days)

**Custom fields:** any additional fields defined by the tenant (see §36)

**Sync:** Item Master can be owned by ERP. When ERP is master, items are read-only in the platform. Platform syncs on a configurable schedule or on-demand.

### 35.3 Customer Master

Extends the existing Account entity with formal master data attributes.

**Additional fields beyond Account:**
- Customer code (external reference)
- Customer classification (A/B/C tier, or custom)
- Credit limit, payment terms, currency
- Tax registration numbers (GSTIN, PAN, VAT etc.)
- Billing address, shipping addresses (multiple)
- KYC status and documents
- Assigned sales rep(s) and distributor(s)
- ERP customer code (for sync)

**Sync:** Can be owned by ERP or CRM. Bidirectional sync supported with master ownership config.

### 35.4 Distributor Master

Formal master for all distributor partners.

**Core fields:**
- Distributor code, name, legal entity name
- Contact details, addresses
- Territory / region assignment
- Authorised SKUs — which items this distributor can order
- SKU-level restrictions per account (see §17.2)
- Credit limit, payment terms
- Commission/attribution percentage (used in target attribution — see §17.2)
- Status: active, inactive, suspended
- Assigned internal contact (sales rep or manager)
- Tax registration numbers
- Bank details (for claim settlements)

**Custom fields:** any additional fields defined by the tenant

**Sync:** Can be owned by a distribution management system. Platform syncs from external system when configured as master.

### 35.5 User Master

Extends the existing user management with formal master data attributes.

**Additional fields:**
- Employee code
- Designation, department
- Reporting hierarchy (links to hierarchy engine)
- Territory assignment
- Target attribution percentage (configurable per user — see §17.2)
- Employment type: full-time, contract, distributor
- Join date, exit date

### 35.6 Currency Master

- Supported currencies per tenant
- Base currency (all reporting in base currency)
- Exchange rates — manual entry or synced from external source
- Rate effective date — historical rates preserved for accurate reporting
- Rounding rules per currency

### 35.7 Unit of Measure (UoM) Master

- UoM code and name (kg, litre, piece, carton, box, pallet etc.)
- UoM category (weight, volume, quantity, length)
- Conversion rules between UoMs within the same category
- Default UoM per item category

---

## 36. Custom Fields Engine

### 36.1 Philosophy

Any tenant admin can define additional fields and assign them to any form (input) or output document. The same field can appear in multiple contexts simultaneously. Custom fields are first-class — they appear in forms, output documents, reports, analytics, workflow conditions, and API responses.

### 36.2 Field Definition

When creating a custom field, the admin defines:

| Attribute | Options |
|---|---|
| Field name | Any string — used as label in UI and API key |
| Field type | Text, Number, Decimal, Boolean, Date, DateTime, Dropdown (single), Multi-select, Currency, Percentage, URL, Email, File upload |
| Validation | Required/optional, min/max length, min/max value, regex pattern, allowed values (for dropdown) |
| Default value | Optional |
| Help text | Shown as tooltip in forms |
| API key | Auto-generated from field name, overridable |

### 36.3 Context Assignment

After defining a field, the admin assigns it to one or more contexts. A field can be assigned to any number of contexts simultaneously — the same field can appear on an input form, be printed on an output document, and be used as a workflow condition all at once.

**Input forms (where the field is filled in):**

*Commercial chain entities:*
- Service Order Request form
- Service Order form
- Proforma Invoice form
- Advance Shipment Notice (ASN) form
- Invoice form
- Deal form
- Claim form

*Master data:*
- Item Master form
- Customer Master form
- Distributor Master form
- User Master form
- Account form
- Contact form

*Any other entity form added in future — custom fields apply universally*

**Output documents (where the field is printed/shown):**

*Commercial chain outputs:*
- Service Order Request document
- Service Order document
- Proforma Invoice document
- Advance Shipment Notice (ASN) document
- Invoice document
- Claim document

*Any other output document — custom fields apply universally*

The same field assigned to both an input form and an output document will be filled in on the form and printed on the document automatically. No duplication of configuration required.

**A note on universality:**
Custom fields are not limited to the entities listed above. The list above represents the known entities at time of writing. As new entity types are added to the platform, they automatically inherit the custom fields framework. Any entity can have custom fields assigned to it.

### 36.4 Usage in Workflows

Any custom field on any entity can be used as a condition operand in the workflow builder (see §17.3). Example: `sor.complexity_level = "high"` routes to a different approval path.

### 36.5 Usage in Analytics

Custom fields automatically become available as dimensions and filters in the custom report builder. Example: report on revenue by `complexity_level`.

### 36.6 Usage in API

Custom field values are included in API responses under a `custom_fields` object. They are also accepted in API request bodies when creating or updating entities.

---

## 37. Commercial Engine

### 37.1 Additional Invoice Costs

Beyond product line items, invoices can include additional cost lines. These are configurable per tenant.

**Standard additional cost types (all optional, tenant-configured):**
- Freight / logistics
- EXIM (export/import duties)
- Handling charges
- Insurance
- Packaging
- Installation
- Other (free-text label)

Each cost type has: name, calculation method (fixed amount, percentage of subtotal, per-unit, or formula), applicable currency, tax treatment, and whether it appears on the output document.

Additional costs can be set as defaults (always added to invoices of a certain type) or added manually per invoice.

### 37.2 Tax Engine

Tax rules are configurable per tenant and applied automatically based on item, account, and transaction type.

**Tax rule dimensions:**
- Per item / item category (HSN/SAC code)
- Per account type or account location
- Per transaction type (domestic, export, SEZ)
- Per date range (tax rate changes are versioned)

**Supported tax types:**
- GST (CGST + SGST + IGST with inter/intra-state rules)
- VAT
- Custom (any name, any rate)
- Compound taxes (tax on tax)
- Tax exemptions per account or per item

Tax calculations are shown line by line on all output documents. Tax amounts are tracked separately from base amounts throughout the commercial chain.

### 37.3 Rates

A general-purpose rates table for any configurable rate the tenant needs:

- Freight rates (per kg, per km, per route)
- Exchange rates (also in Currency Master — linked)
- Commission rates
- Service rates
- Any custom rate type

Rates have effective date ranges. Historical rates are preserved for accurate retroactive calculation.

### 37.4 Discounts

Extends the existing pricing engine:

- Discount rules per customer, customer tier, item, item category, volume, or combination
- Discount types: percentage, fixed amount, free goods
- Discount approval thresholds — discounts above a configured % or amount require approval
- Discount visibility — configurable whether discount is shown on output documents
- Promotional discounts with date range and eligibility rules

---

## 38. Claims

### 38.1 What is a Claim

A claim is a formal request from a distributor or sales rep for a refund, credit, or adjustment. Claims can be linked to any commercial entity or be standalone.

**Claim types:**
- Damaged goods
- Short delivery (quantity received less than invoiced)
- Pricing dispute
- Promotional rebate
- Returns
- Other (free-text)

### 38.2 Claim Creation

- Created by a distributor or sales rep
- Optional link to: Invoice, SO, SOR, or standalone
- Line items: item, quantity, claimed amount, reason
- Supporting documents: photos, delivery notes, any file upload
- Custom fields applicable to claims (see §36)
- Status on creation: `draft`

### 38.3 Submission and Processing

- Creator hits **Send** — this is the single action required from the distributor or rep. No internal approval flow.
- Status moves to `submitted`
- Platform records the claim with full audit trail
- If a third-party claims processing system is configured (see §39), the claim is immediately pushed to that system via integration
- Further processing (approval, settlement) happens in the third-party system
- Settlement status and amount can be pushed back to the platform from the third-party system for visibility

### 38.4 Claim Visibility

- Distributor sees their own claims and status
- Sales rep sees claims from their assigned distributors
- Manager sees claims across their team
- Director sees all claims

---

## 39. Integration Hub

### 39.1 Philosophy

Every entity in the platform can be connected to a third-party system. The platform never forces double entry. If a client has an ERP, the ERP is the master for the entities it owns. The platform consumes from it, presents the data, and pushes back only what the third party needs.

All integrations are OpenAPI-compliant. The platform both exposes OpenAPI endpoints (for third parties to push/pull) and consumes third-party OpenAPI endpoints (to push/pull from them).

### 39.2 Master Ownership Configuration

For every entity type, the tenant admin configures:

| Setting | Options |
|---|---|
| Master system | Platform / Named third-party system |
| Sync direction | Platform → third party / Third party → platform / Both |
| Sync trigger | Real-time (webhook) / Scheduled (configurable interval) / Manual |
| Field mapping | Map platform fields to third-party fields |
| Identifier mapping | Which field is the unique key for matching records |

When a third party is master for an entity, that entity is **read-only** in the platform. Create/edit is disabled in the UI with a clear label showing which system owns it.

### 39.3 Supported Integration Points

Every entity in the platform has an integration point:

**Master data:**
- Item Master ↔ ERP / product information system
- Customer Master ↔ ERP / CRM
- Distributor Master ↔ distribution management system
- User Master ↔ HRMS
- Currency rates ↔ financial system
- Targets ↔ planning / budgeting system

**Transactions:**
- Service Order Request ↔ any order management system
- Service Order ↔ ERP / operations system
- Proforma Invoice ↔ billing / ERP system (primary source for this client)
- Advance Shipment Notice (ASN) ↔ logistics / WMS / ERP system — platform can generate standalone or receive from external system or both
- Invoice ↔ ERP / billing / accounting system
- Claims ↔ claims processing system
- ETA and Dispatch Date ↔ logistics / WMS system (bulk upload or API push)

**Other:**
- Workflow triggers ↔ any system can trigger a platform workflow via webhook
- Analytics data ↔ BI tools (platform exposes data via API or webhook)

### 39.4 Third-Party System Registration

Tenant admin registers each third-party system:

- System name and type
- Base URL
- Authentication method (API key, OAuth 2.0, Basic)
- Credentials (stored encrypted under BYOK key)
- Health check endpoint
- Retry policy for failed calls

### 39.5 Sync Logs and Error Handling

- Every sync event is logged: entity type, record ID, direction, timestamp, success/failure, error message
- Failed syncs are surfaced in the admin integration dashboard with specific error details
- Retry is automatic (configurable retry count and interval)
- Manual re-sync available per record or per entity type
- Sync errors never block the user — the platform continues to function, sync retries in the background

### 39.6 Ops Bulk Operations via Integration

The ETA bulk upload and Dispatch Date bulk upload (§15.4) are available as both:
- **File upload** — CSV with SO reference and ETA/dispatch date columns
- **API push** — third-party logistics or WMS system calls the platform API directly

Both methods use the same matching and validation logic.

---

## 40. Advanced Custom Fields Engine & Formulas

### 40.1 Purpose
The platform requires a dynamic mechanism to collect industry-specific and company-specific data without altering the core database schema. The Advanced Custom Fields Engine allows tenants to define bespoke fields that can be attached to standard entities (e.g., Accounts, Contacts, Service Order Requests, Service Orders).

### 40.2 Field Types & Reusability
- Support for diverse field types: Text, Long Text, Number, Decimal, Currency, Percentage, Date, DateTime, Dropdown (Single Select), and Multi-Select.
- **Data Lineage**: Fields can be configured to span multiple entities. When a Service Order Request (SOR) is converted into a Service Order (SO), all applicable custom field values are automatically carried over.

### 40.3 Formula Engine & Type-Safe Logic
- **Computed Fields**: Fields can be marked as `is_computed`, meaning their values are derived from other fields using a defined formula.
- **Type-Safe Calculations**: Numeric math (`+`, `-`, `*`, `/`) is strictly limited to numeric, currency, and percentage fields.
- **Complex Conditional Logic**: Formulas support logical operators (`IF`, `AND`, `OR`, `NOT`). Functions like `CONTAINS` can evaluate multi-select arrays.
- **Dual-Layer Evaluation**: Formulas evaluate instantly on the client-side for UX, while the backend securely re-evaluates the AST upon submission.

---

## 41. Visual Field Builder & Universal Label Overrides

### 41.1 Drag-and-Drop Visual Builder
- **Canvas Layout**: Admins can drag and drop fields onto a visual representation of forms.
- **Excel-Like Formula Bar**: Provides an interactive, typeahead formula bar with syntax highlighting for fields and functions, combined with live validation.

### 41.2 Universal Label Overrides
- The system supports overriding the display label of *any* field in the platform—including standard native fields—universally across all screens.

### 41.3 Granular Permission Control
Access is controlled via granular permissions that can be assigned to any custom role:
- `tenant:manage_fields`: Create fields and use the visual builder.
- `tenant:manage_formulas`: Access the formula bar and define computational expressions.
- `tenant:manage_workflows`: Build workflow configurations.
- `tenant:manage_hierarchies`: Manage organizational structures.
- `tenant:manage_label_overrides`: Modify global field display labels.

---

## 42. Workflow Builder — Module-Gated Routes & Permission Queues

> **New in v1.4** — Extends §31 (Configurable Forms & Approval Engine) and §17 (Customisable KPIs, Workflows & Analytics). This section introduces two concepts not previously covered: **mandatory routes tied to licensed modules**, and **permission-queue-based approver assignment**. §31 and §17 remain valid.

### 42.1 Why Every Commercial Module Needs a Defined Process

When a company licenses a commercial module — such as Service Order Requests (SOR), Proforma Invoices, or the Distributor module — they are committing to a process they own. An SOR is not just a field-level data entry; it initiates a chain of responsibility: who reviews it, who confirms pricing, who authorises dispatch or dispatch readiness, who acknowledges the terms.

Without a defined process configured in the platform, the commercial entity has no consistent path. Anyone could approve anything — or nothing gets approved because no one knows they are responsible.

**The rule is simple:** if a module is licensed, its core entity cannot be submitted until the company has configured at least one approval route for it. This is enforced by the platform automatically. On the first day a module is activated, the admin sees a prompt in the workflow builder: *"You've enabled Service Order Requests. Before your team can submit SORs, please configure your approval route."* A default draft is provided as a starting point — they only need to activate it.

This is not busywork. It is the platform nudging the company toward having a clear, documented commercial process — which is the foundation of consistent commercial operations.

### 42.2 Building Approval Routes in the Workflow Builder

The Workflow Builder allows administrators to design approval flows as a series of steps (called **stops**). Each stop has one question to answer: *who actions this step?*

The platform supports four ways to answer that question:

**1. A specific person**
A named individual — e.g. "always goes to Sarah, the Finance Director". Simple, predictable. Best when there is a fixed approver who should always sign off at this level.

**2. Anyone at a hierarchy level**
Route to anyone at a given level in the organisational hierarchy — e.g. "any Regional Manager can approve this". Better than naming one person because it is resilient to that person being on leave or leaving the company.

**3. Whoever created the SOR's direct manager** *(Context-Resolved)*
The approver is dynamically determined from the entity itself. When the SOR arrives at this stop, the platform looks up who created the SOR and finds their direct manager. That person receives the notification and is responsible for the step.

This is the most powerful form because it adapts automatically to the organisational structure. If a different rep in a different region creates an SOR, it automatically routes to *their* manager — no manual routing rules required, no exceptions to manage.

Other examples of context-resolved routing:
- *Goes to the account owner* — useful if the account owner needs to confirm terms before submission
- *Goes to the manager's manager* — for higher-value SORs that require a two-level chain
- *Goes to a specific person named on the SOR* — the admin designates a custom field on the SOR form for "nominated approver", and the route sends it there

**4. Anyone with a specific permission** *(Permission Queue)*
Instead of designating one person or a fixed level, the stop is assigned to a **permission queue** — a pool of users who hold a specific approval permission (e.g. `approve_sor`). Every user in that pool sees the pending item in their work queue.

The first person to click **Claim** takes ownership of that stop. They have a configurable window (default 30 minutes) to action it. If they do not action it before the window closes, or if they click **Release**, the item returns to the queue and any other eligible user can claim it.

This prevents bottlenecks. If the company has four people who can approve SORs, no single person's absence or overload stalls the whole process. The queue distributes the work to whoever is available.

### 42.3 Mixing Approaches Across a Single Route

Routes can combine all four approaches across different steps. A typical SOR route for a growing business might look like:

| Step | What happens | Why |
|---|---|---|
| **Step 1** | Goes to the creator's direct manager (context-resolved) | Manager reviews whether the SOR makes commercial sense before it goes further |
| **Step 2** | Any user with `approve_sor_finance` permission (permission queue) | Finance team collectively owns pricing confirmation — whoever is available picks it up |
| **Step 3** | Always goes to the Operations Director (named person) | The same person always signs off final approval on every SOR |

This is completely configurable. A small company might have a single step. An enterprise might have five.

### 42.4 The Rework ("Send Back") Mechanic

Any approver at any step can send an entity back to a previous step rather than rejecting it outright. This is called **sending back for rework**.

When an approver clicks **Send Back**, they select which previous step to rewind to and write a brief note explaining what needs to change. The entity returns to that step, the relevant person is notified, and when they re-action it, the approval process continues forward from that point.

This is important for commercial reality. An SOR is rarely wrong enough to be rejected outright — it is more commonly incomplete or misconfigured. Send-back allows the correction to happen within the workflow rather than requiring the whole entity to be cancelled and recreated.

### 42.5 What the Admin Interface Provides

The Workflow Builder UI exposes these concepts to administrators without requiring technical knowledge:

- **Visual step builder**: Drag and drop stops onto a canvas in order. Name each stop. Set the approver type using dropdowns and a plain-English summary.
- **Draft and activate**: Routes start as drafts. The admin can build and preview without it going live. When ready, they activate. In-progress approvals on old routes continue on their original version — nothing breaks mid-process.
- **Permission manager integration**: The permission-queue approver type is directly linked to the platform's permission system. Assigning a user the `approve_sor` permission automatically adds them to the relevant queues.
- **Default route templates**: By module, the platform provides a suggested default route (single stop, permission queue, `manage_commercial_operations`). Admins can use this as-is or build from scratch.
- **SLA warnings**: Each step can have an SLA — a maximum number of hours before an escalation fires. The SLA clock pauses while a stop is actively claimed by someone.

---

## 43. ETA Change Request — Controlled ETA Amendments

> **This section adds a new business process on top of the existing ETA management described in §15.5 (ETA Notification & Dispatch Date Confirmation).** §15.5 defines how operations staff update the SO's ETA directly via bulk upload or API. This section adds a separate, auditable change request flow that allows *anyone* in the organisation to request an ETA change, with the change only taking effect after an approval hierarchy approves it. §15.5 remains fully valid and unchanged.

### 43.1 The Business Problem

Currently, ETA changes are initiated by operations directly. But the need to change an ETA often originates elsewhere:

- A customer calls the assigned rep to ask for a delivery delay
- A distributor's site is not ready and they need more time
- An account manager or back office person receives a request from the client's procurement team

In these cases, the person who receives the request is not the person who can make the change. The current process is informal: call the ops team, explain the situation, hope it gets actioned. There is no audit trail and no approval control.

This feature replaces that informal path with a structured, trackable, approved change request.

### 43.2 The Change Request Entity

When any internal user (rep, manager, distributor contact, account manager, back office) needs an ETA changed, they submit an **ETA Change Request** on the SO. The request captures:

- **What** — the new ETA date they are requesting
- **Why** — a freetext reason (required) and an optional categorised reason type (e.g. "Customer Request", "Logistics Delay", "Production Issue")
- **Who** — the requestor identity is auto-filled from login. The requestor cannot impersonate another user.
- **When** — the submission timestamp is server-generated. The requestor cannot backdate.

The old ETA is automatically captured at the moment of submission — it does not need to be entered manually.

### 43.3 One Request at a Time, Full History Kept

At any given time, there is at most **one open (pending) ETA change request per SO**. If a request is already pending, no new one can be opened until the first is resolved (approved, rejected, or withdrawn).

All past requests — including rejected and withdrawn ones — are permanently stored and visible on the SO. This gives the ops team, managers, and auditors a complete picture of every ETA change that was ever sought for an SO:

- Who requested, when, what they asked for, and why
- Who approved or rejected, with their rationale
- What the ETA was before and after each approved change

### 43.4 Approval Hierarchy (Custom Workflow)

The ETA Change Request routes through a **custom WorkflowRoute** configured by the tenant admin in the Workflow Builder. There is no fixed approval path — the tenant defines it.

Examples:
- **Simple:** Rep submits → back office approves and commits the change
- **Multi-stop:** Rep submits → direct manager approves → operations director approves → ops team commits
- **Context-based:** Automatically routes to the originating rep's manager at step 1, then to whoever holds the `approve_eta_change` permission at step 2

The same Workflow Builder used for SOR, Proforma, and other entity approvals is used here. The same stop types apply: named user, role, permission queue, context-resolved (e.g. originator's manager), value-threshold.

**The final stop must be actioned by someone with the `edit_eta` permission on the SO.** This person is the one who formally commits the change. When they approve, the system automatically writes the new ETA to the SO — no separate manual update needed.

### 43.5 Post-Dispatch Warning

If the SO has already been dispatched (i.e. a dispatch date exists) at the time a change request is submitted, the request is still accepted. However:

- A clear warning is shown to the requestor at submission: *"This SO has already been dispatched. Changing the ETA at this stage should be coordinated with logistics."*
- A persistent warning banner is shown to every approver at each workflow stop
- The final approver sees the warning prominently before confirming the change

This preserves the business's ability to change ETA even after dispatch, while ensuring informed decision-making throughout the chain.

### 43.6 Withdrawal

The requestor can withdraw their own request at any time while it is still pending. This cancels the approval process for that request and frees the SO for a new request to be submitted immediately.

Back office users and admins can also withdraw any request on behalf of the requestor.

### 43.7 Audit Trail

Every ETA change request is an audited event:
- Request created — logged with requestor, old/new ETA, reason
- Each stop actioned — logged with approver, decision, and notes
- Final ETA committed — logged against the SO as a standard ETA update with source tagged as `eta_change_request`
- Request rejected or withdrawn — logged with reason

All audit events are immutable and retained per the platform's standard 7-year audit retention rule.

### 43.8 Notifications

| Event | Who is notified |
|---|---|
| Request submitted | First approver in the chain |
| Post-dispatch request submitted | First approver — elevated urgency |
| Approver actions their step | Next approver in the chain |
| Request approved + ETA committed | Requestor + SO originator |
| Request rejected | Requestor |
| Request withdrawn | Approver who was notified but hasn't acted yet |

All notifications follow user channel preferences (in-app, email, WhatsApp) as configured per §23.

### 43.9 UI Entry Points

The request flow is accessible from:
- **SO detail page (web)** — "Request ETA Change" button, visible to all users with SO read access
- **Distributor portal** — Same button on the distributor's SO view
- **Mobile** — Available via the SO card linked from a deal
- **Workflow queue** — Approvers see pending requests in their standard approval queue

### 43.10 Who Can Do What

| Role | Can submit | Can withdraw | Can approve | Can commit ETA |
|---|---|---|---|---|
| Any SO viewer (rep, manager, distributor, account manager, back office) | ✓ | Own requests only | Per workflow config | Only if `edit_eta` permission |
| Admin / back office | ✓ | Any request | Per workflow config | If `edit_eta` permission |
| Final approver with `edit_eta` | ✓ | Own requests | ✓ | ✓ |

---

*End of Business Requirements Document v1.5*

*This document represents the full feature scope as defined through collaborative discovery sessions. It is intended as the foundation for technical specification, design, and development planning. All features are subject to prioritisation and phasing as defined in §34.*

---

**Document Control**

| Version | Date | Status | Author |
|---|---|---|---|
| 1.0 | 2026 | Superseded | Discovery Session |
| 1.1 | 2026 | Superseded | Discovery Session — Added desktop web rep, desk rep features, device strategy, QR check-in, tablet features, responsive design, account ownership model |
| 1.2 | 2026 | Superseded | Extended scope — Lead management, external enrichment, commercial ops, customer service and ticketing, product catalogue, pricing engine, RfQ, configurable quote workflows, form builder, approval engine, config inheritance, data ingestion, platform phasing |
| 1.3 | 2026 | Superseded | Distribution flow — Distributor user type, SOR, configurable pipeline entity chain, Proforma Invoice with external source, Ops ETA and Dispatch Date bulk upload, permission-based approval, full chain tracking. Revenue Target Engine with SKU-level and account-level targets, configurable attribution chain. Workflow builder rearchitected with full boolean logic and parallel branches. Master Data Management (Item, Customer, Distributor, UoM, Currency, User). Custom Fields Engine. Commercial Engine (taxes, additional costs, rates, discounts). Claims module. Integration Hub with OpenAPI-first architecture and master ownership config per entity. |
| 1.4 | 2026-03-15 | Superseded | Workflow & Approval update — §42 added. Module-gated mandatory WorkflowRoutes: commercial modules require a configured route before entity submission is possible. Permission-queue approver type: pool-based claim-and-release assignment for any approval step. Context-resolved approver type: dynamic resolution from entity context (originator's manager, account owner, etc.). Rework mechanic: send-back to any prior step with a reason. Tech Spec §81-82, DB Schema §27, API Contract §85-87. |
| 1.5 | 2026-03-15 | Superseded | ETA Change Request — §43 added. Any internal user with SO read access can submit a formal ETA change request. Request routes through a custom WorkflowRoute before the SO's ETA is committed. Full history kept per SO. Post-dispatch warning shown throughout the chain. Tech Spec §83, DB Schema §28, API Contract §88. |
| 1.6 | 2026-03-17 | Current | Dynamic Rule-Based Targets — Overhauled the target assignment and KPI engine to support AND/OR logical coverage groups, target cloning, and interactive leaderboards. Older 1:1 KPI mapping approaches are deprecated. |

---

## 44. Target Setting & KPI Leaderboard Engine (v1.6 Update)
*(Note: Sections 17.5 and other legacy KPI concepts discussing simple target assignment are superseded by this section).*

### 44.1 Advanced Target Engine
- The platform shifts from assigning simple dollar targets to building coverage rules.
- Sales Heads use an interactive Rule Builder to define territories using AND/OR grouping on Regions, Products, and Accounts.
- Overlaps (e.g., two reps given the exact same region) trigger intelligent alerts but do not block assignment.
- Both Revenue and Volume targets can be assigned at a global or line-item granularity, and can be cloned between reps for fast setup.

### 44.2 The /kpis Dashboard
- Transformed from a static view to an interactive intelligence hub.
- Features include Global Scope filtering (Time, Region, Account), Executive summary rings, and contextual Sales Intelligence Alerts (e.g. noticing particular SKUs falling behind).
- The Ranked Leaderboard highlights performance at a glance and drills down into line-item success or failure per user.

---

## 46. Sales Operations Module — Entities, State Machines & Workflows

### 46.1 Overview & Authority

The Sales Operations module governs the full commercial fulfilment lifecycle — from SOR creation through to invoice, payment, and claims resolution. It operates on the same entity chain defined in §16 and extends it with a comprehensive state machine engine, granular workflow configuration, and a full set of operational tools for back office and operations teams.

Where this section conflicts with any other section on Sales Operations topics, this section takes precedence.

### 46.2 Entities & Their Purpose

| Entity | Abbreviation | Purpose |
|---|---|---|
| Sales Order Request | SOR | Sales-to-operations handover. Created from a Deal after PO receipt. Routes through configurable approval workflow before conversion to SO. |
| Sales Order | SO | Confirmed order for fulfilment. Created from an approved SOR or directly depending on configuration. |
| Proforma Invoice | Proforma | Pre-delivery pricing confirmation. Created from SOR or received from external system. Requires approval before sending to recipient. |
| Invoice | Invoice | Billing document linked to SO. Tracks payments and outstanding balance. |
| Advance Shipment Notice | ASN | Dispatch notification. Created when an SO is dispatched. Sent to the recipient rep or distributor. |
| Claim | Claim | Post-delivery dispute. Raised against invoices, SOs, or SORs. |
| ETA Change Request | ETA CR | A formal request to change an SO's delivery date. Routes through a configured approval workflow. |
| Customer Agreement | LTA | Long-term pricing agreement with accounts or distributors. |
| Target Scheme | Scheme | A collection of revenue and volume targets with incentive slabs assigned to reps or distributors. |
| KPI Basket | KPI Basket | A collection of operational metrics with weighted scoring assigned to individuals or teams. |

### 46.3 Universal Workflow State Machine

All entities that pass through an approval workflow share a common status pattern. Individual entity state machines extend this base with their own post-workflow statuses.

**Workflow progression states:**

| State | Description |
|---|---|
| `draft` | Being prepared; not yet submitted into the workflow. |
| `submitted` | Entered the workflow queue; currently at the first node. |
| `approved` | Cleared at least one node; now at a subsequent node. Intermediate state in multi-node workflows. |
| `accepted` | All nodes fully cleared; workflow complete. Ready for next business action. |
| `rejected` | An individual approver within a node rejected the entity. Terminal state. Only approvers can reject — node processors cannot. |
| `returned` | A node processor returned the document. Only possible when the workflow has more than one node and the node is configured to allow return. The return destination is configurable per workflow node. |

**Interruption states — can overlay any non-terminal state at any point in the lifecycle:**

| State | Resumable | Description |
|---|---|---|
| `on_hold` | Yes | Entity and full chain frozen. No new linked entities can be created or advanced. Resumed by an authorised user. On resume, entity returns to its pre-hold state — no workflow re-run required for already-accepted entities. |
| `cancelled` | No | Entity and full chain cancelled. All linked non-terminal entities cascade to `cancelled`. Completed activities (delivered ASNs, paid invoices, settled claims) are never reversed. |
| `change_requested` | Yes | Frozen pending resolution of a third-party change request. Resolves to either the requested new state (if approved) or reverts to the pre-freeze state (if rejected). |

Interruption states are stored as dedicated fields on the entity record, not as values in the primary status enum, so they can overlay any lifecycle status without replacing it.

### 46.4 Entity Cascade Chain

All workflow-enabled entities exist within a cascade chain. Status interruptions — hold, cancel, change-request — propagate atomically through the entire chain.

**Chain structure:**
```
SOR (Sales Order Request)
 └── SO (Sales Order)
      ├── Proforma Invoice
      ├── ASN (Advance Shipment Notice)
      ├── Invoice
      └── ETA Change Request
```

Auto-linking: if a Proforma, ASN, or Invoice is created with a matching SO reference, the system links it automatically.

**Cascade rules:**

| Direction | Rule |
|---|---|
| Downward (parent → children) | Mandatory. Holding or cancelling a SOR cascades to all linked SOs and their children. |
| Upward (child → parent) | Mandatory. Holding or cancelling an SO also puts the originating SOR on hold or cancels it. The cascade continues upward through the full chain. |
| Atomicity | All affected entities transition in the same database transaction. Partial states are never permitted. |
| Terminal state respect | Entities already in `paid`, `delivered`, `settled`, `cancelled`, or `rejected` are not re-processed by the cascade. |

### 46.5 Third-Party Change Request

Any post-SO-creation change request from a distributor, logistics provider, or customer — or from an internal user without direct action permission — enters the Change Request flow rather than being applied directly.

**Change request types:**

| Type | Effect if approved | Effect if rejected |
|---|---|---|
| `eta_change` | ETA and dispatch date updated on SO; cascade follows. | ETA unchanged; freeze lifts. |
| `pause` | Full chain goes `on_hold`; cascade follows. | Chain continues normally; freeze lifts. |
| `terminate` | Full chain cancelled; cascade follows. | Chain continues normally; freeze lifts. |

When a change request is submitted, the full chain is frozen in `change_requested` state and all new activity is blocked. The approval hierarchy is notified. On resolution — approved or rejected — the chain either applies the change or returns to its pre-freeze state.

### 46.6 Workflow Engine — Node Types & Routing

The workflow engine governs all approval and routing flows across the Sales Operations module. It uses a visual, node-based designer that allows tenant admins to configure flows without code.

**Node types:**
- **Work-stage node** — a user or team reviews the entity and takes action (approve, reject, return, or advance)
- **Fork node** — splits the flow into parallel branches, simultaneously activating every outgoing branch
- **Join node** — merges parallel branches using AND logic (all branches must complete) or OR logic (the first branch to complete advances the flow; remaining branches are cancelled)

**Transition routing:**
Outgoing edges from each node carry conditions on entity field values. When a node completes, the engine evaluates all outgoing edges, scores them by how many conditions are satisfied, and selects the most specific passing edge. In a genuine tie, a route-choice dialog is shown to the current user. Every node must have exactly one default edge (no conditions) as a fallback.

**Within-node approval levels:**
A single work-stage node can contain multiple sequential approval levels. Each level can have an activation condition — for example, Level 2 only activates when the order value exceeds a configured threshold. Higher-level approvers within a node can override lower-level approvers who have not yet acted. Auto-approve timeouts and escalation paths are configurable per level.

**Three-tier assignment model:**
1. **Eligible pool (config time)** — the workflow admin defines who is eligible to work on each node: a role, a named list, or conditional sub-pools based on entity field values (e.g. routing North territory orders to the North operations team automatically)
2. **Queue assignment (default)** — work is placed in the queue of all eligible users simultaneously; the first to claim it removes it from the others
3. **Manual override (optional)** — a user with the `can_assign` permission can pick a specific individual from the eligible pool, overriding the queue assignment

**Workflow versioning:**
When a workflow is modified, all in-flight entities continue on the version active when they were submitted. The new version applies only to entities submitted after the change. Every entity carries a reference to its exact workflow version, visible in the audit trail.

### 46.7 Target Schemes & Incentives

Target Schemes assign revenue and volume targets to reps, distributors, and teams. Targets can be set at global level or at line-item granularity — per SKU, per product category, or per account. Incentive types supported: volume-based (per ton), quantity-based, total lifting, and SKU-segment specific. Schemes can be structured on monthly, quarterly, or annual cycles and cloned between reps for fast setup.

Schemes are created and maintained by users with the `manage_schemes` permission. Attainment is calculated from confirmed invoices in real time. Per-rep overrides allow a manager to customise targets for individual reps within a cloned scheme without editing the base scheme.

### 46.8 KPI Baskets

A KPI Basket collects operational metrics with weighted scoring. Each basket defines a set of metrics, the weight of each, and the scoring formula. Baskets are assigned to individuals or teams. The weighted score is displayed on the KPI dashboard alongside target attainment. Multiple baskets can be assigned to the same individual with different periods and scopes.

### 46.9 Customer Agreement (LTA)

Long-term pricing agreements define fixed pricing, volume commitments, and terms for a specific account or distributor over a defined period. LTA pricing takes precedence over standard price master rules when a quote or order is created for an account with an active LTA. Expiry of an LTA generates an advance notification so the account manager and operations team can initiate renewal before the agreement lapses.

### 46.10 Granular Permissions

All Sales Operations entities support a granular `entity:action` permission model. Key permissions include: `view`, `create`, `edit`, `delete`, `submit`, `approve`, `reject`, `recall_any`, `edit_accepted`, `on_hold`, `cancel`, `can_assign`, `workflow.view`, `workflow.configure`, and `edit_eta`. Permissions are configured in the Role Builder and flow through the universal config inheritance model.

---

## 47. Distributor Portal

### 47.1 Overview

The Distributor Portal is a dedicated web-based interface for external distributor partners. It runs on the same underlying data and workflow engine as the main Clientera platform but presents a simplified, partner-appropriate interface. Distributors access their portal via a unique URL and their own credentials, entirely separate from internal platform credentials.

The portal is designed to make ordering, order tracking, and account management as simple as possible for a partner who does not need to see internal operations, pricing strategy, or other distributors' data.

### 47.2 Access & Authentication

Distributors are pre-registered in the platform by the system administrator. The admin uploads distributor master data — name, ERP reference code, registered email, mobile number, and assigned role. The system automatically sends a security code to the distributor's registered email and mobile for verification.

On first login, the distributor is required to change their password. A Forgot Password option is available from the login screen at all times. Employee access to the portal uses Active Directory integration for authentication.

### 47.3 Distributor Home Page — Sales Dashboard

After logging in, the distributor lands on a Sales Dashboard showing Actual versus Target Sales in graphical form for the past 12 months. Dashboard data refreshes every 8 hours.

A banner section on the home page displays announcements, promotions, and notifications relevant to the distributor. The admin controls the visibility of these communications, enabling or disabling them per distributor or per distributor region.

From the home page the distributor can navigate to: the Product Catalogue, their Account Statement, and any active schemes or offers.

### 47.4 Placing Orders

Distributors place orders using a multi-level product hierarchy filter — a category, segment, and SKU selection experience. When a new order is submitted it appears with the status *Order Requested*.

**Full order workflow:**
1. Distributor submits order → status: *Order Requested*
2. Sales Manager reviews and forwards to the operations team for pricing
3. Operations team creates a Proforma Invoice with confirmed pricing and uploads it to the portal
4. Sales Manager reviews and approves the Proforma
5. Proforma becomes visible to the distributor. Distributor reviews confirmed pricing and accepts by ticking the confirmation checkbox
6. Order status changes to *Order Accepted* and appears under Confirmed Orders
7. Sales Manager pushes the confirmed order to the ERP via API. ERP returns an order reference number
8. Order status updates to *ERP Order* with the reference number visible to the distributor

### 47.5 Order Tracking

Distributors can view the current status and estimated delivery date for all confirmed orders. ETAs are uploaded by the logistics team through the backend and are immediately visible to the distributor when updated. Dispatch plans for confirmed orders are also visible so the distributor can plan for receiving goods.

### 47.6 Proforma Invoice

Distributors view and download their Proforma Invoices directly from the portal. The Proforma includes confirmed pricing, line items, and quantities. To approve, the distributor selects the acceptance checkbox. Price negotiations are raised through their assigned internal contact — the portal checkbox confirms acceptance only.

### 47.7 Targets & Incentives

Distributors can view the sales targets assigned to them for the current period, broken down by total and per-SKU where applicable. Running attainment is calculated from confirmed invoices and shown as a live progress indicator.

Incentive schemes are visible in summary — the distributor sees which programmes they are enrolled in, the criteria, and their current tracking progress. Incentive types supported: volume-based (per ton), quantity-based, total lifting, and SKU-segment specific. Schemes can be structured on monthly, quarterly, or annual cycles.

### 47.8 Account Statement & Financial Records

From the *My Account* section the distributor can view and download their Sales Invoices and access their full sales ledger. The ledger shows payments made, credit notes, and debit notes. This is a read-only view — financial adjustments are managed by the back office.

### 47.9 Claims

Distributors submit warranty or quality claims directly through the portal. They specify the defect type or issue and upload supporting images or documents. Claims enter the platform's claims workflow and are routed for review and approval by the internal claims team. The status of submitted claims — open, in review, approved, rejected — is visible to the distributor at all times.

### 47.10 Announcements & Notifications

Notifications are delivered in-app within the portal and via email to the distributor's registered address. Notification types: order status changes, Proforma Invoice ready for review, delivery ETA update, dispatch confirmation, target attainment alert, claim status update, and incentive scheme announcements.

---

## 48. AI Intelligence Layer

### 48.1 Philosophy

AI in Clientera is not a feature bolted on — it is the operating layer that runs throughout the platform. Every AI capability is designed to reduce effort rather than add complexity. AI acts on structured data, provides advisory outputs, and always requires a human to confirm before any consequential action is committed. No AI feature autonomously changes an entity state or commits a transaction without user confirmation.

### 48.2 Model Architecture

The platform uses two model aliases that abstract provider and model selection:

- **`fast`** — latency-sensitive tasks: form pre-fill, natural language filters, digest generation, scoring overlays. Sub-second response target.
- **`smart`** — reasoning-intensive tasks: document thread summarisation, workflow bottleneck analysis, pricing intelligence. Higher latency accepted in exchange for quality.

Aliases are resolved to the appropriate model at runtime. BYOK tenants can point their own provider at either alias.

### 48.3 Sales Operations AI

**Smart Draft — SOR, SO, Proforma Invoice**
When a user opens a new SOR for an account with at least three prior orders, the form is pre-filled with AI-suggested line items, quantities, and pricing based on the account's order history. Pre-filled fields are marked with an "AI Suggested" badge. Users accept, dismiss, or edit each suggestion individually. Accepting logs an `ai_smart_draft_accepted` event in the audit trail.

**Anomaly Detection**
Every SOR and SO submission is checked against the account's historical ordering patterns. Anomalies flagged include: order value more than 40% above the account's trailing 6-month average, a product appearing for the first time for this account, and a quantity exceeding three times the account's historical maximum for a given SKU. Anomalies surface as an inline warning on the approver's panel before they action the document — never as a blocker.

**Payment Risk Score**
Computed when an invoice is created and refreshed daily. Uses the account's payment history, current overdue balance, order size relative to historical average, and seasonal payment pattern to generate a risk score (0.0–1.0) and risk label (`low`, `medium`, `high`, `critical`). Displayed on the invoice record and the account detail page as a rolling risk trend.

**Pricing Intelligence**
When creating a Proforma Invoice, a "Suggest Pricing" option analyses the last twenty confirmed Proformas for that account and product. It returns suggested unit prices with a confidence level (`high`, `medium`, `low`) and a plain-English note explaining the basis — for example: *"Based on 8 previous orders, last price ₹450/unit, trend: -2% per quarter."* Always advisory — never auto-applied.

**Claim Defect Classification**
When a claim is submitted with attached images, the AI reads the description and images and suggests a defect category from the tenant's configured claim categories and a severity level. Output is shown to the claims processor as a suggestion panel on the claim detail page. A similar resolved-claims panel is available when semantic search is enabled (Phase 2). Always human-confirmed — never auto-applied.

**Workflow Bottleneck Analysis**
Available from the workflow configuration page. Analyses all completed workflow runs for a route over the last 90 days and identifies: average approval time per node, the percentage of approvals that pass unchanged, and specific users who are statistical bottlenecks. Returns structured insight cards with a recommendation for each — for example: *"Node 2 (Regional Manager) approves unchanged 94% of the time. Consider removing or making it conditional for orders below ₹1L."*

### 48.4 Marketing AI

**Lead Score Overlay**
The AI contributes a signal overlay to the Marketing Manager's configured scoring model. It analyses enrichment data, news signals, and engagement patterns to surface leads showing buying intent before they cross the MQL threshold. Always advisory — never overrides the configured model without an explicit auto-promote rule referencing the AI signal.

**MQL Qualification Brief**
When a rep or SDR receives an MQL from the handoff queue, the AI generates a qualification brief: fit assessment, intent signals, suggested opening questions, and any enrichment signals that are commercially relevant. Delivered as a collapsible panel on the lead record.

**Campaign Insight Alerts**
The marketing analytics dashboard includes an AI insights panel identifying campaigns tracking significantly above or below expectations, suggesting budget reallocation, and flagging segments showing unusual engagement patterns.

### 48.5 Sales Activity AI

**Meeting Summary & Action Extraction**
After every meeting with a transcript available (from Fireflies, Otter.ai, or any connected transcription integration), the AI generates a structured summary — what was discussed, what was agreed, next steps — and extracts action items. The rep reviews and confirms before the summary is saved against the client record.

**Voice Notes — Transcription & Action Extraction**
On the mobile app, every record detail page has a microphone button. The rep records a voice note (max 5 minutes). The file is uploaded and transcribed via Groq Whisper, optimised for Indian English and regional accents. The AI then extracts action items — tasks, follow-up dates, mentioned names — presented as a collapsible "Extracted actions" panel. The rep accepts items as formal tasks on the record.

**Next Action Intelligence**
After every interaction, the co-pilot suggests the next logical action based on pipeline stage, transcript content, open follow-ups, and account frequency rules.

**Email Draft Assistance**
When a rep needs to reply to a client email, the AI drafts a suggested reply in the context of the full client record including the client's interaction history, open follow-ups, and pipeline stage. The rep edits and sends without leaving the platform.

### 48.6 Analytics AI

**AI Digest**
Delivered to each user at their configured time (default 08:00 local time) via in-app notification and optionally email. Content is generated from structured query results — actual numbers turned into natural language. Includes: count of pending approvals with the oldest waiting time, overdue invoices by total value, claims submitted today, target versus actual summary, and the single most overdue action item recommended for immediate attention.

**Target Commentary**
On the Target versus Actual dashboard and KPI basket view, an AI insights panel provides a one-paragraph commentary: current tracking percentage versus target, the top three underperforming accounts or SKUs, projected end-of-period outcome based on current trajectory, and one actionable recommendation. Updated every 6 hours; user can force a refresh.

**Natural Language Query**
A natural language input bar appears in the table toolbar of all main list pages — SOR, SO, Invoice, Claim, Account. Users type a question in plain language. The AI generates the corresponding filter set and applies it as if the user had set the filters manually. Filters appear as chips labelled "AI Filter" and are fully editable. The natural language bar never replaces the standard filter UI — it pre-populates it.

### 48.7 Data Management AI

**Smart Column Mapping — Bulk Import**
During file import, if uploaded column headers do not match the platform template, the AI suggests the correct field mapping. Mappings with confidence above 90% are auto-applied. Mappings between 60–90% are presented as suggestions the user must confirm. Below 60% the user maps manually.

**Duplicate Detection**
When creating a new Account or Contact, a background check runs after the user enters a name. Phase 1 uses `pg_trgm` fuzzy matching to catch typos, abbreviations, and near-identical names. Phase 2 (when semantic search is enabled) adds cosine similarity matching to catch semantic equivalents that keyword matching misses. Both phases surface an advisory inline warning — never a blocker.

**Document Thread Summarisation**
Every entity detail page has a "Summarise thread" button on the activity log panel. The AI generates a 3–5 sentence summary covering: what was requested, who approved or rejected and why, current status, and next required action. Cached for 1 hour; invalidated on any new activity.

### 48.8 Semantic Search

**Phase 1 — Keyword search (always active):** Entity number patterns, account names, and contact names matched using `pg_trgm` fuzzy search. Handles partial matches, typos, and abbreviations. Short queries (under 4 words) use exact plus trigram matching.

**Phase 2 — Semantic layer (when enabled):** Longer or descriptive queries run against vector embeddings on notes, descriptions, and title fields in parallel with keyword search. Auto-selection logic chooses between keyword and semantic search based on query length and pattern. A semantic toggle is available on the search page — off by default even after the semantic layer is enabled, so users can compare results.

### 48.9 AI Rate Limits

AI endpoints have separate, stricter rate limits enforced per user or per tenant:

| Endpoint Group | Limit | Window | Scope |
|---|---|---|---|
| Smart draft | 30 requests | 1 hour | Per user |
| Natural language query | 60 requests | 1 hour | Per user |
| Digest generation | 5 requests | 1 hour | Per user |
| Summarise | 20 requests | 1 hour | Per user |
| Pricing suggestion | 10 requests | 1 hour | Per user |
| Claim classifier | 30 requests | 1 hour | Per tenant |
| Workflow insights | 5 requests | 24 hours | Per tenant |
| Voice upload | 10 requests | 1 hour | Per user |
| Total AI tokens | 500,000 tokens | 24 hours | Per tenant (platform key) |

BYOK tenants have no platform token cap — their usage is billed directly to their own key.

### 48.10 AI Observability

Every AI call is logged — feature, model used, prompt tokens, completion tokens, latency, and any errors. The platform super-admin dashboard shows total tokens per tenant and estimated cost. Tenant admins see their own aggregate usage without access to raw prompts or completions.

---

*End of Clientera Business Requirements Document v2.0*

*This document represents the full feature scope as defined through collaborative discovery sessions and product refinement. It is intended as the foundation for technical specification, design, and development planning. All features are subject to prioritisation and phasing as defined in §35.*