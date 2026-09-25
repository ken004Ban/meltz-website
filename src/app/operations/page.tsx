import type { Metadata } from "next";
import { company } from "@/data/company";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import OptimizedImage from "@/components/OptimizedImage";

const baseUrl = "https://www.meltz.co.zm";

const operationImages = [
  { src: "/images/operations/op-1.jpg", ratio: 1280 / 960 },
  { src: "/images/operations/op-2.jpg", ratio: 1280 / 960 },
  { src: "/images/operations/op-3.jpg", ratio: 1280 / 960 },
  { src: "/images/plant.jpg", ratio: 1309 / 1202 },
  { src: "/images/plant.jpg", ratio: 1309 / 1202 },
];

export const metadata: Metadata = {
  title: "Our Operations",
  description:
    "Discover ME LongTeng Grinding Media's manufacturing operations in Kalumbila, Zambia — engineered for industrial performance and regional mining support.",
  alternates: {
    canonical: `${baseUrl}/operations`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/operations`,
    title: "Our Operations | MELTZ",
    description:
      "Discover our manufacturing operations in Kalumbila, Zambia — engineered for industrial performance and regional mining support.",
    images: [
      {
        url: `${baseUrl}/images/plant4.jpg`,
        width: 1200,
        height: 630,
        alt: "MELTZ Operations in Kalumbila, Zambia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Operations | MELTZ",
    description:
      "Discover our manufacturing operations in Kalumbila, Zambia — engineered for industrial performance.",
    images: [`${baseUrl}/images/plant4.jpg`],
  },
};

export default function OperationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Operations" }]} />
      <PageHero
        kicker="Operations"
        title="Engineered for Industrial Performance"
        description="Our operations are designed to deliver reliable, high-quality grinding media to the mining industry."
        image="/images/plant4.jpg"
        breadcrumbs={[{ label: "Operations" }]}
      />

      {/* Operations number sections */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="How We Operate"
              title="Operations Built Around Quality and Reliability"
              description="From raw material to finished grinding media, every stage of our operation is engineered for consistency and performance."
            />
          </ScrollReveal>

          <div className="space-y-16">
            {company.operations.map((op, index) => (
              <ScrollReveal key={op.number}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="flex items-start gap-6">
                    <span className="text-5xl font-bold text-meltz-medium/15 shrink-0">
                      {op.number}
                    </span>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-meltz-charcoal leading-tight mb-3">
                        {op.title}
                      </h2>
                      <p className="text-meltz-gray leading-relaxed">
                        {op.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className="bg-meltz-light overflow-hidden"
                    style={{ aspectRatio: operationImages[index].ratio }}
                  >
                    <OptimizedImage
                      src={operationImages[index].src}
                      alt={op.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operations at a Glance */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-meltz-blue-dark" />
        <OptimizedImage
          src="/images/operations/op-6.jpg"
          alt=""
          fill
          sizes="100vw"
          className="opacity-15"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-meltz-accent mb-3 block">
                Operations at a Glance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                Delivering at Scale
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {company.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white">{stat.value}</div>
                  <div className="mt-2 text-sm font-bold text-meltz-accent uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-white/60">{stat.note}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-meltz-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Regional Presence"
              title="Positioned at the Heart of Zambia's Mining Region"
              description="Kalumbila is strategically located in North-Western Province, within one of Africa's most significant mining areas."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative aspect-[4/3] bg-meltz-light overflow-hidden">
                <iframe
                  title="MELTZ facility location in Kalumbila, North-Western Province, Zambia"
                  src="https://www.google.com/maps?q=-12.178554,25.442768&z=11&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://www.google.com/maps?q=-12.178554,25.442768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-meltz-blue text-white text-xs font-bold px-4 py-2 shadow hover:bg-meltz-blue-dark transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-meltz-charcoal">
                  Why Location Matters
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Proximity to Mines",
                      description:
                        "Positioned near major copper mining operations, enabling efficient and responsive supply.",
                    },
                    {
                      title: "Regional Infrastructure",
                      description:
                        "Access to the regional road network connecting mining areas across North-Western Province.",
                    },
                    {
                      title: "In-Country Production",
                      description:
                        "Manufacturing within Zambia supports local industry and reduces import dependence.",
                    },
                    {
                      title: "Southern African Reach",
                      description:
                        "Well-placed to support mining operations across Zambia and the broader region.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-meltz-medium shrink-0 mt-0.5"
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
                      <div>
                        <h4 className="text-sm font-bold text-meltz-charcoal">
                          {item.title}
                        </h4>
                        <p className="text-sm text-meltz-gray leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Security note */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            subtitle="Note"
            title="Facility Information"
            description="For detailed facility information and site visits, please contact our team directly."
          />
          <p className="text-xs text-meltz-gray italic mb-8">
            [Specific facility, security, and site details are not published
            and are available on request.]
          </p>
          <CTAButton label="CONTACT US" href="/contact" />
        </div>
      </section>
    </>
  );
}
