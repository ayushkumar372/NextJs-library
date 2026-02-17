export default function HeroesShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">Hero Sections</h1>
          <p className="mt-3 text-slate-400">Landing page hero designs: gradient, glass, split, minimal, and animated.</p>
        </div>

        {/* Hero 1: Gradient Explosion */}
        <section className="mt-16">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Hero 1: Gradient Explosion</h2>
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600" />
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-pink-400 opacity-20 blur-[100px]" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-400 opacity-20 blur-[100px]" />
            <div className="relative px-8 py-20 text-center sm:py-28">
              <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur-sm">
                Launching Soon
              </div>
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                The Future of<br />Web Development
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/70">
                Build stunning interfaces at lightning speed. Join 100K+ developers who already trust our platform.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="w-full rounded-xl bg-white px-8 py-3 font-semibold text-purple-600 shadow-xl transition hover:bg-white/90 sm:w-auto">Start Free Trial</button>
                <button className="w-full rounded-xl border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto">Watch Demo</button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero 2: Dark Minimal */}
        <section className="mt-16">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Hero 2: Dark Minimal</h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 px-8 py-20 text-center sm:py-28">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              v3.0 Released
            </div>
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              Ship faster with<br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">better components</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-400">
              A complete design system with 50+ production-ready components.
              TypeScript, accessible, and beautifully designed.
            </p>
            <div className="mx-auto mt-6 max-w-sm">
              <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 font-mono text-sm">
                <span className="text-slate-600">$</span>
                <span className="text-emerald-400">npm install @reactui/core</span>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 sm:w-auto">Get Started</button>
              <button className="w-full rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:bg-slate-800 sm:w-auto">Documentation</button>
            </div>
          </div>
        </section>

        {/* Hero 3: Split Layout */}
        <section className="mt-16">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Hero 3: Split Layout</h2>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-sm text-amber-400">
                  New Feature
                </div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Design system that<br />scales with you
                </h2>
                <p className="mt-4 text-slate-400">
                  From startup to enterprise, our component library grows with your
                  needs. Consistent, performant, and always up to date.
                </p>
                <ul className="mt-6 space-y-2">
                  {["50+ ready-to-use components", "TypeScript & accessibility built-in", "Dark mode & custom theming", "Figma design files included"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-amber-400">&#10003;</span>{f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex gap-3">
                  <button className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/25">Get Started</button>
                  <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:bg-slate-800">Learn More</button>
                </div>
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-8 sm:p-12">
                {/* Fake code preview */}
                <div className="w-full max-w-sm rounded-xl border border-slate-700 bg-slate-950 p-4 font-mono text-xs shadow-2xl">
                  <div className="mb-3 flex gap-1.5"><div className="h-2.5 w-2.5 rounded-full bg-red-500" /><div className="h-2.5 w-2.5 rounded-full bg-yellow-500" /><div className="h-2.5 w-2.5 rounded-full bg-green-500" /></div>
                  <div className="space-y-1 text-slate-400">
                    <p><span className="text-violet-400">import</span> {"{"} Button, Card {"}"} <span className="text-violet-400">from</span> <span className="text-emerald-400">&apos;@reactui/core&apos;</span></p>
                    <p>&nbsp;</p>
                    <p><span className="text-violet-400">export default</span> <span className="text-amber-400">function</span> <span className="text-cyan-400">App</span>() {"{"}</p>
                    <p>&nbsp;&nbsp;<span className="text-violet-400">return</span> (</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-cyan-400">Card</span> <span className="text-amber-400">variant</span>=<span className="text-emerald-400">&quot;elevated&quot;</span>&gt;</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-cyan-400">Button</span> <span className="text-amber-400">gradient</span>&gt;</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click me</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-cyan-400">Button</span>&gt;</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-cyan-400">Card</span>&gt;</p>
                    <p>&nbsp;&nbsp;)</p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero 4: Neon Cyberpunk */}
        <section className="mt-16">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Hero 4: Cyberpunk</h2>
          <div className="relative overflow-hidden rounded-2xl bg-cyber-bg px-8 py-20 text-center sm:py-28">
            <div className="pointer-events-none absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="relative">
              <div className="mb-3 inline-block rounded border border-neon-pink/30 bg-neon-pink/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon-pink">
                [ SYSTEM ACTIVATED ]
              </div>
              <h2 className="font-mono text-4xl font-black uppercase tracking-wider sm:text-5xl">
                <span className="text-neon-pink neon-text-pink">NEXT GEN</span>
                <br />
                <span className="text-neon-blue neon-text-blue">COMPONENTS</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md font-mono text-sm text-slate-500">
                &gt; INITIALIZING DESIGN SYSTEM... LOADING 50+ MODULES... READY_
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="neon-box-pink w-full rounded-lg border border-neon-pink bg-neon-pink/10 px-8 py-3 font-mono font-bold uppercase tracking-widest text-neon-pink transition hover:bg-neon-pink hover:text-white sm:w-auto">
                  DEPLOY
                </button>
                <button className="neon-box-blue w-full rounded-lg border border-neon-blue bg-neon-blue/10 px-8 py-3 font-mono font-bold uppercase tracking-widest text-neon-blue transition hover:bg-neon-blue hover:text-cyber-bg sm:w-auto">
                  DOCS
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero 5: Glassmorphism */}
        <section className="mt-16">
          <h2 className="mb-4 text-lg font-bold text-slate-400">Hero 5: Glassmorphism</h2>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 px-8 py-20 sm:py-28">
            <div className="absolute -left-20 top-10 h-64 w-64 animate-[float_8s_ease-in-out_infinite] rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -right-20 bottom-10 h-80 w-80 animate-[float_6s_ease-in-out_infinite_2s] rounded-full bg-pink-500/20 blur-3xl" />
            <div className="relative mx-auto max-w-2xl text-center">
              <div className="inline-block rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Beautiful by Default
                </h2>
                <p className="mt-3 text-white/60">
                  Components that look stunning out of the box. No configuration needed, just import and use.
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <button className="w-full rounded-xl bg-white/20 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/30 sm:w-auto">Explore</button>
                  <button className="w-full rounded-xl border border-white/10 px-8 py-3 font-semibold text-white/80 transition hover:bg-white/5 sm:w-auto">GitHub</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
