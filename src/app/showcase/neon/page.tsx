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
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-neon-blue neon-text-blue">Neon Buttons</h2>
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
        </section>

        {/* Neon Cards */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-neon-pink neon-text-pink">Neon Cards</h2>
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
        </section>

        {/* Neon Form */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-neon-green neon-text-green">Neon Login</h2>
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
        </section>

        {/* Neon Alert Boxes */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-neon-blue neon-text-blue">Neon Alerts</h2>
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
        </section>

        {/* Neon Table */}
        <section className="mt-16">
          <h2 className="mb-6 text-xl font-bold text-neon-blue neon-text-blue">Neon Data Grid</h2>
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
        </section>
      </div>
    </div>
  );
}
