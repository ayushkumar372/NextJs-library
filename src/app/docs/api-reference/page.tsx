export default function ApiReferencePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">API Reference</h1>
      <p className="mt-3 text-lg text-muted">
        Complete API documentation for all ReactUI components.
      </p>

      {/* Button API */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Button</h2>
        <p className="mt-2 text-muted">
          A clickable button element with multiple variants and sizes.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">Prop</th>
                <th className="px-4 py-3 font-medium text-foreground">Type</th>
                <th className="px-4 py-3 font-medium text-foreground">Default</th>
                <th className="px-4 py-3 font-medium text-foreground">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { prop: "variant", type: '"primary" | "secondary" | "outline" | "ghost"', def: '"primary"', desc: "Visual style variant" },
                { prop: "size", type: '"sm" | "md" | "lg"', def: '"md"', desc: "Button size" },
                { prop: "disabled", type: "boolean", def: "false", desc: "Disable the button" },
                { prop: "loading", type: "boolean", def: "false", desc: "Show loading spinner" },
                { prop: "leftIcon", type: "ReactNode", def: "-", desc: "Icon before label" },
                { prop: "rightIcon", type: "ReactNode", def: "-", desc: "Icon after label" },
                { prop: "fullWidth", type: "boolean", def: "false", desc: "Full width button" },
                { prop: "onClick", type: "() => void", def: "-", desc: "Click handler" },
              ].map((row) => (
                <tr key={row.prop} className="bg-card">
                  <td className="px-4 py-3 font-mono text-xs text-primary">{row.prop}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{row.type}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{row.def}</td>
                  <td className="px-4 py-3 text-muted">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Card API */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Card</h2>
        <p className="mt-2 text-muted">
          A container for grouping related content.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">Prop</th>
                <th className="px-4 py-3 font-medium text-foreground">Type</th>
                <th className="px-4 py-3 font-medium text-foreground">Default</th>
                <th className="px-4 py-3 font-medium text-foreground">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { prop: "variant", type: '"elevated" | "outlined" | "filled"', def: '"elevated"', desc: "Card style variant" },
                { prop: "padding", type: '"none" | "sm" | "md" | "lg"', def: '"md"', desc: "Internal padding" },
                { prop: "hoverable", type: "boolean", def: "false", desc: "Add hover effect" },
                { prop: "clickable", type: "boolean", def: "false", desc: "Make card clickable" },
              ].map((row) => (
                <tr key={row.prop} className="bg-card">
                  <td className="px-4 py-3 font-mono text-xs text-primary">{row.prop}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{row.type}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{row.def}</td>
                  <td className="px-4 py-3 text-muted">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Input API */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Input</h2>
        <p className="mt-2 text-muted">
          Text input field with labels, validation, and helper text.
        </p>
        <div className="mt-4 overflow-hidden rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-secondary">
              <tr>
                <th className="px-4 py-3 font-medium text-foreground">Prop</th>
                <th className="px-4 py-3 font-medium text-foreground">Type</th>
                <th className="px-4 py-3 font-medium text-foreground">Default</th>
                <th className="px-4 py-3 font-medium text-foreground">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                { prop: "label", type: "string", def: "-", desc: "Input label" },
                { prop: "placeholder", type: "string", def: "-", desc: "Placeholder text" },
                { prop: "error", type: "string", def: "-", desc: "Error message" },
                { prop: "helperText", type: "string", def: "-", desc: "Helper text below input" },
                { prop: "disabled", type: "boolean", def: "false", desc: "Disable the input" },
                { prop: "required", type: "boolean", def: "false", desc: "Mark as required" },
              ].map((row) => (
                <tr key={row.prop} className="bg-card">
                  <td className="px-4 py-3 font-mono text-xs text-primary">{row.prop}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{row.type}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted">{row.def}</td>
                  <td className="px-4 py-3 text-muted">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
