'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Database, Smartphone, Globe } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { AppLocale } from '@/lib/i18n/config';

export default function FeaturesPage() {
  const { locale } = useParams<{ locale: string }>();
  const t = getDictionary(locale as AppLocale).features;

  const feats = [
    { icon: Smartphone, title: t.offline_title, desc: t.offline_desc },
    { icon: Shield, title: t.encryption_title, desc: t.encryption_desc },
    { icon: Zap, title: t.realtime_title, desc: t.realtime_desc },
    { icon: Layers, title: t.cms_title, desc: t.cms_desc },
    { icon: Database, title: t.datalake_title, desc: t.datalake_desc },
    { icon: Globe, title: t.cdn_title, desc: t.cdn_desc },
  ];

  return (
    <div className="bg-background min-h-screen pt-40 pb-20">
      <section className="px-6 text-center mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            {t.title}
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed font-light max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {feats.map((feat, i) => (
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
                  <h3 className="text-2xl font-bold text-white mb-4 font-display">
                    {feat.title}
                  </h3>
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
