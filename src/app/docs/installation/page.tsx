export default function InstallationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Installation</h1>
      <p className="mt-3 text-lg text-muted">
        Install ReactUI Library in your project using your preferred package
        manager.
      </p>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">npm</h2>
          <div className="mt-2 rounded-xl border border-border bg-secondary p-4 font-mono text-sm text-foreground">
            npm install @reactui/core
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">yarn</h2>
          <div className="mt-2 rounded-xl border border-border bg-secondary p-4 font-mono text-sm text-foreground">
            yarn add @reactui/core
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-foreground">pnpm</h2>
          <div className="mt-2 rounded-xl border border-border bg-secondary p-4 font-mono text-sm text-foreground">
            pnpm add @reactui/core
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">
          Peer Dependencies
        </h2>
        <p className="mt-2 text-muted">
          ReactUI requires the following peer dependencies:
        </p>
        <div className="mt-3 overflow-x-auto rounded-xl border border-border bg-secondary p-4 font-mono text-sm text-foreground">
          <pre>{`"peerDependencies": {
  "react": ">=18.0.0",
  "react-dom": ">=18.0.0"
}`}</pre>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">
          Framework Guides
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { name: "Next.js", desc: "App Router or Pages Router" },
            { name: "Vite", desc: "React + Vite setup" },
            { name: "Remix", desc: "Full stack React framework" },
          ].map((fw) => (
            <div
              key={fw.name}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="font-semibold text-foreground">{fw.name}</h3>
              <p className="mt-1 text-sm text-muted">{fw.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
