import { z } from "zod";

export const integrationConfigSchema = z.object({
  django: z.object({
    baseUrl: z.string().url("Inserisci una URL valida per il backend Django"),
    adminToken: z.string().min(1, "Il token di servizio è obbligatorio"),
    organizationSlug: z.string().min(1, "Slug organizzazione richiesto"),
    webhookUrl: z.string().url("La webhook deve essere una URL valida"),
  }),
  stripe: z.object({
    publishableKey: z.string().min(1, "Chiave pubblica richiesta"),
    secretKey: z.string().min(1, "Chiave segreta richiesta"),
    webhookSecret: z.string().min(1, "Webhook secret richiesto"),
    priceIds: z.array(z.string().min(1)).min(1, "Inserisci almeno un price ID"),
  }),
  flutterLogin: z.object({
    clientId: z.string().min(1, "Client ID richiesto"),
    redirectUri: z.string().url("La redirect deve essere una URL valida"),
    deepLinkScheme: z.string().min(1, "Scheme richiesto"),
    scopes: z.array(z.string().min(1)).min(1, "Inserisci almeno uno scope"),
  }),
  firebase: z.object({
    projectId: z.string().min(1, "Project ID richiesto"),
    apiKey: z.string().min(1, "API key richiesta"),
    databaseUrl: z.string().url("Database URL deve essere valida"),
    syncCollections: z
      .array(z.string().min(1))
      .min(1, "Specifica almeno una collection da sincronizzare"),
  }),
});

export type IntegrationConfig = z.infer<typeof integrationConfigSchema>;
