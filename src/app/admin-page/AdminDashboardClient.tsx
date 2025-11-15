
"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import type { IntegrationConfig } from "@/lib/integrationConfigSchema";
import { pricingSimulatorDefaults } from "@/lib/siteContentSchema";
import type { SiteContent } from "@/lib/siteContentSchema";

const MEDIA_LIMIT_BYTES = 1.5 * 1024 * 1024;
const MEDIA_LIMIT_COPY = `${(MEDIA_LIMIT_BYTES / (1024 * 1024)).toFixed(1)}MB`;

const INFO_SECTIONS = {
  cmsToken: {
    title: "Token CMS_ADMIN_TOKEN",
    bullets: [
      "Apri Cloudflare Pages (o il provider scelto) e crea la variabile `CMS_ADMIN_TOKEN` con lo stesso valore usato in locale.",
      "Copiala nel file `.env.local` e negli ambienti di deploy per consentire il salvataggio dal CMS.",
      "Inserisci il token nel campo in alto prima di premere Salva contenuti o Salva integrazioni.",
    ],
  },
  django: {
    title: "Backend Django su Render",
    bullets: [
      "Deploya il backend su Render/Web Service impostando `DJANGO_SECRET_KEY`, `ADMIN_TOKEN`, `CMS_ADMIN_TOKEN` e `DATABASE_URL`.",
      "Usa l&apos;URL pubblico come Base URL e imposta il token servizio con permessi completi.",
      "Configura un endpoint webhook che punti a Cloudflare/Pages per ricevere eventi (ad es. /api/django/webhooks).",
    ],
  },
  stripe: {
    title: "Collegare Stripe",
    bullets: [
      "In dashboard.stripe.com > Developers recupera Publishable e Secret key (live o test).",
      "In Products > Prices copia i Price ID dei piani e incollali uno per riga.",
      "Crea un Webhook su Developers > Webhooks puntando a https://app.geotapp.com/api/stripe/webhook e incolla il secret.",
    ],
  },
  flutter: {
    title: "Login Flutter",
    bullets: [
      "Definisci un OAuth Client (anche custom) con redirect verso il valore indicato e uno schema deep link coerente con l&apos;app Flutter.",
      "Gli scope (uno per riga) vengono riusati anche nel pacchetto mobile per Firebase/Auth.",
      "Ricordati di aggiornare eventuali file di configurazione in `goetap_flutter` con gli stessi valori.",
    ],
  },
  firebase: {
    title: "Allineamento Firebase",
    bullets: [
      "Dal progetto Firebase copia `projectId`, `apiKey` e l&apos;URL del database (Realtime / Firestore REST).",
      "Elenca le collection che vuoi sincronizzare (una per riga) cos&igrave; i job su Render sanno cosa trattare.",
      "Controlla le regole di sicurezza per permettere a Django di leggere/scrivere i dati richiesti.",
    ],
  },
  media: {
    title: "Caricare media e loghi",
    bullets: [
      `Puoi incollare un URL esterno oppure caricare un file (max ${MEDIA_LIMIT_COPY}).`,
      "Le immagini/video vengono salvati in base64 all&apos;interno del JSON per evitare hosting aggiuntivo.",
      "Ottimizza sempre dimensioni e peso (immagini entro 1600px, video compressi).",
    ],
  },
} as const;

type InfoModalKey = keyof typeof INFO_SECTIONS | null;
type TabKey = "content" | "integrations";
const CONTENT_PAGE_TABS = [
  { key: "home", label: "Home", description: "Landing principale e blocchi condivisi." },
  { key: "services", label: "Servizi", description: "Hero, moduli e CTA della pagina servizi." },
  { key: "pricing", label: "Prezzi", description: "Piani dedicati e FAQ del listino." },
  { key: "about", label: "Chi siamo", description: "Storytelling, valori e timeline del team." },
] as const;
type ContentPageKey = (typeof CONTENT_PAGE_TABS)[number]["key"];
const PAGE_SHORTCUTS: Record<
  ContentPageKey,
  { label: string; sections: { label: string; target: string }[] }
> = {
  home: {
    label: "Landing page",
    sections: [
      { label: "Branding", target: "branding-editor" },
      { label: "SEO", target: "seo-editor" },
      { label: "Hero", target: "hero-editor" },
      { label: "Metriche", target: "metrics-editor" },
      { label: "Feature", target: "feature-editor" },
      { label: "Come funziona", target: "how-it-works-editor" },
      { label: "Parallax", target: "parallax-editor" },
      { label: "Timeline", target: "timeline-editor" },
      { label: "Pricing", target: "pricing-editor" },
      { label: "Contact", target: "contact-editor" },
      { label: "Social proof", target: "social-proof-editor" },
    ],
  },
  services: {
    label: "Servizi",
    sections: [
      { label: "Hero servizi", target: "services-hero" },
      { label: "Moduli", target: "services-modules" },
      { label: "Highlights", target: "services-highlights" },
      { label: "CTA servizi", target: "services-cta" },
    ],
  },
  pricing: {
    label: "Prezzi",
    sections: [
      { label: "Hero prezzi", target: "pricing-hero" },
      { label: "Simulatore prezzi", target: "pricing-simulator" },
      { label: "Piani dedicati", target: "pricing-dedicated" },
      { label: "FAQ prezzi", target: "pricing-faq" },
    ],
  },
  about: {
    label: "Chi siamo",
    sections: [
      { label: "Hero team", target: "about-hero" },
      { label: "Valori", target: "about-values" },
      { label: "Timeline", target: "about-story" },
      { label: "Nota team", target: "about-note" },
    ],
  },
};
type Toast = { type: "success" | "error" | "info"; message: string } | null;

type ToastType = NonNullable<Toast>["type"];

type StripeMetrics = {
  currency: string;
  monthlyTotals: { month: string; label: string; total: number }[];
  recentSales: { id: string; amount: number; currency: string; customer?: string | null; created: string; status: string }[];
  sampleSize: number;
};

type StripeMetricStatus = "idle" | "loading" | "error";

const tourBlueprint = [
  { id: "branding", label: "Branding + SEO pronti" },
  { id: "parallax", label: "Sticky parallax configurato" },
  { id: "social", label: "Social proof completo" },
  { id: "stripe", label: "Stripe e Django allineati" },
  { id: "firebase", label: "Login Flutter + Firebase" },
] as const;

const inputClasses =
  "mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white focus:outline-none";
const textareaClasses =
  "mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-white focus:outline-none";

const parseList = (value: string) =>
  value
    .split(/[\n,]/)
    .map((entry) => entry.trim())
    .filter(Boolean);

const stringifyList = (values: string[]) => values.join("\n");

const deepClone = <T,>(value: T): T => JSON.parse(JSON.stringify(value));

const isFilled = (value?: string | null) => Boolean(value && value.trim().length > 0);

const fileToDataUrl = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error ?? new Error("Impossibile leggere il file"));
    reader.readAsDataURL(file);
  });

const adminTheme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "light",
      primary: { main: "#2563EB" },
      secondary: { main: "#7C3AED" },
      background: {
        default: "#F5F7FB",
        paper: "#FFFFFF",
      },
      text: {
        primary: "#0F172A",
        secondary: "#475569",
      },
    },
    typography: {
      fontFamily: "Inter, 'Roboto', sans-serif",
      h3: { fontWeight: 600 },
      h5: { fontWeight: 500 },
      button: { textTransform: "none", fontWeight: 600 },
    },
    shape: { borderRadius: 18 },
  }),
);

const formatCurrency = (value: number, currency: string) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency }).format(value);

const mergeSimulatorCopy = (
  simulator?: SiteContent["pricingPage"]["simulator"],
): SiteContent["pricingPage"]["simulator"] => ({
  ...pricingSimulatorDefaults,
  ...(simulator ?? {}),
});

const normalizeSiteContent = (payload: SiteContent): SiteContent => ({
  ...payload,
  pricingPage: {
    ...payload.pricingPage,
    simulator: mergeSimulatorCopy(payload.pricingPage?.simulator),
  },
});

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("content");
  const [contentPage, setContentPage] = useState<ContentPageKey>("home");
  const [content, setContent] = useState<SiteContent | null>(null);
  const [contentBaseline, setContentBaseline] = useState<SiteContent | null>(null);
  const [contentJson, setContentJson] = useState("");
  const [integrations, setIntegrations] = useState<IntegrationConfig | null>(null);
  const [integrationsBaseline, setIntegrationsBaseline] = useState<IntegrationConfig | null>(null);
  const [integrationJson, setIntegrationJson] = useState("");
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<Toast>(null);
  const [cmsToken, setCmsToken] = useState("");
  const [showInfo, setShowInfo] = useState<InfoModalKey>(null);
  const [savingContent, setSavingContent] = useState(false);
  const [savingIntegrations, setSavingIntegrations] = useState(false);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [integrationJsonError, setIntegrationJsonError] = useState<string | null>(null);
  const [salesMetrics, setSalesMetrics] = useState<StripeMetrics | null>(null);
  const [salesMetricsStatus, setSalesMetricsStatus] = useState<StripeMetricStatus>("idle");
  const [salesMetricsError, setSalesMetricsError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [contentRes, integrationRes] = await Promise.all([
          fetch("/api/content", { cache: "no-store" }),
          fetch("/api/integrations", { cache: "no-store" }),
        ]);
        if (!contentRes.ok) {
          throw new Error("Impossibile caricare i contenuti marketing");
        }
        if (!integrationRes.ok) {
          throw new Error("Impossibile caricare la configurazione integrazioni");
        }
        const contentPayload = normalizeSiteContent((await contentRes.json()) as SiteContent);
        const integrationsPayload = (await integrationRes.json()) as IntegrationConfig;
        setContent(contentPayload);
        setContentBaseline(deepClone(contentPayload));
        setContentJson(JSON.stringify(contentPayload, null, 2));
        setIntegrations(integrationsPayload);
        setIntegrationsBaseline(deepClone(integrationsPayload));
        setIntegrationJson(JSON.stringify(integrationsPayload, null, 2));
        setToast({ type: "success", message: "Dati caricati dal CMS" });
      } catch (error) {
        setToast({ type: "error", message: (error as Error).message });
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  useEffect(() => {
    const loadMetrics = async () => {
      setSalesMetricsStatus("loading");
      setSalesMetricsError(null);
      try {
        const response = await fetch("/api/admin/stripe/metrics", { cache: "no-store" });
        if (!response.ok) {
          const payload = (await response.json().catch(() => null)) as { message?: string } | null;
          throw new Error(payload?.message ?? "Impossibile caricare le metriche Stripe");
        }
        const payload = (await response.json()) as StripeMetrics;
        setSalesMetrics(payload);
        setSalesMetricsStatus("idle");
      } catch (error) {
        setSalesMetricsStatus("error");
        setSalesMetricsError((error as Error).message);
      }
    };
    loadMetrics();
  }, []);

  const updateContent = (mutator: (draft: SiteContent) => void) => {
    setContent((current) => {
      if (!current) return current;
      const next = deepClone(current);
      mutator(next);
      return next;
    });
  };

  const updateIntegrations = (mutator: (draft: IntegrationConfig) => void) => {
    setIntegrations((current) => {
      if (!current) return current;
      const next = deepClone(current);
      mutator(next);
      return next;
    });
  };

  const hasContentChanges = useMemo(() => {
    if (!content || !contentBaseline) return false;
    return JSON.stringify(content) !== JSON.stringify(contentBaseline);
  }, [content, contentBaseline]);

  const hasIntegrationChanges = useMemo(() => {
    if (!integrations || !integrationsBaseline) return false;
    return JSON.stringify(integrations) !== JSON.stringify(integrationsBaseline);
  }, [integrations, integrationsBaseline]);

  const integrationHealth = useMemo(() => {
    if (!integrations) return null;
    return {
      django:
        isFilled(integrations.django.baseUrl) &&
        isFilled(integrations.django.adminToken) &&
        isFilled(integrations.django.webhookUrl),
      stripe:
        isFilled(integrations.stripe.secretKey) &&
        integrations.stripe.priceIds.length > 0 &&
        isFilled(integrations.stripe.webhookSecret),
      flutter:
        isFilled(integrations.flutterLogin.clientId) &&
        integrations.flutterLogin.scopes.length > 0 &&
        isFilled(integrations.flutterLogin.redirectUri),
      firebase:
        isFilled(integrations.firebase.projectId) &&
        integrations.firebase.syncCollections.length > 0 &&
        isFilled(integrations.firebase.databaseUrl),
    };
  }, [integrations]);

  const tourSteps = useMemo(() => {
    if (!content || !integrationHealth) {
      return tourBlueprint.map((step) => ({ ...step, done: false }));
    }
    return [
      {
        ...tourBlueprint[0],
        done:
          isFilled(content.branding.logoAlt) &&
          isFilled(content.seo.title) &&
          isFilled(content.seo.description),
      },
      {
        ...tourBlueprint[1],
        done:
          content.parallax.stickyHighlights.length >= 2 &&
          content.parallax.cards.length >= 3 &&
          isFilled(content.parallax.title),
      },
      {
        ...tourBlueprint[2],
        done:
          content.socialProof.logos.length >= 3 &&
          content.socialProof.testimonials.length >= 1,
      },
      {
        ...tourBlueprint[3],
        done: Boolean(integrationHealth.django && integrationHealth.stripe),
      },
      {
        ...tourBlueprint[4],
        done: Boolean(integrationHealth.flutter && integrationHealth.firebase),
      },
    ];
  }, [content, integrationHealth]);

  const tourProgress =
    (tourSteps.filter((step) => step.done).length / tourSteps.length) * 100 || 0;

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/admin-login";
  };

  const handleSaveContent = async () => {
    if (!content) return;
    setSavingContent(true);
    setToast({ type: "info", message: "Invio contenuti..." });
    try {
      const payload: SiteContent = {
        ...content,
        publication: {
          ...content.publication,
          lastEditedBy: content.publication.lastEditedBy?.trim() || "GeoTapp Admin",
          lastUpdatedAt: new Date().toISOString(),
        },
      };
      const response = await fetch("/api/content", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(cmsToken ? { Authorization: `Bearer ${cmsToken}` } : {}),
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        if (response.status === 401) {
          throw new Error("Token CMS mancante o non valido. Verifica la configurazione.");
        }
        throw new Error(data?.message ?? "Errore durante il salvataggio dei contenuti");
      }
      const saved = normalizeSiteContent((await response.json()) as SiteContent);
      setContent(saved);
      setContentBaseline(deepClone(saved));
      setContentJson(JSON.stringify(saved, null, 2));
      setToast({ type: "success", message: "Contenuti aggiornati correttamente" });
    } catch (error) {
      setToast({ type: "error", message: (error as Error).message });
    } finally {
      setSavingContent(false);
    }
  };

  const handleSaveIntegrations = async () => {
    if (!integrations) return;
    setSavingIntegrations(true);
    setToast({ type: "info", message: "Aggiornamento integrazioni..." });
    try {
      const response = await fetch("/api/integrations", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(cmsToken ? { Authorization: `Bearer ${cmsToken}` } : {}),
        },
        body: JSON.stringify(integrations),
      });
      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        if (response.status === 401) {
          throw new Error("Token CMS mancante o non valido. Verifica la configurazione.");
        }
        throw new Error(data?.message ?? "Errore salvando le integrazioni");
      }
      const saved = (await response.json()) as IntegrationConfig;
      setIntegrations(saved);
      setIntegrationsBaseline(deepClone(saved));
      setIntegrationJson(JSON.stringify(saved, null, 2));
      setToast({ type: "success", message: "Integrazioni salvate" });
    } catch (error) {
      setToast({ type: "error", message: (error as Error).message });
    } finally {
      setSavingIntegrations(false);
    }
  };

  const handleResetContent = () => {
    if (!contentBaseline) return;
    setContent(deepClone(contentBaseline));
    setContentJson(JSON.stringify(contentBaseline, null, 2));
    setToast({ type: "info", message: "Contenuti ripristinati" });
  };

  const handleResetIntegrations = () => {
    if (!integrationsBaseline) return;
    setIntegrations(deepClone(integrationsBaseline));
    setIntegrationJson(JSON.stringify(integrationsBaseline, null, 2));
    setToast({ type: "info", message: "Integrazioni ripristinate" });
  };

  const applyContentJson = () => {
    try {
      const parsed = JSON.parse(contentJson) as SiteContent;
      const normalized = normalizeSiteContent(parsed);
      setContent(normalized);
      setContentJson(JSON.stringify(normalized, null, 2));
      setJsonError(null);
      setToast({ type: "success", message: "JSON contenuti applicato" });
    } catch (error) {
      setJsonError((error as Error).message);
    }
  };

  const applyIntegrationJson = () => {
    try {
      const parsed = JSON.parse(integrationJson) as IntegrationConfig;
      setIntegrations(parsed);
      setIntegrationJsonError(null);
      setToast({ type: "success", message: "JSON integrazioni applicato" });
    } catch (error) {
      setIntegrationJsonError((error as Error).message);
    }
  };

  const handleTestIntegrations = async () => {
    setToast({ type: "info", message: "Test integrazioni in corso..." });
    try {
      const response = await fetch("/api/integrations/test", { method: "POST" });
      const payload = (await response.json().catch(() => null)) as { message?: string } | null;
      if (!response.ok) {
        throw new Error(payload?.message ?? "Test non riuscito");
      }
      setToast({ type: "success", message: payload?.message ?? "Tutto ok" });
    } catch (error) {
      setToast({ type: "error", message: (error as Error).message });
    }
  };

  if (loading) {
    return (
      <ThemeProvider theme={adminTheme}>
        <CssBaseline />
        <Box
          minHeight="100vh"
          bgcolor="background.default"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="text.secondary"
        >
          <Typography variant="body1">Caricamento del pannello admin...</Typography>
        </Box>
      </ThemeProvider>
    );
  }

  if (!content || !integrations) {
    return (
      <ThemeProvider theme={adminTheme}>
        <CssBaseline />
        <Box
          minHeight="100vh"
          bgcolor="background.default"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="text.primary"
        >
          <Paper
            elevation={0}
            sx={{ px: 5, py: 4, borderRadius: 4, border: "1px solid", borderColor: "white", bgcolor: "background.paper" }}
          >
            <Typography variant="h6">Impossibile inizializzare il CMS</Typography>
            <Typography variant="body2" sx={{ mt: 1 }} color="text.secondary">
              Controlla il server e ricarica la pagina.
            </Typography>
          </Paper>
        </Box>
      </ThemeProvider>
    );
  }

  const notify = (message: string, type: ToastType = "info") => setToast({ type, message });
  const headerGradient = "linear-gradient(135deg, #e0f2fe 0%, #c7d2fe 100%)";

  return (
    <ThemeProvider theme={adminTheme}>
      <CssBaseline />
      <Box className="admin-light" sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
        <Box
          component="header"
          sx={{
            backgroundImage: headerGradient,
            borderBottom: "1px solid rgba(148,163,184,0.5)",
            color: "text.primary",
            py: { xs: 4, md: 6 },
            mb: 4,
            boxShadow: "0 15px 60px rgba(15,23,42,0.15)",
          }}
        >
          <Container maxWidth="lg">
            <Stack spacing={4}>
              <Stack
                direction={{ xs: "column", lg: "row" }}
                spacing={3}
                justifyContent="space-between"
                alignItems={{ lg: "flex-end" }}
              >
                <Stack spacing={1} flex={1}>
                  <Chip
                    label="GeoTapp CMS"
                    color="primary"
                    variant="outlined"
                    icon={<i className="fa-solid fa-gauge-high text-slate-700" aria-hidden="true" />}
                    sx={{ alignSelf: "flex-start", letterSpacing: 4 }}
                  />
                  <Typography variant="h3">Area amministrativa</Typography>
                  <Typography variant="body1" color="rgba(71,85,105,0.9)">
                    Gestisci contenuti marketing, pricing dinamico e integrazioni senza uscire dal browser.
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={2}>
                    <Button
                      component={Link}
                      href="/admin/deploy-guide"
                      variant="outlined"
                      color="inherit"
                      startIcon={<i className="fa-solid fa-rocket" aria-hidden="true" />}
                      sx={{ borderColor: "rgba(255,255,255,0.4)" }}
                    >
                      Guida deploy
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      startIcon={<i className="fa-solid fa-key" aria-hidden="true" />}
                      onClick={() => setShowInfo("cmsToken")}
                      sx={{ borderColor: "rgba(255,255,255,0.4)" }}
                    >
                      Dove trovo il token?
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<i className="fa-solid fa-right-from-bracket" aria-hidden="true" />}
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </Stack>
                </Stack>
                <Box
                  sx={{
                    flexBasis: { lg: "38%" },
                    bgcolor: "rgba(255,255,255,0.95)",
                    borderRadius: 4,
                    p: 3,
                    border: "1px solid rgba(15,23,42,0.08)",
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ textTransform: "uppercase", letterSpacing: 2, color: "text.secondary" }}
                  >
                    Token CMS (opzionale)
                  </Typography>
                  <input
                    type="password"
                    className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none"
                    value={cmsToken}
                    onChange={(event) => setCmsToken(event.target.value)}
                    placeholder="super-secure-token"
                  />
                  <Typography variant="caption" sx={{ mt: 1.5, display: "block", color: "text.secondary" }}>
                    Usa questo campo solo se hai impostato la variabile CMS_ADMIN_TOKEN nel backend.
                  </Typography>
                </Box>
              </Stack>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                {(["content", "integrations"] as TabKey[]).map((tab) => (
                  <Button
                    key={tab}
                    fullWidth
                    variant={activeTab === tab ? "contained" : "outlined"}
                    color="primary"
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === "content" ? "Contenuti" : "Integrazioni"}
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ pb: 8 }}>
          {toast && (
            <Paper
              elevation={0}
              sx={{
                mb: 4,
                px: 3,
                py: 2,
                borderRadius: 3,
                border: "1px solid",
                borderColor:
                  toast.type === "success"
                    ? "success.main"
                    : toast.type === "error"
                      ? "error.main"
                      : "rgba(148,163,184,0.4)",
                bgcolor:
                  toast.type === "success"
                    ? "rgba(16,185,129,0.15)"
                    : toast.type === "error"
                      ? "rgba(248,113,113,0.1)"
                      : "rgba(148,163,184,0.1)",
              }}
            >
              <Typography variant="body2">{toast.message}</Typography>
            </Paper>
          )}

          {activeTab === "content" ? (
            <ContentTab
              content={content}
              updateContent={updateContent}
              contentPage={contentPage}
              setContentPage={setContentPage}
              handleSaveContent={handleSaveContent}
              handleResetContent={handleResetContent}
              hasContentChanges={hasContentChanges}
              savingContent={savingContent}
              tourSteps={tourSteps}
              tourProgress={tourProgress}
              contentJson={contentJson}
              setContentJson={setContentJson}
              applyContentJson={applyContentJson}
              jsonError={jsonError}
              notify={notify}
              salesMetrics={salesMetrics}
              salesMetricsStatus={salesMetricsStatus}
              salesMetricsError={salesMetricsError}
            />
          ) : (
            <IntegrationsTab
              integrations={integrations}
              updateIntegrations={updateIntegrations}
              integrationHealth={integrationHealth}
              handleSaveIntegrations={handleSaveIntegrations}
              handleResetIntegrations={handleResetIntegrations}
              hasIntegrationChanges={hasIntegrationChanges}
              savingIntegrations={savingIntegrations}
              integrationJson={integrationJson}
              setIntegrationJson={setIntegrationJson}
              applyIntegrationJson={applyIntegrationJson}
              integrationJsonError={integrationJsonError}
              handleTestIntegrations={handleTestIntegrations}
              openInfo={(key) => setShowInfo(key)}
            />
          )}
        </Container>

        <InfoModal infoKey={showInfo} onClose={() => setShowInfo(null)} />
      </Box>
    </ThemeProvider>
  );
}
// Content tab -----------------------------------------------------------------

type ContentTabProps = {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
  contentPage: ContentPageKey;
  setContentPage: (value: ContentPageKey) => void;
  handleSaveContent: () => void;
  handleResetContent: () => void;
  hasContentChanges: boolean;
  savingContent: boolean;
  tourSteps: { id: string; label: string; done: boolean }[];
  tourProgress: number;
  contentJson: string;
  setContentJson: (value: string) => void;
  applyContentJson: () => void;
  jsonError: string | null;
  notify: (message: string, type?: ToastType) => void;
  salesMetrics: StripeMetrics | null;
  salesMetricsStatus: StripeMetricStatus;
  salesMetricsError: string | null;
};

function ContentTab({
  content,
  updateContent,
  contentPage,
  setContentPage,
  handleSaveContent,
  handleResetContent,
  hasContentChanges,
  savingContent,
  tourSteps,
  tourProgress,
  contentJson,
  setContentJson,
  applyContentJson,
  jsonError,
  notify,
  salesMetrics,
  salesMetricsStatus,
  salesMetricsError,
}: ContentTabProps & {
  salesMetrics: StripeMetrics | null;
  salesMetricsStatus: StripeMetricStatus;
  salesMetricsError: string | null;
}) {
  const activeShortcut = PAGE_SHORTCUTS[contentPage];
  const currentTabMeta = CONTENT_PAGE_TABS.find((tab) => tab.key === contentPage);
  const [jsonEditorEnabled, setJsonEditorEnabled] = useState(false);

  const handleJump = (target: string) => {
    const element = document.getElementById(target);
    if (!element) {
      notify("Sezione non trovata. Verifica il pannello.", "error");
      return;
    }
    const parentDetails = element.closest("details") as HTMLDetailsElement | null;
    if (parentDetails && !parentDetails.open) {
      parentDetails.open = true;
    }
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLogoWidthChange = (value: number) => {
    const nextValue = Math.min(Math.max(Math.round(value), 80), 240);
    updateContent((draft) => {
      draft.branding.logoWidth = nextValue;
    });
  };

  const renderBlockSaveButton = () => (
    <BlockSaveButton
      onSave={handleSaveContent}
      disabled={!hasContentChanges || savingContent}
      saving={savingContent}
    />
  );

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap gap-3">
          {CONTENT_PAGE_TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setContentPage(tab.key)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                contentPage === tab.key
                  ? "border-white bg-white text-slate-900"
                  : "border-white/10 text-slate-200 hover:border-white/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {currentTabMeta && (
          <p className="mt-3 text-xs text-slate-400">{currentTabMeta.description}</p>
        )}
      </section>

      {activeShortcut && (
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 scroll-mt-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
                <i className="fa-solid fa-list-check mr-2" aria-hidden="true" />
                Menu sezione
              </p>
              <h3 className="text-xl font-semibold">{activeShortcut.label}</h3>
            </div>
            <p className="text-xs text-slate-400">Seleziona un blocco per saltare all&rsquo;editor.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {activeShortcut.sections.map((section) => (
              <button
                key={section.target}
                type="button"
                onClick={() => handleJump(section.target)}
                className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:border-white/40"
              >
                {section.label}
              </button>
            ))}
          </div>
        </section>
      )}
      {contentPage === "home" && (
        <>
      <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] admin-columns">
        <div className="space-y-6">
          <section
            id="branding-editor"
            className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 scroll-mt-24"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Branding</p>
                <h2 className="text-xl font-semibold">Identit&agrave; e stato</h2>
              </div>
              <button
                type="button"
                className={`rounded-full px-4 py-2 text-xs font-semibold ${
                  content.publication.status === "published"
                    ? "bg-emerald-400/20 text-emerald-200"
                    : "bg-amber-400/10 text-amber-200"
                }`}
                onClick={() =>
                  updateContent((draft) => {
                    draft.publication.status =
                      draft.publication.status === "draft" ? "published" : "draft";
                  })
                }
              >
                {content.publication.status === "published" ? "Pubblicato" : "Bozza"}
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-200">
                Ultimo editor
                <input
                  className={inputClasses}
                  value={content.publication.lastEditedBy ?? ""}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.publication.lastEditedBy = event.target.value;
                    })
                  }
                  placeholder="Team GeoTapp"
                />
              </label>
              <label className="text-sm text-slate-200">
                Accento brand
                <input
                  type="color"
                  value={content.branding.accentColor}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.branding.accentColor = event.target.value;
                    })
                  }
                  className="mt-2 h-[52px] w-full rounded-2xl border border-white/20 bg-white/5"
                />
              </label>
              <div className="text-sm text-slate-200 md:col-span-2">
                Dimensione logo (80 - 240 px)
                <div className="mt-3 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <input
                    type="range"
                    min={80}
                    max={240}
                    value={content.branding.logoWidth}
                    onChange={(event) => handleLogoWidthChange(Number(event.target.value))}
                    className="w-full accent-white"
                  />
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span>Larghezza attuale: {content.branding.logoWidth}px</span>
                    <input
                      type="number"
                      min={80}
                      max={240}
                      value={content.branding.logoWidth}
                      onChange={(event) => handleLogoWidthChange(Number(event.target.value))}
                      className="w-20 rounded-xl border border-white/20 bg-slate-900/40 px-3 py-2 text-center text-sm text-white focus:border-white/60 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleLogoWidthChange(160)}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-300 hover:border-white/40"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
                <label className="text-sm text-slate-200">
                  Link logo
                  <input
                    className={inputClasses}
                    value={content.branding.logoHref}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.branding.logoHref = event.target.value;
                      })
                    }
                  />
                </label>
                <label className="text-sm text-slate-200">
                  Alt logo
                  <input
                    className={inputClasses}
                    value={content.branding.logoAlt}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.branding.logoAlt = event.target.value;
                      })
                    }
                  />
                </label>
                <label className="text-sm text-slate-200 md:col-span-2">
                  Titolo header (HTML + inline CSS)
                  <textarea
                    className={`${textareaClasses} min-h-[70px] font-mono text-xs`}
                    value={content.branding.titleHtml}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.branding.titleHtml = event.target.value;
                      })
                    }
                  />
                </label>
                <label className="text-sm text-slate-200 md:col-span-2">
                  Sottotitolo header (HTML + inline CSS)
                  <textarea
                    className={`${textareaClasses} min-h-[70px] font-mono text-xs`}
                    value={content.branding.subtitleHtml}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.branding.subtitleHtml = event.target.value;
                      })
                    }
                  />
                </label>
              </div>
            <div className="rounded-2xl border border-dashed border-white/20 p-4 text-sm text-slate-300">
              <p className="font-semibold text-white">Logo attuale</p>
              {content.branding.logoDataUrl ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={content.branding.logoDataUrl}
                    alt={content.branding.logoAlt}
                    className="mt-3 h-16 w-auto rounded-xl border border-white/10 object-contain"
                  />
                </>
              ) : (
                  <p className="mt-3 text-xs">Nessun logo caricato: verr&agrave; mostrato il fallback &ldquo;GT&rdquo;.</p>
              )}
              <div className="mt-4 flex flex-wrap gap-3">
                <label className="cursor-pointer rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-slate-200">
                  Carica immagine
                  <input
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    onChange={async (event) => {
                      const file = event.target.files?.[0];
                      event.target.value = "";
                      if (!file) return;
                      if (file.size > MEDIA_LIMIT_BYTES) {
                        notify(`Il file supera ${MEDIA_LIMIT_COPY}`, "error");
                        return;
                      }
                      try {
                        const dataUrl = await fileToDataUrl(file);
                        updateContent((draft) => {
                          draft.branding.logoDataUrl = dataUrl;
                        });
                        notify("Logo aggiornato");
                      } catch {
                        notify("Caricamento logo fallito", "error");
                      }
                    }}
                  />
                </label>
                <button
                  type="button"
                  onClick={() =>
                    updateContent((draft) => {
                      draft.branding.logoDataUrl = "";
                    })
                  }
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300 hover:border-white/40"
                >
                  Rimuovi logo
                </button>
              </div>
            </div>
            {renderBlockSaveButton()}
          </section>

          <section
            id="seo-editor"
            className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 scroll-mt-24"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">SEO & Analytics</p>
                <h2 className="text-xl font-semibold">Ottimizzazione</h2>
              </div>
              <button
                type="button"
                onClick={() => notify("Incolla qui il codice GA4 o altri script di head")}
                className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300 hover:border-white/40"
              >
                Suggerimenti
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-200">
                Meta title
                <input
                  className={inputClasses}
                  value={content.seo.title}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.seo.title = event.target.value;
                    })
                  }
                />
              </label>
              <label className="text-sm text-slate-200">
                Meta description
                <input
                  className={inputClasses}
                  value={content.seo.description}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.seo.description = event.target.value;
                    })
                  }
                />
              </label>
              <label className="text-sm text-slate-200">
                Keywords (una per riga)
                <textarea
                  className={`${textareaClasses} min-h-[100px]`}
                  value={stringifyList(content.seo.keywords)}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.seo.keywords = parseList(event.target.value);
                    })
                  }
                />
              </label>
              <label className="text-sm text-slate-200">
                Canonical URL
                <input
                  className={inputClasses}
                  value={content.seo.canonicalUrl}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.seo.canonicalUrl = event.target.value;
                    })
                  }
                />
              </label>
              <label className="text-sm text-slate-200 md:col-span-2">
                OpenGraph image
                <input
                  className={inputClasses}
                  value={content.seo.ogImage}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.seo.ogImage = event.target.value;
                    })
                  }
                />
              </label>
              <label className="text-sm text-slate-200 md:col-span-2">
                Head snippet / Analytics
                <textarea
                  className={`${textareaClasses} min-h-[140px] font-mono text-xs`}
                  value={content.analytics.headHtml ?? ""}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.analytics.headHtml = event.target.value;
                    })
                  }
                  placeholder="<!-- Inserisci il codice analytics -->"
                />
              </label>
            </div>
            {renderBlockSaveButton()}
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Tour guidato</p>
                <h3 className="text-xl font-semibold">Checklist</h3>
              </div>
              <span className="text-sm font-semibold text-white">
                {tourSteps.filter((step) => step.done).length}/{tourSteps.length}
              </span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-sky-400" style={{ width: `${tourProgress}%` }} />
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {tourSteps.map((step) => (
                <li key={step.id} className="flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${step.done ? "bg-emerald-300" : "bg-amber-300"}`} />
                  {step.label}
                </li>
              ))}
            </ul>
          </section>
          <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Live preview</p>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <i className="fa-solid fa-newspaper text-slate-400" aria-hidden="true" />
              Estratto hero
            </h3>
            <p className="mt-4 text-sm text-slate-300">{content.hero.eyebrow}</p>
            <p className="text-2xl font-semibold text-white">{content.hero.title}</p>
            <p className="mt-2 text-sm text-slate-200">{content.hero.description}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/10 px-4 py-1 text-white">
                {content.hero.primaryCta.label}
              </span>
              <span className="rounded-full border border-white/10 px-4 py-1 text-slate-200">
                {content.hero.secondaryCta.label}
              </span>
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.4em] text-slate-400">Ultimo update</p>
            <p className="text-xs text-slate-300">
              {content.publication.lastUpdatedAt
                ? new Date(content.publication.lastUpdatedAt).toLocaleString("it-IT")
                : "Dato non disponibile"}
            </p>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Live preview</p>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <i className="fa-solid fa-chart-line text-sky-500" aria-hidden="true" />
                  Vendite Stripe
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                {salesMetrics?.sampleSize ? `${salesMetrics.sampleSize} transazioni` : "Ultimi 6 mesi"}
              </span>
            </div>
            {salesMetricsStatus === "loading" && (
              <p className="mt-4 text-sm text-slate-300">Caricamento dati Stripe...</p>
            )}
            {salesMetricsStatus === "error" && (
              <p className="mt-4 text-sm text-rose-300">
                {salesMetricsError ?? "Impossibile recuperare le vendite."}
              </p>
            )}
            {salesMetrics && salesMetrics.monthlyTotals.length > 0 && (
              <>
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <p>Fatturato per mese</p>
                    <p>Currency: {salesMetrics.currency}</p>
                  </div>
                  {(() => {
                    const maxValue = Math.max(
                      ...salesMetrics.monthlyTotals.map((item) => item.total),
                      1,
                    );
                    return (
                      <div className="mt-4 flex items-end gap-3">
                        {salesMetrics.monthlyTotals.map((point) => {
                          const height = Math.max(6, (point.total / maxValue) * 120);
                          return (
                            <div key={point.month} className="flex flex-col items-center gap-2 text-center">
                              <span className="text-[11px] text-slate-200">
                                {formatCurrency(point.total, salesMetrics.currency)}
                              </span>
                              <div
                                className="w-8 rounded-t-2xl bg-gradient-to-b from-sky-200 to-sky-500"
                                style={{ height: `${height}px` }}
                              />
                              <span className="text-[11px] uppercase text-slate-400">{point.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })()}
                </div>
                <div className="mt-6 space-y-2 text-sm text-slate-200">
                  {salesMetrics.recentSales.slice(0, 4).map((sale) => (
                    <div
                      key={sale.id}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                    >
                      <div>
                        <p className="font-semibold text-white">
                          {formatCurrency(sale.amount, sale.currency)}
                        </p>
                        <p className="text-xs text-slate-400">
                          {(sale.customer && sale.customer.length > 2 ? sale.customer : "Cliente Stripe") ??
                            "Cliente Stripe"}
                          {" · "}
                          {new Date(sale.created).toLocaleDateString("it-IT", {
                            day: "2-digit",
                            month: "short",
                          })}
                        </p>
                      </div>
                      <span className="text-[11px] uppercase text-emerald-300">{sale.status}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
            {salesMetrics && salesMetrics.monthlyTotals.length === 0 && (
              <p className="mt-4 text-sm text-slate-300">
                Nessuna vendita registrata nel periodo selezionato.
              </p>
            )}
          </section>
        </aside>
      </div>
      <CopyEditors
        content={content}
        updateContent={updateContent}
        renderSaveButton={renderBlockSaveButton}
        notify={notify}
      />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Media manager</p>
            <h3 className="text-xl font-semibold">Gestisci immagini e video ({MEDIA_LIMIT_COPY})</h3>
          </div>
            <button
              type="button"
              onClick={() => notify("Apri la guida media dal pulsante info in alto")}
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300 hover:border-white/40"
            >
              Guida media
            </button>
            <Link
              href="/admin/deploy-guide"
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-white/40"
            >
              Guida deploy
            </Link>
        </div>
        <p className="mt-2 text-sm text-slate-300">
          Carica file locali (convertiti in base64) oppure incolla URL pubblici.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <MediaEditor
            label="Hero"
            media={content.hero.media}
            onChange={(media) => updateContent((draft) => void (draft.hero.media = media))}
            notify={notify}
          />
          <MediaEditor
            label="Feature grid"
            media={content.featureCluster.media}
            onChange={(media) => updateContent((draft) => void (draft.featureCluster.media = media))}
            notify={notify}
          />
          <MediaEditor
            label="Parallax"
            media={content.parallax.media}
            onChange={(media) => updateContent((draft) => void (draft.parallax.media = media))}
            notify={notify}
          />
          <MediaEditor
            label="Timeline"
            media={content.timeline.media}
            onChange={(media) => updateContent((draft) => void (draft.timeline.media = media))}
            notify={notify}
          />
          <MediaEditor
            label="Pricing"
            media={content.pricing.media}
            onChange={(media) => updateContent((draft) => void (draft.pricing.media = media))}
            notify={notify}
          />
          <MediaEditor
            label="Contact"
            media={content.contact.media}
            onChange={(media) => updateContent((draft) => void (draft.contact.media = media))}
            notify={notify}
          />
        </div>
        {renderBlockSaveButton()}
      </section>

      <SocialProofEditor
        content={content}
        updateContent={updateContent}
        notify={notify}
        renderSaveButton={renderBlockSaveButton}
      />

      <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">Editor JSON avanzato</h3>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <div className="inline-flex items-center gap-2 text-slate-300">
              <Switch
                checked={jsonEditorEnabled}
                onChange={(_, checked) => setJsonEditorEnabled(checked)}
                size="small"
                color="primary"
              />
              <span>Abilita modifica manuale</span>
            </div>
            <button
              type="button"
              onClick={() => setContentJson(JSON.stringify(content, null, 2))}
              className="rounded-full border border-white/10 px-4 py-2 text-slate-300 hover:border-white/40 disabled:opacity-40"
              disabled={!jsonEditorEnabled}
            >
              Ricarica JSON
            </button>
            <button
              type="button"
              onClick={applyContentJson}
              className="rounded-full bg-white px-4 py-2 text-slate-900 disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={!jsonEditorEnabled}
            >
              Applica JSON
            </button>
          </div>
        </div>
        <textarea
          className={`${textareaClasses} min-h-[260px] font-mono text-xs ${
            jsonEditorEnabled ? "" : "cursor-not-allowed opacity-50"
          }`}
          value={contentJson}
          onChange={(event) => {
            if (!jsonEditorEnabled) return;
            setContentJson(event.target.value);
          }}
          readOnly={!jsonEditorEnabled}
        />
        {jsonError && <p className="text-sm text-rose-300">{jsonError}</p>}
        {!jsonEditorEnabled && (
          <p className="text-xs text-slate-400">
            Attiva l&apos;editor manuale solo se devi incollare un dump JSON sicuro. I salvataggi normali
            funzionano dai pannelli guidati.
          </p>
        )}
      </section>

      <div className="flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={handleResetContent}
          className="rounded-full border border-white/10 px-6 py-3 text-sm text-slate-300 hover:border-white/40"
        >
          Ripristina
        </button>
        <button
          type="button"
          onClick={handleSaveContent}
          disabled={!hasContentChanges || savingContent}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {savingContent ? "Salvataggio..." : "Salva contenuti"}
        </button>
      </div>
        </>
      )}

      {contentPage === "services" && (
        <ServicesPageEditors
          content={content}
          updateContent={updateContent}
          renderSaveButton={renderBlockSaveButton}
        />
      )}

      {contentPage === "pricing" && (
        <PricingPageEditors
          content={content}
          updateContent={updateContent}
          renderSaveButton={renderBlockSaveButton}
        />
      )}

      {contentPage === "about" && (
        <AboutPageEditors
          content={content}
          updateContent={updateContent}
          renderSaveButton={renderBlockSaveButton}
        />
      )}
    </div>
  );
}
// Copy editor for sections -----------------------------------------------------

type CopyEditorsProps = {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
  renderSaveButton: () => React.JSX.Element;
  notify: (message: string, type?: ToastType) => void;
};

function CopyEditors({ content, updateContent, renderSaveButton, notify }: CopyEditorsProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Copy principale</p>
          <h3 className="text-xl font-semibold">Hero, feature, timeline, pricing</h3>
        </div>
        <p className="text-xs text-slate-400">Apri i dettagli per modificare i testi.</p>
      </div>
      <div className="space-y-4">
        <details
          id="hero-editor"
          className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24"
          open
        >
          <summary className="cursor-pointer text-lg font-semibold text-white">Hero</summary>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-200">
              Eyebrow
              <input
                className={inputClasses}
                value={content.hero.eyebrow}
                onChange={(event) => updateContent((draft) => void (draft.hero.eyebrow = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200">
              Titolo
              <input
                className={inputClasses}
                value={content.hero.title}
                onChange={(event) => updateContent((draft) => void (draft.hero.title = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200 md:col-span-2">
              Descrizione
              <textarea
                className={`${textareaClasses} min-h-[100px]`}
                value={content.hero.description}
                onChange={(event) => updateContent((draft) => void (draft.hero.description = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200 md:col-span-2">
              Supporto
              <textarea
                className={`${textareaClasses} min-h-[80px]`}
                value={content.hero.supporting}
                onChange={(event) => updateContent((draft) => void (draft.hero.supporting = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200">
              CTA primaria (label)
              <input
                className={inputClasses}
                value={content.hero.primaryCta.label}
                onChange={(event) => updateContent((draft) => void (draft.hero.primaryCta.label = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200">
              CTA primaria (href)
              <input
                className={inputClasses}
                value={content.hero.primaryCta.href}
                onChange={(event) => updateContent((draft) => void (draft.hero.primaryCta.href = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200">
              CTA secondaria (label)
              <input
                className={inputClasses}
                value={content.hero.secondaryCta.label}
                onChange={(event) => updateContent((draft) => void (draft.hero.secondaryCta.label = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200">
              CTA secondaria (href)
              <input
                className={inputClasses}
                value={content.hero.secondaryCta.href}
                onChange={(event) => updateContent((draft) => void (draft.hero.secondaryCta.href = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200">
              Badge media
              <input
                className={inputClasses}
                value={content.hero.mediaBadge}
                onChange={(event) => updateContent((draft) => void (draft.hero.mediaBadge = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200">
              Caption media
              <input
                className={inputClasses}
                value={content.hero.mediaCaption}
                onChange={(event) => updateContent((draft) => void (draft.hero.mediaCaption = event.target.value))}
              />
            </label>
            {renderSaveButton()}
          </div>
        </details>

        <details
          id="feature-editor"
          className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24"
        >
          <summary className="cursor-pointer text-lg font-semibold text-white">Metriche e feature</summary>
          <div id="metrics-editor" className="mt-4 space-y-4">
            {content.metrics.map((metric, index) => (
              <div key={`metric-${index}`} className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Metrica {index + 1}</p>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {(["value", "label", "detail"] as const).map((field) => (
                    <label key={field} className="text-xs text-slate-200">
                      {field === "value" ? "Valore" : field === "label" ? "Titolo" : "Dettaglio"}
                      <input
                        className={`mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none`}
                        value={metric[field]}
                        onChange={(event) =>
                          updateContent((draft) => {
                            draft.metrics[index][field] = event.target.value;
                          })
                        }
                      />
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Feature cluster</p>
              <label className="text-sm text-slate-200">
                Titolo
                <input
                  className={inputClasses}
                  value={content.featureCluster.title}
                  onChange={(event) => updateContent((draft) => void (draft.featureCluster.title = event.target.value))}
                />
              </label>
              <label className="mt-3 text-sm text-slate-200">
                Intro
                <textarea
                  className={`${textareaClasses} min-h-[80px]`}
                  value={content.featureCluster.intro}
                  onChange={(event) => updateContent((draft) => void (draft.featureCluster.intro = event.target.value))}
                />
              </label>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {content.featureCluster.items.map((item, index) => (
                  <div key={`feature-item-${index}`} className="rounded-xl border border-white/10 p-3">
                    <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Card {index + 1}</p>
                    {(["pill", "icon", "title", "description"] as const).map((field) => (
                      <label key={field} className="mt-2 block text-xs text-slate-200">
                        {field}
                        <input
                          className={`mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none`}
                          value={item[field]}
                          onChange={(event) =>
                            updateContent((draft) => {
                              draft.featureCluster.items[index][field] = event.target.value;
                            })
                          }
                        />
                      </label>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {renderSaveButton()}
          </div>
        </details>
        <details
          id="parallax-editor"
          className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24"
        >
          <summary className="cursor-pointer text-lg font-semibold text-white">Parallax e timeline</summary>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-200">
              Eyebrow parallax
              <input
                className={inputClasses}
                value={content.parallax.eyebrow}
                onChange={(event) => updateContent((draft) => void (draft.parallax.eyebrow = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200">
              Titolo parallax
              <input
                className={inputClasses}
                value={content.parallax.title}
                onChange={(event) => updateContent((draft) => void (draft.parallax.title = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200 md:col-span-2">
              Descrizione parallax
              <textarea
                className={`${textareaClasses} min-h-[80px]`}
                value={content.parallax.description}
                onChange={(event) => updateContent((draft) => void (draft.parallax.description = event.target.value))}
              />
            </label>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
                {content.parallax.stickyHighlights.map((highlight, index) => (
                  <div key={`parallax-highlight-${index}`} className="rounded-xl border border-white/10 p-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Highlight {index + 1}</p>
                <label className="text-xs text-slate-200">
                  Titolo
                  <input
                    className={`mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none`}
                    value={highlight.title}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.parallax.stickyHighlights[index].title = event.target.value;
                      })
                    }
                  />
                </label>
                <label className="mt-2 text-xs text-slate-200">
                  Dettaglio
                  <textarea
                    className={`mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none`}
                    value={highlight.detail}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.parallax.stickyHighlights[index].detail = event.target.value;
                      })
                    }
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {content.parallax.cards.map((card, index) => (
                  <div key={`parallax-card-${index}`} className="rounded-xl border border-white/10 p-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Card {index + 1}</p>
                {(["pill", "title", "detail"] as const).map((field) => (
                  <label key={field} className="mt-2 text-xs text-slate-200">
                    {field}
                    <input
                      className={`mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none`}
                      value={card[field] ?? ""}
                      onChange={(event) =>
                        updateContent((draft) => {
                          draft.parallax.cards[index][field] = event.target.value;
                        })
                      }
                    />
                  </label>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <MediaEditor
              label="Media parallax"
              media={content.parallax.media}
              onChange={(media) => updateContent((draft) => void (draft.parallax.media = media))}
              notify={notify}
            />
          </div>
          <div id="timeline-editor" className="mt-6 grid gap-4 md:grid-cols-3 scroll-mt-24">
                {content.timeline.steps.map((step, index) => (
                  <div key={`timeline-step-${index}`} className="rounded-xl border border-white/10 p-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Fase {index + 1}</p>
                {(["title", "description", "duration"] as const).map((field) => (
                  <label key={field} className="mt-2 text-xs text-slate-200">
                    {field}
                    <input
                      className={`mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none`}
                      value={step[field]}
                      onChange={(event) =>
                        updateContent((draft) => {
                          draft.timeline.steps[index][field] = event.target.value;
                        })
                      }
                    />
                  </label>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <MediaEditor
              label="Media timeline"
              media={content.timeline.media}
              onChange={(media) => updateContent((draft) => void (draft.timeline.media = media))}
              notify={notify}
            />
          </div>
          {renderSaveButton()}
        </details>

        <details
          id="pricing-editor"
          className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24"
        >
          <summary className="cursor-pointer text-lg font-semibold text-white">Pricing</summary>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-200">
              Titolo pricing
              <input
                className={inputClasses}
                value={content.pricing.title}
                onChange={(event) => updateContent((draft) => void (draft.pricing.title = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200">
              Sottotitolo
              <input
                className={inputClasses}
                value={content.pricing.subtitle}
                onChange={(event) => updateContent((draft) => void (draft.pricing.subtitle = event.target.value))}
              />
            </label>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
                {content.pricing.tiers.map((tier, index) => (
                  <div key={`pricing-tier-${index}`} className="rounded-xl border border-white/10 p-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Piano {index + 1}</p>
                {(["name", "description", "price", "cadence", "ctaLabel", "ctaHref"] as const).map((field) => (
                  <label key={field} className="mt-2 text-xs text-slate-200">
                    {field}
                    <input
                      className={`mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none`}
                      value={tier[field]}
                      onChange={(event) =>
                        updateContent((draft) => {
                          draft.pricing.tiers[index][field] = event.target.value;
                        })
                      }
                    />
                  </label>
                ))}
                <label className="mt-2 text-xs text-slate-200">
                  Highlights (uno per riga)
                  <div className="mt-2 space-y-3">
                      {tier.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={`pricing-tier-${index}-highlight-${highlightIndex}`}
                        className="rounded-xl border border-white/10 p-3"
                      >
                        <label className="text-xs text-slate-200">
                          Highlight {highlightIndex + 1}
                          <textarea
                            className={`mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none`}
                            value={highlight}
                            onChange={(event) =>
                              updateContent((draft) => {
                                draft.pricing.tiers[index].highlights[highlightIndex] =
                                  event.target.value;
                              })
                            }
                          />
                        </label>
                        <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                          <span>Puoi usare spazi e invii.</span>
                          <button
                            type="button"
                            disabled={tier.highlights.length <= 2}
                            onClick={() =>
                              updateContent((draft) => {
                                if (draft.pricing.tiers[index].highlights.length > 2) {
                                  draft.pricing.tiers[index].highlights.splice(highlightIndex, 1);
                                }
                              })
                            }
                            className="text-xs text-slate-300 underline-offset-2 hover:text-white disabled:opacity-40"
                          >
                            Rimuovi
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      disabled={tier.highlights.length >= 3}
                      onClick={() =>
                        updateContent((draft) => {
                          if (draft.pricing.tiers[index].highlights.length < 3) {
                            draft.pricing.tiers[index].highlights.push("");
                          }
                        })
                      }
                      className="w-full rounded-xl border border-dashed border-white/20 px-3 py-2 text-xs text-slate-200 hover:border-white/50 disabled:opacity-40"
                    >
                      + Aggiungi highlight
                    </button>
                  </div>
                </label>
                <label className="mt-2 inline-flex items-center gap-2 text-xs text-slate-200">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-white/30 bg-transparent"
                    checked={Boolean(tier.emphasized)}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.pricing.tiers[index].emphasized = event.target.checked || undefined;
                      })
                    }
                  />
                  Evidenzia piano
                </label>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <MediaEditor
              label="Media pricing"
              media={content.pricing.media}
              onChange={(media) => updateContent((draft) => void (draft.pricing.media = media))}
              notify={notify}
            />
          </div>
          {renderSaveButton()}
        </details>

        <details
          id="contact-editor"
          className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24"
        >
          <summary className="cursor-pointer text-lg font-semibold text-white">Contattaci</summary>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <label className="text-sm text-slate-200">
              Titolo contatti
              <input
                className={inputClasses}
                value={content.contact.title}
                onChange={(event) => updateContent((draft) => void (draft.contact.title = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200">
              Descrizione contatti
              <textarea
                className={`${textareaClasses} min-h-[80px]`}
                value={content.contact.description}
                onChange={(event) => updateContent((draft) => void (draft.contact.description = event.target.value))}
              />
            </label>
            <label className="text-sm text-slate-200 md:col-span-2">
              Dettagli (uno per riga)
              <textarea
                className={`${textareaClasses} min-h-[80px]`}
                value={stringifyList(content.contact.details)}
                onChange={(event) => updateContent((draft) => void (draft.contact.details = parseList(event.target.value)))}
              />
            </label>
          </div>
          <div className="mt-6">
            <MediaEditor
              label="Media contatti"
              media={content.contact.media}
              onChange={(media) => updateContent((draft) => void (draft.contact.media = media))}
              notify={notify}
            />
          </div>
          {renderSaveButton()}
        </details>

      </div>
    </section>
  );
}

type PricingPageEditorsProps = {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
  renderSaveButton: () => React.JSX.Element;
};

function PricingPageEditors({ content, updateContent, renderSaveButton }: PricingPageEditorsProps) {
  const simulatorValues = mergeSimulatorCopy(content.pricingPage.simulator);
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Pagina prezzi</p>
          <h3 className="text-xl font-semibold">Hero, piani e FAQ</h3>
        </div>
        <p className="text-xs text-slate-400">Gestisci il listino dedicato e il simulatore.</p>
      </div>

      <details id="pricing-hero" className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24">
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-tags text-slate-400" aria-hidden="true" />
          Prezzi · Hero
        </summary>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {(["eyebrow", "title", "description"] as const).map((field) => (
            <label
              key={field}
              className={`text-sm text-slate-200 ${field === "description" ? "md:col-span-2" : ""}`}
            >
              {field}
              {field === "description" ? (
                <textarea
                  className={`${textareaClasses} min-h-[80px]`}
                  value={content.pricingPage.hero[field]}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.pricingPage.hero[field] = event.target.value;
                    })
                  }
                />
              ) : (
                <input
                  className={inputClasses}
                  value={content.pricingPage.hero[field]}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.pricingPage.hero[field] = event.target.value;
                    })
                  }
                />
              )}
            </label>
          ))}
        </div>
        {renderSaveButton()}
      </details>

      <details
        id="pricing-simulator"
        className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24"
      >
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-sliders text-slate-400" aria-hidden="true" />
          Prezzi · Simulatore
        </summary>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {(
            [
              "eyebrow",
              "title",
              "description",
              "sliderLabel",
              "sliderHint",
              "manualPlaceholder",
              "emptyState",
              "buttonLabel",
            ] as const
          ).map((field) => {
            const isLongText = ["description", "sliderHint", "emptyState"].includes(field);
            return (
              <label
                key={field}
                className={`text-sm text-slate-200 ${isLongText ? "md:col-span-2" : ""}`}
              >
                {field}
                {isLongText ? (
                  <textarea
                    className={`${textareaClasses} min-h-[80px]`}
                    value={simulatorValues[field]}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.pricingPage.simulator = mergeSimulatorCopy(draft.pricingPage.simulator);
                        draft.pricingPage.simulator[field] = event.target.value;
                      })
                    }
                  />
                ) : (
                  <input
                    className={inputClasses}
                    value={simulatorValues[field]}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.pricingPage.simulator = mergeSimulatorCopy(draft.pricingPage.simulator);
                        draft.pricingPage.simulator[field] = event.target.value;
                      })
                    }
                  />
                )}
              </label>
            );
          })}
        </div>
        {renderSaveButton()}
      </details>

      <details
        id="pricing-dedicated"
        className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24"
      >
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-layer-group text-slate-400" aria-hidden="true" />
          Prezzi · Piani
        </summary>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {content.pricingPage.tiers.map((tier, index) => (
            <article key={`pricing-page-tier-${index}`} className="rounded-xl border border-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Piano {index + 1}</p>
              {(["name", "description", "price", "cadence", "ctaLabel", "ctaHref"] as const).map((field) => (
                <label key={field} className="mt-2 block text-xs text-slate-200">
                  {field}
                  <input
                    className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                    value={tier[field]}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.pricingPage.tiers[index][field] = event.target.value;
                      })
                    }
                  />
                </label>
              ))}
              <label className="mt-2 block text-xs text-slate-200">
                Highlights (uno per riga)
                <textarea
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                  value={stringifyList(tier.highlights)}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.pricingPage.tiers[index].highlights = parseList(event.target.value);
                    })
                  }
                />
              </label>
              <label className="mt-2 inline-flex items-center gap-2 text-xs text-slate-200">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/30 bg-transparent"
                  checked={Boolean(tier.emphasized)}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.pricingPage.tiers[index].emphasized = event.target.checked;
                    })
                  }
                />
                Evidenzia piano
              </label>
            </article>
          ))}
        </div>
        {renderSaveButton()}
      </details>

      <details id="pricing-faq" className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24">
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-circle-question text-slate-400" aria-hidden="true" />
          Prezzi · FAQ
        </summary>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {content.pricingPage.faqs.map((faq, index) => (
            <article key={`pricing-faq-${index}`} className="rounded-xl border border-white/10 p-4">
              <label className="text-xs text-slate-200">
                Domanda
                <input
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                  value={faq.question}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.pricingPage.faqs[index].question = event.target.value;
                    })
                  }
                />
              </label>
              <label className="mt-2 block text-xs text-slate-200">
                Risposta
                <textarea
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                  value={faq.answer}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.pricingPage.faqs[index].answer = event.target.value;
                    })
                  }
                />
              </label>
            </article>
          ))}
        </div>
        {renderSaveButton()}
      </details>
    </section>
  );
}

type AboutPageEditorsProps = {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
  renderSaveButton: () => React.JSX.Element;
};

function AboutPageEditors({ content, updateContent, renderSaveButton }: AboutPageEditorsProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Pagina chi siamo</p>
          <h3 className="text-xl font-semibold">Hero, valori, timeline e nota team</h3>
        </div>
        <p className="text-xs text-slate-400">Racconta il team e la storia di GeoTapp.</p>
      </div>

      <details id="about-hero" className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24">
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-people-group text-slate-400" aria-hidden="true" />
          Chi siamo · Hero
        </summary>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {(["eyebrow", "title", "description"] as const).map((field) => (
            <label
              key={field}
              className={`text-sm text-slate-200 ${field === "description" ? "md:col-span-2" : ""}`}
            >
              {field}
              {field === "description" ? (
                <textarea
                  className={`${textareaClasses} min-h-[80px]`}
                  value={content.aboutPage.hero[field]}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.aboutPage.hero[field] = event.target.value;
                    })
                  }
                />
              ) : (
                <input
                  className={inputClasses}
                  value={content.aboutPage.hero[field]}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.aboutPage.hero[field] = event.target.value;
                    })
                  }
                />
              )}
            </label>
          ))}
        </div>
        {renderSaveButton()}
      </details>

      <details id="about-values" className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24">
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-heart text-slate-400" aria-hidden="true" />
          Chi siamo · Valori
        </summary>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {content.aboutPage.values.map((value, index) => (
            <article key={`about-value-${index}`} className="rounded-xl border border-white/10 p-4">
              <label className="text-xs text-slate-200">
                Titolo
                <input
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                  value={value.title}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.aboutPage.values[index].title = event.target.value;
                    })
                  }
                />
              </label>
              <label className="mt-2 block text-xs text-slate-200">
                Descrizione
                <textarea
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                  value={value.description}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.aboutPage.values[index].description = event.target.value;
                    })
                  }
                />
              </label>
            </article>
          ))}
        </div>
        {renderSaveButton()}
      </details>

      <details id="about-story" className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24">
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-road text-slate-400" aria-hidden="true" />
          Chi siamo · Timeline
        </summary>
        <div className="mt-4 space-y-4">
          {content.aboutPage.story.map((event, index) => (
            <article key={`about-story-${index}`} className="rounded-xl border border-white/10 p-4">
              <label className="text-xs text-slate-200">
                Anno
                <input
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                  value={event.year}
                  onChange={(eventInput) =>
                    updateContent((draft) => {
                      draft.aboutPage.story[index].year = eventInput.target.value;
                    })
                  }
                />
              </label>
              <label className="mt-2 block text-xs text-slate-200">
                Titolo
                <input
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                  value={event.title}
                  onChange={(eventInput) =>
                    updateContent((draft) => {
                      draft.aboutPage.story[index].title = eventInput.target.value;
                    })
                  }
                />
              </label>
              <label className="mt-2 block text-xs text-slate-200">
                Descrizione
                <textarea
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                  value={event.description}
                  onChange={(eventInput) =>
                    updateContent((draft) => {
                      draft.aboutPage.story[index].description = eventInput.target.value;
                    })
                  }
                />
              </label>
            </article>
          ))}
        </div>
        {renderSaveButton()}
      </details>

      <details id="about-note" className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24">
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-pen-to-square text-slate-400" aria-hidden="true" />
          Chi siamo · Nota team
        </summary>
        <label className="mt-4 block text-sm text-slate-200">
          Nota
          <textarea
            className={`${textareaClasses} min-h-[100px]`}
            value={content.aboutPage.teamNote}
            onChange={(event) =>
              updateContent((draft) => {
                draft.aboutPage.teamNote = event.target.value;
              })
            }
          />
        </label>
        {renderSaveButton()}
      </details>
    </section>
  );
}

type ServicesPageEditorsProps = {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
  renderSaveButton: () => React.JSX.Element;
};

function ServicesPageEditors({ content, updateContent, renderSaveButton }: ServicesPageEditorsProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Pagina servizi</p>
          <h3 className="text-xl font-semibold">Hero, moduli, highlights e CTA</h3>
        </div>
        <p className="text-xs text-slate-400">Gestisci i contenuti dedicati alla pagina servizi.</p>
      </div>

      <details id="services-hero" className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24">
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-bullhorn text-slate-400" aria-hidden="true" />
          Servizi · Hero
        </summary>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {(["eyebrow", "title", "description"] as const).map((field) => (
            <label
              key={field}
              className={`text-sm text-slate-200 ${field === "description" ? "md:col-span-2" : ""}`}
            >
              {field}
              {field === "description" ? (
                <textarea
                  className={`${textareaClasses} min-h-[80px]`}
                  value={content.servicesPage.hero[field]}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.servicesPage.hero[field] = event.target.value;
                    })
                  }
                />
              ) : (
                <input
                  className={inputClasses}
                  value={content.servicesPage.hero[field]}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.servicesPage.hero[field] = event.target.value;
                    })
                  }
                />
              )}
            </label>
          ))}
        </div>
        {renderSaveButton()}
      </details>

      <details
        id="services-modules"
        className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24"
      >
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-table-cells-large text-slate-400" aria-hidden="true" />
          Servizi · Moduli
        </summary>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {content.servicesPage.services.map((service, index) => (
            <article key={`services-module-${index}`} className="rounded-xl border border-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Modulo {index + 1}</p>
              {(["title", "description", "icon"] as const).map((field) => (
                <label key={field} className="mt-2 block text-xs text-slate-200">
                  {field}
                  {field === "description" ? (
                    <textarea
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                      value={service[field]}
                      onChange={(event) =>
                        updateContent((draft) => {
                          draft.servicesPage.services[index][field] = event.target.value;
                        })
                      }
                    />
                  ) : (
                    <input
                      className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                      value={service[field]}
                      onChange={(event) =>
                        updateContent((draft) => {
                          draft.servicesPage.services[index][field] = event.target.value;
                        })
                      }
                    />
                  )}
                </label>
              ))}
            </article>
          ))}
        </div>
        {renderSaveButton()}
      </details>

      <details
        id="services-highlights"
        className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24"
      >
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-star text-slate-400" aria-hidden="true" />
          Servizi · Highlights
        </summary>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {content.servicesPage.highlights.map((highlight, index) => (
            <article key={`services-highlight-${index}`} className="rounded-xl border border-white/10 p-4">
              <label className="text-xs text-slate-200">
                Titolo
                <input
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                  value={highlight.title}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.servicesPage.highlights[index].title = event.target.value;
                    })
                  }
                />
              </label>
              <label className="mt-2 block text-xs text-slate-200">
                Descrizione
                <textarea
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
                  value={highlight.description}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.servicesPage.highlights[index].description = event.target.value;
                    })
                  }
                />
              </label>
            </article>
          ))}
        </div>
        {renderSaveButton()}
      </details>

      <details id="services-cta" className="rounded-2xl border border-white/10 bg-white/5 p-4 scroll-mt-24">
        <summary className="cursor-pointer text-lg font-semibold text-white flex items-center gap-2">
          <i className="fa-solid fa-paper-plane text-slate-400" aria-hidden="true" />
          Servizi · CTA
        </summary>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {(["title", "description", "primaryLabel", "primaryHref"] as const).map((field) => (
            <label
              key={field}
              className={`text-sm text-slate-200 ${field === "description" ? "md:col-span-2" : ""}`}
            >
              {field}
              {field === "description" ? (
                <textarea
                  className={`${textareaClasses} min-h-[80px]`}
                  value={content.servicesPage.cta[field]}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.servicesPage.cta[field] = event.target.value;
                    })
                  }
                />
              ) : (
                <input
                  className={inputClasses}
                  value={content.servicesPage.cta[field]}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.servicesPage.cta[field] = event.target.value;
                    })
                  }
                />
              )}
            </label>
          ))}
        </div>
        {renderSaveButton()}
      </details>
    </section>
  );
}
// Shared save button ---------------------------------------------------------

type BlockSaveButtonProps = {
  onSave: () => void;
  disabled: boolean;
  saving: boolean;
};

function BlockSaveButton({ onSave, disabled, saving }: BlockSaveButtonProps) {
  return (
    <div className="flex justify-end pt-4">
      <button
        type="button"
        onClick={onSave}
        disabled={disabled}
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <i className="fa-solid fa-floppy-disk" aria-hidden="true" />
        {saving ? "Salvataggio..." : "Salva contenuti"}
      </button>
    </div>
  );
}

// Social proof ---------------------------------------------------------------

type SocialProofEditorProps = {
  content: SiteContent;
  updateContent: (updater: (draft: SiteContent) => void) => void;
  notify: (message: string, type?: ToastType) => void;
  renderSaveButton?: () => React.JSX.Element;
};

function SocialProofEditor({ content, updateContent, notify, renderSaveButton }: SocialProofEditorProps) {
  return (
    <section
      id="social-proof-editor"
      className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 scroll-mt-24"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Trust signals</p>
          <h3 className="text-xl font-semibold">Social proof</h3>
        </div>
        <button
          type="button"
          onClick={() => notify("Mantieni almeno 3 loghi e 1 testimonianza per credibilit&agrave;")}
          className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-300 hover:border-white/40"
        >
          Consigli
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate-200">
          Titolo sezione
          <input
            className={inputClasses}
            value={content.socialProof.title}
            onChange={(event) => updateContent((draft) => void (draft.socialProof.title = event.target.value))}
          />
        </label>
        <label className="text-sm text-slate-200">
          Sottotitolo
          <input
            className={inputClasses}
            value={content.socialProof.subtitle}
            onChange={(event) => updateContent((draft) => void (draft.socialProof.subtitle = event.target.value))}
          />
        </label>
      </div>
      <div className="space-y-3 rounded-2xl border border-white/10 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">Loghi</p>
          <span className="text-xs text-slate-400">Max 6</span>
        </div>
          {content.socialProof.logos.map((logo, index) => (
            <div key={`social-proof-logo-${index}`} className="flex flex-wrap items-center gap-3 rounded-xl bg-white/5 p-3">
            <input
              className="flex-1 rounded-2xl border border-white/20 bg-transparent px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
              value={logo}
              onChange={(event) =>
                updateContent((draft) => {
                  draft.socialProof.logos[index] = event.target.value;
                })
              }
            />
            <label className="cursor-pointer rounded-full border border-white/20 px-3 py-2 text-xs text-slate-200">
              Carica
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={async (event) => {
                  const file = event.target.files?.[0];
                  event.target.value = "";
                  if (!file) return;
                  if (file.size > MEDIA_LIMIT_BYTES) {
                    notify(`Logo oltre ${MEDIA_LIMIT_COPY}`, "error");
                    return;
                  }
                  try {
                    const dataUrl = await fileToDataUrl(file);
                    updateContent((draft) => {
                      draft.socialProof.logos[index] = dataUrl;
                    });
                    notify("Logo aggiornato");
                  } catch {
                    notify("Errore caricando il logo", "error");
                  }
                }}
              />
            </label>
            <button
              type="button"
              disabled={content.socialProof.logos.length <= 3}
              onClick={() =>
                updateContent((draft) => {
                  draft.socialProof.logos.splice(index, 1);
                })
              }
              className="text-xs text-rose-300 disabled:opacity-30"
            >
              Rimuovi
            </button>
          </div>
        ))}
        <button
          type="button"
          disabled={content.socialProof.logos.length >= 6}
          onClick={() =>
            updateContent((draft) => {
              draft.socialProof.logos.push("https://dummyimage.com/120x40/0ea5e9/ffffff&text=Logo");
            })
          }
          className="rounded-full border border-dashed border-white/20 px-4 py-2 text-sm text-slate-200 disabled:opacity-30"
        >
          Aggiungi logo
        </button>
      </div>
      <div className="space-y-3 rounded-2xl border border-white/10 p-4">
        <p className="text-sm font-semibold text-white">Testimonianze</p>
          {content.socialProof.testimonials.map((testimonial, index) => (
            <div key={`testimonial-${index}`} className="rounded-2xl border border-white/10 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Blocco {index + 1}</p>
              <button
                type="button"
                disabled={content.socialProof.testimonials.length <= 1}
                onClick={() =>
                  updateContent((draft) => {
                    draft.socialProof.testimonials.splice(index, 1);
                  })
                }
                className="text-xs text-rose-300 disabled:opacity-30"
              >
                Rimuovi
              </button>
            </div>
            <label className="mt-3 block text-sm text-slate-200">
              Quote
              <textarea
                className={`${textareaClasses} min-h-[80px]`}
                value={testimonial.quote}
                onChange={(event) =>
                  updateContent((draft) => {
                    draft.socialProof.testimonials[index].quote = event.target.value;
                  })
                }
              />
            </label>
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {(["author", "role"] as const).map((field) => (
                <label key={field} className="text-xs text-slate-200">
                  {field}
                  <input
                    className={`mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none`}
                    value={testimonial[field]}
                    onChange={(event) =>
                      updateContent((draft) => {
                        draft.socialProof.testimonials[index][field] = event.target.value;
                      })
                    }
                  />
                </label>
              ))}
              <label className="text-xs text-slate-200">
                Avatar URL
                <input
                  className={`mt-1 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none`}
                  value={testimonial.avatar ?? ""}
                  onChange={(event) =>
                    updateContent((draft) => {
                      draft.socialProof.testimonials[index].avatar = event.target.value;
                    })
                  }
                />
              </label>
            </div>
            <label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200">
              Carica avatar
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={async (event) => {
                  const file = event.target.files?.[0];
                  event.target.value = "";
                  if (!file) return;
                  if (file.size > MEDIA_LIMIT_BYTES) {
                    notify(`Avatar oltre ${MEDIA_LIMIT_COPY}`, "error");
                    return;
                  }
                  try {
                    const dataUrl = await fileToDataUrl(file);
                    updateContent((draft) => {
                      draft.socialProof.testimonials[index].avatar = dataUrl;
                    });
                    notify("Avatar aggiornato");
                  } catch {
                    notify("Errore caricando l&apos;avatar", "error");
                  }
                }}
              />
            </label>
          </div>
        ))}
        <button
          type="button"
          disabled={content.socialProof.testimonials.length >= 3}
          onClick={() =>
            updateContent((draft) => {
              draft.socialProof.testimonials.push({
                quote: "Nuova testimonianza demo",
                author: "Nome Cognome",
                role: "Ruolo",
                avatar: "",
              });
            })
          }
          className="rounded-full border border-dashed border-white/20 px-4 py-2 text-sm text-slate-200 disabled:opacity-30"
        >
          Aggiungi testimonianza
        </button>
      </div>
      {renderSaveButton && renderSaveButton()}
    </section>
  );
}
// Integrations tab -----------------------------------------------------------

type IntegrationsTabProps = {
  integrations: IntegrationConfig;
  updateIntegrations: (updater: (draft: IntegrationConfig) => void) => void;
  integrationHealth: {
    django: boolean;
    stripe: boolean;
    flutter: boolean;
    firebase: boolean;
  } | null;
  handleSaveIntegrations: () => void;
  handleResetIntegrations: () => void;
  hasIntegrationChanges: boolean;
  savingIntegrations: boolean;
  integrationJson: string;
  setIntegrationJson: (value: string) => void;
  applyIntegrationJson: () => void;
  integrationJsonError: string | null;
  handleTestIntegrations: () => void;
  openInfo: (key: InfoModalKey) => void;
};

function IntegrationsTab({
  integrations,
  updateIntegrations,
  integrationHealth,
  handleSaveIntegrations,
  handleResetIntegrations,
  hasIntegrationChanges,
  savingIntegrations,
  integrationJson,
  setIntegrationJson,
  applyIntegrationJson,
  integrationJsonError,
  handleTestIntegrations,
  openInfo,
}: IntegrationsTabProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">Stato integrazioni</p>
            <h3 className="text-xl font-semibold">Connessioni</h3>
          </div>
          <button
            type="button"
            onClick={handleTestIntegrations}
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:border-white/40"
          >
            Test rapido
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {(["django", "stripe", "flutter", "firebase"] as const).map((key) => (
            <div key={key} className="rounded-2xl border border-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{key}</p>
              <p className="mt-2 text-sm font-semibold text-white">
                {key === "flutter"
                  ? "Login Flutter"
                  : key === "firebase"
                    ? "Firebase Sync"
                    : key === "django"
                      ? "Backend Django"
                      : "Stripe"}
              </p>
              <StatusBadge healthy={Boolean(integrationHealth?.[key])} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-end gap-3 text-xs text-slate-400">
          <Link
            href="/admin-stripe"
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 hover:border-white/40"
          >
            Apri feed eventi Stripe
          </Link>
        </div>
      </div>

      <IntegrationCard
        title="Backend Django"
        infoKey="django"
        openInfo={openInfo}
        inputs={[
          {
            label: "Base URL",
            value: integrations.django.baseUrl,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.django.baseUrl = value)),
          },
          {
            label: "Service token",
            value: integrations.django.adminToken,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.django.adminToken = value)),
          },
          {
            label: "Slug organizzazione",
            value: integrations.django.organizationSlug,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.django.organizationSlug = value)),
          },
          {
            label: "Webhook URL",
            value: integrations.django.webhookUrl,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.django.webhookUrl = value)),
          },
        ]}
      />

      <IntegrationCard
        title="Stripe Billing"
        infoKey="stripe"
        openInfo={openInfo}
        inputs={[
          {
            label: "Publishable key",
            value: integrations.stripe.publishableKey,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.stripe.publishableKey = value)),
          },
          {
            label: "Secret key",
            value: integrations.stripe.secretKey,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.stripe.secretKey = value)),
          },
          {
            label: "Webhook secret",
            value: integrations.stripe.webhookSecret,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.stripe.webhookSecret = value)),
          },
        ]}
        textarea={{
          label: "Price ID (uno per riga)",
          value: stringifyList(integrations.stripe.priceIds),
          onChange: (value: string) =>
            updateIntegrations((draft) => void (draft.stripe.priceIds = parseList(value))),
        }}
      />

      <IntegrationCard
        title="Login Flutter"
        infoKey="flutter"
        openInfo={openInfo}
        inputs={[
          {
            label: "Client ID",
            value: integrations.flutterLogin.clientId,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.flutterLogin.clientId = value)),
          },
          {
            label: "Redirect URI",
            value: integrations.flutterLogin.redirectUri,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.flutterLogin.redirectUri = value)),
          },
          {
            label: "Deep link scheme",
            value: integrations.flutterLogin.deepLinkScheme,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.flutterLogin.deepLinkScheme = value)),
          },
        ]}
        textarea={{
          label: "Scopes (uno per riga)",
          value: stringifyList(integrations.flutterLogin.scopes),
          onChange: (value: string) =>
            updateIntegrations((draft) => void (draft.flutterLogin.scopes = parseList(value))),
        }}
      />

      <IntegrationCard
        title="Firebase"
        infoKey="firebase"
        openInfo={openInfo}
        inputs={[
          {
            label: "Project ID",
            value: integrations.firebase.projectId,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.firebase.projectId = value)),
          },
          {
            label: "API key",
            value: integrations.firebase.apiKey,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.firebase.apiKey = value)),
          },
          {
            label: "Database URL",
            value: integrations.firebase.databaseUrl,
            onChange: (value: string) =>
              updateIntegrations((draft) => void (draft.firebase.databaseUrl = value)),
          },
        ]}
        textarea={{
          label: "Collection da sincronizzare",
          value: stringifyList(integrations.firebase.syncCollections),
          onChange: (value: string) =>
            updateIntegrations((draft) => void (draft.firebase.syncCollections = parseList(value))),
        }}
      />

      <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">JSON integrazioni</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <button
              type="button"
              onClick={() => setIntegrationJson(JSON.stringify(integrations, null, 2))}
              className="rounded-full border border-white/10 px-4 py-2 text-slate-300 hover:border-white/40"
            >
              Ricarica JSON
            </button>
            <button
              type="button"
              onClick={applyIntegrationJson}
              className="rounded-full bg-white px-4 py-2 text-slate-900"
            >
              Applica JSON
            </button>
          </div>
        </div>
        <textarea
          className={`${textareaClasses} min-h-[260px] font-mono text-xs`}
          value={integrationJson}
          onChange={(event) => setIntegrationJson(event.target.value)}
        />
        {integrationJsonError && <p className="text-sm text-rose-300">{integrationJsonError}</p>}
      </section>

      <div className="flex flex-wrap justify-end gap-3">
        <button
          type="button"
          onClick={handleResetIntegrations}
          className="rounded-full border border-white/10 px-6 py-3 text-sm text-slate-300 hover:border-white/40"
        >
          Ripristina
        </button>
        <button
          type="button"
          onClick={handleSaveIntegrations}
          disabled={!hasIntegrationChanges || savingIntegrations}
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {savingIntegrations ? "Salvataggio..." : "Salva integrazioni"}
        </button>
      </div>
    </div>
  );
}
// Reusable cards -------------------------------------------------------------

type IntegrationCardProps = {
  title: string;
  infoKey: InfoModalKey;
  openInfo: (key: InfoModalKey) => void;
  inputs: { label: string; value: string; onChange: (value: string) => void }[];
  textarea?: { label: string; value: string; onChange: (value: string) => void };
};

function IntegrationCard({ title, infoKey, openInfo, inputs, textarea }: IntegrationCardProps) {
  return (
    <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <button
          type="button"
          onClick={() => infoKey && openInfo(infoKey)}
          className="text-xs text-slate-300 underline-offset-4 hover:underline"
        >
          Guida
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {inputs.map((field) => (
          <label key={field.label} className="text-sm text-slate-200">
            {field.label}
            <input
              className={inputClasses}
              value={field.value}
              onChange={(event) => field.onChange(event.target.value)}
            />
          </label>
        ))}
        {textarea && (
          <label className="text-sm text-slate-200 md:col-span-2">
            {textarea.label}
            <textarea
              className={`${textareaClasses} min-h-[100px]`}
              value={textarea.value}
              onChange={(event) => textarea.onChange(event.target.value)}
            />
          </label>
        )}
      </div>
    </section>
  );
}

function StatusBadge({ healthy }: { healthy: boolean }) {
  return (
    <span
      className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
        healthy ? "bg-emerald-400/10 text-emerald-200" : "bg-amber-400/10 text-amber-200"
      }`}
    >
      <span className={`h-2 w-2 rounded-full ${healthy ? "bg-emerald-300" : "bg-amber-300"}`} />
      {healthy ? "OK" : "Da completare"}
    </span>
  );
}

// Media editor ---------------------------------------------------------------

type MediaEditorProps = {
  label: string;
  media?: SiteContent["hero"]["media"];
  onChange: (value?: SiteContent["hero"]["media"]) => void;
  notify: (message: string, type?: ToastType) => void;
};

function MediaEditor({ label, media, onChange, notify }: MediaEditorProps) {
  const handleUpload = async (file: File, field: "image" | "video") => {
    if (file.size > MEDIA_LIMIT_BYTES) {
      notify(`${label}: file oltre ${MEDIA_LIMIT_COPY}`, "error");
      return;
    }
    try {
      const dataUrl = await fileToDataUrl(file);
      onChange({ ...(media ?? {}), [field]: dataUrl });
      notify(`${field === "image" ? "Immagine" : "Video"} aggiornato`);
    } catch {
      notify("Caricamento file non riuscito", "error");
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center justify-between">
        <h4 className="text-base font-semibold text-white">{label}</h4>
        <button type="button" onClick={() => onChange(undefined)} className="text-xs text-rose-300">
          Svuota
        </button>
      </div>
      {media?.image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={media.image}
            alt={media.alt ?? label}
            className="mt-3 h-32 w-full rounded-2xl border border-white/10 object-cover"
          />
        </>
      )}
      {media?.video && (
        <video
          src={media.video}
          className="mt-3 h-32 w-full rounded-2xl border border-white/10 object-cover"
          controls
          muted
        />
      )}
      <div className="mt-3 grid gap-3">
        <label className="text-xs text-slate-200">
          URL immagine
          <input
            className="mt-1 w-full rounded-2xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
            value={media?.image ?? ""}
            onChange={(event) =>
              onChange(
                event.target.value
                  ? { ...(media ?? {}), image: event.target.value }
                  : { ...(media ?? {}), image: undefined },
              )
            }
          />
        </label>
        <label className="text-xs text-slate-200">
          URL video
          <input
            className="mt-1 w-full rounded-2xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
            value={media?.video ?? ""}
            onChange={(event) =>
              onChange(
                event.target.value
                  ? { ...(media ?? {}), video: event.target.value }
                  : { ...(media ?? {}), video: undefined },
              )
            }
          />
        </label>
        <label className="text-xs text-slate-200">
          Caption
          <input
            className="mt-1 w-full rounded-2xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
            value={media?.caption ?? ""}
            onChange={(event) =>
              onChange({ ...(media ?? {}), caption: event.target.value || undefined })
            }
          />
        </label>
        <label className="text-xs text-slate-200">
          Testo alternativo
          <input
            className="mt-1 w-full rounded-2xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-white/60 focus:outline-none"
            value={media?.alt ?? ""}
            onChange={(event) =>
              onChange({ ...(media ?? {}), alt: event.target.value || undefined })
            }
          />
        </label>
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-xs">
        <label className="cursor-pointer rounded-full border border-white/20 px-3 py-2 text-slate-200">
          Carica immagine
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              if (!file) return;
              await handleUpload(file, "image");
            }}
          />
        </label>
        <label className="cursor-pointer rounded-full border border-white/20 px-3 py-2 text-slate-200">
          Carica video
          <input
            type="file"
            accept="video/*"
            className="sr-only"
            onChange={async (event) => {
              const file = event.target.files?.[0];
              event.target.value = "";
              if (!file) return;
              await handleUpload(file, "video");
            }}
          />
        </label>
      </div>
    </div>
  );
}

// Info modal ---------------------------------------------------------------

function InfoModal({ infoKey, onClose }: { infoKey: InfoModalKey; onClose: () => void }) {
  if (!infoKey) return null;
  const info = INFO_SECTIONS[infoKey];
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/80 px-6 py-10">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">{info.title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300"
          >
            Chiudi
          </button>
        </div>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-slate-200">
          {info.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

