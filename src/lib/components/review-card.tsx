import type { Review } from "@/data/testimonials"
import Stars from "./stars"

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

/** Small Google "G" glyph for review attribution. */
function GoogleGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.1h12.1c-.2 1.8-1.6 4.6-4.5 6.4l6.9 5.3c4.1-3.8 6.6-9.4 6.6-15z" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.3c-1.8 1.3-4.3 2.2-7.6 2.2-5.8 0-10.7-3.9-12.5-9.2l-7.1 5.5C8 41.1 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4l-7.1-5.5C2.9 17 2 20.4 2 24s.9 7 2.4 9.9l7.1-5.5z" />
      <path fill="#EA4335" d="M24 10.4c3.3 0 5.5 1.4 6.7 2.6l5.9-5.8C33 3.9 28.9 2 24 2 15.4 2 8 6.9 4.4 14.1l7.1 5.5C13.3 14.3 18.2 10.4 24 10.4z" />
    </svg>
  )
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-ink/10 bg-cream-soft p-7 transition-all duration-500 hover:-translate-y-1 hover:border-rose/20 hover:shadow-soft">
      <div className="flex items-center justify-between">
        <Stars rating={review.rating} />
        {review.source === "Google" && <GoogleGlyph />}
      </div>
      {review.quote ? (
        <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-ink-soft">
          {review.quote}
        </blockquote>
      ) : (
        <p className="mt-4 flex-1 text-[0.975rem] italic leading-relaxed text-taupe">
          Left a 5-star rating.
        </p>
      )}
      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-xs font-semibold tracking-wide text-cream-soft">
          {initials(review.author)}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-medium text-ink">{review.author}</span>
          {review.dateLabel && (
            <span className="block text-xs text-taupe">{review.dateLabel}</span>
          )}
        </span>
      </figcaption>
    </figure>
  )
}
