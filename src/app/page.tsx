import Link from "next/link";

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

const componentCategories = [
  {
    name: "Buttons",
    href: "/components/buttons",
    count: 8,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    name: "Cards",
    href: "/components/cards",
    count: 6,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    name: "Forms",
    href: "/components/forms",
    count: 12,
    color: "bg-green-500/10 text-green-600",
  },
  {
    name: "Navigation",
    href: "/components/navigation",
    count: 5,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    name: "Data Display",
    href: "/components/data-display",
    count: 7,
    color: "bg-red-500/10 text-red-600",
  },
  {
    name: "Feedback",
    href: "/components/feedback",
    count: 6,
    color: "bg-teal-500/10 text-teal-600",
  },
  {
    name: "Layout",
    href: "/components/layout",
    count: 5,
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    name: "Overlay",
    href: "/components/overlay",
    count: 4,
    color: "bg-indigo-500/10 text-indigo-600",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              v2.0 — Now with 50+ components
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Build beautiful UIs
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                with React components
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              A comprehensive React component library with beautiful design
              patterns, full accessibility, TypeScript support, and seamless
              theming. Ship faster with production-ready components.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/docs/getting-started"
                className="w-full rounded-xl bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
              >
                Get Started
              </Link>
              <Link
                href="/components"
                className="w-full rounded-xl border border-border bg-card px-8 py-3 text-base font-semibold text-foreground transition-all hover:bg-card-hover sm:w-auto"
              >
                Browse Components
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

      {/* Features */}
      <section className="border-t border-border bg-secondary/30 py-20">
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

      {/* CTA */}
      <section className="border-t border-border bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to build?
          </h2>
          <p className="mt-3 text-muted">
            Start using ReactUI Library in your project today. It&apos;s free,
            open source, and built with love.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/docs/getting-started"
              className="w-full rounded-xl bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark sm:w-auto"
            >
              Read the Docs
            </Link>
            <Link
              href="/examples"
              className="w-full rounded-xl border border-border bg-card px-8 py-3 text-base font-semibold text-foreground transition-all hover:bg-card-hover sm:w-auto"
            >
              See Examples
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
