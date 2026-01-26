'use client';

import { useState } from 'react';

interface TrialButtonProps {
  priceId: string;
  productName: string;
  productKey?: string;
  className?: string;
  children: React.ReactNode;
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function inferProductKey(productName: string) {
  const lowerName = productName.toLowerCase();
  if (lowerName.includes('flow')) return 'GEOTAPP_FLOW';
  if (lowerName.includes('timet') || lowerName.includes('app')) return 'GEOTAPP_APP';
  return undefined;
}

export default function TrialButton({ priceId, productName, productKey, className, children }: TrialButtonProps) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleClick = async () => {
    try {
      setLoading(true);

      let resolvedEmail = email;
      if (!resolvedEmail) {
        resolvedEmail = (window.prompt('Inserisci la tua email per attivare la prova gratuita') || '').trim();
        if (!resolvedEmail) {
          setLoading(false);
          return;
        }
        if (!emailRegex.test(resolvedEmail)) {
          alert('Inserisci un indirizzo email valido.');
          setLoading(false);
          return;
        }
        setEmail(resolvedEmail);
      }

      const resolvedProductKey = productKey || inferProductKey(productName);
      const response = await fetch(`${process.env.NEXT_PUBLIC_SAAS_URL || 'https://crm.geotapp.com'}/api/v1/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              stripePriceId: priceId,
              name: productName,
              productKey: resolvedProductKey,
              licenseType: 'STANDARD'
            }
          ],
          email: resolvedEmail
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Si e\' verificato un errore. Riprova.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={className}
    >
      {loading ? 'Caricamento...' : children}
    </button>
  );
}
