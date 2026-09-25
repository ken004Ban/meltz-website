import Breadcrumb from "@/components/Breadcrumb";
import OptimizedImage from "@/components/OptimizedImage";

interface PageHeroProps {
  title: string;
  kicker?: string;
  description?: string;
  image?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({
  title,
  kicker,
  description,
  image,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative pt-16 lg:pt-20 overflow-hidden bg-meltz-blue">
      {image && (
        <>
          <div className="absolute inset-0">
            <OptimizedImage
              src={image}
              alt=""
              fill
              sizes="100vw"
              priority
              className="opacity-45"
              overlayClassName="bg-gradient-to-r from-meltz-blue/70 via-meltz-blue/60 to-meltz-blue-dark/40"
            />
          </div>
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-meltz-blue to-meltz-blue-dark" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        {kicker && (
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-5">
            {kicker}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}