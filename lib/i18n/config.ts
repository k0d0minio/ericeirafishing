export const locales = ["pt", "en", "fr", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  fr: "Français",
  de: "Deutsch",
};

/** BCP-47 tags used for <html lang> and Open Graph locale metadata. */
export const htmlLang: Record<Locale, string> = {
  pt: "pt-PT",
  en: "en-US",
  fr: "fr-FR",
  de: "de-DE",
};

export const ogLocale: Record<Locale, string> = {
  pt: "pt_PT",
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Builds an internal href prefixed with the given locale. */
export function localeHref(locale: Locale, path: string = "/") {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

/** Strips a leading `/xx` locale segment from a pathname, if present. */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && isLocale(segments[1])) {
    const rest = "/" + segments.slice(2).join("/");
    return rest === "/" ? "/" : rest.replace(/\/+$/, "") || "/";
  }
  return pathname;
}
