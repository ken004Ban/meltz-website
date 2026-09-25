import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import OptimizedImage from "@/components/OptimizedImage";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: "Quality & Technology",
  description:
    "ME LongTeng Grinding Media's approach to quality and technology — metallurgical control, manufacturing consistency, and quality assurance that performs under pressure.",
  alternates: {
    canonical: `${baseUrl}/quality`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/quality`,
    title: "Quality & Technology | MELTZ",
    description:
      "Our approach to quality and technology — metallurgical control, manufacturing consistency, and quality assurance.",
    images: [
      {
        url: `${baseUrl}/images/plant4.jpg`,
        width: 1200,
        height: 630,
        alt: "MELTZ Quality & Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality & Technology | MELTZ",
    description:
      "Our approach to quality and technology — metallurgical control, manufacturing consistency, and quality assurance.",
    images: [`${baseUrl}/images/plant4.jpg`],
  },
};

const qualityPillars = [
  {
    number: "01",
    title: "Metallurgical Design",
    description:
      "Based on specific application requirements at each customer site, ME LongTeng designs the metallurgical properties of its grinding media to ensure high compatibility between product and application. Our goal is overall low wear rate.",
  },
  {
    number: "02",
    title: "Clean Steel Technology",
    description:
      "Using 'clean steel' technology, our grinding balls have ultra-low impurity levels in the alloy raw material, ensuring best final product quality. ME LongTeng specifications have the lowest detrimental chemistry levels in the industry.",
  },
  {
    number: "03",
    title: "Production & Heat Treatment",
    description:
      "Proprietary heat treatment processes are controlled within ±20°C of designed temperatures. Each production batch is assigned a serial number linked to bar heat number, quantities, and heat treatment records for full traceability.",
  },
  {
    number: "04",
    title: "Testing & Assurance",
    description:
      "Physical and chemistry tests are conducted on samples from each production batch, including hardness profiling, chemistry inspection, and drop ball testing simulating one-hour SAG mill grinding without half-ball breakage.",
  },
  {
    number: "05",
    title: "Certified Standards",
    description:
      "Our manufacturing follows industry-leading equipment design and process control, certified by ISO 9001, ISO 14001, and OHSAS 18000. State-of-the-art lab and testing capabilities include the world's tallest drop ball machine.",
  },
  {
    number: "06",
    title: "Traceability & Packaging",
    description:
      "Production serial numbers are written on each bulk bag to ensure full traceability back to plant records. Delivery is made according to customers' requirements with complete documentation.",
  },
];

export default function QualityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Quality & Technology" }]} />
      <PageHero
        kicker="Quality & Technology"
        title="Quality That Performs Under Pressure"
        description="Our approach to quality and technology ensures consistent, reliable grinding media for demanding mining applications."
        image="/images/plant4.jpg"
        breadcrumbs={[{ label: "Quality & Technology" }]}
      />

      {/* Quality pillars */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Framework"
              title="A Structured Approach to Quality"
              description="Quality is built into every stage of our operation — from material selection to final inspection."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityPillars.map((pillar, index) => (
              <ScrollReveal key={pillar.number} delay={index * 100}>
                <div className="bg-meltz-light p-8 lg:p-10 border-l-4 border-meltz-accent h-full">
                  <span className="text-sm font-bold text-meltz-medium tracking-wide mb-4 block">
                    {pillar.number}
                  </span>
                  <h3 className="text-2xl font-bold text-meltz-charcoal mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-meltz-gray leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology visual / demo dashboard */}
      <section className="py-20 bg-meltz-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              subtitle="Technology & Process Control"
              title="Transparency Through Process Monitoring"
              light
            />
            <p className="text-white/70 max-w-md leading-relaxed">
              Our manufacturing processes are monitored and controlled to
              maintain product consistency through every stage of production.
            </p>

          <ScrollReveal delay={150}>
            <div className="bg-white/5 backdrop-blur border border-white/10 p-6 lg:p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <span className="text-xs text-white/40 tracking-wider uppercase">
                  Manufacturing Process Quality Control
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Metallurgical Design", value: "✓", unit: "application-specific" },
                  { label: "Clean Steel", value: "✓", unit: "ultra-low impurities" },
                  { label: "Heat Treatment", value: "±20°C", unit: "control tolerance" },
                  { label: "Testing", value: "1-5%", unit: "sampling per batch" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 border border-white/10 p-5"
                  >
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-3">
                      {item.label}
                    </p>
                    <p className="text-2xl font-bold text-white/80">{item.value}</p>
                    <p className="text-[10px] text-white/30 italic mt-2">
                      {item.unit}
                    </p>
                  </div>
                ))}
              </div>

              <div className="h-40 bg-white/5 border border-white/10 flex items-center justify-center">
                <p className="text-xs text-white/40 italic text-center px-6">
                  Every production batch is tracked with a serial number linked
                  to bar heat number, bar heat quantity, heat treatment records,
                  and all instrumentation readings.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Laboratory visual */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] bg-meltz-light overflow-hidden">
                <OptimizedImage
                  src="/images/quality-lab.svg"
                  alt="Metallurgical testing and quality laboratory"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <SectionHeading
                subtitle="Testing & Assurance"
                title="Confidence Through Verification"
                align="left"
              />
              <p className="text-meltz-gray leading-relaxed mb-6">
                Metallurgical testing and inspection are integral to our
                quality process. Physical and chemistry tests are conducted on
                1% of samples randomly collected from each production batch
                before products are qualified to ship, using state-of-the-art
                lab capabilities including the world&apos;s tallest drop ball
                machine.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Hardness section and profiling tests",
                  "Lab chemistry inspection",
                  "Drop ball testing simulating one-hour SAG mill grind",
                  "Visual and surface inspection on 5% of each batch",
                  "Warranty: less than 1% breakage under normal wet milling",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-sm text-meltz-charcoal"
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
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xs text-meltz-gray mb-8">
                Certified by ISO 9001, ISO 14001, and OHSAS 18000. Detailed
                quality documentation available on request.
              </p>
              <CTAButton label="CONTACT US" href="/contact" />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
