import Link from "next/link";

const categories = [
  {
    name: "Buttons",
    href: "/components/buttons",
    description: "Primary, secondary, outline, ghost, icon buttons and more.",
    count: 8,
    preview: ["Primary", "Secondary", "Outline", "Ghost"],
  },
  {
    name: "Cards",
    href: "/components/cards",
    description: "Content cards, pricing cards, profile cards, and stats cards.",
    count: 6,
    preview: ["Basic", "Pricing", "Profile", "Stats"],
  },
  {
    name: "Forms",
    href: "/components/forms",
    description: "Inputs, selects, checkboxes, radios, switches, and validation.",
    count: 12,
    preview: ["Input", "Select", "Checkbox", "Switch"],
  },
  {
    name: "Navigation",
    href: "/components/navigation",
    description: "Navbars, sidebars, tabs, breadcrumbs, and pagination.",
    count: 5,
    preview: ["Navbar", "Sidebar", "Tabs", "Pagination"],
  },
  {
    name: "Data Display",
    href: "/components/data-display",
    description: "Tables, lists, badges, avatars, and tooltips.",
    count: 7,
    preview: ["Table", "Badge", "Avatar", "Tooltip"],
  },
  {
    name: "Feedback",
    href: "/components/feedback",
    description: "Alerts, toasts, progress bars, spinners, and skeletons.",
    count: 6,
    preview: ["Alert", "Toast", "Progress", "Spinner"],
  },
  {
    name: "Layout",
    href: "/components/layout",
    description: "Containers, grids, dividers, spacers, and aspect ratios.",
    count: 5,
    preview: ["Container", "Grid", "Divider", "Stack"],
  },
  {
    name: "Overlay",
    href: "/components/overlay",
    description: "Modals, drawers, popovers, and dropdown menus.",
    count: 4,
    preview: ["Modal", "Drawer", "Popover", "Dropdown"],
  },
];

export default function ComponentsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground">Components</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">
          Explore our collection of 50+ beautifully crafted, accessible, and
          customizable React components.
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <svg
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search components..."
            className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-xl font-semibold text-foreground group-hover:text-primary">
                  {category.name}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  {category.description}
                </p>
                <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {category.count} components
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
            </div>

            {/* Preview chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {category.preview.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-secondary px-3 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
