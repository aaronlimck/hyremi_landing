import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import Head from "next/head";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Hyremi",
  description: "Build by and for freelancers. Connect, showcase, and thrive in our vibrant community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased select-none">
      <Head>
        <meta property="og:title" content={metadata.title}/>
        <meta property="og:description" content={metadata.description}/>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
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
