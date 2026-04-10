"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const STEPS = ["Contact", "Business", "Checkout", "Done"];
const BASE_PRICE = 9499;

const UPSELLS = [
  {
    id: "images",
    price: 3000,
    title: "Professional Product Images",
    tag: "MOST POPULAR",
    description:
      "We transform ALL your products into high-quality, professional product photos — up to 60+ images. Perfect for your new website, social media, and ads.",
    features: [
      "Up to 60+ professional product shots",
      "Clean white background + lifestyle mockups",
      "Optimized for web & social media",
      "Ready within 5 business days",
    ],
  },
  {
    id: "email",
    price: 7000,
    title: "Automated Email Marketing",
    tag: "HIGH ROI",
    description:
      "Stay on top of your customers' minds with automated email campaigns — order confirmations, product updates, newsletters, and promotional blasts.",
    features: [
      "Automated order confirmation emails",
      "Customer email notifications",
      "Monthly newsletter setup",
      "Promotional campaign templates",
    ],
  },
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

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedUpsells, setSelectedUpsells] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("funnelData");
    if (!data) {
      router.push("/");
      return;
    }
    const parsed = JSON.parse(data);
    if (!parsed.brandName) {
      router.push("/onboarding");
      return;
    }
    setReady(true);
  }, [router]);

  const toggleUpsell = (id: string) => {
    setSelectedUpsells((prev) =>
      prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id]
    );
  };

  const upsellTotal = UPSELLS.filter((u) =>
    selectedUpsells.includes(u.id)
  ).reduce((sum, u) => sum + u.price, 0);
  const grandTotal = BASE_PRICE + upsellTotal;

  const handleConfirm = () => {
    const existing = JSON.parse(localStorage.getItem("funnelData") || "{}");
    localStorage.setItem(
      "funnelData",
      JSON.stringify({
        ...existing,
        upsellImages: selectedUpsells.includes("images"),
        upsellEmail: selectedUpsells.includes("email"),
        totalAmount: grandTotal,
      })
    );
    router.push("/thank-you");
  };

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <ProgressStepper current={3} />
        </div>
      </header>

      <main className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#ec4899]">
              Step 3 of 4
            </p>
            <h1 className="mb-4 text-3xl font-extrabold md:text-5xl">
              Upgrade Your Package
            </h1>
            <p className="text-lg text-zinc-400">
              Optional add-ons to maximize your system. Choose what fits your
              needs.
            </p>
          </div>

          {/* Upsells */}
          <div className="mb-12 space-y-6">
            {UPSELLS.map((upsell) => {
              const selected = selectedUpsells.includes(upsell.id);
              return (
                <div
                  key={upsell.id}
                  className={`relative overflow-hidden rounded-2xl border-2 p-6 transition-all md:p-8 ${
                    selected
                      ? "border-[#ec4899] bg-[#ec4899]/5"
                      : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-700"
                  }`}
                >
                  {/* Tag */}
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <span className="mb-2 inline-block rounded-full bg-[#ec4899]/10 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#ec4899]">
                        {upsell.tag}
                      </span>
                      <h3 className="mt-2 text-xl font-extrabold md:text-2xl">
                        {upsell.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black text-[#ec4899] md:text-3xl">
                        +&#8369;
                        {upsell.price.toLocaleString()}
                      </p>
                      <p className="text-xs text-zinc-500">one-time</p>
                    </div>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                    {upsell.description}
                  </p>

                  <div className="mb-6 grid gap-2 md:grid-cols-2">
                    {upsell.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-sm text-zinc-300"
                      >
                        <span className="text-[#ec4899]">&#10004;</span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleUpsell(upsell.id)}
                    className={`w-full rounded-lg py-3 text-sm font-black uppercase transition-all ${
                      selected
                        ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                        : "bg-[#ec4899] text-white shadow-[0_4px_0_0_#9d174d] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
                    }`}
                  >
                    {selected
                      ? "\u2713 ADDED — CLICK TO REMOVE"
                      : `ADD FOR \u20B1${upsell.price.toLocaleString()}`}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
            <h2 className="mb-6 text-xl font-extrabold">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-zinc-300">
                <span>Peptide Automated Seller System</span>
                <span className="font-bold">
                  &#8369;{BASE_PRICE.toLocaleString()}
                </span>
              </div>
              {selectedUpsells.includes("images") && (
                <div className="flex items-center justify-between text-zinc-300">
                  <span>+ Professional Product Images</span>
                  <span className="font-bold">&#8369;3,000</span>
                </div>
              )}
              {selectedUpsells.includes("email") && (
                <div className="flex items-center justify-between text-zinc-300">
                  <span>+ Automated Email Marketing</span>
                  <span className="font-bold">&#8369;7,000</span>
                </div>
              )}
              <div className="border-t border-zinc-700 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold">Total</span>
                  <span className="text-3xl font-black text-[#ec4899]">
                    &#8369;{grandTotal.toLocaleString()}
                  </span>
                </div>
                <p className="mt-1 text-right text-xs text-zinc-500">
                  One-time payment. No hidden fees.
                </p>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
            <h2 className="mb-6 text-xl font-extrabold">Payment Methods</h2>
            <p className="mb-6 text-sm text-zinc-400">
              Choose your preferred payment method and scan the QR code to
              complete your payment.
            </p>

            <div className="mb-8 grid gap-4 md:grid-cols-3">
              {/* GCash */}
              <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 text-center">
                <div className="mb-2 text-3xl">&#128179;</div>
                <h3 className="font-bold text-white">GCash</h3>
                <p className="mt-1 text-xs text-zinc-400">
                  Send to: 09928214519
                </p>
                <p className="text-xs text-zinc-500">Account: PASS Admin</p>
              </div>

              {/* Maya */}
              <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 text-center">
                <div className="mb-2 text-3xl">&#128176;</div>
                <h3 className="font-bold text-white">Maya</h3>
                <p className="mt-1 text-xs text-zinc-400">
                  Send to: 09928214519
                </p>
                <p className="text-xs text-zinc-500">Account: PASS Admin</p>
              </div>

              {/* Bank Transfer */}
              <div className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-5 text-center">
                <div className="mb-2 text-3xl">&#127974;</div>
                <h3 className="font-bold text-white">Bank Transfer</h3>
                <p className="mt-1 text-xs text-zinc-400">
                  BDO / BPI / UnionBank
                </p>
                <p className="text-xs text-zinc-500">
                  Acct #: XXXX-XXXX-XXXX
                </p>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="rounded-xl border border-dashed border-zinc-700 bg-zinc-800/30 p-8">
              <p className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-zinc-500">
                Scan QR Code to Pay
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
                  <p className="mb-3 text-center text-sm font-black uppercase tracking-[0.2em] text-[#ec4899]">
                    GCash
                  </p>
                  <div className="overflow-hidden rounded-2xl bg-white">
                    <Image
                      src="/gcash-qr.jpg"
                      alt="GCash QR code for payment"
                      width={400}
                      height={710}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-4">
                  <p className="mb-3 text-center text-sm font-black uppercase tracking-[0.2em] text-[#ec4899]">
                    Maya
                  </p>
                  <div className="overflow-hidden rounded-2xl bg-white">
                    <Image
                      src="/maya-qr.jpg"
                      alt="Maya QR code for payment"
                      width={643}
                      height={812}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-zinc-400">Amount to pay:</p>
                <p className="text-3xl font-black text-[#ec4899]">
                  &#8369;{grandTotal.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className="w-full rounded-xl bg-[#ec4899] py-6 text-xl font-black uppercase text-white shadow-[0_8px_0_0_#9d174d] transition-all hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
          >
            I&apos;VE COMPLETED MY PAYMENT &#10140;
          </button>
          <p className="mt-4 text-center text-xs text-zinc-500">
            After clicking, you&apos;ll be redirected to confirm your order via
            WhatsApp.
          </p>
        </div>
      </main>
    </div>
  );
}
