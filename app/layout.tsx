/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";
import "../style/index.scss";

import Header from "../components/common/header";
import Footer from "../components/common/footer/Footer";

import LoadingIndicator from "../components/common/LoadingIndicator";
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: "AquaFox",
    template: "%s | AquaFox",
  },
  description: "AquaFox Landing Page",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "aquafox.io",
    url: "https://aquafox.io",
  },
  twitter: {
    card: "summary",
    site: "@Aquafoxjsc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://aquafox.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="121x134"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-85TRWFJN3C"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-85TRWFJN3C');
          `,
          }}
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
      </Head>
      <LoadingIndicator />
      <body className={`flex flex-col min-h-screen`}>
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
