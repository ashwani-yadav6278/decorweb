import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallButton from "@/components/CallButton";
import "./globals.css";
export const metadata = {
  title:
    "Balloon Decoration in Faridabad | Birthday & Party Decor | Balloonzaa",

  description:
    "Book balloon decoration in Faridabad for birthday, anniversary, baby shower & events. Same-day setup, affordable price. Call now!",

  keywords: [
    "balloon decoration in Faridabad",
    "best birthday decoration Faridabad",
    "best anniversary decoration",
    "party decorator near me",
  ],

  metadataBase: new URL("https://yourdomain.com"),

  alternates: {
    canonical: "https://yourdomain.com/",
  },

  openGraph: {
    title: "Balloon Decoration in Faridabad | Balloonzaa",
    description:
      "Affordable balloon decoration service in Faridabad with same day  home setup.",
    url: "https://yourdomain.com/",
    siteName: "Balloonzaa",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MXL4588KCX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'G-MXL4588KCX');
    `}
        </Script>
      </head>
      <body>
        <Header />
        {children}

        <CallButton />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Balloonzaa",
              areaServed: "Faridabad",
              telephone: "+919582060618",
            }),
          }}
        />
      </body>
    </html>
  );
}
