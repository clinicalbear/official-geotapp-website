import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import PricingSimulator from "@/components/pricing/pricing-simulator";
import PricingTierGrid from "@/components/pricing/pricing-tier-grid";
import { getSiteContent } from "@/lib/contentStore";
import { fetchPricingTiers } from "@/lib/pricingApi";
import type { SiteContent } from "@/lib/siteContentSchema";
import { Box, Button, Container, Divider, Grid, Paper, Stack, Typography, type TypographyProps } from "@mui/material";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Prezzi GeoTapp",
  description: "Consulta i piani attivi e prepara l'integrazione con Stripe e Django prima del go-live.",
};

type PricingPageContent = SiteContent["pricingPage"];

type HtmlTypographyProps = TypographyProps & {
  html?: string | null;
};

function HtmlTypography({ html, ...props }: HtmlTypographyProps) {
  if (!html) return null;
  return <Typography {...props} dangerouslySetInnerHTML={{ __html: html }} />;
}

const LOGO_PLACEHOLDER = (index: number) =>
  `https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=600&q=60&sig=${index}`;

export default async function PricingPage() {
  const content = await getSiteContent();
  const pricingContent = content.pricingPage;
  const sharedPricing = content.pricing;
  const pricingTiers = await fetchPricingTiers();

  return (
    <Box component="main" sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <HeroBlock hero={pricingContent.hero} />
      <SimulatorBlock tiers={pricingTiers} copy={pricingContent.simulator} />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <PricingTierGrid pricing={sharedPricing} note={pricingContent.note} />
      </Container>
      <FaqBlock faqs={pricingContent.faqs} />
      <SocialProofBlock socialProof={content.socialProof} />
      <ContactBlock contact={content.contact} />
    </Box>
  );
}

type HeroBlockProps = {
  hero: PricingPageContent["hero"];
};

function HeroBlock({ hero }: HeroBlockProps) {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #ecfccb 0%, #e0f2fe 100%)",
        borderBottom: "1px solid rgba(15,23,42,0.08)",
        py: { xs: 10, md: 14 },
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center">
          <HtmlTypography
            html={hero.eyebrow}
            component="p"
            sx={{ letterSpacing: 4, fontSize: "0.75rem", textTransform: "uppercase", color: "primary.main" }}
          />
          <HtmlTypography
            html={hero.title}
            component="h1"
            sx={{ fontSize: { xs: "2.8rem", md: "3.4rem" }, fontWeight: 600 }}
          />
          <HtmlTypography
            html={hero.description}
            component="p"
            sx={{ color: "text.secondary", maxWidth: 640 }}
          />
        </Stack>
      </Container>
    </Box>
  );
}

type SimulatorBlockProps = {
  tiers: Awaited<ReturnType<typeof fetchPricingTiers>>;
  copy: PricingPageContent["simulator"];
};

function SimulatorBlock({ tiers, copy }: SimulatorBlockProps) {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <Box
          sx={{
            borderRadius: 4,
            background: "transparent",
            overflow: "hidden",
            boxShadow: "none",
          }}
        >
          <PricingSimulator tiers={tiers} copy={copy} />
        </Box>
      </Container>
    </Box>
  );
}

type FaqBlockProps = {
  faqs: PricingPageContent["faqs"];
};

function FaqBlock({ faqs }: FaqBlockProps) {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Risposte chiare"
          title="FAQ sui piani"
          description="Aggiorna questi contenuti dal CMS per riflettere politiche reali e condizioni fiscali."
        />
        <Stack spacing={3}>
          {faqs.map((faq) => (
            <Paper key={faq.question} variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6">{faq.question}</Typography>
              <HtmlTypography html={faq.answer} component="p" sx={{ color: "text.secondary", mt: 1.5 }} />
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

type SocialProofBlockProps = {
  socialProof: SiteContent["socialProof"];
};

function SocialProofBlock({ socialProof }: SocialProofBlockProps) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <SectionHeading eyebrow="Clienti reali" title={socialProof.title} description={socialProof.subtitle} />
      <Grid container spacing={2}>
        {socialProof.logos.map((logo, index) => (
          <Grid key={`${logo}-${index}`} item xs={6} md={3}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                pt: "60%",
                backgroundImage: `url(${LOGO_PLACEHOLDER(index)})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.8) 100%)",
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
      <Divider sx={{ my: 5 }} />
      <Grid container spacing={3}>
        {socialProof.testimonials.map((testimonial) => (
          <Grid key={testimonial.quote} item xs={12} md={4}>
            <Stack spacing={1.5}>
              <Typography variant="body1">&ldquo;{testimonial.quote}&rdquo;</Typography>
              <Typography variant="subtitle1">{testimonial.author}</Typography>
              <Typography variant="caption" color="text.secondary">
                {testimonial.role}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

type ContactBlockProps = {
  contact: SiteContent["contact"];
};

function ContactBlock({ contact }: ContactBlockProps) {
  return (
    <Container maxWidth="lg" sx={{ pb: { xs: 8, md: 12 } }}>
      <Paper variant="outlined" sx={{ borderRadius: 4, p: { xs: 4, md: 6 }, borderColor: "rgba(15,23,42,0.08)" }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <Stack spacing={2} textAlign="center" alignItems="center">
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4 }}>
                {contact.title}
              </Typography>
              <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, fontWeight: 600 }}>
                {contact.description}
              </Typography>
              <Stack spacing={1.5} alignItems="center" mt={1}>
                {contact.details.map((detail) => (
                  <Stack key={detail} direction="row" spacing={1} alignItems="center" color="text.secondary">
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    <Typography variant="body1">{detail}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Button component={Link} href="/contatti" variant="outlined" color="secondary" sx={{ mt: 2 }}>
                Guida completa
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <ContactForm />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
      <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4 }}>
        {eyebrow}
      </Typography>
      <Typography variant="h3" sx={{ fontSize: { xs: "2.2rem", md: "2.6rem" } }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
          {description}
        </Typography>
      )}
    </Stack>
  );
}
