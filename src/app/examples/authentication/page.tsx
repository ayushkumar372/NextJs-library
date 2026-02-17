import Link from "next/link";

export default function AuthenticationExample() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-foreground">
        Authentication Example
      </h1>
      <p className="mt-3 text-muted">
        Login, register, and password reset forms built with ReactUI.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Login */}
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
              R
            </div>
            <h2 className="mt-4 text-2xl font-bold text-foreground">
              Welcome back
            </h2>
            <p className="mt-1 text-sm text-muted">
              Sign in to your account
            </p>
          </div>
          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">
                  Password
                </label>
                <Link href="#" className="text-xs text-primary hover:text-primary-dark">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-foreground">
              <input type="checkbox" className="h-4 w-4 rounded accent-primary" />
              Remember me
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Sign In
            </button>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted">or continue with</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="rounded-lg border border-border py-2 text-sm font-medium text-foreground hover:bg-secondary">
                Google
              </button>
              <button type="button" className="rounded-lg border border-border py-2 text-sm font-medium text-foreground hover:bg-secondary">
                GitHub
              </button>
            </div>
          </form>
        </div>

        {/* Register */}
        <div className="rounded-xl border border-border bg-card p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Create account
            </h2>
            <p className="mt-1 text-sm text-muted">
              Get started with ReactUI Library
            </p>
          </div>
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
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
                placeholder="you@example.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-foreground">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder-muted outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <p className="mt-1 text-xs text-muted">
                Must be at least 8 characters
              </p>
            </div>
            <label className="flex items-start gap-2 text-sm text-foreground">
              <input type="checkbox" className="mt-0.5 h-4 w-4 rounded accent-primary" />
              <span>
                I agree to the{" "}
                <Link href="#" className="text-primary hover:text-primary-dark">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-primary hover:text-primary-dark">
                  Privacy Policy
                </Link>
              </span>
            </label>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-2.5 text-sm font-medium text-white hover:bg-primary-dark"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
