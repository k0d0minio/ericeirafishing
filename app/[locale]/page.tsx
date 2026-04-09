import { getTranslations, setRequestLocale } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

  return (
    <main className="flex flex-1 flex-col">
      <section className="border-b bg-muted/30">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-20">
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
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl space-y-8 px-4 py-16">
        <div className="space-y-6 text-base leading-relaxed">
          <p>{t("about.p1")}</p>
          <p className="text-muted-foreground">{t("about.p2")}</p>
          <p className="text-muted-foreground">{t("about.p3")}</p>
          <p className="text-muted-foreground">{t("about.p4")}</p>
        </div>
        <p className="text-primary font-medium">{t("about.welcome")}</p>
      </section>

      <section
        id="services"
        className="scroll-mt-14 border-t bg-muted/20 py-16"
      >
        <div className="mx-auto w-full max-w-3xl space-y-10 px-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            {t("services.title")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("services.boat.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t("services.boat.body")}
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("services.shore.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {t("services.shore.body")}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-3xl space-y-8 px-4 py-16">
        <h2 className="sr-only">Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {(
            [
              "gallery.previousTrips",
              "gallery.ourFish",
              "gallery.boatAndCrew",
            ] as const
          ).map((key) => (
            <Card key={key} className="overflow-hidden">
              <div className="bg-muted aspect-video w-full" aria-hidden />
              <CardHeader className="pb-4">
                <CardTitle className="text-base">{t(key)}</CardTitle>
                <CardDescription>{t("gallery.placeholder")}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="team" className="scroll-mt-14 border-t py-16">
        <div className="mx-auto w-full max-w-3xl space-y-10 px-4">
          <div className="space-y-2">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              {t("team.eyebrow")}
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t("team.title")}
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("team.albano.name")}</CardTitle>
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
            <Card>
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
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-start gap-6 px-4">
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
        </div>
      </section>
    </main>
  );
}
