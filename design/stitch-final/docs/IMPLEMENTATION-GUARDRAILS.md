# Implementation Guardrails

## Build shared components once
Reuse one shared version of Header, announcement strip, mobile menu drawer, footer, social buttons, product card, product gallery, scent/quantity selector, scent/quantity bottom sheet, primary button, and trust lines.

## Website structure
This is a responsive website, not an app. Do not add a fixed bottom tab bar. Mobile navigation uses the hamburger drawer.

Public routes/states: Home, Shop, Product Detail, About, Studio, Contact, Cart, and WhatsApp order handoff. There is no standalone Scent Guide page in the current structure.

## Data authority
Business facts, product rules, scent data, contact details, certification wording, and pending items must come from `docs/client-requirements.md`, `docs/decisions.md`, and `docs/pending-questions.md`.

Do not treat prototype HTML copy as confirmed business data.

## Commerce behavior
There is no online checkout. Flow: product → scent → quantity → cart → WhatsApp order handoff. Same product + same scent may merge quantity; same product + different scent remains separate. Cart shows subtotal. Shipping, availability, and final transaction details are handled after the website order handoff.

## Prototype copy is not business truth
Stitch HTML contains placeholder product names, materials, packaging, studio details, dates, account data, and other sample copy. Repository requirements and decisions always override prototype text.

## Responsive implementation
The mobile frames in this folder are the primary visual source. Desktop must preserve the same component language and functionality while adapting layout for wider screens; do not create a second visual system.