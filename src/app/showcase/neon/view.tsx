"use client";

import CodePreview from "@/components/CodePreview";
import ProLock from "@/components/ProLock";

export default function NeonShowcase() {
  return (
    <div className="min-h-screen bg-cyber-bg">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-6xl font-black uppercase tracking-wider text-neon-pink neon-text-pink animate-[neon-flicker_1.5s_infinite_alternate]">
            NEON
          </h1>
          <p className="mt-2 font-mono text-sm tracking-widest text-neon-blue">
            &#9632; ELECTRIC DREAMS &#9632; DARK INTERFACES &#9632; GLOWING EVERYTHING &#9632;
          </p>
        </div>

        {/* Neon Buttons */}
        <div className="mt-16">
          <CodePreview
            title="Neon Buttons"
            description="Glowing neon buttons in multiple color variants with border-only and filled hover states."
            dark={true}
            code={`{/* Border-only neon buttons with fill on hover */}
<button className="neon-box-pink rounded-lg border border-neon-pink bg-neon-pink/10 px-6 py-3 font-bold text-neon-pink transition hover:bg-neon-pink hover:text-white">
  PINK NEON
</button>

<button className="neon-box-blue rounded-lg border border-neon-blue bg-neon-blue/10 px-6 py-3 font-bold text-neon-blue transition hover:bg-neon-blue hover:text-cyber-bg">
  CYAN NEON
</button>

<button className="neon-box-green rounded-lg border border-neon-green bg-neon-green/10 px-6 py-3 font-bold text-neon-green transition hover:bg-neon-green hover:text-cyber-bg">
  GREEN NEON
</button>

<button className="neon-box-purple rounded-lg border border-neon-purple bg-neon-purple/10 px-6 py-3 font-bold text-neon-purple transition hover:bg-neon-purple hover:text-white">
  PURPLE NEON
</button>

<button className="rounded-lg border border-neon-yellow bg-neon-yellow/10 px-6 py-3 font-bold text-neon-yellow transition hover:bg-neon-yellow hover:text-cyber-bg" style={{ boxShadow: "0 0 5px #ffe600, 0 0 15px #ffe600" }}>
  YELLOW NEON
</button>

{/* Filled neon buttons */}
<button className="neon-box-pink rounded-lg bg-neon-pink px-6 py-3 font-bold text-white transition hover:bg-neon-pink/80">
  PINK FILLED
</button>

<button className="neon-box-blue rounded-lg bg-neon-blue px-6 py-3 font-bold text-cyber-bg transition hover:bg-neon-blue/80">
  CYAN FILLED
</button>

<button className="neon-box-green rounded-lg bg-neon-green px-6 py-3 font-bold text-cyber-bg transition hover:bg-neon-green/80">
  GREEN FILLED
</button>`}
          >
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-3">Border-only with fill on hover</p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="neon-box-pink rounded-lg border border-neon-pink bg-neon-pink/10 px-6 py-3 font-bold text-neon-pink transition hover:bg-neon-pink hover:text-white">
                  PINK NEON
                </button>
                <button className="neon-box-blue rounded-lg border border-neon-blue bg-neon-blue/10 px-6 py-3 font-bold text-neon-blue transition hover:bg-neon-blue hover:text-cyber-bg">
                  CYAN NEON
                </button>
                <button className="neon-box-green rounded-lg border border-neon-green bg-neon-green/10 px-6 py-3 font-bold text-neon-green transition hover:bg-neon-green hover:text-cyber-bg">
                  GREEN NEON
                </button>
                <button className="neon-box-purple rounded-lg border border-neon-purple bg-neon-purple/10 px-6 py-3 font-bold text-neon-purple transition hover:bg-neon-purple hover:text-white">
                  PURPLE NEON
                </button>
                <button className="rounded-lg border border-neon-yellow bg-neon-yellow/10 px-6 py-3 font-bold text-neon-yellow transition hover:bg-neon-yellow hover:text-cyber-bg" style={{ boxShadow: "0 0 5px #ffe600, 0 0 15px #ffe600" }}>
                  YELLOW NEON
                </button>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-3 mt-6">Filled variants with glow</p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="neon-box-pink rounded-lg bg-neon-pink px-6 py-3 font-bold text-white transition hover:bg-neon-pink/80">
                  PINK FILLED
                </button>
                <button className="neon-box-blue rounded-lg bg-neon-blue px-6 py-3 font-bold text-cyber-bg transition hover:bg-neon-blue/80">
                  CYAN FILLED
                </button>
                <button className="neon-box-green rounded-lg bg-neon-green px-6 py-3 font-bold text-cyber-bg transition hover:bg-neon-green/80">
                  GREEN FILLED
                </button>
              </div>
            </div>
          </CodePreview>
        </div>

        {/* Neon Cards */}
        <div className="mt-12">
          <CodePreview
            title="Neon Cards"
            description="Glassmorphic neon cards for pricing, performance metrics, and theme customization."
            dark={true}
            code={`{/* Pink featured pricing card */}
<div className="neon-box-pink rounded-xl border border-neon-pink/30 bg-cyber-card p-6">
  <div className="text-3xl neon-text-pink">&#9733;</div>
  <h3 className="mt-3 text-lg font-bold text-neon-pink">Featured Plan</h3>
  <p className="mt-2 text-sm text-slate-400">Get access to all premium neon components and themes.</p>
  <p className="mt-4">
    <span className="text-3xl font-black text-neon-pink">$49</span>
    <span className="text-slate-500">/mo</span>
  </p>
  <button className="mt-4 w-full rounded-lg bg-neon-pink/20 py-2 text-sm font-bold text-neon-pink transition hover:bg-neon-pink hover:text-white">
    GET STARTED
  </button>
</div>

{/* Blue performance card with progress bars */}
<div className="neon-box-blue rounded-xl border border-neon-blue/30 bg-cyber-card p-6">
  <div className="text-3xl neon-text-blue">&#9889;</div>
  <h3 className="mt-3 text-lg font-bold text-neon-blue">Performance</h3>
  <p className="mt-2 text-sm text-slate-400">Lightning fast components with zero runtime overhead.</p>
  <div className="mt-4 space-y-2">
    <div>
      <div className="mb-1 flex justify-between text-xs">
        <span className="text-slate-400">Speed</span>
        <span className="text-neon-blue">98%</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800">
        <div className="h-1.5 w-[98%] rounded-full bg-neon-blue" />
      </div>
    </div>
    <div>
      <div className="mb-1 flex justify-between text-xs">
        <span className="text-slate-400">Bundle Size</span>
        <span className="text-neon-green">12KB</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800">
        <div className="h-1.5 w-[15%] rounded-full bg-neon-green" />
      </div>
    </div>
  </div>
</div>

{/* Purple custom themes card with color circles */}
<div className="neon-box-purple rounded-xl border border-neon-purple/30 bg-cyber-card p-6">
  <div className="text-3xl neon-text-purple">&#10048;</div>
  <h3 className="mt-3 text-lg font-bold text-neon-purple">Custom Themes</h3>
  <p className="mt-2 text-sm text-slate-400">Create your own neon color palette and glow effects.</p>
  <div className="mt-4 flex gap-2">
    <div className="h-8 w-8 rounded-full bg-neon-pink" />
    <div className="h-8 w-8 rounded-full bg-neon-blue" />
    <div className="h-8 w-8 rounded-full bg-neon-green" />
    <div className="h-8 w-8 rounded-full bg-neon-purple" />
    <div className="h-8 w-8 rounded-full bg-neon-yellow" />
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="neon-box-pink rounded-xl border border-neon-pink/30 bg-cyber-card p-6">
                <div className="text-3xl neon-text-pink">&#9733;</div>
                <h3 className="mt-3 text-lg font-bold text-neon-pink">Featured Plan</h3>
                <p className="mt-2 text-sm text-slate-400">Get access to all premium neon components and themes.</p>
                <p className="mt-4"><span className="text-3xl font-black text-neon-pink">$49</span><span className="text-slate-500">/mo</span></p>
                <button className="mt-4 w-full rounded-lg bg-neon-pink/20 py-2 text-sm font-bold text-neon-pink transition hover:bg-neon-pink hover:text-white">
                  GET STARTED
                </button>
              </div>

              <div className="neon-box-blue rounded-xl border border-neon-blue/30 bg-cyber-card p-6">
                <div className="text-3xl neon-text-blue">&#9889;</div>
                <h3 className="mt-3 text-lg font-bold text-neon-blue">Performance</h3>
                <p className="mt-2 text-sm text-slate-400">Lightning fast components with zero runtime overhead.</p>
                <div className="mt-4 space-y-2">
                  <div><div className="mb-1 flex justify-between text-xs"><span className="text-slate-400">Speed</span><span className="text-neon-blue">98%</span></div><div className="h-1.5 rounded-full bg-slate-800"><div className="h-1.5 w-[98%] rounded-full bg-neon-blue" /></div></div>
                  <div><div className="mb-1 flex justify-between text-xs"><span className="text-slate-400">Bundle Size</span><span className="text-neon-green">12KB</span></div><div className="h-1.5 rounded-full bg-slate-800"><div className="h-1.5 w-[15%] rounded-full bg-neon-green" /></div></div>
                </div>
              </div>

              <div className="neon-box-purple rounded-xl border border-neon-purple/30 bg-cyber-card p-6">
                <div className="text-3xl neon-text-purple">&#10048;</div>
                <h3 className="mt-3 text-lg font-bold text-neon-purple">Custom Themes</h3>
                <p className="mt-2 text-sm text-slate-400">Create your own neon color palette and glow effects.</p>
                <div className="mt-4 flex gap-2">
                  {["bg-neon-pink", "bg-neon-blue", "bg-neon-green", "bg-neon-purple", "bg-neon-yellow"].map((c) => (
                    <div key={c} className={`h-8 w-8 rounded-full ${c}`} />
                  ))}
                </div>
              </div>
            </div>
          </CodePreview>
        </div>

        {/* Neon Login Form */}
        <div className="mt-12">
          <CodePreview
            title="Neon Login Form"
            description="Cyberpunk-themed login form with neon-green glow effects and mono-spaced typography."
            dark={true}
            code={`<div className="mx-auto max-w-md rounded-xl border border-neon-green/20 bg-cyber-card p-8">
  <h3 className="text-center text-2xl font-black text-neon-green neon-text-green">
    SIGN IN
  </h3>
  <form className="mt-6 space-y-4">
    <div>
      <label className="mb-1 block font-mono text-xs uppercase text-neon-green/60">
        Username
      </label>
      <input
        type="text"
        placeholder="cyber_user"
        className="w-full rounded-lg border border-neon-green/20 bg-cyber-bg px-4 py-3 font-mono text-sm text-neon-green placeholder-neon-green/30 outline-none transition focus:border-neon-green focus:shadow-[0_0_10px_rgba(57,255,20,0.2)]"
      />
    </div>
    <div>
      <label className="mb-1 block font-mono text-xs uppercase text-neon-green/60">
        Password
      </label>
      <input
        type="password"
        placeholder="********"
        className="w-full rounded-lg border border-neon-green/20 bg-cyber-bg px-4 py-3 font-mono text-sm text-neon-green placeholder-neon-green/30 outline-none transition focus:border-neon-green focus:shadow-[0_0_10px_rgba(57,255,20,0.2)]"
      />
    </div>
    <button
      type="submit"
      className="neon-box-green w-full rounded-lg border border-neon-green bg-neon-green/10 py-3 font-mono font-bold uppercase tracking-widest text-neon-green transition hover:bg-neon-green hover:text-cyber-bg"
    >
      ACCESS
    </button>
  </form>
</div>`}
          >
            <div className="mx-auto max-w-md rounded-xl border border-neon-green/20 bg-cyber-card p-8">
              <h3 className="text-center text-2xl font-black text-neon-green neon-text-green">SIGN IN</h3>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="mb-1 block font-mono text-xs uppercase text-neon-green/60">Username</label>
                  <input type="text" placeholder="cyber_user" className="w-full rounded-lg border border-neon-green/20 bg-cyber-bg px-4 py-3 font-mono text-sm text-neon-green placeholder-neon-green/30 outline-none transition focus:border-neon-green focus:shadow-[0_0_10px_rgba(57,255,20,0.2)]" />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs uppercase text-neon-green/60">Password</label>
                  <input type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" className="w-full rounded-lg border border-neon-green/20 bg-cyber-bg px-4 py-3 font-mono text-sm text-neon-green placeholder-neon-green/30 outline-none transition focus:border-neon-green focus:shadow-[0_0_10px_rgba(57,255,20,0.2)]" />
                </div>
                <button type="submit" className="neon-box-green w-full rounded-lg border border-neon-green bg-neon-green/10 py-3 font-mono font-bold uppercase tracking-widest text-neon-green transition hover:bg-neon-green hover:text-cyber-bg">
                  ACCESS
                </button>
              </form>
            </div>
          </CodePreview>
        </div>

        {/* Neon Alert Banners */}
        <div className="mt-12">
          <CodePreview
            title="Neon Alert Banners"
            description="Critical, informational, and success alert banners with neon glow borders and mono-spaced text."
            dark={true}
            code={`{/* Critical alert - pink */}
<div className="flex items-center gap-3 rounded-lg border border-neon-pink/30 bg-neon-pink/5 px-4 py-3">
  <span className="text-neon-pink neon-text-pink font-bold">&#9888;</span>
  <span className="font-mono text-sm text-neon-pink">
    CRITICAL: System breach detected in sector 7
  </span>
</div>

{/* Info alert - blue */}
<div className="flex items-center gap-3 rounded-lg border border-neon-blue/30 bg-neon-blue/5 px-4 py-3">
  <span className="text-neon-blue neon-text-blue font-bold">&#9432;</span>
  <span className="font-mono text-sm text-neon-blue">
    INFO: Firmware update v3.2 is available
  </span>
</div>

{/* Success alert - green */}
<div className="flex items-center gap-3 rounded-lg border border-neon-green/30 bg-neon-green/5 px-4 py-3">
  <span className="text-neon-green neon-text-green font-bold">&#10003;</span>
  <span className="font-mono text-sm text-neon-green">
    SUCCESS: Connection established on port 8080
  </span>
</div>`}
          >
            <div className="space-y-3 max-w-lg">
              <div className="flex items-center gap-3 rounded-lg border border-neon-pink/30 bg-neon-pink/5 px-4 py-3">
                <span className="text-neon-pink neon-text-pink font-bold">&#9888;</span>
                <span className="font-mono text-sm text-neon-pink">CRITICAL: System breach detected in sector 7</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neon-blue/30 bg-neon-blue/5 px-4 py-3">
                <span className="text-neon-blue neon-text-blue font-bold">&#9432;</span>
                <span className="font-mono text-sm text-neon-blue">INFO: Firmware update v3.2 is available</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neon-green/30 bg-neon-green/5 px-4 py-3">
                <span className="text-neon-green neon-text-green font-bold">&#10003;</span>
                <span className="font-mono text-sm text-neon-green">SUCCESS: Connection established on port 8080</span>
              </div>
            </div>
          </CodePreview>
        </div>

        {/* Neon Data Grid */}
        <div className="mt-12">
          <CodePreview
            title="Neon Data Grid"
            description="Cyberpunk data table with neon-blue header and color-coded status indicators."
            dark={true}
            code={`<div className="overflow-hidden rounded-xl border border-neon-blue/20 bg-cyber-card">
  <table className="w-full text-left font-mono text-sm">
    <thead>
      <tr className="border-b border-neon-blue/20 bg-neon-blue/5">
        <th className="px-4 py-3 text-xs uppercase tracking-wider text-neon-blue">ID</th>
        <th className="px-4 py-3 text-xs uppercase tracking-wider text-neon-blue">Node</th>
        <th className="px-4 py-3 text-xs uppercase tracking-wider text-neon-blue">Status</th>
        <th className="px-4 py-3 text-xs uppercase tracking-wider text-neon-blue">Latency</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-slate-800/50 hover:bg-neon-blue/5">
        <td className="px-4 py-3 text-slate-400">NX-001</td>
        <td className="px-4 py-3 text-white">Tokyo</td>
        <td className="px-4 py-3 text-neon-green">ONLINE</td>
        <td className="px-4 py-3 text-slate-400">12ms</td>
      </tr>
      <tr className="border-b border-slate-800/50 hover:bg-neon-blue/5">
        <td className="px-4 py-3 text-slate-400">NX-002</td>
        <td className="px-4 py-3 text-white">Berlin</td>
        <td className="px-4 py-3 text-neon-green">ONLINE</td>
        <td className="px-4 py-3 text-slate-400">28ms</td>
      </tr>
      <tr className="border-b border-slate-800/50 hover:bg-neon-blue/5">
        <td className="px-4 py-3 text-slate-400">NX-003</td>
        <td className="px-4 py-3 text-white">NYC</td>
        <td className="px-4 py-3 text-neon-yellow">WARNING</td>
        <td className="px-4 py-3 text-slate-400">145ms</td>
      </tr>
      <tr className="border-b border-slate-800/50 hover:bg-neon-blue/5">
        <td className="px-4 py-3 text-slate-400">NX-004</td>
        <td className="px-4 py-3 text-white">Mumbai</td>
        <td className="px-4 py-3 text-neon-pink">OFFLINE</td>
        <td className="px-4 py-3 text-slate-400">---</td>
      </tr>
    </tbody>
  </table>
</div>`}
          >
            <div className="overflow-hidden rounded-xl border border-neon-blue/20 bg-cyber-card">
              <table className="w-full text-left font-mono text-sm">
                <thead>
                  <tr className="border-b border-neon-blue/20 bg-neon-blue/5">
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-neon-blue">ID</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-neon-blue">Node</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-neon-blue">Status</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-neon-blue">Latency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: "NX-001", node: "Tokyo", status: "ONLINE", latency: "12ms", color: "text-neon-green" },
                    { id: "NX-002", node: "Berlin", status: "ONLINE", latency: "28ms", color: "text-neon-green" },
                    { id: "NX-003", node: "NYC", status: "WARNING", latency: "145ms", color: "text-neon-yellow" },
                    { id: "NX-004", node: "Mumbai", status: "OFFLINE", latency: "---", color: "text-neon-pink" },
                  ].map((row) => (
                    <tr key={row.id} className="border-b border-slate-800/50 hover:bg-neon-blue/5">
                      <td className="px-4 py-3 text-slate-400">{row.id}</td>
                      <td className="px-4 py-3 text-white">{row.node}</td>
                      <td className={`px-4 py-3 ${row.color}`}>{row.status}</td>
                      <td className="px-4 py-3 text-slate-400">{row.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CodePreview>
        </div>

        {/* Neon Badges */}
        <div className="mt-12">
          <CodePreview
            title="Neon Badges"
            description="Small rounded badge tags in all neon color variants with glow effects."
            dark={true}
            code={`<span className="neon-box-pink inline-block rounded-full border border-neon-pink/50 bg-neon-pink/10 px-3 py-1 font-mono text-xs font-bold text-neon-pink">
  CRITICAL
</span>

<span className="neon-box-blue inline-block rounded-full border border-neon-blue/50 bg-neon-blue/10 px-3 py-1 font-mono text-xs font-bold text-neon-blue">
  ACTIVE
</span>

<span className="neon-box-green inline-block rounded-full border border-neon-green/50 bg-neon-green/10 px-3 py-1 font-mono text-xs font-bold text-neon-green">
  SECURE
</span>

<span className="neon-box-purple inline-block rounded-full border border-neon-purple/50 bg-neon-purple/10 px-3 py-1 font-mono text-xs font-bold text-neon-purple">
  PREMIUM
</span>

<span className="inline-block rounded-full border border-neon-yellow/50 bg-neon-yellow/10 px-3 py-1 font-mono text-xs font-bold text-neon-yellow" style={{ boxShadow: "0 0 5px #ffe600, 0 0 10px #ffe600" }}>
  CAUTION
</span>

<span className="neon-box-pink inline-block rounded-full bg-neon-pink px-3 py-1 font-mono text-xs font-bold text-white">
  HOT
</span>

<span className="neon-box-green inline-block rounded-full bg-neon-green px-3 py-1 font-mono text-xs font-bold text-cyber-bg">
  NEW
</span>`}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="neon-box-pink inline-block rounded-full border border-neon-pink/50 bg-neon-pink/10 px-3 py-1 font-mono text-xs font-bold text-neon-pink">
                CRITICAL
              </span>
              <span className="neon-box-blue inline-block rounded-full border border-neon-blue/50 bg-neon-blue/10 px-3 py-1 font-mono text-xs font-bold text-neon-blue">
                ACTIVE
              </span>
              <span className="neon-box-green inline-block rounded-full border border-neon-green/50 bg-neon-green/10 px-3 py-1 font-mono text-xs font-bold text-neon-green">
                SECURE
              </span>
              <span className="neon-box-purple inline-block rounded-full border border-neon-purple/50 bg-neon-purple/10 px-3 py-1 font-mono text-xs font-bold text-neon-purple">
                PREMIUM
              </span>
              <span className="inline-block rounded-full border border-neon-yellow/50 bg-neon-yellow/10 px-3 py-1 font-mono text-xs font-bold text-neon-yellow" style={{ boxShadow: "0 0 5px #ffe600, 0 0 10px #ffe600" }}>
                CAUTION
              </span>
              <span className="neon-box-pink inline-block rounded-full bg-neon-pink px-3 py-1 font-mono text-xs font-bold text-white">
                HOT
              </span>
              <span className="neon-box-green inline-block rounded-full bg-neon-green px-3 py-1 font-mono text-xs font-bold text-cyber-bg">
                NEW
              </span>
            </div>
          </CodePreview>
        </div>

        {/* Neon Progress Bars */}
        <div className="mt-12">
          <CodePreview
            title="Neon Progress Bars"
            description="Animated progress bars with neon glow effects in pink, blue, and green."
            dark={true}
            code={`{/* Pink progress - 75% */}
<div>
  <div className="mb-2 flex justify-between font-mono text-xs">
    <span className="text-neon-pink">UPLOAD</span>
    <span className="text-neon-pink">75%</span>
  </div>
  <div className="h-2 rounded-full bg-slate-800">
    <div
      className="h-2 rounded-full bg-neon-pink transition-all"
      style={{ width: "75%", boxShadow: "0 0 8px #ff2d95, 0 0 16px #ff2d95" }}
    />
  </div>
</div>

{/* Blue progress - 90% */}
<div>
  <div className="mb-2 flex justify-between font-mono text-xs">
    <span className="text-neon-blue">DOWNLOAD</span>
    <span className="text-neon-blue">90%</span>
  </div>
  <div className="h-2 rounded-full bg-slate-800">
    <div
      className="h-2 rounded-full bg-neon-blue transition-all"
      style={{ width: "90%", boxShadow: "0 0 8px #00d4ff, 0 0 16px #00d4ff" }}
    />
  </div>
</div>

{/* Green progress - 45% */}
<div>
  <div className="mb-2 flex justify-between font-mono text-xs">
    <span className="text-neon-green">COMPILE</span>
    <span className="text-neon-green">45%</span>
  </div>
  <div className="h-2 rounded-full bg-slate-800">
    <div
      className="h-2 rounded-full bg-neon-green transition-all"
      style={{ width: "45%", boxShadow: "0 0 8px #39ff14, 0 0 16px #39ff14" }}
    />
  </div>
</div>`}
          >
            <div className="max-w-lg space-y-5">
              <div>
                <div className="mb-2 flex justify-between font-mono text-xs">
                  <span className="text-neon-pink">UPLOAD</span>
                  <span className="text-neon-pink">75%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-neon-pink transition-all" style={{ width: "75%", boxShadow: "0 0 8px #ff2d95, 0 0 16px #ff2d95" }} />
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between font-mono text-xs">
                  <span className="text-neon-blue">DOWNLOAD</span>
                  <span className="text-neon-blue">90%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-neon-blue transition-all" style={{ width: "90%", boxShadow: "0 0 8px #00d4ff, 0 0 16px #00d4ff" }} />
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between font-mono text-xs">
                  <span className="text-neon-green">COMPILE</span>
                  <span className="text-neon-green">45%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-neon-green transition-all" style={{ width: "45%", boxShadow: "0 0 8px #39ff14, 0 0 16px #39ff14" }} />
                </div>
              </div>
            </div>
          </CodePreview>
        </div>

        {/* Neon Toggle Switches */}
        <div className="mt-12">
          <CodePreview
            title="Neon Toggle Switches"
            description="Toggle switches with neon glow when activated. Uses checkbox inputs with custom styling."
            dark={true}
            code={`{/* Neon toggle switch - use state to control checked */}
<label className="relative inline-flex cursor-pointer items-center gap-3">
  <input type="checkbox" className="peer sr-only" defaultChecked />
  <div className="h-6 w-11 rounded-full bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-slate-400 after:transition-all peer-checked:bg-neon-pink/30 peer-checked:after:translate-x-full peer-checked:after:bg-neon-pink" style={{ boxShadow: "0 0 8px #ff2d95, 0 0 16px #ff2d95" }} />
  <span className="font-mono text-xs text-neon-pink">PINK</span>
</label>

<label className="relative inline-flex cursor-pointer items-center gap-3">
  <input type="checkbox" className="peer sr-only" defaultChecked />
  <div className="h-6 w-11 rounded-full bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-slate-400 after:transition-all peer-checked:bg-neon-blue/30 peer-checked:after:translate-x-full peer-checked:after:bg-neon-blue" style={{ boxShadow: "0 0 8px #00d4ff, 0 0 16px #00d4ff" }} />
  <span className="font-mono text-xs text-neon-blue">BLUE</span>
</label>

<label className="relative inline-flex cursor-pointer items-center gap-3">
  <input type="checkbox" className="peer sr-only" />
  <div className="h-6 w-11 rounded-full bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-slate-400 after:transition-all peer-checked:bg-neon-green/30 peer-checked:after:translate-x-full peer-checked:after:bg-neon-green" />
  <span className="font-mono text-xs text-slate-500">GREEN (off)</span>
</label>`}
          >
            <div className="flex flex-wrap items-center gap-8">
              <label className="relative inline-flex cursor-pointer items-center gap-3">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="h-6 w-11 rounded-full bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-slate-400 after:transition-all peer-checked:bg-neon-pink/30 peer-checked:after:translate-x-full peer-checked:after:bg-neon-pink" style={{ boxShadow: "0 0 8px #ff2d95, 0 0 16px #ff2d95" }} />
                <span className="font-mono text-xs text-neon-pink">PINK</span>
              </label>
              <label className="relative inline-flex cursor-pointer items-center gap-3">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="h-6 w-11 rounded-full bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-slate-400 after:transition-all peer-checked:bg-neon-blue/30 peer-checked:after:translate-x-full peer-checked:after:bg-neon-blue" style={{ boxShadow: "0 0 8px #00d4ff, 0 0 16px #00d4ff" }} />
                <span className="font-mono text-xs text-neon-blue">BLUE</span>
              </label>
              <label className="relative inline-flex cursor-pointer items-center gap-3">
                <input type="checkbox" className="peer sr-only" />
                <div className="h-6 w-11 rounded-full bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-slate-400 after:transition-all peer-checked:bg-neon-green/30 peer-checked:after:translate-x-full peer-checked:after:bg-neon-green" />
                <span className="font-mono text-xs text-slate-500">GREEN (off)</span>
              </label>
              <label className="relative inline-flex cursor-pointer items-center gap-3">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="h-6 w-11 rounded-full bg-slate-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-slate-400 after:transition-all peer-checked:bg-neon-purple/30 peer-checked:after:translate-x-full peer-checked:after:bg-neon-purple" style={{ boxShadow: "0 0 8px #bf00ff, 0 0 16px #bf00ff" }} />
                <span className="font-mono text-xs text-neon-purple">PURPLE</span>
              </label>
            </div>
          </CodePreview>
        </div>

        {/* Neon Text Effects */}
        <div className="mt-12">
          <CodePreview
            title="Neon Text Effects"
            description="Heading text with neon glow CSS classes: neon-text-pink, neon-text-blue, neon-text-green, neon-text-purple."
            dark={true}
            code={`<h2 className="text-3xl font-black text-neon-pink neon-text-pink">
  NEON PINK GLOW
</h2>

<h2 className="text-3xl font-black text-neon-blue neon-text-blue">
  NEON BLUE GLOW
</h2>

<h2 className="text-3xl font-black text-neon-green neon-text-green">
  NEON GREEN GLOW
</h2>

<h2 className="text-3xl font-black text-neon-purple neon-text-purple">
  NEON PURPLE GLOW
</h2>

<h2 className="text-3xl font-black text-neon-yellow" style={{ textShadow: "0 0 7px #ffe600, 0 0 10px #ffe600, 0 0 21px #ffe600, 0 0 42px #ffe600" }}>
  NEON YELLOW GLOW
</h2>`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-neon-pink neon-text-pink">NEON PINK GLOW</h2>
              <h2 className="text-3xl font-black text-neon-blue neon-text-blue">NEON BLUE GLOW</h2>
              <h2 className="text-3xl font-black text-neon-green neon-text-green">NEON GREEN GLOW</h2>
              <h2 className="text-3xl font-black text-neon-purple neon-text-purple">NEON PURPLE GLOW</h2>
              <h2 className="text-3xl font-black text-neon-yellow" style={{ textShadow: "0 0 7px #ffe600, 0 0 10px #ffe600, 0 0 21px #ffe600, 0 0 42px #ffe600" }}>NEON YELLOW GLOW</h2>
            </div>
          </CodePreview>
        </div>
        {/* Neon Club Event Poster - Premium */}
        <div className="mt-12">
          <ProLock title="Neon Club Event Poster">
            <CodePreview
              title="Neon Club Event Poster"
              description="Vibrant neon event poster with glowing text, animated borders, and electric atmosphere."
              dark={true}
              code={`<div>Neon Club Poster Premium</div>`}
            >
              <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border-2 border-pink-500 bg-cyber-bg" style={{ boxShadow: "0 0 30px #ff2d78, 0 0 60px #ff2d7840" }}>
                <div className="relative p-8 text-center">
                  <div className="text-xs font-bold uppercase tracking-[0.5em] text-neon-blue">Saturday Night</div>
                  <div className="mt-2 text-6xl font-black uppercase leading-none" style={{ color: "#ff2d78", textShadow: "0 0 10px #ff2d78, 0 0 40px #ff2d78, 0 0 80px #ff2d78" }}>NEON<br/>NIGHTS</div>
                  <div className="mt-1 text-sm font-bold uppercase tracking-[0.3em] text-neon-blue">Vol. 07</div>
                  <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
                  <div className="space-y-1 text-sm">
                    <div className="text-white">DJ SYNTHWAVE &amp; CYBER COLLECTIVE</div>
                    <div className="text-white/40">March 15 • Club Aurora • 10PM - 6AM</div>
                  </div>
                  <button className="mt-6 w-full rounded-full border-2 border-neon-pink bg-neon-pink/10 py-3 text-sm font-bold text-neon-pink transition hover:bg-neon-pink hover:text-white" style={{ boxShadow: "0 0 10px #ff2d78" }}>
                    GET TICKETS
                  </button>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </div>

        {/* Neon Dashboard Stats - Premium */}
        <div className="mt-12">
          <ProLock title="Neon Dashboard Stats">
            <CodePreview
              title="Neon Dashboard Stats"
              description="Dark dashboard with neon-glowing stat cards, progress bars, and live indicators."
              dark={true}
              code={`<div>Neon Dashboard Premium</div>`}
            >
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { label: "Revenue", value: "₹4.2L", color: "#ff2d78", glow: "#ff2d78" },
                    { label: "Users", value: "18.9K", color: "#00f5ff", glow: "#00f5ff" },
                    { label: "Orders", value: "3,284", color: "#39ff14", glow: "#39ff14" },
                    { label: "Uptime", value: "99.9%", color: "#bf5fff", glow: "#bf5fff" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-2xl border bg-cyber-bg p-4 text-center" style={{ borderColor: stat.color + "40", boxShadow: `0 0 20px ${stat.glow}20` }}>
                      <div className="text-xs uppercase tracking-wider text-white/40">{stat.label}</div>
                      <div className="mt-2 text-2xl font-black" style={{ color: stat.color, textShadow: `0 0 10px ${stat.glow}` }}>{stat.value}</div>
                      <div className="mt-2 h-0.5 w-full rounded-full" style={{ background: stat.color + "30" }}>
                        <div className="h-0.5 w-3/4 rounded-full" style={{ background: stat.color, boxShadow: `0 0 6px ${stat.glow}` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </div>

        {/* Neon Pricing Cards - Premium */}
        <div className="mt-12">
          <ProLock title="Neon Pricing Cards">
            <CodePreview
              title="Neon Pricing Cards"
              description="Electric neon pricing cards with glowing borders, price tags, and feature lists."
              dark={true}
              code={`<div>Neon Pricing Premium</div>`}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { name: "STARTER", price: "Free", color: "#00f5ff", features: ["5 neon components", "Basic glow effects", "Community access"] },
                  { name: "PRO", price: "₹69", color: "#ff2d78", features: ["All neon packs", "Advanced animations", "Priority support", "Figma kit"], popular: true },
                  { name: "TEAM", price: "₹199", color: "#39ff14", features: ["Everything in Pro", "Team license", "Custom neon themes", "Dedicated support"] },
                ].map((plan) => (
                  <div key={plan.name} className="relative rounded-2xl border bg-cyber-bg p-6" style={{ borderColor: plan.color + "50", boxShadow: plan.popular ? `0 0 30px ${plan.color}30` : "none" }}>
                    {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-black text-white" style={{ background: plan.color, boxShadow: `0 0 10px ${plan.color}` }}>POPULAR</div>}
                    <div className="text-xs font-black uppercase tracking-widest" style={{ color: plan.color }}>{plan.name}</div>
                    <div className="mt-2 text-3xl font-black text-white" style={{ textShadow: `0 0 15px ${plan.color}` }}>{plan.price}</div>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                          <span style={{ color: plan.color }}>&#9654;</span> {f}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-5 w-full rounded-lg border py-2.5 text-sm font-bold transition" style={{ borderColor: plan.color, color: plan.color }}>
                      GET STARTED
                    </button>
                  </div>
                ))}
              </div>
            </CodePreview>
          </ProLock>
        </div>
      </div>
    </div>
  );
}
