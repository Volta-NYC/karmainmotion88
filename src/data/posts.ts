import type { BlogPost } from "./types"

// Blog posts authored by Roxy Young, transcribed from the original site.
export const posts: BlogPost[] = [
  {
    slug: "new-address-and-new-hours",
    title: "New Address and New Hours",
    date: "2024-07-03",
    dateLabel: "July 3, 2024",
    author: "Roxy Young",
    excerpt:
      "Thank you again for your patience as I navigate new, unforeseen waters of life. I found a new place to live still within the neighborhood…",
    body: [
      "Hi everyone!",
      "Thank you again for your patience as I'm navigating through new unforeseen waters of life.",
      "I found a new place to live still within the neighborhood, but the conditions of the apartment is being shared with a daycare during the day on weekdays, so that means my hours will shift to evenings — but I will expand my hours on the weekends since I will have the place to myself.",
      "Once I update my address on the website then I will open back up for business sometime next week.",
      "Thank you again for your understanding 🙏🏽",
      "All the best,",
      "Roxanne",
    ],
  },
  {
    slug: "moving-out",
    title: "Moving Out",
    date: "2024-06-29",
    dateLabel: "June 29, 2024",
    author: "Roxy Young",
    excerpt:
      "Due to unfortunate circumstances, I'm moving out of my apartment and looking for another place to stay…",
    body: [
      "Hello everyone,",
      "Due to unfortunate circumstances, I'm moving out of my apartment of 525 E 21st St and in the process of looking for another place to stay. At this time I won't be taking bookings until I find a stable location to where I can continue to do my work from home.",
      "I appreciate all of you and thank you for your patience.",
      "All the best,",
      "Roxanne",
    ],
  },
  {
    slug: "wednesdays-open",
    title: "Wednesdays Open",
    date: "2024-06-09",
    dateLabel: "June 9, 2024",
    author: "Roxy Young",
    excerpt:
      "Since my dance rehearsal schedule has lightened up for the summer, I'm opening my schedule to see clients on Wednesdays…",
    body: [
      "Hello everyone!",
      "Since my dance rehearsal schedule has lightened up due to summer break, I'm opening my schedule up to see clients on Wednesdays from now until September. See you soon!",
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
