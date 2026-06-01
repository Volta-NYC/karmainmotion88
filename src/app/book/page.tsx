import type { Metadata } from "next"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import Lotus from "@/lib/components/lotus"
import BookingForm from "@/lib/components/booking-form"
import { business } from "@/data/business"

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Request a massage appointment with Roxanne Young, LMT. Choose your session and add-on, pick a time, and I'll confirm personally.",
}

const steps = [
  { n: "01", title: "Choose your session", body: "Pick a massage and any add-ons that fit how you're feeling." },
  { n: "02", title: "Suggest a time", body: "Tell me your preferred day and time during studio hours." },
  { n: "03", title: "I'll confirm", body: "I personally confirm every appointment within 24 hours." },
]

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>
}) {
  const { service } = await searchParams

  return (
    <>
      <PageHeader
        kicker="Book a Session"
        title={
          <>
            Reserve your <span className="italic text-rose-soft">time</span>.
          </>
        }
        intro="Booking is personal here. Share your preferences below and I'll be in touch to confirm — no online payment, no rush."
      />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* How it works */}
          <Reveal>
            <h2 className="font-display text-2xl font-medium text-ink">How it works</h2>
            <ol className="mt-8 space-y-8">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-display text-2xl font-semibold text-rose/40">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl bg-cream-deep/60 p-6">
              <div className="flex items-center gap-2">
                <Lotus className="h-7 w-7 text-rose" strokeWidth={3} />
                <h3 className="font-display text-lg text-ink">Prefer to talk?</h3>
              </div>
              <p className="mt-2 text-sm text-ink-muted">
                Call or text{" "}
                <a
                  href={`tel:${business.contact.phoneHref}`}
                  className="link-underline font-medium text-rose-deep"
                >
                  {business.contact.phone}
                </a>{" "}
                — happy to help you choose.
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-ink/10 bg-cream-soft p-7 shadow-soft sm:p-10">
              <BookingForm initialService={service ?? ""} />
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}
