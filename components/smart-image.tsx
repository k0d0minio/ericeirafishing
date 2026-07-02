"use client";

import * as React from "react";
import Image from "next/image";
import { Fish } from "lucide-react";

import { cn } from "@/lib/utils";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Renders the real photo when it exists in public/images, and a styled
 * nautical placeholder (labelled with the expected file path) until then.
 * Drop the file in and the placeholder swaps out — no code change needed.
 */
export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  sizes,
  priority,
}: SmartImageProps) {
  const [failed, setFailed] = React.useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-foam", className)}>
      {failed ? (
        <PlaceholderArt label={src} />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function PlaceholderArt({ label }: { label: string }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-foam via-seaglass/40 to-sand-deep p-4 text-ink/60"
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        aria-hidden
      >
        <defs>
          <pattern
            id="ph-waves"
            width="72"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 12 Q 18 0 36 12 T 72 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-waves)" />
      </svg>
      <Fish className="size-8 opacity-80" strokeWidth={1.5} />
      <p className="kicker max-w-full truncate text-center text-[0.62rem] tracking-[0.18em]">
        photo coming soon
      </p>
      <p className="max-w-full truncate font-mono text-[0.62rem] opacity-70">
        {label.replace(/^\//, "public/")}
      </p>
    </div>
  );
}
