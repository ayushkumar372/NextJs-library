import CodePreview from "@/components/CodePreview";

export default function GamingShowcase() {
  return (
    <div className="scan-line relative min-h-screen bg-gaming-dark text-white">
      {/* Background grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,107,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <div className="mb-3 inline-block rounded border border-gaming-red/30 bg-gaming-red/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-gaming-red">
            [ SYSTEM ONLINE ]
          </div>
          <h1 className="text-5xl font-black uppercase tracking-wider sm:text-6xl">
            <span className="text-gradient-gaming">GAMING UI</span>
          </h1>
          <p className="mt-3 font-mono text-sm text-slate-500">
            &gt; CYBERPUNK AESTHETICS // FUTURISTIC HUD // RGB EVERYTHING_
          </p>
        </div>

        {/* 1. Player Stats HUD */}
        <CodePreview
          title="Player Stats HUD"
          description="Full gamer HUD with player info, rank, K/D ratio, and stat bars"
          dark={true}
          code={`<div className="rounded-lg border border-gaming-orange/20 bg-slate-900/80 p-6 font-mono">
  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-gaming-orange bg-gaming-orange/10 text-xl font-black text-gaming-orange">
          LV.72
        </div>
        <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border border-gaming-dark bg-green-500" />
      </div>
      <div>
        <p className="text-lg font-bold text-white">SHADOW_WOLF</p>
        <p className="font-mono text-xs text-gaming-orange">RANK: DIAMOND II</p>
      </div>
    </div>
    <div className="text-right">
      <p className="text-2xl font-black text-gaming-red">K/D 3.42</p>
      <p className="text-[10px] uppercase tracking-widest text-slate-500">TOP 0.5% GLOBAL</p>
    </div>
  </div>
  <div className="mt-4 grid grid-cols-4 gap-4">
    {[
      { label: "MATCHES", value: "1,247", bar: 75, color: "bg-gaming-orange" },
      { label: "WIN RATE", value: "68.2%", bar: 68, color: "bg-green-500" },
      { label: "HEADSHOTS", value: "42.1%", bar: 42, color: "bg-gaming-red" },
      { label: "ACCURACY", value: "31.8%", bar: 32, color: "bg-cyan-400" },
    ].map((stat) => (
      <div key={stat.label} className="rounded border border-slate-800 bg-slate-900/50 p-3">
        <p className="text-[10px] uppercase tracking-widest text-slate-500">{stat.label}</p>
        <p className="mt-1 text-xl font-black text-white">{stat.value}</p>
        <div className="mt-2 h-1 rounded-full bg-slate-800">
          <div className={\`h-1 rounded-full \${stat.color}\`} style={{ width: \`\${stat.bar}%\` }} />
        </div>
      </div>
    ))}
  </div>
</div>`}
        >
          <div className="rounded-lg border border-gaming-orange/20 bg-slate-900/80 p-6 font-mono">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-gaming-orange bg-gaming-orange/10 text-xl font-black text-gaming-orange">
                    LV.72
                  </div>
                  <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border border-gaming-dark bg-green-500" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">SHADOW_WOLF</p>
                  <p className="font-mono text-xs text-gaming-orange">RANK: DIAMOND II</p>
                </div>
              </div>
              <div className="text-right font-mono">
                <p className="text-2xl font-black text-gaming-red">K/D 3.42</p>
                <p className="text-[10px] uppercase tracking-widest text-slate-500">TOP 0.5% GLOBAL</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {[
                { label: "MATCHES", value: "1,247", bar: 75, color: "bg-gaming-orange" },
                { label: "WIN RATE", value: "68.2%", bar: 68, color: "bg-green-500" },
                { label: "HEADSHOTS", value: "42.1%", bar: 42, color: "bg-gaming-red" },
                { label: "ACCURACY", value: "31.8%", bar: 32, color: "bg-cyan-400" },
              ].map((stat) => (
                <div key={stat.label} className="rounded border border-slate-800 bg-slate-900/50 p-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{stat.label}</p>
                  <p className="mt-1 text-xl font-black text-white">{stat.value}</p>
                  <div className="mt-2 h-1 rounded-full bg-slate-800">
                    <div className={`h-1 rounded-full ${stat.color}`} style={{ width: `${stat.bar}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CodePreview>

        {/* 2. RGB Weapon Card */}
        <CodePreview
          title="RGB Weapon Card"
          description="Legendary weapon card with animated RGB border and stat breakdown"
          dark={true}
          code={`<div className="group relative overflow-hidden rounded-lg border-2 border-transparent rgb-border-animate bg-slate-900 p-5">
  <div className="absolute inset-0 bg-gradient-to-b from-gaming-red/5 to-transparent" />
  <div className="relative">
    <div className="flex items-center justify-between">
      <span className="rounded bg-gaming-red/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-gaming-red">LEGENDARY</span>
      <span className="font-mono text-xs text-slate-500">#AK-47</span>
    </div>
    <div className="my-4 flex h-28 items-center justify-center rounded bg-slate-800/50">
      <div className="text-4xl opacity-30">\uD83D\uDD2B</div>
    </div>
    <h3 className="font-bold text-white">Neon Phantom</h3>
    <div className="mt-2 space-y-1 font-mono text-xs">
      <div className="flex justify-between"><span className="text-slate-500">DAMAGE</span><span className="text-gaming-red">98</span></div>
      <div className="flex justify-between"><span className="text-slate-500">ACCURACY</span><span className="text-green-400">85</span></div>
      <div className="flex justify-between"><span className="text-slate-500">FIRE RATE</span><span className="text-yellow-400">72</span></div>
    </div>
  </div>
</div>`}
        >
          <div className="mx-auto max-w-sm">
            <div className="group relative overflow-hidden rounded-lg border-2 border-transparent rgb-border-animate bg-slate-900 p-5">
              <div className="absolute inset-0 bg-gradient-to-b from-gaming-red/5 to-transparent" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-gaming-red/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-gaming-red">LEGENDARY</span>
                  <span className="font-mono text-xs text-slate-500">#AK-47</span>
                </div>
                <div className="my-4 flex h-28 items-center justify-center rounded bg-slate-800/50">
                  <div className="text-4xl opacity-30">&#128299;</div>
                </div>
                <h3 className="font-bold text-white">Neon Phantom</h3>
                <div className="mt-2 space-y-1 font-mono text-xs">
                  <div className="flex justify-between"><span className="text-slate-500">DAMAGE</span><span className="text-gaming-red">98</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">ACCURACY</span><span className="text-green-400">85</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">FIRE RATE</span><span className="text-yellow-400">72</span></div>
                </div>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* 3. Character Select Card */}
        <CodePreview
          title="Character Select Card"
          description="Elite character selection card with avatar, class info, and skill tags"
          dark={true}
          code={`<div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-slate-900 p-5">
  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
  <div className="relative">
    <div className="flex items-center justify-between">
      <span className="rounded bg-cyan-500/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">ELITE</span>
      <span className="font-mono text-xs text-slate-500">AGENT</span>
    </div>
    <div className="my-4 flex h-28 items-center justify-center rounded bg-slate-800/50">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-500/50 bg-cyan-500/10 text-2xl font-black text-cyan-400">
        NX
      </div>
    </div>
    <h3 className="font-bold text-white">Nova X</h3>
    <p className="font-mono text-xs text-slate-500">Stealth Specialist</p>
    <div className="mt-3 flex gap-2">
      {["Smoke", "Dash", "Invis"].map((skill) => (
        <span key={skill} className="rounded border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-400">
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>`}
        >
          <div className="mx-auto max-w-sm">
            <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-slate-900 p-5">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-cyan-500/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-cyan-400">ELITE</span>
                  <span className="font-mono text-xs text-slate-500">AGENT</span>
                </div>
                <div className="my-4 flex h-28 items-center justify-center rounded bg-slate-800/50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-500/50 bg-cyan-500/10 text-2xl font-black text-cyan-400">
                    NX
                  </div>
                </div>
                <h3 className="font-bold text-white">Nova X</h3>
                <p className="font-mono text-xs text-slate-500">Stealth Specialist</p>
                <div className="mt-3 flex gap-2">
                  {["Smoke", "Dash", "Invis"].map((skill) => (
                    <span key={skill} className="rounded border border-cyan-500/20 bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-400">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* 4. Match Victory Card */}
        <CodePreview
          title="Match Victory Card"
          description="Post-match victory screen with 1st place finish and kill/death/assist stats"
          dark={true}
          code={`<div className="group relative overflow-hidden rounded-lg border border-green-500/20 bg-slate-900 p-5">
  <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
  <div className="relative">
    <div className="flex items-center justify-between">
      <span className="rounded bg-green-500/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-green-400">VICTORY</span>
      <span className="font-mono text-xs text-slate-500">2 MIN AGO</span>
    </div>
    <div className="my-4 text-center">
      <p className="text-5xl font-black text-green-400">1st</p>
      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">OUT OF 100 PLAYERS</p>
    </div>
    <div className="grid grid-cols-3 gap-2 text-center font-mono">
      <div className="rounded bg-slate-800/50 p-2">
        <p className="text-lg font-bold text-white">18</p>
        <p className="text-[10px] uppercase tracking-widest text-slate-500">KILLS</p>
      </div>
      <div className="rounded bg-slate-800/50 p-2">
        <p className="text-lg font-bold text-white">2</p>
        <p className="text-[10px] uppercase tracking-widest text-slate-500">DEATHS</p>
      </div>
      <div className="rounded bg-slate-800/50 p-2">
        <p className="text-lg font-bold text-white">6</p>
        <p className="text-[10px] uppercase tracking-widest text-slate-500">ASSISTS</p>
      </div>
    </div>
  </div>
</div>`}
        >
          <div className="mx-auto max-w-sm">
            <div className="group relative overflow-hidden rounded-lg border border-green-500/20 bg-slate-900 p-5">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded bg-green-500/20 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-green-400">VICTORY</span>
                  <span className="font-mono text-xs text-slate-500">2 MIN AGO</span>
                </div>
                <div className="my-4 text-center">
                  <p className="text-5xl font-black text-green-400">1st</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">OUT OF 100 PLAYERS</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="rounded bg-slate-800/50 p-2">
                    <p className="text-lg font-bold text-white">18</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">KILLS</p>
                  </div>
                  <div className="rounded bg-slate-800/50 p-2">
                    <p className="text-lg font-bold text-white">2</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">DEATHS</p>
                  </div>
                  <div className="rounded bg-slate-800/50 p-2">
                    <p className="text-lg font-bold text-white">6</p>
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">ASSISTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* 5. Leaderboard Table */}
        <CodePreview
          title="Leaderboard Table"
          description="Top 5 player leaderboard with rank, score, K/D, and win rate columns"
          dark={true}
          code={`<div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/80 font-mono">
  <div className="flex items-center justify-between border-b border-slate-800 bg-slate-800/50 px-4 py-2 text-[10px] uppercase tracking-widest text-slate-500">
    <span className="w-12">Rank</span>
    <span className="flex-1">Player</span>
    <span className="w-24 text-right">Score</span>
    <span className="w-16 text-right">K/D</span>
    <span className="w-16 text-right">Win %</span>
  </div>
  {[
    { rank: 1, name: "SHADOW_WOLF", score: "48,920", kd: "3.42", win: "68%", color: "text-yellow-400", bg: "bg-yellow-400/5" },
    { rank: 2, name: "DARK_KNIGHT", score: "45,100", kd: "3.18", win: "64%", color: "text-slate-300", bg: "bg-slate-400/5" },
    { rank: 3, name: "FIRE_STORM", score: "42,350", kd: "2.95", win: "61%", color: "text-amber-600", bg: "bg-amber-600/5" },
    { rank: 4, name: "ICE_QUEEN", score: "39,800", kd: "2.87", win: "59%", color: "text-slate-500", bg: "" },
    { rank: 5, name: "CYBER_PUNK", score: "37,200", kd: "2.64", win: "57%", color: "text-slate-500", bg: "" },
  ].map((player) => (
    <div key={player.rank} className={\`flex items-center justify-between border-b border-slate-800/50 px-4 py-3 \${player.bg}\`}>
      <span className={\`w-12 text-sm font-black \${player.color}\`}>#{player.rank}</span>
      <span className="flex-1 text-sm font-bold text-white">{player.name}</span>
      <span className="w-24 text-right text-sm text-slate-400">{player.score}</span>
      <span className="w-16 text-right text-sm text-green-400">{player.kd}</span>
      <span className="w-16 text-right text-sm text-cyan-400">{player.win}</span>
    </div>
  ))}
</div>`}
        >
          <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/80 font-mono">
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-800/50 px-4 py-2 text-[10px] uppercase tracking-widest text-slate-500">
              <span className="w-12">Rank</span>
              <span className="flex-1">Player</span>
              <span className="w-24 text-right">Score</span>
              <span className="w-16 text-right">K/D</span>
              <span className="w-16 text-right">Win %</span>
            </div>
            {[
              { rank: 1, name: "SHADOW_WOLF", score: "48,920", kd: "3.42", win: "68%", color: "text-yellow-400", bg: "bg-yellow-400/5" },
              { rank: 2, name: "DARK_KNIGHT", score: "45,100", kd: "3.18", win: "64%", color: "text-slate-300", bg: "bg-slate-400/5" },
              { rank: 3, name: "FIRE_STORM", score: "42,350", kd: "2.95", win: "61%", color: "text-amber-600", bg: "bg-amber-600/5" },
              { rank: 4, name: "ICE_QUEEN", score: "39,800", kd: "2.87", win: "59%", color: "text-slate-500", bg: "" },
              { rank: 5, name: "CYBER_PUNK", score: "37,200", kd: "2.64", win: "57%", color: "text-slate-500", bg: "" },
            ].map((player) => (
              <div key={player.rank} className={`flex items-center justify-between border-b border-slate-800/50 px-4 py-3 ${player.bg}`}>
                <span className={`w-12 font-mono text-sm font-black ${player.color}`}>#{player.rank}</span>
                <span className="flex-1 font-mono text-sm font-bold text-white">{player.name}</span>
                <span className="w-24 text-right font-mono text-sm text-slate-400">{player.score}</span>
                <span className="w-16 text-right font-mono text-sm text-green-400">{player.kd}</span>
                <span className="w-16 text-right font-mono text-sm text-cyan-400">{player.win}</span>
              </div>
            ))}
          </div>
        </CodePreview>

        {/* 6. Gaming Buttons */}
        <CodePreview
          title="Gaming Buttons"
          description="Collection of gaming-style action buttons with various effects"
          dark={true}
          code={`<div className="flex flex-wrap items-center gap-4">
  <button className="rounded border-2 border-gaming-red bg-gaming-red/10 px-8 py-3 font-mono text-sm font-black uppercase tracking-widest text-gaming-red transition hover:bg-gaming-red hover:text-white">
    PLAY NOW
  </button>
  <button className="rounded border-2 border-transparent rgb-border-animate bg-slate-900 px-8 py-3 font-mono text-sm font-black uppercase tracking-widest text-white transition hover:bg-slate-800">
    RANKED MATCH
  </button>
  <button className="rounded border border-cyan-500/30 bg-cyan-500/10 px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest text-cyan-400 transition hover:bg-cyan-500/20">
    INVENTORY
  </button>
  <button className="rounded bg-gradient-to-r from-gaming-red to-gaming-orange px-8 py-3 font-mono text-sm font-black uppercase tracking-widest text-white transition hover:from-gaming-orange hover:to-gaming-red">
    BATTLE PASS
  </button>
  <button className="flex items-center gap-2 rounded border border-green-500/30 bg-green-500/10 px-6 py-3 font-mono text-sm font-bold uppercase text-green-400 transition hover:bg-green-500/20">
    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
    ONLINE - 24.5K
  </button>
</div>`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <button className="rounded border-2 border-gaming-red bg-gaming-red/10 px-8 py-3 font-mono text-sm font-black uppercase tracking-widest text-gaming-red transition hover:bg-gaming-red hover:text-white">
              PLAY NOW
            </button>
            <button className="rounded border-2 border-transparent rgb-border-animate bg-slate-900 px-8 py-3 font-mono text-sm font-black uppercase tracking-widest text-white transition hover:bg-slate-800">
              RANKED MATCH
            </button>
            <button className="rounded border border-cyan-500/30 bg-cyan-500/10 px-8 py-3 font-mono text-sm font-bold uppercase tracking-widest text-cyan-400 transition hover:bg-cyan-500/20">
              INVENTORY
            </button>
            <button className="group relative rounded bg-gradient-to-r from-gaming-red to-gaming-orange px-8 py-3 font-mono text-sm font-black uppercase tracking-widest text-white transition hover:from-gaming-orange hover:to-gaming-red">
              <span className="relative z-10">BATTLE PASS</span>
            </button>
            <button className="flex items-center gap-2 rounded border border-green-500/30 bg-green-500/10 px-6 py-3 font-mono text-sm font-bold uppercase text-green-400 transition hover:bg-green-500/20">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              ONLINE - 24.5K
            </button>
          </div>
        </CodePreview>

        {/* 7. Achievement Badges */}
        <CodePreview
          title="Achievement Badges"
          description="Rarity-tiered achievement badges from Common to Secret"
          dark={true}
          code={`<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
  {[
    { name: "First Blood", rarity: "Common", color: "border-slate-600 bg-slate-800", text: "text-slate-400" },
    { name: "Sharpshooter", rarity: "Rare", color: "border-blue-500/50 bg-blue-500/10", text: "text-blue-400" },
    { name: "Unstoppable", rarity: "Epic", color: "border-purple-500/50 bg-purple-500/10", text: "text-purple-400" },
    { name: "Legendary", rarity: "Legendary", color: "border-gaming-orange/50 bg-gaming-orange/10", text: "text-gaming-orange" },
    { name: "Champion", rarity: "Mythic", color: "border-gaming-red/50 bg-gaming-red/10", text: "text-gaming-red" },
    { name: "??????????", rarity: "Secret", color: "border-slate-700 bg-slate-900", text: "text-slate-700" },
  ].map((badge) => (
    <div key={badge.name} className={\`rounded-lg border \${badge.color} p-4 text-center\`}>
      <div className={\`mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-current text-xl \${badge.text}\`}>
        \u2605
      </div>
      <p className="mt-2 text-xs font-bold text-white">{badge.name}</p>
      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{badge.rarity}</p>
    </div>
  ))}
</div>`}
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "First Blood", rarity: "Common", color: "border-slate-600 bg-slate-800", text: "text-slate-400" },
              { name: "Sharpshooter", rarity: "Rare", color: "border-blue-500/50 bg-blue-500/10", text: "text-blue-400" },
              { name: "Unstoppable", rarity: "Epic", color: "border-purple-500/50 bg-purple-500/10", text: "text-purple-400" },
              { name: "Legendary", rarity: "Legendary", color: "border-gaming-orange/50 bg-gaming-orange/10", text: "text-gaming-orange" },
              { name: "Champion", rarity: "Mythic", color: "border-gaming-red/50 bg-gaming-red/10", text: "text-gaming-red" },
              { name: "??????????", rarity: "Secret", color: "border-slate-700 bg-slate-900", text: "text-slate-700" },
            ].map((badge) => (
              <div key={badge.name} className={`rounded-lg border ${badge.color} p-4 text-center`}>
                <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-current text-xl ${badge.text}`}>
                  &#9733;
                </div>
                <p className="mt-2 text-xs font-bold text-white">{badge.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{badge.rarity}</p>
              </div>
            ))}
          </div>
        </CodePreview>

        {/* 8. Health & Mana Bars */}
        <CodePreview
          title="Health & Mana Bars"
          description="HP, Mana, and XP resource bars with gradient fills and percentage labels"
          dark={true}
          code={`<div className="space-y-4 font-mono">
  {/* HP Bar */}
  <div>
    <div className="mb-1 flex items-center justify-between">
      <span className="text-[10px] uppercase tracking-widest text-gaming-red">HP</span>
      <span className="text-xs font-bold text-gaming-red">72%</span>
    </div>
    <div className="h-3 overflow-hidden rounded-full bg-slate-800">
      <div className="h-full rounded-full bg-gradient-to-r from-gaming-red to-red-400" style={{ width: "72%" }} />
    </div>
  </div>
  {/* Mana Bar */}
  <div>
    <div className="mb-1 flex items-center justify-between">
      <span className="text-[10px] uppercase tracking-widest text-blue-400">MANA</span>
      <span className="text-xs font-bold text-blue-400">45%</span>
    </div>
    <div className="h-3 overflow-hidden rounded-full bg-slate-800">
      <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: "45%" }} />
    </div>
  </div>
  {/* XP Bar */}
  <div>
    <div className="mb-1 flex items-center justify-between">
      <span className="text-[10px] uppercase tracking-widest text-yellow-400">XP</span>
      <span className="text-xs font-bold text-yellow-400">88%</span>
    </div>
    <div className="h-3 overflow-hidden rounded-full bg-slate-800">
      <div className="h-full rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400" style={{ width: "88%" }} />
    </div>
  </div>
</div>`}
        >
          <div className="space-y-4 font-mono">
            {/* HP Bar */}
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gaming-red">HP</span>
                <span className="text-xs font-bold text-gaming-red">72%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-gaming-red to-red-400" style={{ width: "72%" }} />
              </div>
            </div>
            {/* Mana Bar */}
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-blue-400">MANA</span>
                <span className="text-xs font-bold text-blue-400">45%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: "45%" }} />
              </div>
            </div>
            {/* XP Bar */}
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-yellow-400">XP</span>
                <span className="text-xs font-bold text-yellow-400">88%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-yellow-600 to-yellow-400" style={{ width: "88%" }} />
              </div>
            </div>
          </div>
        </CodePreview>
      </div>
    </div>
  );
}
