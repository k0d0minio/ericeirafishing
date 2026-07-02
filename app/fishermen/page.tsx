import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SmartImage } from "@/components/smart-image";
import { WaveDivider } from "@/components/wave-divider";

export const metadata: Metadata = {
  title: "The Fishermen of Ericeira",
  description:
    "The story of the men who built a village from the sea — Ericeira's fishing heritage, Praia dos Pescadores, and the traditions carried forward on every trip.",
};

const chapters = [
  {
    title: "A village built around the ocean",
    paragraphs: [
      "For centuries, the sea was the livelihood of the people of Ericeira.",
      "Every morning, wooden boats would leave the shore carrying men whose lives depended on their knowledge of the ocean. There were no weather apps, GPS systems, or modern electronics. Experience, instinct, and respect for the sea were often the difference between returning home safely or not returning at all.",
      "Fishing was never just a profession. It was a way of life.",
      "Children grew up watching their fathers prepare nets and lines. Stories of storms, giant catches, and difficult days at sea were passed down from one generation to the next. The rhythm of daily life in Ericeira was dictated by the tides, the winds, and the Atlantic itself.",
    ],
  },
  {
    title: "Life was hard, but it was honest",
    paragraphs: [
      "Fishing in Ericeira was never easy.",
      "The Atlantic Ocean along this stretch of coast is beautiful, but it can also be unforgiving. Strong currents, rough seas, and unpredictable weather made every trip an adventure.",
      "Many fishermen left home before dawn and returned after long hours at sea. Some days brought abundant catches. Other days brought little more than fatigue and hope for tomorrow.",
      "Yet despite the hardships, many local fishermen would tell you they would not have chosen another life.",
      "There was pride in providing for their families. Pride in understanding the sea. Pride in continuing a tradition that stretched back generations.",
    ],
  },
  {
    title: "Praia dos Pescadores: the heart of Ericeira",
    image: {
      src: "/images/praia-dos-pescadores.jpg",
      alt: "Fishing boats on the sand at Praia dos Pescadores",
      caption: "Praia dos Pescadores — the beating heart of village life",
    },
    paragraphs: [
      "Today, Praia dos Pescadores is one of the most photographed places in Ericeira.",
      "Visitors see a beautiful beach framed by whitewashed houses and the Atlantic Ocean. But for locals, this beach has always represented something much deeper.",
      "For decades, boats were launched directly from the sand. Families gathered to help unload the day's catch. Nets were repaired on the beach, and children played among the boats while learning the traditions that defined their community.",
      "The beach wasn't simply a place where fishing happened. It was the beating heart of village life.",
    ],
  },
  {
    title: "Knowledge passed through generations",
    paragraphs: [
      "One of the most remarkable things about traditional fishing is that much of its knowledge was never written down.",
      "Fishermen learned by watching.",
      "They learned how to read the ocean, how to identify productive fishing grounds, how to predict weather changes, and how different species behaved throughout the seasons. The sea became their classroom.",
      "This knowledge was passed from fathers to sons, from grandparents to grandchildren, preserving techniques and traditions that continue to survive today.",
      "Even with modern equipment, many local fishermen still rely on instincts developed through years of experience on the water.",
    ],
  },
  {
    title: "The changing face of Ericeira",
    paragraphs: [
      "Over the last few decades, Ericeira has transformed dramatically.",
      "Tourism has grown. Surfing has brought international recognition. New businesses, restaurants, and visitors have changed the pace of life in the village.",
      "Yet the fishing heritage remains deeply woven into Ericeira's identity.",
      "The boats are still there. The stories are still there.",
      "And every morning, local fishermen continue to head out to sea, carrying forward traditions that helped shape the village long before it became famous around the world.",
    ],
  },
  {
    title: "Experiencing the real Ericeira",
    paragraphs: [
      "To truly understand Ericeira, you have to understand its connection to the ocean.",
      "Beyond the surf schools, cafés, and viewpoints lies a much older story. A story of resilience, hard work, family, and respect for nature. It is the story of the fishermen who built this village.",
      "When you fish in Ericeira today, you are not simply enjoying a day on the water. You are connecting with a tradition that has defined this coastline for generations.",
      "You are experiencing a small part of what has always made Ericeira special. And for a few hours, you become part of that story.",
    ],
  },
] as const;

export default function FishermenPage() {
  return (
    <>
      <PageHero
        kicker="Context · The story behind the trips"
        title="The Fishermen of Ericeira: the men who built a village from the sea"
        lede="Before Ericeira became known for world-class waves and surf culture, it was known for something else entirely: its fishermen. Long before visitors arrived with surfboards under their arms, generations of local men headed into the Atlantic before sunrise, returning only when the sea allowed them to."
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20">
        <p className="font-display text-xl leading-relaxed font-medium text-balance md:text-2xl">
          The story of Ericeira is, in many ways, the story of these fishermen
          and their families.
        </p>

        {chapters.map((chapter) => (
          <Reveal key={chapter.title}>
            <section className="mt-14">
              <div className="tide-rule mb-10 text-ink" />
              <h2 className="font-display text-2xl font-semibold text-balance md:text-3xl">
                {chapter.title}
              </h2>
              {"image" in chapter && chapter.image ? (
                <figure className="mt-8">
                  <SmartImage
                    src={chapter.image.src}
                    alt={chapter.image.alt}
                    className="aspect-[16/10] w-full rounded-lg border border-border"
                    sizes="(min-width: 768px) 44rem, 92vw"
                  />
                  <figcaption className="kicker mt-3 text-muted-foreground">
                    {chapter.image.caption}
                  </figcaption>
                </figure>
              ) : null}
              {chapter.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mt-5 leading-relaxed text-foreground/85"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          </Reveal>
        ))}
      </article>

      <section className="relative">
        <WaveDivider className="bg-background text-ink-deep" />
        <div className="theme-ink bg-chart-grid-dark">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-20">
            <Reveal>
              <p className="kicker text-buoy">
                Discover traditional fishing in Ericeira
              </p>
              <p className="mt-5 font-display text-2xl leading-snug font-medium text-balance text-sand md:text-3xl">
                At Ericeira Fishing, we share more than techniques and fishing
                spots. We share local knowledge, traditions, and a genuine
                connection to the sea that has shaped this village for
                centuries.
              </p>
              <p className="mt-5 leading-relaxed text-sand/70">
                Whether you&apos;re an experienced angler or trying fishing for
                the first time, our goal is simple: to help you experience the
                authentic side of Ericeira, one cast at a time.
              </p>
              <Button
                asChild
                className="mt-9 h-12 rounded-full bg-buoy px-7 font-mono text-xs tracking-[0.2em] text-sand uppercase hover:bg-buoy-deep"
              >
                <Link href="/get-aboard">
                  Become part of the story
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
