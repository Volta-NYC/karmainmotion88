import Image from "next/image"
import Link from "next/link"
import Lotus from "@/lib/components/lotus"
import Reveal from "@/lib/components/reveal"
import CTA, { Arrow } from "@/lib/components/button"
import { SectionHeading, Kicker } from "@/lib/components/section"
import { ServiceCard } from "@/lib/components/service-card"
import Stars from "@/lib/components/stars"
import ReviewCard from "@/lib/components/review-card"
import { business, hours } from "@/data/business"
import { massages, categoryMeta } from "@/data/services"
import { featuredTestimonial, writtenReviews, reviewStats } from "@/data/testimonials"
import { posts } from "@/data/posts"

const treatments = [
  { key: "swedish" as const, slug: "swedish-massage" },
  { key: "deep-tissue" as const, slug: "deep-tissue-massage" },
  { key: "prenatal" as const, slug: "prenatal-swedish-massage" },
]

// A short, curated set of signature sessions for the home page.
const signatureSlugs = ["swedish-massage", "deep-tissue-massage-1", "2-hour-swedish-massage"]

export default function HomePage() {
  const signature = signatureSlugs
    .map((s) => massages.find((m) => m.slug === s))
    .filter(Boolean) as typeof massages

  return (
    <>
      {/* ——————————————————— HERO ——————————————————— */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
        <Image
          src="/images/massage-candlelit.jpg"
          alt="A serene candlelit massage session"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />

        <Lotus
          className="animate-drift-slow pointer-events-none absolute -right-10 top-24 hidden h-[26rem] w-[26rem] text-rose-soft/15 md:block"
          strokeWidth={1.2}
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-8 sm:pb-28">
          <span
            className="inline-flex animate-fade-up items-center gap-3 text-xs font-semibold uppercase tracking-widest2 text-rose-soft opacity-0"
            style={{ animationDelay: "120ms" }}
          >
            <span className="h-px w-8 bg-rose-soft/60" />
            Massage Therapy · New York City
          </span>

          <h1
            className="mt-7 max-w-4xl animate-fade-up font-display text-[2.9rem] font-light leading-[0.98] tracking-tight text-cream-soft opacity-0 sm:text-6xl md:text-7xl lg:text-[5.25rem]"
            style={{ animationDelay: "240ms" }}
          >
            Healing,
            <br />
            <span className="font-semibold italic text-rose-soft">in motion.</span>
          </h1>

          <p
            className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-cream/80 opacity-0"
            style={{ animationDelay: "380ms" }}
          >
            Holistic Swedish, deep tissue and prenatal massage with{" "}
            {business.founder.name}, {business.founder.credential} — intentional,
            restorative bodywork in a calm Upper West Side studio.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col gap-4 opacity-0 sm:flex-row"
            style={{ animationDelay: "520ms" }}
          >
            <CTA href="/book" variant="primary" size="lg" className="group">
              Book a Session <Arrow />
            </CTA>
            <CTA href="/services" variant="light" size="lg">
              Explore Services
            </CTA>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 md:flex">
          <span className="text-[0.65rem] uppercase tracking-widest2">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-cream/50 to-transparent" />
        </div>
      </section>

      {/* ——————————————————— WELCOME ——————————————————— */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <Kicker>Welcome</Kicker>
            <h2 className="mt-5 font-display text-3xl font-light leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-[2.9rem]">
              A holistic approach to{" "}
              <span className="italic text-rose-deep">healing</span> and
              self-restoration.
            </h2>
            <div className="mt-6 max-w-prose2 space-y-5 text-base leading-relaxed text-ink-muted">
              <p>
                I&apos;m {business.founder.name}, a licensed Massage Therapist based
                in New York and a firm believer in taking a holistic approach to
                healing. I believe karma can attract positive or negative energies
                from our day-to-day activities — and those effects can cause the body
                to hold different types of tension.
              </p>
              <p>
                Through my practice, I want to bring awareness to how you can move
                through daily life manifesting more positive energy and self-healing,
                using the different modalities of massage that I offer.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-rose-deep"
              >
                Read Roxanne&apos;s story <Arrow />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-rose-blush/40" />
              <div className="absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-full bg-ink/5" />
              <Image
                src="/images/roxanne-portrait.jpg"
                alt={`Portrait of ${business.founder.name}, ${business.founder.title}`}
                width={760}
                height={1140}
                sizes="(max-width: 1024px) 80vw, 38vw"
                className="h-auto w-full rounded-[1.75rem] object-cover shadow-soft"
              />
              <div className="absolute -left-5 bottom-8 rounded-2xl bg-cream-soft px-5 py-4 shadow-lift">
                <p className="font-display text-2xl font-semibold text-ink">
                  Since {business.founder.since}
                </p>
                <p className="text-xs uppercase tracking-widest2 text-taupe">
                  Licensed practitioner
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——————————————————— TREATMENTS ——————————————————— */}
      <section className="bg-cream-deep/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            kicker="Treatment Options"
            title={
              <>
                Bodywork tailored to{" "}
                <span className="italic text-rose-deep">how you feel</span>.
              </>
            }
            intro="Every body holds tension differently. Choose the modality that meets you where you are — and layer in add-ons to make it yours."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {treatments.map((t, i) => {
              const meta = categoryMeta[t.key]
              return (
                <Reveal key={t.key} delay={i * 100}>
                  <Link
                    href={`/services/${t.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-cream-soft p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-ink text-rose-soft">
                      <Lotus className="h-9 w-9" strokeWidth={3} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-medium text-ink">
                      {meta.label}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {meta.blurb}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-rose-deep">
                      View options <Arrow />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ——————————————————— SIGNATURE SESSIONS ——————————————————— */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker="Signature Sessions"
            title="A few favorites to start with"
            className="!max-w-xl"
          />
          <Reveal>
            <CTA href="/services" variant="outline" className="group whitespace-nowrap">
              Full menu <Arrow />
            </CTA>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {signature.map((s, i) => (
            <Reveal key={s.slug} delay={i * 100}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ——————————————————— PHILOSOPHY BAND ——————————————————— */}
      <section className="relative overflow-hidden bg-ink py-28 sm:py-36">
        <Lotus
          className="animate-drift-slower pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 text-cream/[0.04]"
          strokeWidth={1}
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Reveal>
            <Kicker dark>The Practice</Kicker>
            <p className="mt-8 font-display text-2xl font-light italic leading-[1.35] text-cream-soft sm:text-3xl md:text-[2.4rem] md:leading-[1.3]">
              “My work focuses on helping clients reconnect with themselves through
              intentional touch, therapeutic techniques, and mindful care — because
              healing begins with awareness and consistency.”
            </p>
            <p className="mt-8 text-sm uppercase tracking-widest2 text-rose-soft">
              {business.founder.name} · {business.founder.credential}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ——————————————————— PACKAGES TEASER ——————————————————— */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-ink/10 bg-cream-soft lg:grid-cols-2">
          <Reveal className="p-9 sm:p-14">
            <Kicker>Save with packages</Kicker>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
              Commit to your wellness and{" "}
              <span className="italic text-rose-deep">save 15%</span>.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
              Three- and six-session packages for Swedish and deep tissue massage —
              each valid for six months and bundled with complimentary add-ons. Gift
              cards available too.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTA href="/packages" variant="primary" className="group">
                View packages <Arrow />
              </CTA>
              <CTA href="/packages#gift-cards" variant="ghost">
                Gift cards
              </CTA>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative h-64 lg:h-full">
            <Image
              src="/images/massage-shoulder.jpg"
              alt="A relaxing shoulder massage"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" />
          </Reveal>
        </div>
      </section>

      {/* ——————————————————— REVIEWS ——————————————————— */}
      <section className="bg-cream-deep/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Featured quote + aggregate */}
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
            <Reveal>
              <Kicker>Kind Words</Kicker>
              <blockquote className="mt-6 font-display text-2xl font-light leading-[1.35] text-ink sm:text-3xl md:text-[2.1rem] md:leading-[1.32]">
                “{featuredTestimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-widest2 text-taupe">
                {featuredTestimonial.author} · {featuredTestimonial.location}
              </figcaption>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col items-center gap-3 rounded-[2rem] border border-ink/10 bg-cream-soft px-8 py-10 text-center shadow-soft">
                <span className="font-display text-6xl font-semibold text-ink">
                  {reviewStats.rating.toFixed(1)}
                </span>
                <Stars rating={reviewStats.rating} size={20} />
                <p className="text-sm text-taupe">
                  {reviewStats.count} {reviewStats.source} reviews
                </p>
              </div>
            </Reveal>
          </div>

          {/* Review cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {writtenReviews.slice(0, 3).map((r, i) => (
              <Reveal key={r.author} delay={i * 100}>
                <ReviewCard review={r} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 text-center">
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-rose-deep"
            >
              Read all {reviewStats.count} reviews <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ——————————————————— HOURS + CTA ——————————————————— */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <Kicker>{business.seasonLabel}</Kicker>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight tracking-tight text-ink sm:text-4xl">
              Find a time that{" "}
              <span className="italic text-rose-deep">moves with you</span>.
            </h2>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between py-3.5"
                >
                  <span className="text-ink">{h.day}</span>
                  <span
                    className={
                      h.open ? "font-medium text-ink" : "text-sm text-taupe"
                    }
                  >
                    {h.open ? `${h.open} – ${h.close}` : "Closed"}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-ink p-9 text-cream-soft sm:p-12">
              <div>
                <Lotus className="h-12 w-12 text-rose-soft" strokeWidth={3} />
                <h3 className="mt-6 font-display text-3xl font-light leading-tight sm:text-4xl">
                  Ready when you are.
                </h3>
                <p className="mt-4 max-w-sm text-cream/70">
                  Booking is quick and personal. Reserve your session online, or reach
                  out directly — I&apos;ll help you find the right treatment.
                </p>
              </div>
              <div className="mt-10 space-y-5">
                <CTA href="/book" variant="primary" size="lg" className="group w-full sm:w-auto">
                  Book a Session <Arrow />
                </CTA>
                <div className="flex flex-col gap-1 text-sm text-cream/70">
                  <a
                    href={`tel:${business.contact.phoneHref}`}
                    className="link-underline w-fit text-cream-soft"
                  >
                    {business.contact.phone}
                  </a>
                  <a
                    href={`mailto:${business.contact.email}`}
                    className="link-underline w-fit text-cream-soft"
                  >
                    {business.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——————————————————— JOURNAL TEASER ——————————————————— */}
      <section className="border-t border-ink/10 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <SectionHeading kicker="From the Journal" title="Notes & updates" className="!max-w-xl" />
            <Reveal>
              <Link
                href="/blog"
                className="group hidden items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-rose-deep sm:inline-flex"
              >
                All posts <Arrow />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link href={`/blog/${p.slug}`} className="group block">
                  <p className="text-xs uppercase tracking-widest2 text-rose">
                    {p.dateLabel}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium text-ink transition-colors group-hover:text-rose-deep">
                    {p.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                    {p.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
