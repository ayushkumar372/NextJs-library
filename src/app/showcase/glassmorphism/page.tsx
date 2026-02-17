export default function GlassmorphismShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Floating background shapes */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-20 top-20 h-72 w-72 animate-[float_6s_ease-in-out_infinite] rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -right-20 top-60 h-96 w-96 animate-[float_8s_ease-in-out_infinite_2s] rounded-full bg-purple-500/30 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-80 w-80 animate-[float_7s_ease-in-out_infinite_1s] rounded-full bg-pink-500/30 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-64 w-64 animate-[float_9s_ease-in-out_infinite_3s] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-center text-5xl font-extrabold text-white">
          Glassmorphism
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-lg text-white/60">
          Frosted glass UI with blur, transparency, and light borders.
        </p>

        {/* Glass Cards Row */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Glass Cards</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 - Basic Glass */}
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

            {/* Card 2 - Colored Glass */}
            <div className="glass-colored rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-400/20 text-2xl">
                &#9733;
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Premium Features</h3>
              <p className="mt-2 text-sm text-white/60">Unlock advanced tools, priority support, and exclusive components.</p>
              <button className="mt-4 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20">
                Upgrade Now
              </button>
            </div>

            {/* Card 3 - Profile Glass */}
            <div className="glass rounded-2xl p-6 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-2xl font-bold text-white">
                JD
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">Jane Doe</h3>
              <p className="text-sm text-white/50">Senior UI Designer</p>
              <div className="mt-3 flex justify-center gap-4 text-sm">
                <span className="text-white/70"><strong className="text-white">2.4K</strong> followers</span>
                <span className="text-white/70"><strong className="text-white">180</strong> projects</span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-white/10 py-2 text-sm font-medium text-white transition hover:bg-white/20">
                Follow
              </button>
            </div>
          </div>
        </section>

        {/* Glass Pricing */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Glass Pricing</h2>
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
                <p className="mt-2"><span className="text-4xl font-extrabold text-white">{plan.price}</span><span className="text-white/50">/mo</span></p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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
        </section>

        {/* Glass Form */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Glass Form</h2>
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
        </section>

        {/* Glass Nav */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Glass Navigation</h2>
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
        </section>

        {/* Glass Stats */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Glass Stats</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Active Users", value: "24.5K", icon: "&#9679;" },
              { label: "Revenue", value: "$128K", icon: "&#9650;" },
              { label: "Uptime", value: "99.99%", icon: "&#9889;" },
              { label: "Response Time", value: "12ms", icon: "&#9201;" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl p-5 text-center">
                <div className="text-2xl" dangerouslySetInnerHTML={{ __html: stat.icon }} />
                <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Glass Notification */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Glass Notifications</h2>
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
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-400/20 text-pink-300">&#9829;</div>
              <div>
                <p className="text-sm font-semibold text-white">New Follower</p>
                <p className="text-xs text-white/50">Sarah Kim started following you.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
