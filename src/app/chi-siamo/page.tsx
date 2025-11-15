import { ContactForm } from "@/components/contact-form";
import { getSiteContent } from "@/lib/contentStore";
import type { SiteContent } from "@/lib/siteContentSchema";
import { Box, Button, Container, Grid, Paper, Stack, Typography, type TypographyProps } from "@mui/material";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Chi siamo | GeoTapp",
  description: "La storia del team GeoTapp, la roadmap condivisa e i valori che guidano la piattaforma.",
};

type AboutContent = SiteContent["aboutPage"];

type HtmlTypographyProps = TypographyProps & {
  html?: string | null;
};

function HtmlTypography({ html, ...props }: HtmlTypographyProps) {
  if (!html) return null;
  return <Typography {...props} dangerouslySetInnerHTML={{ __html: html }} />;
}

const LOGO_PLACEHOLDER = (index: number) =>
  `https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=60&sig=${index}`;

export default async function AboutPage() {
  const content = await getSiteContent();
  const about = content.aboutPage;

  return (
    <Box component="main" sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <HeroBlock hero={about.hero} teamNote={about.teamNote} />
      <ValuesGrid values={about.values} />
      <TimelineBlock story={about.story} />
      <TeamNoteBlock teamNote={about.teamNote} />
      <SocialProofBlock socialProof={content.socialProof} />
      <ContactBlock contact={content.contact} />
    </Box>
  );
}

type HeroBlockProps = {
  hero: AboutContent["hero"];
  teamNote: string;
};

function HeroBlock({ hero, teamNote }: HeroBlockProps) {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: "linear-gradient(135deg, #ecfccb 0%, #fef9c3 60%, #e0f2fe 100%)",
        borderBottom: "1px solid rgba(15,23,42,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={2}>
              <HtmlTypography
                html={hero.eyebrow}
                component="p"
                sx={{ letterSpacing: 4, textTransform: "uppercase", fontSize: "0.75rem", color: "primary.main" }}
              />
              <HtmlTypography
                html={hero.title}
                component="h1"
                sx={{ fontSize: { xs: "2.8rem", md: "3.4rem" }, fontWeight: 600 }}
              />
              <HtmlTypography html={hero.description} component="p" sx={{ color: "text.secondary" }} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              variant="outlined"
              sx={{
                borderRadius: 4,
                p: 4,
                borderColor: "rgba(15,23,42,0.08)",
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4 }}>
                Team
              </Typography>
              <Typography variant="h5" sx={{ mt: 1 }}>
                Always-on product
              </Typography>
              <HtmlTypography html={teamNote} component="p" sx={{ color: "text.secondary", mt: 2 }} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

type ValuesGridProps = {
  values: AboutContent["values"];
};

function ValuesGrid({ values }: ValuesGridProps) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
      <SectionHeading
        eyebrow="Valori chiave"
        title="Il nostro modo di lavorare"
        description="Aggiorna questo blocco dal CMS per descrivere i principi che vuoi comunicare."
      />
      <Grid container spacing={3}>
        {values.map((value) => (
          <Grid key={value.title} item xs={12} md={4}>
            <Paper variant="outlined" sx={{ p: 4, borderRadius: 3, borderColor: "rgba(15,23,42,0.08)" }}>
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4 }}>
                Valore
              </Typography>
              <HtmlTypography html={value.title} component="h3" sx={{ fontSize: "1.4rem", fontWeight: 600, mt: 1 }} />
              <HtmlTypography html={value.description} component="p" sx={{ color: "text.secondary", mt: 1.5 }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

type TimelineBlockProps = {
  story: AboutContent["story"];
};

function TimelineBlock({ story }: TimelineBlockProps) {
  return (
    <Box sx={{ bgcolor: "background.paper", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md">
        <SectionHeading eyebrow="Roadmap" title="Tap evolutivi" />
        <Stack spacing={3}>
          {story.map((event) => (
            <Paper key={event.year} variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
              <HtmlTypography
                html={event.year}
                component="p"
                sx={{ letterSpacing: 4, textTransform: "uppercase", fontSize: "0.75rem", color: "text.secondary" }}
              />
              <HtmlTypography html={event.title} component="h3" sx={{ fontSize: "1.3rem", fontWeight: 600, mt: 1 }} />
              <HtmlTypography html={event.description} component="p" sx={{ color: "text.secondary", mt: 1 }} />
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

type TeamNoteBlockProps = {
  teamNote: string;
};

function TeamNoteBlock({ teamNote }: TeamNoteBlockProps) {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={2} textAlign="center" alignItems="center">
        <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 4 }}>
          Note del team
        </Typography>
        <Typography variant="h3" sx={{ fontSize: { xs: "2rem", md: "2.4rem" }, fontWeight: 600 }}>
          Appunti dal backend
        </Typography>
        <HtmlTypography html={teamNote} component="p" sx={{ color: "text.secondary", maxWidth: 700 }} />
      </Stack>
    </Container>
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
                  background: "linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.7) 100%)",
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
      <Grid container spacing={3} sx={{ mt: 4 }}>
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
