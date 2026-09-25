import type { Metadata } from "next";
import { careers, whyWorkWithUs } from "@/data/careers";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career in industrial manufacturing with ME LongTeng Grinding Media (Zambia) Ltd — training, development, and meaningful opportunities in Kalumbila, Zambia.",
  alternates: {
    canonical: `${baseUrl}/careers`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/careers`,
    title: "Careers | MELTZ",
    description:
      "Build your career in industrial manufacturing with ME LongTeng Grinding Media in Kalumbila, Zambia.",
    images: [
      {
        url: `${baseUrl}/images/plant4.jpg`,
        width: 1200,
        height: 630,
        alt: "MELTZ Careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | MELTZ",
    description:
      "Build your career in industrial manufacturing with ME LongTeng Grinding Media in Kalumbila, Zambia.",
    images: [`${baseUrl}/images/plant4.jpg`],
  },
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Careers" }]} />
      <PageHero
        kicker="Careers"
        title="Build Your Career in Industrial Manufacturing"
        description="Join a growing team at the intersection of mining and advanced manufacturing in Kalumbila, Zambia."
        image="/images/plant4.jpg"
        breadcrumbs={[{ label: "Careers" }]}
      />

      {/* Why Work With Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Why Work With Us"
              title="A Career With Purpose and Growth"
              description="We are building a team of skilled professionals committed to manufacturing excellence in Zambia."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyWorkWithUs.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-meltz-light p-8 border-l-4 border-meltz-accent h-full">
                  <div className="w-12 h-12 flex items-center justify-center mb-5">
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
                              : item.icon === "settings"
                                ? "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                : "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        }
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-meltz-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-meltz-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Current Opportunities */}
      <section className="py-20 lg:py-28 bg-meltz-light border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Current Opportunities"
              title="Open Roles at MELTZ"
              description="Explore career opportunities at our Kalumbila facility."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careers.map((job, index) => (
              <ScrollReveal key={job.id} delay={index * 100}>
                <div className="bg-white border border-gray-200 p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-wider uppercase bg-meltz-accent/10 text-meltz-accent px-3 py-1">
                      {job.department}
                    </span>
                    <span className="text-xs text-meltz-gray">{job.type}</span>
                  </div>
                  <h3 className="text-xl font-bold text-meltz-charcoal mb-2">
                    {job.title}
                  </h3>
                  <p className="text-sm text-meltz-medium mb-4">
                    {job.location}
                  </p>
                  <p className="text-sm text-meltz-gray leading-relaxed flex-1">
                    {job.description}
                  </p>
                  <div className="mt-5 pt-5 border-t border-gray-100">
                    <p className="text-xs text-red-500 font-semibold mb-4">
                      {job.status}
                    </p>
                    <CTAButton label="APPLY" href="/contact" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-xs text-meltz-gray italic mb-6">
              All job listings above are DEMO CONTENT for presentation
              purposes only and do not represent active openings.
            </p>
            <CTAButton label="VIEW OPPORTUNITIES" href="/contact" />
          </div>
        </div>
      </section>

      {/* Safety culture */}
      <section className="py-20 bg-meltz-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-meltz-accent mb-4 block">
              Safety Culture
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-6">
              Zero Harm Starts With Each of Us
            </h2>
            <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
              Safety is a core value in everything we do. We are committed to
              providing the training, tools, and environment for our team to
              work safely every day, and to fostering a culture where everyone
              looks out for one another.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
