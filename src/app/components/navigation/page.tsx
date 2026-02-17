import Link from "next/link";

export default function NavigationPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Navigation</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Navigation components including tabs, breadcrumbs, pagination, and
        sidebar patterns.
      </p>

      {/* Tabs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Tabs</h2>
        <div className="mt-4">
          <div className="flex border-b border-border">
            {["Overview", "Features", "Pricing", "FAQ"].map((tab, i) => (
              <button
                key={tab}
                className={`border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                  i === 0
                    ? "border-primary text-primary"
                    : "border-transparent text-muted hover:border-border hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-4 rounded-lg border border-border bg-card p-4 text-sm text-muted">
            Tab content goes here. This is the Overview tab.
          </div>
        </div>

        {/* Pill Tabs */}
        <div className="mt-6">
          <p className="mb-2 text-sm font-medium text-foreground">Pill Tabs</p>
          <div className="inline-flex rounded-lg bg-secondary p-1">
            {["All", "Active", "Draft", "Archived"].map((tab, i) => (
              <button
                key={tab}
                className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Breadcrumbs</h2>
        <div className="mt-4 space-y-4">
          <nav className="flex items-center gap-1 text-sm">
            <Link href="#" className="text-muted hover:text-primary">Home</Link>
            <span className="text-muted">/</span>
            <Link href="#" className="text-muted hover:text-primary">Components</Link>
            <span className="text-muted">/</span>
            <span className="font-medium text-foreground">Navigation</span>
          </nav>

          <nav className="flex items-center gap-2 text-sm">
            <Link href="#" className="text-muted hover:text-primary">Home</Link>
            <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="#" className="text-muted hover:text-primary">Products</Link>
            <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="font-medium text-foreground">Details</span>
          </nav>
        </div>
      </section>

      {/* Pagination */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Pagination</h2>
        <div className="mt-4 space-y-4">
          <div className="flex items-center gap-1">
            <button className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted hover:bg-secondary">
              Previous
            </button>
            {[1, 2, 3, "...", 8, 9, 10].map((page, i) => (
              <button
                key={i}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium ${
                  page === 1
                    ? "bg-primary text-white"
                    : page === "..."
                    ? "text-muted"
                    : "text-muted hover:bg-secondary"
                }`}
              >
                {page}
              </button>
            ))}
            <button className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted hover:bg-secondary">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Sidebar */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Sidebar</h2>
        <div className="mt-4 max-w-xs rounded-xl border border-border bg-card">
          <div className="p-4">
            <p className="px-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Main
            </p>
            <nav className="mt-2 space-y-0.5">
              {[
                { label: "Dashboard", active: true },
                { label: "Analytics", active: false },
                { label: "Projects", active: false },
                { label: "Team", active: false },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Settings
            </p>
            <nav className="mt-2 space-y-0.5">
              {["Profile", "Preferences", "Billing"].map((item) => (
                <button
                  key={item}
                  className="flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}
