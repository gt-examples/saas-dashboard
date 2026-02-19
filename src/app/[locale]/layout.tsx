import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTProvider } from "gt-next";
import { getLocaleDirection , getGT } from "gt-next/server";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const gt = await getGT();

  const title = gt("SaaS Dashboard | General Translation");
  const description = gt(
    "A multi-page SaaS dashboard with locale-aware data formatting and RTL support."
  );

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale,
      type: "website",
      siteName: "General Translation",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: "https://saas-dashboard.generaltranslation.dev",
      languages: {
        en: "/en",
        es: "/es",
        ja: "/ja",
        ar: "/ar",
        fr: "/fr",
        zh: "/zh",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const direction = getLocaleDirection(locale);
  return (
    <html lang={locale} dir={direction}>
      <body className={`${geistSans.variable} antialiased`}>
        <GTProvider>
          <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
            <Navbar />
            <main className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">{children}</main>
          </div>
        </GTProvider>
      </body>
    </html>
  );
}
