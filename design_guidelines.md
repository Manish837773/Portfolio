# Design Guidelines for Sai Manish S - Portfolio Website

## Design Approach: Reference-Based (Dribbble/Behance Portfolio Style)

**Justification:** Professional portfolio showcasing technical expertise requires clean, modern aesthetic with strong visual hierarchy. Drawing inspiration from high-quality Dribbble and Behance portfolios that effectively balance creativity with professionalism.

**Key Design Principles:**
- Clean, minimal aesthetic with purposeful use of whitespace
- Professional credibility through refined typography and structured layouts
- Progressive disclosure of information through scroll-based sections
- Technical sophistication conveyed through precision and attention to detail

---

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Charcoal: `215 25% 27%` - Primary text, headers, strong emphasis
- Professional Blue: `207 73% 57%` - Interactive elements, links, CTAs
- Coral Accent: `0 83% 67%` - Strategic highlights, achievement badges, hover states

**Supporting Colors:**
- Background White: `0 0% 100%` - Main background
- Dark Text: `218 33% 11%` - Body text, descriptions
- Light Grey: `214 32% 91%` - Borders, subtle backgrounds, card shadows

**Dark Mode (if implemented):**
- Background: `215 28% 17%`
- Card backgrounds: `215 25% 22%`
- Text: `214 32% 91%`

### B. Typography

**Font Families:**
- Primary: 'Inter' - Body text, descriptions, general content
- Accent: 'Poppins' - Headlines, section titles, emphasis

**Type Scale:**
- Hero Name: text-6xl md:text-7xl lg:text-8xl font-bold (Poppins)
- Hero Title: text-2xl md:text-3xl font-medium (Inter)
- Section Headers: text-4xl md:text-5xl font-bold (Poppins)
- Subsection Headers: text-2xl md:text-3xl font-semibold (Poppins)
- Body Text: text-base md:text-lg leading-relaxed (Inter)
- Card Titles: text-xl font-semibold (Poppins)
- Labels/Meta: text-sm font-medium uppercase tracking-wide (Inter)

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Card gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8 for vertical rhythm

**Container System:**
- Max width: max-w-7xl for full sections
- Content width: max-w-4xl for text-heavy sections
- Centered: mx-auto with px-6 md:px-8

### D. Component Library

**Hero Section:**
- Full-width hero with abstract gradient background (charcoal to professional blue, subtle)
- Professional headshot/portrait image (circular, 200px diameter, positioned creatively - not centered)
- Large name typography with title and brief introduction
- Smooth scroll indicator/CTA button to explore work
- Floating social media icons (LinkedIn, GitHub) with subtle animations

**Experience Timeline:**
- Vertical timeline with alternating left/right layout (desktop)
- Company cards with logo placeholder areas, dates, role titles
- Expandable project details with bullet achievements
- Technology tags using small pills with light grey background
- Timeline connector line with milestone dots in professional blue

**Skills Matrix:**
- Category-based skill grouping (5 categories from resume)
- Card-based layout in 2-3 column grid
- Each skill category card contains:
  - Category icon area (placeholder for custom icons)
  - Category title
  - Skill tags as inline badges
  - Subtle hover effect (lift + shadow)

**Projects Showcase:**
- 2-3 column masonry grid layout
- Each project card includes:
  - Project name header
  - Technology stack tags
  - Brief description
  - Link to demo/GitHub (if available)
- Card hover: subtle scale and shadow enhancement

**Certifications Section:**
- Horizontal scrollable card carousel (mobile)
- Grid layout (desktop, 2-3 columns)
- Certification badge visual with:
  - Provider logo placeholder
  - Certification name
  - Earned date
  - Verification link

**Contact Section:**
- Two-column split (desktop): Contact form left, info/social right
- Contact form fields: Name, Email, Message with professional blue focus states
- Social links with icon + label, coral hover state
- Download Resume CTA button (prominent)

### E. Animations & Interactions

**Subtle Motion:** (Use sparingly)
- Fade-in on scroll for section entrance (opacity 0 to 1, 0.6s ease)
- Skill tag stagger animation (0.1s delay between each)
- Card hover: transform scale(1.02) with 0.3s transition
- Timeline items: slide-in from left/right alternating
- NO continuous animations or looping effects

**Interactive States:**
- Links: Professional blue with coral underline on hover
- Buttons: Professional blue background, white text, coral background on hover
- Cards: Subtle shadow elevation on hover (shadow-lg to shadow-xl)
- Form inputs: Professional blue 2px border on focus

---

## Images Section

**Hero Image:**
- **Type:** Professional headshot/portrait of Sai Manish S
- **Placement:** Hero section, positioned to the left or right (not center) creating asymmetric balance
- **Style:** High-quality, professional, circular crop (200-250px diameter)
- **Treatment:** Subtle shadow, optional subtle border in light grey

**Project Thumbnails (if available):**
- Placeholder areas for Doc Bot interface screenshot, Python games screenshots
- 16:9 aspect ratio, rounded corners (rounded-lg)
- Positioned at top of project cards

**Background Elements:**
- Hero: Subtle gradient overlay (charcoal to professional blue, low opacity)
- NO stock photos or generic imagery
- Abstract geometric patterns acceptable as subtle backgrounds

---

## Page Structure

1. **Hero Section** (80vh) - Name, title, headshot, intro, CTA
2. **About/Introduction** (auto height) - Expanded professional summary
3. **Experience Timeline** (auto height) - 2 roles, 6+ key projects with details
4. **Skills Matrix** (auto height) - 5 category grid with comprehensive skill tags
5. **Projects Showcase** (auto height) - 3 personal projects with descriptions
6. **Certifications** (auto height) - 4-5 certifications in card grid
7. **Contact Section** (auto height) - Form + social links + download resume

**Total Sections:** 7 comprehensive sections
**Viewport Strategy:** Hero uses 80vh, all other sections use natural content height with consistent py-20 spacing