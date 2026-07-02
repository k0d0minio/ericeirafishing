"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { localeHref, stripLocale, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: SiteHeaderProps) {
  const pathname = usePathname();
  const activePath = stripLocale(pathname ?? "/");
  const [scrolled, setScrolled] = React.useState(false);

  const nav = [
    { href: "/", label: dict.nav.home },
    { href: "/fishermen", label: dict.nav.fishermen },
    { href: "/gallery", label: dict.nav.gallery },
    { href: "/faq", label: dict.nav.faq },
  ] as const;

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-sand/15 bg-ink-deep/90 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={localeHref(locale, "/")}
          className="group flex items-center gap-2.5 text-sand"
          aria-label={dict.header.homeAriaLabel}
        >
          <span className="grid size-9 place-items-center rounded-full border border-sand/30 bg-ink/60 transition-colors group-hover:border-buoy group-hover:text-buoy">
            <Anchor className="size-4.5" strokeWidth={1.75} />
          </span>
          <span className="font-display text-lg leading-none font-semibold tracking-wide">
            Ericeira
            <span className="block text-[0.65rem] font-normal tracking-[0.34em] text-sand/70 uppercase">
              Fishing
            </span>
          </span>
        </Link>

        <nav
          aria-label={dict.header.primaryNavLabel}
          className="hidden items-center gap-1 md:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localeHref(locale, item.href)}
              className={cn(
                "kicker rounded-md px-3 py-2 text-sand/75 transition-colors hover:text-sand",
                activePath === item.href && "text-buoy hover:text-buoy"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="ml-3 h-9 rounded-full bg-buoy px-5 font-mono text-xs tracking-[0.18em] text-sand uppercase hover:bg-buoy-deep"
          >
            <Link href={localeHref(locale, "/get-aboard")}>
              {dict.nav.getAboard}
            </Link>
          </Button>
          <LanguageSwitcher locale={locale} dict={dict} activePath={activePath} />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher locale={locale} dict={dict} activePath={activePath} />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                className="text-sand hover:bg-sand/10 hover:text-sand"
                aria-label={dict.header.openMenu}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="theme-ink w-72 border-l border-sand/15"
            >
              <SheetHeader>
                <SheetTitle className="font-display text-sand">
                  {site.name}
                </SheetTitle>
              </SheetHeader>
              <nav
                aria-label={dict.header.mobileNavLabel}
                className="flex flex-col gap-1 px-4"
              >
                {nav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={localeHref(locale, item.href)}
                      className={cn(
                        "kicker rounded-md px-3 py-3 text-sand/80 transition-colors hover:bg-sand/10 hover:text-sand",
                        activePath === item.href && "text-buoy"
                      )}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Link
                    href={localeHref(locale, "/get-aboard")}
                    className="kicker mt-4 rounded-full bg-buoy px-5 py-3 text-center text-sand hover:bg-buoy-deep"
                  >
                    {dict.nav.getAboard}
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
