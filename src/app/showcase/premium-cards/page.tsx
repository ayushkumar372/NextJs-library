export default function PremiumCardsShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">Premium Cards</h1>
          <p className="mt-3 text-slate-400">Testimonial, product, dashboard, interactive, and showcase cards.</p>
        </div>

        {/* Testimonial Cards */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Testimonial Cards</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { name: "Sarah Chen", role: "CEO at TechStart", text: "ReactUI completely transformed our development workflow. We ship features 3x faster now.", stars: 5, gradient: "from-violet-500 to-purple-600" },
              { name: "James Wilson", role: "Lead Developer", text: "The component quality is insane. Accessibility built in, beautiful defaults, and easy to customize.", stars: 5, gradient: "from-cyan-500 to-blue-600" },
              { name: "Maya Patel", role: "Design Lead", text: "As a designer, I love that the components match my Figma designs perfectly. No more pixel pushing.", stars: 5, gradient: "from-pink-500 to-rose-600" },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="text-yellow-400">{"★".repeat(t.stars)}</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-white`}>
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Product Cards */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Product Cards</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Pro Headphones", price: "$299", tag: "New", gradient: "from-violet-600 to-indigo-600" },
              { name: "Smart Watch", price: "$199", tag: "Sale", gradient: "from-emerald-600 to-teal-600" },
              { name: "Gaming Mouse", price: "$79", tag: "Hot", gradient: "from-rose-600 to-pink-600" },
              { name: "Webcam 4K", price: "$149", tag: null, gradient: "from-amber-600 to-orange-600" },
            ].map((p) => (
              <div key={p.name} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all hover:border-slate-700 hover:shadow-xl">
                <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${p.gradient}`}>
                  {p.tag && <span className="absolute left-3 top-3 rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white backdrop-blur">{p.tag}</span>}
                  <div className="h-24 w-24 rounded-xl bg-white/10 backdrop-blur" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{p.name}</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xl font-bold text-white">{p.price}</span>
                    <button className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard Stat Cards */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Dashboard Stats</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Revenue", value: "$45.2K", change: "+20.1%", up: true, icon: "$", gradient: "from-violet-500 to-purple-600" },
              { label: "Users", value: "2,350", change: "+12.5%", up: true, icon: "U", gradient: "from-cyan-500 to-blue-600" },
              { label: "Orders", value: "1,247", change: "+8.2%", up: true, icon: "O", gradient: "from-emerald-500 to-teal-600" },
              { label: "Bounce", value: "24.5%", change: "-3.1%", up: false, icon: "B", gradient: "from-rose-500 to-pink-600" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-500">{stat.label}</p>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${stat.gradient} text-xs font-bold text-white`}>{stat.icon}</div>
                </div>
                <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                <p className={`mt-1 text-sm font-medium ${stat.up ? "text-emerald-400" : "text-rose-400"}`}>{stat.change} from last month</p>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Cards with Gradient Icons */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Feature Cards</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Lightning Fast", desc: "Sub-millisecond render times with optimized virtual DOM diffing.", gradient: "from-amber-500 to-orange-600" },
              { title: "Type Safe", desc: "Full TypeScript coverage with auto-complete and compile-time checks.", gradient: "from-blue-500 to-indigo-600" },
              { title: "Accessible", desc: "WAI-ARIA compliant with keyboard navigation and screen reader support.", gradient: "from-emerald-500 to-green-600" },
              { title: "Themeable", desc: "CSS variables, dark mode, and custom design tokens out of the box.", gradient: "from-purple-500 to-violet-600" },
              { title: "Responsive", desc: "Mobile-first design that works beautifully on every screen size.", gradient: "from-pink-500 to-rose-600" },
              { title: "Tree Shakeable", desc: "Import only what you use. Zero dead code in your bundle.", gradient: "from-cyan-500 to-teal-600" },
            ].map((f) => (
              <div key={f.title} className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700 hover:shadow-lg">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} text-lg font-bold text-white shadow-lg`}>
                  {f.title[0]}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Gradient Pricing</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { name: "Hobby", price: "Free", features: ["5 components", "Basic docs", "Community"], gradient: "from-slate-600 to-slate-700", btn: "bg-slate-700 hover:bg-slate-600" },
              { name: "Pro", price: "$49", features: ["All components", "Priority support", "Figma", "Updates", "Team access"], gradient: "from-violet-500 to-fuchsia-600", btn: "bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700", popular: true },
              { name: "Enterprise", price: "$199", features: ["Everything in Pro", "Custom builds", "SLA", "Dedicated manager", "Source code"], gradient: "from-amber-500 to-orange-600", btn: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" },
            ].map((plan) => (
              <div key={plan.name} className={`relative rounded-2xl p-[2px] ${plan.popular ? `bg-gradient-to-br ${plan.gradient}` : "bg-slate-800"}`}>
                <div className="h-full rounded-[14px] bg-slate-950 p-6">
                  {plan.popular && <span className={`mb-3 inline-block rounded-full bg-gradient-to-r ${plan.gradient} px-3 py-0.5 text-xs font-bold text-white`}>MOST POPULAR</span>}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2"><span className="text-4xl font-extrabold text-white">{plan.price}</span>{plan.price !== "Free" && <span className="text-slate-500">/mo</span>}</p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="text-emerald-400">&#10003;</span>{f}
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-6 w-full rounded-xl py-2.5 font-semibold text-white transition ${plan.btn}`}>
                    {plan.price === "Free" ? "Get Started" : "Subscribe"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Profile Cards */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Profile Cards</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { name: "Alex Rivera", role: "Full Stack Dev", gradient: "from-violet-500 to-purple-600", followers: "12.4K", projects: 47 },
              { name: "Kim Soo-yeon", role: "UI Designer", gradient: "from-pink-500 to-rose-600", followers: "8.9K", projects: 32 },
              { name: "Raj Patel", role: "DevOps Lead", gradient: "from-cyan-500 to-blue-600", followers: "5.2K", projects: 28 },
            ].map((p) => (
              <div key={p.name} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                <div className={`h-20 bg-gradient-to-r ${p.gradient}`} />
                <div className="px-6 pb-6">
                  <div className={`-mt-8 flex h-16 w-16 items-center justify-center rounded-xl border-4 border-slate-900 bg-gradient-to-br ${p.gradient} text-lg font-bold text-white`}>
                    {p.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white">{p.name}</h3>
                  <p className="text-sm text-slate-500">{p.role}</p>
                  <div className="mt-3 flex gap-6 text-sm">
                    <span className="text-slate-400"><strong className="text-white">{p.followers}</strong> followers</span>
                    <span className="text-slate-400"><strong className="text-white">{p.projects}</strong> projects</span>
                  </div>
                  <button className="mt-4 w-full rounded-lg bg-slate-800 py-2 text-sm font-medium text-white transition hover:bg-slate-700">Follow</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
