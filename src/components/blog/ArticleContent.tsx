'use client';

import { motion } from 'framer-motion';

interface ArticleContentProps {
  html: string;
}

export default function ArticleContent({ html }: ArticleContentProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 }}
      className="flex-1 min-w-0"
    >
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </motion.article>
  );
}
