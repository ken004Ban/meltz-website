import type { Metadata } from "next";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { news } from "@/data/news";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ProductCard from "@/components/ProductCard";
import NewsCard from "@/components/NewsCard";
import StatCard from "@/components/StatCard";
import CapabilityStrip from "@/components/CapabilityStrip";
import OptimizedImage from "@/components/OptimizedImage";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title:
      "ME LongTeng Grinding Media (Zambia) Ltd | Grinding Media Manufacturing",
    description:
      "Manufacturing high-performance grinding media for the mining industry from Kalumbila, Zambia.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ME LongTeng Grinding Media (Zambia) Ltd | Grinding Media Manufacturing",
    description:
      "Manufacturing high-performance grinding media for the mining industry from Kalumbila, Zambia.",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-meltz-blue">
          <OptimizedImage
            src="/images/plant4.jpg"
            alt="Industrial mining and grinding media manufacturing"
            fill
            sizes="100vw"
            priority
            className="opacity-45"
            overlayClassName="bg-gradient-to-r from-meltz-blue/80 via-meltz-blue/65 to-meltz-blue/40"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Kalumbila, Zambia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              ENGINEERING GRINDING MEDIA FOR A STRONGER MINING INDUSTRY
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
              {company.heroSubtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                label="EXPLORE OUR PRODUCTS"
                href="/products"
                variant="white"
              />
              <CTAButton
                label="CONTACT OUR TEAM"
                href="/contact"
                variant="ghost"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
            aria-label="Scroll down to learn more about MELTZ"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
          </a>
        </div>
      </section>

      {/* Capability Strip */}
      <CapabilityStrip />

      {/* About Section */}
      <section id="about" className="py-20 lg:py-28 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <SectionHeading
                title="A Strategic Partner in Mining Manufacturing"
                description={company.about.description}
                align="left"
              />
              <p className="text-meltz-gray leading-relaxed mb-6">
                {company.about.partnership}
              </p>
              <CTAButton label="DISCOVER MELTZ" href="/about" />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="aspect-[4/3] bg-meltz-light overflow-hidden">
                  <OptimizedImage
                    src="/images/about-factory.svg"
                    alt="MELTZ manufacturing facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-meltz-accent/10 border-2 border-meltz-accent/20 hidden lg:block" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-meltz-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {[
              { term: "Country", value: "Zambia", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
              { term: "Location", value: "Kalumbila", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
              { term: "Product", value: "Grinding Media", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { term: "Sector", value: "Mining Manufacturing", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { term: "Reach", value: "Regional Supply", icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" },
            ].map((fact) => (
              <div key={fact.term} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-meltz-medium"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={fact.icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-meltz-gray mb-1">
                    {fact.term}
                  </div>
                  <div className="text-sm font-bold text-meltz-charcoal">
                    {fact.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 border-t border-gray-200 pt-10">
            {company.stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <StatCard value={stat.value} label={stat.label} note={stat.note} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Products"
              title="Grinding Media Built for Demanding Applications"
              description="High-performance steel grinding media designed for demanding mineral-processing environments."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 150}>
                <ProductCard
                  name={product.name}
                  slug={product.slug}
                  shortDescription={product.shortDescription}
                  applications={product.applications}
                  image={product.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mining Process */}
      <section className="py-20 lg:py-28 bg-meltz-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="The Process"
              title="Supporting the Mineral Processing Journey"
              description="Understanding where grinding media fits in the mining value chain."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {company.miningProcess.map((step, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="relative bg-white p-6 h-full border border-gray-200 hover:border-meltz-medium/30 transition-colors group">
                  <div className="text-3xl font-bold text-meltz-medium/20 mb-3 group-hover:text-meltz-medium/40 transition-colors">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-meltz-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-meltz-gray leading-relaxed">
                    {step.description}
                  </p>
                  {index < company.miningProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-meltz-medium/30" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-80 lg:h-auto min-h-[400px]">
            <OptimizedImage
              src="/images/plant.jpg"
              alt="MELTZ manufacturing plant in Kalumbila"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              overlayClassName="bg-meltz-blue/20"
            />
          </div>

          <div className="flex items-center bg-meltz-blue text-white py-16 lg:py-24">
            <div className="px-8 lg:px-16 max-w-xl">
              <ScrollReveal>
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-meltz-accent mb-4 block">
                  Manufacturing
                </span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
                  Manufacturing in Zambia&apos;s Mining Heartland
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Strategically located in Kalumbila, MELTZ manufactures
                  grinding media in the heart of Zambia&apos;s mining region.
                  This proximity to major mining operations ensures efficient
                  supply, reduced logistics costs, and responsive customer
                  service.
                </p>
                <p className="text-white/70 leading-relaxed mb-8">
                  Our facility combines international manufacturing expertise
                  with local capability, creating a reliable supply source for
                  the region&apos;s mining industry.
                </p>
                <CTAButton
                  label="OUR OPERATIONS"
                  href="/operations"
                  variant="white"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Technology */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Quality & Technology"
              title="Quality That Performs Under Pressure"
              description="Our quality framework ensures consistent, reliable grinding media for demanding mining applications."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Metallurgical Control",
                description:
                  "Controlled material composition and heat treatment processes ensure optimal hardness and toughness.",
                icon: "M19.428 15.428a2 2 0 001.022-.548l2.013-2.013a2 2 0 00-2.828-2.828l-1.022.548a2 2 0 00-.548 1.022l-2.013 2.013a2 2 0 002.828 2.828l1.022-.548z",
              },
              {
                title: "Manufacturing Consistency",
                description:
                  "Process control and repeatability ensure every batch meets specification requirements.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Quality Assurance",
                description:
                  "Systematic inspection and testing at every stage of the manufacturing process.",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
              },
              {
                title: "Performance",
                description:
                  "Product quality directly translates to mining productivity and reduced total cost of ownership.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="p-6 border border-gray-200 hover:border-meltz-medium/30 transition-colors h-full group">
                  <div className="w-12 h-12 bg-meltz-blue/5 flex items-center justify-center mb-4 group-hover:bg-meltz-blue/10 transition-colors">
                    <svg
                      className="w-6 h-6 text-meltz-medium"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-meltz-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-meltz-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <CTAButton
              label="QUALITY & TECHNOLOGY"
              href="/quality"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 lg:py-28 bg-meltz-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Sustainability"
              title="Building a Responsible Industrial Future"
              description="Our commitment to people, safety, environment, and community."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.sustainability.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-8 border border-gray-200 hover:border-meltz-medium/30 transition-colors h-full">
                  <div className="w-12 h-12 bg-meltz-blue/5 flex items-center justify-center mb-5">
                    <svg
                      className="w-6 h-6 text-meltz-medium"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={
                          item.icon === "users"
                            ? "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            : item.icon === "shield"
                              ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              : item.icon === "leaf"
                                ? "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                : "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        }
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-meltz-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-meltz-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <CTAButton
              label="OUR APPROACH"
              href="/sustainability"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-20 lg:py-28 bg-meltz-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeading
              subtitle="Careers"
              title="Build Your Career in Industrial Manufacturing"
              description="Join a growing team at the intersection of mining and advanced manufacturing."
              light
            />
            <CTAButton
              label="VIEW OPPORTUNITIES"
              href="/careers"
              variant="white"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* News */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="News"
              title="Latest from MELTZ"
              description="Company updates, industry insights, and community engagement."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollReveal className="lg:col-span-1">
              <NewsCard
                title={news[0].title}
                slug={news[0].slug}
                category={news[0].category}
                date={news[0].date}
                summary={news[0].summary}
                image={news[0].image}
                featured
              />
            </ScrollReveal>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {news.slice(1, 5).map((article, index) => (
                <ScrollReveal key={article.id} delay={index * 100}>
                  <NewsCard
                    title={article.title}
                    slug={article.slug}
                    category={article.category}
                    date={article.date}
                    summary={article.summary}
                    image={article.image}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <CTAButton
              label="VIEW ALL NEWS"
              href="/news"
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-meltz-blue-dark" />
        <OptimizedImage
          src="/images/plant4.jpg"
          alt=""
          fill
          sizes="100vw"
          className="opacity-20"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
              Ready to Discuss Your Grinding Media Requirements?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Our team is ready to help you find the right grinding media
              solution for your mining operation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <CTAButton label="CONTACT US" href="/contact" variant="white" />
              <CTAButton label="EXPLORE PRODUCTS" href="/products" variant="ghost" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
