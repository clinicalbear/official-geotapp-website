import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { getSiteContent } from "@/lib/contentStore";
import type { SiteContent } from "@/lib/siteContentSchema";
import { Box, Button, Container, Grid, Paper, Stack, Typography, type TypographyProps } from "@mui/material";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Servizi GeoTapp",
  description: "Dalla pianificazione delle riunioni alla fatturazione SaaS: scopri tutti i servizi che GeoTapp offre.",
};

type ServicesContent = SiteContent["servicesPage"];

type HtmlTypographyProps = TypographyProps & {
  html?: string | null;
};

function HtmlTypography({ html, ...props }: HtmlTypographyProps) {
  if (!html) return null;
  return <Typography {...props} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default async function ServicesPage() {
  const content = await getSiteContent();
  const servicesContent = content.servicesPage;

  return (
    <Box component="main" sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <HeroBlock hero={servicesContent.hero} />
      <ServiceGrid services={servicesContent.services} />
      <HighlightsBlock highlights={servicesContent.highlights} />
      <CtaBlock cta={servicesContent.cta} />
      <ContactBlock contact={content.contact} />
    </Box>
  );
}

type HeroBlockProps = {
  hero: ServicesContent["hero"];
};

function HeroBlock({ hero }: HeroBlockProps) {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        textAlign: "center",
        background: "linear-gradient(135deg, #ecfccb 0%, #fef9c3 45%, #dbeafe 100%)",
        borderBottom: "1px solid rgba(15,23,42,0.08)",
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
          <HtmlTypography html={hero.description} component="p" sx={{ color: "text.secondary", maxWidth: 640 }} />
        </Stack>
      </Container>
    </Box>
  );
}

type ServiceGridProps = {
  services: ServicesContent["services"];
};

function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <SectionHeading
        eyebrow="Moduli disponibili"
        title="Servizi orchestrati da GeoTapp"
        description="Ogni modulo replica quello che trovi nella dashboard: zero fronzoli e palette coerente con lo stile principale."
      />
      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid key={service.title} item xs={12} md={4}>
            <Paper
              variant="outlined"
              sx={{
                height: "100%",
                borderRadius: 3,
                borderColor: "rgba(15,23,42,0.08)",
                bgcolor: "background.paper",
                p: 4,
              }}
            >
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4 }}>
                {service.icon}
              </Typography>
              <HtmlTypography html={service.title} component="h3" sx={{ fontSize: "1.5rem", fontWeight: 600, mt: 1 }} />
              <HtmlTypography html={service.description} component="p" sx={{ color: "text.secondary", mt: 1.5 }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

type HighlightsBlockProps = {
  highlights: ServicesContent["highlights"];
};

function HighlightsBlock({ highlights }: HighlightsBlockProps) {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Vantaggi operativi"
          title="Perché le integrazioni sono già pronte"
          description="Testo dimostrativo: aggiorna questi paragrafi dal CMS per raccontare casi reali."
        />
        <Grid container spacing={3}>
          {highlights.map((highlight) => (
            <Grid key={highlight.title} item xs={12} md={6}>
              <Stack spacing={1.5} sx={{ p: 3, borderRadius: 3, border: "1px solid rgba(15,23,42,0.08)" }}>
                <HtmlTypography html={highlight.title} component="h3" sx={{ fontSize: "1.2rem", fontWeight: 600 }} />
                <HtmlTypography html={highlight.description} component="p" sx={{ color: "text.secondary" }} />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

type CtaBlockProps = {
  cta: ServicesContent["cta"];
};

function CtaBlock({ cta }: CtaBlockProps) {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={2} alignItems="center" textAlign="center">
        <HtmlTypography
          html={cta.title}
          component="p"
          sx={{ letterSpacing: 4, textTransform: "uppercase", fontSize: "0.75rem", color: "text.secondary" }}
        />
        <HtmlTypography html={cta.description} component="h2" sx={{ fontSize: { xs: "2.2rem", md: "2.6rem" }, fontWeight: 600 }} />
        <Button component={Link} href={cta.primaryHref} variant="contained" color="primary" size="large">
          <HtmlTypography html={cta.primaryLabel} component="span" sx={{ fontSize: "1em" }} />
        </Button>
      </Stack>
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
              <HtmlTypography
                html={contact.description}
                component="h3"
                sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, fontWeight: 600 }}
              />
              <Stack spacing={1.5} alignItems="center" mt={1}>
                {contact.details.map((detail) => (
                  <Stack key={detail} direction="row" spacing={1} alignItems="center" color="text.secondary">
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    <HtmlTypography variant="body1" html={detail} />
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
      <HtmlTypography variant="h3" sx={{ fontSize: { xs: "2.2rem", md: "2.6rem" } }} html={title} />
      {description && (
        <HtmlTypography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }} html={description} />
      )}
    </Stack>
  );
}
