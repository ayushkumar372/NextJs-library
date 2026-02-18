"use client";

import Link from "next/link";
import CodePreview from "@/components/CodePreview";

export default function CardsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-2 text-sm">
        <Link href="/components" className="text-muted hover:text-primary transition-colors">Components</Link>
        <svg className="h-4 w-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        <span className="font-medium text-foreground">Cards</span>
      </nav>

      <h1 className="text-4xl font-bold text-foreground">Cards</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Flexible card components for displaying content, pricing, profiles, products, statistics, blogs, testimonials, and features.
      </p>

      <div className="mt-10 space-y-8">
        {/* Basic Cards */}
        <CodePreview
          title="Basic Cards"
          description="Simple cards with title, description, and optional actions."
          code={`<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <h3 className="text-lg font-semibold text-white">Card Title</h3>
  <p className="mt-2 text-sm text-slate-400">Card description goes here with supporting text.</p>
  <button className="mt-4 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700">Action</button>
</div>`}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
              <h3 className="text-lg font-semibold text-white">Simple Card</h3>
              <p className="mt-2 text-sm text-slate-400">A basic card with minimal styling and a clean design.</p>
              <button className="mt-4 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 transition-colors">Learn More</button>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-purple-600">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-white">With Icon</h3>
              <p className="mt-2 text-sm text-slate-400">A card enhanced with an icon for better visual hierarchy.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50">
              <div className="h-32 bg-gradient-to-br from-violet-600/20 to-indigo-600/20" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white">With Image</h3>
                <p className="mt-2 text-sm text-slate-400">A card with an image header area for visual content.</p>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Profile Cards */}
        <CodePreview
          title="Profile Cards"
          description="Cards for displaying user profiles with avatars and social info."
          code={`<div className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden">
  <div className="h-24 bg-gradient-to-r from-violet-600 to-indigo-600" />
  <div className="px-6 pb-6">
    <div className="-mt-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-900 bg-gradient-to-br from-violet-500 to-purple-600 text-2xl font-bold text-white">JD</div>
    <h3 className="mt-3 text-lg font-semibold text-white">Jane Doe</h3>
    <p className="text-sm text-slate-400">Senior Developer</p>
  </div>
</div>`}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50">
              <div className="h-24 bg-gradient-to-r from-violet-600 to-indigo-600" />
              <div className="px-6 pb-6">
                <div className="-mt-10 flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-900 bg-gradient-to-br from-violet-500 to-purple-600 text-2xl font-bold text-white">JD</div>
                <h3 className="mt-3 text-lg font-semibold text-white">Jane Doe</h3>
                <p className="text-sm text-slate-400">Senior Frontend Developer</p>
                <p className="mt-2 text-sm text-slate-500">Building beautiful interfaces with React and TypeScript.</p>
                <div className="mt-4 flex gap-4 text-sm text-slate-400">
                  <span><strong className="text-white">1.2K</strong> followers</span>
                  <span><strong className="text-white">340</strong> following</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-800/50 p-6 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-2xl font-bold text-white">AS</div>
              <h3 className="mt-4 text-lg font-semibold text-white">Alex Smith</h3>
              <p className="text-sm text-slate-400">Product Designer</p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 transition-colors">Follow</button>
                <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors">Message</button>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-xl font-bold text-white">MR</div>
                <div>
                  <h3 className="font-semibold text-white">Maria Rodriguez</h3>
                  <p className="text-sm text-slate-400">Engineering Manager</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-slate-900 p-2"><p className="text-lg font-bold text-white">42</p><p className="text-xs text-slate-400">Projects</p></div>
                <div className="rounded-lg bg-slate-900 p-2"><p className="text-lg font-bold text-white">8.5K</p><p className="text-xs text-slate-400">Followers</p></div>
                <div className="rounded-lg bg-slate-900 p-2"><p className="text-lg font-bold text-white">12</p><p className="text-xs text-slate-400">Awards</p></div>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Pricing Cards */}
        <CodePreview
          title="Pricing Cards"
          description="Pricing tier cards with features and CTAs."
          code={`<div className="rounded-2xl border border-violet-500 bg-slate-900 p-6 shadow-lg shadow-violet-500/10">
  <span className="rounded-full bg-violet-600 px-3 py-0.5 text-xs font-medium text-white">Most Popular</span>
  <h3 className="mt-3 text-xl font-semibold text-white">Pro</h3>
  <p className="mt-2"><span className="text-3xl font-bold text-white">$29</span><span className="text-slate-400">/month</span></p>
  <ul className="mt-4 space-y-2">...</ul>
  <button className="mt-6 w-full rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white">Start Free Trial</button>
</div>`}
        >
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { name: "Starter", price: "$0", period: "/month", features: ["5 components", "Basic support", "Community access"], cta: "Get Started", featured: false },
              { name: "Pro", price: "$29", period: "/month", features: ["All 50+ components", "Priority support", "Figma files", "Updates for 1 year"], cta: "Start Free Trial", featured: true },
              { name: "Enterprise", price: "$99", period: "/month", features: ["Everything in Pro", "Custom components", "Dedicated support", "SLA guarantee", "Team license"], cta: "Contact Sales", featured: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl border p-6 ${plan.featured ? "border-violet-500 bg-slate-800/80 shadow-lg shadow-violet-500/10" : "border-slate-800 bg-slate-800/50"}`}>
                {plan.featured && <span className="mb-3 inline-block rounded-full bg-violet-600 px-3 py-0.5 text-xs font-medium text-white">Most Popular</span>}
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2"><span className="text-3xl font-bold text-white">{plan.price}</span><span className="text-slate-400">{plan.period}</span></p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 text-violet-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                      <span className="text-slate-400">{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${plan.featured ? "bg-violet-600 text-white hover:bg-violet-700" : "border border-slate-700 text-slate-300 hover:bg-slate-800"}`}>{plan.cta}</button>
              </div>
            ))}
          </div>
        </CodePreview>

        {/* Product Cards */}
        <CodePreview
          title="Product Cards"
          description="E-commerce product cards with images, prices, and actions."
          code={`<div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
  <div className="relative h-48 bg-gradient-to-br from-violet-500/20 to-indigo-500/20">
    <span className="absolute top-3 left-3 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white">New</span>
  </div>
  <div className="p-5">
    <h3 className="font-semibold text-white">Product Name</h3>
    <p className="mt-1 text-sm text-slate-400">Brief description</p>
    <div className="mt-3 flex items-center justify-between">
      <span className="text-lg font-bold text-white">$49.99</span>
      <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white">Add to Cart</button>
    </div>
  </div>
</div>`}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50 transition-all hover:border-slate-700">
              <div className="relative h-48 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 transition-all group-hover:from-violet-500/30 group-hover:to-indigo-500/30">
                <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-bold text-white">New</span>
                <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/50 text-slate-400 backdrop-blur-sm hover:text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-violet-400">Electronics</p>
                <h3 className="mt-1 font-semibold text-white">Wireless Headphones Pro</h3>
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (<svg key={s} className={`h-4 w-4 ${s <= 4 ? "text-amber-400" : "text-slate-600"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
                  <span className="ml-1 text-xs text-slate-400">(128)</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-white">$149.99</span>
                    <span className="ml-2 text-sm text-slate-500 line-through">$199.99</span>
                  </div>
                  <button className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-700">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50 transition-all hover:border-slate-700">
              <div className="relative h-48 bg-gradient-to-br from-pink-500/20 to-rose-500/20">
                <span className="absolute left-3 top-3 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">-30%</span>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-pink-400">Fashion</p>
                <h3 className="mt-1 font-semibold text-white">Designer Backpack</h3>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-white">$69.99</span>
                    <span className="ml-2 text-sm text-slate-500 line-through">$99.99</span>
                  </div>
                  <button className="rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-700">Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50 transition-all hover:border-slate-700">
              <div className="relative h-48 bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                <span className="absolute left-3 top-3 rounded-full bg-amber-500 px-2 py-0.5 text-xs font-bold text-white">Best Seller</span>
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">Home</p>
                <h3 className="mt-1 font-semibold text-white">Smart LED Lamp</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-white">$34.99</span>
                  <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Stats Cards */}
        <CodePreview
          title="Stats Cards"
          description="Dashboard-style statistic cards with trends and indicators."
          code={`<div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
  <div className="flex items-center justify-between">
    <p className="text-sm text-slate-400">Total Users</p>
    <span className="text-xs font-medium text-emerald-400">+12%</span>
  </div>
  <p className="mt-2 text-3xl font-bold text-white">12,345</p>
</div>`}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Users", value: "12,345", change: "+12%", up: true, icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", color: "from-violet-500 to-purple-600" },
              { label: "Revenue", value: "$45.2K", change: "+8.1%", up: true, icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-emerald-500 to-teal-600" },
              { label: "Bounce Rate", value: "24.5%", change: "-3.2%", up: false, icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6", color: "from-red-500 to-orange-600" },
              { label: "Avg. Session", value: "4m 32s", change: "+18%", up: true, icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "from-sky-500 to-blue-600" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-800/50 p-5">
                <div className="flex items-center justify-between">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} /></svg>
                  </div>
                  <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${stat.up ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`}>
                    {stat.up ? <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg> : <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>}
                    {stat.change}
                  </span>
                </div>
                <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </CodePreview>

        {/* Blog Post Cards */}
        <CodePreview
          title="Blog Post Cards"
          description="Cards for displaying blog articles with metadata."
          code={`<div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
  <div className="h-48 bg-gradient-to-br from-violet-500/20 to-indigo-500/20" />
  <div className="p-5">
    <span className="text-xs font-medium text-violet-400">Technology</span>
    <h3 className="mt-2 text-lg font-semibold text-white">Article Title</h3>
    <p className="mt-2 text-sm text-slate-400">Brief excerpt...</p>
    <div className="mt-4 flex items-center gap-3">
      <div className="h-8 w-8 rounded-full bg-violet-500" />
      <div><p className="text-sm text-white">Author</p><p className="text-xs text-slate-400">Jan 15, 2025</p></div>
    </div>
  </div>
</div>`}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50 transition-all hover:border-slate-700">
              <div className="h-44 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 transition-all group-hover:from-violet-500/30 group-hover:to-indigo-500/30" />
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400">Technology</span>
                  <span className="text-xs text-slate-500">5 min read</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-violet-400 transition-colors">Building Modern Web Apps with Next.js 15</h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">Explore the latest features in Next.js 15 including server components, streaming, and the new app router.</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-xs font-bold text-white">JD</div>
                  <div><p className="text-sm font-medium text-white">Jane Doe</p><p className="text-xs text-slate-500">Jan 15, 2025</p></div>
                </div>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50 transition-all hover:border-slate-700">
              <div className="h-44 bg-gradient-to-br from-emerald-500/20 to-teal-500/20" />
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">Design</span>
                  <span className="text-xs text-slate-500">8 min read</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">Design Systems: From Theory to Practice</h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-2">Learn how to build scalable design systems that work across platforms and teams.</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white">AS</div>
                  <div><p className="text-sm font-medium text-white">Alex Smith</p><p className="text-xs text-slate-500">Feb 2, 2025</p></div>
                </div>
              </div>
            </div>
            <div className="group rounded-2xl border border-slate-800 bg-slate-800/50 p-5 transition-all hover:border-slate-700">
              <span className="rounded-full bg-pink-500/10 px-2.5 py-0.5 text-xs font-medium text-pink-400">Tutorial</span>
              <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">Mastering Tailwind CSS Animations</h3>
              <p className="mt-2 text-sm text-slate-400">A deep dive into creating smooth, performant animations with Tailwind CSS utility classes.</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-xs font-bold text-white">MR</div>
                  <p className="text-sm font-medium text-white">Maria R.</p>
                </div>
                <span className="text-xs text-slate-500">3 min read</span>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Testimonial Cards */}
        <CodePreview
          title="Testimonial Cards"
          description="Customer reviews and testimonials with ratings."
          code={`<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <div className="flex gap-1 text-amber-400">★★★★★</div>
  <p className="mt-3 text-sm text-slate-300">"Amazing components, saved us weeks of development time."</p>
  <div className="mt-4 flex items-center gap-3">
    <div className="h-10 w-10 rounded-full bg-violet-500 text-white text-sm font-bold flex items-center justify-center">JD</div>
    <div><p className="text-sm font-medium text-white">Jane Doe</p><p className="text-xs text-slate-400">CEO, TechCorp</p></div>
  </div>
</div>`}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (<svg key={s} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">&ldquo;These components are incredible. We built our entire SaaS dashboard in half the time. The code quality is exceptional.&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-sm font-bold text-white">SM</div>
                <div><p className="text-sm font-medium text-white">Sarah Miller</p><p className="text-xs text-slate-400">CTO, StartupX</p></div>
              </div>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 p-6">
              <svg className="h-8 w-8 text-violet-500/40" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" /></svg>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">&ldquo;The best component library I have ever used. Beautiful defaults and incredibly customizable.&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-sm font-bold text-white">DK</div>
                <div><p className="text-sm font-medium text-white">David Kim</p><p className="text-xs text-slate-400">Lead Developer, Agency</p></div>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (<svg key={s} className={`h-5 w-5 ${s <= 4 ? "text-amber-400" : "text-slate-600"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">&ldquo;Saved our team hundreds of hours. The attention to detail in every component is remarkable.&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-sm font-bold text-white">LP</div>
                <div><p className="text-sm font-medium text-white">Lisa Park</p><p className="text-xs text-slate-400">Product Manager, Corp</p></div>
              </div>
            </div>
          </div>
        </CodePreview>

        {/* Feature Cards */}
        <CodePreview
          title="Feature Cards"
          description="Highlight product features with icons and descriptions."
          code={`<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
    <svg className="h-6 w-6 text-white" .../>
  </div>
  <h3 className="mt-4 text-lg font-semibold text-white">Feature Title</h3>
  <p className="mt-2 text-sm text-slate-400">Feature description here.</p>
</div>`}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Lightning Fast", desc: "Optimized for performance with lazy loading and code splitting.", icon: "M13 10V3L4 14h7v7l9-11h-7z", gradient: "from-amber-500 to-orange-600" },
              { title: "Fully Responsive", desc: "Every component adapts beautifully to any screen size.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", gradient: "from-violet-500 to-purple-600" },
              { title: "Accessible", desc: "Built with ARIA patterns and keyboard navigation support.", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", gradient: "from-emerald-500 to-teal-600" },
              { title: "Customizable", desc: "Easily customize with Tailwind CSS utility classes.", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01", gradient: "from-pink-500 to-rose-600" },
            ].map((feature) => (
              <div key={feature.title} className="group rounded-2xl border border-slate-800 bg-slate-800/50 p-6 transition-all hover:border-slate-700 hover:shadow-xl hover:shadow-black/20">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-transform group-hover:scale-110`}>
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </CodePreview>
      </div>
    </div>
  );
}
