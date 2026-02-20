export default function ProLock({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  // Dev mode mein ProLock bypass — seedha content dikhao
  if (process.env.NODE_ENV === "development") {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Blurred preview */}
      <div className="pointer-events-none select-none blur-sm brightness-75">
        {children}
      </div>

      {/* Lock overlay */}
      <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-black/60 via-violet-950/40 to-black/60 backdrop-blur-[3px]">
        <div className="px-8 text-center">
          {/* Lock icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-2xl shadow-violet-500/50 ring-4 ring-violet-500/20">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          {/* Badge */}
          <div className="mt-4 inline-block rounded-full border border-violet-400/30 bg-violet-500/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-violet-300">
            ✦ Premium Design
          </div>

          <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/50">
            Unlock this &amp; all premium designs
          </p>

          {/* CTA Button */}
          <a
            href="https://rzp.io/rzp/XfnL9M7F"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-sm font-bold text-white shadow-xl shadow-violet-500/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/60"
          >
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Buy Pro Plan — ₹69 Lifetime
          </a>
        </div>
      </div>
    </div>
  );
}
