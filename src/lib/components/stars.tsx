/** Five-star rating display. */
export default function Stars({
  rating = 5,
  className = "",
  size = 16,
}: {
  rating?: number
  className?: string
  size?: number
}) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={i < Math.round(rating) ? "text-rose" : "text-ink/20"}
        >
          <path
            fill="currentColor"
            d="M10 1.6l2.47 5.16 5.68.74-4.18 3.9 1.07 5.6L10 13.98 4.96 17l1.07-5.6L1.85 7.5l5.68-.74L10 1.6z"
          />
        </svg>
      ))}
    </span>
  )
}
