import type { Metadata } from "next";

import { faqs } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Everything you need to know before a fishing trip in Ericeira — experience, equipment, licences, weather, species, and how to book.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        kicker="Before you cast off"
        title="Frequently asked questions"
        lede="Everything you need to know before heading out — experience, gear, weather, what you can catch, and how to book."
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-18">
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={faq.q}>
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
        kicker="Still wondering something?"
        title="Ask us directly — we're quick on WhatsApp"
        body="Or join the waiting list and we'll get back to you with the next available spots."
        buttonLabel="Join the waiting list"
      />
    </>
  );
}
