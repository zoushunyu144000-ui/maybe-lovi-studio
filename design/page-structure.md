# Figma Page Structure

Status: Scope locked for first complete Figma round. Visual details may still refine when more client references arrive.

## Design strategy
- Mobile-first responsive design.
- Primary frames: Mobile 390px and Desktop 1440px.
- Chinese is the complete master UI language for Figma.
- Keep language switch controls for Chinese / English / Malay without duplicating every page three times.
- Homepage balance: roughly 60% product / 40% brand and founder story.
- Use 5 concept product visuals until real products exist.
- Initial concept categories: 香薰蜡烛 / 香氛 / 礼盒 (`Candles / Aroma / Gift Sets`).

## Public pages

### 1. Home
1. Announcement / trust strip
   - reserve space for Korea-origin and IFRA-related trust messaging after wording is verified
2. Header
   - logo
   - menu
   - language switch
   - WhatsApp/contact entry
3. Hero
   - emotional brand headline
   - supporting line
   - primary CTA to products
   - secondary CTA to brand story/contact if needed
4. Featured concept products
   - 5 concept visuals
   - category / product name / price placeholder
5. Category entry
   - 香薰蜡烛
   - 香氛
   - 礼盒
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
   - Korea-origin claim placeholder
   - IFRA-related wording placeholder
   - only finalize after evidence/wording is verified
11. Contact / social CTA
12. Footer
   - social links
   - location/phone placeholders
   - language switch

### 2. Products / Shop
- page title / short intro
- category filter: All / 香薰蜡烛 / 香氛 / 礼盒
- responsive product grid
- product card: image, name, price, short descriptor
- empty/loading states only if needed for prototype

### 3. Category / Collection
- category hero
- short category description
- filtered product grid
- optional small editorial image/story block

### 4. Product Detail
- image gallery
- product name
- price
- short emotional description
- scent/type/details placeholders
- Korea/IFRA trust tags only after verified wording
- WhatsApp enquiry CTA
- related products

### 5. About MAYBE LOVI
- brand name meaning
- brand promise: warmth, care, sincerity, thoughtfulness
- condensed origin story
- visual timeline / simple story sections if useful
- link to Meet May / studio / products

### 6. Meet May / Studio
- simple founder portrait or workspace image
- concise founder copy
- studio atmosphere / making process
- avoid publishing sensitive personal history without explicit approval
- CTA to products/contact

### 7. Contact
- WhatsApp
- Facebook
- Instagram
- Xiaohongshu
- phone
- location/map placeholder
- simple enquiry CTA

### 8. Mobile navigation / shared states
- hamburger menu
- language switch popover/dropdown
- WhatsApp sticky CTA if used
- footer / navigation states

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
- scent/type/details
- publish/save actions

## Responsive rules
### Mobile priority
- 390px master frame
- single-column reading flow
- full-width/near-full-width imagery
- 2-column product grid where readable, otherwise horizontal carousel / single column depending component
- large tap targets
- sticky or highly visible WhatsApp CTA where appropriate
- text hierarchy optimized for social-traffic visitors

### Desktop
- 1440px master frame
- max content width around 1200px
- larger editorial whitespace
- 3–4 column product grids
- split layouts for brand story / founder / studio sections
- retain the same hierarchy and visual tokens as mobile

## Approval boundary
Figma is used to approve page structure, visual system, responsive direction, component style and overall content hierarchy. Real product imagery, final product copy, exact Korea-origin wording and exact IFRA wording may still be replaced/updated before launch.