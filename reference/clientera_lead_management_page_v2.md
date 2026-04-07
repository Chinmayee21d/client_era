# ClientEra — Lead Management Page
**Version:** 2.0 — Revised
**Changes from v1:** Feature order resequenced to match natural user journey; web-to-lead form duplication removed; conversion copy corrected to reflect duplicate detection flow; pricing table fabricated entry removed and corrected; Analytics section scoped to lead-relevant metrics only; Hero secondary CTA updated for buyer audience; Persona cards tightened to avoid repeating feature copy.

---

## Hero Section

**Headline:**
# From First Signal to Closed Deal — Without Losing Context.

**Subheadline:**
ClientEra's Lead Management turns scattered prospects into a single, intelligent pipeline — scored automatically, handed off cleanly, tracked completely.

**CTA Buttons:**
- [See It In Action] (Primary)
- [Explore Features] (Secondary)

**Visual:**
Animated customer timeline: Campaign → Lead → MQL → Sales Handoff → Account → Deal

---

## Problem Statement Section

### The Way Leads Are Managed Today Is Broken.

Three pain points — displayed as three cards with icons:

**Card 1 — The Visibility Black Hole**
Marketing loses sight of every lead the moment it's handed to sales. There's no way to know if a lead was picked up, ignored, or mishandled — until it's too late.

**Card 2 — The Context Drop**
When a lead becomes a deal, all the history — the campaign it came from, the pages visited, the content downloaded — lives in a different tool. Reps start blind.

**Card 3 — The Scoring Guesswork**
Most teams rely on gut feel or rigid manual rules to decide which leads are ready. Neither is reliable. High-fit leads get ignored; low-intent leads waste sales time.

---

## The ClientEra Approach Section

### One Entity. One Timeline. Zero Re-entry.

**Body copy:**
In ClientEra, a Lead and an Account are the same entity at different lifecycle stages. When a lead converts, nothing is rebuilt and nothing is lost. The campaign touch, the form fill, the enrichment data, the sales notes — all of it travels forward on a single, unbroken timeline.

**Visual:**
Horizontal flow diagram — [Unqualified Lead] → [Qualified Lead] → [Account: Prospect] → [RfQ / Quote] → [Deal in Pipeline] → [SO Created: Client] → [Invoice] → [Repeat]

> *"Old systems record what happened. ClientEra decides what should happen next — and executes it."*

---

## Feature Deep-Dive Sections

*Note to design team: Features are sequenced to follow the natural user journey — find a prospect → capture them → enrich their profile → score and qualify → hand off to sales → convert → nurture if not yet ready → measure everything.*

---

### Feature 1 — Prospecting Tools

**Section Title:** Find the Leads Your Competitors Miss.

**Body copy:**
Before a lead enters your pipeline, your team needs to find it. ClientEra gives reps and managers the tools to identify, map, and prioritise prospects — without leaving the platform.

**Three-column cards:**

**Territory Prospecting Map**
See a geographic map of your territory — your accounts (colour-coded by status), your colleagues' accounts (per sharing policy), and prospect markers: companies in the territory not yet in the platform, surfaced by the enrichment engine.

**Competitor Displacement Tracking**
Accounts flagged as using a competitor are marked for prospecting. The rep sees which competitor, when it was last noted, and the displacement strategy — and it feeds directly into their morning brief.

**LinkedIn Sales Navigator Integration** *(Growth & Enterprise)*
Search LinkedIn Sales Navigator from within ClientEra. Save a profile as a lead in one click. Lead data is pre-populated via the enrichment engine. Saved searches sync automatically — new matches appear as suggested leads without manual effort.

---

### Feature 2 — Lead Capture & Attribution

**Section Title:** Every Lead. Tracked From the First Touch.

**Body copy:**
ClientEra captures leads from every channel — and tags every single one back to its origin. No more arguing about which campaign drove the deal.

**Capture Sources:**
- **Web-to-Lead Forms** — Embeddable forms on your website or landing pages. Every submission creates a lead with source, UTM parameters, and campaign attribution automatically applied. Configurable fields, spam filtering, and automatic acknowledgement emails included.
- **LinkedIn Import** — Save a LinkedIn profile as a lead in one click. Professional data is pre-populated via the enrichment engine. Bulk import supported.
- **Email Campaign Clicks** — Contacts who click and fill a campaign form become leads attributed to that specific campaign and touchpoint.
- **Inbound RfQ** — A company emails a quote request before any relationship exists? They're a lead. Instantly tracked, not lost in someone's inbox.
- **Manual Entry & CSV Import** — For your team's outbound prospecting, referrals, and event lists.
- **Event Registrations** — Trade show or webinar attendees become leads attributed to that event campaign.

**Supporting detail:**
Every lead record shows its complete origin: which campaign, which channel, which specific asset or touchpoint, and the exact timestamp of first engagement.

---

### Feature 3 — External Data Enrichment

**Section Title:** Your Rep Should Never Need to Google a Lead.

**Body copy:**
For every lead in ClientEra, a background enrichment job runs daily — pulling intelligence from best-in-class sources and surfacing it directly on the lead record and pre-visit brief. The moment a lead enters the system, it starts getting smarter.

**What gets enriched — automatically:**

**Company Intelligence**
Company description, industry, headcount, funding rounds, revenue estimates, technology stack, recent news. Sources: Clearbit, Apollo, ZoomInfo, NewsAPI, Google News.

**News & Signals**
Any news mentioning the company in the last 30 days. Executive changes. Product launches. Expansion announcements. Partnership or acquisition news — surfaced under "What's Happening" on every lead card.

**Contact-Level Enrichment**
Current role and company verified against LinkedIn. Job title changes. Employment changes. LinkedIn activity — posts, shares, and comments that are publicly visible and professionally relevant.

**Career Event Alerts**
*"Priya Sharma, your main contact at Acme Corp, was promoted to VP Procurement last week."* Reps are notified the moment a key contact changes role or company — so no relationship signal goes unnoticed.

**Data Transparency:**
All enrichment data is clearly labelled in the UI with the provider name and the date it was last refreshed. Reps can flag data as incorrect — suppressing it and queuing a manual review. Every enrichment provider operates under a Data Processing Agreement.

---

### Feature 4 — AI-Assisted Lead Scoring

**Section Title:** Know Which Leads Are Ready — Before Your Reps Ask.

**Body copy:**
ClientEra scores every lead on two dimensions, continuously. No manual rules to maintain. No gut feel required.

**Two-column visual layout:**

| Fit Score | Intent Score |
|---|---|
| How well does this company match your ideal customer profile? | How strong are the signals of purchase readiness? |
| Factors: Industry, company size, geography, product relevance | Factors: Touchpoints, engagement depth, inbound vs outbound origin |
| Populated from enrichment data (Clearbit, Apollo, ZoomInfo) | Updated in real-time as new signals arrive |

**Combined Score:**
A single **0–100 score** computed from weighted fit and intent dimensions — updated continuously as new signals arrive.

**MQL Threshold:**
You set the score above which a lead automatically becomes an MQL and enters the handoff queue. Thresholds can differ per channel, per industry segment, or per campaign.

**AI Signal Overlay:**
The AI analyses enrichment data, news signals, and behavioural patterns to surface leads showing buying intent *before* they cross the threshold — so your team can act early. Always advisory. Never overrides your scoring model unless you explicitly configure it to.

---

### Feature 5 — Automated Lead Qualification

**Section Title:** Qualification That Fits Your Rules — Not Ours.

**Body copy:**
Whether a lead needs human review before entering the pipeline is fully configurable per tenant, per source channel, and per criteria rule.

**Examples:**
- LinkedIn imports always require human review
- Web form submissions from a known company domain are auto-qualified
- Leads with estimated revenue above your threshold require manager sign-off
- All others auto-qualify after 24 hours if no one acts

**Qualification Queue:**
Unqualified leads surface in a visible queue for the lead's owner and their manager — no lead goes unnoticed, no lead sits forgotten.

---

### Feature 6 — MQL Handoff to Sales

**Section Title:** The Cleanest Handoff in the Business.

**Body copy:**
When a lead reaches MQL status, the handoff is a structured, documented process — not a Slack message or a forwarded email.

**Handoff Flow — Step by Step:**

1. Lead reaches MQL score threshold, or Marketing manually promotes it
2. Lead enters the SDR queue or directly into Inside Sales / Field Sales queue
3. The receiving rep is notified with a full context brief: lead source, score breakdown, engagement history, enrichment profile, and Marketing's handoff notes
4. Marketing sees when the lead was picked up, by whom, and what happened — pipeline created, first meeting booked, or no action taken
5. If a lead sits unclaimed beyond a configurable SLA, both Marketing and the sales manager are notified automatically

**Handoff Notes:**
Marketing leaves structured notes with the specific opportunity, relevant product or segment, and any intelligence gathered from campaign interactions. These travel permanently with the lead through conversion.

**Rejection Loop:**
Sales can reject an MQL — but they must give a reason. The lead returns to Marketing's queue with the rejection reason attached. This closed loop continuously calibrates your scoring model against real-world sales feedback.

---

### Feature 7 — Lead Conversion

**Section Title:** One Click. Everything Carries Forward.

**Body copy:**
When a lead is ready, conversion is a single atomic operation. No manual data re-entry. No information loss. One action triggers the entire transition.

**What happens on conversion:**
- A new Account is created with status Prospect, inheriting all enrichment data from the Lead
- The Lead's contacts become Contacts on the new Account
- Any RfQs attached to the Lead transfer automatically — the Deal opens in the pipeline
- The Lead record is marked converted and preserved for audit — never deleted
- If the company name matches an existing Account, duplicate detection fires before conversion completes. You confirm whether to merge into the existing Account or create a new one — then the system handles the rest

**The lead record is never deleted.** Every conversion is fully auditable, traceable, and compliant.

---

### Feature 8 — Lead Nurture & Segmentation

**Section Title:** Leads That Aren't Ready Today — Won't Stay That Way.

**Body copy:**
Leads that don't reach the MQL threshold don't disappear. They stay in the nurture queue, managed through campaigns and sequences until their score crosses the line.

**Segmentation:**
Build audience segments from any combination of lead attributes — industry, geography, score range, source channel, engagement behaviour, or custom fields. Segments are dynamic — as a lead's attributes change, its segment membership updates automatically.

**Nurture Sequences:**
Multi-touch sequences with configurable triggers (time delay, engagement event, or score change), communication types (email, LinkedIn touch suggestion, or SDR call task), and branching logic based on how the recipient responded to the previous step.

**Suppression Management:**
Unsubscribes, bounces, and opt-outs managed natively. Suppression rules cascade across all campaign types by default — configurable to channel-specific suppression.

---

### Feature 9 — Lead Attribution & Analytics

**Section Title:** Every Lead, Traced Back to Its Source — and Forward to Its Revenue.

**Body copy:**
ClientEra doesn't just track leads — it tracks what they become. Every marketing touchpoint is connected to the pipeline value, deal, and revenue it ultimately produced.

*Note to design team: This section scopes to lead-relevant analytics only. Full campaign performance, budget management, and channel mix analysis belong on the Marketing page.*

**Pipeline Attribution**
Total pipeline value generated by marketing-sourced leads — broken down by campaign, channel, and time period. Shown as a funnel: leads generated → MQLs created → SQLs converted → deals opened → revenue won. Every deal traceable back to the campaign that originated it.

**Lead Velocity**
How quickly leads move from creation → MQL → first meeting. Velocity trends surface bottlenecks before they become pipeline problems. If MQL-to-meeting conversion is dropping, you see it before it damages revenue.

**Sales Feedback Loop**
MQL acceptance and rejection rates, broken down by campaign and segment. Rejection reasons categorised and trended over time — giving Marketing the data to continuously refine the scoring model.

**Marketing Influence Reporting**
Beyond pure attribution, the platform tracks marketing-influenced pipeline — deals where the account had at least one marketing touchpoint even if the lead originated from a rep or inbound channel. A more complete picture of marketing's contribution to revenue.

---

## Comparison Section

### Lead Management: Then vs. Now.

| Capability | Legacy CRM / Disconnected Tools | ClientEra |
|---|---|---|
| Lead-to-Account data flow | Lost on conversion — re-entry required | One entity, zero re-entry, full history travels forward |
| Lead scoring | Manual rules or gut feel | AI-assisted: Fit + Intent, continuously updated |
| MQL handoff | Email or Slack to sales | Structured handoff queue with context brief |
| Visibility after handoff | Marketing goes dark | Marketing sees pickup, pipeline status, and rejection reasons |
| Enrichment | Manual research before every call | Automated daily: Clearbit, Apollo, ZoomInfo, NewsAPI |
| Nurture | Disconnected email tool | Native sequences with branching logic and suppression |
| Attribution | Last-touch guesswork | Full funnel, every lead traced to campaign and revenue |
| Audit trail | None | Every action immutably recorded — untamperable |

---

## Personas Section

### Built for Every Role in the Commercial Team.

**Marketing Manager**
Own the full lead lifecycle — from campaign creation to MQL handoff. See what happens to every lead after it leaves your queue. Use rejection feedback from sales to sharpen your scoring model over time. Your pipeline attribution is always live, always accurate.

**SDR / Inside Sales Rep**
Arrive at every lead already briefed. The AI-generated qualification brief surfaces fit assessment, intent signals, and suggested opening questions before you make the first call. Your job is the conversation — not the research.

**Field Sales Rep**
Map your territory, spot prospect markers, and get alerted when a key contact at a prospect changes role or company. Every lead you own is enriched daily — so your pre-visit brief is already prepared when you need it.

**Sales Manager**
See the health of the handoff queue across your team. Spot unclaimed MQLs before they go cold. Track lead-to-pipeline conversion rates by rep in real time — without asking anyone for a report.

---

## AI Intelligence Section

### The AI That Works Before You Do.

Three capability cards:

**Lead Score Overlay**
The AI analyses enrichment data, news signals, and behavioural patterns to surface leads showing buying intent before they cross your MQL threshold. Always advisory — your scoring model stays in control.

**MQL Qualification Brief**
When a rep or SDR receives an MQL from the handoff queue, the AI generates a structured brief: fit assessment, intent signals, suggested opening questions, and any enrichment signals that are commercially relevant. Delivered as a collapsible panel on the lead record.

**Campaign Insight Alerts**
The marketing analytics dashboard includes an AI insights panel identifying campaigns tracking significantly above or below expectations — suggesting budget reallocation and flagging segments with unusual engagement patterns before you think to ask.

---

## Compliance & Security Section

### Enterprise-Grade Trust — From Day One.

**SOC 2 Type II · ISO 27001 · GDPR · India DPDP 2023**

- All enrichment data compliant with GDPR and India's DPDP Act 2023 from day one
- Contact erasure requests purge enrichment data along with all other personal data — automatically
- Every lead action, field edit, and status change immutably recorded in an append-only audit trail
- Records cannot be edited, altered, or deleted by anyone — not even system super-admins
- All enrichment providers operate under Data Processing Agreements

---

## Pricing Tier Relevance Section

### Available Across All Plans.

| Feature | Starter | Growth | Enterprise |
|---|---|---|---|
| Lead capture & web-to-lead forms | ✓ | ✓ | ✓ |
| AI-assisted lead scoring | ✓ (BYOK required) | ✓ | ✓ |
| MQL handoff workflow | ✓ | ✓ | ✓ |
| External enrichment (Clearbit, Apollo, ZoomInfo) | ✓ | ✓ | ✓ |
| LinkedIn Sales Navigator integration | — | ✓ | ✓ |
| Custom nurture sequences | — | ✓ | ✓ |
| Territory prospecting map | — | ✓ | ✓ |
| Platform-provided AI keys (no BYOK needed) | — | ✓ | ✓ |
| Predictive analytics & white-glove onboarding | — | — | ✓ |

---

## CTA Section

### Start Turning Signals Into Revenue.

**Headline:** Every lead has a story. ClientEra makes sure it's never lost.

**Body:**
From the first campaign touch to the signed invoice — one timeline, one system, zero context lost.

**CTA Buttons:**
- [Request Early Access] (Primary)
- [Book a Demo] (Secondary)

**Supporting line:** *Compliant with SOC 2 Type II, ISO 27001, GDPR, and India's DPDP 2023 from day one.*

---

## Page Footer Notes (for Design/Dev Team)

**Internal Section IDs to use:**
- `#hero` — Hero section
- `#problem` — Problem statement
- `#approach` — One entity, one timeline
- `#prospecting` — Prospecting tools
- `#capture` — Lead capture & attribution
- `#enrichment` — External data enrichment
- `#scoring` — AI-assisted lead scoring
- `#qualification` — Lead qualification
- `#handoff` — MQL handoff
- `#conversion` — Lead conversion
- `#nurture` — Lead nurture & segmentation
- `#analytics` — Lead attribution & analytics
- `#comparison` — Legacy vs. ClientEra
- `#personas` — Persona cards
- `#ai` — AI intelligence features
- `#compliance` — Compliance & security
- `#pricing` — Tier feature table
- `#cta` — Final CTA

**Design References:**
- Brand palette: Dark navy (#1A1F2E), Electric blue (#2D5BE3), Warm off-white (#F5F4F1)
- Typography: "client" in bold sans, "era" in italic serif — per logo treatment
- Diagrams: Use the horizontal chevron/arrow flow style from the pitch deck (Campaign → Lead → Sales Order → Invoice → Support)
- All AI features should be tagged with a subtle "AI" pill badge in the UI
- Enrichment data should display provider logo + refresh timestamp per the BRD spec (§26.4)
- Duplicate detection confirmation step in Feature 7 (Conversion) must be visually represented — show a modal or inline warning card, not a blocking screen

**Cross-page links this page should reference:**
- Sales Management page (pipeline after lead converts)
- Sales Ops page (SOR/SO chain after deal opens)
- Customer Support page (support tickets on the same client timeline)
- Marketing page (full campaign performance, budget management, channel mix analytics)

---

**Changelog from v1:**

| # | Issue | Fix Applied |
|---|---|---|
| 1 | Web-to-lead forms duplicated in Feature 1 and Feature 8 | Removed from Prospecting Tools (Feature 8); kept and expanded in Lead Capture (now Feature 2) |
| 2 | "No confirmation screens" contradicted BRD duplicate detection flow | Rewrote conversion copy to accurately describe the confirm-merge step |
| 3 | Pricing table included "Predictive lead analytics" — not a BRD term | Replaced with "Predictive analytics & white-glove onboarding" — exact Enterprise tier language from BRD §3 |
| 4 | Pricing table included "Cross-company benchmarking" — platform feature, not lead-specific | Replaced with "Platform-provided AI keys" — directly relevant to lead scoring tier difference |
| 5 | Feature order did not follow natural user journey | Resequenced: Prospecting → Capture → Enrichment → Scoring → Qualification → Handoff → Conversion → Nurture → Analytics |
| 6 | Analytics section included campaign spend and channel mix — Marketing page territory | Scoped to lead-attribution-relevant metrics only; added note directing full analytics to Marketing page |
| 7 | Hero secondary CTA "Read the Docs" aimed at developers, not buyers | Changed to "Explore Features" |
| 8 | Persona cards repeated feature copy verbatim | Rewrote each persona card to describe the role's experience and outcome, not re-list features |

---

*Document prepared from: ClientEra BRD v2.0 (§3 Pricing Tiers, §8 Marketing Manager Features, §25 Lead Management & Prospecting, §26 External Data Enrichment, §48 AI Intelligence Layer) and ClientEra Pitch Deck — The Unified Commercial OS.*
