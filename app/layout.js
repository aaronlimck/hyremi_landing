import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";
import { TailwindIndicator } from "@/components/TailwindIndicator";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Hyremi",
  description:
    "Build by and for freelancers. Connect, showcase, and thrive in our vibrant community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased select-none">
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
          backgroundColor: "#f8f6f0",
        }}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
