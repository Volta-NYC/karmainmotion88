"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { business } from "@/data/business"

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Pages with a dark hero behind the (initially transparent) nav.
  const overHero = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const solid = scrolled || !overHero
  const onDark = overHero && !scrolled

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        solid
          ? "bg-cream/85 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className={`group flex items-center gap-2.5 ${
            onDark ? "text-cream-soft" : "text-ink"
          }`}
        >
          <Image
            src="/images/logo-mark.png"
            alt="KarmaInMotion88 logo"
            width={88}
            height={88}
            priority
            className="h-10 w-10 rounded-full object-cover ring-1 ring-inset ring-cream/15"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            Karma<span className="text-rose">In</span>Motion
            <span className="align-super text-[0.6em] text-taupe">88</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`link-underline text-sm tracking-wide transition-colors ${
                  onDark ? "text-cream/90 hover:text-cream" : "text-ink/80 hover:text-ink"
                } ${active ? "font-semibold" : ""}`}
              >
                {l.label}
              </Link>
            )
          })}
          <Link
            href="/book"
            className="rounded-full bg-rose px-6 py-2.5 text-sm font-medium text-cream-soft shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
            onDark && !open ? "text-cream-soft" : "text-ink"
          }`}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-[5px]">
            <span
              className={`h-[1.5px] w-full bg-current transition-all duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-current transition-all duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink text-cream-soft transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-1 px-8">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-cream/10 py-4 font-display text-3xl tracking-tight transition-colors hover:text-rose-soft"
              style={{
                transitionDelay: open ? `${100 + i * 40}ms` : "0ms",
                transform: open ? "translateY(0)" : "translateY(12px)",
                opacity: open ? 1 : 0,
                transition: "transform 0.5s, opacity 0.5s",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-8 inline-flex w-fit rounded-full bg-rose px-8 py-3.5 text-base font-medium text-cream-soft"
          >
            Book a Session
          </Link>
          <a
            href={`tel:${business.contact.phoneHref}`}
            className="mt-6 text-sm tracking-wide text-cream/70"
          >
            {business.contact.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
