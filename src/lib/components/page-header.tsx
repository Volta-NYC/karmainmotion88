import type { ReactNode } from "react"
import Lotus from "./lotus"
import { Kicker } from "./section"

/** Consistent dark page header used on interior routes. */
export default function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string
  title: ReactNode
  intro?: ReactNode
}) {
  return (
    <header className="relative overflow-hidden bg-ink pb-16 pt-36 text-cream-soft sm:pb-20 sm:pt-44">
      <Lotus
        className="pointer-events-none absolute -right-12 -top-8 h-72 w-72 text-cream/[0.05] sm:h-96 sm:w-96"
        strokeWidth={1.2}
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Kicker dark>{kicker}</Kicker>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </header>
  )
}
