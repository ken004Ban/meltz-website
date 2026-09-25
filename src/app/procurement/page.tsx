import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import OptimizedImage from "@/components/OptimizedImage";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: "Procurement | ME Long Teng Grinding Media (Zambia) Limited",
  description:
    "Learn about ME Long Teng Grinding Media (Zambia) Limited's procurement approach, supplier expectations, responsible procurement principles and future procurement opportunities.",
  alternates: {
    canonical: `${baseUrl}/procurement`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/procurement`,
    title: "Procurement | MELTZ",
    description:
      "Our procurement approach — responsible, transparent and value-driven partnerships for reliable operations.",
    images: [
      {
        url: `${baseUrl}/images/gallery/facility-plant.jpg`,
        width: 1200,
        height: 630,
        alt: "MELTZ Procurement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Procurement | MELTZ",
    description:
      "Our procurement approach — responsible, transparent and value-driven partnerships.",
    images: [`${baseUrl}/images/gallery/facility-plant.jpg`],
  },
};

const procureCategories = [
  {
    title: "Industrial Supplies & Equipment",
    description:
      "Plant equipment, spare parts and industrial consumables supporting manufacturing operations.",
    icon: "M19.428 15.428a2 2 0 001.022-.548l2.013-2.013a2 2 0 00-2.828-2.828l-1.022.548a2 2 0 00-.548 1.022l-2.013 2.013a2 2 0 002.828 2.828l1.022-.548z",
  },
  {
    title: "Engineering & Maintenance Services",
    description:
      "Mechanical, electrical and process engineering support for plant reliability.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
  {
    title: "Raw Materials & Consumables",
    description:
      "Materials and consumables required for steel ball manufacturing and production processes.",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
  {
    title: "Personal Protective Equipment (PPE)",
    description:
      "Approved safety equipment for our people working across the facility.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Transport & Logistics",
    description:
      "Freight, haulage and logistics services supporting inbound supply and outbound delivery.",
    icon: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0",
  },
  {
    title: "Information & Communication Technology",
    description:
      "IT hardware, software, connectivity and related technology services.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Professional & Technical Services",
    description:
      "Consulting, advisory and specialist technical services supporting our operations.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Facilities & General Services",
    description:
      "Facility management, site services and general operational support.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Environmental & Safety Services",
    description:
      "Environmental compliance, safety services and related consultancy.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Other Operational Requirements",
    description:
      "Additional goods and services that may arise to meet changing operational needs.",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
];

const procurementPrinciples = [
  {
    title: "Integrity",
    description:
      "We expect honesty, professionalism and ethical conduct throughout our business relationships.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Quality",
    description:
      "Goods and services should meet the required technical, operational and quality standards.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Safety",
    description:
      "Health, safety and environmental considerations are important factors in our supplier and service-provider relationships.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Fairness & Transparency",
    description:
      "We seek to maintain fair and transparent procurement practices consistent with applicable requirements and company procedures.",
    icon: "M3 6l9 4m0 0L21 6m-9 4v9m-8-5a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v6a2 2 0 01-2 2m-16 0a2 2 0 002 2h12a2 2 0 002-2m-16 0v4m0-4h16v4",
  },
  {
    title: "Value for Money",
    description:
      "Procurement decisions consider quality, reliability, technical suitability, service capability and overall commercial value.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Local Participation",
    description:
      "Where appropriate and subject to applicable requirements, we seek opportunities to support qualified Zambian businesses and local supply chains.",
    icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9m0 0v2m0 0h2m-2 0H9",
  },
];

export default function ProcurementPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Procurement" }]} />
      <PageHero
        kicker="Procurement"
        title="Procurement"
        description="Building reliable partnerships through responsible, transparent and value-driven procurement."
        image="/images/plant4.jpg"
        breadcrumbs={[{ label: "Procurement" }]}
      />

      {/* Our Approach */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Approach"
              title="A Responsible Approach to Procurement"
            />
            <div className="text-meltz-gray leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                At ME Long Teng Grinding Media (Zambia) Limited, we recognize
                procurement as an important part of maintaining reliable,
                efficient and sustainable operations.
              </p>
              <p>
                Our approach is focused on obtaining quality goods and services
                that meet our operational requirements while promoting
                responsible business practices, transparency, integrity and
                value for money.
              </p>
              <p>
                We aim to build professional and mutually beneficial
                relationships with suppliers and service providers who share
                our commitment to quality, safety, ethical conduct and
                operational excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Procure */}
      <section className="py-20 lg:py-28 bg-meltz-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="What We Procure"
              title="Goods & Services Across Our Operations"
              description="Our procurement requirements may include a wide range of goods and services supporting our manufacturing and operational activities."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {procureCategories.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-white p-6 h-full border border-gray-200 hover:border-meltz-medium/30 hover:shadow-lg transition-all group">
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
        </div>
      </section>

      {/* Our Procurement Principles */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Procurement Principles"
              title="The Principles That Guide How We Procure"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {procurementPrinciples.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 100}>
                <div className="p-6 border-l-4 border-meltz-accent bg-meltz-light hover:bg-white hover:shadow-lg transition-all h-full">
                  <div className="w-10 h-10 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-meltz-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={principle.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-meltz-charcoal mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-meltz-gray leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Working With Suppliers */}
      <section className="py-20 bg-meltz-light border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Working With Suppliers"
              title="What We Value in Our Suppliers"
            />
            <div className="text-meltz-gray leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                We value suppliers and service providers who demonstrate
                reliability, technical capability, competitive offerings and a
                commitment to responsible business practices.
              </p>
              <p>
                Suppliers may be required to demonstrate appropriate
                qualifications, licences, certifications, experience, capacity
                and compliance with relevant company requirements depending on
                the nature of the goods or services involved.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Responsible Procurement */}
      <section className="py-20 bg-meltz-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] bg-meltz-blue-dark overflow-hidden">
                <OptimizedImage
                  src="/images/plant.jpg"
                  alt="Responsible procurement supporting MELTZ operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="opacity-90"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-meltz-accent mb-4 block">
                Responsible Procurement
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
                Procurement in the Service of Responsible Business
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                As part of our commitment to responsible business, we expect our
                business partners to conduct themselves in accordance with
                applicable laws and regulations and to maintain appropriate
                standards of business ethics, health and safety, environmental
                responsibility and professional conduct.
              </p>
              <p className="text-white/70 leading-relaxed">
                Our approach to procurement is closely connected to our broader
                commitment to safety, sustainability and ethical operations
                across every part of our business.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Procurement Opportunities */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionHeading
              subtitle="Procurement Opportunities"
              title="Future Procurement Notices"
              description="Procurement opportunities and relevant notices will be communicated through official ME Long Teng channels when applicable."
            />
            <p className="text-meltz-gray leading-relaxed max-w-2xl mx-auto mb-8">
              Suppliers and service providers are encouraged to monitor this
              website for future announcements.
            </p>
            <CTAButton label="CONTACT US" href="/contact" />
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-meltz-light border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-meltz-charcoal leading-tight tracking-tight mb-4">
              Have a Procurement Enquiry?
            </h2>
            <p className="text-meltz-gray leading-relaxed max-w-2xl mx-auto mb-8">
              For general procurement-related enquiries, please contact ME Long
              Teng through our official company contact channels.
            </p>
            <CTAButton label="CONTACT US" href="/contact" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}