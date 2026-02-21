"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </div>
          <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Have a question, feedback, or need help? We typically respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">

          {/* Left — Info cards */}
          <div className="space-y-6 lg:col-span-2">

            {/* Email */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Email Us</h3>
              <p className="mt-1 text-sm text-muted">For support, billing, or general queries.</p>
              <a
                href="mailto:ayushkumar080800@gmail.com"
                className="mt-3 block text-sm font-medium text-primary hover:underline"
              >
                ayushkumar080800@gmail.com
              </a>
            </div>

            {/* Response time */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Response Time</h3>
              <p className="mt-1 text-sm text-muted">We reply within</p>
              <p className="mt-1 text-2xl font-bold text-emerald-500">24 hrs</p>
            </div>

            {/* Pro support */}
            <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                <svg className="h-6 w-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">Pro Support</h3>
              <p className="mt-1 text-sm text-muted">
                Pro members get priority support with faster response times.
              </p>
            </div>

            {/* FAQ quick links */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Common Topics</h3>
              <ul className="mt-3 space-y-2">
                {[
                  "Refund / Money-back",
                  "Pro access not working",
                  "Component not rendering",
                  "Billing question",
                  "Feature request",
                ].map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — Contact form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="text-xl font-bold text-foreground">Send a Message</h2>
              <p className="mt-1 text-sm text-muted">Fill the form below and we'll get back to you.</p>

              {status === "sent" ? (
                <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                    <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Message Sent!</h3>
                  <p className="mt-2 text-sm text-muted">We'll reply to your email within 24 hours.</p>
                  <button
                    onClick={() => { setForm({ name: "", email: "", subject: "", message: "" }); setStatus("idle"); }}
                    className="mt-6 rounded-xl bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-dark"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Your Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ayush Kumar"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-foreground">
                        Your Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="e.g. Pro access issue, Refund request..."
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your issue or question in detail..."
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-sm text-red-500">
                      Failed to send. Please email directly at{" "}
                      <a href="mailto:ayushkumar080800@gmail.com" className="underline">
                        ayushkumar080800@gmail.com
                      </a>
                    </p>
                  )}

                  <p className="text-center text-xs text-muted">
                    Or email directly at{" "}
                    <a href="mailto:ayushkumar080800@gmail.com" className="text-primary hover:underline">
                      ayushkumar080800@gmail.com
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
