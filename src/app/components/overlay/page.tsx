export default function OverlayPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Overlay</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Overlay components: modals, drawers, popovers, and dropdown menus.
      </p>

      {/* Modal Preview */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Modal</h2>
        <p className="mt-1 text-sm text-muted">
          A centered dialog that overlays the page content.
        </p>
        <div className="mt-4">
          <div className="relative max-w-lg rounded-xl border border-border bg-card shadow-2xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <h3 className="text-lg font-semibold text-foreground">
                Confirm Action
              </h3>
              <button className="rounded-lg p-1 text-muted hover:bg-secondary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-muted">
                Are you sure you want to delete this item? This action cannot be
                undone.
              </p>
            </div>
            <div className="flex justify-end gap-3 border-t border-border p-4">
              <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary">
                Cancel
              </button>
              <button className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Drawer Preview */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">Drawer</h2>
        <p className="mt-1 text-sm text-muted">
          A panel that slides in from the edge of the screen.
        </p>
        <div className="mt-4 flex gap-4">
          <div className="w-80 rounded-xl border border-border bg-card shadow-xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <h3 className="font-semibold text-foreground">Settings</h3>
              <button className="rounded-lg p-1 text-muted hover:bg-secondary">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4 p-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Display Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
                />
              </div>
              <button className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dropdown Preview */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">Dropdown Menu</h2>
        <p className="mt-1 text-sm text-muted">
          A menu that appears when triggered by a button.
        </p>
        <div className="mt-4">
          <div className="inline-block">
            <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary">
              Options
              <svg className="ml-2 -mr-1 inline h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="mt-1 w-48 rounded-xl border border-border bg-card py-1 shadow-lg">
              {["Edit", "Duplicate", "Archive"].map((item) => (
                <button
                  key={item}
                  className="flex w-full items-center px-4 py-2 text-sm text-foreground hover:bg-secondary"
                >
                  {item}
                </button>
              ))}
              <div className="my-1 border-t border-border" />
              <button className="flex w-full items-center px-4 py-2 text-sm text-red-500 hover:bg-secondary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popover Preview */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground">Popover</h2>
        <p className="mt-1 text-sm text-muted">
          A floating panel triggered on click.
        </p>
        <div className="mt-4 inline-block">
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark">
            Show Popover
          </button>
          <div className="mt-2 max-w-xs rounded-xl border border-border bg-card p-4 shadow-lg">
            <h4 className="font-semibold text-foreground">Popover Title</h4>
            <p className="mt-1 text-sm text-muted">
              This is a popover that can contain any content, forms, or
              interactive elements.
            </p>
            <div className="mt-3 flex gap-2">
              <button className="rounded-md bg-primary px-3 py-1 text-xs text-white">
                Confirm
              </button>
              <button className="rounded-md border border-border px-3 py-1 text-xs text-foreground">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
