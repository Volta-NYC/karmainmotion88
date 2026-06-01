import Link from "next/link"
import type { ReactNode } from "react"

type Variant = "primary" | "outline" | "ghost" | "light"

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"

const sizes = {
  md: "px-7 py-3",
  lg: "px-9 py-4 text-[0.95rem]",
}

const variants: Record<Variant, string> = {
  primary:
    "bg-rose text-cream-soft shadow-soft hover:bg-rose-deep hover:-translate-y-0.5",
  outline:
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream-soft",
  light:
    "bg-cream-soft text-ink hover:bg-white hover:-translate-y-0.5 shadow-soft",
  ghost: "text-ink hover:text-rose",
}

interface CTAProps {
  href: string
  children: ReactNode
  variant?: Variant
  size?: keyof typeof sizes
  className?: string
}

export default function CTA({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: CTAProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  if (isExternal) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  )
}

/** Small arrow used inside CTAs. */
export function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
