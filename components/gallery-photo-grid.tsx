"use client";

import Image, { type StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { FadeIn } from "@/components/motion/fade-in";

export type GalleryPhotoItem = {
  src: StaticImageData;
  alt: string;
};

export function GalleryPhotoGrid({ photos }: { photos: GalleryPhotoItem[] }) {
  const t = useTranslations("Gallery");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2">
        {photos.map((item, index) => (
          <FadeIn key={item.alt} delay={index * 0.05}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="bg-muted group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl text-left outline-none ring-offset-background transition hover:opacity-95 focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-label={t("openLightbox")}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </button>
          </FadeIn>
        ))}
      </div>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => {
          if (!open) setOpenIndex(null);
        }}
      >
        <DialogContent
          showCloseButton
          className="max-h-[min(90vh,48rem)] max-w-[min(100vw-2rem,56rem)] gap-0 overflow-hidden border-0 bg-transparent p-0 shadow-none ring-0"
          aria-describedby={undefined}
        >
          {openIndex !== null ? (
            <>
              <DialogTitle className="sr-only">{photos[openIndex].alt}</DialogTitle>
              <div className="bg-background relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-foreground/10">
                <Image
                  src={photos[openIndex].src}
                  alt={photos[openIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
              <div className="flex justify-center pt-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => setOpenIndex(null)}
                >
                  {t("closeLightbox")}
                </Button>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
