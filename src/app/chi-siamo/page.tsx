'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lock, Heart } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pt-40 pb-24">

      {/* Hero */}
      <section className="px-6 text-center mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-4xl"
        >
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-6 inline-block">La Nostra Storia</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Nati sul Campo,<br />Non in un Ufficio.
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light text-balance mx-auto">
            GeoTapp non è stata inventata da investitori o analisti. È nata dalla frustrazione reale di chi lavora ogni giorno tra scadenze, cantieri e clienti esigenti.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-6 max-w-3xl mb-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8 text-lg md:text-xl text-text-secondary leading-loose font-light border-l border-white/10 pl-8 md:pl-12"
        >
          <p>
            Era il 2024. Mike Petraroli, il nostro fondatore, lavorava come dipendente e aveva un problema apparentemente banale ma incredibilmente costoso:
            <span className="text-white font-medium"> dimostrare il proprio lavoro.</span>
          </p>
          <p>
            A fine mese, i conti delle ore non tornavano mai. Gli interventi fatti di corsa tra un cliente e l'altro venivano dimenticati.
            La carta si perdeva, i messaggi WhatsApp venivano sepolti. Era un'emorragia silenziosa di tempo e denaro.
          </p>
          <p>
            Cercò una soluzione. Trovò solo software complessi, costosi, pieni di grafici inutili e poveri di sostanza.
            Software fatti da chi non aveva mai timbrato un cartellino o emesso una fattura in emergenza dal furgone.
          </p>
          <p>
            Così decise di costruirselo da solo.
          </p>
          <p className="text-white font-medium text-2xl pt-4">
            "Voglio un tasto per iniziare, uno per finire, e un tasto per farmi pagare."
          </p>
          <p>
            Quella semplicità radicale è diventata il DNA di GeoTapp. Oggi siamo una suite completa, ma lo spirito è rimasto lo stesso:
            risolvere problemi veri, subito, senza fronzoli.
          </p>
        </motion.div>
      </section>

      {/* Values Grid */}
      <section className="container mx-auto px-6 max-w-6xl mb-32">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Target,
              title: 'Essenzialità',
              desc: 'Odiamo le feature inutili. Se una funzione non ti fa risparmiare tempo o guadagnare soldi, non la troverai in GeoTapp. Ogni pixel deve avere uno scopo.'
            },
            {
              icon: Users,
              title: 'Trasparenza',
              desc: 'Niente costi nascosti, niente lock-in contrattuali trappola. Crediamo che dovresti restare con noi perché il software funziona, non perché sei obbligato.'
            },
            {
              icon: Lock,
              title: 'Rispetto',
              desc: 'I dati dei tuoi dipendenti e dei tuoi clienti sono sacri. Non li vendiamo, non li analizziamo per il marketing. La privacy è un diritto, non un\'opzione.'
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary mb-4">
                <item.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team CTA */}
      <section className="container mx-auto px-6 text-center">
        <div className="p-12 md:p-24 rounded-3xl bg-white/[0.02] border border-white/5">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">Unisciti alla Rivoluzione Semplice</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12 font-light">
            Non siamo una Big Tech irraggiungibile. Siamo persone reali che costruiscono software per persone reali.
          </p>
          <a href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-primary transition-colors inline-block text-lg">
            Scrivici un Messaggio
          </a>
        </div>
      </section>

    </div>
  );
}
