import CodePreview from "@/components/CodePreview";
import ProLock from "@/components/ProLock";

export default function HeroesShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">Hero Sections</h1>
          <p className="mt-3 text-slate-400">
            Landing page hero designs: gradient, glass, split, minimal, and animated.
          </p>
        </div>

        {/* 1. Gradient Explosion Hero */}
        <section className="mt-16">
          <CodePreview
            title="Gradient Explosion Hero"
            description="Full-width hero with vivid gradient background, blurred decorations, and dual CTA buttons."
            dark={true}
            code={`<div className="relative overflow-hidden rounded-2xl">
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
      <button className="w-full rounded-xl bg-white px-8 py-3 font-semibold text-purple-600 shadow-xl transition hover:bg-white/90 sm:w-auto">
        Start Free Trial
      </button>
      <button className="w-full rounded-xl border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto">
        Watch Demo
      </button>
    </div>
  </div>
</div>`}
          >
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
                  <button className="w-full rounded-xl bg-white px-8 py-3 font-semibold text-purple-600 shadow-xl transition hover:bg-white/90 sm:w-auto">
                    Start Free Trial
                  </button>
                  <button className="w-full rounded-xl border border-white/20 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20 sm:w-auto">
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 2. Dark Minimal Hero */}
        <section className="mt-16">
          <CodePreview
            title="Dark Minimal Hero"
            description="Clean dark card hero with green status badge, gradient text, and install command box."
            dark={true}
            code={`<div className="rounded-2xl border border-slate-800 bg-slate-900 px-8 py-20 text-center sm:py-28">
  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
    v3.0 Released
  </div>
  <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
    Ship faster with<br />
    <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
      better components
    </span>
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
    <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 sm:w-auto">
      Get Started
    </button>
    <button className="w-full rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:bg-slate-800 sm:w-auto">
      Documentation
    </button>
  </div>
</div>`}
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900 px-8 py-20 text-center sm:py-28">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                v3.0 Released
              </div>
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                Ship faster with<br />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  better components
                </span>
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
                <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-500/25 sm:w-auto">
                  Get Started
                </button>
                <button className="w-full rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:bg-slate-800 sm:w-auto">
                  Documentation
                </button>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 3. Split Layout Hero */}
        <section className="mt-16">
          <CodePreview
            title="Split Layout Hero"
            description="Two-column hero with feature checklist on the left and a fake code editor on the right."
            dark={true}
            code={`<div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
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
        <button className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/25">
          Get Started
        </button>
        <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:bg-slate-800">
          Learn More
        </button>
      </div>
    </div>
    <div className="flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-8 sm:p-12">
      <div className="w-full max-w-sm rounded-xl border border-slate-700 bg-slate-950 p-4 font-mono text-xs shadow-2xl">
        <div className="mb-3 flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
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
</div>`}
          >
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
                    <button className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/25">
                      Get Started
                    </button>
                    <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-300 hover:bg-slate-800">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-8 sm:p-12">
                  <div className="w-full max-w-sm rounded-xl border border-slate-700 bg-slate-950 p-4 font-mono text-xs shadow-2xl">
                    <div className="mb-3 flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    </div>
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
          </CodePreview>
        </section>

        {/* 4. Cyberpunk Hero */}
        <section className="mt-16">
          <CodePreview
            title="Cyberpunk Hero"
            description="Neon-infused cyberpunk hero with grid overlay, glowing text, and terminal-style copy."
            dark={true}
            code={`<div className="relative overflow-hidden rounded-2xl bg-cyber-bg px-8 py-20 text-center sm:py-28">
  <div
    className="pointer-events-none absolute inset-0 opacity-5"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />
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
</div>`}
          >
            <div className="relative overflow-hidden rounded-2xl bg-cyber-bg px-8 py-20 text-center sm:py-28">
              <div
                className="pointer-events-none absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
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
          </CodePreview>
        </section>

        {/* 5. Glassmorphism Hero */}
        <section className="mt-16">
          <CodePreview
            title="Glassmorphism Hero"
            description="Purple gradient background with floating blurred circles and a frosted glass card."
            dark={true}
            code={`<div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 px-8 py-20 sm:py-28">
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
        <button className="w-full rounded-xl bg-white/20 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/30 sm:w-auto">
          Explore
        </button>
        <button className="w-full rounded-xl border border-white/10 px-8 py-3 font-semibold text-white/80 transition hover:bg-white/5 sm:w-auto">
          GitHub
        </button>
      </div>
    </div>
  </div>
</div>`}
          >
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
                    <button className="w-full rounded-xl bg-white/20 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/30 sm:w-auto">
                      Explore
                    </button>
                    <button className="w-full rounded-xl border border-white/10 px-8 py-3 font-semibold text-white/80 transition hover:bg-white/5 sm:w-auto">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 6. Gradient Text Hero */}
        <section className="mt-16">
          <CodePreview
            title="Gradient Text Hero"
            description="Ultra-clean hero with a massive multi-color gradient heading and a single CTA button."
            dark={true}
            code={`<div className="rounded-2xl border border-slate-800 bg-slate-950 px-8 py-24 text-center sm:py-32">
  <h2 className="mx-auto max-w-4xl bg-gradient-to-r from-violet-400 via-pink-400 via-50% to-amber-400 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl lg:text-7xl">
    Build Something Extraordinary
  </h2>
  <p className="mx-auto mt-6 max-w-lg text-lg text-slate-500">
    Minimalism meets power. One library, endless possibilities.
  </p>
  <div className="mt-10">
    <button className="rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:shadow-xl hover:shadow-pink-500/30">
      Get Started Now
    </button>
  </div>
</div>`}
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-950 px-8 py-24 text-center sm:py-32">
              <h2 className="mx-auto max-w-4xl bg-gradient-to-r from-violet-400 via-pink-400 via-50% to-amber-400 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl lg:text-7xl">
                Build Something Extraordinary
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-lg text-slate-500">
                Minimalism meets power. One library, endless possibilities.
              </p>
              <div className="mt-10">
                <button className="rounded-xl bg-gradient-to-r from-violet-500 via-pink-500 to-amber-500 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:shadow-xl hover:shadow-pink-500/30">
                  Get Started Now
                </button>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* 7. Stats Hero */}
        <section className="mt-16">
          <CodePreview
            title="Stats Hero"
            description="Hero section with headline, supporting text, inline stat counters, and dual CTA buttons."
            dark={true}
            code={`<div className="rounded-2xl border border-slate-800 bg-slate-900 px-8 py-20 text-center sm:py-28">
  <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
    Trusted by Developers<br />Around the World
  </h2>
  <p className="mx-auto mt-4 max-w-lg text-slate-400">
    Join the community that&apos;s building the future of the web with our open-source component library.
  </p>
  <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
    <div>
      <div className="text-3xl font-extrabold text-white">100K+</div>
      <div className="mt-1 text-sm text-slate-500">Users</div>
    </div>
    <div>
      <div className="text-3xl font-extrabold text-white">12K+</div>
      <div className="mt-1 text-sm text-slate-500">Stars</div>
    </div>
    <div>
      <div className="text-3xl font-extrabold text-white">1M+</div>
      <div className="mt-1 text-sm text-slate-500">Downloads</div>
    </div>
    <div>
      <div className="text-3xl font-extrabold text-white">4.9</div>
      <div className="mt-1 text-sm text-slate-500">Rating</div>
    </div>
  </div>
  <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
    <button className="w-full rounded-xl bg-white px-8 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 sm:w-auto">
      Get Started
    </button>
    <button className="w-full rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:bg-slate-800 sm:w-auto">
      View on GitHub
    </button>
  </div>
</div>`}
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900 px-8 py-20 text-center sm:py-28">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                Trusted by Developers<br />Around the World
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-slate-400">
                Join the community that&apos;s building the future of the web with our open-source component library.
              </p>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
                <div>
                  <div className="text-3xl font-extrabold text-white">100K+</div>
                  <div className="mt-1 text-sm text-slate-500">Users</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">12K+</div>
                  <div className="mt-1 text-sm text-slate-500">Stars</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">1M+</div>
                  <div className="mt-1 text-sm text-slate-500">Downloads</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">4.9</div>
                  <div className="mt-1 text-sm text-slate-500">Rating</div>
                </div>
              </div>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="w-full rounded-xl bg-white px-8 py-3 font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 sm:w-auto">
                  Get Started
                </button>
                <button className="w-full rounded-xl border border-slate-700 px-8 py-3 font-semibold text-slate-300 transition hover:bg-slate-800 sm:w-auto">
                  View on GitHub
                </button>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* PREMIUM: SaaS Dashboard Hero */}
        <section className="mt-16">
          <ProLock title="SaaS Dashboard Hero">
            <CodePreview
              title="SaaS Dashboard Hero"
              description="Premium SaaS hero with product dashboard preview, gradient badge, and social proof."
              dark={true}
              code={`<div>SaaS Dashboard Hero Premium</div>`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-8 py-16">
                {/* Orbs */}
                <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                  {/* Left: Copy */}
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold text-violet-300">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                      Trusted by 50,000+ teams
                    </div>
                    <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                      Build Products<br />
                      <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">10x Faster</span>
                    </h1>
                    <p className="mt-4 text-slate-400">The most complete React UI library. Ship production-ready interfaces in minutes, not months.</p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3.5 text-sm font-black text-white shadow-xl shadow-violet-500/30 transition hover:scale-105">Start Free →</button>
                      <button className="rounded-2xl border border-slate-700 px-8 py-3.5 text-sm font-semibold text-slate-300 transition hover:border-slate-600 hover:text-white">View Demo ▶</button>
                    </div>
                    <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
                      <span>✓ No credit card</span>
                      <span>✓ Free forever plan</span>
                      <span>✓ 5 min setup</span>
                    </div>
                  </div>
                  {/* Right: Dashboard preview */}
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-2xl shadow-black">
                    <div className="flex items-center gap-1.5 mb-3">
                      <div className="h-3 w-3 rounded-full bg-rose-500" />
                      <div className="h-3 w-3 rounded-full bg-amber-500" />
                      <div className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[["₹4.2L", "Revenue", "text-violet-400"], ["18.9K", "Users", "text-cyan-400"], ["99.9%", "Uptime", "text-emerald-400"]].map(([val, lbl, cls]) => (
                        <div key={lbl} className="rounded-xl bg-slate-800 p-3 text-center">
                          <div className={`text-lg font-black ${cls}`}>{val}</div>
                          <div className="text-xs text-slate-500">{lbl}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 flex h-20 items-end gap-1">
                      {[30, 60, 45, 80, 65, 90, 75, 100, 85, 95].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-violet-600/60 to-violet-400/60" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* PREMIUM: Agency Portfolio Hero */}
        <section className="mt-16">
          <ProLock title="Agency Portfolio Hero">
            <CodePreview
              title="Agency Portfolio Hero"
              description="Bold agency-style hero with giant typography, work grid thumbnails, and client logos."
              dark={true}
              code={`<div>Agency Portfolio Hero Premium</div>`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
                  {/* Left */}
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.4em] text-violet-400">Digital Agency</div>
                    <h1 className="mt-3 text-5xl font-black leading-none text-white sm:text-6xl">
                      We Craft<br />
                      <span className="italic text-slate-400">Digital</span><br />
                      Experiences.
                    </h1>
                    <div className="mt-8 flex items-center gap-6">
                      <button className="rounded-full bg-white px-8 py-3.5 text-sm font-black text-slate-900 shadow-xl transition hover:scale-105">
                        Our Work ↗
                      </button>
                      <div className="flex -space-x-2">
                        {["AK", "SR", "DM", "PK"].map((av, i) => (
                          <div key={av} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 bg-gradient-to-br from-violet-500 to-indigo-500 text-xs font-bold text-white" style={{ zIndex: 4 - i }}>
                            {av}
                          </div>
                        ))}
                        <span className="ml-3 self-center text-xs text-slate-400">+240 happy clients</span>
                      </div>
                    </div>
                  </div>
                  {/* Right: Work grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Brand Identity", color: "from-violet-500 to-purple-600" },
                      { label: "Web Design", color: "from-cyan-500 to-blue-600" },
                      { label: "Motion Design", color: "from-pink-500 to-rose-600" },
                      { label: "UI Systems", color: "from-amber-500 to-orange-600" },
                    ].map((work) => (
                      <div key={work.label} className={`group relative h-28 overflow-hidden rounded-2xl bg-gradient-to-br ${work.color} cursor-pointer transition hover:scale-[1.02]`}>
                        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" />
                        <div className="absolute bottom-3 left-3 text-xs font-bold text-white">{work.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* PREMIUM: App Download Hero */}
        <section className="mt-16 pb-16">
          <ProLock title="App Download Hero">
            <CodePreview
              title="App Download Hero"
              description="Mobile app hero with phone mockup, rating stars, app store badges, and feature highlights."
              dark={true}
              code={`<div>App Download Hero Premium</div>`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 px-8 py-14">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
                  {/* Left: Copy */}
                  <div>
                    <div className="flex items-center gap-1.5">
                      {"★★★★★".split("").map((s, i) => <span key={i} className="text-amber-400 text-lg">{s}</span>)}
                      <span className="ml-2 text-sm font-semibold text-white">4.9</span>
                      <span className="text-xs text-slate-400">(12,400 ratings)</span>
                    </div>
                    <h1 className="mt-4 text-4xl font-black text-white leading-tight">
                      The #1 App for<br />
                      <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                        Modern Teams
                      </span>
                    </h1>
                    <p className="mt-4 text-slate-400">Collaborate, ship, and track everything in one beautiful app. Used by teams at Apple, Google, and Stripe.</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button className="flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 border border-slate-700">
                        <span className="text-xl"></span>
                        <div className="text-left"><div className="text-xs text-slate-400 leading-none">Download on the</div><div className="font-black leading-tight">App Store</div></div>
                      </button>
                      <button className="flex items-center gap-2 rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 border border-slate-700">
                        <span className="text-xl">▶</span>
                        <div className="text-left"><div className="text-xs text-slate-400 leading-none">GET IT ON</div><div className="font-black leading-tight">Google Play</div></div>
                      </button>
                    </div>
                  </div>
                  {/* Right: Phone mockup */}
                  <div className="flex justify-center">
                    <div className="relative w-48 overflow-hidden rounded-[2.5rem] border-4 border-slate-700 bg-slate-900 shadow-2xl shadow-violet-500/20">
                      <div className="h-4 bg-slate-800 rounded-t-[2rem] flex items-center justify-center">
                        <div className="h-1.5 w-12 rounded-full bg-slate-700" />
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-3">
                          <div className="text-xs font-black text-white">Dashboard</div>
                          <div className="mt-2 text-xl font-black text-white">₹4.2L</div>
                          <div className="mt-1 h-6 flex items-end gap-0.5">
                            {[40, 70, 50, 90, 65, 80, 100].map((h, i) => (
                              <div key={i} className="flex-1 rounded-t bg-white/30" style={{ height: `${h}%` }} />
                            ))}
                          </div>
                        </div>
                        {[["Tasks", "24 pending"], ["Team", "8 online"]].map(([t, s]) => (
                          <div key={t} className="rounded-xl bg-slate-800 px-3 py-2 flex items-center justify-between">
                            <span className="text-xs font-semibold text-white">{t}</span>
                            <span className="text-xs text-violet-400">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
