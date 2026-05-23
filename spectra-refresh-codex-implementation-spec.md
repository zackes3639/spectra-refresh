# Spectra Refresh — Codex Implementation Spec

Prepared for repo: `zackes3639/spectra-refresh`  
Review date: 2026-05-23  
Primary goal: expand the current Astro static refresh site into a fuller Spectra Wellness / Dr. Lisa Koche site using the live sites as content direction, while rewriting and polishing copy rather than copying verbatim unless content rights are confirmed.

---

## 0. Important implementation constraints

0. do not change the current home page. it is the foundation/reference for the rest of the site
1. Reuse the existing Astro design system. Do not redesign the site from scratch.
2. Preserve the current spectrum visual language: soft white/aqua background, teal/blue/pink/violet/gold accents, Fraunces display type, Manrope body type, rounded cards, pill buttons, spectrum gradients, and airy editorial spacing.
3. Convert live-site content into polished, legally safer, medically responsible copy. Avoid cure guarantees, exaggerated claims, or unsupported disease-treatment promises.
4. Keep clinical CTAs clear: discovery call, book appointment, patient portal, contact, membership discovery, speaking inquiry.
5. Do not wire backend form processing unless explicitly requested. Use static links to existing external systems where appropriate.
6. Use Astro static pages/data files. Prefer reusable data-driven components for services, team, testimonials, resources, and media links.
7. Run `npm run build` after implementation. Package requires Node `>=22.12.0` and scripts are `astro dev`, `astro build`, and `astro preview`.
8. The local rendered site was not directly accessible from this review environment. Treat the GitHub repo as the source of truth for the current refresh build, then verify visually in Chrome/Codex at `http://127.0.0.1:4321/`.

---

## 1. Current refresh-site snapshot

### Framework and structure

- Framework: Astro 6.
- App is minimal and static.
- Primary layout: `src/components/Layout.astro` imports global CSS, Header, Footer, and exposes title/description/currentPath props.
- Global utilities: `.container`, `.container-narrow`, `.section`, `.section-soft`, `.eyebrow`, `.section-heading`, `.section-copy`, `.button`, `.button-primary`, `.button-secondary`, `.card`, `.grid`, `.two-column`.
- Design tokens live in `src/styles/tokens.css`.
- Current main nav in `Header.astro`: About, Programs, Approach, Insights, Speaking, Contact.
- Current footer has Explore, Care, Legal, Connect groups; legal pages exist but are placeholders.
- Existing data pattern: `src/data/programs.ts` drives `/programs` and four static program detail wrappers.

### Current routes found / inferred

- `/`
- `/about`
- `/programs`
- `/programs/longevity-optimization`
- `/programs/nervous-system-recovery`
- `/programs/womens-metabolic-hormonal-health`
- `/programs/precision-preventive-care`
- `/approach`
- `/insights`
- `/speaking`
- `/contact`
- `/privacy`
- `/terms`
- `/disclaimer`

### Current site positioning

The refresh currently reads primarily as a Dr. Lisa personal-brand longevity site. It has a good visual foundation, but much of the content is conceptual placeholder copy. The static site does not yet reflect the full Spectra Wellness practice IA, provider/team structure, patient workflows, service depth, active blog/resources, or local Tampa patient conversion paths.

---

## 2. Live-source information architecture to map into refresh

### Spectra Wellness live IA

Use `spectrawellness.com` as the primary source for practice content and service architecture.

Top-level public structure:

- Home
- Patients
  - Appointments
  - Patient Portal
  - Patient Information
  - Functional Medicine Membership
- About
  - Team
  - Patient Testimonials
  - Blog
- Services
  - Functional Medicine Membership
  - Performance & Longevity Center
  - IV Nutrition
  - NAD+ IV Therapy
  - Functional Medicine
  - Pediatric Services
  - Chiropractic Care
  - Chiropractic Care for Children and Pregnant Women
  - Hormone Replacement
  - Aesthetics & Cosmetics / Functional Aesthetics
  - Understanding Exosomes
  - Weight Loss
  - Holistic Health Coaching
  - Applied Kinesiology
  - Traditional Care
  - Destination Health Immersion
  - Preventive Cardiology
  - Lymphatic Drainage Massage
  - Healing Arts Collective
  - Advanced Epigenetic Testing & Blood Cancer Screening
  - Advanced Serial Therapeutic Plasma Exchange
- Shop
- Free Thyroid Assessment
- Contact

Homepage content buckets to preserve/rewrite:

- Modern Medicine, Root-Cause Care, and Longevity Optimization.
- Patient problem framing: people feel unheard, rushed, or stuck managing symptoms without answers.
- Service buckets:
  - Medical & Functional Care
  - Performance & Recovery
  - Applied Kinesiology & Root-Cause Assessment
  - Structural & Physical Medicine
  - Aesthetics & Regenerative Wellness
- Functional Medicine Membership as “easiest way to access everything Spectra has to offer.”
- What’s New / featured offerings:
  - Destination Health Immersion
  - Functional Aesthetics
  - HOCATT Ozone Sauna System
  - Healing Arts Collective
- Testimonials.
- First-step CTA: discovery call.
- Cross-links to Dr. Lisa courses/favorites.

### Dr. Lisa Koche live IA

Use `drlisakoche.com` as the primary source for Dr. Lisa personal-brand, speaking, courses, free resources, media, and story content.

Top-level public structure:

- Home
- My Favorites
- Work With Me
- Media
- Speaker
- Blog
- Contact
- Academy login

Homepage content buckets to preserve/rewrite:

- Mission: science, wisdom, spiritual alignment; understand body, advocate for self, begin root-cause healing.
- Positioning: Triple Board-Certified Physician; Founder and Director of Spectra Wellness Solutions; Lead Physician and Speaker for Tony Robbins Life Mastery Health Program.
- Survivor story: leukemia and heart failure; frustration with traditional medicine; two decades helping patients who felt overlooked.
- Four entry paths:
  - Get care as a patient
  - Invite me to speak
  - Start with free resources
  - Guided courses
- Free resources:
  - Foundational Audit
  - Becoming a Biohacker
  - Supplement Guide
  - Ultimate Gift Guide
  - Transform Your Health
- Credentials and experience:
  - Triple Board Certified
  - Functional Pioneer
  - Research-Driven
  - Respected Speaker
- LIT Journey and questionnaire CTAs.
- Favorites/product categories.
- Speaking topics and media proof.

---

## 3. Strategic IA recommendation

The refresh should become a unified site where Spectra Wellness is the practice conversion engine and Dr. Lisa is the authority/personality layer.

Recommended top nav:

1. Home — `/`
2. Services — `/services`
3. Membership — `/membership`
4. Team — `/team`
5. Patients — `/patients`
6. Resources — `/resources`
7. Speaking — `/speaking`
8. Contact — `/contact`

Optional secondary/footer links:

- About Dr. Lisa — `/about`
- Approach — `/approach`
- Media — `/media`
- Testimonials — `/testimonials`
- Destination Health — `/services/destination-health`
- Healing Arts Collective — `/services/healing-arts-collective`
- Shop / Favorites — external or `/favorites`
- Privacy / Terms / Disclaimer

Route handling:

- Keep `/programs` for Dr. Lisa education/course pathways, or redirect it to `/resources` if the refresh should be practice-first.
- Add `/services` as the primary practice-service index.
- Add `/membership` as a first-class route, not buried under `/programs`.
- Keep `/approach`, but rewrite it to combine Spectra’s “root-cause care” story with Dr. Lisa’s “Understand / Advocate / Heal” framework.

---

## 4. Missing / weak / mismatched structure

### High-priority missing pages

1. `/services` service index
2. `/membership` functional medicine membership
3. `/services/functional-medicine`
4. `/services/performance-longevity`
5. `/services/iv-nutrition`
6. `/services/applied-kinesiology`
7. `/services/chiropractic-care`
8. `/services/hormone-replacement`
9. `/services/aesthetics-regenerative-wellness`
10. `/team`
11. `/patients`
12. `/testimonials`
13. `/resources`
14. `/media`
15. Expanded `/contact`

### Weak pages to rewrite

- `/`: visually strong, but too narrow. Needs practice positioning, core service buckets, membership, team proof, testimonials, and patient-first CTA.
- `/about`: too generic. Needs Dr. Lisa story, credentials, survivor-to-founder arc, Spectra origin, team handoff, and audience pathways.
- `/programs`: current cards are polished but conceptual. Decide whether these become education/coaching/course pathways or are replaced by Spectra services.
- `/approach`: good framework, but needs live-site specificity: functional medicine, advanced diagnostics, primary care, longevity technologies, whole-person root-cause care.
- `/insights`: placeholder editorial cards. Replace with Spectra blog post cards and Dr. Lisa resource/course pathways.
- `/speaking`: good layout shell, but use live speaker page content: transformational speaker positioning, audience impact, notable events, topics, inquiry form.
- `/contact`: currently says static form and final practice details belong here. Replace with real phone, email, address, portal, inquiry routing, discovery call links, and clear PHI disclaimer.
- `/privacy`, `/terms`, `/disclaimer`: placeholders. Keep disclaimer but refine; legal should be reviewed before production.

### Mismatches

- Current brand/logo is Dr. Lisa-first while live Spectra is practice-first. Decide final brand hierarchy: “Spectra Wellness by Dr. Lisa Koche” or “Dr. Lisa Koche / Spectra Wellness.”
- Current `/programs` route implies packaged personal programs, while Spectra sells services, membership, clinical care, and therapies.
- Current nav omits Patients, Team, Services, Membership, Testimonials, and Media, all of which exist in the live ecosystem.
- Current footer legal/contact information is incomplete.
- Current CTAs are generic; live sites use more specific CTAs: Book Appointment, Book Discovery Call, Patient Portal, Book With Mindbody, Become a Patient, Invite Me to Speak.

---

## 5. Proposed data model

Add these data files:

### `src/data/services.ts`

Fields:

```ts
export interface Service {
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  heroCopy: string;
  category: "medical" | "performance" | "structural" | "aesthetics" | "specialty";
  source: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  who: string[];
  benefits: string[];
  sections: { eyebrow?: string; title: string; copy: string; items?: string[] }[];
  related: string[];
  seo: { title: string; description: string };
  image: { src?: string; alt: string; needed: string };
}
```

Initial services:

- functional-medicine
- performance-longevity
- iv-nutrition
- applied-kinesiology
- chiropractic-care
- hormone-replacement
- aesthetics-regenerative-wellness
- destination-health
- preventive-cardiology
- healing-arts-collective

### `src/data/team.ts`

Fields:

```ts
export interface TeamMember {
  name: string;
  credentials: string;
  role: string;
  slug?: string;
  summary: string;
  acceptsInsurance?: boolean;
  bookingLabel: string;
  bookingHref: string;
  specialties: string[];
  image: { src?: string; alt: string; needed: string };
}
```

Initial team members:

- Lisa Saff Koche — MD, ABAARM, FAAMFM
- Rodney Morillo — MSN, APRN, FNP-C
- George E. Springer, Jr. — DC, NMD, DCBCN
- Angeline Galiano — MD, ABAARM, FAAMFM
- Emily Zink Ebaugh — MSN, APRN, FNP-C
- Christine Britt — DC
- Susan Bucci — CCP

### `src/data/testimonials.ts`

Use short, legally safer excerpts from live testimonials where authorized. Otherwise summarize themes only.

Fields:

```ts
export interface Testimonial {
  name: string;
  excerpt: string;
  theme: "root-cause" | "heard" | "team" | "functional" | "structural";
}
```

### `src/data/resources.ts`

Fields:

```ts
export interface Resource {
  title: string;
  type: "free-download" | "course" | "article" | "quiz" | "favorite";
  summary: string;
  href: string;
  sourceSite: "spectra" | "dr-lisa";
  ctaLabel: string;
}
```

Include:

- Foundational Audit
- Becoming A Biohacker
- Supplement Guide
- Ultimate Gift Guide
- Transform Your Health
- LIT Questionnaire
- LIT Journey
- Foundational Framework
- Recent Spectra blog posts

### `src/data/media.ts`

Fields:

```ts
export interface MediaAppearance {
  title: string;
  outlet: string;
  href: string;
  category: "tv" | "podcast" | "article" | "video";
}
```

Populate from Dr. Lisa Media page.

---

## 6. Component plan

Reuse existing:

- `Layout`
- `Header`
- `Footer`
- `PageHero`
- `CTASection`
- `SectionIntro`
- `ProgramCard` or adapt into `ServiceCard`
- `TopicCard`
- `InsightCard`
- `ContactCard`

Add or adapt:

1. `ServiceCard.astro`
   - Based on `ProgramCard` visual style.
   - Props: title, summary, href, category, benefits/items.

2. `ServiceDetail.astro`
   - Based on `ProgramDetail`, but with service-specific fields and related-service links.

3. `TeamMemberCard.astro`
   - Use `.card`; include image placeholder, credentials, specialties, insurance note, booking CTA.

4. `TestimonialCard.astro`
   - Short quote/excerpt only, theme label, no overstated health claims.

5. `ResourceCard.astro`
   - Free resource/course/article cards.

6. `MediaGrid.astro`
   - Outlet/title/category cards for Dr. Lisa media page.

7. Optional `ExternalCtaNotice.astro`
   - Reusable note for links to Calendly, Mindbody, Athena portal, academy, external shop.

---

## 7. Route-by-route implementation spec

### `/` — Home

Status: rewrite and expand.  
Source: Spectra homepage + Dr. Lisa homepage.  
Purpose: make the homepage a unified Spectra practice conversion page with Dr. Lisa authority.

SEO:

- Title: `Spectra Wellness | Functional Medicine & Longevity Care in Tampa`
- Description: `Physician-led functional medicine, primary care, longevity therapies, and root-cause wellness in Tampa Bay, founded by Dr. Lisa Koche.`

Sections:

1. Hero
   - Eyebrow: `Spectra Wellness in Tampa Bay`
   - H1: `Modern medicine, root-cause care, and longevity optimization.`
   - Copy direction: physician-led medical practice combining primary care, functional medicine, and advanced performance therapies under one roof.
   - Primary CTA: `Book a Discovery Call` → Calendly or `/contact`
   - Secondary CTA: `Explore Services` → `/services`
   - Image: Dr. Lisa or clinic/provider/patient image.

2. Problem / promise
   - Title: `For patients who are tired of being rushed, unheard, or left without answers.`
   - Copy: rewrite Spectra homepage problem framing.
   - Component: two-column editorial panel.

3. Service buckets
   - Use 5 cards:
     - Medical & Functional Care
     - Performance & Recovery
     - Applied Kinesiology & Root-Cause Assessment
     - Structural & Physical Medicine
     - Aesthetics & Regenerative Wellness
   - Component: `ServiceCard` grid.

4. Membership highlight
   - Title: `The easiest way to access the full spectrum of care.`
   - Copy: membership brings advanced services, physician leadership, priority access, coaching, IV support, and performance therapies together.
   - CTA: `Explore Membership` → `/membership`

5. Meet Dr. Lisa / authority strip
   - Include triple-board-certified positioning, founder/director role, Tony Robbins Life Mastery role, survivor story in one polished paragraph.
   - CTA: `Meet Dr. Lisa` → `/about`

6. What’s new / featured offerings
   - Cards for Destination Health Immersion, Functional Aesthetics, Performance Center, Healing Arts Collective.

7. Testimonials
   - 3 short authorized excerpts or rewritten themes.

8. Final CTA
   - `Your first step starts here.`
   - CTA: `Book a Discovery Call` / `Contact the Practice`.

Implementation notes:

- Keep existing `PageHero`, but update hero copy and image.
- Use current `.section`, `.section-soft`, `.card`, `.button` utilities.
- Avoid adding a heavy homepage animation or third-party library.

---

### `/services` — Services index

Status: new.  
Source: Spectra nav + homepage service buckets.  
Purpose: give Codex a central service hub that replaces the live site’s very large dropdown with a polished, scannable hierarchy.

SEO:

- Title: `Services | Spectra Wellness Tampa`
- Description: `Explore functional medicine, longevity therapies, IV nutrition, applied kinesiology, chiropractic care, hormone support, aesthetics, and specialty wellness services at Spectra Wellness.`

Sections:

1. Hero
   - H1: `A full spectrum of care for root-cause healing and long-term vitality.`
   - CTA: `Book a Discovery Call` / `View Membership`

2. Category navigation
   - Medical & Functional Care
   - Performance & Recovery
   - Structural & Physical Medicine
   - Aesthetics & Regenerative Wellness
   - Specialty Experiences

3. Service cards
   - Pull from `services.ts`.

4. Membership callout
   - Link to `/membership`.

5. Related resources
   - Blog/resource cards from `/resources`.

Image needed:

- Clinic/service collage or abstract spectrum visual.

---

### `/membership` — Functional Medicine Membership

Status: new high priority.  
Source: Spectra Functional Medicine Membership page.  
Purpose: convert high-intent patients into membership discovery calls.

SEO:

- Title: `Functional Medicine Membership | Spectra Wellness Tampa`
- Description: `A year-long functional medicine membership with physician-led care, advanced labs, coaching, IV support, and longevity therapies at Spectra Wellness.`

Sections:

1. Hero
   - H1: `A full year of care, tailored to your biology.`
   - Copy: year-long continuity, priority access, advanced labs, IV support, coaching, and ongoing guidance.
   - CTA: `Book a Membership Discovery Call`

2. Why membership exists
   - Dr. Lisa quote/paraphrase: consistent monitoring and proactive care can create better clarity than only seeking care when sick. Keep measured.

3. What’s included
   - Four cards:
     - Comprehensive Medical Care
     - Coaching & Ongoing Support
     - IV Therapy & Longevity Enhancements
     - Member Exclusives
   - Include precise inclusions only if approved: 5 scheduled visits, comprehensive annual bloodwork, priority scheduling, bi-weekly coaching, LIT Journey access, 6 Myers IV drips, Apollo/wellness credit, discounts.

4. Who it’s for
   - For people seeking clearer understanding, expanded clinician time, proactive strategy, and access to advanced therapies.

5. Membership journey
   - Reclaim, Heal, Perform, Transcend.
   - Medical disclaimer: phases are educational framework; individual plan varies.

6. Perks detail
   - Tiered longevity/performance therapies, IV credits, supplement discount, Apollo/wellness credit.

7. Testimonials
   - Use authorized excerpts or summarize themes.

8. Final CTA
   - `Ready to begin?` → discovery call.

Component notes:

- Adapt `ProgramDetail` structure to `MembershipDetail` or custom page.
- Use `.journey-grid` visual pattern for Reclaim/Heal/Perform/Transcend.

---

### `/services/functional-medicine`

Status: new high priority.  
Source: Spectra Functional Medicine page + homepage medical bucket.  
Purpose: explain root-cause medical care and route to provider booking/membership.

SEO:

- Title: `Functional Medicine in Tampa | Spectra Wellness`
- Description: `Root-cause functional medicine in Tampa Bay with advanced diagnostics, personalized care planning, and physician-led support for long-term health.`

Sections:

1. Hero
   - H1: `Functional medicine that listens longer and looks deeper.`
   - Copy: true healing goes beyond symptom management and considers underlying drivers, health history, environment, lifestyle, and advanced diagnostics.
   - CTA: `Schedule a Discovery Call`
   - Secondary: `Explore Membership`

2. Is this for you?
   - Tired of side effects, unanswered questions, wanting active role, seeking supportive team.

3. Patient-first root-cause care
   - Conventional symptom-management contrast; Spectra listens, identifies imbalances, and personalizes plans.

4. Personalized to unique biology
   - Genetics, lifestyle, environment, history, testing.

5. What care may include
   - Advanced labs, comprehensive assessments, nutrition/lifestyle, supplements/meds when appropriate, follow-up, referrals.

6. Related services
   - Membership, Performance & Longevity, Hormone Replacement, IV Nutrition, Preventive Cardiology.

7. CTA
   - `Start with a conversation`.

---

### `/services/performance-longevity`

Status: new high priority.  
Source: Spectra Performance & Longevity Center.  
Purpose: present therapy tiers in a simplified, medically careful way.

SEO:

- Title: `Performance & Longevity Center | Spectra Wellness Tampa`
- Description: `Advanced wellness therapies for recovery, cellular health, circulation, nervous system regulation, and long-term vitality at Spectra Wellness.`

Sections:

1. Hero
   - H1: `Advanced therapies for recovery, balance, and vitality.`
   - CTA: `Book With Mindbody` / `Ask About Therapies`

2. How it works
   - Three tiers; individual sessions or packages if current.

3. Tier cards
   - Tier 1 — Foundational
     - LightStim ProPanel, TherAir oxygen, Normatec, PEMF/Bemer, salt booth, Power Plate, VIBE Bed, Pain ProPanel, Charging Station, PhotonX, contrast therapy, Hugo PEMF, Light Portal.
   - Tier 2 — Restorative
     - Flowpresso, Hydrogen Therapy Pod, LightStim Red Bed.
   - Tier 3 — Advanced
     - Hyperbaric oxygen, HOCATT, Human Regenerator / cold plasma.

4. Who it’s for
   - recovery, fatigue, stress load, circulation, detox support, advanced regenerative optimization, medically appropriate cases.

5. Medical note
   - Some therapies require medical clearance and provider review.

6. CTA
   - `Call our team to learn which tier is right for you.`

---

### `/services/iv-nutrition`

Status: new.  
Source: Spectra IV Nutrition page.  
Purpose: explain IV therapy benefits and popular drips without excessive claims.

SEO:

- Title: `IV Nutrition Therapy in Tampa | Spectra Wellness`
- Description: `Medically supervised IV vitamin therapy in Tampa Bay for hydration, nutrient replenishment, energy support, recovery, and wellness.`

Sections:

1. Hero
   - H1: `Replenish, refuel, and restore from the inside out.`
   - CTA: `Book IV Therapy`

2. Why IV therapy
   - Medically supervised environment; trained technicians; nutrient absorption and hydration support.

3. Benefits grid
   - Hydration, electrolyte replenishment, energy support, mental clarity, recovery, travel/jet lag support, immune support. Avoid “fights” or cure language.

4. Popular drips
   - Original Myers
   - Beauty Brain Blend
   - Gone Viral / Immune Support — rename carefully as `Immune Support Drip`; avoid claims to treat viral illness.
   - Replenisher
   - PMS Relief — legal/clinical review needed due medication component.
   - Super Immune — careful copy.

5. NAD+ callout
   - Link to future `/services/nad-iv-therapy` or section.

6. CTA
   - `Book Now`.

---

### `/services/applied-kinesiology`

Status: new.  
Source: Spectra Applied Kinesiology page.  
Purpose: explain Dr. Springer’s root-cause assessment model and associates.

SEO:

- Title: `Applied Kinesiology in Tampa | Spectra Wellness`
- Description: `Non-invasive applied kinesiology and root-cause assessment with Dr. George Springer and the Spectra Wellness team in Tampa.`

Sections:

1. Hero
   - H1: `Non-invasive root-cause assessment of the body as a system.`
   - CTA: `Schedule Applied Kinesiology`

2. What applied kinesiology is
   - Muscle response testing used to assess functional patterns, toxic influences, hormonal/metabolic regulation, and body systems.
   - Add clinical disclaimer: this is complementary/functional assessment and does not replace emergency or conventional diagnostic care.

3. Benefits / focus areas
   - Non-invasive, gut health, energy, hormone balance, muscle restoration, headaches/stress.

4. Meet Dr. Springer
   - Credentials, decades of experience, chronic disease focus, alternative medicine background.

5. Associates
   - Dr. Lesneski and Cari Ruiz summaries if approved.

6. What to expect
   - Intake, initial assessment, Dr. Springer review, plan, follow-up.

7. CTA
   - `Book an appointment`.

---

### `/services/chiropractic-care`

Status: new.  
Source: Spectra Chiropractic Care page.  
Purpose: present upper cervical structural care with Dr. Christine Britt.

SEO:

- Title: `Upper Cervical Chiropractic Care in Tampa | Spectra Wellness`
- Description: `Integrative upper cervical chiropractic care with Dr. Christine Britt at Spectra Wellness in Tampa.`

Sections:

1. Hero
   - H1: `Structural support for clearer brain-body communication.`
   - CTA: `Schedule with Dr. Britt`

2. Whole-body structural approach
   - Upper cervical focus and nervous system communication.

3. Meet Dr. Christine Britt
   - Bio summary, upper cervical/Orthospinology, BGI, pediatric care, Webster technique.

4. Packages
   - Include if pricing is current/approved; otherwise mark as “ask about packages.”

5. What to expect
   - Existing/new patient scheduling, portal, inquiry form.

---

### `/services/hormone-replacement`

Status: new.  
Source: Spectra hormone replacement page.  
Purpose: introduce hormone optimization with careful regulatory language.

SEO:

- Title: `Hormone Replacement Therapy in Tampa | Spectra Wellness`
- Description: `Personalized hormone support and bioidentical hormone therapy options at Spectra Wellness in Tampa Bay.`

Sections:

1. Hero
   - H1: `Personalized hormone support for energy, mood, sleep, and vitality.`

2. Approach
   - Over 20 years of experience, compounded topical therapies, natural pharmaceuticals when appropriate, pellet therapy options.

3. Potential areas of support
   - Mental clarity/energy, libido, body composition, muscle tone, mood, sleep, bone health. Avoid promises.

4. What to expect
   - Assessment, labs, discussion of options, follow-up.

5. CTA
   - Patient portal / new patient inquiry.

---

### `/services/aesthetics-regenerative-wellness`

Status: new.  
Source: Spectra Functional Aesthetics page.  
Purpose: position aesthetics as inside-out, functional, regenerative wellness.

SEO:

- Title: `Functional Aesthetics in Tampa | Spectra Wellness`
- Description: `Functional aesthetics and regenerative wellness in Tampa, combining skin vitality, hormone and gut health, IV support, microneedling, injectables, and regenerative treatments.`

Sections:

1. Hero
   - H1: `Beauty that starts with whole-body vitality.`
   - CTA: `Schedule a Consultation`

2. Why functional aesthetics
   - Surface signs can be connected with deeper imbalances: gut, hormones, inflammation, nutrients, cellular health.

3. Services include
   - Longevity treatments
   - Regenerative cosmetics
   - Hormone optimization
   - Customized supplement plans
   - IV therapies
   - Cosmetic injectables
   - Exosomes & PDGF
   - SkinPen microneedling
   - Hair restoration

4. Natural results / clinical safety
   - Emphasize tailored, conservative, medically guided approach.

---

### `/services/destination-health`

Status: new secondary-priority.  
Source: Spectra Destination Health Immersions.  
Purpose: premium white-glove experience page.

SEO:

- Title: `Destination Health Immersions | Spectra Wellness Tampa`
- Description: `Private, physician-guided health immersions in Tampa with personalized diagnostics, longevity therapies, and focused wellness support.`

Sections:

1. Hero
   - H1: `Not a retreat. A physician-guided health immersion.`

2. Concept
   - Multi-day in-person experience, private, personalized, based on physiology/goals.

3. Who it’s for
   - Comprehensive health reset, persistent/complex concerns, privacy/discretion, out-of-town guests, deeper insight.

4. Levels of immersion
   - Pull details if approved; otherwise placeholder module.

5. CTA
   - `Take the First Step`.

---

### `/services/preventive-cardiology`

Status: new secondary-priority.  
Source: Spectra Preventive Cardiology.  
Purpose: proactive heart-health page.

SEO:

- Title: `Preventive Cardiology | Spectra Wellness Tampa`
- Description: `Advanced diagnostics and functional medicine strategies for proactive heart-health support at Spectra Wellness.`

Sections:

1. Hero
   - H1: `A proactive, root-cause approach to heart health.`

2. Why prevention matters
   - Avoid broad unsupported stats unless cited/approved; keep patient-facing.

3. Approach cards
   - Root-cause focus
   - Lifestyle/nutrition optimization
   - Targeted therapies
   - Advanced diagnostics
   - Collaborative care with cardiology partners

4. Advanced diagnostics
   - CCTA and AI-driven analysis as referral/partnership language, not direct ownership unless confirmed.

5. CTA
   - `Call to book`.

---

### `/services/healing-arts-collective`

Status: new secondary-priority.  
Source: Spectra Healing Arts Collective.  
Purpose: house independent practitioner collective.

SEO:

- Title: `Healing Arts Collective | Spectra Wellness Tampa`
- Description: `A curated collective of independent holistic and integrative practitioners offering rotating one-on-one care at Spectra Wellness.`

Sections:

1. Hero
   - H1: `One trusted space. Many healing modalities.`

2. The concept
   - Different practitioners use dedicated room on rotating days.

3. Booking model
   - Direct booking through each practitioner.

4. Practitioner cards
   - Initial: Dr. Lauren Leiva, DPT — Physical Therapy.
   - Add more only as live page lists/approves them.

5. CTA
   - `Browse practitioners`.

---

### `/team`

Status: new high priority.  
Source: Spectra Team page.  
Purpose: provider trust and scheduling routing.

SEO:

- Title: `Meet the Spectra Wellness Team | Tampa Functional Medicine Providers`
- Description: `Meet the physicians, nurse practitioners, chiropractors, and care partners behind Spectra Wellness in Tampa Bay.`

Sections:

1. Hero
   - H1: `Meet your partners in health.`
   - Copy: collaborative functional medicine providers, advanced testing, whole-person guidance, restore balance, long-term vitality.

2. Provider grid
   - Use `team.ts`.
   - Include credentials, specialties, insurance note, booking CTA.

3. Team approach
   - Explain doctors, wellness team, care managers.

4. FAQ
   - Insurance question: Dr. Galiano and Rodney Morillo accept many PPO policies; no Medicare/Medicare replacements; confirm in-network with insurance company using tax ID if approved.

5. CTA
   - `Call 813-319-0911` / `Contact the Practice`.

---

### `/about`

Status: rewrite.  
Source: Dr. Lisa homepage + Speaker page + Spectra team page.  
Purpose: tell Dr. Lisa’s story and connect it to Spectra.

SEO:

- Title: `About Dr. Lisa Koche | Founder of Spectra Wellness`
- Description: `Meet Dr. Lisa Koche, triple-board-certified physician, founder of Spectra Wellness, speaker, educator, and root-cause medicine advocate.`

Sections:

1. Hero
   - H1: `A physician who understands what it feels like to search for answers.`

2. Mission
   - Science, wisdom, spiritual alignment; understand, advocate, heal.

3. Story
   - Survivor of leukemia and heart failure; frustration with traditional medicine; over two decades helping patients who felt overlooked.

4. Credentials
   - Triple Board Certified
   - Founder / Director of Spectra Wellness
   - Tony Robbins Life Mastery role
   - Research and speaking if approved

5. Spectra philosophy
   - The practice model she built: advanced diagnostics, root-cause medicine, performance therapies, whole-person support.

6. Pathways
   - Become a patient → `/patients` or `/membership`
   - Learn from Dr. Lisa → `/resources`
   - Invite to speak → `/speaking`
   - Explore services → `/services`

---

### `/approach`

Status: rewrite/keep.  
Source: current page + Spectra functional medicine + membership journey.  
Purpose: explain the method.

SEO:

- Title: `Our Approach | Root-Cause Functional Medicine at Spectra Wellness`
- Description: `Understand Spectra Wellness’s patient-centered approach to root-cause care, advanced diagnostics, personalized planning, and long-term vitality.`

Sections:

1. Hero
   - H1: `Understand the pattern. Personalize the plan. Support the whole person.`

2. Core framework
   - Understand → Personalize → Optimize.

3. What we look at
   - Metabolism, hormones, inflammation, gut, toxins, sleep, stress chemistry, movement, nervous system, structure, mitochondrial/cellular health.

4. Membership journey callout
   - Reclaim, Heal, Perform, Transcend.

5. How care connects
   - Functional medicine, primary care, performance center, structural care, aesthetics, healing arts.

6. CTA
   - `Explore Services` / `Book Discovery Call`.

---

### `/patients`

Status: new high priority.  
Source: Spectra Patient Information page.  
Purpose: patient logistics hub.

SEO:

- Title: `Patient Information | Spectra Wellness Tampa`
- Description: `Access patient portal, new patient information, pricing guidance, insurance notes, and forms for Spectra Wellness.`

Sections:

1. Hero
   - H1: `Everything you need before your visit.`

2. Fast links
   - Patient Portal
   - New Patient Forms
   - HIPAA Privacy Policy
   - Pricing List
   - Hormone Application Guide
   - Female/Male Pellet Forms

3. Insurance and pricing
   - Dr. Angeline Galiano and Rodney Morillo accept many PPO policies for primary care; confirm in-network with insurance; all other providers including Dr. Lisa are self-pay; no Medicare or Medicare replacement/advantage plans.

4. Appointment options
   - Call office, new patient inquiry, portal.

5. Privacy / PHI note
   - Do not submit urgent medical issues or protected health info through a static contact form.

6. CTA
   - `Call 813-319-0911`.

---

### `/testimonials`

Status: new.  
Source: Spectra Patient Testimonials page.  
Purpose: social proof.

SEO:

- Title: `Patient Testimonials | Spectra Wellness`
- Description: `Read patient experiences with Spectra Wellness’s functional medicine, chiropractic, primary care, and root-cause wellness team.`

Sections:

1. Hero
   - H1: `Patients who felt heard, supported, and guided.`

2. Testimonial grid
   - Use short excerpts; do not include extreme disease cure claims without approval.
   - Themes: listened to, root cause, team kindness, whole-health picture, comprehensive care.

3. CTA
   - `Start your own conversation`.

---

### `/resources`

Status: new or replace `/insights`.  
Source: Dr. Lisa free resources + Spectra blog.  
Purpose: content hub and lead-magnet hub.

SEO:

- Title: `Resources | Dr. Lisa Koche & Spectra Wellness`
- Description: `Free guides, health education, courses, and recent articles from Dr. Lisa Koche and Spectra Wellness.`

Sections:

1. Hero
   - H1: `Start learning how your body is communicating.`

2. Free resources
   - Foundational Audit
   - Becoming A Biohacker
   - Supplement Guide
   - Ultimate Gift Guide
   - Transform Your Health

3. Courses / guided learning
   - LIT Journey
   - Foundational Framework
   - 11 Pillars modules
   - Keto-Ish if still active

4. Recent articles
   - Afternoon Slump? Fix It Fast
   - Break Free From Hormone Chaos
   - Simple Ancient Ritual That Transforms Oral Health
   - 30 Minute Morning Habit
   - Gut Stuck?
   - Struggling With Low Energy?

5. Newsletter CTA
   - Only static unless email provider is added.

Implementation choice:

- Either create `/resources` and make `/insights` redirect/alias, or rewrite `/insights` as the resource hub.

---

### `/speaking`

Status: rewrite.  
Source: Dr. Lisa Speaker page + homepage speaking section.  
Purpose: speaker inquiry page.

SEO:

- Title: `Book Dr. Lisa Koche as a Speaker | Functional Medicine & Longevity`
- Description: `Invite Dr. Lisa Koche to speak on functional medicine, longevity, performance, sovereignty, mitochondria, and heart-centered leadership.`

Sections:

1. Hero
   - H1: `Transformational speaker and physician educator for health, performance, and leadership.`
   - CTA: `Request Availability`

2. Speaker intro
   - Triple-board-certified physician, best-selling author if approved, integrative/functional medicine expert, two decades of experience, major stages.

3. Audience impact stats
   - Tens of thousands worldwide, 20+ years, notable events: Tony Robbins Summit, AgeMed Conference, Tampa General Hospital, Gasparilla Conference.

4. Topics
   - Sovereign Medicine
   - The LIT Journey
   - Mitochondria / Cell Danger Response
   - Heart-Centered Leadership
   - Micro vs Macro / inner harmony
   - Heart-Brain Harmony

5. Media proof
   - Link to `/media`.

6. Inquiry form
   - Static form or mailto/external route; fields: name, email, event date, subject, message.

---

### `/media`

Status: new.  
Source: Dr. Lisa Media page.  
Purpose: authority proof / press kit.

SEO:

- Title: `Media | Dr. Lisa Koche`
- Description: `Browse Dr. Lisa Koche’s TV, podcast, article, and video appearances on functional medicine, biohacking, hormones, sleep, immunity, and longevity.`

Sections:

1. Hero
   - H1: `Dr. Lisa in the media.`

2. Featured video / social proof
   - Placeholder if no approved embed.

3. Media grid
   - Categorize links from live page:
     - TV: WTSP, WFLA, NBC New York, ABC Action News, News4Jax, Cheddar
     - Podcasts: Get Yourself Optimized, Myers Detox, Be Well by Kelly, etc.
     - Articles: Well+Good, Everyday Health, Reader’s Digest, Eat This
     - Videos/PDFs: Vimeo, S3, Google Drive assets if approved

4. Speaking CTA
   - `Invite Dr. Lisa`.

---

### `/contact`

Status: rewrite.  
Source: Spectra footer/contact details + Dr. Lisa contact/speaker context.  
Purpose: route patient, membership, speaking/media, and general inquiries.

SEO:

- Title: `Contact Spectra Wellness | Tampa Functional Medicine Practice`
- Description: `Contact Spectra Wellness in Tampa for patient inquiries, membership discovery calls, appointments, speaking requests, and general questions.`

Sections:

1. Hero
   - H1: `Start with the right conversation.`

2. Contact cards
   - Become a patient
   - Membership discovery
   - Book a performance therapy
   - Speaking/media inquiry
   - General question

3. Practice details
   - Phone: `(813) 319-0911`
   - Email: `hello@spectrawellness.com`
   - Address: `504 N Reo St, Tampa, FL 33609`

4. Patient portal / appointment links
   - Patient Portal
   - Mindbody for performance therapies
   - Provider Match / new patient inquiry if desired

5. Static form
   - Keep no backend; replace button label `Send Static Inquiry` with `Prepare Inquiry` or remove form until backend is selected.

6. PHI and urgent-care note
   - Do not submit protected health information or urgent medical concerns through this form; call office or emergency services as appropriate.

---

### `/privacy`, `/terms`, `/disclaimer`

Status: placeholders; needs legal review.

Implementation notes:

- Keep pages but update copy minimally.
- Do not invent legal language beyond a standard informational disclaimer.
- Add “last updated” once approved.
- Link from footer.

---

## 8. Navigation implementation

Update `Header.astro` navItems:

```ts
const navItems = [
  { label: "Services", href: "/services" },
  { label: "Membership", href: "/membership" },
  { label: "Team", href: "/team" },
  { label: "Patients", href: "/patients" },
  { label: "Resources", href: "/resources" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
];
```

Active-state logic should account for nested services:

```ts
const isActive = (href: string) => {
  if (href === "/services") return activePath === "/services" || activePath.startsWith("/services/");
  if (href === "/resources") return activePath === "/resources" || activePath.startsWith("/resources/") || activePath === "/insights";
  return activePath === href;
};
```

Footer groups:

- Care: Services, Membership, Functional Medicine, Performance & Longevity, IV Nutrition, Applied Kinesiology
- Patients: Patient Information, Patient Portal, Appointments, Testimonials, Contact
- Dr. Lisa: About, Resources, Speaking, Media, Favorites
- Legal: Privacy, Terms, Medical Disclaimer
- Connect: LinkedIn, Instagram, YouTube, Facebook if approved

---

## 9. Images and assets needed

Existing repo has Dr. Lisa headshot and Dr. Lisa logo. Add assets only if rights are confirmed.

Needed image inventory:

1. Dr. Lisa portrait — homepage/about/speaking.
2. Spectra clinic exterior or interior — homepage/contact/patients.
3. Team headshots — `/team`.
4. Performance Center therapy imagery — `/services/performance-longevity`.
5. IV therapy room or infusion detail — `/services/iv-nutrition`.
6. Applied kinesiology/provider assessment image — `/services/applied-kinesiology`.
7. Chiropractic/structural care image — `/services/chiropractic-care`.
8. Aesthetics/regenerative skincare image — `/services/aesthetics-regenerative-wellness`.
9. Destination Health/luxury wellness imagery — `/services/destination-health`.
10. Media/speaking stage image — `/speaking` and `/media`.

Use alt text patterns:

- `Dr. Lisa Koche, founder of Spectra Wellness`
- `Spectra Wellness treatment room in Tampa`
- `Functional medicine provider reviewing wellness plan with patient`
- `Performance and longevity therapy room at Spectra Wellness`
- `IV nutrition therapy setup at Spectra Wellness`

Avoid purely decorative alt text for meaningful photos. Use empty alt only for duplicated/decorative background images.

---

## 10. Medical/legal content rules

1. Prefer “support,” “help,” “may,” “designed to,” and “intended to” over “cure,” “fix,” “reverse,” “heal disease,” or “guarantee.”
2. Avoid direct claims that therapies treat or prevent specific diseases unless reviewed and supported.
3. For testimonials, use short excerpts or thematic summaries; avoid unverified cure narratives.
4. IV immune drip copy should avoid claiming to treat colds, flu, viral infections, autoimmune disorders, or acute illness.
5. Hormone replacement copy should note individualized provider review.
6. Applied kinesiology copy should present it as functional/complementary assessment and not a replacement for urgent/conventional diagnostics.
7. Contact forms should include a PHI disclaimer and should not imply secure patient communication unless backend is HIPAA-reviewed.
8. Pricing, included membership benefits, and insurance notes should be marked as “confirm before launch.”

---

## 11. Suggested implementation order for Codex

1. Inspect repo and confirm current routes/components.
2. Add `src/data/services.ts`, `src/data/team.ts`, `src/data/resources.ts`, `src/data/testimonials.ts`, `src/data/media.ts`.
3. Add `ServiceCard`, `ServiceDetail`, `TeamMemberCard`, `ResourceCard`, `TestimonialCard`, `MediaGrid` components.
4. Update Header/Footer navigation.
5. Rewrite `/` homepage.
6. Add `/services` and priority service details.
7. Add `/membership`.
8. Add `/team`, `/patients`, `/testimonials`.
9. Rewrite `/about`, `/approach`, `/speaking`, `/contact`.
10. Add `/resources` and `/media`; optionally alias `/insights` to `/resources` or repurpose it.
11. Update legal placeholders enough for launch-review state.
12. Run `npm run build` and fix errors.
13. Use local browser extension to visually QA desktop/mobile at `http://127.0.0.1:4321/`.

---

## 12. Codex prompt

Paste this into Codex from the repo root:

```text
You are working in the Astro repo `zackes3639/spectra-refresh`.

Goal:
Expand the current static refresh site into a fuller Spectra Wellness / Dr. Lisa Koche site using the implementation spec in this prompt as source of truth.

Hard constraints:
- Reuse the existing design system, components, tokens, typography, colors, spacing, cards, gradients, and button styles.
- Do not redesign the whole site.
- Do not add a UI library.
- Use Astro static pages and data files.
- Rewrite/polish content from the live sites rather than copying verbatim unless exact migration is explicitly authorized.
- Keep medical copy responsible. Avoid cure claims, guaranteed outcomes, disease-treatment promises, or unsafe advice.
- Mark pricing, insurance, and membership inclusions as requiring final confirmation if used.
- Do not connect form processing or PHI workflows.
- Add SEO title and description for every new page.
- Add accessible headings, meaningful alt text placeholders, and internal links.
- After implementation, run `npm run build` and fix any errors.

Implementation order:
1. Inspect the repo and summarize framework, routing pattern, styling system, reusable components, data pattern, and build command.
2. Add data files: services, team, testimonials, resources, media.
3. Add reusable components: ServiceCard, ServiceDetail, TeamMemberCard, ResourceCard, TestimonialCard, MediaGrid.
4. Update Header and Footer navigation to practice-first IA: Services, Membership, Team, Patients, Resources, Speaking, Contact.
5. Rewrite the homepage as a unified Spectra Wellness practice homepage with Dr. Lisa authority.
6. Add `/services`, `/membership`, and priority service pages: functional medicine, performance-longevity, IV nutrition, applied kinesiology, chiropractic care, hormone replacement, aesthetics-regenerative-wellness.
7. Add `/team`, `/patients`, `/testimonials`.
8. Rewrite `/about`, `/approach`, `/speaking`, `/contact`.
9. Add `/resources` and `/media`. Decide whether `/insights` becomes an alias/resource hub or remains as a legacy path.
10. Lightly update `/privacy`, `/terms`, and `/disclaimer` so they are no longer obvious placeholders, but leave detailed legal language for review.
11. Run `npm run build` and fix issues.
12. Use the Codex browser extension to QA the local dev server at `http://127.0.0.1:4321/` for layout, nav, broken links, and responsive behavior.

Use the page-by-page section requirements from the attached implementation spec.
```

---

## 13. Launch QA checklist

- [ ] `npm install` succeeds with Node >=22.12.0.
- [ ] `npm run build` succeeds.
- [ ] Header links resolve.
- [ ] Footer links resolve.
- [ ] No placeholder “static concept” copy remains on production pages.
- [ ] No page promises cures, guaranteed outcomes, or disease reversal.
- [ ] All external booking links are current.
- [ ] Phone/email/address are correct.
- [ ] Insurance notes are confirmed.
- [ ] Membership inclusions and pricing are confirmed.
- [ ] Legal pages reviewed.
- [ ] Images are licensed/approved.
- [ ] Alt text is meaningful.
- [ ] Mobile nav works.
- [ ] Core routes pass Lighthouse/accessibility sanity check.
- [ ] Contact page includes PHI/urgent-care disclaimer if form remains static.

