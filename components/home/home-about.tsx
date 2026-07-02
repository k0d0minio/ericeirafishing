"use client";

import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HomeAboutAccordion() {
  const t = useTranslations("Home.about");

  return (
    <div className="lg:hidden">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="story">
          <AccordionTrigger className="text-base font-semibold">
            {t("storyTitle")}
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base leading-relaxed">{t("p1")}</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="experience">
          <AccordionTrigger className="text-base font-semibold">
            {t("experienceTitle")}
          </AccordionTrigger>
          <AccordionContent>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
              <p>{t("p2")}</p>
              <p>{t("p3")}</p>
              <p>{t("p4")}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
