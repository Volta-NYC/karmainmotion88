import Link from "next/link"
import type { Service } from "@/data/types"
import { formatPrice } from "@/lib/format"

/** Compact row used in the services menu. */
export function ServiceRow({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex items-baseline gap-4 border-b border-ink/10 py-5 transition-colors hover:border-rose/40"
    >
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-xl font-medium text-ink transition-colors group-hover:text-rose-deep sm:text-2xl">
          {service.isAddOn ? service.shortName : service.name}
        </h3>
        <p className="mt-1 line-clamp-1 text-sm text-taupe">{service.description}</p>
      </div>
      {/* dotted leader */}
      <span
        className="hidden h-px flex-1 translate-y-[-4px] border-b border-dotted border-ink/25 sm:block"
        aria-hidden
      />
      <div className="flex shrink-0 items-baseline gap-4 text-right">
        {!service.isAddOn && (
          <span className="text-xs uppercase tracking-widest2 text-taupe">
            {service.durationLabel}
          </span>
        )}
        <span className="font-display text-xl font-semibold text-ink">
          {formatPrice(service.price)}
        </span>
      </div>
    </Link>
  )
}

/** Richer card for featured/highlighted services. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-cream-soft p-7 transition-all duration-500 hover:-translate-y-1 hover:border-rose/30 hover:shadow-soft"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest2 text-rose">
            {service.durationLabel}
          </span>
          <span className="font-display text-2xl font-semibold text-ink">
            {formatPrice(service.price)}
          </span>
        </div>
        <h3 className="mt-5 font-display text-2xl font-medium leading-tight text-ink">
          {service.isAddOn ? service.shortName : service.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {service.description}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {service.benefits.map((b) => (
          <span
            key={b}
            className="rounded-full bg-ink/[0.04] px-3 py-1 text-xs text-taupe"
          >
            {b}
          </span>
        ))}
      </div>
    </Link>
  )
}
