import type { Metadata } from "next"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import CTA, { Arrow } from "@/lib/components/button"
import Stars from "@/lib/components/stars"
import ReviewCard from "@/lib/components/review-card"
import { Kicker } from "@/lib/components/section"
import { reviews, reviewStats, featuredTestimonial } from "@/data/testimonials"

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what clients say about massage therapy with Roxanne Young, LMT — rated 5.0 from 10 Google reviews.",
}

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        kicker="Client Reviews"
        title={
          <>
            Kind words, <span className="italic text-rose-soft">earned</span>.
          </>
        }
        intro="Roxanne's clients return for a reason. Here's what they have to say."
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        {/* Aggregate */}
        <Reveal>
          <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-ink/10 bg-cream-deep/50 px-8 py-10 text-center">
            <span className="font-display text-6xl font-semibold text-ink">
              {reviewStats.rating.toFixed(1)}
            </span>
            <Stars rating={reviewStats.rating} size={22} />
            <p className="text-sm text-taupe">
              Based on {reviewStats.count} {reviewStats.source} reviews
            </p>
          </div>
        </Reveal>

        {/* Featured website testimonial */}
        <Reveal className="mx-auto mt-12 max-w-3xl text-center">
          <Kicker className="justify-center">Featured</Kicker>
          <blockquote className="mt-6 font-display text-2xl font-light leading-[1.4] text-ink sm:text-[1.75rem]">
            “{featuredTestimonial.quote}”
          </blockquote>
          <figcaption className="mt-5 text-sm uppercase tracking-widest2 text-taupe">
            {featuredTestimonial.author} · {featuredTestimonial.location}
          </figcaption>
        </Reveal>

        {/* Grid of all reviews */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={`${r.author}-${i}`} delay={(i % 3) * 90}>
              <ReviewCard review={r} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-16">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-ink p-9 text-center text-cream-soft sm:flex-row sm:text-left sm:p-12">
            <div>
              <h2 className="font-display text-2xl font-light sm:text-3xl">
                Experience it for yourself.
              </h2>
              <p className="mt-2 text-cream/70">Book a session and feel the difference.</p>
            </div>
            <CTA href="/book" variant="primary" size="lg" className="group shrink-0">
              Book a Session <Arrow />
            </CTA>
          </div>
        </Reveal>
      </div>
    </>
  )
}
