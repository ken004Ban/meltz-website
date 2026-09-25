interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  light = false,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {subtitle && (
        <span
          className={`text-xs font-bold tracking-[0.25em] uppercase mb-3 block ${
            light ? "text-meltz-medium" : "text-meltz-medium"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight ${
          light ? "text-white" : "text-meltz-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-meltz-gray"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
