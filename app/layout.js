import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { TailwindIndicator } from "@/components/TailwindIndicator";

import Script from "next/script";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hyremi",
  description:
    "Build by and for freelancers. Connect, showcase, and thrive in our vibrant community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/opengraph.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:image" content="/opengraph.png" />
        <meta property="twitter:card" content={metadata.description} />
        <meta property="twitter:title" content={metadata.title} />
        <meta
          property="twitter:description"
          content={metadata.description}
        ></meta>
      </head>
      <body
        className={`${inter.className}`}
        style={{
          background: "url(/background.png)",
          backgroundSize: "cover",
          backdropFilter: "blur(100%)",
        }}
      >
        {children}
        <TailwindIndicator />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          if (window.location.hostname !== 'localhost') && window.location.hostname === 'hyremi.com'  {
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          }
          `}
        </Script>
      </body>
    </html>
  );
}
