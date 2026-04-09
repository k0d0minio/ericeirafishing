import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContactForm } from "@/components/contact-form";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center gap-8 px-4 py-12">
      <ContactForm />
    </main>
  );
}
