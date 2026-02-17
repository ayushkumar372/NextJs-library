export default function PremiumButtonsShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">Premium Buttons</h1>
          <p className="mt-3 text-slate-400">Every button style imaginable. From subtle to spectacular.</p>
        </div>

        {/* Gradient Buttons */}
        <section className="mt-16">
          <h2 className="mb-4 text-xl font-bold text-white">Gradient Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:shadow-xl hover:shadow-violet-600/40">Violet Indigo</button>
            <button className="rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:shadow-xl hover:shadow-pink-500/40">Pink Rose</button>
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:shadow-xl hover:shadow-cyan-500/40">Cyan Blue</button>
            <button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:shadow-xl hover:shadow-emerald-500/40">Emerald Teal</button>
            <button className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/25 transition hover:shadow-xl hover:shadow-amber-500/40">Amber Orange</button>
            <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:shadow-xl">Multi Gradient</button>
            <button className="bg-gradient-animate rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] px-6 py-3 font-semibold text-white shadow-lg">Animated</button>
          </div>
        </section>

        {/* 3D Buttons */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">3D Push Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl bg-gradient-to-b from-blue-400 to-blue-600 px-6 py-3 font-bold text-white shadow-[0_6px_0_#1e40af] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#1e40af]">Blue 3D</button>
            <button className="rounded-xl bg-gradient-to-b from-red-400 to-red-600 px-6 py-3 font-bold text-white shadow-[0_6px_0_#991b1b] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#991b1b]">Red 3D</button>
            <button className="rounded-xl bg-gradient-to-b from-green-400 to-green-600 px-6 py-3 font-bold text-white shadow-[0_6px_0_#166534] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#166534]">Green 3D</button>
            <button className="rounded-xl bg-gradient-to-b from-purple-400 to-purple-600 px-6 py-3 font-bold text-white shadow-[0_6px_0_#581c87] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#581c87]">Purple 3D</button>
            <button className="rounded-xl bg-gradient-to-b from-yellow-300 to-yellow-500 px-6 py-3 font-bold text-slate-800 shadow-[0_6px_0_#a16207] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#a16207]">Gold 3D</button>
          </div>
        </section>

        {/* Neon Buttons */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">Neon Glow Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <button className="neon-box-pink rounded-xl border border-neon-pink bg-transparent px-6 py-3 font-bold text-neon-pink transition hover:bg-neon-pink/10">Neon Pink</button>
            <button className="neon-box-blue rounded-xl border border-neon-blue bg-transparent px-6 py-3 font-bold text-neon-blue transition hover:bg-neon-blue/10">Neon Blue</button>
            <button className="neon-box-green rounded-xl border border-neon-green bg-transparent px-6 py-3 font-bold text-neon-green transition hover:bg-neon-green/10">Neon Green</button>
            <button className="neon-box-purple rounded-xl border border-neon-purple bg-transparent px-6 py-3 font-bold text-neon-purple transition hover:bg-neon-purple/10">Neon Purple</button>
          </div>
        </section>

        {/* Glass Buttons */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">Glass Buttons</h2>
          <div className="rounded-2xl bg-gradient-to-br from-purple-900 to-indigo-900 p-8">
            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">Glass Default</button>
              <button className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/15">Glass Subtle</button>
              <button className="rounded-full border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">Glass Pill</button>
              <button className="rounded-xl border border-pink-300/30 bg-pink-500/10 px-6 py-3 font-semibold text-pink-200 backdrop-blur-md transition hover:bg-pink-500/20">Glass Pink</button>
              <button className="rounded-xl border border-cyan-300/30 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-200 backdrop-blur-md transition hover:bg-cyan-500/20">Glass Cyan</button>
            </div>
          </div>
        </section>

        {/* Outline Buttons */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">Outline Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl border-2 border-violet-500 px-6 py-3 font-semibold text-violet-400 transition hover:bg-violet-500 hover:text-white">Violet</button>
            <button className="rounded-xl border-2 border-pink-500 px-6 py-3 font-semibold text-pink-400 transition hover:bg-pink-500 hover:text-white">Pink</button>
            <button className="rounded-xl border-2 border-cyan-500 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-white">Cyan</button>
            <button className="rounded-xl border-2 border-emerald-500 px-6 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-500 hover:text-white">Emerald</button>
            <button className="rounded-xl border-2 border-amber-500 px-6 py-3 font-semibold text-amber-400 transition hover:bg-amber-500 hover:text-white">Amber</button>
            <button className="rounded-xl border-2 border-slate-500 px-6 py-3 font-semibold text-slate-400 transition hover:bg-slate-500 hover:text-white">Slate</button>
          </div>
        </section>

        {/* Gradient Border Buttons */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">Gradient Border</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { from: "from-pink-500", to: "to-violet-500", text: "text-pink-400" },
              { from: "from-cyan-500", to: "to-blue-500", text: "text-cyan-400" },
              { from: "from-amber-500", to: "to-red-500", text: "text-amber-400" },
              { from: "from-emerald-500", to: "to-cyan-500", text: "text-emerald-400" },
              { from: "from-fuchsia-500", via: "via-pink-500", to: "to-red-500", text: "text-fuchsia-400" },
            ].map((g, i) => (
              <div key={i} className={`rounded-xl bg-gradient-to-r ${g.from} ${g.via || ""} ${g.to} p-[2px]`}>
                <button className={`rounded-[10px] bg-slate-950 px-6 py-3 font-semibold ${g.text} transition hover:bg-slate-900`}>
                  Gradient Border
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Animated Effect Buttons */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">Animated Effects</h2>
          <div className="flex flex-wrap gap-3">
            <button className="animate-pulse rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white">Pulsing</button>
            <button className="animate-[wiggle_1s_ease-in-out_infinite] rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white">Wiggle</button>
            <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:px-10">Expand</button>
            <button className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:rounded-full">Morph</button>
            <button className="relative overflow-hidden rounded-xl bg-amber-600 px-6 py-3 font-semibold text-white">
              <span className="relative z-10">Shimmer</span>
              <div className="absolute inset-0 animate-[shimmer_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%]" />
            </button>
            <div className="animate-[spin_4s_linear_infinite] rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 p-[2px]">
              <button className="rounded-[10px] bg-slate-950 px-6 py-3 font-semibold text-white">Spin Border</button>
            </div>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">Icon Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3 font-semibold text-white">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              Create
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-3 font-semibold text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
              Favorite
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-3 font-semibold text-white">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              Download
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-pink-500 text-pink-400 transition hover:bg-pink-500 hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" /></svg>
            </button>
          </div>
        </section>

        {/* Size Variations */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">Size Variations</h2>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-lg bg-violet-600 px-3 py-1 text-xs font-semibold text-white">XS</button>
            <button className="rounded-lg bg-violet-600 px-4 py-1.5 text-sm font-semibold text-white">SM</button>
            <button className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white">MD</button>
            <button className="rounded-xl bg-violet-600 px-7 py-3 text-base font-semibold text-white">LG</button>
            <button className="rounded-2xl bg-violet-600 px-10 py-4 text-lg font-bold text-white">XL</button>
            <button className="rounded-2xl bg-violet-600 px-12 py-5 text-xl font-bold text-white">2XL</button>
          </div>
        </section>

        {/* Button Groups */}
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">Button Groups</h2>
          <div className="space-y-4">
            <div className="inline-flex overflow-hidden rounded-xl border border-slate-700">
              <button className="bg-violet-600 px-5 py-2.5 text-sm font-medium text-white">Left</button>
              <button className="border-x border-slate-700 bg-slate-800 px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-700">Center</button>
              <button className="bg-slate-800 px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-700">Right</button>
            </div>
            <br />
            <div className="inline-flex overflow-hidden rounded-full border border-slate-700 bg-slate-900 p-1">
              {["Daily", "Weekly", "Monthly", "Yearly"].map((period, i) => (
                <button key={period} className={`rounded-full px-5 py-2 text-sm font-medium transition ${i === 2 ? "bg-violet-600 text-white" : "text-slate-400 hover:text-white"}`}>
                  {period}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
