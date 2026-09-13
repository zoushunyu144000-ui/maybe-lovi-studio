# Final Page Selection

## Public mobile — use for implementation
- `01-home` ← selected from `01_home_mobile_4`
- `02-shop` ← selected from `02_shop_mobile_1`
- `03-product-detail-default` ← selected from `03_product_detail_mobile_default_1`
- `03a-scent-quantity-sheet` ← selected from `03a_bottom_sheet_open_2`
- `03b-product-detail-selected` ← selected from `03b_selected_state_5`
- `04-menu-drawer` ← selected from `04_mobile_menu_drawer`
- `05-about` ← selected from `05_about_maybe_lovi_fixed`
- `06-studio` ← selected from `06_studio_fixed`
- `07-contact` ← selected from `07_contact_fixed`
- `08-cart` ← selected from `08_cart_fixed`
- `09-empty-cart` ← selected from `09_empty_cart_fixed`
- `10-whatsapp-order-summary` ← selected from `10_order_summary_fixed`

## Public desktop — reference only
- Home, Shop, Product Detail, About desktop frames are retained as composition references in the original Stitch export.
- They predate some mobile refinements. Do not let their older navigation, content, product taxonomy, or copy override the final mobile system.
- Missing desktop pages should be derived responsively from final mobile components rather than invented as a separate visual system.

## Admin mobile — selected final UI references
- Login ← `m01_admin_login_final`
- Dashboard ← `m02_dashboard_final`
- Products ← `m03_products_final`
- Add/Edit Product ← `m04_add_edit_product_final`
- Settings ← `m05_settings_final`

## Explicitly excluded from implementation
The following Stitch families are superseded, inconsistent, or outside the current structure:
- older `01_home_mobile_1/2/3` and `01_home_mobile_curated_entry`
- older `02_shop_mobile_2/3/4`
- older product-detail collapsed/default variants not listed above
- older bottom-sheet and selected-state variants not listed above
- `11_product_detail`
- `12_gift_guide*`
- `13_faq`
- `14_mobile_menu_open_state`
- old root `design.md`, `maybe_lovi/DESIGN.md`, `maybe_lovi_studio_2/DESIGN.md`, `warm_atelier_minimal/DESIGN.md`
- intermediate admin variants where a `*_final` version exists

## Why these selections
The chosen public-mobile set best matches the approved Warm Atelier visual system, the accepted compact Home structure, the accepted hamburger drawer, the consistent Contact/Footer treatment, and the product-detail model where scent/quantity selection is a state of the same product page rather than a separate route.