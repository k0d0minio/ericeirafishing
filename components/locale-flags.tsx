import * as React from "react"

import { cn } from "@/lib/utils"

type FlagProps = {
  className?: string
  title?: string
}

export function FlagGb({ className, title }: FlagProps) {
  const clipId = React.useId().replace(/:/g, "")
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30"
      className={cn("size-5 shrink-0 rounded-sm border border-black/10 shadow-xs", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      aria-label={title}
    >
      <clipPath id={clipId}>
        <path d="M0 0h60v30H0z" />
      </clipPath>
      <g clipPath={`url(#${clipId})`}>
        <path fill="#012169" d="M0 0h60v30H0z" />
        <path stroke="#fff" strokeWidth="6" d="M0 0l60 30M60 0L0 30" />
        <path stroke="#C8102E" strokeWidth="4" d="M0 0l60 30M60 0L0 30" />
        <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
        <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
      </g>
    </svg>
  )
}

export function FlagFr({ className, title }: FlagProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      className={cn("size-5 shrink-0 rounded-sm border border-black/10 shadow-xs", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      aria-label={title}
    >
      <path fill="#ED2939" d="M0 0h3v2H0z" />
      <path fill="#fff" d="M0 0h2v2H0z" />
      <path fill="#002395" d="M0 0h1v2H0z" />
    </svg>
  )
}

export function FlagPt({ className, title }: FlagProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 20"
      className={cn("size-5 shrink-0 rounded-sm border border-black/10 shadow-xs", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      aria-label={title}
    >
      <path fill="#006600" d="M0 0h30v20H0z" />
      <path fill="#FF0000" d="M12 0h18v20H12z" />
      <circle fill="#FFDF00" stroke="#FFF" strokeWidth="0.4" cx="12" cy="10" r="4.2" />
    </svg>
  )
}

const FLAGS = {
  en: FlagGb,
  fr: FlagFr,
  pt: FlagPt,
} as const

export type AppLocale = keyof typeof FLAGS

export function LocaleFlag({
  locale,
  className,
  title,
}: {
  locale: AppLocale
  className?: string
  title?: string
}) {
  const Cmp = FLAGS[locale]
  return <Cmp className={className} title={title} />
}
