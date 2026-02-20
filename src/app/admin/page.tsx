"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { redirect } from "next/navigation";
import AdminTable from "./AdminTable";

const ADMIN_EMAIL = "ayushkumar080800@gmail.com";

export interface UserDoc {
  _id: string;
  name: string;
  email: string;
  image?: string;
  isPro: boolean;
  proActivatedAt?: string;
  createdAt: string;
}

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.email !== ADMIN_EMAIL) {
    redirect("/");
  }

  await connectDB();
  const users = await User.find({}).sort({ createdAt: -1 }).lean<UserDoc[]>();

  const serialized = users.map((u) => ({
    ...u,
    _id: String(u._id),
    createdAt: u.createdAt ? String(u.createdAt) : "",
    proActivatedAt: u.proActivatedAt ? String(u.proActivatedAt) : undefined,
  }));

  const proUsers = serialized.filter((u) => u.isPro).length;
  const freeUsers = serialized.length - proUsers;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-foreground">Admin Dashboard</h1>
      <p className="mb-8 text-muted">Total users & Pro status</p>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-border bg-secondary/30 p-5 text-center">
          <p className="text-3xl font-bold text-foreground">{serialized.length}</p>
          <p className="text-sm text-muted">Total Users</p>
        </div>
        <div className="rounded-xl border border-violet-500/30 bg-violet-500/10 p-5 text-center">
          <p className="text-3xl font-bold text-violet-400">{proUsers}</p>
          <p className="text-sm text-muted">Pro Users</p>
        </div>
        <div className="rounded-xl border border-border bg-secondary/30 p-5 text-center">
          <p className="text-3xl font-bold text-foreground">{freeUsers}</p>
          <p className="text-sm text-muted">Free Users</p>
        </div>
      </div>

      <AdminTable users={serialized} />
    </div>
  );
}
