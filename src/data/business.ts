import type { DayHours } from "./types"

// Core business identity — sourced directly from the original site. Factual only.
export const business = {
  name: "KarmaInMotion88",
  shortName: "Karma in Motion",
  tagline: "Bringing Wellness to Your Karma",
  // The founder & sole practitioner.
  founder: {
    name: "Roxanne Young",
    nickname: "Roxy",
    title: "Licensed Massage Therapist",
    credential: "LMT",
    since: 2019,
    school: "Cortiva Institute, Hoboken, NJ",
  },
  contact: {
    email: "karmainmotion88@gmail.com",
    phone: "646-397-5404",
    phoneHref: "+16463975404",
  },
  location: {
    label: "Amsterdam Avenue Studio",
    street: "510 Amsterdam Ave",
    unit: "Apt 5D",
    city: "New York",
    state: "NY",
    zip: "10024",
    neighborhood: "Upper West Side, Manhattan",
    mapQuery: "510 Amsterdam Ave, New York, NY 10024",
  },
  policies: {
    cancellation:
      "A $25 cancellation fee applies for appointments cancelled with short notice, to account for the lost time reserved for your session.",
    prenatalNote: "Prenatal massage is recommended for expecting mothers 12 weeks and beyond.",
  },
  seasonLabel: "Spring / Summer Hours",
} as const

// Weekly opening hours (Spring/Summer schedule from the original site).
export const hours: DayHours[] = [
  { day: "Sunday", short: "Sun", open: "10:00 AM", close: "8:30 PM" },
  { day: "Monday", short: "Mon", open: "10:00 AM", close: "8:30 PM" },
  { day: "Tuesday", short: "Tue", open: "10:00 AM", close: "8:30 PM" },
  { day: "Wednesday", short: "Wed", open: "10:00 AM", close: "4:00 PM" },
  { day: "Thursday", short: "Thu", open: "10:00 AM", close: "4:00 PM" },
  { day: "Friday", short: "Fri", open: null, close: null },
  { day: "Saturday", short: "Sat", open: null, close: null },
]

export const fullAddress = `${business.location.street}, ${business.location.city}, ${business.location.state} ${business.location.zip}`
