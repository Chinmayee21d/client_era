# Clientera — Distributor Management Portal
## Business Requirements Document
**Version:** 1.1 — Current
**Status:** For Review
**Classification:** Confidential

---

## Document Control

| Version | Date | Status | Summary |
|---|---|---|---|
| 1.0 | 2026-03-28 | Superseded | Initial release. Full end-to-end scope covering distributor portal and all internal platform workflows required to support it. |
| 1.1 | 2026-03-30 | Current | Gap closure: 6-level product hierarchy; shortfall from target; Logistics Planner and Dispatcher as distinct personas; Reports module (§23); Sales Manager payment receipt view; explicit Confirmed Order / SAP Order status labels; SOR recall mechanic; privileged field edit post-acceptance; resolution queue; Dispatch Plan as distinct from ETA. |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Scope & Boundaries](#2-scope--boundaries)
3. [Personas](#3-personas)
4. [Distributor Lifecycle Overview](#4-distributor-lifecycle-overview)
5. [Distributor Onboarding & Access Management](#5-distributor-onboarding--access-management)
6. [Distributor Portal — Home & Dashboard](#6-distributor-portal--home--dashboard)
7. [Product Catalogue & Order Placement](#7-product-catalogue--order-placement)
8. [SOR Approval Workflow — Internal](#8-sor-approval-workflow--internal)
9. [Proforma Invoice — Creation, Approval & Acceptance](#9-proforma-invoice--creation-approval--acceptance)
10. [Order Fulfilment — ETA, Dispatch & ASN](#10-order-fulfilment--eta-dispatch--asn)
11. [Targets, KPIs & Incentive Schemes](#11-targets-kpis--incentive-schemes)
12. [Claims Management](#12-claims-management)
13. [Distributor Account Statement & Financial Records](#13-distributor-account-statement--financial-records)
14. [Announcements, Notifications & Communications](#14-announcements-notifications--communications)
15. [Sales Manager — Distributor Management View](#15-sales-manager--distributor-management-view)
16. [Logistics Planner — Pricing & Delivery View](#16-logistics-planner--pricing--delivery-view)
17. [Dispatcher — Dispatch Execution View](#17-dispatcher--dispatch-execution-view)
18. [Claims Team — Internal Processing View](#18-claims-team--internal-processing-view)
19. [System Admin — Distributor Administration](#19-system-admin--distributor-administration)
20. [Permissions & Role Model](#20-permissions--role-model)
21. [Audit Trail](#21-audit-trail)
22. [Notifications Reference](#22-notifications-reference)
23. [Integration Points](#23-integration-points)
24. [Reports](#24-reports)

---

## 1. Executive Summary

This document defines the business requirements for the Clientera Distributor Management Portal — a dedicated system that manages the complete commercial relationship between an organisation and its distributor network.

The system has two sides that are inseparable. The **Distributor Portal** is a dedicated web interface that external distributor partners use to place orders, track fulfilment, approve pricing, manage claims, and monitor their targets and performance. The **Internal Platform** is where Sales Managers, Logistics teams, Claims processors, and System Admins carry out all the actions that make the distributor's portal experience meaningful — setting targets, approving SORs, creating Proforma Invoices, uploading ETAs, processing claims, and managing announcements.

Neither side works without the other. This document specifies both in full.

The core problem this system solves is the fragmentation and informality of distributor management. Today, order requests arrive by email or phone. Pricing confirmations are sent manually. ETA updates happen through WhatsApp groups. Target reviews happen in quarterly meetings with no ongoing visibility. Claims are tracked in spreadsheets. The result is a distributor relationship that is commercially important but operationally opaque — neither the distributor nor the internal team has a clear, accurate, real-time view of where things stand.

The Distributor Management Portal replaces all of that with a single structured system. Every action is documented. Every status is visible in real time. Every communication is tied to the commercial record it relates to.

---

## 2. Scope & Boundaries

### 2.1 In Scope

- Distributor registration, authentication, and access management
- Product catalogue browsing and order request (SOR) creation by distributors
- Internal SOR review, pricing, and approval workflow
- Proforma Invoice creation by the operations team, approval by the Sales Manager, and acceptance by the distributor
- Order confirmation and ERP push
- ETA setting and dispatch date confirmation by the logistics team
- Advance Shipment Notice (ASN) generation and delivery to the distributor
- Target and incentive scheme creation and assignment by the Sales Manager
- Distributor-facing target and attainment visibility
- Claim submission by the distributor
- Internal claim processing and status updates back to the distributor
- Financial records — invoice and ledger visibility for the distributor
- Announcements and targeted communications from internal teams to distributors
- Full audit trail of every action on every entity
- Notifications to all parties at every relevant workflow step

### 2.2 Out of Scope

- Internal rep pipeline management and field sales activity
- Marketing campaign management and lead scoring
- Internal manager dashboards not related to distributor management
- ERP or billing system functionality — the platform integrates with these systems but does not replicate them
- Customer-facing (end customer) portals — this system is for distributor partners only

### 2.3 Relationship to the Main Clientera Platform

The Distributor Management Portal is a module within Clientera, not a standalone product. All entities — SORs, SOs, Proforma Invoices, ASNs, Invoices, Claims — are the same entities used across the broader platform. The distributor sees a filtered, simplified view of those entities relevant to them. Internal users work on the same records in the main Clientera interface. There is one system of record, with two different interfaces over it.

---

## 3. Personas

### 3.1 Distributor

An external partner company that sells the organisation's products within their assigned territory and to their assigned accounts. The distributor accesses Clientera through the dedicated Distributor Portal at a unique URL. They do not have access to the main Clientera interface.

A distributor may have multiple employees using the portal. Each employee has their own login. The distributor company is a single entity in the system; individual logins are attributed to the company.

**Primary goals:**
- Place orders quickly and accurately
- Know exactly where each order is in the fulfilment process
- Understand and track their targets and incentive progress
- Submit and track claims without friction
- Access their financial records at any time

### 3.2 Sales Manager

An internal user responsible for managing the commercial relationship with one or more distributors. The Sales Manager is the primary internal contact for every distributor in their portfolio.

**Primary goals:**
- Review and approve SORs submitted by distributors
- Ensure Proforma Invoices are accurate and approved before reaching the distributor
- Set targets and incentive schemes that drive the right distributor behaviour
- Monitor distributor performance against targets in real time
- Push confirmed orders to the ERP
- Communicate with distributors through announcements and targeted messages

### 3.3 Logistics Planner

An internal user responsible for pricing confirmed orders and managing the delivery schedule. The Logistics Planner's work begins when the Sales Manager forwards an SOR for pricing and ends when goods are confirmed as dispatched.

**Primary goals:**
- Create accurate Proforma Invoices with confirmed pricing for orders forwarded by the Sales Manager
- Calculate and upload estimated delivery dates for confirmed orders
- Maintain the Dispatch Plan — the scheduled sequence of orders to be dispatched from the factory
- Ensure the distributor has accurate, up-to-date delivery information at all times

### 3.4 Dispatcher

An internal user responsible for the physical execution of dispatch — confirming when goods have actually left the factory and providing the shipment reference details that reach the distributor. The Dispatcher works from the confirmed Dispatch Plan and updates the system as each order physically ships.

**Primary goals:**
- Confirm dispatch dates when orders leave the factory
- Enter shipment reference details (courier, vehicle number, AWB, tracking link) accurately
- Generate and send Advance Shipment Notices to distributors
- Update the Dispatch Plan in real time as dispatch occurs

### 3.5 Claims Team

Internal users responsible for reviewing, processing, and resolving claims submitted by distributors. They may be part of the operations team, a dedicated customer service function, or the Sales Manager themselves depending on company size and structure.

**Primary goals:**
- Receive and triage incoming claims quickly
- Communicate clearly with the distributor about claim status and resolution
- Ensure every claim is processed within the configured SLA
- Maintain a complete and auditable record of every claim

### 3.6 System Admin

An internal user responsible for configuring and maintaining the platform. The System Admin does not have a commercial relationship with distributors but is responsible for ensuring they can access the system and that the right data is in the right place.

**Primary goals:**
- Register and configure distributor accounts
- Manage distributor user access and credentials
- Control announcement visibility and regional targeting
- Maintain master data — product catalogue, distributor territories, SKU authorisations

---

## 4. Distributor Lifecycle Overview

The complete distributor lifecycle flows as follows. Every stage in this flow is covered in detail in subsequent sections.

```
Distributor Registered (Admin)
        │
        ▼
Distributor Logs In → Views Dashboard & Catalogue
        │
        ▼
Distributor Places Order (SOR Submitted)
        │
        ▼
Sales Manager Reviews SOR
        │
        ▼
Operations Team Creates Proforma Invoice
        │
        ▼
Sales Manager Approves Proforma
        │
        ▼
Distributor Reviews & Accepts Proforma
        │
        ▼
Order Status → Confirmed
        │
        ▼
Sales Manager Pushes Order to ERP
        │
        ▼
ERP Returns Order Reference Number
        │
        ▼
Logistics Team Sets ETA → Distributor Notified
        │
        ▼
Logistics Team Confirms Dispatch Date → Distributor Notified
        │
        ▼
ASN Generated & Sent to Distributor
        │
        ▼
Invoice Created & Visible to Distributor
        │
        ▼
Distributor Views Ledger & Payments
        │
        ▼
Distributor Submits Claim (if applicable)
        │
        ▼
Claims Team Processes → Distributor Notified of Outcome
```

Running in parallel throughout the lifecycle:

- **Targets & Incentives** — Sales Manager sets targets. Attainment updates in real time from confirmed invoices. Distributor sees their progress at any time.
- **Announcements** — Admin or Sales Manager pushes announcements to specific distributors or regions at any point.
- **Audit Trail** — every action by every user on every entity is logged permanently.

---

## 5. Distributor Onboarding & Access Management

### 5.1 Pre-Registration (Admin-Driven)

Access to the Distributor Portal is never self-serve. All distributors are pre-registered by the System Admin before they can log in.

The admin uploads or manually enters distributor master data for each distributor company:

- Distributor name and legal entity name
- Unique distributor code (maps to ERP reference)
- Registered email address
- Registered mobile number
- Assigned territory and region
- Authorised SKUs — the specific products this distributor is permitted to order
- Credit limit and payment terms
- Assigned Sales Manager (internal contact)
- Status: Active, Inactive, or Suspended

Once the distributor record is created and set to Active, the system automatically sends a welcome message to the registered email and mobile containing a one-time security code and a link to complete registration.

### 5.2 Distributor Registration

The distributor follows the link in their welcome message and arrives at the registration screen on the portal. They enter the security code to verify their identity. They are then prompted to set a password and complete their profile — contact person name, role, and any additional contact details.

On first login after registration, the distributor is required to change their password immediately. The platform enforces minimum password complexity rules configured by the System Admin.

A **Forgot Password** option is always available from the login screen. The reset flow sends a one-time link to the registered email address. The link expires after 30 minutes.

### 5.3 Employee Logins

A distributor company may have multiple employees who need portal access. The primary distributor contact can request additional user accounts from the System Admin. Each additional user gets their own login credentials and is attributed to the distributor company in the system.

Employee authentication can be handled through Active Directory integration for organisations that require it. When Active Directory is configured, employees log in with their corporate credentials and are mapped to the distributor company automatically.

Each employee login has a configurable access level within the distributor company — for example, one employee may be authorised to create SORs and accept Proformas while another has read-only visibility.

### 5.4 Distributor Management by Admin

The System Admin can at any time:

- Activate, deactivate, or suspend a distributor account. Suspension immediately prevents login but preserves all historical data.
- Reset credentials for any distributor user.
- Update master data — territory, authorised SKUs, credit limit, payment terms, assigned Sales Manager.
- Add or remove employee logins for a distributor company.
- View the full login and activity history for any distributor.

When a distributor is suspended, their in-flight SORs and claims remain active and continue to be processed internally. The distributor simply cannot log in to submit new ones or view updates until the suspension is lifted.

### 5.5 SKU Authorisation

Not every distributor can order every product. The System Admin configures the specific SKUs each distributor is authorised to order. This authorisation list is enforced at the product catalogue level — a distributor only sees and can order the SKUs they are authorised for. They cannot see that other SKUs exist.

SKU authorisations can also be further restricted at the account level — a distributor may be authorised for SKU X when ordering for Account A but not for Account B. This is configured by the System Admin in the distributor master record.

---

## 6. Distributor Portal — Home & Dashboard

### 6.1 Landing Page After Login

When a distributor logs into the portal they land on their Home Dashboard. This is not a blank screen — it is a prepared view of everything commercially relevant to them right now.

The Home Dashboard contains:

**Sales Performance Summary**
A graphical view of Actual versus Target Sales for the trailing 12 months, shown as a bar chart with the current month highlighted. Displays total revenue attainment and, where configured, volume attainment. Data refreshes every 8 hours.

**Quick Status Panel**
At a glance:
- Orders pending acceptance (Proformas awaiting the distributor's confirmation)
- Active orders (confirmed, in fulfilment)
- Open claims
- Unread announcements

Each item in the quick status panel is a link directly to the relevant section of the portal.

**Recent Activity Feed**
The last 10 significant events on the distributor's account — order status changes, Proforma received, ETA updated, claim status change, new announcement. Each item shows what happened, when, and links to the full record.

**Announcements Banner**
Any active announcements targeted to this distributor or their region are displayed prominently below the navigation bar. The admin controls which announcements are visible and to whom. Announcements can be dismissed by the distributor once read.

### 6.2 Navigation Structure

The portal navigation gives the distributor access to:

- **Home** — dashboard as described above
- **Place Order** — product catalogue and new SOR creation
- **My Orders** — all SORs and their current status
- **Proforma Invoices** — Proformas pending acceptance and historical Proformas
- **Deliveries** — ETA and dispatch information for confirmed orders
- **Targets & Incentives** — target attainment and scheme details
- **Claims** — submit new claims and track existing ones
- **My Account** — invoices, ledger, and financial records
- **Announcements** — full list of all announcements

### 6.3 Mobile Responsiveness

The Distributor Portal is fully responsive. Distributors commonly access the portal on mobile devices — checking order status, reviewing ETAs, or submitting claims while in the field. All functionality available on desktop is available on mobile. The layout adapts to smaller screens without loss of functionality.

---

## 7. Product Catalogue & Order Placement

### 7.1 Product Catalogue

The distributor browses the product catalogue to place orders. The catalogue only shows the SKUs the distributor is authorised to order — no other products are visible.

Products are organised through a 6-level hierarchy configured by the System Admin to match the organisation's product structure. A typical configuration for a tyre manufacturer would be: **Application → Segment → Category → Sub-Category → Size → SKU**. The distributor navigates through each level in sequence, narrowing their selection at each step, similar to a structured shopping experience. At each level, only the options relevant to the selections already made are shown — the catalogue guides the distributor to the correct SKU rather than presenting an undifferentiated list.

The 6-level hierarchy labels are fully configurable by the System Admin — the levels can be renamed to match the organisation's own product taxonomy without any change to the underlying data structure.

Each product listing at the SKU level shows:
- Product code and name
- Description
- Unit of Measure (UoM)
- Pack size or secondary UoM where applicable
- Stock availability status (if ERP integration is configured and exposes this)
- Minimum order quantity
- Any active promotional offer or scheme applicable to this distributor for this SKU

**Pricing is not shown in the catalogue.** Pricing is confirmed by the Logistics Planner through the Proforma Invoice process after the SOR is submitted. The distributor is not shown a price at order placement — they see the confirmed price only when they receive the Proforma.

### 7.2 Creating a New SOR

To place an order, the distributor selects products from the catalogue and adds them to their order. For each line item they specify:
- Quantity
- Any order-specific notes (e.g. special delivery instructions, packaging preferences)

Once all line items are added, the distributor reviews the order summary — a list of all line items with quantities and any notes — and submits it.

On submission:
- The SOR is created in the system with status **Order Requested**
- The SOR is assigned a unique reference number
- The distributor sees a confirmation screen with the reference number
- The Sales Manager is notified immediately that a new SOR requires review

The distributor cannot modify a submitted SOR. If they need to change or cancel an order after submission, they must contact their assigned Sales Manager directly. The Sales Manager can then action the change within the platform.

### 7.3 Order History & Status Tracking

From **My Orders**, the distributor sees all their SORs — active and historical — with the following information for each:

- SOR reference number
- Date submitted
- Number of line items
- Current status (see §8.4 for the full status progression the distributor sees)
- Date of last status change

The distributor can click into any SOR to see the full detail — all line items, quantities, notes, and the current position in the fulfilment chain. Where a Proforma Invoice, ETA, dispatch date, ASN, or Invoice has been issued against an order, the distributor can navigate to it directly from the SOR record.

### 7.4 What the Distributor Sees vs What Happens Internally

The distributor sees a simplified, plain-language view of their order's status. They do not see internal workflow terminology, approval step names, or which internal team is currently handling their order. They see:

| Internal Status | What Distributor Sees |
|---|---|
| `submitted` / `in_review` | Order Received — being reviewed |
| `pending_proforma` | Pricing being confirmed |
| Proforma sent to distributor | Proforma Available — Awaiting Your Confirmation |
| `accepted` (Proforma confirmed by distributor) | **Confirmed Order** |
| ERP order reference received | **SAP Order** — Reference [ERP/SAP ref] |
| ETA set by Logistics Planner | Delivery Scheduled — Expected [ETA date] |
| Dispatch Plan updated | Dispatch Scheduled — [Dispatch date] |
| Dispatch date confirmed by Dispatcher | Dispatched — Expected arrival [date] |
| ASN sent | Shipment on its way — [ASN details] |
| Invoice created | Invoice Available |
| `rejected` | Order Not Accepted — [Reason] |
| `cancelled` | Order Cancelled — [Reason] |

**Confirmed Order** and **SAP Order** are the two key status milestones visible to the distributor in their order list. All orders in the **Confirmed Order** state are grouped under the Confirmed Orders view. All orders in the **SAP Order** state appear with their ERP reference number and transition into the Deliveries tracking view.

This translation layer ensures the distributor always has a clear, actionable understanding of their order without being exposed to internal process complexity.

---

## 8. SOR Approval Workflow — Internal

### 8.1 Overview

When a distributor submits an SOR, it enters an internal approval and processing workflow before it can be confirmed. This workflow is managed entirely within the main Clientera platform by the Sales Manager and the Logistics / Operations team. The distributor does not see or interact with this workflow — they only see the plain-language status updates described in §7.4.

### 8.2 Sales Manager — First Review

The Sales Manager is notified immediately when a new SOR is submitted by one of their distributors. The notification is sent via in-app alert, email, and WhatsApp (per the Sales Manager's configured preferences).

The Sales Manager opens the SOR in Clientera and reviews:
- The distributor who submitted it
- All line items — products, quantities, and any notes
- The distributor's current credit limit and available credit
- Any outstanding orders or open Proformas for this distributor
- The distributor's recent order history for context

**The Sales Manager has three actions:**

**Forward to Operations for Pricing**
The Sales Manager is satisfied with the order and forwards it to the Logistics / Operations team to prepare the Proforma Invoice. The SOR status moves to `pending_proforma`. The Operations team is notified.

**Request Clarification**
The Sales Manager needs more information before forwarding. They can add a note on the SOR and it remains in their queue. The distributor is not notified of this — clarification is resolved through direct communication between the Sales Manager and the distributor outside the platform, or via the platform's messaging feature if configured.

**Reject**
The Sales Manager rejects the SOR. They must provide a reason. The distributor is notified with the rejection reason. The SOR status moves to `rejected` (terminal). The distributor may submit a new SOR with corrections.

### 8.3 Operations Team — Proforma Invoice Creation

Once the Sales Manager forwards the SOR, it appears in the Operations team's work queue. The Operations team reviews the line items and prepares a Proforma Invoice.

The Proforma Invoice contains:
- The SOR reference it is raised against
- All line items from the SOR with confirmed unit prices, quantities, and line totals
- Any additional costs applicable to this order (freight, handling, taxes — see §9.2)
- Total order value
- Payment terms
- Any notes from the Operations team

The Operations team submits the Proforma Invoice into the approval queue. The SOR status moves to `proforma_pending_approval`. The Sales Manager is notified that a Proforma is ready for their review.

### 8.4 Sales Manager — Proforma Approval

The Sales Manager reviews the Proforma Invoice created by Operations. They are checking that the pricing is correct, the additional costs are appropriate, and the total value is commercially sound for this distributor and this order.

**The Sales Manager has two actions:**

**Approve**
The Sales Manager approves the Proforma. The system marks it as approved and makes it immediately visible to the distributor in their portal. The distributor is notified that a Proforma is awaiting their acceptance. The SOR status moves to `awaiting_distributor_acceptance`.

**Return to Operations**
The Sales Manager is not satisfied with the Proforma — pricing is incorrect, additional costs need adjusting, or something is missing. They return it to Operations with a note explaining what needs to change. The Operations team receives the notification, corrects the Proforma, and resubmits for Sales Manager approval. This loop can repeat until the Sales Manager is satisfied.

### 8.5 SOR Recall

Before any internal user has taken action on a submitted SOR, the distributor can recall it. This is the only modification mechanism available to the distributor after submission — they cannot edit a submitted SOR in place, but they can recall it to draft, correct it, and resubmit.

**Recall is only available when all three conditions are met:**
1. The SOR status is `submitted` (not yet actioned by the Sales Manager)
2. No approver at any node has taken any action on the current submission
3. The SOR is not on hold or in a change-requested state

**How it works:**
The distributor sees a **Recall Order** button on the SOR detail page when the SOR is recallable. They click Recall, optionally enter a reason, and confirm. The SOR immediately returns to `draft` status. Any notifications that had been sent to the Sales Manager are voided — the Sales Manager receives a notification that the SOR was recalled by the distributor and no action is required on their part. The SOR disappears from the Sales Manager's review queue.

The distributor can then edit the SOR — change quantities, add or remove line items, update notes — and resubmit. On resubmission the SOR re-enters the workflow from the beginning. The full recall and resubmission history is preserved in the audit trail.

If the Sales Manager has already opened and begun reviewing an SOR (status has moved to `in_review`), recall is no longer available. The distributor must contact the Sales Manager directly to request changes.

### 8.6 Workflow Configuration

The SOR approval workflow described above is the default configuration. The workflow engine allows the tenant admin to modify this flow — for example, adding an additional approval step for orders above a configured value threshold, or configuring certain SKU categories to route directly to the Logistics Planner without Sales Manager review.

All workflow configurations use the same visual workflow builder described in the main Clientera BRD. The distributor-facing experience adapts automatically to whatever workflow configuration is active.

### 8.7 SOR Status Reference — Internal

| Status | Meaning |
|---|---|
| `draft` | Recalled by distributor or not yet submitted. Editable. |
| `submitted` | Received from distributor. Awaiting Sales Manager review. Recallable by distributor. |
| `in_review` | Sales Manager has opened and is reviewing. Recall no longer available. |
| `pending_proforma` | Forwarded to Logistics Planner. Awaiting Proforma creation. |
| `proforma_pending_approval` | Proforma created. Awaiting Sales Manager approval. |
| `proforma_returned` | Proforma returned to Logistics Planner for correction. |
| `awaiting_distributor_acceptance` | Proforma approved and sent to distributor. |
| `accepted` | Distributor has confirmed the Proforma. Shown to distributor as **Confirmed Order**. |
| `erp_order_created` | Pushed to ERP. ERP reference received and linked. Shown to distributor as **SAP Order**. |
| `rejected` | Rejected by Sales Manager. Terminal state. |
| `cancelled` | Cancelled by authorised internal user. Terminal state. |

### 8.7 Privileged Field Edit — Post-Acceptance Operational Corrections

Once an order is accepted and the ERP reference is received, certain operational fields can be corrected by authorised users without requiring the entire approval workflow to restart. This covers minor operational adjustments — not commercial changes. Commercial terms (pricing, quantities, line items) cannot be changed post-acceptance and require cancellation and resubmission of a new SOR.

**Fields editable post-acceptance, by entity:**

| Entity | Fields editable without workflow restart |
|---|---|
| Sales Order (SO) | ETA date, dispatch date, delivery address, internal notes, ERP reference number |
| SOR | Internal notes, ERP reference number |
| Proforma Invoice | Internal notes, ERP reference number |
| ASN | ETA date, dispatch date, courier name, vehicle number, AWB number, tracking link, internal notes |

Every post-acceptance field edit is logged in the audit trail with the full before and after values, the actor, and the timestamp. The distributor is notified when the ETA date is edited post-acceptance, as this is commercially relevant to them — all other field edits are internal and do not trigger distributor notifications.

Permission required: `{entity}.edit_accepted` — a separate permission from the standard edit permission, configurable per role.

### 8.8 Resolution Queue

When an SOR or SO is placed on hold or cancelled after child entities have already been created (Proforma Invoices, ASNs, Invoices), some of those child entities may be in a state that requires a human decision before the situation is fully resolved. The Resolution Queue surfaces all such entities in one place.

The Resolution Queue is accessible to users with the `resolution_queue_view` permission from the main navigation. It shows every child entity that is linked to a cancelled or on-hold parent and has not yet reached a clean terminal state. Entities are grouped by their parent SO for context.

**For each entity in the queue, the authorised user can take resolution actions:**

| Entity | Available resolution actions |
|---|---|
| Invoice | Cancel, mark as credit-noted, or mark as credited |
| ASN | Mark as return-requested, returned, or delivered-then-cancelled |
| Proforma Invoice | Cancel or supersede with a revised version |

Resolution actions can be staged for approval before they are applied — if a resolution approval hierarchy is configured for that entity type, the staged action creates an approval request. On approval, the action is applied and ERP sync fires automatically. If no approval hierarchy is configured, the action applies immediately.

Every resolution action is logged in the audit trail. Resolution notes — operational context explaining why the resolution was taken — can be added to any entity in the queue and are stored alongside the audit trail without being part of the formal workflow record.

---

## 9. Proforma Invoice — Creation, Approval & Acceptance

### 9.1 What the Proforma Invoice Is

The Proforma Invoice is the document that formally confirms what will be supplied and at what price before the goods are shipped. It is the pricing agreement between the organisation and the distributor for a specific order. The distributor's acceptance of the Proforma is the point at which the order is commercially confirmed.

The Proforma is not the final invoice. The final Invoice is generated after dispatch. The Proforma is a pre-delivery confirmation.

### 9.2 Proforma Invoice Contents

Every Proforma Invoice contains:

- Proforma reference number (auto-generated)
- SOR reference number it is raised against
- Distributor name and code
- Issue date
- Line items:
  - Product code and name
  - Quantity
  - Unit of Measure
  - Unit price (confirmed by Operations)
  - Line total
- Additional cost lines (each with a label and amount):
  - Freight / logistics
  - Handling charges
  - EXIM duties (where applicable)
  - Insurance (where applicable)
  - Any other tenant-configured cost type
- Tax breakdown (CGST, SGST, IGST, VAT, or other configured tax types — applied per line item per applicable rules)
- Subtotal, total tax, and grand total
- Payment terms
- Notes from the Operations team (optional)
- Validity date — the Proforma expires if not accepted by the distributor within a configured number of days

### 9.3 Proforma Source Options

**Platform-native (default):** The Operations team creates the Proforma directly in Clientera using the Proforma creation form. Line items are pre-populated from the SOR for accuracy — the Operations team adds pricing, additional costs, and any adjustments.

**External system push:** For organisations where pricing is managed in an ERP or pricing system, the Proforma can be generated in the external system and pushed to Clientera via API. The platform receives it, links it to the correct SOR by reference, and routes it through the approval workflow automatically. The platform does not create the Proforma in this mode — it receives and routes it.

Both sources result in the same Proforma record in the system and follow the same approval and acceptance flow.

### 9.4 Distributor Acceptance

When the Sales Manager approves the Proforma, it becomes visible to the distributor in their portal under **Proforma Invoices**. The distributor receives a notification.

The distributor opens the Proforma and reviews:
- All line items with confirmed pricing
- Additional costs
- Tax breakdown
- Grand total
- Payment terms
- Validity date

**The distributor has two actions:**

**Accept**
The distributor ticks the acceptance checkbox and confirms. This is a formal commercial acceptance. The order status moves to `accepted`. The Sales Manager is notified. The order is now confirmed and ready to be pushed to the ERP.

The distributor cannot modify the Proforma. If they have a pricing concern or dispute, they must contact their Sales Manager directly. A new Proforma can be issued if the Sales Manager agrees to revise pricing — this requires restarting the Operations and Sales Manager approval steps.

**No action (expiry)**
If the distributor does not accept or reject the Proforma within the validity period, the Proforma expires. The SOR returns to the Sales Manager's queue with an expiry alert. The Sales Manager decides whether to reissue a new Proforma or close the order.

### 9.5 Proforma History

All Proformas ever issued against an SOR are retained — including versions that were returned by the Sales Manager, revised by Operations, and ultimately replaced by a later version. The distributor sees only the current active Proforma. Internal users see the full version history on the SOR record.

### 9.6 ERP Push — Post-Acceptance

After the distributor accepts the Proforma, the Sales Manager pushes the confirmed order to the ERP. This is a deliberate manual step — the Sales Manager initiates it from the SOR detail page with a single action.

The platform calls the ERP API with the confirmed order details. The ERP creates the Sales Order and returns a reference number. The platform stores this reference number against the SOR and makes it visible to both the Sales Manager and the distributor.

If the ERP call fails, the Sales Manager is notified with the error details. The push can be retried. The SOR remains in `accepted` status until the ERP confirms the order.

---

## 10. Order Fulfilment — ETA, Dispatch & ASN

### 10.1 Overview

Once the order is confirmed and the ERP reference is received, the fulfilment chain begins. This chain is managed by the Logistics / Operations team. The distributor receives automatic notifications at each step and can view the current status of all their confirmed orders from the **Deliveries** section of the portal.

### 10.2 ETA Notification

The Logistics team uploads estimated delivery dates for confirmed orders. This can be done:

**Bulk file upload** — a CSV file mapping SOR or ERP reference numbers to ETA dates. The platform matches each row to the corresponding order, validates the reference, and updates the ETA field. Any rows that cannot be matched are flagged in an error report for the uploader to resolve.

**Individual update** — the Logistics team opens a specific order in Clientera and sets the ETA date directly on the order record.

**API push** — the logistics or WMS system calls the Clientera API to update ETAs automatically as they are calculated.

When an ETA is set or updated:
- The order status in the distributor's portal updates to show the ETA date
- The distributor is notified via in-app notification, email, and/or WhatsApp per their configured preferences
- The notification contains: order reference, ERP reference, ETA date, line items and quantities

The distributor can see the ETA for any of their confirmed orders by navigating to **Deliveries** and selecting the relevant order.

### 10.3 Dispatch Date Confirmation

When the order is ready to leave the warehouse, the Logistics team confirms the dispatch date. This is a separate step from the ETA — the ETA is the estimated delivery date at the destination; the dispatch date is when the goods leave the warehouse.

Dispatch date confirmation follows the same three paths as ETA: bulk upload, individual update, or API push.

When a dispatch date is confirmed:
- The order status moves to `dispatched`
- The distributor is notified with: order reference, ERP reference, dispatch date, and line items
- If ASN is enabled for this tenant, the ASN is automatically generated (see §10.4)

### 10.4 Advance Shipment Notice (ASN)

The ASN is a formal document sent to the distributor when their order is dispatched. It gives the distributor everything they need to prepare to receive the goods.

**ASN Contents:**
- ASN reference number
- SOR reference and ERP order reference
- Shipper details (the supplying organisation)
- Recipient details (the distributor)
- Line items — product code, description, quantity, unit of measure for each item being shipped
- Dispatch date
- Expected arrival date (ETA)
- Shipment reference details — courier or transport company name, vehicle number, AWB number, tracking link, or any other reference the Logistics team enters
- Any notes from the Logistics team

**ASN Generation:**
When the Logistics team confirms a dispatch date, the ASN is generated automatically from the order's line items. The Logistics team reviews the auto-generated ASN, adds shipment reference details (courier, vehicle number, tracking link), and sends it.

Alternatively, if the organisation's WMS or ERP generates ASNs, the external system can push the ASN to Clientera via API. The platform links it to the correct order and delivers it to the distributor.

**ASN Delivery to the Distributor:**
The ASN is delivered to the distributor through multiple channels simultaneously:
- In-app notification in the portal, linking directly to the ASN document
- Email to the distributor's registered email address, with the ASN as a PDF attachment
- WhatsApp message to the registered mobile number (if configured)

The distributor can download the ASN as a PDF at any time from the **Deliveries** section of the portal.

**ASN Acknowledgement (optional):**
The tenant can configure whether distributors are required to acknowledge receipt of the ASN. When enabled, the distributor sees an acknowledgement button on the ASN record. Acknowledging confirms they have received and reviewed the shipment notice. The acknowledgement is timestamped and logged in the audit trail.

### 10.5 Delivery Tracking View — Distributor

From the **Deliveries** section, the distributor sees all confirmed orders with their current fulfilment status. For each order:

- Order reference and ERP reference
- Line items and quantities
- Current status (ETA pending, ETA set, dispatched, ASN sent)
- ETA date (when set)
- Dispatch date (when confirmed)
- Shipment reference details (when ASN is sent)
- Link to ASN document (when available)
- Link to Invoice (when available)

The distributor can filter their deliveries by status, date range, or product to find specific orders quickly.

---

## 11. Targets, KPIs & Incentive Schemes

### 11.1 Overview

Every distributor operates against a set of targets defined by the Sales Manager. These targets drive distributor behaviour — which products to push, what volumes to achieve, and what incentives they earn for performance. Clientera gives both the Sales Manager and the distributor a live, accurate view of target attainment at all times, eliminating the need for quarterly review meetings as the primary mechanism for sharing performance data.

### 11.2 Target Types

The Sales Manager can configure targets for distributors at multiple levels of granularity:

**Revenue targets** — a total revenue value the distributor must achieve within the target period. Can be set at overall level or broken down by product segment or category.

**Volume targets** — a quantity (units, tonnes, cartons, or any configured UoM) the distributor must sell within the target period. Particularly relevant for industries where volume is the primary commercial metric.

**SKU-level targets** — specific targets for individual SKUs or SKU groups. Allows the Sales Manager to focus distributor attention on strategic or new products. Example: "Sell 500 units of SKU-X in Q2."

**Account-level targets** — targets tied to specific end-customer accounts the distributor serves. Example: "Achieve ₹10L revenue from Account Y in FY2026."

All target types can be combined on the same distributor. A distributor may have a total revenue target, a volume target, and three SKU-level targets simultaneously — each tracked independently.

### 11.3 Target Periods

Targets are configured with a defined period: monthly, quarterly, or annual. Multiple targets with different periods can coexist. An annual revenue target and a monthly SKU push target can both be active on the same distributor simultaneously.

The system tracks attainment against each period independently and displays the running percentage for each.

### 11.4 Target Creation & Assignment — Sales Manager

The Sales Manager creates and manages targets from the **Distributor Management** section of Clientera. For each target:

- Select the distributor (or multiple distributors for bulk assignment)
- Select the target type (revenue, volume, SKU-level, account-level)
- Set the target value
- Set the target period and start/end dates
- Attach any relevant incentive scheme (see §11.5)

Targets can be cloned from one distributor to another for fast setup when the Sales Manager is onboarding multiple distributors with similar commercial structures.

When a target is created or updated, the distributor is notified that their targets have been updated. They can log in to see the new targets immediately.

### 11.5 Incentive Schemes

Incentive schemes define what the distributor earns for hitting their targets. The Sales Manager configures incentive schemes and attaches them to targets.

**Supported incentive types:**

**Volume slab incentive** — the distributor earns a rate (per unit, per tonne, or per value) based on how much they sell. Slabs allow the rate to increase as volume increases. Example: ₹10 per tonne for the first 100 tonnes, ₹15 per tonne for every tonne above 100.

**Quantity incentive** — a fixed incentive amount earned when a quantity threshold is crossed. Example: earn ₹5,000 when total units sold exceed 500 in the month.

**Total lifting incentive** — a lump-sum incentive earned when the distributor lifts (purchases) a defined total value within the period. Example: earn 2% of total lifting value when total purchases exceed ₹50L in the quarter.

**SKU-segment incentive** — an incentive tied to performance in a specific product segment. Encourages the distributor to push products the organisation wants to move. Example: earn ₹2,000 for every 50 units of the new product line sold in the month.

**Stacking** — multiple incentive types can be active simultaneously on the same distributor. Incentives are calculated independently and do not cancel each other out.

Incentive schemes have a defined period (matching the target period), eligibility rules (which distributors qualify), and an expiry date.

### 11.6 Attainment Calculation

Target attainment is calculated in real time from confirmed invoices. When an Invoice is confirmed for a distributor, the platform automatically updates their attainment figures across all active targets.

Attainment is calculated as: (confirmed invoice value or volume for the period) / (target value or volume) × 100.

The calculation uses confirmed invoices only — not SORs or SOs. Pending orders do not count towards attainment until they are invoiced.

### 11.7 Distributor Target View

From the **Targets & Incentives** section of the portal, the distributor sees:

**Target Summary Panel** — for each active target:
- Target name and description
- Target type (revenue, volume, SKU-level, account-level)
- Target value
- Period (e.g. Q2 FY2026: 1 April – 30 June 2026)
- Attained to date (value and percentage)
- **Shortfall** — how much the distributor still needs to sell to hit the target. Displayed as a prominent figure alongside attainment: e.g. "₹4.2L remaining to hit target." Where the distributor is already projected to miss the target based on current run rate, the shortfall is shown in red with an indication of the projected gap at period end.
- Visual progress bar showing attainment against target
- Days remaining in the period
- Projected attainment at current run rate (calculated from confirmed invoices to date divided by days elapsed, extrapolated to period end)

**Incentive Tracker** — for each active incentive scheme:
- Scheme name and description
- Incentive type and earning mechanism
- Current earning (based on attainment to date)
- What they need to do to reach the next incentive slab or threshold
- Total potential incentive if the full target is achieved

**Historical Targets** — all completed target periods with final attainment and incentive earned. Downloadable as a report.

### 11.8 Sales Manager Target Dashboard

The Sales Manager sees all their distributors' target attainment in one view. From the **Distributor Management** section of Clientera:

- All active distributors listed with their current attainment percentage across all active targets
- Red/amber/green indicators based on attainment versus time elapsed in the period — a distributor at 30% attainment with 50% of the period elapsed is amber; the same attainment with 25% of the period elapsed is green
- Drill-down to any distributor to see their full target detail
- Ability to create, edit, or clone targets from the same view
- Alert configuration — the Sales Manager can set an alert threshold (e.g. notify me if any distributor falls below 50% attainment at the midpoint of the period)

---

## 12. Claims Management

### 12.1 What a Claim Is

A claim is a formal request from a distributor for a credit, refund, or commercial adjustment. Claims arise most commonly from: goods received in a damaged or defective condition, short delivery (quantity received is less than the invoice quantity), pricing errors on an invoice, or entitlement to a promotional rebate that has not been applied.

Claims are tracked from submission to resolution within the platform. The distributor submits the claim. The Claims team processes it internally. The outcome is communicated back to the distributor through the portal.

### 12.2 Claim Submission — Distributor

The distributor submits a claim from the **Claims** section of the portal. The claim creation form captures:

**Claim details:**
- Claim type — selected from a configured list (Damaged Goods, Short Delivery, Pricing Dispute, Promotional Rebate, Returns, Other)
- Description — a free-text description of the issue in the distributor's own words
- Affected order — the distributor links the claim to the relevant SOR, SO, or Invoice by selecting from their order history. If the claim is not related to a specific order (e.g. a general rebate claim), this field is optional.

**Affected products:**
- For each affected product: product code, description, quantity affected, and claimed amount or credit requested

**Supporting evidence:**
- File upload for supporting documents — photos of damaged goods, delivery notes, invoices, or any other relevant documentation. Multiple files can be attached. Supported formats: JPG, PNG, PDF. Maximum file size: 10MB per file.

**Declaration:**
- The distributor confirms the claim details are accurate before submitting.

On submission:
- The claim is created with status `submitted`
- A unique claim reference number is assigned
- The distributor sees a confirmation screen with the reference number
- The Claims team is notified of the new claim

### 12.3 Claims Processing — Internal

**Claim Queue**
All submitted claims appear in the Claims team's work queue in Clientera. The queue shows: claim reference, distributor name, claim type, date submitted, claimed amount, and current status. Claims can be sorted and filtered by any of these dimensions. Claims approaching or past their SLA deadline are highlighted.

**Claim Detail View**
The Claims processor opens a claim and sees the full detail: distributor information, claim type and description, affected products and amounts, all attached documents (viewable inline), the linked order or invoice, and any previous communications on this claim.

**AI-Assisted Classification**
When a claim is submitted with attached images, the platform's AI reads the description and images and suggests a defect category and severity level. This is displayed as a suggestion panel on the claim detail page for the Claims processor to review and confirm — never auto-applied. The suggestion helps the Claims processor categorise the claim faster and consistently.

**Claim Actions — Internal:**

**Approve**
The Claims processor approves the claim. They enter the approved credit amount (which may differ from the claimed amount) and any notes. The claim status moves to `approved`. The distributor is notified with the approved amount and next steps for credit application.

**Reject**
The Claims processor rejects the claim. They must provide a reason. The claim status moves to `rejected`. The distributor is notified with the rejection reason.

**Request More Information**
The Claims processor needs additional information or documentation before making a decision. They add a note specifying what is needed. The claim status moves to `pending_information`. The distributor is notified and can upload additional documents or add notes through the portal.

**Escalate**
The Claims processor escalates the claim to a senior approver or the Sales Manager. They add a note explaining why escalation is needed. The escalated claim appears in the escalation recipient's queue.

**Third-Party Push**
If the organisation uses a third-party claims processing system, a configured integration can push the claim to that system automatically on submission or on a manual trigger by the Claims processor. Status updates from the third-party system are pulled back into Clientera and reflected in the distributor's portal view.

### 12.4 Distributor — Claim Status Tracking

From the **Claims** section of the portal, the distributor sees all their claims:

- Claim reference number
- Claim type
- Date submitted
- Linked order or invoice (if applicable)
- Claimed amount
- Current status
- Date of last status update

The distributor can click into any claim to see the full detail and any notes from the Claims team. When the Claims team requests more information, the distributor sees the request and can respond by uploading additional documents or adding a note directly in the portal.

**Claim statuses visible to the distributor:**

| Internal Status | What Distributor Sees |
|---|---|
| `submitted` | Submitted — under review |
| `pending_information` | Additional information requested |
| `approved` | Approved — credit of [amount] |
| `rejected` | Not approved — [reason provided] |
| `escalated` | Under review |
| `settled` | Settled |

### 12.5 Claim SLA

The System Admin configures a default SLA for claim processing — the maximum number of business days between submission and a decision (approve, reject, or request more information). Claims approaching their SLA deadline are highlighted in amber in the internal queue. Claims that have breached their SLA are highlighted in red and a notification is sent to the Claims team manager.

---

## 13. Distributor Account Statement & Financial Records

### 13.1 Overview

The distributor has full visibility of their financial records with the organisation. This section of the portal replaces the need for the distributor to call or email the accounts team to request copies of invoices or statement information.

All financial data displayed in the portal originates from the ERP or billing system via integration. The platform mirrors it in and presents it in a clean, accessible format. The portal is read-only for financial records — no financial adjustments are made through the portal.

### 13.2 Sales Invoices

From **My Account → Invoices**, the distributor sees all invoices issued to them.

For each invoice:
- Invoice number
- Date issued
- Due date
- Linked order reference
- Line items (product, quantity, unit price, line total)
- Additional costs
- Tax breakdown
- Total amount
- Payment status: Unpaid, Partially Paid, Paid, Overdue

The distributor can download any invoice as a PDF. They can filter invoices by date range, status, and order reference.

### 13.3 Ledger / Account Statement

From **My Account → Ledger**, the distributor sees their full account statement — a chronological record of all financial transactions between them and the organisation.

Each entry in the ledger shows:
- Date
- Transaction type (Invoice, Payment, Credit Note, Debit Note)
- Reference number
- Description
- Amount (debit or credit)
- Running balance

The distributor can download their statement as a PDF or CSV for any selected date range.

### 13.4 Credit Notes & Debit Notes

Credit notes and debit notes are mirrored from the ERP and displayed in the ledger. Each credit note or debit note is linked to the invoice it relates to. The distributor can view and download the document.

### 13.5 Credit Limit Visibility

The distributor can see their current credit limit and available credit from the **My Account** section. Available credit is calculated as: Credit Limit minus the total value of outstanding (unpaid) invoices.

This visibility helps the distributor manage their ordering decisions — they can see before placing an order whether they have sufficient credit available.

---

## 14. Announcements, Notifications & Communications

### 14.1 Announcements

Announcements are broadcast messages from the organisation to distributors. They are managed by the System Admin or Sales Manager and displayed on the distributor's Home Dashboard and in the **Announcements** section of the portal.

**Creating an announcement:**
From within Clientera, the Sales Manager or Admin creates an announcement with:
- Title
- Body text (supports basic formatting — bold, bullets, links)
- Optional attached file (PDF, image)
- Visibility: All distributors, specific distributors (named selection), or distributors in a specific region
- Active dates: start date and optional end date (after which the announcement is automatically hidden)
- Priority: Normal or Important (Important announcements are displayed more prominently)

**Distributor experience:**
Active announcements appear as a banner on the Home Dashboard. The distributor can dismiss a Normal announcement once they have read it. Important announcements remain visible until the end date is reached. All announcements, including dismissed ones, are accessible from the **Announcements** section.

**Use cases:**
- Product launch notifications
- Pricing change notices (effective date and new price list)
- Scheme launch or modification announcements
- Operational updates (warehouse closure dates, holiday shipping schedules)
- Payment reminders for distributors with overdue invoices

### 14.2 Notifications

Clientera sends automated notifications to the distributor for every significant event on their account. Notifications are delivered through three channels: in-app (always), email (configurable), and WhatsApp (configurable).

The distributor configures their notification channel preferences from their profile settings. They can turn off email or WhatsApp for specific notification types but cannot turn off in-app notifications.

Full notification reference is provided in §21.

### 14.3 Internal Communication Log

Every note, comment, or message added to an SOR, Claim, or other entity by an internal user is logged against that record. Where a note is marked as distributor-visible, it appears in the distributor's view of that record. Internal notes not marked as distributor-visible are hidden from the portal entirely.

This gives the Sales Manager and Claims team a simple mechanism to communicate with the distributor in context — a note on a claim explaining what additional information is needed, or a note on an SOR explaining a delay — without requiring email or phone calls outside the platform.

---

## 15. Sales Manager — Distributor Management View

### 15.1 Overview

The Sales Manager's primary workspace for distributor management is the **Distributor Management** section within the main Clientera platform. This section gives the Sales Manager a comprehensive view of their entire distributor portfolio and all the tools they need to manage it.

### 15.2 Distributor Portfolio View

The Sales Manager sees all distributors assigned to them in a single list view. For each distributor:

- Distributor name and code
- Territory / region
- Current status (Active, Inactive, Suspended)
- Number of active orders (SORs in progress)
- Open claims count
- Current period attainment (% of total revenue target)
- Outstanding invoice balance
- Last activity date (last SOR submission or login)
- Red/amber/green health indicator based on attainment and credit standing

The Sales Manager can click into any distributor to open their full profile — a unified view of everything commercially relevant to that distributor.

### 15.3 Distributor Profile

The distributor profile page in Clientera contains:

**Overview tab** — key metrics at a glance: total orders this period, revenue against target, open claims, outstanding balance, credit utilisation.

**Orders tab** — all SORs for this distributor in all statuses. The Sales Manager can filter by status, date, and product. From this tab the Sales Manager takes all order-related actions: review new SORs, approve Proformas, push confirmed orders to ERP.

**Targets & Incentives tab** — all active and historical targets. The Sales Manager can create new targets, edit existing ones, clone targets from other distributors, and view detailed attainment data.

**Claims tab** — all claims submitted by this distributor. The Sales Manager can see the full claim detail and add internal notes.

**Financial tab** — a complete view of the distributor's financial position:
- Credit limit and current utilisation (outstanding invoices as a % of credit limit)
- Available credit (credit limit minus outstanding invoice total)
- Outstanding invoices — all unpaid invoices with their due dates and overdue flags
- Overdue invoices highlighted in red with days overdue
- **Payment receipts** — all payments made by the distributor, showing payment date, amount, payment method, and the invoices each payment was applied against. The Sales Manager can review the full payment history to understand the distributor's payment behaviour — average days to pay, consistency of payment, any history of late or partial payments.
- Credit notes and debit notes issued to the distributor
- Payment behaviour summary — average days to pay calculated over the last 12 months, trend indicator (improving / stable / worsening)

**Activity tab** — a chronological log of all activity on this distributor account: orders submitted, status changes, Proformas sent, targets updated, claims submitted, logins, and any notes added by internal users.

### 15.4 SOR Review Queue

The Sales Manager has a dedicated queue view for all SORs across all their distributors that require their action. This queue surfaces:

- New SORs awaiting review (sorted by submission date, oldest first)
- Proformas awaiting Sales Manager approval
- Expired Proformas requiring attention
- SORs awaiting ERP push (accepted by distributor, not yet pushed)

Each item in the queue shows: distributor name, SOR reference, number of line items, total quantity, date submitted, and time waiting. The Sales Manager can take action directly from the queue view without needing to navigate to the full SOR detail.

### 15.5 Performance Alerts

The Sales Manager can configure alerts that notify them proactively when distributor performance requires attention:

- Distributor attainment falls below a configured % at the period midpoint
- A distributor has not submitted any orders in X days
- A distributor's outstanding invoice balance exceeds a configured threshold
- A claim from a distributor has been open for more than X days
- A Proforma has not been accepted by the distributor within X days of being sent

Alerts are delivered in-app and via email. The Sales Manager can acknowledge and dismiss alerts from the notification centre.

### 15.6 Bulk Operations

For managing multiple distributors at once, the Sales Manager has access to:

**Bulk target assignment** — create a target and assign it to multiple selected distributors simultaneously. Useful at the start of a new quarter when the same targets apply to all distributors in a region.

**Bulk announcement** — create an announcement targeted at all distributors in a specific region or all distributors in their portfolio.

**Bulk Proforma approval** — when multiple Proformas are pending approval, the Sales Manager can review and approve them as a batch rather than one by one. Each Proforma in the batch can be individually reviewed before the batch is confirmed.

---

## 16. Logistics Planner — Pricing & Delivery View

### 16.1 Overview

The Logistics Planner's workspace is the **Logistics** section of the main Clientera platform. Their role spans two distinct responsibilities: pricing (creating Proforma Invoices for orders forwarded by the Sales Manager) and delivery planning (calculating and publishing estimated delivery dates and maintaining the Dispatch Plan). The Logistics Planner does not physically dispatch goods — that is the Dispatcher's role (§17).

### 16.2 Proforma Invoice Creation

The Logistics Planner's Proforma creation queue shows all SORs forwarded by the Sales Manager and awaiting pricing. For each SOR in the queue:

- Distributor name and code
- SOR reference and date submitted
- Line items and quantities from the SOR
- Time waiting since being forwarded

The Logistics Planner opens an SOR and creates the Proforma Invoice from the creation form. Line items are pre-populated from the SOR. The Logistics Planner adds:
- Confirmed unit price for each line item
- Any additional cost lines (freight, handling, EXIM duties, insurance, taxes)
- Payment terms
- Notes for the Sales Manager or distributor

The system applies tax rules automatically based on the distributor's location, product tax classification, and transaction type. The Logistics Planner can review and override tax calculations if required.

Once complete, the Logistics Planner submits the Proforma for Sales Manager approval. They cannot send it directly to the distributor — Sales Manager approval is always required first.

If the Sales Manager returns the Proforma with correction notes, the Logistics Planner receives a notification with the reason. They revise the Proforma and resubmit. This loop repeats until the Sales Manager approves.

### 16.3 ETA Management

Once an order is confirmed (distributor has accepted the Proforma and it has been pushed to the ERP), it appears in the Logistics Planner's ETA management queue.

**ETA upload workflow:**
The Logistics Planner downloads the current list of confirmed orders awaiting ETAs. This export contains: SOR reference, ERP reference, distributor name, line items, and a blank ETA date column. The Logistics Planner completes the ETAs and uploads the file. The platform validates each row — reference must exist and be in the correct status; date must be a valid future date. Valid rows are processed immediately and distributors are notified. Invalid rows appear in an error report for resolution.

**Individual update:**
The Logistics Planner can open a specific confirmed order and set or update its ETA directly on the order record.

**API push:**
Logistics or WMS systems can push ETA data directly to the Clientera API, bypassing manual upload entirely.

**ETA revision:**
If an ETA must change after being set, the Logistics Planner updates it directly. Every ETA change is logged in the audit trail with the old value, new value, and the actor. If the change exceeds a configurable number of days from the original estimate, the Sales Manager is flagged to review and the distributor receives an ETA updated notification.

### 16.4 Dispatch Plan Management

The Dispatch Plan is the Logistics Planner's scheduled view of which orders are planned to ship on which dates. It is distinct from the ETA (the delivery date at the distributor) — the Dispatch Plan governs the outbound factory schedule.

The Logistics Planner maintains the Dispatch Plan from the **Dispatch Plan** view in Clientera. This view shows all confirmed orders grouped by planned dispatch date. For each order:
- SOR reference and ERP reference
- Distributor name and territory
- Line items and quantities
- ETA set for this order
- Planned dispatch date
- Current status (awaiting dispatch / dispatched)

The Logistics Planner schedules orders by assigning a planned dispatch date to each confirmed order. The Dispatch Plan is visible to the Sales Manager and the Dispatcher — the Sales Manager uses it for commercial planning; the Dispatcher uses it as their work instruction for the day's shipments.

The distributor sees a simplified version of the Dispatch Plan — their planned dispatch date — displayed as "Dispatch Scheduled — [date]" in their order status view.

### 16.5 Logistics Planner Dashboard

The Logistics Planner's dashboard shows:
- SORs awaiting Proforma creation (queue count and oldest item age)
- Proformas returned by Sales Manager requiring correction
- Confirmed orders awaiting ETA assignment (count and oldest)
- Orders in the Dispatch Plan not yet dispatched, by planned dispatch date
- Any SLA breaches or near-breaches across all categories

---

## 17. Dispatcher — Dispatch Execution View

### 17.1 Overview

The Dispatcher's workspace is the **Dispatch** section of the main Clientera platform. Their role is purely operational — they work from the Dispatch Plan created by the Logistics Planner and confirm, in the system, exactly when each order has physically left the factory, along with the shipment reference details the distributor needs to track their delivery.

The Dispatcher does not set prices, manage ETAs, or interact with the commercial approval workflow. They receive a confirmed, scheduled plan and execute against it.

### 17.2 Dispatch Execution Queue

The Dispatcher sees all orders that are scheduled for dispatch on the current day and the next configurable number of days (default: 3 days forward). For each order:

- SOR reference and ERP reference
- Distributor name, territory, and delivery address
- Line items and quantities being dispatched
- Planned dispatch date from the Dispatch Plan
- Current status (Scheduled / Dispatched)

Orders are sorted by planned dispatch date, then by distributor territory to support route batching.

### 17.3 Confirming Dispatch

When an order physically leaves the factory, the Dispatcher opens the order in Clientera and confirms dispatch. They enter:

- **Actual dispatch date** — the date the goods left the factory (may match the planned date or differ if there was a delay)
- **Courier / transport company name**
- **Vehicle number or container reference**
- **AWB number or tracking reference** (airway bill, lorry receipt, or equivalent)
- **Tracking link** — a URL if the courier provides online tracking
- **Any operational notes** — e.g. partial dispatch, special handling instructions followed, driver name

The Dispatcher submits the dispatch confirmation. On submission:
- The order status moves to `dispatched`
- The distributor is notified immediately via in-app, email, and WhatsApp with the dispatch date, expected arrival date (ETA), and all shipment reference details
- The ASN is generated automatically from the order line items and the shipment details entered
- The ASN is queued for Dispatcher review before being sent to the distributor (see §17.4)

### 17.4 ASN Review & Send

When a dispatch is confirmed, the system auto-generates the ASN. The Dispatcher reviews it before it reaches the distributor:
- Verifies line items and quantities match what was physically shipped
- Confirms shipment reference details are complete and accurate
- Adds or corrects any notes that the distributor should see

The Dispatcher sends the ASN. It is delivered to the distributor through all their configured channels simultaneously — in-app notification, email (with PDF attachment), and WhatsApp. Once sent the ASN is locked and is no longer editable. If a correction is needed, the Dispatcher generates a revised ASN — the original is retained in the audit trail with a superseded flag.

### 17.5 Partial Dispatch

If only part of an order is ready to ship (e.g. certain SKUs are available but others are not), the Dispatcher can confirm a partial dispatch. They select the line items and quantities being shipped in this consignment and confirm dispatch against those items only. The remaining items stay in `scheduled` status on the Dispatch Plan. The Dispatcher confirms subsequent partial or final dispatch separately when those items are ready.

Each partial dispatch generates its own ASN. The distributor sees each partial shipment as a separate delivery with its own tracking details. The order remains open until all line items are fully dispatched and confirmed.

### 17.6 Bulk Dispatch Confirmation

For high-volume operations where multiple orders are dispatching on the same day to the same distributor or region, the Dispatcher can confirm dispatch in bulk. They select multiple orders from the execution queue, enter common shipment details (same courier, same vehicle), and confirm. Individual shipment details that differ per order can be entered after the bulk confirmation on a per-order basis.

### 17.7 Dispatcher Dashboard

The Dispatcher's dashboard shows:
- Today's dispatch schedule — orders planned for dispatch today, with completion status
- Tomorrow's dispatch schedule — advance view for planning
- Partial dispatches in progress — orders with confirmed partial dispatch awaiting remaining items
- ASNs generated but not yet reviewed and sent
- Any overdue dispatches — orders whose planned dispatch date has passed without confirmation

---

## 18. Claims Team — Internal Processing View

### 17.1 Claims Queue

All claims submitted by distributors appear in the Claims team's queue in Clientera. The queue shows:

- Claim reference number
- Distributor name
- Claim type
- Date submitted
- Claimed amount
- Current status
- SLA status (days remaining or days overdue)
- Assigned processor (if claimed)

Claims in the queue are unassigned by default. A Claims processor clicks **Claim** to take ownership of a claim. Once claimed, it is removed from the general queue and sits in the processor's personal queue. If the processor needs to release the claim (e.g. due to absence), they release it back to the general queue.

### 17.2 Claim Detail View

The Claims processor sees the full claim detail:

- Distributor information and contact details
- Claim type, description, and claimed amount
- Affected products and quantities
- All attached documents — viewable inline for images, downloadable for PDFs
- Linked order or invoice (with navigation to the full order record)
- AI-suggested defect category and severity (from §12.3)
- Full activity log for this claim — every status change, note, and document upload with timestamps and actor names

### 17.3 Communication with the Distributor

The Claims processor can add notes to a claim that are visible to the distributor. When a distributor-visible note is added, the distributor is notified and can view it in their portal. The distributor can respond by adding their own note or uploading additional documents.

Internal notes (not marked as distributor-visible) are visible only to Clientera users and are never shown in the portal.

This threaded communication model keeps all claim-related communication in one place, tied to the claim record, with a complete audit trail.

### 17.4 Claim Resolution

When the Claims processor makes a decision:

**Approval** — the processor enters the approved credit amount (with any adjustment from the claimed amount noted), selects the resolution method (credit note to be issued by finance, replacement goods, cash refund), and approves. The claim status moves to `approved`. The distributor is notified. A task is created for the finance team to issue the credit note (if applicable).

**Rejection** — the processor enters the rejection reason (selected from a configured list, with optional free-text detail) and rejects. The claim status moves to `rejected`. The distributor is notified with the reason.

**Settlement** — once the credit note is issued or replacement goods are dispatched, the Claims processor marks the claim as `settled`. The distributor is notified.

### 17.5 Claims Analytics

The Claims team manager has access to a claims analytics view:

- Total claims submitted this period vs last period
- Claims by type (damaged goods, short delivery, etc.)
- Claims by distributor (which distributors are submitting the most claims)
- Average resolution time vs SLA
- Approval rate and average approved amount as a % of claimed amount
- Claims linked to specific products (are certain SKUs generating disproportionate claims?)

This analytics view surfaces patterns that inform product quality, logistics, and distributor management decisions.

---

## 19. System Admin — Distributor Administration

### 18.1 Distributor Master Data Management

The System Admin maintains the distributor master data that underpins the entire portal. From the **Admin → Distributors** section of Clientera, the admin can:

**Create a new distributor** — enter all master data fields (see §5.1), set the initial status to Active, and trigger the welcome and registration flow.

**Edit an existing distributor** — update any master data field. Changes to territory, authorised SKUs, credit limit, and assigned Sales Manager take effect immediately. Changes to the distributor's registered email or mobile require re-verification.

**Suspend or deactivate a distributor** — suspension blocks portal access immediately while preserving all data and in-flight processes. Deactivation is a softer state (for seasonal or temporarily inactive distributors) that can be reversed without re-registration.

**Manage employee logins** — add new employee logins for a distributor company, modify access levels for existing logins, reset credentials, or deactivate a specific employee's access without affecting other logins for the same distributor.

**View activity history** — a full log of all logins, actions, and system events for any distributor, accessible to the Admin at any time.

### 18.2 SKU Authorisation Management

The System Admin manages which SKUs each distributor is authorised to order from the distributor's profile page. The authorisation list can be updated at any time. Changes take effect immediately — if an SKU is removed from a distributor's authorisation list, it disappears from their catalogue on their next page load.

SKU authorisations can be set in bulk — for example, authorising all distributors in a specific region for a new product line — through the admin's bulk operations tools.

### 18.3 Announcement Management

The System Admin creates and manages all announcements. The admin has the same announcement creation capabilities as the Sales Manager (see §14.1) plus the ability to manage all announcements across all Sales Managers and all distributors in the tenant.

The admin can also configure announcement templates for common communication types — reducing the effort required to send routine notifications like payment reminders or scheme updates.

### 18.4 Portal Configuration

The System Admin configures the portal's operational settings:

- **Proforma validity period** — the number of days a Proforma remains valid for distributor acceptance before it expires
- **Claim SLA** — the maximum business days for claim processing
- **Credit SLA** — the number of days before an overdue invoice triggers escalation
- **ASN acknowledgement** — whether distributor acknowledgement of ASNs is required
- **Notification channel defaults** — the default channel preferences for new distributor logins
- **Dashboard data refresh interval** — how frequently the distributor's sales dashboard data refreshes (default: 8 hours)

---

## 20. Permissions & Role Model

### 20.1 Internal User Permissions

Internal users interact with the distributor management system through their roles in Clientera. The permissions relevant to this module are:

| Permission | Description |
|---|---|
| `distributor.view` | View distributor profiles and order history |
| `distributor.manage` | Create, edit, suspend, and deactivate distributors |
| `distributor.manage_skus` | Manage SKU authorisations for distributors |
| `sor.view` | View SORs submitted by distributors |
| `sor.review` | Review and forward or reject SORs (Sales Manager) |
| `sor.recall_any` | Recall any submitted SOR before an approver has acted |
| `proforma.create` | Create Proforma Invoices (Logistics Planner) |
| `proforma.approve` | Approve Proforma Invoices before they reach the distributor |
| `proforma.return` | Return a Proforma to the Logistics Planner for correction |
| `proforma.edit_accepted` | Edit operational fields on an accepted Proforma without workflow restart |
| `erp.push` | Push confirmed orders to the ERP |
| `dispatch_plan.manage` | Create and maintain the Dispatch Plan |
| `eta.manage` | Set and update ETAs for confirmed orders (Logistics Planner) |
| `dispatch.confirm` | Confirm actual dispatch dates and enter shipment details (Dispatcher) |
| `so.edit_accepted` | Edit operational fields on an accepted SO without workflow restart |
| `asn.create` | Generate ASNs from confirmed dispatch events |
| `asn.send` | Review and send generated ASNs to distributors |
| `asn.edit_accepted` | Edit operational fields on a sent ASN (e.g. corrected tracking details) |
| `target.manage` | Create, edit, and assign targets and incentive schemes |
| `target.view` | View distributor target attainment |
| `claim.view` | View claims submitted by distributors |
| `claim.process` | Take action on claims (approve, reject, request more information) |
| `claim.escalate` | Escalate claims to a senior processor |
| `resolution_queue.view` | Access the resolution queue for entities linked to cancelled or on-hold parents |
| `resolution_queue.action` | Stage and apply resolution actions on entities in the resolution queue |
| `announcement.create` | Create announcements targeted at distributors |
| `announcement.manage` | Edit and delete any announcement |
| `report.login.view` | Run and export the User Login Report |
| `report.orders.view` | Run and export the Web Orders Created Report |
| `report.claims.view` | Run and export the Claims Details Report |
| `report.targets.view` | Run and export the Target Sales vs Actual Sales Report |

### 20.2 Default Role Configurations

**Sales Manager** — `distributor.view`, `sor.view`, `sor.review`, `sor.recall_any`, `proforma.approve`, `proforma.return`, `erp.push`, `target.manage`, `target.view`, `claim.view`, `announcement.create`, `resolution_queue.view`, `report.orders.view`, `report.targets.view`

**Logistics Planner** — `sor.view`, `proforma.create`, `dispatch_plan.manage`, `eta.manage`, `so.edit_accepted`, `asn.create`

**Dispatcher** — `sor.view`, `dispatch.confirm`, `asn.create`, `asn.send`, `asn.edit_accepted`, `report.orders.view`

**Claims Team** — `distributor.view`, `claim.view`, `claim.process`, `claim.escalate`, `resolution_queue.view`, `resolution_queue.action`, `report.claims.view`

**System Admin** — all permissions

All roles are configurable through the Role Builder. Permissions can be added to or removed from any role. A user can hold multiple roles simultaneously — their effective permissions are the union of all assigned roles.

### 20.3 Distributor Portal Permissions

Within the Distributor Portal, access is controlled per employee login for the distributor company. The System Admin configures the access level for each distributor employee:

| Access Level | Capabilities |
|---|---|
| **Full Access** | Place orders, recall unactioned SORs, accept Proformas, submit claims, view all financial records, view targets and incentives |
| **Orders Only** | Place orders, recall unactioned SORs, view order status, accept Proformas |
| **View Only** | View orders, deliveries, targets, and financial records. Cannot place orders, recall SORs, or submit claims. |
| **Custom** | Any combination of capabilities, configured per login by the Admin |

---

## 21. Audit Trail

Every action taken by any user — distributor or internal — on any entity in the Distributor Management system is recorded permanently and cannot be edited or deleted.

### 20.1 What Is Logged

**Distributor actions:** Login (success and failure), SOR submitted, Proforma accepted, claim submitted, claim note added, document uploaded, ASN acknowledged, announcement dismissed.

**Sales Manager actions:** SOR reviewed, SOR forwarded to Operations, SOR rejected (with reason), Proforma approved, Proforma returned (with reason), order pushed to ERP, target created or modified, incentive scheme created or modified, announcement created.

**Operations actions:** Proforma created, Proforma submitted for approval, ETA set or updated (old value and new value), dispatch date confirmed, ASN generated, ASN sent.

**Claims Team actions:** Claim claimed (assigned to processor), claim approved (with amount), claim rejected (with reason), claim escalated, additional information requested, claim settled.

**System Admin actions:** Distributor created, distributor edited (all field changes with old and new values), distributor suspended or deactivated, SKU authorisation changed, employee login created or deactivated, portal configuration changed.

### 20.2 Properties of Every Audit Event

Every event records: an immutable UTC timestamp to millisecond precision, the identity of the actor (user ID, name, role), the entity affected (type and reference number), the action taken, the reason where required, and the full before-and-after state for any field change.

### 20.3 Audit Log Access

- **System Admin** — full access to all audit events across all distributors
- **Sales Manager** — access to all audit events for distributors in their portfolio
- **Operations / Claims team** — access to audit events for entities they work on
- **Distributors** — see a curated activity log of events relevant to them (their own actions and internal actions that affect their records) — internal workflow details, internal notes, and internal user identities are not shown to distributors

Audit events are immutable. No user at any level can edit or delete them. Retained for a minimum of 7 years.

---

## 22. Notifications Reference

All notifications follow the recipient's configured channel preferences: in-app (always on), email (configurable), WhatsApp (configurable).

### 22.1 Distributor Notifications

| Event | Trigger | Content |
|---|---|---|
| New SOR submitted | Distributor submits SOR | Confirmation with SOR reference number |
| SOR recalled | Distributor recalls their own SOR | Confirmation that SOR is back in draft |
| SOR rejected | Sales Manager rejects SOR | Reference number and rejection reason |
| Proforma ready for acceptance | Sales Manager approves Proforma | Reference number, total value, validity date, link to portal |
| Proforma expiring soon | 48 hours before Proforma expiry | Reference number, expiry date, link to portal |
| Proforma expired | Proforma validity period elapsed | Reference number — new Proforma will be issued if order proceeds |
| Order confirmed | Distributor accepts Proforma | Reference number and ERP/SAP order reference |
| Dispatch scheduled | Logistics Planner adds order to Dispatch Plan | Order reference, planned dispatch date |
| ETA set | Logistics Planner sets ETA | Order reference, ETA date, line items and quantities |
| ETA updated | Logistics Planner changes an existing ETA | Order reference, old ETA, new ETA |
| Order dispatched | Dispatcher confirms dispatch | Order reference, actual dispatch date, expected arrival date, courier details |
| ASN sent | Dispatcher reviews and sends ASN | Order reference, full shipment details, link to ASN PDF |
| Invoice available | Invoice created and mirrored from ERP | Invoice number, total amount, due date, link to portal |
| Claim submitted | Distributor submits claim | Confirmation with claim reference number |
| Claim information requested | Claims team requests more information | Claim reference, description of what is needed |
| Claim approved | Claims team approves claim | Claim reference, approved credit amount |
| Claim rejected | Claims team rejects claim | Claim reference, rejection reason |
| Claim settled | Claims team marks claim settled | Claim reference, settlement details |
| New announcement | Announcement published targeting this distributor | Announcement title, link to portal |
| Target created or updated | Sales Manager creates or updates a target | Target description, new value, period |
| SOR recalled by Sales Manager | Sales Manager recalls an SOR before action | Notification that the SOR has been recalled and returned to draft |

### 22.2 Internal User Notifications

| Event | Recipient | Content |
|---|---|---|
| New SOR submitted | Sales Manager (assigned to that distributor) | Distributor name, SOR reference, number of line items, time submitted |
| SOR recalled by distributor | Sales Manager | Distributor name, SOR reference — no action required |
| SOR forwarded to Logistics Planner | Logistics Planner queue | SOR reference, distributor name, forwarded by Sales Manager |
| Proforma created — pending Sales Manager approval | Sales Manager | SOR reference, Proforma total, created by Logistics Planner |
| Proforma returned to Logistics Planner | Logistics Planner | SOR reference, return reason from Sales Manager |
| Proforma approved — sent to distributor | Logistics Planner (confirmation) | SOR reference, confirmed by Sales Manager |
| Distributor accepts Proforma | Sales Manager | SOR reference, distributor name — ready for ERP push |
| Proforma not accepted — expiring soon | Sales Manager | SOR reference, distributor name, days until expiry |
| Proforma expired — no distributor action | Sales Manager | SOR reference, distributor name |
| ERP push failed | Sales Manager | SOR reference, error details, retry option |
| Order confirmed in ERP — ETA required | Logistics Planner | SOR reference, ERP reference, distributor name |
| Order added to Dispatch Plan | Dispatcher | SOR reference, ERP reference, planned dispatch date, distributor |
| Dispatch overdue — planned date passed | Dispatcher + Logistics Planner | SOR reference, planned dispatch date, days overdue |
| New claim submitted | Claims team queue | Claim reference, distributor name, claim type, claimed amount |
| Claim SLA approaching | Claims team + Claims manager | Claim reference, hours remaining |
| Claim SLA breached | Claims team manager | Claim reference, hours overdue |
| Claim escalated | Escalation recipient | Claim reference, distributor name, escalation reason |
| Distributor attainment below alert threshold | Sales Manager | Distributor name, current attainment %, threshold configured |
| Distributor inactive for X days | Sales Manager | Distributor name, days since last SOR or login |
| Distributor credit limit approaching | Sales Manager | Distributor name, current utilisation % |
| Entity added to resolution queue | Sales Manager + System Admin | Entity type, reference, parent SO reference, action required |

---

## 23. Integration Points

### 22.1 ERP Integration

The ERP is the system of record for confirmed orders, invoices, and payments. The Distributor Portal integrates with the ERP at the following points:

**Order push** — when the Sales Manager pushes a confirmed order, the platform calls the ERP API with the order details. The ERP creates the Sales Order and returns a reference number.

**Invoice pull** — invoices created in the ERP are pulled into the platform and made visible to the distributor. Sync runs on a configurable schedule (default: every 2 hours) and on-demand.

**Payment pull** — payment records are pulled from the ERP and used to update invoice payment status and the distributor's ledger.

**Credit note pull** — credit notes issued in the ERP are pulled and linked to the relevant invoice and claim in the platform.

**Stock availability** — if the ERP exposes stock levels, the platform can display availability status on the product catalogue. This is optional and configurable per tenant.

### 22.2 Logistics / WMS Integration

**ETA push** — the logistics or WMS system can push ETA data to the Clientera API directly as ETAs are calculated, bypassing the manual upload process.

**Dispatch push** — the WMS can push dispatch confirmation and shipment reference details (courier, vehicle, AWB, tracking link) to Clientera automatically when goods are dispatched.

**ASN push** — if the WMS generates ASNs, it can push them directly to Clientera. The platform links the ASN to the correct order and delivers it to the distributor.

### 22.3 Claims Processing System

If the organisation uses a third-party claims management system, claims submitted through the portal can be pushed to that system automatically on submission. Status updates from the third-party system are pulled back and reflected in the distributor's portal view.

### 22.4 Authentication — Active Directory

For organisations that require it, employee logins to the Distributor Portal can be authenticated through Active Directory integration. Employees log in with their corporate credentials and are mapped to their distributor company automatically.

### 22.5 Integration Architecture

All integrations are built on an OpenAPI-first architecture. Every entity in the platform exposes documented API endpoints for read and write operations. Webhook support is available for real-time event-driven integrations — for example, the ERP can subscribe to a webhook that fires whenever a new SOR reaches `accepted` status, triggering the ERP to prepare for the incoming order push.

All integration calls are logged in the audit trail with the source system, endpoint called, payload summary, and response status.

---

## 24. Reports

### 24.1 Overview

The Reports module provides structured, exportable reports for internal users. Reports are available from the **Reports** section of Clientera and can be run on demand or scheduled for automatic generation and delivery. All reports respect the running user's data scope — a Sales Manager sees only data for their assigned distributors; a System Admin sees data across all distributors.

### 24.2 User Login Report

**Purpose:** Audit and monitor portal access activity across all distributor logins.

**Available to:** System Admin, Sales Manager (their distributors only)

**Report contents:**
- Distributor name and code
- Employee login name and role
- Login date and time
- Login outcome (success / failed attempt)
- Device type and browser
- IP address and approximate geolocation

**Filters:** Date range, distributor, login outcome (success/failure), region

**Use cases:** Security auditing, identifying inactive distributors who have not logged in, detecting unusual access patterns (multiple failed attempts, logins from unexpected locations).

**Export formats:** CSV, PDF

### 24.3 Web Orders Created Report

**Purpose:** A complete record of all SORs submitted through the portal within a period, with their full status progression.

**Available to:** Sales Manager (their distributors), System Admin

**Report contents:**
- SOR reference number
- Distributor name and code
- Date and time submitted
- Number of line items
- Products and quantities ordered (one row per line item in the detailed view)
- SOR status at time of report
- Date of each status change (submitted → forwarded → Proforma created → approved → distributor accepted → ERP pushed)
- ERP order reference (where applicable)
- Sales Manager who actioned the SOR

**Filters:** Date range, distributor, product/SKU, status, region, Sales Manager

**Drill-down:** Summary view shows one row per SOR. Drill-down expands to show one row per line item within that SOR, with product code, quantity, and unit price from the Proforma.

**Export formats:** CSV, PDF, Excel

### 24.4 Claims Details Report

**Purpose:** A complete record of all claims submitted within a period, with their processing detail and resolution outcome.

**Available to:** Claims Team, Sales Manager (their distributors), System Admin

**Report contents:**
- Claim reference number
- Distributor name and code
- Date submitted
- Claim type (Damaged Goods, Short Delivery, Pricing Dispute, etc.)
- Linked SOR or invoice reference
- Products and quantities claimed (one row per affected line item)
- Claimed amount
- Approved amount (if resolved)
- Resolution outcome (Approved / Rejected / Settled / Pending)
- Date of resolution
- Processing time (days from submission to decision)
- SLA status (within SLA / breached)
- Claims processor name

**Filters:** Date range, distributor, claim type, resolution outcome, SLA status, region

**Drill-down:** Claim type breakdown shows aggregate totals — total claims by type, total claimed value by type, approval rate by type.

**Export formats:** CSV, PDF, Excel

### 24.5 Target Sales vs Actual Sales Report

**Purpose:** The primary commercial performance report — measures every distributor's sales performance against their assigned targets for any period.

**Available to:** Sales Manager (their distributors), System Admin

**Report contents — Summary view (one row per distributor):**
- Distributor name and code
- Territory / region
- Target period
- Revenue target
- Actual revenue (from confirmed invoices)
- Attainment % (actual / target × 100)
- Shortfall (target minus actual, in value)
- Projected end-of-period attainment at current run rate
- Volume target (where configured)
- Actual volume
- Volume attainment %
- Volume shortfall

**Drill-down — SKU level:**
From any distributor row, the user can drill into SKU-level performance. This shows for that distributor:
- Each SKU or SKU group with a specific target
- SKU target value or volume
- Actual sales for that SKU
- SKU attainment %
- SKU shortfall
- % contribution of this SKU to the distributor's overall revenue in the period

**Drill-down — Account level:**
Where account-level targets are configured, the drill-down shows performance per end-customer account served by the distributor.

**Filters:** Date range / target period, distributor, region, Sales Manager, attainment band (e.g. show only distributors below 50% attainment)

**Sorting:** The report can be sorted by any column. Default sort is attainment % ascending — lowest performers appear first, enabling the Sales Manager to prioritise intervention.

**Export formats:** CSV, PDF, Excel

### 24.6 Report Scheduling

All four reports can be scheduled for automatic generation and delivery:
- Frequency: daily, weekly, or monthly
- Delivery time: configurable
- Recipients: the scheduling user and any additional internal users they specify
- Format: PDF or CSV (user's choice at schedule creation)
- Scope: the scheduling user's data scope applies — a Sales Manager scheduling a report only ever receives data for their distributors, regardless of who else is added as a recipient

Scheduled reports are listed in the user's **My Scheduled Reports** view. Any scheduled report can be paused, edited, or deleted.

### 24.7 Report Access & Permissions

| Report | Sales Manager | Logistics Planner | Dispatcher | Claims Team | System Admin |
|---|---|---|---|---|---|
| User Login Report | Own distributors | — | — | — | All |
| Web Orders Created | Own distributors | Own orders | Own dispatches | — | All |
| Claims Details | Own distributors | — | — | All claims | All |
| Target vs Actual Sales | Own distributors | — | — | — | All |

Additional report access can be granted through the Role Builder by assigning the relevant `report.{report_name}.view` permission to any custom role.

---

*End of Clientera Distributor Management Portal BRD v1.1*

*This document defines the complete feature scope for the Distributor Management Portal module. It is intended as the foundation for technical specification, UI design, and development planning.*