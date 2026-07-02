import "server-only";

import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/lib/i18n/dictionaries/en").then((m) => m.en),
  pt: () => import("@/lib/i18n/dictionaries/pt").then((m) => m.pt),
  fr: () => import("@/lib/i18n/dictionaries/fr").then((m) => m.fr),
  de: () => import("@/lib/i18n/dictionaries/de").then((m) => m.de),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
