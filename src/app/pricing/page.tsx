import PricingContent from './PricingContent';
import { promoFine2026Attiva } from '@/lib/promo-fine-2026';

export default function Pricing() {
  return <PricingContent promoIniziale={promoFine2026Attiva()} />;
}
