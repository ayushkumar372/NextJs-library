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
          <h1 className="text-4xl font-bold text-foreground">Documentation</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            Everything you need to know to get started with ReactUI Library and
            build amazing interfaces.
          </p>

          <div className="mt-10 space-y-10">
            {docSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
                    >
                      <h3 className="font-semibold text-foreground group-hover:text-primary">
                        {item.title}
                      </h3>
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
