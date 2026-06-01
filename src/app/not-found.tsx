import CTA from "@/lib/components/button"
import Lotus from "@/lib/components/lotus"

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80svh] place-items-center overflow-hidden bg-ink px-5 text-center text-cream-soft">
      <Lotus
        className="animate-drift-slow pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 text-cream/[0.04]"
        strokeWidth={1}
      />
      <div className="relative">
        <p className="font-display text-7xl font-light text-rose-soft sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-light tracking-tight sm:text-4xl">
          This page has drifted away.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-cream/70">
          The page you&apos;re looking for can&apos;t be found — but rest and
          restoration are just a click away.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <CTA href="/" variant="primary">
            Back home
          </CTA>
          <CTA href="/services" variant="light">
            View services
          </CTA>
        </div>
      </div>
    </section>
  )
}
