import Link from "next/link";

const colorPalette = [
  {
    name: "Primary",
    variable: "--rui-primary",
    hex: "#6366f1",
    bg: "bg-indigo-500",
    text: "text-white",
  },
  {
    name: "Primary Dark",
    variable: "--rui-primary-dark",
    hex: "#4f46e5",
    bg: "bg-indigo-600",
    text: "text-white",
  },
  {
    name: "Secondary",
    variable: "--rui-secondary",
    hex: "#f1f5f9",
    bg: "bg-slate-100",
    text: "text-slate-800",
  },
  {
    name: "Accent",
    variable: "--rui-accent",
    hex: "#f59e0b",
    bg: "bg-amber-500",
    text: "text-white",
  },
  {
    name: "Success",
    variable: "--rui-success",
    hex: "#22c55e",
    bg: "bg-green-500",
    text: "text-white",
  },
  {
    name: "Warning",
    variable: "--rui-warning",
    hex: "#eab308",
    bg: "bg-yellow-500",
    text: "text-white",
  },
  {
    name: "Error",
    variable: "--rui-error",
    hex: "#ef4444",
    bg: "bg-red-500",
    text: "text-white",
  },
  {
    name: "Info",
    variable: "--rui-info",
    hex: "#3b82f6",
    bg: "bg-blue-500",
    text: "text-white",
  },
];

const cssVariables = [
  { variable: "--rui-primary", defaultValue: "#6366f1", description: "Primary brand color used for buttons, links, and active states" },
  { variable: "--rui-primary-dark", defaultValue: "#4f46e5", description: "Darker shade of primary, used for hover and pressed states" },
  { variable: "--rui-secondary", defaultValue: "#f1f5f9", description: "Secondary background color for cards, inputs, and subtle surfaces" },
  { variable: "--rui-accent", defaultValue: "#f59e0b", description: "Accent color for highlights, badges, and call-to-action elements" },
  { variable: "--rui-background", defaultValue: "#ffffff", description: "Page background color" },
  { variable: "--rui-foreground", defaultValue: "#0f172a", description: "Primary text color" },
  { variable: "--rui-muted", defaultValue: "#64748b", description: "Muted text color for descriptions, captions, and helper text" },
  { variable: "--rui-border", defaultValue: "#e2e8f0", description: "Default border color for cards, inputs, and dividers" },
  { variable: "--rui-radius-sm", defaultValue: "4px", description: "Small border radius for badges and chips" },
  { variable: "--rui-radius-md", defaultValue: "8px", description: "Medium border radius for buttons and inputs" },
  { variable: "--rui-radius-lg", defaultValue: "12px", description: "Large border radius for cards and modals" },
  { variable: "--rui-radius-full", defaultValue: "9999px", description: "Full border radius for avatars and pill shapes" },
  { variable: "--rui-font-body", defaultValue: "Inter, system-ui, sans-serif", description: "Body and UI text font family" },
  { variable: "--rui-font-heading", defaultValue: "Inter, system-ui, sans-serif", description: "Heading font family" },
  { variable: "--rui-font-mono", defaultValue: "JetBrains Mono, monospace", description: "Monospace font for code blocks and inline code" },
  { variable: "--rui-shadow-sm", defaultValue: "0 1px 2px rgba(0,0,0,0.05)", description: "Small shadow for subtle elevation" },
  { variable: "--rui-shadow-md", defaultValue: "0 4px 6px rgba(0,0,0,0.07)", description: "Medium shadow for cards and dropdowns" },
  { variable: "--rui-shadow-lg", defaultValue: "0 10px 15px rgba(0,0,0,0.1)", description: "Large shadow for modals and popovers" },
];

const typographyScale = [
  { name: "xs", size: "0.75rem / 12px", lineHeight: "1rem", usage: "Captions, badges, small labels" },
  { name: "sm", size: "0.875rem / 14px", lineHeight: "1.25rem", usage: "Helper text, table cells, secondary text" },
  { name: "base", size: "1rem / 16px", lineHeight: "1.5rem", usage: "Body text, paragraphs, form labels" },
  { name: "lg", size: "1.125rem / 18px", lineHeight: "1.75rem", usage: "Lead text, card descriptions" },
  { name: "xl", size: "1.25rem / 20px", lineHeight: "1.75rem", usage: "Section subheadings" },
  { name: "2xl", size: "1.5rem / 24px", lineHeight: "2rem", usage: "Section headings" },
  { name: "3xl", size: "1.875rem / 30px", lineHeight: "2.25rem", usage: "Page titles" },
  { name: "4xl", size: "2.25rem / 36px", lineHeight: "2.5rem", usage: "Hero headings" },
];

export default function ThemingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-muted">
        <Link href="/docs" className="transition-colors hover:text-foreground">
          Docs
        </Link>
        <span>/</span>
        <span className="text-foreground">Theming</span>
      </nav>

      <h1 className="text-4xl font-bold text-foreground">Theming</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">
        Take full control of your design system. ReactUI uses CSS custom
        properties for theming, making it trivial to customize colors,
        typography, spacing, border radius, and dark mode across every component.
      </p>

      {/* Color Palette */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">
          Color Palette
        </h2>
        <p className="mt-2 text-muted">
          ReactUI ships with a carefully curated set of colors. Each color maps
          to a CSS variable that you can override globally or per-component.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {colorPalette.map((color) => (
            <div key={color.name}>
              <div
                className={`flex h-24 items-end rounded-lg p-3 ${color.bg} ${color.text}`}
              >
                <div>
                  <div className="text-sm font-semibold">{color.name}</div>
                  <div className="text-xs opacity-80">{color.hex}</div>
                </div>
              </div>
              <p className="mt-1.5 text-xs text-muted">{color.variable}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CSS Variables Reference Table */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">
          CSS Variables Reference
        </h2>
        <p className="mt-2 text-muted">
          Below is the complete list of CSS custom properties used by ReactUI.
          Override any of them in your global stylesheet to customize the design
          system.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">
                  Variable
                </th>
                <th className="px-4 py-3 font-medium text-foreground">
                  Default
                </th>
                <th className="px-4 py-3 font-medium text-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {cssVariables.map((v) => (
                <tr key={v.variable} className="bg-card">
                  <td className="px-4 py-3 font-mono text-xs text-primary">
                    {v.variable}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">
                    {v.defaultValue}
                  </td>
                  <td className="px-4 py-3 text-muted">{v.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Overriding Variables */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">
          Overriding CSS Variables
        </h2>
        <p className="mt-2 text-muted">
          Add your overrides in your global CSS file. The variables cascade
          through the entire component tree automatically.
        </p>
        <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`:root {
  /* Brand colors */
  --rui-primary: #e11d48;
  --rui-primary-dark: #be123c;
  --rui-accent: #8b5cf6;

  /* Surfaces */
  --rui-background: #fafafa;
  --rui-secondary: #f4f4f5;
  --rui-border: #d4d4d8;

  /* Typography */
  --rui-foreground: #18181b;
  --rui-muted: #71717a;

  /* Radius */
  --rui-radius-sm: 6px;
  --rui-radius-md: 10px;
  --rui-radius-lg: 16px;

  /* Fonts */
  --rui-font-body: 'Geist', system-ui, sans-serif;
  --rui-font-heading: 'Geist', system-ui, sans-serif;
  --rui-font-mono: 'Geist Mono', monospace;
}`}</pre>
        </div>
      </section>

      {/* Dark Mode */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">Dark Mode</h2>
        <p className="mt-2 text-muted">
          ReactUI supports three color modes: light, dark, and system (follows
          the user&apos;s OS preference). Configure it via the provider or toggle
          programmatically with the{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-sm font-medium text-foreground">
            useColorMode
          </code>{" "}
          hook.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-foreground">
          Provider Configuration
        </h3>
        <div className="mt-3 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`// Light mode (default)
<ReactUIProvider theme="light">
  {children}
</ReactUIProvider>

// Dark mode
<ReactUIProvider theme="dark">
  {children}
</ReactUIProvider>

// Follow system preference
<ReactUIProvider theme="system">
  {children}
</ReactUIProvider>`}</pre>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Toggle with Hook
        </h3>
        <p className="mt-2 text-muted">
          Use the{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-sm font-medium text-foreground">
            useColorMode
          </code>{" "}
          hook to read and change the current mode at runtime. This is ideal for
          building a theme toggle button.
        </p>
        <div className="mt-3 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`'use client';

import { useColorMode, Button } from '@reactui/core';

export function ThemeToggle() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Button
      variant="outline"
      onClick={() =>
        setColorMode(colorMode === 'light' ? 'dark' : 'light')
      }
    >
      {colorMode === 'light' ? '🌙 Dark' : '☀️ Light'}
    </Button>
  );
}`}</pre>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Dark Mode CSS Variables
        </h3>
        <p className="mt-2 text-muted">
          When dark mode is active, ReactUI automatically applies a{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-sm font-medium text-foreground">
            .dark
          </code>{" "}
          class to the root element. You can customize dark mode colors by
          targeting this class.
        </p>
        <div className="mt-3 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`.dark {
  --rui-primary: #818cf8;
  --rui-primary-dark: #6366f1;
  --rui-background: #0f172a;
  --rui-foreground: #f1f5f9;
  --rui-secondary: #1e293b;
  --rui-border: #334155;
  --rui-muted: #94a3b8;
  --rui-accent: #fbbf24;

  --rui-shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --rui-shadow-md: 0 4px 6px rgba(0,0,0,0.4);
  --rui-shadow-lg: 0 10px 15px rgba(0,0,0,0.5);
}`}</pre>
        </div>
      </section>

      {/* Custom Theme Creation */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">
          Creating a Custom Theme
        </h2>
        <p className="mt-2 text-muted">
          For advanced control, use the{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-sm font-medium text-foreground">
            createTheme
          </code>{" "}
          utility to generate a complete theme object. This approach gives you
          type-safe access to every design token.
        </p>

        <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`import { createTheme, ReactUIProvider } from '@reactui/core';

const brandTheme = createTheme({
  colors: {
    primary: '#0ea5e9',       // Sky-500
    primaryDark: '#0284c7',   // Sky-600
    secondary: '#f0f9ff',     // Sky-50
    accent: '#f97316',        // Orange-500
    success: '#10b981',       // Emerald-500
    warning: '#f59e0b',       // Amber-500
    error: '#ef4444',         // Red-500
    info: '#6366f1',          // Indigo-500
    background: '#ffffff',
    foreground: '#0c4a6e',    // Sky-900
    muted: '#64748b',
    border: '#e0f2fe',        // Sky-100
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
  fonts: {
    body: '"Plus Jakarta Sans", system-ui, sans-serif',
    heading: '"Plus Jakarta Sans", system-ui, sans-serif',
    mono: '"Fira Code", monospace',
  },
  shadows: {
    sm: '0 1px 3px rgba(14, 165, 233, 0.08)',
    md: '0 4px 12px rgba(14, 165, 233, 0.12)',
    lg: '0 12px 24px rgba(14, 165, 233, 0.16)',
  },
});

export default function RootLayout({ children }) {
  return (
    <ReactUIProvider theme={brandTheme}>
      {children}
    </ReactUIProvider>
  );
}`}</pre>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Extending the Default Theme
        </h3>
        <p className="mt-2 text-muted">
          You do not need to override every token. The{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-sm font-medium text-foreground">
            createTheme
          </code>{" "}
          function deep-merges your values with the defaults, so you can
          override only what you need.
        </p>
        <div className="mt-3 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`const minimalOverride = createTheme({
  colors: {
    primary: '#e11d48',   // Only override primary
  },
  radius: {
    md: '12px',           // Slightly rounder corners
  },
});
// All other tokens keep their default values.`}</pre>
        </div>
      </section>

      {/* Typography Scale */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">
          Typography Scale
        </h2>
        <p className="mt-2 text-muted">
          ReactUI uses a harmonious type scale based on a 1.125 ratio. Use the{" "}
          <code className="rounded bg-secondary px-1.5 py-0.5 text-sm font-medium text-foreground">
            Text
          </code>{" "}
          component or apply sizes directly via CSS variables. The scale is
          designed to be legible at every size with proper line heights.
        </p>

        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">
                  Token
                </th>
                <th className="px-4 py-3 font-medium text-foreground">Size</th>
                <th className="px-4 py-3 font-medium text-foreground">
                  Line Height
                </th>
                <th className="px-4 py-3 font-medium text-foreground">
                  Usage
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {typographyScale.map((t) => (
                <tr key={t.name} className="bg-card">
                  <td className="px-4 py-3 font-mono text-xs text-primary">
                    {t.name}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">
                    {t.size}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">
                    {t.lineHeight}
                  </td>
                  <td className="px-4 py-3 text-muted">{t.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          Using the Text Component
        </h3>
        <div className="mt-3 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`import { Text } from '@reactui/core';

function TypographyExample() {
  return (
    <div>
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="body">
        Body text for paragraphs and general content.
      </Text>
      <Text variant="caption" color="muted">
        Caption text for labels and metadata.
      </Text>
      <Text variant="code">
        const x = 42;
      </Text>
    </div>
  );
}`}</pre>
        </div>
      </section>

      {/* Spacing */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">
          Spacing Tokens
        </h2>
        <p className="mt-2 text-muted">
          ReactUI components use a consistent spacing scale based on a 4px grid.
          These tokens are applied to padding, margin, and gap properties
          throughout the library.
        </p>
        <div className="mt-4 rounded-lg bg-slate-900 p-4 font-mono text-sm text-slate-200">
          <pre>{`:root {
  --rui-space-1: 0.25rem;   /*  4px */
  --rui-space-2: 0.5rem;    /*  8px */
  --rui-space-3: 0.75rem;   /* 12px */
  --rui-space-4: 1rem;      /* 16px */
  --rui-space-5: 1.25rem;   /* 20px */
  --rui-space-6: 1.5rem;    /* 24px */
  --rui-space-8: 2rem;      /* 32px */
  --rui-space-10: 2.5rem;   /* 40px */
  --rui-space-12: 3rem;     /* 48px */
  --rui-space-16: 4rem;     /* 64px */
}`}</pre>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-14 flex items-center justify-between border-t border-border pt-6">
        <Link
          href="/docs/installation"
          className="text-sm font-medium text-primary hover:underline"
        >
          &larr; Installation
        </Link>
        <Link
          href="/docs/api-reference"
          className="text-sm font-medium text-primary hover:underline"
        >
          API Reference &rarr;
        </Link>
      </div>
    </div>
  );
}
