'use client';

import './l-page.css';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Database, Smartphone, ArrowRight } from 'lucide-react';
import { getDictionary } from '@/lib/i18n/dictionaries';
import {
  DEFAULT_LOCALE,
  getLocaleFromPathname,
} from '@/lib/i18n/locale-routing';

export default function LoginPage() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPathname(pathname) ?? DEFAULT_LOCALE;
  const commonDict = getDictionary(currentLocale);
  const dict = commonDict.login_hub;

  return (
    <div className="lp-l lp-login">
      <section className="ph" style={{ padding: '150px 0 70px' }}>
        <div className="w" style={{ textAlign: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ margin: '0 auto', maxWidth: '20ch' }}
            dangerouslySetInnerHTML={{ __html: dict.title }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lede"
            style={{ margin: '26px auto 0' }}
          >
            {dict.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="sec">
        <div className="wn">
          <div className="grid2">
            {/* Flow Card — link identico a prima, cambia solo il vestito */}
            <motion.a
              href={`${process.env.NEXT_PUBLIC_FLOW_URL || '#'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="crd r-l"
            >
              <div className="crd-i" style={{ background: 'rgba(59,174,224,.12)', color: '#3BAEE0' }}>
                <Database size={40} />
              </div>
              <h2>GeoTapp FLOW</h2>
              <p>{dict.flow.desc}</p>
              <div className="crd-cta" style={{ color: '#3BAEE0' }}>
                {dict.flow.btn}
                <ArrowRight size={18} />
              </div>
            </motion.a>

            {/* TimeTracker Card — link identico a prima, cambia solo il vestito */}
            <motion.a
              href={`${process.env.NEXT_PUBLIC_TIMETRACKER_URL || '#'}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="crd r-r"
            >
              <div className="crd-i" style={{ background: 'rgba(143,196,54,.14)', color: '#5c8a1f' }}>
                <Smartphone size={40} />
              </div>
              <h2>GeoTapp TimeTracker</h2>
              <p>{dict.timetracker.desc}</p>
              <div className="crd-cta" style={{ color: '#0E0E0C' }}>
                {dict.timetracker.btn}
                <ArrowRight size={18} />
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
