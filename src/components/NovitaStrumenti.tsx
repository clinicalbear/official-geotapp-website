import Link from 'next/link';
import './novita-strumenti.css';
import type { AppLocale } from '@/lib/i18n/config';
import { localizePath } from '@/lib/i18n/locale-routing';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { SettoreSlug } from '@/content/settori/types';
import { getNovitaCopy } from '@/content/settori/novita';
import { IMPIANTI_RIMANDI, SETTORE_TOOLS, TOOL_SHOTS, shotSrc } from '@/content/settori/novita/registry';
import type { NovitaCopy, ToolKey } from '@/content/settori/novita/types';
import NovitaShot from './NovitaShot';

const FLOW = { w: 1440, h: 813 };
const PHONE = { w: 540, h: 1202 };

function alts(tpl: string, tool: string, i: number, n: number) {
  const a = tpl.replace('{tool}', tool);
  return n > 1 ? `${a} (${i + 1}/${n})` : a;
}

function Tool({ k, copy, locale }: { k: ToolKey; copy: NovitaCopy; locale: AppLocale }) {
  const t = copy.tools[k];
  const shots = TOOL_SHOTS[k];
  const wide = k === 'emergenze';
  const flowFig = (id: string, i: number, withCaption: boolean) => (
    <NovitaShot
      key={id}
      src={shotSrc(locale, id)}
      alt={copy.shots[id] ?? alts(copy.ui.altFlow, t.title, i, shots.flow.length)}
      width={FLOW.w}
      height={FLOW.h}
      caption={withCaption ? copy.shots[id] : undefined}
    />
  );
  const phoneFig = (id: string, i: number, withCaption: boolean) => (
    <NovitaShot
      key={id}
      src={shotSrc(locale, id)}
      alt={copy.shots[id] ?? alts(copy.ui.altPhone, t.title, i, shots.phone.length)}
      width={PHONE.w}
      height={PHONE.h}
      caption={withCaption ? copy.shots[id] : undefined}
    />
  );
  return (
    <article className={`nv-tool r${wide ? ' nv-wide' : ''}`} id={`strumento-${k}`}>
      <div>
        <h3>{t.title}</h3>
        <p>{t.body}</p>
        {t.note ? <p className="nv-note">{t.note}</p> : null}
        {shots.phone.length === 0 ? <p className="nv-flowonly">{copy.ui.flowOnly}</p> : null}
      </div>
      {wide ? (
        <div>
          <div className="nv-gal-flow">{shots.flow.map((id, i) => flowFig(id, i, true))}</div>
          <div className="nv-gal-phone">{shots.phone.map((id, i) => phoneFig(id, i, true))}</div>
        </div>
      ) : (
        <div className="nv-shots">
          <div className="nv-flowcol">{shots.flow.map((id, i) => flowFig(id, i, false))}</div>
          {shots.phone.length > 0 ? (
            <div className="nv-phonecol">{shots.phone.map((id, i) => phoneFig(id, i, false))}</div>
          ) : null}
        </div>
      )}
    </article>
  );
}

/**
 * Sezione "nuovi strumenti" di una pagina di settore. Server component: i testi per lingua
 * restano sul server (la pagina di settore e' un componente client e li riceve gia' resi).
 */
export default async function NovitaStrumenti({ settore, locale }: { settore: SettoreSlug; locale: AppLocale }) {
  const def = SETTORE_TOOLS[settore];
  if (!def) return null;
  const copy = await getNovitaCopy(locale);
  const sec = copy.sections[def.section];
  const dict = getDictionary(locale) as any;
  return (
    <section className="sec nv-novita" id="nuovi-strumenti">
      <div className="w">
        <p className="kk k r">{copy.ui.kicker}</p>
        <h2 className="r" style={{ maxWidth: '24ch' }}>{sec.title}</h2>
        <p className="nv-intro r d1">{sec.intro}</p>
        {def.tools.map((k) => (
          <Tool key={k} k={k} copy={copy} locale={locale} />
        ))}
        {sec.outro ? <p className="nv-intro r">{sec.outro}</p> : null}
        {def.section === 'impianti' ? (
          <p className="nv-links r">
            <span>{copy.ui.seeAlso}</span>
            {IMPIANTI_RIMANDI.map((s) => (
              <Link key={s} href={localizePath(`/settori/${s}`, locale)}>
                {dict?.navbar?.sectors?.[s] ?? s}
              </Link>
            ))}
          </p>
        ) : null}
      </div>
    </section>
  );
}
