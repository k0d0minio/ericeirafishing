import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Rise } from "@/components/motion";
import { WaveDivider } from "@/components/wave-divider";
import { CompassRose } from "@/components/compass-rose";

type PageHeroProps = {
  kicker: string;
  title: string;
  lede?: string;
  children?: ReactNode;
  className?: string;
};

/**
 * Dark ink banner used at the top of every inner page — it also gives the
 * fixed translucent header something to sit on before the user scrolls.
 */
export function PageHero({ kicker, title, lede, children, className }: PageHeroProps) {
  return (
    <section className={cn("theme-ink relative overflow-hidden", className)}>
      <div className="bg-chart-grid-dark absolute inset-0" aria-hidden />
      <CompassRose className="absolute -right-16 -bottom-24 size-72 text-sand/10 md:size-96" />
      <div className="relative mx-auto max-w-6xl px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-20">
        <Rise>
          <p className="kicker text-buoy">{kicker}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-balance text-sand md:text-6xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand/75">
              {lede}
            </p>
          ) : null}
          {children}
        </Rise>
      </div>
      <WaveDivider className="relative text-background" />
    </section>
  );
}
