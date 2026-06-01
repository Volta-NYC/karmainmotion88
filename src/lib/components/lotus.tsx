import type { SVGProps } from "react"

/**
 * Brand motif — a single-line seated/meditating figure recreated from the
 * KarmaInMotion88 logo. Uses currentColor so it can be tinted anywhere.
 */
export default function Lotus({
  strokeWidth = 2.2,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="presentation"
      aria-hidden="true"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* head */}
        <circle cx="100" cy="54" r="15" />
        {/* neck + torso */}
        <path d="M100 69 C 100 92, 100 104, 100 120" />
        {/* arms resting on knees */}
        <path d="M100 90 C 72 90, 50 106, 60 128 C 64 138, 80 138, 88 129" />
        <path d="M100 90 C 128 90, 150 106, 140 128 C 136 138, 120 138, 112 129" />
        {/* crossed legs */}
        <path d="M100 120 C 76 120, 54 136, 62 152 C 69 165, 96 159, 100 145 C 104 159, 131 165, 138 152 C 146 136, 124 120, 100 120 Z" />
      </g>
    </svg>
  )
}
