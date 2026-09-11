# MAYBE LOVI — Design System

Status: First Figma round foundation
Applies to: Public website + simplified admin
Primary design target: Mobile 390px
Secondary target: Desktop 1440px

## 1. Design character
MAYBE LOVI should feel like a small thoughtful fragrance/gifting studio, not a generic online marketplace.

Core attributes:
- warm
- soft
- handmade
- caring
- gift-oriented
- feminine but mature
- editorial and refined

Reference interpretation:
- borrow structural clarity from Candle Club
- borrow warmth, illustrated softness and collection storytelling from Notebook Therapy / Neko Cafe
- do not copy layouts, motifs or brand-specific visual language directly

## 2. Color system
The palette should stay warm and low-contrast enough to feel soft, while maintaining readable UI contrast.

### Base colors
- `Ivory 50` — #FBF8F1 — main page background
- `Cream 100` — #F5EEDF — soft panels / alternate sections
- `Milk 0` — #FFFDFC — cards / elevated surfaces

### Brand accents
- `Blush 200` — #EFD7D2 — soft highlight, small cards, tags
- `Rose Dust 300` — #D9B7B2 — secondary accent
- `Caramel 500` — #B88458 — warm CTA / icon / link accent
- `Cocoa 700` — #6B4C3B — headings / strong warm neutral
- `Moss 300` — #A8B09B — low-saturation green accent, used sparingly

### Text colors
- `Ink 900` — #2A2522 — primary text
- `Ink 700` — #554D48 — secondary text
- `Ink 500` — #7A716B — metadata / helper text
- `Line 200` — #DED6CE — borders/dividers

### Functional colors
Admin UI may use restrained functional colors, but avoid making the public site feel like software.
- Success: muted green
- Warning: warm amber
- Error: muted brick red

Exact WCAG contrast should be checked in Figma before implementation.

## 3. Color usage rules
- Default background should be Ivory, not pure white.
- Use blush/pink as an accent, not as the entire interface.
- Caramel should be more common than bright pink for CTAs.
- Moss green should appear only as a balancing accent in small areas.
- Avoid saturated candy pink, neon colors or strong cool blues.
- Trust sections should use neutral warm tones, not badge-like gold.

## 4. Typography
Recommended pairing:
- Display / editorial serif for major headings
- Clean sans-serif for body, navigation, buttons and admin

### Suggested serif options
Choose one available in Figma / web implementation:
- Cormorant Garamond
- DM Serif Display
- Noto Serif SC / Source Han Serif for better Chinese support

For Chinese-first design, prefer a serif solution that renders Chinese naturally. Avoid forcing an English-only display serif on long Chinese headings.

### Suggested sans-serif options
- Inter
- Noto Sans SC
- Source Han Sans

Recommended practical pairing:
- Chinese headings: Noto Serif SC / Source Han Serif
- English accent headings: Cormorant Garamond or DM Serif Display if desired
- UI/body: Noto Sans SC / Inter

## 5. Type scale — Mobile
- Display / Hero: 40–48px / 1.05–1.15 line-height
- H1: 34–40px
- H2: 28–32px
- H3: 22–24px
- Body L: 17–18px / 1.6
- Body: 15–16px / 1.65
- Small: 13–14px
- Caption: 12px
- Button: 15–16px medium

For Chinese headings, prioritize breathing room over extreme size.

## 6. Type scale — Desktop
- Display / Hero: 64–80px
- H1: 52–64px
- H2: 40–48px
- H3: 28–32px
- Body L: 18–20px
- Body: 16px
- Small: 14px
- Caption: 12px

Maximum readable body text width: roughly 620–720px.

## 7. Spacing system
Use an 8px-based system with a few half steps.

Core tokens:
- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48
- 64
- 80
- 96
- 120
- 144

### Mobile section spacing
- compact: 48–56px
- standard: 64–80px
- major editorial break: 88–96px

### Desktop section spacing
- compact: 72–80px
- standard: 96–120px
- major editorial break: 128–144px

## 8. Grid
### Mobile 390px
- outer margin: 20px
- content width: 350px
- default: single column
- product grids: 2 columns
- product card gap: 12–16px

### Desktop 1440px
- centered 1200px content grid
- 12 columns
- 24px gutter
- outer whitespace approximately 120px each side

## 9. Radius
Use rounded shapes, but not overly bubbly.

Tokens:
- XS: 8px
- S: 12px
- M: 16px
- L: 24px
- XL: 32px
- Pill: 999px

Recommended:
- buttons: 999px or 14–18px depending visual direction
- cards: 18–24px
- image frames: 20–28px
- admin inputs: 10–12px

Avoid making every section a floating rounded rectangle.

## 10. Shadows and borders
Public site should rely more on contrast, spacing and tone than heavy shadows.

Use:
- subtle 1px warm gray borders
- very soft elevation only on floating menus/modals
- no hard drop shadows on product cards

Suggested shadow direction:
`0 8 30 rgba(60,45,35,0.08)`

## 11. Buttons
### Primary
Use for:
- browse products
- WhatsApp enquiry
- key contact action

Style:
- warm cocoa/caramel or dark ink fill
- light text
- medium weight
- generous horizontal padding

### Secondary
- transparent / cream surface
- 1px warm border
- dark text

### Text link
- understated underline or arrow
- used for story navigation

States to create:
- default
- hover desktop
- pressed
- focus
- disabled

Do not create purchase-specific button variants like Add to Cart.

## 12. Product cards
Component variants:
- Grid / Mobile
- Grid / Desktop
- Horizontal / Related
- Editorial / Featured

Required slots:
- image
- category
- title
- optional short descriptor
- price
- optional small tag

Do not include:
- rating stars
- discount badge unless real
- cart icon
- quick buy

Image ratio default: 4:5.

## 13. Category cards
Variants:
- image-led full card
- editorial split card

Fields:
- category title
- 1-line descriptor
- image
- small CTA arrow

Default categories:
- 香薰蜡烛
- 香氛
- 礼盒

## 14. Trust cards
Purpose: hold future verified Korea / IFRA information and general craftsmanship signals.

Component:
- simple line icon
- short title
- 1–2 lines body

Current temporary labels must be marked `VERIFY` in Figma notes.

Never visually imitate a certification seal without verified supporting material.

## 15. Editorial story blocks
Use for:
- About
- Meet May
- Studio
- gift occasions

Patterns:
- image left / text right
- text left / image right
- large image + short caption
- pull quote + small motif

Story blocks should never contain walls of text.

## 16. Decorative language
Permitted:
- tiny hand-drawn line motif
- subtle flower / ribbon / scent-wave abstraction
- soft imperfect linework
- minimal paper-like details

Avoid:
- excessive heart icons
- cat/notebook motifs copied from reference
- glitter effects
- scrapbook overload
- kawaii marketplace stickers

Decorative motifs should occupy less than 10–15% of visual attention.

## 17. Imagery direction
Until real products exist, concept assets should look believable but clearly be treated internally as temporary.

Image mood:
- natural warm light
- cream/beige surfaces
- gentle shadows
- small handmade objects
- paper / ribbon / gift packaging
- calm domestic/studio setting

Avoid:
- glossy luxury perfume-ad look
- cold studio white background everywhere
- overly AI-surreal product forms
- fake text printed on concept product labels if it might be mistaken for real packaging

## 18. Image ratios
Recommended reusable crops:
- Product card: 4:5
- Hero mobile: 4:5 / 5:6
- Hero desktop: 4:3 / 5:4
- Story image: 3:4
- Studio landscape: 3:2
- Square detail: 1:1

Create image frame components with these ratios.

## 19. Iconography
Style:
- thin-to-medium line icons
- rounded corners
- simple geometry

Default sizes:
- 16px metadata
- 20px inline UI
- 24px navigation/action
- 28–32px trust cards

Avoid mixing filled emoji-style icons with line icons.

## 20. Navigation components
### Mobile header
- hamburger
- centered logo
- language/contact action

### Desktop header
- logo
- nav links
- language selector
- WhatsApp/contact CTA

### Language selector
Variants:
- closed
- open
- selected

Options:
- 中文
- EN
- BM

## 21. Form fields
Primarily used in admin.

Field anatomy:
- label
- input
- helper text/error

Height target:
- mobile: 48–52px
- desktop: 44–48px

Text areas:
- minimum 120–160px height

Keep public contact primarily through WhatsApp/social, not a complex web form unless later requested.

## 22. Admin visual system
Admin should reuse typography and brand neutrals, but prioritize clarity over brand storytelling.

Admin may use:
- white/cream canvas
- simple cards
- table/list
- restrained primary action

Do not spend visual effort on decorative illustrations in admin.

## 23. Component naming convention
Recommended Figma names:
- `Nav/Header/Mobile`
- `Nav/Header/Desktop`
- `Nav/LanguageSwitch`
- `Button/Primary`
- `Button/Secondary`
- `Card/Product/Grid-Mobile`
- `Card/Product/Grid-Desktop`
- `Card/Category`
- `Card/Trust`
- `Section/Story/Split`
- `Section/ContactCTA`
- `Admin/Input`
- `Admin/ProductRow`
- `Overlay/DeleteConfirm`

Use variants for state rather than duplicating detached components.

## 24. Auto Layout rules
- All cards should use Auto Layout vertically.
- Text containers should hug content where appropriate.
- Buttons should support text expansion for future EN/BM.
- Do not hard-code widths that fail with Malay or English copy.
- Use min/max width logic for desktop sections.

This is important even though the first Figma round only draws Chinese pages.

## 25. Multilingual resilience
Because English/Malay may expand text length:
- buttons should have at least 24px left/right padding
- nav items should not rely on exact fixed width
- chips should hug content
- product titles can wrap to 2 lines
- card heights should tolerate a second line where possible
- avoid Chinese-only decorative vertical text arrangements for key navigation

## 26. Accessibility baseline
Design-stage requirements:
- sufficient text/background contrast
- no body text below 14px mobile
- tap targets around 44px
- visible focus states on desktop components
- avoid conveying trust/status by color alone
- buttons should have text labels where possible

## 27. Content annotation system in Figma
Use a separate annotation layer, not part of final client UI:
- `CONCEPT` — temporary visuals/data
- `PENDING CLIENT` — material still needed
- `VERIFY` — factual statement must be checked
- `APPROVED STRUCTURE` — layout decision ready

Do not use these annotation colors as public-facing brand colors.

## 28. Motion direction
If motion is prototyped, keep it restrained:
- 180–260ms standard UI transitions
- soft fade / slide for menu and language sheet
- gentle image reveal on editorial sections
- no bouncing CTA, glitter, spinning badges or aggressive parallax

Motion is secondary to layout approval in the first Figma round.

## 29. Public UI tone checklist
The design is on-direction if it feels:
- more like a thoughtful independent gift studio than a marketplace
- more like an editorial brand than a template shop
- soft without becoming childish
- personal without becoming a founder diary
- commercial enough that visitors quickly find products and enquiry actions

## 30. Design-system acceptance checklist
Before page production is considered stable:
- color styles created
- text styles created
- effect styles created
- grid styles created
- spacing logic documented
- reusable buttons/cards/navigation built
- mobile/desktop header variants built
- language switch states built
- product card supports long translated text
- admin components separated from public storytelling components
- placeholder annotation system used consistently.