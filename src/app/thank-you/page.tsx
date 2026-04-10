"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const STEPS = ["Contact", "Business", "Checkout", "Done"];

interface FunnelData {
  name: string;
  email: string;
  phone: string;
  brandName: string;
  channels: string[];
  inquiries: string;
  orders: string;
  products: string;
  upsellImages: boolean;
  upsellEmail: boolean;
  totalAmount: number;
}

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

function buildWhatsAppURL(data: FunnelData): string {
  const lines = [
    `Hi! I just signed up for the Peptide Automated Seller System.`,
    ``,
    `*My Details:*`,
    `- Name: ${data.name}`,
    `- Email: ${data.email}`,
    `- Phone: ${data.phone}`,
    ``,
    `*Business Details:*`,
    `- Brand Name: ${data.brandName}`,
    `- Messaging Channel(s): ${data.channels.join(", ")}`,
    `- Daily Inquiries: ${data.inquiries}`,
    `- Daily Orders: ${data.orders}`,
    `- Products: ${data.products}`,
    ``,
    `*Package:*`,
    `- Base System: \u20B19,499`,
  ];

  if (data.upsellImages) {
    lines.push(`- + Professional Product Images: \u20B13,000`);
  }
  if (data.upsellEmail) {
    lines.push(`- + Automated Email Marketing: \u20B15,000`);
  }

  lines.push(
    ``,
    `*Total Amount: \u20B1${data.totalAmount.toLocaleString()}*`,
    ``,
    `Looking forward to getting started! \u{1F680}`
  );

  const message = encodeURIComponent(lines.join("\n"));
  // Replace with your actual WhatsApp number (country code + number, no dashes)
  const whatsappNumber = "639XXXXXXXXX";
  return `https://wa.me/${whatsappNumber}?text=${message}`;
}

export default function ThankYouPage() {
  const router = useRouter();
  const [data, setData] = useState<FunnelData | null>(null);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const stored = localStorage.getItem("funnelData");
    if (!stored) {
      router.push("/");
      return;
    }
    const parsed = JSON.parse(stored) as FunnelData;
    if (!parsed.totalAmount) {
      router.push("/checkout");
      return;
    }
    setData(parsed);
  }, [router]);

  useEffect(() => {
    if (!data) return;
    if (countdown <= 0) {
      window.open(buildWhatsAppURL(data), "_blank");
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [data, countdown]);

  if (!data) return null;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <ProgressStepper current={5} />
        </div>
      </header>

      <main className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          {/* Success Icon */}
          <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#ec4899] to-[#9d174d] shadow-lg shadow-[#ec4899]/20">
            <span className="text-5xl">&#10003;</span>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold md:text-5xl">
            Salamat, {data.name}!
          </h1>
          <p className="mb-2 text-xl text-zinc-300">
            Your sign-up has been received.
          </p>
          <p className="mb-12 text-lg text-zinc-500">
            Our admin will review your details and get back to you within 24
            hours.
          </p>

          {/* Order Recap */}
          <div className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-left md:p-8">
            <h2 className="mb-5 text-lg font-extrabold">
              &#128196; Your Order Summary
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Brand Name</span>
                <span className="font-bold">{data.brandName}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Channel(s)</span>
                <span className="font-bold">{data.channels.join(", ")}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Daily Inquiries</span>
                <span className="font-bold">{data.inquiries}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Daily Orders</span>
                <span className="font-bold">{data.orders}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-3">
                <span className="text-zinc-400">Products</span>
                <span className="font-bold">{data.products}</span>
              </div>

              <div className="pt-2">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-zinc-500">
                  Package
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-zinc-300">Base System</span>
                    <span className="font-bold">&#8369;9,499</span>
                  </div>
                  {data.upsellImages && (
                    <div className="flex justify-between">
                      <span className="text-zinc-300">
                        + Professional Product Images
                      </span>
                      <span className="font-bold">&#8369;3,000</span>
                    </div>
                  )}
                  {data.upsellEmail && (
                    <div className="flex justify-between">
                      <span className="text-zinc-300">
                        + Automated Email Marketing
                      </span>
                      <span className="font-bold">&#8369;5,000</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-zinc-700 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold">Total Paid</span>
                  <span className="text-2xl font-black text-[#ec4899]">
                    &#8369;{data.totalAmount.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Redirect */}
          <div className="rounded-2xl border border-[#ec4899]/30 bg-[#ec4899]/5 p-6 md:p-8">
            <p className="mb-4 text-sm text-zinc-400">
              {countdown > 0
                ? `Redirecting you to WhatsApp in ${countdown} seconds...`
                : "Redirected! Click below if a new window didn't open."}
            </p>
            <a
              href={buildWhatsAppURL(data)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-black uppercase text-white shadow-[0_6px_0_0_#128C7E] transition-all hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              SEND DETAILS VIA WHATSAPP
            </a>
          </div>

          {/* What's Next */}
          <div className="mt-12 text-left">
            <h2 className="mb-6 text-center text-lg font-extrabold">
              &#128640; What Happens Next?
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Admin Reviews Your Details",
                  desc: "Our team will verify your payment and review your business details within 24 hours.",
                },
                {
                  step: "2",
                  title: "We Start Building Your System",
                  desc: "Once confirmed, we immediately start setting up your custom peptide selling system.",
                },
                {
                  step: "3",
                  title: "Your System Goes Live",
                  desc: "Within 7 days, your complete automated system will be ready — and you can stop being 24/7 chat support.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ec4899]/10 text-sm font-black text-[#ec4899]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
