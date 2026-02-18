import CodePreview from "@/components/CodePreview";

export default function AnimationsShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="animate-[slide-up_0.6s_ease-out] text-5xl font-extrabold text-white">
            Animations & Motion
          </h1>
          <p className="mt-3 animate-[slide-up_0.6s_ease-out_0.2s_both] text-slate-400">
            Micro-interactions, hover effects, loading states, and kinetic typography.
          </p>
        </div>

        {/* 1. Hover Effect Cards */}
        <section className="mt-16">
          <CodePreview
            title="Hover Effect Cards"
            description="Interactive cards with different hover transitions"
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {/* Scale Up */}
  <div className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-105 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10">
    <h3 className="font-bold text-white">Scale Up</h3>
    <p className="mt-2 text-sm text-slate-400">Smoothly scales to 105% on hover.</p>
  </div>

  {/* Lift Up */}
  <div className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
    <h3 className="font-bold text-white">Lift Up</h3>
    <p className="mt-2 text-sm text-slate-400">Floats upward with shadow depth.</p>
  </div>

  {/* Glow */}
  <div className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]">
    <h3 className="font-bold text-white">Glow</h3>
    <p className="mt-2 text-sm text-slate-400">Gains a soft glow effect on hover.</p>
  </div>

  {/* Border Shift */}
  <div className="group cursor-pointer rounded-2xl border-2 border-slate-800 bg-slate-900 p-6 transition-all duration-500 hover:border-emerald-500">
    <h3 className="font-bold text-white transition-colors group-hover:text-emerald-400">Border Shift</h3>
    <p className="mt-2 text-sm text-slate-400">Border and text color transition.</p>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-105 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10">
                <h3 className="font-bold text-white">Scale Up</h3>
                <p className="mt-2 text-sm text-slate-400">Smoothly scales to 105% on hover.</p>
              </div>
              <div className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
                <h3 className="font-bold text-white">Lift Up</h3>
                <p className="mt-2 text-sm text-slate-400">Floats upward with shadow depth.</p>
              </div>
              <div className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]">
                <h3 className="font-bold text-white">Glow</h3>
                <p className="mt-2 text-sm text-slate-400">Gains a soft glow effect on hover.</p>
              </div>
              <div className="group cursor-pointer rounded-2xl border-2 border-slate-800 bg-slate-900 p-6 transition-all duration-500 hover:border-emerald-500">
                <h3 className="font-bold text-white transition-colors group-hover:text-emerald-400">Border Shift</h3>
                <p className="mt-2 text-sm text-slate-400">Border and text color transition.</p>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 2. Animated Buttons */}
        <section className="mt-16">
          <CodePreview
            title="Animated Buttons"
            description="Buttons with continuous and hover-triggered animations"
            code={`<div className="flex flex-wrap items-center gap-4">
  {/* Pulse */}
  <button className="animate-pulse rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white">
    Pulse
  </button>

  {/* Bounce */}
  <button className="animate-bounce rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white">
    Bounce
  </button>

  {/* Wiggle */}
  <button className="animate-[wiggle_1s_ease-in-out_infinite] rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white">
    Wiggle
  </button>

  {/* Shimmer */}
  <button className="relative overflow-hidden rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white">
    <span className="relative z-10">Shimmer</span>
    <div className="absolute inset-0 animate-[shimmer_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%]" />
  </button>

  {/* Spin Border */}
  <div className="animate-[spin_3s_linear_infinite] rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 p-[2px]">
    <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-white">
      Spin Border
    </button>
  </div>

  {/* Expand */}
  <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:px-10 hover:shadow-lg hover:shadow-emerald-500/30">
    Expand
  </button>
</div>`}
          >
            <div className="flex flex-wrap items-center gap-4">
              <button className="animate-pulse rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white">
                Pulse
              </button>
              <button className="animate-bounce rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white">
                Bounce
              </button>
              <button className="animate-[wiggle_1s_ease-in-out_infinite] rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white">
                Wiggle
              </button>
              <button className="relative overflow-hidden rounded-xl bg-slate-800 px-6 py-3 font-semibold text-white">
                <span className="relative z-10">Shimmer</span>
                <div className="absolute inset-0 animate-[shimmer_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%]" />
              </button>
              <div className="animate-[spin_3s_linear_infinite] rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 p-[2px]">
                <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-white">
                  Spin Border
                </button>
              </div>
              <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:px-10 hover:shadow-lg hover:shadow-emerald-500/30">
                Expand
              </button>
            </div>
          </CodePreview>
        </section>

        {/* 3. Loading States */}
        <section className="mt-16">
          <CodePreview
            title="Loading States"
            description="Various loading indicators and skeleton screens"
            code={`<div className="flex flex-wrap items-center gap-8">
  {/* Spinner */}
  <div className="text-center">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />
    <p className="mt-2 text-xs text-slate-500">Spinner</p>
  </div>

  {/* Bouncing Dots */}
  <div className="text-center">
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="h-3 w-3 animate-[bounce-sm_1.4s_infinite] rounded-full bg-cyan-500"
          style={{ animationDelay: \`\${i * 0.2}s\` }}
        />
      ))}
    </div>
    <p className="mt-2 text-xs text-slate-500">Bouncing Dots</p>
  </div>

  {/* Equalizer Bars */}
  <div className="text-center">
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="w-1.5 animate-[bounce-sm_1.2s_infinite] rounded-full bg-pink-500"
          style={{ height: \`\${16 + i * 4}px\`, animationDelay: \`\${i * 0.15}s\` }}
        />
      ))}
    </div>
    <p className="mt-2 text-xs text-slate-500">Equalizer</p>
  </div>

  {/* Progress Ring */}
  <div className="text-center">
    <div className="relative h-12 w-12">
      <svg className="h-12 w-12 -rotate-90 animate-[spin_2s_linear_infinite]" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="none" stroke="#334155" strokeWidth="4" />
        <circle cx="24" cy="24" r="20" fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" strokeDasharray="80 126" />
      </svg>
    </div>
    <p className="mt-2 text-xs text-slate-500">Ring</p>
  </div>

  {/* Skeleton */}
  <div className="w-48 space-y-2 rounded-xl border border-slate-800 bg-slate-900 p-4">
    <div className="h-3 w-3/4 animate-pulse rounded bg-slate-800" />
    <div className="h-3 animate-pulse rounded bg-slate-800" />
    <div className="h-3 w-1/2 animate-pulse rounded bg-slate-800" />
    <p className="mt-1 text-[10px] text-slate-600">Skeleton</p>
  </div>
</div>`}
          >
            <div className="flex flex-wrap items-center gap-8">
              <div className="text-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />
                <p className="mt-2 text-xs text-slate-500">Spinner</p>
              </div>
              <div className="text-center">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-3 w-3 animate-[bounce-sm_1.4s_infinite] rounded-full bg-cyan-500" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
                <p className="mt-2 text-xs text-slate-500">Bouncing Dots</p>
              </div>
              <div className="text-center">
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-1.5 animate-[bounce-sm_1.2s_infinite] rounded-full bg-pink-500" style={{ height: `${16 + i * 4}px`, animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
                <p className="mt-2 text-xs text-slate-500">Equalizer</p>
              </div>
              <div className="text-center">
                <div className="relative h-12 w-12">
                  <svg className="h-12 w-12 -rotate-90 animate-[spin_2s_linear_infinite]" viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="20" fill="none" stroke="#334155" strokeWidth="4" />
                    <circle cx="24" cy="24" r="20" fill="none" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" strokeDasharray="80 126" />
                  </svg>
                </div>
                <p className="mt-2 text-xs text-slate-500">Ring</p>
              </div>
              <div className="w-48 space-y-2 rounded-xl border border-slate-800 bg-slate-900 p-4">
                <div className="h-3 w-3/4 animate-pulse rounded bg-slate-800" />
                <div className="h-3 animate-pulse rounded bg-slate-800" />
                <div className="h-3 w-1/2 animate-pulse rounded bg-slate-800" />
                <p className="mt-1 text-[10px] text-slate-600">Skeleton</p>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 4. Animated Typography */}
        <section className="mt-16">
          <CodePreview
            title="Animated Typography"
            description="Text entries with fade, slide, and scale animations"
            code={`<div className="space-y-6">
  <div className="animate-[fade-in_1s_ease-out] text-4xl font-extrabold text-white">
    Fade In Text
  </div>
  <div className="animate-[slide-up_0.8s_ease-out] text-4xl font-extrabold text-gradient">
    Slide Up + Gradient
  </div>
  <div className="animate-[slide-in-right_0.8s_ease-out] text-4xl font-extrabold text-gradient-fire">
    Slide In Right
  </div>
  <div className="animate-[scale-in_0.5s_ease-out] text-4xl font-extrabold text-gradient-ocean">
    Scale In Effect
  </div>
</div>`}
          >
            <div className="space-y-6">
              <div className="animate-[fade-in_1s_ease-out] text-4xl font-extrabold text-white">
                Fade In Text
              </div>
              <div className="animate-[slide-up_0.8s_ease-out] text-4xl font-extrabold text-gradient">
                Slide Up + Gradient
              </div>
              <div className="animate-[slide-in-right_0.8s_ease-out] text-4xl font-extrabold text-gradient-fire">
                Slide In Right
              </div>
              <div className="animate-[scale-in_0.5s_ease-out] text-4xl font-extrabold text-gradient-ocean">
                Scale In Effect
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 5. Staggered List Animation */}
        <section className="mt-16">
          <CodePreview
            title="Staggered List Animation"
            description="Task items appearing with staggered slide-up delays"
            code={`<div className="max-w-md space-y-3">
  {["Design components", "Write documentation", "Build examples", "Deploy to production", "Gather feedback"].map((item, i) => (
    <div
      key={item}
      className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 animate-[slide-up_0.5s_ease-out_both]"
      style={{ animationDelay: \`\${i * 0.1}s\` }}
    >
      <div className={\`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white \${
        i < 3 ? "bg-emerald-500" : "bg-slate-700"
      }\`}>
        {i < 3 ? "\\u2713" : i + 1}
      </div>
      <span className={\`text-sm font-medium \${i < 3 ? "text-slate-400 line-through" : "text-white"}\`}>
        {item}
      </span>
    </div>
  ))}
</div>`}
          >
            <div className="max-w-md space-y-3">
              {["Design components", "Write documentation", "Build examples", "Deploy to production", "Gather feedback"].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 animate-[slide-up_0.5s_ease-out_both]"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white ${
                    i < 3 ? "bg-emerald-500" : "bg-slate-700"
                  }`}>
                    {i < 3 ? "\u2713" : i + 1}
                  </div>
                  <span className={`text-sm font-medium ${i < 3 ? "text-slate-400 line-through" : "text-white"}`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* 6. Animated Counter Cards */}
        <section className="mt-16">
          <CodePreview
            title="Animated Counter Cards"
            description="Stat cards with staggered scale-in animations"
            code={`<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
  {[
    { value: "24,589", label: "Active Users", color: "text-violet-400", delay: "0s" },
    { value: "$1.2M", label: "Revenue", color: "text-emerald-400", delay: "0.1s" },
    { value: "99.9%", label: "Uptime", color: "text-cyan-400", delay: "0.2s" },
    { value: "4.9/5", label: "Rating", color: "text-amber-400", delay: "0.3s" },
  ].map((stat) => (
    <div
      key={stat.label}
      className={\`animate-[scale-in_0.5s_ease-out_both] rounded-xl border border-slate-800 bg-slate-900 p-6 text-center\`}
      style={{ animationDelay: stat.delay }}
    >
      <p className={\`text-3xl font-extrabold \${stat.color}\`}>{stat.value}</p>
      <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
    </div>
  ))}
</div>`}
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "24,589", label: "Active Users", color: "text-violet-400", delay: "0s" },
                { value: "$1.2M", label: "Revenue", color: "text-emerald-400", delay: "0.1s" },
                { value: "99.9%", label: "Uptime", color: "text-cyan-400", delay: "0.2s" },
                { value: "4.9/5", label: "Rating", color: "text-amber-400", delay: "0.3s" },
              ].map((stat) => (
                <div key={stat.label} className="animate-[scale-in_0.5s_ease-out_both] rounded-xl border border-slate-800 bg-slate-900 p-6 text-center" style={{ animationDelay: stat.delay }}>
                  <p className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* 7. Pulse & Ping Effects */}
        <section className="mt-16">
          <CodePreview
            title="Pulse & Ping Effects"
            description="Notification dots and status indicators with ping and pulse animations"
            code={`<div className="flex flex-wrap items-center gap-10">
  {/* Notification with ping */}
  <div className="flex items-center gap-3">
    <div className="relative">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
        <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </div>
      <span className="absolute -right-1 -top-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500" />
      </span>
    </div>
    <span className="text-sm text-slate-400">Notification Ping</span>
  </div>

  {/* Status indicators */}
  <div className="flex items-center gap-6">
    <div className="flex items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
      </span>
      <span className="text-sm text-slate-400">Online</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
      </span>
      <span className="text-sm text-slate-400">Away</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="inline-flex h-3 w-3 rounded-full bg-slate-600" />
      <span className="text-sm text-slate-400">Offline</span>
    </div>
  </div>
</div>`}
          >
            <div className="flex flex-wrap items-center gap-10">
              {/* Notification with ping */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <span className="absolute -right-1 -top-1 flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500" />
                  </span>
                </div>
                <span className="text-sm text-slate-400">Notification Ping</span>
              </div>

              {/* Status indicators */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-sm text-slate-400">Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500" />
                  </span>
                  <span className="text-sm text-slate-400">Away</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-3 w-3 rounded-full bg-slate-600" />
                  <span className="text-sm text-slate-400">Offline</span>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 8. Transition Showcase */}
        <section className="mt-16">
          <CodePreview
            title="Transition Showcase"
            description="Buttons demonstrating different CSS transition properties"
            code={`<div className="flex flex-wrap items-center gap-4">
  <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:border-violet-500 hover:bg-violet-600 hover:text-white">
    Colors
  </button>
  <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-110 hover:-rotate-3">
    Transform
  </button>
  <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/25">
    Shadow
  </button>
  <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/25">
    All
  </button>
</div>`}
          >
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:border-violet-500 hover:bg-violet-600 hover:text-white">
                Colors
              </button>
              <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-110 hover:-rotate-3">
                Transform
              </button>
              <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition-shadow duration-300 hover:shadow-xl hover:shadow-cyan-500/25">
                Shadow
              </button>
              <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-pink-500 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/25">
                All
              </button>
            </div>
          </CodePreview>
        </section>
      </div>
    </div>
  );
}
