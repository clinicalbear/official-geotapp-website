import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getSiteContent } from "@/lib/contentStore";

export const dynamic = "force-dynamic";
export const revalidate = 0;
// src/app/layout.tsx
export const runtime = 'edge';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sanitizeAnalyticsSnippet = (snippet?: string) => {
  if (!snippet) return "";
  const trimmed = snippet.trim();
  if (trimmed.startsWith("<script")) {
    return trimmed.replace(/<\/?script[^>]*>/g, "").trim();
  }
  return trimmed;
};

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent();
  return {
    title: content.seo.title,
    description: content.seo.description,
    keywords: content.seo.keywords,
    alternates: {
      canonical: content.seo.canonicalUrl,
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: content.seo.canonicalUrl,
      images: [{ url: content.seo.ogImage }],
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = await getSiteContent();
  const analyticsSnippet = sanitizeAnalyticsSnippet(content.analytics.headHtml);

  return (
    <html lang="it">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ ["--brand-accent" as string]: content.branding.accentColor }}
      >
        {analyticsSnippet && (
          <Script id="custom-analytics" strategy="afterInteractive">
            {analyticsSnippet}
          </Script>
        )}
        <div className="min-h-screen bg-white text-slate-900">
          <SiteHeader branding={content.branding} />
          <main>{children}</main>
          <SiteFooter branding={content.branding} />
        </div>
      </body>
    </html>
  );
}
