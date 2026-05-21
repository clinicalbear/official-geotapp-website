'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

/**
 * Global site analytics — tracks scroll depth, section visibility,
 * CTA clicks, and engagement across all pages (site + blog articles).
 * Drop into the root layout once — no per-page changes needed.
 */
export default function SiteAnalytics() {
  const pathname = usePathname();
  const scrollMilestones = useRef(new Set<number>());
  const sectionTimers = useRef<Map<string, number>>(new Map());
  const pageLoadTime = useRef(Date.now());

  useEffect(() => {
    // Reset on navigation
    scrollMilestones.current.clear();
    sectionTimers.current.clear();
    pageLoadTime.current = Date.now();

    const isBlog = pathname.includes('/blog/') && pathname.split('/').length > 3;
    const pageType = isBlog ? 'blog_article' : 'site_page';
    const pagePath = pathname;

    // ─── 1. Scroll depth tracking ───
    let maxScroll = 0;
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((window.scrollY / docHeight) * 100);
      if (pct > maxScroll) maxScroll = pct;
      for (const milestone of [25, 50, 75, 90]) {
        if (pct >= milestone && !scrollMilestones.current.has(milestone)) {
          scrollMilestones.current.add(milestone);
          trackEvent('scroll_depth', { depth: milestone.toString(), page: pagePath, type: pageType });
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ─── 2. Section visibility tracking (IntersectionObserver) ───
    // Track H2 sections in articles + named sections on landing pages
    const sectionStartTimes = new Map<string, number>();
    const sectionTotalTime = new Map<string, number>();
    const reportedSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          const sectionId = el.id || el.textContent?.slice(0, 40)?.trim() || 'unknown';

          if (entry.isIntersecting) {
            sectionStartTimes.set(sectionId, Date.now());
          } else if (sectionStartTimes.has(sectionId)) {
            const elapsed = (Date.now() - sectionStartTimes.get(sectionId)!) / 1000;
            sectionStartTimes.delete(sectionId);
            const total = (sectionTotalTime.get(sectionId) || 0) + elapsed;
            sectionTotalTime.set(sectionId, total);

            // Report when user leaves section (if spent >2s = real engagement)
            if (total >= 2 && !reportedSections.has(sectionId)) {
              reportedSections.add(sectionId);
              trackEvent('section_engaged', {
                section: sectionId.slice(0, 50),
                seconds: Math.round(total).toString(),
                page: pagePath,
                type: pageType,
              });
            }
          }
        }
      },
      { threshold: 0.3 } // 30% visible counts as "in view"
    );

    // Observe H2s (blog articles) and sections with id (landing pages)
    requestAnimationFrame(() => {
      const headings = document.querySelectorAll('h2');
      headings.forEach((h) => observer.observe(h));

      const sections = document.querySelectorAll('section[id], [data-section]');
      sections.forEach((s) => observer.observe(s));
    });

    // ─── 3. CTA click tracking (event delegation) ───
    const ctaPatterns = /trial|pricing|prezzi|contact|contatt|demo|come-funziona|how-it-works|wie-es-funktioniert|comment-ca-marche|inizia|start|testen|essai|prova|gratis|free|kostenlos|gratuit/i;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      const button = target.closest('button');
      const el = anchor || button;
      if (!el) return;

      const text = el.textContent?.trim().slice(0, 60) || '';
      const href = anchor?.getAttribute('href') || '';
      const isCta = ctaPatterns.test(text) || ctaPatterns.test(href);
      const isInternal = href.startsWith('/') || href.includes('geotapp.com');

      if (isCta) {
        trackEvent('cta_click', {
          text: text.slice(0, 50),
          href: href.slice(0, 100),
          page: pagePath,
          type: pageType,
        });
      } else if (anchor && !isInternal && href.startsWith('http')) {
        trackEvent('outbound_click', {
          text: text.slice(0, 50),
          href: href.slice(0, 100),
          page: pagePath,
        });
      }
    };
    document.addEventListener('click', handleClick);

    // ─── 4. Page engagement summary on leave ───
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        const timeOnPage = Math.round((Date.now() - pageLoadTime.current) / 1000);
        if (timeOnPage >= 5) {
          trackEvent('page_engagement', {
            page: pagePath,
            type: pageType,
            time_seconds: timeOnPage.toString(),
            max_scroll: maxScroll.toString(),
            sections_seen: reportedSections.size.toString(),
          });
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [pathname]);

  return null; // No UI — pure tracking
}
