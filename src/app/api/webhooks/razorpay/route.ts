import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("x-razorpay-signature") ?? "";
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET!;

  // Verify HMAC signature
  const expectedSig = crypto
    .createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  if (signature !== expectedSig) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const payload = JSON.parse(body);
  const event = payload.event;

  if (event === "payment.captured") {
    const payment = payload.payload?.payment?.entity;
    const email = payment?.email?.toLowerCase();

    if (email) {
      try {
        await connectDB();
        await User.findOneAndUpdate(
          { email },
          { isPro: true, proActivatedAt: new Date() }
        );
        console.log(`✅ Pro activated for: ${email}`);
      } catch (err) {
        console.error("Webhook DB error:", err);
        return NextResponse.json({ error: "DB error" }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}
