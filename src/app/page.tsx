export default function Home() {
  const features = [
    {
      title: "Ordering System",
      description: "Clients order directly. No chat needed.",
    },
    {
      title: "COA Display",
      description: "Accessible anytime. No more manual sending.",
    },
    {
      title: "Live Inventory",
      description: "They see what's in stock without asking you.",
    },
    {
      title: "Order Tracking",
      description: "Clients check their order status themselves.",
    },
    {
      title: "Peptide Calculator",
      description: "Dosage info built right into your site.",
    },
    {
      title: "FAQ Page",
      description: "Common questions answered before they message you.",
    },
  ];

  const offerBullets = [
    "Your own branded website",
    "Ordering, COA, inventory, tracking, calculator, FAQ — all included",
    "Done-for-you — we build it, you own it",
  ];

  const testimonials = [
    { quote: "Placeholder testimonial — replace with real client feedback.", name: "Seller Name" },
    { quote: "Placeholder testimonial — replace with real client feedback.", name: "Seller Name" },
    { quote: "Placeholder testimonial — replace with real client feedback.", name: "Seller Name" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* SECTION 1: HERO */}
      <section className="bg-white px-6 py-16 md:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
              Para sa peptide sellers na pagod nang maging customer support
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Magbenta Ng Peptides 24/7 — Kahit Tulog Ka.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Your own branded peptide website — with everything your clients need to order without
              messaging you first.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#offer"
                className="inline-block rounded-xl bg-amber-500 px-7 py-4 text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg"
              >
                Get Your Website Now
              </a>
              <p className="text-sm text-slate-500">Starts at ₱9,499 · Ready in 7 days</p>
            </div>
          </div>

          {/* Right: Mockup placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center text-slate-400">
              <p className="text-base font-medium">Website mockup placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PAIN BULLETS */}
      <section className="bg-slate-950 px-6 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              `"May stock pa ba?" — the same question, 50 times a day`,
              "Sending COAs manually every time someone asks",
              "Kapag offline ka, walang bumibili",
            ].map((text) => (
              <div
                key={text}
                className="rounded-2xl border border-rose-900/40 bg-rose-950/30 p-6"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-rose-500/20 text-lg font-bold text-rose-400">
                  !
                </div>
                <p className="leading-7 text-slate-200">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT THEY GET */}
      <section className="bg-white px-6 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Everything Your Peptide Business Needs — In One Website.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-base font-bold text-slate-950">{feature.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SOCIAL PROOF STRIP */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-16 md:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-10 text-center text-lg font-semibold text-slate-700">
            X+ peptide sellers already using this system
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="leading-7 text-slate-600 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-300" />
                  <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: OFFER + CTA */}
      <section id="offer" className="bg-slate-950 px-6 py-16 text-white md:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Get Your Peptide Website — Ready In 7 Days.
          </h2>
          <p className="mt-6 text-6xl font-extrabold text-amber-400">₱9,499</p>
          <ul className="mt-8 space-y-3 text-left">
            {offerBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-sm font-bold text-amber-400">
                  ✓
                </span>
                <span className="text-base leading-7 text-slate-200">{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="#offer"
              className="inline-block rounded-xl bg-amber-500 px-8 py-4 text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-lg"
            >
              Get Your Website Now
            </a>
            <p className="text-sm text-slate-400">Done-for-you. You own it. No monthly fees.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
