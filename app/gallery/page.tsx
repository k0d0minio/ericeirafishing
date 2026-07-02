import type { Metadata } from "next";

import { gallerySlots, site } from "@/lib/site";
import { InstagramIcon } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SmartImage } from "@/components/smart-image";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from boat and shore fishing trips along the Ericeira coast — the water, the catch, and life in the harbour.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        kicker="From the logbook"
        title="Gallery"
        lede="Moments from boat days, shore sessions, and our skippers along the Ericeira coast — the water, the catch, and life in the harbour."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-18">
        <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
          {gallerySlots.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.08} className="break-inside-avoid">
              <SmartImage
                src={photo.src}
                alt={photo.alt}
                className={`w-full rounded-md border border-border shadow-sm ${
                  photo.orientation === "portrait" ? "aspect-[4/5]" : "aspect-[3/2]"
                }`}
                sizes="(min-width: 768px) 30vw, 45vw"
              />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            More photos and trip reels on{" "}
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-buoy-deep underline-offset-4 hover:underline"
            >
              <InstagramIcon className="size-4" />
              Instagram {site.instagramHandle}
            </a>
          </p>
        </Reveal>
      </section>

      <CtaBand
        title="Want to be in the next photo?"
        body="Small-group trips fill up quickly. Join the waiting list and we'll let you know as soon as the next dates open."
        buttonLabel="Join the waiting list"
      />
    </>
  );
}
