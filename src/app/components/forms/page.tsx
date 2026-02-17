export default function FormsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Forms</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Complete form components including inputs, selects, checkboxes, radios,
        switches, textareas, and form validation patterns.
      </p>

      {/* Text Inputs */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Text Inputs</h2>
        <div className="mt-4 max-w-md space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">
              Default Input
            </label>
            <input
              type="text"
              placeholder="Enter text..."
              className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">
              With Helper Text
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <p className="mt-1 text-xs text-muted">
              We&apos;ll never share your email.
            </p>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">
              Error State
            </label>
            <input
              type="text"
              defaultValue="invalid"
              className="w-full rounded-lg border border-red-400 bg-card px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-red-200"
            />
            <p className="mt-1 text-xs text-red-500">
              This field is required.
            </p>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">
              Disabled Input
            </label>
            <input
              type="text"
              disabled
              placeholder="Disabled..."
              className="w-full cursor-not-allowed rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-muted"
            />
          </div>
        </div>
      </section>

      {/* Textarea */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Textarea</h2>
        <div className="mt-4 max-w-md">
          <label className="mb-1 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Write your message..."
            className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </section>

      {/* Select */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Select</h2>
        <div className="mt-4 max-w-md">
          <label className="mb-1 block text-sm font-medium text-foreground">
            Framework
          </label>
          <select className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20">
            <option>Select a framework...</option>
            <option>React</option>
            <option>Next.js</option>
            <option>Vue</option>
            <option>Angular</option>
            <option>Svelte</option>
          </select>
        </div>
      </section>

      {/* Checkboxes & Radios */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">
          Checkboxes & Radios
        </h2>
        <div className="mt-4 grid max-w-md grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-medium text-foreground">Checkboxes</p>
            <div className="mt-3 space-y-2">
              {["React", "TypeScript", "Tailwind"].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-border accent-primary"
                    defaultChecked={item === "React"}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Radio Buttons</p>
            <div className="mt-3 space-y-2">
              {["Small", "Medium", "Large"].map((size) => (
                <label
                  key={size}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <input
                    type="radio"
                    name="size"
                    className="h-4 w-4 border-border accent-primary"
                    defaultChecked={size === "Medium"}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Form Example */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">
          Complete Form
        </h2>
        <form className="mt-4 max-w-lg space-y-5 rounded-xl border border-border bg-card p-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              rows={3}
              placeholder="Your message..."
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border accent-primary"
            />
            I agree to the terms and conditions
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
