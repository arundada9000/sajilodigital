<div align="center">

```text
   _____         _ _ _         ____  _       _ _        _
  |   __|___ ___|_| | |_ ___  |    \|_|___ _|_| |_ __ _| |
  |__   | .'| . | | | | . |   |  |  | | . | | |  _| .'|  |
  |_____|__,|___|_|_|_|___|   |____/|_|_  |_|_|_| |__,|_|
                                      |___|
```

### Your Vision, Our Innovation.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

</div>

---

## The Vision and Philosophy

Sajilo Digital is more than a commercial website. It is an exploration of the boundary between human intent and machine architecture. This project was born from the desire to create an interface that doesn't just display information, but breaths and reacts to the user's presence.

We have poured hundreds of hours into the fine-tuning of this ecosystem. From the subtle grain overlays that give the UI a tangible, organic depth, to the terminal-driven navigation that empowers power users, every decision was made with a focus on quality and innovation. This codebase represents a commitment to radical transparency and technical excellence.

As you explore this project, remember that it was built to scale. The architecture is modular, the data patterns are decentralized, and the design system is robust. We invite you to treat this code not just as a tool, but as a living canvas.

---

## Technical Foundation and Rationale

The project architecture is built on a strictly typed, component-based methodology designed for the year 2026.

### Core Architecture

- **Next.js 16 (App Router)**: We utilized the app router as the primary orchestration layer. This allowed us to leverage React Server Components (RSC) to minimize client-side hydration for static content while maintaining high interactivity through nested layouts and streaming.
- **React 19**: By adopting React 19 early, we gained access to advanced concurrent rendering and server-side features that ensure the UI remains responsive even during heavy particle simulations or terminal operations.
- **TypeScript (Strict Mode)**: Every file in the system is strictly typed. This is not just for error prevention, but to serve as self-documenting code. Interfaces define our domain entities (Projects, Services, Team Members), ensuring that the data pipeline remains predictable across the entire application.

### Motion and Interaction Engineering

- **GSAP (GreenSock Animation Platform)**: GSAP is used exclusively for time-critical, scroll-linked cinematic sequences. Its high-performance engine allows us to synchronize complex animations across multiple components without introducing layout thrashing.
- **Framer Motion**: This is the primary engine for declarative UI animations. We use it for entry effects, hover states, and reactive layout changes. Its integration with the React lifecycle makes it the perfect tool for our neural-inspired interactions.
- **Tailwind CSS v4**: The styling layer is built on the next generation of Tailwind. We have moved away from legacy utility patterns toward a more variables-driven approach, allowing for a highly dynamic theme that supports glassmorphism, scanline effects, and OLED-optimized dark modes with minimal CSS footprint.

---

## Exhaustive Directory and Functional Audit

This section provides a deep-dive into the structural purpose of every directory in the project.

### The Source: /src

#### 1. The Application Root: `/app`

This is where the file-based routing and layout persistence happen.

- `(main)/`: A Next.js route group that encapsulates the core site pages. This allows all marketing pages to share a single layout without injecting the layout logic into the URL segments.
  - `about/`: Pages detailing the organizational culture, mission, and the comprehensive team matrix.
  - `how-we-work/`: A page dedicated to our transparency manifest, featuring the live development telemetry components.
  - `search/`: A high-fidelity internal search engine that utilizes our local registry pattern for sub-second result filtration.
  - `status/`: A real-time system diagnostic view, providing insights into the core health of the digital ecosystem.
- `layout.tsx`: This is the site's neural center. It initializes the global providers, manages the persisting nexus terminal, and injects the global JSON-LD schemas required for high-end search engine dominance.
- `globals.css`: The definitive source of truth for the design system. It contains the Tailwind v4 tokens, scanline keyframes, and the glassmorphism utility classes.

#### 2. Component Ecosystem: `/components`

Components are organized by functional boundaries, ensuring that each module is focused and testable.

- `layout/`: Global, persistent structures. This includes the `GlobalTerminal`, which must be available site-wide, and the `Header`/`Footer` modules.
- `ui/`: The atomic library of the project. Here you will find highly reusable elements like the `Grain` provider, `Particles` container, and specialized `Button` variants that utilize our shimmer and glow effects.
- `how-we-work/`: Feature-specific logic for the transparency portal. This includes the `LiveWorkingTimeline`, which translates JSON data into a cinematic progression feed.
- `home/`: Components specifically optimized for the high-impact landing experience, including the hero parallax systems.

#### 3. Data Intelligence: `/data`

We avoid monolithic database calls in favor of a decentralized Registry Pattern.

- `workingProjects.ts`: The heartbeat of the transparency feature. It stores the state, progress, and activity logs for all active builds.
- `searchRegistry.ts`: A compiled index of every searchable asset on the site, optimized for client-side search logic.
- `faq.ts`: A centralized repository for FAQ data that powers both the front-end UI and the dynamic FAQPage structured data.

#### 4. Shared Logic and Utilities

- `hooks/`: Custom React hooks that encapsulate complex logic like terminal state management, reactive device detection, and sound engine triggers.
- `lib/`: The utility toolkit. Contains shared validation logic, image processing functions (like html-to-image for profile exports), and the `cn` utility for deterministic class merging.
- `types/`: A centralized location for all core TypeScript interfaces, ensuring that a 'Project' or a 'TeamMember' structure is consistent from the data registry to the UI component.

---

## Infrastructure and Maintenance Guide

This project was built to be maintained by humans, not robots. Here is how you keep the system healthy.

### Adding New Search Content

When adding a new page or significant feature, you must register it in `src/data/searchEngineData.ts`. This ensures that users can find the content via both the search page and the terminal's `goto` command. Include descriptive keywords that reflect the user's intent.

### Maintaining the Live Telemetry

The `LiveWorkingTimeline` is the ultimate expression of our transparency. When a project reaches a new milestone, update `src/data/workingProjects.ts`. The UI will respond instantly, updating progress bars and activity feeds. Ensure that activity logs are written in a professional, technical tone to maintain the project's authority.

### Developing New Terminal Commands

The terminal is designed for extensibility. If you need a new tool (e.g., a specific project summary command), expand the command switch in `src/components/layout/GlobalTerminal.tsx`. Follow the established pattern of returning a terminal-styled text response or a specific navigation event.

---

## Leadership and Strategic Vision

The success of Sajilo Digital is driven by a decentralized leadership model that prioritizes engineering craft and strategic clarity.

- **Arun Neupane (CTO / Lead Architect)**: The primary architect of the technical ecosystem. Focuses on the intersection of advanced engineering and cinematic user experience.
- **Bal Gobind Chaudhary (CEO / Founder)**: The visionary behind the company's core mission. Responsible for the "Radical Transparency" framework and business strategy.
- **Pramod Chaudhary (Chairperson)**: Provides strategic oversight for global expansion and ensures that all engineering milestones align with long-term corporate ethics.

---

## The Social Ecosystem

Stay connected with our development journey through our official communication channels.

- **Official YouTube**: [Sajilo Digital](https://youtube.com/@sajilo_digital) - High-fidelity project trailers and technical breakdowns.
- **Official Facebook**: [Sajilo Digital Page](https://www.facebook.com/profile.php?id=61579846778258) - Community updates and announcements.
- **Professional LinkedIn**: [Sajilo Digital Pvt. Ltd.](https://www.linkedin.com/company/sajilo-digital) - Corporate news and strategic partnerships.
- **Visual Instagram**: [@sajilo_digital](https://instagram.com/sajilo_digital) - Aesthetic inspiration and behind-the-scenes engineering.
- **Instant Strategy (WhatsApp)**: [+977 9842977209](https://wa.me/9779842977209) - Direct access for mission-critical consultations.
- **Source GitHub**: [SajiloDigital Organization](https://github.com/sajhilodigital) - Our commit history and public code contributions.

---

## Local Development Sequence

To install and run this digital ecosystem on your local machine:

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/sajhilodigital/sajilo-digital.git
    cd sajilo-digital
    ```

2.  **Synchronize Dependencies**
    We recommend using **pnpm** for deterministic installs and performance.

    ```bash
    pnpm install
    ```

3.  **Execute Development Sequence**
    Starts the Next.js development server on port 3000.

    ```bash
    pnpm dev
    ```

4.  **Verification and Quality Gate**
    Before any deployment, ensure the build passes the strict TypeScript and linting checks.
    ```bash
    pnpm build
    ```

This project has been architected for longevity and scaled for impact. We look forward to seeing how you expand this digital legacy.

---

<div align="center">
  <small>Architecture by Arun Neupane. Engineered for Excellence.</small>
</div>

### Folder Structure

```
└── sajilo-digital/
    ├── .env.example
    ├── .env.local
    ├── .gitignore
    ├── components.json
    ├── eslint.config.mjs
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── README.md
    ├── tsconfig.json
    ├── public/
    │   ├── favicon.ico
    │   ├── icon.png
    │   ├── manifest.json
    │   ├── noise.svg
    │   ├── placeholder.svg
    │   ├── robots.txt
    │   ├── sitemap.xml
    │   ├── testimonials/
    │   │   ├── daba-sherpa.jpg
    │   │   └── mitralal-sapkota.jpg
    │   ├── team/
    │   │   ├── Arun.png
    │   │   ├── ashish.jpg
    │   │   ├── bal.jpg
    │   │   ├── bijay.jpg
    │   │   ├── pramod.jpg
    │   │   ├── puspanjali.jpg
    │   │   ├── puspanjali2.jpg
    │   │   └── sunilpaudyal.jpg
    │   ├── sounds/
    │   │   ├── click.mp3
    │   │   └── hover.mp3
    │   ├── services/
    │   │   ├── dev-ops.mp4
    │   │   ├── dev-ops.png
    │   │   ├── digital-marketing.mp4
    │   │   ├── digital-marketing.png
    │   │   ├── glacier.mp4
    │   │   ├── graphics.png
    │   │   ├── maintain-and-support.mp4
    │   │   ├── maintain-and-support.png
    │   │   ├── mt-glaciertrek.png
    │   │   ├── seo.mp4
    │   │   ├── seo.png
    │   │   ├── theshop.mp4
    │   │   ├── theshop.png
    │   │   ├── uiux.mp4
    │   │   ├── video-editing.mp4
    │   │   └── video-editing.png
    │   ├── projects/
    │   │   ├── career.png
    │   │   ├── career1.png
    │   │   ├── career2.png
    │   │   ├── career3.png
    │   │   ├── codeolympiad.png
    │   │   ├── codeolympiad1.png
    │   │   ├── codeolympiad2.png
    │   │   ├── codeolympiad3.png
    │   │   ├── easyvanilla.png
    │   │   ├── easyvanilla1.png
    │   │   ├── easyvanilla2.png
    │   │   ├── easyvanilla3.png
    │   │   ├── easyvanilla4.png
    │   │   ├── mtglacier.jpg
    │   │   ├── mtglacier1.png
    │   │   ├── mtglacier2.png
    │   │   ├── mtglacier3.png
    │   │   ├── mtglacier4.png
    │   │   ├── picker.png
    │   │   ├── picker2.png
    │   │   ├── picker3.png
    │   │   ├── picker4.png
    │   │   ├── plantify.png
    │   │   ├── plantify1.png
    │   │   ├── plantify2.png
    │   │   ├── plantify3.png
    │   │   ├── sajilosahayata.png
    │   │   ├── sajilosahayata1.png
    │   │   ├── sajilosahayata2.jpg
    │   │   ├── sajilosahayata3.jpg
    │   │   ├── sajilosahayata4.png
    │   │   ├── sorting.png
    │   │   ├── sorting1.png
    │   │   ├── sorting2.png
    │   │   ├── sorting3.png
    │   │   ├── sorting4.png
    │   │   ├── theshop.png
    │   │   ├── theshop1.png
    │   │   ├── theshop2.png
    │   │   ├── theshop3.png
    │   │   ├── theshop4.png
    │   │   └── theshop5.png
    │   ├── logos/
    │   │   ├── CircularLogo.png
    │   │   └── circularlogo.svg
    │   ├── images/
    │   │   ├── about-og.jpg
    │   │   ├── blog-op.jpg
    │   │   ├── contact-og.jpg
    │   │   ├── faq-og.jpg
    │   │   ├── grid.svg
    │   │   ├── home-og.jpg
    │   │   ├── how-we-work-og.jpg
    │   │   ├── logo.png
    │   │   ├── og-image.png
    │   │   ├── projects-og.jpg
    │   │   ├── services-og.jpg
    │   │   ├── team-og.jpg
    │   │   └── testimonals-og.jpg
    │   ├── icons/
    │   │   ├── c3.png
    │   │   ├── cpp.png
    │   │   └── csharp.png
    │   ├── gallery/
    │   │   ├── slide-1.jpg
    │   │   ├── slide-2.jpg
    │   │   ├── slide-3.jpg
    │   │   ├── slide-4.jpg
    │   │   ├── slide-5.jpg
    │   │   └── slide-6.jpg
    │   ├── favicon/
    │   │   ├── android-chrome-192x192.png
    │   │   ├── android-chrome-512x512.png
    │   │   ├── apple-touch-icon-152x152.png
    │   │   ├── apple-touch-icon-167x167.png
    │   │   ├── apple-touch-icon-180x180.png
    │   │   ├── apple-touch-icon.png
    │   │   ├── favicon-16x16.png
    │   │   ├── favicon-32x32.png
    │   │   ├── favicon-48x48.png
    │   │   ├── favicon.ico
    │   │   ├── favicon.png
    │   │   ├── favicon.svg
    │   │   ├── README.txt
    │   │   ├── safari-pinned-tab.svg
    │   │   └── site.webmanifest
    │   └── blog/
    │       └── videoedit1.png
    ├── lib/
    │   ├── export-util.ts
    │   ├── sound.ts
    │   └── utils.ts
    ├── hooks/
    │   ├── use-mobile.tsx
    │   └── use-toast.tsx
    ├── components/
    │   ├── CamilleGallery.tsx
    │   ├── CustomCursor.tsx
    │   ├── Dock.tsx
    │   ├── DockSubMenu.tsx
    │   ├── FullscreenSlider.tsx
    │   ├── Navigation.tsx
    │   ├── NavLink.tsx
    │   ├── ProfileCard.tsx
    │   ├── ProfileModal.tsx
    │   ├── ShinyText.tsx
    │   ├── Shuffle.tsx
    │   ├── SplitText.tsx
    │   └── ui/
    │       ├── button.tsx
    │       ├── toast.tsx
    │       └── use-toast.ts
    |
    └── src/
        ├── types/
        │   ├── blog.ts
        │   ├── index.ts
        │   ├── project.ts
        │   └── service.ts
        ├── styles/
        │   └── animations.css
        ├── lib/
        │   ├── constants.ts
        │   ├── metadata.ts
        │   ├── utils.ts
        │   ├── validation.ts
        │   ├── voice/
        │   │   ├── voiceCommands.ts
        │   │   └── voiceControl.ts
        │   ├── seo/
        │   │   └── metadata.ts
        │   ├── search/
        │   │   └── searchEngine.ts
        │   └── preferences/
        │       └── usePreferences.ts
        ├── hooks/
        │   ├── upSideDownScrollTop.ts
        │   ├── useIntersectionsObserver.ts
        │   ├── useMediaQuery.ts
        │   └── useScrollProgress.ts
        ├── data/
        │   ├── blog.ts
        │   ├── faq.ts
        │   ├── gallery.ts
        │   ├── pricingData.ts
        │   ├── projects.ts
        │   ├── searchEngineData.ts
        │   ├── services.ts
        │   ├── team.ts
        │   ├── testimonials.ts
        │   └── workingProjects.ts
        ├── app/
        │   ├── apple-icon.png
        │   ├── favicon.ico
        │   ├── globals.css
        │   ├── icon.png
        │   ├── layout.tsx
        │   ├── loading.tsx
        │   ├── not-found.tsx
        │   ├── robots.ts
        │   ├── sitemap.ts
        │   ├── template.tsx
        │   ├── services/
        │   │   ├── page.tsx
        │   │   ├── ServicesClient.tsx
        │   │   └── [slug]/
        │   │       ├── page.tsx
        │   │       └── ServiceDetailClient.tsx
        │   ├── gallery/
        │   │   ├── About.tsx
        │   │   ├── GalleryClient.tsx
        │   │   ├── Index.css
        │   │   ├── page.tsx
        │   │   ├── prevpage.tsx
        │   │   ├── ProjectDetail.tsx
        │   │   └── wala-layout.tsx
        │   ├── (main)/
        │   │   ├── layout.tsx
        │   │   ├── page.tsx
        │   │   ├── testimonials/
        │   │   │   ├── layout.tsx
        │   │   │   ├── page.tsx
        │   │   │   └── TestimonialsClient.tsx
        │   │   ├── terms/
        │   │   │   └── page.tsx
        │   │   ├── status/
        │   │   │   ├── page.tsx
        │   │   │   └── StatusClient.tsx
        │   │   ├── search/
        │   │   │   └── page.tsx
        │   │   ├── projects/
        │   │   │   ├── layout.tsx
        │   │   │   ├── page.tsx
        │   │   │   └── [slug]/
        │   │   │       ├── page.tsx
        │   │   │       └── ProjectDetailClient.tsx
        │   │   ├── privacy/
        │   │   │   └── page.tsx
        │   │   ├── pricing/
        │   │   │   ├── layout.tsx
        │   │   │   └── page.tsx
        │   │   ├── how-we-work/
        │   │   │   └── page.tsx
        │   │   ├── faq/
        │   │   │   ├── FAQClient.tsx
        │   │   │   └── page.tsx
        │   │   ├── contact/
        │   │   │   ├── ContactClient.tsx
        │   │   │   ├── layout.tsx
        │   │   │   └── page.tsx
        │   │   ├── blog/
        │   │   │   ├── BlogClient.tsx
        │   │   │   ├── layout.tsx
        │   │   │   ├── page.tsx
        │   │   │   ├── [slug]/
        │   │   │   │   └── page.tsx
        │   │   │   └── category/
        │   │   │       └── [category]/
        │   │   │           └── page.tsx
        │   │   └── about/
        │   │       ├── AboutClient.tsx
        │   │       ├── layout.tsx
        │   │       ├── page.tsx
        │   │       ├── team/
        │   │       │   ├── page.tsx
        │   │       │   └── TeamClient.tsx
        │   │       └── about-us/
        │   │           └── page.tsx
        │   └── api/
        │       ├── newsletter/
        │       │   └── route.ts
        │       └── contact/
        │           └── route.ts
        └── components/
            ├── ui/
            │   ├── Badge.tsx
            │   ├── Grain.tsx
            │   ├── Input.tsx
            │   ├── Magnetic.tsx
            │   ├── Select.tsx
            │   ├── Textarea.tsx
            │   └── SvgLoader/
            │       ├── svgLoader.css
            │       └── SvgLoader.tsx
            ├── services/
            │   ├── CtaSection.tsx
            │   ├── Footer.tsx
            │   ├── HeroSection.tsx
            │   ├── InteractiveBackground.tsx
            │   ├── MonthSection.tsx
            │   ├── NavigationButtons.tsx
            │   ├── ProgressIndicator.tsx
            │   └── ServiceSection.tsx
            ├── seo/
            │   └── StructuredData.tsx
            ├── projects/
            │   └── ProjectsClient.tsx
            ├── pricing/
            │   ├── DynamicPricingCard.tsx
            │   ├── PackageBundles.tsx
            │   ├── PricingClient.tsx
            │   ├── ServiceComparisonTable.tsx
            │   └── ServiceSelector.tsx
            ├── layout/
            │   ├── Footer.tsx
            │   ├── GlobalTerminal.tsx
            │   ├── Header.tsx
            │   ├── MobileNavbar.tsx
            │   ├── Navbar.tsx
            │   ├── PageTransition.tsx
            │   ├── ParticlesBackground.tsx
            │   └── StandardLayout.tsx
            ├── how-we-work/
            │   ├── ClientDashboardDemo.tsx
            │   ├── CTA.tsx
            │   ├── FeaturesBento.tsx
            │   ├── LiveProjectBuilder.tsx
            │   ├── LiveWorkingTimeline.tsx
            │   └── ProcessTimeline.tsx
            ├── home/
            │   ├── CreativeSection.tsx
            │   ├── CTASection.tsx
            │   ├── FeaturedProjects.tsx
            │   ├── HeroSection.tsx
            │   ├── HomeHero.tsx
            │   ├── MissionSection.tsx
            │   ├── NexusCTA.tsx
            │   ├── NexusTerminal.tsx
            │   ├── SystemArchitecture.tsx
            │   └── TextTicker.tsx
            ├── header/
            │   ├── SearchInput.tsx
            │   ├── SettingsSheet.tsx
            │   └── VoiceDialog.tsx
            ├── gallery/
            │   └── GalleryV3.tsx
            ├── common/
            │   ├── Accordion.tsx
            │   ├── Breadcrumbs.tsx
            │   ├── Button.tsx
            │   ├── Card.tsx
            │   ├── Loading.tsx
            │   ├── Modal.tsx
            │   └── SEO.tsx
            └── blog/
                └── BlogCard.tsx

```
