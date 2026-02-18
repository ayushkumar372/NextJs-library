"use client";

import Link from "next/link";
import CodePreview from "@/components/CodePreview";

export default function ButtonsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm">
        <Link href="/components" className="text-muted hover:text-primary transition-colors">Components</Link>
        <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        <span className="font-medium text-foreground">Buttons</span>
      </nav>

      <h1 className="text-4xl font-bold text-foreground">Buttons</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Versatile button components for every use case. From solid and outline to gradient, icon, loading, and social login buttons.
      </p>

      <div className="mt-10 space-y-8">
        {/* Solid Variants */}
        <CodePreview
          title="Solid Variants"
          description="Standard filled buttons with different color schemes."
          code={`<button className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-700">Primary</button>
<button className="rounded-lg bg-slate-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800">Secondary</button>
<button className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700">Success</button>
<button className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700">Danger</button>
<button className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-amber-600">Warning</button>
<button className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-700">Info</button>`}
        >
          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700">Primary</button>
            <button className="rounded-lg bg-slate-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800">Secondary</button>
            <button className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700">Success</button>
            <button className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700">Danger</button>
            <button className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-amber-600">Warning</button>
            <button className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700">Info</button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button className="rounded-md bg-violet-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-violet-700">Small</button>
            <button className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-violet-700">Medium</button>
            <button className="rounded-lg bg-violet-600 px-7 py-3 text-base font-medium text-white hover:bg-violet-700">Large</button>
            <button className="rounded-xl bg-violet-600 px-8 py-3.5 text-lg font-medium text-white hover:bg-violet-700">Extra Large</button>
          </div>
        </CodePreview>

        {/* Outline Variants */}
        <CodePreview
          title="Outline Variants"
          description="Bordered buttons with transparent backgrounds."
          code={`<button className="rounded-lg border-2 border-violet-600 px-5 py-2.5 text-sm font-medium text-violet-400 hover:bg-violet-600 hover:text-white">Primary</button>
<button className="rounded-lg border-2 border-emerald-500 px-5 py-2.5 text-sm font-medium text-emerald-400 hover:bg-emerald-500 hover:text-white">Success</button>
<button className="rounded-lg border-2 border-red-500 px-5 py-2.5 text-sm font-medium text-red-400 hover:bg-red-500 hover:text-white">Danger</button>
<button className="rounded-lg border-2 border-sky-500 px-5 py-2.5 text-sm font-medium text-sky-400 hover:bg-sky-500 hover:text-white">Info</button>
<button className="rounded-lg border-2 border-amber-500 px-5 py-2.5 text-sm font-medium text-amber-400 hover:bg-amber-500 hover:text-white">Warning</button>`}
        >
          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg border-2 border-violet-600 px-5 py-2.5 text-sm font-medium text-violet-400 transition-all hover:bg-violet-600 hover:text-white">Primary</button>
            <button className="rounded-lg border-2 border-emerald-500 px-5 py-2.5 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-500 hover:text-white">Success</button>
            <button className="rounded-lg border-2 border-red-500 px-5 py-2.5 text-sm font-medium text-red-400 transition-all hover:bg-red-500 hover:text-white">Danger</button>
            <button className="rounded-lg border-2 border-sky-500 px-5 py-2.5 text-sm font-medium text-sky-400 transition-all hover:bg-sky-500 hover:text-white">Info</button>
            <button className="rounded-lg border-2 border-amber-500 px-5 py-2.5 text-sm font-medium text-amber-400 transition-all hover:bg-amber-500 hover:text-white">Warning</button>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-full border-2 border-violet-600 px-6 py-2.5 text-sm font-medium text-violet-400 transition-all hover:bg-violet-600 hover:text-white">Rounded Primary</button>
            <button className="rounded-full border-2 border-emerald-500 px-6 py-2.5 text-sm font-medium text-emerald-400 transition-all hover:bg-emerald-500 hover:text-white">Rounded Success</button>
            <button className="rounded-full border-2 border-red-500 px-6 py-2.5 text-sm font-medium text-red-400 transition-all hover:bg-red-500 hover:text-white">Rounded Danger</button>
          </div>
        </CodePreview>

        {/* Gradient Buttons */}
        <CodePreview
          title="Gradient Buttons"
          description="Eye-catching buttons with gradient backgrounds."
          code={`<button className="rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40">Purple Indigo</button>
<button className="rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-pink-500/25">Pink Rose</button>
<button className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-emerald-500/25">Emerald Teal</button>
<button className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-amber-500/25">Amber Orange</button>
<button className="rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-purple-500/30">Multi-stop Gradient</button>
<button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-bold text-white shadow-xl shadow-cyan-500/30">Rounded Gradient</button>`}
        >
          <div className="flex flex-wrap gap-3">
            <button className="rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40 hover:scale-[1.02]">Purple Indigo</button>
            <button className="rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-pink-500/25 transition-all hover:shadow-pink-500/40 hover:scale-[1.02]">Pink Rose</button>
            <button className="rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-emerald-500/40 hover:scale-[1.02]">Emerald Teal</button>
            <button className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-[1.02]">Amber Orange</button>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="rounded-xl bg-gradient-to-r from-violet-600 via-purple-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-purple-500/30 transition-all hover:shadow-purple-500/50 hover:scale-[1.02]">Multi-stop Gradient</button>
            <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-sm font-bold text-white shadow-xl shadow-cyan-500/30 transition-all hover:shadow-cyan-500/50 hover:scale-[1.02]">Rounded Gradient</button>
          </div>
        </CodePreview>

        {/* Icon Buttons */}
        <CodePreview
          title="Icon Buttons"
          description="Buttons with icons, icon-only buttons, and various icon placements."
          code={`<!-- Leading Icon -->
<button className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white">
  <PlusIcon /> Add Item
</button>
<!-- Trailing Icon -->
<button className="flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-300">
  Download <ArrowDownIcon />
</button>
<!-- Icon Only -->
<button className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-white">
  <HeartIcon />
</button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-violet-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              Add Item
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800">
              Download
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Approve
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-700">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              Delete
            </button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600 text-white transition-colors hover:bg-violet-700">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600 text-slate-300 transition-colors hover:bg-slate-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600 text-slate-300 transition-colors hover:bg-slate-800">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/25 transition-all hover:scale-110">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25 transition-all hover:scale-110">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </button>
          </div>
        </CodePreview>

        {/* Loading / Animated Buttons */}
        <CodePreview
          title="Loading & Animated Buttons"
          description="Buttons with loading spinners, pulse effects, and animated states."
          code={`<button className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white">
  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
  Processing...
</button>
<button disabled className="cursor-not-allowed rounded-lg bg-violet-600/50 px-5 py-2.5 text-sm font-medium text-white/70">Disabled</button>
<button className="animate-pulse rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white">Pulsing</button>`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              Processing...
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              Saving...
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
              Uploading...
            </button>
            <button disabled className="cursor-not-allowed rounded-lg bg-violet-600/50 px-5 py-2.5 text-sm font-medium text-white/70">Disabled</button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button className="animate-pulse rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-medium text-white">Pulsing Button</button>
            <button className="animate-bounce rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg">Bouncing</button>
            <button className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/30">Scale on Hover</button>
          </div>
        </CodePreview>

        {/* Social Login Buttons */}
        <CodePreview
          title="Social Login Buttons"
          description="Pre-styled buttons for popular social login providers."
          code={`<button className="flex w-full items-center justify-center gap-3 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm border border-gray-300 hover:bg-gray-50">
  <GoogleIcon /> Continue with Google
</button>
<button className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#1877F2] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#166FE5]">
  <FacebookIcon /> Continue with Facebook
</button>
<button className="flex w-full items-center justify-center gap-3 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900">
  <AppleIcon /> Continue with Apple
</button>
<button className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#24292F] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#1B1F23]">
  <GithubIcon /> Continue with GitHub
</button>`}
          dark={false}
        >
          <div className="mx-auto max-w-sm space-y-3">
            <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
              <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
              Continue with Google
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#1877F2] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#166FE5]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              Continue with Facebook
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
              Continue with Apple
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#24292F] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1B1F23]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              Continue with GitHub
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#1DA1F2] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1a8cd8]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              Continue with X
            </button>
          </div>
        </CodePreview>

        {/* Button Groups */}
        <CodePreview
          title="Button Groups"
          description="Group related buttons together with connected styling."
          code={`<div className="inline-flex rounded-lg border border-slate-700 overflow-hidden">
  <button className="bg-violet-600 px-4 py-2 text-sm font-medium text-white">Left</button>
  <button className="border-x border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800">Center</button>
  <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800">Right</button>
</div>`}
        >
          <div className="space-y-4">
            <div className="inline-flex overflow-hidden rounded-lg border border-slate-700">
              <button className="bg-violet-600 px-4 py-2 text-sm font-medium text-white">Left</button>
              <button className="border-x border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800">Center</button>
              <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800">Right</button>
            </div>
          </div>
          <div className="mt-4 inline-flex overflow-hidden rounded-lg border border-slate-700">
            <button className="bg-slate-800 px-4 py-2 text-sm font-medium text-white">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
            </button>
            <button className="border-x border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
          <div className="mt-4 flex">
            <div className="inline-flex overflow-hidden rounded-full border border-slate-700">
              <button className="bg-violet-600 px-5 py-2 text-sm font-medium text-white">Day</button>
              <button className="border-x border-slate-700 px-5 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800">Week</button>
              <button className="border-r border-slate-700 px-5 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800">Month</button>
              <button className="px-5 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800">Year</button>
            </div>
          </div>
        </CodePreview>

        {/* Floating Action Buttons */}
        <CodePreview
          title="Floating Action Buttons"
          description="FAB-style buttons typically used for primary actions."
          code={`<button className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-xl shadow-violet-500/30 transition-all hover:scale-110">
  <PlusIcon className="h-6 w-6" />
</button>
<button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-xl shadow-pink-500/30 transition-all hover:scale-110">
  <ChatIcon className="h-6 w-6" />
</button>`}
        >
          <div className="flex flex-wrap items-end gap-6">
            <div className="text-center">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-xl shadow-violet-500/30 transition-all hover:scale-110">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </button>
              <p className="mt-2 text-xs text-slate-400">Add</p>
            </div>
            <div className="text-center">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-xl shadow-pink-500/30 transition-all hover:scale-110">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </button>
              <p className="mt-2 text-xs text-slate-400">Chat</p>
            </div>
            <div className="text-center">
              <button className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-xl shadow-emerald-500/30 transition-all hover:scale-110">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </button>
              <p className="mt-2 text-xs text-slate-400">Edit</p>
            </div>
            <div className="text-center">
              <button className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl shadow-amber-500/30 transition-all hover:scale-110 hover:rotate-90">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </button>
              <p className="mt-2 text-xs text-slate-400">Settings</p>
            </div>
            <div className="text-center">
              <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-medium text-white shadow-xl shadow-violet-500/30 transition-all hover:scale-105">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                New Project
              </button>
              <p className="mt-2 text-xs text-slate-400">Extended FAB</p>
            </div>
          </div>
        </CodePreview>
      </div>
    </div>
  );
}
