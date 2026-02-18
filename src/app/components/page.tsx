import Link from "next/link";

const categories = [
  {
    name: "Buttons",
    href: "/components/buttons",
    description: "Solid, outline, gradient, icon, loading, social login buttons, button groups, and floating action buttons.",
    count: 32,
    gradient: "from-violet-500 to-purple-600",
    preview: ["Solid", "Outline", "Gradient", "Icon", "Loading", "Social"],
  },
  {
    name: "Cards",
    href: "/components/cards",
    description: "Basic cards, profile cards, pricing tables, product cards, stats, blog posts, testimonials, and feature cards.",
    count: 24,
    gradient: "from-blue-500 to-cyan-500",
    preview: ["Basic", "Profile", "Pricing", "Product", "Stats", "Blog"],
  },
  {
    name: "Forms",
    href: "/components/forms",
    description: "Text inputs, selects, checkboxes, radios, toggles, search bars, login, registration, and contact forms.",
    count: 28,
    gradient: "from-emerald-500 to-teal-500",
    preview: ["Input", "Select", "Toggle", "Search", "Login", "Contact"],
  },
  {
    name: "Navigation",
    href: "/components/navigation",
    description: "Horizontal navbars, sidebars, breadcrumbs, tabs, pagination, and bottom navigation bars.",
    count: 18,
    gradient: "from-orange-500 to-amber-500",
    preview: ["Navbar", "Sidebar", "Breadcrumbs", "Tabs", "Pagination"],
  },
  {
    name: "Data Display",
    href: "/components/data-display",
    description: "Data tables, stats cards, badges, tags, avatars, progress bars, timelines, and lists.",
    count: 22,
    gradient: "from-pink-500 to-rose-500",
    preview: ["Table", "Stats", "Badge", "Avatar", "Timeline", "List"],
  },
  {
    name: "Feedback",
    href: "/components/feedback",
    description: "Alert banners, toast notifications, loading spinners, progress indicators, empty states, and error pages.",
    count: 20,
    gradient: "from-red-500 to-orange-500",
    preview: ["Alert", "Toast", "Spinner", "Progress", "Empty State"],
  },
  {
    name: "Layout",
    href: "/components/layout",
    description: "Grid layouts, flex containers, card grids, sidebar layouts, split screens, and masonry layouts.",
    count: 16,
    gradient: "from-indigo-500 to-blue-500",
    preview: ["Grid", "Flex", "Card Grid", "Sidebar", "Split Screen"],
  },
  {
    name: "Overlay",
    href: "/components/overlay",
    description: "Modal dialogs, dropdown menus, tooltips, slide-over panels, notification panels, and command palette.",
    count: 18,
    gradient: "from-fuchsia-500 to-pink-500",
    preview: ["Modal", "Dropdown", "Tooltip", "Slide-over", "Command"],
  },
];

const popularComponents = [
  { name: "Gradient Buttons", href: "/components/buttons", gradient: "from-violet-600 via-purple-500 to-indigo-500" },
  { name: "Pricing Cards", href: "/components/cards", gradient: "from-blue-600 via-cyan-500 to-teal-400" },
  { name: "Login Forms", href: "/components/forms", gradient: "from-emerald-600 via-green-500 to-lime-400" },
  { name: "Data Tables", href: "/components/data-display", gradient: "from-pink-600 via-rose-500 to-red-400" },
  { name: "Modal Dialogs", href: "/components/overlay", gradient: "from-fuchsia-600 via-purple-500 to-violet-400" },
  { name: "Toast Notifications", href: "/components/feedback", gradient: "from-orange-600 via-amber-500 to-yellow-400" },
];

const totalComponents = categories.reduce((sum, c) => sum + c.count, 0);

export default function ComponentsPage() {
  return (
    <div className="min-h-screen">
      {/* Gradient Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            Open Source Component Library
          </div>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Beautiful UI{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Components
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Explore our collection of {totalComponents}+ beautifully crafted, accessible, and
            customizable React components. Copy, paste, and build faster.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-lg">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search components..."
                className="w-full rounded-2xl border border-slate-700 bg-slate-800/50 py-3.5 pl-12 pr-4 text-sm text-white placeholder-slate-400 outline-none backdrop-blur-sm transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 py-6 sm:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">{totalComponents}+</p>
              <p className="mt-1 text-sm text-muted">Total Components</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">{categories.length}</p>
              <p className="mt-1 text-sm text-muted">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="mt-1 text-sm text-muted">Tailwind CSS</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">Free</p>
              <p className="mt-1 text-sm text-muted">Open Source</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Popular Components Quick Access */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground">Popular Components</h2>
          <p className="mt-1 text-sm text-muted">Most frequently used components to get you started quickly.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {popularComponents.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-border p-1 transition-all hover:scale-[1.03] hover:shadow-xl"
              >
                <div className={`flex h-28 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient}`}>
                  <span className="text-sm font-bold text-white drop-shadow-sm">{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <h2 className="text-2xl font-bold text-foreground">All Categories</h2>
        <p className="mt-1 text-sm text-muted">Browse components organized by category.</p>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-transparent hover:shadow-xl hover:shadow-black/5"
            >
              {/* Gradient accent bar */}
              <div className={`h-1.5 bg-gradient-to-r ${category.gradient}`} />

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {category.description}
                    </p>
                    <span className={`mt-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r ${category.gradient} px-3 py-1 text-xs font-semibold text-white`}>
                      {category.count} components
                    </span>
                  </div>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} text-white opacity-80 transition-opacity group-hover:opacity-100`}>
                    <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Preview chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.preview.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-muted transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
