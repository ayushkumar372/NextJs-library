const team = [
  {
    name: "Alex Chen",
    role: "Lead Developer",
    bio: "Full-stack developer with a passion for design systems and accessible interfaces.",
  },
  {
    name: "Sarah Kim",
    role: "Design Lead",
    bio: "UI/UX designer focused on creating intuitive and beautiful component experiences.",
  },
  {
    name: "Marcus Johnson",
    role: "Core Contributor",
    bio: "Open source enthusiast and TypeScript advocate building robust developer tools.",
  },
  {
    name: "Priya Patel",
    role: "Developer Advocate",
    bio: "Community builder and technical writer making component libraries accessible to everyone.",
  },
];

const stats = [
  { label: "Components", value: "50+" },
  { label: "GitHub Stars", value: "12K+" },
  { label: "Weekly Downloads", value: "45K+" },
  { label: "Contributors", value: "120+" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-foreground">
          About ReactUI Library
        </h1>
        <p className="mt-4 text-lg text-muted">
          We&apos;re building the most comprehensive, accessible, and
          developer-friendly React component library. Our mission is to help
          developers build beautiful interfaces faster.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-6 text-center"
          >
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="mt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-4 text-muted">
              ReactUI Library was born from the frustration of rebuilding the
              same components across projects. We believe developers should focus
              on building unique features, not re-creating buttons and forms.
            </p>
            <p className="mt-3 text-muted">
              Every component is built with accessibility as a first-class
              citizen, follows WAI-ARIA standards, supports keyboard navigation,
              and works with screen readers out of the box.
            </p>
            <p className="mt-3 text-muted">
              We&apos;re committed to keeping the library open source, well
              documented, and community driven. Your contributions and feedback
              shape the future of ReactUI.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Core Principles
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Accessibility first — every component, every interaction",
                "TypeScript native — full type safety and IntelliSense",
                "Composable — build complex UIs from simple primitives",
                "Themeable — CSS variables, dark mode, custom tokens",
                "Performant — tree-shakeable, minimal runtime overhead",
                "Well documented — examples, API reference, and guides",
              ].map((principle) => (
                <li key={principle} className="flex items-start gap-2 text-sm">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mt-16">
        <h2 className="text-center text-3xl font-bold text-foreground">
          Meet the Team
        </h2>
        <p className="mt-3 text-center text-muted">
          The people behind the library.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xl font-bold text-white">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-4 font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-primary">{member.role}</p>
              <p className="mt-2 text-sm text-muted">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
