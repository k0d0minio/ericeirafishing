import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Fraunces, IBM_Plex_Mono, Karla } from "next/font/google";

import { htmlLang, locales, ogLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { site } from "@/lib/site";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return {
    title: {
      default: dict.meta.home.title,
      template: `%s — ${site.name}`,
    },
    description: dict.meta.home.description,
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      locale: ogLocale[locale as Locale],
      type: "website",
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <html
      lang={htmlLang[locale as Locale]}
      className={`${fraunces.variable} ${karla.variable} ${plexMono.variable}`}
    >
      <body className="flex min-h-svh flex-col antialiased">
        <SiteHeader locale={locale as Locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <SiteFooter locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
