export default function ThemingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Theming</h1>
      <p className="mt-3 text-lg text-muted">
        Customize the look and feel of every component using CSS variables,
        tokens, and dark mode.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">
          CSS Variables
        </h2>
        <p className="mt-2 text-muted">
          ReactUI uses CSS custom properties for theming. Override them in your
          global CSS.
        </p>
        <div className="mt-3 overflow-x-auto rounded-xl border border-border bg-secondary p-4 font-mono text-sm text-foreground">
          <pre>{`:root {
  --rui-primary: #6366f1;
  --rui-primary-dark: #4f46e5;
  --rui-background: #ffffff;
  --rui-foreground: #0f172a;
  --rui-border: #e2e8f0;
  --rui-muted: #64748b;
  --rui-radius: 8px;
}`}</pre>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Dark Mode</h2>
        <p className="mt-2 text-muted">
          Enable dark mode by adding the dark class or using system preference.
        </p>
        <div className="mt-3 overflow-x-auto rounded-xl border border-border bg-secondary p-4 font-mono text-sm text-foreground">
          <pre>{`<ReactUIProvider theme="dark">
  {children}
</ReactUIProvider>

// Or use system preference
<ReactUIProvider theme="system">
  {children}
</ReactUIProvider>`}</pre>
        </div>
      </section>

      {/* Color Palette Preview */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">
          Color Palette
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { name: "Primary", color: "bg-primary", text: "text-white" },
            { name: "Accent", color: "bg-accent", text: "text-white" },
            { name: "Background", color: "bg-background border border-border", text: "text-foreground" },
            { name: "Foreground", color: "bg-foreground", text: "text-background" },
            { name: "Secondary", color: "bg-secondary", text: "text-foreground" },
            { name: "Muted", color: "bg-muted", text: "text-white" },
            { name: "Border", color: "bg-border", text: "text-foreground" },
            { name: "Card", color: "bg-card border border-border", text: "text-foreground" },
          ].map((c) => (
            <div key={c.name} className="text-center">
              <div
                className={`flex h-16 items-center justify-center rounded-lg ${c.color} ${c.text} text-xs font-medium`}
              >
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">
          Custom Theme
        </h2>
        <p className="mt-2 text-muted">
          Create a completely custom theme by overriding all tokens.
        </p>
        <div className="mt-3 overflow-x-auto rounded-xl border border-border bg-secondary p-4 font-mono text-sm text-foreground">
          <pre>{`import { createTheme } from '@reactui/core';

const customTheme = createTheme({
  colors: {
    primary: '#e11d48',
    secondary: '#f1f5f9',
    accent: '#f59e0b',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  fonts: {
    body: 'Inter, sans-serif',
    mono: 'JetBrains Mono, monospace',
  },
});`}</pre>
        </div>
      </section>
    </div>
  );
}
