'use client';

import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Database, Smartphone, Globe } from 'lucide-react';

export default function FeaturesPage() {
  return (
    <div className="bg-background min-h-screen pt-40 pb-20">

      <section className="px-6 text-center mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Potenza Sotto il Cofano.
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed font-light max-w-2xl mx-auto">
            Non costruiamo giocattoli. GeoTapp è una piattaforma enterprise concepita per scalare. Ecco le tecnologie che rendono possibile la magia.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {[
            {
              icon: Smartphone,
              title: 'Offline-First Architecture',
              desc: 'La connessione cade, il lavoro no. Abbiamo costruito un database locale sincronizzato (CRDT) che vive dentro l\'app. I tuoi tecnici possono lavorare in un bunker sotterraneo; non appena vedranno uno specchio di cielo, i dati si allineeranno silenziosamente col cloud.'
            },
            {
              icon: Shield,
              title: 'Military-Grade Encryption',
              desc: 'Dormi sonni tranquilli. Utilizziamo la crittografia AES-256 a riposo e TLS 1.3 in transito. Anche se un attaccante intercettasse i tuoi dati, vedrebbe solo rumore bianco. La privacy non è solo una checkbox legale, è matematica.'
            },
            {
              icon: Zap,
              title: 'Real-Time WebSocket',
              desc: 'Basta premere F5. Grazie ai WebSocket, le informazioni viaggiano istantaneamente. Se un tecnico chiude un ticket a Roma, il manager a Milano vede il pallino diventare verde nello stesso millisecondo. È come essere ovunque contemporaneamente.'
            },
            {
              icon: Layers,
              title: 'Headless CMS Integration',
              desc: 'Il contenuto è liquido. La nostra architettura headless disaccoppia i dati dalla presentazione. Questo significa che puoi pubblicare un articolo sul blog, spararlo sull\'app mobile e inviarlo via newsletter con un solo click. '
            },
            {
              icon: Database,
              title: 'Scalable Data Lake',
              desc: 'Da 100 a 100 milioni di record senza battere ciglio. Utilizziamo PostgreSQL partizionato per gestire volumi di dati massicci senza rallentamenti. Il tuo storico è prezioso; noi lo conserviamo per sempre, accessibile in un istante.'
            },
            {
              icon: Globe,
              title: 'Global CDN Edge',
              desc: 'La velocità è geografica. I nostri asset statici sono replicati in 300+ data center nel mondo. Che il tuo cliente sia a New York o a Tokyo, il tuo sito caricherà come se il server fosse nella stanza accanto.'
            }
          ].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6">
                <div className="mt-1 shrink-0 p-4 rounded-2xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-black transition-all">
                  <feat.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">{feat.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-light text-lg">
                    {feat.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
