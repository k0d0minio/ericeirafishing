"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { defaultLocale, isLocale, localeHref } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/dictionaries/en";
import { pt } from "@/lib/i18n/dictionaries/pt";
import { fr } from "@/lib/i18n/dictionaries/fr";
import { de } from "@/lib/i18n/dictionaries/de";
import { Button } from "@/components/ui/button";
import { BoatIllustration } from "@/components/boat-illustration";

const dictionaries = { en, pt, fr, de };

/**
 * `not-found.js` does not receive route params, so the locale is read on
 * the client via `useParams()` instead of the server dictionary loader.
 */
export default function NotFound() {
  const params = useParams();
  const rawLocale = params?.locale;
  const localeParam = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale;
  const locale = localeParam && isLocale(localeParam) ? localeParam : defaultLocale;
  const dict = dictionaries[locale];

  return (
    <section className="theme-ink bg-chart-grid-dark relative overflow-hidden">
      <div className="mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6">
        <BoatIllustration className="animate-bob w-48 text-seaglass/70" />
        <p className="kicker mt-10 text-buoy">{dict.notFound.kicker}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-balance text-sand md:text-5xl">
          {dict.notFound.title}
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-sand/70">
          {dict.notFound.body}
        </p>
        <Button
          asChild
          className="mt-8 h-11 rounded-full bg-buoy px-6 font-mono text-xs tracking-[0.2em] text-sand uppercase hover:bg-buoy-deep"
        >
          <Link href={localeHref(locale, "/")}>
            <ArrowLeft data-icon="inline-start" className="size-4" />
            {dict.notFound.cta}
          </Link>
        </Button>
      </div>
    </section>
  );
}
