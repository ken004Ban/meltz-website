import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";

interface NewsCardProps {
  title: string;
  slug: string;
  category: string;
  date: string;
  summary: string;
  image: string;
  featured?: boolean;
}

export default function NewsCard({
  title,
  slug,
  category,
  date,
  summary,
  image,
  featured = false,
}: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (featured) {
    return (
      <Link href={`/news/${slug}`} className="group block">
        <div className="relative h-80 md:h-96 overflow-hidden bg-meltz-light">
          <OptimizedImage
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="transform group-hover:scale-105 transition-transform duration-500"
            overlayClassName="bg-gradient-to-t from-meltz-blue/80 via-meltz-blue/30 to-transparent"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
            <span className="inline-block px-3 py-1 bg-meltz-accent text-white text-xs font-bold tracking-wider uppercase mb-3">
              {category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-sm text-white/80">{formattedDate}</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/news/${slug}`} className="group block">
      <div className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative h-48 bg-meltz-light overflow-hidden">
          <OptimizedImage
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold tracking-wider uppercase text-meltz-medium">
              {category}
            </span>
            <span className="text-xs text-meltz-gray">{formattedDate}</span>
          </div>
          <h3 className="text-lg font-bold text-meltz-charcoal mb-2 leading-snug group-hover:text-meltz-blue transition-colors">
            {title}
          </h3>
          <p className="text-sm text-meltz-gray leading-relaxed flex-1">
            {summary}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-meltz-blue mt-4 group-hover:gap-2 transition-all">
            Read More
            <svg
              className="w-3.5 h-3.5"
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
          </span>
        </div>
      </div>
    </Link>
  );
}