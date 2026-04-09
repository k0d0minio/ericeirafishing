import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export default async function LocaleNotFound() {
  const t = await getTranslations("NotFound");

  return (
    <main className="mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center gap-4 px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">{t("title")}</h1>
      <p className="text-muted-foreground text-sm">{t("description")}</p>
      <Link
        href="/"
        className="text-primary text-sm font-medium underline underline-offset-4"
      >
        {t("homeLink")}
      </Link>
    </main>
  );
}
