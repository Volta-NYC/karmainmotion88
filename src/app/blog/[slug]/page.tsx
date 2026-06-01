import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import Reveal from "@/lib/components/reveal"
import CTA, { Arrow } from "@/lib/components/button"
import Lotus from "@/lib/components/lotus"
import { posts, getPost } from "@/data/posts"

type Params = { slug: string }

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: "Post not found" }
  return { title: post.title, description: post.excerpt }
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const others = posts.filter((p) => p.slug !== post.slug)

  return (
    <>
      <header className="relative overflow-hidden bg-ink pb-16 pt-36 text-cream-soft sm:pt-44">
        <Lotus
          className="pointer-events-none absolute -right-10 -top-6 h-72 w-72 text-cream/[0.05]"
          strokeWidth={1.2}
        />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/blog"
            className="link-underline text-sm text-cream/70 hover:text-cream-soft"
          >
            ← Journal
          </Link>
          <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-widest2 text-rose-soft">
            <span>{post.dateLabel}</span>
            <span className="h-px w-6 bg-rose-soft/50" />
            <span className="text-cream/60">{post.author}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </header>

      <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-20">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>

        {/* Author */}
        <div className="mt-14 flex items-center gap-4 border-t border-ink/10 pt-8">
          <Image
            src="/images/roxanne-portrait.jpg"
            alt={post.author}
            width={96}
            height={96}
            className="h-14 w-14 rounded-full object-cover"
          />
          <div>
            <p className="font-display text-lg text-ink">{post.author}</p>
            <p className="text-sm text-taupe">Licensed Massage Therapist · KarmaInMotion88</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl bg-cream-deep/60 p-7 text-center">
          <p className="font-display text-xl text-ink">Ready for some restorative care?</p>
          <CTA href="/book" variant="primary" className="group mt-5">
            Book a Session <Arrow />
          </CTA>
        </div>
      </article>

      {/* Other posts */}
      {others.length > 0 && (
        <section className="border-t border-ink/10 py-16">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest2 text-rose">
              More from the journal
            </h2>
            <ul className="mt-6 divide-y divide-ink/10">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-widest2 text-taupe">
                        {p.dateLabel}
                      </p>
                      <p className="mt-1 font-display text-xl text-ink transition-colors group-hover:text-rose-deep">
                        {p.title}
                      </p>
                    </div>
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
