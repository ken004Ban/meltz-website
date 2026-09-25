import Link from "next/link";
import OptimizedImage from "@/components/OptimizedImage";

interface ProductCardProps {
  name: string;
  slug: string;
  shortDescription: string;
  applications: string[];
  image: string;
}

export default function ProductCard({
  name,
  slug,
  shortDescription,
  applications,
  image,
}: ProductCardProps) {
  return (
    <div className="group bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-56 bg-meltz-light overflow-hidden">
        <OptimizedImage
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transform group-hover:scale-105 transition-transform duration-500"
          overlayClassName="bg-gradient-to-t from-meltz-blue/30 to-transparent"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-meltz-charcoal mb-3">
          {name}
        </h3>
        <p className="text-sm text-meltz-gray leading-relaxed mb-4">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {applications.slice(0, 3).map((app) => (
            <span
              key={app}
              className="text-xs font-medium px-2.5 py-1 bg-meltz-light text-meltz-blue"
            >
              {app}
            </span>
          ))}
        </div>

        <Link
          href={`/products#${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-meltz-blue hover:text-meltz-blue-dark transition-colors group/link"
        >
          Learn More
          <svg
            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
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
      </div>
    </div>
  );
}