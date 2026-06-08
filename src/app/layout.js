import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import "./globals.css";

export const metadata = {
  title:"Birthday Balloon Decoration in Faridabad| Balloon Decoration at Home | Balloonzaa",

  description:
    "Book balloon decoration in Faridabad for birthday, anniversary, baby shower & events. Same-day setup, affordable price.",

  metadataBase: new URL("https://www.balloonzaa.in"),

  verification: {
    google: "T75HhKJ91Y-rtQmIMRkyXNPny6mpnt2Ll1bnAQrsSt8",
  },

  openGraph: {
    title: "Balloon Decoration in Faridabad | Balloonzaa",

    description:
      "Affordable balloon decoration service in Faridabad with same day home setup.",

    url: "https://www.balloonzaa.in",

    siteName: "Balloonzaa",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Balloonzaa Balloon Decoration",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Balloon Decoration in Faridabad | Balloonzaa",

    description:
      "Affordable balloon decoration service in Faridabad with same day home setup.",

    images: ["/og-image.png"],

    creator: "@balloonzaa",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MXL4588KCX"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            window.gtag = gtag;

            gtag('js', new Date());

            gtag('config', 'G-MXL4588KCX');
          `}
        </Script>

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="19rvJxeVOSR4aIdmr5QUmA"
          strategy="afterInteractive"
        />
      </head>

      <body>
        <Header />

        {children}

        <CallButton />

        <Footer />

        {/* Local Business Schema */}
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Balloonzaa",
              image: "https://www.balloonzaa.in/og-image.png",
              url: "https://www.balloonzaa.in",
              telephone: "+919582060618",

              address: {
                "@type": "PostalAddress",
                addressLocality: "Faridabad",
                addressRegion: "Haryana",
                addressCountry: "IN",
              },

              areaServed: [
                "Faridabad",
                "Gurgaon",
                "Delhi NCR",
              ],

              priceRange: "₹₹",

              sameAs: [
                "https://www.instagram.com/",
                "https://www.facebook.com/",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}