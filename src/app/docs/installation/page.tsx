import Link from "next/link";

export default function InstallationPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link href="/docs" className="transition-colors hover:text-foreground">
          Docs
        </Link>
        <span>/</span>
        <span className="text-foreground">Installation</span>
      </nav>

      <h1 className="text-4xl font-bold text-foreground">Installation</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Install ReactUI Library in your project using your preferred package
        manager, then follow the framework-specific guide for your setup.
      </p>

      {/* Package Manager Install Commands */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">
          Package Managers
        </h2>
        <p className="mt-2 text-muted">
          ReactUI is distributed as a single package on npm. Choose the command
          that matches your package manager.
        </p>

        <div className="mt-6 space-y-6">
          {/* npm */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-red-500/10 text-xs font-bold text-red-500">
                npm
              </span>
              npm
            </h3>
            <div className="mt-3 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
              <pre>{`npm install @reactui/core`}</pre>
            </div>
            <p className="mt-2 text-sm text-muted">
              If you prefer to install an exact version, append the version tag:
            </p>
            <div className="mt-2 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
              <pre>{`npm install @reactui/core@2.4.0`}</pre>
            </div>
          </div>

          {/* yarn */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-blue-500/10 text-xs font-bold text-blue-500">
                yarn
              </span>
              Yarn
            </h3>
            <div className="mt-3 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
              <pre>{`yarn add @reactui/core`}</pre>
            </div>
            <p className="mt-2 text-sm text-muted">
              For Yarn Berry (v2+), make sure PnP is configured or use{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                nodeLinker: node-modules
              </code>{" "}
              in your{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                .yarnrc.yml
              </code>
              .
            </p>
          </div>

          {/* pnpm */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-amber-500/10 text-xs font-bold text-amber-500">
                pnpm
              </span>
              pnpm
            </h3>
            <div className="mt-3 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
              <pre>{`pnpm add @reactui/core`}</pre>
            </div>
            <p className="mt-2 text-sm text-muted">
              pnpm uses a content-addressable store, making installs faster and
              saving disk space. No extra configuration is required.
            </p>
          </div>
        </div>
      </section>

      {/* Peer Dependencies */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">
          Peer Dependencies
        </h2>
        <p className="mt-2 text-muted">
          ReactUI requires React 18 or later. Most projects already have these
          installed. If not, add them alongside the core package.
        </p>
        <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`"peerDependencies": {
  "react": ">=18.0.0",
  "react-dom": ">=18.0.0"
}`}</pre>
        </div>
        <p className="mt-3 text-sm text-muted">
          Install them explicitly if they are missing:
        </p>
        <div className="mt-2 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`npm install react react-dom`}</pre>
        </div>

        <div className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/5 p-4">
          <p className="text-sm font-medium text-amber-600">
            Optional Dependencies
          </p>
          <p className="mt-1 text-sm text-muted">
            Some features require additional packages. These are listed per
            component in the API reference but are not required for the core
            library to function.
          </p>
          <div className="mt-3 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
            <pre>{`# Date picker -- requires date-fns
npm install date-fns

# Rich text editor -- requires tiptap
npm install @tiptap/react @tiptap/starter-kit

# Charts -- requires recharts
npm install recharts`}</pre>
          </div>
        </div>
      </section>

      {/* Framework Guides */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">
          Framework-Specific Setup
        </h2>
        <p className="mt-2 text-muted">
          ReactUI works with any React framework. Below are step-by-step
          configuration guides for the three most popular setups.
        </p>

        {/* Next.js */}
        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <h3 className="text-xl font-semibold text-foreground">
            Next.js (App Router)
          </h3>
          <p className="mt-2 text-muted">
            ReactUI is fully compatible with the Next.js App Router and server
            components. Most ReactUI components work as server components out of
            the box; interactive ones (modals, dropdowns) include the{" "}
            <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
              &quot;use client&quot;
            </code>{" "}
            directive automatically.
          </p>
          <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
            <pre>{`// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ReactUI works out of the box.
  // Enable transpilePackages if you see ESM issues:
  transpilePackages: ['@reactui/core'],
};

module.exports = nextConfig;`}</pre>
          </div>
          <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
            <pre>{`// app/layout.tsx
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
        <ReactUIProvider theme="system">
          {children}
        </ReactUIProvider>
      </body>
    </html>
  );
}`}</pre>
          </div>
        </div>

        {/* Vite */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h3 className="text-xl font-semibold text-foreground">Vite</h3>
          <p className="mt-2 text-muted">
            Vite works seamlessly with ReactUI thanks to its native ESM support.
            No extra plugins are needed for basic usage.
          </p>
          <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
            <pre>{`// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Optional: alias for cleaner imports
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});`}</pre>
          </div>
          <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
            <pre>{`// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactUIProvider } from '@reactui/core';
import '@reactui/core/styles.css';
import App from './App';

ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <ReactUIProvider theme="light">
      <App />
    </ReactUIProvider>
  </React.StrictMode>
);`}</pre>
          </div>
        </div>

        {/* Create React App */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h3 className="text-xl font-semibold text-foreground">
            Create React App
          </h3>
          <p className="mt-2 text-muted">
            CRA requires no additional configuration. Install the package and
            wrap your app with the provider.
          </p>
          <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
            <pre>{`// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactUIProvider } from '@reactui/core';
import '@reactui/core/styles.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReactUIProvider theme="light">
      <App />
    </ReactUIProvider>
  </React.StrictMode>
);`}</pre>
          </div>
          <p className="mt-3 text-sm text-muted">
            <strong className="text-foreground">Note:</strong> If you are using
            CRA v5 with Webpack 5, CSS imports work automatically. For older
            versions you may need to eject or use{" "}
            <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
              craco
            </code>{" "}
            to customize the Webpack config.
          </p>
        </div>
      </section>

      {/* Verification */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">
          Verify Your Installation
        </h2>
        <p className="mt-2 text-muted">
          Create a simple test component to confirm everything is wired up
          correctly. If the button renders with proper styling and responds to
          clicks, your setup is complete.
        </p>
        <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`// app/page.tsx  or  src/App.tsx
import { Button, Card, Stack, Text } from '@reactui/core';

export default function TestPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <Card padding="lg" variant="elevated">
        <Stack spacing="md">
          <Text variant="h3">
            ReactUI is Working!
          </Text>
          <Text variant="body" color="muted">
            If you can see this styled card with a button
            below, your installation is successful.
          </Text>
          <Button
            variant="primary"
            onClick={() => alert('ReactUI is installed correctly!')}
          >
            Click Me
          </Button>
        </Stack>
      </Card>
    </div>
  );
}`}</pre>
        </div>
        <p className="mt-4 text-sm text-muted">
          Run your dev server (
          <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
            npm run dev
          </code>
          ) and open the page in your browser. You should see a styled card with
          a heading, paragraph text, and a primary-colored button.
        </p>
      </section>

      {/* Troubleshooting */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">
          Troubleshooting
        </h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              Components render without styles
            </h3>
            <p className="mt-1 text-sm text-muted">
              Make sure you have imported{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                @reactui/core/styles.css
              </code>{" "}
              in your root layout or entry file. This stylesheet must be loaded
              before any components render.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              Module not found errors
            </h3>
            <p className="mt-1 text-sm text-muted">
              Delete your{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                node_modules
              </code>{" "}
              folder and lock file, then reinstall. For Next.js, add{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                @reactui/core
              </code>{" "}
              to the{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                transpilePackages
              </code>{" "}
              array in{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                next.config.js
              </code>
              .
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              TypeScript type errors
            </h3>
            <p className="mt-1 text-sm text-muted">
              Ensure your{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                tsconfig.json
              </code>{" "}
              includes{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                &quot;moduleResolution&quot;: &quot;bundler&quot;
              </code>{" "}
              or{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-xs font-medium text-foreground">
                &quot;node16&quot;
              </code>
              . ReactUI ships with full type definitions, but older module
              resolution strategies may fail to locate them.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-14 flex items-center justify-between border-t border-border pt-6">
        <Link
          href="/docs/getting-started"
          className="text-sm font-medium text-primary hover:underline"
        >
          &larr; Getting Started
        </Link>
        <Link
          href="/docs/theming"
          className="text-sm font-medium text-primary hover:underline"
        >
          Theming &rarr;
        </Link>
      </div>
    </div>
  );
}
