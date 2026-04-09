import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { FadeIn } from "@/components/motion/fade-in";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import fishesImg from "@/lib/fishes.jpg";
import joaoImg from "@/lib/joao-juma.jpeg";
import mestreAlbanoImg from "@/lib/mestre-albano.jpg";
import mestreAlbano2Img from "@/lib/mestre-albano-2.jpg";

type Props = {
  params: Promise<{ locale: string }>;
};

const GALLERY_ITEMS = [
  {
    titleKey: "gallery.previousTrips" as const,
    altKey: "gallery.altPreviousTrips" as const,
    src: mestreAlbano2Img,
  },
  {
    titleKey: "gallery.ourFish" as const,
    altKey: "gallery.altOurFish" as const,
    src: fishesImg,
  },
  {
    titleKey: "gallery.boatAndCrew" as const,
    altKey: "gallery.altBoatAndCrew" as const,
    src: joaoImg,
  },
];

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b bg-muted/30">
        <FadeIn className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-20">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">
            {t("hero.kicker")}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
            {t("lead")}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/join-us">{t("hero.learnMore")}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#services">{t("services.title")}</Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      <FadeIn className="mx-auto w-full max-w-3xl space-y-8 px-4 py-16">
        <div className="space-y-6 text-base leading-relaxed">
          <p>{t("about.p1")}</p>
          <p className="text-muted-foreground">{t("about.p2")}</p>
          <p className="text-muted-foreground">{t("about.p3")}</p>
          <p className="text-muted-foreground">{t("about.p4")}</p>
        </div>
        <p className="text-primary font-medium">{t("about.welcome")}</p>
      </FadeIn>

      <section
        id="services"
        className="scroll-mt-14 border-t bg-muted/20 py-16"
      >
        <div className="mx-auto w-full max-w-3xl space-y-10 px-4">
          <FadeIn>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t("services.title")}
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn delay={0.06}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t("services.boat.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {t("services.boat.body")}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.12}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t("services.shore.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {t("services.shore.body")}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl space-y-8 px-4 py-16">
        <h2 className="sr-only">Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {GALLERY_ITEMS.map((item, index) => (
            <FadeIn key={item.titleKey} delay={index * 0.07}>
              <Card className="h-full overflow-hidden">
                <div className="relative aspect-video w-full">
                  <Image
                    src={item.src}
                    alt={t(item.altKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-base">{t(item.titleKey)}</CardTitle>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <section id="team" className="scroll-mt-14 border-t py-16">
        <div className="mx-auto w-full max-w-3xl space-y-10 px-4">
          <FadeIn>
            <div className="space-y-2">
              <p className="text-primary text-sm font-medium tracking-wide uppercase">
                {t("team.eyebrow")}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                {t("team.title")}
              </h2>
            </div>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2">
            <FadeIn delay={0.06}>
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={mestreAlbanoImg}
                    alt={t("team.albano.portraitAlt")}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t("team.albano.name")}
                  </CardTitle>
                  <CardDescription className="text-foreground/80 font-medium">
                    {t("team.albano.role")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t("team.albano.bio")}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
            <FadeIn delay={0.12}>
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={joaoImg}
                    alt={t("team.joao.portraitAlt")}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{t("team.joao.name")}</CardTitle>
                  <CardDescription className="text-foreground/80 font-medium">
                    {t("team.joao.role")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t("team.joao.bio")}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <FadeIn className="mx-auto flex w-full max-w-3xl flex-col items-start gap-6 px-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("cta.title")}
          </h2>
          <p className="max-w-xl text-base leading-relaxed opacity-95">
            {t("cta.body")}
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-secondary-foreground"
            asChild
          >
            <Link href="/join-us">{t("cta.button")}</Link>
          </Button>
        </FadeIn>
      </section>
    </main>
  );
}
