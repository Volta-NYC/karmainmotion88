import "./globals.css"
import type { Metadata } from "next"
import { Fraunces, Hanken_Grotesk } from "next/font/google"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import { business, fullAddress } from "@/data/business"
import { reviewStats } from "@/data/testimonials"

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const SITE_URL = "https://www.karmainmotion88.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} — Massage Therapy in New York City`,
    template: `%s · ${business.name}`,
  },
  description:
    "Holistic massage therapy with Roxanne Young, LMT on the Upper West Side. Swedish, deep tissue & prenatal massage in a calm, restorative NYC studio.",
  keywords: [
    "massage therapy NYC",
    "Swedish massage New York",
    "deep tissue massage Upper West Side",
    "prenatal massage NYC",
    "KarmaInMotion88",
    "Roxanne Young LMT",
  ],
  openGraph: {
    type: "website",
    title: `${business.name} — Massage Therapy in New York City`,
    description:
      "Swedish, deep tissue & prenatal massage with Roxanne Young, LMT. A calm, restorative studio on the Upper West Side.",
    url: SITE_URL,
    siteName: business.name,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: SITE_URL },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: business.name,
  description:
    "Holistic massage therapy practice offering Swedish, deep tissue and prenatal massage in New York City.",
  image: `${SITE_URL}/images/massage-candlelit.jpg`,
  telephone: business.contact.phone,
  email: business.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.location.street,
    addressLocality: business.location.city,
    addressRegion: business.location.state,
    postalCode: business.location.zip,
    addressCountry: "US",
  },
  areaServed: "New York, NY",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: reviewStats.rating.toFixed(1),
    reviewCount: reviewStats.count,
    bestRating: "5",
  },
  founder: {
    "@type": "Person",
    name: business.founder.name,
    jobTitle: business.founder.title,
  },
  priceRange: "$$",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-cream-soft"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <span className="sr-only" aria-hidden>
          {fullAddress}
        </span>
      </body>
    </html>
  )
}
