"use client"

import { useState } from "react"
import { services } from "@/data/services"
import { business } from "@/data/business"
import { formatPrice } from "@/lib/format"

const fieldBase =
  "w-full rounded-xl border border-ink/15 bg-cream-soft px-4 py-3 text-ink placeholder:text-taupe/60 transition-colors focus:border-rose focus:outline-none focus:ring-2 focus:ring-rose/20"

const standalone = services.filter((s) => !s.isAddOn)
const addOns = services.filter((s) => s.isAddOn)

export default function BookingForm({ initialService = "" }: { initialService?: string }) {
  const valid = services.some((s) => s.slug === initialService)
  const [form, setForm] = useState({
    service: valid ? initialService : standalone[1]?.slug ?? "",
    addOn: "",
    date: "",
    time: "",
    name: "",
    contact: "",
    notes: "",
  })
  const [sent, setSent] = useState(false)

  function update(key: keyof typeof form) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => setForm((f) => ({ ...f, [key]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const svc = services.find((s) => s.slug === form.service)
    const add = services.find((s) => s.slug === form.addOn)
    const subject = encodeURIComponent(`Booking request — ${svc?.name ?? "Massage"}`)
    const body = encodeURIComponent(
      [
        `Service: ${svc?.name ?? ""} (${svc ? formatPrice(svc.price) : ""})`,
        add ? `Add-on: ${add.shortName} (+${formatPrice(add.price)})` : "Add-on: none",
        `Preferred date: ${form.date || "flexible"}`,
        `Preferred time: ${form.time || "flexible"}`,
        "",
        `Name: ${form.name}`,
        `Phone / email: ${form.contact}`,
        "",
        `Notes: ${form.notes || "—"}`,
      ].join("\n")
    )
    window.location.href = `mailto:${business.contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-rose/30 bg-rose-blush/20 p-8 text-center">
        <p className="font-display text-2xl text-ink">Your request is on its way!</p>
        <p className="mt-3 text-ink-muted">
          I&apos;ll confirm your appointment personally within 24 hours. If your email
          app didn&apos;t open, call or text{" "}
          <a
            href={`tel:${business.contact.phoneHref}`}
            className="link-underline font-medium text-rose-deep"
          >
            {business.contact.phone}
          </a>
          .
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-medium text-ink underline-offset-4 hover:underline"
        >
          Make another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm text-taupe">
          Choose a session
        </label>
        <select
          id="service"
          value={form.service}
          onChange={update("service")}
          className={fieldBase}
        >
          {standalone.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name} — {formatPrice(s.price)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="addOn" className="mb-1.5 block text-sm text-taupe">
          Add an enhancement (optional)
        </label>
        <select
          id="addOn"
          value={form.addOn}
          onChange={update("addOn")}
          className={fieldBase}
        >
          <option value="">No add-on</option>
          {addOns.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.shortName} — +{formatPrice(s.price)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm text-taupe">
            Preferred date
          </label>
          <input id="date" type="date" value={form.date} onChange={update("date")} className={fieldBase} />
        </div>
        <div>
          <label htmlFor="time" className="mb-1.5 block text-sm text-taupe">
            Preferred time
          </label>
          <input id="time" type="time" value={form.time} onChange={update("time")} className={fieldBase} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-taupe">
            Your name
          </label>
          <input id="name" required value={form.name} onChange={update("name")} className={fieldBase} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact" className="mb-1.5 block text-sm text-taupe">
            Phone or email
          </label>
          <input id="contact" required value={form.contact} onChange={update("contact")} className={fieldBase} placeholder="Best way to reach you" />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="mb-1.5 block text-sm text-taupe">
          Anything I should know?
        </label>
        <textarea
          id="notes"
          rows={3}
          value={form.notes}
          onChange={update("notes")}
          className={`${fieldBase} resize-none`}
          placeholder="Areas of tension, pregnancy, pressure preferences…"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose px-8 py-3.5 font-medium text-cream-soft shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-deep"
      >
        Request Appointment
      </button>
      <p className="text-center text-xs text-taupe">
        Requests are confirmed personally — no payment is taken online.
      </p>
    </form>
  )
}
