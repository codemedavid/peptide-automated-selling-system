# Homepage Funnel Redesign — Hormozi Minimal Direct Offer

**Date:** 2026-03-31
**Status:** Approved
**Approach:** Hormozi Minimal — strip to 5 sections, direct-to-offer (no lead magnet)

---

## Context

The current homepage is a lead-magnet funnel with ~10 sections, 3 opt-in forms, and dense Taglish copy. It's overwhelming and doesn't convert well. The redesign strips it to a direct offer page selling a done-for-you peptide website.

## Target Audience

Filipino peptide resellers who sell via chat (Messenger, Telegram, WhatsApp). They are busy, mobile-first, and tired of being the bottleneck in their business.

## Offer

- **Main offer (₱9,499):** Done-for-you branded peptide website with ordering system, COA display, live inventory, order tracking, peptide calculator, FAQ page.
- **Upsell (₱15,499):** Everything above + email marketing automation + added functionality (details TBD, user will define later).
- **Delivery:** 7 days.

## Design Principles

- Hormozi $100M Offers framework: dream outcome + low time delay + low effort + high likelihood of success
- One page, one offer, one action
- No navigation, no header links, no distractions
- Mobile-first (audience comes from social/chat apps)
- Copy: Taglish headline, English body/subheadline mix
- Max 5 sections
- 2 CTAs total (hero + final section)
- One accent color for CTA buttons (high contrast)
- Dark + white section alternation for visual rhythm

## Page Structure

### Section 1: Hero (Above the Fold)

**Layout:** Two columns on desktop (copy left, placeholder visual right). Single column stacked on mobile.

**Copy:**
- Pre-headline badge: `Para sa peptide sellers na pagod nang maging customer support`
- Headline: `Magbenta Ng Peptides 24/7 — Kahit Tulog Ka.`
- Subheadline: `Your own branded peptide website — with everything your clients need to order without messaging you first.`
- CTA Button: `Get Your Website Now`
- Microcopy: `Starts at ₱9,499 · Ready in 7 days`

**No form in the hero.** CTA scrolls to the offer/pricing section at the bottom.

**Design notes:**
- No nav bar, no logo link, no header links
- Headline is the largest text on the page (4xl-6xl)
- CTA button is high-contrast accent color (orange/amber on dark or white bg)
- Right column: placeholder image/mockup of the branded website product

### Section 2: Pain Bullets

**Layout:** Dark background (slate-950). 3 cards in a horizontal row on desktop, stacked on mobile. No section header.

**Cards:**
1. `"May stock pa ba?" — the same question, 50 times a day`
2. `Sending COAs manually every time someone asks`
3. `Kapag offline ka, walang bumibili`

**Design notes:**
- Each card has a subtle rose/red accent icon (warning style)
- Short, gut-punch copy — no elaboration
- No CTA in this section

### Section 3: What They Get

**Layout:** White background. Section header centered, then 2x3 grid of feature cards.

**Header:** `Everything Your Peptide Business Needs — In One Website.`

**6 feature cards:**
1. **Ordering System** — Clients order directly. No chat needed.
2. **COA Display** — Accessible anytime. No more manual sending.
3. **Live Inventory** — They see what's in stock without asking you.
4. **Order Tracking** — Clients check their order status themselves.
5. **Peptide Calculator** — Dosage info built right into your site.
6. **FAQ Page** — Common questions answered before they message you.

**Design notes:**
- Each card: icon/visual + bold title + one-line description
- Clean, minimal cards with subtle borders
- No CTA in this section

### Section 4: Social Proof Strip

**Layout:** Light/neutral background. Horizontal row.

**Content (placeholder):**
- Counter: `X+ peptide sellers already using this system`
- 2-3 testimonial cards with placeholder avatars and quote text
- Will be replaced with real testimonials later

**Design notes:**
- Placeholder images for avatars
- Placeholder text for quotes
- Section should be easy to update later

### Section 5: Offer + CTA (The Close)

**Layout:** Dark background (slate-950). Centered content.

**Copy:**
- Header: `Get Your Peptide Website — Ready In 7 Days.`
- Price: `₱9,499` (large, bold, prominent)
- Bullet recap (3 lines):
  - Your own branded website
  - Ordering, COA, inventory, tracking, calculator, FAQ — all included
  - Done-for-you — we build it, you own it
- CTA Button: `Get Your Website Now`
- Microcopy: `Done-for-you. You own it. No monthly fees.`

**Design notes:**
- Price is the visual anchor — large and impossible to miss
- CTA button same accent color as hero CTA
- This is where the conversion happens

## Technical Notes

- Framework: Next.js 16 (already set up)
- Styling: Tailwind CSS 4 (already set up)
- Fonts: Geist Sans + Geist Mono (already set up)
- Single page — `src/app/page.tsx` rewrite
- No new dependencies needed
- No backend/API for now — CTA button can link to external payment/booking page or be wired up later
- Social proof section uses placeholder images (no external image dependencies)

## What's NOT in scope

- Upsell page (user will define later)
- Payment integration
- Email capture / newsletter
- Backend API
- Analytics / tracking
- The actual blueprint PDF (removed from the funnel)

## Color Direction

- Background alternation: white → dark (slate-950) → white → neutral → dark
- One accent color for all CTA buttons (amber/orange for high contrast)
- Teal accent from current design is removed — too soft for a direct offer page
- Text: slate-950 on light, white on dark
