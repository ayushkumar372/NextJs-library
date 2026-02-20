"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { UserDoc } from "./page";

export default function AdminTable({ users }: { users: UserDoc[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  async function togglePro(email: string, isPro: boolean) {
    setLoading(email);
    await fetch("/api/admin/toggle-pro", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, isPro }),
    });
    setLoading(null);
    router.refresh();
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="border-b border-border bg-secondary/50">
          <tr>
            <th className="px-4 py-3 text-left text-muted font-medium">#</th>
            <th className="px-4 py-3 text-left text-muted font-medium">Name</th>
            <th className="px-4 py-3 text-left text-muted font-medium">Email</th>
            <th className="px-4 py-3 text-left text-muted font-medium">Plan</th>
            <th className="px-4 py-3 text-left text-muted font-medium">Joined</th>
            <th className="px-4 py-3 text-left text-muted font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={user._id} className="border-b border-border/50 hover:bg-secondary/20">
              <td className="px-4 py-3 text-muted">{i + 1}</td>
              <td className="px-4 py-3 font-medium text-foreground">{user.name}</td>
              <td className="px-4 py-3 text-muted">{user.email}</td>
              <td className="px-4 py-3">
                {user.isPro ? (
                  <span className="rounded-full bg-violet-500/20 px-2.5 py-0.5 text-xs font-bold text-violet-400">
                    PRO
                  </span>
                ) : (
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted">
                    Free
                  </span>
                )}
              </td>
              <td className="px-4 py-3 text-muted">
                {new Date(user.createdAt).toLocaleDateString("en-IN")}
              </td>
              <td className="px-4 py-3">
                {user.isPro ? (
                  <button
                    onClick={() => togglePro(user.email, false)}
                    disabled={loading === user.email}
                    className="rounded-lg border border-red-500/30 px-3 py-1 text-xs text-red-400 hover:bg-red-500/10 disabled:opacity-50"
                  >
                    {loading === user.email ? "..." : "Revoke Pro"}
                  </button>
                ) : (
                  <button
                    onClick={() => togglePro(user.email, true)}
                    disabled={loading === user.email}
                    className="rounded-lg border border-violet-500/30 px-3 py-1 text-xs text-violet-400 hover:bg-violet-500/10 disabled:opacity-50"
                  >
                    {loading === user.email ? "..." : "Make Pro"}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && (
        <div className="py-10 text-center text-muted">No users yet.</div>
      )}
    </div>
  );
}
