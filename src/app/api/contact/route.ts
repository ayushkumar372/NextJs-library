import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"UIDrops Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[UIDrops Contact] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #6b7280;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px; font-weight: bold; color: #6b7280;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #6b7280;">Subject:</td>
              <td style="padding: 8px;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9fafb; border-radius: 8px;">
            <p style="font-weight: bold; color: #6b7280; margin: 0 0 8px;">Message:</p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 16px; color: #9ca3af; font-size: 12px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
