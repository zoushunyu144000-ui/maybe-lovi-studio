# Project Progress

Last updated: 2026-09-11

## Current phase
**Figma Foundations Built / Component Construction Pending**

## Overall status
- Client discovery: Core direction captured; a few factual items still pending
- Brand story: Initial public-safe narrative captured
- Visual direction: Candle Club structure + Notebook Therapy / Neko Cafe warmth translated into MAYBE LOVI-specific direction
- Product content: Real products do not exist yet; 5 concept visuals may be used in Figma
- Trust / origin messaging: Korea and IFRA display positions planned; exact public wording still requires verification
- Website structure: Full-site Figma scope locked
- Mobile UI: Detailed 390px mobile-first wireframe specification completed; actual screen construction not yet started
- Desktop UI: Detailed 1440px responsive wireframe specification completed; actual screen construction not yet started
- Design system docs: First-round color, typography, spacing, grid, components and responsive rules completed
- Live Figma file: created and populated with foundations
- Chinese copy: Homepage + page-level Chinese Figma copy completed as working drafts
- Admin UI: Login, product list, add/edit and delete-management states specified
- Multilingual strategy: Chinese master UI + visible Chinese/English/Malay switch control
- Development: Not started; begins after design approval and agreed payment
- SEO / GEO: Scope captured; implementation not started
- QA / launch: Not started

## Live Figma execution
Figma file:
`https://www.figma.com/design/4x37I8BY60z6kfPNDFijwA`

Completed in Figma:
- 3 local variable collections
- 38 design variables with explicit scopes and Web code syntax
- 11 local text styles
- 2 local effect/shadow styles
- brand palette covering ivory, cream, blush, caramel, cocoa, sage, ink, taupe and subtle border colors
- typography based on Noto Serif SC + Noto Sans SC for Chinese-first UI
- cover board
- foundations board with color, typography, spacing and radius examples
- top-level project sections for Cover / Foundations / Components / Mobile / Desktop / Admin / Prototype

Figma environment limitation discovered:
- current authenticated plan reports Starter tier / View seat
- `createPage()` is rejected in this MCP environment
- true Component Set creation also currently fails atomically
- normal canvas nodes, variables, text/effect styles and Sections remain writable
- temporary file-organization workaround: use top-level Sections instead of separate Figma pages

## Confirmed design workflow
- First Figma round covers the full agreed website, not only sample pages.
- Both mobile and desktop versions are required.
- Mobile is the primary design priority.
- Homepage balance: roughly 60% product / 40% brand and founder story.
- Temporary concept product visuals are acceptable until real products exist.
- Initial concept categories: 香薰蜡烛 / 香氛 / 礼盒 (Candles / Aroma / Gift Sets).
- Admin screens are included in Figma: login, product management, add/edit product, delete-management state.
- Figma is designed fully in Chinese first; language switch remains visible for Chinese / English / Malay.
- Client reviews the full Figma design first; formal website build starts after approval and agreed first-stage/partial payment.
- Cart, checkout, online payment, member accounts and inventory/order systems remain outside current scope.

## Completed documentation
- Private GitHub repository created
- Multi-agent collaboration rules established
- Initial client requirements captured
- Brand story and current product situation documented
- Reference direction captured: Candle Club structure + Notebook Therapy / Neko Cafe atmosphere
- Korea / IFRA trust-message requirement recorded with verification caution
- Full responsive Figma scope decision recorded
- Final public page inventory and admin-page inventory locked in `design/page-structure.md`
- Full Figma execution blueprint created in `design/figma-execution-plan.md`
- Mobile-first page wireframes created in `design/mobile-wireframe-spec.md`
- Desktop page wireframes created in `design/desktop-wireframe-spec.md`
- Design system expanded in `design/design-system.md`
- Homepage Chinese working copy created in `content/homepage-copy.md`
- Full Chinese page/admin working copy created in `content/page-copy-cn.md`

## Figma-ready documentation package
### Execution
- `design/figma-execution-plan.md`

### Wireframes
- `design/mobile-wireframe-spec.md`
- `design/desktop-wireframe-spec.md`

### Visual system
- `design/design-system.md`

### Content
- `content/homepage-copy.md`
- `content/page-copy-cn.md`

### Existing source-of-truth files still apply
- `docs/client-requirements.md`
- `docs/decisions.md`
- `docs/design-direction.md`
- `design/page-structure.md`
- `docs/pending-questions.md`

## Design-stage annotation rules
Use these labels in Figma notes:
- `CONCEPT` — temporary product / visual asset
- `PENDING CLIENT` — material or data still needed
- `VERIFY` — factual claim must be confirmed before launch
- `APPROVED STRUCTURE` — layout / hierarchy approved internally

## Waiting on client / project owner
These are not blockers for visual layout work:
- Clarification of exact Korea-origin claim
- IFRA document / proof and exact applicable wording
- Additional reference websites if the client sends more
- Studio / workspace photos after setup
- Optional founder portrait
- Final contact/social details
- Real product details when products are actually defined
- Final translation approval workflow

## Next actions
1. Resolve or work around current Figma Component Set limitation.
2. Build reusable visual components in the Components section.
3. Draw complete 390px mobile public screens first.
4. Draw mobile menu and language-switch states.
5. Expand approved mobile hierarchy into 1440px desktop screens.
6. Draw simple admin screens.
7. Connect prototype flows for client review.
8. Run a design QA pass against the acceptance checklists in the wireframe docs.
9. Present full Figma to client for confirmation.
10. After design approval/payment, begin website implementation.

## Blockers
### Figma tooling blocker
- Page creation and true Component Set creation are currently blocked by the connected Figma environment / seat capability.
- Foundations work is not blocked.
- Full page layouts may still be drawn as ordinary frames inside Sections if needed.

### Launch blockers / factual dependencies
- exact Korea-origin wording
- exact IFRA wording/evidence
- real product data/assets
- final contact details

## Handoff
Any agent continuing this project should first read `AGENTS.md`, `docs/client-requirements.md`, `docs/decisions.md`, `docs/pending-questions.md`, then use the six Figma-ready execution documents listed above.

The active Figma file is `4x37I8BY60z6kfPNDFijwA`.

Do not start formal website implementation before client Figma approval and agreed first-stage/partial payment.