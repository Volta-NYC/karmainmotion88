import Link from "next/link"
import Image from "next/image"
import Lotus from "./lotus"
import { business, hours, fullAddress } from "@/data/business"

const exploreLinks = [
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages & Gift Cards" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About Roxanne" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "/book", label: "Book a Session" },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-ink text-cream/80">
      {/* large faint motif */}
      <Lotus
        className="pointer-events-none absolute -right-16 -top-20 h-80 w-80 text-cream/[0.04]"
        strokeWidth={1.4}
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 text-cream-soft">
              <Image
                src="/images/logo-mark.png"
                alt="KarmaInMotion88 logo"
                width={88}
                height={88}
                className="h-11 w-11 rounded-full object-cover ring-1 ring-inset ring-cream/15"
              />
              <span className="font-display text-xl font-semibold">
                Karma<span className="text-rose-soft">In</span>Motion
                <span className="align-super text-xs text-cream/50">88</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
              Holistic massage therapy in New York City. A calm, intentional space
              for healing, body awareness, and restorative care — {business.tagline.toLowerCase()}.
            </p>
            <div className="mt-6 space-y-1 text-sm text-cream/65">
              <p>{fullAddress}</p>
              <p>{business.location.neighborhood}</p>
            </div>
            <div className="mt-5 flex flex-col gap-1 text-sm">
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

          {/* Explore */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-cream/45">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-cream/75 transition-colors hover:text-cream-soft"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest2 text-cream/45">
              {business.seasonLabel}
            </h3>
            <ul className="mt-5 space-y-2 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="text-cream/55">{h.day}</span>
                  <span className={h.open ? "text-cream-soft" : "text-cream/35"}>
                    {h.open ? `${h.open} – ${h.close}` : "Closed"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. Licensed Massage Therapy · {business.founder.name},{" "}
            {business.founder.credential}.
          </p>
          <div className="flex items-center gap-4">
            <span className="tracking-wide">{business.tagline}</span>
            <Link
              href="https://nyc.voltanpo.org"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-cream/55 hover:text-cream-soft"
            >
              Made by @VoltaNYC
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
