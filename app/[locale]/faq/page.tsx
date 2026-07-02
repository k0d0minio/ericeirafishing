import type { Metadata } from "next";

import { type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.faq.title,
    description: dict.meta.faq.description,
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = await getDictionary(locale);
  const t = dict.faqPage;
  const faqs = dict.siteData.faqs;

  return (
    <>
      <PageHero
        kicker={t.hero.kicker}
        title={t.hero.title}
        lede={t.hero.lede}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-18">
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={faq.q}>
                <AccordionTrigger className="gap-4 text-left font-display text-lg font-medium">
                  <span className="flex items-baseline gap-4">
                    <span className="kicker shrink-0 text-buoy-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-11 leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      <CtaBand
        locale={locale}
        dict={dict}
        kicker={t.cta.kicker}
        title={t.cta.title}
        body={t.cta.body}
        buttonLabel={t.cta.buttonLabel}
      />
    </>
  );
}
