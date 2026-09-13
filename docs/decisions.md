# Decisions

This file contains confirmed project decisions. Do not place guesses here.

## 2026-09-11

### Repository and workflow
- Project repository: `zoushunyu144000-ui/maybe-lovi-studio`
- Visibility: Private
- Repository is the shared source of truth for multiple agents.
- Progress must be tracked in `PROGRESS.md` and dated files under `progress/`.

### Brand
- Existing MAYBE LOVI logo will be used; no logo redesign is currently requested.
- The brand should feel warm, caring, sincere, thoughtful, and handmade.
- Founder story can influence the brand narrative, but sensitive personal details should not be published directly without explicit approval.

### Products
- Real products do not exist yet.
- Current product images are references for future product direction.
- Website structure and brand design can be built first.
- Real product images will replace temporary concept/reference-direction imagery later.
- Figma can use 5 concept product visuals for presentation, clearly treated as temporary/concept assets.
- Initial concept categories for design: `Candles / Aroma / Gift Sets` (Chinese UI can present these as 香薰蜡烛 / 香氛 / 礼盒).

### Founder presence
- May is open to appearing on the site.
- Current direction is a concise founder section rather than making the entire site a personal-brand homepage.
- Homepage balance should prioritize products over founder story, approximately 60% product / 40% brand story.

### Design
- Current base direction: macaron/pastel, simple Instagram-inspired, warm and refined.
- Reference mix: clear structure inspired by Candle Club + warm/cozy illustrated commerce atmosphere inspired by Notebook Therapy / Neko Cafe.
- First design round will cover the full agreed website, not only a few sample screens.
- Figma must include both mobile and desktop versions.
- Mobile is the primary priority; desktop should remain fully designed and consistent.

### Figma scope
- Front-end screens should be fully designed in the first Figma round.
- Admin/backend screens are also included in the Figma round at a simple functional level.
- Primary Figma content language: Chinese.
- Keep a visible language switch control for Chinese / English / Malay, but do not duplicate every screen in all three languages during Figma design.
- Public-site Figma should include all key states needed for client approval before development.

### Figma / approval workflow
- First complete the full UI design in Figma.
- Show the client the design for confirmation before formal website generation/development.
- Formal build starts after client confirms the design and pays the agreed first-stage/partial payment.

## 2026-09-13

### Product model
- First launch uses 5 exterior-style products.
- Product exterior is the product identity.
- All 5 products share the same fixed 5-scent set.
- Scent is a required product option, not an independent product.
- Different exterior products may have different prices.
- Within one exterior product, every scent choice uses the same price.
- The 5 scents are Morning Light Muguet / 晨露铃兰, Jasmine Oolong Tea / 茉莉乌龙茶, La Tulipe (B Type) / 郁金香花园, Peony (L Type) / 粉色牡丹, and Do Son Tuberose (D Type) / 晚香玉.
- The scent reference graphic was supplied by the client.

### Cart and WhatsApp ordering
- A lightweight cart is now confirmed in scope.
- Flow: choose product exterior -> choose scent -> choose quantity -> add to cart -> review cart -> send order through WhatsApp.
- Same product + same scent may merge quantity; same product + different scent stays as separate cart lines.
- Cart shows line items, quantities, line totals and subtotal.
- Shipping, availability and final transaction details are confirmed in WhatsApp.
- The order action opens the merchant WhatsApp with a dynamically generated cart summary; the customer presses Send.
- No integrated online checkout is included at this stage.

### Contact and social
- WhatsApp: `+60 16-523 3840` / config value `60165233840`.
- Instagram: `https://www.instagram.com/maybe_lovi_scent?stkn=dHptNHR2YjhlMDcz`.
- Facebook and Xiaohongshu official accounts are not registered yet; reserve their slots without publishing fake links.

### Trust messaging
- Client wants these messages to be visible: `SDCA 韩国认证香薰蜡烛` and `香水拥有 IFRA 国际标准认证`.
- These are client-supplied claims. Verify supporting documents and final public wording before launch.

### Product imagery follow-up
- The first complete build may use temporary/test product imagery while real products are unavailable.
- After the real products arrive, one follow-up update for the agreed 5 products is included to replace/upload formal product content and the 5 product visuals.