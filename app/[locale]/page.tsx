import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CircleCheck, Clock, Footprints, Ship, Users } from "lucide-react";

import { HomeAboutAccordion } from "@/components/home/home-about";
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
import joaoImg from "@/lib/joao-juma.jpeg";
import mestreAlbanoImg from "@/lib/mestre-albano.jpg";
import heroImg from "@/lib/mestre-albano-2.jpg";

type Props = {
  params: Promise<{ locale: string }>;
};

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
  const boatBullets = t.raw("services.boat.bullets") as string[];
  const shoreBullets = t.raw("services.shore.bullets") as string[];

  const glanceItems = [
    { key: "boat" as const, icon: Ship },
    { key: "shore" as const, icon: Footprints },
    { key: "hours" as const, icon: Clock },
    { key: "groups" as const, icon: Users },
    { key: "gear" as const, icon: CircleCheck },
  ];

  return (
    <main className="flex flex-1 flex-col">
      <section className="relative border-b">
        <div className="relative min-h-[min(85vh,28rem)] sm:min-h-[32rem]">
          <Image
            src={heroImg}
            alt={t("hero.imageAlt")}
            fill
            priority
            className="object-cover object-[center_40%]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25"
            aria-hidden
          />
          <FadeIn className="relative mx-auto flex min-h-[min(85vh,28rem)] w-full max-w-3xl flex-col justify-end gap-6 px-4 py-16 sm:min-h-[32rem] sm:py-20">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              {t("hero.kicker")}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
              {t("lead")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <Link href="/join-us">{t("hero.bookTrip")}</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/#services">{t("hero.learnMore")}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b bg-muted/25 py-10">
        <div className="mx-auto w-full max-w-3xl px-4">
          <FadeIn>
            <h2 className="mb-6 text-center text-sm font-semibold tracking-wide uppercase">
              {t("glance.title")}
            </h2>
          </FadeIn>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {glanceItems.map(({ key, icon: Icon }, i) => (
              <FadeIn key={key} delay={i * 0.04}>
                <li className="bg-card text-card-foreground flex min-h-[4.5rem] items-center gap-3 rounded-xl border px-4 py-3 shadow-sm">
                  <Icon className="text-primary size-5 shrink-0" aria-hidden />
                  <span className="text-sm font-medium leading-snug">
                    {t(`glance.${key}`)}
                  </span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-16 border-t bg-muted/20 py-16"
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
                <CardContent className="space-y-4">
                  <ul className="text-foreground/90 list-inside list-disc space-y-1 text-sm font-medium">
                    {boatBullets.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  <CardDescription className="space-y-3 text-base leading-relaxed">
                    <p>{t("services.boat.body1")}</p>
                    <p>{t("services.boat.body2")}</p>
                    <p>{t("services.boat.body3")}</p>
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
                <CardContent className="space-y-4">
                  <ul className="text-foreground/90 list-inside list-disc space-y-1 text-sm font-medium">
                    {shoreBullets.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
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
        <HomeAboutAccordion />
        <div className="hidden space-y-10 lg:block">
          <FadeIn className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">
              {t("about.storyTitle")}
            </h2>
            <p className="text-base leading-relaxed">{t("about.p1")}</p>
          </FadeIn>
          <FadeIn className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">
              {t("about.experienceTitle")}
            </h2>
            <div className="space-y-6 text-base leading-relaxed">
              <p className="text-muted-foreground">{t("about.p2")}</p>
              <p className="text-muted-foreground">{t("about.p3")}</p>
              <p className="text-muted-foreground">{t("about.p4")}</p>
            </div>
          </FadeIn>
        </div>
        <FadeIn>
          <p className="text-primary font-medium">{t("about.welcome")}</p>
        </FadeIn>
      </section>

      <section
        id="gallery"
        className="scroll-mt-16 mx-auto w-full max-w-3xl space-y-6 px-4 py-10"
      >
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold tracking-tight">
              {t("galleryTeaser.title")}
            </h2>
            <p className="text-muted-foreground max-w-md text-base leading-relaxed">
              {t("galleryTeaser.body")}
            </p>
          </div>
          <Button size="lg" variant="outline" asChild className="shrink-0">
            <Link href="/gallery">{t("galleryTeaser.cta")}</Link>
          </Button>
        </FadeIn>
      </section>

      <section id="team" className="scroll-mt-16 border-t py-16">
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
              <Card className="overflow-hidden pt-8">
                <div className="flex flex-col items-center px-6 text-center">
                  <div className="bg-muted relative size-36 shrink-0 overflow-hidden rounded-full sm:size-44">
                    <Image
                      src={mestreAlbanoImg}
                      alt={t("team.albano.portraitAlt")}
                      fill
                      className="object-cover object-[center_15%]"
                      sizes="176px"
                    />
                  </div>
                  <CardHeader className="w-full px-0 pb-2">
                    <CardTitle className="text-lg">
                      {t("team.albano.name")}
                    </CardTitle>
                    <CardDescription className="text-foreground/80 font-medium">
                      {t("team.albano.role")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pt-0 pb-8">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t("team.albano.bio")}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </FadeIn>
            <FadeIn delay={0.12}>
              <Card className="overflow-hidden pt-8">
                <div className="flex flex-col items-center px-6 text-center">
                  <div className="bg-muted relative size-36 shrink-0 overflow-hidden rounded-full sm:size-44">
                    <Image
                      src={joaoImg}
                      alt={t("team.joao.portraitAlt")}
                      fill
                      className="object-cover object-[center_20%]"
                      sizes="176px"
                    />
                  </div>
                  <CardHeader className="w-full px-0 pb-2">
                    <CardTitle className="text-lg">{t("team.joao.name")}</CardTitle>
                    <CardDescription className="text-foreground/80 font-medium">
                      {t("team.joao.role")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 pt-0 pb-8">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t("team.joao.bio")}
                    </p>
                  </CardContent>
                </div>
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
