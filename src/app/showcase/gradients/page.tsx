export default function GradientsShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold">
            <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">Gradient Paradise</span>
          </h1>
          <p className="mt-3 text-slate-400">Mesh gradients, aurora effects, animated borders, and color transitions.</p>
        </div>

        {/* Gradient Buttons */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Gradient Buttons</h2>
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
            <button className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/25 transition hover:shadow-xl">
              Tri-Color
            </button>
            {/* Animated gradient */}
            <button className="bg-gradient-animate rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-[length:400%_400%] px-6 py-3 font-semibold text-white shadow-lg">
              Animated Gradient
            </button>
          </div>
        </section>

        {/* Gradient Border Buttons */}
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-white">Gradient Border Buttons</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { from: "from-pink-500", to: "to-violet-500", text: "text-pink-400" },
              { from: "from-cyan-500", to: "to-blue-500", text: "text-cyan-400" },
              { from: "from-emerald-500", to: "to-lime-500", text: "text-emerald-400" },
              { from: "from-amber-500", to: "to-orange-500", text: "text-amber-400" },
            ].map((g, i) => (
              <div key={i} className={`rounded-xl bg-gradient-to-r ${g.from} ${g.to} p-[2px]`}>
                <button className={`rounded-[10px] bg-slate-950 px-6 py-3 font-semibold ${g.text} transition hover:bg-slate-900`}>
                  Gradient Border
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Gradient Cards */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Gradient Cards</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Aurora Card */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 opacity-20 blur-3xl" />
              <div className="relative">
                <h3 className="text-lg font-bold text-white">Aurora Effect</h3>
                <p className="mt-2 text-sm text-slate-400">Soft glow background elements creating depth and atmosphere.</p>
                <button className="mt-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white">Learn More</button>
              </div>
            </div>

            {/* Mesh Gradient Card */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
              <h3 className="text-lg font-bold text-white">Mesh Gradient</h3>
              <p className="mt-2 text-sm text-white/70">Full gradient background with smooth color transitions.</p>
              <div className="mt-4 flex gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Design</span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">UI/UX</span>
              </div>
            </div>

            {/* Gradient Border Card */}
            <div className="rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 p-[2px]">
              <div className="h-full rounded-[14px] bg-slate-950 p-6">
                <h3 className="text-lg font-bold text-white">Gradient Border</h3>
                <p className="mt-2 text-sm text-slate-400">Subtle gradient border on a dark background, elegant and modern.</p>
                <p className="mt-4 text-3xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">$99/mo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gradient Text Showcase */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Gradient Text</h2>
          <div className="space-y-4">
            <p className="text-4xl font-extrabold text-gradient">Purple to Indigo</p>
            <p className="text-4xl font-extrabold text-gradient-fire">Fire Gradient</p>
            <p className="text-4xl font-extrabold text-gradient-ocean">Ocean Gradient</p>
            <p className="text-4xl font-extrabold text-gradient-neon">Neon Gradient</p>
            <p className="text-4xl font-extrabold text-gradient-gaming">Gaming Gradient</p>
            <p className="text-4xl font-extrabold bg-gradient-to-r from-emerald-400 via-lime-400 to-yellow-400 bg-clip-text text-transparent">Nature Gradient</p>
          </div>
        </section>

        {/* Gradient Progress Bars */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Gradient Progress</h2>
          <div className="max-w-lg space-y-4">
            {[
              { label: "Revenue", pct: 85, from: "from-pink-500", to: "to-rose-500" },
              { label: "Users", pct: 62, from: "from-cyan-500", to: "to-blue-500" },
              { label: "Performance", pct: 94, from: "from-emerald-500", to: "to-lime-500" },
              { label: "Storage", pct: 73, from: "from-amber-500", to: "to-orange-500" },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-slate-300">{bar.label}</span>
                  <span className="text-slate-400">{bar.pct}%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-800">
                  <div className={`h-3 rounded-full bg-gradient-to-r ${bar.from} ${bar.to}`} style={{ width: `${bar.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Color Palette */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Gradient Palette</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "from-rose-500 to-pink-500",
              "from-violet-500 to-purple-500",
              "from-blue-500 to-indigo-500",
              "from-cyan-500 to-teal-500",
              "from-emerald-500 to-green-500",
              "from-amber-500 to-yellow-500",
              "from-fuchsia-500 to-pink-500",
              "from-sky-500 to-cyan-500",
              "from-lime-500 to-emerald-500",
              "from-orange-500 to-red-500",
              "from-indigo-500 to-violet-500",
              "from-teal-500 to-cyan-500",
            ].map((g, i) => (
              <div key={i} className={`h-24 rounded-xl bg-gradient-to-br ${g} shadow-lg`} />
            ))}
          </div>
        </section>

        {/* Gradient Pricing */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Gradient Pricing</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { name: "Basic", price: "$9", gradient: "from-cyan-500 to-blue-600", shadow: "shadow-cyan-500/20" },
              { name: "Pro", price: "$29", gradient: "from-violet-500 to-fuchsia-600", shadow: "shadow-violet-500/20", popular: true },
              { name: "Enterprise", price: "$99", gradient: "from-amber-500 to-red-600", shadow: "shadow-amber-500/20" },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl bg-gradient-to-br ${plan.gradient} p-[2px] shadow-xl ${plan.shadow}`}>
                <div className="h-full rounded-[14px] bg-slate-950 p-6">
                  {plan.popular && <span className={`mb-2 inline-block rounded-full bg-gradient-to-r ${plan.gradient} px-3 py-0.5 text-xs font-bold text-white`}>MOST POPULAR</span>}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2"><span className={`text-4xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>{plan.price}</span><span className="text-slate-500">/mo</span></p>
                  <ul className="mt-4 space-y-2">
                    {["Unlimited access", "Priority support", "Custom domain"].map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="text-emerald-400">&#10003;</span>{f}
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-6 w-full rounded-xl bg-gradient-to-r ${plan.gradient} py-2.5 font-semibold text-white transition hover:opacity-90`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
