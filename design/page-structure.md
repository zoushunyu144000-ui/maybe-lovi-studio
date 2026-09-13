# Figma Page Structure

Status: Scope locked for first complete Figma round. Visual details may still refine when more client references arrive.

## Design strategy
- Mobile-first responsive design.
- Primary frames: Mobile 390px and Desktop 1440px.
- Mobile is the primary experience and must be perfected first; desktop is still a required full layout, not an optional adaptation.
- Mobile must be intentionally composed for touch and narrow screens rather than simply shrinking desktop layouts.
- Chinese is the complete master UI language for Figma.
- Keep language switch controls for Chinese / English / Malay without duplicating every page three times.
- Homepage balance: roughly 60% product / 40% brand and founder story.
- Use 5 concept product visuals until real products exist.
- First launch product model: 5 exterior-style products, each using the same fixed 5-scent selector.

## Public pages

### 1. Home
1. Announcement / trust strip
   - prominently reserve space for these client-required messages:
     - `SDCA 韩国认证香薰蜡烛`
     - `香水拥有 IFRA 国际标准认证`
   - final public wording must be checked against supporting evidence before launch
2. Header
   - logo
   - menu
   - language switch
   - cart icon with quantity badge
   - WhatsApp/contact entry
3. Hero
   - emotional brand headline
   - supporting line
   - primary CTA to products
   - secondary CTA to brand story/contact if needed
4. Featured products
   - 5 exterior-style products
   - product image / name / price / short descriptor
   - `5 Scents Available` or equivalent cue
5. Scent Guide preview
   - introduce the shared 5-scent system
   - link to full scent guide / product selection
6. Brand story
   - short MAYBE LOVI meaning and emotional proposition
7. Gift occasions
   - birthday
   - Christmas
   - thank-you / caring gift
   - everyday thoughtful gift
8. Meet May
   - concise founder intro
   - founder/studio image placeholder
9. Studio / making process
   - placeholder until real studio photos arrive
10. Trust / quality block
   - SDCA claim area
   - IFRA claim area
   - concise certification/quality explanation after wording verification
11. Contact / social CTA
   - active Instagram direct link
   - active WhatsApp link
   - reserved Facebook and Xiaohongshu slots only until official accounts exist
12. Footer
   - Instagram
   - WhatsApp
   - reserved Facebook / Xiaohongshu entries
   - location placeholder
   - language switch

### 2. Products / Shop
- page title / short intro
- responsive 5-product grid
- product card: image, name, price, short descriptor, `5 Scents Available`
- no need to present the 5 scents as separate products

### 3. Product Detail
- image gallery
- product name
- product-specific price
- short emotional description
- required `Choose Your Scent` selector using the shared 5 scents
- selected scent state must be obvious but refined
- quantity selector
- `Add to Cart` CTA
- trust tags/quality block for SDCA + IFRA after wording verification
- optional `Explore Scent Guide` link
- related products

### 4. Scent Guide
Shared scent content for all products:
1. Morning Light Muguet / 晨露铃兰 — Fresh / Pure / Healing
2. Jasmine Oolong Tea / 茉莉乌龙茶 — Elegant / Calm / Refined
3. La Tulipe (B Type) / 郁金香花园 — Fresh / Elegant / Sophisticated
4. Peony (L Type) / 粉色牡丹 — Romantic / Soft / Feminine
5. Do Son Tuberose (D Type) / 晚香玉 — Intense / Sensual / Luxurious

- The scent reference graphic is client-provided source material.
- The website should derive a clean, brand-consistent guide rather than repeating the full reference graphic in every product view.

### 5. Cart / Cart Drawer
- cart icon with live quantity badge
- mobile-first drawer / bottom sheet / full-screen cart state
- each cart line shows:
  - product image
  - product name
  - selected scent
  - unit price
  - quantity controls
  - line total
  - remove action
- same product + same scent may merge quantity
- same product + different scent remains separate
- subtotal shown clearly
- note: shipping fee, availability and payment details are confirmed in WhatsApp
- primary CTA: `Order via WhatsApp` / `Send Order via WhatsApp`
- do not use `Checkout` or `Pay Now` for the current build
- empty-cart state and CTA back to products

### 6. About MAYBE LOVI
- brand name meaning
- brand promise: warmth, care, sincerity, thoughtfulness
- condensed origin story
- visual timeline / simple story sections if useful
- link to Meet May / studio / products

### 7. Meet May / Studio
- simple founder portrait or workspace image
- concise founder copy
- studio atmosphere / making process
- avoid publishing sensitive personal history without explicit approval
- CTA to products/contact

### 8. Contact
- WhatsApp: `+60 16-523 3840`
- Instagram direct link: `https://www.instagram.com/maybe_lovi_scent?stkn=dHptNHR2YjhlMDcz`
- Facebook: reserve slot only; official account not registered yet
- Xiaohongshu: reserve slot only; official account not registered yet
- location/map placeholder
- simple enquiry CTA

### 9. Mobile navigation / shared states
- hamburger menu
- language switch popover/dropdown
- cart icon/badge
- WhatsApp sticky CTA if used
- distinguish ordinary floating WhatsApp contact from cart-generated WhatsApp ordering
- footer / navigation states

## Cart interaction rules
- Scent selection is mandatory before Add to Cart.
- Minimum quantity = 1.
- Different exterior products may have different prices.
- All scent options within the same product share that product's price.
- Cart subtotal updates live.
- Cart should persist locally where practical.
- `Order via WhatsApp` builds a message from the actual live cart and opens the confirmed merchant WhatsApp chat; the user manually sends the message.

## Admin / backend Figma
Keep functional and simple; not part of the public visual storytelling system.

### A. Admin Login
- logo
- email/username
- password
- sign-in button

### B. Product Management
- product list/table/cards
- search/filter if useful
- status
- edit
- delete
- add product button

### C. Add / Edit Product
- product images
- product name
- category
- price
- description
- shared scent availability/status where needed
- publish/save actions

## Responsive rules
### Mobile — highest priority
- Mobile experience must be the most polished version of the site.
- Master frame: 390px.
- QA widths: 360px, 375px, 390px and 430px.
- Single-column reading flow where it improves clarity.
- Full-width / near-full-width imagery where appropriate.
- Product grids may use 2 columns only when cards remain readable; otherwise use a single column or carefully designed horizontal carousel.
- Touch targets must be comfortably tappable.
- Typography must be readable without zooming.
- Header/nav must not crowd the logo.
- Scent cards must remain easy to scan and select with a thumb.
- Product-detail CTA should remain highly visible without covering important content.
- Cart should use a mobile-appropriate bottom sheet, drawer or full-screen state.
- Cart must not be blocked by the floating WhatsApp CTA.
- Floating buttons need safe spacing from browser/device bottom areas.
- Avoid horizontal overflow at all target widths.
- Ensure image crops, Chinese/English line wrapping, badges and prices remain balanced.
- Mobile interactions and spacing should be separately tuned instead of inheriting desktop values unchanged.

### Desktop — fully supported
- Master frame: 1440px.
- Validate behavior at approximately 1280px and wider desktop screens.
- Max content width around 1200px unless a full-bleed visual section intentionally needs more.
- Use larger editorial whitespace while preserving the same visual language as mobile.
- 3–4 column product grids are acceptable where appropriate.
- Right-side cart drawer is acceptable.
- Split layouts may be used for brand story / founder / studio sections.
- Header should expose navigation cleanly without becoming overly dense.
- Desktop must include the complete product, scent, cart, subtotal, social and WhatsApp-order flow; it is not a reduced secondary version.

### Functional parity and QA order
- Product browsing, product detail, scent selection, quantity selection, Add to Cart, cart editing, subtotal calculation and WhatsApp order handoff must all work on both mobile and desktop.
- Responsive adaptation may change layout and interaction presentation, but not remove required functions.
- Final QA priority is mobile first, desktop second.

## Approval boundary
Figma is used to approve page structure, visual system, responsive direction, component style and overall content hierarchy. Real product imagery and final product copy may still be replaced/updated before launch. SDCA/IFRA wording is client-required content but should be matched to supporting evidence before final public publication.