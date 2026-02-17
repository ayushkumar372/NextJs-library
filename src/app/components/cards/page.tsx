export default function CardsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Cards</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Flexible card components for displaying content, pricing, profiles, and
        statistics.
      </p>

      {/* Basic Card */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Basic Card</h2>
        <div className="mt-4 max-w-sm rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-foreground">Card Title</h3>
          <p className="mt-2 text-sm text-muted">
            This is a basic card component with a title and description.
            Cards are great for grouping related content.
          </p>
          <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark">
            Learn More
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">
          Pricing Cards
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$0",
              period: "/month",
              features: [
                "5 components",
                "Basic support",
                "Community access",
              ],
              cta: "Get Started",
              featured: false,
            },
            {
              name: "Pro",
              price: "$29",
              period: "/month",
              features: [
                "All 50+ components",
                "Priority support",
                "Figma files",
                "Updates for 1 year",
              ],
              cta: "Start Free Trial",
              featured: true,
            },
            {
              name: "Enterprise",
              price: "$99",
              period: "/month",
              features: [
                "Everything in Pro",
                "Custom components",
                "Dedicated support",
                "SLA guarantee",
                "Team license",
              ],
              cta: "Contact Sales",
              featured: false,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 ${
                plan.featured
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.featured && (
                <span className="mb-3 inline-block rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="mt-2">
                <span className="text-3xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </p>
              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <svg
                      className="h-4 w-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  plan.featured
                    ? "bg-primary text-white hover:bg-primary-dark"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Cards */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">Stats Cards</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Total Users", value: "12,345", change: "+12%", up: true },
            { label: "Revenue", value: "$45.2K", change: "+8.1%", up: true },
            { label: "Bounce Rate", value: "24.5%", change: "-3.2%", up: false },
            { label: "Avg. Session", value: "4m 32s", change: "+18%", up: true },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-5"
            >
              <p className="text-sm text-muted">{stat.label}</p>
              <p className="mt-1 text-2xl font-bold text-foreground">
                {stat.value}
              </p>
              <p
                className={`mt-1 text-sm font-medium ${
                  stat.up ? "text-green-500" : "text-red-500"
                }`}
              >
                {stat.change}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Profile Card */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">Profile Card</h2>
        <div className="mt-4 max-w-sm rounded-xl border border-border bg-card">
          <div className="h-24 rounded-t-xl bg-gradient-to-r from-primary to-accent" />
          <div className="px-6 pb-6">
            <div className="-mt-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-card bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white">
              JD
            </div>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              Jane Doe
            </h3>
            <p className="text-sm text-muted">Senior Frontend Developer</p>
            <p className="mt-2 text-sm text-muted">
              Building beautiful interfaces with React and TypeScript. Open
              source contributor.
            </p>
            <div className="mt-4 flex gap-4 text-sm text-muted">
              <span>
                <strong className="text-foreground">1.2K</strong> followers
              </span>
              <span>
                <strong className="text-foreground">340</strong> following
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
