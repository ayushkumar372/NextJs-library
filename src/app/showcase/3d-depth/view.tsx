import CodePreview from "@/components/CodePreview";
import ProLock from "@/components/ProLock";

export default function ThreeDDepthShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">3D & Depth</h1>
          <p className="mt-3 text-slate-400">
            Perspective transforms, parallax cards, layered depth, floating elements.
          </p>
        </div>

        {/* 1. Perspective Tilt Cards */}
        <section className="mt-16">
          <CodePreview
            title="Perspective Tilt Cards"
            description="Cards with 3D perspective transforms that tilt on hover"
            dark
            code={`<div className="grid grid-cols-1 gap-8 sm:grid-cols-3" style={{ perspective: "1000px" }}>
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(-8deg)_rotateX(5deg)]">
    <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
    <h3 className="text-lg font-bold text-white">Tilt Left</h3>
    <p className="mt-2 text-sm text-slate-400">Hover to see the 3D perspective tilt effect on this card.</p>
  </div>
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(-8deg)_rotateX(5deg)]">
    <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500" />
    <h3 className="text-lg font-bold text-white">Tilt Up</h3>
    <p className="mt-2 text-sm text-slate-400">Rotates with a subtle 3D tilt on the Y and X axes.</p>
  </div>
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(-8deg)_rotateX(5deg)]">
    <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-amber-500 to-red-500" />
    <h3 className="text-lg font-bold text-white">Tilt Right</h3>
    <p className="mt-2 text-sm text-slate-400">Each card tilts differently with preserved 3D space.</p>
  </div>
</div>`}
          >
            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-3"
              style={{ perspective: "1000px" }}
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(-8deg)_rotateX(5deg)]">
                <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                <h3 className="text-lg font-bold text-white">Tilt Left</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Hover to see the 3D perspective tilt effect on this card.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(-8deg)_rotateX(5deg)]">
                <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500" />
                <h3 className="text-lg font-bold text-white">Tilt Up</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Rotates with a subtle 3D tilt on the Y and X axes.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(-8deg)_rotateX(5deg)]">
                <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-amber-500 to-red-500" />
                <h3 className="text-lg font-bold text-white">Tilt Right</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Each card tilts differently with preserved 3D space.
                </p>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 2. Layered Depth Cards */}
        <section className="mt-20">
          <CodePreview
            title="Layered Depth Cards"
            description="Cards with multiple shadow layers creating floating depth"
            dark
            code={`<div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
  <div className="group relative">
    <div className="absolute inset-2 -bottom-3 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 opacity-20 blur-sm" />
    <div className="absolute inset-1 -bottom-2 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 opacity-30" />
    <div className="relative rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 p-6 shadow-2xl shadow-pink-500/30 transition-transform group-hover:-translate-y-2">
      <h3 className="text-lg font-bold text-white">Layer One</h3>
      <p className="mt-2 text-sm text-white/70">Multiple shadow layers create an elevated, floating appearance.</p>
      <button className="mt-4 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/30">Learn More</button>
    </div>
  </div>
  <div className="group relative">
    <div className="absolute inset-2 -bottom-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 opacity-20 blur-sm" />
    <div className="absolute inset-1 -bottom-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 opacity-30" />
    <div className="relative rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-6 shadow-2xl shadow-emerald-500/30 transition-transform group-hover:-translate-y-2">
      <h3 className="text-lg font-bold text-white">Layer Two</h3>
      <p className="mt-2 text-sm text-white/70">Multiple shadow layers create an elevated, floating appearance.</p>
      <button className="mt-4 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/30">Learn More</button>
    </div>
  </div>
  <div className="group relative">
    <div className="absolute inset-2 -bottom-3 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 opacity-20 blur-sm" />
    <div className="absolute inset-1 -bottom-2 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 opacity-30" />
    <div className="relative rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 p-6 shadow-2xl shadow-violet-500/30 transition-transform group-hover:-translate-y-2">
      <h3 className="text-lg font-bold text-white">Layer Three</h3>
      <p className="mt-2 text-sm text-white/70">Multiple shadow layers create an elevated, floating appearance.</p>
      <button className="mt-4 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/30">Learn More</button>
    </div>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {[
                { bg: "from-pink-500 to-rose-600", title: "Layer One", shadow: "shadow-pink-500/30" },
                { bg: "from-emerald-500 to-teal-600", title: "Layer Two", shadow: "shadow-emerald-500/30" },
                { bg: "from-violet-500 to-indigo-600", title: "Layer Three", shadow: "shadow-violet-500/30" },
              ].map((card) => (
                <div key={card.title} className="group relative">
                  <div className={`absolute inset-2 -bottom-3 rounded-2xl bg-gradient-to-br ${card.bg} opacity-20 blur-sm`} />
                  <div className={`absolute inset-1 -bottom-2 rounded-2xl bg-gradient-to-br ${card.bg} opacity-30`} />
                  <div className={`relative rounded-2xl bg-gradient-to-br ${card.bg} p-6 shadow-2xl ${card.shadow} transition-transform group-hover:-translate-y-2`}>
                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-white/70">
                      Multiple shadow layers create an elevated, floating appearance.
                    </p>
                    <button className="mt-4 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/30">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* 3. Floating Elements */}
        <section className="mt-20">
          <CodePreview
            title="Floating Elements"
            description="Animated floating shapes with different durations and delays"
            dark
            code={`<div className="relative flex h-80 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50">
  <div className="absolute left-[10%] top-[20%] h-16 w-16 animate-[float_6s_ease-in-out_infinite] rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-xl shadow-pink-500/30" />
  <div className="absolute right-[15%] top-[15%] h-12 w-12 animate-[float_8s_ease-in-out_infinite_1s] rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-xl shadow-cyan-500/30" />
  <div className="absolute bottom-[20%] left-[20%] h-14 w-14 animate-[float_7s_ease-in-out_infinite_2s] rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-xl shadow-amber-500/30" />
  <div className="absolute bottom-[25%] right-[10%] h-10 w-10 animate-[float_9s_ease-in-out_infinite_0.5s] rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl shadow-emerald-500/30" />
  <div className="absolute left-[40%] top-[10%] h-8 w-8 animate-[float_5s_ease-in-out_infinite_3s] rounded-full bg-gradient-to-br from-violet-500 to-purple-500 shadow-xl shadow-violet-500/30" />
  <p className="relative z-10 text-center text-xl font-bold text-white">Floating shapes with animated drift</p>
</div>`}
          >
            <div className="relative flex h-80 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50">
              <div className="absolute left-[10%] top-[20%] h-16 w-16 animate-[float_6s_ease-in-out_infinite] rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-xl shadow-pink-500/30" />
              <div className="absolute right-[15%] top-[15%] h-12 w-12 animate-[float_8s_ease-in-out_infinite_1s] rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-xl shadow-cyan-500/30" />
              <div className="absolute bottom-[20%] left-[20%] h-14 w-14 animate-[float_7s_ease-in-out_infinite_2s] rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-xl shadow-amber-500/30" />
              <div className="absolute bottom-[25%] right-[10%] h-10 w-10 animate-[float_9s_ease-in-out_infinite_0.5s] rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl shadow-emerald-500/30" />
              <div className="absolute left-[40%] top-[10%] h-8 w-8 animate-[float_5s_ease-in-out_infinite_3s] rounded-full bg-gradient-to-br from-violet-500 to-purple-500 shadow-xl shadow-violet-500/30" />
              <p className="relative z-10 text-center text-xl font-bold text-white">
                Floating shapes with animated drift
              </p>
            </div>
          </CodePreview>
        </section>

        {/* 4. 3D Push Buttons */}
        <section className="mt-20">
          <CodePreview
            title="3D Push Buttons"
            description="Buttons with shadow depth that press down on click"
            dark
            code={`<div className="flex flex-wrap items-center gap-4">
  <button className="rounded-xl bg-gradient-to-b from-indigo-400 to-indigo-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#3730a3] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#3730a3]">
    3D Indigo
  </button>
  <button className="rounded-xl bg-gradient-to-b from-rose-400 to-rose-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#9f1239] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#9f1239]">
    3D Rose
  </button>
  <button className="rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#065f46] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#065f46]">
    3D Emerald
  </button>
  <button className="rounded-xl bg-gradient-to-b from-amber-400 to-amber-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#92400e] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#92400e]">
    3D Amber
  </button>
  <button className="rounded-xl bg-gradient-to-b from-cyan-400 to-cyan-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#155e75] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#155e75]">
    3D Cyan
  </button>
</div>`}
          >
            <div className="flex flex-wrap items-center gap-4">
              <button className="rounded-xl bg-gradient-to-b from-indigo-400 to-indigo-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#3730a3] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#3730a3]">
                3D Indigo
              </button>
              <button className="rounded-xl bg-gradient-to-b from-rose-400 to-rose-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#9f1239] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#9f1239]">
                3D Rose
              </button>
              <button className="rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#065f46] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#065f46]">
                3D Emerald
              </button>
              <button className="rounded-xl bg-gradient-to-b from-amber-400 to-amber-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#92400e] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#92400e]">
                3D Amber
              </button>
              <button className="rounded-xl bg-gradient-to-b from-cyan-400 to-cyan-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#155e75] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#155e75]">
                3D Cyan
              </button>
            </div>
          </CodePreview>
        </section>

        {/* 5. Isometric Cards */}
        <section className="mt-20">
          <CodePreview
            title="Isometric Cards"
            description="Cards with isometric transforms that flatten on hover"
            dark
            code={`<div className="flex items-center justify-center gap-6 py-10" style={{ perspective: "800px" }}>
  <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-2xl transition-all duration-500 [transform:rotateX(25deg)_rotateZ(-10deg)_skewX(5deg)] hover:[transform:rotateX(0deg)_rotateZ(0deg)_skewX(0deg)]">
    <span className="text-lg font-bold text-white">Design</span>
  </div>
  <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl transition-all duration-500 [transform:rotateX(25deg)_rotateZ(-10deg)_skewX(5deg)] hover:[transform:rotateX(0deg)_rotateZ(0deg)_skewX(0deg)]">
    <span className="text-lg font-bold text-white">Develop</span>
  </div>
  <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-2xl transition-all duration-500 [transform:rotateX(25deg)_rotateZ(-10deg)_skewX(5deg)] hover:[transform:rotateX(0deg)_rotateZ(0deg)_skewX(0deg)]">
    <span className="text-lg font-bold text-white">Deploy</span>
  </div>
</div>`}
          >
            <div
              className="flex items-center justify-center gap-6 py-10"
              style={{ perspective: "800px" }}
            >
              {[
                { bg: "from-violet-500 to-purple-600", label: "Design" },
                { bg: "from-cyan-500 to-blue-600", label: "Develop" },
                { bg: "from-emerald-500 to-green-600", label: "Deploy" },
              ].map((card) => (
                <div
                  key={card.label}
                  className={`flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br ${card.bg} shadow-2xl transition-all duration-500 [transform:rotateX(25deg)_rotateZ(-10deg)_skewX(5deg)] hover:[transform:rotateX(0deg)_rotateZ(0deg)_skewX(0deg)]`}
                >
                  <span className="text-lg font-bold text-white">{card.label}</span>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* 6. Stacked Cards */}
        <section className="mt-20">
          <CodePreview
            title="Stacked Cards"
            description="Cards layered behind each other with depth using scale and translate"
            dark
            code={`<div className="flex justify-center">
  <div className="relative h-64 w-80">
    <div className="absolute inset-0 translate-y-4 scale-[0.92] rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 opacity-40" />
    <div className="absolute inset-0 translate-y-2 scale-[0.96] rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 opacity-70" />
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 p-6 shadow-2xl shadow-pink-500/30">
      <h3 className="text-xl font-bold text-white">Top Card</h3>
      <p className="mt-2 text-sm text-white/70">This card sits on top of the stack with visible depth behind it.</p>
      <button className="mt-6 rounded-lg bg-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/30">View Details</button>
    </div>
  </div>
</div>`}
          >
            <div className="flex justify-center">
              <div className="relative h-64 w-80">
                <div className="absolute inset-0 translate-y-4 scale-[0.92] rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 opacity-40" />
                <div className="absolute inset-0 translate-y-2 scale-[0.96] rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 opacity-70" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 p-6 shadow-2xl shadow-pink-500/30">
                  <h3 className="text-xl font-bold text-white">Top Card</h3>
                  <p className="mt-2 text-sm text-white/70">
                    This card sits on top of the stack with visible depth behind it.
                  </p>
                  <button className="mt-6 rounded-lg bg-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/30">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 7. Elevated Card Shadows */}
        <section className="mt-20">
          <CodePreview
            title="Elevated Card Shadows"
            description="Cards with progressively stronger colored shadows"
            dark
            code={`<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-violet-500/20 transition hover:-translate-y-1">
    <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600" />
    <h3 className="text-lg font-bold text-white">Subtle Glow</h3>
    <p className="mt-2 text-sm text-slate-400">A soft violet shadow gives this card a gentle elevation.</p>
  </div>
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-cyan-500/25 transition hover:-translate-y-1">
    <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600" />
    <h3 className="text-lg font-bold text-white">Medium Glow</h3>
    <p className="mt-2 text-sm text-slate-400">A stronger cyan shadow creates more visual depth.</p>
  </div>
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-rose-500/30 transition hover:-translate-y-1">
    <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600" />
    <h3 className="text-lg font-bold text-white">Heavy Glow</h3>
    <p className="mt-2 text-sm text-slate-400">The strongest shadow makes this card feel truly elevated.</p>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-violet-500/20 transition hover:-translate-y-1">
                <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600" />
                <h3 className="text-lg font-bold text-white">Subtle Glow</h3>
                <p className="mt-2 text-sm text-slate-400">
                  A soft violet shadow gives this card a gentle elevation.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-cyan-500/25 transition hover:-translate-y-1">
                <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600" />
                <h3 className="text-lg font-bold text-white">Medium Glow</h3>
                <p className="mt-2 text-sm text-slate-400">
                  A stronger cyan shadow creates more visual depth.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-rose-500/30 transition hover:-translate-y-1">
                <div className="mb-3 h-10 w-10 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600" />
                <h3 className="text-lg font-bold text-white">Heavy Glow</h3>
                <p className="mt-2 text-sm text-slate-400">
                  The strongest shadow makes this card feel truly elevated.
                </p>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 8. Depth Layers */}
        <section className="mt-20">
          <CodePreview
            title="Depth Layers"
            description="Overlapping panels at different z-levels creating a parallax-like depth effect"
            dark
            code={`<div className="relative flex h-80 items-center justify-center">
  <div className="absolute left-[5%] top-[10%] h-56 w-64 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl">
    <h3 className="text-lg font-bold text-white">Background</h3>
    <p className="mt-2 text-sm text-slate-400">This panel sits at the deepest layer.</p>
  </div>
  <div className="absolute left-[15%] top-[18%] h-56 w-64 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-900/80 to-indigo-900/80 p-6 shadow-2xl shadow-violet-500/20 backdrop-blur">
    <h3 className="text-lg font-bold text-white">Middle Layer</h3>
    <p className="mt-2 text-sm text-violet-300/70">This panel overlaps at mid-depth.</p>
  </div>
  <div className="absolute left-[25%] top-[26%] h-56 w-64 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/90 to-blue-900/90 p-6 shadow-2xl shadow-cyan-500/20 backdrop-blur">
    <h3 className="text-lg font-bold text-white">Front Layer</h3>
    <p className="mt-2 text-sm text-cyan-300/70">This panel sits at the foreground.</p>
  </div>
</div>`}
          >
            <div className="relative flex h-80 items-center justify-center">
              <div className="absolute left-[5%] top-[10%] h-56 w-64 rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 p-6 shadow-2xl">
                <h3 className="text-lg font-bold text-white">Background</h3>
                <p className="mt-2 text-sm text-slate-400">
                  This panel sits at the deepest layer.
                </p>
              </div>
              <div className="absolute left-[15%] top-[18%] h-56 w-64 rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-900/80 to-indigo-900/80 p-6 shadow-2xl shadow-violet-500/20 backdrop-blur">
                <h3 className="text-lg font-bold text-white">Middle Layer</h3>
                <p className="mt-2 text-sm text-violet-300/70">
                  This panel overlaps at mid-depth.
                </p>
              </div>
              <div className="absolute left-[25%] top-[26%] h-56 w-64 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/90 to-blue-900/90 p-6 shadow-2xl shadow-cyan-500/20 backdrop-blur">
                <h3 className="text-lg font-bold text-white">Front Layer</h3>
                <p className="mt-2 text-sm text-cyan-300/70">
                  This panel sits at the foreground.
                </p>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 9. 3D Flip Cards — Premium */}
        <section className="mt-20">
          <ProLock title="3D Flip Cards">
            <CodePreview
              title="3D Flip Cards"
              description="Cards that flip on hover to reveal a back face with different content using CSS 3D transforms."
              dark={true}
              code={`<div>3D Flip Cards Premium</div>`}
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3" style={{ perspective: "1000px" }}>
                {[
                  { front: { bg: "from-violet-500 to-fuchsia-500", icon: "⚡", title: "Speed" }, back: { bg: "from-fuchsia-600 to-violet-600", text: "Lightning fast components optimized for production performance." } },
                  { front: { bg: "from-cyan-500 to-blue-500", icon: "🎨", title: "Design" }, back: { bg: "from-blue-600 to-cyan-600", text: "Beautiful by default, customizable to match your brand identity." } },
                  { front: { bg: "from-amber-500 to-orange-500", icon: "🔒", title: "Secure" }, back: { bg: "from-orange-600 to-amber-600", text: "Built with security best practices and accessibility in mind." } },
                ].map((card) => (
                  <div key={card.front.title} className="group h-48 cursor-pointer" style={{ perspective: "1000px" }}>
                    <div className="relative h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      {/* Front */}
                      <div className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${card.front.bg} [backface-visibility:hidden]`}>
                        <div className="text-4xl">{card.front.icon}</div>
                        <div className="mt-3 text-xl font-bold text-white">{card.front.title}</div>
                        <div className="mt-1 text-xs text-white/60">Hover to flip</div>
                      </div>
                      {/* Back */}
                      <div className={`absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br ${card.back.bg} p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]`}>
                        <p className="text-sm font-medium text-white">{card.back.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* 10. 3D Product Showcase — Premium */}
        <section className="mt-20">
          <ProLock title="3D Product Showcase">
            <CodePreview
              title="3D Product Showcase"
              description="Floating product card with layered 3D depth effect, shadow stacking, and perspective tilt."
              dark={true}
              code={`<div>3D Product Showcase Premium</div>`}
            >
              <div className="flex items-center justify-center py-8" style={{ perspective: "800px" }}>
                <div className="relative transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(-15deg)_rotateX(5deg)]">
                  {/* Shadow layers for depth */}
                  <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-violet-600/20 blur-lg" />
                  <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-violet-600/30 blur-md" />
                  {/* Main card */}
                  <div className="relative w-72 overflow-hidden rounded-3xl border border-slate-700 bg-slate-900">
                    <div className="h-48 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 flex items-center justify-center text-6xl">
                      🎧
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-violet-400">Premium</div>
                          <h3 className="mt-1 text-lg font-bold text-white">AirPods Pro Max</h3>
                        </div>
                        <div className="text-xl font-black text-white">₹29,990</div>
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-amber-400 text-sm">★★★★★ <span className="text-slate-400 text-xs ml-1">(2.4k)</span></div>
                      <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* 11. Depth Layered Dashboard — Premium */}
        <section className="mt-20 pb-16">
          <ProLock title="Depth Layered Dashboard">
            <CodePreview
              title="Depth Layered Dashboard"
              description="Dashboard with stacked z-axis layers creating a realistic sense of 3D depth and elevation."
              dark={true}
              code={`<div>Depth Layered Dashboard Premium</div>`}
            >
              <div className="relative min-h-64 overflow-hidden rounded-3xl bg-slate-950 p-6">
                {/* Background layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
                {/* Mid layer cards */}
                <div className="relative grid grid-cols-3 gap-4">
                  {[
                    { label: "Revenue", value: "₹4.2L", up: true, color: "violet" },
                    { label: "Users", value: "18.9K", up: true, color: "cyan" },
                    { label: "Churn", value: "2.1%", up: false, color: "rose" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl shadow-black/50" style={{ transform: "translateZ(20px)" }}>
                      <p className="text-xs text-slate-400">{stat.label}</p>
                      <p className="mt-1 text-2xl font-black text-white">{stat.value}</p>
                      <p className={`text-xs ${stat.up ? "text-emerald-400" : "text-rose-400"}`}>{stat.up ? "↑ 12%" : "↓ 0.3%"}</p>
                    </div>
                  ))}
                </div>
                {/* Foreground floating card */}
                <div className="relative mt-4 rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-900/50 to-indigo-900/50 p-4 shadow-2xl shadow-violet-500/20 backdrop-blur-sm" style={{ transform: "translateZ(40px)" }}>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold">A</div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white">New order received</div>
                      <div className="text-xs text-slate-400">₹12,400 · 2 min ago</div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
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
