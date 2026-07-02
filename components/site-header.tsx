"use client";

import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { type AppLocale, LocaleFlag } from "@/components/locale-flags";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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

type NavLinkClass = string;

const linkClass: NavLinkClass =
  "hover:text-foreground/80 text-foreground/90 transition-colors";

function NavLinks({
  isHome,
  pathname,
  onNavigate,
  variant,
}: {
  isHome: boolean;
  pathname: string;
  onNavigate?: () => void;
  variant: "mobile" | "desktop";
}) {
  const t = useTranslations("Nav");
  const itemClass =
    variant === "mobile"
      ? "block min-h-11 py-3 text-base font-medium leading-none"
      : "text-sm font-medium";

  return (
    <ul
      className={cn(
        "flex gap-1",
        variant === "mobile" ? "flex-col" : "flex-row flex-wrap items-center gap-6",
      )}
    >
      <li>
        <Link
          href="/"
          onClick={onNavigate}
          className={cn(linkClass, itemClass, pathname === "/" && "text-foreground")}
        >
          {t("home")}
        </Link>
      </li>
      <li>
        {isHome ? (
          <a href="#services" onClick={onNavigate} className={cn(linkClass, itemClass)}>
            {t("services")}
          </a>
        ) : (
          <Link href="/#services" onClick={onNavigate} className={cn(linkClass, itemClass)}>
            {t("services")}
          </Link>
        )}
      </li>
      <li>
        {isHome ? (
          <a href="#team" onClick={onNavigate} className={cn(linkClass, itemClass)}>
            {t("team")}
          </a>
        ) : (
          <Link href="/#team" onClick={onNavigate} className={cn(linkClass, itemClass)}>
            {t("team")}
          </Link>
        )}
      </li>
      {variant === "mobile" ? (
        <li>
          {isHome ? (
            <a href="#gallery" onClick={onNavigate} className={cn(linkClass, itemClass)}>
              {t("galleryOnHome")}
            </a>
          ) : (
            <Link href="/#gallery" onClick={onNavigate} className={cn(linkClass, itemClass)}>
              {t("galleryOnHome")}
            </Link>
          )}
        </li>
      ) : null}
      <li>
        <Link
          href="/gallery"
          onClick={onNavigate}
          className={cn(linkClass, itemClass, pathname === "/gallery" && "text-foreground")}
        >
          {t("gallery")}
        </Link>
      </li>
      <li>
        <Link
          href="/join-us"
          onClick={onNavigate}
          className={cn(linkClass, itemClass, pathname === "/join-us" && "text-foreground")}
        >
          {t("joinUs")}
        </Link>
      </li>
    </ul>
  );
}

function LanguageList({
  onPick,
  className,
}: {
  onPick?: () => void;
  className?: string;
}) {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const locale = useLocale() as AppLocale;

  return (
    <ul className={cn("flex flex-col gap-0.5", className)}>
      {LOCALES.map((loc) => (
        <li key={loc}>
          <Link
            href={pathname}
            locale={loc}
            onClick={onPick}
            className={cn(
              "flex min-h-11 items-center gap-2 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-muted md:min-h-0",
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
  );
}

export function SiteHeader() {
  const tNav = useTranslations("Nav");
  const tMeta = useTranslations("Metadata");
  const pathname = usePathname();
  const locale = useLocale() as AppLocale;
  const isHome = pathname === "/";
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-4xl items-center justify-between gap-3 px-4 md:h-14">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Link
            href="/"
            className="text-foreground truncate text-base font-semibold tracking-tight"
          >
            {tMeta("siteTitle")}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <nav
            className="hidden md:flex md:items-center"
            aria-label={tNav("primaryNav")}
          >
            <NavLinks isHome={isHome} pathname={pathname} variant="desktop" />
          </nav>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon-lg"
                className="md:hidden"
                aria-label={tNav("openMenu")}
              >
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)] gap-0 p-0">
              <SheetHeader className="border-b p-4 text-left">
                <SheetTitle className="font-heading text-lg">
                  {tMeta("siteTitle")}
                </SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-1 flex-col gap-6 overflow-y-auto p-4"
                aria-label={tNav("primaryNav")}
              >
                <NavLinks
                  isHome={isHome}
                  pathname={pathname}
                  onNavigate={() => setMobileOpen(false)}
                  variant="mobile"
                />
                <div className="border-t pt-4">
                  <p className="text-muted-foreground mb-2 px-2 text-xs font-medium">
                    {tNav("language")}
                  </p>
                  <LanguageList onPick={() => setMobileOpen(false)} />
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Popover open={langOpen} onOpenChange={setLangOpen}>
            <PopoverTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="hidden gap-2 px-2 md:inline-flex"
                aria-label={tNav("changeLanguage")}
              >
                <LocaleFlag locale={locale} />
                <span className="text-xs font-semibold tracking-wide uppercase">
                  {locale}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto min-w-44 p-1">
              <p className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                {tNav("language")}
              </p>
              <LanguageList onPick={() => setLangOpen(false)} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
