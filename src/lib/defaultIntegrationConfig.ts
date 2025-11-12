import type { IntegrationConfig } from "./integrationConfigSchema";

export const defaultIntegrationConfig: IntegrationConfig = {
  django: {
    baseUrl: "https://api.geotapp.com",
    adminToken: "DJANGO_SERVICE_TOKEN_PLACEHOLDER",
    organizationSlug: "geotapp",
    webhookUrl: "https://app.geotapp.com/api/django/webhooks",
  },
  stripe: {
    publishableKey: "pk_live_xxxxxxxxxxxxxxxxxxxxxx",
    secretKey: "sk_live_xxxxxxxxxxxxxxxxxxxxxx",
    webhookSecret: "whsec_xxxxxxxxxxxxxxxxxxxxxx",
    priceIds: ["price_monthly_placeholder", "price_yearly_placeholder"],
  },
  flutterLogin: {
    clientId: "geotapp-flutter-client",
    redirectUri: "https://app.geotapp.com/auth/callback",
    deepLinkScheme: "geotapp://auth",
    scopes: ["email", "profile", "firebase"],
  },
  firebase: {
    projectId: "geotapp-prod",
    apiKey: "AIzaSyPLACEHOLDER",
    databaseUrl: "https://geotapp-prod.firebaseio.com",
    syncCollections: ["meetings", "payments", "roles"],
  },
};
