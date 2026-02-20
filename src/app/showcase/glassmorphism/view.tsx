import CodePreview from "@/components/CodePreview";
import ProLock from "@/components/ProLock";

export default function GlassmorphismShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Floating blurred circle decorations */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 animate-[float_6s_ease-in-out_infinite] rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -right-20 top-60 h-96 w-96 animate-[float_8s_ease-in-out_infinite_2s] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-80 w-80 animate-[float_7s_ease-in-out_infinite_1s] rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-64 w-64 animate-[float_9s_ease-in-out_infinite_3s] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 animate-[float_10s_ease-in-out_infinite_4s] rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-center text-5xl font-extrabold text-white">
          Glassmorphism
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-lg text-white/60">
          Frosted glass UI with blur, transparency, and light borders.
        </p>

        <div className="mt-16 space-y-12">
          {/* ======================== 1. Glass Card - Basic ======================== */}
          <CodePreview
            title="Glass Card - Basic"
            description="Frosted glass cards using the .glass utility class with icon, title, and description."
            dark={true}
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
  {/* Card 1 */}
  <div className="glass rounded-2xl p-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl">
      &#9830;
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">
      Analytics Dashboard
    </h3>
    <p className="mt-2 text-sm text-white/60">
      Real-time analytics with interactive charts and metrics visualization.
    </p>
    <div className="mt-4 flex items-center gap-2">
      <span className="rounded-full bg-green-400/20 px-2 py-0.5 text-xs text-green-300">
        Live
      </span>
      <span className="text-xs text-white/40">Updated 2 min ago</span>
    </div>
  </div>

  {/* Card 2 */}
  <div className="glass rounded-2xl p-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl">
      &#9889;
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">
      Performance Monitor
    </h3>
    <p className="mt-2 text-sm text-white/60">
      Track server health, response times, and throughput in real time.
    </p>
    <div className="mt-4 flex items-center gap-2">
      <span className="rounded-full bg-yellow-400/20 px-2 py-0.5 text-xs text-yellow-300">
        Monitoring
      </span>
      <span className="text-xs text-white/40">5 alerts today</span>
    </div>
  </div>

  {/* Card 3 */}
  <div className="glass rounded-2xl p-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl">
      &#9733;
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">
      Integrations Hub
    </h3>
    <p className="mt-2 text-sm text-white/60">
      Connect with 50+ services including Slack, GitHub, and Figma.
    </p>
    <div className="mt-4 flex items-center gap-2">
      <span className="rounded-full bg-blue-400/20 px-2 py-0.5 text-xs text-blue-300">
        12 Active
      </span>
      <span className="text-xs text-white/40">3 pending</span>
    </div>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="glass rounded-2xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl">
                  &#9830;
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Analytics Dashboard</h3>
                <p className="mt-2 text-sm text-white/60">Real-time analytics with interactive charts and metrics visualization.</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-green-400/20 px-2 py-0.5 text-xs text-green-300">Live</span>
                  <span className="text-xs text-white/40">Updated 2 min ago</span>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl">
                  &#9889;
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Performance Monitor</h3>
                <p className="mt-2 text-sm text-white/60">Track server health, response times, and throughput in real time.</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-yellow-400/20 px-2 py-0.5 text-xs text-yellow-300">Monitoring</span>
                  <span className="text-xs text-white/40">5 alerts today</span>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-2xl">
                  &#9733;
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Integrations Hub</h3>
                <p className="mt-2 text-sm text-white/60">Connect with 50+ services including Slack, GitHub, and Figma.</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-blue-400/20 px-2 py-0.5 text-xs text-blue-300">12 Active</span>
                  <span className="text-xs text-white/40">3 pending</span>
                </div>
              </div>
            </div>
          </CodePreview>

          {/* ======================== 2. Glass Card - Colored Tint ======================== */}
          <CodePreview
            title="Glass Card - Colored Tint"
            description="Glass cards with colored background tints using the .glass-colored class and custom bg overlays."
            dark={true}
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
  {/* Pink Tint */}
  <div className="glass-colored rounded-2xl bg-pink-500/10 p-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-400/20 text-2xl text-pink-300">
      &#9829;
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">Design System</h3>
    <p className="mt-2 text-sm text-white/60">
      Build consistent interfaces with tokens, patterns, and reusable components.
    </p>
    <button className="mt-4 rounded-lg bg-pink-500/20 px-4 py-2 text-sm font-medium text-pink-200 transition hover:bg-pink-500/30">
      Explore
    </button>
  </div>

  {/* Blue Tint */}
  <div className="glass-colored rounded-2xl bg-blue-500/10 p-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/20 text-2xl text-blue-300">
      &#9881;
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">API Gateway</h3>
    <p className="mt-2 text-sm text-white/60">
      Centralized API management with rate limiting, auth, and monitoring.
    </p>
    <button className="mt-4 rounded-lg bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-500/30">
      Configure
    </button>
  </div>

  {/* Green Tint */}
  <div className="glass-colored rounded-2xl bg-green-500/10 p-6">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/20 text-2xl text-green-300">
      &#10003;
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">CI/CD Pipeline</h3>
    <p className="mt-2 text-sm text-white/60">
      Automated builds, tests, and deploys with zero-downtime rollouts.
    </p>
    <button className="mt-4 rounded-lg bg-green-500/20 px-4 py-2 text-sm font-medium text-green-200 transition hover:bg-green-500/30">
      View Status
    </button>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="glass-colored rounded-2xl bg-pink-500/10 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-400/20 text-2xl text-pink-300">
                  &#9829;
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Design System</h3>
                <p className="mt-2 text-sm text-white/60">Build consistent interfaces with tokens, patterns, and reusable components.</p>
                <button className="mt-4 rounded-lg bg-pink-500/20 px-4 py-2 text-sm font-medium text-pink-200 transition hover:bg-pink-500/30">
                  Explore
                </button>
              </div>

              <div className="glass-colored rounded-2xl bg-blue-500/10 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/20 text-2xl text-blue-300">
                  &#9881;
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">API Gateway</h3>
                <p className="mt-2 text-sm text-white/60">Centralized API management with rate limiting, auth, and monitoring.</p>
                <button className="mt-4 rounded-lg bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-500/30">
                  Configure
                </button>
              </div>

              <div className="glass-colored rounded-2xl bg-green-500/10 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/20 text-2xl text-green-300">
                  &#10003;
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">CI/CD Pipeline</h3>
                <p className="mt-2 text-sm text-white/60">Automated builds, tests, and deploys with zero-downtime rollouts.</p>
                <button className="mt-4 rounded-lg bg-green-500/20 px-4 py-2 text-sm font-medium text-green-200 transition hover:bg-green-500/30">
                  View Status
                </button>
              </div>
            </div>
          </CodePreview>

          {/* ======================== 3. Glass Profile Card ======================== */}
          <CodePreview
            title="Glass Profile Card"
            description="A frosted glass profile card with avatar, name, role, stats grid, and follow button."
            dark={true}
            code={`<div className="mx-auto max-w-sm">
  <div className="glass rounded-2xl p-6 text-center">
    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-2xl font-bold text-white">
      JD
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">Jane Doe</h3>
    <p className="text-sm text-white/50">Senior UI Designer</p>
    <div className="mt-4 grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
      <div>
        <p className="text-lg font-bold text-white">2.4K</p>
        <p className="text-xs text-white/50">Followers</p>
      </div>
      <div>
        <p className="text-lg font-bold text-white">180</p>
        <p className="text-xs text-white/50">Projects</p>
      </div>
      <div>
        <p className="text-lg font-bold text-white">4.9</p>
        <p className="text-xs text-white/50">Rating</p>
      </div>
    </div>
    <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 py-2.5 text-sm font-semibold text-white transition hover:from-pink-600 hover:to-purple-600">
      Follow
    </button>
  </div>
</div>`}
          >
            <div className="mx-auto max-w-sm">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-2xl font-bold text-white">
                  JD
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">Jane Doe</h3>
                <p className="text-sm text-white/50">Senior UI Designer</p>
                <div className="mt-4 grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-lg font-bold text-white">2.4K</p>
                    <p className="text-xs text-white/50">Followers</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">180</p>
                    <p className="text-xs text-white/50">Projects</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">4.9</p>
                    <p className="text-xs text-white/50">Rating</p>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 py-2.5 text-sm font-semibold text-white transition hover:from-pink-600 hover:to-purple-600">
                  Follow
                </button>
              </div>
            </div>
          </CodePreview>

          {/* ======================== 4. Glass Pricing Cards ======================== */}
          <CodePreview
            title="Glass Pricing Cards"
            description="Three pricing tiers with glass effect. The Pro tier is highlighted with the .glass-colored class and a gradient badge."
            dark={true}
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
  {/* Free */}
  <div className="glass rounded-2xl p-6">
    <h3 className="text-xl font-bold text-white">Free</h3>
    <p className="mt-2">
      <span className="text-4xl font-extrabold text-white">$0</span>
      <span className="text-white/50">/mo</span>
    </p>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center gap-2 text-sm text-white/70">
        <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        5 components
      </li>
      <li className="flex items-center gap-2 text-sm text-white/70">
        <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Basic support
      </li>
      <li className="flex items-center gap-2 text-sm text-white/70">
        <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Community access
      </li>
    </ul>
    <button className="mt-6 w-full rounded-xl bg-white/10 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20">
      Get Started
    </button>
  </div>

  {/* Pro (highlighted) */}
  <div className="glass-colored relative rounded-2xl p-6">
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1 text-xs font-bold text-white">
      POPULAR
    </div>
    <h3 className="text-xl font-bold text-white">Pro</h3>
    <p className="mt-2">
      <span className="text-4xl font-extrabold text-white">$29</span>
      <span className="text-white/50">/mo</span>
    </p>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center gap-2 text-sm text-white/70">...</li>
    </ul>
    <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 py-2.5 text-sm font-semibold text-white transition hover:from-pink-600 hover:to-purple-600">
      Get Started
    </button>
  </div>

  {/* Team */}
  <div className="glass rounded-2xl p-6">
    <h3 className="text-xl font-bold text-white">Team</h3>
    <p className="mt-2">
      <span className="text-4xl font-extrabold text-white">$79</span>
      <span className="text-white/50">/mo</span>
    </p>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center gap-2 text-sm text-white/70">...</li>
    </ul>
    <button className="mt-6 w-full rounded-xl bg-white/10 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20">
      Get Started
    </button>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { name: "Free", price: "$0", features: ["5 components", "Basic support", "Community access"] },
                { name: "Pro", price: "$29", features: ["All components", "Priority support", "Figma files", "1 year updates"], popular: true },
                { name: "Team", price: "$79", features: ["Everything in Pro", "Team license", "Custom themes", "Dedicated support", "SLA guarantee"] },
              ].map((plan) => (
                <div key={plan.name} className={`relative rounded-2xl p-6 ${plan.popular ? "glass-colored" : "glass"}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-1 text-xs font-bold text-white">
                      POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-white/50">/mo</span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                        <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-6 w-full rounded-xl py-2.5 text-sm font-semibold transition ${plan.popular ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600" : "bg-white/10 text-white hover:bg-white/20"}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </CodePreview>

          {/* ======================== 5. Glass Form - Contact ======================== */}
          <CodePreview
            title="Glass Form - Contact"
            description="A contact form with frosted glass inputs, two-column name fields, email, message textarea, and gradient submit button."
            dark={true}
            code={`<div className="mx-auto max-w-lg glass rounded-2xl p-8">
  <h3 className="text-xl font-bold text-white">Contact Us</h3>
  <p className="mt-1 text-sm text-white/50">
    Send us a message and we'll respond within 24 hours.
  </p>
  <form className="mt-6 space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="First name"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10"
      />
      <input
        type="text"
        placeholder="Last name"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10"
      />
    </div>
    <input
      type="email"
      placeholder="Email address"
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10"
    />
    <textarea
      rows={4}
      placeholder="Your message..."
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10"
    />
    <button
      type="submit"
      className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 text-sm font-semibold text-white transition hover:from-pink-600 hover:to-purple-600"
    >
      Send Message
    </button>
  </form>
</div>`}
          >
            <div className="mx-auto max-w-lg glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white">Contact Us</h3>
              <p className="mt-1 text-sm text-white/50">Send us a message and we&apos;ll respond within 24 hours.</p>
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10" />
                  <input type="text" placeholder="Last name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10" />
                </div>
                <input type="email" placeholder="Email address" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10" />
                <textarea rows={4} placeholder="Your message..." className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10" />
                <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 py-3 text-sm font-semibold text-white transition hover:from-pink-600 hover:to-purple-600">
                  Send Message
                </button>
              </form>
            </div>
          </CodePreview>

          {/* ======================== 6. Glass Navigation Bar ======================== */}
          <CodePreview
            title="Glass Navigation Bar"
            description="A frosted glass navbar with logo, navigation links (with active state), and a sign-in button."
            dark={true}
            code={`<div className="glass rounded-2xl px-6 py-3">
  <div className="flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 text-sm font-bold text-white">
        G
      </div>
      <span className="font-bold text-white">GlassUI</span>
    </div>

    {/* Links */}
    <div className="flex gap-1">
      <button className="rounded-lg bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
        Home
      </button>
      <button className="rounded-lg px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white">
        Products
      </button>
      <button className="rounded-lg px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white">
        About
      </button>
      <button className="rounded-lg px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white">
        Contact
      </button>
    </div>

    {/* Sign In */}
    <button className="rounded-lg bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20">
      Sign In
    </button>
  </div>
</div>`}
          >
            <div className="glass rounded-2xl px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 text-sm font-bold text-white">G</div>
                  <span className="font-bold text-white">GlassUI</span>
                </div>
                <div className="flex gap-1">
                  {["Home", "Products", "About", "Contact"].map((item, i) => (
                    <button key={item} className={`rounded-lg px-4 py-1.5 text-sm font-medium transition ${i === 0 ? "bg-white/10 text-white" : "text-white/60 hover:text-white"}`}>
                      {item}
                    </button>
                  ))}
                </div>
                <button className="rounded-lg bg-white/10 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20">
                  Sign In
                </button>
              </div>
            </div>
          </CodePreview>

          {/* ======================== 7. Glass Stats ======================== */}
          <CodePreview
            title="Glass Stats"
            description="Four stat cards showing key metrics with icons, values, and labels in a responsive grid."
            dark={true}
            code={`<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
  <div className="glass rounded-xl p-5 text-center">
    <div className="text-2xl">&#9679;</div>
    <p className="mt-2 text-2xl font-bold text-white">24.5K</p>
    <p className="text-sm text-white/50">Active Users</p>
  </div>
  <div className="glass rounded-xl p-5 text-center">
    <div className="text-2xl">&#9650;</div>
    <p className="mt-2 text-2xl font-bold text-white">$128K</p>
    <p className="text-sm text-white/50">Revenue</p>
  </div>
  <div className="glass rounded-xl p-5 text-center">
    <div className="text-2xl">&#9889;</div>
    <p className="mt-2 text-2xl font-bold text-white">99.99%</p>
    <p className="text-sm text-white/50">Uptime</p>
  </div>
  <div className="glass rounded-xl p-5 text-center">
    <div className="text-2xl">&#9201;</div>
    <p className="mt-2 text-2xl font-bold text-white">12ms</p>
    <p className="text-sm text-white/50">Response Time</p>
  </div>
</div>`}
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Active Users", value: "24.5K", icon: "\u25CF" },
                { label: "Revenue", value: "$128K", icon: "\u25B2" },
                { label: "Uptime", value: "99.99%", icon: "\u26A1" },
                { label: "Response Time", value: "12ms", icon: "\u23F1" },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-5 text-center">
                  <div className="text-2xl">{stat.icon}</div>
                  <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </CodePreview>

          {/* ======================== 8. Glass Notifications ======================== */}
          <CodePreview
            title="Glass Notifications"
            description="Three notification items (success, info, warning) with colored icon circles and glass backgrounds."
            dark={true}
            code={`<div className="mx-auto max-w-md space-y-3">
  {/* Success */}
  <div className="glass flex items-start gap-3 rounded-xl p-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-400/20 text-green-300">
      &#10003;
    </div>
    <div>
      <p className="text-sm font-semibold text-white">Payment Successful</p>
      <p className="text-xs text-white/50">
        Your payment of $29.00 was processed successfully.
      </p>
    </div>
  </div>

  {/* Info */}
  <div className="glass flex items-start gap-3 rounded-xl p-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-400/20 text-blue-300">
      &#9881;
    </div>
    <div>
      <p className="text-sm font-semibold text-white">System Update</p>
      <p className="text-xs text-white/50">
        v2.5 is now available. New glass components added.
      </p>
    </div>
  </div>

  {/* Warning */}
  <div className="glass flex items-start gap-3 rounded-xl p-4">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300">
      &#9888;
    </div>
    <div>
      <p className="text-sm font-semibold text-white">Storage Almost Full</p>
      <p className="text-xs text-white/50">
        You have used 90% of your storage quota. Consider upgrading.
      </p>
    </div>
  </div>
</div>`}
          >
            <div className="mx-auto max-w-md space-y-3">
              <div className="glass flex items-start gap-3 rounded-xl p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-400/20 text-green-300">&#10003;</div>
                <div>
                  <p className="text-sm font-semibold text-white">Payment Successful</p>
                  <p className="text-xs text-white/50">Your payment of $29.00 was processed successfully.</p>
                </div>
              </div>
              <div className="glass flex items-start gap-3 rounded-xl p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-400/20 text-blue-300">&#9881;</div>
                <div>
                  <p className="text-sm font-semibold text-white">System Update</p>
                  <p className="text-xs text-white/50">v2.5 is now available. New glass components added.</p>
                </div>
              </div>
              <div className="glass flex items-start gap-3 rounded-xl p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-yellow-300">&#9888;</div>
                <div>
                  <p className="text-sm font-semibold text-white">Storage Almost Full</p>
                  <p className="text-xs text-white/50">You have used 90% of your storage quota. Consider upgrading.</p>
                </div>
              </div>
            </div>
          </CodePreview>

          {/* ======================== 9. Glass Buttons ======================== */}
          <CodePreview
            title="Glass Buttons"
            description="Various glass button styles including default, pill-shaped, and colored tint variants."
            dark={true}
            code={`<div className="flex flex-wrap items-center gap-4">
  {/* Default Glass */}
  <button className="glass rounded-lg px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/20">
    Default
  </button>

  {/* Pill Glass */}
  <button className="glass rounded-full px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/20">
    Pill Shape
  </button>

  {/* Pink Tint */}
  <button className="glass-colored rounded-lg bg-pink-500/10 px-5 py-2.5 text-sm font-medium text-pink-200 transition hover:bg-pink-500/20">
    Pink Tint
  </button>

  {/* Blue Tint */}
  <button className="glass-colored rounded-lg bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-200 transition hover:bg-blue-500/20">
    Blue Tint
  </button>

  {/* Green Tint */}
  <button className="glass-colored rounded-lg bg-green-500/10 px-5 py-2.5 text-sm font-medium text-green-200 transition hover:bg-green-500/20">
    Green Tint
  </button>

  {/* Icon + Text */}
  <button className="glass flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/20">
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
    Add Item
  </button>

  {/* Outline Pill */}
  <button className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/70 transition hover:border-white/40 hover:text-white">
    Outline Pill
  </button>

  {/* Gradient Glass */}
  <button className="glass rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-5 py-2.5 text-sm font-medium text-white transition hover:from-pink-500/30 hover:to-purple-500/30">
    Gradient
  </button>

  {/* Large */}
  <button className="glass rounded-xl px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/20">
    Large Button
  </button>
</div>`}
          >
            <div className="flex flex-wrap items-center gap-4">
              <button className="glass rounded-lg px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/20">
                Default
              </button>
              <button className="glass rounded-full px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/20">
                Pill Shape
              </button>
              <button className="glass-colored rounded-lg bg-pink-500/10 px-5 py-2.5 text-sm font-medium text-pink-200 transition hover:bg-pink-500/20">
                Pink Tint
              </button>
              <button className="glass-colored rounded-lg bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-200 transition hover:bg-blue-500/20">
                Blue Tint
              </button>
              <button className="glass-colored rounded-lg bg-green-500/10 px-5 py-2.5 text-sm font-medium text-green-200 transition hover:bg-green-500/20">
                Green Tint
              </button>
              <button className="glass flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/20">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Item
              </button>
              <button className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/70 transition hover:border-white/40 hover:text-white">
                Outline Pill
              </button>
              <button className="glass rounded-lg bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-5 py-2.5 text-sm font-medium text-white transition hover:from-pink-500/30 hover:to-purple-500/30">
                Gradient
              </button>
              <button className="glass rounded-xl px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/20">
                Large Button
              </button>
            </div>
          </CodePreview>

          {/* ======================== 10. Glass Alert Banners ======================== */}
          <CodePreview
            title="Glass Alert Banners"
            description="Info and warning alert banners with glass effect, colored left borders, icons, and dismiss styling."
            dark={true}
            code={`<div className="space-y-4">
  {/* Info Banner */}
  <div className="glass flex items-start gap-3 rounded-xl border-l-4 border-l-blue-400 p-4">
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-400/20 text-sm text-blue-300">
      i
    </div>
    <div className="flex-1">
      <p className="text-sm font-semibold text-white">New Feature Available</p>
      <p className="mt-1 text-xs text-white/50">
        Dark mode support has been added to all glass components. Update your
        theme settings to try it out.
      </p>
    </div>
    <button className="shrink-0 text-white/30 transition hover:text-white/60">
      &#10005;
    </button>
  </div>

  {/* Warning Banner */}
  <div className="glass flex items-start gap-3 rounded-xl border-l-4 border-l-yellow-400 p-4">
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-sm text-yellow-300">
      !
    </div>
    <div className="flex-1">
      <p className="text-sm font-semibold text-white">API Rate Limit Warning</p>
      <p className="mt-1 text-xs text-white/50">
        You have used 85% of your monthly API quota. Consider upgrading your
        plan or optimizing your requests.
      </p>
    </div>
    <button className="shrink-0 text-white/30 transition hover:text-white/60">
      &#10005;
    </button>
  </div>

  {/* Success Banner */}
  <div className="glass flex items-start gap-3 rounded-xl border-l-4 border-l-green-400 p-4">
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400/20 text-sm text-green-300">
      &#10003;
    </div>
    <div className="flex-1">
      <p className="text-sm font-semibold text-white">Deployment Complete</p>
      <p className="mt-1 text-xs text-white/50">
        Your application v2.3.1 has been deployed successfully to production.
        All health checks passed.
      </p>
    </div>
    <button className="shrink-0 text-white/30 transition hover:text-white/60">
      &#10005;
    </button>
  </div>
</div>`}
          >
            <div className="space-y-4">
              <div className="glass flex items-start gap-3 rounded-xl border-l-4 border-l-blue-400 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-400/20 text-sm text-blue-300">i</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">New Feature Available</p>
                  <p className="mt-1 text-xs text-white/50">Dark mode support has been added to all glass components. Update your theme settings to try it out.</p>
                </div>
                <button className="shrink-0 text-white/30 transition hover:text-white/60">&#10005;</button>
              </div>

              <div className="glass flex items-start gap-3 rounded-xl border-l-4 border-l-yellow-400 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-400/20 text-sm text-yellow-300">!</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">API Rate Limit Warning</p>
                  <p className="mt-1 text-xs text-white/50">You have used 85% of your monthly API quota. Consider upgrading your plan or optimizing your requests.</p>
                </div>
                <button className="shrink-0 text-white/30 transition hover:text-white/60">&#10005;</button>
              </div>

              <div className="glass flex items-start gap-3 rounded-xl border-l-4 border-l-green-400 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-400/20 text-sm text-green-300">&#10003;</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-white">Deployment Complete</p>
                  <p className="mt-1 text-xs text-white/50">Your application v2.3.1 has been deployed successfully to production. All health checks passed.</p>
                </div>
                <button className="shrink-0 text-white/30 transition hover:text-white/60">&#10005;</button>
              </div>
            </div>
          </CodePreview>

          {/* PREMIUM: Glass Music Player */}
          <ProLock title="Glass Music Player">
            <CodePreview
              title="Glass Music Player"
              description="Full-featured frosted glass music player with album art, progress bar, and controls."
              dark={true}
              code={`<div className="mx-auto max-w-sm glass rounded-3xl p-6">...</div>`}
            >
              <div className="mx-auto max-w-sm glass rounded-3xl p-6">
                <div className="relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">🎵</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-sm">PLAYING</span>
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white backdrop-blur-sm">HQ</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-bold text-white">Midnight Dreams</h3>
                  <p className="text-sm text-white/50">The Weekend ft. Daft Punk</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-1 w-full rounded-full bg-white/10">
                    <div className="h-1 w-2/3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400" />
                  </div>
                  <div className="flex justify-between text-xs text-white/40"><span>2:14</span><span>3:22</span></div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-8">
                  <button className="text-2xl text-white/40 transition hover:text-white">⏮</button>
                  <button className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-xl text-white shadow-lg shadow-pink-500/30 transition hover:scale-105">▶</button>
                  <button className="text-2xl text-white/40 transition hover:text-white">⏭</button>
                </div>
              </div>
            </CodePreview>
          </ProLock>

          {/* PREMIUM: Glass Banking Dashboard */}
          <ProLock title="Glass Banking Dashboard">
            <CodePreview
              title="Glass Banking Dashboard"
              description="Premium banking UI with balance card, quick actions, and recent transactions."
              dark={true}
              code={`<div>Glass Banking Dashboard Premium</div>`}
            >
              <div className="space-y-4">
                <div className="glass-colored rounded-3xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-white/50">Total Balance</p>
                      <p className="mt-1 text-4xl font-extrabold text-white">₹2,48,350</p>
                      <p className="mt-2 flex items-center gap-1 text-sm text-emerald-400">↑ +₹12,400 this month</p>
                    </div>
                    <div className="glass rounded-2xl p-3 text-2xl">💳</div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button className="flex-1 rounded-xl bg-white/10 py-2 text-sm font-medium text-white transition hover:bg-white/20">↑ Send</button>
                    <button className="flex-1 rounded-xl bg-white/10 py-2 text-sm font-medium text-white transition hover:bg-white/20">↓ Receive</button>
                    <button className="flex-1 rounded-xl bg-white/10 py-2 text-sm font-medium text-white transition hover:bg-white/20">⊕ Add</button>
                  </div>
                </div>
                <div className="glass space-y-3 rounded-2xl p-5">
                  <p className="text-sm font-semibold text-white/70">Recent Transactions</p>
                  {[["🛍", "Amazon Shopping", "-₹3,299", "text-red-300"], ["💰", "Salary Credit", "+₹85,000", "text-emerald-300"], ["☕", "Starbucks", "-₹480", "text-red-300"]].map(([icon, name, amount, color]) => (
                    <div key={name} className="flex items-center gap-3">
                      <div className="glass flex h-10 w-10 items-center justify-center rounded-xl text-lg">{icon}</div>
                      <div className="flex-1"><p className="text-sm font-medium text-white">{name}</p></div>
                      <p className={`text-sm font-semibold ${color}`}>{amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CodePreview>
          </ProLock>

          {/* PREMIUM: Glass Login Portal */}
          <ProLock title="Glass Login Portal">
            <CodePreview
              title="Glass Login Portal"
              description="Split-layout glass login with decorative gradient left panel and frosted form."
              dark={true}
              code={`<div>Glass Login Portal Premium</div>`}
            >
              <div className="grid overflow-hidden rounded-3xl" style={{ gridTemplateColumns: "1fr 1fr" }}>
                <div className="flex flex-col justify-center bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 p-10">
                  <div className="text-4xl font-black text-white">Welcome<br />Back ✦</div>
                  <p className="mt-3 text-sm text-white/60">Sign in to access your premium components</p>
                </div>
                <div className="glass flex flex-col justify-center p-10">
                  <h3 className="text-xl font-bold text-white">Sign In</h3>
                  <div className="mt-6 space-y-4">
                    <input type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none" />
                    <input type="password" placeholder="Password" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none" />
                    <button className="w-full rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 py-3 text-sm font-semibold text-white transition hover:opacity-90">Sign In</button>
                  </div>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </div>
      </div>
    </div>
  );
}
