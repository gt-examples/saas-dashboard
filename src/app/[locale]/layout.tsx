import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { GTProvider } from "gt-next";
import { getLocaleDirection } from "gt-next/server";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS Dashboard | GT",
  description:
    "Multi-page SaaS dashboard demonstrating locale-aware data formatting with General Translation",
};

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
