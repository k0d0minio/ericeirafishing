import type { Metadata } from "next";
import { Check, Clock, MessageCircle, Waves } from "lucide-react";

import { included, site } from "@/lib/site";
import { InstagramIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "Get Aboard",
  description:
    "Join the waiting list for a boat or shore fishing trip in Ericeira. Trip times, what's included, WhatsApp, and the booking form — all in one place.",
};

export default function GetAboardPage() {
  return (
    <>
      <PageHero
        kicker="Get aboard · Waiting list"
        title="Ready to bring dinner home?"
        lede="Our trips are carefully planned and for a limited number of people. Join the waiting list to know the next spot available."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-18">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* trip facts */}
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-lg border border-border bg-card p-7">
                <p className="kicker flex items-center gap-2 text-buoy-deep">
                  <Clock className="size-4" />
                  Schedule
                </p>
                <p className="mt-3 leading-relaxed">
                  Our boat trips usually start around{" "}
                  <strong className="font-semibold">6 AM</strong> and finish
                  around <strong className="font-semibold">1 PM</strong>.
                </p>
                <p className="mt-3 flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Waves className="mt-0.5 size-4 shrink-0 text-seaglass" />
                  Shore fishing depends on tide, wind, and other meteorological
                  factors — we&apos;ll confirm timing with you.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-lg border border-border bg-card p-7">
                <p className="kicker text-buoy-deep">What&apos;s included</p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm">
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-foam text-buoy-deep">
                        <Check className="size-3" strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="theme-ink bg-chart-grid-dark rounded-lg p-7">
                <p className="kicker text-buoy">Faster on WhatsApp?</p>
                <p className="mt-3 text-sm leading-relaxed text-sand/75">
                  Message us directly and we&apos;ll reply with what fits —
                  boat or shore, and the next opening.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button
                    asChild
                    className="h-11 rounded-full bg-buoy font-mono text-xs tracking-[0.18em] text-sand uppercase hover:bg-buoy-deep"
                  >
                    <a
                      href={site.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle data-icon="inline-start" className="size-4" />
                      {site.whatsappNumber}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-sand/30 bg-transparent font-mono text-xs tracking-[0.18em] text-sand uppercase hover:bg-sand/10 hover:text-sand dark:bg-transparent dark:hover:bg-sand/10"
                  >
                    <a
                      href={site.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon data-icon="inline-start" className="size-4" />
                      {site.instagramHandle}
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* booking form */}
          <Reveal delay={0.15}>
            <div className="rounded-lg border border-border bg-card p-7 md:p-10">
              <p className="kicker text-buoy-deep">Join via the form</p>
              <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                Join the waiting list
              </h2>
              <p className="mt-3 mb-8 text-sm leading-relaxed text-muted-foreground">
                Tell us boat or shore and when you&apos;re free. We&apos;ll
                reply with what fits and add you to the list for the next
                opening — or just ask us a general question.
              </p>
              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider className="bg-background text-ink-deep" />
    </>
  );
}
