import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import GalleryGrid from "@/components/GalleryGrid";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual look at ME LongTeng Grinding Media's facility, products, and operations in Kalumbila, Zambia.",
  alternates: {
    canonical: `${baseUrl}/gallery`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/gallery`,
    title: "Gallery | MELTZ",
    description:
      "A visual look at ME LongTeng Grinding Media's facility, products, and operations in Kalumbila, Zambia.",
    images: [
      {
        url: `${baseUrl}/images/gallery/facility-production.jpg`,
        width: 1200,
        height: 630,
        alt: "MELTZ Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | MELTZ",
    description:
      "A visual look at ME LongTeng Grinding Media's facility, products, and operations.",
    images: [`${baseUrl}/images/gallery/facility-production.jpg`],
  },
};

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "Gallery" }]} />
      <PageHero
        kicker="Gallery"
        title="Inside MELTZ"
        description="A visual look at our facility, products, and the people behind every batch of grinding media in Kalumbila."
        image="/images/plant4.jpg"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              subtitle="Gallery"
              title="Facility, Products & Operations"
              description="Browse photos from our manufacturing facility and grinding media production. Select a category to filter, or click any image to view it full size."
            />
          </ScrollReveal>

          <ScrollReveal>
            <GalleryGrid />
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-14">
              <p className="text-sm text-meltz-gray italic">
                More photos coming soon. For site visit or media enquiries,
                please contact our team.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
