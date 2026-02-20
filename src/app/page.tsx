import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "ReactUI Library - Premium React Components and Design Showcases";
const description =
  "Build stunning interfaces faster with ReactUI Library. Get production-ready React components, premium design showcases, and developer-first documentation.";

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  title,
  description,
  keywords: [
    "react component library",
    "ui components",
    "tailwind components",
    "nextjs ui kit",
    "frontend design system",
  ],
});

const features = [
  {
    title: "50+ Components",
    description:
      "A rich collection of pre-built, customizable components ready for production.",
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  },
  {
    title: "Fully Accessible",
    description:
      "Built with WAI-ARIA standards. Keyboard navigation and screen reader support.",
    icon: "M10 12a2 2 0 100-4 2 2 0 000 4z M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10z",
  },
  {
    title: "TypeScript First",
    description:
      "Full TypeScript support with auto-completion and type safety.",
    icon: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
  },
  {
    title: "Themeable",
    description:
      "Easily customize the look and feel. Dark mode, custom colors, and CSS variables.",
    icon: "M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486z",
  },
  {
    title: "Responsive",
    description:
      "Every component works seamlessly on mobile, tablet, and desktop.",
    icon: "M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5z",
  },
  {
    title: "Tree Shakeable",
    description:
      "Import only what you need. Zero bloat in your production bundle.",
    icon: "M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
  },
];

const stats = [
  { value: "100K+", label: "Developers" },
  { value: "50+", label: "Components" },
  { value: "12", label: "Showcase Packs" },
  { value: "12K+", label: "GitHub Stars" },
  { value: "1M+", label: "Downloads" },
  { value: "4.9", label: "Avg Rating" },
];

const showcaseHighlights = [
  {
    name: "Glassmorphism",
    href: "/showcase/glassmorphism",
    description: "Frosted glass effects, translucent cards, and blurred backdrops",
    gradient: "from-pink-500 to-purple-600",
    count: "10 designs",
  },
  {
    name: "Neon Effects",
    href: "/showcase/neon",
    description: "Glowing borders, neon text, cyberpunk-inspired UI elements",
    gradient: "from-cyan-500 to-blue-600",
    count: "9 designs",
  },
  {
    name: "Gaming UI",
    href: "/showcase/gaming",
    description: "HUD overlays, health bars, gaming dashboards and scoreboards",
    gradient: "from-red-500 to-orange-600",
    count: "8 designs",
  },
  {
    name: "Gradients",
    href: "/showcase/gradients",
    description: "Mesh gradients, animated color shifts, and gradient text effects",
    gradient: "from-emerald-500 to-teal-600",
    count: "10 designs",
  },
];

const componentCategories = [
  { name: "Buttons", href: "/components/buttons", count: 8, color: "bg-blue-500/10 text-blue-600" },
  { name: "Cards", href: "/components/cards", count: 6, color: "bg-purple-500/10 text-purple-600" },
  { name: "Forms", href: "/components/forms", count: 12, color: "bg-green-500/10 text-green-600" },
  { name: "Navigation", href: "/components/navigation", count: 5, color: "bg-orange-500/10 text-orange-600" },
  { name: "Data Display", href: "/components/data-display", count: 7, color: "bg-red-500/10 text-red-600" },
  { name: "Feedback", href: "/components/feedback", count: 6, color: "bg-teal-500/10 text-teal-600" },
  { name: "Layout", href: "/components/layout", count: 5, color: "bg-pink-500/10 text-pink-600" },
  { name: "Overlay", href: "/components/overlay", count: 4, color: "bg-indigo-500/10 text-indigo-600" },
];

const pricingFeatures = [
  "All 50+ components",
  "All 12 showcase design packs",
  "Glassmorphism, Neon, Gaming UI & more",
  "Lifetime updates — forever",
  "Full source code access",
  "Priority support",
  "Commercial license included",
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Frontend Developer at TechCorp",
    text: "ReactUI Library saved me weeks of work. The glassmorphism and neon components are absolutely stunning. Best ₹69 I ever spent!",
    stars: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Indie Developer",
    text: "I was building a gaming dashboard and the Gaming UI showcase had exactly what I needed. The code quality is top-notch and easy to customize.",
    stars: 5,
  },
  {
    name: "Ananya Patel",
    role: "UI/UX Designer at StartupXYZ",
    text: "The variety is incredible — from neumorphism to 3D depth effects. My clients love the designs and I love how easy it is to implement them.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "What do I get with the Pro plan?",
    a: "You get lifetime access to all 50+ components, all 12 premium showcase design packs (Glassmorphism, Neon, Gaming UI, Gradients, and more), full source code, and priority support. One payment, no subscriptions.",
  },
  {
    q: "Is ₹69 really a lifetime price?",
    a: "Yes! You pay once and get access forever. All future components and updates are included at no extra cost. No monthly fees, no hidden charges.",
  },
  {
    q: "Can I use the components in commercial projects?",
    a: "The Free and Pro plans are for personal projects. For commercial use, you need the Enterprise plan (₹299) which includes a commercial license.",
  },
  {
    q: "Do I get the actual source code?",
    a: "Absolutely! Pro and Enterprise plans include the full source code for every component. Copy, paste, and customize to fit your project.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "We offer a 7-day money-back guarantee. If you're not happy with the components, we'll refund your payment — no questions asked.",
  },
];

export default function Home() {
  const jsonLd = buildWebPageJsonLd({
    path: "/",
    title,
    description,
    breadcrumbs: [{ name: "Home", path: "/" }],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              v2.0 — Now with 50+ components &bull; 12 showcase packs
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Build beautiful UIs
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                with React components
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              A comprehensive React component library with 50+ components, 12
              premium showcase design packs, and production-ready code. Get
              lifetime access for just{" "}
              <span className="font-bold text-foreground">₹69</span>.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/pricing"
                className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/40 sm:w-auto"
              >
                Get Pro — ₹69 Lifetime
              </Link>
              <Link
                href="/showcase"
                className="w-full rounded-xl border border-border bg-card px-8 py-3 text-base font-semibold text-foreground transition-all hover:bg-card-hover sm:w-auto"
              >
                Browse Showcases
              </Link>
            </div>

            {/* Install Command */}
            <div className="mx-auto mt-8 max-w-md">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-3 font-mono text-sm">
                <span className="text-muted">$</span>
                <span className="text-foreground">
                  npm install @reactui/core
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-foreground sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Everything you need
            </h2>
            <p className="mt-3 text-muted">
              Built for developers who care about quality and user experience.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Highlights */}
      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-600">
              Premium Showcases
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              12 Design Packs, Endless Possibilities
            </h2>
            <p className="mt-3 text-muted">
              From glassmorphism to gaming UI — explore our curated design
              showcase collections.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseHighlights.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-xl"
              >
                <div
                  className={`h-32 bg-gradient-to-br ${item.gradient} opacity-80 transition-opacity group-hover:opacity-100`}
                />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <span className="text-xs font-medium text-muted">
                      {item.count}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/showcase"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
            >
              View all 12 showcase packs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Component Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Component Library
            </h2>
            <p className="mt-3 text-muted">
              Explore our extensive collection of ready-to-use components.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {componentCategories.map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary">
                    {cat.name}
                  </h3>
                  <span
                    className={`mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${cat.color}`}
                  >
                    {cat.count} components
                  </span>
                </div>
                <svg
                  className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/components"
              className="text-sm font-medium text-primary transition-colors hover:text-primary-dark"
            >
              View all components &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-600">
              Simple Pricing
            </div>
            <h2 className="text-3xl font-bold text-foreground">
              One price. Lifetime access.
            </h2>
            <p className="mt-3 text-muted">
              Get all 50+ components and 12 premium showcase packs for just ₹69.
              No subscriptions.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-md">
            <div className="relative rounded-2xl border border-violet-500/50 p-8 shadow-xl shadow-violet-500/10">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 px-4 py-1 text-xs font-bold text-white">
                LIFETIME ACCESS
              </span>
              <div className="mt-2 text-center">
                <span className="text-5xl font-extrabold text-foreground">₹69</span>
                <span className="ml-2 text-muted">/lifetime</span>
                <p className="mt-2 text-sm text-muted">One payment. Everything included. Forever.</p>
              </div>
              <ul className="mt-6 space-y-3">
                {pricingFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-emerald-500"
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
              <Link
                href="/pricing"
                className="mt-8 block w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/40"
              >
                Get Lifetime Access — ₹69
              </Link>
              <p className="mt-3 text-center text-xs text-muted">7-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Loved by Developers
            </h2>
            <p className="mt-3 text-muted">
              See what developers are saying about ReactUI Library.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to build something amazing?
          </h2>
          <p className="mt-3 text-muted">
            Get lifetime access to all 50+ components and 12 premium showcase
            design packs for just ₹69. Start building today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing"
              className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/40 sm:w-auto"
            >
              Get Pro — ₹69 Lifetime
            </Link>
            <Link
              href="/docs/getting-started"
              className="w-full rounded-xl border border-border bg-card px-8 py-3 text-base font-semibold text-foreground transition-all hover:bg-card-hover sm:w-auto"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
