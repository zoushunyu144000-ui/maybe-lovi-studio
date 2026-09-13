# Progress — 2026-09-13 — Public core build

### 19:00 — Public storefront implementation
- Status: In progress
- Changed: added a React/Vite storefront under `web/` on branch `agent/dev-public-core-20260913`.
- Implemented: shared header, footer and hamburger drawer; Home, Shop, Product Detail, About, Studio, Contact and Cart routes; scent + quantity bottom sheet; local cart persistence; subtotal; WhatsApp order-summary handoff; responsive mobile-first styling with desktop breakpoints.
- Decision: `design/stitch-final/` remains the design authority; prototype product data/images are placeholders until the real five products arrive.
- Blocker: build/runtime QA has not yet been completed.
- Next: run the build, fix compile/runtime issues, visually compare against FINAL Stitch screens, then add the simple admin product-management UI.
