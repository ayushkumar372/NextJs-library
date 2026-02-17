export default function NeumorphismShowcase() {
  return (
    <div className="min-h-screen bg-[#e0e5ec]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-slate-700">Neumorphism</h1>
          <p className="mt-3 text-slate-500">Soft UI, embossed elements, clay-like surfaces, depth without hard shadows.</p>
        </div>

        {/* Neumorphic Buttons */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-700">Soft Buttons</h2>
          <div className="flex flex-wrap items-center gap-6">
            <button className="neu-light rounded-xl px-8 py-3 text-sm font-semibold text-slate-600 transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
              Default
            </button>
            <button className="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-indigo-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
              Primary
            </button>
            <button className="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-emerald-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
              Success
            </button>
            <button className="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-rose-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
              Danger
            </button>
            {/* Pressed button */}
            <button className="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-slate-500 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
              Pressed
            </button>
            {/* Pill */}
            <button className="rounded-full bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-violet-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
              Pill Shape
            </button>
          </div>
        </section>

        {/* Neumorphic Cards */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-700">Soft Cards</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e0e5ec] text-2xl text-indigo-500 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                &#9733;
              </div>
              <h3 className="mt-4 text-center text-lg font-bold text-slate-700">Premium</h3>
              <p className="mt-2 text-center text-sm text-slate-500">Access all features and components with our premium plan.</p>
              <button className="mt-4 w-full rounded-xl bg-[#e0e5ec] py-2.5 text-sm font-semibold text-indigo-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                Upgrade
              </button>
            </div>

            <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e0e5ec] text-2xl text-emerald-500 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                &#9889;
              </div>
              <h3 className="mt-4 text-center text-lg font-bold text-slate-700">Performance</h3>
              <p className="mt-2 text-center text-sm text-slate-500">Optimized for speed with zero runtime overhead.</p>
              <button className="mt-4 w-full rounded-xl bg-[#e0e5ec] py-2.5 text-sm font-semibold text-emerald-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                Learn More
              </button>
            </div>

            <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e0e5ec] text-2xl text-rose-500 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                &#10084;
              </div>
              <h3 className="mt-4 text-center text-lg font-bold text-slate-700">Community</h3>
              <p className="mt-2 text-center text-sm text-slate-500">Join thousands of developers using our components.</p>
              <button className="mt-4 w-full rounded-xl bg-[#e0e5ec] py-2.5 text-sm font-semibold text-rose-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                Join Now
              </button>
            </div>
          </div>
        </section>

        {/* Neumorphic Form */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-700">Soft Form</h2>
          <div className="mx-auto max-w-md rounded-2xl bg-[#e0e5ec] p-8 shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
            <h3 className="text-center text-xl font-bold text-slate-700">Sign In</h3>
            <form className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full rounded-xl border-none bg-[#e0e5ec] px-4 py-3 text-sm text-slate-700 placeholder-slate-400 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff] outline-none" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-600">Password</label>
                <input type="password" placeholder="Enter password" className="w-full rounded-xl border-none bg-[#e0e5ec] px-4 py-3 text-sm text-slate-700 placeholder-slate-400 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff] outline-none" />
              </div>
              <button type="submit" className="w-full rounded-xl bg-[#e0e5ec] py-3 text-sm font-bold text-indigo-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                Sign In
              </button>
            </form>
          </div>
        </section>

        {/* Neumorphic Toggle & Controls */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-700">Soft Controls</h2>
          <div className="flex flex-wrap items-center gap-8">
            {/* Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">Toggle</span>
              <div className="flex h-8 w-14 items-center rounded-full bg-[#e0e5ec] px-1 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
                <div className="h-6 w-6 translate-x-6 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]" />
              </div>
            </div>
            {/* Radio group */}
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size, i) => (
                <button key={size} className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${i === 1 ? "bg-[#e0e5ec] text-indigo-500 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]" : "bg-[#e0e5ec] text-slate-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]"}`}>
                  {size}
                </button>
              ))}
            </div>
            {/* Slider look */}
            <div className="w-48">
              <div className="h-2 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]">
                <div className="relative h-2 w-3/5 rounded-full bg-indigo-400">
                  <div className="absolute -right-2 -top-1.5 h-5 w-5 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neumorphic Stats */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-700">Soft Stats</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Users", value: "12.5K", color: "text-indigo-500" },
              { label: "Revenue", value: "$84K", color: "text-emerald-500" },
              { label: "Growth", value: "+24%", color: "text-amber-500" },
              { label: "Rating", value: "4.9", color: "text-rose-500" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-[#e0e5ec] p-6 text-center shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
                <p className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dark Neumorphism */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-slate-700">Dark Neumorphism</h2>
          <div className="rounded-2xl bg-[#1a1a2e] p-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#1a1a2e] p-6 text-center shadow-[8px_8px_16px_#111122,-8px_-8px_16px_#23233a]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a1a2e] text-xl text-violet-400 shadow-[inset_4px_4px_8px_#111122,inset_-4px_-4px_8px_#23233a]">&#9733;</div>
                <h3 className="mt-3 font-bold text-slate-200">Dark Soft</h3>
                <p className="mt-1 text-sm text-slate-500">Neumorphism on dark backgrounds.</p>
              </div>
              <div className="rounded-2xl bg-[#1a1a2e] p-6 text-center shadow-[8px_8px_16px_#111122,-8px_-8px_16px_#23233a]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a1a2e] text-xl text-cyan-400 shadow-[inset_4px_4px_8px_#111122,inset_-4px_-4px_8px_#23233a]">&#9889;</div>
                <h3 className="mt-3 font-bold text-slate-200">Subtle Depth</h3>
                <p className="mt-1 text-sm text-slate-500">Minimal shadow, maximum impact.</p>
              </div>
              <div className="rounded-2xl bg-[#1a1a2e] p-6 text-center shadow-[8px_8px_16px_#111122,-8px_-8px_16px_#23233a]">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a1a2e] text-xl text-rose-400 shadow-[inset_4px_4px_8px_#111122,inset_-4px_-4px_8px_#23233a]">&#10048;</div>
                <h3 className="mt-3 font-bold text-slate-200">Elegant</h3>
                <p className="mt-1 text-sm text-slate-500">Premium feel with soft edges.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
