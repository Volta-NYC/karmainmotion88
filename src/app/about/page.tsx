import type { Metadata } from "next"
import Image from "next/image"
import Reveal from "@/lib/components/reveal"
import CTA, { Arrow } from "@/lib/components/button"
import { Kicker, SectionHeading } from "@/lib/components/section"
import Lotus from "@/lib/components/lotus"
import { business } from "@/data/business"

export const metadata: Metadata = {
  title: "About Roxanne Young, LMT",
  description:
    "Roxanne Young is a licensed massage therapist and former professional dancer whose practice blends movement, recovery and holistic healing in NYC.",
}

const story = [
  "I have been a licensed Massage Practitioner since 2019, after graduating from the Cortiva Institute in Hoboken, New Jersey. Before entering the field of massage therapy, I worked as a full-time professional freelance dancer, performing with various project-based companies throughout New York and across the country. My background in dance deeply informs the way I approach the body, movement, recovery, and healing.",
  "Throughout my career, I have worked with clients in both New Jersey and Kentucky, including positions at Massage Envy in Hoboken and Rest Assured Massage and Spa in Lexington. In 2021, after returning to New York, I made the intentional decision to establish my own massage practice, KarmaInMotion88 — creating a space centered around healing, body awareness, and restorative care.",
  "As both a dancer and massage practitioner, I understand how stress, physical strain, and emotional tension can manifest within the body. My work focuses on helping clients reconnect with themselves through intentional touch, therapeutic techniques, and mindful care. I especially enjoy working with individuals experiencing chronic pain, tension, or physical discomfort, because I believe healing begins with awareness and consistency.",
  "One of the most rewarding parts of my practice is hearing clients share how much better they feel after a session — not only physically, but mentally and emotionally as well. My goal is to help people feel supported in their wellness journey and to encourage massage therapy as an important part of self-care, recovery, and overall well-being.",
]

const facts = [
  { label: "Licensed since", value: "2019" },
  { label: "Trained at", value: "Cortiva Institute, Hoboken NJ" },
  { label: "Background", value: "Professional dancer" },
  { label: "Studio", value: "Upper West Side, NYC" },
]

export default function AboutPage() {
  return (
    <>
      {/* Intro split */}
      <header className="relative overflow-hidden bg-ink pb-20 pt-36 text-cream-soft sm:pt-44">
        <Lotus
          className="animate-drift-slower pointer-events-none absolute -left-16 top-10 h-96 w-96 text-cream/[0.04]"
          strokeWidth={1}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Kicker dark>Meet your therapist</Kicker>
            <h1 className="mt-6 font-display text-4xl font-light leading-[1.03] tracking-tight sm:text-5xl md:text-6xl">
              {business.founder.name},{" "}
              <span className="italic text-rose-soft">{business.founder.credential}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
              A licensed massage therapist and former professional dancer, blending an
              intimate understanding of movement with holistic, restorative bodywork.
            </p>
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6">
              {facts.map((f) => (
                <div key={f.label} className="border-l border-rose/40 pl-4">
                  <dt className="text-xs uppercase tracking-widest2 text-cream/50">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-display text-lg text-cream-soft">
                    {f.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-rose/30" />
              <Image
                src="/images/roxanne-portrait.jpg"
                alt={`Portrait of ${business.founder.name}`}
                width={760}
                height={1140}
                sizes="(max-width: 1024px) 70vw, 32vw"
                className="h-auto w-full rounded-[1.75rem] object-cover shadow-lift"
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* Philosophy pull */}
      <section className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <Lotus className="mx-auto h-12 w-12 text-rose" strokeWidth={3} />
          <p className="mt-8 font-display text-2xl font-light italic leading-[1.4] text-ink sm:text-3xl">
            “I believe that karma can attract positive or negative energies from our
            day-to-day activities — and from those effects, the body holds different
            types of tension.”
          </p>
        </Reveal>
      </section>

      {/* Full story */}
      <section className="bg-cream-deep/60 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading kicker="My Story" title="A path shaped by movement" />
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-muted">
            {story.map((p, i) => (
              <Reveal key={i} delay={i * 60} as="p">
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col items-center justify-between gap-8 rounded-[2.5rem] bg-ink p-10 text-center text-cream-soft sm:p-16 lg:flex-row lg:text-left">
          <div>
            <h2 className="font-display text-3xl font-light leading-tight sm:text-4xl">
              Let&apos;s begin your{" "}
              <span className="italic text-rose-soft">healing journey</span>.
            </h2>
            <p className="mt-4 max-w-md text-cream/70">
              Book a session, or reach out with questions about which treatment is
              right for you.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <CTA href="/book" variant="primary" size="lg" className="group">
              Book a Session <Arrow />
            </CTA>
            <CTA href="/contact" variant="light" size="lg">
              Get in touch
            </CTA>
          </div>
        </div>
      </section>
    </>
  )
}
