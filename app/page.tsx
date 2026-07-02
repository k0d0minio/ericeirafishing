import Link from "next/link";
import {
  Anchor,
  ArrowRight,
  Clock,
  Fish,
  LifeBuoy,
  MapPin,
  MessageCircle,
  Sailboat,
  Users,
  Waves,
} from "lucide-react";

import { faqs, included, site, species, team } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BoatIllustration } from "@/components/boat-illustration";
import { CompassRose } from "@/components/compass-rose";
import { Reveal, Rise } from "@/components/motion";
import { SmartImage } from "@/components/smart-image";
import { WaveDivider } from "@/components/wave-divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpeciesMarquee />
      <AtAGlance />
      <StoryTeaser />
      <Services />
      <Team />
      <GalleryTeaser />
      <FaqTeaser />
      <WaitingListCta />
    </>
  );
}

function Hero() {
  return (
    <section className="theme-ink relative overflow-hidden">
      <div className="bg-chart-grid-dark absolute inset-0" aria-hidden />
      <CompassRose className="absolute -top-20 -left-24 size-80 text-sand/8" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-32 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-40 lg:pb-28">
        <div>
          <Rise>
            <p className="kicker flex items-center gap-2 text-buoy">
              <MapPin className="size-3.5" />
              Ericeira · Portugal · {site.coordinates}
            </p>
          </Rise>
          <Rise delay={0.1}>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] font-semibold text-balance text-sand md:text-7xl">
              Connect with Ericeira&apos;s roots —{" "}
              <em className="text-gold">and bring dinner home</em>
            </h1>
          </Rise>
          <Rise delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/75">
              Experience the real Ericeira. Get to know the local fishermen and
              learn to fish by boat or shore, on one of Portugal&apos;s most
              iconic coastlines.
            </p>
          </Rise>
          <Rise delay={0.3}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-12 rounded-full bg-buoy px-7 font-mono text-xs tracking-[0.2em] text-sand uppercase hover:bg-buoy-deep"
              >
                <Link href="/get-aboard">
                  Get aboard
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-sand/30 bg-transparent px-7 font-mono text-xs tracking-[0.2em] text-sand uppercase hover:bg-sand/10 hover:text-sand dark:bg-transparent dark:hover:bg-sand/10"
              >
                <Link href="/fishermen">Meet the fishermen</Link>
              </Button>
            </div>
          </Rise>
        </div>

        <Rise delay={0.25} className="relative">
          {/* postcard-framed hero photo */}
          <div className="relative mx-auto max-w-md rotate-2 rounded-sm bg-sand p-3 pb-14 shadow-2xl shadow-black/40 transition-transform duration-500 hover:rotate-0">
            <SmartImage
              src="/images/hero.jpg"
              alt="Fishing boat off the Ericeira coast at sunrise"
              className="aspect-[4/5] w-full"
              sizes="(min-width: 1024px) 28rem, 90vw"
              priority
            />
            <p className="absolute bottom-4 left-4 font-mono text-[0.65rem] tracking-[0.2em] text-ink/60 uppercase">
              Praia dos Pescadores, est. tradition
            </p>
            <span className="absolute -top-3 right-8 h-7 w-24 -rotate-3 bg-rope/60 mix-blend-multiply" />
          </div>
          <BoatIllustration className="animate-bob absolute -bottom-10 -left-6 w-40 text-seaglass/80 md:w-48" />
        </Rise>
      </div>

      <WaveDivider className="relative text-buoy" />
    </section>
  );
}

function SpeciesMarquee() {
  const loop = [...species, ...species];
  return (
    <div className="overflow-hidden bg-buoy py-3 text-sand" aria-hidden>
      <div className="animate-drift flex w-max">
        {[...loop, ...loop].map((name, i) => (
          <span key={i} className="kicker flex items-center gap-3 px-6">
            <Fish className="size-4" strokeWidth={1.75} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

const glance = [
  {
    icon: Users,
    title: "All ages welcome",
    body: "Beginners, families with children, and seasoned anglers — every trip is guided from the first cast.",
  },
  {
    icon: LifeBuoy,
    title: "Everything included",
    body: "Rods, bait, daily licence, and vest are all provided. Just bring sunscreen, water, and a camera.",
  },
  {
    icon: Anchor,
    title: "Truly local",
    body: "You fish with crews who grew up on this harbour — carrying traditions that shaped the village for generations.",
  },
] as const;

function AtAGlance() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-buoy-deep">The short of it</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-balance md:text-4xl">
            A day at sea, the way Ericeira has always done it
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {glance.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.12}>
              <div className="group h-full rounded-lg border border-border bg-card p-7 transition-colors hover:border-buoy/50">
                <span className="grid size-11 place-items-center rounded-full bg-foam text-ink transition-colors group-hover:bg-buoy group-hover:text-sand">
                  <item.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StoryTeaser() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-chart-grid py-20 md:py-28">
      <CompassRose className="absolute -right-20 -bottom-28 size-80 text-ink/8" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto max-w-sm -rotate-2 rounded-sm bg-card p-3 pb-12 shadow-xl shadow-ink/15">
              <SmartImage
                src="/images/praia-dos-pescadores.jpg"
                alt="Fishing boats pulled up on Praia dos Pescadores"
                className="aspect-square w-full"
                sizes="(min-width: 1024px) 24rem, 80vw"
              />
              <p className="absolute bottom-4 left-4 font-mono text-[0.65rem] tracking-[0.2em] text-ink/60 uppercase">
                Praia dos Pescadores
              </p>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="kicker text-buoy-deep">The fishermen of Ericeira</p>
              <blockquote className="mt-5 font-display text-3xl leading-snug font-medium text-balance italic md:text-4xl">
                “Fishing was never just a profession. It was a way of life.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                Before Ericeira became known for world-class waves and surf
                culture, it was known for something else entirely: its
                fishermen. Ericeira Fishing was born from a deep connection to
                the sea and the fishing traditions of this village — and every
                trip carries that story forward.
              </p>
              <div className="tide-rule mt-8 max-w-xl text-ink" />
              <Button
                asChild
                variant="link"
                className="mt-6 gap-2 px-0 font-mono text-xs tracking-[0.2em] text-buoy-deep uppercase"
              >
                <Link href="/fishermen">
                  Read the whole story
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    id: "boat",
    icon: Sailboat,
    image: "/images/boat-fishing.jpg",
    imageAlt: "Guests fishing from the boat with the skipper",
    kicker: "Trip Nº 01 · By boat",
    title: "Meet the fishermen — boat fishing",
    body: "A guided excursion with a tour of the port and time with the local fishermen. You'll fish with an experienced skipper and crew, with all equipment and required fishing licences included. Groups are kept small for personal attention and safety.",
    details: [
      { icon: Clock, text: "Usually 6 AM – 1 PM" },
      { icon: Users, text: "Small groups only" },
      { icon: LifeBuoy, text: "Gear, licence & vest included" },
    ],
  },
  {
    id: "shore",
    icon: Waves,
    image: "/images/shore-fishing.jpg",
    imageAlt: "Shore fishing from the rocks along the Ericeira coastline",
    kicker: "Trip Nº 02 · From shore",
    title: "Shore fishing",
    body: "A half-day coastal experience designed for everyone — all skill levels and ages. Local fishermen teach you the techniques for catching regional species from Ericeira's beautiful coastline. Small groups keep it welcoming and relaxed. Shore sessions depend on tide, wind, and other meteorological factors.",
    details: [
      { icon: Clock, text: "Half-day session" },
      { icon: Users, text: "Great for beginners & families" },
      { icon: Waves, text: "Runs with tide & weather" },
    ],
  },
] as const;

function Services() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-buoy-deep">Two ways out</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold text-balance md:text-4xl">
            Choose your water: by boat or from the shore
          </h2>
        </Reveal>

        <div className="mt-14 space-y-16">
          {services.map((service, i) => (
            <Reveal key={service.id}>
              <article
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <SmartImage
                  src={service.image}
                  alt={service.imageAlt}
                  className="aspect-[3/2] w-full rounded-lg border border-border shadow-lg shadow-ink/10"
                  sizes="(min-width: 1024px) 34rem, 92vw"
                />
                <div className="ticket-edge rounded-lg border border-border bg-card p-8 md:p-10">
                  <p className="kicker flex items-center gap-2.5 text-buoy-deep">
                    <service.icon className="size-4" strokeWidth={1.75} />
                    {service.kicker}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.details.map((d) => (
                      <li
                        key={d.text}
                        className="flex items-center gap-3 text-sm"
                      >
                        <d.icon className="size-4 text-buoy-deep" strokeWidth={1.75} />
                        {d.text}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-8 h-11 rounded-full bg-primary px-6 font-mono text-xs tracking-[0.2em] uppercase"
                  >
                    <Link href="/get-aboard">
                      Reserve a spot
                      <ArrowRight data-icon="inline-end" className="size-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-chart-grid py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="kicker text-buoy-deep">The crew</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-balance md:text-4xl">
            Guided by people who know these waters inside out
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.12}>
              <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card sm:flex-row">
                <SmartImage
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role.toLowerCase()}`}
                  className="aspect-[4/5] w-full sm:w-56 sm:shrink-0"
                  sizes="(min-width: 640px) 14rem, 92vw"
                />
                <div className="flex flex-col justify-center p-7">
                  <p className="kicker text-buoy-deep">{member.role}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const galleryPreview = [
  { src: "/images/gallery-01.jpg", alt: "Group fishing on the boat" },
  { src: "/images/gallery-02.jpg", alt: "Film photo — out on the water" },
  { src: "/images/gallery-04.jpg", alt: "Film photo — hauling the lines" },
  { src: "/images/gallery-06.jpg", alt: "Film photo — the day's catch" },
] as const;

function GalleryTeaser() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker text-buoy-deep">From the logbook</p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">
                Gallery
              </h2>
            </div>
            <Button
              asChild
              variant="link"
              className="gap-2 px-0 font-mono text-xs tracking-[0.2em] text-buoy-deep uppercase"
            >
              <Link href="/gallery">
                View all photos
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryPreview.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 0.08}>
              <SmartImage
                src={photo.src}
                alt={photo.alt}
                className={`w-full rounded-md border border-border ${
                  i % 2 === 0 ? "aspect-[4/5]" : "aspect-[4/5] md:mt-8"
                }`}
                sizes="(min-width: 768px) 22vw, 45vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqTeaser() {
  const preview = faqs.slice(0, 4);
  return (
    <section className="border-t border-border py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="kicker text-buoy-deep">Before you cast off</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-balance md:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            No experience needed, gear is included, and yes — you keep the
            fish. The full list covers everything else.
          </p>
          <Button
            asChild
            variant="link"
            className="mt-4 gap-2 px-0 font-mono text-xs tracking-[0.2em] text-buoy-deep uppercase"
          >
            <Link href="/faq">
              All {faqs.length} questions
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {preview.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left font-display text-lg font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function WaitingListCta() {
  return (
    <section className="relative">
      <WaveDivider className="bg-background text-ink-deep" />
      <div className="theme-ink relative overflow-hidden">
        <div className="bg-chart-grid-dark absolute inset-0" aria-hidden />
        <BoatIllustration className="animate-bob absolute right-6 bottom-6 hidden w-44 text-sand/15 lg:block" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 md:py-24">
          <Reveal>
            <p className="kicker text-buoy">Limited spots · Small groups</p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold text-balance text-sand md:text-5xl">
              Our trips are carefully planned for a limited number of people
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-sand/70">
              Join the waiting list to know the next spot available — included
              on every trip: {included.slice(0, 4).join(", ").toLowerCase()},
              and bringing your own fish home.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                className="h-12 rounded-full bg-buoy px-7 font-mono text-xs tracking-[0.2em] text-sand uppercase hover:bg-buoy-deep"
              >
                <Link href="/get-aboard">
                  Join the waiting list
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
