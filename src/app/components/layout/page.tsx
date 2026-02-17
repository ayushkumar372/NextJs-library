export default function LayoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Layout</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Layout components for structuring your pages: containers, grids,
        dividers, stacks, and aspect ratios.
      </p>

      {/* Container */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Container</h2>
        <div className="mt-4 space-y-3">
          <div className="rounded-lg border border-dashed border-primary/30 bg-primary/5 p-4 text-center text-sm text-primary">
            max-w-7xl (default)
          </div>
          <div className="mx-auto max-w-4xl rounded-lg border border-dashed border-accent/30 bg-accent/5 p-4 text-center text-sm text-accent">
            max-w-4xl (narrow)
          </div>
          <div className="mx-auto max-w-2xl rounded-lg border border-dashed border-green-500/30 bg-green-500/5 p-4 text-center text-sm text-green-600">
            max-w-2xl (compact)
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Grid</h2>
        <p className="mt-1 text-sm text-muted">Responsive grid layouts.</p>

        <p className="mt-4 text-sm font-medium text-foreground">2 Columns</p>
        <div className="mt-2 grid grid-cols-2 gap-3">
          {[1, 2].map((n) => (
            <div key={n} className="rounded-lg border border-border bg-secondary p-6 text-center text-sm text-muted">
              Column {n}
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm font-medium text-foreground">3 Columns</p>
        <div className="mt-2 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((n) => (
            <div key={n} className="rounded-lg border border-border bg-secondary p-6 text-center text-sm text-muted">
              Column {n}
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm font-medium text-foreground">4 Columns</p>
        <div className="mt-2 grid grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="rounded-lg border border-border bg-secondary p-6 text-center text-sm text-muted">
              Col {n}
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Stack</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">Vertical Stack</p>
            <div className="space-y-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="rounded-lg border border-border bg-secondary p-4 text-center text-sm text-muted">
                  Item {n}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">Horizontal Stack</p>
            <div className="flex gap-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex-1 rounded-lg border border-border bg-secondary p-4 text-center text-sm text-muted">
                  Item {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Divider</h2>
        <div className="mt-4 max-w-md space-y-4">
          <div className="border-t border-border" />
          <p className="text-sm text-muted">Solid divider (above)</p>

          <div className="border-t border-dashed border-border" />
          <p className="text-sm text-muted">Dashed divider (above)</p>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm text-muted">OR</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <p className="text-sm text-muted">Divider with text (above)</p>
        </div>
      </section>

      {/* Aspect Ratio */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Aspect Ratio</h2>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">1:1</p>
            <div className="flex aspect-square items-center justify-center rounded-lg border border-border bg-secondary text-sm text-muted">
              Square
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">16:9</p>
            <div className="flex aspect-video items-center justify-center rounded-lg border border-border bg-secondary text-sm text-muted">
              Video
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">4:3</p>
            <div className="flex aspect-[4/3] items-center justify-center rounded-lg border border-border bg-secondary text-sm text-muted">
              Photo
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
