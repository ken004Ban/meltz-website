import type { Metadata } from "next";
import { news, newsCategories } from "@/data/news";
import PageHero from "@/components/PageHero";
import NewsCard from "@/components/NewsCard";
import ScrollReveal from "@/components/ScrollReveal";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news from ME LongTeng Grinding Media (Zambia) Ltd — company updates, industry insights, safety, and community engagement.",
  alternates: {
    canonical: `${baseUrl}/news`,
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}/news`,
    title: "News | MELTZ",
    description:
      "Latest news from ME LongTeng Grinding Media (Zambia) Ltd — company updates, industry insights, and community engagement.",
    images: [
      {
        url: `${baseUrl}/images/plant4.jpg`,
        width: 1200,
        height: 630,
        alt: "MELTZ News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News | MELTZ",
    description:
      "Latest news from ME LongTeng Grinding Media (Zambia) Ltd",
    images: [`${baseUrl}/images/plant4.jpg`],
  },
};

export default function NewsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ label: "News" }]} />
      <PageHero
        kicker="News"
        title="Latest From MELTZ"
        description="Company updates, industry insights, and stories from across our operations."
        image="/images/plant4.jpg"
        breadcrumbs={[{ label: "News" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {newsCategories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase cursor-pointer transition-colors ${
                  cat === "All"
                    ? "bg-meltz-blue text-white"
                    : "bg-meltz-light text-meltz-gray hover:bg-meltz-blue/10"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <ScrollReveal
                key={article.id}
                delay={(index % 3) * 100}
                className={article.featured ? "lg:col-span-1" : ""}
              >
                <NewsCard
                  title={article.title}
                  slug={article.slug}
                  category={article.category}
                  date={article.date}
                  summary={article.summary}
                  image={article.image}
                  featured={article.featured}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-meltz-gray italic">
            [News articles are demo content for presentation purposes and can
            be replaced with company-approved news.]
          </p>
        </div>
      </section>
    </>
  );
}
