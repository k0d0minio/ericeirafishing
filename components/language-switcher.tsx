"use client";

import Link from "next/link";
import { Languages } from "lucide-react";

import { cn } from "@/lib/utils";
import { locales, localeHref, localeNames, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type LanguageSwitcherProps = {
  locale: Locale;
  dict: Dictionary;
  /** Current path with the locale segment already stripped, e.g. "/faq". */
  activePath: string;
};

export function LanguageSwitcher({ locale, dict, activePath }: LanguageSwitcherProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={dict.languageSwitcher.label}
          className="kicker ml-1 flex items-center gap-1.5 rounded-full border border-sand/25 px-3 py-1.5 text-sand/80 transition-colors hover:border-buoy hover:text-sand"
        >
          <Languages className="size-3.5" strokeWidth={1.75} />
          {locale.toUpperCase()}
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-40 p-1.5">
        <ul className="flex flex-col">
          {locales.map((option) => (
            <li key={option}>
              <Link
                href={localeHref(option, activePath)}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-foam",
                  option === locale && "font-semibold text-buoy-deep"
                )}
              >
                {localeNames[option]}
              </Link>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
