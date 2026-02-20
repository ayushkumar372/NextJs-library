const RAZORPAY_LINK = "https://rzp.io/rzp/XfnL9M7F";

export default function BuyButton({
  className,
  size = "md",
  children = "Get Lifetime Access — ₹69",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}) {
  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <a
      href={RAZORPAY_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 font-bold text-white shadow-xl shadow-violet-500/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/60 ${sizeClasses[size]} ${className ?? ""}`}
    >
      <svg
        className="h-4 w-4 shrink-0"
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
      {children}
    </a>
  );
}
