import CodePreview from "@/components/CodePreview";
import ProLock from "@/components/ProLock";

export default function NavbarsShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">Navigation Styles</h1>
          <p className="mt-3 text-slate-400">Transparent, glass, floating, dark, colorful, and command palette navigations.</p>
        </div>

        {/* 1. Dark Professional Navbar */}
        <section className="mt-16">
          <CodePreview
            title="Dark Professional Navbar"
            description="A sleek dark-themed navigation bar with active state highlighting."
            code={`<nav className="rounded-xl border border-slate-800 bg-slate-900 px-6 py-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-8">
      <span className="text-lg font-bold text-white">ReactUI</span>
      <div className="flex gap-1">
        <button className="rounded-lg bg-slate-800 px-3 py-1.5 text-sm font-medium text-white">Products</button>
        <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white">Solutions</button>
        <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white">Pricing</button>
        <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-400 hover:text-white">Docs</button>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <button className="text-sm text-slate-400 hover:text-white">Sign In</button>
      <button className="rounded-lg bg-white px-4 py-1.5 text-sm font-medium text-slate-900">Get Started</button>
    </div>
  </div>
</nav>`}
          >
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
          </CodePreview>
        </section>

        {/* 2. Glass Transparent Navbar */}
        <section className="mt-12">
          <CodePreview
            title="Glass Transparent Navbar"
            description="A frosted glass navigation bar over a gradient background."
            code={`<div className="overflow-hidden rounded-xl">
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
              <button className="rounded-lg bg-white/10 px-3 py-1.5 text-sm font-medium text-white">Home</button>
              <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white">Features</button>
              <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white">Pricing</button>
              <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white">Blog</button>
            </div>
          </div>
          <button className="rounded-lg bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</div>`}
          >
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
          </CodePreview>
        </section>

        {/* 3. Gradient Navbar */}
        <section className="mt-12">
          <CodePreview
            title="Gradient Navbar"
            description="A vibrant gradient navigation bar with white accents."
            code={`<nav className="rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 px-6 py-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-8">
      <span className="text-lg font-bold text-white">ColorUI</span>
      <div className="flex gap-1">
        <button className="rounded-lg bg-white/20 px-3 py-1.5 text-sm font-medium text-white">Components</button>
        <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/70 hover:text-white">Templates</button>
        <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/70 hover:text-white">Plugins</button>
        <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-white/70 hover:text-white">Themes</button>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <button className="text-sm text-white/70 hover:text-white">Login</button>
      <button className="rounded-lg bg-white px-4 py-1.5 text-sm font-medium text-purple-600">Start Free</button>
    </div>
  </div>
</nav>`}
          >
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
          </CodePreview>
        </section>

        {/* 4. Floating Pill Navbar */}
        <section className="mt-12">
          <CodePreview
            title="Floating Pill Navbar"
            description="A centered floating pill-shaped navigation bar."
            code={`<div className="flex justify-center py-4">
  <nav className="inline-flex items-center gap-6 rounded-full border border-slate-700 bg-slate-900 px-2 py-2 shadow-xl">
    <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-xs font-bold text-white">F</div>
    <div className="flex gap-1">
      <button className="rounded-full bg-slate-800 px-4 py-1.5 text-sm font-medium text-white">Home</button>
      <button className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-white">Products</button>
      <button className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-white">About</button>
      <button className="rounded-full px-4 py-1.5 text-sm font-medium text-slate-400 hover:text-white">Contact</button>
    </div>
    <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-1.5 text-sm font-medium text-white">Sign Up</button>
  </nav>
</div>`}
          >
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
          </CodePreview>
        </section>

        {/* 5. Neon Gaming Navbar */}
        <section className="mt-12">
          <CodePreview
            title="Neon Gaming Navbar"
            description="A cyberpunk-styled navigation with neon glow effects."
            code={`<nav className="rounded-xl border border-neon-pink/20 bg-cyber-bg px-6 py-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-8">
      <span className="font-mono text-lg font-black uppercase tracking-widest text-neon-pink neon-text-pink">NEXUS</span>
      <div className="flex gap-1">
        <button className="rounded px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider bg-neon-pink/10 text-neon-pink">PLAY</button>
        <button className="rounded px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-neon-pink">STORE</button>
        <button className="rounded px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-neon-pink">COMMUNITY</button>
        <button className="rounded px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-neon-pink">NEWS</button>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <span className="flex items-center gap-1 font-mono text-xs text-neon-green">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-green" />
        ONLINE
      </span>
      <button className="neon-box-pink rounded border border-neon-pink bg-neon-pink/10 px-4 py-1.5 font-mono text-xs font-bold text-neon-pink hover:bg-neon-pink hover:text-white">LAUNCH</button>
    </div>
  </div>
</nav>`}
          >
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
          </CodePreview>
        </section>

        {/* 6. Command Palette */}
        <section className="mt-12">
          <CodePreview
            title="Command Palette"
            description="A search-style command palette modal with results and actions."
            code={`<div className="mx-auto max-w-lg rounded-xl border border-slate-700 bg-slate-900 shadow-2xl">
  <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3">
    <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input type="text" placeholder="Type a command or search..." className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none" defaultValue="button" />
    <kbd className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] text-slate-500">ESC</kbd>
  </div>
  <div className="p-2">
    <p className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-600">Components</p>
    <button className="flex w-full items-center justify-between rounded-lg bg-violet-500/10 px-3 py-2 text-left">
      <div>
        <p className="text-sm font-medium text-violet-400">Button</p>
        <p className="text-xs text-slate-500">Interactive button component</p>
      </div>
      <span className="text-xs text-violet-400">Enter</span>
    </button>
    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-slate-800">
      <div>
        <p className="text-sm font-medium text-white">ButtonGroup</p>
        <p className="text-xs text-slate-500">Group of related buttons</p>
      </div>
    </button>
    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left hover:bg-slate-800">
      <div>
        <p className="text-sm font-medium text-white">IconButton</p>
        <p className="text-xs text-slate-500">Button with icon only</p>
      </div>
    </button>
    <p className="mt-2 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-600">Actions</p>
    <button className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">Create new component</button>
    <button className="flex w-full items-center rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white">Open documentation</button>
  </div>
</div>`}
          >
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
          </CodePreview>
        </section>

        {/* 7. Sidebar Navigation */}
        <section className="mt-12">
          <CodePreview
            title="Sidebar Navigation"
            description="A vertical sidebar with grouped navigation items and active state."
            code={`<div className="max-w-xs rounded-xl border border-slate-800 bg-slate-900">
  <div className="border-b border-slate-800 p-4">
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
      <div>
        <p className="text-sm font-bold text-white">ReactUI</p>
        <p className="text-[10px] text-slate-500">Design System</p>
      </div>
    </div>
  </div>
  <div className="p-3">
    <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-600">Main</p>
    <button className="mb-0.5 flex w-full items-center rounded-lg bg-violet-500/10 px-3 py-2 text-sm font-medium text-violet-400">Dashboard</button>
    <button className="mb-0.5 flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">Components</button>
    <button className="mb-0.5 flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">Analytics</button>
    <button className="mb-0.5 flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">Settings</button>
    <p className="mb-2 mt-4 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-600">Showcase</p>
    <button className="mb-0.5 flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">Glassmorphism</button>
    <button className="mb-0.5 flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">Gaming</button>
    <button className="mb-0.5 flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">Neon</button>
    <button className="mb-0.5 flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-400 hover:bg-slate-800 hover:text-white">Gradients</button>
  </div>
</div>`}
          >
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
          </CodePreview>
        </section>

        {/* 8. Breadcrumb Styles */}
        <section className="mt-12">
          <CodePreview
            title="Breadcrumb Styles"
            description="Three common breadcrumb navigation variations."
            code={`{/* Slash Separated */}
<nav className="flex items-center gap-2 text-sm">
  <a className="text-slate-400 hover:text-white">Home</a>
  <span className="text-slate-600">/</span>
  <a className="text-slate-400 hover:text-white">Components</a>
  <span className="text-slate-600">/</span>
  <span className="text-white font-medium">Navbar</span>
</nav>

{/* Chevron Arrow Separated */}
<nav className="flex items-center gap-2 text-sm">
  <a className="text-slate-400 hover:text-white">Home</a>
  <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
  <a className="text-slate-400 hover:text-white">Components</a>
  <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
  <span className="text-white font-medium">Navbar</span>
</nav>

{/* With Home Icon */}
<nav className="flex items-center gap-2 text-sm">
  <a className="text-slate-400 hover:text-white">
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
    </svg>
  </a>
  <span className="text-slate-600">/</span>
  <a className="text-slate-400 hover:text-white">Components</a>
  <span className="text-slate-600">/</span>
  <span className="text-white font-medium">Navbar</span>
</nav>`}
          >
            <div className="space-y-6">
              {/* Slash Separated */}
              <div>
                <p className="mb-2 text-xs font-medium text-slate-500">Slash Separated</p>
                <nav className="flex items-center gap-2 text-sm">
                  <a className="text-slate-400 hover:text-white cursor-pointer">Home</a>
                  <span className="text-slate-600">/</span>
                  <a className="text-slate-400 hover:text-white cursor-pointer">Components</a>
                  <span className="text-slate-600">/</span>
                  <span className="font-medium text-white">Navbar</span>
                </nav>
              </div>

              {/* Chevron Arrow Separated */}
              <div>
                <p className="mb-2 text-xs font-medium text-slate-500">Chevron Arrow Separated</p>
                <nav className="flex items-center gap-2 text-sm">
                  <a className="text-slate-400 hover:text-white cursor-pointer">Home</a>
                  <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <a className="text-slate-400 hover:text-white cursor-pointer">Components</a>
                  <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  <span className="font-medium text-white">Navbar</span>
                </nav>
              </div>

              {/* With Home Icon */}
              <div>
                <p className="mb-2 text-xs font-medium text-slate-500">With Home Icon</p>
                <nav className="flex items-center gap-2 text-sm">
                  <a className="text-slate-400 hover:text-white cursor-pointer">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>
                  </a>
                  <span className="text-slate-600">/</span>
                  <a className="text-slate-400 hover:text-white cursor-pointer">Components</a>
                  <span className="text-slate-600">/</span>
                  <span className="font-medium text-white">Navbar</span>
                </nav>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* PREMIUM: Mega Menu Navbar */}
        <section className="mt-16">
          <ProLock title="Mega Menu Navbar">
            <CodePreview
              title="Mega Menu Navbar"
              description="Full-featured navbar with animated mega menu dropdown, search, and user profile."
              dark={true}
              code={`<div>Mega Menu Navbar Premium</div>`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                {/* Navbar bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-xs font-black text-white">UI</div>
                      <span className="font-black text-white">ReactUI</span>
                    </div>
                    <nav className="hidden items-center gap-1 md:flex">
                      {["Products", "Components", "Pricing", "Docs"].map((item, i) => (
                        <button key={item} className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${i === 1 ? "bg-violet-500/10 text-violet-300" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}>
                          {item}
                          {(i === 0 || i === 1) && <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
                        </button>
                      ))}
                    </nav>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-xs text-slate-400 transition hover:border-slate-600">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      Search…
                      <kbd className="rounded bg-slate-700 px-1.5 py-0.5 text-xs text-slate-400">⌘K</kbd>
                    </button>
                    <button className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90">
                      Get Pro
                    </button>
                  </div>
                </div>
                {/* Mega menu dropdown */}
                <div className="grid grid-cols-3 gap-px bg-slate-800 p-px">
                  {[
                    { category: "UI Components", items: ["Buttons & CTAs", "Cards & Panels", "Forms & Inputs", "Navigation"] },
                    { category: "Design Systems", items: ["Glassmorphism", "Neumorphism", "Neon & Glow", "Gradients"] },
                    { category: "Templates", items: ["Landing Pages", "Dashboards", "Authentication", "E-commerce"] },
                  ].map((col) => (
                    <div key={col.category} className="bg-slate-900 p-5">
                      <p className="text-xs font-black uppercase tracking-wider text-violet-400">{col.category}</p>
                      <ul className="mt-3 space-y-1">
                        {col.items.map((item) => (
                          <li key={item}>
                            <a className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-slate-400 transition hover:bg-slate-800 hover:text-white cursor-pointer">
                              <div className="h-1.5 w-1.5 rounded-full bg-slate-600" />
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* PREMIUM: Command Palette */}
        <section className="mt-16">
          <ProLock title="Command Palette (⌘K)">
            <CodePreview
              title="Command Palette (⌘K)"
              description="Spotlight-style command palette with search, recent items, and keyboard shortcuts."
              dark={true}
              code={`<div>Command Palette Premium</div>`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-950 p-8">
                <div className="pointer-events-none absolute inset-0 bg-black/50" />
                <div className="relative mx-auto max-w-lg overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl shadow-black">
                  {/* Search */}
                  <div className="flex items-center gap-3 border-b border-slate-800 px-4 py-3">
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input className="flex-1 bg-transparent text-sm text-white placeholder-slate-500 outline-none" placeholder="Search components, docs, or pages..." defaultValue="glass" />
                    <kbd className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs text-slate-400">ESC</kbd>
                  </div>
                  {/* Results */}
                  <div className="p-2">
                    <div className="px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">Components</div>
                    {[
                      { name: "Glass Card", icon: "🪟", shortcut: "→" },
                      { name: "Glass Form", icon: "📋", shortcut: "→" },
                      { name: "Glass Navbar", icon: "🧭", shortcut: "→" },
                    ].map((item, i) => (
                      <div key={item.name} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer transition ${i === 0 ? "bg-violet-500/10 border border-violet-500/20" : "hover:bg-slate-800"}`}>
                        <span className="text-lg">{item.icon}</span>
                        <span className={`flex-1 text-sm ${i === 0 ? "font-semibold text-violet-300" : "text-slate-300"}`}>{item.name}</span>
                        <kbd className="rounded border border-slate-700 bg-slate-800 px-2 py-0.5 text-xs text-slate-400">{item.shortcut}</kbd>
                      </div>
                    ))}
                    <div className="mt-1 px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">Recent</div>
                    {["Neon Dashboard", "Gradient Hero"].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer hover:bg-slate-800">
                        <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span className="text-sm text-slate-400">{item}</span>
                      </div>
                    ))}
                  </div>
                  {/* Footer */}
                  <div className="flex items-center gap-4 border-t border-slate-800 px-4 py-2 text-xs text-slate-500">
                    <span><kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-400">↑↓</kbd> navigate</span>
                    <span><kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-400">↵</kbd> select</span>
                    <span><kbd className="rounded bg-slate-800 px-1.5 py-0.5 text-slate-400">ESC</kbd> close</span>
                  </div>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* PREMIUM: Glassmorphic Floating Navbar */}
        <section className="mt-16 pb-16">
          <ProLock title="Glassmorphic Floating Navbar">
            <CodePreview
              title="Glassmorphic Floating Navbar"
              description="Premium floating navbar with glass blur, gradient logo, notification bell, and user avatar."
              dark={true}
              code={`<div>Glassmorphic Floating Navbar Premium</div>`}
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-900 p-12">
                {/* Decorations */}
                <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-pink-500/20 blur-3xl" />
                {/* Floating navbar */}
                <div className="relative mx-auto max-w-2xl rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 text-xs font-black text-white shadow-lg shadow-violet-500/30">R</div>
                      <span className="font-black text-white">ReactUI</span>
                    </div>
                    {/* Nav links */}
                    <div className="hidden items-center gap-1 md:flex">
                      {["Home", "Showcase", "Pricing", "Docs"].map((item, i) => (
                        <button key={item} className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${i === 0 ? "bg-white/20 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"}`}>
                          {item}
                        </button>
                      ))}
                    </div>
                    {/* Right actions */}
                    <div className="flex items-center gap-3">
                      {/* Notification bell */}
                      <button className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-pink-400" />
                      </button>
                      {/* Avatar */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-xs font-black text-white shadow-lg">AK</div>
                    </div>
                  </div>
                </div>
                {/* Page content hint */}
                <div className="relative mt-10 text-center">
                  <h2 className="text-3xl font-black text-white">Your Content Here</h2>
                  <p className="mt-2 text-white/40">The floating navbar sits above your page content</p>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>
      </div>
    </div>
  );
}
