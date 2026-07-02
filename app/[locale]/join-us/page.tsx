import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const WHATSAPP_HREF = "https://wa.me/351910645600";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("joinUsTitle"),
    description: t("joinUsDescription"),
  };
}

const tocLinkClass =
  "bg-muted/60 text-foreground hover:bg-muted inline-flex shrink-0 items-center rounded-full px-3 py-2 text-xs font-medium transition-colors sm:text-sm";

export default async function JoinUsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("JoinUs");
  const includedItems = t.raw("includedItems") as string[];
  const notIncludedItems = t.raw("notIncludedItems") as string[];

  const toc = [
    { href: "#join-schedule", label: t("tocSchedule") },
    { href: "#join-included", label: t("tocIncluded") },
    { href: "#join-whatsapp", label: t("tocWhatsapp") },
    { href: "#join-form", label: t("tocForm") },
  ] as const;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-12 px-4 py-12">
      <FadeIn>
        <header id="join-schedule" className="scroll-mt-16 space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("schedule")}
          </p>
        </header>
      </FadeIn>

      <FadeIn delay={0.04}>
        <nav
          className="border-b pb-4"
          aria-label={t("tocLabel")}
        >
          <p className="text-muted-foreground mb-2 text-xs font-medium sm:hidden">
            {t("tocLabel")}
          </p>
          <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {toc.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={cn(tocLinkClass)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </FadeIn>

      <div
        id="join-included"
        className="scroll-mt-16 grid gap-6 sm:grid-cols-2"
      >
        <FadeIn delay={0.06}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">{t("includedTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm leading-relaxed">
                {includedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
        <FadeIn delay={0.12}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">{t("notIncludedTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm leading-relaxed">
                {notIncludedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </FadeIn>
      </div>

      <section
        id="join-whatsapp"
        className="scroll-mt-16 space-y-4"
        aria-labelledby="join-whatsapp-heading"
      >
        <h2 id="join-whatsapp-heading" className="sr-only">
          {t("tocWhatsapp")}
        </h2>
        <FadeIn delay={0.08}>
          <p className="text-foreground leading-relaxed">{t("waitingList")}</p>
          <p className="text-muted-foreground leading-relaxed">{t("reachUs")}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t("community")}
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              {t("whatsappLabel")}
            </a>
          </Button>
        </FadeIn>
      </section>

      <section
        id="join-form"
        className="scroll-mt-16 space-y-4 border-t pt-10"
        aria-labelledby="join-form-heading"
      >
        <FadeIn delay={0.1}>
          <h2 id="join-form-heading" className="text-xl font-semibold tracking-tight">
            {t("formTitle")}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t("formIntro")}
          </p>
          <ContactForm />
        </FadeIn>
      </section>
    </main>
  );
}
