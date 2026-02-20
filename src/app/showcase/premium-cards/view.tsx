"use client";

import CodePreview from "@/components/CodePreview";
import ProLock from "@/components/ProLock";

export default function PremiumCardsShowcase() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">Premium Cards</h1>
          <p className="mt-3 text-slate-400">
            Testimonial, product, dashboard, interactive, and showcase cards.
          </p>
        </div>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 1. Testimonial Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mt-16">
          <CodePreview
            title="Testimonial Cards"
            description="Customer testimonials with star ratings and gradient avatars"
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
  {[
    { name: "Sarah Chen", role: "CEO at TechStart", text: "ReactUI completely transformed our development workflow. We ship features 3x faster now.", stars: 5, gradient: "from-violet-500 to-purple-600" },
    { name: "James Wilson", role: "Lead Developer", text: "The component quality is insane. Accessibility built in, beautiful defaults, and easy to customize.", stars: 5, gradient: "from-cyan-500 to-blue-600" },
    { name: "Maya Patel", role: "Design Lead", text: "As a designer, I love that the components match my Figma designs perfectly. No more pixel pushing.", stars: 5, gradient: "from-pink-500 to-rose-600" },
  ].map((t) => (
    <div key={t.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="text-yellow-400">{"â˜…".repeat(t.stars)}</div>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">&ldquo;{t.text}&rdquo;</p>
      <div className="mt-4 flex items-center gap-3">
        <div className={\`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br \${t.gradient} text-sm font-bold text-white\`}>
          {t.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-slate-500">{t.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { name: "Sarah Chen", role: "CEO at TechStart", text: "ReactUI completely transformed our development workflow. We ship features 3x faster now.", stars: 5, gradient: "from-violet-500 to-purple-600" },
                { name: "James Wilson", role: "Lead Developer", text: "The component quality is insane. Accessibility built in, beautiful defaults, and easy to customize.", stars: 5, gradient: "from-cyan-500 to-blue-600" },
                { name: "Maya Patel", role: "Design Lead", text: "As a designer, I love that the components match my Figma designs perfectly. No more pixel pushing.", stars: 5, gradient: "from-pink-500 to-rose-600" },
              ].map((t) => (
                <div key={t.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <div className="text-yellow-400">{"â˜…".repeat(t.stars)}</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-white`}>
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 2. Product Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mt-16">
          <CodePreview
            title="Product Cards"
            description="E-commerce product cards with tags, ratings, and add-to-cart"
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {[
    { name: "Pro Headphones", price: "$299", tag: "New", stars: 5, gradient: "from-violet-600 to-indigo-600" },
    { name: "Smart Watch", price: "$199", tag: "Sale", stars: 4, gradient: "from-emerald-600 to-teal-600" },
    { name: "Gaming Mouse", price: "$79", tag: "Hot", stars: 5, gradient: "from-rose-600 to-pink-600" },
    { name: "Webcam 4K", price: "$149", tag: null, stars: 4, gradient: "from-amber-600 to-orange-600" },
  ].map((p) => (
    <div key={p.name} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all hover:border-slate-700 hover:shadow-xl">
      <div className={\`relative flex h-48 items-center justify-center bg-gradient-to-br \${p.gradient}\`}>
        {p.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white backdrop-blur">
            {p.tag}
          </span>
        )}
        <div className="h-24 w-24 rounded-xl bg-white/10 backdrop-blur" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-white">{p.name}</h3>
        <div className="mt-1 text-yellow-400 text-xs">{"â˜…".repeat(p.stars)}{"â˜†".repeat(5 - p.stars)}</div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-white">{p.price}</span>
          <button className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ))}
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Pro Headphones", price: "$299", tag: "New", stars: 5, gradient: "from-violet-600 to-indigo-600" },
                { name: "Smart Watch", price: "$199", tag: "Sale", stars: 4, gradient: "from-emerald-600 to-teal-600" },
                { name: "Gaming Mouse", price: "$79", tag: "Hot", stars: 5, gradient: "from-rose-600 to-pink-600" },
                { name: "Webcam 4K", price: "$149", tag: null, stars: 4, gradient: "from-amber-600 to-orange-600" },
              ].map((p) => (
                <div key={p.name} className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all hover:border-slate-700 hover:shadow-xl">
                  <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${p.gradient}`}>
                    {p.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white backdrop-blur">
                        {p.tag}
                      </span>
                    )}
                    <div className="h-24 w-24 rounded-xl bg-white/10 backdrop-blur" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white">{p.name}</h3>
                    <div className="mt-1 text-xs text-yellow-400">{"â˜…".repeat(p.stars)}{"â˜†".repeat(5 - p.stars)}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xl font-bold text-white">{p.price}</span>
                      <button className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/20">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 3. Dashboard Stat Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mt-16">
          <CodePreview
            title="Dashboard Stat Cards"
            description="KPI cards with gradient icons, values, and trend indicators"
            code={`<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
  {[
    { label: "Revenue", value: "$45.2K", change: "+20.1%", up: true, icon: "$", gradient: "from-violet-500 to-purple-600" },
    { label: "Users", value: "2,350", change: "+12.5%", up: true, icon: "U", gradient: "from-cyan-500 to-blue-600" },
    { label: "Orders", value: "1,247", change: "+8.2%", up: true, icon: "O", gradient: "from-emerald-500 to-teal-600" },
    { label: "Bounce", value: "24.5%", change: "-3.1%", up: false, icon: "B", gradient: "from-rose-500 to-pink-600" },
  ].map((stat) => (
    <div key={stat.label} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{stat.label}</p>
        <div className={\`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br \${stat.gradient} text-xs font-bold text-white\`}>
          {stat.icon}
        </div>
      </div>
      <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
      <p className={\`mt-1 text-sm font-medium \${stat.up ? "text-emerald-400" : "text-rose-400"}\`}>
        {stat.change} <span className="text-slate-500">from last month</span>
      </p>
    </div>
  ))}
</div>`}
          >
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
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${stat.gradient} text-xs font-bold text-white`}>
                      {stat.icon}
                    </div>
                  </div>
                  <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
                  <p className={`mt-1 text-sm font-medium ${stat.up ? "text-emerald-400" : "text-rose-400"}`}>
                    {stat.change} <span className="text-slate-500">from last month</span>
                  </p>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 4. Feature Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mt-16">
          <CodePreview
            title="Feature Cards"
            description="Feature highlights with gradient icon squares in a 3-column grid"
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {[
    { title: "Lightning Fast", desc: "Sub-millisecond render times with optimized virtual DOM diffing.", gradient: "from-amber-500 to-orange-600" },
    { title: "Type Safe", desc: "Full TypeScript coverage with auto-complete and compile-time checks.", gradient: "from-blue-500 to-indigo-600" },
    { title: "Accessible", desc: "WAI-ARIA compliant with keyboard navigation and screen reader support.", gradient: "from-emerald-500 to-green-600" },
    { title: "Themeable", desc: "CSS variables, dark mode, and custom design tokens out of the box.", gradient: "from-purple-500 to-violet-600" },
    { title: "Responsive", desc: "Mobile-first design that works beautifully on every screen size.", gradient: "from-pink-500 to-rose-600" },
    { title: "Tree Shakeable", desc: "Import only what you use. Zero dead code in your bundle.", gradient: "from-cyan-500 to-teal-600" },
  ].map((f) => (
    <div key={f.title} className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700 hover:shadow-lg">
      <div className={\`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br \${f.gradient} text-lg font-bold text-white shadow-lg\`}>
        {f.title[0]}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
      <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
    </div>
  ))}
</div>`}
          >
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
          </CodePreview>
        </section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 5. Gradient Pricing Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mt-16">
          <CodePreview
            title="Gradient Pricing Cards"
            description="Pricing tiers with gradient border trick and feature lists"
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
  {[
    { name: "Hobby", price: "Free", features: ["5 components", "Basic docs", "Community support"], gradient: "from-slate-600 to-slate-700", btn: "bg-slate-700 hover:bg-slate-600" },
    { name: "Pro", price: "$49", features: ["All components", "Priority support", "Figma files", "Lifetime updates", "Team access"], gradient: "from-violet-500 to-fuchsia-600", btn: "bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700", popular: true },
    { name: "Enterprise", price: "$199", features: ["Everything in Pro", "Custom builds", "SLA guarantee", "Dedicated manager", "Source code access"], gradient: "from-amber-500 to-orange-600", btn: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" },
  ].map((plan) => (
    <div key={plan.name} className={\`relative rounded-2xl p-[2px] \${plan.popular ? \`bg-gradient-to-br \${plan.gradient}\` : "bg-slate-800"}\`}>
      <div className="h-full rounded-[14px] bg-slate-950 p-6">
        {plan.popular && (
          <span className={\`mb-3 inline-block rounded-full bg-gradient-to-r \${plan.gradient} px-3 py-0.5 text-xs font-bold text-white\`}>
            MOST POPULAR
          </span>
        )}
        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
        <p className="mt-2">
          <span className="text-4xl font-extrabold text-white">{plan.price}</span>
          {plan.price !== "Free" && <span className="text-slate-500">/mo</span>}
        </p>
        <ul className="mt-4 space-y-2">
          {plan.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
              <span className="text-emerald-400">&#10003;</span>{f}
            </li>
          ))}
        </ul>
        <button className={\`mt-6 w-full rounded-xl py-2.5 font-semibold text-white transition \${plan.btn}\`}>
          {plan.price === "Free" ? "Get Started" : "Subscribe"}
        </button>
      </div>
    </div>
  ))}
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { name: "Hobby", price: "Free", features: ["5 components", "Basic docs", "Community support"], gradient: "from-slate-600 to-slate-700", btn: "bg-slate-700 hover:bg-slate-600" },
                { name: "Pro", price: "$49", features: ["All components", "Priority support", "Figma files", "Lifetime updates", "Team access"], gradient: "from-violet-500 to-fuchsia-600", btn: "bg-gradient-to-r from-violet-500 to-fuchsia-600 hover:from-violet-600 hover:to-fuchsia-700", popular: true },
                { name: "Enterprise", price: "$199", features: ["Everything in Pro", "Custom builds", "SLA guarantee", "Dedicated manager", "Source code access"], gradient: "from-amber-500 to-orange-600", btn: "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700" },
              ].map((plan) => (
                <div key={plan.name} className={`relative rounded-2xl p-[2px] ${plan.popular ? `bg-gradient-to-br ${plan.gradient}` : "bg-slate-800"}`}>
                  <div className="h-full rounded-[14px] bg-slate-950 p-6">
                    {plan.popular && (
                      <span className={`mb-3 inline-block rounded-full bg-gradient-to-r ${plan.gradient} px-3 py-0.5 text-xs font-bold text-white`}>
                        MOST POPULAR
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="mt-2">
                      <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                      {plan.price !== "Free" && <span className="text-slate-500">/mo</span>}
                    </p>
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
          </CodePreview>
        </section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 6. Profile Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mt-16">
          <CodePreview
            title="Profile Cards"
            description="User profile cards with gradient header, avatar, stats, and follow button"
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
  {[
    { name: "Alex Rivera", role: "Full Stack Dev", gradient: "from-violet-500 to-purple-600", followers: "12.4K", projects: 47 },
    { name: "Kim Soo-yeon", role: "UI Designer", gradient: "from-pink-500 to-rose-600", followers: "8.9K", projects: 32 },
    { name: "Raj Patel", role: "DevOps Lead", gradient: "from-cyan-500 to-blue-600", followers: "5.2K", projects: 28 },
  ].map((p) => (
    <div key={p.name} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
      <div className={\`h-20 bg-gradient-to-r \${p.gradient}\`} />
      <div className="px-6 pb-6">
        <div className={\`-mt-8 flex h-16 w-16 items-center justify-center rounded-xl border-4 border-slate-900 bg-gradient-to-br \${p.gradient} text-lg font-bold text-white\`}>
          {p.name.split(" ").map(n => n[0]).join("")}
        </div>
        <h3 className="mt-3 text-lg font-bold text-white">{p.name}</h3>
        <p className="text-sm text-slate-500">{p.role}</p>
        <div className="mt-3 flex gap-6 text-sm">
          <span className="text-slate-400"><strong className="text-white">{p.followers}</strong> followers</span>
          <span className="text-slate-400"><strong className="text-white">{p.projects}</strong> projects</span>
        </div>
        <button className="mt-4 w-full rounded-lg bg-slate-800 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
          Follow
        </button>
      </div>
    </div>
  ))}
</div>`}
          >
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
                      {p.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-white">{p.name}</h3>
                    <p className="text-sm text-slate-500">{p.role}</p>
                    <div className="mt-3 flex gap-6 text-sm">
                      <span className="text-slate-400"><strong className="text-white">{p.followers}</strong> followers</span>
                      <span className="text-slate-400"><strong className="text-white">{p.projects}</strong> projects</span>
                    </div>
                    <button className="mt-4 w-full rounded-lg bg-slate-800 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 7. Blog Post Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mt-16">
          <CodePreview
            title="Blog Post Cards"
            description="Blog cards with gradient category badge, excerpt, and author info"
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
  {[
    { category: "Engineering", gradient: "from-violet-500 to-purple-600", title: "Building Scalable APIs with Edge Functions", excerpt: "Learn how to deploy serverless functions at the edge for sub-50ms response times globally.", author: "Sarah Chen", readTime: "8 min" },
    { category: "Design", gradient: "from-pink-500 to-rose-600", title: "The Future of Design Systems in 2026", excerpt: "How AI-assisted design tools are reshaping the way we build and maintain component libraries.", author: "Maya Patel", readTime: "6 min" },
    { category: "DevOps", gradient: "from-cyan-500 to-blue-600", title: "Zero-Downtime Deployments with Kubernetes", excerpt: "A practical guide to rolling updates, canary releases, and blue-green deployments.", author: "Raj Patel", readTime: "12 min" },
  ].map((post) => (
    <div key={post.title} className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700">
      <span className={\`inline-block rounded-full bg-gradient-to-r \${post.gradient} px-3 py-0.5 text-xs font-bold text-white\`}>
        {post.category}
      </span>
      <h3 className="mt-3 text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span>{post.author}</span>
        <span>{post.readTime} read</span>
      </div>
    </div>
  ))}
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { category: "Engineering", gradient: "from-violet-500 to-purple-600", title: "Building Scalable APIs with Edge Functions", excerpt: "Learn how to deploy serverless functions at the edge for sub-50ms response times globally.", author: "Sarah Chen", readTime: "8 min" },
                { category: "Design", gradient: "from-pink-500 to-rose-600", title: "The Future of Design Systems in 2026", excerpt: "How AI-assisted design tools are reshaping the way we build and maintain component libraries.", author: "Maya Patel", readTime: "6 min" },
                { category: "DevOps", gradient: "from-cyan-500 to-blue-600", title: "Zero-Downtime Deployments with Kubernetes", excerpt: "A practical guide to rolling updates, canary releases, and blue-green deployments.", author: "Raj Patel", readTime: "12 min" },
              ].map((post) => (
                <div key={post.title} className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all hover:border-slate-700">
                  <span className={`inline-block rounded-full bg-gradient-to-r ${post.gradient} px-3 py-0.5 text-xs font-bold text-white`}>
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-white transition-colors group-hover:text-violet-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>{post.author}</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 8. Hover Effect Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mt-16">
          <CodePreview
            title="Hover Effect Cards"
            description="Four cards demonstrating different CSS hover transitions"
            code={`<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {/* Scale Up */}
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-transform duration-300 hover:scale-105">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-lg font-bold text-white shadow-lg">S</div>
    <h3 className="mt-4 text-lg font-semibold text-white">Scale Up</h3>
    <p className="mt-2 text-sm text-slate-400">This card scales up to 105% on hover using transform.</p>
  </div>

  {/* Lift Up */}
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-lg">L</div>
    <h3 className="mt-4 text-lg font-semibold text-white">Lift Up</h3>
    <p className="mt-2 text-sm text-slate-400">This card lifts upward with a colored shadow on hover.</p>
  </div>

  {/* Glow */}
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-lg font-bold text-white shadow-lg">G</div>
    <h3 className="mt-4 text-lg font-semibold text-white">Glow</h3>
    <p className="mt-2 text-sm text-slate-400">This card emits a pink glow effect on hover.</p>
  </div>

  {/* Border Color Shift */}
  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-amber-500/50">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-lg font-bold text-white shadow-lg">B</div>
    <h3 className="mt-4 text-lg font-semibold text-white">Border Shift</h3>
    <p className="mt-2 text-sm text-slate-400">This card shifts its border color to amber on hover.</p>
  </div>
</div>`}
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Scale Up */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-transform duration-300 hover:scale-105">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-lg font-bold text-white shadow-lg">S</div>
                <h3 className="mt-4 text-lg font-semibold text-white">Scale Up</h3>
                <p className="mt-2 text-sm text-slate-400">This card scales up to 105% on hover using transform.</p>
              </div>

              {/* Lift Up */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white shadow-lg">L</div>
                <h3 className="mt-4 text-lg font-semibold text-white">Lift Up</h3>
                <p className="mt-2 text-sm text-slate-400">This card lifts upward with a colored shadow on hover.</p>
              </div>

              {/* Glow */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-lg font-bold text-white shadow-lg">G</div>
                <h3 className="mt-4 text-lg font-semibold text-white">Glow</h3>
                <p className="mt-2 text-sm text-slate-400">This card emits a pink glow effect on hover.</p>
              </div>

              {/* Border Color Shift */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-amber-500/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-lg font-bold text-white shadow-lg">B</div>
                <h3 className="mt-4 text-lg font-semibold text-white">Border Shift</h3>
                <p className="mt-2 text-sm text-slate-400">This card shifts its border color to amber on hover.</p>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 9. Glass Cards on Gradient â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mt-16">
          <CodePreview
            title="Glass Cards on Gradient"
            description="Glassmorphism-style cards on a purple gradient background"
            code={`<div className="rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-8">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
    {[
      { title: "Analytics", desc: "Real-time metrics and insights for your entire platform.", icon: "A" },
      { title: "Automation", desc: "Set up workflows that run on autopilot around the clock.", icon: "W" },
      { title: "Security", desc: "Enterprise-grade protection with end-to-end encryption.", icon: "S" },
    ].map((card) => (
      <div key={card.title} className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-sm font-bold text-white">
          {card.icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
        <p className="mt-2 text-sm text-white/70">{card.desc}</p>
      </div>
    ))}
  </div>
</div>`}
          >
            <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { title: "Analytics", desc: "Real-time metrics and insights for your entire platform.", icon: "A" },
                  { title: "Automation", desc: "Set up workflows that run on autopilot around the clock.", icon: "W" },
                  { title: "Security", desc: "Enterprise-grade protection with end-to-end encryption.", icon: "S" },
                ].map((card) => (
                  <div key={card.title} className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-sm font-bold text-white">
                      {card.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </CodePreview>
        </section>

        {/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ 10. Notification Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <section className="mt-16">
          <CodePreview
            title="Notification Cards"
            description="Success, warning, and error notification cards with colored borders and icons"
            code={`<div className="space-y-4">
  {[
    { type: "Success", title: "Deployment Successful", message: "Your application has been deployed to production. All health checks are passing.", borderColor: "border-l-emerald-500", iconBg: "bg-emerald-500/10 text-emerald-400", icon: "\\u2713" },
    { type: "Warning", title: "High Memory Usage", message: "Server memory usage is at 87%. Consider upgrading your plan or optimizing your application.", borderColor: "border-l-amber-500", iconBg: "bg-amber-500/10 text-amber-400", icon: "!" },
    { type: "Error", title: "Build Failed", message: "The latest build failed due to a type error in src/components/Dashboard.tsx on line 42.", borderColor: "border-l-rose-500", iconBg: "bg-rose-500/10 text-rose-400", icon: "\\u2717" },
  ].map((n) => (
    <div key={n.type} className={\`flex items-start gap-4 rounded-xl border border-slate-800 border-l-4 \${n.borderColor} bg-slate-900 p-5\`}>
      <div className={\`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg \${n.iconBg} text-lg font-bold\`}>
        {n.icon}
      </div>
      <div>
        <h3 className="font-semibold text-white">{n.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{n.message}</p>
      </div>
    </div>
  ))}
</div>`}
          >
            <div className="space-y-4">
              {[
                { type: "Success", title: "Deployment Successful", message: "Your application has been deployed to production. All health checks are passing.", borderColor: "border-l-emerald-500", iconBg: "bg-emerald-500/10 text-emerald-400", icon: "\u2713" },
                { type: "Warning", title: "High Memory Usage", message: "Server memory usage is at 87%. Consider upgrading your plan or optimizing your application.", borderColor: "border-l-amber-500", iconBg: "bg-amber-500/10 text-amber-400", icon: "!" },
                { type: "Error", title: "Build Failed", message: "The latest build failed due to a type error in src/components/Dashboard.tsx on line 42.", borderColor: "border-l-rose-500", iconBg: "bg-rose-500/10 text-rose-400", icon: "\u2717" },
              ].map((n) => (
                <div key={n.type} className={`flex items-start gap-4 rounded-xl border border-slate-800 border-l-4 ${n.borderColor} bg-slate-900 p-5`}>
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${n.iconBg} text-lg font-bold`}>
                    {n.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{n.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{n.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* PREMIUM: SaaS Analytics Dashboard Card */}
        <section className="mt-16">
          <ProLock title="SaaS Analytics Dashboard Card">
            <CodePreview
              title="SaaS Analytics Dashboard Card"
              description="Full-featured analytics dashboard card with sparkline chart, stat metrics, and live indicators."
              dark={true}
              code={`<div>SaaS Analytics Dashboard Card Premium</div>`}
            >
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
                  <div>
                    <h3 className="font-bold text-white">Revenue Analytics</h3>
                    <p className="text-xs text-slate-400">Last 30 days</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Live
                  </div>
                </div>
                <div className="p-6">
                  {/* Main stat */}
                  <div className="flex items-end gap-3">
                    <div className="text-4xl font-black text-white">₹4,28,350</div>
                    <div className="mb-1 flex items-center gap-1 text-sm font-semibold text-emerald-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      +18.4%
                    </div>
                  </div>
                  {/* Mini sparkline */}
                  <div className="mt-4 flex h-16 items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-violet-600 to-violet-400 transition-all hover:from-violet-500 hover:to-violet-300" style={{ height: `${h}%`, opacity: 0.6 + i * 0.03 }} />
                    ))}
                  </div>
                  {/* Sub stats */}
                  <div className="mt-5 grid grid-cols-3 gap-4 border-t border-slate-800 pt-5">
                    {[
                      { label: "Orders", value: "1,284", change: "+12%" },
                      { label: "Avg. Order", value: "₹3,340", change: "+5%" },
                      { label: "Refunds", value: "23", change: "-8%" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="text-xs text-slate-400">{stat.label}</p>
                        <p className="mt-1 text-lg font-bold text-white">{stat.value}</p>
                        <p className={`text-xs ${stat.change.startsWith("+") ? "text-emerald-400" : "text-rose-400"}`}>{stat.change}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* PREMIUM: E-commerce Product Card */}
        <section className="mt-16">
          <ProLock title="E-commerce Product Cards">
            <CodePreview
              title="E-commerce Product Cards"
              description="Premium product cards with hover zoom, wishlist, ratings, and quick add-to-cart."
              dark={true}
              code={`<div>E-commerce Product Cards Premium</div>`}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { name: "AirPods Pro 2nd Gen", price: "₹24,900", original: "₹29,900", rating: 4.8, reviews: 2341, emoji: "🎧", badge: "Best Seller", badgeColor: "bg-amber-500" },
                  { name: "MacBook Air M3", price: "₹1,14,900", original: "₹1,29,900", rating: 4.9, reviews: 987, emoji: "💻", badge: "New", badgeColor: "bg-violet-500" },
                  { name: "iPhone 16 Pro", price: "₹1,34,900", original: "₹1,49,900", rating: 4.7, reviews: 5842, emoji: "📱", badge: "Hot", badgeColor: "bg-rose-500" },
                ].map((product) => (
                  <div key={product.name} className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all hover:-translate-y-1 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/50">
                    {/* Badge */}
                    <div className={`absolute left-3 top-3 z-10 rounded-full ${product.badgeColor} px-2.5 py-1 text-xs font-black text-white`}>{product.badge}</div>
                    {/* Image area */}
                    <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                      <div className="text-7xl transition-transform duration-500 group-hover:scale-110">{product.emoji}</div>
                      {/* Wishlist */}
                      <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-400 backdrop-blur-sm transition hover:border-rose-500 hover:text-rose-400">
                        ♡
                      </button>
                    </div>
                    {/* Details */}
                    <div className="p-5">
                      <h3 className="font-bold text-white">{product.name}</h3>
                      <div className="mt-1 flex items-center gap-1 text-amber-400 text-sm">
                        {"★".repeat(Math.floor(product.rating))}
                        <span className="ml-1 text-xs text-slate-400">({product.reviews.toLocaleString()})</span>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div>
                          <span className="text-lg font-black text-white">{product.price}</span>
                          <span className="ml-2 text-xs text-slate-500 line-through">{product.original}</span>
                        </div>
                      </div>
                      <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-90">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* PREMIUM: Crypto Portfolio Card */}
        <section className="mt-16 pb-16">
          <ProLock title="Crypto Portfolio Card">
            <CodePreview
              title="Crypto Portfolio Card"
              description="Real-time crypto portfolio tracker with holdings, price changes, and portfolio distribution."
              dark={true}
              code={`<div>Crypto Portfolio Card Premium</div>`}
            >
              <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
                <div className="bg-gradient-to-r from-slate-900 via-violet-950 to-slate-900 px-6 py-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider">Portfolio Value</p>
                      <p className="mt-1 text-3xl font-black text-white">$42,840.50</p>
                      <p className="mt-1 flex items-center gap-1 text-sm font-semibold text-emerald-400">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        +$3,240 (8.2%) today
                      </p>
                    </div>
                    <div className="rounded-2xl border border-violet-500/30 bg-violet-500/10 p-3 text-2xl">₿</div>
                  </div>
                </div>
                <div className="divide-y divide-slate-800">
                  {[
                    { name: "Bitcoin", symbol: "BTC", amount: "0.842", value: "$28,420", change: "+4.2%", up: true, color: "text-amber-400" },
                    { name: "Ethereum", symbol: "ETH", amount: "5.21", value: "$9,840", change: "+6.1%", up: true, color: "text-blue-400" },
                    { name: "Solana", symbol: "SOL", amount: "48.5", value: "$4,580", change: "-1.8%", up: false, color: "text-violet-400" },
                  ].map((coin) => (
                    <div key={coin.symbol} className="flex items-center gap-4 px-6 py-4 transition hover:bg-slate-800/50">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-black ${coin.color}`}>
                        {coin.symbol[0]}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white">{coin.name}</p>
                        <p className="text-xs text-slate-400">{coin.amount} {coin.symbol}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-white">{coin.value}</p>
                        <p className={`text-xs font-semibold ${coin.up ? "text-emerald-400" : "text-rose-400"}`}>{coin.change}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>
      </div>
    </div>
  );
}
