import Link from "next/link";

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "white" | "ghost";
  className?: string;
}

export default function CTAButton({
  label,
  href,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200";

  const variantClasses = {
    primary: "bg-meltz-blue text-white hover:bg-meltz-blue-dark",
    secondary:
      "border-2 border-meltz-blue text-meltz-blue hover:bg-meltz-blue hover:text-white",
    white: "bg-white text-meltz-blue hover:bg-gray-100",
    ghost:
      "border-[1.5px] border-white/50 text-white hover:bg-white hover:text-meltz-blue",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {label}
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </Link>
  );
}