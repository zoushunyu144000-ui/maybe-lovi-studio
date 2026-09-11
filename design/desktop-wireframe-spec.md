# MAYBE LOVI — Desktop Wireframe Specification

Status: Figma-ready
Master frame: 1440px width
Content max width: approximately 1200px
Priority: Secondary to mobile, but fully designed
Language: Chinese master UI

## 1. Desktop principles
Desktop should feel more editorial and spacious than mobile, not like a stretched mobile layout.

Rules:
- preserve the same information hierarchy as mobile
- use whitespace to create calm, premium pacing
- allow asymmetry in editorial sections
- product areas can use 3–4 columns
- brand/founder sections can use image-text split layouts
- maintain consistent component tokens with mobile
- do not add desktop-only functions outside scope

Recommended outer content width: 1180–1240px
Recommended page gutter at 1440px: 80–120px
Recommended vertical section spacing: 96–144px

## 2. Shared desktop shell
### Announcement / trust strip
Height: 32–36px
Centered short line.
Current stage wording remains neutral and verifiable.

### Header
Height: 80–92px
Suggested layout:
- left: logo
- center: navigation
- right: language switch + WhatsApp / contact CTA

Navigation:
- 首页
- 全部作品
- 香薰蜡烛
- 香氛
- 礼盒
- 关于我们
- Studio
- 联系

Do not include cart or account icons.

### Footer
4-column structure:
1. brand statement
2. navigation
3. categories
4. social/contact + language

## 3. Home — Desktop
### Section 1: Hero
Preferred composition: 5/7 or 6/6 split.

Left:
- eyebrow
- H1
- support copy
- primary CTA
- secondary CTA

Right:
- large concept lifestyle/product image
- optional one restrained hand-drawn motif

Alternative: editorial full-bleed image with floating copy card, only if readability remains strong.

### Section 2: Featured Products
Header:
- section title
- short supportive line
- `查看全部`

Grid:
- 4 columns for first 4 items
- fifth item can be featured as a wider editorial card below or incorporated into a 5-card asymmetric grid

Goal: avoid awkward empty fifth-card space.

### Section 3: Category Entry
Three large category cards in one row:
- 香薰蜡烛
- 香氛
- 礼盒

Each card:
- image-led
- title overlay or below image
- one-line descriptor
- subtle arrow/link

### Section 4: Gift Occasions
Editorial strip or 4-card row:
- 生日
- 圣诞
- 谢谢你
- 日常小心意

Can use illustrated labels or cropped lifestyle imagery.

### Section 5: Brand Story
2-column 55/45 layout.

One side:
- image / package / object styling

Other side:
- short heading
- 2 short paragraphs
- CTA to About

Do not turn into a full biography.

### Section 6: Meet May
Reverse split from previous section to create rhythm.

Content:
- portrait/workspace image
- concise introduction
- one short quote or belief
- CTA to Studio

Visual weight should remain smaller than combined product sections.

### Section 7: Studio / Making Preview
Use an image collage or 3-image horizontal row with concise copy.
Current stage: placeholder images.

### Section 8: Trust / Quality
3-item row or 2-item + one brand-care item.

Use soft iconography and warm neutral cards.
No fake seals.

### Section 9: Contact CTA
Wide warm panel.
Left: heading + text.
Right: WhatsApp button + social icons.

### Section 10: Footer

## 4. Product Listing / Shop — Desktop
### Intro
Centered or left-aligned editorial intro.

### Filter bar
Horizontal:
- category chips
- optional sort only if useful for prototype

Do not add complex e-commerce filter panels.

### Product grid
Preferred: 4 columns.
At 1200px content width, card width approximately 270–285px.

Card contains:
- 4:5 image
- category
- name
- short descriptor
- price

No add-to-cart.

### Enquiry CTA
Wide bottom banner after grid.

## 5. Collection / Category — Desktop
### Hero
Split layout:
- category story 35–40%
- large image 60–65%

### Product grid
3–4 columns.

### Editorial insert
A wide image/story block can interrupt the grid after first row.

### Related categories
3 compact cards.

## 6. Product Detail — Desktop
### Above the fold
Use 60/40 or 55/45 split.

Left:
- gallery with one large image + thumbnails

Right:
- category
- product name
- price
- short description
- WhatsApp enquiry CTA
- concise trust notes

No cart quantity or checkout UI.

### Details section
Two-column content or accordion:
- scent/style
- size/content
- making/packaging
- gifting suggestions

### Gifting editorial panel
Full-width image + copy split.

### Related products
4-column cards.

## 7. About MAYBE LOVI — Desktop
### Hero
Large editorial visual with concise intro.

### Name meaning
Use a refined 4-cell layout rather than playful bubble UI.

### Brand belief
Large serif statement with short supporting copy.

### Origin story
2-column layout with image / text.
Public-safe condensed copy only.

### Gift philosophy
Wide visual section.

### Cross-links
- Meet May / Studio
- Products

## 8. Meet May / Studio — Desktop
### Hero
Asymmetric split:
- founder/workspace image approximately 55–60%
- intro 40–45%

### Making process
3 horizontal steps or cards.

### Studio gallery
Editorial 12-column collage:
- 1 large landscape
- 2–4 supporting crops

Avoid overly decorative scrapbook style.

### Quote / belief
Large calm text section.

### CTA
Products + Contact.

## 9. Contact — Desktop
### Intro block
Centered or left-aligned.

### Contact grid
Left 5 columns:
- WhatsApp primary card
- social links
- phone

Right 7 columns:
- map/location placeholder

All concrete contact data remains `PENDING CLIENT` until supplied.

## 10. Language Switch — Desktop
Recommended interaction:
- compact dropdown from header control
- `中文 / EN / BM`
- active state indicator

Design states:
- closed
- hover/focus
- open
- selected

Do not create three complete desktop site copies in first Figma round.

## 11. Desktop navigation behavior
Header can be:
- normal static at top, or
- sticky after scroll

If sticky:
- reduce height slightly after scroll
- preserve logo readability
- keep WhatsApp CTA unobtrusive

Prototype only one approach; do not spend time on complex mega-menu interactions.

## 12. Admin Login — Desktop
Centered panel width approximately 420–480px.

Contents:
- logo
- `后台登录`
- email/username
- password
- sign in

No registration.

## 13. Product List / Management — Desktop
Functional admin shell.

Header:
- MAYBE LOVI Admin
- `产品管理`
- Add Product button

Utility bar:
- search
- category filter
- status filter if needed

Table columns:
- thumbnail
- product name
- category
- price
- status
- updated date optional
- actions

Actions:
- Edit
- Delete

No inventory quantity unless later added to scope.

## 14. Add / Edit Product — Desktop
Form max width: 900–1000px.

Recommended 2-column structure:
Left 65%:
- product name
- category
- price
- short description
- detailed description
- scent/type/details

Right 35%:
- image uploader
- status
- save / publish controls

Keep labels in Chinese for first round.

## 15. Delete / Management State — Desktop
Centered modal:
- `删除这个产品？`
- short warning
- `取消`
- `确认删除`

No bulk-delete flow unless later requested.

## 16. Desktop grid guidance
Recommended Figma layout grid:
- 12 columns
- content width: 1200px
- gutter: 24px
- centered

Common spans:
- text blocks: 4–5 columns
- editorial images: 6–8 columns
- standard cards: 3 columns each in 4-up row
- major hero image: 6–7 columns

## 17. Responsive translation from mobile
Do not simply increase dimensions.

Transform rules:
- stacked story → split story
- horizontal-scroll cards → 3–4 column row
- mobile accordions may remain accordion or become structured two-column details
- sticky mobile WhatsApp may become header CTA / inline CTA
- mobile menu disappears into desktop nav
- product grids become 4 columns

## 18. Asset handling
Use the same annotation system as mobile:
- `CONCEPT`: temporary product/lifestyle visual
- `PENDING CLIENT`: founder, studio, contact, real product data
- `VERIFY`: Korea / IFRA wording

## 19. Desktop acceptance checklist
Before client review, confirm:
- desktop feels intentionally composed
- hero is not empty or oversized
- product section remains visually dominant
- founder story does not become the main homepage story
- 4-column product cards remain elegant and readable
- product detail CTA is enquiry only
- no unsupported certification badge exists
- language control is visible
- contact and social areas are clear
- admin remains simple and functional.