import Link from "next/link";

const docSections = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs/getting-started",
        description: "Learn what ReactUI Library is and why you should use it.",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        description: "Install and set up ReactUI in your project.",
      },
      {
        title: "Quick Start",
        href: "/docs/quick-start",
        description: "Build your first UI with ReactUI components.",
      },
    ],
  },
  {
    title: "Customization",
    items: [
      {
        title: "Theming",
        href: "/docs/theming",
        description: "Customize colors, fonts, spacing, and dark mode.",
      },
      {
        title: "CSS Variables",
        href: "/docs/css-variables",
        description: "Use CSS custom properties for fine-grained control.",
      },
      {
        title: "Responsive Design",
        href: "/docs/responsive",
        description: "Build responsive layouts with utility-first patterns.",
      },
    ],
  },
  {
    title: "Advanced",
    items: [
      {
        title: "API Reference",
        href: "/docs/api-reference",
        description: "Complete API documentation for every component.",
      },
      {
        title: "Server Components",
        href: "/docs/server-components",
        description: "Use ReactUI with Next.js App Router and RSC.",
      },
      {
        title: "Contributing",
        href: "/docs/contributing",
        description: "Help us build and improve ReactUI Library.",
      },
    ],
  },
];

const sectionCards = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
    description:
      "New to ReactUI? Start here. Learn the fundamentals, set up your first project, and build a working UI in under five minutes.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Installation",
    href: "/docs/installation",
    description:
      "Step-by-step installation guides for npm, yarn, and pnpm. Includes framework-specific setup for Next.js, Vite, and Create React App.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
        />
      </svg>
    ),
  },
  {
    title: "Theming",
    href: "/docs/theming",
    description:
      "Take full control of your design system. Configure colors, typography, spacing, border radius, and dark mode with CSS variables.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
        />
      </svg>
    ),
  },
  {
    title: "API Reference",
    href: "/docs/api-reference",
    description:
      "Comprehensive props tables, type definitions, and usage examples for every component in the library. Copy-paste ready code.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
];

const featureItems = [
  {
    title: "50+ Components",
    description:
      "Production-ready components including buttons, forms, modals, tables, navigation, and more.",
  },
  {
    title: "Fully Typed",
    description:
      "Written in TypeScript with complete type definitions. Full IntelliSense and autocompletion support.",
  },
  {
    title: "Accessible by Default",
    description:
      "Every component follows WAI-ARIA guidelines with keyboard navigation, screen reader support, and focus management.",
  },
  {
    title: "Dark Mode Built-In",
    description:
      "Toggle between light, dark, and system themes. All components adapt seamlessly with zero extra configuration.",
  },
  {
    title: "Server Component Ready",
    description:
      "Designed for the Next.js App Router. Use components as server components or client components as needed.",
  },
  {
    title: "Customizable Theming",
    description:
      "Override any design token with CSS variables. Create branded themes in minutes without fighting defaults.",
  },
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-10">
        {/* Sidebar */}
        <aside className="hidden lg:block">
          <nav className="sticky top-20 space-y-6">
            {docSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="mt-2 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-1.5 text-sm text-muted transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div>
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-8 py-14 sm:px-12 sm:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
            <div className="relative">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                  Documentation
                </span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Everything you need to build beautiful, accessible interfaces
                with ReactUI Library. From quick-start guides to full API
                references, we have you covered.
              </p>

              {/* Quick-Start Install Command Box */}
              <div className="mt-8 max-w-lg">
                <p className="mb-2 text-sm font-medium text-slate-400">
                  Quick start -- install with a single command:
                </p>
                <div className="flex items-center gap-3 rounded-lg bg-slate-900/80 px-4 py-3 font-mono text-sm text-slate-200 ring-1 ring-white/10 backdrop-blur">
                  <span className="select-none text-indigo-400">$</span>
                  <span>npm install @reactui/core</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Cards */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground">
              Explore the Docs
            </h2>
            <p className="mt-2 text-muted">
              Jump directly into the area you need. Each section is
              self-contained and written to get you productive fast.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {sectionCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {card.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* What You'll Learn Feature Grid */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground">
              What You&apos;ll Learn
            </h2>
            <p className="mt-2 max-w-3xl text-muted">
              ReactUI Library is a comprehensive component toolkit designed for
              modern React applications. Here is what you get out of the box.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featureItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Original Doc Sections */}
          <div className="mt-16 space-y-10">
            <h2 className="text-2xl font-bold text-foreground">
              All Documentation
            </h2>
            {docSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xl font-bold text-foreground">
                  {section.title}
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
                    >
                      <h4 className="font-semibold text-foreground group-hover:text-primary">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
