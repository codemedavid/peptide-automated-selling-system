"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const openPopup = () => setShowPopup(true);

  const handlePopupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(
      "funnelData",
      JSON.stringify({ name, email, phone })
    );
    router.push("/onboarding");
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* LEAD CAPTURE POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md animate-[fadeInUp_0.3s_ease-out] rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-2xl shadow-pink-500/10">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-4 top-4 text-zinc-500 transition-colors hover:text-white"
              aria-label="Close"
            >
              &#10005;
            </button>

            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ec4899] to-[#9d174d]">
                <span className="text-3xl">&#9889;</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Let&apos;s Get You Started!
              </h3>
              <p className="mt-2 text-sm text-zinc-400">
                Fill in your details para masimulan na ang setup ng system mo.
              </p>
            </div>

            <form onSubmit={handlePopupSubmit} className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Juan Dela Cruz"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white transition-colors placeholder:text-zinc-600 focus:border-[#ec4899] focus:outline-none focus:ring-1 focus:ring-[#ec4899]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="juan@email.com"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white transition-colors placeholder:text-zinc-600 focus:border-[#ec4899] focus:outline-none focus:ring-1 focus:ring-[#ec4899]"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0917 xxx xxxx"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white transition-colors placeholder:text-zinc-600 focus:border-[#ec4899] focus:outline-none focus:ring-1 focus:ring-[#ec4899]"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-[#ec4899] py-4 text-lg font-black uppercase text-white shadow-[0_6px_0_0_#9d174d] transition-all hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              >
                PROCEED TO SETUP &#10140;
              </button>
              <p className="text-center text-xs text-zinc-500">
                &#128274; 100% secure. Hindi namin i-spam ang email mo.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* TOP BAR */}
      <header className="bg-black px-6 py-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Mobile: only brand name */}
          <div className="flex items-center gap-2">
            <div className="rounded bg-white/10 p-2">
              <span className="text-xl text-pink-500">&#9878;</span>
            </div>
            <span className="text-xl font-black italic tracking-tighter">
              PEPTIDE SELLER
            </span>
          </div>
          {/* Desktop only: trust bar + support */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full border-2 border-black bg-zinc-600" />
              <div className="h-8 w-8 rounded-full border-2 border-black bg-zinc-500" />
              <div className="h-8 w-8 rounded-full border-2 border-black bg-zinc-400" />
            </div>
            <div className="text-[10px] font-bold uppercase leading-none">
              <div className="mb-0.5 text-pink-300">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <div className="text-zinc-400">Trusted by top sellers &amp; entrepreneurs</div>
            </div>
          </div>
          <div className="hidden text-right md:block">
            <p className="text-xs font-bold text-zinc-400">Need Help with your order?</p>
            <p className="text-sm font-black">support@peptideseller.ph</p>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="px-6 py-16 text-center md:py-24">
          <div className="mx-auto max-w-5xl">
            <h1 className="mb-6 text-3xl font-extrabold leading-[1.2] md:text-5xl">
              Stop Answering The Same Questions Everyday — Hayaan Mong{" "}
              <span className="text-[#ec4899]">System Mo Na Ang Magbenta Ng Peptides Mo.</span>
            </h1>
            <p className="mx-auto mb-12 max-w-3xl text-lg font-bold italic text-zinc-600 md:text-xl">
              ...sarili mong website kung saan kita agad ang products, COA, at stock — walang need mag-message sa&apos;yo.
            </p>

            {/* Hero Mockup */}
            <div className="relative mx-auto mb-8 max-w-3xl">
              <Image
                src="/mockup.png"
                alt="Peptide Seller Automation System preview"
                width={800}
                height={600}
                className="rounded-2xl"
                priority
              />
            </div>

            <p className="mb-8 text-lg font-black italic">
              &gt;&gt; 40+ peptide sellers ang hindi na nagrereply ng &ldquo;may stock pa ba?&rdquo; buong araw &lt;&lt;
            </p>

            {/* CTA Button — 3D style */}
            <div className="mx-auto max-w-2xl">
              <button
                onClick={openPopup}
                className="flex w-full flex-col items-center justify-center gap-1 rounded-lg bg-[#ec4899] px-8 py-6 text-white shadow-[0_10px_0_0_#9d174d] transition-all active:translate-y-1 active:shadow-none hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2 text-xl font-black uppercase md:text-2xl">
                  GET YOUR OWN WEBSITE FOR JUST ₱9,899 &#10140;
                </span>
                <span className="text-xs font-bold opacity-90 md:text-sm">
                  Done-for-you · Ready in 7 Days · 100% Satisfaction Guarantee
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* 1. PATTERN INTERRUPT */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ec4899]">
              Honest question lang...
            </p>
            <h2 className="mb-8 text-4xl font-extrabold leading-[1.15] md:text-6xl">
              Pagod ka na ba maging{" "}
              <span className="text-[#ec4899]">24/7 customer service</span> ng
              sarili mong peptide business?
            </h2>
            <p className="text-xl leading-relaxed text-zinc-500 md:text-2xl">
              Araw-araw, paulit-ulit. &ldquo;Available pa ba
              &rsquo;to?&rdquo; &ldquo;Patingin ng COA.&rdquo;
              &ldquo;Magkano &rsquo;yung BPC?&rdquo; &ldquo;Pano
              i-reconstitute?&rdquo; — tapos ikaw pa rin ang
              nag-rereply. Isa-isa. Mano-mano. Buong araw. Buong gabi.
            </p>
          </div>
        </section>

        {/* 2. ITO KA BA? */}
        <section className="bg-zinc-950 px-6 py-20 text-white md:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center text-sm font-black uppercase tracking-[0.25em] text-[#ec4899]">
              Real talk
            </h2>
            <h3 className="mb-12 text-center text-4xl font-extrabold md:text-5xl">
              Ito ka ba?
            </h3>
            <div className="space-y-5">
              {[
                "Nag-rereply ka pa rin ng 11PM sa Whatsapp/Telegram dahil baka mawala ang buyer.",
                "Paulit-ulit mong sinasend ang parehong COA sa iba\u2019t ibang tao \u2014 copy-paste, send, copy-paste, send.",
                "Nag-ccheck ka ng stock mo sa isang spreadsheet na hindi na updated since last week.",
                "Nakakalimutan mo na mag-reply sa ibang customers kasi ang dami ng messages.",
                "Feeling mo ikaw na ang pinaka-murang virtual assistant ng sarili mong negosyo.",
                "Gusto mo na mag-scale pero paano \u2014 ikaw lang naman ang gumagalaw sa lahat.",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 px-6 py-5"
                >
                  <span className="mt-0.5 text-lg text-[#ec4899]">
                    &#10003;
                  </span>
                  <p className="text-lg leading-relaxed text-zinc-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-center text-xl font-bold text-zinc-400">
              Kung kahit <span className="text-white">isa</span> diyan nag-hit
              sa&rsquo;yo — keep reading.
            </p>
          </div>
        </section>

        {/* 3. THE REAL COST (AGITATION) */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ec4899]">
              Kwentahin natin
            </h2>
            <h3 className="mb-10 text-4xl font-extrabold md:text-5xl">
              Alam mo ba kung magkano ang{" "}
              <span className="underline decoration-[#ec4899] decoration-4 underline-offset-8">
                totoong gastos
              </span>{" "}
              ng ginagawa mo ngayon?
            </h3>
            <div className="mb-10 rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg md:p-12">
              <div className="space-y-6 text-left text-lg text-zinc-600">
                <p>
                  Let&rsquo;s say nag-aanswer ka ng inquiries{" "}
                  <span className="font-black text-zinc-900">
                    3 hours a day
                  </span>
                  .
                </p>
                <p>
                  That&rsquo;s{" "}
                  <span className="font-black text-zinc-900">
                    90 hours a month
                  </span>{" "}
                  na ginugugol mo sa pagsagot ng parehong tanong,
                  paulit-ulit.
                </p>
                <p>
                  90 hours — that&rsquo;s more than{" "}
                  <span className="font-black text-zinc-900">
                    2 full work weeks
                  </span>
                  .
                </p>
                <div className="rounded-xl bg-[#ec4899]/5 p-6">
                  <p className="font-bold text-zinc-900">
                    Kung ang oras mo worth ₱500/hr lang (mababa pa
                    &rsquo;yan for a business owner)...
                  </p>
                  <p className="mt-2 text-3xl font-black text-[#ec4899] md:text-4xl">
                    ₱45,000/month ang sinusunog mo sa manual replies.
                  </p>
                </div>
                <p className="text-zinc-500">
                  Hindi pa kasama diyan ang mga customer na{" "}
                  <span className="font-bold text-zinc-700">
                    na-miss mo na sana bumili
                  </span>{" "}
                  — kasi late ka na nag-reply, or tulog ka na nung
                  nag-message sila.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE UNCOMFORTABLE TRUTH */}
        <section className="bg-zinc-950 px-6 py-20 text-white md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-extrabold leading-tight md:text-5xl">
              Here&rsquo;s the uncomfortable truth:
            </h2>
            <p className="mb-6 text-2xl leading-relaxed text-zinc-300 md:text-3xl">
              Hindi ka business owner right now.
            </p>
            <p className="text-2xl leading-relaxed text-zinc-300 md:text-3xl">
              You&rsquo;re a{" "}
              <span className="font-black text-[#ec4899]">
                glorified chat support agent
              </span>{" "}
              na nagkataon lang na ikaw din ang boss.
            </p>
            <div className="mx-auto mt-12 max-w-xl rounded-xl border border-zinc-800 bg-zinc-900 p-8">
              <p className="text-lg leading-relaxed text-zinc-400">
                Ang business mo —{" "}
                <span className="text-white">ikaw ang bottleneck</span>.
                Kapag tulog ka, walang bumebenta. Kapag busy ka, walang
                sumasagot. Kapag nagkasakit ka, buong operation mo{" "}
                <span className="text-white">humihinto</span>.
              </p>
            </div>
            <p className="mt-10 text-xl font-bold text-zinc-500">
              At hindi dapat ganyan ang takbo ng negosyo.
            </p>
          </div>
        </section>

        {/* 5. DREAM OUTCOME */}
        <section className="relative overflow-hidden px-6 py-20 md:py-28">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#ec4899]/5 via-white to-white" />
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ec4899]">
              Now imagine this
            </h2>
            <h3 className="mb-12 text-4xl font-extrabold md:text-5xl">
              Paano kung ganito na lang ang buhay mo?
            </h3>
            <div className="space-y-6 text-left">
              {[
                {
                  icon: "\u{1F305}",
                  text: "Gumising ka ng umaga \u2014 may 3 orders na sa dashboard mo. Hindi ka nag-reply kahit isang message.",
                },
                {
                  icon: "\u{1F52C}",
                  text: "Customers mo mismo ang tumingin ng products, nag-check ng COA, nag-compute ng dosage sa calculator \u2014 all on YOUR website.",
                },
                {
                  icon: "\u{1F4E6}",
                  text: "Ang inventory mo, updated real-time. Walang overselling, walang \"sorry, out of stock na pala.\"",
                },
                {
                  icon: "\u{1F4AC}",
                  text: "Yung mga common questions \u2014 \"Paano i-reconstitute?\" \"Anong protocol?\" \u2014 nasasagot na ng FAQ page mo. Walang kinakausap.",
                },
                {
                  icon: "\u{1F3D6}\uFE0F",
                  text: "Ikaw? Nag-iisip ka na kung paano mag-scale \u2014 hindi kung paano mag-survive sa dami ng messages.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 rounded-xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-xl font-bold text-zinc-900">
              Hindi &rsquo;to fantasy. Ito ang ginagawa ng system namin{" "}
              <span className="text-[#ec4899]">right now</span> para sa mga
              sellers na nag-switch na.
            </p>
          </div>
        </section>

        {/* 6. THE SOLUTION */}
        <section className="bg-zinc-950 px-6 py-20 text-white md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ec4899]">
              Introducing
            </h2>
            <h3 className="mb-8 text-4xl font-extrabold md:text-6xl">
              Your Own Automated{" "}
              <span className="text-[#ec4899]">Peptide Selling System</span>
            </h3>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-zinc-400">
              Hindi lang &rsquo;to website. Ito ang{" "}
              <span className="font-bold text-white">
                complete selling machine
              </span>{" "}
              mo — built specifically para sa peptide sellers na gusto
              nang tumigil maging full-time chat support at mag-start maging{" "}
              <span className="font-bold text-white">
                actual business owner
              </span>
              .
            </p>
            <div className="mx-auto mt-12 grid max-w-xl gap-4 text-left md:grid-cols-2">
              {[
                "Customers see your products instantly",
                "COA accessible anytime \u2014 no sending needed",
                "Built-in peptide calculator & protocols",
                "FAQ page answers common questions",
                "Inventory managed in one place",
                "Orders tracked automatically",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-4 py-3"
                >
                  <span className="text-[#ec4899]">&#10004;</span>
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. VALUE STACK */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <h2 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#ec4899]">
                The value stack
              </h2>
              <h3 className="mb-4 text-4xl font-extrabold md:text-5xl">
                Ito lahat ang makukuha mo
              </h3>
              <p className="mb-12 text-lg text-zinc-500">
                Break down natin para makita mo kung gaano kalaki ang value.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  name: "Custom Peptide Website sa sarili mong domain",
                  value: "\u20B125,000",
                  desc: "Professional, mobile-ready, built for conversions",
                },
                {
                  name: "Automated Product Catalog",
                  value: "\u20B18,000",
                  desc: "Customers browse & buy without messaging you",
                },
                {
                  name: "COA Auto-Display System",
                  value: "\u20B15,000",
                  desc: "Certificates of Analysis \u2014 viewable anytime, no manual sending",
                },
                {
                  name: "Peptide Calculator & Protocols",
                  value: "\u20B17,000",
                  desc: "Reconstitution calculator at dosage protocols built into your site",
                },
                {
                  name: "FAQ Page",
                  value: "\u20B13,000",
                  desc: "Common questions answered automatically \u2014 fewer messages sa inbox mo",
                },
                {
                  name: "Inventory Management System",
                  value: "\u20B15,000",
                  desc: "Real-time stock tracking, walang overselling",
                },
                {
                  name: "Order Tracking System",
                  value: "\u20B15,000",
                  desc: "Customers check their order status on their own",
                },
                {
                  name: "CRM Setup & Integration",
                  value: "\u20B18,000",
                  desc: "Manage your customers and orders in one dashboard",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between gap-3 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm md:flex-row md:items-center"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-bold">{item.name}</h4>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                  <span className="whitespace-nowrap text-lg font-black text-zinc-400 line-through">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border-2 border-[#ec4899] bg-[#ec4899]/5 p-8 text-center md:p-12">
              <p className="mb-2 text-lg font-bold text-zinc-600">
                Total Value:
              </p>
              <p className="mb-1 text-2xl font-black text-zinc-400 line-through">
                ₱66,000+
              </p>
              <p className="mb-4 text-lg font-bold text-zinc-600">
                You get EVERYTHING for just:
              </p>
              <p className="text-6xl font-black tracking-tight text-[#ec4899] md:text-8xl">
                ₱9,899
              </p>
              <p className="mt-2 text-sm font-bold text-zinc-500">
                One-time lang. Walang monthly. Walang hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* 8. BAKIT GANITO KA-MURA? */}
        <section className="bg-[#f3f3f3] px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-4xl font-extrabold md:text-5xl">
              &ldquo;Bakit ganito ka-mura?&rdquo;
            </h2>
            <div className="space-y-6 text-left text-lg leading-relaxed text-zinc-600">
              <p>
                Fair question. Kasi ang typical cost ng ganitong system?{" "}
                <span className="font-bold text-zinc-900">
                  ₱50,000 to ₱100,000+
                </span>{" "}
                kung magpapa-custom dev ka.
              </p>
              <p>Simple lang ang reason:</p>
              <p className="rounded-xl border border-zinc-200 bg-white p-6 text-xl font-bold text-zinc-900">
                Gusto ko tumulong sa mga peptide sellers na mag-grow —{" "}
                <span className="text-[#ec4899]">
                  nang hindi sinisira ang bulsa nila
                </span>
                .
              </p>
              <p>
                Alam ko ang struggle. Alam ko na karamihan sa inyo, nag-start
                lang &rsquo;to as side hustle. Tapos lumaki. Tapos ngayon
                trapped ka na sa sarili mong system na hindi naman talaga
                system.
              </p>
              <p>
                Kaya ginawa ko &rsquo;tong{" "}
                <span className="font-bold text-zinc-900">accessible</span>{" "}
                — para kahit nag-uumpisa ka pa lang, kaya mo nang
                mag-operate like a professional seller from day one.
              </p>
            </div>
          </div>
        </section>

        {/* 9. OBJECTION HANDLING */}
        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center text-sm font-black uppercase tracking-[0.25em] text-[#ec4899]">
              Bago ka mag-decide
            </h2>
            <h3 className="mb-12 text-center text-4xl font-extrabold md:text-5xl">
              Siguro iniisip mo...
            </h3>
            <div className="space-y-6">
              {[
                {
                  q: "\"Hindi ako techy. Kaya ko ba 'to?\"",
                  a: "Kami ang gagawa ng lahat. From setup to deployment \u2014 ikaw mag-provide lang ng details at content. Pagka-turnover, may dashboard ka na para sa updates. Kung marunong ka mag-Facebook, kaya mo \u2019to.",
                },
                {
                  q: "\"Mas prefer ng customers ko mag-message.\"",
                  a: "Pwede pa rin sila mag-message. Pero ang beauty nito \u2014 marami sa kanila ang hindi na kailangang mag-message pa. Makikita na nila products, COA, prices, at protocols sa site mo. Yung mga talagang interested, sila na lang ang mag-reach out. Less noise, more buyers.",
                },
                {
                  q: "\"Meron na akong Shopee / Lazada naman.\"",
                  a: "Sa Shopee, hindi mo kontrolado ang customer experience. Hindi mo makikita ang data nila. Hindi mo ma-build ang brand mo. Dito \u2014 sarili mong platform, sarili mong rules, sarili mong customer base. At walang commission per sale.",
                },
                {
                  q: "\"Baka hindi naman mag-work sa market ko.\"",
                  a: "Kung may bumibili ng peptides sa\u2019yo right now through chat \u2014 mag-work \u2019to. Kasi ang ginagawa lang namin is i-systematize yung proseso na ginagawa mo na. Instead na ikaw ang sumasagot, ang website mo na.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
                >
                  <p className="mb-4 text-xl font-black text-zinc-900">
                    {item.q}
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-600">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. SOCIAL PROOF */}
        <section className="bg-zinc-950 px-6 py-20 text-white md:py-28">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-4 text-center text-sm font-black uppercase tracking-[0.25em] text-[#ec4899]">
              Real results
            </h2>
            <h3 className="mb-12 text-center text-4xl font-extrabold md:text-5xl">
              Hindi lang salita &rsquo;to
            </h3>
            <div className="space-y-8">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 md:p-10">
                <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                  May client ako — itago natin sa name na{" "}
                  <span className="font-bold text-white">
                    &ldquo;Boss M&rdquo;
                  </span>
                  . Peptide reseller siya sa Visayas. Dati,{" "}
                  <span className="font-bold text-white">
                    halos 6 hours a day
                  </span>{" "}
                  siya naka-phone — answering inquiries, sending COAs,
                  explaining reconstitution instructions. Paulit-ulit. Parang
                  sirang plaka.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                  After we set up his system?{" "}
                  <span className="font-bold text-[#ec4899]">
                    30 minutes a week na lang ang ginugugol niya sa
                    &ldquo;support&rdquo;
                  </span>
                  . Yung mga customers niya, nag-browse na lang sa site,
                  nakita ang products, nag-check ng COA, nag-compute ng dosage
                  — tapos nag-order. On their own.
                </p>
                <p className="text-lg leading-relaxed text-zinc-300">
                  Sabi niya sa&rsquo;kin:{" "}
                  <span className="font-bold italic text-white">
                    &ldquo;OMG sissy, nakakapag netflix and chill nako habang hinihintay ko nalang may pumasok na orders sakin&rdquo;
                  </span>
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 md:p-10">
                <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                  Another one —{" "}
                  <span className="font-bold text-white">
                    &ldquo;Boss J&rdquo;
                  </span>
                  , NCR-based seller. Ang main problem niya? Nakakalimutan
                  niyang mag-reply sa customers kasi ang dami ng messages.
                  Lost sales every week.
                </p>
                <p className="text-lg leading-relaxed text-zinc-300">
                  Ngayon?{" "}
                  <span className="font-bold text-[#ec4899]">
                    Customers order directly sa site niya
                  </span>
                  . Walang na-miss na transaction. Walang &ldquo;sorry, hindi
                  ko nakita message mo.&rdquo; Nag-increase ng{" "}
                  <span className="font-bold text-white">
                    40% ang monthly revenue niya
                  </span>{" "}
                  in the first month — not because of more marketing,
                  but because wala nang natatapong buyer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. SALES LETTER CTA */}
        <section className="relative overflow-hidden px-6 py-20 text-center md:py-28">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#ec4899]/5 to-white" />
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Dalawang klaseng tao lang ang umabot dito.
            </h2>
            <p className="mb-4 text-xl text-zinc-600">
              Yung mag-sscroll pa pababa, tapos babalik sa Whatsapp/Telegram mag-reply
              ng isa pang &ldquo;Available pa po!&rdquo;...
            </p>
            <p className="mb-12 text-xl font-bold text-zinc-900">
              At yung mag-aaction na today para hindi na &rsquo;yun maulit
              bukas.
            </p>
            <div className="mx-auto max-w-2xl">
              <button
                onClick={openPopup}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-[#ec4899] px-8 py-8 text-white shadow-[0_10px_0_0_#9d174d] transition-all hover:-translate-y-1 active:translate-y-1 active:shadow-none"
              >
                <span className="flex items-center gap-2 text-xl font-black uppercase md:text-2xl">
                  KUNIN ANG SYSTEM MO FOR JUST ₱9,899 &#10140;
                </span>
                <span className="text-sm font-bold opacity-90">
                  One-time payment. Custom-built para sa brand mo.
                </span>
              </button>
            </div>
            <p className="mt-8 text-sm font-bold text-zinc-400">
              Limited slots lang — custom deployment kasi bawat site.
            </p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-zinc-950 px-8 py-12 text-sm tracking-wide text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-xl font-bold italic text-pink-500">
            Peptide Automated Seller
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-zinc-400 transition-colors hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="text-zinc-400 transition-colors hover:text-white" href="#">
              Terms of Service
            </a>
            <a className="text-zinc-400 transition-colors hover:text-white" href="#">
              Contact Support
            </a>
          </div>
          <div className="text-center text-zinc-500 md:text-right">
            © 2024 Peptide Automated Seller. Built for Pinoy Entrepreneurs.
          </div>
        </div>
      </footer>
    </div>
  );
}
