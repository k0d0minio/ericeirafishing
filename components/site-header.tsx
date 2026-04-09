"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <header className="bg-background/80 supports-backdrop-filter:bg-background/60 border-b backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between gap-4 px-4">
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className={cn(
              "hover:text-foreground/80 text-foreground/90 transition-colors",
              pathname === "/" && "text-foreground",
            )}
          >
            {t("home")}
          </Link>
          <Link
            href="/contact"
            className={cn(
              "hover:text-foreground/80 text-foreground/90 transition-colors",
              pathname === "/contact" && "text-foreground",
            )}
          >
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground sr-only sm:not-sr-only sm:mr-2 sm:text-xs">
            {t("language")}
          </span>
          {routing.locales.map((loc) => (
            <Link
              key={loc}
              href={pathname}
              locale={loc}
              className={cn(
                "hover:bg-muted rounded-md px-2 py-1 text-xs font-medium uppercase transition-colors",
                loc === locale && "bg-muted text-foreground",
              )}
            >
              {loc}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
