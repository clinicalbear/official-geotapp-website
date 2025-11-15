import { getSiteContent } from "@/lib/contentStore";
import type { SiteContent } from "@/lib/siteContentSchema";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import PricingTierGrid from "@/components/pricing/pricing-tier-grid";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getSiteContent();
  const {
    hero,
    featureCluster,
    howItWorks,
    parallax,
    timeline,
    pricing,
    socialProof,
    contact,
  } = content;

  return (
    <Box component="main" sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <HeroBlock hero={hero} />
      <ContentSections
        featureCluster={featureCluster}
        howItWorks={howItWorks}
        parallax={parallax}
        timeline={timeline}
        pricing={pricing}
        socialProof={socialProof}
        contact={contact}
      />
    </Box>
  );
}

type HeroBlockProps = {
  hero: SiteContent["hero"];
};

function HeroBlock({ hero }: HeroBlockProps) {
  const heroImageSrc =
    hero.media?.image ??
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80";
  const heroImageAlt = hero.media?.alt ?? "Spazio immagine caricabile dal CMS";
  const heroImageCaption = hero.media?.caption ?? "Carica qui una visual del progetto direttamente dal backend.";

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ecfccb 0%, #fef9c3 100%)",
        borderBottom: "1px solid rgba(15,23,42,0.08)",
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Chip
                label={hero.eyebrow}
                color="primary"
                variant="outlined"
                sx={{ alignSelf: "flex-start", letterSpacing: 4 }}
              />
              <Typography variant="h1" sx={{ fontSize: { xs: "2.8rem", md: "3.4rem" } }}>
                <span dangerouslySetInnerHTML={{ __html: hero.title }} />
              </Typography>
              <Typography variant="body1" color="text.secondary">
                <span dangerouslySetInnerHTML={{ __html: hero.description }} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hero.supporting}
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} pt={1}>
                <Button
                  component={Link}
                  href={hero.primaryCta.href}
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  {hero.primaryCta.label}
                </Button>
                <Button
                  component={Link}
                  href={hero.secondaryCta.href}
                  variant="outlined"
                  color="secondary"
                  size="large"
                >
                  {hero.secondaryCta.label}
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              variant="outlined"
              sx={{
                p: 0,
                borderRadius: 4,
                bgcolor: "rgba(255,255,255,0.9)",
                borderColor: "rgba(15,23,42,0.08)",
                overflow: "hidden",
              }}
            >
              <Box component="figure" sx={{ m: 0 }}>
                <Box
                  component="img"
                  src={heroImageSrc}
                  alt={heroImageAlt}
                  style={{ width: "100%", display: "block" }}
                />
                <Typography
                  component="figcaption"
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", px: 3, py: 2 }}
                >
                  {heroImageCaption}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

type ContentSectionsProps = {
  featureCluster: SiteContent["featureCluster"];
  howItWorks: SiteContent["howItWorks"];
  parallax: SiteContent["parallax"];
  timeline: SiteContent["timeline"];
  pricing: SiteContent["pricing"];
  socialProof: SiteContent["socialProof"];
  contact: SiteContent["contact"];
};

function ContentSections({
  featureCluster,
  howItWorks,
  parallax,
  timeline,
  pricing,
  socialProof,
  contact,
}: ContentSectionsProps) {
  const getLogoImage = (index: number) =>
    `https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=60&sig=${index}`;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Stack spacing={10}>
        <SectionCard
          eyebrow="Moduli principali"
          title={featureCluster.title}
          description={featureCluster.intro}
        >
          <Grid container spacing={3}>
            {featureCluster.items.map((item) => (
              <Grid key={item.title} item xs={12} md={4}>
                <Stack spacing={1.5}>
                  <Chip label={item.pill} color="primary" variant="outlined" />
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </SectionCard>

        <SectionCard eyebrow="Come funziona" title={howItWorks.title} description={howItWorks.intro}>
          <Grid container spacing={3}>
            {howItWorks.steps.map((step, index) => (
              <Grid key={step.title} item xs={12} md={4}>
                <Stack spacing={1.5}>
                  <Chip label={`Step ${index + 1}`} color="secondary" variant="outlined" />
                  <Typography variant="h6">{step.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </SectionCard>

        <ParallaxShowcaseBlock parallax={parallax} />

        <SectionCard eyebrow="Roadmap" title={timeline.title} description={timeline.helper}>
          <Stack spacing={3}>
            {timeline.steps.map((step, index) => (
              <Stack key={index} spacing={1.5} direction={{ xs: "column", md: "row" }}>
                <Typography variant="h6" sx={{ minWidth: 140 }}>
                  {step.duration}
                </Typography>
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1">{step.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </SectionCard>

        <SectionCard eyebrow="Piani" title={pricing.title} description={pricing.subtitle}>
          <PricingTierGrid pricing={pricing} showHeading={false} />
        </SectionCard>

        <SectionCard eyebrow="Clienti reali" title={socialProof.title} description={socialProof.subtitle}>
          <Stack spacing={4}>
            <Grid container spacing={2}>
              {socialProof.logos.map((logo, index) => (
                <Grid key={`${logo}-${index}`} item xs={6} md={3}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      overflow: "hidden",
                      position: "relative",
                      pt: "60%",
                      backgroundImage: `url(${getLogoImage(index)})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.65) 100%)",
                        display: "flex",
                        alignItems: "flex-end",
                        p: 2,
                      }}
                    >
                      <Typography variant="subtitle2" color="common.white">
                        {logo}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Divider />
            <Grid container spacing={3}>
              {socialProof.testimonials.map((testimonial) => (
                <Grid key={testimonial.quote} item xs={12} md={4}>
                  <Stack spacing={1.5}>
                    <Typography variant="body1">&ldquo;{testimonial.quote}&rdquo;</Typography>
                    <Typography variant="subtitle2">{testimonial.author}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </SectionCard>

        <Paper
          variant="outlined"
          sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            borderColor: "rgba(15,23,42,0.08)",
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={5}>
              <Stack spacing={2} textAlign="center" alignItems="center">
                <Typography variant="overline" color="text.secondary">
                  {contact.title}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, fontWeight: 600 }}
                >
                  {contact.description}
                </Typography>
                <Stack spacing={1.5} alignItems="center" mt={1}>
                  {contact.details.map((detail, index) => (
                    <Stack key={detail} direction="row" spacing={1} alignItems="center" color="text.secondary">
                      <i className="fa-solid fa-circle-check" aria-hidden="true" />
                      <Typography variant="body1">{detail}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button
                  component={Link}
                  href="/contatti"
                  variant="outlined"
                  color="secondary"
                  sx={{ mt: 2 }}
                >
                  Guida completa
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={7}>
              <ContactForm />
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Container>
  );
}

type SectionCardProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

function SectionCard({ eyebrow, title, description, children }: SectionCardProps) {
  return (
    <Stack spacing={3}>
      <Stack spacing={1} alignItems="center" textAlign="center">
        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4 }}>
          {eyebrow}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "2.2rem", md: "2.6rem" } }}>
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        )}
      </Stack>
      <Divider />
      {children}
    </Stack>
  );
}

type ParallaxProps = {
  parallax: SiteContent["parallax"];
};

const FILLER_SNIPPET =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet dignissim nibh. Integer sodales leo sed nisi faucibus, sed suscipit nulla iaculis. Vivamus ut lacus sodales, tincidunt ligula vitae, faucibus nibh. Morbi sit amet lobortis elit. Pellentesque at dictum eros. Proin egestas orci auctor, finibus lorem eu, accumsan sapien. Suspendisse non leo tempor, porttitor risus et, semper odio. Sed nec dolor tincidunt, iaculis orci sed, tempus velit. Curabitur luctus posuere ipsum, vel posuere tellus.";

function ParallaxShowcaseBlock({ parallax }: ParallaxProps) {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 0 },
        position: "relative",
        bgcolor: "transparent",
        border: "none",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2} sx={{ position: { md: "sticky" }, top: { md: 96 } }}>
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4 }}>
                {parallax.eyebrow}
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: "2.4rem", md: "2.8rem" } }}>
                {parallax.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {parallax.description}
              </Typography>
              <Stack spacing={2} mt={2}>
                {parallax.stickyHighlights.map((highlight) => (
                  <Stack key={highlight.title} direction="row" spacing={2}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        bgcolor: "rgba(15,23,42,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className="fa-solid fa-check" aria-hidden="true" style={{ color: "var(--brand-accent)" }} />
                    </Box>
                    <Stack spacing={0.5}>
                      <Typography variant="subtitle1">{highlight.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {highlight.detail}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              {parallax.cards.map((card) => (
                <Box
                  key={card.title}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    border: "none",
                    bgcolor: "transparent",
                  }}
                >
                  {card.pill && (
                    <Chip
                      label={card.pill}
                      color="primary"
                      variant="outlined"
                      sx={{ width: "fit-content", mb: 1.5 }}
                    />
                  )}
                  <Stack spacing={1}>
                    <Typography variant="h5">{card.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
                      {[card.detail, Array.from({ length: 6 }).map(() => FILLER_SNIPPET).join(" ")].join(" ")}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
