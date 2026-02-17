export default function NavbarsShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">Navigation Styles</h1>
          <p className="mt-3 text-slate-400">Transparent, glass, floating, dark, colorful, and command palette navigations.</p>
        </div>

        {/* Nav 1: Dark Professional */}
        <section className="mt-16">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Dark Professional</h2>
          <div className="rounded-xl border border-slate-800 bg-slate-900 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <span className="text-lg font-bold text-white">ReactUI</span>
                <div className="flex gap-1">
                  {["Products", "Solutions", "Pricing", "Docs"].map((item, i) => (
                    <button key={item} className={`rounded-lg px-3 py-1.5 text-sm font-medium ${i === 0 ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"}`}>{item}</button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-sm text-slate-400 hover:text-white">Sign In</button>
                <button className="rounded-lg bg-white px-4 py-1.5 text-sm font-medium text-slate-900">Get Started</button>
              </div>
            </div>
          </div>
        </section>

        {/* Nav 2: Glass Transparent */}
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Glass Transparent</h2>
          <div className="overflow-hidden rounded-xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900" />
              <div className="relative px-6 py-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-pink-500 to-violet-500" />
                        <span className="font-bold text-white">GlassUI</span>
                      </div>
                      <div className="flex gap-1">
                        {["Home", "Features", "Pricing", "Blog"].map((item, i) => (
                          <button key={item} className={`rounded-lg px-3 py-1.5 text-sm font-medium ${i === 0 ? "bg-white/10 text-white" : "text-white/60 hover:text-white"}`}>{item}</button>
                        ))}
                      </div>
                    </div>
                    <button className="rounded-lg bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nav 3: Gradient */}
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Gradient Navbar</h2>
          <div className="rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <span className="text-lg font-bold text-white">ColorUI</span>
                <div className="flex gap-1">
                  {["Components", "Templates", "Plugins", "Themes"].map((item, i) => (
                    <button key={item} className={`rounded-lg px-3 py-1.5 text-sm font-medium ${i === 0 ? "bg-white/20 text-white" : "text-white/70 hover:text-white"}`}>{item}</button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="text-sm text-white/70 hover:text-white">Login</button>
                <button className="rounded-lg bg-white px-4 py-1.5 text-sm font-medium text-purple-600">Start Free</button>
              </div>
            </div>
          </div>
        </section>

        {/* Nav 4: Floating */}
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Floating Pill</h2>
          <div className="flex justify-center py-4">
            <div className="inline-flex items-center gap-6 rounded-full border border-slate-700 bg-slate-900 px-2 py-2 shadow-xl">
              <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-xs font-bold text-white">F</div>
              <div className="flex gap-1">
                {["Home", "Products", "About", "Contact"].map((item, i) => (
                  <button key={item} className={`rounded-full px-4 py-1.5 text-sm font-medium ${i === 0 ? "bg-slate-800 text-white" : "text-slate-400 hover:text-white"}`}>{item}</button>
                ))}
              </div>
              <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-1.5 text-sm font-medium text-white">Sign Up</button>
            </div>
          </div>
        </section>

        {/* Nav 5: Neon Gaming */}
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Neon Gaming</h2>
          <div className="rounded-xl border border-neon-pink/20 bg-cyber-bg px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-8">
                <span className="font-mono text-lg font-black uppercase tracking-widest text-neon-pink neon-text-pink">NEXUS</span>
                <div className="flex gap-1">
                  {["PLAY", "STORE", "COMMUNITY", "NEWS"].map((item, i) => (
                    <button key={item} className={`rounded px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider ${i === 0 ? "bg-neon-pink/10 text-neon-pink" : "text-slate-500 hover:text-neon-pink"}`}>{item}</button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 font-mono text-xs text-neon-green"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-green" />ONLINE</span>
                <button className="neon-box-pink rounded border border-neon-pink bg-neon-pink/10 px-4 py-1.5 font-mono text-xs font-bold text-neon-pink hover:bg-neon-pink hover:text-white">LAUNCH</button>
              </div>
            </div>
          </div>
        </section>

        {/* Nav 6: Command Palette */}
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Command Palette</h2>
          <div className="mx-auto max-w-lg rounded-xl border border-slate-700 bg-slate-900 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3">
              <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input type="text" placeholder="Type a command or search..." className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none" defaultValue="button" />
              <kbd className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-500">ESC</kbd>
            </div>
            <div className="p-2">
              <p className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-600">Components</p>
              {[
                { name: "Button", desc: "Interactive button component" },
                { name: "ButtonGroup", desc: "Group of related buttons" },
                { name: "IconButton", desc: "Button with icon only" },
              ].map((item, i) => (
                <button key={item.name} className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left ${i === 0 ? "bg-violet-500/10" : "hover:bg-slate-800"}`}>
                  <div>
                    <p className={`text-sm font-medium ${i === 0 ? "text-violet-400" : "text-white"}`}>{item.name}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                  {i === 0 && <span className="text-xs text-violet-400">Enter</span>}
                </button>
              ))}
              <p className="mt-2 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-600">Actions</p>
              {["Create new component", "Open documentation"].map((action) => (
                <button key={action} className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Nav 7: Sidebar */}
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Sidebar Navigation</h2>
          <div className="max-w-xs rounded-xl border border-slate-800 bg-slate-900">
            <div className="border-b border-slate-800 p-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
                <div><p className="text-sm font-bold text-white">ReactUI</p><p className="text-[10px] text-slate-500">Design System</p></div>
              </div>
            </div>
            <div className="p-3">
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-600">Main</p>
              {[
                { name: "Dashboard", active: true },
                { name: "Components", active: false },
                { name: "Analytics", active: false },
                { name: "Settings", active: false },
              ].map((item) => (
                <button key={item.name} className={`mb-0.5 flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition ${item.active ? "bg-violet-500/10 text-violet-400" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}>
                  {item.name}
                </button>
              ))}
              <p className="mb-2 mt-4 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-600">Showcase</p>
              {["Glassmorphism", "Gaming", "Neon", "Gradients"].map((item) => (
                <button key={item} className="mb-0.5 flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
