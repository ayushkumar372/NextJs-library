import CodePreview from "@/components/CodePreview";
import ProLock from "@/components/ProLock";

export default function GradientsShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              Gradient Paradise
            </span>
          </h1>
          <p className="mt-3 text-slate-400">
            Mesh gradients, aurora effects, animated borders, and color transitions.
          </p>
        </div>

        {/* 1. Gradient Buttons */}
        <section className="mt-16">
          <CodePreview
            title="Gradient Buttons"
            description="Solid gradient buttons with matching hover shadow glow effects."
            code={`<button className="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:shadow-xl hover:shadow-pink-500/40">
  Pink to Violet
</button>

<button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-xl hover:shadow-cyan-500/40">
  Cyan to Blue
</button>

<button className="rounded-xl bg-gradient-to-r from-amber-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/25 transition hover:shadow-xl hover:shadow-amber-500/40">
  Amber to Red
</button>

<button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-xl hover:shadow-emerald-500/40">
  Emerald to Teal
</button>

<button className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:shadow-xl hover:shadow-fuchsia-500/40">
  Tri-Color
</button>

<button className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-xl hover:shadow-indigo-500/40">
  Indigo Purple Pink
</button>

<button className="bg-gradient-animate rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:400%_400%] px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25">
  Animated Gradient
</button>`}
          >
            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:shadow-xl hover:shadow-pink-500/40">
                Pink to Violet
              </button>
              <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-xl hover:shadow-cyan-500/40">
                Cyan to Blue
              </button>
              <button className="rounded-xl bg-gradient-to-r from-amber-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/25 transition hover:shadow-xl hover:shadow-amber-500/40">
                Amber to Red
              </button>
              <button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-xl hover:shadow-emerald-500/40">
                Emerald to Teal
              </button>
              <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:shadow-xl hover:shadow-fuchsia-500/40">
                Tri-Color
              </button>
              <button className="rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-xl hover:shadow-indigo-500/40">
                Indigo Purple Pink
              </button>
              <button className="bg-gradient-animate rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:400%_400%] px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/25">
                Animated Gradient
              </button>
            </div>
          </CodePreview>
        </section>

        {/* 2. Gradient Border Buttons */}
        <section className="mt-12">
          <CodePreview
            title="Gradient Border Buttons"
            description="Buttons using the p-[2px] gradient wrapper trick with dark inner background."
            code={`{/* Pink to Violet border */}
<div className="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 p-[2px]">
  <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-pink-400 transition hover:bg-slate-900">
    Gradient Border
  </button>
</div>

{/* Cyan to Blue border */}
<div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px]">
  <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-slate-900">
    Gradient Border
  </button>
</div>

{/* Emerald to Lime border */}
<div className="rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 p-[2px]">
  <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-emerald-400 transition hover:bg-slate-900">
    Gradient Border
  </button>
</div>

{/* Amber to Orange border */}
<div className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-[2px]">
  <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-amber-400 transition hover:bg-slate-900">
    Gradient Border
  </button>
</div>`}
          >
            <div className="flex flex-wrap gap-4">
              <div className="rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 p-[2px]">
                <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-pink-400 transition hover:bg-slate-900">
                  Gradient Border
                </button>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px]">
                <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-slate-900">
                  Gradient Border
                </button>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 p-[2px]">
                <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-emerald-400 transition hover:bg-slate-900">
                  Gradient Border
                </button>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-[2px]">
                <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-amber-400 transition hover:bg-slate-900">
                  Gradient Border
                </button>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 3. Aurora Effect Cards */}
        <section className="mt-12">
          <CodePreview
            title="Aurora Effect Cards"
            description="Cards with blurred gradient circles positioned absolute creating aurora glow behind content."
            code={`{/* Aurora Card - Violet / Cyan */}
<div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6">
  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-20 blur-3xl" />
  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 opacity-20 blur-3xl" />
  <div className="relative">
    <h3 className="text-lg font-bold text-white">Aurora Violet</h3>
    <p className="mt-2 text-sm text-slate-400">Soft glow background elements creating depth and atmosphere.</p>
    <button className="mt-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white">Learn More</button>
  </div>
</div>

{/* Aurora Card - Pink / Amber */}
<div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6">
  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 opacity-20 blur-3xl" />
  <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 opacity-20 blur-3xl" />
  <div className="relative">
    <h3 className="text-lg font-bold text-white">Aurora Sunset</h3>
    <p className="mt-2 text-sm text-slate-400">Warm pink and amber tones blending into a sunset glow.</p>
    <button className="mt-4 rounded-lg bg-gradient-to-r from-pink-500 to-amber-500 px-4 py-2 text-sm font-medium text-white">Explore</button>
  </div>
</div>

{/* Aurora Card - Blue / Green */}
<div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6">
  <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 blur-3xl" />
  <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 opacity-20 blur-3xl" />
  <div className="relative">
    <h3 className="text-lg font-bold text-white">Aurora Forest</h3>
    <p className="mt-2 text-sm text-slate-400">Cool blue and emerald tones for a forest night feel.</p>
    <button className="mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 px-4 py-2 text-sm font-medium text-white">Discover</button>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-20 blur-3xl" />
                <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 opacity-20 blur-3xl" />
                <div className="relative">
                  <h3 className="text-lg font-bold text-white">Aurora Violet</h3>
                  <p className="mt-2 text-sm text-slate-400">Soft glow background elements creating depth and atmosphere.</p>
                  <button className="mt-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white">Learn More</button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 opacity-20 blur-3xl" />
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 opacity-20 blur-3xl" />
                <div className="relative">
                  <h3 className="text-lg font-bold text-white">Aurora Sunset</h3>
                  <p className="mt-2 text-sm text-slate-400">Warm pink and amber tones blending into a sunset glow.</p>
                  <button className="mt-4 rounded-lg bg-gradient-to-r from-pink-500 to-amber-500 px-4 py-2 text-sm font-medium text-white">Explore</button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6">
                <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 opacity-20 blur-3xl" />
                <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 opacity-20 blur-3xl" />
                <div className="relative">
                  <h3 className="text-lg font-bold text-white">Aurora Forest</h3>
                  <p className="mt-2 text-sm text-slate-400">Cool blue and emerald tones for a forest night feel.</p>
                  <button className="mt-4 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 px-4 py-2 text-sm font-medium text-white">Discover</button>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 4. Mesh Gradient Cards */}
        <section className="mt-12">
          <CodePreview
            title="Mesh Gradient Cards"
            description="Cards with full gradient backgrounds and smooth color transitions."
            code={`{/* Indigo-Purple-Pink */}
<div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
  <h3 className="text-lg font-bold text-white">Creative Suite</h3>
  <p className="mt-2 text-sm text-white/70">Full gradient background with smooth color transitions.</p>
  <div className="mt-4 flex gap-2">
    <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Design</span>
    <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">UI/UX</span>
  </div>
</div>

{/* Emerald-Teal-Cyan */}
<div className="rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-6">
  <h3 className="text-lg font-bold text-white">Analytics Pro</h3>
  <p className="mt-2 text-sm text-white/70">Fresh green to cyan mesh with natural energy.</p>
  <div className="mt-4 flex gap-2">
    <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Data</span>
    <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Insights</span>
  </div>
</div>

{/* Amber-Orange-Red */}
<div className="rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-6">
  <h3 className="text-lg font-bold text-white">Performance</h3>
  <p className="mt-2 text-sm text-white/70">Warm amber to red mesh radiating heat and energy.</p>
  <div className="mt-4 flex gap-2">
    <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Speed</span>
    <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Power</span>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
                <h3 className="text-lg font-bold text-white">Creative Suite</h3>
                <p className="mt-2 text-sm text-white/70">Full gradient background with smooth color transitions.</p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Design</span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">UI/UX</span>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-6">
                <h3 className="text-lg font-bold text-white">Analytics Pro</h3>
                <p className="mt-2 text-sm text-white/70">Fresh green to cyan mesh with natural energy.</p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Data</span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Insights</span>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-6">
                <h3 className="text-lg font-bold text-white">Performance</h3>
                <p className="mt-2 text-sm text-white/70">Warm amber to red mesh radiating heat and energy.</p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Speed</span>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Power</span>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 5. Gradient Border Cards */}
        <section className="mt-12">
          <CodePreview
            title="Gradient Border Cards"
            description="Cards using the p-[2px] gradient border technique with dark inner background."
            code={`{/* Cyan-Blue-Violet border card */}
<div className="rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 p-[2px]">
  <div className="h-full rounded-[14px] bg-slate-950 p-6">
    <h3 className="text-lg font-bold text-white">Starter Plan</h3>
    <p className="mt-2 text-sm text-slate-400">Subtle gradient border on a dark background, elegant and modern.</p>
    <p className="mt-4 text-3xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">$49/mo</p>
  </div>
</div>

{/* Pink-Rose-Fuchsia border card */}
<div className="rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 p-[2px]">
  <div className="h-full rounded-[14px] bg-slate-950 p-6">
    <h3 className="text-lg font-bold text-white">Growth Plan</h3>
    <p className="mt-2 text-sm text-slate-400">Warm gradient border with a pink-fuchsia spectrum.</p>
    <p className="mt-4 text-3xl font-black bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">$99/mo</p>
  </div>
</div>

{/* Emerald-Teal-Cyan border card */}
<div className="rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
  <div className="h-full rounded-[14px] bg-slate-950 p-6">
    <h3 className="text-lg font-bold text-white">Scale Plan</h3>
    <p className="mt-2 text-sm text-slate-400">Cool gradient border with emerald to cyan flow.</p>
    <p className="mt-4 text-3xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">$199/mo</p>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 p-[2px]">
                <div className="h-full rounded-[14px] bg-slate-950 p-6">
                  <h3 className="text-lg font-bold text-white">Starter Plan</h3>
                  <p className="mt-2 text-sm text-slate-400">Subtle gradient border on a dark background, elegant and modern.</p>
                  <p className="mt-4 text-3xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">$49/mo</p>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-500 p-[2px]">
                <div className="h-full rounded-[14px] bg-slate-950 p-6">
                  <h3 className="text-lg font-bold text-white">Growth Plan</h3>
                  <p className="mt-2 text-sm text-slate-400">Warm gradient border with a pink-fuchsia spectrum.</p>
                  <p className="mt-4 text-3xl font-black bg-gradient-to-r from-pink-400 to-fuchsia-400 bg-clip-text text-transparent">$99/mo</p>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
                <div className="h-full rounded-[14px] bg-slate-950 p-6">
                  <h3 className="text-lg font-bold text-white">Scale Plan</h3>
                  <p className="mt-2 text-sm text-slate-400">Cool gradient border with emerald to cyan flow.</p>
                  <p className="mt-4 text-3xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">$199/mo</p>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 6. Gradient Text */}
        <section className="mt-12">
          <CodePreview
            title="Gradient Text"
            description="Six different gradient text styles using bg-clip-text and text-transparent."
            code={`{/* Purple-Indigo */}
<p className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
  Purple-Indigo
</p>

{/* Fire (Amber-Red) */}
<p className="text-4xl font-extrabold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
  Fire Gradient
</p>

{/* Ocean (Cyan-Blue) */}
<p className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
  Ocean Gradient
</p>

{/* Neon (Pink-Cyan) */}
<p className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
  Neon Gradient
</p>

{/* Nature (Emerald-Lime-Yellow) */}
<p className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">
  Nature Gradient
</p>

{/* Sunset (Rose-Orange) */}
<p className="text-4xl font-extrabold bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
  Sunset Gradient
</p>`}
          >
            <div className="space-y-4">
              <p className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Purple-Indigo
              </p>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Fire Gradient
              </p>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Ocean Gradient
              </p>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Neon Gradient
              </p>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">
                Nature Gradient
              </p>
              <p className="text-4xl font-extrabold bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Sunset Gradient
              </p>
            </div>
          </CodePreview>
        </section>

        {/* 7. Gradient Progress Bars */}
        <section className="mt-12">
          <CodePreview
            title="Gradient Progress Bars"
            description="Progress bars with different gradient fills, labels, and percentages."
            code={`{/* Revenue - 85% */}
<div>
  <div className="mb-1 flex justify-between text-sm">
    <span className="text-slate-300">Revenue</span>
    <span className="text-slate-400">85%</span>
  </div>
  <div className="h-3 rounded-full bg-slate-800">
    <div className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" style={{ width: "85%" }} />
  </div>
</div>

{/* Users - 62% */}
<div>
  <div className="mb-1 flex justify-between text-sm">
    <span className="text-slate-300">Users</span>
    <span className="text-slate-400">62%</span>
  </div>
  <div className="h-3 rounded-full bg-slate-800">
    <div className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: "62%" }} />
  </div>
</div>

{/* Performance - 94% */}
<div>
  <div className="mb-1 flex justify-between text-sm">
    <span className="text-slate-300">Performance</span>
    <span className="text-slate-400">94%</span>
  </div>
  <div className="h-3 rounded-full bg-slate-800">
    <div className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500" style={{ width: "94%" }} />
  </div>
</div>

{/* Storage - 73% */}
<div>
  <div className="mb-1 flex justify-between text-sm">
    <span className="text-slate-300">Storage</span>
    <span className="text-slate-400">73%</span>
  </div>
  <div className="h-3 rounded-full bg-slate-800">
    <div className="h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" style={{ width: "73%" }} />
  </div>
</div>`}
          >
            <div className="max-w-lg space-y-4">
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-slate-300">Revenue</span>
                  <span className="text-slate-400">85%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-800">
                  <div className="h-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500" style={{ width: "85%" }} />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-slate-300">Users</span>
                  <span className="text-slate-400">62%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-800">
                  <div className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: "62%" }} />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-slate-300">Performance</span>
                  <span className="text-slate-400">94%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-800">
                  <div className="h-3 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500" style={{ width: "94%" }} />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-slate-300">Storage</span>
                  <span className="text-slate-400">73%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-800">
                  <div className="h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" style={{ width: "73%" }} />
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 8. Gradient Color Palette */}
        <section className="mt-12">
          <CodePreview
            title="Gradient Color Palette"
            description="12 gradient swatches showing different 2-color gradient combinations."
            code={`<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
  <div className="h-24 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-lime-500 to-emerald-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg" />
  <div className="h-24 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg" />
</div>`}
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              <div className="h-24 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-lime-500 to-emerald-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg" />
              <div className="h-24 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg" />
            </div>
          </CodePreview>
        </section>

        {/* 9. Gradient Pricing */}
        <section className="mt-12">
          <CodePreview
            title="Gradient Pricing"
            description="Pricing cards with gradient borders, gradient price text, and gradient CTA buttons."
            code={`{/* Basic */}
<div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[2px] shadow-xl shadow-cyan-500/20">
  <div className="h-full rounded-[14px] bg-slate-950 p-6">
    <h3 className="text-xl font-bold text-white">Basic</h3>
    <p className="mt-2">
      <span className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">$9</span>
      <span className="text-slate-500">/mo</span>
    </p>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Unlimited access</li>
      <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Priority support</li>
      <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Custom domain</li>
    </ul>
    <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 font-semibold text-white transition hover:opacity-90">
      Get Started
    </button>
  </div>
</div>

{/* Pro */}
<div className="rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 p-[2px] shadow-xl shadow-violet-500/20">
  <div className="h-full rounded-[14px] bg-slate-950 p-6">
    <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 px-3 py-0.5 text-xs font-bold text-white">MOST POPULAR</span>
    <h3 className="text-xl font-bold text-white">Pro</h3>
    <p className="mt-2">
      <span className="text-4xl font-extrabold bg-gradient-to-r from-violet-500 to-fuchsia-600 bg-clip-text text-transparent">$29</span>
      <span className="text-slate-500">/mo</span>
    </p>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Unlimited access</li>
      <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Priority support</li>
      <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Custom domain</li>
    </ul>
    <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-600 py-2.5 font-semibold text-white transition hover:opacity-90">
      Get Started
    </button>
  </div>
</div>

{/* Enterprise */}
<div className="rounded-2xl bg-gradient-to-br from-amber-500 to-red-600 p-[2px] shadow-xl shadow-amber-500/20">
  <div className="h-full rounded-[14px] bg-slate-950 p-6">
    <h3 className="text-xl font-bold text-white">Enterprise</h3>
    <p className="mt-2">
      <span className="text-4xl font-extrabold bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">$99</span>
      <span className="text-slate-500">/mo</span>
    </p>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Unlimited access</li>
      <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Priority support</li>
      <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Custom domain</li>
    </ul>
    <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-amber-500 to-red-600 py-2.5 font-semibold text-white transition hover:opacity-90">
      Get Started
    </button>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {/* Basic */}
              <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[2px] shadow-xl shadow-cyan-500/20">
                <div className="h-full rounded-[14px] bg-slate-950 p-6">
                  <h3 className="text-xl font-bold text-white">Basic</h3>
                  <p className="mt-2">
                    <span className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">$9</span>
                    <span className="text-slate-500">/mo</span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Unlimited access</li>
                    <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Priority support</li>
                    <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Custom domain</li>
                  </ul>
                  <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 font-semibold text-white transition hover:opacity-90">
                    Get Started
                  </button>
                </div>
              </div>
              {/* Pro */}
              <div className="rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 p-[2px] shadow-xl shadow-violet-500/20">
                <div className="h-full rounded-[14px] bg-slate-950 p-6">
                  <span className="mb-2 inline-block rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-600 px-3 py-0.5 text-xs font-bold text-white">MOST POPULAR</span>
                  <h3 className="text-xl font-bold text-white">Pro</h3>
                  <p className="mt-2">
                    <span className="text-4xl font-extrabold bg-gradient-to-r from-violet-500 to-fuchsia-600 bg-clip-text text-transparent">$29</span>
                    <span className="text-slate-500">/mo</span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Unlimited access</li>
                    <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Priority support</li>
                    <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Custom domain</li>
                  </ul>
                  <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-600 py-2.5 font-semibold text-white transition hover:opacity-90">
                    Get Started
                  </button>
                </div>
              </div>
              {/* Enterprise */}
              <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-red-600 p-[2px] shadow-xl shadow-amber-500/20">
                <div className="h-full rounded-[14px] bg-slate-950 p-6">
                  <h3 className="text-xl font-bold text-white">Enterprise</h3>
                  <p className="mt-2">
                    <span className="text-4xl font-extrabold bg-gradient-to-r from-amber-500 to-red-600 bg-clip-text text-transparent">$99</span>
                    <span className="text-slate-500">/mo</span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Unlimited access</li>
                    <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Priority support</li>
                    <li className="flex items-center gap-2 text-sm text-slate-400"><span className="text-emerald-400">&#10003;</span>Custom domain</li>
                  </ul>
                  <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-amber-500 to-red-600 py-2.5 font-semibold text-white transition hover:opacity-90">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 10. Gradient Badges */}
        <section className="mt-12 pb-16">
          <CodePreview
            title="Gradient Badges"
            description="Small pill badges with gradient backgrounds for labels and tags."
            code={`<span className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white">
  Pink Violet
</span>

<span className="inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-xs font-semibold text-white">
  Cyan Blue
</span>

<span className="inline-block rounded-full bg-gradient-to-r from-amber-500 to-red-500 px-3 py-1 text-xs font-semibold text-white">
  Amber Red
</span>

<span className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-xs font-semibold text-white">
  Emerald Teal
</span>

<span className="inline-block rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white">
  Fuchsia Pink
</span>

<span className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white">
  Indigo Violet
</span>

<span className="inline-block rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 px-3 py-1 text-xs font-semibold text-white">
  Lime Emerald
</span>

<span className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-xs font-semibold text-white">
  Orange Amber
</span>

<span className="inline-block rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white">
  Rose Pink
</span>

<span className="inline-block rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white">
  Sky Cyan
</span>`}
          >
            <div className="flex flex-wrap gap-3">
              <span className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white">Pink Violet</span>
              <span className="inline-block rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-xs font-semibold text-white">Cyan Blue</span>
              <span className="inline-block rounded-full bg-gradient-to-r from-amber-500 to-red-500 px-3 py-1 text-xs font-semibold text-white">Amber Red</span>
              <span className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 text-xs font-semibold text-white">Emerald Teal</span>
              <span className="inline-block rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white">Fuchsia Pink</span>
              <span className="inline-block rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white">Indigo Violet</span>
              <span className="inline-block rounded-full bg-gradient-to-r from-lime-500 to-emerald-500 px-3 py-1 text-xs font-semibold text-white">Lime Emerald</span>
              <span className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-xs font-semibold text-white">Orange Amber</span>
              <span className="inline-block rounded-full bg-gradient-to-r from-rose-500 to-pink-500 px-3 py-1 text-xs font-semibold text-white">Rose Pink</span>
              <span className="inline-block rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-3 py-1 text-xs font-semibold text-white">Sky Cyan</span>
            </div>
          </CodePreview>
        </section>
        {/* 11. Gradient Hero Section - Premium */}
        <section className="mt-12">
          <ProLock title="Gradient Hero Section">
            <CodePreview
              title="Gradient Hero Section"
              description="Bold full-page hero with animated mesh gradient, floating badge, headline, and dual CTAs."
              dark={true}
              code={`<div>Gradient Hero Premium</div>`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-16 text-center">
                {/* Gradient orbs */}
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-violet-600/30 blur-3xl" />
                <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute bottom-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" /> New: Gradient 3.0 Released
                  </div>
                  <h1 className="mt-6 text-5xl font-black leading-tight">
                    <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                      Design Without
                    </span>
                    <br />
                    <span className="text-white">Limits</span>
                  </h1>
                  <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">Premium gradient UI components for the next generation of web applications. Copy, paste, ship.</p>
                  <div className="mt-8 flex items-center justify-center gap-4">
                    <button className="rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-violet-500/30 transition hover:scale-105">Get Started Free</button>
                    <button className="rounded-full border border-white/10 px-8 py-3 text-sm font-medium text-white/70 transition hover:border-white/30 hover:text-white">View Components →</button>
                  </div>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* 12. Aurora Gradient Cards - Premium */}
        <section className="mt-12">
          <ProLock title="Aurora Gradient Cards">
            <CodePreview
              title="Aurora Gradient Cards"
              description="Stunning aurora-effect cards with mesh gradient backgrounds and glassmorphism overlay."
              dark={true}
              code={`<div>Aurora Cards Premium</div>`}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { title: "Aurora Nord", subtitle: "Northern Lights", from: "from-emerald-400", via: "via-cyan-500", to: "to-blue-600", badge: "Cool" },
                  { title: "Solar Flare", subtitle: "Cosmic Energy", from: "from-amber-400", via: "via-orange-500", to: "to-red-600", badge: "Warm" },
                  { title: "Violet Dream", subtitle: "Deep Space", from: "from-violet-400", via: "via-purple-500", to: "to-pink-600", badge: "Mystic" },
                ].map((card) => (
                  <div key={card.title} className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.from} ${card.via} ${card.to} p-px`}>
                    <div className="relative h-full rounded-3xl bg-slate-950/80 p-6 backdrop-blur-sm">
                      <div className={`inline-block rounded-full bg-gradient-to-r ${card.from} ${card.to} px-3 py-1 text-xs font-bold text-white`}>{card.badge}</div>
                      <div className={`mt-6 h-20 w-20 rounded-2xl bg-gradient-to-br ${card.from} ${card.to} opacity-80`} />
                      <h3 className="mt-4 text-xl font-bold text-white">{card.title}</h3>
                      <p className="mt-1 text-sm text-white/50">{card.subtitle}</p>
                      <button className={`mt-4 w-full rounded-xl bg-gradient-to-r ${card.from} ${card.to} py-2 text-sm font-semibold text-white transition hover:opacity-90`}>Explore</button>
                    </div>
                  </div>
                ))}
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* 13. Gradient Pricing Table - Premium */}
        <section className="mt-12 pb-16">
          <ProLock title="Gradient Pricing Table">
            <CodePreview
              title="Gradient Pricing Table"
              description="Premium pricing table with gradient borders, highlighted plan, and feature comparisons."
              dark={true}
              code={`<div>Gradient Pricing Premium</div>`}
            >
              <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-8 text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/60">Most Popular</div>
                  <div className="mt-2 text-5xl font-black text-white">₹69</div>
                  <div className="text-sm text-white/60">Lifetime Access · One-time payment</div>
                  <button className="mt-6 rounded-full bg-white px-10 py-3 text-sm font-black text-violet-600 shadow-xl transition hover:scale-105">
                    ⚡ Get Lifetime Access
                  </button>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-3">
                    {["All Gradient Packs", "Mesh Gradient Kit", "Aurora Effects", "Animated Borders", "Gradient Text FX", "Color Picker Tool", "Figma Components", "Lifetime Updates"].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 flex items-center justify-center text-xs text-white">✓</div>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>
      </div>
    </div>
  );
}
