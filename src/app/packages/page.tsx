import type { Metadata } from "next"
import Reveal from "@/lib/components/reveal"
import CTA, { Arrow } from "@/lib/components/button"
import { Kicker } from "@/lib/components/section"
import Lotus from "@/lib/components/lotus"
import PageHeader from "@/lib/components/page-header"
import { swedishPackages, deepTissuePackages } from "@/data/packages"
import type { MassagePackage } from "@/data/types"
import { formatPrice } from "@/lib/format"
import { business } from "@/data/business"

export const metadata: Metadata = {
  title: "Packages & Gift Cards",
  description:
    "Save 15% with 3- and 6-session massage packages for Swedish and deep tissue, each valid for six months with complimentary add-ons. Gift cards available.",
}

function PackageCard({ pkg, featured }: { pkg: MassagePackage; featured?: boolean }) {
  const fullValue = pkg.unitPrice * pkg.sessions
  const savings = fullValue - pkg.price
  return (
    <div
      className={`relative flex flex-col rounded-[1.75rem] border p-7 transition-all duration-500 hover:-translate-y-1 ${
        featured
          ? "border-rose/40 bg-ink text-cream-soft shadow-lift"
          : "border-ink/10 bg-cream-soft hover:shadow-soft"
      }`}
    >
      {featured && (
        <span className="absolute right-6 top-6 rounded-full bg-rose px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest2 text-cream-soft">
          Best value
        </span>
      )}
      <span
        className={`text-xs font-semibold uppercase tracking-widest2 ${
          featured ? "text-rose-soft" : "text-rose"
        }`}
      >
        {pkg.sessions} sessions · {pkg.durationLabel}
      </span>
      <h3
        className={`mt-3 font-display text-2xl font-medium ${
          featured ? "text-cream-soft" : "text-ink"
        }`}
      >
        {pkg.modality} Massage
      </h3>
      <div className="mt-5 flex items-baseline gap-2">
        <span
          className={`font-display text-4xl font-semibold ${
            featured ? "text-cream-soft" : "text-ink"
          }`}
        >
          {formatPrice(pkg.price)}
        </span>
        <span
          className={`text-sm line-through ${
            featured ? "text-cream/40" : "text-taupe/70"
          }`}
        >
          {formatPrice(fullValue)}
        </span>
      </div>
      <p className={`mt-1 text-sm ${featured ? "text-rose-soft" : "text-rose-deep"}`}>
        {pkg.savingsLabel} — you save {formatPrice(savings)}
      </p>

      <ul
        className={`mt-6 space-y-2.5 border-t pt-6 text-sm ${
          featured ? "border-cream/15 text-cream/75" : "border-ink/10 text-ink-muted"
        }`}
      >
        <li className="flex items-center gap-2.5">
          <Dot featured={featured} /> {pkg.perk}
        </li>
        <li className="flex items-center gap-2.5">
          <Dot featured={featured} /> {pkg.validity}
        </li>
        <li className="flex items-center gap-2.5">
          <Dot featured={featured} /> {pkg.sessions} × {pkg.durationLabel} sessions
        </li>
      </ul>

      <CTA
        href="/contact?topic=packages"
        variant={featured ? "primary" : "outline"}
        className="group mt-7"
      >
        Buy Now <Arrow />
      </CTA>
    </div>
  )
}

function Dot({ featured }: { featured?: boolean }) {
  return (
    <span
      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
        featured ? "bg-rose-soft" : "bg-rose"
      }`}
      aria-hidden
    />
  )
}

export default function PackagesPage() {
  return (
    <>
      <PageHeader
        kicker="Packages & Gift Cards"
        title={
          <>
            Wellness, <span className="italic text-rose-soft">repeated</span>.
          </>
        }
        intro="Consistency is where healing happens. Every package saves 15% on single-session pricing, stays valid for six months, and includes complimentary add-ons."
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Swedish */}
        <section>
          <Reveal>
            <Kicker>Swedish Massage</Kicker>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
              Swedish packages
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {swedishPackages.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <PackageCard pkg={p} featured={p.slug === "6-pack-90-swedish"} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Deep Tissue */}
        <section className="mt-20">
          <Reveal>
            <Kicker>Deep Tissue Massage</Kicker>
            <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-ink sm:text-4xl">
              Deep tissue packages
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deepTissuePackages.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <PackageCard pkg={p} featured={p.slug === "6-pack-90-deep-tissue"} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Gift cards */}
        <section
          id="gift-cards"
          className="mt-24 scroll-mt-28 overflow-hidden rounded-[2.5rem] border border-ink/10 bg-cream-deep/60"
        >
          <div className="grid items-center gap-8 p-9 sm:p-14 lg:grid-cols-[1.3fr_1fr]">
            <Reveal>
              <Kicker>Gift Cards</Kicker>
              <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
                The gift of{" "}
                <span className="italic text-rose-deep">rest & restoration</span>.
              </h2>
              <p className="mt-5 max-w-md text-ink-muted">
                Give someone you love the time to slow down. KarmaInMotion88 gift cards
                can be applied to any session or package — just reach out and I&apos;ll
                set it up for you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTA href="/contact?topic=gift-card" variant="primary" className="group">
                  Request a gift card <Arrow />
                </CTA>
                <CTA href={`tel:${business.contact.phoneHref}`} variant="ghost">
                  {business.contact.phone}
                </CTA>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative mx-auto aspect-[1.6/1] w-full max-w-sm rounded-3xl bg-ink p-8 text-cream-soft shadow-lift">
                <div className="flex items-center justify-between">
                  <Lotus className="h-10 w-10 text-rose-soft" strokeWidth={3} />
                  <span className="text-xs uppercase tracking-widest2 text-cream/50">
                    Gift Card
                  </span>
                </div>
                <p className="mt-8 font-display text-2xl font-light">
                  Karma<span className="text-rose-soft">In</span>Motion
                  <span className="align-super text-xs text-cream/50">88</span>
                </p>
                <p className="mt-1 text-sm text-cream/60">{business.tagline}</p>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  )
}
