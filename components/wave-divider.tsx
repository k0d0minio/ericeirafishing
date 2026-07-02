import { cn } from "@/lib/utils";

/**
 * Full-width wave separator. Set the text color to the color of the section
 * the wave belongs to (the fill uses currentColor); `flip` points it upward.
 */
export function WaveDivider({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none -mb-px w-full overflow-hidden leading-none",
        flip && "rotate-180",
        className
      )}
    >
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className="block h-10 w-full md:h-16"
      >
        <path
          d="M0,40 C120,72 240,8 360,24 C480,40 600,72 720,56 C840,40 960,8 1080,24 C1200,40 1320,64 1440,40 L1440,72 L0,72 Z"
          fill="currentColor"
        />
        <path
          d="M0,52 C160,80 320,28 480,40 C640,52 800,76 960,60 C1120,44 1280,24 1440,48 L1440,72 L0,72 Z"
          fill="currentColor"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}
