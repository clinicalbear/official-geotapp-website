

export const TERMS_VERSION = '1.2';
export const PRIVACY_VERSION = '1.0';
export const TERMS_URL = 'https://geotapp.com/terms';
export const PRIVACY_URL = 'https://geotapp.com/privacy';

export type PolicyAcceptancePayload = {
  termsAccepted: true;
  termsVersion: string;
  termsAcceptedAt: string;
  privacyRead: true;
  privacyVersion: string;
  privacyReadAt: string;
};

export function buildPolicyAcceptancePayload(
  acceptedAt = new Date().toISOString(),
): PolicyAcceptancePayload {
  return {
    termsAccepted: true,
    termsVersion: TERMS_VERSION,
    termsAcceptedAt: acceptedAt,
    privacyRead: true,
    privacyVersion: PRIVACY_VERSION,
    privacyReadAt: acceptedAt,
  };
}
