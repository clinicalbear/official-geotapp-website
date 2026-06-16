'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ArticleHeroProps {
  title: string;
  image: string | null;
  categories: Array<{ slug: string; name: string }>;
  date: string;
  readingTime: number;
  locale: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  // TimeTracker — orange
  'gps': '#F97316',
  'tracking': '#F97316',
  'geolocalizzazione': '#F97316',
  'timbrature': '#F97316',
  'presenze': '#F97316',
  // Flow — purple
  'gestione': '#8B5CF6',
  'operazioni': '#8B5CF6',
  'business': '#8B5CF6',
  'software': '#8B5CF6',
  // Verifier — green
  'sicurezza': '#22C55E',
  'security': '#22C55E',
  'verifica': '#22C55E',
  'prove': '#22C55E',
};
const DEFAULT_COLOR = '#8FC436';

function getCategoryColor(categories: Array<{ slug: string; name: string }>): string {
  for (const cat of categories) {
    const slug = cat.slug.toLowerCase().replace(/-[a-z]{2}$/, '');
    if (CATEGORY_COLORS[slug]) return CATEGORY_COLORS[slug];
  }
  return DEFAULT_COLOR;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: 'easeOut' },
  }),
};

export default function ArticleHero({
  title,
  image,
  categories,
  date,
  readingTime,
  locale,
}: ArticleHeroProps) {
  const categoryColor = getCategoryColor(categories);
  const primaryCategory = categories[0];
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const formattedDate = new Date(date).toLocaleDateString(locale, { timeZone: 'UTC',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section ref={heroRef} className="relative w-screen min-h-[calc(55vh_+_72px)] md:min-h-[calc(65vh_+_88px)] -mt-[72px] md:-mt-[88px] overflow-hidden">
      {/* Background image with parallax or fallback gradient */}
      {image ? (
        <motion.div className="absolute inset-0" style={{ y: imageY }}>
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover scale-125"
            sizes="100vw"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
      )}

      {/* Gradient overlay — stronger for title readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 px-4 md:px-8">
        {/* Categoria — stile badge homepage (no chip) */}
        {primaryCategory && (
          <motion.span
            className="geo-status mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'linear-gradient(135deg,#8FC436,#3BAEE0)' }} />
            <span className="text-white geo-underline" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>{primaryCategory.name}</span>
          </motion.span>
        )}

        {/* Title */}
        <motion.h1
          className="font-display font-bold text-4xl md:text-5xl lg:text-6xl max-w-4xl text-center mb-4"
          style={{ color: '#8FC436', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          {title}
        </motion.h1>

        {/* Meta line */}
        <motion.p
          className="text-sm text-white/70"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          {formattedDate} &middot; {readingTime} min
        </motion.p>
      </div>
    </section>
  );
}
