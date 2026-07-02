import { cn } from "@/lib/utils";

/** Decorative compass rose used as a background flourish on chart sections. */
export function CompassRose({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="100" cy="100" r="96" strokeWidth="1" opacity="0.5" />
      <circle cx="100" cy="100" r="78" strokeWidth="0.75" strokeDasharray="3 6" />
      <circle cx="100" cy="100" r="6" strokeWidth="1.5" />
      <path
        d="M100 8 L108 92 L100 100 L92 92 Z"
        fill="currentColor"
        stroke="none"
        opacity="0.9"
      />
      <path d="M100 192 L92 108 L100 100 L108 108 Z" fill="currentColor" stroke="none" opacity="0.35" />
      <path d="M8 100 L92 92 L100 100 L92 108 Z" fill="currentColor" stroke="none" opacity="0.35" />
      <path d="M192 100 L108 108 L100 100 L108 92 Z" fill="currentColor" stroke="none" opacity="0.35" />
      <path
        d="M35 35 L94 94 M165 35 L106 94 M35 165 L94 106 M165 165 L106 106"
        strokeWidth="0.75"
        opacity="0.5"
      />
      <text x="100" y="30" textAnchor="middle" fontSize="13" fill="currentColor" stroke="none" fontFamily="var(--font-mono)">N</text>
      <text x="100" y="180" textAnchor="middle" fontSize="13" fill="currentColor" stroke="none" fontFamily="var(--font-mono)">S</text>
      <text x="24" y="105" textAnchor="middle" fontSize="13" fill="currentColor" stroke="none" fontFamily="var(--font-mono)">W</text>
      <text x="176" y="105" textAnchor="middle" fontSize="13" fill="currentColor" stroke="none" fontFamily="var(--font-mono)">E</text>
    </svg>
  );
}
