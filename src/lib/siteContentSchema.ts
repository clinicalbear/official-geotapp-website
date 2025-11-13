import { z } from "zod";

const DEFAULT_TITLE_HTML = '<span style="color:#fff;">GeoTapp</span>';
const DEFAULT_SUBTITLE_HTML =
  '<span style="letter-spacing:0.4em;text-transform:uppercase;color:#94a3b8;">Official Website</span>';

const linkSchema = z.object({
  label: z.string().min(1, "Il testo del bottone è obbligatorio"),
  href: z.string().min(1, "Serve un link valido"),
});

const metricSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
  detail: z.string().min(1),
});

const featureItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  pill: z.string().min(1),
});

const parallaxHighlightSchema = z.object({
  title: z.string().min(1),
  detail: z.string().min(1),
});

const timelineStepSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  duration: z.string().min(1),
});

const pricingTierSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.string().min(1),
  cadence: z.string().min(1),
  highlights: z.array(z.string().min(1)).min(2).max(3),
  ctaLabel: z.string().min(1),
  ctaHref: z.string().min(1),
  emphasized: z.boolean().optional(),
});

const mediaAssetSchema = z.object({
  image: z.string().min(1).optional(),
  video: z.string().min(1).optional(),
  caption: z.string().optional(),
  alt: z.string().optional(),
});

const testimonialSchema = z.object({
  quote: z.string().min(1),
  author: z.string().min(1),
  role: z.string().min(1),
  avatar: z.string().optional(),
});

const socialProofSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string().min(1),
  logos: z.array(z.string().min(1)).min(3).max(6),
  testimonials: z.array(testimonialSchema).min(1).max(3),
});

const publicationSchema = z.object({
  status: z.enum(["draft", "published"]),
  lastEditedBy: z.string().optional(),
  lastUpdatedAt: z.string().optional(),
});

const brandingSchema = z.object({
  logoDataUrl: z
    .union([z.string().min(1), z.literal(""), z.null()])
    .optional()
    .transform((value) => (value == null ? "" : value)),
  logoAlt: z.string().min(1),
  logoHref: z.string().min(1),
  accentColor: z.string().min(1),
  logoWidth: z.number().min(80).max(240).default(160),
  titleHtml: z.string().min(1).default(DEFAULT_TITLE_HTML),
  subtitleHtml: z.string().min(1).default(DEFAULT_SUBTITLE_HTML),
});

const seoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  keywords: z.array(z.string().min(1)).min(1),
  ogImage: z.string().min(1),
  canonicalUrl: z.string().min(1),
});

const analyticsSchema = z.object({
  headHtml: z.string().optional(),
});

const pageHeroSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const faqSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

const servicesPageSchema = z.object({
  hero: pageHeroSchema,
  services: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        icon: z.string().min(1),
      }),
    )
    .min(3),
  highlights: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(2),
  cta: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    primaryLabel: z.string().min(1),
    primaryHref: z.string().min(1),
  }),
});

const pricingPageSchema = z.object({
  hero: pageHeroSchema,
  tiers: z.array(pricingTierSchema).min(2),
  faqs: z.array(faqSchema).min(2),
  note: z.string().min(1),
});

const aboutPageSchema = z.object({
  hero: pageHeroSchema,
  values: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(3),
  story: z
    .array(
      z.object({
        year: z.string().min(1),
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(3),
  teamNote: z.string().min(1),
});

export const siteContentSchema = z.object({
  publication: publicationSchema,
  branding: brandingSchema,
  seo: seoSchema,
  analytics: analyticsSchema,
  socialProof: socialProofSchema,
  hero: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    supporting: z.string().min(1),
    primaryCta: linkSchema,
    secondaryCta: linkSchema,
    mediaBadge: z.string().min(1),
    mediaCaption: z.string().min(1),
    media: mediaAssetSchema.optional(),
  }),
  metrics: z.array(metricSchema).min(3).max(3),
  featureCluster: z.object({
    title: z.string().min(1),
    intro: z.string().min(1),
    items: z.array(featureItemSchema).min(3).max(3),
    media: mediaAssetSchema.optional(),
  }),
  howItWorks: z.object({
    title: z.string().min(1),
    intro: z.string().min(1),
    steps: z.array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
        media: mediaAssetSchema.optional(),
      })
    ).min(3).max(3),
  }),
  parallax: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    description: z.string().min(1),
    stickyHighlights: z.array(parallaxHighlightSchema).min(2).max(3),
    cards: z.array(parallaxHighlightSchema.extend({ pill: z.string().optional() })).min(3).max(3),
    texture: z.string().min(1),
    media: mediaAssetSchema.optional(),
  }),
  timeline: z.object({
    title: z.string().min(1),
    helper: z.string().min(1),
    steps: z.array(timelineStepSchema).min(3).max(3),
    media: mediaAssetSchema.optional(),
  }),
  pricing: z.object({
    title: z.string().min(1),
    subtitle: z.string().min(1),
    tiers: z.array(pricingTierSchema).min(2).max(3),
    media: mediaAssetSchema.optional(),
  }),
  contact: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    details: z.array(z.string().min(1)).min(2).max(3),
    media: mediaAssetSchema.optional(),
  }),
  servicesPage: servicesPageSchema,
  pricingPage: pricingPageSchema,
  aboutPage: aboutPageSchema,
});

export type SiteContent = z.infer<typeof siteContentSchema>;
