# Homepage Funnel Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the homepage from a 10-section lead-magnet funnel into a 5-section Hormozi-style direct offer page selling a done-for-you peptide website.

**Architecture:** Single-page rewrite of `src/app/page.tsx`. No new routes, no new components, no new dependencies. The page is one server component with 5 sections. CTA buttons use anchor links to scroll to the offer section.

**Tech Stack:** Next.js 16, Tailwind CSS 4, Geist fonts (all already configured).

---

## File Structure

| File | Action | Responsibility |
|------|--------|----------------|
| `src/app/page.tsx` | Rewrite | Entire homepage — all 5 sections |
| `src/app/globals.css` | No change | Already configured correctly |
| `src/app/layout.tsx` | No change | Already configured correctly |

This is a single-file rewrite. The page is simple enough that extracting components would be premature. All sections live in one file.

---

### Task 1: Replace page.tsx with Hero section

**Files:**
- Rewrite: `src/app/page.tsx`

- [ ] **Step 1: Replace entire page.tsx with the Hero section**

Replace the entire contents of `src/app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
              Para sa peptide sellers na pagod nang maging customer support
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Magbenta Ng Peptides 24/7 — Kahit Tulog Ka.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Your own branded peptide website — with everything your clients need to order without messaging you first.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#offer"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-amber-500/25 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl"
              >
                Get Your Website Now
              </a>
              <p className="text-sm text-slate-500">
                Starts at ₱9,499 · Ready in 7 days
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="aspect-[4/3] w-full max-w-lg rounded-3xl border border-slate-200 bg-slate-100 flex items-center justify-center">
              <p className="text-sm text-slate-400">Website mockup placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify it renders**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: replace homepage with Hero section (funnel redesign)"
```

---

### Task 2: Add Pain Bullets section

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add Pain Bullets section after the Hero closing `</section>` tag**

Insert this block immediately after the `{/* HERO */}` section's closing `</section>` tag, before the closing `</div>`:

```tsx
      {/* PAIN BULLETS */}
      <section className="bg-slate-950 px-6 py-16 md:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            {
              icon: "!",
              text: '"May stock pa ba?" — the same question, 50 times a day',
            },
            {
              icon: "!",
              text: "Sending COAs manually every time someone asks",
            },
            {
              icon: "!",
              text: "Kapag offline ka, walang bumibili",
            },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-sm font-bold text-rose-400">
                {item.icon}
              </div>
              <p className="leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
```

- [ ] **Step 2: Verify it renders**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add Pain Bullets section to homepage"
```

---

### Task 3: Add What They Get section

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add What They Get section after the Pain Bullets closing `</section>` tag**

Insert this block immediately after the `{/* PAIN BULLETS */}` section's closing `</section>` tag:

```tsx
      {/* WHAT THEY GET */}
      <section className="bg-white px-6 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Everything Your Peptide Business Needs — In One Website.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Ordering System",
                desc: "Clients order directly. No chat needed.",
              },
              {
                title: "COA Display",
                desc: "Accessible anytime. No more manual sending.",
              },
              {
                title: "Live Inventory",
                desc: "They see what's in stock without asking you.",
              },
              {
                title: "Order Tracking",
                desc: "Clients check their order status themselves.",
              },
              {
                title: "Peptide Calculator",
                desc: "Dosage info built right into your site.",
              },
              {
                title: "FAQ Page",
                desc: "Common questions answered before they message you.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Verify it renders**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add What They Get feature grid section"
```

---

### Task 4: Add Social Proof section

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add Social Proof section after the What They Get closing `</section>` tag**

Insert this block immediately after the `{/* WHAT THEY GET */}` section's closing `</section>` tag:

```tsx
      {/* SOCIAL PROOF */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-lg font-semibold text-slate-950">
            40+ peptide sellers already using this system
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Seller Name",
                quote:
                  "Placeholder testimonial — replace with real client feedback.",
              },
              {
                name: "Seller Name",
                quote:
                  "Placeholder testimonial — replace with real client feedback.",
              },
              {
                name: "Seller Name",
                quote:
                  "Placeholder testimonial — replace with real client feedback.",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="leading-7 text-slate-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
```

- [ ] **Step 2: Verify it renders**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add Social Proof section with placeholders"
```

---

### Task 5: Add Offer + CTA section

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Add Offer + CTA section after the Social Proof closing `</section>` tag**

Insert this block immediately after the `{/* SOCIAL PROOF */}` section's closing `</section>` tag:

```tsx
      {/* OFFER + CTA */}
      <section id="offer" className="bg-slate-950 px-6 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Get Your Peptide Website — Ready In 7 Days.
          </h2>
          <p className="mx-auto mt-8 text-6xl font-bold tracking-tight text-amber-400 md:text-7xl">
            ₱9,499
          </p>
          <div className="mx-auto mt-8 max-w-md space-y-3 text-left">
            {[
              "Your own branded website",
              "Ordering, COA, inventory, tracking, calculator, FAQ — all included",
              "Done-for-you — we build it, you own it",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">
                  &#10003;
                </div>
                <p className="leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="mt-10 inline-flex items-center justify-center rounded-2xl bg-amber-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-amber-500/25 transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl"
          >
            Get Your Website Now
          </a>
          <p className="mt-4 text-sm text-slate-400">
            Done-for-you. You own it. No monthly fees.
          </p>
        </div>
      </section>
```

- [ ] **Step 2: Verify it renders**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: add Offer + CTA section (the close)"
```

---

### Task 6: Final verification

**Files:**
- Read: `src/app/page.tsx`

- [ ] **Step 1: Run the dev server and verify all 5 sections render correctly**

Run: `npm run dev`

Check:
1. Hero section loads above the fold with headline, subheadline, CTA, and placeholder mockup
2. Pain Bullets section has dark background with 3 cards
3. What They Get section has 6 feature cards in a grid
4. Social Proof section has 3 placeholder testimonial cards
5. Offer section has large price, bullet recap, and CTA button
6. Hero CTA scrolls to the `#offer` section
7. No navigation bar, no header links visible
8. Page looks correct on mobile (responsive)

- [ ] **Step 2: Run the production build**

Run: `npm run build`
Expected: Build succeeds with no errors or warnings.

- [ ] **Step 3: Final commit if any fixes were needed**

```bash
git add src/app/page.tsx
git commit -m "fix: final adjustments to homepage funnel"
```
