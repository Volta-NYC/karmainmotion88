// Shared content types for the KarmaInMotion88 site.
// All data is normalized from the original scraped Wix site and kept factual.

export type ServiceCategory = "swedish" | "deep-tissue" | "prenatal" | "add-on"

export interface Service {
  slug: string
  name: string
  /** Short marketing label, e.g. "Swedish Massage" without duration. */
  shortName: string
  category: ServiceCategory
  /** Booking duration in minutes (add-ons use the booking increment). */
  durationMin: number
  /** Human readable duration, e.g. "1 hr 30 min". */
  durationLabel: string
  /** Price in USD. */
  price: number
  description: string
  /** Whether this is an add-on rather than a standalone session. */
  isAddOn: boolean
  /** Benefits / good-for tags surfaced in the UI. */
  benefits: string[]
}

export interface MassagePackage {
  slug: string
  name: string
  modality: "Swedish" | "Deep Tissue"
  sessions: number
  durationLabel: string
  price: number
  /** Per-session value before the discount, used to show savings. */
  unitPrice: number
  perk: string
  validity: string
  savingsLabel: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string // ISO
  dateLabel: string
  author: string
  excerpt: string
  body: string[] // paragraphs
}

export interface Testimonial {
  quote: string
  author: string
  location: string
}

export interface DayHours {
  day: string
  short: string
  open: string | null // null = closed
  close: string | null
}
