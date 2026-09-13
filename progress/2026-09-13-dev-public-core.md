# Progress — 2026-09-13 — Public core build

### 19:00 — Public storefront implementation
- Status: In progress
- Changed: added a React/Vite storefront under `web/` on branch `agent/dev-public-core-20260913`.
- Implemented: shared header, footer and hamburger drawer; Home, Shop, Product Detail, About, Studio, Contact and Cart routes; scent + quantity bottom sheet; local cart persistence; subtotal; WhatsApp order-summary handoff; responsive mobile-first styling with desktop breakpoints.
- Decision: `design/stitch-final/` remains the design authority; prototype product data/images are placeholders until the real five products arrive.

### 19:23 — Build and interaction QA
- Status: Core build passes.
- Added: GitHub Actions build check for the `web/` app and explicit Vite React configuration.
- Verified: `npm install` succeeds and `vite build` succeeds on Node 22.
- Fixed: unsupported lucide brand icon imports were replaced with local Instagram / WhatsApp / Facebook SVG components.
- Fixed: Product Detail scent sheet now uses a draft quantity so closing without confirmation does not mutate the confirmed selection.
- Fixed: desktop Product Gallery now keeps the main image and thumbnail rail in separate grid columns.
- Fixed: route changes scroll to the top and unknown routes fall back safely to Home.
- Preview note: a temporary Vercel preview deployment was submitted, but the Vercel connector could not subsequently resolve the returned deployment URL/project. Do not treat that URL as verified yet.
- Next: visual QA at 360/375/390/430 against the selected Stitch screens, then desktop polish; after public UI is stable, decide production admin persistence/auth/storage before wiring the product-management backend.
