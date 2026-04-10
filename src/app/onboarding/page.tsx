"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const STEPS = ["Contact", "Business", "Checkout", "Done"];

const INCLUSIONS = [
  {
    icon: "\u{1F310}",
    title: "Custom Peptide Website",
    desc: "Professional, mobile-ready site sa sarili mong domain",
    value: "\u20B125,000",
  },
  {
    icon: "\u{1F4E6}",
    title: "Automated Product Catalog",
    desc: "Customers browse & buy without messaging you",
    value: "\u20B18,000",
  },
  {
    icon: "\u{1F52C}",
    title: "COA Auto-Display System",
    desc: "Certificates of Analysis viewable anytime",
    value: "\u20B15,000",
  },
  {
    icon: "\u{1F9EE}",
    title: "Peptide Calculator & Protocols",
    desc: "Reconstitution calculator built into your site",
    value: "\u20B17,000",
  },
  {
    icon: "\u2753",
    title: "FAQ Page",
    desc: "Common questions answered automatically",
    value: "\u20B13,000",
  },
  {
    icon: "\u{1F4CA}",
    title: "Inventory Management System",
    desc: "Real-time stock tracking, walang overselling",
    value: "\u20B15,000",
  },
  {
    icon: "\u{1F4CB}",
    title: "Order Tracking System",
    desc: "Customers check order status on their own",
    value: "\u20B15,000",
  },
  {
    icon: "\u{1F465}",
    title: "CRM Setup & Integration",
    desc: "Manage customers and orders in one dashboard",
    value: "\u20B18,000",
  },
];

const CHANNELS = [
  { id: "telegram", label: "Telegram" },
  { id: "viber", label: "Viber" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "messenger", label: "Messenger" },
];

const INQUIRY_RANGES = [
  "1 - 10 inquiries",
  "11 - 30 inquiries",
  "31 - 50 inquiries",
  "51 - 100 inquiries",
  "100+ inquiries",
];

const ORDER_RANGES = [
  "1 - 5 orders",
  "6 - 15 orders",
  "16 - 30 orders",
  "31 - 50 orders",
  "50+ orders",
];

const PRODUCT_RANGES = [
  "1 - 10 products",
  "11 - 25 products",
  "26 - 50 products",
  "51 - 100 products",
  "100+ products",
];

function ProgressStepper({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-1 md:gap-2">
      {STEPS.map((step, i) => (
        <div key={step} className="flex items-center gap-1 md:gap-2">
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all ${
              i + 1 < current
                ? "bg-[#ec4899] text-white"
                : i + 1 === current
                ? "bg-[#ec4899] text-white ring-4 ring-[#ec4899]/20"
                : "bg-zinc-800 text-zinc-500"
            }`}
          >
            {i + 1 < current ? "\u2713" : i + 1}
          </div>
          <span
            className={`hidden text-xs font-bold md:block ${
              i + 1 <= current ? "text-white" : "text-zinc-600"
            }`}
          >
            {step}
          </span>
          {i < STEPS.length - 1 && (
            <div
              className={`h-0.5 w-6 md:w-12 ${
                i + 1 < current ? "bg-[#ec4899]" : "bg-zinc-800"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function OnboardingPage() {
  const router = useRouter();
  const [brandName, setBrandName] = useState("");
  const [channels, setChannels] = useState<string[]>([]);
  const [inquiries, setInquiries] = useState("");
  const [orders, setOrders] = useState("");
  const [products, setProducts] = useState("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("funnelData");
    if (!data) {
      router.push("/");
      return;
    }
    setReady(true);
  }, [router]);

  const toggleChannel = (id: string) => {
    setChannels((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (channels.length === 0) return;
    const existing = JSON.parse(localStorage.getItem("funnelData") || "{}");
    localStorage.setItem(
      "funnelData",
      JSON.stringify({
        ...existing,
        brandName,
        channels,
        inquiries,
        orders,
        products,
      })
    );
    router.push("/checkout");
  };

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <ProgressStepper current={2} />
        </div>
      </header>

      <main className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#ec4899]">
              Step 2 of 4
            </p>
            <h1 className="mb-4 text-3xl font-extrabold md:text-5xl">
              Here&apos;s Everything You&apos;re Getting
            </h1>
            <p className="text-lg text-zinc-400">
              Review your package, then tell us about your brand.
            </p>
          </div>

          {/* Package Inclusions */}
          <div className="mb-16">
            <h2 className="mb-6 text-center text-lg font-bold text-zinc-300">
              &#9989; Your Complete Package — &#8369;66,000+ Value
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {INCLUSIONS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
                >
                  <span className="mt-0.5 text-2xl">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold leading-tight">{item.title}</h3>
                      <span className="shrink-0 text-sm font-bold text-zinc-500 line-through">
                        {item.value}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-[#ec4899]/30 bg-[#ec4899]/5 p-5 text-center">
              <p className="text-sm font-bold text-zinc-400">
                All of this for just
              </p>
              <p className="text-4xl font-black tracking-tight text-[#ec4899]">
                &#8369;9,499
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                One-time payment. No monthly fees.
              </p>
            </div>
          </div>

          {/* Business Details Form */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-10">
            <h2 className="mb-2 text-2xl font-extrabold">
              Tell Us About Your Brand
            </h2>
            <p className="mb-8 text-sm text-zinc-400">
              We need a few details para ma-customize ang system mo.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Brand Name */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Brand Name
                </label>
                <input
                  type="text"
                  required
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g. PeptidePH, Boss Peptides"
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white transition-colors placeholder:text-zinc-600 focus:border-[#ec4899] focus:outline-none focus:ring-1 focus:ring-[#ec4899]"
                />
              </div>

              {/* Messaging Channel */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Messaging Channel/s You Use
                </label>
                <p className="mb-3 text-xs text-zinc-500">
                  Select all that apply — saan ka nag-rereceive ng inquiries?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {CHANNELS.map((ch) => (
                    <button
                      key={ch.id}
                      type="button"
                      onClick={() => toggleChannel(ch.id)}
                      className={`rounded-lg border px-4 py-3 text-sm font-bold transition-all ${
                        channels.includes(ch.id)
                          ? "border-[#ec4899] bg-[#ec4899]/10 text-[#ec4899]"
                          : "border-zinc-700 bg-zinc-800/50 text-zinc-400 hover:border-zinc-600"
                      }`}
                    >
                      {ch.label}
                    </button>
                  ))}
                </div>
                {channels.length === 0 && (
                  <p className="mt-2 text-xs text-zinc-600">
                    * Please select at least one channel
                  </p>
                )}
              </div>

              {/* Daily Inquiries */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                  How Many Inquiries Do You Receive Per Day?
                </label>
                <select
                  required
                  value={inquiries}
                  onChange={(e) => setInquiries(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white transition-colors focus:border-[#ec4899] focus:outline-none focus:ring-1 focus:ring-[#ec4899]"
                >
                  <option value="" disabled>
                    Select a range...
                  </option>
                  {INQUIRY_RANGES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Daily Orders */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                  How Many Orders Do You Get Per Day?
                </label>
                <select
                  required
                  value={orders}
                  onChange={(e) => setOrders(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white transition-colors focus:border-[#ec4899] focus:outline-none focus:ring-1 focus:ring-[#ec4899]"
                >
                  <option value="" disabled>
                    Select a range...
                  </option>
                  {ORDER_RANGES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Count */}
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                  How Many Products Do You Sell?
                </label>
                <select
                  required
                  value={products}
                  onChange={(e) => setProducts(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-white transition-colors focus:border-[#ec4899] focus:outline-none focus:ring-1 focus:ring-[#ec4899]"
                >
                  <option value="" disabled>
                    Select a range...
                  </option>
                  {PRODUCT_RANGES.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-lg bg-[#ec4899] py-4 text-lg font-black uppercase text-white shadow-[0_6px_0_0_#9d174d] transition-all hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              >
                CONTINUE TO CHECKOUT &#10140;
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
