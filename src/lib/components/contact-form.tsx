"use client"

import { useState } from "react"
import { business } from "@/data/business"

const fieldBase =
  "w-full rounded-xl border border-ink/15 bg-cream-soft px-4 py-3 text-ink placeholder:text-taupe/60 transition-colors focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"

export default function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: defaultSubject,
    message: "",
  })
  const [sent, setSent] = useState(false)

  function update(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || "Website inquiry")
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${business.contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-rose/30 bg-rose-blush/20 p-8 text-center">
        <p className="font-display text-2xl text-ink">Thanks for reaching out!</p>
        <p className="mt-3 text-ink-muted">
          Your email draft is ready to send. If your mail app didn&apos;t open, write
          to{" "}
          <a
            href={`mailto:${business.contact.email}`}
            className="link-underline font-medium text-rose-deep"
          >
            {business.contact.email}
          </a>{" "}
          and I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-ink underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-taupe">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            className={fieldBase}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm text-taupe">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            className={fieldBase}
            placeholder="you@email.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm text-taupe">
          Subject
        </label>
        <input
          id="subject"
          value={form.subject}
          onChange={update("subject")}
          className={fieldBase}
          placeholder="How can I help?"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-taupe">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={`${fieldBase} resize-none`}
          placeholder="Tell me a little about what you're looking for…"
        />
      </div>
      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose px-8 py-3.5 font-medium text-cream-soft shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep sm:w-auto"
      >
        Send Message
      </button>
    </form>
  )
}
