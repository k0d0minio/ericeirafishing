import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default async function JoinUsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("JoinUs");
  const includedItems = t.raw("includedItems") as string[];
  const notIncludedItems = t.raw("notIncludedItems") as string[];

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-12 px-4 py-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {t("schedule")}
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
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
        <Card>
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
      </div>

      <section className="space-y-4">
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
      </section>

      <section className="space-y-4 border-t pt-10">
        <h2 className="text-xl font-semibold tracking-tight">{t("formTitle")}</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t("formIntro")}
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
