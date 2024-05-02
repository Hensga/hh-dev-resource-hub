import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { baseUrl } from "@/app/sitemap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(baseUrl),
  title:
    "Resource Hub – Ultimate stash of top-tier resources for programmers and designers",
  description:
    "Resource Hub is the ultimate stash of top-tier resources for programmers and designers. Find the best tools, libraries, and frameworks for your next project.",
  openGraph: {
    title:
      "Resource Hub – Ultimate stash of top-tier resources for programmers and designers",
    description:
      "Resource Hub is the ultimate stash of top-tier resources for programmers and designers. Find the best tools, libraries, and frameworks for your next project.",
    type: "website",
    url: baseUrl,
    siteName: "Resource Hub",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googlebot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="h-full" lang="en">
      <body
        className={
          inter.className +
          " grid grid-rows-[auto,1fr,auto] min-h-full overflow-y-scroll"
        }
      >
        <Navbar />
        <main className="min-h-[50vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
