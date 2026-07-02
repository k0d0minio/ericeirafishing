"use client";

import { useLocale, useTranslations } from "next-intl";

import { type AppLocale, LocaleFlag } from "@/components/locale-flags";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALES = routing.locales as readonly AppLocale[];
const WHATSAPP_HREF = "https://wa.me/351910645600";

function localeLabel(loc: AppLocale, t: (key: string) => string) {
  switch (loc) {
    case "en":
      return t("localeEn");
    case "fr":
      return t("localeFr");
    case "pt":
      return t("localePt");
    default: {
      const _x: never = loc;
      return _x;
    }
  }
}

const footerLinkClass =
  "text-muted-foreground hover:text-foreground min-h-10 inline-flex items-center text-sm transition-colors";

export function SiteFooter() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const pathname = usePathname();
  const locale = useLocale() as AppLocale;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/20">
      <div className="mx-auto grid w-full max-w-4xl gap-10 px-4 py-12 sm:grid-cols-2">
        <div className="space-y-4">
          <p className="text-foreground text-sm font-semibold">{t("bookTitle")}</p>
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="/join-us" className={footerLinkClass}>
                {tNav("joinUs")}
              </Link>
            </li>
            <li>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={footerLinkClass}
              >
                {t("whatsapp")}
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-foreground text-sm font-semibold">{t("exploreTitle")}</p>
          <ul className="flex flex-col gap-1">
            <li>
              <Link href="/gallery" className={footerLinkClass}>
                {tNav("gallery")}
              </Link>
            </li>
            <li>
              <Link href="/#services" className={footerLinkClass}>
                {t("servicesOnHome")}
              </Link>
            </li>
            <li>
              <Link href="/#team" className={footerLinkClass}>
                {t("teamOnHome")}
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className={footerLinkClass}>
                {tNav("galleryOnHome")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted-foreground text-sm">
            © {year} {t("copyrightName")}
          </p>
          <div className="flex flex-wrap gap-2">
            {LOCALES.map((loc) => (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                className={cn(
                  "inline-flex min-h-10 items-center gap-1.5 rounded-md border border-transparent px-2 text-xs font-semibold tracking-wide uppercase transition-colors hover:bg-muted",
                  loc === locale && "bg-muted text-foreground",
                )}
                aria-current={loc === locale ? "true" : undefined}
              >
                <LocaleFlag locale={loc} />
                {localeLabel(loc, tNav)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
