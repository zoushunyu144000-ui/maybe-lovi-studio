# MAYBE LOVI — Mobile Wireframe Specification

Status: Figma-ready
Master frame: 390px width
Priority: Primary design target
Language: Chinese master UI

## 1. Mobile principles
The mobile version is the primary experience because much of the likely traffic will arrive from social media and messaging links.

Rules:
- one clear action per section
- single-column reading flow unless product density benefits from 2 columns
- avoid long paragraphs above the fold
- product discovery must appear before deep founder storytelling
- minimum tap target approximately 44px
- important CTAs remain visible without looking like aggressive marketplace UI
- use Auto Layout and responsive constraints from the start

Recommended page gutter: 20px
Recommended section gap: 64–88px depending visual weight
Recommended card gap: 12–16px

## 2. Shared mobile shell
### A. Trust strip
Height: 32–36px
Content: one concise rotating/static line
Current stage: use neutral placeholder wording only.

Example:
`韩国香氛方向与 IFRA 相关资料 · 正式信息待确认`

### B. Header
Height: 64–72px
Left: hamburger
Center: MAYBE LOVI logo
Right: language / contact icon

Do not add cart icon.

### C. Sticky WhatsApp CTA
Optional but recommended on high-intent pages.
Treatment:
- compact bottom pill or floating circular button
- label can be `WhatsApp 咨询`
- should not cover product controls or footer

### D. Footer
Stacked sections:
1. logo + short brand line
2. primary links
3. social links
4. contact placeholders
5. language switch
6. copyright / small legal note

## 3. Home — Mobile
### Section 1: Hero
Height target: 560–680px depending image crop
Order:
1. small eyebrow
2. H1
3. supporting copy
4. primary CTA
5. secondary text link
6. concept hero image

Recommended content ratio: copy top 35–40%, image lower 60–65%.

Component:
- Hero / Mobile / Image-bottom

Placeholder:
- concept product / lifestyle visual

Client later provides:
- real hero product image if desired

### Section 2: Featured Products
Heading row:
- `送给你，也送给重要的人`
- `查看全部`

Grid:
- 2 columns
- 5 concept products total; last item can span full width or appear in a horizontal carousel depending visual balance

Product card content:
- 4:5 image
- category
- name
- price
- optional one-line descriptor

No purchase button inside card.

### Section 3: Category Entry
Three vertically stacked image cards:
- 香薰蜡烛
- 香氛
- 礼盒

Each card:
- large image area
- title
- short one-line mood copy
- chevron / text CTA

Use strong visual differentiation but same rounded system.

### Section 4: Gift Occasions
Purpose: connect product to gifting search intent.

Use horizontal scroll cards or 2×2 compact cards:
- 生日
- 圣诞
- 谢谢你
- 想让你开心的一天

Do not turn into a dense SEO keyword block.

### Section 5: Short Brand Story
Soft editorial section with:
- small decorative motif
- heading: brand belief
- 2 short paragraphs maximum
- one image detail / packaging visual
- CTA: `认识 MAYBE LOVI`

### Section 6: Meet May
Layout:
- portrait/workspace image full width or 4:5
- `Meet May`
- 70–110 Chinese characters
- link: `看看 May 的小小工作室`

Must remain concise.

### Section 7: Studio / Making Preview
Use 2-image collage:
- workspace
- hand-making detail

Current stage: placeholders.
Later: replace with real studio/process photos.

Short copy:
- handmade / patience / gift preparation
- avoid therapeutic or medical promises

### Section 8: Trust / Quality
Stack 2–3 trust rows/cards.
Suggested temporary structure:
1. Korea-related direction — VERIFY
2. IFRA-related material — VERIFY
3. careful handmade / packaging — general brand statement

Use line icons, no fake certification seals.

### Section 9: Contact CTA
Warm full-width panel:
- `想找一份刚刚好的礼物？`
- one short line
- primary: `WhatsApp 问问 May`
- secondary: social icons

### Section 10: Footer
Shared footer.

## 4. Product Listing / Shop — Mobile
### Header
Shared mobile header.

### Page intro
- H1: `全部作品`
- one short explanatory line

### Category filter
Horizontal scroll chips:
- 全部
- 香薰蜡烛
- 香氛
- 礼盒

Selected state uses filled warm accent.

### Product grid
2 columns.
Use consistent 4:5 card images.

For first design round:
- show 5 concept products
- optionally repeat card shells as skeleton examples only in wireframe, not polished client mockup

### Bottom CTA
`不知道选哪一个？ WhatsApp 告诉我们送礼对象和场合。`

## 5. Collection / Category — Mobile
### Category hero
- category name
- 1–2 sentence description
- large image

### Product grid
2 columns.

### Editorial insert
After first 2–4 products, insert one full-width editorial card:
- scent/gift mood image
- short category story

This keeps the page from feeling like a generic shop grid.

### Related category links
Small chips/cards to other categories.

## 6. Product Detail — Mobile
### Section 1: Image gallery
- primary image 4:5 or near-square depending concept visual
- swipe gallery dots
- 3–5 image slots supported in component

Current stage: concept imagery.

### Section 2: Product summary
Order:
1. category label
2. product name
3. price
4. short emotional description
5. optional small concept annotation in Figma notes only

### Section 3: Primary CTA
Large button:
`WhatsApp 咨询这款`

Secondary text:
`告诉 May 你想送给谁，也可以一起想礼物。`

No Add to Cart / Buy Now.

### Section 4: Product details
Accordion groups:
- 香气 / 风格
- 尺寸 / 内容物
- 制作与包装
- 送礼建议

Until real products exist, values are placeholders.

### Section 5: Trust tags
Small 2-column chips or stacked rows.
Only use verified-neutral temporary labels.

### Section 6: Gifting story
Editorial panel:
- occasion suggestions
- short warm copy

### Section 7: Related products
Horizontal carousel with 2.2 cards visible or 2-column grid.

### Section 8: Contact CTA + Footer

## 7. About MAYBE LOVI — Mobile
### Hero
- H1: `关于 MAYBE LOVI`
- short line: care / gifting / handmade
- visual placeholder

### Name meaning
Break into four concise cards/lines:
- May
- M / Mom
- be / Baby Girl
- Lovi / love

Keep it elegant, not overly literal or cartoonish.

### Brand belief
2–3 short text blocks with generous spacing.

### Origin story
Use condensed public-facing story only.
Do not expose sensitive personal history.

### Gift philosophy
Full-width image + short statement.

### CTA
- `看看作品`
- optional link to `Meet May`

## 8. Meet May / Studio — Mobile
### Hero image
Founder portrait or workspace placeholder.

### Intro
- `Meet May`
- concise founder description
- 2–3 short paragraphs maximum

### Making process
3 stacked process cards:
1. idea / scent direction
2. hand-making
3. wrapping / gifting

Current stage: visual placeholders.

### Studio gallery
2-column masonry-like simple collage, 4–6 image slots.
Do not over-design until real studio images exist.

### Brand quote
One calm pull quote.

### CTA
`回到作品` / `WhatsApp 联系 May`

## 9. Contact — Mobile
### Intro
- H1: `联系 MAYBE LOVI`
- short warm copy

### Main CTA
Large WhatsApp card with icon and button.

### Social/contact list
Stacked rows:
- WhatsApp
- Instagram
- Facebook
- 小红书
- 电话
- 地点

All actual handles/details are pending client supply.

### Location
Map/image placeholder only.
Do not invent exact address.

### Footer

## 10. Mobile Menu State
Full-screen or 92% height drawer.

Order:
- close button
- logo
- 首页
- 全部作品
- 香薰蜡烛
- 香氛
- 礼盒
- 关于 MAYBE LOVI
- Meet May / Studio
- 联系我们
- divider
- language selector
- social links
- WhatsApp CTA

No cart/account entries.

## 11. Language Switch State
Recommended behavior:
- bottom sheet or compact dropdown from header
- options: `中文`, `EN`, `BM`
- active language checkmark

Figma requirement:
- create closed + open states
- only Chinese full-page screens are required in round one

## 12. Admin Login — Mobile
If client may use admin on phone, create a simple responsive version.

Layout:
- centered logo
- title `后台登录`
- username/email field
- password field
- primary sign-in button

No social sign-in or registration.

## 13. Product Management — Mobile
Recommended layout: cards instead of dense table.

Top:
- `产品管理`
- add button
- search field
- category/status filter

Product management card:
- thumbnail
- name
- category
- price
- status
- Edit
- More menu → Delete

## 14. Add / Edit Product — Mobile
Single column form.

Field order:
1. product images
2. product name
3. category
4. price
5. short description
6. detailed description
7. scent/type/details
8. status
9. save/publish

Sticky bottom save bar may be used.

No inventory/order fields.

## 15. Delete Management State
Use modal / bottom sheet:
- title: `删除这个产品？`
- explanatory line
- destructive action: `确认删除`
- secondary: `取消`

## 16. Mobile content-length rules
- H1: ideally 8–18 Chinese characters
- section heading: 6–14 characters
- support paragraph: 40–90 Chinese characters
- product descriptor: 12–24 characters
- button label: 4–10 characters
- founder homepage intro: max 110 Chinese characters

## 17. Figma annotations required
Mark the following directly in Figma notes:
- `CONCEPT` on temporary product imagery
- `PENDING CLIENT` for contacts, studio/founder assets, real product data
- `VERIFY` for Korea / IFRA claims
- `NO ECOMMERCE` on product-detail action design to prevent later accidental cart UI

## 18. Mobile acceptance checklist
Before moving to desktop, confirm:
- Home first screen explains brand + product direction
- Featured products appear early
- 2-column product cards remain readable at 390px
- CTA hierarchy is clear
- menu can reach every public page
- language state is designed
- product detail has enquiry, not checkout
- founder content does not dominate
- all temporary content is annotated
- no unsupported trust claim is visually presented as certification.