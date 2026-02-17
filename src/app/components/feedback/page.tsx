export default function FeedbackPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">Feedback</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Feedback components: alerts, toasts, progress bars, spinners, and
        skeleton loaders.
      </p>

      {/* Alerts */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Alerts</h2>
        <div className="mt-4 max-w-lg space-y-3">
          <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm font-medium text-blue-800">Info</p>
              <p className="text-sm text-blue-700">This is an informational alert message.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm font-medium text-green-800">Success</p>
              <p className="text-sm text-green-700">Your changes have been saved successfully.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm font-medium text-yellow-800">Warning</p>
              <p className="text-sm text-yellow-700">Please review your input before continuing.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
            <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-sm font-medium text-red-800">Error</p>
              <p className="text-sm text-red-700">Something went wrong. Please try again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bars */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Progress Bars</h2>
        <div className="mt-4 max-w-md space-y-4">
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-foreground">Progress</span>
              <span className="text-muted">25%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary">
              <div className="h-2 w-1/4 rounded-full bg-primary" />
            </div>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-foreground">Upload</span>
              <span className="text-muted">65%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary">
              <div className="h-2 w-[65%] rounded-full bg-green-500" />
            </div>
          </div>
          <div>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-foreground">Storage</span>
              <span className="text-muted">90%</span>
            </div>
            <div className="h-2 rounded-full bg-secondary">
              <div className="h-2 w-[90%] rounded-full bg-red-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Spinners */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Spinners</h2>
        <div className="mt-4 flex items-center gap-6">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <div className="h-8 w-8 animate-spin rounded-full border-3 border-primary border-t-transparent" />
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <div className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-sm text-foreground">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            Loading...
          </div>
        </div>
      </section>

      {/* Skeleton */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground">Skeleton</h2>
        <div className="mt-4 max-w-sm space-y-3 rounded-xl border border-border bg-card p-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 animate-pulse rounded-full bg-secondary" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-24 animate-pulse rounded bg-secondary" />
              <div className="h-2 w-16 animate-pulse rounded bg-secondary" />
            </div>
          </div>
          <div className="h-3 animate-pulse rounded bg-secondary" />
          <div className="h-3 w-4/5 animate-pulse rounded bg-secondary" />
          <div className="h-3 w-3/5 animate-pulse rounded bg-secondary" />
          <div className="h-32 animate-pulse rounded-lg bg-secondary" />
        </div>
      </section>
    </div>
  );
}
