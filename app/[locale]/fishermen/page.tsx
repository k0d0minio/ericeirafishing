import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { localeHref, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SmartImage } from "@/components/smart-image";
import { WaveDivider } from "@/components/wave-divider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.fishermen.title,
    description: dict.meta.fishermen.description,
  };
}

export default async function FishermenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = await getDictionary(locale);
  const t = dict.fishermenPage;

  return (
    <>
      <PageHero
        kicker={t.hero.kicker}
        title={t.hero.title}
        lede={t.hero.lede}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <p className="font-display text-xl leading-relaxed font-medium text-balance md:text-2xl">
          {t.intro}
        </p>

        {t.chapters.map((chapter, i) => (
          <Reveal key={i}>
            <section className="mt-14">
              <div className="tide-rule mb-10 text-ink" />
              <h2 className="font-display text-2xl font-semibold text-balance md:text-3xl">
                {chapter.title}
              </h2>
              {"image" in chapter && chapter.image ? (
                <figure className="mt-8">
                  <SmartImage
                    src={chapter.image.src}
                    alt={chapter.image.alt}
                    className="aspect-[16/10] w-full rounded-lg border border-border"
                    sizes="(min-width: 768px) 44rem, 92vw"
                  />
                  <figcaption className="kicker mt-3 text-muted-foreground">
                    {chapter.image.caption}
                  </figcaption>
                </figure>
              ) : null}
              {chapter.paragraphs.map((paragraph, pi) => (
                <p
                  key={pi}
                  className="mt-5 leading-relaxed text-foreground/85"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          </Reveal>
        ))}
      </article>

      <section className="relative">
        <WaveDivider className="bg-background text-ink-deep" />
        <div className="theme-ink bg-chart-grid-dark">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-20">
            <Reveal>
              <p className="kicker text-buoy">{t.closing.kicker}</p>
              <p className="mt-5 font-display text-2xl leading-snug font-medium text-balance text-sand md:text-3xl">
                {t.closing.body1}
              </p>
              <p className="mt-5 leading-relaxed text-sand/70">
                {t.closing.body2}
              </p>
              <Button
                asChild
                className="mt-9 h-12 rounded-full bg-buoy px-7 font-mono text-xs tracking-[0.2em] text-sand uppercase hover:bg-buoy-deep"
              >
                <Link href={localeHref(locale, "/get-aboard")}>
                  {t.closing.cta}
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
