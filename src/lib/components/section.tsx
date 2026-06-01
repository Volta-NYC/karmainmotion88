import type { ReactNode } from "react"
import Reveal from "./reveal"

/** Small uppercase eyebrow/kicker label with a lead dash. */
export function Kicker({
  children,
  dark = false,
  className = "",
}: {
  children: ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest2 ${
        dark ? "text-rose-soft" : "text-rose"
      } ${className}`}
    >
      <span
        className={`h-px w-8 ${dark ? "bg-rose-soft/60" : "bg-rose/50"}`}
        aria-hidden
      />
      {children}
    </span>
  )
}

/** Standard section heading block: kicker + title + optional intro. */
export function SectionHeading({
  kicker,
  title,
  intro,
  dark = false,
  align = "left",
  className = "",
}: {
  kicker?: string
  title: ReactNode
  intro?: ReactNode
  dark?: boolean
  align?: "left" | "center"
  className?: string
}) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {kicker && <Kicker dark={dark}>{kicker}</Kicker>}
      <h2
        className={`mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.85rem] ${
          dark ? "text-cream-soft" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-cream/70" : "text-ink-muted"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  )
}
