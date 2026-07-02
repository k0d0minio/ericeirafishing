import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { WaveDivider } from "@/components/wave-divider";

type CtaBandProps = {
  kicker?: string;
  title: string;
  body?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

/** Ink call-to-action band that closes a light page and flows into the footer. */
export function CtaBand({
  kicker = "Limited spots · Small groups",
  title,
  body,
  buttonLabel = "Get aboard",
  buttonHref = "/get-aboard",
}: CtaBandProps) {
  return (
    <section className="relative">
      <WaveDivider className="bg-background text-ink-deep" />
      <div className="theme-ink bg-chart-grid-dark">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 md:py-20">
          <Reveal>
            <p className="kicker text-buoy">{kicker}</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-balance text-sand md:text-4xl">
              {title}
            </h2>
            {body ? (
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-sand/70">
                {body}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="h-12 rounded-full bg-buoy px-7 font-mono text-xs tracking-[0.2em] text-sand uppercase hover:bg-buoy-deep"
              >
                <Link href={buttonHref}>
                  {buttonLabel}
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-sand/30 bg-transparent px-7 font-mono text-xs tracking-[0.2em] text-sand uppercase hover:bg-sand/10 hover:text-sand dark:bg-transparent dark:hover:bg-sand/10"
              >
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle data-icon="inline-start" className="size-4" />
                  WhatsApp us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
