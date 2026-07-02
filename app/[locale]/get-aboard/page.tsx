import type { Metadata } from "next";
import { Check, Clock, MessageCircle, Waves } from "lucide-react";

import { site } from "@/lib/site";
import { type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { InstagramIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { WaveDivider } from "@/components/wave-divider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.getAboard.title,
    description: dict.meta.getAboard.description,
  };
}

export default async function GetAboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = await getDictionary(locale);
  const t = dict.getAboardPage;
  const included = dict.siteData.included;

  return (
    <>
      <PageHero
        kicker={t.hero.kicker}
        title={t.hero.title}
        lede={t.hero.lede}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-18">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* trip facts */}
          <div className="space-y-8">
            <Reveal>
              <div className="rounded-lg border border-border bg-card p-7">
                <p className="kicker flex items-center gap-2 text-buoy-deep">
                  <Clock className="size-4" />
                  {t.schedule.kicker}
                </p>
                <p className="mt-3 leading-relaxed">
                  {t.schedule.bodyPrefix}{" "}
                  <strong className="font-semibold">{t.schedule.time1}</strong>{" "}
                  {t.schedule.bodyMid}{" "}
                  <strong className="font-semibold">{t.schedule.time2}</strong>
                  {t.schedule.bodySuffix}
                </p>
                <p className="mt-3 flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Waves className="mt-0.5 size-4 shrink-0 text-seaglass" />
                  {t.schedule.note}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-lg border border-border bg-card p-7">
                <p className="kicker text-buoy-deep">{t.included.kicker}</p>
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
                <p className="kicker text-buoy">{t.whatsapp.kicker}</p>
                <p className="mt-3 text-sm leading-relaxed text-sand/75">
                  {t.whatsapp.body}
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
              <p className="kicker text-buoy-deep">{t.form.kicker}</p>
              <h2 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                {t.form.title}
              </h2>
              <p className="mt-3 mb-8 text-sm leading-relaxed text-muted-foreground">
                {t.form.body}
              </p>
              <BookingForm dict={dict.bookingForm} />
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider className="bg-background text-ink-deep" />
    </>
  );
}
