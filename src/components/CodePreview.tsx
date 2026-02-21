"use client";

import { useState } from "react";

interface CodePreviewProps {
  title: string;
  description?: string;
  code: string;
  children: React.ReactNode;
  dark?: boolean;
}

export default function CodePreview({
  title,
  description,
  code,
  children,
  dark: initialDark = true,
}: CodePreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dark, setDark] = useState(initialDark);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors ${
        dark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
      }`}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between border-b px-5 py-3 ${
          dark ? "border-slate-800" : "border-slate-200"
        }`}
      >
        <div>
          <h3
            className={`text-sm font-semibold ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h3>
          {description && (
            <p className="mt-0.5 text-xs text-slate-500">{description}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Light / Dark preview toggle */}
          <button
            onClick={() => setDark(!dark)}
            title={dark ? "Switch to light preview" : "Switch to dark preview"}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition ${
              dark
                ? "bg-slate-800 text-slate-400 hover:text-white"
                : "bg-slate-100 text-slate-600 hover:text-slate-900"
            }`}
          >
            {dark ? (
              /* Sun icon — light mode pe switch karo */
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              /* Moon icon — dark mode pe switch karo */
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* View Code toggle */}
          <button
            onClick={() => setShowCode(!showCode)}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
              showCode
                ? dark
                  ? "bg-violet-500/20 text-violet-400"
                  : "bg-violet-100 text-violet-600"
                : dark
                ? "bg-slate-800 text-slate-400 hover:text-white"
                : "bg-slate-100 text-slate-600 hover:text-slate-900"
            }`}
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            {showCode ? "Hide Code" : "View Code"}
          </button>
        </div>
      </div>

      {/* Preview */}
      <div className="p-6">{children}</div>

      {/* Code Block */}
      {showCode && (
        <div className={`border-t ${dark ? "border-slate-800" : "border-slate-200"}`}>
          <div
            className={`flex items-center justify-between px-5 py-2 ${
              dark ? "bg-slate-950" : "bg-slate-50"
            }`}
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-wider ${
                dark ? "text-slate-600" : "text-slate-400"
              }`}
            >
              JSX / TSX
            </span>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1 rounded px-2 py-1 text-[10px] font-medium transition ${
                copied
                  ? "text-emerald-400"
                  : dark
                  ? "text-slate-500 hover:text-white"
                  : "text-slate-400 hover:text-slate-900"
              }`}
            >
              {copied ? (
                <>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Copy
                </>
              )}
            </button>
          </div>
          <div
            className={`max-h-80 overflow-auto px-5 pb-5 ${
              dark ? "bg-slate-950" : "bg-slate-50"
            }`}
          >
            <pre
              className={`font-mono text-xs leading-relaxed ${
                dark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {code}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
