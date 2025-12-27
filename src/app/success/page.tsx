'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import { useCart } from '@/store/cart';

function SuccessContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const sessionId = searchParams.get('session_id');

  const [loading, setLoading] = useState(true);
  const [inviteLink, setInviteLink] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { clearCart } = useCart();

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }

    // Clear cart on successful entry
    clearCart();

    // Call our internal API to get the magic link from SaaS
    fetch('/api/invite', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId })
    })
      .then(res => res.json())
      .then(data => {
        if (data.emailOnly) {
          setInviteLink("EMAIL_ONLY");
        } else if (data.success && data.link) {
          setInviteLink(data.link);
        } else {
          console.error("Invite generation failed:", data.error);
          setError(data.error || "Errore sconosciuto dal server");
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError("Errore di connessione.");
      })
      .finally(() => setLoading(false));

  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(73, 226, 214, 0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(106, 125, 252, 0.14), transparent 40%), #0a0d1b' }}>
      <motion.div
        className="p-12 rounded-lg max-w-md w-full text-center"
        style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 20px 50px rgba(0,0,0,0.28)' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(106,125,252,0.35)' }}>
          <span className="text-4xl" style={{ color: '#e8ecf8' }}>✓</span>
        </div>

        <h1 className="text-3xl font-bold mb-4 font-display" style={{ color: '#e8ecf8' }}>
          Pagamento Riuscito!
        </h1>

        <div className="mb-6" style={{ color: '#cdd2e8' }}>
          <p>
            Grazie per aver scelto GeoTapp.
          </p>
          {loading && (
            <p className="mt-4 text-yellow-400 animate-pulse">Generazione Account in corso...</p>
          )}

          {!loading && inviteLink && (
            <p className="mt-4 text-emerald-300">Il tuo account è pronto per l'attivazione!</p>
          )}

          {!loading && error && (
            <p className="mt-4 text-red-400">{error}</p>
          )}
        </div>

        {/* Main Action Button */}
        {inviteLink === "EMAIL_ONLY" ? (
          <div className="space-y-4">
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-200">
              <p className="font-bold">Licenza inviata via Email!</p>
              <p className="text-sm opacity-80">Controlla la tua casella di posta.</p>
            </div>
            <Link href="/" className="block px-6 py-3 font-medium rounded-lg transition" style={{
              background: 'rgba(255,255,255,0.1)',
              color: '#e8ecf8'
            }}>
              Torna alla Home
            </Link>
          </div>
        ) : inviteLink ? (
          <a href={inviteLink} className="block px-6 py-3 font-medium rounded-lg transition transform hover:scale-105" style={{
            background: 'linear-gradient(135deg, #6a7dfc, #49e2d6)',
            color: '#0b0f1f',
            boxShadow: '0 0 20px rgba(73, 226, 214, 0.4)'
          }}>
            ATTIVA ACCOUNT ORA 🚀
          </a>
        ) : (
          <button disabled={loading} className="block w-full px-6 py-3 font-medium rounded-lg transition opacity-50 cursor-not-allowed" style={{
            background: 'rgba(255,255,255,0.1)',
            color: '#e8ecf8'
          }}>
            {loading ? "Attendi..." : "Link non disponibile"}
          </button>
        )}

        {inviteLink !== "EMAIL_ONLY" && (
          <a href="mailto:info@geotapp.com" className="block px-6 py-3 font-medium rounded-lg transition" style={{
            color: '#e8ecf8',
            border: '1px solid rgba(255,255,255,0.4)'
          }}>
            Hai dubbi? Contattaci
          </a>
        )}
      </motion.div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Caricamento...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
