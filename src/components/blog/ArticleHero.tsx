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

  const formattedDate = new Date(date).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section ref={heroRef} className="relative w-screen min-h-[40vh] md:min-h-[60vh] overflow-hidden">
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

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)',
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-16 px-4">
        {/* Category badge */}
        {primaryCategory && (
          <motion.span
            className="px-3 py-1 rounded-full text-xs font-semibold text-white mb-4"
            style={{ backgroundColor: categoryColor }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            {primaryCategory.name}
          </motion.span>
        )}

        {/* Title */}
        <motion.h1
          className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl max-w-4xl text-center mb-4"
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
