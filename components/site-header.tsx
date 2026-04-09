"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { type AppLocale, LocaleFlag } from "@/components/locale-flags";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALES = routing.locales as readonly AppLocale[];

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

export function SiteHeader() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const locale = useLocale() as AppLocale;
  const isHome = pathname === "/";
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="bg-background/80 supports-backdrop-filter:bg-background/60 border-b backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between gap-4 px-4">
        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium sm:gap-6">
          <Link
            href="/"
            className={cn(
              "hover:text-foreground/80 text-foreground/90 transition-colors",
              pathname === "/" && "text-foreground",
            )}
          >
            {t("home")}
          </Link>
          {isHome ? (
            <>
              <a
                href="#services"
                className="hover:text-foreground/80 text-foreground/90 transition-colors"
              >
                {t("services")}
              </a>
              <a
                href="#team"
                className="hover:text-foreground/80 text-foreground/90 transition-colors"
              >
                {t("team")}
              </a>
            </>
          ) : (
            <>
              <Link
                href="/#services"
                className="hover:text-foreground/80 text-foreground/90 transition-colors"
              >
                {t("services")}
              </Link>
              <Link
                href="/#team"
                className="hover:text-foreground/80 text-foreground/90 transition-colors"
              >
                {t("team")}
              </Link>
            </>
          )}
          <Link
            href="/join-us"
            className={cn(
              "hover:text-foreground/80 text-foreground/90 transition-colors",
              pathname === "/join-us" && "text-foreground",
            )}
          >
            {t("joinUs")}
          </Link>
        </nav>
        <Popover open={langOpen} onOpenChange={setLangOpen}>
          <PopoverTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-2 px-2"
              aria-label={t("changeLanguage")}
            >
              <LocaleFlag locale={locale} />
              <span className="text-xs font-semibold tracking-wide uppercase">
                {locale}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-auto min-w-44 p-1">
            <p className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
              {t("language")}
            </p>
            <ul className="flex flex-col gap-0.5">
              {LOCALES.map((loc) => (
                <li key={loc}>
                  <Link
                    href={pathname}
                    locale={loc}
                    onClick={() => setLangOpen(false)}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-muted",
                      loc === locale && "bg-muted text-foreground",
                    )}
                    aria-current={loc === locale ? "true" : undefined}
                  >
                    <LocaleFlag locale={loc} />
                    <span>{localeLabel(loc, t)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
