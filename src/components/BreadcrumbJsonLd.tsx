interface BreadcrumbJsonLdItem {
  label: string;
  href?: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbJsonLdItem[];
}

const baseUrl = "https://www.meltz.co.zm";

export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const breadcrumbs = [{ label: "Home", href: baseUrl }, ...items];

  const itemListElement = breadcrumbs
    .filter((item, index) => index === 0 || item.href)
    .map((item, index) => {
      const position = index + 1;
      const href = item.href ?? `${baseUrl}/`;
      return {
        "@type": "ListItem",
        position,
        name: item.label,
        item: href,
      };
    });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}