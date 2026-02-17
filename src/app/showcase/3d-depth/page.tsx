export default function ThreeDDepthShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">3D & Depth</h1>
          <p className="mt-3 text-slate-400">Perspective transforms, parallax cards, layered depth, floating elements.</p>
        </div>

        {/* 3D Tilt Cards */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Perspective Cards</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3" style={{ perspective: "1000px" }}>
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(-8deg)_rotateX(5deg)]">
              <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500" />
              <h3 className="text-lg font-bold text-white">Tilt Left</h3>
              <p className="mt-2 text-sm text-slate-400">Hover to see the 3D perspective tilt effect on this card.</p>
            </div>
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateX(-8deg)_scale(1.02)]">
              <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500" />
              <h3 className="text-lg font-bold text-white">Tilt Up</h3>
              <p className="mt-2 text-sm text-slate-400">Rotates upward on the X axis with a subtle scale.</p>
            </div>
            <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(8deg)_rotateX(-5deg)]">
              <div className="mb-4 h-32 rounded-xl bg-gradient-to-br from-amber-500 to-red-500" />
              <h3 className="text-lg font-bold text-white">Tilt Right</h3>
              <p className="mt-2 text-sm text-slate-400">Hover to see the opposite direction tilt effect.</p>
            </div>
          </div>
        </section>

        {/* Layered Depth */}
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Layered Depth Cards</h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[
              { bg: "from-pink-500 to-rose-600", title: "Layer One", shadow: "shadow-pink-500/30" },
              { bg: "from-emerald-500 to-teal-600", title: "Layer Two", shadow: "shadow-emerald-500/30" },
              { bg: "from-violet-500 to-indigo-600", title: "Layer Three", shadow: "shadow-violet-500/30" },
            ].map((card) => (
              <div key={card.title} className="group relative">
                {/* Shadow layer 3 */}
                <div className={`absolute inset-2 -bottom-3 rounded-2xl bg-gradient-to-br ${card.bg} opacity-20 blur-sm`} />
                {/* Shadow layer 2 */}
                <div className={`absolute inset-1 -bottom-2 rounded-2xl bg-gradient-to-br ${card.bg} opacity-30`} />
                {/* Main card */}
                <div className={`relative rounded-2xl bg-gradient-to-br ${card.bg} p-6 shadow-2xl ${card.shadow} transition-transform group-hover:-translate-y-2`}>
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-white/70">Multiple shadow layers create an elevated, floating appearance.</p>
                  <button className="mt-4 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/30">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Floating Elements */}
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Floating Elements</h2>
          <div className="relative flex h-80 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50">
            <div className="absolute left-[10%] top-[20%] h-16 w-16 animate-[float_6s_ease-in-out_infinite] rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-xl shadow-pink-500/30" />
            <div className="absolute right-[15%] top-[15%] h-12 w-12 animate-[float_8s_ease-in-out_infinite_1s] rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 shadow-xl shadow-cyan-500/30" />
            <div className="absolute bottom-[20%] left-[20%] h-14 w-14 animate-[float_7s_ease-in-out_infinite_2s] rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-xl shadow-amber-500/30" />
            <div className="absolute bottom-[25%] right-[10%] h-10 w-10 animate-[float_9s_ease-in-out_infinite_0.5s] rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl shadow-emerald-500/30" />
            <div className="absolute left-[40%] top-[10%] h-8 w-8 animate-[float_5s_ease-in-out_infinite_3s] rounded-full bg-gradient-to-br from-violet-500 to-purple-500 shadow-xl shadow-violet-500/30" />
            <p className="relative z-10 text-center text-xl font-bold text-white">Floating shapes with animated drift</p>
          </div>
        </section>

        {/* 3D Buttons */}
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-bold text-white">3D Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded-xl bg-gradient-to-b from-indigo-400 to-indigo-600 px-6 py-3 font-semibold text-white shadow-[0_6px_0_#3730a3] transition-all active:translate-y-[3px] active:shadow-[0_3px_0_#3730a3]">
              3D Push
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
            <button className="rounded-xl bg-gradient-to-b from-slate-300 to-slate-500 px-6 py-3 font-semibold text-white shadow-[0_8px_0_#1e293b,0_12px_20px_rgba(0,0,0,0.3)] transition-all active:translate-y-[4px] active:shadow-[0_4px_0_#1e293b,0_6px_10px_rgba(0,0,0,0.3)]">
              Extra Depth
            </button>
          </div>
        </section>

        {/* Isometric Cards */}
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Isometric View</h2>
          <div className="flex items-center justify-center gap-6 py-10" style={{ perspective: "800px" }}>
            {[
              { bg: "from-violet-500 to-purple-600", label: "Design" },
              { bg: "from-cyan-500 to-blue-600", label: "Develop" },
              { bg: "from-emerald-500 to-green-600", label: "Deploy" },
            ].map((card) => (
              <div key={card.label} className={`flex h-40 w-40 items-center justify-center rounded-2xl bg-gradient-to-br ${card.bg} shadow-2xl transition-all duration-500 [transform:rotateX(25deg)_rotateZ(-10deg)_skewX(5deg)] hover:[transform:rotateX(0deg)_rotateZ(0deg)_skewX(0deg)]`}>
                <span className="text-lg font-bold text-white">{card.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Stacked Cards */}
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-bold text-white">Stacked Cards</h2>
          <div className="flex justify-center">
            <div className="relative h-64 w-80">
              <div className="absolute inset-0 translate-y-4 scale-[0.92] rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 opacity-40" />
              <div className="absolute inset-0 translate-y-2 scale-[0.96] rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 opacity-70" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 p-6 shadow-2xl shadow-pink-500/30">
                <h3 className="text-xl font-bold text-white">Top Card</h3>
                <p className="mt-2 text-sm text-white/70">This card sits on top of the stack with visible depth behind it.</p>
                <button className="mt-6 rounded-lg bg-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/30">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
