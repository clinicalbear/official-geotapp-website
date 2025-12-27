'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Come l\'IA sta cambiando il lavoro sul campo',
    date: '12 Dicembre 2025',
    category: 'Vision',
    excerpt: 'Non si tratta di sostituire i tecnici con i robot. Si tratta di dare ai tecnici dei superpoteri. Scopri come l\'analisi predittiva sta prevenendo i guasti prima che accadano.',
    slug: '#'
  },
  {
    title: 'La morte del "foglio presenze" cartaceo',
    date: '5 Dicembre 2025',
    category: 'Gestione',
    excerpt: 'Un pezzo di carta nel 2025 non è tradizione, è un rischio. Analizziamo i costi nascosti della gestione manuale e come la digitalizzazione ripaga l\'investimento in meno di 3 mesi.',
    slug: '#'
  },
  {
    title: 'Guida alla sopravvivenza SEO nel 2026',
    date: '28 Novembre 2025',
    category: 'Marketing',
    excerpt: 'Google Gemini ha cambiato tutto. Le keyword non bastano più. Ecco perché il focus deve spostarsi sull\'intento di ricerca e sulla qualità del contenuto (e come Zenith ti aiuta a farlo).',
    slug: '#'
  }
];

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen pt-40 pb-20 px-6">

      <section className="container mx-auto max-w-4xl text-center mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Pensieri e Scintille.
          </h1>
          <p className="text-xl text-text-secondary font-light">
            Non scriviamo per riempire pagine. Scriviamo per condividere ciò che impariamo costruendo il futuro del lavoro.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto max-w-4xl space-y-12">
        {blogPosts.map((post, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="flex flex-col md:flex-row gap-8 items-baseline border-b border-white/5 pb-10 hover:border-white/20 transition-colors">
              <div className="md:w-1/4">
                <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">{post.category}</span>
                <span className="text-text-muted text-sm font-mono">{post.date}</span>
              </div>
              <div className="md:w-3/4">
                <h2 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed font-light mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                  Leggi l'articolo <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {/* Newsletter simple */}
      <section className="container mx-auto max-w-2xl text-center mt-32 pt-20 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white mb-4">Rimani nel loop</h2>
        <p className="text-text-secondary mb-8 font-light">Niente spam, solo aggiornamenti di valore sul prodotto e sul settore.</p>
        <div className="flex gap-4">
          <input type="email" placeholder="La tua email migliore" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
          <button className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-primary transition-colors">Iscriviti</button>
        </div>
      </section>

    </div>
  );
}
