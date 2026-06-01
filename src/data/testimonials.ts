import type { Testimonial } from "./types"

export interface Review {
  author: string
  /** ISO date when available. */
  date?: string
  dateLabel?: string
  rating: number
  /** Review text. Some Google reviews are rating-only (no text). */
  quote?: string
  /** True when the original review text was truncated by the source. */
  truncated?: boolean
  source: "Google" | "Website"
}

// Aggregate Google rating as shown on the business's Google profile.
export const reviewStats = {
  rating: 5.0,
  count: 10,
  source: "Google",
} as const

// Genuine client reviews. Truncated entries reflect text that was cut off at the
// source ("Show More") — we preserve only the words actually available.
export const reviews: Review[] = [
  {
    author: "Amanda Martinez",
    date: "2022-08-01",
    dateLabel: "Aug 2022",
    rating: 5,
    quote:
      "Roxanne gives an incredible massage. I am here on vacation and needed to book something last minute. I absolutely did not expect to get such a great…",
    truncated: true,
    source: "Google",
  },
  {
    author: "Stephanie Battle",
    date: "2022-04-06",
    dateLabel: "Apr 2022",
    rating: 5,
    quote:
      "Roxanne is warm, knowledgeable, and so intuitive. The space was calm and inviting, making it easy to relax and settle in. I highly recommend her and…",
    truncated: true,
    source: "Google",
  },
  {
    author: "Sabrina Greenman",
    date: "2022-04-03",
    dateLabel: "Apr 2022",
    rating: 5,
    quote:
      "I am beyond pleased with the Deep Tissue massage I received from Roxanne. Her technique was excellent and she knew exactly how to apply pressure…",
    truncated: true,
    source: "Google",
  },
  {
    author: "Jennifer Kent",
    date: "2022-02-28",
    dateLabel: "Feb 2022",
    rating: 5,
    quote:
      "Roxanne created a safe environment for me to just relax and receive a massage. Like everyone else in this world, I'm carrying a lot from the pandemic…",
    truncated: true,
    source: "Google",
  },
  {
    author: "Leann Gioia",
    date: "2022-02-03",
    dateLabel: "Feb 2022",
    rating: 5,
    quote:
      "Roxanne is amazing! She made me feel very comfortable the whole time and was understanding about my request to proceed with caution when it came to…",
    truncated: true,
    source: "Google",
  },
  {
    author: "Chelsea Hecht",
    date: "2022-01-15",
    dateLabel: "Jan 2022",
    rating: 5,
    quote:
      "Roxy is an amazing therapist — communicative, knowledgeable, intuitive and heart-centered. I love getting bodywork from her!",
    source: "Google",
  },
  {
    author: "Mary Carpenter",
    date: "2022-01-11",
    dateLabel: "Jan 2022",
    rating: 5,
    quote:
      "Roxy was responsive, welcoming and in tune. Her spirit is genuine and kind. The entire experience was wonderful. Happy to have her locally and would…",
    truncated: true,
    source: "Google",
  },
  {
    author: "Sabrina Petrelli",
    date: "2022-01-04",
    dateLabel: "Jan 2022",
    rating: 5,
    source: "Google",
  },
  {
    author: "Claire Bruten",
    date: "2022-01-04",
    dateLabel: "Jan 2022",
    rating: 5,
    quote:
      "I was so pleased to find Roxy in our neighbourhood. The massage was healing and calming, and Roxy is a lovely soul to be around.",
    source: "Google",
  },
  {
    author: "Adelita Hinojosa-Martin",
    date: "2022-01-04",
    dateLabel: "Jan 2022",
    rating: 5,
    source: "Google",
  },
]

/** Reviews that include written text, newest first. */
export const writtenReviews = reviews.filter((r) => r.quote)

// The longer featured testimonial originally highlighted on the website.
export const featuredTestimonial: Testimonial = {
  quote:
    "Roxanne gave me an amazing deep tissue massage! I'd been dealing with a lot of pain for a while and decided enough was enough; I needed a massage. Immediately felt so relieved after and she was super kind as well! Will definitely be going back!",
  author: "Kate Gelbart",
  location: "New York, NY",
}

// Backwards-compatible export.
export const testimonials: Testimonial[] = [featuredTestimonial]
