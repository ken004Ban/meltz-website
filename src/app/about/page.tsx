import type { Metadata } from "next";
import { company } from "@/data/company";
import { team } from "@/data/team";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import OptimizedImage from "@/components/OptimizedImage";
import LeadershipTable from "@/components/LeadershipTable";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ME LongTeng Grinding Media (Zambia) Ltd — a specialized grinding media manufacturer in Kalumbila, Zambia, part of the ME Elecmetal and Longteng Special Steel partnership.",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/about`,
    title: "About Us | MELTZ — Grinding Media Manufacturer in Kalumbila",
    description:
      "Learn about ME LongTeng Grinding Media (Zambia) Ltd — a specialized grinding media manufacturer in Kalumbila, Zambia.",
    images: [
      {
        url: `${baseUrl}/images/plant4.jpg`,
        width: 1200,
        height: 630,
        alt: "About ME LongTeng Grinding Media (Zambia) Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | MELTZ",
    description:
      "Learn about ME LongTeng Grinding Media (Zambia) Ltd — a specialized grinding media manufacturer in Kalumbila, Zambia.",
    images: [`${baseUrl}/images/plant4.jpg`],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "About Us" }]} />
      <PageHero
        kicker="About Us"
        title="A Strategic Manufacturing Partner in the Mining Industry"
        description="ME LongTeng Grinding Media (Zambia) Ltd is a specialized manufacturing operation focused on producing grinding media for mining applications."
        image="/images/plant4.jpg"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <SectionHeading
                subtitle="Our Story"
                title="Built on a Strong Foundation"
                align="left"
              />
              <div className="text-meltz-gray leading-relaxed space-y-4">
                <p>{company.about.description}</p>
                <p>{company.about.partnership}</p>
                <p>
                  Strategically located in Kalumbila, our facility is designed
                  to serve the specific needs of mining operations in Zambia
                  and the broader Southern African region.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="aspect-[4/3] bg-meltz-light overflow-hidden">
                <OptimizedImage
                  src="/images/plant.jpg"
                  alt="MELTZ manufacturing facility in Kalumbila"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Partnership */}
      <section className="py-20 bg-meltz-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Partnership"
              title="An International Manufacturing Partnership"
              description="MELTZ brings together world-class grinding media expertise and advanced metallurgical technology."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Grinding Media Expertise",
                description:
                  "Access to decades of grinding media manufacturing knowledge and technical expertise from the international ME Elecmetal network.",
              },
              {
                title: "Advanced Metallurgy",
                description:
                  "Leveraging advanced metallurgical processes and special steel technology to deliver high-performance products.",
              },
              {
                title: "Zambian Manufacturing",
                description:
                  "A local Zambian manufacturing base providing regional supply capability and proximity to mining operations.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white p-8 border border-gray-200 h-full">
                  <div className="w-10 h-10 flex items-center justify-center mb-4">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-meltz-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-meltz-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section className="py-20 lg:py-28 bg-meltz-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Purpose"
              title="Reliable Grinding Media. Responsible Manufacturing."
              light
            />
            <p className="text-white/80 leading-relaxed text-lg max-w-2xl mx-auto">
              {company.about.purpose}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Values"
              title="The Principles That Guide Us"
              description="Our proposed values reflect our commitment to responsible, high-quality manufacturing."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {company.values.map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="p-6 border border-gray-200 hover:border-meltz-medium/30 hover:bg-meltz-light transition-all h-full">
                  <div className="w-8 h-8 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-meltz-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-meltz-charcoal mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-meltz-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our People */}
      <section className="py-20 bg-meltz-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] bg-meltz-blue/10 overflow-hidden">
                <OptimizedImage
                  src="/images/team.jpg"
                  alt="The MELTZ team in Kalumbila"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <SectionHeading
                subtitle="Our People"
                title="The Team Behind Every Product"
                align="left"
              />
              <p className="text-meltz-gray leading-relaxed mb-4">
                Our people are the foundation of our business. From
                metallurgists and engineers to production operators and
                support teams, every team member contributes to the quality
                and reliability of our products.
              </p>
              <p className="text-meltz-gray leading-relaxed mb-8">
                We are committed to developing local talent, providing
                training and creating opportunities for meaningful careers in
                industrial manufacturing.
              </p>
              <CTAButton label="CAREERS AT MELTZ" href="/careers" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Leadership"
              title="Meet Our Management Team"
              description="The leadership team guiding ME LongTeng Grinding Media in Zambia."
            />
          </ScrollReveal>
          <ScrollReveal>
            <LeadershipTable />
          </ScrollReveal>
        </div>
      </section>

      {/* Our Team Gallery */}
      <section className="py-20 bg-meltz-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Team"
              title="The People Behind Every Product"
              description="A team of professionals committed to quality grinding media and responsible manufacturing."
            />
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {team.groupPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden bg-meltz-blue/10"
                >
                  <OptimizedImage
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Role in Mining */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Role in Mining"
              title="Supporting the Industry That Powers Economies"
              description="Grinding media are essential consumables in mineral processing, and our role is to supply them reliably and consistently."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Reliable Supply",
                description:
                  "A dependable regional source of grinding media, reducing supply chain risk for mining operations.",
              },
              {
                title: "Technical Partnership",
                description:
                  "Working alongside mining engineers to match media specifications to specific processing requirements.",
              },
              {
                title: "Industrial Growth",
                description:
                  "Contributing to Zambia's industrial base and the strengthening of the regional mining ecosystem.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="border-l-4 border-meltz-accent bg-meltz-light p-8 h-full">
                  <h3 className="text-xl font-bold text-meltz-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-meltz-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our History"
              title="A Journey of Growth and Partnership"
            />
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {[
              {
                year: "1993",
                title: "The Longteng Group Established",
                description:
                  "The Longteng Group is founded in China, establishing a leading steel manufacturing operation covering over 1.6 million square meters.",
              },
              {
                year: "2009",
                title: "ME Super SAG and ME Ultra Grind Launch",
                description:
                  "ME Elecmetal's new high-performance products begin to be commercialized worldwide through exclusive manufacturing agreements with Changshu Longteng Special Steel.",
              },
              {
                year: "2011",
                title: "ME Long Teng Joint Venture Founded",
                description:
                  "ME Elecmetal and Changshu Longteng Special Steel incorporate the 50/50 joint venture 'ME Long Teng Grinding Media' and begin construction of a modern plant in Changshu, China.",
              },
              {
                year: "2018",
                title: "China Plant Expansion Complete",
                description:
                  "The fifth phase of the China manufacturing plant is finalized, reaching a total capacity of about 500,000 metric tons of grinding balls.",
              },
              {
                year: "Today",
                title: "Zambia Facility — Most Advanced in Africa",
                description:
                  "Our plant in Kalumbila, Zambia, is the most technologically advanced ball manufacturing facility in Africa with over 100,000 MT installed capacity, complemented by a global grinding media capacity of 600,000+ tons.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 100}>
                <div className="relative pl-8 pb-12 border-l-2 border-meltz-medium/20 last:pb-0">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-meltz-accent rounded-full border-4 border-white shadow" />
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-meltz-medium">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-meltz-charcoal mt-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-meltz-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
