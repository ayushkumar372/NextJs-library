import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link href="/docs" className="transition-colors hover:text-foreground">
          Docs
        </Link>
        <span>/</span>
        <span className="text-foreground">Getting Started</span>
      </nav>

      <h1 className="text-4xl font-bold text-foreground">Getting Started</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Get up and running with ReactUI Library in under five minutes. This
        guide walks you through every step from installation to building your
        first polished interface.
      </p>

      {/* Step 1 -- Install */}
      <section className="mt-12">
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            1
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-foreground">
              Install the Package
            </h2>
            <p className="mt-2 text-muted">
              Use your preferred package manager to add ReactUI and its peer
              dependencies to your project. The core package includes every
              component, hook, and utility you need.
            </p>
            <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
              <pre>{`# npm
npm install @reactui/core

# yarn
yarn add @reactui/core

# pnpm
pnpm add @reactui/core`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 -- Provider */}
      <section className="mt-10">
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            2
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-foreground">
              Configure the Provider
            </h2>
            <p className="mt-2 text-muted">
              Wrap your application with the{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5 text-sm font-medium text-foreground">
                ReactUIProvider
              </code>
              . This component manages theme context, color mode, and global
              configuration for every child component.
            </p>
            <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
              <pre>{`// app/layout.tsx  (Next.js App Router)
import { ReactUIProvider } from '@reactui/core';
import '@reactui/core/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactUIProvider theme="light">
          {children}
        </ReactUIProvider>
      </body>
    </html>
  );
}`}</pre>
            </div>
            <p className="mt-3 text-sm text-muted">
              <strong className="text-foreground">Important:</strong> Make sure
              you import the stylesheet (
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                @reactui/core/styles.css
              </code>
              ) at the root of your app. Without it, components will render
              without styles.
            </p>
          </div>
        </div>
      </section>

      {/* Step 3 -- First Component */}
      <section className="mt-10">
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            3
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-foreground">
              Use Your First Component
            </h2>
            <p className="mt-2 text-muted">
              Import any component from{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5 text-sm font-medium text-foreground">
                @reactui/core
              </code>{" "}
              and drop it into your page. Every component is tree-shakeable, so
              only what you import ends up in your bundle.
            </p>
            <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
              <pre>{`import { Button, Card, Input, Stack } from '@reactui/core';

export default function ContactForm() {
  return (
    <Card padding="lg" variant="elevated">
      <Stack spacing="md">
        <Input
          label="Full Name"
          placeholder="Jane Doe"
          required
        />
        <Input
          label="Email Address"
          placeholder="jane@example.com"
          type="email"
          required
        />
        <Input
          label="Message"
          placeholder="How can we help?"
          multiline
          rows={4}
        />
        <Button variant="primary" size="lg" fullWidth>
          Send Message
        </Button>
      </Stack>
    </Card>
  );
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 -- Customize */}
      <section className="mt-10">
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            4
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-foreground">
              Customize the Theme
            </h2>
            <p className="mt-2 text-muted">
              Override the default design tokens to match your brand. You can
              pass a custom theme object directly to the provider or use CSS
              variables in your global stylesheet.
            </p>
            <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
              <pre>{`import { ReactUIProvider, createTheme } from '@reactui/core';

const myTheme = createTheme({
  colors: {
    primary: '#e11d48',       // Rose-600
    primaryDark: '#be123c',   // Rose-700
    secondary: '#f1f5f9',
    accent: '#f59e0b',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
  fonts: {
    body: '"Inter", system-ui, sans-serif',
    heading: '"Cal Sans", "Inter", sans-serif',
    mono: '"JetBrains Mono", monospace',
  },
});

export default function RootLayout({ children }) {
  return (
    <ReactUIProvider theme={myTheme}>
      {children}
    </ReactUIProvider>
  );
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5 -- Build */}
      <section className="mt-10">
        <div className="flex items-start gap-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            5
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-foreground">
              Build and Deploy
            </h2>
            <p className="mt-2 text-muted">
              ReactUI is optimized for production. Components are tree-shaken
              automatically, CSS is extracted and minified, and server components
              render with zero client-side JavaScript overhead. Run your
              standard build command and deploy anywhere.
            </p>
            <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
              <pre>{`# Development
npm run dev

# Production build
npm run build

# Preview production build locally
npm run start

# Run linting and type checks before deploying
npm run lint && npx tsc --noEmit`}</pre>
            </div>
            <p className="mt-3 text-sm text-muted">
              ReactUI supports all major hosting platforms including Vercel,
              Netlify, AWS Amplify, and traditional Node.js servers.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="mt-16 rounded-xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8">
        <h2 className="text-2xl font-bold text-foreground">
          What&apos;s Included
        </h2>
        <p className="mt-2 text-muted">
          The ReactUI Pro plan gives you access to the complete component
          library, premium showcases, and priority support.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              stat: "50+",
              label: "Production Components",
              desc: "Buttons, forms, modals, tables, navigation, data display, feedback, and more.",
            },
            {
              stat: "12",
              label: "Showcase Templates",
              desc: "Complete page templates for dashboards, landing pages, e-commerce, and SaaS apps.",
            },
            {
              stat: "100%",
              label: "TypeScript Coverage",
              desc: "Every component, hook, and utility is fully typed with exported type definitions.",
            },
            {
              stat: "WCAG 2.1",
              label: "Accessibility",
              desc: "All components meet WCAG 2.1 AA standards with keyboard and screen reader support.",
            },
            {
              stat: "RTL",
              label: "Right-to-Left Support",
              desc: "Built-in RTL layout support for Arabic, Hebrew, and other right-to-left languages.",
            },
            {
              stat: "24/7",
              label: "Priority Support",
              desc: "Direct access to the engineering team via Discord and email with guaranteed response times.",
            },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl font-extrabold text-primary">
                {item.stat}
              </div>
              <div className="mt-1 font-semibold text-foreground">
                {item.label}
              </div>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Next Steps</h2>
        <p className="mt-2 text-muted">
          Now that you have ReactUI set up, explore the rest of the
          documentation to make the most of the library.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            href="/components"
            className="rounded-lg border border-border p-5 transition-colors hover:border-primary/30 hover:bg-card-hover"
          >
            <h3 className="font-medium text-foreground">Browse Components</h3>
            <p className="mt-1 text-sm text-muted">
              Explore all 50+ components with live previews and copy-paste code
              snippets.
            </p>
          </Link>
          <Link
            href="/docs/theming"
            className="rounded-lg border border-border p-5 transition-colors hover:border-primary/30 hover:bg-card-hover"
          >
            <h3 className="font-medium text-foreground">Theming Guide</h3>
            <p className="mt-1 text-sm text-muted">
              Customize colors, typography, spacing, and dark mode to match your
              brand.
            </p>
          </Link>
          <Link
            href="/examples"
            className="rounded-lg border border-border p-5 transition-colors hover:border-primary/30 hover:bg-card-hover"
          >
            <h3 className="font-medium text-foreground">Examples</h3>
            <p className="mt-1 text-sm text-muted">
              See complete real-world examples including dashboards, forms, and
              e-commerce pages.
            </p>
          </Link>
          <Link
            href="/docs/api-reference"
            className="rounded-lg border border-border p-5 transition-colors hover:border-primary/30 hover:bg-card-hover"
          >
            <h3 className="font-medium text-foreground">API Reference</h3>
            <p className="mt-1 text-sm text-muted">
              Full props tables, type definitions, and code examples for every
              component.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
