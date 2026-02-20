import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const title = "About ReactUI Library";
const description =
  "Learn about the mission, team, technology, and principles behind ReactUI Library and how we build developer-first UI systems.";

export const metadata: Metadata = buildPageMetadata({
  path: "/about",
  title,
  description,
  keywords: [
    "about reactui",
    "react component library team",
    "design system mission",
    "frontend ui toolkit",
    "open source ui components",
  ],
});

const team = [
  {
    name: "Arjun Kapoor",
    role: "Founder & Lead Dev",
    bio: "Full-stack architect obsessed with developer experience. Built ReactUI from a weekend hack into a thriving open-source ecosystem.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Priya Nair",
    role: "UI/UX Designer",
    bio: "Design systems specialist who believes every pixel matters. Crafts the visual language that makes ReactUI components feel alive.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    name: "Vikram Singh",
    role: "Frontend Engineer",
    bio: "TypeScript purist and performance fanatic. Ensures every component is tree-shakeable, accessible, and blazing fast.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Meera Joshi",
    role: "Community Manager",
    bio: "Open-source advocate connecting developers worldwide. Turns community feedback into the features you love most.",
    gradient: "from-amber-500 to-orange-600",
  },
];

const stats = [
  { label: "Developers", value: "100K+" },
  { label: "Components", value: "50+" },
  { label: "Showcase Packs", value: "12" },
  { label: "Rating", value: "4.9" },
];

const milestones = [
  {
    date: "2023 Q1",
    title: "Project Started",
    description: "First commit with 10 basic components",
  },
  {
    date: "2023 Q3",
    title: "v1.0 Launch",
    description: "Released with 25 components and 5 showcase packs",
  },
  {
    date: "2024 Q1",
    title: "50K Users",
    description: "Community grew to 50,000 developers",
  },
  {
    date: "2024 Q3",
    title: "v2.0 Release",
    description: "50+ components, 12 showcase packs, Pro plan launch",
  },
  {
    date: "2025 Q1",
    title: "100K Users",
    description: "Milestone reached with enterprise customers",
  },
];

const techStack = [
  { name: "React", gradient: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", gradient: "from-blue-500 to-indigo-600" },
  { name: "Next.js", gradient: "from-gray-700 to-gray-900" },
  { name: "Tailwind CSS", gradient: "from-teal-400 to-cyan-500" },
  { name: "Framer Motion", gradient: "from-purple-500 to-pink-500" },
  { name: "Radix UI", gradient: "from-indigo-400 to-violet-500" },
];

const principles = [
  {
    title: "Open Source First",
    description:
      "Transparency drives everything we build. Our entire codebase is open, auditable, and community-driven so every developer can contribute, learn, and benefit.",
    iconPath:
      "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15v-4H7l5-8v4h4l-5 8z",
  },
  {
    title: "Developer Experience",
    description:
      "Intuitive APIs, comprehensive TypeScript support, and copy-paste examples mean you spend less time reading docs and more time shipping features.",
    iconPath:
      "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Accessibility",
    description:
      "Every component follows WAI-ARIA standards, supports full keyboard navigation, and works seamlessly with screen readers right out of the box.",
    iconPath:
      "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z",
  },
  {
    title: "Performance",
    description:
      "Tree-shakeable exports, zero unnecessary re-renders, and minimal runtime overhead keep your bundle lean and your UI buttery smooth.",
    iconPath:
      "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function AboutPage() {
  const jsonLd = buildWebPageJsonLd({
    path: "/about",
    title,
    description,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 px-4 py-28 sm:px-6 lg:px-8">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-5xl font-extrabold leading-tight tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            About ReactUI Library
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-indigo-200/80 sm:text-xl">
            We empower developers to build stunning, accessible interfaces at
            record speed. Our open-source component library is the foundation
            trusted by over 100,000 developers worldwide.
          </p>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Mission */}
          <div className="rounded-2xl border border-purple-500/10 bg-gradient-to-br from-purple-950/40 to-slate-950/60 p-8 sm:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              ReactUI Library was born from a simple frustration: rebuilding the
              same components across every project. We believe developers should
              invest their energy in unique product features, not in
              re-implementing buttons, modals, and form controls. Our mission is
              to provide a best-in-class, accessible, and beautifully designed
              component system that accelerates development without sacrificing
              quality.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-indigo-500/10 bg-gradient-to-br from-indigo-950/40 to-slate-950/60 p-8 sm:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.857-.638 1.676-1.083 2.442M2.458 12c.274.857.638 1.676 1.083 2.442M2.458 12H1m21 0h-1.458"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              We envision a world where every React application ships with
              consistent, accessible, and delightful UI out of the box. By
              combining cutting-edge design patterns with rock-solid engineering
              we aim to become the default component layer for the React
              ecosystem&mdash;empowering solo hackers and enterprise teams alike
              to build products that look and feel extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y border-white/5 bg-gradient-to-r from-indigo-950/50 via-purple-950/50 to-indigo-950/50 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TIMELINE / MILESTONES ===== */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Our Journey
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
          Key milestones that shaped ReactUI into what it is today.
        </p>

        <div className="relative mt-14">
          {/* vertical line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500 sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={milestone.date}
                  className="relative flex items-start sm:items-center"
                >
                  {/* dot */}
                  <div className="absolute left-5 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-indigo-400 bg-slate-950 sm:left-1/2">
                    <div className="h-2 w-2 rounded-full bg-indigo-400" />
                  </div>

                  {/* card — alternates sides on sm+ */}
                  <div
                    className={`ml-12 w-full sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      isEven
                        ? "sm:mr-auto sm:pr-4 sm:text-right"
                        : "sm:ml-auto sm:pl-4 sm:text-left"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-300">
                      {milestone.date}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-white">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="border-y border-white/5 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Built With Modern Tech
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            ReactUI leverages the best tools in the ecosystem to deliver a
            world-class developer experience.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`inline-flex items-center rounded-full bg-gradient-to-r ${tech.gradient} px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/20`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          Meet the Team
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
          The passionate people behind every component, pixel, and commit.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-white/5 bg-gradient-to-b from-slate-900 to-slate-950 p-6 text-center transition-colors hover:border-purple-500/20"
            >
              {/* avatar */}
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-2xl font-bold text-white shadow-lg`}
              >
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-purple-400">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CORE PRINCIPLES ===== */}
      <section className="border-y border-white/5 bg-gradient-to-br from-purple-950/30 via-slate-950 to-indigo-950/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Core Principles
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
            The values that guide every line of code we write.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 transition-colors hover:border-indigo-500/20"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={principle.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY / JOIN US CTA ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 px-4 py-24 sm:px-6 lg:px-8">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Join Our Community
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-indigo-200/70">
            ReactUI is built by the community, for the community. Whether you
            want to report a bug, request a feature, or submit a pull
            request&mdash;we would love to have you on board.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* GitHub */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.6 9.6 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </Link>

            {/* Discord */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
              </svg>
              Discord
            </Link>

            {/* Twitter */}
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </Link>
          </div>

          <div className="mt-12">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-shadow hover:shadow-purple-500/40"
            >
              Start Contributing
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
