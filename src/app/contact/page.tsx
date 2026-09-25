import type { Metadata } from "next";
import { contact } from "@/data/contact";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ME LongTeng Grinding Media (Zambia) Ltd in Kalumbila, Zambia. General inquiries, product information, technical support, and more.",
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/contact`,
    title: "Contact Us | MELTZ",
    description:
      "Contact MELTZ in Kalumbila, Zambia. General inquiries, product information, technical support, and more.",
    images: [
      {
        url: `${baseUrl}/images/plant4.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact MELTZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | MELTZ",
    description:
      "Contact MELTZ in Kalumbila, Zambia. General inquiries, product information, and more.",
    images: [`${baseUrl}/images/plant4.jpg`],
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Contact" }]} />
      <PageHero
        kicker="Contact"
        title="Let's Talk"
        description="Whether you're a mining operation, potential partner, or supplier, we'd love to hear from you."
        image="/images/plant4.jpg"
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <ScrollReveal>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-meltz-charcoal mb-3">
                    Production Facility
                  </h3>
                  <p className="text-meltz-gray text-sm leading-relaxed">
                    {contact.address.street}
                    <br />
                    {contact.address.city}
                    <br />
                    {contact.address.province}
                    <br />
                    {contact.address.country}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-meltz-charcoal mb-3">
                    Head Office
                  </h3>
                  <p className="text-meltz-gray text-sm leading-relaxed">
                    {contact.headOffice.street}
                    <br />
                    {contact.headOffice.city}
                    <br />
                    {contact.headOffice.province}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-meltz-charcoal mb-3">
                    Contact
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm text-meltz-gray flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-meltz-medium"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {contact.email}
                    </p>
                    <p className="text-sm text-meltz-gray flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-meltz-medium"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.683l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.683.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      {contact.phone}
                    </p>
                  </div>
                </div>

                <div className="bg-meltz-light p-6 border-l-4 border-meltz-accent">
                  <h4 className="text-sm font-bold text-meltz-charcoal mb-2">
                    Key Contacts
                  </h4>
                  <p className="text-sm text-meltz-gray mb-2">
                    <strong> Tomas Del Rio</strong>
                    <br />
                    Chief Financial Officer
                    <br />
                  </p>
                  <p className="text-sm text-meltz-gray">
                    <strong>Gregory Musonda Phiri</strong>
                    <br />
                    Account Sales Manager
                    <br />
                    +260 966 884 752
                    <br />
                    gphiri@meltz.com.zm
                    <br />
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact form */}
            <ScrollReveal delay={150} className="lg:col-span-2">
              <div className="bg-meltz-light p-8 lg:p-12">
                <SectionHeading
                  subtitle="Send an Inquiry"
                  title="How Can We Help?"
                  align="left"
                />
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
