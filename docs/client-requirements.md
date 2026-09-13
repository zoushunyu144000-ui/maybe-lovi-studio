# Client Requirements

Status: Working source of truth for confirmed client facts.

## Commercial context
- Current expected website package value: RM899.
- The website is a custom brand/product showcase for MAYBE LOVI.
- The client has already provided a logo image to be used in the website.

## Confirmed website functions
1. Product showcase
   - First launch uses 5 products / 5 exterior styles.
   - Each exterior style is one Product.
   - Different exterior products may have different prices.
   - All products share the same fixed set of 5 scent options.
   - Within the same exterior product, all 5 scent options use the same product price.
   - Product image, price, detailed information and featured product presentation are required.
   - Product detail must allow scent selection and quantity selection.
2. Lightweight cart + WhatsApp ordering
   - Cart is confirmed as part of the current scope.
   - This is not a payment checkout system.
   - Users select product exterior -> scent -> quantity -> Add to Cart.
   - Same product + same scent can merge quantities.
   - Same product + different scent must remain separate cart lines.
   - Cart shows item details, quantity controls, line totals and Subtotal.
   - Shipping fee, stock availability and payment method are confirmed manually in WhatsApp.
   - Final CTA should be `Order via WhatsApp` / `Send Order via WhatsApp`, not `Checkout` or `Pay Now`.
   - Clicking the WhatsApp order CTA must open the merchant's WhatsApp and prefill a readable order summary generated from the live cart.
   - The customer still manually presses Send in WhatsApp.
   - Cart should persist locally where practical (for example localStorage).
3. Contact and social links
   - WhatsApp: `+60 16-523 3840`
   - WhatsApp raw number for links/config: `60165233840`
   - Instagram: `https://www.instagram.com/maybe_lovi_scent?stkn=dHptNHR2YjhlMDcz`
   - Instagram must be a real clickable/tappable direct link.
   - Facebook official account: not registered yet; reserve the UI/config slot but do not publish a fake link.
   - Xiaohongshu official account: not registered yet; reserve the UI/config slot but do not publish a fake link.
   - Location / map link remains pending.
4. SEO / GEO foundation
   - Intended discovery around queries such as aroma, gifts, Christmas gifts, birthday gifts, etc.
   - No ranking guarantee has been promised.
5. Admin / backend
   - Client wants to be able to upload or update product images, prices, and descriptions.
6. Multilingual support
   - Chinese
   - English
   - Malay
7. Product image service
   - Initial agreement includes 5 aroma/candle product visuals.
   - Real products are not yet available, so temporary/test imagery may be used for the first complete website build.
   - After the client's real products arrive, one follow-up product-content update is included: replace/upload the formal product information and the agreed 5 product visuals.

## Responsive / device priority
- The public website must have a complete desktop layout as well as a complete mobile layout.
- Mobile is the primary platform and must receive the highest level of polish.
- Mobile behavior should not be treated as a simple scaled-down desktop page; layout, navigation, product cards, scent selection, cart, typography and spacing must be intentionally optimized for touch and narrow screens.
- Core mobile target widths: 360px, 375px, 390px and 430px.
- Desktop must remain fully usable and visually complete, with 1440px as the main design/build reference and sensible behavior around 1280px and wider screens.
- Functional parity is required across mobile and desktop for product selection, cart, subtotal and WhatsApp order handoff.
- Final QA priority: mobile first, desktop second.

## Fixed scent system
All 5 exterior products use the same scent set. Scent is an option/variant, not an independent product.

1. `Morning Light Muguet` / 晨露铃兰
   - Fresh / Pure / Healing
2. `Jasmine Oolong Tea` / 茉莉乌龙茶
   - Elegant / Calm / Refined
3. `La Tulipe (B Type)` / 郁金香花园
   - Fresh / Elegant / Sophisticated
4. `Peony (L Type)` / 粉色牡丹
   - Romantic / Soft / Feminine
5. `Do Son Tuberose (D Type)` / 晚香玉
   - Intense / Sensual / Luxurious

The client supplied the scent reference graphic herself. Treat it as client-provided source/reference material. The website may derive a simplified `Scent Guide` from it instead of reproducing the entire graphic inside every product detail view.

## Product origin / trust information
The client explicitly wants the following two trust messages to be visible to visitors:
- `SDCA 韩国认证香薰蜡烛`
- `香水拥有 IFRA 国际标准认证`

These are client-supplied claims and are important content requirements. They should be visually noticeable, for example in a trust strip, certification section, product-detail trust tags or a concise quality block.

Before final public launch, retain a verification step for the exact evidence and legally accurate wording. Do not silently broaden the claims beyond the client's documents. In particular, confirm what the SDCA certification applies to and what IFRA document/standard evidence the client holds.

## Brand / visual direction already given
- Soft macaron / pastel color direction
- Simple Instagram-inspired feeling
- Warm, caring, feminine, gift-oriented tone
- Existing logo should be integrated into the website
- Additional visual reference shows a warm illustrated e-commerce style with cream, beige, brown and soft yellow tones, cute hand-drawn details, and coordinated desktop/mobile layouts

## Brand name meaning
`MAYBE LOVI` has personal meaning:
- `May` = the client's name
- `M` also carries a connection to Mom / mother
- `be` connects to her dog, Baby Girl
- `Lovi` represents love

## Desired brand feeling
The client wants people to feel:
- warmth
- love
- care
- sincerity
- thoughtfulness
- that a gift represents the sender's intention and blessing
- that each item is carefully made rather than mass-produced without feeling

## Founder background relevant to the brand
- The client has experienced a difficult personal period and long-term emotional pressure.
- She had to carry significant burdens and rebuild independently.
- She currently runs a meridian / massage studio.
- She discovered aroma/candle-making videos by chance and found the process healing.
- She then enrolled in a course to learn the craft.
- She describes herself as introverted and not very talkative.
- Making products itself feels therapeutic and gives her joy when the finished item appears.

Important: sensitive details should not be published directly on the public website without explicit client approval. The public-facing story should preserve the emotional truth while keeping the tone light, respectful, and brand-appropriate.

## Studio status
- A physical studio exists.
- It is still being arranged and prepared.
- The work table has recently arrived.
- The client plans to take studio photos once the space is ready.

## Founder appearance on website
- The client is open to appearing on the website.
- She asked for advice on how to introduce herself simply.
- Final placement and presentation are not yet confirmed.

## Product status
- The client currently has no finished real products and no original product photography.
- Images already shared are reference/inspiration images showing the elements and product direction she wants to make later.
- The first website version can build the brand, 5-product structure and functional cart using temporary/test imagery.
- Real product images should replace concept imagery once actual products exist.

## References
- Client has already provided one main candle/aroma website reference.
- A visual reference shows the `notebook therapy` / `Neko Cafe collection` style: warm neutral palette, cute illustration, collection-led hero area, product storytelling, and consistent responsive presentation.
- The client-provided scent reference graphic is authoritative for the current 5-scent names and mood descriptions.