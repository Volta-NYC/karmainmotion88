import type { Service, ServiceCategory } from "./types"

// Service descriptions are drawn from the original "Treatment Options" copy.
const SWEDISH_DESC =
  "The most popular form of massage — long, flowing strokes that ease the whole body into deep relaxation and restore a sense of calm and wellness."
const DEEP_TISSUE_DESC =
  "A focused, more intense treatment that works into the deeper muscle fibers to release stubborn tension, knots, and adhesions."
const PRENATAL_DESC =
  "Gentle, supportive bodywork for expecting mothers 12 weeks and beyond — easing the extra strain pregnancy places on the body and leaving you rejuvenated."

export const services: Service[] = [
  // ——— Swedish ———
  {
    slug: "30-minute-swedish-massage",
    name: "30 Minute Swedish Massage",
    shortName: "Swedish Massage",
    category: "swedish",
    durationMin: 30,
    durationLabel: "30 min",
    price: 70,
    description: SWEDISH_DESC,
    isAddOn: false,
    benefits: ["Relaxation", "Quick reset", "Stress relief"],
  },
  {
    slug: "swedish-massage",
    name: "60 Minute Swedish Massage",
    shortName: "Swedish Massage",
    category: "swedish",
    durationMin: 60,
    durationLabel: "1 hr",
    price: 120,
    description: SWEDISH_DESC,
    isAddOn: false,
    benefits: ["Relaxation", "Circulation", "Stress relief"],
  },
  {
    slug: "swedish-massage-1",
    name: "90 Minute Swedish Massage",
    shortName: "Swedish Massage",
    category: "swedish",
    durationMin: 90,
    durationLabel: "1 hr 30 min",
    price: 150,
    description: SWEDISH_DESC,
    isAddOn: false,
    benefits: ["Full-body relaxation", "Circulation", "Deep calm"],
  },
  {
    slug: "2-hour-swedish-massage",
    name: "2 Hour Swedish Massage",
    shortName: "Swedish Massage",
    category: "swedish",
    durationMin: 120,
    durationLabel: "2 hr",
    price: 180,
    description: SWEDISH_DESC,
    isAddOn: false,
    benefits: ["Total restoration", "Deep relaxation", "Whole-body care"],
  },
  // ——— Deep Tissue ———
  {
    slug: "30-minute-deep-tissue-massage",
    name: "30 Minute Deep Tissue Massage",
    shortName: "Deep Tissue Massage",
    category: "deep-tissue",
    durationMin: 30,
    durationLabel: "30 min",
    price: 85,
    description: DEEP_TISSUE_DESC,
    isAddOn: false,
    benefits: ["Targeted relief", "Tension release", "Focused work"],
  },
  {
    slug: "deep-tissue-massage",
    name: "60 Minute Deep Tissue Massage",
    shortName: "Deep Tissue Massage",
    category: "deep-tissue",
    durationMin: 60,
    durationLabel: "1 hr",
    price: 150,
    description: DEEP_TISSUE_DESC,
    isAddOn: false,
    benefits: ["Chronic pain", "Knots & adhesions", "Recovery"],
  },
  {
    slug: "deep-tissue-massage-1",
    name: "90 Minute Deep Tissue Massage",
    shortName: "Deep Tissue Massage",
    category: "deep-tissue",
    durationMin: 90,
    durationLabel: "1 hr 30 min",
    price: 180,
    description: DEEP_TISSUE_DESC,
    isAddOn: false,
    benefits: ["Deep release", "Chronic tension", "Recovery"],
  },
  {
    slug: "2-hour-deep-tissue-massage",
    name: "2 Hour Deep Tissue Massage",
    shortName: "Deep Tissue Massage",
    category: "deep-tissue",
    durationMin: 120,
    durationLabel: "2 hr",
    price: 210,
    description: DEEP_TISSUE_DESC,
    isAddOn: false,
    benefits: ["Full-body deep work", "Chronic pain", "Total recovery"],
  },
  // ——— Prenatal ———
  {
    slug: "prenatal-swedish-massage",
    name: "Prenatal Swedish Massage",
    shortName: "Prenatal Swedish",
    category: "prenatal",
    durationMin: 60,
    durationLabel: "1 hr",
    price: 145,
    description: PRENATAL_DESC,
    isAddOn: false,
    benefits: ["12 weeks +", "Gentle relief", "Rejuvenating"],
  },
  {
    slug: "prenatal-deep-tissue-massage",
    name: "Prenatal Deep Tissue Massage",
    shortName: "Prenatal Deep Tissue",
    category: "prenatal",
    durationMin: 60,
    durationLabel: "1 hr",
    price: 175,
    description: PRENATAL_DESC,
    isAddOn: false,
    benefits: ["12 weeks +", "Targeted relief", "Rejuvenating"],
  },
  // ——— Add-ons ———
  {
    slug: "aromatherapy-add-on",
    name: "Aromatherapy",
    shortName: "Aromatherapy",
    category: "add-on",
    durationMin: 5,
    durationLabel: "Add-on",
    price: 40,
    description:
      "Essential oils bring your aching muscles into balance — relaxation and release from tension. Especially soothing for chronic pain.",
    isAddOn: true,
    benefits: ["Essential oils", "Chronic pain", "Deep calm"],
  },
  {
    slug: "scalp-massage-add-on",
    name: "Scalp Massage",
    shortName: "Scalp Massage",
    category: "add-on",
    durationMin: 5,
    durationLabel: "Add-on",
    price: 40,
    description:
      "Gentle, intentional pressure across the scalp to relieve headaches and migraines and melt away mental tension.",
    isAddOn: true,
    benefits: ["Headache relief", "Migraines", "Mental calm"],
  },
  {
    slug: "facial-massage-add-on",
    name: "Facial Massage",
    shortName: "Facial Massage",
    category: "add-on",
    durationMin: 5,
    durationLabel: "Add-on",
    price: 40,
    description:
      "Deeply relaxing facial work that helps reduce migraines and headaches while softening fine lines and wrinkles.",
    isAddOn: true,
    benefits: ["Relaxation", "Fine lines", "Headache relief"],
  },
  {
    slug: "cold-stone-facial-massage-add-on-1",
    name: "Cold Stone Facial Massage",
    shortName: "Cold Stone Facial",
    category: "add-on",
    durationMin: 5,
    durationLabel: "Add-on",
    price: 60,
    description:
      "Cool stones glide across the face to boost blood circulation, calm inflammation, and smooth fine lines.",
    isAddOn: true,
    benefits: ["Circulation", "De-puffing", "Fine lines"],
  },
  {
    slug: "hot-stone-facial-massage-add-on-1",
    name: "Hot Stone Facial Massage",
    shortName: "Hot Stone Facial",
    category: "add-on",
    durationMin: 5,
    durationLabel: "Add-on",
    price: 60,
    description:
      "Warm stones encourage blood circulation and a radiant glow while gently softening fine lines and wrinkles.",
    isAddOn: true,
    benefits: ["Circulation", "Warmth", "Fine lines"],
  },
  {
    slug: "hot-stone-massage-add-on-2",
    name: "Hot Stone Massage",
    shortName: "Hot Stone Massage",
    category: "add-on",
    durationMin: 5,
    durationLabel: "Add-on",
    price: 70,
    description:
      "Heated stones relax tight muscles and improve circulation — a warming, grounding addition to any session.",
    isAddOn: true,
    benefits: ["Muscle relief", "Warmth", "Circulation"],
  },
]

export const categoryMeta: Record<
  ServiceCategory,
  { label: string; blurb: string }
> = {
  swedish: {
    label: "Swedish Massage",
    blurb: "Flowing, full-body relaxation to bring wellness and calm.",
  },
  "deep-tissue": {
    label: "Deep Tissue Massage",
    blurb: "Focused pressure to release deep tension and adhesions.",
  },
  prenatal: {
    label: "Prenatal Massage",
    blurb: "Gentle, supportive care for expecting mothers, 12 weeks +.",
  },
  "add-on": {
    label: "Add-Ons",
    blurb: "Thoughtful enhancements to round out your session.",
  },
}

export const massages = services.filter((s) => !s.isAddOn)
export const addOns = services.filter((s) => s.isAddOn)

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function servicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category)
}

export const categoryOrder: ServiceCategory[] = [
  "swedish",
  "deep-tissue",
  "prenatal",
  "add-on",
]
