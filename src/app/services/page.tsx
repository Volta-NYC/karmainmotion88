import type { Metadata } from "next"
import Link from "next/link"
import Reveal from "@/lib/components/reveal"
import CTA, { Arrow } from "@/lib/components/button"
import { Kicker } from "@/lib/components/section"
import { ServiceRow } from "@/lib/components/service-card"
import Lotus from "@/lib/components/lotus"
import { servicesByCategory, categoryMeta, addOns } from "@/data/services"
import { business } from "@/data/business"
import { formatPrice } from "@/lib/format"
import PageHeader from "@/lib/components/page-header"

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Swedish, deep tissue and prenatal massage in 30-minute to 2-hour sessions, plus aromatherapy, scalp, facial and hot/cold stone add-ons.",
}

const standaloneCategories = ["swedish", "deep-tissue", "prenatal"] as const

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        kicker="Services & Pricing"
        title={
          <>
            The <span className="italic text-rose-soft">menu</span>
          </>
        }
        intro="Thoughtful, customizable bodywork — from a quick 30-minute reset to a restorative two-hour escape. Every session can be enhanced with add-ons."
      />

      <div className="mx-auto max-w-5xl px-5 pb-8 sm:px-8">
        {standaloneCategories.map((cat, idx) => {
          const list = servicesByCategory(cat)
          const meta = categoryMeta[cat]
          return (
            <section
              key={cat}
              className={idx === 0 ? "pt-16 sm:pt-20" : "pt-16 sm:pt-24"}
            >
              <Reveal>
                <div className="flex items-center gap-4">
                  <Kicker>{`0${idx + 1}`}</Kicker>
                </div>
                <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
                  {meta.label}
                </h2>
                <p className="mt-3 max-w-xl text-ink-muted">{meta.blurb}</p>
              </Reveal>
              <div className="mt-8">
                {list.map((s) => (
                  <ServiceRow key={s.slug} service={s} />
                ))}
              </div>
            </section>
          )
        })}

        {/* Add-ons */}
        <section className="pt-16 sm:pt-24">
          <Reveal>
            <Kicker>04</Kicker>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
              Add-Ons
            </h2>
            <p className="mt-3 max-w-xl text-ink-muted">
              Layer any of these onto your session to make it truly yours.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {addOns.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-start justify-between gap-4 rounded-2xl border border-ink/10 bg-cream-soft p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-rose/30 hover:shadow-soft"
                >
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink transition-colors group-hover:text-rose-deep">
                      {s.shortName}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-taupe">
                      {s.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-display text-xl font-semibold text-ink">
                    +{formatPrice(s.price)}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Policy + CTA */}
        <section className="mt-20 grid gap-6 rounded-[2rem] bg-ink p-9 text-cream-soft sm:grid-cols-[1fr_auto] sm:items-center sm:p-12">
          <div>
            <div className="flex items-center gap-3">
              <Lotus className="h-8 w-8 text-rose-soft" strokeWidth={3} />
              <h2 className="font-display text-2xl font-light sm:text-3xl">
                Ready to book?
              </h2>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">
              {business.policies.cancellation}
            </p>
          </div>
          <CTA href="/book" variant="primary" size="lg" className="group">
            Book a Session <Arrow />
          </CTA>
        </section>
      </div>
    </>
  )
}
