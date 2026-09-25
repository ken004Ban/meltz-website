import Image from "next/image";

interface LogoProps {
  light?: boolean;
  compact?: boolean;
  large?: boolean;
}

export default function Logo({ light = false, compact = false, large = false }: LogoProps) {
  const ratio = 1447 / 420;
  const height = compact ? 36 : large ? 80 : 56;
  const width = Math.round(height * ratio);

  return (
    <div className="flex items-center shrink-0">
      <Image
        src="/images/meltz-logo.png"
        alt="ME LongTeng Grinding Media (Zambia) Ltd"
        width={width}
        height={height}
        className={`w-auto ${light ? "brightness-0 invert" : ""} ${compact ? "h-9" : large ? "h-20" : "h-14"}`}
        priority
      />
    </div>
  );
}