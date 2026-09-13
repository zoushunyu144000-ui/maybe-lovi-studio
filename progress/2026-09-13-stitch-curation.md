# Progress — 2026-09-13 Stitch Curation

### 18:50 — ChatGPT / curate Stitch design handoff
- Status: Done
- Changed: Added `design/stitch-final/` with the locked design system, final page-selection manifest, implementation guardrails, build sequence, and exact source checksums.
- Decision: The selected mobile pages are the authoritative Stitch visual references for implementation. Older Stitch variants are explicitly excluded. Desktop frames are retained only as layout references and must inherit the final mobile visual system.
- Decision: Shared Header, Footer, Menu Drawer, Product Card, Product Gallery, scent/quantity selector, bottom sheet, and primary CTA should be implemented once and reused rather than recreated per page.
- Note: The full cleaned Stitch export has also been prepared as a separate handoff archive for implementation/reference.
- Next: Assemble the production site from the curated handoff, starting with shared components, Home, Shop, Product Detail, cart behavior, and the external order handoff flow. Then add About, Studio, Contact, desktop adaptation, and the minimum useful admin flow.
