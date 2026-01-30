'use client';

import { motion } from 'framer-motion';
import { Check, Zap, TrendingDown, Star } from 'lucide-react';
import BundleCalculator from '@/components/BundleCalculator';
import Link from 'next/link';

export default function BundlePricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4" />
              Offerta Bundle - Risparmia il 15%
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Flow + TimeTracker Bundle
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              La soluzione completa per gestire la tua azienda: CRM, progetti e tracciamento ore in un unico pacchetto con il 15% di sconto per il primo anno.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bundle Calculator */}
      <section className="py-16 px-4" id="calculator">
        <div className="max-w-5xl mx-auto">
          <BundleCalculator locale="it" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Perché scegliere il Bundle?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Risparmio Garantito</h3>
              <p className="text-gray-600">
                15% di sconto sul primo anno rispetto all'acquisto separato
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrazione Perfetta</h3>
              <p className="text-gray-600">
                Flow e TimeTracker lavorano insieme per una gestione aziendale fluida
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tutto Incluso</h3>
              <p className="text-gray-600">
                CRM, progetti, fatturazione, tracciamento ore e reportistica in un'unica soluzione
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Cosa Include il Bundle</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Flow Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">GeoTapp Flow</h3>
              <ul className="space-y-4">
                {[
                  'CRM completo per clienti e lead',
                  'Gestione progetti e task',
                  'Fatturazione elettronica',
                  'Preventivi e contratti',
                  'Calendario integrato',
                  'Email e WhatsApp',
                  'Automazioni AI'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* TimeTracker Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">TimeTracker</h3>
              <ul className="space-y-4">
                {[
                  'Timbratura con geolocalizzazione',
                  'Gestione commesse e cantieri',
                  'Tracciamento ore lavoro',
                  'Esportazione per commercialista',
                  'Report ore per progetto',
                  'Notifiche automatiche',
                  'Multi-device (iOS, Android, Web)'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a iniziare con il Bundle?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            7 giorni di prova gratuita, poi risparmia il 15% per il primo anno
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#calculator"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Calcola il tuo prezzo
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition-colors border-2 border-white"
            >
              Vedi tutti i piani
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Domande Frequenti</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Per quanto tempo vale lo sconto del 15%?',
                a: 'Lo sconto del 15% è valido per i primi 12 mesi di abbonamento. Dal secondo anno in poi si applica il prezzo standard.'
              },
              {
                q: 'Posso cambiare il numero di dipendenti in TimeTracker?',
                a: 'Sì, puoi aggiungere o rimuovere dipendenti in qualsiasi momento. Il prezzo viene aggiustato proporzionalmente al numero di dipendenti attivi.'
              },
              {
                q: 'Posso aggiungere solo Flow o solo TimeTracker in seguito?',
                a: 'Sì, se acquisti il Bundle puoi utilizzare sia Flow che TimeTracker separatamente o entrambi. Lo sconto si applica comunque.'
              },
              {
                q: 'Il periodo di prova è davvero gratuito?',
                a: 'Sì, i primi 7 giorni sono completamente gratuiti. Non ti verrà addebitato nulla fino alla fine del periodo di prova.'
              },
              {
                q: 'Posso cancellare in qualsiasi momento?',
                a: 'Sì, puoi cancellare l\'abbonamento in qualsiasi momento dalla tua area riservata. Non ci sono vincoli o penali.'
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
