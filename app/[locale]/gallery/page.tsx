import Image, { type StaticImageData } from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { FadeIn } from "@/components/motion/fade-in";
import fishesImg from "@/lib/fishes.jpg";
import joaoImg from "@/lib/joao-juma.jpeg";
import mestreAlbanoImg from "@/lib/mestre-albano.jpg";
import mestreAlbano2Img from "@/lib/mestre-albano-2.jpg";

type Props = {
  params: Promise<{ locale: string }>;
};

const PHOTOS: { src: StaticImageData; altKey: "altTrips" | "altFish" | "altCrew" | "altCaptain" }[] =
  [
    { src: mestreAlbano2Img, altKey: "altTrips" },
    { src: fishesImg, altKey: "altFish" },
    { src: joaoImg, altKey: "altCrew" },
    { src: mestreAlbanoImg, altKey: "altCaptain" },
  ];

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("galleryTitle"),
    description: t("galleryDescription"),
  };
}

export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Gallery");

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-14 px-4 py-12">
      <FadeIn>
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
            {t("intro")}
          </p>
        </header>
      </FadeIn>

      <section className="space-y-6" aria-labelledby="gallery-photos-heading">
        <FadeIn>
          <h2
            id="gallery-photos-heading"
            className="text-xl font-semibold tracking-tight"
          >
            {t("photosTitle")}
          </h2>
        </FadeIn>
        <div className="grid gap-3 sm:grid-cols-2">
          {PHOTOS.map((item, index) => (
            <FadeIn key={item.altKey} delay={index * 0.05}>
              <div className="bg-muted relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={item.src}
                  alt={t(item.altKey)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="gallery-videos-heading">
        <FadeIn>
          <h2
            id="gallery-videos-heading"
            className="text-xl font-semibold tracking-tight"
          >
            {t("videosTitle")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.06}>
          <div className="bg-muted/50 flex aspect-video items-center justify-center rounded-xl border border-dashed px-6">
            <p className="text-muted-foreground max-w-md text-center text-sm leading-relaxed">
              {t("videosBody")}
            </p>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
