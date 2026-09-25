import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import OptimizedImage from "@/components/OptimizedImage";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility",
  description:
    "ME LongTeng Grinding Media's commitment to the communities where we operate — local employment, education, skills development, health, and responsible corporate citizenship in North-Western Province, Zambia.",
  alternates: {
    canonical: `${baseUrl}/csr`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/csr`,
    title: "Corporate Social Responsibility | MELTZ",
    description:
      "Our commitment to the communities where we operate — local employment, education, skills development, and responsible corporate citizenship.",
    images: [
      {
        url: `${baseUrl}/images/news-community.jpg`,
        width: 1200,
        height: 630,
        alt: "MELTZ Corporate Social Responsibility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Social Responsibility | MELTZ",
    description:
      "Our commitment to the communities where we operate — local employment, education, and skills development.",
    images: [`${baseUrl}/images/news-community.jpg`],
  },
};

const csrAreas = [
  {
    title: "Local Employment",
    description:
      "Creating meaningful, long-term employment for people in Kalumbila and surrounding communities, prioritising local hiring wherever skills allow.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Education & Skills Development",
    description:
      "Supporting schools and training programmes that build technical skills and unlock opportunities for the next generation in our region.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Health & Wellbeing",
    description:
      "Contributing to the health and wellbeing of our workforce and local communities through safe practices, community health support, and employee welfare.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Community Engagement",
    description:
      "Engaging openly with community leaders and stakeholders to understand local priorities and build partnerships that create lasting value.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const csrInitiatives = [
  {
    title: "Local Hiring & Talent",
    description:
      "We aim to build a workforce drawn from the communities around us, investing in training so local talent can grow into technical and leadership roles.",
  },
  {
    title: "Skills & Education Support",
    description:
      "Partnerships and programmes focused on education, technical training, and youth development in the Kalumbila area.",
  },
  {
    title: "Local Supply Chain",
    description:
      "Where appropriate, we support qualified Zambian businesses and local suppliers, strengthening the wider regional economy.",
  },
  {
    title: "Open Community Relations",
    description:
      "Regular engagement with community leadership and stakeholders to align our contributions with what matters most locally.",
  },
];

export default function CSRPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Corporate Social Responsibility" }]} />
      <PageHero
        kicker="Corporate Social Responsibility"
        title="Making a Positive Difference Where We Operate"
        description="Beyond manufacturing, we are committed to being a responsible corporate citizen in Kalumbila and the wider North-Western Province."
        image="/images/news-community.jpg"
        breadcrumbs={[{ label: "Corporate Social Responsibility" }]}
      />

      {/* Our Commitment */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Commitment"
              title="Responsible to the Communities We Call Home"
            />
            <div className="text-meltz-gray leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>
                ME LongTeng Grinding Media (Zambia) Ltd operates in a region of
                significant mining activity, and we recognise that responsible
                industry goes hand in hand with responsible corporate
                citizenship.
              </p>
              <p>
                We are committed to contributing positively to the communities
                around us through local employment, skills development,
                education, and community support — creating shared value that
                lasts beyond any single project.
              </p>
              <p>
                Our approach to corporate social responsibility reflects our
                company values, including our Commitment to Community and
                Responsibility and Integrity.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Areas of focus */}
      <section className="py-20 lg:py-28 bg-meltz-light border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Our Focus Areas"
              title="Where We Concentrate Our Effort"
              description="Our corporate social responsibility focuses on the areas where we can make the most meaningful contribution."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {csrAreas.map((area, index) => (
              <ScrollReveal key={area.title} delay={index * 100}>
                <div className="bg-white p-8 lg:p-10 border-l-4 border-meltz-accent h-full">
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
                        d={area.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-meltz-charcoal mb-4">
                    {area.title}
                  </h3>
                  <p className="text-meltz-gray leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we engage */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] bg-meltz-light overflow-hidden">
                <OptimizedImage
                  src="/images/team.jpg"
                  alt="The MELTZ team engaging with the local community"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <SectionHeading
                subtitle="How We Engage"
                title="Building Shared Value"
                align="left"
              />
              <div className="space-y-6">
                {csrInitiatives.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <svg
                      className="w-5 h-5 text-meltz-accent shrink-0 mt-1"
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
                      <h3 className="text-lg font-bold text-meltz-charcoal mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-meltz-gray leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton label="CONTACT US" href="/contact" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Approach note */}
      <section className="py-20 bg-meltz-light border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            subtitle="Our Approach"
            title="Commitments Developed With Our Communities"
            description="Specific CSR programmes, sponsorships, and commitments are developed in consultation with our team and community stakeholders."
          />
          <p className="text-xs text-meltz-gray italic mb-8">
            [Specific CSR programmes, sponsorships, and commitments — to be
            confirmed by company.]
          </p>
          <CTAButton label="OUR VALUES" href="/about" variant="primary" />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-meltz-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
              Have a Community or Partnership Enquiry?
            </h2>
            <p className="text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Community organisations, schools, and local partners are welcome
              to reach out through our official company contact channels.
            </p>
            <CTAButton label="CONTACT US" href="/contact" variant="white" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}