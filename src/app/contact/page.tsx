import type { Metadata } from "next"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import ContactForm from "@/lib/components/contact-form"
import Lotus from "@/lib/components/lotus"
import { business, hours, fullAddress } from "@/data/business"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with KarmaInMotion88 — Roxanne Young, LMT. Studio on the Upper West Side of Manhattan. Call, email, or send a message.",
}

const topicSubjects: Record<string, string> = {
  packages: "Package inquiry",
  "gift-card": "Gift card request",
  booking: "Booking question",
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>
}) {
  const { topic } = await searchParams
  const defaultSubject = topic ? topicSubjects[topic] ?? "" : ""
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    business.location.mapQuery
  )}`

  return (
    <>
      <PageHeader
        kicker="Contact"
        title={
          <>
            Let&apos;s <span className="italic text-rose-soft">connect</span>.
          </>
        }
        intro="Have a question, or not sure which treatment is right for you? Reach out — I'd love to help you find the right fit."
      />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Details */}
          <Reveal>
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">
                  Visit the studio
                </h2>
                <p className="mt-3 text-ink-muted">{business.location.label}</p>
                <p className="text-ink-muted">{fullAddress}</p>
                <p className="text-sm text-taupe">{business.location.neighborhood}</p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-3 inline-block text-sm font-medium text-rose-deep"
                >
                  Get directions →
                </a>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs uppercase tracking-widest2 text-taupe">
                    Call or text
                  </h3>
                  <a
                    href={`tel:${business.contact.phoneHref}`}
                    className="link-underline mt-2 inline-block font-display text-xl text-ink"
                  >
                    {business.contact.phone}
                  </a>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest2 text-taupe">
                    Email
                  </h3>
                  <a
                    href={`mailto:${business.contact.email}`}
                    className="link-underline mt-2 inline-block break-all font-display text-xl text-ink"
                  >
                    {business.contact.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="overflow-hidden rounded-[1.75rem] bg-ink p-7 text-cream-soft sm:p-8">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl">{business.seasonLabel}</h3>
                  <Lotus className="h-8 w-8 text-rose-soft" strokeWidth={3} />
                </div>
                <ul className="mt-5 space-y-2.5 text-sm">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span className="text-cream/60">{h.day}</span>
                      <span className={h.open ? "text-cream-soft" : "text-cream/35"}>
                        {h.open ? `${h.open} – ${h.close}` : "Closed"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-ink/10 bg-cream-deep/50 p-7 sm:p-10">
              <h2 className="font-display text-2xl font-medium text-ink">
                Send a message
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                I read every note personally and reply as soon as I can.
              </p>
              <div className="mt-7">
                <ContactForm defaultSubject={defaultSubject} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}
