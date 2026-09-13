---
name: MAYBE LOVI STUDIO
colors:
  surface: '#FFFDF9'
  surface-dim: '#EFEAE4'
  surface-bright: '#FFFDF9'
  surface-container-lowest: '#FFFFFF'
  surface-container-low: '#FFFDF9'
  surface-container: '#FFF9F5'
  surface-container-high: '#F8F2EB'
  surface-container-highest: '#EFE7E2'
  on-surface: '#4A3E39'
  on-surface-variant: '#6D5A52'
  inverse-surface: '#2C2320'
  inverse-on-surface: '#FAF7F2'
  outline: '#EFE7E2'
  outline-variant: '#E2D8D0'
  surface-tint: '#EFAEB9'
  primary: '#EFAEB9'
  on-primary: '#4A3E39'
  primary-container: '#FBECEE'
  on-primary-container: '#4A3E39'
  inverse-primary: '#EAA3AF'
  secondary: '#6D5A52'
  on-secondary: '#FFFFFF'
  secondary-container: '#F2E8E2'
  on-secondary-container: '#4A3E39'
  tertiary: '#8F7D76'
  on-tertiary: '#FFFFFF'
  tertiary-container: '#F6EFEB'
  on-tertiary-container: '#4A3E39'
  error: '#BA1A1A'
  on-error: '#FFFFFF'
  error-container: '#FFDAD6'
  on-error-container: '#93000A'
  primary-fixed: '#FBECEE'
  primary-fixed-dim: '#F4CFD5'
  on-primary-fixed: '#36151B'
  on-primary-fixed-variant: '#522830'
  secondary-fixed: '#F2E8E2'
  secondary-fixed-dim: '#DECFC6'
  on-secondary-fixed: '#271E19'
  on-secondary-fixed-variant: '#4E4039'
  tertiary-fixed: '#F6EFEB'
  tertiary-fixed-dim: '#DECFC6'
  on-tertiary-fixed: '#271E19'
  on-tertiary-fixed-variant: '#4E4039'
  background: '#FFFDF9'
  on-background: '#4A3E39'
  surface-variant: '#FFF9F5'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 26px
  title-sm:
    fontFamily: Nunito Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 22px
  body-lg:
    fontFamily: Nunito Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Nunito Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Nunito Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Nunito Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.25rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## MAYBE LOVI STUDIO · Clean Unified Design System

### Visual Core Principles
- **Atmosphere:** Korean warm atelier, quiet editorial minimalism, gentle tactile warmth.
- **Palette Architecture:**
  - Canvas: `#FFFDF9`
  - Pure Surface: `#FFFFFF`
  - Soft Surface / Card: `#FFF9F5`
  - Primary Pink (Only for CTA & selected highlight): `#EFAEB9`
  - Primary Text: `#4A3E39` (Warm Espresso)
  - Secondary Text: `#6D5A52` (Cocoa)
  - Muted Text: `#8F7D76`
  - Border: `#EFE7E2`
- **Typography & Numerics:**
  - Headlines / Brand Statement / Product Names: `Playfair Display`
  - Body / UI / Labels / Buttons / All Numerics: `Nunito Sans` with `font-variant-numeric: lining-nums tabular-nums`, `white-space: nowrap` for prices.
- **Components:**
  - One Shared Global Mobile Header (Announcement + 52px nav, centered original logo, Cart badge = 0).
  - One Shared Global Footer (Contact Us + Instagram, WhatsApp, Facebook, RED + Brand copyright).
  - Strict Product Detail State Architecture: 03 Default, 03A Bottom Sheet Open, and 03B Selected State share 100% identical layout, images, thumbnails, text, and trust block. Only the selector and CTA reflect the state.