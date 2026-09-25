import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { news } from "@/data/news";
import PageHero from "@/components/PageHero";
import CTAButton from "@/components/CTAButton";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const baseUrl = "https://www.meltz.co.zm";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const articleUrl = `${baseUrl}/news/${article.slug}`;

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url: articleUrl,
      siteName: "ME LongTeng Grinding Media (Zambia) Ltd",
      images: [
        {
          url: `${baseUrl}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [`${baseUrl}${article.image}`],
    },
  };
}

export default async function NewsArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const related = news.filter((a) => a.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    image: `${baseUrl}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "ME LongTeng Grinding Media (Zambia) Ltd",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "ME LongTeng Grinding Media (Zambia) Ltd",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/news/${article.slug}`,
    },
    articleSection: article.category,
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[{ label: "News", href: "/news" }, { label: article.title }]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHero
        kicker={article.category}
        title={article.title}
        description={`${formattedDate}`}
        image={article.image}
        breadcrumbs={[{ label: "News", href: "/news" }, { label: article.title }]}
      />

      <article className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-meltz-gray leading-relaxed">
              {article.summary}
            </p>
            <p className="text-meltz-gray leading-relaxed mt-6">
              This is a demonstration article provided for the website
              prototype. Full article content would be supplied by ME LongTeng
              Grinding Media (Zambia) Ltd and reviewed by management before
              publication.
            </p>
            <p className="text-xs text-meltz-gray italic mt-8">
              [Article content — to be provided and approved by the company.]
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-meltz-blue hover:text-meltz-blue-dark transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to News
            </Link>
            <CTAButton label="CONTACT US" href="/contact" />
          </div>
        </div>
      </article>

      <section className="py-16 bg-meltz-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-meltz-charcoal mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className="group block"
              >
                <div className="bg-white border border-gray-200 p-6 h-full hover:border-meltz-medium/30 transition-colors">
                  <span className="text-xs font-bold tracking-wider uppercase text-meltz-medium block mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-meltz-charcoal leading-snug group-hover:text-meltz-blue transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
