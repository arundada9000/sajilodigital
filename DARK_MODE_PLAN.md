# Dark/Light Mode Implementation Plan

## Overview

Add a dark/light mode toggle to the Sajilo Digital website. The toggle UI and theme persistence (`usePreferences` hook) already exist — the work is converting ~672 hardcoded dark-only color references across 65 files to support both themes.

## Architecture

- **Theme engine:** `usePreferences()` hook — manages `theme: "light" | "dark" | "system"`, toggles `.dark` class on `<html>`, persists to localStorage
- **Toggle UI:** `SettingsSheet` component — already has light/dark/system buttons
- **CSS framework:** Tailwind CSS v4 with `@custom-variant dark (&:is(.dark *))` configured
- **CSS variables:** `:root` (light) and `.dark` (dark) already defined in `globals.css`

## Color Token System

Replace hardcoded colors with semantic tokens defined in `globals.css`:

| Token | Dark Value | Light Value | Replaces |
|-------|-----------|-------------|----------|
| `bg-background` | `#0b0f19` | `#ffffff` | `bg-[#0b0f19]`, `bg-black` (page bg) |
| `bg-surface` | `#161b22` | `#f3f4f6` | `bg-[#161b22]` (cards, panels) |
| `bg-surface-alt` | `#0a0a0a` | `#f9fafb` | `bg-[#0a0a0a]` (alt surfaces) |
| `bg-surface-deep` | `#050505` | `#e5e7eb` | `bg-[#050505]` (deep backgrounds) |
| `text-primary` | `#ffffff` | `#111827` | `text-white` (headings, primary text) |
| `text-secondary` | `rgba(255,255,255,0.6)` | `rgba(0,0,0,0.6)` | `text-white/60` etc. |
| `border-default` | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.1)` | `border-white/10` etc. |

## Migration Rules

1. `bg-[#0b0f19]` → `bg-background`
2. `bg-[#161b22]` → `bg-surface`
3. `bg-[#0a0a0a]` → `bg-surface-alt`
4. `bg-[#050505]` → `bg-surface-deep`
5. `bg-black` → `bg-background` (where used as page/section bg) or `bg-black dark:bg-white` (for overlays)
6. `text-white` → `text-primary`
7. `text-white/NN` → `text-secondary` or explicit `text-primary/NN` with dark: variant
8. `border-white/NN` → `border-default` or explicit dark: variant
9. Gradients like `from-[#0b0f19]` → `from-background`
10. Inline `style={}` colors → CSS variables where possible

## Phases

### Phase 0: Foundation (1-2 files)
- [x] `src/app/globals.css` — add semantic color tokens to `@theme`, fix scrollbar, `.glass` utility
- [x] `src/app/layout.tsx` — remove hardcoded `bg-[#0b0f19] text-white` from `<body>`

### Phase 1: Core Layout (4 files)
- [x] `src/components/layout/Header.tsx` — 18 refs
- [x] `src/components/layout/Footer.tsx` — 36 refs
- [x] `src/components/layout/MobileHeader.tsx` — 8 refs
- [x] `src/components/layout/MobileNavbar.tsx` — 9 refs

### Phase 2: Home Page (11 files)
- [ ] `src/components/home/HomeHero.tsx` — 6 refs
- [ ] `src/components/home/HeroSection.tsx` — 6 refs
- [ ] `src/components/home/MissionSection.tsx` — 5 refs
- [ ] `src/components/home/SystemArchitecture.tsx` — 14 refs
- [ ] `src/components/home/NexusTerminal.tsx` — 11 refs
- [ ] `src/components/home/NexusCTA.tsx` — 4 refs
- [ ] `src/components/home/CTASection.tsx` — 7 refs
- [ ] `src/components/home/CreativeSection.tsx` — 3 refs
- [ ] `src/components/home/TextTicker.tsx` — 2 refs
- [ ] `src/components/home/FeaturedProjects.tsx` — 2 refs
- [ ] `src/app/(main)/page.tsx` — 1 ref

### Phase 3: Contact Page (1 file)
- [ ] `src/app/(main)/contact/ContactClient.tsx` — 45 refs

### Phase 4: About & Team (3 files)
- [ ] `src/app/(main)/about/AboutClient.tsx` — 30 refs
- [ ] `src/app/(main)/about/team/TeamClient.tsx` — 32 refs
- [ ] `src/app/(main)/about/team/page.tsx` — 1 ref

### Phase 5: Services (6 files)
- [ ] `src/app/services/[slug]/ServiceDetailClient.tsx` — (not in audit but likely needs work)
- [ ] `src/app/services/ServicesClient.tsx` — 3 refs
- [ ] `src/components/services/CtaSection.tsx` — 27 refs
- [ ] `src/components/services/HeroSection.tsx` — 4 refs
- [ ] `src/components/services/ServiceSection.tsx` — 9 refs
- [ ] `src/components/services/NavigationButtons.tsx` — 10 refs
- [ ] `src/components/services/Footer.tsx` — 7 refs
- [ ] `src/components/services/InteractiveBackground.tsx` — 2 refs
- [ ] `src/components/services/ProgressIndicator.tsx` — 1 ref

### Phase 6: Projects & Gallery (3 files)
- [ ] `src/components/projects/ProjectsClient.tsx` — 11 refs
- [ ] `src/components/gallery/GalleryV3.tsx` — 24 refs
- [ ] `src/app/gallery/GalleryClient.tsx` — 1 ref

### Phase 7: Blog (3 files)
- [ ] `src/app/(main)/blog/BlogClient.tsx` — 15 refs
- [ ] `src/app/(main)/blog/[slug]/page.tsx` — (not in audit but likely needs work)
- [ ] `src/components/blog/BlogCard.tsx` — 7 refs
- [ ] `src/components/blog/ShareButton.tsx` — 1 ref

### Phase 8: Pricing (5 files)
- [ ] `src/components/pricing/PricingClient.tsx` — 6 refs
- [ ] `src/components/pricing/PackageBundles.tsx` — 13 refs
- [ ] `src/components/pricing/DynamicPricingCard.tsx` — 7 refs
- [ ] `src/components/pricing/ServiceComparisonTable.tsx` — 6 refs
- [ ] `src/components/pricing/ServiceSelector.tsx` — 2 refs

### Phase 9: How We Work (6 files)
- [ ] `src/components/how-we-work/LiveProjectBuilder.tsx` — 58 refs ⚠️ HIGH RISK
- [ ] `src/components/how-we-work/ClientDashboardDemo.tsx` — 29 refs
- [ ] `src/components/how-we-work/LiveWorkingTimeline.tsx` — 17 refs
- [ ] `src/components/how-we-work/ProcessTimeline.tsx` — 5 refs
- [ ] `src/components/how-we-work/FeaturesBento.tsx` — 4 refs
- [ ] `src/components/how-we-work/CTA.tsx` — 3 refs
- [ ] `src/app/(main)/how-we-work/page.tsx` — 7 refs

### Phase 10: FAQ, Testimonials, Status, Search, Misc (8 files)
- [ ] `src/app/(main)/faq/FAQClient.tsx` — 23 refs
- [ ] `src/app/(main)/faq/page.tsx` — 1 ref
- [ ] `src/app/(main)/testimonials/TestimonialsClient.tsx` — 22 refs
- [ ] `src/app/(main)/status/StatusClient.tsx` — 22 refs
- [ ] `src/app/(main)/search/page.tsx` — 12 refs
- [ ] `src/app/(main)/privacy/page.tsx` — 18 refs
- [ ] `src/app/(main)/terms/page.tsx` — 13 refs
- [ ] `src/app/not-found.tsx` — 12 refs
- [ ] `src/app/loading.tsx` — 1 ref

### Phase 11: Shared Components & Modals (7 files)
- [ ] `src/components/header/SettingsSheet.tsx` — 23 refs
- [ ] `src/components/header/VoiceDialog.tsx` — 15 refs
- [ ] `src/components/header/SearchInput.tsx` — 11 refs
- [ ] `src/components/common/Button.tsx` — 9 refs
- [ ] `src/components/common/Breadcrumbs.tsx` — 2 refs
- [ ] `src/components/layout/MobileActionCenter.tsx` — 17 refs
- [ ] `src/components/layout/CustomContextMenu.tsx` — 9 refs
- [ ] `src/components/layout/QRModal.tsx` — 11 refs
- [ ] `src/components/layout/GlobalTerminal.tsx` — 2 refs
- [ ] `src/components/layout/PageTransition.tsx` — 1 ref

### Phase 12: Final Polish
- [ ] Test all pages in dark mode (should look identical to current)
- [ ] Test all pages in light mode (verify readability, contrast, borders)
- [ ] Test system preference switching
- [ ] Verify gradients, shadows, and animations in both modes
- [ ] Check mobile responsive views in both modes

---

## Progress Tracker

| Phase | Files | Status | Notes |
|-------|-------|--------|-------|
| 0 — Foundation | 2 | ✅ Done | Color tokens + layout body fix |
| 1 — Core Layout | 4 | ✅ Done | Header, Footer, MobileHeader, MobileNavbar |
| 2 — Home Page | 11 | ⬜ Not started | |
| 3 — Contact | 1 | ⬜ Not started | |
| 4 — About & Team | 3 | ⬜ Not started | |
| 5 — Services | 9 | ⬜ Not started | |
| 6 — Projects & Gallery | 3 | ⬜ Not started | |
| 7 — Blog | 4 | ⬜ Not started | |
| 8 — Pricing | 5 | ⬜ Not started | |
| 9 — How We Work | 7 | ⬜ Not started | ⚠️ LiveProjectBuilder is highest risk |
| 10 — FAQ/Testimonials/Misc | 9 | ⬜ Not started | |
| 11 — Shared Components | 10 | ⬜ Not started | |
| 12 — Final Polish | — | ⬜ Not started | Visual QA |

**Total files:** 68 | **Total refs:** ~672

## Risk Notes

- `LiveProjectBuilder.tsx` (58 refs) — heavy animation + gradient usage, highest breakage risk
- `ClientDashboardDemo.tsx` (29 refs) — interactive demo component
- `GalleryV3.tsx` (24 refs) — image-heavy, verify overlay readability
- Inline `style={}` color references (10 files) — cannot use Tailwind dark:, need CSS variables
- `globals.css` `.glass` utility — uses `bg-white/10`, needs theme-aware replacement
