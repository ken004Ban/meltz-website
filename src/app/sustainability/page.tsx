import type { Metadata } from "next";
import { company } from "@/data/company";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import OptimizedImage from "@/components/OptimizedImage";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "ME LongTeng Grinding Media's commitment to responsible manufacturing — our people, safety, environment, and community.",
  alternates: {
    canonical: `${baseUrl}/sustainability`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/sustainability`,
    title: "Sustainability | MELTZ",
    description:
      "Our commitment to responsible manufacturing — our people, safety, environment, and community.",
    images: [
      {
        url: `${baseUrl}/images/plant4.jpg`,
        width: 1200,
        height: 630,
        alt: "MELTZ Sustainability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainability | MELTZ",
    description:
      "Our commitment to responsible manufacturing — our people, safety, environment, and community.",
    images: [`${baseUrl}/images/plant4.jpg`],
  },
};

export default function SustainabilityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Sustainability" }]} />
      <PageHero
        kicker="Sustainability"
        title="Committed to Responsible Industrial Manufacturing"
        description="Our approach to sustainability centres on our people, safety, the environment, and the communities around us."
        image="/images/plant4.jpg"
        breadcrumbs={[{ label: "Sustainability" }]}
      />

      {/* Four pillars */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Pillars"
              title="A Balanced Approach to Sustainability"
              description="We are committed to operating responsibly and creating long-term value for our stakeholders."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {company.sustainability.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 100}>
                <div className="bg-meltz-light p-8 lg:p-10 h-full">
                  <div className="w-14 h-14 bg-white flex items-center justify-center mb-6 border border-gray-100">
                    <svg
                      className="w-7 h-7 text-meltz-medium"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={
                          pillar.icon === "users"
                            ? "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            : pillar.icon === "shield"
                              ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                              : pillar.icon === "leaf"
                                ? "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                : "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        }
                      />
                    </svg>
                  </div>
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

      {/* Broader philosophy note */}
      <section className="py-20 bg-meltz-light border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            subtitle="Our Philosophy"
            title="People and Safety at the Heart of What We Do"
            description="The broader corporate philosophy emphasizes people, safety, and sustainability as foundations of responsible industrial manufacturing."
          />
          <p className="text-meltz-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            Our approach draws on internationally recognised principles of
            responsible manufacturing. Company-specific commitments and
            targets are developed in consultation with our team and
            stakeholders.
          </p>
          <p className="text-xs text-meltz-gray italic mb-8">
            [Specific sustainability targets and commitments — to be confirmed
            by company.]
          </p>
          <CTAButton label="OUR APPROACH" href="/about" />
        </div>
      </section>

      {/* Commitment section */}
      <section className="py-20 bg-meltz-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] bg-meltz-blue-dark overflow-hidden">
                <OptimizedImage
                  src="/images/sustainability-community.svg"
                  alt="MELTZ community and environmental responsibility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="opacity-70"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-meltz-accent mb-4 block">
                Community & Environment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
                Building Positive Relationships
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                We recognise that responsible manufacturing extends beyond our
                facility walls. We are committed to building positive
                relationships with the communities around us and to operating
                in an environmentally responsible manner.
              </p>
              <p className="text-white/70 leading-relaxed">
                Through local employment, skills development, and community
                engagement, we aim to contribute positively to the region
                where we operate.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
