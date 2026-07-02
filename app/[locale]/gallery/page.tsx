import type { Metadata } from "next";

import { site } from "@/lib/site";
import { type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { InstagramIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SmartImage } from "@/components/smart-image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.gallery.title,
    description: dict.meta.gallery.description,
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = await getDictionary(locale);
  const t = dict.galleryPage;

  return (
    <>
      <PageHero
        kicker={t.hero.kicker}
        title={t.hero.title}
        lede={t.hero.lede}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-18">
        <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {t.photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.08} className="break-inside-avoid">
              <SmartImage
                src={photo.src}
                alt={photo.alt}
                className={`w-full rounded-md border border-border shadow-sm ${
                  photo.orientation === "portrait" ? "aspect-[4/5]" : "aspect-[3/2]"
                }`}
                sizes="(min-width: 768px) 30vw, 45vw"
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            {t.instagramPrefix}{" "}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-buoy-deep underline-offset-4 hover:underline"
            >
              <InstagramIcon className="size-4" />
              Instagram {site.instagramHandle}
            </a>
          </p>
        </Reveal>
      </section>

      <CtaBand
        locale={locale}
        dict={dict}
        title={t.cta.title}
        body={t.cta.body}
        buttonLabel={t.cta.buttonLabel}
      />
    </>
  );
}
