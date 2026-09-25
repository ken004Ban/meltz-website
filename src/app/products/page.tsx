import type { Metadata } from "next";
import { products } from "@/data/products";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import OptimizedImage from "@/components/OptimizedImage";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: "Products — Grinding Media",
  description:
    "Explore ME LongTeng Grinding Media's range of high-performance steel grinding media designed for demanding mineral processing environments.",
  alternates: {
    canonical: `${baseUrl}/products`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/products`,
    title: "Products — Grinding Media | MELTZ",
    description:
      "Explore our range of high-performance steel grinding media designed for demanding mineral processing environments.",
    images: [
      {
        url: `${baseUrl}/images/plant4.jpg`,
        width: 1200,
        height: 630,
        alt: "MELTZ Grinding Media Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products — Grinding Media | MELTZ",
    description:
      "Explore our range of high-performance steel grinding media designed for demanding mineral processing environments.",
    images: [`${baseUrl}/images/plant4.jpg`],
  },
};

export default function ProductsPage() {
  const productListJsonLd = products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.fullDescription,
    image: `${baseUrl}${product.image}`,
    brand: {
      "@type": "Brand",
      name: "MELTZ",
    },
    manufacturer: {
      "@type": "Organization",
      name: "ME LongTeng Grinding Media (Zambia) Ltd",
      url: baseUrl,
    },
    category: "Grinding Media",
    application: product.applications,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "0.00",
      description: "Contact MELTZ for pricing and technical specifications",
      url: `${baseUrl}/products#${product.slug}`,
    },
  }));

  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Products" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      <PageHero
        kicker="Products"
        title="Grinding Media Built for Demanding Applications"
        description="High-performance steel grinding media designed for demanding mineral-processing environments."
        image="/images/plant4.jpg"
        breadcrumbs={[{ label: "Products" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              id={product.slug}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-24`}
            >
              <ScrollReveal className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] bg-meltz-light overflow-hidden">
                  <OptimizedImage
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={150} className={index % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-meltz-medium mb-3 block">
                  Product 0{index + 1}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-meltz-charcoal leading-tight tracking-tight mb-6">
                  {product.name}
                </h2>
                <p className="text-meltz-gray leading-relaxed mb-6">
                  {product.fullDescription}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-meltz-charcoal"
                    >
                      <svg
                        className="w-5 h-5 text-meltz-accent shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <h3 className="text-sm font-bold text-meltz-charcoal uppercase tracking-wider mb-3">
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="text-xs font-medium px-3 py-1.5 bg-meltz-light text-meltz-blue"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                <CTAButton label="REQUEST INFORMATION" href="/contact" />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-meltz-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Note"
              title="Technical Specifications"
              description="Our grinding media are produced to precise metallurgical specifications."
            />
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-meltz-gray leading-relaxed mb-6">
                Zambia facility produces forged balls in sizes 60mm – 80mm and
                100mm – 160mm, with additional sizes to be added as the
                production facility expands. We work closely with mining
                engineering teams to specify the optimal grinding media for
                each application. Contact our team to discuss your
                requirements.
              </p>
              <p className="text-xs text-meltz-gray italic">
                Detailed technical specifications are available on request.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
