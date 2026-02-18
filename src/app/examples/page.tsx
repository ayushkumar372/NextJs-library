import Link from "next/link";

const examples = [
  {
    title: "Dashboard",
    description:
      "A full admin dashboard with sidebar navigation, stat cards, bar charts, recent orders table, and a live activity feed. Dark-themed and production-ready.",
    tags: ["Layout", "Cards", "Tables", "Charts", "Navigation"],
    href: "/examples/dashboard",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
  },
  {
    title: "E-Commerce",
    description:
      "Product grid with gradient images, prices in INR, star ratings, category filters, mini cart sidebar with quantities, and a full checkout section with order summary.",
    tags: ["Cards", "Forms", "Cart", "Grid", "Filters"],
    href: "/examples/ecommerce",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
  {
    title: "Authentication",
    description:
      "Complete auth flow with login, registration, forgot-password, and OTP verification forms. Includes social login buttons and split-layout decorative gradients.",
    tags: ["Forms", "Validation", "Social Login", "OTP"],
    href: "/examples/authentication",
    gradient: "from-orange-500 via-rose-500 to-pink-600",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Landing Page",
    description:
      "Marketing landing page with a bold hero section, feature highlights, pricing tiers, customer testimonials, and a newsletter CTA. Conversion-optimized layout.",
    tags: ["Layout", "Hero", "Pricing", "Testimonials", "CTA"],
    href: "/examples/landing",
    gradient: "from-blue-500 via-sky-500 to-cyan-500",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Blog",
    description:
      "Blog layout with featured article hero, article cards with cover images, sidebar with categories and popular posts, tag cloud, and pagination controls.",
    tags: ["Cards", "Typography", "Sidebar", "Pagination"],
    href: "/examples/blog",
    gradient: "from-amber-500 via-yellow-500 to-orange-500",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
  {
    title: "Settings",
    description:
      "User settings page with tabbed navigation, profile form, notification toggles, password management, connected accounts, and a danger-zone section.",
    tags: ["Forms", "Tabs", "Toggles", "Profile"],
    href: "/examples/settings",
    gradient: "from-slate-600 via-gray-600 to-zinc-700",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Gradient Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 right-10 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
            <span className="text-sm font-medium text-white/90">Real-World Examples</span>
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Production-Ready{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              UI Examples
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-indigo-100/80">
            Complete, real-world examples showing how to combine ReactUI components to build common UI
            patterns and pages. Every example is fully responsive, accessible, and ready for production.
          </p>

          {/* Stats bar */}
          <div className="mt-10 flex flex-wrap items-center gap-8">
            {[
              { value: "6", label: "Examples" },
              { value: "30+", label: "Pages" },
              { value: "100%", label: "Production Ready" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm font-medium text-indigo-200/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Examples Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {examples.map((example) => (
            <Link
              key={example.title}
              href={example.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10 dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Gradient thumbnail header */}
              <div
                className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${example.gradient}`}
              >
                {/* Decorative dots grid */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                {/* Icon card in center */}
                <div className="relative rounded-xl border border-white/20 bg-white/10 p-4 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <div className="text-white">{example.icon}</div>
                </div>

                {/* Corner badge */}
                <div className="absolute right-3 top-3 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  Example
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  {example.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {example.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {example.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Example link */}
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
                  <span>View Example</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom stats banner */}
      <div className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-8 text-center text-sm text-slate-500 dark:text-slate-400 sm:gap-8">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6z" />
              </svg>
            </span>
            <strong className="text-slate-700 dark:text-slate-200">6 Examples</strong>
          </span>
          <span className="hidden text-slate-300 dark:text-slate-700 sm:inline">|</span>
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </span>
            <strong className="text-slate-700 dark:text-slate-200">30+ Pages</strong>
          </span>
          <span className="hidden text-slate-300 dark:text-slate-700 sm:inline">|</span>
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </span>
            <strong className="text-slate-700 dark:text-slate-200">Production Ready</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
