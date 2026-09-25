import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";

interface ImageTextSplitProps {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  reversed?: boolean;
}

export default function ImageTextSplit({
  imageUrl,
  imageAlt,
  title,
  description,
  ctaLabel,
  ctaHref,
  reversed = false,
}: ImageTextSplitProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch ${
        reversed ? "" : ""
      }`}
    >
      <div
        className={`relative h-80 lg:h-[500px] overflow-hidden bg-meltz-light ${
          reversed ? "lg:order-2" : ""
        }`}
        role="img"
        aria-label={imageAlt}
      >
        <OptimizedImage
          src={imageUrl}
          alt={imageAlt ?? title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          overlayClassName="bg-meltz-blue/10"
        />
      </div>

      <div
        className={`flex items-center bg-meltz-light ${
          reversed ? "lg:order-1" : ""
        }`}
      >
        <div className="p-8 lg:p-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-meltz-charcoal leading-tight tracking-tight mb-6">
            {title}
          </h2>
          <div className="text-meltz-gray leading-relaxed whitespace-pre-line">
            {description}
          </div>
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-sm font-semibold bg-meltz-blue text-white hover:bg-meltz-blue-dark transition-colors"
            >
              {ctaLabel}
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
          )}
        </div>
      </div>
    </div>
  );
}