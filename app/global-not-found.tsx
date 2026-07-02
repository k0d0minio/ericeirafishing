import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { defaultLocale } from "@/lib/i18n/config";
import { Button } from "@/components/ui/button";
import { BoatIllustration } from "@/components/boat-illustration";

import "./globals.css";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

/**
 * Global 404 for URLs that don't match any route at all. Because the root
 * layout lives under app/[locale]/layout.tsx (a top-level dynamic segment),
 * Next.js can't compose a normal not-found page here — see the
 * `globalNotFound` experimental flag in next.config.ts. This bypasses
 * rendering entirely, so it stays hardcoded in English and imports its own
 * global styles.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="antialiased">
        <section className="theme-ink bg-chart-grid-dark relative overflow-hidden">
          <div className="mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-center px-4 py-32 text-center sm:px-6">
            <BoatIllustration className="animate-bob w-48 text-seaglass/70" />
            <p className="kicker mt-10 text-buoy">404 · Off the chart</p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-balance text-sand md:text-5xl">
              This page drifted out to sea
            </h1>
            <p className="mt-4 max-w-md leading-relaxed text-sand/70">
              The page you are looking for does not exist. Let&apos;s get you
              back to the harbour.
            </p>
            <Button
              asChild
              className="mt-8 h-11 rounded-full bg-buoy px-6 font-mono text-xs tracking-[0.2em] text-sand uppercase hover:bg-buoy-deep"
            >
              <Link href={`/${defaultLocale}`}>
                <ArrowLeft data-icon="inline-start" className="size-4" />
                Back to home
              </Link>
            </Button>
          </div>
        </section>
      </body>
    </html>
  );
}
