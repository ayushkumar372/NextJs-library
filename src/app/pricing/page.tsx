import Link from "next/link";

const features = [
  "All 50+ components",
  "All 12 showcase design packs",
  "Premium buttons, cards, forms",
  "Glassmorphism, Neon, Gaming UI",
  "Gradients, 3D, Animations",
  "Heroes, Navbars, Neumorphism",
  "Lifetime updates — forever",
  "Priority support",
  "Figma design files",
  "Full source code access",
  "Copy-paste code snippets",
  "Commercial license included",
  "Team-friendly — use on unlimited projects",
];

const faqs = [
  {
    q: "What does 'lifetime' mean?",
    a: "You pay once and get access forever. No monthly fees, no yearly renewals. All future components and updates are included at no extra cost.",
  },
  {
    q: "Can I use this for commercial projects?",
    a: "Yes! The ₹69 plan includes a commercial license. Use it for client work, SaaS products, or any commercial project.",
  },
  {
    q: "Do I get the source code?",
    a: "Absolutely! You get full source code for every component and every showcase design. Copy, paste, and customize however you want.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, credit/debit cards, net banking, and all major wallets through Razorpay.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied, we'll refund your payment — no questions asked.",
  },
  {
    q: "How many projects can I use this in?",
    a: "Unlimited! Once you buy, you can use the components in as many personal or commercial projects as you want.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-400">
            One Simple Plan
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Just{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              ₹69
            </span>
            . Forever.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-slate-400">
            One payment. Lifetime access. Get every component, every showcase
            design pack, every future update. No subscriptions, no hidden fees.
          </p>
        </div>

        {/* Single Pricing Card */}
        <div className="mx-auto mt-16 max-w-lg">
          <div className="relative rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 p-[2px] shadow-2xl shadow-violet-500/30">
            <div className="relative rounded-[14px] bg-slate-950 p-10">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 px-5 py-1.5 text-xs font-bold text-white shadow-lg">
                LIFETIME ACCESS
              </span>

              <div className="mt-4 text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-extrabold text-white">₹69</span>
                  <span className="text-xl text-slate-500">/lifetime</span>
                </div>
                <p className="mt-2 text-slate-400">
                  One payment. Everything included. Forever.
                </p>
              </div>

              <div className="my-8 h-px bg-slate-800" />

              <ul className="space-y-3">
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-slate-300"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-10 w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-600 py-4 text-lg font-bold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-xl hover:shadow-violet-500/40">
                Get Lifetime Access — ₹69
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                7-day money-back guarantee. No questions asked.
              </p>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500">
            Trusted by 100,000+ developers worldwide
          </p>
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-8">
            {[
              { label: "Secure Payment", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
              { label: "7-Day Refund", icon: "M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" },
              { label: "Instant Access", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { label: "Lifetime Updates", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                <svg
                  className="h-5 w-5 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={badge.icon}
                  />
                </svg>
                {badge.label}
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-white">
            What&apos;s Included
          </h2>
          <p className="mt-3 text-center text-slate-400">
            Every showcase pack, every component, every design — all for ₹69
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Premium Buttons", count: "12 designs", gradient: "from-violet-500 to-purple-600" },
              { name: "Glassmorphism", count: "10 designs", gradient: "from-pink-500 to-purple-600" },
              { name: "Gaming UI", count: "8 designs", gradient: "from-red-500 to-orange-600" },
              { name: "Neon Effects", count: "9 designs", gradient: "from-cyan-500 to-blue-600" },
              { name: "Gradients", count: "10 designs", gradient: "from-emerald-500 to-teal-600" },
              { name: "Premium Cards", count: "10 designs", gradient: "from-amber-500 to-orange-600" },
              { name: "Premium Forms", count: "8 designs", gradient: "from-rose-500 to-pink-600" },
              { name: "Animations", count: "8 designs", gradient: "from-indigo-500 to-violet-600" },
              { name: "3D & Depth", count: "8 designs", gradient: "from-blue-500 to-cyan-600" },
              { name: "Hero Sections", count: "7 designs", gradient: "from-fuchsia-500 to-pink-600" },
              { name: "Navbars", count: "8 designs", gradient: "from-lime-500 to-emerald-600" },
              { name: "Neumorphism", count: "7 designs", gradient: "from-slate-400 to-slate-600" },
            ].map((pack) => (
              <Link
                key={pack.name}
                href={`/showcase/${pack.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="group rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-slate-700 hover:shadow-lg"
              >
                <div
                  className={`mb-3 h-2 w-12 rounded-full bg-gradient-to-r ${pack.gradient} transition-all group-hover:w-20`}
                />
                <h3 className="text-sm font-semibold text-white">
                  {pack.name}
                </h3>
                <p className="mt-0.5 text-xs text-slate-500">{pack.count}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* What You Get vs Others */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-white">
            Why ReactUI Library?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "No Subscriptions",
                desc: "Pay once, own forever. Unlike other libraries that charge monthly or yearly, we believe in one fair price.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Production Ready",
                desc: "Every component is battle-tested, responsive, and accessible. Drop them into your project and they just work.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Copy & Paste",
                desc: "No complex setup or dependencies. Just copy the code, paste it in your project, and customize to your needs.",
                icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
              },
              {
                title: "100+ Designs",
                desc: "From glassmorphism to gaming UI, neon effects to neumorphism — 12 complete showcase packs with 100+ unique designs.",
                icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z",
              },
              {
                title: "Lifetime Updates",
                desc: "We're constantly adding new components and designs. Every update is free, forever. Your ₹69 keeps giving.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "Priority Support",
                desc: "Get help when you need it. Our team is here to assist with integration, customization, and any questions.",
                icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700"
              >
                <svg
                  className="h-8 w-8 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={item.icon}
                  />
                </svg>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="font-semibold text-white">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-2xl bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 p-12">
            <h2 className="text-3xl font-bold text-white">
              Ready to build something amazing?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-slate-400">
              Get lifetime access to all 50+ components and 100+ showcase
              designs for just ₹69. Start building today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-600 px-10 py-3.5 text-lg font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-xl hover:shadow-violet-500/40 sm:w-auto">
                Get Lifetime Access — ₹69
              </button>
              <Link
                href="/showcase"
                className="w-full rounded-xl border border-slate-700 px-10 py-3.5 text-lg font-semibold text-slate-300 transition hover:bg-slate-800 sm:w-auto"
              >
                Browse Showcases
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
