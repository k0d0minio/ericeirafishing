import { cn } from "@/lib/utils";

/** Line-drawn traditional fishing boat, used as a floating hero flourish. */
export function BoatIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 120"
      aria-hidden
      className={cn("pointer-events-none select-none", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* mast + flag */}
      <path d="M118 12 V64" />
      <path d="M118 14 L142 22 L118 30" fill="currentColor" opacity="0.85" />
      {/* rigging */}
      <path d="M118 20 L74 64 M118 24 L156 64" strokeWidth="1.25" opacity="0.7" />
      {/* hull */}
      <path d="M46 64 H182 C176 84 160 94 138 96 H92 C68 94 52 82 46 64 Z" />
      <path d="M58 74 H172" strokeWidth="1.25" opacity="0.6" />
      {/* bow line */}
      <path d="M46 64 C38 60 32 54 30 46" strokeWidth="1.5" />
      {/* waves */}
      <path d="M8 104 Q 22 96 36 104 T 64 104 T 92 104 T 120 104 T 148 104 T 176 104 T 204 104" strokeWidth="1.5" opacity="0.7" />
      <path d="M24 114 Q 38 106 52 114 T 80 114 T 108 114 T 136 114 T 164 114 T 192 114" strokeWidth="1.25" opacity="0.4" />
    </svg>
  );
}
