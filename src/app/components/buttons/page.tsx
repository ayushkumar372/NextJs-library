export default function ButtonsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Buttons</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Versatile button components for every use case. Supports multiple
        variants, sizes, states, and icon combinations.
      </p>

      {/* Variants */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Variants</h2>
        <p className="mt-1 text-sm text-muted">
          Choose from different visual styles.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark">
            Primary
          </button>
          <button className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-border">
            Secondary
          </button>
          <button className="rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            Outline
          </button>
          <button className="rounded-lg bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            Ghost
          </button>
          <button className="rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-600">
            Destructive
          </button>
          <button className="rounded-lg px-5 py-2.5 text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline">
            Link
          </button>
        </div>

        {/* Code block */}
        <div className="mt-4 rounded-xl border border-border bg-secondary p-4">
          <pre className="overflow-x-auto font-mono text-sm text-foreground">
{`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`}
          </pre>
        </div>
      </section>

      {/* Sizes */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Sizes</h2>
        <p className="mt-1 text-sm text-muted">
          Buttons come in small, medium, and large sizes.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-dark">
            Small
          </button>
          <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark">
            Medium
          </button>
          <button className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white transition-colors hover:bg-primary-dark">
            Large
          </button>
        </div>
      </section>

      {/* States */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">States</h2>
        <p className="mt-1 text-sm text-muted">
          Disabled, loading, and active states.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark">
            Default
          </button>
          <button
            disabled
            className="cursor-not-allowed rounded-lg bg-primary/50 px-5 py-2.5 text-sm font-medium text-white/70"
          >
            Disabled
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Loading...
          </button>
        </div>
      </section>

      {/* With Icons */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">With Icons</h2>
        <p className="mt-1 text-sm text-muted">
          Buttons with leading and trailing icons.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Item
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
            Download
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-secondary">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </section>

      {/* Button Group */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Button Group</h2>
        <p className="mt-1 text-sm text-muted">
          Group related buttons together.
        </p>
        <div className="mt-4 inline-flex rounded-lg border border-border">
          <button className="rounded-l-lg bg-primary px-4 py-2 text-sm font-medium text-white">
            Left
          </button>
          <button className="border-x border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary">
            Center
          </button>
          <button className="rounded-r-lg px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary">
            Right
          </button>
        </div>
      </section>
    </div>
  );
}
