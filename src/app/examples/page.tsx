import Link from "next/link";

const examples = [
  {
    title: "Dashboard",
    description:
      "A full admin dashboard with sidebar navigation, charts, tables, and stat cards.",
    tags: ["Layout", "Cards", "Tables", "Navigation"],
    href: "/examples/dashboard",
  },
  {
    title: "E-Commerce",
    description:
      "Product listing page with filters, cards, cart, and checkout flow.",
    tags: ["Cards", "Forms", "Buttons", "Grid"],
    href: "/examples/ecommerce",
  },
  {
    title: "Authentication",
    description:
      "Login, register, and forgot password forms with validation.",
    tags: ["Forms", "Buttons", "Feedback"],
    href: "/examples/authentication",
  },
  {
    title: "Landing Page",
    description:
      "Marketing landing page with hero, features, pricing, testimonials, and CTA.",
    tags: ["Layout", "Cards", "Buttons", "Typography"],
    href: "/examples/landing",
  },
  {
    title: "Blog",
    description:
      "Blog layout with article cards, sidebar, categories, and pagination.",
    tags: ["Cards", "Navigation", "Layout", "Typography"],
    href: "/examples/blog",
  },
  {
    title: "Settings Page",
    description:
      "User settings with tabs, form controls, toggles, and profile management.",
    tags: ["Forms", "Navigation", "Buttons", "Feedback"],
    href: "/examples/settings",
  },
];

export default function ExamplesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground">Examples</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Complete, real-world examples showing how to combine ReactUI
          components to build common UI patterns and pages.
        </p>
      </div>

      {/* Examples Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example) => (
          <Link
            key={example.title}
            href={example.href}
            className="group flex flex-col rounded-xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
          >
            {/* Preview area */}
            <div className="flex h-48 items-center justify-center rounded-t-xl bg-gradient-to-br from-secondary to-secondary/50 p-6">
              <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
                <div className="mb-2 h-2 w-20 rounded bg-primary/20" />
                <div className="mb-1 h-2 w-16 rounded bg-muted/20" />
                <div className="h-2 w-24 rounded bg-muted/20" />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                {example.title}
              </h3>
              <p className="mt-1 flex-1 text-sm text-muted">
                {example.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {example.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
