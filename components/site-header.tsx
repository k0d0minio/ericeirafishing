"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);

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
          href="/"
          className="group flex items-center gap-2.5 text-sand"
          aria-label="Ericeira Fishing — home"
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

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "kicker rounded-md px-3 py-2 text-sand/75 transition-colors hover:text-sand",
                pathname === item.href && "text-buoy hover:text-buoy"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="ml-3 h-9 rounded-full bg-buoy px-5 font-mono text-xs tracking-[0.18em] text-sand uppercase hover:bg-buoy-deep"
          >
            <Link href="/get-aboard">Get aboard</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon-lg"
              className="text-sand hover:bg-sand/10 hover:text-sand md:hidden"
              aria-label="Open menu"
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
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              {nav.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "kicker rounded-md px-3 py-3 text-sand/80 transition-colors hover:bg-sand/10 hover:text-sand",
                      pathname === item.href && "text-buoy"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Link
                  href="/get-aboard"
                  className="kicker mt-4 rounded-full bg-buoy px-5 py-3 text-center text-sand hover:bg-buoy-deep"
                >
                  Get aboard
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
