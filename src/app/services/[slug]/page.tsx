import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Reveal from "@/lib/components/reveal"
import CTA, { Arrow } from "@/lib/components/button"
import { Kicker } from "@/lib/components/section"
import Lotus from "@/lib/components/lotus"
import { ServiceCard } from "@/lib/components/service-card"
import { services, getService } from "@/data/services"
import { business, fullAddress } from "@/data/business"
import { formatPrice } from "@/lib/format"

type Params = { slug: string }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return { title: "Service not found" }
  return {
    title: `${service.name} — ${formatPrice(service.price)}`,
    description: service.description,
  }
}

// Pick an atmospheric photo per category.
function imageFor(category: string) {
  return category === "add-on"
    ? "/images/massage-candlelit.jpg"
    : "/images/massage-shoulder.jpg"
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const related = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3)

  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden bg-ink pb-14 pt-36 text-cream-soft sm:pt-44">
        <Image
          src={imageFor(service.category)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <Link
            href="/services"
            className="link-underline text-sm text-cream/70 hover:text-cream-soft"
          >
            ← All services
          </Link>
          <p className="mt-8">
            <Kicker dark>{service.isAddOn ? "Add-On" : "Massage Session"}</Kicker>
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {service.isAddOn ? service.shortName : service.name}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <span className="font-display text-3xl font-semibold text-rose-soft">
              {formatPrice(service.price)}
            </span>
            <span className="text-sm uppercase tracking-widest2 text-cream/60">
              {service.isAddOn ? "Session enhancement" : service.durationLabel}
            </span>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          {/* Left: description + benefits */}
          <Reveal>
            <h2 className="font-display text-2xl font-medium text-ink">
              About this {service.isAddOn ? "add-on" : "session"}
            </h2>
            <p className="mt-4 max-w-prose2 text-lg leading-relaxed text-ink-muted">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {service.benefits.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-ink/15 px-4 py-1.5 text-sm text-taupe"
                >
                  {b}
                </span>
              ))}
            </div>

            {service.category === "prenatal" && (
              <p className="mt-8 rounded-2xl bg-rose-blush/30 px-5 py-4 text-sm text-ink-soft">
                {business.policies.prenatalNote}
              </p>
            )}

            {/* Cancellation policy */}
            <div className="mt-12 border-t border-ink/10 pt-8">
              <h3 className="font-display text-xl font-medium text-ink">
                Cancellation Policy
              </h3>
              <p className="mt-3 max-w-prose2 text-ink-muted">
                {business.policies.cancellation}
              </p>
            </div>
          </Reveal>

          {/* Right: booking card */}
          <Reveal delay={120}>
            <div className="sticky top-28 rounded-[1.75rem] border border-ink/10 bg-cream-soft p-7 shadow-soft">
              <Lotus className="h-10 w-10 text-rose" strokeWidth={3} />
              <div className="mt-5 flex items-baseline justify-between">
                <span className="font-display text-3xl font-semibold text-ink">
                  {formatPrice(service.price)}
                </span>
                {!service.isAddOn && (
                  <span className="text-sm text-taupe">{service.durationLabel}</span>
                )}
              </div>
              <CTA
                href={`/book?service=${service.slug}`}
                variant="primary"
                size="lg"
                className="group mt-6 w-full"
              >
                Book Now <Arrow />
              </CTA>

              <dl className="mt-7 space-y-4 border-t border-ink/10 pt-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-widest2 text-taupe">
                    Location
                  </dt>
                  <dd className="mt-1 text-ink">{business.location.label}</dd>
                  <dd className="text-ink-muted">{fullAddress}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest2 text-taupe">
                    Contact
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${business.contact.phoneHref}`}
                      className="link-underline text-ink"
                    >
                      {business.contact.phone}
                    </a>
                  </dd>
                  <dd>
                    <a
                      href={`mailto:${business.contact.email}`}
                      className="link-underline text-ink"
                    >
                      {business.contact.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20 border-t border-ink/10 pt-14">
            <Kicker>You might also like</Kicker>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((s, i) => (
                <Reveal key={s.slug} delay={i * 100}>
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
