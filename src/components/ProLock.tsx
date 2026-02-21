"use client";

import { useSession } from "next-auth/react";
import BuyButton from "@/components/BuyButton";

export default function ProLock({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const { data: session, status } = useSession();
  const isPro = (session?.user as { isPro?: boolean } | undefined)?.isPro;

  // Dev mode ya Pro user — seedha content dikhao
  if (process.env.NODE_ENV === "development" || isPro) {
    return <>{children}</>;
  }

  // Session load ho rahi hai — spinner dikhao
  if (status === "loading") {
    return (
      <div className="flex h-48 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />
      </div>
    );
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
          <BuyButton className="mt-6">Buy Pro Plan — ₹69 Lifetime</BuyButton>
        </div>
      </div>
    </div>
  );
}
