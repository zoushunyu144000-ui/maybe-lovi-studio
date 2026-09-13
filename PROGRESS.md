# Project Progress

Last updated: 2026-09-13

## Current phase
**Web App Build / Responsive Product + Cart Integration**

## Overall status
- Client discovery: Core direction captured; remaining questions are mostly final content verification.
- Brand story: Initial version captured.
- Visual direction: Reference mix established and already used in the preview direction.
- Product content: First launch structure confirmed as 5 exterior products sharing the same 5 scents.
- Product imagery: Real products still do not exist; temporary/test imagery is acceptable for the first complete build.
- Trust messaging: Client explicitly wants SDCA Korea certification wording and IFRA international-standard wording visible; evidence/final wording still needs verification before public launch.
- Website structure: Full-site responsive scope locked.
- Mobile UI: Priority platform, 390px master frame.
- Desktop UI: Required, 1440px master frame.
- Cart: Confirmed lightweight cart with scent/quantity selection, subtotal and WhatsApp order handoff.
- Social/contact: WhatsApp and Instagram confirmed; Facebook and Xiaohongshu pending official account creation.
- Multilingual strategy: Chinese master UI + visible Chinese/English/Malay switch control.
- Development: Google AI Studio Web App build has started.
- SEO / GEO: Scope captured; implementation not finalized.
- QA / launch: Not started.

## Confirmed product model
- First launch: 5 different exterior products.
- Exterior = Product.
- Scent = required option/variant.
- All products share the same 5 scents:
  1. Morning Light Muguet / 晨露铃兰
  2. Jasmine Oolong Tea / 茉莉乌龙茶
  3. La Tulipe (B Type) / 郁金香花园
  4. Peony (L Type) / 粉色牡丹
  5. Do Son Tuberose (D Type) / 晚香玉
- Different exterior products may have different prices.
- Within the same exterior product, every scent uses the same price.
- The scent reference graphic was supplied by the client.

## Confirmed ordering flow
- Browse exterior products.
- Open product detail.
- Choose scent.
- Choose quantity.
- Add to cart.
- Review/edit cart.
- Cart displays subtotal.
- Click `Order via WhatsApp` / `Send Order via WhatsApp`.
- Website generates a readable order summary from the live cart and opens the merchant WhatsApp chat with that text prefilled.
- Customer manually presses Send.
- Shipping and availability are confirmed manually in WhatsApp.
- No integrated online checkout in the current build.

## Confirmed contact / social
- WhatsApp: `+60 16-523 3840`
- WhatsApp config/link number: `60165233840`
- Instagram: `https://www.instagram.com/maybe_lovi_scent?stkn=dHptNHR2YjhlMDcz`
- Facebook: official account not registered yet; reserve slot only.
- Xiaohongshu: official account not registered yet; reserve slot only.

## Confirmed trust content
The client wants these two messages visibly presented:
- `SDCA 韩国认证香薰蜡烛`
- `香水拥有 IFRA 国际标准认证`

Before final launch, supporting documents and exact public wording still need to be checked.

## Completed
- Private GitHub repository created.
- Multi-agent collaboration rules established.
- Initial client requirements captured.
- Brand story and product situation documented.
- Reference direction captured: Candle Club structure + Notebook Therapy / Neko Cafe atmosphere.
- Full responsive design scope documented.
- Product/cart interaction model confirmed.
- Fixed 5-scent system documented.
- WhatsApp and Instagram details recorded.
- Facebook/Xiaohongshu pending-account state recorded.
- Client-required SDCA/IFRA visibility requirement recorded.
- Public page structure updated for Scent Guide, Cart and WhatsApp ordering.

## In progress
- Google AI Studio Web App construction.
- Integrating the 5-product system into the existing MAYBE LOVI visual design.
- Building product detail, scent selection, cart and WhatsApp-order states.
- Checking that the new commerce interactions do not make the site look like a generic e-commerce template.

## Waiting on client / project owner
- SDCA supporting document / exact applicable wording.
- IFRA supporting document / exact applicable wording.
- Studio / workspace photos after setup.
- Final 5 real product names, prices, descriptions and images when products are ready.
- Facebook official account URL after registration.
- Xiaohongshu official account URL after registration.
- Location / map link.

## Next actions
1. Finish the Google AI Studio Web App build.
2. Review desktop and mobile previews against the existing MAYBE LOVI visual direction.
3. Test all 5 product -> scent -> quantity -> cart flows.
4. Test cart merge/separate rules and subtotal calculations.
5. Test WhatsApp order-message generation using `60165233840`.
6. Confirm Instagram direct link works.
7. Keep Facebook and Xiaohongshu inactive/placeholder until real official URLs exist.
8. After real products arrive, replace temporary imagery/content with the agreed 5 formal product sets.
9. Verify SDCA and IFRA evidence before final public launch wording is locked.

## Blockers
No blocker for continuing the Web App build. Certification wording can remain client-supplied/placeholder content until evidence is checked.

## Handoff
Any agent continuing this project should first read `AGENTS.md`, `docs/client-requirements.md`, `docs/decisions.md`, `design/page-structure.md`, `docs/pending-questions.md`, and the latest dated file under `progress/`.