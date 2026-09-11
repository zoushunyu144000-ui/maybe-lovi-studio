# MAYBE LOVI — Figma Execution Plan

Status: Ready for first full-site Figma production
Owner: Product / UI design
Priority: Mobile first, then desktop
Master frames: Mobile 390px / Desktop 1440px
Primary design language: Chinese

## 1. Purpose
This document turns the confirmed project scope into a Figma-ready execution plan. The first Figma round is a complete responsive website review set, not a sample-page exercise.

The design must be detailed enough for the client to approve:
- information architecture
- page hierarchy
- visual system
- product presentation
- responsive direction
- founder / studio balance
- simple admin flow
- language switch placement
- placeholder strategy before real products exist

Formal website development begins only after the client approves the Figma direction and pays the agreed first-stage / partial payment.

## 2. Non-negotiable scope rules
In scope:
- full public website UI
- mobile + desktop
- Chinese master copy
- visible 中文 / EN / BM control
- product showcase and product detail
- contact / social / WhatsApp enquiry
- simple product-management admin screens
- concept product visuals for the first 5 product slots

Not to design as active product features unless scope changes:
- cart
- checkout
- online payment
- member account
- inventory system
- order management
- shipping calculator

Korea-origin and IFRA information must be represented as reserved trust content, not as hard factual claims until evidence and wording are confirmed.

## 3. Visual interpretation
Reference roles:
- Candle Club: structure, clarity, concise information flow
- Notebook Therapy / Neko Cafe: warmth, collection-led storytelling, illustrated softness, responsive mood

MAYBE LOVI must not look copied from either source.

Target feeling:
- warm
- healing / comforting without medical claims
- thoughtful gift feeling
- handmade
- soft and feminine without becoming childish
- refined and editorial rather than generic marketplace UI

Avoid:
- cheap all-pink e-commerce styling
- excessive bows/hearts/sparkles
- cold SaaS / tech-store appearance
- dense marketplace card grids
- exaggerated luxury copy

## 4. Figma file structure
Recommended top-level pages in the Figma file:

1. `00_Cover & Notes`
2. `01_Foundations`
3. `02_Components`
4. `03_Mobile_Public`
5. `04_Desktop_Public`
6. `05_Admin`
7. `06_States & Prototype`
8. `07_Archive`

### 00_Cover & Notes
Include:
- project name
- version/date
- scope summary
- client-review legend
- placeholder legend
- approval boundary note

Suggested legend:
- `REAL`: confirmed current content
- `CONCEPT`: temporary product / visual direction
- `PENDING CLIENT`: requires client material
- `VERIFY`: factual claim must be verified before launch

### 01_Foundations
Create token boards for:
- color
- typography
- spacing
- radius
- shadows
- grid
- image ratios
- icon sizes

### 02_Components
Build reusable component sets before final pages:
- announcement strip
- header desktop / mobile
- language switch
- buttons
- chips / category filters
- product cards
- trust item
- editorial image card
- quote / story block
- accordion
- social icon button
- form field
- footer
- mobile menu drawer
- admin field / table row / action menu

Use Auto Layout throughout.

## 5. Public page inventory
The first review set must include:

1. Home
2. Product Listing / Shop
3. Collection / Category
4. Product Detail
5. About MAYBE LOVI
6. Meet May / Studio
7. Contact
8. Mobile Menu state
9. Language Switch state

## 6. Admin page inventory
Include at functional fidelity, visually quieter than the public site:

1. Admin Login
2. Product List / Management
3. Add Product
4. Edit Product
5. Delete confirmation / management state

No unnecessary dashboard analytics should be added.

## 7. Homepage composition target
Content emphasis: approximately 60% product / 40% brand + founder.

Recommended order:
1. Trust / announcement strip
2. Header
3. Hero
4. Featured products
5. Category entry
6. Gift occasion story
7. Short brand story
8. Meet May
9. Studio / making preview
10. Trust / quality block
11. Contact CTA
12. Footer

The first three scrolls on mobile should clearly establish:
- what MAYBE LOVI is
- what kind of products are offered
- how to browse / enquire

Do not begin with a long founder biography.

## 8. Hero direction
The hero should communicate an emotional gift proposition first, not technical product specifications.

Recommended hierarchy:
- eyebrow: `MAYBE LOVI · 香气与心意的礼物`
- H1: short, warm statement
- support copy: 1–2 lines
- primary CTA: `看看礼物` / `浏览作品`
- secondary CTA: `认识 MAYBE LOVI`
- visual: one strong concept product/lifestyle scene, marked `CONCEPT`

Hero should avoid generic claims like “best fragrance” or “luxury imported fragrance”.

## 9. Product-card specification
Each standard product card should support:
- image
- category label
- product name
- short descriptor, max 1 line
- price
- optional small tag: `礼物推荐` / `新品概念`
- card tap leads to Product Detail

Do not include:
- add-to-cart
- quantity stepper
- buy-now checkout
- fake review stars

Recommended image ratios:
- primary grid: 4:5
- editorial / category card: 3:4 or 1:1 depending composition

During Figma stage, concept products must be visually marked in design annotations, not necessarily with a large public-facing “placeholder” label in the polished mockup.

## 10. Concept product set
Use exactly 5 initial concept items for the first visual round so the whole system can be tested.

Suggested distribution:
- 2 × 香薰蜡烛
- 1 × 香氛 / aroma object
- 2 × 礼盒 / gifting sets

Use neutral working names that do not imply final production facts.
Example naming style:
- 晚安花园
- 奶油木香
- 小小拥抱礼盒
- 午后微光
- 给你的温柔

These are design-stage working names only.

## 11. Trust / origin section
Create a 2-item or 3-item trust component that can later hold verified copy.

Current Figma wording should be deliberately soft, for example:
- `韩国香氛方向 / 原料信息（待确认）`
- `IFRA 相关资料（待核实正式表述）`
- `用心制作与包装`

Visual treatment:
- compact icon + title + one short line
- warm neutral panel
- no official-seal styling unless actual evidence permits it
- no “100% Korea imported” or “IFRA certified brand” wording without proof

## 12. Meet May / Studio content discipline
Role: humanize the brand, not replace the product story.

Homepage Meet May:
- 1 portrait/workspace image
- small heading
- 70–110 Chinese characters maximum
- one CTA to full Studio page

Dedicated Meet May / Studio page:
- concise founder introduction
- making process
- studio atmosphere
- selected quote / brand belief
- no detailed sensitive personal history

Target rule:
- Homepage founder section should occupy no more visual weight than one major product section.

## 13. Placeholder and client-material matrix
### Can use now as design-stage concept
- 5 product visuals
- hero product scene
- gift occasion imagery
- studio placeholders
- founder image placeholder

### Must later be supplied or confirmed by client
- real product photos
- real product names
- real prices
- scent/type/details
- studio photos
- optional founder portrait
- location
- phone
- Facebook
- Instagram
- WhatsApp
- Xiaohongshu
- final translations

### Must be verified before strong public use
- exact Korea-origin statement
- exact IFRA statement / document scope

## 14. Mobile production sequence
Design in this order:
1. Home mobile
2. Product Listing mobile
3. Product Detail mobile
4. Collection mobile
5. About mobile
6. Meet May / Studio mobile
7. Contact mobile
8. Mobile menu + language states
9. Admin mobile only if needed for management use; otherwise admin can prioritize desktop/tablet functional layout

Only after mobile hierarchy is stable, expand to desktop.

## 15. Desktop production sequence
1. Home desktop
2. Product Listing desktop
3. Product Detail desktop
4. Collection desktop
5. About desktop
6. Meet May / Studio desktop
7. Contact desktop
8. Header / language interaction states
9. Admin screens

Desktop should reinterpret whitespace and composition, not simply stretch mobile sections.

## 16. Prototype flow for client review
Public prototype flow:
`Home → Featured Product → Product Detail → WhatsApp enquiry`

Secondary flow:
`Home → Shop → Category → Product Detail`

Brand flow:
`Home → About MAYBE LOVI → Meet May / Studio → Contact`

Navigation state flow:
`Home → Mobile Menu → Language Switch`

Admin flow:
`Admin Login → Product List → Add Product → Save → Edit Product → Delete confirmation`

## 17. Review checkpoints
Before showing the client, internally confirm:
- mobile first three screens feel immediately commercial and understandable
- product cards are more visually dominant than founder copy
- brand story is emotional but concise
- no unsupported Korea / IFRA claim is stated as fact
- no cart/payment UI appears
- desktop is genuinely designed, not auto-stretched
- all client-dependent content is annotated
- Chinese UI is complete
- language control is visible and believable

## 18. Client review framing
The first design review should ask for approval on only these major axes:
- overall visual feeling
- homepage hierarchy
- product-card style
- product-detail information layout
- About / Meet May amount of storytelling
- mobile navigation feel
- desktop composition

Do not let missing real product photos block visual approval; concept assets are intentionally temporary.

## 19. Handoff after Figma approval
After client approval and payment:
- freeze approved Figma version
- create implementation handoff notes
- replace concept items when real assets arrive
- confirm final Korea/IFRA copy before production release
- implement responsive frontend and admin
- add final translations after approval workflow is confirmed

Until that point, this repository remains in design preparation / design execution phase.