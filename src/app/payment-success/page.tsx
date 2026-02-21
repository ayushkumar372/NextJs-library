"use client";

import { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function PaymentSuccessPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const user = session?.user as { isPro?: boolean } | undefined;

  // Pro user hai toh showcase pe bhej do
  useEffect(() => {
    if (user?.isPro) {
      router.push("/showcase");
    }
  }, [user, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md text-center">
        {/* Success icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 ring-8 ring-emerald-500/10">
          <svg className="h-10 w-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="mt-6 text-3xl font-extrabold text-foreground">
          Payment Successful!
        </h1>
        <p className="mt-3 text-muted">
          Thank you for purchasing <span className="font-semibold text-foreground">UIDrops Pro Plan</span>. You now have lifetime access.
        </p>

        {status === "loading" ? (
          <div className="mt-8 flex justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : user ? (
          /* Logged in but not pro yet — webhook process ho raha hai */
          <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
            <p className="text-sm text-amber-600 dark:text-amber-400">
              Pro access activate ho raha hai... Please sign out aur wapas sign in karo.
            </p>
            <p className="mt-1 text-xs text-muted">
              (Use the same email you used for payment)
            </p>
          </div>
        ) : (
          /* Not logged in — sign in karo */
          <div className="mt-8 space-y-4">
            <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
              <p className="text-sm font-medium text-foreground">
                Sign in with the <span className="text-violet-500">same email</span> you used for payment to activate Pro access.
              </p>
            </div>
            <button
              onClick={() => signIn("google")}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition hover:bg-secondary"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign in with Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
