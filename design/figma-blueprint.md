# MAYBE LOVI — Figma Blueprint

Status: Working design blueprint for client-review UI.

## 1. Frame setup
- Mobile master: 390px width.
- Desktop master: 1440px width.
- Mobile is designed first; desktop expands the same hierarchy rather than becoming a different site.
- Chinese is the complete design language for the first Figma round.
- Keep a language switch control for 中文 / EN / BM.

## 2. Visual system — starting tokens
These are design recommendations, not fixed client-provided brand colors. Adjust after final reference review / logo color matching.

### Color direction
- Warm Ivory: `#FFF9F3` — main background
- Soft Cream: `#F7EEDF` — section background
- Blush Pink: `#F3D7D8` — romantic accent
- Caramel Beige: `#C7A080` — warm commerce accent
- Muted Sage: `#A5A38C` — subtle secondary accent
- Cocoa Brown: `#4B3A32` — primary text
- White: `#FFFFFF` — cards / clean areas

### Typography direction
- Chinese body / UI: clean sans-serif with strong mobile readability.
- Editorial headings: refined serif or soft high-contrast serif if Chinese support is good.
- Avoid overly decorative script for body text.
- Use MAYBE LOVI logo as the main distinctive brand signature rather than forcing handwriting fonts everywhere.

### Shape language
- Soft rounded corners, around 14–20px for cards on mobile.
- Large editorial image blocks with generous whitespace.
- Thin warm-grey dividers rather than heavy borders.
- Cute illustrated accents can appear selectively, not on every section.

## 3. Shared components
### Header
Mobile:
- left: menu icon
- center: MAYBE LOVI logo
- right: language switch / contact icon
Desktop:
- logo left or centered depending final visual balance
- nav: 首页 / 产品 / 品牌故事 / 关于 May / 联系
- right: 中文 / EN / BM + WhatsApp

### Product card
- image ratio: 4:5 preferred
- small category label
- product name
- price
- one-line emotional descriptor
- no add-to-cart button in current scope
- tap/click opens product detail

### CTA
Primary: `看看产品` / `查看系列`
Secondary: `WhatsApp 咨询`
Avoid too many competing button styles.

### Trust badge block
Reserve a restrained area for:
- Korea-related origin message
- IFRA-related trust message
Do not lock exact wording until documentation is verified.

## 4. Homepage — Mobile 390
### Section 1 — Trust strip
Very slim top strip.
Temporary text only, pending verification.

### Section 2 — Hero
- logo / small brand marker
- headline suggestion: `把心意，做成一份温柔的礼物`
- supporting line: `香气、手作与一点被惦记的感觉`
- main concept product / gift-set image
- CTA: `看看产品`
- optional small link: `认识 MAYBE LOVI`

### Section 3 — Featured Products
- title: `为你准备的香气与心意`
- 5 concept products
- mobile: horizontal carousel or 2-column grid
- product cards stay simple and image-led

### Section 4 — Categories
Three entry cards:
- 香薰蜡烛
- 香氛
- 礼盒
Each uses one visual + short line of copy.

### Section 5 — Brand Story
- title: `MAYBE LOVI，从爱开始`
- concise explanation of May / Mom / Baby Girl / Lovi
- keep it warm and short
- button: `看看我们的故事`

### Section 6 — Gift Occasions
Editorial cards for:
- 生日
- 圣诞
- 谢谢你
- 想让你知道，我在乎你
The goal is gift motivation, not category complexity.

### Section 7 — Meet May
- natural studio/founder image placeholder
- small copy about discovering fragrance-making as a healing process
- do not publish sensitive trauma/debt details
- button: `认识 May`

### Section 8 — Studio / Process
- 2–3 image collage / masonry composition
- captions such as 制作 / 包装 / 工作室的一角
- placeholder until client sends real photos

### Section 9 — Quality / Trust
- quiet badge/card composition
- Korea-origin block placeholder
- IFRA block placeholder
- explain only verified facts

### Section 10 — Contact CTA
- soft full-width card
- `想找一份特别的礼物？`
- WhatsApp button
- social icons

### Section 11 — Footer
- logo
- social links
- location / contact placeholders
- 中文 / EN / BM

## 5. Homepage — Desktop 1440
- max content width: about 1180–1240px
- hero becomes a 2-column editorial composition
- featured products use 4-column grid + fifth featured card or horizontal composition
- brand story / Meet May sections use split image-and-copy layouts
- gift occasions can become 4 equal editorial cards
- studio section can use asymmetric image collage
- keep more whitespace than mobile, not more content

## 6. Products / Shop
### Mobile
- page intro
- horizontal filter chips: 全部 / 香薰蜡烛 / 香氛 / 礼盒
- 2-column product grid if names remain short
- otherwise single-column editorial cards

### Desktop
- title + intro
- category tabs / filter
- 3–4 column grid
- hover state may show second image or subtle detail, but no complex commerce interaction

## 7. Collection Page
For each category:
- category hero
- short emotional intro
- product grid
- optional editorial story / use-case block midway

Concept category labels:
- 香薰蜡烛 / Candles
- 香氛 / Aroma
- 礼盒 / Gift Sets

## 8. Product Detail
### Mobile order
1. image gallery
2. product name
3. price
4. short emotional description
5. product details
6. trust/origin tags when verified
7. WhatsApp enquiry CTA
8. related products

### Desktop
- left: 55–60% image gallery
- right: sticky product info column
- no checkout/cart in current scope

Concept content fields:
- 名称
- 价格
- 香味 / 类型
- 简短故事
- 产品描述
- 使用 / 保存说明 if later needed

## 9. About MAYBE LOVI
- opening statement about warmth, love and thoughtfulness
- explain brand name meaning visually
- short brand origin story
- product/gift philosophy
- soft image break
- CTA to products

Suggested narrative line:
`MAYBE LOVI 想做的，不只是一件香氛产品，而是一份认真准备、能够让人感受到被记得的心意。`

## 10. Meet May / Studio
- founder image / workspace image
- concise introduction
- `我不太会说很多话，但我喜欢慢慢把心意做进作品里。`
- short healing-origin story without sensitive details
- studio image sequence
- CTA to products/contact

## 11. Contact
- direct WhatsApp CTA as primary action
- Facebook / Instagram / Xiaohongshu
- phone
- location / map after provided
- avoid heavy contact forms unless client later requests one

## 12. Language switch state
- 中文 / EN / BM
- in Figma, only show interaction state / menu
- no need to duplicate all screens in all languages

## 13. Admin UI
Visual style can be cleaner and more utilitarian than the public site.

### Admin Login
- logo
- email / username
- password
- login button

### Product Management
- header: 产品管理
- add product CTA
- product rows/cards with image / name / category / price / status
- edit / delete

### Add / Edit Product
Fields:
- product image(s)
- name
- category
- price
- description
- scent/type/details
- save draft / publish

Admin should remain responsive enough to use on mobile, but desktop/tablet usability is more important than decorative branding.

## 14. Prototype flow for client presentation
Public prototype:
Home → Products → Product Detail → About MAYBE LOVI → Meet May → Contact.

Admin prototype:
Login → Product Management → Add/Edit Product.

## 15. Client-review notes
The Figma round is intended to approve:
- visual direction
- layout
- responsive hierarchy
- page structure
- component style
- brand/story balance

Still replaceable before launch:
- real product photos
- exact product names / prices / descriptions
- studio photography
- final contact info
- exact Korea-origin wording
- exact IFRA wording

## 16. Do not add without approval
- cart
- checkout
- payment gateway
- customer account
- inventory system
- order management
- discount engine
- wishlist
