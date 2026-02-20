import CodePreview from "@/components/CodePreview";
import ProLock from "@/components/ProLock";

export default function NeumorphismShowcase() {
  return (
    <div className="min-h-screen bg-[#e0e5ec]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-slate-700">Neumorphism</h1>
          <p className="mt-3 text-slate-500">Soft UI, embossed elements, clay-like surfaces, depth without hard shadows.</p>
        </div>

        {/* Soft Buttons */}
        <section className="mt-16">
          <CodePreview
            title="Soft Buttons"
            description="Raised and pressed button styles using neumorphic shadows"
            dark={false}
            code={`<!-- Default -->
<button class="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-slate-600
  shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]
  active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
  Default
</button>

<!-- Primary -->
<button class="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-indigo-500
  shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]
  active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
  Primary
</button>

<!-- Success -->
<button class="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-emerald-500
  shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]
  active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
  Success
</button>

<!-- Danger -->
<button class="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-rose-500
  shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]
  active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
  Danger
</button>

<!-- Pressed -->
<button class="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-slate-500
  shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
  Pressed
</button>

<!-- Pill Shape -->
<button class="rounded-full bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-violet-500
  shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]
  active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
  Pill Shape
</button>`}
          >
            <div className="flex flex-wrap items-center gap-6">
              <button className="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-slate-600 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                Default
              </button>
              <button className="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-indigo-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                Primary
              </button>
              <button className="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-emerald-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                Success
              </button>
              <button className="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-rose-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                Danger
              </button>
              <button className="rounded-xl bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-slate-500 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                Pressed
              </button>
              <button className="rounded-full bg-[#e0e5ec] px-8 py-3 text-sm font-semibold text-violet-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                Pill Shape
              </button>
            </div>
          </CodePreview>
        </section>

        {/* Soft Cards */}
        <section className="mt-16">
          <CodePreview
            title="Soft Cards"
            description="Raised cards with inset icon containers and call-to-action buttons"
            dark={false}
            code={`<div class="rounded-2xl bg-[#e0e5ec] p-6
  shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
  <!-- Inset icon container -->
  <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e0e5ec]
    text-2xl text-indigo-500
    shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
    &#9733;
  </div>
  <h3 class="mt-4 text-center text-lg font-bold text-slate-700">Premium</h3>
  <p class="mt-2 text-center text-sm text-slate-500">
    Access all features and components with our premium plan.
  </p>
  <button class="mt-4 w-full rounded-xl bg-[#e0e5ec] py-2.5 text-sm font-semibold text-indigo-500
    shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]
    active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
    Upgrade
  </button>
</div>`}
          >
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e0e5ec] text-2xl text-indigo-500 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                  &#9733;
                </div>
                <h3 className="mt-4 text-center text-lg font-bold text-slate-700">Premium</h3>
                <p className="mt-2 text-center text-sm text-slate-500">Access all features and components with our premium plan.</p>
                <button className="mt-4 w-full rounded-xl bg-[#e0e5ec] py-2.5 text-sm font-semibold text-indigo-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                  Upgrade
                </button>
              </div>

              <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e0e5ec] text-2xl text-emerald-500 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                  &#9889;
                </div>
                <h3 className="mt-4 text-center text-lg font-bold text-slate-700">Performance</h3>
                <p className="mt-2 text-center text-sm text-slate-500">Optimized for speed with zero runtime overhead.</p>
                <button className="mt-4 w-full rounded-xl bg-[#e0e5ec] py-2.5 text-sm font-semibold text-emerald-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                  Learn More
                </button>
              </div>

              <div className="rounded-2xl bg-[#e0e5ec] p-6 shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e0e5ec] text-2xl text-rose-500 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                  &#10084;
                </div>
                <h3 className="mt-4 text-center text-lg font-bold text-slate-700">Community</h3>
                <p className="mt-2 text-center text-sm text-slate-500">Join thousands of developers using our components.</p>
                <button className="mt-4 w-full rounded-xl bg-[#e0e5ec] py-2.5 text-sm font-semibold text-rose-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                  Join Now
                </button>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* Soft Form */}
        <section className="mt-16">
          <CodePreview
            title="Soft Form"
            description="Sign in form with inset inputs and raised submit button"
            dark={false}
            code={`<div class="mx-auto max-w-md rounded-2xl bg-[#e0e5ec] p-8
  shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
  <h3 class="text-center text-xl font-bold text-slate-700">Sign In</h3>
  <form class="mt-6 space-y-5">
    <div>
      <label class="mb-2 block text-sm font-medium text-slate-600">Email</label>
      <input type="email" placeholder="you@example.com"
        class="w-full rounded-xl border-none bg-[#e0e5ec] px-4 py-3 text-sm text-slate-700
          placeholder-slate-400 outline-none
          shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]" />
    </div>
    <div>
      <label class="mb-2 block text-sm font-medium text-slate-600">Password</label>
      <input type="password" placeholder="Enter password"
        class="w-full rounded-xl border-none bg-[#e0e5ec] px-4 py-3 text-sm text-slate-700
          placeholder-slate-400 outline-none
          shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]" />
    </div>
    <button type="submit"
      class="w-full rounded-xl bg-[#e0e5ec] py-3 text-sm font-bold text-indigo-500
        shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]
        active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
      Sign In
    </button>
  </form>
</div>`}
          >
            <div className="mx-auto max-w-md rounded-2xl bg-[#e0e5ec] p-8 shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
              <h3 className="text-center text-xl font-bold text-slate-700">Sign In</h3>
              <form className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Email</label>
                  <input type="email" placeholder="you@example.com" className="w-full rounded-xl border-none bg-[#e0e5ec] px-4 py-3 text-sm text-slate-700 placeholder-slate-400 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff] outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Password</label>
                  <input type="password" placeholder="Enter password" className="w-full rounded-xl border-none bg-[#e0e5ec] px-4 py-3 text-sm text-slate-700 placeholder-slate-400 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff] outline-none" />
                </div>
                <button type="submit" className="w-full rounded-xl bg-[#e0e5ec] py-3 text-sm font-bold text-indigo-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                  Sign In
                </button>
              </form>
            </div>
          </CodePreview>
        </section>

        {/* Soft Controls */}
        <section className="mt-16">
          <CodePreview
            title="Soft Controls"
            description="Toggle switch, size selector, and slider with neumorphic styling"
            dark={false}
            code={`<!-- Toggle Switch -->
<div class="flex items-center gap-3">
  <span class="text-sm text-slate-600">Toggle</span>
  <div class="flex h-8 w-14 items-center rounded-full bg-[#e0e5ec] px-1
    shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
    <div class="h-6 w-6 translate-x-6 rounded-full bg-[#e0e5ec]
      shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]" />
  </div>
</div>

<!-- Size Selector -->
<div class="flex gap-2">
  <!-- Raised (unselected) -->
  <button class="flex h-10 w-10 items-center justify-center rounded-xl
    bg-[#e0e5ec] text-sm font-bold text-slate-500
    shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]">
    S
  </button>
  <!-- Pressed (selected) -->
  <button class="flex h-10 w-10 items-center justify-center rounded-xl
    bg-[#e0e5ec] text-sm font-bold text-indigo-500
    shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
    M
  </button>
</div>

<!-- Slider -->
<div class="w-48">
  <div class="h-2 rounded-full bg-[#e0e5ec]
    shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]">
    <div class="relative h-2 w-3/5 rounded-full bg-indigo-400">
      <div class="absolute -right-2 -top-1.5 h-5 w-5 rounded-full bg-[#e0e5ec]
        shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]" />
    </div>
  </div>
</div>`}
          >
            <div className="flex flex-wrap items-center gap-8">
              {/* Toggle */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-600">Toggle</span>
                <div className="flex h-8 w-14 items-center rounded-full bg-[#e0e5ec] px-1 shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
                  <div className="h-6 w-6 translate-x-6 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]" />
                </div>
              </div>
              {/* Size Selector */}
              <div className="flex gap-2">
                {["S", "M", "L", "XL"].map((size, i) => (
                  <button key={size} className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${i === 1 ? "bg-[#e0e5ec] text-indigo-500 shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]" : "bg-[#e0e5ec] text-slate-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]"}`}>
                    {size}
                  </button>
                ))}
              </div>
              {/* Slider */}
              <div className="w-48">
                <div className="h-2 rounded-full bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#b8bec7,inset_-2px_-2px_4px_#ffffff]">
                  <div className="relative h-2 w-3/5 rounded-full bg-indigo-400">
                    <div className="absolute -right-2 -top-1.5 h-5 w-5 rounded-full bg-[#e0e5ec] shadow-[3px_3px_6px_#b8bec7,-3px_-3px_6px_#ffffff]" />
                  </div>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* Soft Stats */}
        <section className="mt-16">
          <CodePreview
            title="Soft Stats"
            description="Stat cards with raised neumorphic shadows and centered text"
            dark={false}
            code={`<div class="rounded-2xl bg-[#e0e5ec] p-6 text-center
  shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
  <p class="text-3xl font-extrabold text-indigo-500">12.5K</p>
  <p class="mt-1 text-sm text-slate-500">Users</p>
</div>

<div class="rounded-2xl bg-[#e0e5ec] p-6 text-center
  shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
  <p class="text-3xl font-extrabold text-emerald-500">$84K</p>
  <p class="mt-1 text-sm text-slate-500">Revenue</p>
</div>

<div class="rounded-2xl bg-[#e0e5ec] p-6 text-center
  shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
  <p class="text-3xl font-extrabold text-amber-500">+24%</p>
  <p class="mt-1 text-sm text-slate-500">Growth</p>
</div>

<div class="rounded-2xl bg-[#e0e5ec] p-6 text-center
  shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
  <p class="text-3xl font-extrabold text-rose-500">4.9</p>
  <p class="mt-1 text-sm text-slate-500">Rating</p>
</div>`}
          >
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { label: "Users", value: "12.5K", color: "text-indigo-500" },
                { label: "Revenue", value: "$84K", color: "text-emerald-500" },
                { label: "Growth", value: "+24%", color: "text-amber-500" },
                { label: "Rating", value: "4.9", color: "text-rose-500" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-[#e0e5ec] p-6 text-center shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]">
                  <p className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </CodePreview>
        </section>

        {/* Dark Neumorphism */}
        <section className="mt-16">
          <CodePreview
            title="Dark Neumorphism"
            description="Neumorphic cards on a dark background with subtle depth"
            dark={false}
            code={`<div class="rounded-2xl bg-[#1a1a2e] p-8">
  <div class="rounded-2xl bg-[#1a1a2e] p-6 text-center
    shadow-[8px_8px_16px_#111122,-8px_-8px_16px_#23233a]">
    <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a1a2e]
      text-xl text-violet-400
      shadow-[inset_4px_4px_8px_#111122,inset_-4px_-4px_8px_#23233a]">
      &#9733;
    </div>
    <h3 class="mt-3 font-bold text-slate-200">Dark Soft</h3>
    <p class="mt-1 text-sm text-slate-500">Neumorphism on dark backgrounds.</p>
  </div>
</div>`}
          >
            <div className="rounded-2xl bg-[#1a1a2e] p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="rounded-2xl bg-[#1a1a2e] p-6 text-center shadow-[8px_8px_16px_#111122,-8px_-8px_16px_#23233a]">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a1a2e] text-xl text-violet-400 shadow-[inset_4px_4px_8px_#111122,inset_-4px_-4px_8px_#23233a]">&#9733;</div>
                  <h3 className="mt-3 font-bold text-slate-200">Dark Soft</h3>
                  <p className="mt-1 text-sm text-slate-500">Neumorphism on dark backgrounds.</p>
                </div>
                <div className="rounded-2xl bg-[#1a1a2e] p-6 text-center shadow-[8px_8px_16px_#111122,-8px_-8px_16px_#23233a]">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a1a2e] text-xl text-cyan-400 shadow-[inset_4px_4px_8px_#111122,inset_-4px_-4px_8px_#23233a]">&#9889;</div>
                  <h3 className="mt-3 font-bold text-slate-200">Subtle Depth</h3>
                  <p className="mt-1 text-sm text-slate-500">Minimal shadow, maximum impact.</p>
                </div>
                <div className="rounded-2xl bg-[#1a1a2e] p-6 text-center shadow-[8px_8px_16px_#111122,-8px_-8px_16px_#23233a]">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#1a1a2e] text-xl text-rose-400 shadow-[inset_4px_4px_8px_#111122,inset_-4px_-4px_8px_#23233a]">&#10048;</div>
                  <h3 className="mt-3 font-bold text-slate-200">Elegant</h3>
                  <p className="mt-1 text-sm text-slate-500">Premium feel with soft edges.</p>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>

        {/* Soft Icon Buttons */}
        <section className="mt-16">
          <CodePreview
            title="Soft Icon Buttons"
            description="Circular icon buttons in multiple sizes with raised neumorphic shadows"
            dark={false}
            code={`<!-- Small (40px) -->
<button class="flex h-10 w-10 items-center justify-center rounded-full bg-[#e0e5ec]
  text-sm text-slate-600
  shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]
  active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
  &#9733;
</button>

<!-- Medium (48px) -->
<button class="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0e5ec]
  text-lg text-indigo-500
  shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff]
  active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
  &#9829;
</button>

<!-- Large (56px) -->
<button class="flex h-14 w-14 items-center justify-center rounded-full bg-[#e0e5ec]
  text-xl text-emerald-500
  shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff]
  active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
  &#9889;
</button>`}
          >
            <div className="flex flex-wrap items-center gap-6">
              {/* Small */}
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e0e5ec] text-sm text-slate-600 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                &#9733;
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e0e5ec] text-sm text-rose-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                &#10084;
              </button>
              {/* Medium */}
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0e5ec] text-lg text-indigo-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                &#9829;
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e0e5ec] text-lg text-amber-500 shadow-[5px_5px_10px_#b8bec7,-5px_-5px_10px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                &#9788;
              </button>
              {/* Large */}
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e0e5ec] text-xl text-emerald-500 shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                &#9889;
              </button>
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e0e5ec] text-xl text-violet-500 shadow-[9px_9px_16px_#b8bec7,-9px_-9px_16px_#ffffff] transition-all active:shadow-[inset_5px_5px_10px_#b8bec7,inset_-5px_-5px_10px_#ffffff]">
                &#10048;
              </button>
            </div>
          </CodePreview>
        </section>

        {/* Soft Progress Bars */}
        <section className="mt-16">
          <CodePreview
            title="Soft Progress Bars"
            description="Progress bars with inset track and colored fill"
            dark={false}
            code={`<!-- Indigo progress bar (75%) -->
<div class="h-3 w-full rounded-full bg-[#e0e5ec]
  shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
  <div class="h-3 w-3/4 rounded-full bg-indigo-400"></div>
</div>

<!-- Emerald progress bar (50%) -->
<div class="h-3 w-full rounded-full bg-[#e0e5ec]
  shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
  <div class="h-3 w-1/2 rounded-full bg-emerald-400"></div>
</div>

<!-- Rose progress bar (33%) -->
<div class="h-3 w-full rounded-full bg-[#e0e5ec]
  shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
  <div class="h-3 w-1/3 rounded-full bg-rose-400"></div>
</div>`}
          >
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-600">Storage</span>
                  <span className="text-slate-500">75%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
                  <div className="h-3 w-3/4 rounded-full bg-indigo-400"></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-600">Bandwidth</span>
                  <span className="text-slate-500">50%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
                  <div className="h-3 w-1/2 rounded-full bg-emerald-400"></div>
                </div>
              </div>
              <div>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-slate-600">CPU Usage</span>
                  <span className="text-slate-500">33%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-[#e0e5ec] shadow-[inset_3px_3px_6px_#b8bec7,inset_-3px_-3px_6px_#ffffff]">
                  <div className="h-3 w-1/3 rounded-full bg-rose-400"></div>
                </div>
              </div>
            </div>
          </CodePreview>
        </section>
        {/* Premium: Neumorphic Music Player */}
        <section className="mt-16">
          <ProLock title="Neumorphic Music Player">
            <CodePreview
              title="Neumorphic Music Player"
              description="Soft UI music player with embossed controls, progress slider, and clay-like album art."
              dark={false}
              code={`<div>Neumorphic Music Player Premium</div>`}
            >
              <div className="mx-auto max-w-xs rounded-3xl bg-[#e0e5ec] p-8" style={{ boxShadow: "10px 10px 30px #b8bec7, -10px -10px 30px #ffffff" }}>
                {/* Album art */}
                <div className="mx-auto h-40 w-40 rounded-3xl" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", boxShadow: "8px 8px 20px #b8bec7, -8px -8px 20px #ffffff" }}>
                  <div className="flex h-full items-center justify-center text-4xl">🎵</div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-bold text-slate-700">Chill Vibes</h3>
                  <p className="text-sm text-slate-400">Lo-fi Collection</p>
                </div>
                {/* Progress */}
                <div className="mt-5 rounded-full bg-[#e0e5ec] p-1" style={{ boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff" }}>
                  <div className="h-2 w-2/3 rounded-full" style={{ background: "linear-gradient(90deg, #667eea, #764ba2)" }} />
                </div>
                <div className="mt-2 flex justify-between text-xs text-slate-400"><span>1:45</span><span>3:20</span></div>
                {/* Controls */}
                <div className="mt-5 flex items-center justify-center gap-6">
                  {["⏮", "▶", "⏭"].map((icon, i) => (
                    <button key={icon} className={`flex items-center justify-center rounded-full bg-[#e0e5ec] text-slate-600 transition active:shadow-none ${i === 1 ? "h-14 w-14 text-xl" : "h-10 w-10 text-sm"}`}
                      style={{ boxShadow: i === 1 ? "6px 6px 15px #b8bec7, -6px -6px 15px #ffffff" : "4px 4px 10px #b8bec7, -4px -4px 10px #ffffff" }}>
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* Premium: Neumorphic Smart Home Panel */}
        <section className="mt-16">
          <ProLock title="Neumorphic Smart Home Panel">
            <CodePreview
              title="Neumorphic Smart Home Panel"
              description="Soft UI smart home control panel with device toggles, temperature slider, and room cards."
              dark={false}
              code={`<div>Smart Home Panel Premium</div>`}
            >
              <div className="rounded-3xl bg-[#e0e5ec] p-8" style={{ boxShadow: "10px 10px 30px #b8bec7, -10px -10px 30px #ffffff" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-700">Smart Home</h3>
                    <p className="text-sm text-slate-400">3 rooms active</p>
                  </div>
                  <div className="rounded-2xl bg-[#e0e5ec] p-3 text-2xl" style={{ boxShadow: "5px 5px 15px #b8bec7, -5px -5px 15px #ffffff" }}>🏠</div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { room: "Living Room", temp: "24°C", icon: "🛋", on: true },
                    { room: "Bedroom", temp: "22°C", icon: "🛏", on: false },
                    { room: "Kitchen", temp: "26°C", icon: "🍳", on: true },
                    { room: "Office", temp: "23°C", icon: "💼", on: true },
                  ].map((room) => (
                    <div key={room.room} className="rounded-2xl bg-[#e0e5ec] p-4" style={{ boxShadow: room.on ? "inset 4px 4px 10px #b8bec7, inset -4px -4px 10px #ffffff" : "4px 4px 10px #b8bec7, -4px -4px 10px #ffffff" }}>
                      <div className="text-xl">{room.icon}</div>
                      <div className="mt-2 text-xs font-semibold text-slate-600">{room.room}</div>
                      <div className="text-xs text-slate-400">{room.temp}</div>
                      <div className={`mt-2 h-1.5 w-8 rounded-full ${room.on ? "bg-indigo-500" : "bg-slate-300"}`} />
                    </div>
                  ))}
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>

        {/* Premium: Neumorphic Credit Card UI */}
        <section className="mt-16">
          <ProLock title="Neumorphic Credit Card">
            <CodePreview
              title="Neumorphic Credit Card"
              description="Soft embossed credit card UI with raised number fields, chip, and card details."
              dark={false}
              code={`<div>Neumorphic Credit Card Premium</div>`}
            >
              <div className="mx-auto max-w-sm space-y-6">
                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6" style={{ boxShadow: "10px 10px 30px #b8bec7, -10px -10px 30px #ffffff" }}>
                  <div className="flex justify-between">
                    <div className="text-sm font-bold text-white/70">UIDrops Bank</div>
                    <div className="text-sm font-bold text-white">VISA</div>
                  </div>
                  <div className="mt-6 h-8 w-12 rounded-md bg-amber-400/80" />
                  <div className="mt-4 text-xl font-mono font-bold tracking-widest text-white">•••• •••• •••• 4242</div>
                  <div className="mt-4 flex justify-between text-xs text-white/70">
                    <div><div className="text-white/40">CARD HOLDER</div><div className="text-white font-medium">Arjun Kapoor</div></div>
                    <div><div className="text-white/40">EXPIRES</div><div className="text-white font-medium">12/28</div></div>
                  </div>
                </div>
                {/* Add card form */}
                <div className="rounded-2xl bg-[#e0e5ec] p-6" style={{ boxShadow: "8px 8px 20px #b8bec7, -8px -8px 20px #ffffff" }}>
                  <input placeholder="Card Number" className="w-full rounded-xl bg-[#e0e5ec] px-4 py-3 text-sm text-slate-600 outline-none placeholder-slate-400" style={{ boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff" }} />
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <input placeholder="MM / YY" className="rounded-xl bg-[#e0e5ec] px-4 py-3 text-sm text-slate-600 outline-none placeholder-slate-400" style={{ boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff" }} />
                    <input placeholder="CVV" className="rounded-xl bg-[#e0e5ec] px-4 py-3 text-sm text-slate-600 outline-none placeholder-slate-400" style={{ boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff" }} />
                  </div>
                  <button className="mt-4 w-full rounded-xl bg-[#e0e5ec] py-3 text-sm font-bold text-indigo-500 transition" style={{ boxShadow: "5px 5px 15px #b8bec7, -5px -5px 15px #ffffff" }}>
                    Add Card
                  </button>
                </div>
              </div>
            </CodePreview>
          </ProLock>
        </section>
      </div>
    </div>
  );
}
