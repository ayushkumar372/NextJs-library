import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

const ADMIN_EMAIL = "ayushkumar080800@gmail.com";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || session.user?.email !== ADMIN_EMAIL) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { email, isPro } = await req.json();

  await connectDB();
  await User.findOneAndUpdate(
    { email: email.toLowerCase() },
    { isPro, ...(isPro ? { proActivatedAt: new Date() } : { proActivatedAt: null }) }
  );

  return NextResponse.json({ success: true });
}
