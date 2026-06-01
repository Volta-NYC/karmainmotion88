import type { Metadata } from "next"
import Link from "next/link"
import PageHeader from "@/lib/components/page-header"
import Reveal from "@/lib/components/reveal"
import { Arrow } from "@/lib/components/button"
import { posts } from "@/data/posts"

export const metadata: Metadata = {
  title: "Journal",
  description:
    "News and updates from Roxanne Young of KarmaInMotion88 — hours, location changes, and notes from the practice.",
}

export default function BlogPage() {
  return (
    <>
      <PageHeader
        kicker="Journal"
        title={
          <>
            Notes from the <span className="italic text-rose-soft">practice</span>
          </>
        }
        intro="Updates on hours, the studio, and life behind KarmaInMotion88 — straight from Roxanne."
      />

      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <ul className="divide-y divide-ink/10">
          {posts.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 80}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group block py-10 transition-colors first:pt-0"
                >
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest2 text-rose">
                    <span>{p.dateLabel}</span>
                    <span className="h-px w-6 bg-rose/40" />
                    <span className="text-taupe">{p.author}</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-light tracking-tight text-ink transition-colors group-hover:text-rose-deep sm:text-4xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-prose2 leading-relaxed text-ink-muted">
                    {p.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ink">
                    Read more <Arrow />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
