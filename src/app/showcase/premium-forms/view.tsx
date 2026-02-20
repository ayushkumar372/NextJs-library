import CodePreview from "@/components/CodePreview";

const darkElegantFormCode = `<div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  <h3 className="text-xl font-bold text-white">Create Account</h3>
  <p className="mt-1 text-sm text-slate-500">Join 25,000+ developers using ReactUI.</p>
  <form className="mt-6 space-y-4">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">First Name</label>
        <input type="text" placeholder="John" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Last Name</label>
        <input type="text" placeholder="Doe" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
      </div>
    </div>
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Email</label>
      <input type="email" placeholder="john@example.com" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
    </div>
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Password</label>
      <input type="password" placeholder="Min 8 characters" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
      <div className="mt-2 flex gap-1">
        <div className="h-1 flex-1 rounded-full bg-violet-500" />
        <div className="h-1 flex-1 rounded-full bg-violet-500" />
        <div className="h-1 flex-1 rounded-full bg-slate-700" />
        <div className="h-1 flex-1 rounded-full bg-slate-700" />
      </div>
      <p className="mt-1 text-xs text-slate-600">Medium strength</p>
    </div>
    <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:shadow-xl hover:shadow-violet-600/40">
      Create Account
    </button>
  </form>
</div>`;

const glassmorphismLoginCode = `<div className="relative overflow-hidden rounded-2xl">
  <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600" />
  <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-pink-400 opacity-30 blur-3xl" />
  <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-400 opacity-30 blur-3xl" />
  <div className="relative m-[1px] rounded-[15px] bg-white/10 p-8 backdrop-blur-xl">
    <h3 className="text-xl font-bold text-white">Login</h3>
    <p className="mt-1 text-sm text-white/60">Welcome back, please sign in.</p>
    <form className="mt-6 space-y-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/70">Email</label>
        <input type="email" placeholder="your@email.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10" />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/70">Password</label>
        <input type="password" placeholder="Enter password" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10" />
      </div>
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-white/70">
          <input type="checkbox" className="accent-white" />Remember me
        </label>
        <a href="#" className="text-xs text-white/70 hover:text-white">Forgot password?</a>
      </div>
      <button className="w-full rounded-xl bg-white/20 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/30">Sign In</button>
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-xs text-white/40">OR</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button type="button" className="rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm text-white transition hover:bg-white/10">Google</button>
        <button type="button" className="rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm text-white transition hover:bg-white/10">GitHub</button>
      </div>
    </form>
  </div>
</div>`;

const gradientBorderSubscribeCode = `<div className="rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
  <div className="rounded-[14px] bg-slate-950 p-8">
    <h3 className="text-xl font-bold text-white">Subscribe</h3>
    <p className="mt-1 text-sm text-slate-500">Get weekly design tips and resources.</p>
    <form className="mt-6 space-y-4">
      <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
      <input type="email" placeholder="your@email.com" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
      <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20">
        <option>Select interest...</option>
        <option>Design Systems</option>
        <option>React Components</option>
        <option>CSS & Animations</option>
        <option>TypeScript</option>
      </select>
      <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 font-semibold text-white transition hover:from-emerald-600 hover:to-cyan-600">Subscribe</button>
    </form>
  </div>
</div>`;

const multiStepFormCode = `<div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  {/* Steps indicator */}
  <div className="flex items-center justify-between">
    {["Account", "Profile", "Payment", "Done"].map((step, i) => (
      <div key={step} className="flex items-center gap-2">
        <div className={\`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold \${
          i < 2 ? "bg-gradient-to-br from-pink-500 to-rose-600 text-white" : "border border-slate-700 text-slate-600"
        }\`}>
          {i < 2 ? "\\u2713" : i + 1}
        </div>
        <span className={\`text-xs font-medium \${i < 2 ? "text-white" : "text-slate-600"}\`}>{step}</span>
        {i < 3 && <div className={\`mx-2 h-0.5 w-8 \${i < 1 ? "bg-pink-500" : "bg-slate-700"}\`} />}
      </div>
    ))}
  </div>
  <form className="mt-8 space-y-4">
    <h4 className="text-lg font-semibold text-white">Profile Details</h4>
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-500">Display Name</label>
      <input type="text" placeholder="How should we call you?" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20" />
    </div>
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-500">Bio</label>
      <textarea rows={3} placeholder="Tell us about yourself..." className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20" />
    </div>
    <div className="flex gap-3">
      <button type="button" className="flex-1 rounded-xl border border-slate-700 py-3 font-semibold text-slate-400 transition hover:bg-slate-800">Back</button>
      <button type="button" className="flex-1 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 py-3 font-semibold text-white transition hover:from-pink-600 hover:to-rose-700">Continue</button>
    </div>
  </form>
</div>`;

const searchFilterBarCode = `<div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <div className="flex flex-wrap gap-4">
    <div className="flex-1">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Search components, designs, templates..." className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
      </div>
    </div>
    <select className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-400 outline-none">
      <option>All Categories</option>
      <option>Buttons</option>
      <option>Cards</option>
      <option>Forms</option>
    </select>
    <select className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-400 outline-none">
      <option>Sort by: Popular</option>
      <option>Newest</option>
      <option>Most Used</option>
    </select>
    <button className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:from-violet-700 hover:to-indigo-700">Search</button>
  </div>
  <div className="mt-4 flex flex-wrap gap-2">
    {["Glass", "Neon", "Gradient", "3D", "Animated", "Dark", "Minimal"].map((tag) => (
      <button key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-400 transition hover:border-violet-500 hover:text-violet-400">
        {tag}
      </button>
    ))}
  </div>
</div>`;

const contactFloatingLabelsCode = `<div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  <h3 className="text-xl font-bold text-white">Get in Touch</h3>
  <p className="mt-1 text-sm text-slate-500">We'd love to hear from you.</p>
  <form className="mt-6 space-y-5">
    <div className="relative">
      <input type="email" placeholder=" " className="peer w-full rounded-xl border border-slate-700 bg-slate-800 px-4 pb-2 pt-6 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
      <label className="pointer-events-none absolute left-4 top-2 text-[10px] font-medium uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-violet-400">Email Address</label>
    </div>
    <div className="relative">
      <textarea rows={4} placeholder=" " className="peer w-full rounded-xl border border-slate-700 bg-slate-800 px-4 pb-2 pt-6 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
      <label className="pointer-events-none absolute left-4 top-2 text-[10px] font-medium uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-violet-400">Your Message</label>
    </div>
    <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:shadow-xl hover:shadow-violet-600/40">Send Message</button>
  </form>
</div>`;

const paymentFormCode = `<div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  <div className="flex items-center justify-between">
    <h3 className="text-xl font-bold text-white">Payment Details</h3>
    <div className="flex gap-2">
      <div className="rounded bg-slate-800 px-2 py-1 text-xs font-bold text-blue-400">VISA</div>
      <div className="rounded bg-slate-800 px-2 py-1 text-xs font-bold text-orange-400">MC</div>
      <div className="rounded bg-slate-800 px-2 py-1 text-xs font-bold text-blue-300">AMEX</div>
    </div>
  </div>
  <form className="mt-6 space-y-4">
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Card Number</label>
      <input type="text" placeholder="1234 5678 9012 3456" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Expiry Date</label>
        <input type="text" placeholder="MM / YY" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">CVV</label>
        <input type="text" placeholder="123" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
      </div>
    </div>
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Cardholder Name</label>
      <input type="text" placeholder="John Doe" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
    </div>
    <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3 font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:shadow-xl hover:shadow-emerald-600/40">Pay Now</button>
  </form>
</div>`;

const settingsToggleFormCode = `<div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  <h3 className="text-xl font-bold text-white">Settings</h3>
  <p className="mt-1 text-sm text-slate-500">Manage your preferences.</p>
  <div className="mt-6 divide-y divide-slate-800">
    {[
      { title: "Email Notifications", desc: "Receive emails about account activity" },
      { title: "Two-Factor Auth", desc: "Add an extra layer of security" },
      { title: "Dark Mode", desc: "Use dark theme across the app" },
      { title: "Public Profile", desc: "Make your profile visible to others" },
    ].map((item, i) => (
      <div key={item.title} className="flex items-center justify-between py-4">
        <div>
          <p className="text-sm font-medium text-white">{item.title}</p>
          <p className="text-xs text-slate-500">{item.desc}</p>
        </div>
        <button
          className={\`relative h-6 w-11 rounded-full transition \${
            i === 0 || i === 2 ? "bg-violet-500" : "bg-slate-700"
          }\`}
        >
          <span className={\`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition \${
            i === 0 || i === 2 ? "left-[22px]" : "left-0.5"
          }\`} />
        </button>
      </div>
    ))}
  </div>
</div>`;

export default function PremiumFormsShowcase() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">Premium Forms</h1>
          <p className="mt-3 text-slate-400">Floating labels, dark forms, glassmorphism, colorful, and multi-step forms.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* 1. Dark Elegant Form */}
          <CodePreview
            title="Dark Elegant Form"
            description="Full registration form with password strength meter and violet gradient."
            code={darkElegantFormCode}
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold text-white">Create Account</h3>
              <p className="mt-1 text-sm text-slate-500">Join 25,000+ developers using ReactUI.</p>
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">First Name</label>
                    <input type="text" placeholder="John" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Password</label>
                  <input type="password" placeholder="Min 8 characters" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
                  <div className="mt-2 flex gap-1">
                    <div className="h-1 flex-1 rounded-full bg-violet-500" />
                    <div className="h-1 flex-1 rounded-full bg-violet-500" />
                    <div className="h-1 flex-1 rounded-full bg-slate-700" />
                    <div className="h-1 flex-1 rounded-full bg-slate-700" />
                  </div>
                  <p className="mt-1 text-xs text-slate-600">Medium strength</p>
                </div>
                <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:shadow-xl hover:shadow-violet-600/40">
                  Create Account
                </button>
              </form>
            </div>
          </CodePreview>

          {/* 2. Glassmorphism Login Form */}
          <CodePreview
            title="Glassmorphism Login Form"
            description="Glass effect card on a vibrant gradient background with social login."
            code={glassmorphismLoginCode}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600" />
              <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-pink-400 opacity-30 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-400 opacity-30 blur-3xl" />
              <div className="relative m-[1px] rounded-[15px] bg-white/10 p-8 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white">Login</h3>
                <p className="mt-1 text-sm text-white/60">Welcome back, please sign in.</p>
                <form className="mt-6 space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/70">Email</label>
                    <input type="email" placeholder="your@email.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/70">Password</label>
                    <input type="password" placeholder="Enter password" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-white/30 focus:bg-white/10" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-white/70"><input type="checkbox" className="accent-white" />Remember me</label>
                    <a href="#" className="text-xs text-white/70 hover:text-white">Forgot password?</a>
                  </div>
                  <button className="w-full rounded-xl bg-white/20 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/30">Sign In</button>
                  <div className="flex items-center gap-4"><div className="h-px flex-1 bg-white/10" /><span className="text-xs text-white/40">OR</span><div className="h-px flex-1 bg-white/10" /></div>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" className="rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm text-white transition hover:bg-white/10">Google</button>
                    <button type="button" className="rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm text-white transition hover:bg-white/10">GitHub</button>
                  </div>
                </form>
              </div>
            </div>
          </CodePreview>

          {/* 3. Gradient Border Subscribe Form */}
          <CodePreview
            title="Gradient Border Subscribe Form"
            description="Emerald-cyan gradient border wrapping a dark subscribe form."
            code={gradientBorderSubscribeCode}
          >
            <div className="rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-[2px]">
              <div className="rounded-[14px] bg-slate-950 p-8">
                <h3 className="text-xl font-bold text-white">Subscribe</h3>
                <p className="mt-1 text-sm text-slate-500">Get weekly design tips and resources.</p>
                <form className="mt-6 space-y-4">
                  <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                  <input type="email" placeholder="your@email.com" className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                  <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-400 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20">
                    <option>Select interest...</option>
                    <option>Design Systems</option>
                    <option>React Components</option>
                    <option>CSS & Animations</option>
                    <option>TypeScript</option>
                  </select>
                  <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 font-semibold text-white transition hover:from-emerald-600 hover:to-cyan-600">Subscribe</button>
                </form>
              </div>
            </div>
          </CodePreview>

          {/* 4. Multi-Step Form */}
          <CodePreview
            title="Multi-Step Form"
            description="Step indicator with pink-rose gradient theme showing profile details step."
            code={multiStepFormCode}
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <div className="flex items-center justify-between">
                {["Account", "Profile", "Payment", "Done"].map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                      i < 2 ? "bg-gradient-to-br from-pink-500 to-rose-600 text-white" : "border border-slate-700 text-slate-600"
                    }`}>
                      {i < 2 ? "\u2713" : i + 1}
                    </div>
                    <span className={`text-xs font-medium ${i < 2 ? "text-white" : "text-slate-600"}`}>{step}</span>
                    {i < 3 && <div className={`mx-2 h-0.5 w-8 ${i < 1 ? "bg-pink-500" : "bg-slate-700"}`} />}
                  </div>
                ))}
              </div>
              <form className="mt-8 space-y-4">
                <h4 className="text-lg font-semibold text-white">Profile Details</h4>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-500">Display Name</label>
                  <input type="text" placeholder="How should we call you?" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-500">Bio</label>
                  <textarea rows={3} placeholder="Tell us about yourself..." className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20" />
                </div>
                <div className="flex gap-3">
                  <button type="button" className="flex-1 rounded-xl border border-slate-700 py-3 font-semibold text-slate-400 transition hover:bg-slate-800">Back</button>
                  <button type="button" className="flex-1 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 py-3 font-semibold text-white transition hover:from-pink-600 hover:to-rose-700">Continue</button>
                </div>
              </form>
            </div>
          </CodePreview>

          {/* 5. Search & Filter Bar */}
          <div className="lg:col-span-2">
            <CodePreview
              title="Search & Filter Bar"
              description="Search input with filters, sorting, and tag chips."
              code={searchFilterBarCode}
            >
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      <input type="text" placeholder="Search components, designs, templates..." className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
                    </div>
                  </div>
                  <select className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-400 outline-none">
                    <option>All Categories</option>
                    <option>Buttons</option>
                    <option>Cards</option>
                    <option>Forms</option>
                  </select>
                  <select className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-slate-400 outline-none">
                    <option>Sort by: Popular</option>
                    <option>Newest</option>
                    <option>Most Used</option>
                  </select>
                  <button className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:from-violet-700 hover:to-indigo-700">Search</button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Glass", "Neon", "Gradient", "3D", "Animated", "Dark", "Minimal"].map((tag) => (
                    <button key={tag} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-400 transition hover:border-violet-500 hover:text-violet-400">
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </CodePreview>
          </div>

          {/* 6. Contact Form with Floating Labels */}
          <CodePreview
            title="Contact Form with Floating Labels"
            description="Email and message inputs with floating label effect using placeholder styling."
            code={contactFloatingLabelsCode}
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
              <p className="mt-1 text-sm text-slate-500">We&apos;d love to hear from you.</p>
              <form className="mt-6 space-y-5">
                <div className="relative">
                  <input type="email" placeholder=" " className="peer w-full rounded-xl border border-slate-700 bg-slate-800 px-4 pb-2 pt-6 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
                  <label className="pointer-events-none absolute left-4 top-2 text-[10px] font-medium uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-violet-400">Email Address</label>
                </div>
                <div className="relative">
                  <textarea rows={4} placeholder=" " className="peer w-full rounded-xl border border-slate-700 bg-slate-800 px-4 pb-2 pt-6 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20" />
                  <label className="pointer-events-none absolute left-4 top-2 text-[10px] font-medium uppercase tracking-wider text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-violet-400">Your Message</label>
                </div>
                <button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:shadow-xl hover:shadow-violet-600/40">Send Message</button>
              </form>
            </div>
          </CodePreview>

          {/* 7. Payment Form */}
          <CodePreview
            title="Payment Form"
            description="Card payment form with card type indicators and emerald gradient."
            code={paymentFormCode}
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Payment Details</h3>
                <div className="flex gap-2">
                  <div className="rounded bg-slate-800 px-2 py-1 text-xs font-bold text-blue-400">VISA</div>
                  <div className="rounded bg-slate-800 px-2 py-1 text-xs font-bold text-orange-400">MC</div>
                  <div className="rounded bg-slate-800 px-2 py-1 text-xs font-bold text-blue-300">AMEX</div>
                </div>
              </div>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Expiry Date</label>
                    <input type="text" placeholder="MM / YY" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">CVV</label>
                    <input type="text" placeholder="123" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500">Cardholder Name</label>
                  <input type="text" placeholder="John Doe" className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20" />
                </div>
                <button className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 py-3 font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:shadow-xl hover:shadow-emerald-600/40">Pay Now</button>
              </form>
            </div>
          </CodePreview>

          {/* 8. Settings Toggle Form */}
          <CodePreview
            title="Settings Toggle Form"
            description="Settings list with toggle switches for each preference."
            code={settingsToggleFormCode}
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-xl font-bold text-white">Settings</h3>
              <p className="mt-1 text-sm text-slate-500">Manage your preferences.</p>
              <div className="mt-6 divide-y divide-slate-800">
                {[
                  { title: "Email Notifications", desc: "Receive emails about account activity" },
                  { title: "Two-Factor Auth", desc: "Add an extra layer of security" },
                  { title: "Dark Mode", desc: "Use dark theme across the app" },
                  { title: "Public Profile", desc: "Make your profile visible to others" },
                ].map((item, i) => (
                  <div key={item.title} className="flex items-center justify-between py-4">
                    <div>
                      <p className="text-sm font-medium text-white">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                    <button
                      className={`relative h-6 w-11 rounded-full transition ${
                        i === 0 || i === 2 ? "bg-violet-500" : "bg-slate-700"
                      }`}
                    >
                      <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${
                        i === 0 || i === 2 ? "left-[22px]" : "left-0.5"
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </CodePreview>
        </div>
      </div>
    </div>
  );
}
