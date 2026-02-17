import Link from "next/link";

const showcases = [
  {
    title: "Glassmorphism",
    description: "Frosted glass effects, blur backgrounds, transparent overlays, and ethereal UI elements.",
    href: "/showcase/glassmorphism",
    gradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
    border: "border-white/20",
  },
  {
    title: "Gaming & Cyberpunk",
    description: "RGB borders, HUD overlays, scan-line effects, futuristic dashboards, and competitive gaming UI.",
    href: "/showcase/gaming",
    gradient: "from-red-600/20 via-orange-500/20 to-yellow-500/20",
    border: "border-red-500/20",
  },
  {
    title: "Neon & Glow",
    description: "Neon signs, glowing buttons, electric text effects, nightclub vibes, and dark UI with glow.",
    href: "/showcase/neon",
    gradient: "from-pink-500/20 via-cyan-500/20 to-purple-500/20",
    border: "border-pink-500/20",
  },
  {
    title: "Gradient Paradise",
    description: "Mesh gradients, animated gradient borders, gradient text, aurora effects, and color transitions.",
    href: "/showcase/gradients",
    gradient: "from-emerald-500/20 via-blue-500/20 to-violet-500/20",
    border: "border-emerald-500/20",
  },
  {
    title: "Neumorphism",
    description: "Soft UI, embossed elements, clay-like buttons, pressed states, and depth without shadows.",
    href: "/showcase/neumorphism",
    gradient: "from-gray-200/40 via-gray-100/40 to-gray-300/40",
    border: "border-gray-300/20",
  },
  {
    title: "3D & Depth",
    description: "Perspective transforms, parallax cards, layered depth, floating elements, and spatial UI.",
    href: "/showcase/3d-depth",
    gradient: "from-indigo-500/20 via-blue-500/20 to-cyan-500/20",
    border: "border-indigo-500/20",
  },
  {
    title: "Animations & Motion",
    description: "Micro-interactions, loading states, hover effects, page transitions, and kinetic typography.",
    href: "/showcase/animations",
    gradient: "from-amber-500/20 via-orange-500/20 to-red-500/20",
    border: "border-amber-500/20",
  },
  {
    title: "Premium Buttons",
    description: "Gradient, 3D, neon, glass, animated, icon, loading, and group button designs at the highest level.",
    href: "/showcase/premium-buttons",
    gradient: "from-violet-500/20 via-fuchsia-500/20 to-pink-500/20",
    border: "border-violet-500/20",
  },
  {
    title: "Premium Cards",
    description: "Testimonial, product, pricing, profile, dashboard stat, and interactive hover cards.",
    href: "/showcase/premium-cards",
    gradient: "from-teal-500/20 via-emerald-500/20 to-green-500/20",
    border: "border-teal-500/20",
  },
  {
    title: "Premium Forms",
    description: "Floating labels, multi-step, glassmorphism, dark, and fully animated form experiences.",
    href: "/showcase/premium-forms",
    gradient: "from-sky-500/20 via-blue-500/20 to-indigo-500/20",
    border: "border-sky-500/20",
  },
  {
    title: "Hero Sections",
    description: "Landing page heroes with particles, gradients, video backgrounds, split layouts, and 3D text.",
    href: "/showcase/heroes",
    gradient: "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
    border: "border-rose-500/20",
  },
  {
    title: "Navigation Styles",
    description: "Transparent, glass, floating, sidebar, mega menu, and command palette navigations.",
    href: "/showcase/navbars",
    gradient: "from-cyan-500/20 via-teal-500/20 to-emerald-500/20",
    border: "border-cyan-500/20",
  },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            <span className="text-gradient-neon">Design Showcase</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            A massive collection of premium UI design patterns. Glassmorphism,
            Gaming, Neon, Gradients, 3D, Neumorphism, Animations — everything
            at the highest level.
          </p>
          <div className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 font-mono text-sm text-slate-400">
            <span className="text-neon-pink">12</span> design themes
            <span className="text-slate-600">|</span>
            <span className="text-neon-blue">200+</span> UI patterns
            <span className="text-slate-600">|</span>
            <span className="text-neon-green">Unlimited</span> creativity
          </div>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showcases.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative overflow-hidden rounded-2xl border ${item.border} bg-gradient-to-br ${item.gradient} p-6 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
            >
              <div className="absolute inset-0 bg-slate-900/60" />
              <div className="relative">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-pink-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-pink-400 transition-colors group-hover:text-pink-300">
                  Explore
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
