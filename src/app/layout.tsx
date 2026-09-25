import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl = "https://www.meltz.co.zm";

export const metadata: Metadata = {
  title: {
    default:
      "ME LongTeng Grinding Media (Zambia) Ltd | Grinding Media Manufacturing",
    template: "%s | MELTZ",
  },
  description:
    "ME LongTeng Grinding Media (Zambia) Ltd (MELTZ) manufactures high-performance grinding media for the mining industry from Kalumbila, Zambia.",
  keywords: [
    "ME LongTeng Grinding Media",
    "Grinding Media Zambia",
    "Grinding Balls Zambia",
    "Mining Grinding Media",
    "Mining Manufacturing Zambia",
    "Kalumbila Mining",
    "Grinding Media Africa",
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "ME LongTeng Grinding Media (Zambia) Ltd",
    title:
      "ME LongTeng Grinding Media (Zambia) Ltd | Grinding Media Manufacturing",
    description:
      "Manufacturing high-performance grinding media for the mining industry from Kalumbila, Zambia.",
    images: [
      {
        url: `${baseUrl}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "ME LongTeng Grinding Media - Manufacturing Excellence in Kalumbila, Zambia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ME LongTeng Grinding Media (Zambia) Ltd | Grinding Media Manufacturing",
    description:
      "Manufacturing high-performance grinding media for the mining industry from Kalumbila, Zambia.",
    images: [`${baseUrl}/images/og-default.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-meltz-blue focus:shadow-lg"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ME LongTeng Grinding Media (Zambia) Ltd",
              alternateName: "MELTZ",
              url: baseUrl,
              logo: `${baseUrl}/icon.svg`,
              description:
                "Specialized manufacturing operation producing high-performance grinding media for mining applications in Kalumbila, Zambia.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kalumbila",
                addressLocality: "Kalumbila",
                addressRegion: "North-Western Province",
                addressCountry: "ZM",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -12.0833,
                longitude: 25.3333,
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "info@meltz.co.zm",
                telephone: "+260-XXX-XXXXXX",
              },
              areaServed: [
                {
                  "@type": "Country",
                  name: "Zambia",
                },
                {
                  "@type": "Country",
                  name: "Democratic Republic of the Congo",
                },
                {
                  "@type": "Country",
                  name: "Zimbabwe",
                },
                {
                  "@type": "Country",
                  name: "Mozambique",
                },
              ],
              knowsAbout: [
                "Grinding Media",
                "Grinding Balls",
                "Mining Manufacturing",
                "Mineral Processing",
                "Steel Manufacturing",
                "Metallurgical Engineering",
              ],
              sameAs: [],
            }),
          }}
        />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
