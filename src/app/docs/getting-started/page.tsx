import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Getting Started</h1>
      <p className="mt-3 text-lg text-muted">
        Get up and running with ReactUI Library in your project.
      </p>

      {/* Step 1 */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">
          1. Installation
        </h2>
        <p className="mt-2 text-muted">
          Install ReactUI and its peer dependencies.
        </p>
        <div className="mt-3 rounded-xl border border-border bg-secondary p-4 font-mono text-sm text-foreground">
          npm install @reactui/core
        </div>
      </section>

      {/* Step 2 */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-foreground">
          2. Setup Provider
        </h2>
        <p className="mt-2 text-muted">
          Wrap your app with the ReactUI Provider to enable theming.
        </p>
        <div className="mt-3 overflow-x-auto rounded-xl border border-border bg-secondary p-4 font-mono text-sm text-foreground">
          <pre>{`import { ReactUIProvider } from '@reactui/core';

function App({ children }) {
  return (
    <ReactUIProvider theme="light">
      {children}
    </ReactUIProvider>
  );
}`}</pre>
        </div>
      </section>

      {/* Step 3 */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-foreground">
          3. Use Components
        </h2>
        <p className="mt-2 text-muted">
          Import and use any component from the library.
        </p>
        <div className="mt-3 overflow-x-auto rounded-xl border border-border bg-secondary p-4 font-mono text-sm text-foreground">
          <pre>{`import { Button, Card, Input } from '@reactui/core';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}`}</pre>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground">Next Steps</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Link
            href="/components"
            className="rounded-lg border border-border p-4 transition-colors hover:border-primary/30 hover:bg-card-hover"
          >
            <h3 className="font-medium text-foreground">Browse Components</h3>
            <p className="mt-1 text-sm text-muted">
              Explore all 50+ components.
            </p>
          </Link>
          <Link
            href="/docs/theming"
            className="rounded-lg border border-border p-4 transition-colors hover:border-primary/30 hover:bg-card-hover"
          >
            <h3 className="font-medium text-foreground">Theming Guide</h3>
            <p className="mt-1 text-sm text-muted">
              Customize colors, fonts, and dark mode.
            </p>
          </Link>
          <Link
            href="/examples"
            className="rounded-lg border border-border p-4 transition-colors hover:border-primary/30 hover:bg-card-hover"
          >
            <h3 className="font-medium text-foreground">Examples</h3>
            <p className="mt-1 text-sm text-muted">
              See complete real-world examples.
            </p>
          </Link>
          <Link
            href="/docs/api-reference"
            className="rounded-lg border border-border p-4 transition-colors hover:border-primary/30 hover:bg-card-hover"
          >
            <h3 className="font-medium text-foreground">API Reference</h3>
            <p className="mt-1 text-sm text-muted">
              Full docs for every component prop.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
