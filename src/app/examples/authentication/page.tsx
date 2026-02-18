import Link from "next/link";

export default function AuthenticationExample() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Breadcrumb */}
      <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <Link href="/examples" className="text-slate-400 hover:text-slate-700 transition-colors dark:hover:text-white">
            Examples
          </Link>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="font-medium text-slate-900 dark:text-white">Authentication</span>
        </div>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Authentication Forms</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Complete authentication flow: login, registration, password reset, and OTP verification.
        </p>
      </div>

      <div className="mx-auto max-w-7xl space-y-12 px-4 pb-20 sm:px-6 lg:px-8">

        {/* ==================== LOGIN FORM ==================== */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
          <div className="grid lg:grid-cols-2">
            {/* Decorative gradient panel */}
            <div className="relative hidden overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 lg:flex lg:flex-col lg:justify-center lg:p-12">
              <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-pink-400/20 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Secure Authentication
                </div>
                <h2 className="mt-6 text-3xl font-bold text-white">Welcome Back</h2>
                <p className="mt-3 max-w-sm text-indigo-100/70 leading-relaxed">
                  Sign in to access your dashboard, manage your projects, and collaborate with your team.
                </p>
                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm">
                    <p className="text-2xl font-bold text-white">12k+</p>
                    <p className="text-[11px] text-indigo-200/60">Active Users</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm">
                    <p className="text-2xl font-bold text-white">99.9%</p>
                    <p className="text-[11px] text-indigo-200/60">Uptime</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center backdrop-blur-sm">
                    <p className="text-2xl font-bold text-white">256bit</p>
                    <p className="text-[11px] text-indigo-200/60">Encryption</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Login form */}
            <div className="bg-white p-8 dark:bg-slate-900 sm:p-12">
              <div className="mx-auto max-w-sm">
                <div className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-violet-500/25">
                    R
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">Sign in to your account</h2>
                  <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                    Don&apos;t have an account?{" "}
                    <Link href="#" className="font-medium text-violet-600 hover:text-violet-500 dark:text-violet-400">
                      Create one free
                    </Link>
                  </p>
                </div>

                <form className="mt-8 space-y-5">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 pl-10 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                      />
                      <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                      <Link href="#" className="text-xs font-medium text-violet-600 hover:text-violet-500 dark:text-violet-400">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 pl-10 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                      />
                      <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>
                  </div>

                  <label className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-violet-600" />
                    Remember me for 30 days
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30 active:scale-[0.98]"
                  >
                    Sign In
                  </button>

                  {/* Social divider */}
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                    <span className="text-xs font-medium text-slate-400">or continue with</span>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                  </div>

                  {/* Social login buttons */}
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      Google
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    >
                      <svg className="h-4 w-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      Twitter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== REGISTRATION FORM ==================== */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
          <div className="grid lg:grid-cols-2">
            {/* Registration form */}
            <div className="bg-white p-8 dark:bg-slate-900 sm:p-12">
              <div className="mx-auto max-w-md">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Create your account</h2>
                <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                  Already have an account?{" "}
                  <Link href="#" className="font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400">
                    Sign in here
                  </Link>
                </p>

                <form className="mt-8 space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Doe"
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Create a strong password"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                    />
                    {/* Password strength indicator */}
                    <div className="mt-2 flex gap-1">
                      <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                      <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                      <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                      <div className="h-1 flex-1 rounded-full bg-slate-200 dark:bg-slate-700" />
                    </div>
                    <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">Strong password</p>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Repeat your password"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                    />
                  </div>

                  <label className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-emerald-600" />
                    <span>
                      I agree to the{" "}
                      <Link href="#" className="font-medium text-emerald-600 hover:underline dark:text-emerald-400">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="font-medium text-emerald-600 hover:underline dark:text-emerald-400">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-xl hover:shadow-emerald-500/30 active:scale-[0.98]"
                  >
                    Create Account
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    By signing up, you acknowledge you have read and understood our data practices.
                  </p>
                </form>
              </div>
            </div>

            {/* Decorative gradient panel */}
            <div className="relative hidden overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 lg:flex lg:flex-col lg:justify-center lg:p-12">
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-white">Join Thousands of Teams</h2>
                <p className="mt-3 max-w-sm text-emerald-50/70 leading-relaxed">
                  Create your free account and start building amazing products with our component library.
                </p>
                <div className="mt-10 space-y-4">
                  {[
                    "Unlimited projects and team members",
                    "Access to 500+ premium components",
                    "Priority support and updates",
                    "99.9% guaranteed uptime SLA",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/20">
                        <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-sm text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== FORGOT PASSWORD + OTP ==================== */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Forgot Password */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
            <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-rose-500 to-pink-600 p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h2 className="mt-4 text-xl font-bold text-white">Forgot your password?</h2>
                <p className="mt-1.5 text-sm text-rose-100/70">No worries, we will send you a reset link</p>
              </div>
            </div>
            <div className="bg-white p-8 dark:bg-slate-900">
              <form className="space-y-5">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your registered email"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-rose-500 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 transition-all hover:shadow-xl hover:shadow-rose-500/30 active:scale-[0.98]"
                >
                  Send Reset Link
                </button>
                <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                  Remember your password?{" "}
                  <Link href="#" className="font-medium text-rose-600 hover:text-rose-500 dark:text-rose-400">
                    Back to login
                  </Link>
                </p>
              </form>
            </div>
          </div>

          {/* OTP Verification */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
            <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 p-8">
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm">
                  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h2 className="mt-4 text-xl font-bold text-white">OTP Verification</h2>
                <p className="mt-1.5 text-sm text-blue-100/70">Enter the 6-digit code sent to your email</p>
              </div>
            </div>
            <div className="bg-white p-8 dark:bg-slate-900">
              <form className="space-y-6">
                <div>
                  <p className="mb-3 text-center text-sm text-slate-500 dark:text-slate-400">
                    We sent a code to <strong className="text-slate-700 dark:text-slate-200">j***@example.com</strong>
                  </p>
                  {/* OTP input boxes */}
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        placeholder="0"
                        className="h-12 w-12 rounded-lg border border-slate-300 bg-white text-center text-lg font-bold text-slate-900 placeholder-slate-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-600"
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.98]"
                >
                  Verify Code
                </button>

                <div className="text-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Didn&apos;t receive the code?{" "}
                    <button type="button" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
                      Resend
                    </button>
                  </p>
                  <p className="mt-1 text-xs text-slate-400">Code expires in 4:32</p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ==================== SOCIAL LOGIN SECTION ==================== */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800">
          <div className="bg-white p-8 dark:bg-slate-900 sm:p-12">
            <div className="mx-auto max-w-md text-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Quick Sign In</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Choose your preferred method to sign in instantly
              </p>

              <div className="mt-8 space-y-3">
                {/* Google */}
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </button>

                {/* GitHub */}
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Continue with GitHub
                </button>

                {/* Twitter / X */}
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Continue with Twitter
                </button>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                <span className="text-xs font-medium text-slate-400">Secure authentication powered by OAuth 2.0</span>
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              </div>

              <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  256-bit SSL
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  GDPR Compliant
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  SOC 2 Type II
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
